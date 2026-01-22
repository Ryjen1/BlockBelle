import { useState, useEffect } from 'react';
import { useAccount, useWriteContract } from 'wagmi';
import { useI18n } from '../contexts/I18nContext';
import { generateKeyPair } from '../utils/encryption';
import WhisprRegistryABI from '../../contracts/abi/WhisprRegistry.json';

export default function Register() {
  const { t } = useI18n();
  const { address } = useAccount();
  const { writeContract } = useWriteContract();

  const [ensName, setEnsName] = useState('');
  const [avatarHash, setAvatarHash] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [profilePictureHash, setProfilePictureHash] = useState('');
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [secretKey, setSecretKey] = useState<string | null>(null);

  useEffect(() => {
    // Generate key pair on component mount
    const keyPair = generateKeyPair();
    setPublicKey(keyPair.publicKey);
    setSecretKey(keyPair.secretKey);
    localStorage.setItem('secretKey', keyPair.secretKey);
    localStorage.setItem('publicKey', keyPair.publicKey);
  }, []);

  const handleRegister = async () => {
    if (!address || !publicKey) return;

    try {
      writeContract({
        address: '0x...', // TODO: registry contract address
        abi: WhisprRegistryABI,
        functionName: 'registerUser',
        args: [ensName, avatarHash, publicKey, displayName, bio, statusMessage, profilePictureHash],
      });
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <h1>{t('register.title')}</h1>
      <p>{t('register.description')}</p>
      <div>
        <input
          type="text"
          placeholder="ENS Name"
          value={ensName}
          onChange={(e) => setEnsName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Avatar IPFS Hash"
          value={avatarHash}
          onChange={(e) => setAvatarHash(e.target.value)}
        />
        <input
          type="text"
          placeholder="Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <input
          type="text"
          placeholder="Status Message"
          value={statusMessage}
          onChange={(e) => setStatusMessage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile Picture IPFS Hash"
          value={profilePictureHash}
          onChange={(e) => setProfilePictureHash(e.target.value)}
        />
        <button onClick={handleRegister} disabled={!publicKey}>
          {t('register.submit')}
        </button>
      </div>
      {publicKey && <p>Public Key: {publicKey}</p>}
    </div>
  );
}