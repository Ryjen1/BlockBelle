'use client';

import { useState, useEffect } from 'react';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import { parseAbi } from 'viem';
import { useSelfVerification } from './useSelfVerification';

const GDOLLAR_TOKEN_ADDRESS = '0x62B8B11039FcfE5aB0C56E502b1C372A3d2a9c7A'; // Celo Mainnet

const ERC20_ABI = parseAbi([
    'function transfer(address to, uint256 amount) external returns (bool)',
    'function balanceOf(address account) external view returns (uint256)',
]);

export interface Quest {
    id: string;
    title: string;
    description: string;
    reward: bigint;
    progress: number;
    target: number;
    completed: boolean;
    claimed: boolean;
    category: 'chat' | 'verification' | 'transfer' | 'ens' | 'streak';
}

interface QuestProgress {
    messageCount: number;
    isVerified: boolean;
    hasTransferred: boolean;
    hasENS: boolean;
    claimStreak: number;
}

const QUEST_STORAGE_KEY = 'blockbelle_quest_progress';
const REWARDS_WALLET = '0x0000000000000000000000000000000000000000'; // TODO: Replace with actual rewards wallet

export function useQuestTracking() {
    const { address } = useAccount();
    const { isVerified } = useSelfVerification();
    const [progress, setProgress] = useState<QuestProgress>({
        messageCount: 0,
        isVerified: false,
        hasTransferred: false,
        hasENS: false,
        claimStreak: 0,
    });

    const { writeContractAsync } = useWriteContract();

    // Load progress from localStorage
    useEffect(() => {
        if (!address) return;

        const stored = localStorage.getItem(`${QUEST_STORAGE_KEY}_${address}`);
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                setProgress(parsed);
            } catch (e) {
                console.error('Failed to parse quest progress:', e);
            }
        }
    }, [address]);

    // Update verification status
    useEffect(() => {
        if (isVerified && !progress.isVerified) {
            setProgress(prev => ({ ...prev, isVerified: true }));
        }
    }, [isVerified, progress.isVerified]);

    // Save progress to localStorage
    useEffect(() => {
        if (!address) return;
        localStorage.setItem(`${QUEST_STORAGE_KEY}_${address}`, JSON.stringify(progress));
    }, [address, progress]);

    // Referral tracking removed - now handled by GoodDollar Engagement Rewards

    const incrementMessageCount = () => {
        setProgress(prev => ({ ...prev, messageCount: prev.messageCount + 1 }));
    };

    const markTransferred = () => {
        setProgress(prev => ({ ...prev, hasTransferred: true }));
    };

    const markENSRegistered = () => {
        setProgress(prev => ({ ...prev, hasENS: true }));
    };

    const incrementClaimStreak = () => {
        setProgress(prev => ({ ...prev, claimStreak: prev.claimStreak + 1 }));
    };

    const resetClaimStreak = () => {
        setProgress(prev => ({ ...prev, claimStreak: 0 }));
    };

    // Define quests
    const quests: Quest[] = [
        // Chat Milestones - More generous since each message costs gas
        {
            id: 'chat_5',
            title: 'First Messages',
            description: 'Send 5 messages in the community (each costs gas!)',
            reward: BigInt(100) * BigInt(10 ** 18),
            progress: Math.min(progress.messageCount, 5),
            target: 5,
            completed: progress.messageCount >= 5,
            claimed: false,
            category: 'chat',
        },
        {
            id: 'chat_15',
            title: 'Active Chatter',
            description: 'Send 15 messages in the community',
            reward: BigInt(200) * BigInt(10 ** 18),
            progress: Math.min(progress.messageCount, 15),
            target: 15,
            completed: progress.messageCount >= 15,
            claimed: false,
            category: 'chat',
        },
        {
            id: 'chat_30',
            title: 'Community Champion',
            description: 'Send 30 messages in the community',
            reward: BigInt(400) * BigInt(10 ** 18),
            progress: Math.min(progress.messageCount, 30),
            target: 30,
            completed: progress.messageCount >= 30,
            claimed: false,
            category: 'chat',
        },
        // Verification
        {
            id: 'self_verify',
            title: 'Verified Human',
            description: 'Complete SELF Protocol verification',
            reward: BigInt(1000) * BigInt(10 ** 18),
            progress: progress.isVerified ? 1 : 0,
            target: 1,
            completed: progress.isVerified,
            claimed: false,
            category: 'verification',
        },
        // Transfer
        {
            id: 'first_transfer',
            title: 'First Transaction',
            description: 'Send G$ to another user',
            reward: BigInt(100) * BigInt(10 ** 18),
            progress: progress.hasTransferred ? 1 : 0,
            target: 1,
            completed: progress.hasTransferred,
            claimed: false,
            category: 'transfer',
        },
        // ENS
        {
            id: 'ens_register',
            title: 'ENS Identity',
            description: 'Register an ENS name',
            reward: BigInt(500) * BigInt(10 ** 18),
            progress: progress.hasENS ? 1 : 0,
            target: 1,
            completed: progress.hasENS,
            claimed: false,
            category: 'ens',
        },
        // Streaks
        {
            id: 'streak_3',
            title: '3-Day Streak',
            description: 'Claim G$ for 3 days in a row',
            reward: BigInt(100) * BigInt(10 ** 18),
            progress: Math.min(progress.claimStreak, 3),
            target: 3,
            completed: progress.claimStreak >= 3,
            claimed: false,
            category: 'streak',
        },
        {
            id: 'streak_7',
            title: 'Week Warrior',
            description: 'Claim G$ for 7 days in a row',
            reward: BigInt(300) * BigInt(10 ** 18),
            progress: Math.min(progress.claimStreak, 7),
            target: 7,
            completed: progress.claimStreak >= 7,
            claimed: false,
            category: 'streak',
        },
        {
            id: 'streak_14',
            title: 'Fortnight Champion',
            description: 'Claim G$ for 14 days in a row',
            reward: BigInt(750) * BigInt(10 ** 18),
            progress: Math.min(progress.claimStreak, 14),
            target: 14,
            completed: progress.claimStreak >= 14,
            claimed: false,
            category: 'streak',
        },
        // Note: Referral rewards now handled by GoodDollar Engagement Rewards integration
    ];

    // Clean up old referral quest claims (migration from old version)
    useEffect(() => {
        if (!address) return;
        const oldReferralQuestIds = ['referral_1', 'referral_3', 'referral_5'];
        oldReferralQuestIds.forEach(questId => {
            const claimedKey = `quest_claimed_${address}_${questId}`;
            localStorage.removeItem(claimedKey);
        });
    }, [address]);

    // Load claimed status from localStorage
    const questsWithClaimedStatus = quests.map(quest => {
        const claimedKey = `quest_claimed_${address}_${quest.id}`;
        const claimed = localStorage.getItem(claimedKey) === 'true';
        return { ...quest, claimed };
    });

    const claimQuestReward = async (questId: string) => {
        if (!address) throw new Error('Wallet not connected');

        const quest = questsWithClaimedStatus.find(q => q.id === questId);
        if (!quest) throw new Error('Quest not found');
        if (!quest.completed) throw new Error('Quest not completed');
        if (quest.claimed) throw new Error('Quest already claimed');

        try {
            // Transfer G$ from rewards wallet to user
            const tx = await writeContractAsync({
                address: GDOLLAR_TOKEN_ADDRESS,
                abi: ERC20_ABI,
                functionName: 'transfer',
                args: [address, quest.reward],
            });

            // Mark as claimed
            const claimedKey = `quest_claimed_${address}_${questId}`;
            localStorage.setItem(claimedKey, 'true');

            return tx;
        } catch (error) {
            console.error('Failed to claim quest reward:', error);
            throw error;
        }
    };

    return {
        quests: questsWithClaimedStatus,
        progress,
        incrementMessageCount,
        markTransferred,
        markENSRegistered,
        incrementClaimStreak,
        resetClaimStreak,
        claimQuestReward,
    };
}
