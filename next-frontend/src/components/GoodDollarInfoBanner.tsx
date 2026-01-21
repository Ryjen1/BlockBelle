'use client';

import { useState } from 'react';
import { InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import GoodDollarVerificationGuide from './GoodDollarVerificationGuide';

interface GoodDollarInfoBannerProps {
  showByDefault?: boolean;
}

export default function GoodDollarInfoBanner({ showByDefault = false }: GoodDollarInfoBannerProps) {
  const [isExpanded, setIsExpanded] = useState(showByDefault);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return null;
  }

  if (!isExpanded) {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4 shadow-sm">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3 flex-1">
            <InformationCircleIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">
                💰 Earn GoodDollar Rewards
              </h3>
              <p className="text-sm text-gray-700">
                Get welcome bonuses when you join through referral links! Both you and your inviter receive G$ tokens.
              </p>
              <button
                onClick={() => setIsExpanded(true)}
                className="mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium underline"
              >
                Learn how to qualify →
              </button>
            </div>
          </div>
          <button
            onClick={() => setIsDismissed(true)}
            className="text-gray-400 hover:text-gray-600 ml-2"
            aria-label="Dismiss"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900">
          🎁 About GoodDollar Engagement Rewards
        </h3>
        <button
          onClick={() => setIsExpanded(false)}
          className="text-gray-400 hover:text-gray-600"
          aria-label="Collapse"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
      <GoodDollarVerificationGuide />
    </div>
  );
}