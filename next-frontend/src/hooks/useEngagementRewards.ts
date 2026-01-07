'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAccount, usePublicClient, useWalletClient, useReadContract } from 'wagmi';
import { isAddress, type Address } from 'viem';
import {
  ACTIVE_REWARDS_CONTRACT,
  BLOCKBELLE_APP_ADDRESS,
  ENGAGEMENT_REWARDS_ABI,
  STORAGE_KEYS,
} from '@/config/engagement-rewards';

export interface EngagementRewardsState {
  inviterAddress: Address | null;
  canClaimReward: boolean;
  isCheckingEligibility: boolean;
  isUserRegistered: boolean;
  claimError: string | null;
  hasClaimedBefore: boolean;
}

export function useEngagementRewards() {
  const { address, isConnected } = useAccount();
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();

  const [state, setState] = useState<EngagementRewardsState>({
    inviterAddress: null,
    canClaimReward: false,
    isCheckingEligibility: false,
    isUserRegistered: false,
    claimError: null,
    hasClaimedBefore: false,
  });

  // Check if app is registered
  const { data: isAppRegistered } = useReadContract({
    address: ACTIVE_REWARDS_CONTRACT,
    abi: ENGAGEMENT_REWARDS_ABI,
    functionName: 'isAppRegistered',
    args: [BLOCKBELLE_APP_ADDRESS as Address],
  });

  // Check if user is already registered with the app
  const { data: isUserRegistered, refetch: refetchUserRegistration } = useReadContract({
    address: ACTIVE_REWARDS_CONTRACT,
    abi: ENGAGEMENT_REWARDS_ABI,
    functionName: 'isUserRegistered',
    args: address ? [BLOCKBELLE_APP_ADDRESS as Address, address] : undefined,
    query: {
      enabled: !!address && !!isAppRegistered,
    }
  });

  // Load inviter from URL or localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check URL params first
    const urlParams = new URLSearchParams(window.location.search);
    const refParam = urlParams.get('ref');

    if (refParam && isAddress(refParam)) {
      // Store in localStorage
      localStorage.setItem(STORAGE_KEYS.INVITER_ADDRESS, refParam);
      setState(prev => ({ ...prev, inviterAddress: refParam as Address }));
      return;
    }

    // Fall back to localStorage
    const stored = localStorage.getItem(STORAGE_KEYS.INVITER_ADDRESS);
    if (stored && isAddress(stored)) {
      setState(prev => ({ ...prev, inviterAddress: stored as Address }));
    }
  }, []);

  // Check if user has claimed before
  useEffect(() => {
    if (typeof window === 'undefined' || !address) return;

    const claimSuccess = localStorage.getItem(STORAGE_KEYS.CLAIM_SUCCESS);
    if (claimSuccess === address) {
      setState(prev => ({ ...prev, hasClaimedBefore: true }));
    }
  }, [address]);

  // Update user registration state
  useEffect(() => {
    setState(prev => ({
      ...prev,
      isUserRegistered: !!isUserRegistered,
    }));
  }, [isUserRegistered]);

  // Check eligibility to claim
  const checkEligibility = useCallback(async () => {
    if (!address || !isConnected || !isAppRegistered || !publicClient) {
      setState(prev => ({ ...prev, canClaimReward: false }));
      return;
    }

    setState(prev => ({ ...prev, isCheckingEligibility: true, claimError: null }));

    try {
      const result = await publicClient.readContract({
        address: ACTIVE_REWARDS_CONTRACT,
        abi: ENGAGEMENT_REWARDS_ABI,
        functionName: 'canClaim',
        args: [BLOCKBELLE_APP_ADDRESS as Address, address],
      });

      const [canClaim, reason] = result as [boolean, string];
      
      setState(prev => ({
        ...prev,
        canClaimReward: canClaim,
        claimError: canClaim ? null : reason,
        isCheckingEligibility: false,
      }));
    } catch (error: any) {
      console.error('Error checking eligibility:', error);
      setState(prev => ({
        ...prev,
        canClaimReward: false,
        claimError: error.message || 'Failed to check eligibility',
        isCheckingEligibility: false,
      }));
    }
  }, [address, isConnected, isAppRegistered, publicClient]);

  // Check eligibility when user connects
  useEffect(() => {
    if (address && isConnected && isAppRegistered) {
      checkEligibility();
    }
  }, [address, isConnected, isAppRegistered, checkEligibility]);

  // Generate signature for claiming
  const generateClaimSignature = useCallback(async (
    inviter: Address,
    validUntilBlock: bigint
  ): Promise<`0x${string}`> => {
    if (!walletClient || !address) {
      throw new Error('Wallet not connected');
    }

    // Message format as per GoodDollar Engagement SDK
    const message = `Claim engagement reward from app ${BLOCKBELLE_APP_ADDRESS} with inviter ${inviter} valid until block ${validUntilBlock}`;

    try {
      const signature = await walletClient.signMessage({
        account: address,
        message,
      });

      return signature;
    } catch (error: any) {
      console.error('Error signing message:', error);
      throw new Error('Failed to sign claim message');
    }
  }, [walletClient, address]);

  // Helper to get current block and calculate valid until block
  const getValidUntilBlock = useCallback(async (): Promise<bigint> => {
    if (!publicClient) {
      throw new Error('Public client not available');
    }

    const currentBlock = await publicClient.getBlockNumber();
    // Valid for 600 blocks (~30 minutes on Celo with 5s block time)
    return currentBlock + 600n;
  }, [publicClient]);

  return {
    ...state,
    isAppRegistered: !!isAppRegistered,
    checkEligibility,
    generateClaimSignature,
    getValidUntilBlock,
    refetchUserRegistration,
    setInviterAddress: (addr: Address) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEYS.INVITER_ADDRESS, addr);
      }
      setState(prev => ({ ...prev, inviterAddress: addr }));
    },
    markClaimSuccess: () => {
      if (typeof window !== 'undefined' && address) {
        localStorage.setItem(STORAGE_KEYS.CLAIM_SUCCESS, address);
      }
      setState(prev => ({ ...prev, hasClaimedBefore: true }));
    },
  };
}