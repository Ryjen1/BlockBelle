/**
 * Example: Using WhisprChat with Smart Contract Engagement Rewards
 * 
 * This shows how to send a message with automatic reward claiming
 */

import { useAccount, useWriteContract, useWalletClient, usePublicClient } from 'wagmi';
import { useState } from 'react';

// Your WhisprChat ABI (add the new functions)
const WHISPR_CHAT_ABI = [
  // ... existing functions ...
  {
    inputs: [
      { name: '_receiver', type: 'address' },
      { name: '_content', type: 'string' },
      { name: '_inviter', type: 'address' },
      { name: '_validUntilBlock', type: 'uint256' },
      { name: '_signature', type: 'bytes' }
    ],
    name: 'sendMessageWithReward',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { name: '_receiver', type: 'address' },
      { name: '_content', type: 'string' }
    ],
    name: 'sendMessage',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ name: 'user', type: 'address' }],
    name: 'hasClaimedReward',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  }
] as const;

const WHISPR_CHAT_ADDRESS = '0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C';
const BLOCKBELLE_APP_ADDRESS = '0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C';

export default function SendMessageWithRewards() {
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();
  const { writeContractAsync } = useWriteContract();
  
  const [message, setMessage] = useState('');
  const [receiver, setReceiver] = useState('');
  const [inviter, setInviter] = useState<string | null>(null);

  // Get inviter from localStorage or URL
  const getInviter = () => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('blockbelle_inviter');
  };

  const handleSendMessage = async () => {
    if (!address || !walletClient || !publicClient) return;
    
    const inviterAddress = getInviter();
    
    // If user has inviter and wants to claim rewards
    if (inviterAddress) {
      try {
        // 1. Get current block
        const currentBlock = await publicClient.getBlockNumber();
        const validUntilBlock = currentBlock + 600n; // Valid for ~30 min

        // 2. Generate signature
        const messageToSign = `Claim engagement reward from app ${BLOCKBELLE_APP_ADDRESS} for user ${address} with inviter ${inviterAddress} valid until block ${validUntilBlock}`;
        
        const signature = await walletClient.signMessage({
          account: address,
          message: messageToSign,
        });

        // 3. Send message with reward claim
        const tx = await writeContractAsync({
          address: WHISPR_CHAT_ADDRESS,
          abi: WHISPR_CHAT_ABI,
          functionName: 'sendMessageWithReward',
          args: [
            receiver as `0x${string}`,
            message,
            inviterAddress as `0x${string}`,
            validUntilBlock,
            signature,
          ],
        });

        console.log('Message sent with reward claim:', tx);
      } catch (error) {
        console.error('Error sending message with reward:', error);
        // Fallback to regular message send
        await sendRegularMessage();
      }
    } else {
      // No inviter - send regular message
      await sendRegularMessage();
    }
  };

  const sendRegularMessage = async () => {
    try {
      const tx = await writeContractAsync({
        address: WHISPR_CHAT_ADDRESS,
        abi: WHISPR_CHAT_ABI,
        functionName: 'sendMessage',
        args: [receiver as `0x${string}`, message],
      });
      console.log('Regular message sent:', tx);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="p-4">
      <h2>Send Message with Engagement Rewards</h2>
      
      <input
        type="text"
        placeholder="Receiver address"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      
      <button
        onClick={handleSendMessage}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Send Message {getInviter() && '(+ Claim Reward)'}
      </button>

      {getInviter() && (
        <p className="text-sm text-gray-600 mt-2">
          First message will attempt to claim engagement rewards
        </p>
      )}
    </div>
  );
}

/**
 * KEY POINTS:
 * 
 * 1. User signatures are required for FIRST-TIME claims only
 * 2. After first claim, subsequent messages don't need signatures (pass empty bytes)
 * 3. The contract handles reward claiming with try-catch, so it won't block messaging
 * 4. Reward claiming happens on-chain, so users pay gas
 * 5. Custom percentages can be set based on user activity
 * 
 * BENEFITS:
 * - All logic is on-chain and transparent
 * - No backend server needed for signing
 * - Custom reward percentages based on achievements
 * - Reward claiming doesn't block core functionality
 * 
 * COMPARISON TO CLIENT-SIDE:
 * - Client-side: Backend signs, cheaper for users
 * - Smart contract: Users pay gas, but fully decentralized
 */