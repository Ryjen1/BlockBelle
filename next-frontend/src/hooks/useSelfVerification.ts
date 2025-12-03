import { useState, useEffect } from 'react';
import { useAccount, useReadContract } from 'wagmi';

export interface SelfVerificationData {
  selfVerified: boolean;
  selfDid?: string;
  verifiedAt?: string;
  nationality?: string;
  gender?: string;
  minimumAge?: string;
}

const PROOF_OF_HUMAN_ADDRESS = '0x72493afCa2789dA494DD3695d74b50DE7774336A' as const;

const PROOF_OF_HUMAN_ABI = [
  {
    inputs: [{ name: '', type: 'address' }],
    name: 'isVerified',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

export function useSelfVerification() {
  const { address } = useAccount();
  const [verificationData, setVerificationData] = useState<SelfVerificationData>({
    selfVerified: false,
  });

  // Read verification status from blockchain using mapping
  const { data: isVerifiedOnChain, isLoading } = useReadContract({
    address: PROOF_OF_HUMAN_ADDRESS,
    abi: PROOF_OF_HUMAN_ABI,
    functionName: 'isVerified',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    }
  });

  useEffect(() => {
    if (!address) {
      setVerificationData({ selfVerified: false });
      return;
    }

    setVerificationData({
      selfVerified: !!isVerifiedOnChain,
      verifiedAt: isVerifiedOnChain ? new Date().toISOString() : undefined,
    });
  }, [address, isVerifiedOnChain]);

  // Refresh is handled automatically by wagmi's useReadContract
  const refreshVerification = async () => {
    // No-op: wagmi automatically refetches on block changes
  };

  return {
    verificationData,
    isLoading,
    refreshVerification,
  };
}