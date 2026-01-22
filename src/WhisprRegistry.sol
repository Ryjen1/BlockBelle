// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title UserRegistry
 * @dev A smart contract for registering users with ENS names and avatar hashes
 */
contract WhisprRegistry {
    // Visibility enum for privacy settings
    enum Visibility {
        Public,      // Visible to everyone
        Contacts,    // Visible to contacts/friends
        Private      // Not visible to others
    }

    // PrivacySettings struct
    struct PrivacySettings {
        Visibility ensNameVisibility;
        Visibility displayNameVisibility;
        Visibility avatarVisibility;
        Visibility profilePictureVisibility;
        Visibility bioVisibility;
        Visibility statusMessageVisibility;
        Visibility publicKeyVisibility;
    }

    // VisibleProfile struct for filtered profile data
    struct VisibleProfile {
        string ensName;
        string displayName;
        string avatarHash;
        string profilePictureHash;
        string bio;
        string statusMessage;
        string publicKey;
    }

    // User struct to store user information
    struct User {
        string ensName;
        string displayName;           // Custom display name
        string avatarHash;            // Primary avatar (IPFS hash)
        string profilePictureHash;    // Enhanced profile picture (IPFS hash)
        string bio;                   // User biography
        string statusMessage;         // Current status message
        string publicKey;             // Public key for E2EE
        PrivacySettings privacy;      // Privacy controls
        bool registered;
        uint256 lastUpdated;          // Timestamp of last profile update
    }

    // Mapping from user address to User struct
    mapping(address => User) public users;

    // Array to keep track of all registered user addresses
    address[] public allUsers;

    // Events
    event UserRegistered(address indexed userAddress, string ensName, string avatarHash);
    event UserDeleted(address indexed userAddress);
    event ProfileUpdated(address indexed userAddress);

    /**
     * @dev Register a new user with ENS name, avatar hash, public key, and profile details
     * @param ensName The ENS name of the user
     * @param avatarHash The IPFS hash or URL for the user's avatar
     * @param publicKey The public key for E2EE
     * @param displayName Custom display name
     * @param bio User biography
     * @param statusMessage Current status message
     * @param profilePictureHash IPFS hash for profile picture
     */
    function registerUser(
        string memory ensName,
        string memory avatarHash,
        string memory publicKey,
        string memory displayName,
        string memory bio,
        string memory statusMessage,
        string memory profilePictureHash
    ) external {
        require(!users[msg.sender].registered, "User is already registered");
        require(bytes(ensName).length > 0, "ENS name cannot be empty");

        // Default privacy settings: most public, bio and status private
        PrivacySettings memory defaultPrivacy = PrivacySettings({
            ensNameVisibility: Visibility.Public,
            displayNameVisibility: Visibility.Public,
            avatarVisibility: Visibility.Public,
            profilePictureVisibility: Visibility.Public,
            bioVisibility: Visibility.Private,
            statusMessageVisibility: Visibility.Private,
            publicKeyVisibility: Visibility.Public
        });

        // Store user details
        users[msg.sender] = User({
            ensName: ensName,
            displayName: displayName,
            avatarHash: avatarHash,
            profilePictureHash: profilePictureHash,
            bio: bio,
            statusMessage: statusMessage,
            publicKey: publicKey,
            privacy: defaultPrivacy,
            registered: true,
            lastUpdated: block.timestamp
        });

        // Add user address to allUsers array
        allUsers.push(msg.sender);

        // Emit event
        emit UserRegistered(msg.sender, ensName, avatarHash);
    }

    /**
     * @dev Update multiple profile fields at once
     */
    function updateProfile(
        string memory displayName,
        string memory bio,
        string memory statusMessage,
        string memory profilePictureHash
    ) external {
        require(users[msg.sender].registered, "User not registered");

        users[msg.sender].displayName = displayName;
        users[msg.sender].bio = bio;
        users[msg.sender].statusMessage = statusMessage;
        users[msg.sender].profilePictureHash = profilePictureHash;
        users[msg.sender].lastUpdated = block.timestamp;

        emit ProfileUpdated(msg.sender);
    }

    /**
     * @dev Update display name
     */
    function updateDisplayName(string memory displayName) external {
        require(users[msg.sender].registered, "User not registered");

        users[msg.sender].displayName = displayName;
        users[msg.sender].lastUpdated = block.timestamp;

        emit ProfileUpdated(msg.sender);
    }

    /**
     * @dev Update biography
     */
    function updateBio(string memory bio) external {
        require(users[msg.sender].registered, "User not registered");

        users[msg.sender].bio = bio;
        users[msg.sender].lastUpdated = block.timestamp;

        emit ProfileUpdated(msg.sender);
    }

    /**
     * @dev Update status message
     */
    function updateStatusMessage(string memory statusMessage) external {
        require(users[msg.sender].registered, "User not registered");

        users[msg.sender].statusMessage = statusMessage;
        users[msg.sender].lastUpdated = block.timestamp;

        emit ProfileUpdated(msg.sender);
    }

    /**
     * @dev Update profile picture hash
     */
    function updateProfilePicture(string memory profilePictureHash) external {
        require(users[msg.sender].registered, "User not registered");

        users[msg.sender].profilePictureHash = profilePictureHash;
        users[msg.sender].lastUpdated = block.timestamp;

        emit ProfileUpdated(msg.sender);
    }

    /**
     * @dev Update privacy settings
     */
    function updatePrivacySettings(PrivacySettings memory privacy) external {
        require(users[msg.sender].registered, "User not registered");

        users[msg.sender].privacy = privacy;
        users[msg.sender].lastUpdated = block.timestamp;

        emit ProfileUpdated(msg.sender);
    }

    /**
     * @dev Check if two addresses are contacts (placeholder - no contacts system yet)
     */
    function isContact(address a, address b) internal pure returns (bool) {
        return false; // Placeholder: implement contacts logic later
    }

    /**
     * @dev Get visible profile data respecting privacy settings
     * @param userAddress The address of the user
     * @param viewer The address of the viewer
     * @return VisibleProfile struct with filtered data
     */
    function getVisibleProfile(address userAddress, address viewer) external view returns (VisibleProfile memory) {
        User memory user = users[userAddress];
        VisibleProfile memory visible;

        // Always show if viewer is the user themselves
        bool isOwner = (viewer == userAddress);

        // Check visibility for each field
        if (isOwner || user.privacy.ensNameVisibility == Visibility.Public ||
            (user.privacy.ensNameVisibility == Visibility.Contacts && isContact(userAddress, viewer))) {
            visible.ensName = user.ensName;
        }

        if (isOwner || user.privacy.displayNameVisibility == Visibility.Public ||
            (user.privacy.displayNameVisibility == Visibility.Contacts && isContact(userAddress, viewer))) {
            visible.displayName = user.displayName;
        }

        if (isOwner || user.privacy.avatarVisibility == Visibility.Public ||
            (user.privacy.avatarVisibility == Visibility.Contacts && isContact(userAddress, viewer))) {
            visible.avatarHash = user.avatarHash;
        }

        if (isOwner || user.privacy.profilePictureVisibility == Visibility.Public ||
            (user.privacy.profilePictureVisibility == Visibility.Contacts && isContact(userAddress, viewer))) {
            visible.profilePictureHash = user.profilePictureHash;
        }

        if (isOwner || user.privacy.bioVisibility == Visibility.Public ||
            (user.privacy.bioVisibility == Visibility.Contacts && isContact(userAddress, viewer))) {
            visible.bio = user.bio;
        }

        if (isOwner || user.privacy.statusMessageVisibility == Visibility.Public ||
            (user.privacy.statusMessageVisibility == Visibility.Contacts && isContact(userAddress, viewer))) {
            visible.statusMessage = user.statusMessage;
        }

        if (isOwner || user.privacy.publicKeyVisibility == Visibility.Public ||
            (user.privacy.publicKeyVisibility == Visibility.Contacts && isContact(userAddress, viewer))) {
            visible.publicKey = user.publicKey;
        }

        return visible;
    }

    /**
     * @dev Get all registered user addresses
     * @return Array of all registered user addresses
     */
    function getAllUsers() external view returns (address[] memory) {
        return allUsers;
    }

    /**
     * @dev Get the total number of registered users
     * @return The count of registered users
     */
    function getUserCount() external view returns (uint256) {
        return allUsers.length;
    }

    /**
     * @dev Check if a user is registered
     * @param userAddress The address to check
     * @return True if the user is registered, false otherwise
     */
    function isUserRegistered(address userAddress) external view returns (bool) {
        return users[userAddress].registered;
    }

    /**
     * @dev Get user details by address
     * @param userAddress The address of the user
     * @return ensName The ENS name of the user
     * @return displayName Custom display name
     * @return avatarHash The avatar hash of the user
     * @return profilePictureHash Profile picture hash
     * @return bio User biography
     * @return statusMessage Status message
     * @return publicKey The public key of the user
     * @return privacy Privacy settings
     * @return registered Whether the user is registered
     * @return lastUpdated Last update timestamp
     */
    function getUserDetails(address userAddress) external view returns (
        string memory ensName,
        string memory displayName,
        string memory avatarHash,
        string memory profilePictureHash,
        string memory bio,
        string memory statusMessage,
        string memory publicKey,
        PrivacySettings memory privacy,
        bool registered,
        uint256 lastUpdated
    ) {
        User memory user = users[userAddress];
        return (
            user.ensName,
            user.displayName,
            user.avatarHash,
            user.profilePictureHash,
            user.bio,
            user.statusMessage,
            user.publicKey,
            user.privacy,
            user.registered,
            user.lastUpdated
        );
    }

    /**
     * @dev Delete a user (only the user themselves can delete their account)
     */
    function deleteUser() external {
        require(users[msg.sender].registered, "User is not registered");

        // Mark user as not registered and clear all fields
        users[msg.sender].registered = false;
        users[msg.sender].ensName = "";
        users[msg.sender].displayName = "";
        users[msg.sender].avatarHash = "";
        users[msg.sender].profilePictureHash = "";
        users[msg.sender].bio = "";
        users[msg.sender].statusMessage = "";
        users[msg.sender].publicKey = "";
        // privacy remains, but since not registered, irrelevant
        users[msg.sender].lastUpdated = 0;

        // Remove from allUsers array
        for (uint256 i = 0; i < allUsers.length; i++) {
            if (allUsers[i] == msg.sender) {
                // Move the last element to the current position and pop
                allUsers[i] = allUsers[allUsers.length - 1];
                allUsers.pop();
                break;
            }
        }

        // Emit event
        emit UserDeleted(msg.sender);
    }

    /**
     * @dev Delete another user (admin function - for now anyone can delete others)
     * @param userAddress The address of the user to delete
     */
    function deleteOtherUser(address userAddress) external {
        require(users[userAddress].registered, "User is not registered");

        // Mark user as not registered and clear all fields
        users[userAddress].registered = false;
        users[userAddress].ensName = "";
        users[userAddress].displayName = "";
        users[userAddress].avatarHash = "";
        users[userAddress].profilePictureHash = "";
        users[userAddress].bio = "";
        users[userAddress].statusMessage = "";
        users[userAddress].publicKey = "";
        // privacy remains
        users[userAddress].lastUpdated = 0;

        // Remove from allUsers array
        for (uint256 i = 0; i < allUsers.length; i++) {
            if (allUsers[i] == userAddress) {
                // Move the last element to the current position and pop
                allUsers[i] = allUsers[allUsers.length - 1];
                allUsers.pop();
                break;
            }
        }

        // Emit event
        emit UserDeleted(userAddress);
    }
}