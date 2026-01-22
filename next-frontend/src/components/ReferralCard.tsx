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
        <div className="bg-gradient-to-br from-blockbelle-indigo/10 via-blockbelle-purple/10 to-blockbelle-pink/10 border-2 border-blockbelle-purple/30 rounded-xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-blockbelle-purple to-blockbelle-indigo p-3 rounded-lg">
                    <UserPlusIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gradient-blockbelle">Invite & Earn</h3>
                    <p className="text-sm text-gray-600">Share Chata-Bella with friends</p>
                </div>
            </div>

            <div className="bg-white/70 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-700 mb-3">
                    Invite friends to join Chata-Bella and earn G$ rewards through GoodDollar Engagement Rewards!
                </p>
                <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                        <div className="bg-blockbelle-gold/20 rounded-full p-1">
                            <CheckCircleIcon className="h-4 w-4 text-blockbelle-gold" />
                        </div>
                        <span className="text-gray-700">Both you and your friend earn <strong>~27 G$</strong></span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                        <div className="bg-blockbelle-gold/20 rounded-full p-1">
                            <CheckCircleIcon className="h-4 w-4 text-blockbelle-gold" />
                        </div>
                        <span className="text-gray-700">Your friend gets <strong>~63 G$</strong> welcome bonus</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                        <div className="bg-blockbelle-gold/20 rounded-full p-1">
                            <CheckCircleIcon className="h-4 w-4 text-blockbelle-gold" />
                        </div>
                        <span className="text-gray-700">One-time reward per referral</span>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg p-3 mb-3 border border-gray-200">
                <p className="text-xs text-gray-500 mb-1">Your Referral Link</p>
                <p className="text-sm text-gray-800 font-mono break-all">
                    {getReferralLink()}
                </p>
            </div>

            <button
                onClick={handleCopyLink}
                className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 ${copied
                        ? 'bg-green-500 text-white'
                        : 'gradient-blockbelle hover:opacity-90 text-white'
                    }`}
            >
                {copied ? (
                    <span className="flex items-center justify-center">
                        <CheckCircleIcon className="h-5 w-5 mr-2" />
                        Link Copied!
                    </span>
                ) : (
                    <span className="flex items-center justify-center">
                        <LinkIcon className="h-5 w-5 mr-2" />
                        Copy Invite Link
                    </span>
                )}
            </button>

            <p className="text-xs text-gray-500 text-center mt-3">
                Powered by GoodDollar Engagement Rewards • User must be verified
            </p>
        </div>
    );
}
