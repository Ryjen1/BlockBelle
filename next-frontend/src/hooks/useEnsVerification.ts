import { useState, useEffect } from 'react';
import { useAccount, useReadContract } from 'wagmi';
import { getEnsAddress } from 'viem';
import WhisprRegistryABI from '../../contracts/abi/WhisprRegistry.json';

export function useEnsVerification(ensName: string) {
  const { address } = useAccount();
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [error, setError] = useState('');

  const verifyEnsOwnership = async (name: string) => {
    if (!name.trim() || !address) return;

    setIsVerifying(true);
    setError('');
    setIsVerified(null);

    try {
      const fullEnsName = name.endsWith('.eth') ? name : `${name}.eth`;
      const ensAddress = await getEnsAddress({
        name: fullEnsName,
      });

      if (ensAddress?.toLowerCase() === address.toLowerCase()) {
        setIsVerified(true);
      } else {
        setIsVerified(false);
        setError('This ENS name is not owned by your wallet address.');
      }
    } catch (error) {
      console.error('ENS verification failed:', error);
      setIsVerified(false);
      setError('Failed to verify ENS ownership. Please check your connection and try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  useEffect(() => {
    if (ensName.trim()) {
      const timeoutId = setTimeout(() => {
        verifyEnsOwnership(ensName);
      }, 500); // Debounce verification
      return () => clearTimeout(timeoutId);
    } else {
      setIsVerified(null);
      setError('');
    }
  }, [ensName, address]);

  return {
    isVerifying,
    isVerified,
    error,
    verifyEnsOwnership,
  };
}

export function useProfile(userAddress?: string) {
  const { address } = useAccount();
  const targetAddress = userAddress || address;

  const { data: userDetails, isLoading: isLoadingDetails } = useReadContract({
    address: '0x...', // TODO: registry contract address
    abi: WhisprRegistryABI,
    functionName: 'getUserDetails',
    args: targetAddress ? [targetAddress] : undefined,
  });

  const { data: visibleProfile, isLoading: isLoadingVisible } = useReadContract({
    address: '0x...', // TODO: registry contract address
    abi: WhisprRegistryABI,
    functionName: 'getVisibleProfile',
    args: targetAddress && address ? [targetAddress, address] : undefined,
  });

  return {
    userDetails,
    visibleProfile,
    isLoading: isLoadingDetails || isLoadingVisible,
  };
}