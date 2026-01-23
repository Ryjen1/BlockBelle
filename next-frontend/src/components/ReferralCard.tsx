'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { LinkIcon, UserPlusIcon, CheckCircleIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline';

export default function ReferralCard() {
    const { address } = useAccount();
    const [copied, setCopied] = useState(false);

    const getReferralLink = () => {
        if (typeof window === 'undefined' || !address) return '';
        const baseUrl = window.location.origin;
        // Simple, guaranteed-to-work format with wallet address
        return `${baseUrl}?ref=${address}`;
    };

    const getCompactAddress = () => {
        if (!address) return '';
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    const handleCopyLink = async () => {
        const link = getReferralLink();
        try {
            await navigator.clipboard.writeText(link);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy link:', err);
        }
    };

    const handleCopyAddress = async () => {
        if (!address) return;
        try {
            await navigator.clipboard.writeText(address);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy address:', err);
        }
    };

    if (!address) return null;

    return (
        <div className="bg-white rounded-xl p-5 sm:p-6 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
                <div className="bg-gradient-to-br from-blockbelle-purple to-blockbelle-indigo p-3 rounded-lg">
                    <UserPlusIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-900">Referral Program</h3>
                    <p className="text-sm text-gray-600">Invite friends to earn rewards</p>
                </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 mb-4 border border-blue-100">
                <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5">
                        <CheckCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-sm font-medium text-gray-900">You earn 27 G$</p>
                            <p className="text-xs text-gray-600">For each successful referral</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                        <CheckCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-sm font-medium text-gray-900">Friend earns 63 G$</p>
                            <p className="text-xs text-gray-600">Welcome bonus for new users</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                        <CheckCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-sm font-medium text-gray-900">One-time per user</p>
                            <p className="text-xs text-gray-600">Friend must be GoodDollar verified</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                {/* Your Referral ID (Compact) */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                            Your Referral ID
                        </label>
                        <button
                            onClick={handleCopyAddress}
                            className="text-xs text-blockbelle-purple hover:text-blockbelle-pink font-medium flex items-center gap-1 transition-colors"
                        >
                            <ClipboardDocumentIcon className="h-4 w-4" />
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                    <p className="text-lg font-bold text-gray-900 font-mono">
                        {getCompactAddress()}
                    </p>
                </div>

                {/* Referral Link */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <label className="text-xs font-medium text-gray-600 uppercase tracking-wide mb-2 block">
                        Referral Link
                    </label>
                    <p className="text-sm text-gray-700 break-all font-mono">
                        {getReferralLink()}
                    </p>
                </div>

                {/* Copy Button */}
                <button
                    onClick={handleCopyLink}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                        copied
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : 'bg-gradient-to-r from-blockbelle-purple to-blockbelle-indigo hover:opacity-90 text-white shadow-md hover:shadow-lg'
                    }`}
                >
                    {copied ? (
                        <>
                            <CheckCircleIcon className="h-5 w-5" />
                            Link Copied
                        </>
                    ) : (
                        <>
                            <LinkIcon className="h-5 w-5" />
                            Share Referral Link
                        </>
                    )}
                </button>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                    Powered by GoodDollar Engagement Rewards
                </p>
            </div>
        </div>
    );
}
