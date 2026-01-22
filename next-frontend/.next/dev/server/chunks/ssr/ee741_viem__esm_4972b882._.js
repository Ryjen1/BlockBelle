module.exports = [
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/chain/assertCurrentChain.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertCurrentChain",
    ()=>assertCurrentChain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/chain.js [app-ssr] (ecmascript)");
;
function assertCurrentChain({ chain, currentChainId }) {
    if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainNotFoundError"]();
    if (currentChainId !== chain.id) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainMismatchError"]({
        chain,
        currentChainId
    });
} //# sourceMappingURL=assertCurrentChain.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/errors/getTransactionError.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTransactionError",
    ()=>getTransactionError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getNodeError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/errors/getNodeError.js [app-ssr] (ecmascript)");
;
;
;
function getTransactionError(err, { docsPath, ...args }) {
    const cause = (()=>{
        const cause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getNodeError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeError"])(err, args);
        if (cause instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnknownNodeError"]) return err;
        return cause;
    })();
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionExecutionError"](cause, {
        docsPath,
        ...args
    });
} //# sourceMappingURL=getTransactionError.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/sendTransaction.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendTransaction",
    ()=>sendTransaction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/account.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$recoverAuthorizationAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/authorization/recoverAuthorizationAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$assertCurrentChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/chain/assertCurrentChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getTransactionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/errors/getTransactionError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/formatters/extract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/lru.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/public/getChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/sendRawTransaction.js [app-ssr] (ecmascript)");
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
;
;
const supportsWalletNamespace = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LruMap"](128);
async function sendTransaction(client, parameters) {
    const { account: account_ = client.account, chain = client.chain, accessList, authorizationList, blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, type, value, ...rest } = parameters;
    if (typeof account_ === 'undefined') throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/actions/wallet/sendTransaction'
    });
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : null;
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertRequest"])(parameters);
        const to = await (async ()=>{
            // If `to` exists on the parameters, use that.
            if (parameters.to) return parameters.to;
            // If `to` is null, we are sending a deployment transaction.
            if (parameters.to === null) return undefined;
            // If no `to` exists, and we are sending a EIP-7702 transaction, use the
            // address of the first authorization in the list.
            if (authorizationList && authorizationList.length > 0) return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$recoverAuthorizationAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recoverAuthorizationAddress"])({
                authorization: authorizationList[0]
            }).catch(()=>{
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`to` is required. Could not infer from `authorizationList`.');
            });
            // Otherwise, we are sending a deployment transaction.
            return undefined;
        })();
        if (account?.type === 'json-rpc' || account === null) {
            let chainId;
            if (chain !== null) {
                chainId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChainId"], 'getChainId')({});
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$assertCurrentChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertCurrentChain"])({
                    currentChainId: chainId,
                    chain
                });
            }
            const chainFormat = client.chain?.formatters?.transactionRequest?.format;
            const format = chainFormat || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransactionRequest"];
            const request = format({
                // Pick out extra data that might exist on the chain's transaction request type.
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extract"])(rest, {
                    format: chainFormat
                }),
                accessList,
                account,
                authorizationList,
                blobs,
                chainId,
                data,
                gas,
                gasPrice,
                maxFeePerBlobGas,
                maxFeePerGas,
                maxPriorityFeePerGas,
                nonce,
                to,
                type,
                value
            }, 'sendTransaction');
            const isWalletNamespaceSupported = supportsWalletNamespace.get(client.uid);
            const method = isWalletNamespaceSupported ? 'wallet_sendTransaction' : 'eth_sendTransaction';
            try {
                return await client.request({
                    method,
                    params: [
                        request
                    ]
                }, {
                    retryCount: 0
                });
            } catch (e) {
                if (isWalletNamespaceSupported === false) throw e;
                const error = e;
                // If the transport does not support the method or input, attempt to use the
                // `wallet_sendTransaction` method.
                if (error.name === 'InvalidInputRpcError' || error.name === 'InvalidParamsRpcError' || error.name === 'MethodNotFoundRpcError' || error.name === 'MethodNotSupportedRpcError') {
                    return await client.request({
                        method: 'wallet_sendTransaction',
                        params: [
                            request
                        ]
                    }, {
                        retryCount: 0
                    }).then((hash)=>{
                        supportsWalletNamespace.set(client.uid, true);
                        return hash;
                    }).catch((e)=>{
                        const walletNamespaceError = e;
                        if (walletNamespaceError.name === 'MethodNotFoundRpcError' || walletNamespaceError.name === 'MethodNotSupportedRpcError') {
                            supportsWalletNamespace.set(client.uid, false);
                            throw error;
                        }
                        throw walletNamespaceError;
                    });
                }
                throw error;
            }
        }
        if (account?.type === 'local') {
            // Prepare the request for signing (assign appropriate fees, etc.)
            const request = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareTransactionRequest"], 'prepareTransactionRequest')({
                account,
                accessList,
                authorizationList,
                blobs,
                chain,
                data,
                gas,
                gasPrice,
                maxFeePerBlobGas,
                maxFeePerGas,
                maxPriorityFeePerGas,
                nonce,
                nonceManager: account.nonceManager,
                parameters: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultParameters"],
                    'sidecars'
                ],
                type,
                value,
                ...rest,
                to
            });
            const serializer = chain?.serializers?.transaction;
            const serializedTransaction = await account.signTransaction(request, {
                serializer
            });
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendRawTransaction"], 'sendRawTransaction')({
                serializedTransaction
            });
        }
        if (account?.type === 'smart') throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountTypeNotSupportedError"]({
            metaMessages: [
                'Consider using the `sendUserOperation` Action instead.'
            ],
            docsPath: '/docs/actions/bundler/sendUserOperation',
            type: 'smart'
        });
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountTypeNotSupportedError"]({
            docsPath: '/docs/actions/wallet/sendTransaction',
            type: account?.type
        });
    } catch (err) {
        if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountTypeNotSupportedError"]) throw err;
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getTransactionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionError"])(err, {
            ...parameters,
            account,
            chain: parameters.chain || undefined
        });
    }
} //# sourceMappingURL=sendTransaction.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/writeContract.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "writeContract",
    ()=>writeContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/account.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/errors/getContractError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/sendTransaction.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
async function writeContract(client, parameters) {
    return writeContract.internal(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendTransaction"], 'sendTransaction', parameters);
}
(function(writeContract) {
    async function internal(client, actionFn, name, parameters) {
        const { abi, account: account_ = client.account, address, args, dataSuffix, functionName, ...request } = parameters;
        if (typeof account_ === 'undefined') throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
            docsPath: '/docs/contract/writeContract'
        });
        const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : null;
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
            abi,
            args,
            functionName
        });
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, actionFn, name)({
                data: `${data}${dataSuffix ? dataSuffix.replace('0x', '') : ''}`,
                to: address,
                account,
                ...request
            });
        } catch (error) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContractError"])(error, {
                abi,
                address,
                args,
                docsPath: '/docs/contract/writeContract',
                functionName,
                sender: account?.address
            });
        }
    }
    writeContract.internal = internal;
})(writeContract || (writeContract = {})); //# sourceMappingURL=writeContract.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/clients/createPublicClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPublicClient",
    ()=>createPublicClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/clients/createClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$public$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/clients/decorators/public.js [app-ssr] (ecmascript)");
;
;
function createPublicClient(parameters) {
    const { key = 'public', name = 'Public Client' } = parameters;
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])({
        ...parameters,
        key,
        name,
        type: 'publicClient'
    });
    return client.extend(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$public$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["publicActions"]);
} //# sourceMappingURL=createPublicClient.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/addChain.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addChain",
    ()=>addChain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
async function addChain(client, { chain }) {
    const { id, name, nativeCurrency, rpcUrls, blockExplorers } = chain;
    await client.request({
        method: 'wallet_addEthereumChain',
        params: [
            {
                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(id),
                chainName: name,
                nativeCurrency,
                rpcUrls: rpcUrls.default.http,
                blockExplorerUrls: blockExplorers ? Object.values(blockExplorers).map(({ url })=>url) : undefined
            }
        ]
    }, {
        dedupe: true,
        retryCount: 0
    });
} //# sourceMappingURL=addChain.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/deployContract.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deployContract",
    ()=>deployContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/abi/encodeDeployData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/sendTransaction.js [app-ssr] (ecmascript)");
;
;
function deployContract(walletClient, parameters) {
    const { abi, args, bytecode, ...request } = parameters;
    const calldata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeDeployData"])({
        abi,
        args,
        bytecode
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendTransaction"])(walletClient, {
        ...request,
        ...request.authorizationList ? {
            to: null
        } : {},
        data: calldata
    });
} //# sourceMappingURL=deployContract.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/getAddresses.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAddresses",
    ()=>getAddresses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/address/getAddress.js [app-ssr] (ecmascript)");
;
async function getAddresses(client) {
    if (client.account?.type === 'local') return [
        client.account.address
    ];
    const addresses = await client.request({
        method: 'eth_accounts'
    }, {
        dedupe: true
    });
    return addresses.map((address)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checksumAddress"])(address));
} //# sourceMappingURL=getAddresses.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/sendCalls.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fallbackMagicIdentifier",
    ()=>fallbackMagicIdentifier,
    "fallbackTransactionErrorMagicIdentifier",
    ()=>fallbackTransactionErrorMagicIdentifier,
    "sendCalls",
    ()=>sendCalls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/rpc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getTransactionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/errors/getTransactionError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/sendTransaction.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const fallbackMagicIdentifier = '0x5792579257925792579257925792579257925792579257925792579257925792';
const fallbackTransactionErrorMagicIdentifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(0, {
    size: 32
});
async function sendCalls(client, parameters) {
    const { account: account_ = client.account, capabilities, chain = client.chain, experimental_fallback, experimental_fallbackDelay = 32, forceAtomic = false, id, version = '2.0.0' } = parameters;
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : null;
    const calls = parameters.calls.map((call_)=>{
        const call = call_;
        const data = call.abi ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
            abi: call.abi,
            functionName: call.functionName,
            args: call.args
        }) : call.data;
        return {
            data: call.dataSuffix && data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])([
                data,
                call.dataSuffix
            ]) : data,
            to: call.to,
            value: call.value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(call.value) : undefined
        };
    });
    try {
        const response = await client.request({
            method: 'wallet_sendCalls',
            params: [
                {
                    atomicRequired: forceAtomic,
                    calls,
                    capabilities,
                    chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(chain.id),
                    from: account?.address,
                    id,
                    version
                }
            ]
        }, {
            retryCount: 0
        });
        if (typeof response === 'string') return {
            id: response
        };
        return response;
    } catch (err) {
        const error = err;
        // If the transport does not support EIP-5792, fall back to
        // `eth_sendTransaction`.
        if (experimental_fallback && (error.name === 'MethodNotFoundRpcError' || error.name === 'MethodNotSupportedRpcError' || error.name === 'UnknownRpcError' || error.details.toLowerCase().includes('does not exist / is not available') || error.details.toLowerCase().includes('missing or invalid. request()') || error.details.toLowerCase().includes('did not match any variant of untagged enum') || error.details.toLowerCase().includes('account upgraded to unsupported contract') || error.details.toLowerCase().includes('eip-7702 not supported') || error.details.toLowerCase().includes('unsupported wc_ method') || // magic.link
        error.details.toLowerCase().includes('feature toggled misconfigured') || // Trust Wallet
        error.details.toLowerCase().includes('jsonrpcengine: response has no error or result for request'))) {
            if (capabilities) {
                const hasNonOptionalCapability = Object.values(capabilities).some((capability)=>!capability.optional);
                if (hasNonOptionalCapability) {
                    const message = 'non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.';
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnsupportedNonOptionalCapabilityError"](new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"](message, {
                        details: message
                    }));
                }
            }
            if (forceAtomic && calls.length > 1) {
                const message = '`forceAtomic` is not supported on fallback to `eth_sendTransaction`.';
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AtomicityNotSupportedError"](new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"](message, {
                    details: message
                }));
            }
            const promises = [];
            for (const call of calls){
                const promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendTransaction"])(client, {
                    account,
                    chain,
                    data: call.data,
                    to: call.to,
                    value: call.value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(call.value) : undefined
                });
                promises.push(promise);
                // Note: some browser wallets require a small delay between transactions
                // to prevent duplicate JSON-RPC requests.
                if (experimental_fallbackDelay > 0) await new Promise((resolve)=>setTimeout(resolve, experimental_fallbackDelay));
            }
            const results = await Promise.allSettled(promises);
            if (results.every((r)=>r.status === 'rejected')) throw results[0].reason;
            const hashes = results.map((result)=>{
                if (result.status === 'fulfilled') return result.value;
                return fallbackTransactionErrorMagicIdentifier;
            });
            return {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])([
                    ...hashes,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(chain.id, {
                        size: 32
                    }),
                    fallbackMagicIdentifier
                ])
            };
        }
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getTransactionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionError"])(err, {
            ...parameters,
            account,
            chain: parameters.chain
        });
    }
} //# sourceMappingURL=sendCalls.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/getCallsStatus.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCallsStatus",
    ()=>getCallsStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/data/slice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/data/trim.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/formatters/transactionReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendCalls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/sendCalls.js [app-ssr] (ecmascript)");
;
;
;
;
;
async function getCallsStatus(client, parameters) {
    async function getStatus(id) {
        const isTransactions = id.endsWith(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendCalls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fallbackMagicIdentifier"].slice(2));
        if (isTransactions) {
            const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceHex"])(id, -64, -32));
            const hashes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceHex"])(id, 0, -64).slice(2).match(/.{1,64}/g);
            const receipts = await Promise.all(hashes.map((hash)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendCalls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fallbackTransactionErrorMagicIdentifier"].slice(2) !== hash ? client.request({
                    method: 'eth_getTransactionReceipt',
                    params: [
                        `0x${hash}`
                    ]
                }, {
                    dedupe: true
                }) : undefined));
            const status = (()=>{
                if (receipts.some((r)=>r === null)) return 100; // pending
                if (receipts.every((r)=>r?.status === '0x1')) return 200; // success
                if (receipts.every((r)=>r?.status === '0x0')) return 500; // complete failure
                return 600; // partial failure
            })();
            return {
                atomic: false,
                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(chainId),
                receipts: receipts.filter(Boolean),
                status,
                version: '2.0.0'
            };
        }
        return client.request({
            method: 'wallet_getCallsStatus',
            params: [
                id
            ]
        });
    }
    const { atomic = false, chainId, receipts, version = '2.0.0', ...response } = await getStatus(parameters.id);
    const [status, statusCode] = (()=>{
        const statusCode = response.status;
        if (statusCode >= 100 && statusCode < 200) return [
            'pending',
            statusCode
        ];
        if (statusCode >= 200 && statusCode < 300) return [
            'success',
            statusCode
        ];
        if (statusCode >= 300 && statusCode < 700) return [
            'failure',
            statusCode
        ];
        // @ts-expect-error: for backwards compatibility
        if (statusCode === 'CONFIRMED') return [
            'success',
            200
        ];
        // @ts-expect-error: for backwards compatibility
        if (statusCode === 'PENDING') return [
            'pending',
            100
        ];
        return [
            undefined,
            statusCode
        ];
    })();
    return {
        ...response,
        atomic,
        // @ts-expect-error: for backwards compatibility
        chainId: chainId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(chainId) : undefined,
        receipts: receipts?.map((receipt)=>({
                ...receipt,
                blockNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(receipt.blockNumber),
                gasUsed: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(receipt.gasUsed),
                status: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["receiptStatuses"][receipt.status]
            })) ?? [],
        statusCode,
        status,
        version
    };
} //# sourceMappingURL=getCallsStatus.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/getCapabilities.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCapabilities",
    ()=>getCapabilities
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
;
async function getCapabilities(client, parameters = {}) {
    const { account = client.account, chainId } = parameters;
    const account_ = account ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account) : undefined;
    const params = chainId ? [
        account_?.address,
        [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(chainId)
        ]
    ] : [
        account_?.address
    ];
    const capabilities_raw = await client.request({
        method: 'wallet_getCapabilities',
        params
    });
    const capabilities = {};
    for (const [chainId, capabilities_] of Object.entries(capabilities_raw)){
        capabilities[Number(chainId)] = {};
        for (let [key, value] of Object.entries(capabilities_)){
            if (key === 'addSubAccount') key = 'unstable_addSubAccount';
            capabilities[Number(chainId)][key] = value;
        }
    }
    return typeof chainId === 'number' ? capabilities[chainId] : capabilities;
} //# sourceMappingURL=getCapabilities.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/getPermissions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Gets the wallets current permissions.
 *
 * - Docs: https://viem.sh/docs/actions/wallet/getPermissions
 * - JSON-RPC Methods: [`wallet_getPermissions`](https://eips.ethereum.org/EIPS/eip-2255)
 *
 * @param client - Client to use
 * @returns The wallet permissions. {@link GetPermissionsReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getPermissions } from 'viem/wallet'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 * const permissions = await getPermissions(client)
 */ __turbopack_context__.s([
    "getPermissions",
    ()=>getPermissions
]);
async function getPermissions(client) {
    const permissions = await client.request({
        method: 'wallet_getPermissions'
    }, {
        dedupe: true
    });
    return permissions;
} //# sourceMappingURL=getPermissions.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/prepareAuthorization.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prepareAuthorization",
    ()=>prepareAuthorization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/account.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/address/isAddressEqual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/public/getChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionCount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/public/getTransactionCount.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
async function prepareAuthorization(client, parameters) {
    const { account: account_ = client.account, chainId, nonce } = parameters;
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/eip7702/prepareAuthorization'
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    const executor = (()=>{
        if (!parameters.executor) return undefined;
        if (parameters.executor === 'self') return parameters.executor;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(parameters.executor);
    })();
    const authorization = {
        address: parameters.contractAddress ?? parameters.address,
        chainId,
        nonce
    };
    if (typeof authorization.chainId === 'undefined') authorization.chainId = client.chain?.id ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChainId"], 'getChainId')({});
    if (typeof authorization.nonce === 'undefined') {
        authorization.nonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionCount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionCount"], 'getTransactionCount')({
            address: account.address,
            blockTag: 'pending'
        });
        if (executor === 'self' || executor?.address && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddressEqual"])(executor.address, account.address)) authorization.nonce += 1;
    }
    return authorization;
} //# sourceMappingURL=prepareAuthorization.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/requestAddresses.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "requestAddresses",
    ()=>requestAddresses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/address/getAddress.js [app-ssr] (ecmascript)");
;
async function requestAddresses(client) {
    const addresses = await client.request({
        method: 'eth_requestAccounts'
    }, {
        dedupe: true,
        retryCount: 0
    });
    return addresses.map((address)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(address));
} //# sourceMappingURL=requestAddresses.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/requestPermissions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Requests permissions for a wallet.
 *
 * - Docs: https://viem.sh/docs/actions/wallet/requestPermissions
 * - JSON-RPC Methods: [`wallet_requestPermissions`](https://eips.ethereum.org/EIPS/eip-2255)
 *
 * @param client - Client to use
 * @param parameters - {@link RequestPermissionsParameters}
 * @returns The wallet permissions. {@link RequestPermissionsReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { requestPermissions } from 'viem/wallet'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 * const permissions = await requestPermissions(client, {
 *   eth_accounts: {}
 * })
 */ __turbopack_context__.s([
    "requestPermissions",
    ()=>requestPermissions
]);
async function requestPermissions(client, permissions) {
    return client.request({
        method: 'wallet_requestPermissions',
        params: [
            permissions
        ]
    }, {
        retryCount: 0
    });
} //# sourceMappingURL=requestPermissions.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/calls.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BundleFailedError",
    ()=>BundleFailedError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
;
class BundleFailedError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(result){
        super(`Call bundle failed with status: ${result.statusCode}`, {
            name: 'BundleFailedError'
        });
        Object.defineProperty(this, "result", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.result = result;
    }
} //# sourceMappingURL=calls.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/waitForCallsStatus.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WaitForCallsStatusTimeoutError",
    ()=>WaitForCallsStatusTimeoutError,
    "waitForCallsStatus",
    ()=>waitForCallsStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$calls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/calls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/observe.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/poll.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withResolvers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/promise/withResolvers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/promise/withRetry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/stringify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getCallsStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/getCallsStatus.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
async function waitForCallsStatus(client, parameters) {
    const { id, pollingInterval = client.pollingInterval, status = ({ statusCode })=>statusCode === 200 || statusCode >= 300, retryCount = 4, retryDelay = ({ count })=>~~(1 << count) * 200, timeout = 60_000, throwOnFailure = false } = parameters;
    const observerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])([
        'waitForCallsStatus',
        client.uid,
        id
    ]);
    const { promise, resolve, reject } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withResolvers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withResolvers"])();
    let timer;
    const unobserve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observe"])(observerId, {
        resolve,
        reject
    }, (emit)=>{
        const unpoll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poll"])(async ()=>{
            const done = (fn)=>{
                clearTimeout(timer);
                unpoll();
                fn();
                unobserve();
            };
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withRetry"])(async ()=>{
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getCallsStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCallsStatus"], 'getCallsStatus')({
                        id
                    });
                    if (throwOnFailure && result.status === 'failure') throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$calls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BundleFailedError"](result);
                    return result;
                }, {
                    retryCount,
                    delay: retryDelay
                });
                if (!status(result)) return;
                done(()=>emit.resolve(result));
            } catch (error) {
                done(()=>emit.reject(error));
            }
        }, {
            interval: pollingInterval,
            emitOnBegin: true
        });
        return unpoll;
    });
    timer = timeout ? setTimeout(()=>{
        unobserve();
        clearTimeout(timer);
        reject(new WaitForCallsStatusTimeoutError({
            id
        }));
    }, timeout) : undefined;
    return await promise;
}
class WaitForCallsStatusTimeoutError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ id }){
        super(`Timed out while waiting for call bundle with id "${id}" to be confirmed.`, {
            name: 'WaitForCallsStatusTimeoutError'
        });
    }
} //# sourceMappingURL=waitForCallsStatus.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/sendCallsSync.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendCallsSync",
    ()=>sendCallsSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendCalls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/sendCalls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$waitForCallsStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/waitForCallsStatus.js [app-ssr] (ecmascript)");
;
;
async function sendCallsSync(client, parameters) {
    const { chain = client.chain } = parameters;
    const timeout = parameters.timeout ?? Math.max((chain?.blockTime ?? 0) * 3, 5_000);
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendCalls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendCalls"])(client, parameters);
    const status = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$waitForCallsStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitForCallsStatus"])(client, {
        ...parameters,
        id: result.id,
        timeout
    });
    return status;
} //# sourceMappingURL=sendCallsSync.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/sendTransactionSync.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendTransactionSync",
    ()=>sendTransactionSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/account.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$recoverAuthorizationAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/authorization/recoverAuthorizationAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$assertCurrentChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/chain/assertCurrentChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getTransactionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/errors/getTransactionError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/formatters/extract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/lru.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/public/getChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$waitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/public/waitForTransactionReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransactionSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/sendRawTransactionSync.js [app-ssr] (ecmascript)");
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
;
;
;
;
const supportsWalletNamespace = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LruMap"](128);
async function sendTransactionSync(client, parameters) {
    const { account: account_ = client.account, chain = client.chain, accessList, authorizationList, blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, pollingInterval, throwOnReceiptRevert, type, value, ...rest } = parameters;
    const timeout = parameters.timeout ?? Math.max((chain?.blockTime ?? 0) * 3, 5_000);
    if (typeof account_ === 'undefined') throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/actions/wallet/sendTransactionSync'
    });
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : null;
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertRequest"])(parameters);
        const to = await (async ()=>{
            // If `to` exists on the parameters, use that.
            if (parameters.to) return parameters.to;
            // If `to` is null, we are sending a deployment transaction.
            if (parameters.to === null) return undefined;
            // If no `to` exists, and we are sending a EIP-7702 transaction, use the
            // address of the first authorization in the list.
            if (authorizationList && authorizationList.length > 0) return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$recoverAuthorizationAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recoverAuthorizationAddress"])({
                authorization: authorizationList[0]
            }).catch(()=>{
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`to` is required. Could not infer from `authorizationList`.');
            });
            // Otherwise, we are sending a deployment transaction.
            return undefined;
        })();
        if (account?.type === 'json-rpc' || account === null) {
            let chainId;
            if (chain !== null) {
                chainId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChainId"], 'getChainId')({});
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$assertCurrentChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertCurrentChain"])({
                    currentChainId: chainId,
                    chain
                });
            }
            const chainFormat = client.chain?.formatters?.transactionRequest?.format;
            const format = chainFormat || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransactionRequest"];
            const request = format({
                // Pick out extra data that might exist on the chain's transaction request type.
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extract"])(rest, {
                    format: chainFormat
                }),
                accessList,
                account,
                authorizationList,
                blobs,
                chainId,
                data,
                gas,
                gasPrice,
                maxFeePerBlobGas,
                maxFeePerGas,
                maxPriorityFeePerGas,
                nonce,
                to,
                type,
                value
            }, 'sendTransaction');
            const isWalletNamespaceSupported = supportsWalletNamespace.get(client.uid);
            const method = isWalletNamespaceSupported ? 'wallet_sendTransaction' : 'eth_sendTransaction';
            const hash = await (async ()=>{
                try {
                    return await client.request({
                        method,
                        params: [
                            request
                        ]
                    }, {
                        retryCount: 0
                    });
                } catch (e) {
                    if (isWalletNamespaceSupported === false) throw e;
                    const error = e;
                    // If the transport does not support the method or input, attempt to use the
                    // `wallet_sendTransaction` method.
                    if (error.name === 'InvalidInputRpcError' || error.name === 'InvalidParamsRpcError' || error.name === 'MethodNotFoundRpcError' || error.name === 'MethodNotSupportedRpcError') {
                        return await client.request({
                            method: 'wallet_sendTransaction',
                            params: [
                                request
                            ]
                        }, {
                            retryCount: 0
                        }).then((hash)=>{
                            supportsWalletNamespace.set(client.uid, true);
                            return hash;
                        }).catch((e)=>{
                            const walletNamespaceError = e;
                            if (walletNamespaceError.name === 'MethodNotFoundRpcError' || walletNamespaceError.name === 'MethodNotSupportedRpcError') {
                                supportsWalletNamespace.set(client.uid, false);
                                throw error;
                            }
                            throw walletNamespaceError;
                        });
                    }
                    throw error;
                }
            })();
            const receipt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$waitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitForTransactionReceipt"], 'waitForTransactionReceipt')({
                checkReplacement: false,
                hash,
                pollingInterval,
                timeout
            });
            if (throwOnReceiptRevert && receipt.status === 'reverted') throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionReceiptRevertedError"]({
                receipt
            });
            return receipt;
        }
        if (account?.type === 'local') {
            // Prepare the request for signing (assign appropriate fees, etc.)
            const request = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareTransactionRequest"], 'prepareTransactionRequest')({
                account,
                accessList,
                authorizationList,
                blobs,
                chain,
                data,
                gas,
                gasPrice,
                maxFeePerBlobGas,
                maxFeePerGas,
                maxPriorityFeePerGas,
                nonce,
                nonceManager: account.nonceManager,
                parameters: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultParameters"],
                    'sidecars'
                ],
                type,
                value,
                ...rest,
                to
            });
            const serializer = chain?.serializers?.transaction;
            const serializedTransaction = await account.signTransaction(request, {
                serializer
            });
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransactionSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendRawTransactionSync"], 'sendRawTransactionSync')({
                serializedTransaction,
                throwOnReceiptRevert
            });
        }
        if (account?.type === 'smart') throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountTypeNotSupportedError"]({
            metaMessages: [
                'Consider using the `sendUserOperation` Action instead.'
            ],
            docsPath: '/docs/actions/bundler/sendUserOperation',
            type: 'smart'
        });
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountTypeNotSupportedError"]({
            docsPath: '/docs/actions/wallet/sendTransactionSync',
            type: account?.type
        });
    } catch (err) {
        if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountTypeNotSupportedError"]) throw err;
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getTransactionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionError"])(err, {
            ...parameters,
            account,
            chain: parameters.chain || undefined
        });
    }
} //# sourceMappingURL=sendTransactionSync.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/showCallsStatus.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Requests for the wallet to show information about a call batch
 * that was sent via `sendCalls`.
 *
 * - Docs: https://viem.sh/docs/actions/wallet/showCallsStatus
 * - JSON-RPC Methods: [`wallet_showCallsStatus`](https://eips.ethereum.org/EIPS/eip-5792)
 *
 * @param client - Client to use
 * @returns Status of the calls. {@link ShowCallsStatusReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { showCallsStatus } from 'viem/actions'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 * await showCallsStatus(client, { id: '0xdeadbeef' })
 */ __turbopack_context__.s([
    "showCallsStatus",
    ()=>showCallsStatus
]);
async function showCallsStatus(client, parameters) {
    const { id } = parameters;
    await client.request({
        method: 'wallet_showCallsStatus',
        params: [
            id
        ]
    });
    return;
} //# sourceMappingURL=showCallsStatus.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/signAuthorization.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signAuthorization",
    ()=>signAuthorization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/account.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareAuthorization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/prepareAuthorization.js [app-ssr] (ecmascript)");
;
;
;
async function signAuthorization(client, parameters) {
    const { account: account_ = client.account } = parameters;
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/eip7702/signAuthorization'
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    if (!account.signAuthorization) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountTypeNotSupportedError"]({
        docsPath: '/docs/eip7702/signAuthorization',
        metaMessages: [
            'The `signAuthorization` Action does not support JSON-RPC Accounts.'
        ],
        type: account.type
    });
    const authorization = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareAuthorization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareAuthorization"])(client, parameters);
    return account.signAuthorization(authorization);
} //# sourceMappingURL=signAuthorization.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/signTransaction.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signTransaction",
    ()=>signTransaction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/account.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$assertCurrentChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/chain/assertCurrentChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/public/getChainId.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
async function signTransaction(client, parameters) {
    const { account: account_ = client.account, chain = client.chain, ...transaction } = parameters;
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/actions/wallet/signTransaction'
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertRequest"])({
        account,
        ...parameters
    });
    const chainId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChainId"], 'getChainId')({});
    if (chain !== null) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$assertCurrentChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertCurrentChain"])({
        currentChainId: chainId,
        chain
    });
    const formatters = chain?.formatters || client.chain?.formatters;
    const format = formatters?.transactionRequest?.format || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransactionRequest"];
    if (account.signTransaction) return account.signTransaction({
        ...transaction,
        chainId
    }, {
        serializer: client.chain?.serializers?.transaction
    });
    return await client.request({
        method: 'eth_signTransaction',
        params: [
            {
                ...format({
                    ...transaction,
                    account
                }, 'signTransaction'),
                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(chainId),
                from: account.address
            }
        ]
    }, {
        retryCount: 0
    });
} //# sourceMappingURL=signTransaction.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/signTypedData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signTypedData",
    ()=>signTypedData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/account.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/typedData.js [app-ssr] (ecmascript)");
;
;
;
async function signTypedData(client, parameters) {
    const { account: account_ = client.account, domain, message, primaryType } = parameters;
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/actions/wallet/signTypedData'
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    const types = {
        EIP712Domain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTypesForEIP712Domain"])({
            domain
        }),
        ...parameters.types
    };
    // Need to do a runtime validation check on addresses, byte ranges, integer ranges, etc
    // as we can't statically check this with TypeScript.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateTypedData"])({
        domain,
        message,
        primaryType,
        types
    });
    if (account.signTypedData) return account.signTypedData({
        domain,
        message,
        primaryType,
        types
    });
    const typedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeTypedData"])({
        domain,
        message,
        primaryType,
        types
    });
    return client.request({
        method: 'eth_signTypedData_v4',
        params: [
            account.address,
            typedData
        ]
    }, {
        retryCount: 0
    });
} //# sourceMappingURL=signTypedData.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/switchChain.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "switchChain",
    ()=>switchChain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
async function switchChain(client, { id }) {
    await client.request({
        method: 'wallet_switchEthereumChain',
        params: [
            {
                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(id)
            }
        ]
    }, {
        retryCount: 0
    });
} //# sourceMappingURL=switchChain.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/watchAsset.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Adds an EVM chain to the wallet.
 *
 * - Docs: https://viem.sh/docs/actions/wallet/watchAsset
 * - JSON-RPC Methods: [`eth_switchEthereumChain`](https://eips.ethereum.org/EIPS/eip-747)
 *
 * @param client - Client to use
 * @param parameters - {@link WatchAssetParameters}
 * @returns Boolean indicating if the token was successfully added. {@link WatchAssetReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { watchAsset } from 'viem/wallet'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 * const success = await watchAsset(client, {
 *   type: 'ERC20',
 *   options: {
 *     address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
 *     decimals: 18,
 *     symbol: 'WETH',
 *   },
 * })
 */ __turbopack_context__.s([
    "watchAsset",
    ()=>watchAsset
]);
async function watchAsset(client, params) {
    const added = await client.request({
        method: 'wallet_watchAsset',
        params
    }, {
        retryCount: 0
    });
    return added;
} //# sourceMappingURL=watchAsset.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/writeContractSync.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "writeContractSync",
    ()=>writeContractSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransactionSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/sendTransactionSync.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/writeContract.js [app-ssr] (ecmascript)");
;
;
async function writeContractSync(client, parameters) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeContract"].internal(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransactionSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendTransactionSync"], 'sendTransactionSync', parameters);
} //# sourceMappingURL=writeContractSync.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/clients/decorators/wallet.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "walletActions",
    ()=>walletActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/public/getChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$addChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/addChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$deployContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/deployContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getAddresses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/getAddresses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getCallsStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/getCallsStatus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getCapabilities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/getCapabilities.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getPermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/getPermissions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareAuthorization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/prepareAuthorization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$requestAddresses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/requestAddresses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$requestPermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/requestPermissions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendCalls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/sendCalls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendCallsSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/sendCallsSync.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/sendRawTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransactionSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/sendRawTransactionSync.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/sendTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransactionSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/sendTransactionSync.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$showCallsStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/showCallsStatus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signAuthorization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/signAuthorization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/signMessage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/signTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/signTypedData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$switchChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/switchChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$waitForCallsStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/waitForCallsStatus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$watchAsset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/watchAsset.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/writeContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContractSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/writeContractSync.js [app-ssr] (ecmascript)");
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
;
;
;
function walletActions(client) {
    return {
        addChain: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$addChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addChain"])(client, args),
        deployContract: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$deployContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deployContract"])(client, args),
        getAddresses: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getAddresses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddresses"])(client),
        getCallsStatus: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getCallsStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCallsStatus"])(client, args),
        getCapabilities: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getCapabilities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCapabilities"])(client, args),
        getChainId: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChainId"])(client),
        getPermissions: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getPermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPermissions"])(client),
        prepareAuthorization: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareAuthorization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareAuthorization"])(client, args),
        prepareTransactionRequest: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareTransactionRequest"])(client, args),
        requestAddresses: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$requestAddresses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["requestAddresses"])(client),
        requestPermissions: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$requestPermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["requestPermissions"])(client, args),
        sendCalls: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendCalls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendCalls"])(client, args),
        sendCallsSync: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendCallsSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendCallsSync"])(client, args),
        sendRawTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendRawTransaction"])(client, args),
        sendRawTransactionSync: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransactionSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendRawTransactionSync"])(client, args),
        sendTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendTransaction"])(client, args),
        sendTransactionSync: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransactionSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendTransactionSync"])(client, args),
        showCallsStatus: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$showCallsStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["showCallsStatus"])(client, args),
        signAuthorization: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signAuthorization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signAuthorization"])(client, args),
        signMessage: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signMessage"])(client, args),
        signTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signTransaction"])(client, args),
        signTypedData: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signTypedData"])(client, args),
        switchChain: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$switchChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["switchChain"])(client, args),
        waitForCallsStatus: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$waitForCallsStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitForCallsStatus"])(client, args),
        watchAsset: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$watchAsset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchAsset"])(client, args),
        writeContract: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeContract"])(client, args),
        writeContractSync: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContractSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeContractSync"])(client, args)
    };
} //# sourceMappingURL=wallet.js.map
}),
];

//# sourceMappingURL=ee741_viem__esm_4972b882._.js.map