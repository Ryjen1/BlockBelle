# Enhanced User Profile Customization Design for WhisprChat

## Overview
This design enhances the user profile system in WhisprChat to support profile pictures, status messages, customizable profile information (bio, display name), and privacy controls. The design maintains integration with existing E2EE and ENS verification systems while ensuring scalability and security.

## Current Structure Analysis
- **User Struct** (in WhisprRegistry.sol):
  - `string ensName`: ENS name
  - `string avatarHash`: IPFS hash for avatar
  - `string publicKey`: Public key for E2EE
  - `bool registered`: Registration status

## Enhanced User Profile Structure

### Updated User Struct
```solidity
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
```

### PrivacySettings Struct
```solidity
struct PrivacySettings {
    Visibility ensNameVisibility;
    Visibility displayNameVisibility;
    Visibility avatarVisibility;
    Visibility profilePictureVisibility;
    Visibility bioVisibility;
    Visibility statusMessageVisibility;
    Visibility publicKeyVisibility;  // Usually public for E2EE
}

enum Visibility {
    Public,      // Visible to everyone
    Contacts,    // Visible to contacts/friends
    Private      // Not visible to others
}
```

## Contract Updates (WhisprRegistry.sol)

### New Functions
1. **updateProfile** - Update multiple profile fields at once
2. **updateDisplayName** - Update display name
3. **updateBio** - Update biography
4. **updateStatusMessage** - Update status message
5. **updateProfilePicture** - Update profile picture hash
6. **updatePrivacySettings** - Update privacy controls
7. **getVisibleProfile** - Get profile data respecting privacy settings

### Updated registerUser Function
- Include new fields in registration
- Set default privacy settings (e.g., most fields public except bio/status private)

### Security Considerations
- Only user can update their own profile
- Validate input lengths to prevent spam
- Rate limiting for updates (consider timestamp checks)
- Events for all profile updates for off-chain indexing

## Frontend Components

### Updated Register Component
- Add fields for display name, bio, status message
- Profile picture upload (IPFS integration)
- Default privacy settings

### New ProfileCustomization Component
- Form for editing all profile fields
- Privacy settings toggles
- Profile picture upload/preview
- Real-time validation

### ProfileView Component
- Display user profile respecting privacy settings
- Show/hide fields based on visibility and relationship

## Data Flow

### Profile Update Flow
1. User edits profile in frontend
2. Sensitive data (bio, status) encrypted with user's public key
3. Transaction sent to updateProfile function
4. Contract validates and updates storage
5. Event emitted for indexing
6. Frontend updates local state/cache

### Profile Retrieval Flow
1. Request profile data via getUserDetails or getVisibleProfile
2. Frontend checks privacy settings
3. Decrypt sensitive fields if accessible
4. Display filtered data

## E2EE Integration
- Bio and status messages encrypted before storage
- Encryption key derived from user's secret key
- Only user can decrypt their own sensitive data
- Public fields remain unencrypted for performance

## ENS Integration
- Display name can override ENS name if set
- ENS verification remains for authentication
- Profile links to ENS for domain resolution

## Scalability Considerations
- Use IPFS for large profile pictures
- Batch profile updates to reduce gas costs
- Off-chain storage for non-critical data
- Efficient privacy checking with bitmasks if needed

## Security Measures
- Input validation and sanitization
- Access control (only owner can update)
- Event logging for audit trails
- Rate limiting to prevent abuse
- Encryption for sensitive data

## Frontend Architecture

### New Components
- `ProfileEditor.tsx` - Main profile editing interface
- `PrivacySettings.tsx` - Privacy controls component
- `ProfilePictureUpload.tsx` - Image upload with IPFS integration

### Updated Hooks
- `useProfile.ts` - Manage profile data and updates
- Enhanced `useEnsVerification.ts` - Include profile data

### State Management
- Profile data cached in local storage
- Real-time updates via WebSocket/events
- Optimistic updates for better UX

## API/Contract Interactions

### Read Operations
- `getUserDetails(address)` - Full profile data
- `getVisibleProfile(address, viewer)` - Filtered profile for specific viewer

### Write Operations
- `registerUser(...)` - Enhanced registration
- `updateProfile(...)` - Batch update
- Individual update functions for gas optimization

## Testing Strategy
- Unit tests for contract functions
- Integration tests for frontend-contract interaction
- E2EE encryption/decryption tests
- Privacy settings enforcement tests
- IPFS upload/download tests

## Migration Plan
- Existing users: Add default values for new fields
- Privacy settings: Set to public by default for backward compatibility
- Gradual rollout with feature flags

## Future Enhancements
- Profile themes/customization
- Profile verification badges
- Social features (follow, block)
- Advanced privacy (time-based visibility)

This design provides a comprehensive, secure, and scalable enhancement to user profiles while maintaining compatibility with existing systems.