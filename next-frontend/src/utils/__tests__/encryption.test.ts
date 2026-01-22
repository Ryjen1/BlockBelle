import { generateKeyPair, encryptMessage, decryptMessage } from '../encryption';

describe('Encryption Utils', () => {
  it('should generate a key pair', () => {
    const keyPair = generateKeyPair();
    expect(keyPair.publicKey).toBeDefined();
    expect(keyPair.secretKey).toBeDefined();
    expect(typeof keyPair.publicKey).toBe('string');
    expect(typeof keyPair.secretKey).toBe('string');
  });

  it('should encrypt and decrypt a message', () => {
    const alice = generateKeyPair();
    const bob = generateKeyPair();

    const message = 'Hello, Bob!';
    const encrypted = encryptMessage(message, bob.publicKey, alice.secretKey);
    const decrypted = decryptMessage(encrypted, alice.publicKey, bob.secretKey);

    expect(decrypted).toBe(message);
  });

  it('should fail to decrypt with wrong key', () => {
    const alice = generateKeyPair();
    const bob = generateKeyPair();
    const eve = generateKeyPair();

    const message = 'Secret message';
    const encrypted = encryptMessage(message, bob.publicKey, alice.secretKey);

    expect(() => {
      decryptMessage(encrypted, alice.publicKey, eve.secretKey);
    }).toThrow();
  });
});