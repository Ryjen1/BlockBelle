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
"[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestRewardsPage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/config/engagement-rewards.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
const dynamic = 'force-dynamic';
;
;
;
function TestRewardsPage() {
    _s();
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"])();
    const [testResults, setTestResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Test 1: Check if app is registered (registeredApps returns owner address, not bool)
    const { data: appOwner, error: appRegError, isLoading: appLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACTIVE_REWARDS_CONTRACT"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGAGEMENT_REWARDS_ABI"],
        functionName: 'registeredApps',
        args: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHATABELLA_APP_ADDRESS"]
        ]
    });
    const isAppRegistered = appOwner && appOwner !== '0x0000000000000000000000000000000000000000';
    // Debug logging
    console.log('🔍 App Registration Debug:', {
        contract: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACTIVE_REWARDS_CONTRACT"],
        app: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHATABELLA_APP_ADDRESS"],
        owner: appOwner,
        isRegistered: isAppRegistered,
        error: appRegError?.message,
        loading: appLoading
    });
    // Test 2: Check if current user is registered
    const { data: isUserRegistered, error: userRegError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACTIVE_REWARDS_CONTRACT"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGAGEMENT_REWARDS_ABI"],
        functionName: 'isUserRegistered',
        args: address ? [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHATABELLA_APP_ADDRESS"],
            address
        ] : undefined,
        query: {
            enabled: !!address
        }
    });
    const runTests = async ()=>{
        setIsLoading(true);
        const results = [];
        // Test 1: App Registration
        results.push({
            name: 'App Registration Check',
            status: appRegError ? 'ERROR' : isAppRegistered ? 'PASS' : 'FAIL',
            result: isAppRegistered ? '✅ App is registered!' : '❌ App not registered',
            details: appRegError ? `Error: ${appRegError.message}` : `Contract: ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACTIVE_REWARDS_CONTRACT"]}`
        });
        // Test 2: User Registration
        if (address) {
            results.push({
                name: 'User Registration Check',
                status: userRegError ? 'ERROR' : isUserRegistered ? 'PASS' : 'INFO',
                result: isUserRegistered ? '✅ User already registered' : 'ℹ️ User not yet registered',
                details: userRegError ? `Error: ${userRegError.message}` : `User: ${address}`
            });
        }
        // Test 3: Can Claim Check
        if (address && publicClient) {
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
                    name: 'Eligibility Check',
                    status: canClaim ? 'PASS' : 'INFO',
                    result: canClaim ? '✅ Can claim rewards!' : `ℹ️ Not eligible to claim`,
                    details: canClaim ? 'All checks passed' : 'Check if user is whitelisted or already claimed'
                });
            } catch (error) {
                results.push({
                    name: 'Eligibility Check',
                    status: 'ERROR',
                    result: '❌ Error checking eligibility',
                    details: error.message || 'Unknown error'
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
                    details: `Valid until: ${(blockNumber + 600n).toString()}`
                });
            } catch (error) {
                results.push({
                    name: 'Current Block Number',
                    status: 'ERROR',
                    result: '❌ Error getting block',
                    details: error.message
                });
            }
        }
        // Test 5: Contract Connection
        results.push({
            name: 'Contract Connection',
            status: 'PASS',
            result: '✅ Connected to Celo',
            details: `Rewards Contract: ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACTIVE_REWARDS_CONTRACT"]}`
        });
        setTestResults(results);
        setIsLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestRewardsPage.useEffect": ()=>{
            if (isConnected && address) {
                runTests();
            }
        }
    }["TestRewardsPage.useEffect"], [
        isConnected,
        address,
        isAppRegistered,
        isUserRegistered
    ]);
    if (!isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-100 p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-yellow-800 mb-2",
                            children: "Connect Wallet to Test"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-yellow-700",
                            children: "Please connect your wallet to run engagement rewards tests"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                    lineNumber: 141,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                lineNumber: 140,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
            lineNumber: 139,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 mb-6 text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold mb-2",
                            children: "🧪 Engagement Rewards Integration Test"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-purple-100",
                            children: "Testing GoodDollar Engagement Rewards Integration"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl p-6 shadow-lg mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold mb-4",
                            children: "📋 Configuration"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: "Rewards Contract:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-xs",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACTIVE_REWARDS_CONTRACT"]
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: "Chata-Bella App:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-xs break-all",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHATABELLA_APP_ADDRESS"]
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: "Rewards Contract:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-xs break-all",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$engagement$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACTIVE_REWARDS_CONTRACT"]
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: "App Registered:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `font-semibold ${isAppRegistered ? 'text-green-600' : 'text-red-600'}`,
                                            children: appLoading ? 'Loading...' : isAppRegistered ? 'Yes ✅' : 'No ❌'
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: "Connected Wallet:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-xs",
                                            children: address
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: "Environment:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: ("TURBOPACK compile-time value", "development")
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this),
                isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl p-8 shadow-lg text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Running tests..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                            lineNumber: 204,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                    lineNumber: 202,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: testResults.map((test, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `bg-white rounded-xl p-6 shadow-lg border-l-4 ${test.status === 'PASS' ? 'border-green-500' : test.status === 'ERROR' ? 'border-red-500' : test.status === 'FAIL' ? 'border-red-500' : 'border-blue-500'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold",
                                            children: test.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                            lineNumber: 219,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `px-3 py-1 rounded-full text-xs font-semibold ${test.status === 'PASS' ? 'bg-green-100 text-green-800' : test.status === 'ERROR' ? 'bg-red-100 text-red-800' : test.status === 'FAIL' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`,
                                            children: test.status
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                            lineNumber: 220,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-800 font-medium mb-1",
                                    children: test.result
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600",
                                    children: test.details
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                    lineNumber: 230,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                            lineNumber: 209,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                    lineNumber: 207,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 bg-white rounded-xl p-6 shadow-lg text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: runTests,
                        disabled: isLoading,
                        className: "bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50",
                        children: isLoading ? 'Running Tests...' : '🔄 Run Tests Again'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                        lineNumber: 238,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-blue-900 mb-3",
                            children: "📚 Next Steps"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2 text-sm text-blue-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        "✅ If app is not registered: Apply at ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://engagement-rewards-dev.vercel.app/",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "underline",
                                            children: "DEV Dashboard"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                            lineNumber: 251,
                                            columnNumber: 54
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "✅ Test claiming with a verified GoodDollar user"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "✅ Share referral link with ?ref=YOUR_ADDRESS"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "✅ Monitor claims in the UI"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                                    lineNumber: 254,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
                    lineNumber: 248,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
            lineNumber: 156,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/app/test-rewards/page.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
_s(TestRewardsPage, "82aPHcKpcj2TGj45zda0GY5/Y44=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"]
    ];
});
_c = TestRewardsPage;
var _c;
__turbopack_context__.k.register(_c, "TestRewardsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/query/readContract.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readContractQueryKey",
    ()=>readContractQueryKey,
    "readContractQueryOptions",
    ()=>readContractQueryOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/readContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function readContractQueryOptions(config, options = {}) {
    return {
        // TODO: Support `signal` once Viem actions allow passthrough
        // https://tkdodo.eu/blog/why-you-want-react-query#bonus-cancellation
        async queryFn ({ queryKey }) {
            const abi = options.abi;
            if (!abi) throw new Error('abi is required');
            const { functionName, scopeKey: _, ...parameters } = queryKey[1];
            const addressOrCodeParams = (()=>{
                const params = queryKey[1];
                if (params.address) return {
                    address: params.address
                };
                if (params.code) return {
                    code: params.code
                };
                throw new Error('address or code is required');
            })();
            if (!functionName) throw new Error('functionName is required');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"])(config, {
                abi,
                functionName,
                args: parameters.args,
                ...addressOrCodeParams,
                ...parameters
            });
        },
        queryKey: readContractQueryKey(options)
    };
}
function readContractQueryKey(options = {}) {
    const { abi: _, ...rest } = options;
    return [
        'readContract',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(rest)
    ];
} //# sourceMappingURL=readContract.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReadContract",
    ()=>useReadContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/query/readContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useReadContract(parameters = {}) {
    const { abi, address, functionName, query = {} } = parameters;
    // @ts-ignore
    const code = parameters.code;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContractQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean((address || code) && abi && functionName && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled,
        structuralSharing: query.structuralSharing ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structuralSharing"]
    });
} //# sourceMappingURL=useReadContract.js.map
}),
]);

//# sourceMappingURL=Desktop_Folder_BlockBelle_next-frontend_edce8281._.js.map