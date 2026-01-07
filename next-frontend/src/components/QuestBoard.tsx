'use client';

import { useState } from 'react';
import { useQuestTracking, Quest } from '@/hooks/useQuestTracking';
import { formatUnits } from 'viem';
import {
    ChatBubbleLeftRightIcon,
    ShieldCheckIcon,
    BanknotesIcon,
    IdentificationIcon,
    FireIcon,
    UserPlusIcon,
    CheckCircleIcon,
    TrophyIcon
} from '@heroicons/react/24/outline';

const CATEGORY_ICONS = {
    chat: ChatBubbleLeftRightIcon,
    verification: ShieldCheckIcon,
    transfer: BanknotesIcon,
    ens: IdentificationIcon,
    streak: FireIcon,
};

const CATEGORY_COLORS = {
    chat: 'from-blue-500 to-cyan-500',
    verification: 'from-green-500 to-emerald-500',
    transfer: 'from-purple-500 to-pink-500',
    ens: 'from-orange-500 to-yellow-500',
    streak: 'from-red-500 to-orange-500',
};

export default function QuestBoard() {
    const { quests, claimQuestReward } = useQuestTracking();
    const [claimingQuest, setClaimingQuest] = useState<string | null>(null);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

    const handleClaimReward = async (questId: string) => {
        setError('');
        setSuccess('');
        setClaimingQuest(questId);

        try {
            await claimQuestReward(questId);
            setSuccess('Quest reward claimed successfully! 🎉');
        } catch (err: any) {
            console.error('Failed to claim quest reward:', err);
            setError(err.message || 'Failed to claim reward. Please try again.');
        } finally {
            setClaimingQuest(null);
        }
    };

    const formatG$ = (value: bigint) => {
        return Number(formatUnits(value, 18)).toFixed(0);
    };

    const completedQuests = quests.filter(q => q.completed);
    const unclaimedQuests = completedQuests.filter(q => !q.claimed);
    const activeQuests = quests.filter(q => !q.completed);

    return (
        <div className="bg-gradient-to-br from-blockbelle-pink/10 via-blockbelle-purple/10 to-blockbelle-indigo/10 shadow-lg rounded-xl p-6 border border-blockbelle-purple/20">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                    <TrophyIcon className="h-8 w-8 text-blockbelle-gold" />
                    <div>
                        <h2 className="text-2xl font-bold text-gradient-blockbelle">Quest Board</h2>
                        <p className="text-sm text-gray-600">Complete quests to earn G$ rewards</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-sm text-gray-600">Completed</p>
                    <p className="text-2xl font-bold text-blockbelle-purple">
                        {completedQuests.length}/{quests.length}
                    </p>
                </div>
            </div>

            {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600">{error}</p>
                </div>
            )}

            {success && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-600">{success}</p>
                </div>
            )}

            {/* Unclaimed Rewards Section */}
            {unclaimedQuests.length > 0 && (
                <div className="mb-6 p-4 bg-gradient-to-r from-blockbelle-gold/20 to-blockbelle-gold/10 border-2 border-blockbelle-gold rounded-xl">
                    <h3 className="text-lg font-bold text-blockbelle-purple mb-3 flex items-center">
                        <TrophyIcon className="h-5 w-5 mr-2" />
                        Ready to Claim ({unclaimedQuests.length})
                    </h3>
                    <div className="space-y-2">
                        {unclaimedQuests.map(quest => (
                            <QuestCard
                                key={quest.id}
                                quest={quest}
                                onClaim={handleClaimReward}
                                isClaiming={claimingQuest === quest.id}
                                formatG$={formatG$}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Active Quests */}
            {activeQuests.length > 0 && (
                <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Active Quests</h3>
                    <div className="space-y-3">
                        {activeQuests.map(quest => (
                            <QuestCard
                                key={quest.id}
                                quest={quest}
                                onClaim={handleClaimReward}
                                isClaiming={claimingQuest === quest.id}
                                formatG$={formatG$}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* All Completed */}
            {activeQuests.length === 0 && unclaimedQuests.length === 0 && (
                <div className="text-center py-8">
                    <TrophyIcon className="h-16 w-16 text-blockbelle-gold mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-blockbelle-purple mb-2">
                        All Quests Completed! 🎉
                    </h3>
                    <p className="text-gray-600">
                        You've claimed all available rewards. Check back later for new quests!
                    </p>
                </div>
            )}
        </div>
    );
}

interface QuestCardProps {
    quest: Quest;
    onClaim: (questId: string) => void;
    isClaiming: boolean;
    formatG$: (value: bigint) => string;
}

function QuestCard({ quest, onClaim, isClaiming, formatG$ }: QuestCardProps) {
    const Icon = CATEGORY_ICONS[quest.category];
    const colorGradient = CATEGORY_COLORS[quest.category];
    const progressPercent = (quest.progress / quest.target) * 100;

    return (
        <div className={`bg-white rounded-lg p-4 border-2 ${quest.completed ? 'border-green-300' : 'border-gray-200'
            } hover:shadow-md transition-all duration-200`}>
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-start space-x-3 flex-1">
                    <div className={`bg-gradient-to-br ${colorGradient} p-2 rounded-lg`}>
                        <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 flex items-center">
                            {quest.title}
                            {quest.claimed && (
                                <CheckCircleIcon className="h-4 w-4 ml-2 text-green-500" />
                            )}
                        </h4>
                        <p className="text-sm text-gray-600">{quest.description}</p>
                    </div>
                </div>
                <div className="text-right ml-4">
                    <p className="text-lg font-bold text-blockbelle-gold">
                        {formatG$(quest.reward)} G$
                    </p>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{quest.progress}/{quest.target}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className={`bg-gradient-to-r ${colorGradient} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
            </div>

            {/* Action Button */}
            {quest.completed && !quest.claimed && (
                <button
                    onClick={() => onClaim(quest.id)}
                    disabled={isClaiming}
                    className="w-full gradient-blockbelle hover:opacity-90 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                    {isClaiming ? (
                        <span className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Claiming...
                        </span>
                    ) : (
                        'Claim Reward'
                    )}
                </button>
            )}

            {quest.claimed && (
                <div className="w-full bg-green-50 border border-green-200 text-green-700 font-medium py-2 px-4 rounded-lg text-center">
                    ✅ Reward Claimed
                </div>
            )}
        </div>
    );
}
