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

  // Fetch verification status from backend API
  const fetchVerificationStatus = async () => {
    if (!address) {
      setVerificationData({ selfVerified: false });
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/self/status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.verified) {
          setVerificationData({
            selfVerified: true,
            selfDid: data.selfDid,
            verifiedAt: data.verifiedAt,
            nationality: data.nationality,
            gender: data.gender,
            minimumAge: data.minimumAge,
          });
        } else {
          setVerificationData({ selfVerified: false });
        }
      } else {
        setVerificationData({ selfVerified: false });
      }
    } catch (error) {
      console.error('Error fetching verification status:', error);
      setVerificationData({ selfVerified: false });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVerificationStatus();
  }, [address]);

  // Refresh verification status (call after successful verification)
  const refreshVerification = async () => {
    await fetchVerificationStatus();
  };

  return {
    verificationData,
    isLoading,
    refreshVerification,
  };
}