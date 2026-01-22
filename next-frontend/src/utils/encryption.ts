import nacl from 'tweetnacl';
import { encode as encodeUTF8, decode as decodeUTF8 } from '@stablelib/utf8';
import { encode as encodeBase64, decode as decodeBase64 } from '@stablelib/base64';

// Generate a new key pair
export function generateKeyPair(): { publicKey: string; secretKey: string } {
  const keyPair = nacl.box.keyPair();
  return {
    publicKey: encodeBase64(keyPair.publicKey),
    secretKey: encodeBase64(keyPair.secretKey),
  };
}

// Encrypt a message for a recipient
export function encryptMessage(
  message: string,
  recipientPublicKey: string,
  senderSecretKey: string
): string {
  const recipientPublicKeyBytes = decodeBase64(recipientPublicKey);
  const senderSecretKeyBytes = decodeBase64(senderSecretKey);

  // Generate a one-time nonce
  const nonce = nacl.randomBytes(nacl.box.nonceLength);

  // Encrypt the message
  const messageBytes = encodeUTF8(message);
  const encrypted = nacl.box(messageBytes, nonce, recipientPublicKeyBytes, senderSecretKeyBytes);

  // Combine nonce and encrypted message
  const combined = new Uint8Array(nonce.length + encrypted.length);
  combined.set(nonce);
  combined.set(encrypted, nonce.length);

  return encodeBase64(combined);
}

// Decrypt a message
export function decryptMessage(
  encryptedMessage: string,
  senderPublicKey: string,
  recipientSecretKey: string
): string {
  const encryptedBytes = decodeBase64(encryptedMessage);
  const senderPublicKeyBytes = decodeBase64(senderPublicKey);
  const recipientSecretKeyBytes = decodeBase64(recipientSecretKey);

  // Extract nonce and encrypted message
  const nonce = encryptedBytes.slice(0, nacl.box.nonceLength);
  const encrypted = encryptedBytes.slice(nacl.box.nonceLength);

  // Decrypt the message
  const decrypted = nacl.box.open(encrypted, nonce, senderPublicKeyBytes, recipientSecretKeyBytes);

  if (!decrypted) {
    throw new Error('Failed to decrypt message');
  }

  return decodeUTF8(decrypted);
}