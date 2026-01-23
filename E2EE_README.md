# End-to-End Encryption for Private Messages

This implementation adds true end-to-end encryption (E2EE) for private messaging between users in the Whispr chat application.

## Overview

E2EE ensures that only the sender and recipient can read the message content. Messages are encrypted on the sender's device and decrypted on the recipient's device. The blockchain stores only encrypted data.

## Implementation Details

### Encryption Library
- Uses TweetNaCl for authenticated encryption (box).
- Generates X25519 key pairs for users.

### Key Management
- Public keys are stored in the WhisprRegistry contract.
- Private keys are stored locally in the browser's localStorage.
- Keys are generated during user registration.

### Message Flow
1. Sender encrypts message with recipient's public key.
2. Encrypted message is sent to the WhisprChat contract.
3. Recipient fetches encrypted message from contract.
4. Recipient decrypts message with their private key.

### Security Considerations
- Private keys are stored in localStorage (not ideal for production; consider secure key storage).
- No key rotation implemented yet.
- Group messages are not encrypted (only private messages).

## Files Modified/Added

- `src/WhisprRegistry.sol`: Added publicKey field to User struct.
- `next-frontend/src/utils/encryption.ts`: Encryption utilities.
- `next-frontend/src/hooks/useChat.ts`: Hook for chat functionality with E2EE.
- `next-frontend/src/components/ChatInterface.tsx`: UI for private chat.
- `next-frontend/src/components/Register.tsx`: Updated to generate and store keys.
- `next-frontend/src/utils/__tests__/encryption.test.ts`: Unit tests.

## Testing

Run the encryption tests:
```bash
cd next-frontend
npm test src/utils/__tests__/encryption.test.ts
```

## Future Improvements
- Implement key rotation.
- Add E2EE for group messages.
- Use secure key storage (e.g., WebAuthn, hardware wallets).
- Add message authentication.