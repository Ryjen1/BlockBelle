'use client';

import { useState, useEffect } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { GiftIcon, CheckCircleIcon, XCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { useEngagementRewards } from '@/hooks/useEngagementRewards';
import { ACTIVE_REWARDS_CONTRACT, ENGAGEMENT_REWARDS_ABI, CHATABELLA_APP_ADDRESS } from '@/config/engagement-rewards';
import { type Address } from 'viem';
import GoodDollarVerificationGuide from './GoodDollarVerificationGuide';

interface EngagementRewardsClaimProps {
  className?: string;
  onClaimSuccess?: () => void;
}

export default function EngagementRewardsClaim({ className = '', onClaimSuccess }: EngagementRewardsClaimProps) {
  const { address, isConnected } = useAccount();
  const {
    inviterAddress,
    canClaimReward,
    isCheckingEligibility,
    isUserRegistered,
    isAppRegistered,
    claimError,
    hasClaimedBefore,
    generateClaimSignature,
    getValidUntilBlock,
    checkEligibility,
    markClaimSuccess,
    refetchUserRegistration,
  } = useEngagementRewards();

  const [isClaiming, setIsClaiming] = useState(false);
  const [claimSuccess, setClaimSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [txHash, setTxHash] = useState<`0x${string}` | null>(null);
  const [showVerificationGuide, setShowVerificationGuide] = useState(false);
  const [isWhitelistError, setIsWhitelistError] = useState(false);

  const { writeContractAsync } = useWriteContract();

  // Wait for transaction confirmation
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash: txHash || undefined,
  });

  useEffect(() => {
    if (isConfirmed && txHash) {
      setClaimSuccess(true);
      markClaimSuccess();
      refetchUserRegistration();
      if (onClaimSuccess) {
        onClaimSuccess();
      }
    }
  }, [isConfirmed, txHash, markClaimSuccess, refetchUserRegistration, onClaimSuccess]);

  const handleClaim = async () => {
    if (!address || !inviterAddress) {
      setErrorMsg('Missing required information');
      return;
    }

    setIsClaiming(true);
    setErrorMsg(null);
    setClaimSuccess(false);

    try {
      // Step 1: Get valid until block
      const validUntilBlock = await getValidUntilBlock();

      // Step 2: Generate user signature
      const userSignature = await generateClaimSignature(inviterAddress, validUntilBlock);

      // Step 3: Get app signature from backend
      const appSignatureResponse = await fetch('/api/engagement-rewards/sign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user: address,
          inviter: inviterAddress,
          validUntilBlock: validUntilBlock.toString(),
        }),
      });

      if (!appSignatureResponse.ok) {
        throw new Error('Failed to get app signature');
      }

      const { signature: appSignature } = await appSignatureResponse.json();

      // Step 4: Submit claim transaction
      const hash = await writeContractAsync({
        address: ACTIVE_REWARDS_CONTRACT,
        abi: ENGAGEMENT_REWARDS_ABI,
        functionName: 'nonContractAppClaim',
        args: [
          CHATABELLA_APP_ADDRESS as Address,
          inviterAddress,
          validUntilBlock,
          userSignature,
          appSignature as `0x${string}`,
        ],
      });

      setTxHash(hash);
      console.log('Claim transaction submitted:', hash);

    } catch (error: any) {
      console.error('Error claiming reward:', error);
      
      // Detect whitelisting errors
      const errorMessage = error.message || error.toString() || '';
      const isWhitelisted = errorMessage.toLowerCase().includes('not whitelisted') || 
                           errorMessage.toLowerCase().includes('user not whitelisted') ||
                           errorMessage.toLowerCase().includes('whitelisted');
      
      setIsWhitelistError(isWhitelisted);
      
      if (isWhitelisted) {
        setErrorMsg('You need to verify with GoodDollar first');
        setShowVerificationGuide(true);
      } else {
        setErrorMsg(error.message || 'Failed to claim reward');
      }
      
      setIsClaiming(false);
    }
  };

  // Update claiming state based on confirmation status
  useEffect(() => {
    if (isConfirming) {
      setIsClaiming(true);
    } else if (isConfirmed || errorMsg) {
      setIsClaiming(false);
    }
  }, [isConfirming, isConfirmed, errorMsg]);

  if (!isConnected || !address) {
    return null;
  }

  // Don't show if app is not registered
  if (!isAppRegistered) {
    return (
      <div className={`bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 ${className}`}>
        <p className="text-sm text-yellow-800">
          ⚠️ Chata-Bella is not yet registered for engagement rewards. Check back soon!
        </p>
      </div>
    );
  }

  // Don't show if already claimed
  if (hasClaimedBefore || isUserRegistered) {
    return (
      <div className={`bg-green-50 border-2 border-green-200 rounded-xl p-4 ${className}`}>
        <div className="flex items-center space-x-2">
          <CheckCircleIcon className="h-5 w-5 text-green-600" />
          <p className="text-sm text-green-800 font-medium">
            You've already claimed your engagement reward!
          </p>
        </div>
      </div>
    );
  }

  // Don't show if no inviter
  if (!inviterAddress) {
    return null;
  }

  // Show verification guide if whitelisting error occurred
  if (showVerificationGuide && isWhitelistError) {
    return (
      <div className={`space-y-4 ${className}`}>
        <GoodDollarVerificationGuide onClose={() => setShowVerificationGuide(false)} />
        
        {/* Option to try again */}
        <button
          onClick={() => {
            setShowVerificationGuide(false);
            setIsWhitelistError(false);
            setErrorMsg(null);
          }}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors"
        >
          ← Back to Claim
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-blockbelle-gold/20 via-blockbelle-pink/10 to-blockbelle-purple/10 border-2 border-blockbelle-gold/40 rounded-xl p-6 shadow-xl ${className}`}>
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-gradient-to-br from-blockbelle-gold to-blockbelle-pink p-3 rounded-lg">
          <GiftIcon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gradient-blockbelle">Welcome Bonus!</h3>
          <p className="text-sm text-gray-600">Claim your GoodDollar engagement reward</p>
        </div>
      </div>

      {errorMsg && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-start space-x-2 mb-2">
            <XCircleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-red-600 font-medium">{errorMsg}</p>
              {isWhitelistError && (
                <button
                  onClick={() => setShowVerificationGuide(true)}
                  className="mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium underline flex items-center"
                >
                  <InformationCircleIcon className="h-4 w-4 mr-1" />
                  How to get verified
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {claimSuccess && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-2">
          <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-green-600 font-medium">
              🎉 Successfully claimed your engagement reward!
            </p>
            {txHash && (
              <a
                href={`https://celoscan.io/tx/${txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-green-700 hover:underline mt-1 block"
              >
                View transaction →
              </a>
            )}
          </div>
        </div>
      )}

      <div className="bg-white/70 rounded-lg p-4 mb-4">
        <p className="text-sm text-gray-700 mb-3">
          You were invited to Chata-Bella! Claim your welcome bonus in GoodDollar (G$). Both you and your inviter will receive rewards.
        </p>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Your reward:</span>
            <span className="font-bold text-blockbelle-purple">~63 G$</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Inviter reward:</span>
            <span className="font-bold text-blockbelle-pink">~27 G$</span>
          </div>
        </div>
      </div>

      {isCheckingEligibility ? (
        <div className="flex items-center justify-center py-4">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blockbelle-purple"></div>
          <span className="ml-3 text-sm text-gray-600">Checking eligibility...</span>
        </div>
      ) : claimError && claimError.toLowerCase().includes('not eligible') ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
          <div className="flex items-start space-x-2">
            <XCircleIcon className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-yellow-800 mb-2">
                ⚠️ {claimError}
              </p>
              <p className="text-xs text-yellow-700 mb-2">
                This usually means you're not verified with GoodDollar yet. Complete verification to claim rewards.
              </p>
              <button
                onClick={() => setShowVerificationGuide(true)}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium underline flex items-center"
              >
                <InformationCircleIcon className="h-4 w-4 mr-1" />
                How to get verified
              </button>
            </div>
          </div>
          <button
            onClick={checkEligibility}
            className="mt-3 w-full text-sm text-blockbelle-purple hover:text-blockbelle-pink font-medium underline"
          >
            Check eligibility again
          </button>
        </div>
      ) : (
        <button
          onClick={handleClaim}
          disabled={isClaiming || !canClaimReward || claimSuccess}
          className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
            claimSuccess
              ? 'bg-green-500 text-white'
              : 'gradient-blockbelle hover:opacity-90 text-white'
          }`}
        >
          {isClaiming ? (
            <span className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              {isConfirming ? 'Confirming...' : 'Claiming Reward...'}
            </span>
          ) : claimSuccess ? (
            <span className="flex items-center justify-center">
              <CheckCircleIcon className="h-5 w-5 mr-2" />
              Claimed Successfully!
            </span>
          ) : (
            'Claim Welcome Bonus →'
          )}
        </button>
      )}

      <p className="text-xs text-gray-500 text-center mt-3">
        Claim once per app, per 180 days. Small gas fee required (~$0.01).
      </p>
    </div>
  );
}