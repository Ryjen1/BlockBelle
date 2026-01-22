# Group Invites Feature

This feature allows users to invite members to groups, and invited users can accept or decline the invites.

## Contract Changes

- Added `GroupInvite` struct
- Added `groupInvites` mapping
- Added events: `GroupInviteSent`, `GroupInviteAccepted`, `GroupInviteDeclined`
- Added functions:
  - `inviteToGroup(uint256 groupId, address invitee)`
  - `acceptInvite(uint256 groupId)`
  - `declineInvite(uint256 groupId)`
  - `getMyInvites()`

## Frontend Changes

- Updated ABI with new functions
- Added group listing
- Added invite input for selected group
- Added pending invites section with accept/decline buttons
- Fixed Message interface for wagmi compatibility