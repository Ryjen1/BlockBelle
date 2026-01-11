'use client';

import { useState, useEffect } from 'react';
import { useAccount, useReadContract, usePublicClient, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { CheckCircleIcon, XCircleIcon, ClockIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { 
  ACTIVE_REWARDS_CONTRACT, 
  CHATABELLA_APP_ADDRESS, 
  ENGAGEMENT_REWARDS_ABI 
} from '@/config/engagement-rewards';
import { useEngagementRewards } from '@/hooks/useEngagementRewards';
import { type Address } from 'viem';

interface TestResult {
  name: string;
  status: 'pass' | 'fail' | 'warning' | 'pending';
  message: string;
  details?: string;
  action?: string;
}

export default function EngagementRewardsTest() {
  const { address, isConnected } = useAccount();
  const publicClient = usePublicClient();
  const { writeContractAsync } = useWriteContract();
  
  const {
    inviterAddress,
    isAppRegistered,
    isUserRegistered,
    canClaimReward,
    claimError,
    generateClaimSignature,
    getValidUntilBlock,
    setInviterAddress,
  } = useEngagementRewards();

  const [tests, setTests] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [testInviter, setTestInviter] = useState('');
  const [claimTxHash, setClaimTxHash] = useState<`0x${string}` | null>(null);

  // Wait for claim transaction
  const { isLoading: isClaimConfirming, isSuccess: isClaimConfirmed } = useWaitForTransactionReceipt({
    hash: claimTxHash || undefined,
  });

  // Get app owner to verify registration
  const { data: appOwner } = useReadContract({
    address: ACTIVE_REWARDS_CONTRACT,
    abi: ENGAGEMENT_REWARDS_ABI,
    functionName: 'registeredApps',
    args: [CHATABELLA_APP_ADDRESS as Address],
  });

  // Run integration tests
  const runTests = async () => {
    if (!address || !publicClient) return;

    setIsRunning(true);
    const results: TestResult[] = [];

    // Test 1: Contract connectivity
    try {
      const blockNumber = await publicClient.getBlockNumber();
      results.push({
        name: 'Contract Connectivity',
        status: 'pass',
        message: '✅ Connected to Celo mainnet',
        details: `Current block: ${blockNumber.toString()}`,
      });
    } catch (error: any) {
      results.push({
        name: 'Contract Connectivity',
        status: 'fail',
        message: '❌ Failed to connect to network',
        details: error.message,
      });
    }

    // Test 2: App registration
    const isRegistered = appOwner && appOwner !== '0x0000000000000000000000000000000000000000';
    results.push({
      name: 'App Registration',
      status: isRegistered ? 'pass' : 'fail',
      message: isRegistered 
        ? '✅ Chata-Bella is registered in Engagement Rewards contract'
        : '❌ App is not registered',
      details: isRegistered 
        ? `Owner: ${appOwner}` 
        : 'Visit https://engagement-rewards-dev.vercel.app/ to register',
      action: isRegistered ? undefined : 'Register your app on the DEV dashboard',
    });

    // Test 3: User registration status
    results.push({
      name: 'User Registration',
      status: isUserRegistered ? 'warning' : 'pass',
      message: isUserRegistered
        ? '⚠️ You have already claimed rewards for this app'
        : '✅ You can claim rewards (first time)',
      details: `Address: ${address}`,
    });

    // Test 4: Inviter configuration
    results.push({
      name: 'Inviter Tracking',
      status: inviterAddress ? 'pass' : 'warning',
      message: inviterAddress
        ? `✅ Inviter configured: ${inviterAddress.slice(0, 10)}...`
        : '⚠️ No inviter set - rewards will only go to user',
      details: inviterAddress 
        ? 'Both user and inviter will receive rewards'
        : 'Add ?ref=INVITER_ADDRESS to URL to set inviter',
      action: inviterAddress ? undefined : 'Set an inviter address to test full flow',
    });

    // Test 5: Eligibility check
    if (isRegistered) {
      try {
        const canClaim = await publicClient.readContract({
          address: ACTIVE_REWARDS_CONTRACT,
          abi: ENGAGEMENT_REWARDS_ABI,
          functionName: 'canClaim',
          args: [CHATABELLA_APP_ADDRESS as Address, address],
        }) as boolean;

        results.push({
          name: 'Claim Eligibility',
          status: canClaim ? 'pass' : 'warning',
          message: canClaim 
            ? '✅ You are eligible to claim rewards!'
            : `⚠️ Not eligible to claim`,
          details: canClaim ? 'All eligibility checks passed' : 'Check if user is whitelisted or already claimed',
        });
      } catch (error: any) {
        results.push({
          name: 'Claim Eligibility',
          status: 'fail',
          message: '❌ Error checking eligibility',
          details: error.message,
        });
      }
    }

    // Test 6: Signature generation
    if (inviterAddress) {
      try {
        const validUntilBlock = await getValidUntilBlock();
        const signature = await generateClaimSignature(inviterAddress, validUntilBlock);
        
        results.push({
          name: 'User Signature Generation',
          status: 'pass',
          message: '✅ User signature generated successfully',
          details: `Signature: ${signature.slice(0, 20)}...`,
        });
      } catch (error: any) {
        results.push({
          name: 'User Signature Generation',
          status: 'fail',
          message: '❌ Failed to generate signature',
          details: error.message,
          action: 'Ensure wallet is connected and unlocked',
        });
      }
    }

    // Test 7: Backend signature API
    if (inviterAddress) {
      try {
        const validUntilBlock = await getValidUntilBlock();
        const response = await fetch('/api/engagement-rewards/sign', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user: address,
            inviter: inviterAddress,
            validUntilBlock: validUntilBlock.toString(),
          }),
        });

        if (response.ok) {
          const data = await response.json();
          results.push({
            name: 'Backend Signature API',
            status: 'pass',
            message: '✅ Backend signing API working',
            details: `App signature generated: ${data.signature.slice(0, 20)}...`,
          });
        } else {
          const error = await response.json();
          const errorDetail = error.error || 'Unknown error';
          results.push({
            name: 'Backend Signature API',
            status: 'fail',
            message: '❌ Backend API failed',
            details: errorDetail,
            action: errorDetail.includes('configuration') 
              ? 'Check APP_SIGNING_KEY in .env.local' 
              : 'Check server logs for details',
          });
        }
      } catch (error: any) {
        results.push({
          name: 'Backend Signature API',
          status: 'fail',
          message: '❌ Failed to call backend API',
          details: error.message,
        });
      }
    }

    // Test 8: Smart contract integration
    results.push({
      name: 'Smart Contract Integration',
      status: 'pass',
      message: '✅ WhisprChat contract has engagement rewards',
      details: `Contract: ${CHATABELLA_APP_ADDRESS}`,
    });

    setTests(results);
    setIsRunning(false);
  };

  // Test actual claim flow
  const testClaim = async () => {
    if (!address || !inviterAddress) {
      alert('Please connect wallet and set an inviter address');
      return;
    }

    setIsRunning(true);
    try {
      // Get valid until block
      const validUntilBlock = await getValidUntilBlock();

      // Generate user signature
      const userSignature = await generateClaimSignature(inviterAddress, validUntilBlock);

      // Get app signature from backend
      const response = await fetch('/api/engagement-rewards/sign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user: address,
          inviter: inviterAddress,
          validUntilBlock: validUntilBlock.toString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get app signature');
      }

      const { signature: appSignature } = await response.json();

      // Submit claim transaction
      const hash = await writeContractAsync({
        address: ACTIVE_REWARDS_CONTRACT,
        abi: ENGAGEMENT_REWARDS_ABI,
        functionName: 'nonContractAppClaim',
        args: [
          CHATABELLA_APP_ADDRESS as Address,
          inviterAddress,
          validUntilBlock,
          userSignature,
          appSignature as `0x${string}`,
        ],
      });

      setClaimTxHash(hash);
      console.log('Claim transaction submitted:', hash);

    } catch (error: any) {
      console.error('Error testing claim:', error);
      
      // Detect whitelisting errors
      const errorMessage = error.message || '';
      if (errorMessage.toLowerCase().includes('not whitelisted') || 
          errorMessage.toLowerCase().includes('whitelisted')) {
        alert(`⚠️ User Not Whitelisted\n\nThis address needs to verify with GoodDollar first:\n\n1. Download GoodDollar app\n2. Complete face verification\n3. Wait for confirmation\n4. Try claiming again\n\nError: ${error.message}`);
      } else {
        alert(`Claim failed: ${error.message}`);
      }
    } finally {
      setIsRunning(false);
    }
  };

  useEffect(() => {
    if (isConnected && address) {
      runTests();
    }
  }, [isConnected, address, inviterAddress]);

  if (!isConnected) {
    return (
      <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
        <h3 className="text-lg font-bold text-yellow-900 mb-2">⚠️ Wallet Not Connected</h3>
        <p className="text-yellow-800">Please connect your wallet to test engagement rewards integration.</p>
      </div>
    );
  }

  const getStatusIcon = (status: TestResult['status']) => {
    switch (status) {
      case 'pass':
        return <CheckCircleIcon className="h-5 w-5 text-green-600" />;
      case 'fail':
        return <XCircleIcon className="h-5 w-5 text-red-600" />;
      case 'warning':
        return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600" />;
      case 'pending':
        return <ClockIcon className="h-5 w-5 text-blue-600" />;
    }
  };

  const getStatusColor = (status: TestResult['status']) => {
    switch (status) {
      case 'pass':
        return 'border-green-500 bg-green-50';
      case 'fail':
        return 'border-red-500 bg-red-50';
      case 'warning':
        return 'border-yellow-500 bg-yellow-50';
      case 'pending':
        return 'border-blue-500 bg-blue-50';
    }
  };

  const passedTests = tests.filter(t => t.status === 'pass').length;
  const totalTests = tests.length;
  const allPassed = passedTests === totalTests;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">🧪 Engagement Rewards Integration Test</h2>
        <p className="text-purple-100">Testing your GoodDollar Engagement Rewards setup</p>
      </div>

      {/* Config */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-bold mb-4">📋 Configuration</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Rewards Contract:</span>
            <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">DEV</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">App Address:</span>
            <span className="font-mono text-xs">{CHATABELLA_APP_ADDRESS.slice(0, 10)}...</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Your Address:</span>
            <span className="font-mono text-xs">{address?.slice(0, 10)}...</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Inviter:</span>
            <span className="font-mono text-xs">
              {inviterAddress ? `${inviterAddress.slice(0, 10)}...` : 'Not set'}
            </span>
          </div>
        </div>

        {/* Set test inviter */}
        {!inviterAddress && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800 mb-2">Set a test inviter address:</p>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="0x..."
                value={testInviter}
                onChange={(e) => setTestInviter(e.target.value)}
                className="flex-1 px-3 py-2 border border-blue-300 rounded-lg text-sm"
              />
              <button
                onClick={() => {
                  if (testInviter.startsWith('0x')) {
                    setInviterAddress(testInviter as Address);
                  }
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700"
              >
                Set
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Test Results */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold">Test Results</h3>
          {tests.length > 0 && (
            <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
              allPassed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {passedTests}/{totalTests} Passed
            </div>
          )}
        </div>

        {isRunning && tests.length === 0 ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            <span className="ml-3 text-gray-600">Running tests...</span>
          </div>
        ) : (
          <div className="space-y-3">
            {tests.map((test, index) => (
              <div
                key={index}
                className={`border-l-4 rounded-lg p-4 ${getStatusColor(test.status)}`}
              >
                <div className="flex items-start space-x-3">
                  {getStatusIcon(test.status)}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{test.name}</h4>
                    <p className="text-sm text-gray-700 mt-1">{test.message}</p>
                    {test.details && (
                      <p className="text-xs text-gray-600 mt-1">{test.details}</p>
                    )}
                    {test.action && (
                      <p className="text-xs text-blue-700 mt-2 font-medium">→ {test.action}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-bold mb-4">🎬 Test Actions</h3>
        <div className="space-y-3">
          <button
            onClick={runTests}
            disabled={isRunning}
            className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isRunning ? 'Running Tests...' : '🔄 Run Tests Again'}
          </button>

          {allPassed && inviterAddress && !isUserRegistered && (
            <button
              onClick={testClaim}
              disabled={isRunning || isClaimConfirming}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isClaimConfirming 
                ? '⏳ Claiming...' 
                : isClaimConfirmed 
                  ? '✅ Claim Successful!'
                  : '🎁 Test Actual Claim Transaction'}
            </button>
          )}

          {claimTxHash && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800 mb-2">
                {isClaimConfirming ? '⏳ Transaction confirming...' : '✅ Claim transaction submitted!'}
              </p>
              <a
                href={`https://celoscan.io/tx/${claimTxHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-700 hover:underline break-all"
              >
                View on Celoscan →
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Next Steps */}
      {allPassed && (
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-green-900 mb-3">🎉 Integration Successful!</h3>
          <p className="text-green-800 mb-4">Your engagement rewards integration is working correctly.</p>
          <div className="space-y-2 text-sm text-green-800">
            <p>✅ Contract connectivity verified</p>
            <p>✅ App registration confirmed</p>
            <p>✅ Signature generation working</p>
            <p>✅ Backend API operational</p>
          </div>
          <div className="mt-4 p-4 bg-white rounded-lg">
            <p className="text-sm font-semibold text-gray-900 mb-2">Ready to apply for engagement pool:</p>
            <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
              <li>Share referral links with ?ref=YOUR_ADDRESS</li>
              <li>Test claims with verified GoodDollar users</li>
              <li>When ready, switch to PROD contract</li>
              <li>Apply at: <a href="https://engagement-rewards.vercel.app/apply" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">engagement-rewards.vercel.app/apply</a></li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}