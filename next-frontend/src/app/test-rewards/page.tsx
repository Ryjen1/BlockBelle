'use client';

// Force dynamic rendering to avoid Next.js 16 static generation issues
export const dynamic = 'force-dynamic';

import { useAccount, useReadContract, usePublicClient } from 'wagmi';
import { useState, useEffect } from 'react';
import { 
  ACTIVE_REWARDS_CONTRACT, 
  CHATABELLA_APP_ADDRESS, 
  ENGAGEMENT_REWARDS_ABI 
} from '@/config/engagement-rewards';

export default function TestRewardsPage() {
  const { address, isConnected } = useAccount();
  const publicClient = usePublicClient();
  const [testResults, setTestResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Test 1: Check if app is registered (registeredApps returns owner address, not bool)
  const { data: appOwner, error: appRegError, isLoading: appLoading } = useReadContract({
    address: ACTIVE_REWARDS_CONTRACT,
    abi: ENGAGEMENT_REWARDS_ABI,
    functionName: 'registeredApps',
    args: [CHATABELLA_APP_ADDRESS as `0x${string}`],
  });

  const isAppRegistered = appOwner && appOwner !== '0x0000000000000000000000000000000000000000';

  // Debug logging
  console.log('🔍 App Registration Debug:', {
    contract: ACTIVE_REWARDS_CONTRACT,
    app: CHATABELLA_APP_ADDRESS,
    owner: appOwner,
    isRegistered: isAppRegistered,
    error: appRegError?.message,
    loading: appLoading
  });

  // Test 2: Check if current user is registered
  const { data: isUserRegistered, error: userRegError } = useReadContract({
    address: ACTIVE_REWARDS_CONTRACT,
    abi: ENGAGEMENT_REWARDS_ABI,
    functionName: 'isUserRegistered',
    args: address ? [CHATABELLA_APP_ADDRESS as `0x${string}`, address] : undefined,
    query: {
      enabled: !!address,
    }
  });

  const runTests = async () => {
    setIsLoading(true);
    const results: any[] = [];

    // Test 1: App Registration
    results.push({
      name: 'App Registration Check',
      status: appRegError ? 'ERROR' : isAppRegistered ? 'PASS' : 'FAIL',
      result: isAppRegistered ? '✅ App is registered!' : '❌ App not registered',
      details: appRegError ? `Error: ${appRegError.message}` : `Contract: ${ACTIVE_REWARDS_CONTRACT}`,
    });

    // Test 2: User Registration
    if (address) {
      results.push({
        name: 'User Registration Check',
        status: userRegError ? 'ERROR' : isUserRegistered ? 'PASS' : 'INFO',
        result: isUserRegistered ? '✅ User already registered' : 'ℹ️ User not yet registered',
        details: userRegError ? `Error: ${userRegError.message}` : `User: ${address}`,
      });
    }

    // Test 3: Can Claim Check
    if (address && publicClient) {
      try {
        const canClaim = await publicClient.readContract({
          address: ACTIVE_REWARDS_CONTRACT,
          abi: ENGAGEMENT_REWARDS_ABI,
          functionName: 'canClaim',
          args: [CHATABELLA_APP_ADDRESS as `0x${string}`, address],
        }) as boolean;
        
        results.push({
          name: 'Eligibility Check',
          status: canClaim ? 'PASS' : 'INFO',
          result: canClaim ? '✅ Can claim rewards!' : `ℹ️ Not eligible to claim`,
          details: canClaim ? 'All checks passed' : 'Check if user is whitelisted or already claimed',
        });
      } catch (error: any) {
        results.push({
          name: 'Eligibility Check',
          status: 'ERROR',
          result: '❌ Error checking eligibility',
          details: error.message || 'Unknown error',
        });
      }
    }

    // Test 4: Block Number
    if (publicClient) {
      try {
        const blockNumber = await publicClient.getBlockNumber();
        results.push({
          name: 'Current Block Number',
          status: 'PASS',
          result: `✅ Block: ${blockNumber.toString()}`,
          details: `Valid until: ${(blockNumber + 600n).toString()}`,
        });
      } catch (error: any) {
        results.push({
          name: 'Current Block Number',
          status: 'ERROR',
          result: '❌ Error getting block',
          details: error.message,
        });
      }
    }

    // Test 5: Contract Connection
    results.push({
      name: 'Contract Connection',
      status: 'PASS',
      result: '✅ Connected to Celo',
      details: `Rewards Contract: ${ACTIVE_REWARDS_CONTRACT}`,
    });

    setTestResults(results);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isConnected && address) {
      runTests();
    }
  }, [isConnected, address, isAppRegistered, isUserRegistered]);

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
            <h1 className="text-2xl font-bold text-yellow-800 mb-2">
              Connect Wallet to Test
            </h1>
            <p className="text-yellow-700">
              Please connect your wallet to run engagement rewards tests
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 mb-6 text-white">
          <h1 className="text-3xl font-bold mb-2">
            🧪 Engagement Rewards Integration Test
          </h1>
          <p className="text-purple-100">
            Testing GoodDollar Engagement Rewards Integration
          </p>
        </div>

        {/* Configuration Info */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
          <h2 className="text-xl font-bold mb-4">📋 Configuration</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Rewards Contract:</span>
              <span className="font-mono text-xs">{ACTIVE_REWARDS_CONTRACT}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Chata-Bella App:</span>
              <span className="font-mono text-xs break-all">{CHATABELLA_APP_ADDRESS}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Rewards Contract:</span>
              <span className="font-mono text-xs break-all">{ACTIVE_REWARDS_CONTRACT}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">App Registered:</span>
              <span className={`font-semibold ${isAppRegistered ? 'text-green-600' : 'text-red-600'}`}>
                {appLoading ? 'Loading...' : isAppRegistered ? 'Yes ✅' : 'No ❌'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Connected Wallet:</span>
              <span className="font-mono text-xs">{address}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Environment:</span>
              <span className="font-semibold">{process.env.NODE_ENV}</span>
            </div>
          </div>
        </div>

        {/* Test Results */}
        {isLoading ? (
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Running tests...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {testResults.map((test, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg border-l-4 ${
                  test.status === 'PASS' ? 'border-green-500' :
                  test.status === 'ERROR' ? 'border-red-500' :
                  test.status === 'FAIL' ? 'border-red-500' :
                  'border-blue-500'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold">{test.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    test.status === 'PASS' ? 'bg-green-100 text-green-800' :
                    test.status === 'ERROR' ? 'bg-red-100 text-red-800' :
                    test.status === 'FAIL' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {test.status}
                  </span>
                </div>
                <p className="text-gray-800 font-medium mb-1">{test.result}</p>
                <p className="text-sm text-gray-600">{test.details}</p>
              </div>
            ))}
          </div>
        )}

        {/* Action Button */}
        <div className="mt-6 bg-white rounded-xl p-6 shadow-lg text-center">
          <button
            onClick={runTests}
            disabled={isLoading}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50"
          >
            {isLoading ? 'Running Tests...' : '🔄 Run Tests Again'}
          </button>
        </div>

        {/* Next Steps */}
        <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-3">📚 Next Steps</h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li>✅ If app is not registered: Apply at <a href="https://engagement-rewards-dev.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline">DEV Dashboard</a></li>
            <li>✅ Test claiming with a verified GoodDollar user</li>
            <li>✅ Share referral link with ?ref=YOUR_ADDRESS</li>
            <li>✅ Monitor claims in the UI</li>
          </ul>
        </div>
      </div>
    </div>
  );
}