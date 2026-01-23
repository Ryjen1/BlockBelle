'use client';

import { useState, useEffect } from 'react';
import { useAccount, usePublicClient, useWalletClient, useReadContract, useWriteContract } from 'wagmi';
import { formatUnits } from 'viem';
import { useIdentitySDK } from '@goodsdks/identity-sdk';
import {
    CheckCircleIcon,
    XCircleIcon,
    ArrowPathIcon,
    ShieldCheckIcon,
    ClockIcon,
    BanknotesIcon,
    ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
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
    const [hasClaimedToday, setHasClaimedToday] = useState(false);
    const [sdkTimeout, setSdkTimeout] = useState(false);
    const [enrollmentCheckTimeout, setEnrollmentCheckTimeout] = useState(false);

    // Read Contract Hooks - Check entitlement (also tells us if enrolled)
    const { data: entitlementAmount, refetch: refetchEntitlement, isLoading: isLoadingEntitlement, isError: entitlementError } = useReadContract({
        address: UBI_SCHEME_ADDRESS,
        abi: UBI_SCHEME_ABI,
        functionName: 'checkEntitlement',
        query: {
            enabled: !!address, // Check regardless of SDK status!
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

    // Check if already claimed today (from localStorage)
    useEffect(() => {
        if (!address) return;

        const lastClaimKey = `gooddollar_last_claim_${address}`;
        const lastClaimTimestamp = localStorage.getItem(lastClaimKey);

        if (lastClaimTimestamp) {
            const lastClaim = new Date(parseInt(lastClaimTimestamp));
            const now = new Date();

            // Check if claim was made today (same UTC day)
            const isSameDay = lastClaim.getUTCDate() === now.getUTCDate() &&
                lastClaim.getUTCMonth() === now.getUTCMonth() &&
                lastClaim.getUTCFullYear() === now.getUTCFullYear();

            if (isSameDay) {
                setHasClaimedToday(true);
                setClaimSuccess(true);
                // Calculate next claim time (next UTC day)
                const tomorrow = new Date(now);
                tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
                tomorrow.setUTCHours(0, 0, 0, 0);
                setNextClaimTime(tomorrow.toLocaleString());
            }
        }
    }, [address]);

    // SDK timeout detection (10 seconds)
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!identitySDK && !isEnrolled) {
                setSdkTimeout(true);
            }
        }, 10000);

        return () => clearTimeout(timer);
    }, [identitySDK, isEnrolled]);

    // Enrollment check timeout (5 seconds)
    useEffect(() => {
        if (!isCheckingEnrollment) return;

        const timer = setTimeout(() => {
            if (isCheckingEnrollment) {
                console.warn('Enrollment check timed out after 5 seconds');
                setIsCheckingEnrollment(false);
                setEnrollmentCheckTimeout(true);
                // If we have entitlement data from contract, use that
                if (typeof entitlementAmount !== 'undefined' && !entitlementError) {
                    setIsEnrolled(true);
                }
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, [isCheckingEnrollment, entitlementAmount, entitlementError]);

    // Check enrollment from contract first (fallback if SDK fails)
    useEffect(() => {
        if (address && typeof entitlementAmount !== 'undefined' && !entitlementError) {
            // If contract returns entitlement, user is enrolled!
            setIsEnrolled(true);
        }
    }, [address, entitlementAmount, entitlementError]);

    // Check enrollment status from SDK (preferred method)
    useEffect(() => {
        // Only check once, and only if we haven't timed out or already enrolled
        if (address && identitySDK && !isEnrolled && !enrollmentCheckTimeout && !isCheckingEnrollment) {
            checkEnrollmentStatus();
        }
    }, [address, identitySDK, isEnrolled, enrollmentCheckTimeout]);

    const checkEnrollmentStatus = async () => {
        if (!address || !identitySDK) {
            setIsCheckingEnrollment(false);
            return;
        }

        setIsCheckingEnrollment(true);
        setErrorMessage('');

        try {
            // Add a race condition with timeout
            const timeoutPromise = new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Enrollment check timeout')), 4000)
            );

            const checkPromise = identitySDK.getWhitelistedRoot(address);

            const { isWhitelisted } = await Promise.race([checkPromise, timeoutPromise]) as any;
            setIsEnrolled(isWhitelisted);

            if (isWhitelisted) {
                refetchEntitlement();
                refetchBalance();
            }
        } catch (error: any) {
            console.error('Error checking enrollment:', error);
            // Don't show error message for timeout - just fall back to contract check
            if (!error.message?.includes('timeout')) {
                setErrorMessage('Failed to check enrollment status');
            }
            // Fall back to contract-based check
            if (typeof entitlementAmount !== 'undefined' && !entitlementError) {
                setIsEnrolled(true);
            }
        } finally {
            setIsCheckingEnrollment(false);
        }
    };

    const handleEnroll = async () => {
        if (!identitySDK) {
            setErrorMessage('GoodDollar SDK is initializing. Please try again in a moment.');
            return;
        }

        if (!address) {
            setErrorMessage('Wallet not connected.');
            return;
        }

        setErrorMessage('');
        setShowFVLink(true);
        try {
            const callbackUrl = typeof window !== 'undefined' ? window.location.href : '';
            const link = await identitySDK.generateFVLink(false, callbackUrl, 42220);
            setFvLink(link);

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

            if (publicClient && tx) {
                await publicClient.waitForTransactionReceipt({ hash: tx });
            }

            // Store claim timestamp in localStorage
            const lastClaimKey = `gooddollar_last_claim_${address}`;
            localStorage.setItem(lastClaimKey, Date.now().toString());

            setClaimSuccess(true);
            setHasClaimedToday(true);

            refetchEntitlement();
            refetchBalance();

            // Calculate next claim time (next UTC day)
            const now = new Date();
            const tomorrow = new Date(now);
            tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
            tomorrow.setUTCHours(0, 0, 0, 0);
            setNextClaimTime(tomorrow.toLocaleString());

        } catch (error: any) {
            console.error('Error claiming G$:', error);
            if (error.message?.includes('User not allowed')) {
                setErrorMessage('You are not eligible to claim. Please ensure you are verified.');
            } else {
                setErrorMessage('Failed to claim G$. The transaction may have failed or was rejected.');
            }
        }
    };

    const formatG$ = (value: bigint | undefined) => {
        if (value === undefined) return '0.00';
        const formatted = formatUnits(value, 18);
        return Number(formatted).toFixed(2);
    };

    if (!isConnected || !address) {
        return null;
    }

    return (
        <div className={`bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg ${className}`}>
            {/* Header */}
            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-200">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-lg">
                    <BanknotesIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-900">GoodDollar UBI</h2>
                    <p className="text-sm text-gray-600">Universal Basic Income on Celo</p>
                </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
                <div className="mb-5 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                    <div className="flex items-start gap-3">
                        <XCircleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-sm font-medium text-red-800">Error</p>
                            <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Message */}
            {claimSuccess && (
                <div className="mb-5 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                    <div className="flex items-start gap-3">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-sm font-medium text-green-800">Claim Successful</p>
                            <p className="text-sm text-green-700 mt-1">
                                Next claim available: {nextClaimTime}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Checking Status */}
            {isCheckingEnrollment ? (
                <div className="flex items-center justify-center py-12">
                    <ArrowPathIcon className="h-8 w-8 text-gray-400 animate-spin" />
                    <span className="ml-3 text-gray-600">Checking enrollment status...</span>
                </div>
            ) : !isEnrolled ? (
                /* Not Enrolled */
                <div className="space-y-5">
                    <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-5">
                        <div className="flex items-start gap-3 mb-4">
                            <ExclamationTriangleIcon className="h-6 w-6 text-amber-600 flex-shrink-0" />
                            <div>
                                <h3 className="text-base font-semibold text-amber-900 mb-1">
                                    Verification Required
                                </h3>
                                <p className="text-sm text-amber-800">
                                    Complete face verification to enroll in GoodDollar UBI and start claiming daily G$ tokens.
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={handleEnroll}
                            disabled={showFVLink || (!identitySDK && !sdkTimeout)}
                            className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-300 text-white font-semibold py-3 px-4 rounded-lg transition-colors disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            <ShieldCheckIcon className="h-5 w-5" />
                            {!identitySDK && !sdkTimeout ? 'Initializing SDK...' : showFVLink ? 'Opening verification...' : 'Start Verification'}
                        </button>

                        {sdkTimeout && !identitySDK && (
                            <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                <p className="text-xs text-blue-800 mb-2">
                                    SDK taking too long? Use manual verification:
                                </p>
                                <a
                                    href="https://wallet.gooddollar.org/open?inviteCode=UKRCQSNFQq&utm_campaign=celo-onlyurl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2 px-4 rounded-lg transition-colors w-full justify-center"
                                >
                                    <ShieldCheckIcon className="h-4 w-4" />
                                    Verify Manually
                                </a>
                                <p className="text-xs text-blue-700 mt-2">
                                    After verification, return here and refresh the page.
                                </p>
                            </div>
                        )}
                    </div>

                    {showFVLink && fvLink && (
                        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-5">
                            <h3 className="text-base font-semibold text-blue-900 mb-2">
                                Complete Face Verification
                            </h3>
                            <p className="text-sm text-blue-800 mb-4">
                                Click the link below to complete your face verification. This ensures one person = one account for fair UBI distribution.
                            </p>
                            <a
                                href={fvLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                            >
                                <ShieldCheckIcon className="h-5 w-5" />
                                Verify Your Identity
                            </a>
                            <p className="text-xs text-blue-700 mt-3">
                                After verification, refresh this page to see your claim status.
                            </p>
                        </div>
                    )}

                    <div className="text-center pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                            Don't have a GoodDollar account?{' '}
                            <a
                                href="https://wallet.gooddollar.org/open?inviteCode=UKRCQSNFQq&utm_campaign=celo-onlyurl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-700 font-semibold underline"
                            >
                                Sign up here
                            </a>
                        </p>
                    </div>
                </div>
            ) : (
                /* Enrolled - Show Claim Interface */
                <div className="space-y-5">
                    {/* Balance & Status */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-5">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <CheckCircleIcon className="h-5 w-5 text-green-600" />
                                <span className="text-sm font-semibold text-green-900">Enrolled in UBI</span>
                            </div>
                            <div className="bg-white px-3 py-1.5 rounded-full border border-green-300">
                                <p className="text-xs font-medium text-gray-700">
                                    Balance: <span className="font-bold text-green-700">{formatG$(balance as bigint)} G$</span>
                                </p>
                            </div>
                        </div>

                        {isLoadingEntitlement ? (
                            <div className="flex items-center justify-center py-8">
                                <ArrowPathIcon className="h-6 w-6 text-green-600 animate-spin" />
                                <span className="ml-3 text-sm text-gray-600">Checking eligibility...</span>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {/* Claimable Amount */}
                                <div className="bg-white rounded-lg p-4 border border-green-200">
                                    <p className="text-xs font-medium text-gray-600 uppercase tracking-wide mb-2">
                                        Claimable Amount
                                    </p>
                                    <p className="text-4xl font-bold text-gray-900">
                                        {hasClaimedToday ? "0.00" : formatG$(entitlementAmount as bigint)} <span className="text-2xl text-gray-600">G$</span>
                                    </p>
                                    {nextClaimTime && (
                                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200">
                                            <ClockIcon className="h-4 w-4 text-gray-500" />
                                            <p className="text-xs text-gray-600">
                                                Next claim: {nextClaimTime}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Claim Button or Status */}
                                {!hasClaimedToday && !claimSuccess && entitlementAmount && (entitlementAmount as bigint) > 0n ? (
                                    <button
                                        onClick={handleClaim}
                                        disabled={isClaiming}
                                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-lg transition-all shadow-md hover:shadow-lg disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isClaiming ? (
                                            <>
                                                <ArrowPathIcon className="h-5 w-5 animate-spin" />
                                                Processing Claim...
                                            </>
                                        ) : (
                                            <>
                                                <BanknotesIcon className="h-5 w-5" />
                                                Claim G$ Now
                                            </>
                                        )}
                                    </button>
                                ) : (
                                    <div className="text-center py-6 bg-gray-50 rounded-lg border border-gray-200">
                                        {hasClaimedToday || claimSuccess ? (
                                            <div>
                                                <div className="flex items-center justify-center gap-2 mb-2">
                                                    <CheckCircleIcon className="h-6 w-6 text-green-600" />
                                                    <p className="text-base font-semibold text-green-700">
                                                        Daily Claim Completed
                                                    </p>
                                                </div>
                                                {nextClaimTime && (
                                                    <p className="text-sm text-gray-600">
                                                        Come back after {nextClaimTime}
                                                    </p>
                                                )}
                                            </div>
                                        ) : (
                                            <p className="text-sm text-gray-600">
                                                No G$ available to claim right now. Check back later.
                                            </p>
                                        )}

                                        {!hasClaimedToday && !claimSuccess && (
                                            <button
                                                onClick={() => {
                                                    refetchEntitlement();
                                                    refetchBalance();
                                                    setHasClaimedToday(false);
                                                }}
                                                className="mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium underline inline-flex items-center gap-1"
                                            >
                                                <ArrowPathIcon className="h-4 w-4" />
                                                Refresh Status
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Info Box */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h3 className="text-sm font-semibold text-blue-900 mb-2">About GoodDollar UBI</h3>
                        <p className="text-xs text-blue-800">
                            GoodDollar provides Universal Basic Income to anyone, anywhere. Your daily G$ claim helps create a more equitable financial system. Gas fees are minimal (approximately $0.01 on Celo).
                        </p>
                    </div>

                    {/* Referral Card */}
                    <ReferralCard />
                </div>
            )}
        </div>
    );
}
