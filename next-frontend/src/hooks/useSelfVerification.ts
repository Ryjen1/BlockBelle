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

const PROOF_OF_HUMAN_ADDRESS = (process.env.NEXT_PUBLIC_SELF_ENDPOINT || '0x72493afCa2789dA494DD3695d74b50DE7774336A') as `0x${string}`;

const PROOF_OF_HUMAN_ABI = [
  {
    inputs: [{ name: '', type: 'address' }],
    name: 'isVerified',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ name: '', type: 'address' }],
    name: 'verificationTimestamp',
    outputs: [{ name: '', type: 'uint256' }],
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
  const { data: isVerifiedOnChain, isLoading: isLoadingVerified } = useReadContract({
    address: PROOF_OF_HUMAN_ADDRESS,
    abi: PROOF_OF_HUMAN_ABI,
    functionName: 'isVerified',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    }
  });

  // Read verification timestamp from blockchain
  const { data: timestamp, isLoading: isLoadingTimestamp } = useReadContract({
    address: PROOF_OF_HUMAN_ADDRESS,
    abi: PROOF_OF_HUMAN_ABI,
    functionName: 'verificationTimestamp',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address && !!isVerifiedOnChain,
    }
  });

  const isLoading = isLoadingVerified || isLoadingTimestamp;

  useEffect(() => {
    if (!address) {
      setVerificationData({ selfVerified: false });
      return;
    }

    const verified = !!isVerifiedOnChain;
    let verifiedAt: string | undefined;

    if (verified && timestamp) {
      // Convert Unix timestamp to ISO string
      verifiedAt = new Date(Number(timestamp) * 1000).toISOString();
    }

    setVerificationData({
      selfVerified: verified,
      verifiedAt,
    });
  }, [address, isVerifiedOnChain, timestamp]);

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