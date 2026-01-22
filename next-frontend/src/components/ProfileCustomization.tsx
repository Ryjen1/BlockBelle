import { useState, useEffect } from 'react';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import { useI18n } from '../contexts/I18nContext';
import WhisprRegistryABI from '../../contracts/abi/WhisprRegistry.json';

type PrivacySettings = {
  ensNameVisibility: number;
  displayNameVisibility: number;
  avatarVisibility: number;
  profilePictureVisibility: number;
  bioVisibility: number;
  statusMessageVisibility: number;
  publicKeyVisibility: number;
};

export default function ProfileCustomization() {
  const { t } = useI18n();
  const { address } = useAccount();
  const { writeContract } = useWriteContract();

  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [profilePictureHash, setProfilePictureHash] = useState('');
  const [privacy, setPrivacy] = useState<PrivacySettings>({
    ensNameVisibility: 0,
    displayNameVisibility: 0,
    avatarVisibility: 0,
    profilePictureVisibility: 0,
    bioVisibility: 2,
    statusMessageVisibility: 2,
    publicKeyVisibility: 0,
  });

  // Fetch current user details
  const { data: userDetails } = useReadContract({
    address: process.env.NEXT_PUBLIC_REGISTRY_ADDRESS as `0x${string}`,
    abi: WhisprRegistryABI,
    functionName: 'getUserDetails',
    args: [address],
  });

  useEffect(() => {
    if (userDetails) {
      const [
        ensName,
        dispName,
        avatarHash,
        profPicHash,
        userBio,
        statMsg,
        publicKey,
        priv,
        registered,
        lastUpdated,
      ] = userDetails as [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        PrivacySettings,
        boolean,
        bigint,
      ];
      setDisplayName(dispName);
      setBio(userBio);
      setStatusMessage(statMsg);
      setProfilePictureHash(profPicHash);
      setPrivacy(priv);
    }
  }, [userDetails]);

  const handleUpdateProfile = async () => {
    if (!address) return;

    try {
      await writeContract({
        address: process.env.NEXT_PUBLIC_REGISTRY_ADDRESS as `0x${string}`,
        abi: WhisprRegistryABI,
        functionName: 'updateProfile',
        args: [displayName, bio, statusMessage, profilePictureHash],
      });
    } catch (error) {
      console.error('Profile update failed:', error);
    }
  };

  const handleUpdatePrivacy = async () => {
    if (!address) return;

    try {
      await writeContract({
        address: process.env.NEXT_PUBLIC_REGISTRY_ADDRESS as `0x${string}`,
        abi: WhisprRegistryABI,
        functionName: 'updatePrivacySettings',
        args: [privacy],
      });
    } catch (error) {
      console.error('Privacy update failed:', error);
    }
  };

  const visibilityOptions = [
    { value: 0, label: 'Public' },
    { value: 1, label: 'Contacts' },
    { value: 2, label: 'Private' },
  ];

  return (
    <div>
      <h1>{t('profile.customization.title')}</h1>
      <div>
        <h2>Profile Fields</h2>
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
        <button onClick={handleUpdateProfile}>Update Profile</button>
      </div>
      <div>
        <h2>Privacy Settings</h2>
        <div>
          <label>ENS Name Visibility:</label>
          <select
            value={privacy.ensNameVisibility}
            onChange={(e) =>
              setPrivacy({ ...privacy, ensNameVisibility: parseInt(e.target.value) })
            }
          >
            {visibilityOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Display Name Visibility:</label>
          <select
            value={privacy.displayNameVisibility}
            onChange={(e) =>
              setPrivacy({ ...privacy, displayNameVisibility: parseInt(e.target.value) })
            }
          >
            {visibilityOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Avatar Visibility:</label>
          <select
            value={privacy.avatarVisibility}
            onChange={(e) =>
              setPrivacy({ ...privacy, avatarVisibility: parseInt(e.target.value) })
            }
          >
            {visibilityOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Profile Picture Visibility:</label>
          <select
            value={privacy.profilePictureVisibility}
            onChange={(e) =>
              setPrivacy({ ...privacy, profilePictureVisibility: parseInt(e.target.value) })
            }
          >
            {visibilityOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Bio Visibility:</label>
          <select
            value={privacy.bioVisibility}
            onChange={(e) =>
              setPrivacy({ ...privacy, bioVisibility: parseInt(e.target.value) })
            }
          >
            {visibilityOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Status Message Visibility:</label>
          <select
            value={privacy.statusMessageVisibility}
            onChange={(e) =>
              setPrivacy({ ...privacy, statusMessageVisibility: parseInt(e.target.value) })
            }
          >
            {visibilityOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Public Key Visibility:</label>
          <select
            value={privacy.publicKeyVisibility}
            onChange={(e) =>
              setPrivacy({ ...privacy, publicKeyVisibility: parseInt(e.target.value) })
            }
          >
            {visibilityOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleUpdatePrivacy}>Update Privacy</button>
      </div>
    </div>
  );
}