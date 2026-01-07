'use client';

import { useState, useEffect } from 'react';
import { useAccount, usePublicClient, useWalletClient, useReadContract, useWriteContract } from 'wagmi';
import { formatUnits } from 'viem';
import { useIdentitySDK } from '@goodsdks/identity-sdk';
import ReferralCard from '@/components/ReferralCard';

interface GoodDollarClaimProps {
    className?: string;
}

export default function GoodDollarClaim({ className = '' }: GoodDollarClaimProps) {
    const { address, isConnected } = useAccount();
    const publicClient = usePublicClient();
    const { data: walletClient } = useWalletClient();
    const identitySDK = useIdentitySDK('production');

    // Contract Addresses (Celo Mainnet)
    const UBI_SCHEME_ADDRESS = '0x43d72Ff17701B2DA814620735C39C620Ce0ea4A1';
    const GDOLLAR_TOKEN_ADDRESS = '0x62B8B11039FcfE5aB0C56E502b1C372A3d2a9c7A';

    // ABIs
    const UBI_SCHEME_ABI = [
        {
            inputs: [],
            name: "checkEntitlement",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "claim",
            outputs: [{ name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [],
            name: "currentDay",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "periodStart",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function"
        }
    ] as const;

    const ERC20_ABI = [
        {
            inputs: [{ name: "account", type: "address" }],
            name: "balanceOf",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "decimals",
            outputs: [{ name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function"
        }
    ] as const;

    const [isEnrolled, setIsEnrolled] = useState(false);
    const [isCheckingEnrollment, setIsCheckingEnrollment] = useState(false);
    const [fvLink, setFvLink] = useState<string>('');
    const [showFVLink, setShowFVLink] = useState(false);
    const [claimSuccess, setClaimSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [nextClaimTime, setNextClaimTime] = useState<string>('');

    // Read Contract Hooks
    const { data: entitlementAmount, refetch: refetchEntitlement, isLoading: isLoadingEntitlement } = useReadContract({
        address: UBI_SCHEME_ADDRESS,
        abi: UBI_SCHEME_ABI,
        functionName: 'checkEntitlement',
        query: {
            enabled: !!address && isEnrolled,
        }
    });

    const { data: balance, refetch: refetchBalance } = useReadContract({
        address: GDOLLAR_TOKEN_ADDRESS,
        abi: ERC20_ABI,
        functionName: 'balanceOf',
        args: address ? [address] : undefined,
        query: {
            enabled: !!address,
        }
    });

    // Write Contract Hook
    const { writeContractAsync, isPending: isClaiming } = useWriteContract();

    // Check enrollment status on mount
    useEffect(() => {
        if (address && identitySDK) {
            checkEnrollmentStatus();
        }
    }, [address, identitySDK]);

    const checkEnrollmentStatus = async () => {
        if (!address || !identitySDK) return;

        setIsCheckingEnrollment(true);
        setErrorMessage('');

        try {
            const { isWhitelisted } = await identitySDK.getWhitelistedRoot(address);
            setIsEnrolled(isWhitelisted);

            if (isWhitelisted) {
                refetchEntitlement();
                refetchBalance();
            }
        } catch (error: any) {
            console.error('Error checking enrollment:', error);
            setErrorMessage('Failed to check enrollment status');
        } finally {
            setIsCheckingEnrollment(false);
        }
    };

    const handleEnroll = async () => {
        console.log('handleEnroll called. SDK ready:', !!identitySDK, 'Address:', address);

        if (!identitySDK) {
            setErrorMessage('GoodDollar SDK is initializing. Please try again in a moment.');
            return;
        }

        if (!address) {
            setErrorMessage('Wallet not connected.');
            return;
        }

        setErrorMessage('');
        setShowFVLink(true); // Show loading state
        try {
            // Generate Face Verification link
            const callbackUrl = typeof window !== 'undefined' ? window.location.href : '';
            const link = await identitySDK.generateFVLink(false, callbackUrl, 42220); // Celo mainnet chainId
            setFvLink(link);

            // Automatically open the link in a new window
            if (link && typeof window !== 'undefined') {
                window.open(link, '_blank', 'noopener,noreferrer');
            }
        } catch (error: any) {
            console.error('Error generating FV link:', error);
            setErrorMessage('Failed to generate face verification link');
            setShowFVLink(false);
        }
    };

    const handleClaim = async () => {
        if (!address || !walletClient) return;

        setErrorMessage('');
        setClaimSuccess(false);

        try {
            const tx = await writeContractAsync({
                address: UBI_SCHEME_ADDRESS,
                abi: UBI_SCHEME_ABI,
                functionName: 'claim',
            });

            console.log('Claim transaction sent:', tx);

            // Wait for transaction receipt (optional, but good UX)
            if (publicClient && tx) {
                await publicClient.waitForTransactionReceipt({ hash: tx });
            }

            setClaimSuccess(true);

            // Refresh data
            refetchEntitlement();
            refetchBalance();

            // Set next claim time to tomorrow (simplified)
            setNextClaimTime(new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleString());

        } catch (error: any) {
            console.error('Error claiming G$:', error);
            if (error.message?.includes('User not allowed')) {
                setErrorMessage('You are not eligible to claim properly yet. Please ensure you are verified.');
            } else {
                setErrorMessage('Failed to claim G$. The transaction may have failed or was rejected.');
            }
        }
    };



    const formatG$ = (value: bigint | undefined) => {
        if (value === undefined) return '0.00';
        // G$ on Celo has 18 decimals
        const formatted = formatUnits(value, 18);
        return Number(formatted).toFixed(2);
    };

    if (!isConnected || !address) {
        return null;
    }

    return (
        <div className={`bg-gradient-to-br from-blockbelle-pink/10 via-blockbelle-purple/10 to-blockbelle-indigo/10 shadow-lg rounded-xl p-6 border border-blockbelle-purple/20 ${className}`}>
            <h2 className="text-2xl font-bold text-gradient-blockbelle mb-4">
                🌟 GoodDollar UBI Perk
            </h2>
            <p className="text-sm text-gray-600 mb-6">
                Claim your daily Universal Basic Income (G$) on the Celo network. Complete face verification to get started!
            </p>

            {errorMessage && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600">{errorMessage}</p>
                </div>
            )}

            {claimSuccess && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-600 font-medium">
                        ✅ Successfully claimed G$! Next claim available at {nextClaimTime}
                    </p>
                </div>
            )}

            {isCheckingEnrollment ? (
                <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blockbelle-purple"></div>
                    <span className="ml-3 text-gray-600">Checking enrollment status...</span>
                </div>
            ) : !isEnrolled ? (
                <div className="space-y-4">
                    <div className="border-2 border-dashed border-blockbelle-purple/30 rounded-xl p-6 bg-white/50">
                        <h3 className="text-lg font-semibold text-blockbelle-purple mb-2">
                            Not Enrolled Yet
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Complete face verification to enroll in GoodDollar UBI and start claiming your daily G$ tokens.
                        </p>
                        <button
                            onClick={handleEnroll}
                            disabled={showFVLink || !identitySDK}
                            className="gradient-blockbelle hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {!identitySDK ? 'Initializing SDK...' : showFVLink ? 'Opening verification...' : 'Start Face Verification →'}
                        </button>
                    </div>

                    {showFVLink && fvLink && (
                        <div className="border border-blockbelle-purple/30 rounded-xl p-6 bg-gradient-to-br from-blockbelle-gold/10 to-blockbelle-gold/5">
                            <h3 className="text-lg font-semibold text-blockbelle-purple mb-2">
                                Complete Face Verification
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Click the link below to complete your face verification. This ensures one person = one account for fair UBI distribution.
                            </p>
                            <a
                                href={fvLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block gradient-blockbelle hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                Verify Your Identity →
                            </a>
                            <p className="text-xs text-gray-500 mt-4">
                                After verification, refresh this page to see your claim status.
                            </p>
                        </div>
                    )}

                    <div className="text-center pt-4">
                        <p className="text-xs text-gray-500">
                            Don't have a GoodDollar account?{' '}
                            <a
                                href="https://wallet.gooddollar.org/open?inviteCode=UKRCQSNFQq&utm_campaign=celo-onlyurl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blockbelle-purple hover:text-blockbelle-pink font-bold underline ml-1"
                            >
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
            ) : (
                <div className="space-y-4">
                    <div className="border-2 border-blockbelle-gold bg-gradient-to-br from-blockbelle-gold/10 to-blockbelle-gold/5 rounded-xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-blockbelle-purple">
                                ✅ Enrolled in GoodDollar UBI
                            </h3>
                            <div className="bg-white/80 rounded-full px-3 py-1 shadow-sm border border-blockbelle-purple/10">
                                <p className="text-xs font-medium text-blockbelle-purple">
                                    Balance: {formatG$(balance as bigint)} G$
                                </p>
                            </div>
                        </div>

                        {isLoadingEntitlement ? (
                            <div className="flex items-center justify-center py-4">
                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blockbelle-purple"></div>
                                <span className="ml-3 text-sm text-gray-600">Checking eligibility...</span>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="bg-white/70 rounded-lg p-4">
                                    <p className="text-sm text-gray-600 mb-1">Claimable Amount</p>
                                    <p className="text-3xl font-bold text-gradient-blockbelle">
                                        {claimSuccess ? "0.00" : formatG$(entitlementAmount as bigint)} G$
                                    </p>
                                    {nextClaimTime && (
                                        <p className="text-xs text-gray-500 mt-2">
                                            Next claim: {nextClaimTime}
                                        </p>
                                    )}
                                </div>

                                {!claimSuccess && entitlementAmount && (entitlementAmount as bigint) > 0n ? (
                                    <button
                                        onClick={handleClaim}
                                        disabled={isClaiming}
                                        className="gradient-blockbelle hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        {isClaiming ? (
                                            <span className="flex items-center justify-center">
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                Claiming...
                                            </span>
                                        ) : (
                                            'Claim G$ Now'
                                        )}
                                    </button>
                                ) : (
                                    <div className="text-center py-4">
                                        {claimSuccess ? (
                                            <p className="text-sm text-green-600 font-medium bg-green-50 px-3 py-2 rounded-lg inline-block">
                                                🎉 You have claimed your daily G$!
                                            </p>
                                        ) : (
                                            <p className="text-sm text-gray-600">
                                                No G$ available to claim right now. Check back later!
                                            </p>
                                        )}

                                        {!claimSuccess && (
                                            <button
                                                onClick={() => { refetchEntitlement(); refetchBalance(); }}
                                                className="mt-3 text-blockbelle-purple hover:text-blockbelle-pink font-medium text-sm underline block mx-auto"
                                            >
                                                Refresh Status
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="bg-gradient-to-br from-blockbelle-purple/10 to-blockbelle-indigo/10 border border-blockbelle-purple/30 rounded-xl p-4 mb-4">
                        <h3 className="text-sm font-semibold text-blockbelle-purple mb-2">About GoodDollar UBI</h3>
                        <p className="text-xs text-gray-700">
                            GoodDollar provides Universal Basic Income to anyone, anywhere. Your daily G$ claim helps create a more equitable financial system. Gas fees are minimal (~$0.01 on Celo).
                        </p>
                    </div>

                    {/* Referral Card */}
                    <ReferralCard />
                </div>
            )}
        </div>
    );
}
