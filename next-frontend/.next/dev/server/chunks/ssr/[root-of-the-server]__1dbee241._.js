module.exports = [
"[project]/Desktop/Folder/BlockBelle/next-frontend/src/config/contracts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Contract addresses - Updated with Celo mainnet deployment
__turbopack_context__.s([
    "CONTRACT_ADDRESSES",
    ()=>CONTRACT_ADDRESSES,
    "ENS_ADDRESSES",
    ()=>ENS_ADDRESSES
]);
const CONTRACT_ADDRESSES = {
    registry: '0xA72B585c6b2293177dd485Ec0A607A471976771B',
    chat: '0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C'
};
const ENS_ADDRESSES = {
    celo: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
};
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Register
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/esm/human-readable/parseAbi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/UserIcon.js [app-ssr] (ecmascript) <export default as UserIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js [app-ssr] (ecmascript) <export default as CheckCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/config/contracts.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const registryAbi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbi"])([
    'function registerUser(string ensName, string avatarHash) external',
    'function getUserDetails(address userAddress) external view returns (string memory ensName, string memory avatarHash, bool registered)',
    'function isUserRegistered(address userAddress) external view returns (bool)'
]);
function Register({ onRegistrationSuccess }) {
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const [ensName, setEnsName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [avatarHash, setAvatarHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isUserRegistered, setIsUserRegistered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { writeContract } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const { data: userDetails } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESSES"].registry,
        abi: registryAbi,
        functionName: 'getUserDetails',
        args: [
            address
        ]
    });
    const { data: registrationStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESSES"].registry,
        abi: registryAbi,
        functionName: 'isUserRegistered',
        args: [
            address
        ]
    });
    const handleRegister = async ()=>{
        if (!ensName.trim()) return;
        try {
            await writeContract({
                address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESSES"].registry,
                abi: registryAbi,
                functionName: 'registerUser',
                args: [
                    ensName,
                    avatarHash || ''
                ]
            });
            onRegistrationSuccess?.();
        } catch (error) {
            console.error('Registration failed:', error);
            // Show user-friendly error message
            if (error.message?.includes('insufficient funds')) {
                alert('❌ Transaction failed: Insufficient funds for gas. Please get some Base Sepolia ETH from a faucet.');
            } else if (error.message?.includes('User rejected')) {
                alert('❌ Transaction cancelled: You rejected the transaction in your wallet.');
            } else if (error.message?.includes('already registered')) {
                alert('❌ Registration failed: You are already registered with a name.');
            } else if (error.message?.includes('Name is already taken')) {
                alert('❌ Registration failed: This name is already taken. Please choose a different name.');
            } else {
                alert('❌ Registration failed: ' + (error.message || 'Unknown error. Please try again.'));
            }
        }
    };
    // Check user registration status
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (registrationStatus !== undefined) {
            setIsUserRegistered(registrationStatus);
        }
    }, [
        registrationStatus
    ]);
    // Auto-navigate when registration is successful
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (userDetails && userDetails[2] && onRegistrationSuccess) {
            // Add a small delay to show the success message before navigating
            const timer = setTimeout(()=>{
                onRegistrationSuccess();
            }, 2000);
            return ()=>clearTimeout(timer);
        }
    }, [
        userDetails,
        onRegistrationSuccess
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-2xl mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-xl overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__["UserIcon"], {
                                    className: "h-8 w-8 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-white",
                                    children: "Register Your Profile"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-pink-100 mt-2",
                            children: "Create your unique profile to start chatting!"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-8 py-8",
                    children: [
                        userDetails && userDetails[2] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-green-50 border border-green-200 rounded-lg p-6 mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__["CheckCircleIcon"], {
                                        className: "h-6 w-6 text-green-500 mr-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-green-800",
                                                children: "Registration Complete!"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                                lineNumber: 106,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-green-700",
                                                children: [
                                                    "You're registered as: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-bold",
                                                        children: userDetails[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 71
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                                lineNumber: 107,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-green-600 text-sm mt-1",
                                                children: "Your profile is now active!"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                        lineNumber: 105,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__["UserIcon"], {
                                        className: "h-6 w-6 text-blue-500 mr-3 mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-blue-800",
                                                children: "Create Your Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-blue-700 text-sm",
                                                children: "Register your unique name and avatar to join the community."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                                lineNumber: 118,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                lineNumber: 114,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                            children: "Display Name"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: ensName,
                                            onChange: (e)=>setEnsName(e.target.value),
                                            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg",
                                            placeholder: "Enter your display name"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 mt-2",
                                            children: "Choose any name you'd like to be known by in the community"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                            children: "Avatar Hash (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: avatarHash,
                                            onChange: (e)=>setAvatarHash(e.target.value),
                                            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
                                            placeholder: "IPFS hash or URL for your avatar"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 mt-2",
                                            children: "Leave empty for default avatar, or add an IPFS hash/URL for your custom avatar"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 rounded-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-gray-800 mb-2",
                                            children: "How it works:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "text-sm text-gray-600 space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Choose any display name you like"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Optionally add an avatar hash for your profile picture"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• One profile per wallet address"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Start chatting with other community members!"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-blue-800 mb-2",
                                            children: "Need Celo?"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-blue-700 mb-2",
                                            children: "This app runs on Celo mainnet. If your transaction fails due to insufficient funds:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://faucet.celo.org/",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-blue-600 hover:text-blue-800 underline text-sm",
                                            children: "Get Celo from faucet →"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                            lineNumber: 174,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleRegister,
                                    disabled: !ensName.trim() || isUserRegistered,
                                    className: "w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed",
                                    children: isUserRegistered ? 'Already Registered' : 'Register Profile'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/src/utils/contractReads.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserDetailsFromContract",
    ()=>getUserDetailsFromContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/clients/createPublicClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/clients/transports/http.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$celo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/chains/definitions/celo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/esm/human-readable/parseAbi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/config/contracts.ts [app-ssr] (ecmascript)");
;
;
;
;
const registryAbi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbi"])([
    'function getUserDetails(address userAddress) external view returns (string memory ensName, string memory avatarHash, bool registered)'
]);
// Create a public client for reading contract data
const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPublicClient"])({
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$celo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["celo"],
    transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])()
});
async function getUserDetailsFromContract(userAddress) {
    try {
        const result = await publicClient.readContract({
            address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESSES"].registry,
            abi: registryAbi,
            functionName: 'getUserDetails',
            args: [
                userAddress
            ]
        });
        if (result && Array.isArray(result) && result.length >= 3) {
            const [ensName, avatarHash, registered] = result;
            return {
                ensName: ensName || '',
                avatarHash: avatarHash || '',
                registered: Boolean(registered)
            };
        }
        return {
            ensName: '',
            avatarHash: '',
            registered: false
        };
    } catch (error) {
        console.error('Error reading user details from contract:', error);
        return {
            ensName: '',
            avatarHash: '',
            registered: false
        };
    }
}
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MembersList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/esm/human-readable/parseAbi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/UserIcon.js [app-ssr] (ecmascript) <export default as UserIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftRightIcon.js [app-ssr] (ecmascript) <export default as ChatBubbleLeftRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js [app-ssr] (ecmascript) <export default as CheckCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/config/contracts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$utils$2f$contractReads$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/utils/contractReads.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const registryAbi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbi"])([
    'function getAllUsers() external view returns (address[])',
    'function getUserDetails(address userAddress) external view returns (string memory ensName, string memory avatarHash, bool registered)'
]);
function MembersList({ onSelectUser, showChatButton = true }) {
    const { address: currentUserAddress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const [members, setMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const { data: allUsers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESSES"].registry,
        abi: registryAbi,
        functionName: 'getAllUsers'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (allUsers && allUsers.length > 0) {
            const membersList = [];
            // Create members list
            for (const userAddress of allUsers){
                if (userAddress.toLowerCase() !== currentUserAddress?.toLowerCase()) {
                    membersList.push({
                        address: userAddress,
                        ensName: `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`
                    });
                }
            }
            setMembers(membersList);
            // Fetch actual usernames from the contract
            allUsers.forEach((userAddress)=>{
                if (userAddress.toLowerCase() !== currentUserAddress?.toLowerCase()) {
                    // Use the contract reading utility to fetch actual username
                    try {
                        const fetchUsername = async ()=>{
                            try {
                                const userDetails = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$utils$2f$contractReads$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserDetailsFromContract"])(userAddress);
                                if (userDetails) {
                                    const actualUsername = userDetails.registered && userDetails.ensName ? userDetails.ensName : `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`;
                                    // Update the member in the list
                                    setMembers((prev)=>prev.map((member)=>member.address === userAddress ? {
                                                ...member,
                                                ensName: actualUsername
                                            } : member));
                                }
                            } catch (error) {
                                console.error('Error fetching username from contract:', error);
                            }
                        };
                        // Fetch with a small delay to avoid overwhelming the network
                        setTimeout(fetchUsername, Math.random() * 1000);
                    } catch (error) {
                        console.error('Error setting up username fetch:', error);
                    }
                }
            });
        }
    }, [
        allUsers,
        currentUserAddress
    ]);
    const isCurrentUser = (memberAddress)=>{
        return currentUserAddress?.toLowerCase() === memberAddress.toLowerCase();
    };
    const handleUserClick = (member)=>{
        if (onSelectUser) {
            onSelectUser(member);
        }
    };
    if (members.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-md p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-2 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__["UserIcon"], {
                            className: "h-5 w-5 text-gray-600"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-gray-800",
                            children: "Community Members"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__["UserIcon"], {
                            className: "h-12 w-12 text-gray-300 mx-auto mb-3"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: "No registered members yet"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-400 mt-1",
                            children: "Be the first to join the community!"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 p-3 bg-blue-50 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-blue-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "How to get started:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                    className: "text-xs text-blue-600 mt-1 space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "1. Go to the Register tab"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "2. Create your profile with any name"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "3. Come back here to see all members"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "4. Start chatting with other users!"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
            lineNumber: 99,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow-md p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__["UserIcon"], {
                            className: "h-5 w-5 text-gray-600"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-gray-800",
                            children: "Community Members"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full",
                            children: members.length
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 max-h-64 overflow-y-auto",
                children: members.map((member, index)=>{
                    const isCurrentUserMember = isCurrentUser(member.address);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${isCurrentUserMember ? 'bg-blue-50 border-2 border-blue-200' : 'hover:bg-gray-50 cursor-pointer group'}`,
                        onClick: ()=>!isCurrentUserMember && handleUserClick(member),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-8 h-8 rounded-full flex items-center justify-center ${isCurrentUserMember ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 'bg-gradient-to-r from-pink-400 to-purple-500'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white text-sm font-medium",
                                                    children: member.ensName.charAt(0).toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                                                lineNumber: 151,
                                                columnNumber: 19
                                            }, this),
                                            isCurrentUserMember && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__["CheckCircleIcon"], {
                                                    className: "h-3 w-3 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                                                lineNumber: 161,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                                        lineNumber: 150,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `font-medium transition-colors ${isCurrentUserMember ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-600'}`,
                                                        children: member.ensName
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 21
                                                    }, this),
                                                    isCurrentUserMember && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full",
                                                        children: "You"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                                                lineNumber: 167,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 font-mono",
                                                children: [
                                                    member.address.slice(0, 6),
                                                    "...",
                                                    member.address.slice(-4)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                                                lineNumber: 179,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                                lineNumber: 149,
                                columnNumber: 15
                            }, this),
                            showChatButton && !isCurrentUserMember && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    handleUserClick(member);
                                },
                                className: "opacity-0 group-hover:opacity-100 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-all duration-200 transform hover:scale-105",
                                title: "Start chat",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__["ChatBubbleLeftRightIcon"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                                    lineNumber: 194,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                                lineNumber: 186,
                                columnNumber: 17
                            }, this)
                        ]
                    }, member.address, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                        lineNumber: 140,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 pt-4 border-t border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-gray-500 text-center",
                    children: "Click on any member to start a private conversation"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GroupChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useWatchContractEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/esm/human-readable/parseAbi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$MembersList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/config/contracts.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const chatAbi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbi"])([
    'function createGroup(string _name) external returns (uint256)',
    'function addMember(uint256 _groupId, address _member) external',
    'function sendGroupMessage(uint256 _groupId, string _content) external',
    'function getGroupMessages(uint256 _groupId, uint256 _start, uint256 _count) external view returns ((address sender, string content, uint256 timestamp)[])',
    'function getGroupMembers(uint256 _groupId) external view returns (address[])',
    'function groupCount() external view returns (uint256)'
]);
const registryAbi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbi"])([
    'function getAllUsers() external view returns (address[] memory)',
    'function getUserDetails(address userAddress) external view returns (string memory ensName, string memory avatarHash, bool registered)'
]);
function GroupChat() {
    const [selectedGroup, setSelectedGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newMessage, setNewMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [newGroupName, setNewGroupName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [newMember, setNewMember] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [userNames, setUserNames] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const { writeContract } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePublicClient"])();
    const { data: allUsers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESSES"].registry,
        abi: registryAbi,
        functionName: 'getAllUsers'
    });
    const { data: groupMessages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESSES"].chat,
        abi: chatAbi,
        functionName: 'getGroupMessages',
        args: selectedGroup ? [
            BigInt(selectedGroup),
            0n,
            100n
        ] : undefined
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (groupMessages) {
            setMessages(groupMessages);
        }
    }, [
        groupMessages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (allUsers && allUsers.length > 0 && publicClient) {
            Promise.all(allUsers.map((address)=>publicClient.readContract({
                    address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESSES"].registry,
                    abi: registryAbi,
                    functionName: 'getUserDetails',
                    args: [
                        address
                    ]
                }))).then((details)=>{
                const names = {};
                allUsers.forEach((address, index)=>{
                    names[address] = details[index][0] || address.slice(0, 6) + '...' + address.slice(-4);
                });
                setUserNames(names);
            }).catch((error)=>{
                console.error('Error fetching user details:', error);
            });
        }
    }, [
        allUsers,
        publicClient
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWatchContractEvent"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESSES"].chat,
        abi: chatAbi,
        eventName: 'GroupMessageSent',
        onLogs: ()=>{
            // Refresh messages
            if (selectedGroup) {
            // Trigger refetch
            }
        }
    });
    const handleCreateGroup = ()=>{
        if (!newGroupName) return;
        writeContract({
            address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESSES"].chat,
            abi: chatAbi,
            functionName: 'createGroup',
            args: [
                newGroupName
            ]
        });
        setNewGroupName('');
    };
    const handleAddMember = ()=>{
        if (!selectedGroup || !newMember) return;
        writeContract({
            address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESSES"].chat,
            abi: chatAbi,
            functionName: 'addMember',
            args: [
                BigInt(selectedGroup),
                newMember
            ]
        });
        setNewMember('');
    };
    const handleSendMessage = ()=>{
        if (!selectedGroup || !newMessage) return;
        writeContract({
            address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESSES"].chat,
            abi: chatAbi,
            functionName: 'sendGroupMessage',
            args: [
                BigInt(selectedGroup),
                newMessage
            ]
        });
        setNewMessage('');
    };
    const handleMemberSelect = (member)=>{
        setNewMember(member.address);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$MembersList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onSelectUser: handleMemberSelect,
                        showChatButton: false
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-3 bg-white rounded-lg shadow-md p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold mb-4",
                            children: "Group Chat"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: newGroupName,
                                    onChange: (e)=>setNewGroupName(e.target.value),
                                    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2",
                                    placeholder: "New group name"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCreateGroup,
                                    className: "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                                    children: "Create Group"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-2",
                                            children: "Groups"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-4 text-gray-500 text-sm",
                                                children: "No groups created yet"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2",
                                    children: selectedGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: newMember,
                                                        onChange: (e)=>setNewMember(e.target.value),
                                                        className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2",
                                                        placeholder: "Member address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleAddMember,
                                                        className: "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                                                        children: "Add Member"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                                                lineNumber: 169,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border rounded p-4 h-64 overflow-y-auto mb-4",
                                                children: messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center text-gray-500 py-8",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "No messages yet. Start the conversation!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 23
                                                }, this) : messages.map((msg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold",
                                                                children: [
                                                                    userNames[msg.sender] || msg.sender.slice(0, 6) + '...' + msg.sender.slice(-4),
                                                                    ":"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                                                                lineNumber: 193,
                                                                columnNumber: 27
                                                            }, this),
                                                            " ",
                                                            msg.content
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: newMessage,
                                                        onChange: (e)=>setNewMessage(e.target.value),
                                                        className: "shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                                        placeholder: "Type a message..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleSendMessage,
                                                        className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline",
                                                        children: "Send"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                                                lineNumber: 199,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
            lineNumber: 129,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PrivateChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/esm/human-readable/parseAbi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftRightIcon.js [app-ssr] (ecmascript) <export default as ChatBubbleLeftRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$MembersList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/config/contracts.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const chatAbi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbi"])([
    'function sendMessage(address to, string content) external',
    'function getConversation(address user1, address user2) external view returns ((address sender, address receiver, string content, uint256 timestamp)[])'
]);
function PrivateChat() {
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const [selectedUser, setSelectedUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newMessage, setNewMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const { writeContract } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const { data: conversation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESSES"].chat,
        abi: chatAbi,
        functionName: 'getConversation',
        args: address && selectedUser ? [
            address,
            selectedUser.address
        ] : undefined
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (conversation) {
            const formattedMessages = conversation.map((msg)=>({
                    sender: msg.sender,
                    content: msg.content,
                    timestamp: BigInt(msg.timestamp)
                }));
            setMessages(formattedMessages);
        }
    }, [
        conversation
    ]);
    const handleSendMessage = ()=>{
        if (!selectedUser || !newMessage) return;
        writeContract({
            address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESSES"].chat,
            abi: chatAbi,
            functionName: 'sendMessage',
            args: [
                selectedUser.address,
                newMessage
            ]
        });
        setNewMessage('');
    };
    const handleUserSelect = (member)=>{
        setSelectedUser(member);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-6xl mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$MembersList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onSelectUser: handleUserSelect,
                        showChatButton: false
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-2 bg-white rounded-lg shadow-md p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold mb-4",
                            children: "Private Chat"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        selectedUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 p-3 bg-blue-50 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600",
                                    children: [
                                        "Chatting with: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-blue-700",
                                            children: selectedUser.ensName
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx",
                                            lineNumber: 77,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 font-mono mt-1",
                                    children: [
                                        selectedUser.address.slice(0, 6),
                                        "...",
                                        selectedUser.address.slice(-4)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 p-3 bg-gray-50 rounded-lg text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "Select a user from the list to start chatting"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border rounded p-4 h-64 overflow-y-auto mb-4",
                            children: messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__["ChatBubbleLeftRightIcon"], {
                                        className: "h-12 w-12 text-gray-300 mx-auto mb-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500",
                                        children: "Select a member from the list to start chatting"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-400 mt-1",
                                        children: "Choose someone from the community members to begin a conversation"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this) : messages.map((msg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `mb-2 ${msg.sender === address ? 'text-right' : 'text-left'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: [
                                                msg.sender.slice(0, 6),
                                                "...",
                                                msg.sender.slice(-4),
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx",
                                            lineNumber: 99,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        msg.content
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx",
                                    lineNumber: 98,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: newMessage,
                                    onChange: (e)=>setNewMessage(e.target.value),
                                    className: "shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                    placeholder: "Type a message..."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSendMessage,
                                    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline",
                                    children: "Send"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Tier3Badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Tier3Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/lucide-react/dist/esm/icons/crown.js [app-ssr] (ecmascript) <export default as Crown>");
'use client';
;
;
function Tier3Badge({ size = 'sm', showLabel = false, className = '' }) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6'
    };
    const labelSizeClasses = {
        sm: 'text-xs px-2 py-0.5',
        md: 'text-sm px-2.5 py-1',
        lg: 'text-base px-3 py-1.5'
    };
    if (showLabel) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `tier-badge inline-flex items-center gap-1 ${labelSizeClasses[size]} ${className}`,
            title: "Tier 3 - Self Protocol Verified",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                    className: sizeClasses[size]
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Tier3Badge.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Tier 3"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Tier3Badge.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Tier3Badge.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center ${className}`,
        title: "Tier 3 - Self Protocol Verified",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
            className: `${sizeClasses[size]} text-blockbelle-gold`,
            style: {
                filter: 'drop-shadow(0 1px 2px rgba(251, 191, 36, 0.5))'
            }
        }, void 0, false, {
            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Tier3Badge.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Tier3Badge.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/src/hooks/useBulkSelfVerification.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBulkSelfVerification",
    ()=>useBulkSelfVerification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContracts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useReadContracts.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const PROOF_OF_HUMAN_ADDRESS = process.env.NEXT_PUBLIC_SELF_ENDPOINT || '0x72493afCa2789dA494DD3695d74b50DE7774336A';
const PROOF_OF_HUMAN_ABI = [
    {
        inputs: [
            {
                name: '',
                type: 'address'
            }
        ],
        name: 'isVerified',
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
];
function useBulkSelfVerification(addresses) {
    // Create contracts array for batch reading
    const contracts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>addresses.map((address)=>({
                address: PROOF_OF_HUMAN_ADDRESS,
                abi: PROOF_OF_HUMAN_ABI,
                functionName: 'isVerified',
                args: [
                    address
                ]
            })), [
        addresses.join(',')
    ]);
    const { data, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContracts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContracts"])({
        contracts,
        query: {
            enabled: addresses.length > 0
        }
    });
    // Transform results into a map
    const verifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const result = {};
        if (data) {
            addresses.forEach((address, index)=>{
                result[address] = data[index]?.result || false;
            });
        }
        return result;
    }, [
        data,
        addresses.join(',')
    ]);
    return {
        verifications,
        isLoading
    };
}
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useWatchContractEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/esm/human-readable/parseAbi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/UserIcon.js [app-ssr] (ecmascript) <export default as UserIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftRightIcon.js [app-ssr] (ecmascript) <export default as ChatBubbleLeftRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PhoneIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/PhoneIcon.js [app-ssr] (ecmascript) <export default as PhoneIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$VideoCameraIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoCameraIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/VideoCameraIcon.js [app-ssr] (ecmascript) <export default as VideoCameraIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js [app-ssr] (ecmascript) <export default as MagnifyingGlassIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PaperClipIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PaperClipIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/PaperClipIcon.js [app-ssr] (ecmascript) <export default as PaperClipIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$FaceSmileIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FaceSmileIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/FaceSmileIcon.js [app-ssr] (ecmascript) <export default as FaceSmileIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$EllipsisVerticalIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EllipsisVerticalIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/EllipsisVerticalIcon.js [app-ssr] (ecmascript) <export default as EllipsisVerticalIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js [app-ssr] (ecmascript) <export default as CheckCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$MembersList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MembersList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/config/contracts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$utils$2f$contractReads$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/utils/contractReads.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$Tier3Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Tier3Badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$hooks$2f$useBulkSelfVerification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/hooks/useBulkSelfVerification.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const registryAbi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbi"])([
    'function getAllUsers() external view returns (address[])',
    'function getUserDetails(address userAddress) external view returns (string memory ensName, string memory avatarHash, bool registered)'
]);
const chatAbi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbi"])([
    'function sendMessage(address to, string content) external',
    'function getConversation(address user1, address user2) external view returns ((address sender, address receiver, string content, uint256 timestamp)[])'
]);
function MainChat({ onClose }) {
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const { writeContract } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const [selectedChat, setSelectedChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newMessage, setNewMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [chats, setChats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showMembersList, setShowMembersList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [userNames, setUserNames] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const [isLoadingMessages, setIsLoadingMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Get on-chain verification status for selected chat user
    const recipientAddress = selectedChat?.id.replace('private_', '');
    const { verifications: userVerifications } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$hooks$2f$useBulkSelfVerification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBulkSelfVerification"])(recipientAddress ? [
        recipientAddress
    ] : []);
    // Fetch real registered users from smart contract
    const { data: allUsers, refetch: refetchUsers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESSES"].registry,
        abi: registryAbi,
        functionName: 'getAllUsers'
    });
    // Fetch usernames for all users
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!allUsers || allUsers.length === 0) return;
        const namesMap = new Map();
        // Create initial mapping with cached usernames or address fallbacks
        allUsers.forEach((userAddress)=>{
            if (userAddress.toLowerCase() !== address?.toLowerCase()) {
                const cachedName = localStorage.getItem(`username_${userAddress}`);
                if (cachedName) {
                    namesMap.set(userAddress, cachedName);
                } else {
                    namesMap.set(userAddress, `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`);
                }
            }
        });
        setUserNames(namesMap);
        // Create chats with usernames
        const realChats = allUsers.filter((userAddress)=>userAddress.toLowerCase() !== address?.toLowerCase()).map((userAddress)=>({
                id: `private_${userAddress}`,
                name: namesMap.get(userAddress) || `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`,
                type: 'private',
                lastMessage: '',
                lastMessageTime: 0n,
                unreadCount: 0,
                isOnline: Math.random() > 0.5
            }));
        setChats(realChats);
        // Try to fetch actual usernames for users without cached names
        allUsers.forEach((userAddress)=>{
            if (userAddress.toLowerCase() !== address?.toLowerCase()) {
                const cachedName = localStorage.getItem(`username_${userAddress}`);
                if (!cachedName) {
                    // Use the contract reading utility to fetch actual username
                    try {
                        const fetchUsername = async ()=>{
                            try {
                                const userDetails = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$utils$2f$contractReads$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserDetailsFromContract"])(userAddress);
                                if (userDetails && userDetails.registered) {
                                    const actualUsername = userDetails.ensName || `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`;
                                    // Cache the actual username
                                    localStorage.setItem(`username_${userAddress}`, actualUsername);
                                    // Update the names map
                                    namesMap.set(userAddress, actualUsername);
                                    setUserNames(new Map(namesMap));
                                    // Update chats with new username
                                    setChats((prev)=>prev.map((chat)=>chat.id === `private_${userAddress}` ? {
                                                ...chat,
                                                name: actualUsername
                                            } : chat));
                                }
                            } catch (error) {
                                console.error('Error fetching username from contract:', error);
                            }
                        };
                        // Fetch with a small delay to avoid overwhelming the network
                        setTimeout(fetchUsername, Math.random() * 1000);
                    } catch (error) {
                        console.error('Error setting up username fetch:', error);
                    }
                }
            }
        });
    }, [
        allUsers,
        address
    ]);
    // Usernames are now handled in the other useEffect above
    // Fetch messages for selected chat using wagmi
    const { data: conversation, refetch: refetchMessages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESSES"].chat,
        abi: chatAbi,
        functionName: 'getConversation',
        args: address && recipientAddress ? [
            address,
            recipientAddress
        ] : undefined,
        query: {
            enabled: !!address && !!recipientAddress
        }
    });
    // Update messages when conversation data changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (conversation) {
            const formattedMessages = conversation.map((msg)=>({
                    sender: msg.sender,
                    content: msg.content,
                    timestamp: BigInt(msg.timestamp),
                    type: 'private',
                    chatId: selectedChat?.id || ''
                }));
            setMessages(formattedMessages);
        }
    }, [
        conversation,
        selectedChat
    ]);
    // Watch for new messages
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWatchContractEvent"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESSES"].chat,
        abi: chatAbi,
        eventName: 'MessageSent',
        onLogs (logs) {
            logs.forEach((log)=>{
                const { from, to, message, timestamp } = log.args;
                // Check if this message is for current user or from current chat
                if (to === address && selectedChat?.id === `private_${from}` || from === address && selectedChat?.id === `private_${to}`) {
                    const newMessage = {
                        sender: from,
                        content: message,
                        timestamp: BigInt(timestamp),
                        type: 'private',
                        chatId: selectedChat.id
                    };
                    setMessages((prev)=>{
                        // Avoid duplicates
                        const exists = prev.some((msg)=>msg.sender === from && msg.content === message && msg.timestamp === BigInt(timestamp));
                        return exists ? prev : [
                            ...prev,
                            newMessage
                        ];
                    });
                    // Update last message in chats
                    setChats((prev)=>prev.map((chat)=>chat.id === selectedChat.id ? {
                                ...chat,
                                lastMessage: message,
                                lastMessageTime: BigInt(timestamp),
                                unreadCount: 0
                            } : chat));
                }
            });
        }
    });
    const handleSendMessage = async ()=>{
        if (!newMessage.trim() || !selectedChat) return;
        try {
            // Extract recipient address from chat ID
            const recipientAddress = selectedChat.id.replace('private_', '');
            // Send message to blockchain
            await writeContract({
                address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESSES"].chat,
                abi: chatAbi,
                functionName: 'sendMessage',
                args: [
                    recipientAddress,
                    newMessage
                ]
            });
            // Add message to local state for immediate UI feedback
            const message = {
                sender: address,
                content: newMessage,
                timestamp: BigInt(Date.now()),
                type: selectedChat.type,
                chatId: selectedChat.id
            };
            setMessages((prev)=>[
                    ...prev,
                    message
                ]);
            setNewMessage('');
            // Update last message in chats
            setChats((prev)=>prev.map((chat)=>chat.id === selectedChat.id ? {
                        ...chat,
                        lastMessage: newMessage,
                        lastMessageTime: BigInt(Date.now()),
                        unreadCount: 0
                    } : chat));
        } catch (error) {
            console.error('Failed to send message:', error);
            alert('Failed to send message: ' + (error.message || 'Unknown error'));
        }
    };
    const handleChatSelect = (chat)=>{
        setSelectedChat(chat);
        setMessages([]); // In real app, load messages for this chat
        // Mark as read
        setChats((prev)=>prev.map((c)=>c.id === chat.id ? {
                    ...c,
                    unreadCount: 0
                } : c));
    };
    const handleUserSelect = (member)=>{
        const existingChat = chats.find((c)=>c.id === `private_${member.address}`);
        if (existingChat) {
            handleChatSelect(existingChat);
        } else {
            const newChat = {
                id: `private_${member.address}`,
                name: member.ensName,
                type: 'private',
                unreadCount: 0,
                isOnline: Math.random() > 0.5
            };
            setChats((prev)=>[
                    newChat,
                    ...prev
                ]);
            handleChatSelect(newChat);
        }
        setShowMembersList(false);
    };
    const formatTime = (timestamp)=>{
        try {
            const timestampNum = Number(timestamp);
            // Check if timestamp is 0 or invalid
            if (timestampNum === 0 || timestampNum < 1000000000) {
                return 'now';
            }
            const date = new Date(timestampNum * 1000) // Convert from seconds to milliseconds
            ;
            const now = new Date();
            const diff = now.getTime() - date.getTime();
            if (diff < 60000) return 'now';
            if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
            if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
            return date.toLocaleDateString();
        } catch (error) {
            console.error('Error formatting time:', error);
            return 'now';
        }
    };
    const filteredChats = chats.filter((chat)=>chat.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-80 bg-white border-r border-gray-200 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-gray-200 bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-bold text-gray-900",
                                        children: "BlockBelle Chat"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowMembersList(!showMembersList),
                                            className: "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full",
                                            title: "Add Contact",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__["UserIcon"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                lineNumber: 334,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__["MagnifyingGlassIcon"], {
                                        className: "h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                        lineNumber: 341,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: searchTerm,
                                        onChange: (e)=>setSearchTerm(e.target.value),
                                        placeholder: "Search chats...",
                                        className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                        lineNumber: 342,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                lineNumber: 340,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto",
                        children: filteredChats.map((chat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>handleChatSelect(chat),
                                className: `p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${selectedChat?.id === chat.id ? 'bg-blue-50 border-r-2 border-r-blue-500' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white font-medium",
                                                        children: chat.name.charAt(0).toUpperCase()
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 19
                                                }, this),
                                                chat.isOnline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                            lineNumber: 363,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-semibold text-gray-900 truncate",
                                                            children: chat.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 21
                                                        }, this),
                                                        chat.lastMessageTime ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-500",
                                                            children: formatTime(chat.lastMessageTime)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                            lineNumber: 378,
                                                            columnNumber: 23
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-600 truncate",
                                                            children: chat.lastMessage || 'No messages yet'
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 21
                                                        }, this),
                                                        chat.unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center",
                                                            children: chat.unreadCount
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                            lineNumber: 374,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                    lineNumber: 362,
                                    columnNumber: 15
                                }, this)
                            }, chat.id, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                lineNumber: 355,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                        lineNumber: 353,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this),
            showMembersList && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-80 bg-white border-r border-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold text-gray-900",
                                    children: "Add Contact"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                    lineNumber: 405,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowMembersList(false),
                                    className: "text-gray-500 hover:text-gray-700",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                    lineNumber: 406,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                            lineNumber: 404,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                        lineNumber: 403,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$MembersList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onSelectUser: handleUserSelect,
                        showChatButton: false
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                        lineNumber: 414,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                lineNumber: 402,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col",
                children: selectedChat ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border-b border-gray-200 p-4 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white font-medium",
                                                        children: selectedChat.name.charAt(0).toUpperCase()
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                        lineNumber: 427,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 19
                                                }, this),
                                                selectedChat.isOnline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                            lineNumber: 425,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "font-semibold text-gray-900",
                                                            children: selectedChat.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                            lineNumber: 437,
                                                            columnNumber: 21
                                                        }, this),
                                                        recipientAddress && userVerifications[recipientAddress] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$Tier3Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            size: "sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                            lineNumber: 438,
                                                            columnNumber: 81
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500",
                                                    children: selectedChat.isOnline ? 'Online' : 'Offline'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                    lineNumber: 440,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                            lineNumber: 435,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                    lineNumber: 424,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PhoneIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneIcon$3e$__["PhoneIcon"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                lineNumber: 448,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                            lineNumber: 447,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$VideoCameraIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoCameraIcon$3e$__["VideoCameraIcon"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                lineNumber: 451,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                            lineNumber: 450,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$EllipsisVerticalIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EllipsisVerticalIcon$3e$__["EllipsisVerticalIcon"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                lineNumber: 454,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                            lineNumber: 453,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                    lineNumber: 446,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                            lineNumber: 423,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50",
                            children: messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__["ChatBubbleLeftRightIcon"], {
                                        className: "h-16 w-16 text-gray-300 mx-auto mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                        lineNumber: 463,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 text-lg",
                                        children: "No messages yet"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                        lineNumber: 464,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 text-sm",
                                        children: "Start the conversation!"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                        lineNumber: 465,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                lineNumber: 462,
                                columnNumber: 17
                            }, this) : messages.map((msg, index)=>{
                                const isOwnMessage = msg.sender === address;
                                const senderVerified = !isOwnMessage && userVerifications[msg.sender];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${isOwnMessage ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 shadow-sm'}`,
                                        children: [
                                            !isOwnMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-gray-700",
                                                        children: userNames.get(msg.sender) || `${msg.sender.slice(0, 6)}...${msg.sender.slice(-4)}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 29
                                                    }, this),
                                                    senderVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$Tier3Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        size: "sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 48
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                lineNumber: 480,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: msg.content
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                lineNumber: 487,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `text-xs mt-1 ${isOwnMessage ? 'text-blue-100' : 'text-gray-500'}`,
                                                children: [
                                                    formatTime(msg.timestamp),
                                                    isOwnMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__["CheckCircleIcon"], {
                                                        className: "h-3 w-3 inline ml-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                        lineNumber: 493,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                lineNumber: 488,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                        lineNumber: 474,
                                        columnNumber: 23
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                    lineNumber: 473,
                                    columnNumber: 21
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                            lineNumber: 460,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border-t border-gray-200 p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PaperClipIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PaperClipIcon$3e$__["PaperClipIcon"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                            lineNumber: 507,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                        lineNumber: 506,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: newMessage,
                                        onChange: (e)=>setNewMessage(e.target.value),
                                        placeholder: "Type a message...",
                                        className: "flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                        onKeyPress: (e)=>e.key === 'Enter' && handleSendMessage()
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                        lineNumber: 509,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$FaceSmileIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FaceSmileIcon$3e$__["FaceSmileIcon"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                            lineNumber: 518,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                        lineNumber: 517,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSendMessage,
                                        className: "bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-5 w-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                lineNumber: 525,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                            lineNumber: 524,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                        lineNumber: 520,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                lineNumber: 505,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                            lineNumber: 504,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex items-center justify-center bg-gray-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__["ChatBubbleLeftRightIcon"], {
                                className: "h-24 w-24 text-gray-300 mx-auto mb-6"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                lineNumber: 534,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold text-gray-600 mb-2",
                                children: "Welcome to BlockBelle Chat"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                lineNumber: 535,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 mb-6",
                                children: "You're registered and ready to start chatting!"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                lineNumber: 536,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-400",
                                        children: "Choose how to start:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                        lineNumber: 538,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-3 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowMembersList(true),
                                                className: "bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors",
                                                children: "Find Members to Chat"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                lineNumber: 540,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{},
                                                className: "bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-colors",
                                                children: "Create Group Chat"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                                lineNumber: 546,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                        lineNumber: 539,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                                lineNumber: 537,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                        lineNumber: 533,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                    lineNumber: 532,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
                lineNumber: 419,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx",
        lineNumber: 321,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/src/hooks/useRegistration.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRegistration",
    ()=>useRegistration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/esm/human-readable/parseAbi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/config/contracts.ts [app-ssr] (ecmascript)");
;
;
;
;
const registryAbi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbi"])([
    'function getUserDetails(address userAddress) external view returns (string memory ensName, string memory avatarHash, bool registered)',
    'function isUserRegistered(address userAddress) external view returns (bool)'
]);
function useRegistration() {
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const [isRegistered, setIsRegistered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ensName, setEnsName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const { data: userDetails, isLoading: isLoadingUserDetails } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESSES"].registry,
        abi: registryAbi,
        functionName: 'getUserDetails',
        args: address ? [
            address
        ] : undefined,
        query: {
            enabled: !!address && isConnected,
            refetchInterval: false,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            staleTime: Infinity
        }
    });
    const { data: registrationStatus, isLoading: isLoadingRegistrationStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESSES"].registry,
        abi: registryAbi,
        functionName: 'isUserRegistered',
        args: address ? [
            address
        ] : undefined,
        query: {
            enabled: !!address && isConnected,
            refetchInterval: false,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            staleTime: Infinity
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isLoadingUserDetails || isLoadingRegistrationStatus) {
            setIsLoading(true);
            return;
        }
        if (userDetails && registrationStatus !== undefined) {
            const [name, , registered] = userDetails;
            const hasName = !!(name && name.length > 0);
            setIsRegistered((prev)=>{
                if (prev !== registered) {
                    console.log('Registration status changed:', prev, '->', registered);
                    return registered;
                }
                return prev;
            });
            setEnsName((prev)=>{
                const newName = hasName ? name : '';
                if (prev !== newName) {
                    return newName;
                }
                return prev;
            });
            setIsLoading(false);
        } else {
            setIsRegistered((prev)=>prev !== false ? false : prev);
            setEnsName((prev)=>prev !== '' ? '' : prev);
            setIsLoading(false);
        }
    }, [
        userDetails,
        registrationStatus,
        isLoadingUserDetails,
        isLoadingRegistrationStatus
    ]);
    return {
        isRegistered,
        ensName,
        isLoading,
        address,
        isConnected
    };
}
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/src/hooks/useSelfVerification.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSelfVerification",
    ()=>useSelfVerification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-ssr] (ecmascript)");
;
;
const PROOF_OF_HUMAN_ADDRESS = process.env.NEXT_PUBLIC_SELF_ENDPOINT || '0x72493afCa2789dA494DD3695d74b50DE7774336A';
const PROOF_OF_HUMAN_ABI = [
    {
        inputs: [
            {
                name: '',
                type: 'address'
            }
        ],
        name: 'isVerified',
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
                name: '',
                type: 'address'
            }
        ],
        name: 'verificationTimestamp',
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
function useSelfVerification() {
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const [verificationData, setVerificationData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        selfVerified: false
    });
    // Read verification status from blockchain using mapping
    const { data: isVerifiedOnChain, isLoading: isLoadingVerified } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: PROOF_OF_HUMAN_ADDRESS,
        abi: PROOF_OF_HUMAN_ABI,
        functionName: 'isVerified',
        args: address ? [
            address
        ] : undefined,
        query: {
            enabled: !!address
        }
    });
    // Read verification timestamp from blockchain
    const { data: timestamp, isLoading: isLoadingTimestamp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: PROOF_OF_HUMAN_ADDRESS,
        abi: PROOF_OF_HUMAN_ABI,
        functionName: 'verificationTimestamp',
        args: address ? [
            address
        ] : undefined,
        query: {
            enabled: !!address && !!isVerifiedOnChain
        }
    });
    const isLoading = isLoadingVerified || isLoadingTimestamp;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!address) {
            setVerificationData({
                selfVerified: false
            });
            return;
        }
        const verified = !!isVerifiedOnChain;
        let verifiedAt;
        if (verified && timestamp) {
            // Convert Unix timestamp to ISO string
            verifiedAt = new Date(Number(timestamp) * 1000).toISOString();
        }
        setVerificationData({
            selfVerified: verified,
            verifiedAt
        });
    }, [
        address,
        isVerifiedOnChain,
        timestamp
    ]);
    // Refresh is handled automatically by wagmi's useReadContract
    const refreshVerification = async ()=>{
    // No-op: wagmi automatically refetches on block changes
    };
    return {
        verificationData,
        isLoading,
        refreshVerification
    };
}
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/UserProfile.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useDisconnect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$hooks$2f$useRegistration$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/hooks/useRegistration.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$hooks$2f$useSelfVerification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/hooks/useSelfVerification.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$Tier3Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Tier3Badge.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function UserProfile({ showFullAddress = false }) {
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const { disconnect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDisconnect"])();
    const { isRegistered, ensName, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$hooks$2f$useRegistration$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRegistration"])();
    const { verificationData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$hooks$2f$useSelfVerification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelfVerification"])();
    if (!isConnected || !address) {
        return null // Let SimpleOnboarding handle the connect button
        ;
    }
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 bg-gray-200 rounded-full animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/UserProfile.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-right",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-4 bg-gray-200 rounded animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/UserProfile.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-3 bg-gray-200 rounded animate-pulse mt-1"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/UserProfile.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/UserProfile.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/UserProfile.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this);
    }
    const displayName = ensName || (showFullAddress ? address : `${address.slice(0, 6)}...${address.slice(-4)}`);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center space-x-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-2",
                children: [
                    isRegistered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white text-sm font-bold",
                            children: ensName.charAt(0).toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/UserProfile.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/UserProfile.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `font-medium ${isRegistered ? 'text-gray-900' : 'text-gray-600'} flex items-center gap-1.5 justify-end`,
                                children: [
                                    displayName,
                                    verificationData.selfVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$Tier3Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        size: "sm"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/UserProfile.tsx",
                                        lineNumber: 49,
                                        columnNumber: 47
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/UserProfile.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            isRegistered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-blockbelle-pink font-medium",
                                children: "✓ Verified"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/UserProfile.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            !isRegistered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-amber-600",
                                children: "Not registered"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/UserProfile.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/UserProfile.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/UserProfile.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>disconnect(),
                className: "text-gray-500 hover:text-gray-700 text-sm underline",
                title: "Disconnect wallet",
                children: "Disconnect"
            }, void 0, false, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/UserProfile.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/UserProfile.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegistrationCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/esm/human-readable/parseAbi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/UserIcon.js [app-ssr] (ecmascript) <export default as UserIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js [app-ssr] (ecmascript) <export default as CheckCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ExclamationTriangleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExclamationTriangleIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/ExclamationTriangleIcon.js [app-ssr] (ecmascript) <export default as ExclamationTriangleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js [app-ssr] (ecmascript) <export default as ArrowRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/config/contracts.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const registryAbi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbi"])([
    'function getUserDetails(address userAddress) external view returns (string memory ensName, string memory avatarHash, bool registered)',
    'function isUserRegistered(address userAddress) external view returns (bool)'
]);
function RegistrationCheck({ onRegistered, onNotRegistered }) {
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const [ensName, setEnsName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const { data: userDetails } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESSES"].registry,
        abi: registryAbi,
        functionName: 'getUserDetails',
        args: address ? [
            address
        ] : undefined
    });
    const { data: registrationStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESSES"].registry,
        abi: registryAbi,
        functionName: 'isUserRegistered',
        args: address ? [
            address
        ] : undefined
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (userDetails !== undefined && registrationStatus !== undefined) {
            setIsLoading(false);
            const [name, , registered] = userDetails;
            if (registered && name && name.length > 0) {
                setEnsName(name);
                onRegistered();
            } else {
                onNotRegistered();
            }
        }
    }, [
        userDetails,
        registrationStatus,
        onRegistered,
        onNotRegistered
    ]);
    // Show loading state while checking registration
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex items-center justify-center bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-gray-600 mb-2",
                        children: "Checking Registration Status"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500",
                        children: "Verifying your ENS registration..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this);
    }
    // Show registration status result
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex items-center justify-center bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: ensName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__["CheckCircleIcon"], {
                                className: "h-8 w-8 text-white"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                                lineNumber: 74,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                            lineNumber: 73,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                        lineNumber: 72,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ExclamationTriangleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExclamationTriangleIcon$3e$__["ExclamationTriangleIcon"], {
                                className: "h-8 w-8 text-white"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                                lineNumber: 80,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                            lineNumber: 79,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                        lineNumber: 78,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-gray-900 mb-3",
                    children: ensName ? 'Welcome to Whispr Chat!' : 'Create Your Profile'
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mb-6",
                    children: ensName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "You're registered as ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono font-semibold text-blue-600",
                                children: ensName
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                                lineNumber: 93,
                                columnNumber: 36
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this),
                            "Ready to start chatting with the community?"
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Create your unique profile to start chatting with other community members.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this),
                            "Choose any name you'd like - no ENS ownership required!"
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: ensName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onRegistered,
                        className: "w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Start Chatting"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                        lineNumber: 108,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onNotRegistered,
                        className: "w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Register Now"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__["UserIcon"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                        lineNumber: 116,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                ensName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 p-3 bg-green-50 rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-green-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "✓ Verified:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this),
                            " Your ENS name is confirmed and you can start chatting immediately!"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                        lineNumber: 128,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                    lineNumber: 127,
                    columnNumber: 11
                }, this),
                !ensName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 p-3 bg-blue-50 rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-blue-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "💡 Tip:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                                lineNumber: 137,
                                columnNumber: 15
                            }, this),
                            " Choose any name you'd like - no ENS domain ownership required!"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                        lineNumber: 136,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
                    lineNumber: 135,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/SimpleOnboarding.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SimpleOnboarding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@rainbow-me/rainbowkit/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$hooks$2f$useRegistration$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/hooks/useRegistration.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function SimpleOnboarding({ onComplete, onRegister }) {
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const { isRegistered, ensName, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$hooks$2f$useRegistration$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRegistration"])();
    if (!isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConnectButton"].Custom, {
                children: ({ openConnectModal })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: openConnectModal,
                        className: "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105",
                        children: "Connect Wallet"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/SimpleOnboarding.tsx",
                        lineNumber: 23,
                        columnNumber: 13
                    }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/SimpleOnboarding.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/SimpleOnboarding.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this);
    }
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/SimpleOnboarding.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-600",
                    children: "Checking..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/SimpleOnboarding.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/SimpleOnboarding.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this);
    }
    // Show connected status
    if (isRegistered) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-green-600 font-medium",
                children: "✓ Wallet Connected & Registered"
            }, void 0, false, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/SimpleOnboarding.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/SimpleOnboarding.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this);
    }
    // Show connected but not registered
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center space-x-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-green-600 font-medium",
                children: "✓ Wallet Connected"
            }, void 0, false, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/SimpleOnboarding.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onRegister,
                className: "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105",
                children: "Register ENS"
            }, void 0, false, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/SimpleOnboarding.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/SimpleOnboarding.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Account
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$selfxyz$2f$qrcode$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@selfxyz/qrcode/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$selfxyz$2f$sdk$2d$common$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@selfxyz/sdk-common/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$hooks$2f$useRegistration$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/hooks/useRegistration.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$hooks$2f$useSelfVerification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/hooks/useSelfVerification.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/solid/esm/CheckCircleIcon.js [app-ssr] (ecmascript) <export default as CheckCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$XCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircleIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@heroicons/react/24/solid/esm/XCircleIcon.js [app-ssr] (ecmascript) <export default as XCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$Tier3Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Tier3Badge.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function Account() {
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const { isRegistered, ensName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$hooks$2f$useRegistration$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRegistration"])();
    const { verificationData, isLoading: isLoadingVerification, refreshVerification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$hooks$2f$useSelfVerification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelfVerification"])();
    const [selfApp, setSelfApp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showQRCode, setShowQRCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVerifying, setIsVerifying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showVerificationModal, setShowVerificationModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [verifiedGender, setVerifiedGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!address || !isConnected) {
            setSelfApp(null);
            return;
        }
        // Initialize Self App
        const app = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$selfxyz$2f$sdk$2d$common$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelfAppBuilder"]({
            version: 2,
            appName: process.env.NEXT_PUBLIC_SELF_APP_NAME || 'BlockBelle',
            scope: process.env.NEXT_PUBLIC_SELF_SCOPE || 'blockbelle-chat',
            endpoint: process.env.NEXT_PUBLIC_SELF_ENDPOINT || '0x72493afca2789da494dd3695d74b50de7774336a',
            logoBase64: 'https://i.postimg.cc/mrmVf9hm/self.png',
            userId: address,
            endpointType: 'celo',
            userIdType: 'hex',
            userDefinedData: `BlockBelle verification for ${ensName || address}`,
            disclosures: {
                minimumAge: 18,
                excludedCountries: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$selfxyz$2f$sdk$2d$common$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countries"].CUBA,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$selfxyz$2f$sdk$2d$common$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countries"].IRAN,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$selfxyz$2f$sdk$2d$common$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countries"].NORTH_KOREA,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$selfxyz$2f$sdk$2d$common$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countries"].RUSSIA
                ],
                nationality: true,
                gender: true
            }
        }).build();
        setSelfApp(app);
    }, [
        address,
        isConnected,
        ensName
    ]);
    const handleSuccessfulVerification = async (verificationResult)=>{
        setIsVerifying(true);
        try {
            // Extract gender from Self Protocol response
            // The verificationResult should contain the disclosed data
            console.log('Verification result:', verificationResult);
            // Try to extract gender from the response
            // Self Protocol may return it in different formats, so we check multiple possibilities
            const gender = verificationResult?.gender || verificationResult?.disclosures?.gender || verificationResult?.data?.gender;
            console.log('Extracted gender:', gender);
            // Store the gender
            if (gender) {
                setVerifiedGender(gender.toLowerCase());
            }
            // Check if user is female
            const isFemale = gender?.toLowerCase() === 'female' || gender?.toLowerCase() === 'f';
            if (!isFemale) {
                // Male or other gender - show redirect message immediately
                setIsVerifying(false);
                setShowQRCode(false);
                setShowVerificationModal(true);
                return; // Don't proceed with blockchain verification
            }
            // Female - proceed with blockchain verification
            await new Promise((resolve)=>setTimeout(resolve, 3000));
            setShowQRCode(false);
            // Show success modal after a brief delay
            setTimeout(()=>{
                setShowVerificationModal(true);
            }, 1000);
        } catch (error) {
            console.error('Error during verification:', error);
        } finally{
            setIsVerifying(false);
        }
    };
    const handleVerificationError = (error)=>{
        console.error('Verification error:', error);
        setIsVerifying(false);
    };
    if (!isConnected || !address) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-br from-blockbelle-pink/10 via-blockbelle-purple/10 to-blockbelle-indigo/10 shadow-lg rounded-xl p-6 border border-blockbelle-purple/20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-gradient-blockbelle mb-4",
                    children: "Account"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "Please connect your wallet to view your account."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
            lineNumber: 111,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-br from-blockbelle-pink/10 via-blockbelle-purple/10 to-blockbelle-indigo/10 shadow-lg rounded-xl p-6 border border-blockbelle-purple/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gradient-blockbelle mb-4",
                        children: "Account Information"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-blockbelle-purple",
                                        children: "Wallet Address"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-gray-900 font-mono",
                                        children: address
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            isRegistered && ensName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-blockbelle-purple",
                                        children: "ENS Name"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-900",
                                                children: ensName
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this),
                                            verificationData.selfVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$Tier3Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                size: "sm"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                                lineNumber: 133,
                                                columnNumber: 51
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-blockbelle-purple",
                                        children: "Registration Status"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 flex items-center",
                                        children: isRegistered ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__["CheckCircleIcon"], {
                                                    className: "h-5 w-5 text-blockbelle-pink mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-blockbelle-pink font-medium",
                                                    children: "Registered"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$XCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircleIcon$3e$__["XCircleIcon"], {
                                                    className: "h-5 w-5 text-amber-500 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-amber-600 font-medium",
                                                    children: "Not Registered"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            verificationData.selfVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-blockbelle-purple",
                                        children: "Verification Tier"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$Tier3Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            size: "md",
                                            showLabel: true
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-br from-blockbelle-pink/10 via-blockbelle-purple/10 to-blockbelle-indigo/10 shadow-lg rounded-xl p-6 border border-blockbelle-purple/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gradient-blockbelle mb-4",
                        children: "Identity Verification"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 mb-6",
                        children: [
                            "Verify your identity using Self Protocol to unlock ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-blockbelle-purple",
                                children: "Tier 3 status"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                lineNumber: 168,
                                columnNumber: 62
                            }, this),
                            " and build trust in the community."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    isLoadingVerification ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blockbelle-purple"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this) : verificationData.selfVerified ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-2 border-blockbelle-gold bg-gradient-to-br from-blockbelle-gold/10 to-blockbelle-gold/5 rounded-xl p-6 shadow-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mr-3 mt-0.5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$Tier3Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        size: "lg"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-blockbelle-purple",
                                                    children: "Tier 3 - Verified"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__["CheckCircleIcon"], {
                                                    className: "h-5 w-5 text-blockbelle-pink"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 text-sm text-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: "Verified At:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 21
                                                        }, this),
                                                        ' ',
                                                        verificationData.verifiedAt ? new Date(verificationData.verifiedAt).toLocaleString() : 'N/A'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 19
                                                }, this),
                                                verificationData.nationality && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: "Nationality:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 23
                                                        }, this),
                                                        " ",
                                                        verificationData.nationality
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 21
                                                }, this),
                                                verificationData.gender && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: "Gender:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 23
                                                        }, this),
                                                        " ",
                                                        verificationData.gender
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 21
                                                }, this),
                                                verificationData.minimumAge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: "Age Verification:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 23
                                                        }, this),
                                                        " 18+ confirmed"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: !showQRCode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowQRCode(true),
                                    className: "gradient-blockbelle hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105",
                                    children: "Verify with Self Protocol"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                    lineNumber: 216,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-xs text-gray-500",
                                    children: "You'll need the Self mobile app to complete verification. Download it from your app store."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                    lineNumber: 222,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                            lineNumber: 215,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-gray-200 rounded-lg p-6 bg-gray-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-start mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-900",
                                            children: "Scan QR Code"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                            lineNumber: 229,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowQRCode(false),
                                            className: "text-gray-400 hover:text-gray-600",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$XCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircleIcon$3e$__["XCircleIcon"], {
                                                className: "h-6 w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                                lineNumber: 234,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                            lineNumber: 230,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                    lineNumber: 228,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600 mb-4",
                                    children: "Open the Self app on your mobile device and scan this QR code to verify your identity."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                    lineNumber: 237,
                                    columnNumber: 17
                                }, this),
                                selfApp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center",
                                    children: isVerifying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blockbelle-purple mx-auto mb-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                                lineNumber: 244,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600",
                                                children: "Processing verification..."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                                lineNumber: 245,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                        lineNumber: 243,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$selfxyz$2f$qrcode$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SelfQRcodeWrapper"], {
                                        selfApp: selfApp,
                                        onSuccess: handleSuccessfulVerification,
                                        onError: handleVerificationError,
                                        size: 300,
                                        darkMode: false
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                        lineNumber: 248,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                    lineNumber: 241,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                            lineNumber: 227,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                        lineNumber: 213,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-br from-blockbelle-purple/10 to-blockbelle-indigo/10 border border-blockbelle-purple/30 rounded-xl p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-blockbelle-purple mb-2",
                        children: "About Self Protocol & Tier 3"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-700 mb-2",
                        children: "Self Protocol provides privacy-preserving identity verification using zero-knowledge proofs. Your personal information is never shared - only the verification result is confirmed on-chain."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-blockbelle-purple font-medium",
                        children: "✨ Tier 3 users display a crown badge next to their username, indicating verified identity status."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            showVerificationModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl transform transition-all",
                    children: verifiedGender === 'female' || verificationData.gender?.toLowerCase() === 'female' ? // Female Success Message
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-7xl mb-4 animate-bounce",
                                children: "👑"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                lineNumber: 283,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 bg-clip-text text-transparent mb-3",
                                children: "Congratulations, Queen!"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                lineNumber: 284,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-gray-700 mb-6 font-medium",
                                children: "You're officially verified"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                lineNumber: 287,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 mb-8",
                                children: "Welcome to BlockBelle - where queens in Web3 connect, collaborate, and thrive together."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                lineNumber: 290,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowVerificationModal(false),
                                className: "gradient-blockbelle hover:opacity-90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 w-full",
                                children: "Enter BlockBelle 👑"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                lineNumber: 293,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true) : // Male or Other Gender Redirect Message
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-7xl mb-4",
                                children: "💪"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                lineNumber: 303,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold text-gray-800 mb-3",
                                children: "Love the support, King!"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                lineNumber: 304,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-700 mb-6 font-medium",
                                children: "BlockBelle is a queens-only space"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                lineNumber: 307,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 mb-8",
                                children: "This platform is exclusively for women in Web3. Want to support? Share BlockBelle with the amazing women builders in your network!"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                lineNumber: 310,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setShowVerificationModal(false);
                                    setShowQRCode(false);
                                },
                                className: "bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 px-8 rounded-xl transition-all duration-200 w-full",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                                lineNumber: 313,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                    lineNumber: 279,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
                lineNumber: 278,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GoodDollarClaim
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/wagmi/dist/esm/hooks/useWalletClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$goodsdks$2f$identity$2d$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@goodsdks/identity-sdk/dist/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function GoodDollarClaim({ className = '' }) {
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePublicClient"])();
    const { data: walletClient } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWalletClient"])();
    const identitySDK = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$goodsdks$2f$identity$2d$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIdentitySDK"])('production');
    const [isEnrolled, setIsEnrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCheckingEnrollment, setIsCheckingEnrollment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fvLink, setFvLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showFVLink, setShowFVLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [claimableAmount, setClaimableAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('0');
    const [isCheckingEntitlement, setIsCheckingEntitlement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isClaiming, setIsClaiming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [claimSuccess, setClaimSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [nextClaimTime, setNextClaimTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Check enrollment status on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (address && identitySDK) {
            checkEnrollmentStatus();
        }
    }, [
        address,
        identitySDK
    ]);
    const checkEnrollmentStatus = async ()=>{
        if (!address || !identitySDK) return;
        setIsCheckingEnrollment(true);
        setErrorMessage('');
        try {
            const { isWhitelisted } = await identitySDK.getWhitelistedRoot(address);
            setIsEnrolled(isWhitelisted);
            if (isWhitelisted) {
                // If enrolled, check entitlement automatically
                await checkEntitlement();
            }
        } catch (error) {
            console.error('Error checking enrollment:', error);
            setErrorMessage('Failed to check enrollment status');
        } finally{
            setIsCheckingEnrollment(false);
        }
    };
    const handleEnroll = async ()=>{
        console.log('handleEnroll called. SDK ready:', !!identitySDK, 'Address:', address);
        if (!identitySDK) {
            setErrorMessage('GoodDollar SDK is initializing. Please try again in a moment.');
            return;
        }
        if (!address) {
            setErrorMessage('Wallet not connected.');
            return;
        }
        setErrorMessage('');
        setShowFVLink(true); // Show loading state
        try {
            // Generate Face Verification link
            const callbackUrl = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
            const link = await identitySDK.generateFVLink(false, callbackUrl, 42220); // Celo mainnet chainId
            setFvLink(link);
            // Automatically open the link in a new window
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        } catch (error) {
            console.error('Error generating FV link:', error);
            setErrorMessage('Failed to generate face verification link');
            setShowFVLink(false);
        }
    };
    const checkEntitlement = async ()=>{
        if (!address) return;
        setIsCheckingEntitlement(true);
        setErrorMessage('');
        try {
            // Note: The Identity SDK doesn't have claim methods directly
            // This is a placeholder for when the actual Claim SDK is integrated
            // For now, we'll show a mock amount
            setClaimableAmount('100'); // Mock value - replace with actual SDK call
            setNextClaimTime(new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleString());
        } catch (error) {
            console.error('Error checking entitlement:', error);
            setErrorMessage('Failed to check claim eligibility');
        } finally{
            setIsCheckingEntitlement(false);
        }
    };
    const handleClaim = async ()=>{
        if (!address || !walletClient) return;
        setIsClaiming(true);
        setErrorMessage('');
        setClaimSuccess(false);
        try {
            // Note: This is a placeholder for actual claim functionality
            // The actual Claim SDK integration will be needed here
            // For now, we'll simulate a successful claim
            await new Promise((resolve)=>setTimeout(resolve, 2000)); // Simulate transaction
            setClaimSuccess(true);
            setClaimableAmount('0');
            setNextClaimTime(new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleString());
            // Refresh enrollment status
            setTimeout(()=>{
                checkEnrollmentStatus();
            }, 3000);
        } catch (error) {
            console.error('Error claiming G$:', error);
            setErrorMessage('Failed to claim G$. Please try again.');
        } finally{
            setIsClaiming(false);
        }
    };
    if (!isConnected || !address) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-gradient-to-br from-blockbelle-pink/10 via-blockbelle-purple/10 to-blockbelle-indigo/10 shadow-lg rounded-xl p-6 border border-blockbelle-purple/20 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-gradient-blockbelle mb-4",
                children: "🌟 GoodDollar UBI Perk"
            }, void 0, false, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                lineNumber: 144,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600 mb-6",
                children: "Claim your daily Universal Basic Income (G$) on the Celo network. Complete face verification to get started!"
            }, void 0, false, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                lineNumber: 147,
                columnNumber: 13
            }, this),
            errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-4 bg-red-50 border border-red-200 rounded-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-red-600",
                    children: errorMessage
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                    lineNumber: 153,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                lineNumber: 152,
                columnNumber: 17
            }, this),
            claimSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-4 bg-green-50 border border-green-200 rounded-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-green-600 font-medium",
                    children: [
                        "✅ Successfully claimed G$! Next claim available at ",
                        nextClaimTime
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                    lineNumber: 159,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                lineNumber: 158,
                columnNumber: 17
            }, this),
            isCheckingEnrollment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blockbelle-purple"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                        lineNumber: 167,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-3 text-gray-600",
                        children: "Checking enrollment status..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                        lineNumber: 168,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                lineNumber: 166,
                columnNumber: 17
            }, this) : !isEnrolled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-2 border-dashed border-blockbelle-purple/30 rounded-xl p-6 bg-white/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-blockbelle-purple mb-2",
                                children: "Not Enrolled Yet"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                lineNumber: 173,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 mb-4",
                                children: "Complete face verification to enroll in GoodDollar UBI and start claiming your daily G$ tokens."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                lineNumber: 176,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleEnroll,
                                disabled: showFVLink || !identitySDK,
                                className: "gradient-blockbelle hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
                                children: !identitySDK ? 'Initializing SDK...' : showFVLink ? 'Opening verification...' : 'Start Face Verification →'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                lineNumber: 179,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                        lineNumber: 172,
                        columnNumber: 21
                    }, this),
                    showFVLink && fvLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-blockbelle-purple/30 rounded-xl p-6 bg-gradient-to-br from-blockbelle-gold/10 to-blockbelle-gold/5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-blockbelle-purple mb-2",
                                children: "Complete Face Verification"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                lineNumber: 190,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 mb-4",
                                children: "Click the link below to complete your face verification. This ensures one person = one account for fair UBI distribution."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                lineNumber: 193,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: fvLink,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-block gradient-blockbelle hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl",
                                children: "Verify Your Identity →"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                lineNumber: 196,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 mt-4",
                                children: "After verification, refresh this page to see your claim status."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                lineNumber: 204,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                        lineNumber: 189,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center pt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-500",
                            children: [
                                "Don't have a GoodDollar account?",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://wallet.gooddollar.org/open?inviteCode=UKRCQSNFQq&utm_campaign=celo-onlyurl",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-blockbelle-purple hover:text-blockbelle-pink font-bold underline ml-1",
                                    children: "Sign up"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                    lineNumber: 213,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                            lineNumber: 211,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                        lineNumber: 210,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                lineNumber: 171,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-2 border-blockbelle-gold bg-gradient-to-br from-blockbelle-gold/10 to-blockbelle-gold/5 rounded-xl p-6 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-blockbelle-purple",
                                        children: "✅ Enrolled in GoodDollar UBI"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                        lineNumber: 228,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/80 rounded-full px-3 py-1 shadow-sm border border-blockbelle-purple/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium text-blockbelle-purple",
                                            children: [
                                                "Balance: ",
                                                formatG$(balance),
                                                " G$"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                            lineNumber: 232,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                        lineNumber: 231,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                lineNumber: 227,
                                columnNumber: 25
                            }, this),
                            isLoadingEntitlement ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-spin rounded-full h-6 w-6 border-b-2 border-blockbelle-purple"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                        lineNumber: 240,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-3 text-sm text-gray-600",
                                        children: "Checking eligibility..."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                        lineNumber: 241,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                lineNumber: 239,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/70 rounded-lg p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 mb-1",
                                                children: "Claimable Amount"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                                lineNumber: 246,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-bold text-gradient-blockbelle",
                                                children: [
                                                    formatG$(entitlementAmount),
                                                    " G$"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                                lineNumber: 247,
                                                columnNumber: 37
                                            }, this),
                                            nextClaimTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 mt-2",
                                                children: [
                                                    "Next claim: ",
                                                    nextClaimTime
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                                lineNumber: 251,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                        lineNumber: 245,
                                        columnNumber: 33
                                    }, this),
                                    entitlementAmount && entitlementAmount > 0n ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleClaim,
                                        disabled: isClaiming,
                                        className: "gradient-blockbelle hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
                                        children: isClaiming ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 49
                                                }, this),
                                                "Claiming..."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                            lineNumber: 264,
                                            columnNumber: 45
                                        }, this) : 'Claim G$ Now'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                        lineNumber: 258,
                                        columnNumber: 37
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600",
                                                children: "No G$ available to claim right now. Check back later!"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                                lineNumber: 274,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    refetchEntitlement();
                                                    refetchBalance();
                                                },
                                                className: "mt-3 text-blockbelle-purple hover:text-blockbelle-pink font-medium text-sm underline",
                                                children: "Refresh Status"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                                lineNumber: 277,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                        lineNumber: 273,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                lineNumber: 244,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                        lineNumber: 226,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-blockbelle-purple/10 to-blockbelle-indigo/10 border border-blockbelle-purple/30 rounded-xl p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-blockbelle-purple mb-2",
                                children: "About GoodDollar UBI"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                lineNumber: 290,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-700",
                                children: "GoodDollar provides Universal Basic Income to anyone, anywhere. Your daily G$ claim helps create a more equitable financial system. Gas fees are minimal (~$0.01 on Celo)."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                                lineNumber: 291,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                        lineNumber: 289,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
                lineNumber: 225,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx",
        lineNumber: 143,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$Register$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Register.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$GroupChat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GroupChat.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$PrivateChat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/PrivateChat.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$MainChat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/MainChat.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$UserProfile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/UserProfile.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$RegistrationCheck$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/RegistrationCheck.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$SimpleOnboarding$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/SimpleOnboarding.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$Account$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/Account.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$GoodDollarClaim$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/GoodDollarClaim.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function HomePage() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('register');
    const [_hasRegistered, _setHasRegistered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [_showRegistrationCheck, _setShowRegistrationCheck] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleRegistrationSuccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        _setHasRegistered(true);
        setActiveTab('private');
    }, []);
    const handleStartChatting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        console.log('Start Chatting button clicked');
        _setShowRegistrationCheck(true);
        setActiveTab('check');
    }, []);
    const handleRegistrationCheckComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        _setShowRegistrationCheck(false);
        setActiveTab('main');
    }, []);
    const handleRegistrationRequired = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        _setShowRegistrationCheck(false);
        setActiveTab('register');
    }, []);
    const handleOnboardingComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        console.log('SimpleOnboarding onComplete called - DISABLED');
    // Disabled auto-navigation to prevent interference with user clicks
    // setActiveTab('main');
    }, []);
    const handleOnboardingRegister = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        console.log('SimpleOnboarding onRegister called');
        setActiveTab('register');
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white shadow",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center py-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-gray-900",
                                children: "BlockBelle"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$UserProfile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$SimpleOnboarding$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onComplete: handleOnboardingComplete,
                                        onRegister: handleOnboardingRegister
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 text-white overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/10"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/hero-image.jpg",
                        alt: "BlockBelle Hero",
                        fill: true,
                        className: "object-cover opacity-10",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold mb-2 bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent",
                                    children: "BlockBelle"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm mb-3 max-w-xl mx-auto leading-relaxed",
                                    children: "The elegant web3 chat dApp where women in blockchain connect, collaborate, and share their contributions through ENS-verified conversations."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center space-x-2 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleStartChatting,
                                            className: "bg-pink-500 hover:bg-pink-600 text-white font-bold py-1 px-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-xs",
                                            children: "Start Chatting"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "border border-white text-white hover:bg-white hover:text-purple-700 font-bold py-1 px-3 rounded-full transition-all duration-300 text-xs",
                                            children: "View Demo"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-bold mb-2",
                                            children: "Built for Web3 Women"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm mb-3",
                                            children: "Connect with verified ENS identities, create private groups, and build meaningful relationships in the web3 space."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid md:grid-cols-3 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-pink-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-1 shadow-lg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-base",
                                                                children: "👩‍💻"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                                                lineNumber: 110,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-semibold mb-1 text-xs",
                                                            children: "ENS Verified"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs",
                                                            children: "All users are verified through ENS domains, ensuring authentic conversations."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-purple-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-1 shadow-lg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-base",
                                                                children: "👥"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-semibold mb-1 text-xs",
                                                            children: "Group Chats"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs",
                                                            children: "Create topic-focused groups for DeFi, NFTs, DAOs, and more."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-1 shadow-lg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-base",
                                                                children: "💬"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-semibold mb-1 text-xs",
                                                            children: "Private Messages"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs",
                                                            children: "Secure one-on-one conversations with on-chain storage."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-pink-200 text-xs",
                                        children: "Built with 💜 for the Web3 Ladies community"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "bg-white shadow",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    console.log('Register tab clicked');
                                    setActiveTab('register');
                                },
                                className: `py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'register' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`,
                                children: "Register"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('group'),
                                className: `py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'group' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`,
                                children: "Group Chat"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('private'),
                                className: `py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'private' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`,
                                children: "Private Chat"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('main'),
                                className: `py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'main' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`,
                                children: "Chat App"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('account'),
                                className: `py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'account' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`,
                                children: "Account"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('gooddollar'),
                                className: `py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'gooddollar' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`,
                                children: "GoodDollar UBI"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto py-6 sm:px-6 lg:px-8",
                children: [
                    activeTab === 'register' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$Register$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onRegistrationSuccess: handleRegistrationSuccess
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this),
                    activeTab === 'group' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$GroupChat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                        lineNumber: 217,
                        columnNumber: 35
                    }, this),
                    activeTab === 'private' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$PrivateChat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                        lineNumber: 218,
                        columnNumber: 37
                    }, this),
                    activeTab === 'main' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$MainChat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                        lineNumber: 219,
                        columnNumber: 34
                    }, this),
                    activeTab === 'check' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$RegistrationCheck$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onRegistered: handleRegistrationCheckComplete,
                        onNotRegistered: handleRegistrationRequired
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                        lineNumber: 221,
                        columnNumber: 11
                    }, this),
                    activeTab === 'account' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$Account$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                        lineNumber: 226,
                        columnNumber: 37
                    }, this),
                    activeTab === 'gooddollar' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$src$2f$components$2f$GoodDollarClaim$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                        lineNumber: 227,
                        columnNumber: 40
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Folder/BlockBelle/next-frontend/src/components/HomePage.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1dbee241._.js.map