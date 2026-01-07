// GoodDollar Engagement Rewards Configuration
// Based on guide: https://engagement-rewards.vercel.app/guide

// Contract addresses for Celo Mainnet
export const ENGAGEMENT_REWARDS_CONTRACT = {
  // Development contract - allows anyone to approve apps
  DEV: '0xb44fC3A592aDaA257AECe1Ae8956019EA53d0465',
  // Production contract - requires Good Labs approval
  PROD: '0x25db74CF4E7BA120526fd87e159CF656d94bAE43',
} as const;

// TODO: Switch to PROD once Good Labs approves the application
// For now using DEV where we can self-approve for testing
export const ACTIVE_REWARDS_CONTRACT = ENGAGEMENT_REWARDS_CONTRACT.DEV;

// Your app's contract address - WhisprChat contract approved on DEV
export const CHATABELLA_APP_ADDRESS = '0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C'; // WhisprChat contract

// Engagement Rewards ABI - correct based on actual contract
export const ENGAGEMENT_REWARDS_ABI = [
  {
    inputs: [
      { name: 'app', type: 'address' },
      { name: 'inviter', type: 'address' },
      { name: 'validUntilBlock', type: 'uint256' },
      { name: 'userSignature', type: 'bytes' },
      { name: 'appSignature', type: 'bytes' }
    ],
    name: 'nonContractAppClaim',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ name: '', type: 'address' }],
    name: 'registeredApps',
    outputs: [{ name: '', type: 'address' }], // Returns owner address, not bool
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { name: 'app', type: 'address' },
      { name: 'user', type: 'address' }
    ],
    name: 'isUserRegistered',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { name: 'app', type: 'address' },
      { name: 'user', type: 'address' }
    ],
    name: 'canClaim',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'claimCooldown',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  }
] as const;

// Reward percentages (uint8, 0-100)
export const DEFAULT_REWARD_PERCENTAGES = {
  // Percentage of reward that goes to user AND inviter combined
  userAndInviterPercentage: 90, // 90%
  // Percentage of the above that goes to user (rest goes to inviter)
  userPercentage: 70, // 70% of 90% goes to user, 30% goes to inviter
} as const;

// Storage keys for local state
export const STORAGE_KEYS = {
  INVITER_ADDRESS: 'chatabella_inviter',
  LAST_CLAIM_ATTEMPT: 'chatabella_last_claim',
  CLAIM_SUCCESS: 'chatabella_claim_success',
} as const;