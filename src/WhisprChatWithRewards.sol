// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";
import "@chainlink/contracts/src/v0.8/automation/interfaces/AutomationCompatibleInterface.sol";
import "./IEngagementRewards.sol";

/**
 * @title WhisprChat with GoodDollar Engagement Rewards
 * @dev A smart contract for messaging with integrated engagement rewards
 */
contract WhisprChatWithRewards is AutomationCompatibleInterface {
    // ... (keep all your existing structs and mappings)
    
    struct Message {
        address sender;
        address receiver;
        string content;
        uint256 timestamp;
    }

    struct Group {
        string name;
        string avatarHash;
        address[] members;
    }

    mapping(bytes32 => Message[]) private conversations;
    mapping(uint256 => Group) public groups;
    mapping(uint256 => Message[]) private groupConversations;
    uint256 public groupCounter;

    // Engagement Rewards Integration
    IEngagementRewards public immutable engagementRewards;
    
    // Track if user has claimed rewards through this contract
    mapping(address => bool) public hasClaimedReward;
    
    // Events
    event RewardClaimAttempted(address indexed user, address indexed inviter, bool success, string reason);
    event MessageSent(address indexed from, address indexed to, uint256 timestamp);

    constructor(address _engagementRewardsContract) {
        // Initialize engagement rewards contract
        // Use DEV: 0xb44fC3A592aDaA257AECe1Ae8956019EA53d0465 for testing
        // Use PROD: 0x25db74CF4E7BA120526fd87e159CF656d94bAE43 for production
        engagementRewards = IEngagementRewards(_engagementRewardsContract);
        
        // Initialize other variables
        groupCounter = 0;
    }

    /**
     * @dev Send a message and optionally claim engagement reward for first-time users
     * @param _receiver The address of the message receiver
     * @param _content The message content
     * @param _inviter The address of the user who invited the sender (0x0 if none)
     * @param _validUntilBlock Block number until which the signature is valid
     * @param _signature User's signature for claiming reward
     */
    function sendMessageWithReward(
        address _receiver,
        string memory _content,
        address _inviter,
        uint256 _validUntilBlock,
        bytes memory _signature
    ) external {
        require(_receiver != address(0), "Invalid receiver");
        require(bytes(_content).length > 0, "Empty message");

        // Try to claim reward for first-time users
        // Only attempt if inviter is provided and user hasn't claimed before
        if (_inviter != address(0) && !hasClaimedReward[msg.sender]) {
            _attemptRewardClaim(msg.sender, _inviter, _validUntilBlock, _signature);
        }

        // Send the message (main functionality)
        _sendMessage(msg.sender, _receiver, _content);
    }

    /**
     * @dev Send a regular message without reward claim
     */
    function sendMessage(address _receiver, string memory _content) external {
        require(_receiver != address(0), "Invalid receiver");
        require(bytes(_content).length > 0, "Empty message");
        
        _sendMessage(msg.sender, _receiver, _content);
    }

    /**
     * @dev Internal function to send a message
     */
    function _sendMessage(address _sender, address _receiver, string memory _content) internal {
        bytes32 conversationId = _getConversationId(_sender, _receiver);
        
        conversations[conversationId].push(Message({
            sender: _sender,
            receiver: _receiver,
            content: _content,
            timestamp: block.timestamp
        }));

        emit MessageSent(_sender, _receiver, block.timestamp);
    }

    /**
     * @dev Attempt to claim engagement reward
     * Uses try-catch to prevent reward claiming from blocking core functionality
     */
    function _attemptRewardClaim(
        address _user,
        address _inviter,
        uint256 _validUntilBlock,
        bytes memory _signature
    ) internal {
        try engagementRewards.appClaim(
            _user,
            _inviter,
            _validUntilBlock,
            _signature
        ) returns (bool success) {
            if (success) {
                hasClaimedReward[_user] = true;
                emit RewardClaimAttempted(_user, _inviter, true, "Success");
            } else {
                emit RewardClaimAttempted(_user, _inviter, false, "Claim returned false");
            }
        } catch Error(string memory reason) {
            emit RewardClaimAttempted(_user, _inviter, false, reason);
        } catch {
            emit RewardClaimAttempted(_user, _inviter, false, "Unknown error");
        }
    }

    /**
     * @dev Claim reward with custom percentages based on user achievements
     * Can be called separately from messaging
     */
    function claimRewardWithBonus(
        address _inviter,
        uint256 _validUntilBlock,
        bytes memory _signature,
        uint8 _userAndInviterPercentage,
        uint8 _userPercentage
    ) external {
        require(!hasClaimedReward[msg.sender], "Already claimed");
        require(_inviter != address(0), "Invalid inviter");

        try engagementRewards.appClaim(
            msg.sender,
            _inviter,
            _validUntilBlock,
            _signature,
            _userAndInviterPercentage,
            _userPercentage
        ) returns (bool success) {
            if (success) {
                hasClaimedReward[msg.sender] = true;
                emit RewardClaimAttempted(msg.sender, _inviter, true, "Success with bonus");
            } else {
                emit RewardClaimAttempted(msg.sender, _inviter, false, "Claim returned false");
            }
        } catch Error(string memory reason) {
            emit RewardClaimAttempted(msg.sender, _inviter, false, reason);
        } catch {
            emit RewardClaimAttempted(msg.sender, _inviter, false, "Unknown error");
        }
    }

    /**
     * @dev Calculate custom reward percentages based on user activity
     * Example: More active users get better rewards
     */
    function calculateRewardPercentages(address _user) public view returns (uint8 userAndInviterPercentage, uint8 userPercentage) {
        // Get user's message count (you'll need to implement message counting)
        uint256 messageCount = _getUserMessageCount(_user);
        
        // Base percentages
        userAndInviterPercentage = 90; // 90% total
        userPercentage = 70; // 70% of the 90% goes to user
        
        // Bonus for active users (example logic)
        if (messageCount >= 10) {
            userPercentage = 75; // Increase user share for active users
        }
        if (messageCount >= 50) {
            userPercentage = 80; // Even more for very active users
        }
        
        return (userAndInviterPercentage, userPercentage);
    }

    /**
     * @dev Helper to get conversation ID
     */
    function _getConversationId(address _user1, address _user2) internal pure returns (bytes32) {
        return _user1 < _user2 
            ? keccak256(abi.encodePacked(_user1, _user2))
            : keccak256(abi.encodePacked(_user2, _user1));
    }

    /**
     * @dev Get message count for a user (implement based on your needs)
     */
    function _getUserMessageCount(address _user) internal view returns (uint256) {
        // Implement message counting logic
        // This is a placeholder - you'll need to track this
        return 0;
    }

    // ... (keep all your other existing functions)
}