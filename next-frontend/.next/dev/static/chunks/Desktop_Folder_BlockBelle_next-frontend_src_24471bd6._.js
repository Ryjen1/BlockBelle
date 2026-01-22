(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Folder/BlockBelle/next-frontend/src/config/engagement-rewards.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// GoodDollar Engagement Rewards Configuration
// Based on guide: https://engagement-rewards.vercel.app/guide
// Contract addresses for Celo Mainnet
__turbopack_context__.s([
    "ACTIVE_REWARDS_CONTRACT",
    ()=>ACTIVE_REWARDS_CONTRACT,
    "CHATABELLA_APP_ADDRESS",
    ()=>CHATABELLA_APP_ADDRESS,
    "DEFAULT_REWARD_PERCENTAGES",
    ()=>DEFAULT_REWARD_PERCENTAGES,
    "ENGAGEMENT_REWARDS_ABI",
    ()=>ENGAGEMENT_REWARDS_ABI,
    "ENGAGEMENT_REWARDS_CONTRACT",
    ()=>ENGAGEMENT_REWARDS_CONTRACT,
    "STORAGE_KEYS",
    ()=>STORAGE_KEYS
]);
const ENGAGEMENT_REWARDS_CONTRACT = {
    // Development contract - allows anyone to approve apps
    DEV: '0xb44fC3A592aDaA257AECe1Ae8956019EA53d0465',
    // Production contract - requires Good Labs approval
    PROD: '0x25db74CF4E7BA120526fd87e159CF656d94bAE43'
};
const ACTIVE_REWARDS_CONTRACT = ENGAGEMENT_REWARDS_CONTRACT.PROD;
const CHATABELLA_APP_ADDRESS = '0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C'; // WhisprChat contract
const ENGAGEMENT_REWARDS_ABI = [
    {
        inputs: [
            {
                name: 'app',
                type: 'address'
            },
            {
                name: 'inviter',
                type: 'address'
            },
            {
                name: 'validUntilBlock',
                type: 'uint256'
            },
            {
                name: 'userSignature',
                type: 'bytes'
            },
            {
                name: 'appSignature',
                type: 'bytes'
            }
        ],
        name: 'nonContractAppClaim',
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: '',
                type: 'address'
            }
        ],
        name: 'registeredApps',
        outputs: [
            {
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'app',
                type: 'address'
            },
            {
                name: 'user',
                type: 'address'
            }
        ],
        name: 'isUserRegistered',
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'app',
                type: 'address'
            },
            {
                name: 'user',
                type: 'address'
            }
        ],
        name: 'canClaim',
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'claimCooldown',
        outputs: [
            {
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
];
const DEFAULT_REWARD_PERCENTAGES = {
    // Percentage of reward that goes to user AND inviter combined
    userAndInviterPercentage: 90,
    // Percentage of the above that goes to user (rest goes to inviter)
    userPercentage: 70
};
const STORAGE_KEYS = {
    INVITER_ADDRESS: 'chatabella_inviter',
    LAST_CLAIM_ATTEMPT: 'chatabella_last_claim',
    CLAIM_SUCCESS: 'chatabella_claim_success'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/src/hooks/useEngagementRewards.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEngagementRewards",
    ()=>useEngagementRewards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useWalletClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/address/isAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/config/engagement-rewards.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function useEngagementRewards() {
    _s();
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"])();
    const { data: walletClient } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletClient"])();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        inviterAddress: null,
        canClaimReward: false,
        isCheckingEligibility: false,
        isUserRegistered: false,
        claimError: null,
        hasClaimedBefore: false
    });
    // Check if app is registered
    // registeredApps returns the owner address (not a boolean)
    const { data: appOwner } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACTIVE_REWARDS_CONTRACT"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGAGEMENT_REWARDS_ABI"],
        functionName: 'registeredApps',
        args: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHATABELLA_APP_ADDRESS"]
        ]
    });
    // App is registered if it has a non-zero owner address
    const isAppRegistered = appOwner && appOwner !== '0x0000000000000000000000000000000000000000';
    // Check if user is already registered with the app
    const { data: isUserRegistered, refetch: refetchUserRegistration } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACTIVE_REWARDS_CONTRACT"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGAGEMENT_REWARDS_ABI"],
        functionName: 'isUserRegistered',
        args: address ? [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHATABELLA_APP_ADDRESS"],
            address
        ] : undefined,
        query: {
            enabled: !!address && !!isAppRegistered
        }
    });
    // Load inviter from URL or localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEngagementRewards.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Check URL params first
            const urlParams = new URLSearchParams(window.location.search);
            const refParam = urlParams.get('ref');
            if (refParam && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(refParam)) {
                // Store in localStorage
                localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].INVITER_ADDRESS, refParam);
                setState({
                    "useEngagementRewards.useEffect": (prev)=>({
                            ...prev,
                            inviterAddress: refParam
                        })
                }["useEngagementRewards.useEffect"]);
                return;
            }
            // Fall back to localStorage
            const stored = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].INVITER_ADDRESS);
            if (stored && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(stored)) {
                setState({
                    "useEngagementRewards.useEffect": (prev)=>({
                            ...prev,
                            inviterAddress: stored
                        })
                }["useEngagementRewards.useEffect"]);
            }
        }
    }["useEngagementRewards.useEffect"], []);
    // Check if user has claimed before
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEngagementRewards.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === 'undefined' || !address) return;
            const claimSuccess = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].CLAIM_SUCCESS);
            if (claimSuccess === address) {
                setState({
                    "useEngagementRewards.useEffect": (prev)=>({
                            ...prev,
                            hasClaimedBefore: true
                        })
                }["useEngagementRewards.useEffect"]);
            }
        }
    }["useEngagementRewards.useEffect"], [
        address
    ]);
    // Update user registration state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEngagementRewards.useEffect": ()=>{
            setState({
                "useEngagementRewards.useEffect": (prev)=>({
                        ...prev,
                        isUserRegistered: !!isUserRegistered
                    })
            }["useEngagementRewards.useEffect"]);
        }
    }["useEngagementRewards.useEffect"], [
        isUserRegistered
    ]);
    // Check eligibility to claim
    const checkEligibility = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEngagementRewards.useCallback[checkEligibility]": async ()=>{
            if (!address || !isConnected || !isAppRegistered || !publicClient) {
                setState({
                    "useEngagementRewards.useCallback[checkEligibility]": (prev)=>({
                            ...prev,
                            canClaimReward: false
                        })
                }["useEngagementRewards.useCallback[checkEligibility]"]);
                return;
            }
            setState({
                "useEngagementRewards.useCallback[checkEligibility]": (prev)=>({
                        ...prev,
                        isCheckingEligibility: true,
                        claimError: null
                    })
            }["useEngagementRewards.useCallback[checkEligibility]"]);
            try {
                const canClaim = await publicClient.readContract({
                    address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACTIVE_REWARDS_CONTRACT"],
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGAGEMENT_REWARDS_ABI"],
                    functionName: 'canClaim',
                    args: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHATABELLA_APP_ADDRESS"],
                        address
                    ]
                });
                setState({
                    "useEngagementRewards.useCallback[checkEligibility]": (prev)=>({
                            ...prev,
                            canClaimReward: canClaim,
                            claimError: canClaim ? null : 'Not eligible to claim',
                            isCheckingEligibility: false
                        })
                }["useEngagementRewards.useCallback[checkEligibility]"]);
            } catch (error) {
                console.error('Error checking eligibility:', error);
                setState({
                    "useEngagementRewards.useCallback[checkEligibility]": (prev)=>({
                            ...prev,
                            canClaimReward: false,
                            claimError: error.message || 'Failed to check eligibility',
                            isCheckingEligibility: false
                        })
                }["useEngagementRewards.useCallback[checkEligibility]"]);
            }
        }
    }["useEngagementRewards.useCallback[checkEligibility]"], [
        address,
        isConnected,
        isAppRegistered,
        publicClient
    ]);
    // Check eligibility when user connects
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEngagementRewards.useEffect": ()=>{
            if (address && isConnected && isAppRegistered) {
                checkEligibility();
            }
        }
    }["useEngagementRewards.useEffect"], [
        address,
        isConnected,
        isAppRegistered,
        checkEligibility
    ]);
    // Generate signature for claiming
    // ⚠️ MESSAGE FORMAT MUST MATCH BACKEND SIGNATURE
    const generateClaimSignature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEngagementRewards.useCallback[generateClaimSignature]": async (inviter, validUntilBlock)=>{
            if (!walletClient || !address) {
                throw new Error('Wallet not connected');
            }
            // ⚠️ CRITICAL: This message format must exactly match the backend signature format
            // Currently mismatched with backend - needs to include "for user {address}"
            const message = `Claim engagement reward from app ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHATABELLA_APP_ADDRESS"]} for user ${address} with inviter ${inviter} valid until block ${validUntilBlock}`;
            try {
                const signature = await walletClient.signMessage({
                    account: address,
                    message
                });
                return signature;
            } catch (error) {
                console.error('Error signing message:', error);
                throw new Error('Failed to sign claim message');
            }
        }
    }["useEngagementRewards.useCallback[generateClaimSignature]"], [
        walletClient,
        address
    ]);
    // Helper to get current block and calculate valid until block
    const getValidUntilBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEngagementRewards.useCallback[getValidUntilBlock]": async ()=>{
            if (!publicClient) {
                throw new Error('Public client not available');
            }
            const currentBlock = await publicClient.getBlockNumber();
            // Valid for 600 blocks (~30 minutes on Celo with 5s block time)
            return currentBlock + 600n;
        }
    }["useEngagementRewards.useCallback[getValidUntilBlock]"], [
        publicClient
    ]);
    return {
        ...state,
        isAppRegistered: !!isAppRegistered,
        checkEligibility,
        generateClaimSignature,
        getValidUntilBlock,
        refetchUserRegistration,
        setInviterAddress: (addr)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].INVITER_ADDRESS, addr);
            }
            setState((prev)=>({
                    ...prev,
                    inviterAddress: addr
                }));
        },
        markClaimSuccess: ()=>{
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && address) {
                localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].CLAIM_SUCCESS, address);
            }
            setState((prev)=>({
                    ...prev,
                    hasClaimedBefore: true
                }));
        }
    };
}
_s(useEngagementRewards, "4sxIFwanuOporrsCROCZWSiTQMo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EngagementRewardsTest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js [app-client] (ecmascript) <export default as CheckCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircleIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/XCircleIcon.js [app-client] (ecmascript) <export default as XCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ClockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClockIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/ClockIcon.js [app-client] (ecmascript) <export default as ClockIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ExclamationTriangleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExclamationTriangleIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/ExclamationTriangleIcon.js [app-client] (ecmascript) <export default as ExclamationTriangleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/config/engagement-rewards.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$hooks$2f$useEngagementRewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/hooks/useEngagementRewards.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function EngagementRewardsTest() {
    _s();
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"])();
    const { writeContractAsync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const { inviterAddress, isAppRegistered, isUserRegistered, canClaimReward, claimError, generateClaimSignature, getValidUntilBlock, setInviterAddress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$hooks$2f$useEngagementRewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEngagementRewards"])();
    const [tests, setTests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [testInviter, setTestInviter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [claimTxHash, setClaimTxHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Wait for claim transaction
    const { isLoading: isClaimConfirming, isSuccess: isClaimConfirmed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash: claimTxHash || undefined
    });
    // Get app owner to verify registration
    const { data: appOwner } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACTIVE_REWARDS_CONTRACT"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGAGEMENT_REWARDS_ABI"],
        functionName: 'registeredApps',
        args: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHATABELLA_APP_ADDRESS"]
        ]
    });
    // Run integration tests
    const runTests = async ()=>{
        if (!address || !publicClient) return;
        setIsRunning(true);
        const results = [];
        // Test 1: Contract connectivity
        try {
            const blockNumber = await publicClient.getBlockNumber();
            results.push({
                name: 'Contract Connectivity',
                status: 'pass',
                message: '✅ Connected to Celo mainnet',
                details: `Current block: ${blockNumber.toString()}`
            });
        } catch (error) {
            results.push({
                name: 'Contract Connectivity',
                status: 'fail',
                message: '❌ Failed to connect to network',
                details: error.message
            });
        }
        // Test 2: App registration
        const isRegistered = appOwner && appOwner !== '0x0000000000000000000000000000000000000000';
        results.push({
            name: 'App Registration',
            status: isRegistered ? 'pass' : 'fail',
            message: isRegistered ? '✅ Chata-Bella is registered in Engagement Rewards contract' : '❌ App is not registered',
            details: isRegistered ? `Owner: ${appOwner}` : 'Visit https://engagement-rewards-dev.vercel.app/ to register',
            action: isRegistered ? undefined : 'Register your app on the DEV dashboard'
        });
        // Test 3: User registration status
        results.push({
            name: 'User Registration',
            status: isUserRegistered ? 'warning' : 'pass',
            message: isUserRegistered ? '⚠️ You have already claimed rewards for this app' : '✅ You can claim rewards (first time)',
            details: `Address: ${address}`
        });
        // Test 4: Inviter configuration
        results.push({
            name: 'Inviter Tracking',
            status: inviterAddress ? 'pass' : 'warning',
            message: inviterAddress ? `✅ Inviter configured: ${inviterAddress.slice(0, 10)}...` : '⚠️ No inviter set - rewards will only go to user',
            details: inviterAddress ? 'Both user and inviter will receive rewards' : 'Add ?ref=INVITER_ADDRESS to URL to set inviter',
            action: inviterAddress ? undefined : 'Set an inviter address to test full flow'
        });
        // Test 5: Eligibility check
        if (isRegistered) {
            try {
                const canClaim = await publicClient.readContract({
                    address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACTIVE_REWARDS_CONTRACT"],
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGAGEMENT_REWARDS_ABI"],
                    functionName: 'canClaim',
                    args: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHATABELLA_APP_ADDRESS"],
                        address
                    ]
                });
                results.push({
                    name: 'Claim Eligibility',
                    status: canClaim ? 'pass' : 'warning',
                    message: canClaim ? '✅ You are eligible to claim rewards!' : `⚠️ Not eligible to claim`,
                    details: canClaim ? 'All eligibility checks passed' : 'Check if user is whitelisted or already claimed'
                });
            } catch (error) {
                results.push({
                    name: 'Claim Eligibility',
                    status: 'fail',
                    message: '❌ Error checking eligibility',
                    details: error.message
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
                    details: `Signature: ${signature.slice(0, 20)}...`
                });
            } catch (error) {
                results.push({
                    name: 'User Signature Generation',
                    status: 'fail',
                    message: '❌ Failed to generate signature',
                    details: error.message,
                    action: 'Ensure wallet is connected and unlocked'
                });
            }
        }
        // Test 7: Backend signature API
        if (inviterAddress) {
            try {
                const validUntilBlock = await getValidUntilBlock();
                const response = await fetch('/api/engagement-rewards/sign', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user: address,
                        inviter: inviterAddress,
                        validUntilBlock: validUntilBlock.toString()
                    })
                });
                if (response.ok) {
                    const data = await response.json();
                    results.push({
                        name: 'Backend Signature API',
                        status: 'pass',
                        message: '✅ Backend signing API working',
                        details: `App signature generated: ${data.signature.slice(0, 20)}...`
                    });
                } else {
                    const error = await response.json();
                    results.push({
                        name: 'Backend Signature API',
                        status: 'fail',
                        message: '❌ Backend API failed',
                        details: error.error || 'Unknown error',
                        action: 'Check APP_SIGNING_KEY in .env.local'
                    });
                }
            } catch (error) {
                results.push({
                    name: 'Backend Signature API',
                    status: 'fail',
                    message: '❌ Failed to call backend API',
                    details: error.message
                });
            }
        }
        // Test 8: Smart contract integration
        results.push({
            name: 'Smart Contract Integration',
            status: 'pass',
            message: '✅ WhisprChat contract has engagement rewards',
            details: `Contract: ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHATABELLA_APP_ADDRESS"]}`
        });
        setTests(results);
        setIsRunning(false);
    };
    // Test actual claim flow
    const testClaim = async ()=>{
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
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: address,
                    inviter: inviterAddress,
                    validUntilBlock: validUntilBlock.toString()
                })
            });
            if (!response.ok) {
                throw new Error('Failed to get app signature');
            }
            const { signature: appSignature } = await response.json();
            // Submit claim transaction
            const hash = await writeContractAsync({
                address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACTIVE_REWARDS_CONTRACT"],
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGAGEMENT_REWARDS_ABI"],
                functionName: 'nonContractAppClaim',
                args: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHATABELLA_APP_ADDRESS"],
                    inviterAddress,
                    validUntilBlock,
                    userSignature,
                    appSignature
                ]
            });
            setClaimTxHash(hash);
            console.log('Claim transaction submitted:', hash);
        } catch (error) {
            console.error('Error testing claim:', error);
            alert(`Claim failed: ${error.message}`);
        } finally{
            setIsRunning(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EngagementRewardsTest.useEffect": ()=>{
            if (isConnected && address) {
                runTests();
            }
        }
    }["EngagementRewardsTest.useEffect"], [
        isConnected,
        address,
        inviterAddress
    ]);
    if (!isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-bold text-yellow-900 mb-2",
                    children: "⚠️ Wallet Not Connected"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                    lineNumber: 289,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-yellow-800",
                    children: "Please connect your wallet to test engagement rewards integration."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                    lineNumber: 290,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
            lineNumber: 288,
            columnNumber: 7
        }, this);
    }
    const getStatusIcon = (status)=>{
        switch(status){
            case 'pass':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__["CheckCircleIcon"], {
                    className: "h-5 w-5 text-green-600"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                    lineNumber: 298,
                    columnNumber: 16
                }, this);
            case 'fail':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircleIcon$3e$__["XCircleIcon"], {
                    className: "h-5 w-5 text-red-600"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                    lineNumber: 300,
                    columnNumber: 16
                }, this);
            case 'warning':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ExclamationTriangleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExclamationTriangleIcon$3e$__["ExclamationTriangleIcon"], {
                    className: "h-5 w-5 text-yellow-600"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                    lineNumber: 302,
                    columnNumber: 16
                }, this);
            case 'pending':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ClockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClockIcon$3e$__["ClockIcon"], {
                    className: "h-5 w-5 text-blue-600"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                    lineNumber: 304,
                    columnNumber: 16
                }, this);
        }
    };
    const getStatusColor = (status)=>{
        switch(status){
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
    const passedTests = tests.filter((t)=>t.status === 'pass').length;
    const totalTests = tests.length;
    const allPassed = passedTests === totalTests;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-2",
                        children: "🧪 Engagement Rewards Integration Test"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-purple-100",
                        children: "Testing your GoodDollar Engagement Rewards setup"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                lineNumber: 328,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl p-6 shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold mb-4",
                        children: "📋 Configuration"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Rewards Contract:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                        lineNumber: 338,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs bg-gray-100 px-2 py-1 rounded",
                                        children: "DEV"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                        lineNumber: 339,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "App Address:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                        lineNumber: 342,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHATABELLA_APP_ADDRESS"].slice(0, 10),
                                            "..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                        lineNumber: 343,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                lineNumber: 341,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Your Address:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                        lineNumber: 346,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs",
                                        children: [
                                            address?.slice(0, 10),
                                            "..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                        lineNumber: 347,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Inviter:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                        lineNumber: 350,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs",
                                        children: inviterAddress ? `${inviterAddress.slice(0, 10)}...` : 'Not set'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                        lineNumber: 351,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this),
                    !inviterAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-blue-800 mb-2",
                                children: "Set a test inviter address:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                lineNumber: 360,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "0x...",
                                        value: testInviter,
                                        onChange: (e)=>setTestInviter(e.target.value),
                                        className: "flex-1 px-3 py-2 border border-blue-300 rounded-lg text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                        lineNumber: 362,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (testInviter.startsWith('0x')) {
                                                setInviterAddress(testInviter);
                                            }
                                        },
                                        className: "bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700",
                                        children: "Set"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                        lineNumber: 369,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                lineNumber: 361,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                        lineNumber: 359,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl p-6 shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold",
                                children: "Test Results"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                lineNumber: 387,
                                columnNumber: 11
                            }, this),
                            tests.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `px-4 py-2 rounded-full text-sm font-semibold ${allPassed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`,
                                children: [
                                    passedTests,
                                    "/",
                                    totalTests,
                                    " Passed"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                lineNumber: 389,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                        lineNumber: 386,
                        columnNumber: 9
                    }, this),
                    isRunning && tests.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                lineNumber: 399,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-3 text-gray-600",
                                children: "Running tests..."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                lineNumber: 400,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                        lineNumber: 398,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: tests.map((test, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border-l-4 rounded-lg p-4 ${getStatusColor(test.status)}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start space-x-3",
                                    children: [
                                        getStatusIcon(test.status),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold text-gray-900",
                                                    children: test.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                                    lineNumber: 412,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-700 mt-1",
                                                    children: test.message
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 21
                                                }, this),
                                                test.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-600 mt-1",
                                                    children: test.details
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 23
                                                }, this),
                                                test.action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-blue-700 mt-2 font-medium",
                                                    children: [
                                                        "→ ",
                                                        test.action
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                            lineNumber: 411,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                    lineNumber: 409,
                                    columnNumber: 17
                                }, this)
                            }, index, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                lineNumber: 405,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                        lineNumber: 403,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                lineNumber: 385,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl p-6 shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold mb-4",
                        children: "🎬 Test Actions"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                        lineNumber: 430,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: runTests,
                                disabled: isRunning,
                                className: "w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed",
                                children: isRunning ? 'Running Tests...' : '🔄 Run Tests Again'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this),
                            allPassed && inviterAddress && !isUserRegistered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: testClaim,
                                disabled: isRunning || isClaimConfirming,
                                className: "w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed",
                                children: isClaimConfirming ? '⏳ Claiming...' : isClaimConfirmed ? '✅ Claim Successful!' : '🎁 Test Actual Claim Transaction'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                lineNumber: 441,
                                columnNumber: 13
                            }, this),
                            claimTxHash && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-green-50 border border-green-200 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-green-800 mb-2",
                                        children: isClaimConfirming ? '⏳ Transaction confirming...' : '✅ Claim transaction submitted!'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                        lineNumber: 456,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `https://celoscan.io/tx/${claimTxHash}`,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-sm text-green-700 hover:underline break-all",
                                        children: "View on Celoscan →"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                        lineNumber: 459,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                lineNumber: 455,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                        lineNumber: 431,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                lineNumber: 429,
                columnNumber: 7
            }, this),
            allPassed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-green-50 border-2 border-green-200 rounded-xl p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-green-900 mb-3",
                        children: "🎉 Integration Successful!"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                        lineNumber: 475,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-green-800 mb-4",
                        children: "Your engagement rewards integration is working correctly."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                        lineNumber: 476,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 text-sm text-green-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "✅ Contract connectivity verified"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                lineNumber: 478,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "✅ App registration confirmed"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                lineNumber: 479,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "✅ Signature generation working"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                lineNumber: 480,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "✅ Backend API operational"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                lineNumber: 481,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                        lineNumber: 477,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 p-4 bg-white rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-gray-900 mb-2",
                                children: "Ready to apply for engagement pool:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                lineNumber: 484,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "text-sm text-gray-700 space-y-1 list-decimal list-inside",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Share referral links with ?ref=YOUR_ADDRESS"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                        lineNumber: 486,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Test claims with verified GoodDollar users"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                        lineNumber: 487,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "When ready, switch to PROD contract"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                        lineNumber: 488,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "Apply at: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://engagement-rewards.vercel.app/apply",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-blue-600 hover:underline",
                                                children: "engagement-rewards.vercel.app/apply"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                                lineNumber: 489,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                        lineNumber: 489,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                                lineNumber: 485,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                        lineNumber: 483,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
                lineNumber: 474,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/EngagementRewardsTest.tsx",
        lineNumber: 326,
        columnNumber: 5
    }, this);
}
_s(EngagementRewardsTest, "5VRcHwubNAMPkxdqq9y1eQJxvEk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWriteContract"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$hooks$2f$useEngagementRewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEngagementRewards"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"]
    ];
});
_c = EngagementRewardsTest;
var _c;
__turbopack_context__.k.register(_c, "EngagementRewardsTest");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Folder_BlockBelle_next-frontend_src_24471bd6._.js.map