'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { LinkIcon, UserPlusIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function ReferralCard() {
    const { address } = useAccount();
    const [copied, setCopied] = useState(false);

    const getReferralLink = () => {
        if (typeof window === 'undefined' || !address) return '';
        const baseUrl = window.location.origin;
        return `${baseUrl}?ref=${address}`;
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

    if (!address) return null;

    return (
        <div className="glass-card rounded-2xl p-4 sm:p-6 border border-blockbelle-purple/30 shadow-lg animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-blockbelle-purple to-blockbelle-indigo p-3 sm:p-4 rounded-xl shadow-md">
                    <UserPlusIcon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gradient-blockbelle">Invite & Earn</h3>
                    <p className="text-sm text-gray-600">Share Chata-Bella with friends</p>
                </div>
            </div>

            <div className="bg-white/80 rounded-xl p-4 sm:p-5 mb-5 shadow-sm">
                <p className="text-sm sm:text-base text-gray-700 mb-4">
                    Invite friends to join Chata-Bella and earn G$ rewards through GoodDollar Engagement Rewards!
                </p>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm sm:text-base">
                        <div className="bg-blockbelle-gold/20 rounded-full p-1.5 flex-shrink-0">
                            <CheckCircleIcon className="h-5 w-5 text-blockbelle-gold" />
                        </div>
                        <span className="text-gray-700">Both you and your friend earn <strong>~27 G$</strong></span>
                    </div>
                    <div className="flex items-center gap-3 text-sm sm:text-base">
                        <div className="bg-blockbelle-gold/20 rounded-full p-1.5 flex-shrink-0">
                            <CheckCircleIcon className="h-5 w-5 text-blockbelle-gold" />
                        </div>
                        <span className="text-gray-700">Your friend gets <strong>~63 G$</strong> welcome bonus</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm sm:text-base">
                        <div className="bg-blockbelle-gold/20 rounded-full p-1.5 flex-shrink-0">
                            <CheckCircleIcon className="h-5 w-5 text-blockbelle-gold" />
                        </div>
                        <span className="text-gray-700">One-time reward per referral</span>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl p-4 mb-4 border border-gray-200 shadow-sm">
                <p className="text-xs text-gray-500 mb-2">Your Referral Link</p>
                <p className="text-sm font-mono break-all text-gray-800">
                    {getReferralLink()}
                </p>
            </div>

            <button
                onClick={handleCopyLink}
                className={`btn-touch w-full shadow-lg hover:shadow-xl transition-all duration-300 ${copied
                        ? 'bg-green-500 text-white'
                        : 'gradient-blockbelle hover:opacity-90 text-white'
                    }`}
            >
                {copied ? (
                    <span className="flex items-center justify-center gap-2">
                        <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                        Link Copied!
                    </span>
                ) : (
                    <span className="flex items-center justify-center gap-2">
                        <LinkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                        Copy Invite Link
                    </span>
                )}
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
                Powered by GoodDollar Engagement Rewards • User must be verified
            </p>
        </div>
    );
}
