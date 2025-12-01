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

  // Fetch verification status from backend
  const fetchVerificationStatus = async () => {
    if (!address) {
      setVerificationData({ selfVerified: false });
      setIsLoading(false);
      return;
    }

<<<<<<< HEAD
    // Fetch verification data from backend API (not localStorage)
    const fetchVerificationData = async () => {
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
        console.error('Error fetching verification data:', error);
=======
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
>>>>>>> 56443b93e5f2166e2a99d58f94535713daaf9b80
        setVerificationData({ selfVerified: false });
      }
    } catch (error) {
      console.error('Error fetching verification status:', error);
      setVerificationData({ selfVerified: false });
    } finally {
      setIsLoading(false);
    }
  };

<<<<<<< HEAD
    fetchVerificationData();
  }, [address]);

  // Refresh verification status (call after successful verification)
  const refreshVerification = async () => {
    if (!address) return;

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
        }
      }
    } catch (error) {
      console.error('Error refreshing verification data:', error);
    } finally {
      setIsLoading(false);
    }
=======
  useEffect(() => {
    fetchVerificationStatus();
  }, [address]);

  const saveVerification = async (data: Omit<SelfVerificationData, 'selfVerified'>) => {
    // Verification is already saved by backend, just refresh from server
    await fetchVerificationStatus();
  };

  const clearVerification = () => {
    // Clear on client side (backend would need a delete endpoint to truly clear)
    setVerificationData({ selfVerified: false });
>>>>>>> 56443b93e5f2166e2a99d58f94535713daaf9b80
  };

  return {
    verificationData,
    isLoading,
<<<<<<< HEAD
    refreshVerification,
=======
    saveVerification,
    clearVerification,
    refreshVerification: fetchVerificationStatus,
>>>>>>> 56443b93e5f2166e2a99d58f94535713daaf9b80
  };
}