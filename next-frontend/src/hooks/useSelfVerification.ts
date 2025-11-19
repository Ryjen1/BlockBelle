import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';

export interface SelfVerificationData {
  selfVerified: boolean;
  selfDid?: string;
  verifiedAt?: string;
  nationality?: string;
  gender?: string;
  minimumAge?: string;
}

export function useSelfVerification() {
  const { address } = useAccount();
  const [verificationData, setVerificationData] = useState<SelfVerificationData>({
    selfVerified: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!address) {
      setVerificationData({ selfVerified: false });
      setIsLoading(false);
      return;
    }

    // Load verification data from localStorage
    const loadVerificationData = () => {
      try {
        const stored = localStorage.getItem(`self_verification_${address}`);
        if (stored) {
          const data = JSON.parse(stored) as SelfVerificationData;
          setVerificationData(data);
        } else {
          setVerificationData({ selfVerified: false });
        }
      } catch (error) {
        console.error('Error loading verification data:', error);
        setVerificationData({ selfVerified: false });
      } finally {
        setIsLoading(false);
      }
    };

    loadVerificationData();
  }, [address]);

  const saveVerification = (data: Omit<SelfVerificationData, 'selfVerified'>) => {
    if (!address) return;

    const verificationData: SelfVerificationData = {
      selfVerified: true,
      ...data,
      verifiedAt: new Date().toISOString(),
    };

    localStorage.setItem(`self_verification_${address}`, JSON.stringify(verificationData));
    setVerificationData(verificationData);
  };

  const clearVerification = () => {
    if (!address) return;
    localStorage.removeItem(`self_verification_${address}`);
    setVerificationData({ selfVerified: false });
  };

  return {
    verificationData,
    isLoading,
    saveVerification,
    clearVerification,
  };
}