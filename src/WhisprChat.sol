// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";
import "@chainlink/contracts/src/v0.8/automation/interfaces/AutomationCompatibleInterface.sol";
import "../contracts/src/IEngagementRewards.sol";

// Interface for ProofOfHuman contract
interface IProofOfHuman {
    function isFemaleVerified(address user) external view returns (bool);
}

/**
 * @title ChatApp
 * @dev A smart contract for peer-to-peer and group messaging with Chainlink oracle integration
 * @notice This contract allows users to send messages, create groups, and receive automated price feeds
 */
contract WhisprChat is AutomationCompatibleInterface, Ownable {
    // Constants for gas optimization and security
    uint256 public constant MAX_GROUP_SIZE = 100;
    uint256 public constant MAX_MESSAGE_LENGTH = 1000;

    // Role enum for group permissions
    enum Role { Member, Moderator, Admin }

    // Message struct for individual conversations
    struct Message {
        address sender;
        address receiver;
        string content;
        uint256 timestamp;
    }

    // Group struct for group conversations
    struct Group {
        string name;
        string avatarHash;
        address[] members;
        mapping(address => Role) roles;
    }

    // Group Invite struct
    struct GroupInvite {
        address invitee;
        address inviter;
        uint256 timestamp;
    }

    // Mapping from conversation ID to array of messages
    mapping(bytes32 => Message[]) private conversations;

    // Mapping from group ID to Group struct
    mapping(uint256 => Group) public groups;

    // Mapping from group ID to array of messages
    mapping(uint256 => Message[]) private groupConversations;

    // Mapping from group ID to pending invites
    mapping(uint256 => GroupInvite[]) public groupInvites;

    // Mapping for muted users in groups (groupId => user => isMuted)
    mapping(uint256 => mapping(address => bool)) public mutedUsers;

    // Mapping for pinned message indices in groups (groupId => array of message indices)
    mapping(uint256 => uint256[]) public pinnedMessages;

    // Counter for group IDs
    uint256 public groupCounter;

    // Chainlink Price Feed addresses on Sepolia
    AggregatorV3Interface internal btcUsdPriceFeed;
    AggregatorV3Interface internal ethUsdPriceFeed;
    AggregatorV3Interface internal btcEthPriceFeed;
    AggregatorV3Interface internal bnbEthPriceFeed;

    // Oracle Bot address (using address(0) to represent Oracle Bot)
    address constant ORACLE_BOT = address(0);

    // Automation variables
    uint256 public lastTimeStamp;
    uint256 public interval;
    uint256 public defaultGroupId = 1; // Default group for oracle messages

    // Price feed names for formatting
    string[4] public feedNames = ["BTC/USD", "ETH/USD", "BTC/ETH", "BNB/ETH"];

    // Events
    event MessageSent(address indexed from, address indexed to, string message, uint256 timestamp);
    event GroupCreated(uint256 indexed groupId, string name, address indexed creator);
    event GroupMessageSent(uint256 indexed groupId, address indexed sender, string message, uint256 timestamp);
    event OraclePricesPosted(uint256 indexed groupId, uint256 timestamp);
    event GroupInviteSent(uint256 indexed groupId, address indexed invitee, address indexed inviter);
    event GroupInviteAccepted(uint256 indexed groupId, address indexed invitee);
    event GroupInviteDeclined(uint256 indexed groupId, address indexed invitee);

    // Modifiers
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    modifier onlyVerifiedFemale() {
        require(proofOfHuman.isFemaleVerified(msg.sender), "Only verified females can perform this action");
        _;
    }

    // Engagement Rewards
    IEngagementRewards public immutable engagementRewards;

    // Proof of Human contract for gender verification
    IProofOfHuman public immutable proofOfHuman;

    // Owner of the contract
    address public owner;

    /**
     * @dev Constructor to initialize Chainlink price feeds, automation interval, Engagement Rewards, and Proof of Human
     * @param _interval Automation interval in seconds
     * @param _engagementRewards Address of the Engagement Rewards contract
     * @param _proofOfHuman Address of the Proof of Human contract
     */
    constructor(uint256 _interval, address _engagementRewards, address _proofOfHuman) {
        owner = msg.sender;
        // Initialize Chainlink price feeds for Sepolia testnet
        // Note: Update these addresses for mainnet deployment
        btcUsdPriceFeed = AggregatorV3Interface(0x007a22900c13C281aF5a49D9fd2C5d849BaEa0c1);
        ethUsdPriceFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
        btcEthPriceFeed = AggregatorV3Interface(0xCfe54B5c468301f0C6AE4a63F9b6C1d28932D7dc);
        bnbEthPriceFeed = AggregatorV3Interface(0x9Ae3a6b1E5F0c5C60b675ECa8d7edD0Eed417F07);

        interval = _interval;
        lastTimeStamp = block.timestamp;

        engagementRewards = IEngagementRewards(_engagementRewards);
        proofOfHuman = IProofOfHuman(_proofOfHuman);
    }

    /**
     * @dev Send a message to another user
     * @param to The address of the receiver
     * @param content The message content
     */
    function sendMessage(address to, string memory content) external onlyVerifiedFemale {
        _sendMessage(to, content);
    }

    /**
     * @dev Send a message and claim engagement reward
     * @param to The address of the receiver
     * @param content The message content
     * @param inviter The address of the inviter (optional)
     * @param validUntilBlock Block number until which the signature is valid
     * @param signature The user's signature for registration (only needed for first claim)
     */
    function sendMessageWithReward(
        address to,
        string memory content,
        address inviter,
        uint256 validUntilBlock,
        bytes memory signature
    ) external onlyVerifiedFemale {
        _sendMessage(to, content);

        // Try to claim engagement reward
        try engagementRewards.appClaim(
            msg.sender,
            inviter,
            validUntilBlock,
            signature
        ) returns (bool success) {
            // Reward claimed successfully or failed silently
        } catch {
            // Ignore errors to ensure message is sent even if reward fails
        }
    }

    /**
     * @dev Claim engagement reward standalone (without sending message)
     * @param inviter The address of the inviter (optional)
     * @param validUntilBlock Block number until which the signature is valid
     * @param signature The user's signature for registration (only needed for first claim)
     */
    function claimEngagementReward(
        address inviter,
        uint256 validUntilBlock,
        bytes memory signature
    ) external onlyVerifiedFemale {
        engagementRewards.appClaim(
            msg.sender,
            inviter,
            validUntilBlock,
            signature
        );
    }

    function _sendMessage(address to, string memory content) internal {
        require(to != address(0), "Invalid receiver address");
        require(bytes(content).length > 0, "Message content cannot be empty");
        require(bytes(content).length <= MAX_MESSAGE_LENGTH, "Message content too long");
        require(to != msg.sender, "Cannot send message to yourself");

        // Generate conversation ID
        bytes32 conversationId = getConversationId(msg.sender, to);

        // Create and store message
        Message memory newMessage = Message({
            sender: msg.sender,
            receiver: to,
            content: content,
            timestamp: block.timestamp
        });

        conversations[conversationId].push(newMessage);

        // Emit event
        emit MessageSent(msg.sender, to, content, block.timestamp);
    }

    /**
     * @dev Get conversation between two users
     * @param user1 First user address
     * @param user2 Second user address
     * @return Array of messages in the conversation
     */
    function getConversation(address user1, address user2) external view returns (Message[] memory) {
        bytes32 conversationId = getConversationId(user1, user2);
        return conversations[conversationId];
    }

    /**
     * @dev Create a new group
     * @param name The name of the group
     * @param avatarHash The IPFS hash for the group avatar
     * @param members Array of member addresses
     * @return groupId The ID of the created group
     */
    function createGroup(string memory name, string memory avatarHash, address[] memory members) external onlyVerifiedFemale returns (uint256) {
        require(bytes(name).length > 0, "Group name cannot be empty");
        require(members.length > 0, "Group must have at least one member");
        require(members.length <= MAX_GROUP_SIZE, "Group size exceeds maximum allowed");

        // Increment group counter
        groupCounter++;
        uint256 groupId = groupCounter;

        // Add creator to members if not already included
        bool creatorIncluded = false;
        for (uint256 i = 0; i < members.length; i++) {
            require(members[i] != address(0), "Invalid member address");
            if (members[i] == msg.sender) {
                creatorIncluded = true;
            }
        }

        // Create members array with creator included
        address[] memory finalMembers;
        if (creatorIncluded) {
            finalMembers = members;
        } else {
            finalMembers = new address[](members.length + 1);
            finalMembers[0] = msg.sender;
            for (uint256 i = 0; i < members.length; i++) {
                finalMembers[i + 1] = members[i];
            }
        }

        // Create and store group
        groups[groupId] = Group({
            name: name,
            avatarHash: avatarHash,
            members: finalMembers
        });

        // Set membership mappings for efficient lookups
        for (uint256 i = 0; i < finalMembers.length; i++) {
            groupMembers[groupId][finalMembers[i]] = true;
            // Default role is Member (0), set creator as Admin
            if (finalMembers[i] == msg.sender) {
                groups[groupId].roles[msg.sender] = Role.Admin;
            }
        }

        // Emit event
        emit GroupCreated(groupId, name, msg.sender);

        return groupId;
    }

    /**
     * @dev Invite a user to join a group
     * @param groupId The ID of the group
     * @param invitee The address of the user to invite
     */
    function inviteToGroup(uint256 groupId, address invitee) external onlyVerifiedFemale {
        require(groupId > 0 && groupId <= groupCounter, "Invalid group ID");
        require(invitee != address(0), "Invalid invitee address");
        require(isGroupMember(groupId, msg.sender), "Only group members can invite");
        require(!isGroupMember(groupId, invitee), "User is already a member");
        require(invitee != msg.sender, "Cannot invite yourself");

        // Check if already invited
        GroupInvite[] storage invites = groupInvites[groupId];
        for (uint256 i = 0; i < invites.length; i++) {
            require(invites[i].invitee != invitee, "User already invited");
        }

        // Add invite
        invites.push(GroupInvite({
            invitee: invitee,
            inviter: msg.sender,
            timestamp: block.timestamp
        }));

        emit GroupInviteSent(groupId, invitee, msg.sender);
    }

    /**
     * @dev Accept an invite to join a group
     * @param groupId The ID of the group
     */
    function acceptInvite(uint256 groupId) external onlyVerifiedFemale {
        require(groupId > 0 && groupId <= groupCounter, "Invalid group ID");

        GroupInvite[] storage invites = groupInvites[groupId];
        bool found = false;
        uint256 index;
        for (uint256 i = 0; i < invites.length; i++) {
            if (invites[i].invitee == msg.sender) {
                found = true;
                index = i;
                break;
            }
        }
        require(found, "No pending invite found");

        // Add to members
        groups[groupId].members.push(msg.sender);

        // Remove invite
        invites[index] = invites[invites.length - 1];
        invites.pop();

        emit GroupInviteAccepted(groupId, msg.sender);
    }

    /**
     * @dev Decline an invite to join a group
     * @param groupId The ID of the group
     */
    function declineInvite(uint256 groupId) external onlyVerifiedFemale {
        require(groupId > 0 && groupId <= groupCounter, "Invalid group ID");

        GroupInvite[] storage invites = groupInvites[groupId];
        bool found = false;
        uint256 index;
        for (uint256 i = 0; i < invites.length; i++) {
            if (invites[i].invitee == msg.sender) {
                found = true;
                index = i;
                break;
            }
        }
        require(found, "No pending invite found");

        // Remove invite
        invites[index] = invites[invites.length - 1];
        invites.pop();

        emit GroupInviteDeclined(groupId, msg.sender);
    }

    /**
     * @dev Get pending invites for the caller
     * @return groupIds Array of group IDs with pending invites
     * @return inviters Array of inviters corresponding to the group IDs
     * @return timestamps Array of invite timestamps
     */
    function getMyInvites() external view returns (uint256[] memory groupIds, address[] memory inviters, uint256[] memory timestamps) {
        uint256 totalInvites = 0;
        for (uint256 groupId = 1; groupId <= groupCounter; groupId++) {
            GroupInvite[] memory invites = groupInvites[groupId];
            for (uint256 i = 0; i < invites.length; i++) {
                if (invites[i].invitee == msg.sender) {
                    totalInvites++;
                }
            }
        }

        groupIds = new uint256[](totalInvites);
        inviters = new address[](totalInvites);
        timestamps = new uint256[](totalInvites);

        uint256 index = 0;
        for (uint256 groupId = 1; groupId <= groupCounter; groupId++) {
            GroupInvite[] memory invites = groupInvites[groupId];
            for (uint256 i = 0; i < invites.length; i++) {
                if (invites[i].invitee == msg.sender) {
                    groupIds[index] = groupId;
                    inviters[index] = invites[i].inviter;
                    timestamps[index] = invites[i].timestamp;
                    index++;
                }
            }
        }
    }

    /**
     * @dev Send a message to a group
     * @param groupId The ID of the group
     * @param content The message content
     */
    function sendGroupMessage(uint256 groupId, string memory content) external onlyVerifiedFemale {
        require(groupId > 0 && groupId <= groupCounter, "Invalid group ID");
        require(bytes(content).length > 0, "Message content cannot be empty");
        require(bytes(content).length <= MAX_MESSAGE_LENGTH, "Message content too long");
        require(isGroupMember(groupId, msg.sender), "Not a member of this group");
        require(!mutedUsers[groupId][msg.sender], "You are muted in this group");

        // Create and store message
        Message memory newMessage = Message({
            sender: msg.sender,
            receiver: address(0), // No specific receiver for group messages
            content: content,
            timestamp: block.timestamp
        });

        groupConversations[groupId].push(newMessage);

        // Emit event
        emit GroupMessageSent(groupId, msg.sender, content, block.timestamp);
    }

    /**
     * @dev Get group conversation messages
     * @param groupId The ID of the group
     * @return Array of messages in the group conversation
     */
    function getGroupConversation(uint256 groupId) external view returns (Message[] memory) {
        require(groupId > 0 && groupId <= groupCounter, "Invalid group ID");
        require(isGroupMember(groupId, msg.sender), "Not a member of this group");
        
        return groupConversations[groupId];
    }

    /**
     * @dev Get group details
     * @param groupId The ID of the group
     * @return name The group name
     * @return avatarHash The group avatar hash
     * @return members Array of member addresses
     */
    function getGroupDetails(uint256 groupId) external view returns (string memory name, string memory avatarHash, address[] memory members) {
        require(groupId > 0 && groupId <= groupCounter, "Invalid group ID");
        
        Group memory group = groups[groupId];
        return (group.name, group.avatarHash, group.members);
    }

    /**
     * @dev Check if an address is a member of a group
     * @param groupId The ID of the group
     * @param user The address to check
     * @return True if the user is a member, false otherwise
     */
    function isGroupMember(uint256 groupId, address user) public view returns (bool) {
        if (groupId == 0 || groupId > groupCounter) {
            return false;
        }
        return groupMembers[groupId][user];
    }

    /**
     * @dev Get the role of a user in a group
     * @param groupId The ID of the group
     * @param user The address to check
     * @return The role of the user
     */
    function getUserRole(uint256 groupId, address user) public view returns (Role) {
        require(groupId > 0 && groupId <= groupCounter, "Invalid group ID");
        require(isGroupMember(groupId, user), "Not a member of this group");
        return groups[groupId].roles[user];
    }

    /**
     * @dev Check if a user has admin or moderator permissions
     * @param groupId The ID of the group
     * @param user The address to check
     * @return True if the user has management permissions
     */
    function hasManagementPermissions(uint256 groupId, address user) public view returns (bool) {
        Role role = getUserRole(groupId, user);
        return role == Role.Admin || role == Role.Moderator;
    }

    /**
     * @dev Check if a user has admin permissions
     * @param groupId The ID of the group
     * @param user The address to check
     * @return True if the user is admin
     */
    function hasAdminPermissions(uint256 groupId, address user) public view returns (bool) {
        return getUserRole(groupId, user) == Role.Admin;
    }

    /**
     * @dev Assign a role to a user in a group (only admins can do this)
     * @param groupId The ID of the group
     * @param user The address of the user
     * @param role The role to assign
     */
    function assignRole(uint256 groupId, address user, Role role) external {
        require(groupId > 0 && groupId <= groupCounter, "Invalid group ID");
        require(isGroupMember(groupId, user), "User is not a member of this group");
        require(hasAdminPermissions(groupId, msg.sender), "Only admins can assign roles");
        require(role <= Role.Admin, "Invalid role");

        groups[groupId].roles[user] = role;
        emit RoleAssigned(groupId, user, role);
    }

    /**
     * @dev Remove a participant from a group (admins and moderators can do this)
     * @param groupId The ID of the group
     * @param participant The address of the participant to remove
     */
    function removeParticipant(uint256 groupId, address participant) external {
        require(groupId > 0 && groupId <= groupCounter, "Invalid group ID");
        require(isGroupMember(groupId, participant), "User is not a member of this group");
        require(hasManagementPermissions(groupId, msg.sender), "Insufficient permissions");
        require(participant != msg.sender || hasAdminPermissions(groupId, msg.sender), "Cannot remove yourself unless you are admin");
        require(getUserRole(groupId, participant) != Role.Admin || hasAdminPermissions(groupId, msg.sender), "Only admins can remove other admins");

        // Remove from members array
        address[] storage members = groups[groupId].members;
        for (uint256 i = 0; i < members.length; i++) {
            if (members[i] == participant) {
                members[i] = members[members.length - 1];
                members.pop();
                break;
            }
        }

        // Remove from mappings
        groupMembers[groupId][participant] = false;
        delete groups[groupId].roles[participant];
        delete mutedUsers[groupId][participant];

        emit ParticipantRemoved(groupId, participant);
    }

    /**
     * @dev Mute a user in a group (admins and moderators can do this)
     * @param groupId The ID of the group
     * @param user The address of the user to mute
     */
    function muteUser(uint256 groupId, address user) external {
        require(groupId > 0 && groupId <= groupCounter, "Invalid group ID");
        require(isGroupMember(groupId, user), "User is not a member of this group");
        require(hasManagementPermissions(groupId, msg.sender), "Insufficient permissions");

        mutedUsers[groupId][user] = true;
        emit UserMuted(groupId, user);
    }

    /**
     * @dev Unmute a user in a group (admins and moderators can do this)
     * @param groupId The ID of the group
     * @param user The address of the user to unmute
     */
    function unmuteUser(uint256 groupId, address user) external {
        require(groupId > 0 && groupId <= groupCounter, "Invalid group ID");
        require(isGroupMember(groupId, user), "User is not a member of this group");
        require(hasManagementPermissions(groupId, msg.sender), "Insufficient permissions");

        mutedUsers[groupId][user] = false;
        emit UserUnmuted(groupId, user);
    }

    /**
     * @dev Pin a message in a group (admins and moderators can do this)
     * @param groupId The ID of the group
     * @param messageIndex The index of the message to pin
     */
    function pinMessage(uint256 groupId, uint256 messageIndex) external {
        require(groupId > 0 && groupId <= groupCounter, "Invalid group ID");
        require(hasManagementPermissions(groupId, msg.sender), "Insufficient permissions");
        require(messageIndex < groupConversations[groupId].length, "Invalid message index");

        uint256[] storage pinned = pinnedMessages[groupId];
        // Check if already pinned
        for (uint256 i = 0; i < pinned.length; i++) {
            if (pinned[i] == messageIndex) {
                return; // Already pinned
            }
        }
        pinned.push(messageIndex);
        emit MessagePinned(groupId, messageIndex);
    }

    /**
     * @dev Unpin a message in a group (admins and moderators can do this)
     * @param groupId The ID of the group
     * @param messageIndex The index of the message to unpin
     */
    function unpinMessage(uint256 groupId, uint256 messageIndex) external {
        require(groupId > 0 && groupId <= groupCounter, "Invalid group ID");
        require(hasManagementPermissions(groupId, msg.sender), "Insufficient permissions");

        uint256[] storage pinned = pinnedMessages[groupId];
        for (uint256 i = 0; i < pinned.length; i++) {
            if (pinned[i] == messageIndex) {
                pinned[i] = pinned[pinned.length - 1];
                pinned.pop();
                emit MessageUnpinned(groupId, messageIndex);
                return;
            }
        }
        revert("Message not pinned");
    }

    /**
     * @dev Generate conversation ID from two addresses
     * @param user1 First user address
     * @param user2 Second user address
     * @return Conversation ID as bytes32
     */
    function getConversationId(address user1, address user2) public pure returns (bytes32) {
        // Ensure consistent ordering to generate same ID regardless of parameter order
        if (user1 < user2) {
            return keccak256(abi.encodePacked(user1, user2));
        } else {
            return keccak256(abi.encodePacked(user2, user1));
        }
    }

    /**
     * @dev Get the total number of groups created
     * @return The current group counter
     */
    function getTotalGroups() external view returns (uint256) {
        return groupCounter;
    }

    /**
     * @dev Get the latest price from a Chainlink price feed
     * @param feed The address of the price feed
     * @return The latest price as an integer
     */
    function getLatestPrice(address feed) public view returns (int) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(feed);
        (, int price, , , ) = priceFeed.latestRoundData();
        return price;
    }

    /**
     * @dev Post current prices from all feeds to a group as oracle messages
     * @param groupId The ID of the group to post prices to
     */
    function postPriceToGroup(uint256 groupId) public {
        require(groupId > 0 && groupId <= groupCounter, "Invalid group ID");

        // Get prices from all feeds
        int btcUsdPrice = getLatestPrice(address(btcUsdPriceFeed));
        int ethUsdPrice = getLatestPrice(address(ethUsdPriceFeed));
        int btcEthPrice = getLatestPrice(address(btcEthPriceFeed));
        int bnbEthPrice = getLatestPrice(address(bnbEthPriceFeed));

        // Format prices and create messages (BTC/USD and ETH/USD have 8 decimals, BTC/ETH and BNB/ETH have 18 decimals)
        string[4] memory priceMessages = [
            string(abi.encodePacked("BTC/USD = ", _intToString(btcUsdPrice / 1e8))),
            string(abi.encodePacked("ETH/USD = ", _intToString(ethUsdPrice / 1e8))),
            string(abi.encodePacked("BTC/ETH = ", _intToString(btcEthPrice / 1e18))),
            string(abi.encodePacked("BNB/ETH = ", _intToString(bnbEthPrice / 1e18)))
        ];

        // Post each price as a separate oracle message
        for (uint256 i = 0; i < 4; i++) {
            Message memory oracleMessage = Message({
                sender: ORACLE_BOT,
                receiver: address(0),
                content: priceMessages[i],
                timestamp: block.timestamp
            });

            groupConversations[groupId].push(oracleMessage);
            emit GroupMessageSent(groupId, ORACLE_BOT, priceMessages[i], block.timestamp);
        }

        emit OraclePricesPosted(groupId, block.timestamp);
    }

    /**
     * @dev Chainlink Automation checkUpkeep function
     * @return upkeepNeeded True if upkeep is needed
     * @return performData Data to pass to performUpkeep
     */
    function checkUpkeep(bytes calldata /* checkData */) external view override returns (bool upkeepNeeded, bytes memory performData) {
        upkeepNeeded = (block.timestamp - lastTimeStamp) > interval && groupCounter >= 1;
        performData = "";
    }

    /**
     * @dev Chainlink Automation performUpkeep function
     */
    function performUpkeep(bytes calldata /* performData */) external override {
        if ((block.timestamp - lastTimeStamp) > interval && groupCounter >= 1) {
            lastTimeStamp = block.timestamp;
            postPriceToGroup(defaultGroupId);
        }
    }

    /**
     * @dev Update the automation interval (only callable by contract owner)
     * @param _newInterval New interval in seconds
     */
    function updateInterval(uint256 _newInterval) external onlyOwner {
        interval = _newInterval;
    }

    /**
     * @dev Update the default group ID for oracle messages
     * @param _newDefaultGroupId New default group ID
     */
    function updateDefaultGroupId(uint256 _newDefaultGroupId) external onlyOwner {
        require(_newDefaultGroupId > 0 && _newDefaultGroupId <= groupCounter, "Invalid group ID");
        defaultGroupId = _newDefaultGroupId;
    }

    /**
     * @dev Helper function to convert int to string
     * @param _i Integer to convert
     * @return String representation of the integer
     */
    function _intToString(int _i) internal pure returns (string memory) {
        if (_i == 0) {
            return "0";
        }
        
        bool negative = _i < 0;
        uint256 temp = uint256(negative ? -_i : _i);
        uint256 digits;
        
        uint256 tempValue = temp;
        while (tempValue != 0) {
            digits++;
            tempValue /= 10;
        }
        
        bytes memory buffer = new bytes(negative ? digits + 1 : digits);
        uint256 index = buffer.length;
        
        while (temp != 0) {
            index--;
            buffer[index] = bytes1(uint8(48 + temp % 10));
            temp /= 10;
        }
        
        if (negative) {
            buffer[0] = "-";
        }
        
        return string(buffer);
    }

    /**
     * @dev Check if a message is from the Oracle Bot
     * @param sender The sender address to check
     * @return True if the message is from Oracle Bot
     */
    function isOracleMessage(address sender) public pure returns (bool) {
        return sender == ORACLE_BOT;
    }
}