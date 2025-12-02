# Mute Feature Implementation

This document describes the implementation of the mute feature for individual users and group chats in the BlockBelle chat application.

## Overview

The mute feature allows users to silence notifications and messages from specific users or group chats without blocking them entirely. When a user or group is muted:

- Push notifications are suppressed
- Messages still appear in the chat but don't generate notifications
- Users can easily unmute at any time
- Mute settings are persisted in the database

## Architecture

### Database Schema

The mute functionality uses a new `mute_settings` table with the following structure:

```sql
CREATE TABLE mute_settings (
    id SERIAL PRIMARY KEY,
    user_address VARCHAR(42) NOT NULL, -- User who set the mute
    muted_user_address VARCHAR(42) NULL, -- User being muted (NULL for groups)
    muted_group_id VARCHAR(255) NULL, -- Group being muted (NULL for users)
    mute_type VARCHAR(20) NOT NULL CHECK (mute_type IN ('user', 'group')),
    muted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_muted BOOLEAN DEFAULT TRUE,
    UNIQUE(user_address, muted_user_address, muted_group_id, mute_type)
);
```

### API Endpoints

#### POST /api/mute
Toggle mute status for users or groups.

**Request:**
```json
{
  "userAddress": "0x1234567890123456789012345678901234567890",
  "targetUserAddress": "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd", // Optional for groups
  "targetGroupId": "group123", // Optional for users
  "mute": true,
  "muteType": "user" // or "group"
}
```

#### GET /api/mute/check
Check if a specific user/group is muted.

**Query Parameters:**
- `userAddress`: Required - user's address
- `targetUserAddress`: Optional - user to check (mutual exclusive with targetGroupId)
- `targetGroupId`: Optional - group to check (mutual exclusive with targetUserAddress)

#### GET /api/mute/list
Get all mute settings for a user.

**Query Parameters:**
- `userAddress`: Required - user's address
- `muteType`: Optional filter - "user" or "group"

### Frontend Components

#### useMute Hook
Main hook for managing mute state across the application.

```typescript
const {
  muteSettings,
  isUserMuted,
  isGroupMuted,
  toggleUserMute,
  toggleGroupMute,
  refreshMuteSettings,
  isLoading,
  error
} = useMute();
```

#### MuteButton Component
Reusable button component for muting users and groups.

```typescript
<MuteButton
  targetUserAddress="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
  targetGroupId="group123"
  muteType="user" // or "group"
  variant="button" // "button", "icon", or "toggle"
  size="md" // "sm", "md", "lg"
  onMuteChange={(isMuted) => console.log('Mute state changed:', isMuted)}
/>
```

#### MutedList Component
Component for managing all muted users and groups.

```typescript
<MutedList
  onClose={() => setShowMutedList(false)}
  className="w-80"
/>
```

### Integration Points

#### Notification Context
The `NotificationContext` now respects mute settings:

```typescript
// Notifications are only shown if the sender/group is not muted
showNewMessageNotification(
  senderName,
  message,
  chatType,
  chatId,
  senderAddress // Used for mute checking
);
```

#### Chat Components
Mute buttons are integrated into:
- `MainChat` - Chat header with mute controls
- `ChatInterface` - Individual chat mute functionality
- `GroupChat` - Group chat mute controls

## Usage Examples

### Muting a User
```typescript
const { toggleUserMute } = useMute();

// Mute a user
await toggleUserMute('0xabcdefabcdefabcdefabcdefabcdefabcdefabcd');

// Check if user is muted
const isMuted = isUserMuted('0xabcdefabcdefabcdefabcdefabcdefabcdefabcd');
```

### Muting a Group
```typescript
const { toggleGroupMute } = useMute();

// Mute a group
await toggleGroupMute('group123');

// Check if group is muted
const isMuted = isGroupMuted('group123');
```

### Using MuteButton Component
```typescript
// In a chat header
<div className="flex items-center space-x-2">
  <MuteButton
    targetUserAddress={selectedUser}
    muteType="user"
    variant="icon"
  />
</div>

// In a group chat
<MuteButton
  targetGroupId={selectedGroup}
  muteType="group"
  variant="toggle"
  size="lg"
/>
```

## State Management

The mute functionality uses optimistic updates for better UX:

1. **Local State Update**: UI updates immediately when mute is toggled
2. **API Call**: Backend call to persist the change
3. **State Refresh**: Complete settings are refreshed from the server
4. **Error Handling**: If the API call fails, the UI reverts to the previous state

## Error Handling

- Network errors are caught and displayed to users
- Invalid Ethereum addresses are validated
- Permission checks ensure only the mute owner can modify settings
- Loading states prevent duplicate requests

## Testing

Comprehensive test coverage includes:

- Unit tests for `useMute` hook
- Component tests for `MuteButton`
- API endpoint testing with mocked responses
- Integration tests for notification suppression

## Performance Considerations

- Mute settings are cached locally and refreshed periodically
- Database queries use proper indexes for fast lookups
- UI updates use optimistic patterns for responsiveness
- Component memoization prevents unnecessary re-renders

## Security

- All API endpoints validate Ethereum addresses
- Users can only modify their own mute settings
- SQL injection prevention through parameterized queries
- Input validation on all user-provided data

## Future Enhancements

Potential improvements:
- Mute duration (temporary mutes)
- Granular notification preferences (sound, visual, etc.)
- Bulk mute operations
- Mute analytics and insights
- Integration with message filtering
- Mobile app push notification suppression