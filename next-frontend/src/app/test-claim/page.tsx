'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import EngagementRewardsClaim from '@/components/EngagementRewardsClaim';
import { useEngagementRewards } from '@/hooks/useEngagementRewards';

export default function TestClaimPage() {
  const { address, isConnected } = useAccount();
  const { setInviterAddress, inviterAddress } = useEngagementRewards();
  const [testInviter, setTestInviter] = useState('');

  const handleSetInviter = () => {
    if (testInviter) {
      setInviterAddress(testInviter as `0x${string}`);
      alert('Inviter set! Reload to see the claim component.');
    }
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
            <h1 className="text-2xl font-bold text-yellow-800 mb-2">
              Connect Wallet to Test Claim
            </h1>
            <p className="text-yellow-700">
              Please connect your wallet using the button in the header
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">
            🧪 Test Engagement Rewards Claim
          </h1>
          <p className="text-purple-100">
            Testing GoodDollar Engagement Rewards Integration
          </p>
        </div>

        {/* Current Status */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">📊 Current Status</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Your Wallet:</span>
              <span className="font-mono text-xs">{address}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Current Inviter:</span>
              <span className="font-mono text-xs">
                {inviterAddress || 'Not set'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Environment:</span>
              <span className="font-semibold">
                {process.env.NODE_ENV} (DEV Contract)
              </span>
            </div>
          </div>
        </div>

        {/* Set Test Inviter */}
        {!inviterAddress && (
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-4">
              🎯 Step 1: Set Test Inviter
            </h2>
            <p className="text-sm text-blue-800 mb-4">
              Enter an inviter wallet address to test the claim flow. Use any valid Celo address (can be your other wallet):
            </p>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="0x... (Inviter wallet address)"
                value={testInviter}
                onChange={(e) => setTestInviter(e.target.value)}
                className="flex-1 p-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSetInviter}
                disabled={!testInviter || testInviter.length !== 42}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Set Inviter
              </button>
            </div>
            <p className="text-xs text-blue-600 mt-2">
              💡 Tip: Use your own wallet address for testing
            </p>
          </div>
        )}

        {/* Claim Component */}
        {inviterAddress ? (
          <div>
            <h2 className="text-xl font-bold mb-4">
              🎁 Step 2: Test Claim Component
            </h2>
            <EngagementRewardsClaim />
          </div>
        ) : (
          <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center">
            <p className="text-gray-600">
              Set an inviter address above to see the claim component
            </p>
          </div>
        )}

        {/* Instructions */}
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-green-900 mb-3">
            ✅ What to Check
          </h3>
          <ul className="space-y-2 text-sm text-green-800">
            <li>✓ App shows as registered (not pending)</li>
            <li>✓ You can see eligibility status</li>
            <li>✓ Claim button appears (if eligible)</li>
            <li>✓ Transaction goes through</li>
            <li>✓ Success message appears</li>
            <li>✓ You receive ~63 G$ tokens</li>
          </ul>
        </div>

        {/* Debug Info */}
        <div className="bg-gray-800 text-green-400 rounded-xl p-6 font-mono text-xs">
          <h3 className="text-white font-bold mb-2">🔍 Debug Info</h3>
          <div className="space-y-1">
            <div>App: 0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C</div>
            <div>DEV Contract: 0xb44fC3A592aDaA257AECe1Ae8956019EA53d0465</div>
            <div>User: {address}</div>
            <div>Inviter: {inviterAddress || 'Not set'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}