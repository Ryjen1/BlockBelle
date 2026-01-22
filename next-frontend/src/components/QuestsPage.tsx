'use client';

import QuestBoard from '@/components/QuestBoard';
import ReferralCard from '@/components/ReferralCard';

export default function QuestsPage() {
    return (
        <div className="space-y-6">
            {/* Quest Board */}
            <QuestBoard />

            {/* Referral Card */}
            <ReferralCard />
        </div>
    );
}
