(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/reconnect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reconnect",
    ()=>reconnect
]);
let isReconnecting = false;
async function reconnect(config, parameters = {}) {
    // If already reconnecting, do nothing
    if (isReconnecting) return [];
    isReconnecting = true;
    config.setState((x)=>({
            ...x,
            status: x.current ? 'reconnecting' : 'connecting'
        }));
    const connectors = [];
    if (parameters.connectors?.length) {
        for (const connector_ of parameters.connectors){
            let connector;
            // "Register" connector if not already created
            if (typeof connector_ === 'function') connector = config._internal.connectors.setup(connector_);
            else connector = connector_;
            connectors.push(connector);
        }
    } else connectors.push(...config.connectors);
    // Try recently-used connectors first
    let recentConnectorId;
    try {
        recentConnectorId = await config.storage?.getItem('recentConnectorId');
    } catch  {}
    const scores = {};
    for (const [, connection] of config.state.connections){
        scores[connection.connector.id] = 1;
    }
    if (recentConnectorId) scores[recentConnectorId] = 0;
    const sorted = Object.keys(scores).length > 0 ? [
        ...connectors
    ].sort((a, b)=>(scores[a.id] ?? 10) - (scores[b.id] ?? 10)) : connectors;
    // Iterate through each connector and try to connect
    let connected = false;
    const connections = [];
    const providers = [];
    for (const connector of sorted){
        const provider = await connector.getProvider().catch(()=>undefined);
        if (!provider) continue;
        // If we already have an instance of this connector's provider,
        // then we have already checked it (ie. injected connectors can
        // share the same `window.ethereum` instance, so we don't want to
        // connect to it again).
        if (providers.some((x)=>x === provider)) continue;
        const isAuthorized = await connector.isAuthorized();
        if (!isAuthorized) continue;
        const data = await connector.connect({
            isReconnecting: true
        }).catch(()=>null);
        if (!data) continue;
        connector.emitter.off('connect', config._internal.events.connect);
        connector.emitter.on('change', config._internal.events.change);
        connector.emitter.on('disconnect', config._internal.events.disconnect);
        config.setState((x)=>{
            const connections = new Map(connected ? x.connections : new Map()).set(connector.uid, {
                accounts: data.accounts,
                chainId: data.chainId,
                connector
            });
            return {
                ...x,
                current: connected ? x.current : connector.uid,
                connections
            };
        });
        connections.push({
            accounts: data.accounts,
            chainId: data.chainId,
            connector
        });
        providers.push(provider);
        connected = true;
    }
    // Prevent overwriting connected status from race condition
    if (config.state.status === 'reconnecting' || config.state.status === 'connecting') {
        // If connecting didn't succeed, set to disconnected
        if (!connected) config.setState((x)=>({
                ...x,
                connections: new Map(),
                current: null,
                status: 'disconnected'
            }));
        else config.setState((x)=>({
                ...x,
                status: 'connected'
            }));
    }
    isReconnecting = false;
    return connections;
} //# sourceMappingURL=reconnect.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/hydrate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hydrate",
    ()=>hydrate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$reconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/reconnect.js [app-client] (ecmascript)");
;
function hydrate(config, parameters) {
    const { initialState, reconnectOnMount } = parameters;
    if (initialState && !config._internal.store.persist.hasHydrated()) config.setState({
        ...initialState,
        chainId: config.chains.some((x)=>x.id === initialState.chainId) ? initialState.chainId : config.chains[0].id,
        connections: reconnectOnMount ? initialState.connections : new Map(),
        status: reconnectOnMount ? 'reconnecting' : 'disconnected'
    });
    return {
        async onMount () {
            if (config._internal.ssr) {
                await config._internal.store.persist.rehydrate();
                if (config._internal.mipd) {
                    config._internal.connectors.setState((connectors)=>{
                        const rdnsSet = new Set();
                        for (const connector of connectors ?? []){
                            if (connector.rdns) {
                                const rdnsValues = Array.isArray(connector.rdns) ? connector.rdns : [
                                    connector.rdns
                                ];
                                for (const rdns of rdnsValues){
                                    rdnsSet.add(rdns);
                                }
                            }
                        }
                        const mipdConnectors = [];
                        const providers = config._internal.mipd?.getProviders() ?? [];
                        for (const provider of providers){
                            if (rdnsSet.has(provider.info.rdns)) continue;
                            const connectorFn = config._internal.connectors.providerDetailToConnector(provider);
                            const connector = config._internal.connectors.setup(connectorFn);
                            mipdConnectors.push(connector);
                        }
                        return [
                            ...connectors,
                            ...mipdConnectors
                        ];
                    });
                }
            }
            if (reconnectOnMount) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$reconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reconnect"])(config);
            else if (config.storage) // Reset connections that may have been hydrated from storage.
            config.setState((x)=>({
                    ...x,
                    connections: new Map()
                }));
        }
    };
} //# sourceMappingURL=hydrate.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/getAccount.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** https://wagmi.sh/core/api/actions/getAccount */ __turbopack_context__.s([
    "getAccount",
    ()=>getAccount
]);
function getAccount(config) {
    const uid = config.state.current;
    const connection = config.state.connections.get(uid);
    const addresses = connection?.accounts;
    const address = addresses?.[0];
    const chain = config.chains.find((chain)=>chain.id === connection?.chainId);
    const status = config.state.status;
    switch(status){
        case 'connected':
            return {
                address: address,
                addresses: addresses,
                chain,
                chainId: connection?.chainId,
                connector: connection?.connector,
                isConnected: true,
                isConnecting: false,
                isDisconnected: false,
                isReconnecting: false,
                status
            };
        case 'reconnecting':
            return {
                address,
                addresses,
                chain,
                chainId: connection?.chainId,
                connector: connection?.connector,
                isConnected: !!address,
                isConnecting: false,
                isDisconnected: false,
                isReconnecting: true,
                status
            };
        case 'connecting':
            return {
                address,
                addresses,
                chain,
                chainId: connection?.chainId,
                connector: connection?.connector,
                isConnected: false,
                isConnecting: true,
                isDisconnected: false,
                isReconnecting: false,
                status
            };
        case 'disconnected':
            return {
                address: undefined,
                addresses: undefined,
                chain: undefined,
                chainId: undefined,
                connector: undefined,
                isConnected: false,
                isConnecting: false,
                isDisconnected: true,
                isReconnecting: false,
                status
            };
    }
} //# sourceMappingURL=getAccount.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Forked from https://github.com/epoberezkin/fast-deep-equal */ __turbopack_context__.s([
    "deepEqual",
    ()=>deepEqual
]);
function deepEqual(a, b) {
    if (a === b) return true;
    if (a && b && typeof a === 'object' && typeof b === 'object') {
        if (a.constructor !== b.constructor) return false;
        let length;
        let i;
        if (Array.isArray(a) && Array.isArray(b)) {
            length = a.length;
            if (length !== b.length) return false;
            for(i = length; i-- !== 0;)if (!deepEqual(a[i], b[i])) return false;
            return true;
        }
        if (typeof a.valueOf === 'function' && a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (typeof a.toString === 'function' && a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        const keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.hasOwn(b, keys[i])) return false;
        for(i = length; i-- !== 0;){
            const key = keys[i];
            if (key && !deepEqual(a[key], b[key])) return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    // biome-ignore lint/suspicious/noSelfCompare: using
    return a !== a && b !== b;
} //# sourceMappingURL=deepEqual.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/watchAccount.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "watchAccount",
    ()=>watchAccount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/getAccount.js [app-client] (ecmascript)");
;
;
function watchAccount(config, parameters) {
    const { onChange } = parameters;
    return config.subscribe(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAccount"])(config), onChange, {
        equalityFn (a, b) {
            const { connector: aConnector, ...aRest } = a;
            const { connector: bConnector, ...bRest } = b;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(aRest, bRest) && // check connector separately
            aConnector?.id === bConnector?.id && aConnector?.uid === bConnector?.uid;
        }
    });
} //# sourceMappingURL=watchAccount.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/version.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '2.22.1'; //# sourceMappingURL=version.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/getVersion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVersion",
    ()=>getVersion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/version.js [app-client] (ecmascript)");
;
const getVersion = ()=>`@wagmi/core@${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]}`; //# sourceMappingURL=getVersion.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/errors/base.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseError",
    ()=>BaseError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getVersion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/getVersion.js [app-client] (ecmascript)");
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BaseError_instances, _BaseError_walk;
;
class BaseError extends Error {
    get docsBaseUrl() {
        return 'https://wagmi.sh/core';
    }
    get version() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getVersion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVersion"])();
    }
    constructor(shortMessage, options = {}){
        super();
        _BaseError_instances.add(this);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WagmiCoreError'
        });
        const details = options.cause instanceof BaseError ? options.cause.details : options.cause?.message ? options.cause.message : options.details;
        const docsPath = options.cause instanceof BaseError ? options.cause.docsPath || options.docsPath : options.docsPath;
        this.message = [
            shortMessage || 'An error occurred.',
            '',
            ...options.metaMessages ? [
                ...options.metaMessages,
                ''
            ] : [],
            ...docsPath ? [
                `Docs: ${this.docsBaseUrl}${docsPath}.html${options.docsSlug ? `#${options.docsSlug}` : ''}`
            ] : [],
            ...details ? [
                `Details: ${details}`
            ] : [],
            `Version: ${this.version}`
        ].join('\n');
        if (options.cause) this.cause = options.cause;
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = options.metaMessages;
        this.shortMessage = shortMessage;
    }
    walk(fn) {
        return __classPrivateFieldGet(this, _BaseError_instances, "m", _BaseError_walk).call(this, this, fn);
    }
}
_BaseError_instances = new WeakSet(), _BaseError_walk = function _BaseError_walk(err, fn) {
    if (fn?.(err)) return err;
    if (err.cause) return __classPrivateFieldGet(this, _BaseError_instances, "m", _BaseError_walk).call(this, err.cause, fn);
    return err;
}; //# sourceMappingURL=base.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Retrieves and returns an action from the client (if exists), and falls
 * back to the tree-shakable action.
 *
 * Useful for extracting overridden actions from a client (ie. if a consumer
 * wants to override the `sendTransaction` implementation).
 */ __turbopack_context__.s([
    "getAction",
    ()=>getAction
]);
function getAction(client, actionFn, // Some minifiers drop `Function.prototype.name`, or replace it with short letters,
// meaning that `actionFn.name` will not always work. For that case, the consumer
// needs to pass the name explicitly.
name) {
    const action_implicit = client[actionFn.name];
    if (typeof action_implicit === 'function') return action_implicit;
    const action_explicit = client[name];
    if (typeof action_explicit === 'function') return action_explicit;
    return (params)=>actionFn(client, params);
} //# sourceMappingURL=getAction.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/getUnit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUnit",
    ()=>getUnit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$unit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/constants/unit.js [app-client] (ecmascript)");
;
function getUnit(unit) {
    if (typeof unit === 'number') return unit;
    if (unit === 'wei') return 0;
    return Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$unit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weiUnits"][unit]);
} //# sourceMappingURL=getUnit.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/multicall.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "multicall",
    ()=>multicall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$multicall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/public/multicall.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
;
;
async function multicall(config, parameters) {
    const { allowFailure = true, chainId, contracts, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$multicall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multicall"], 'multicall');
    return action({
        allowFailure,
        contracts,
        ...rest
    });
} //# sourceMappingURL=multicall.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/readContract.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readContract",
    ()=>readContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
;
;
function readContract(config, parameters) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract');
    return action(rest);
} //# sourceMappingURL=readContract.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/readContracts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readContracts",
    ()=>readContracts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$multicall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/multicall.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/readContract.js [app-client] (ecmascript)");
;
;
;
async function readContracts(config, parameters) {
    const { allowFailure = true, blockNumber, blockTag, ...rest } = parameters;
    const contracts = parameters.contracts;
    try {
        const contractsByChainId = {};
        for (const [index, contract] of contracts.entries()){
            const chainId = contract.chainId ?? config.state.chainId;
            if (!contractsByChainId[chainId]) contractsByChainId[chainId] = [];
            contractsByChainId[chainId]?.push({
                contract,
                index
            });
        }
        const promises = ()=>Object.entries(contractsByChainId).map(([chainId, contracts])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$multicall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multicall"])(config, {
                    ...rest,
                    allowFailure,
                    blockNumber,
                    blockTag,
                    chainId: Number.parseInt(chainId, 10),
                    contracts: contracts.map(({ contract })=>contract)
                }));
        const multicallResults = (await Promise.all(promises())).flat();
        // Reorder the contract results back to the order they were
        // provided in.
        const resultIndexes = Object.values(contractsByChainId).flatMap((contracts)=>contracts.map(({ index })=>index));
        return multicallResults.reduce((results, result, index)=>{
            if (results) results[resultIndexes[index]] = result;
            return results;
        }, []);
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractFunctionExecutionError"]) throw error;
        const promises = ()=>contracts.map((contract)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"])(config, {
                    ...contract,
                    blockNumber,
                    blockTag
                }));
        if (allowFailure) return (await Promise.allSettled(promises())).map((result)=>{
            if (result.status === 'fulfilled') return {
                result: result.value,
                status: 'success'
            };
            return {
                error: result.reason,
                result: undefined,
                status: 'failure'
            };
        });
        return await Promise.all(promises());
    }
} //# sourceMappingURL=readContracts.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/getBalance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBalance",
    ()=>getBalance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/unit/formatUnits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/data/trim.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/public/getBalance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getUnit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/getUnit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/readContracts.js [app-client] (ecmascript)");
;
;
;
;
;
async function getBalance(config, parameters) {
    const { address, blockNumber, blockTag, chainId, token: tokenAddress, unit = 'ether' } = parameters;
    if (tokenAddress) {
        try {
            return await getTokenBalance(config, {
                balanceAddress: address,
                chainId,
                symbolType: 'string',
                tokenAddress
            });
        } catch (error) {
            // In the chance that there is an error upon decoding the contract result,
            // it could be likely that the contract data is represented as bytes32 instead
            // of a string.
            if (error.name === 'ContractFunctionExecutionError') {
                const balance = await getTokenBalance(config, {
                    balanceAddress: address,
                    chainId,
                    symbolType: 'bytes32',
                    tokenAddress
                });
                const symbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])(balance.symbol, {
                    dir: 'right'
                }));
                return {
                    ...balance,
                    symbol
                };
            }
            throw error;
        }
    }
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBalance"], 'getBalance');
    const value = await action(blockNumber ? {
        address,
        blockNumber
    } : {
        address,
        blockTag
    });
    const chain = config.chains.find((x)=>x.id === chainId) ?? client.chain;
    return {
        decimals: chain.nativeCurrency.decimals,
        formatted: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"])(value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getUnit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnit"])(unit)),
        symbol: chain.nativeCurrency.symbol,
        value
    };
}
async function getTokenBalance(config, parameters) {
    const { balanceAddress, chainId, symbolType, tokenAddress, unit } = parameters;
    const contract = {
        abi: [
            {
                type: 'function',
                name: 'balanceOf',
                stateMutability: 'view',
                inputs: [
                    {
                        type: 'address'
                    }
                ],
                outputs: [
                    {
                        type: 'uint256'
                    }
                ]
            },
            {
                type: 'function',
                name: 'decimals',
                stateMutability: 'view',
                inputs: [],
                outputs: [
                    {
                        type: 'uint8'
                    }
                ]
            },
            {
                type: 'function',
                name: 'symbol',
                stateMutability: 'view',
                inputs: [],
                outputs: [
                    {
                        type: symbolType
                    }
                ]
            }
        ],
        address: tokenAddress
    };
    const [value, decimals, symbol] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContracts"])(config, {
        allowFailure: false,
        contracts: [
            {
                ...contract,
                functionName: 'balanceOf',
                args: [
                    balanceAddress
                ],
                chainId
            },
            {
                ...contract,
                functionName: 'decimals',
                chainId
            },
            {
                ...contract,
                functionName: 'symbol',
                chainId
            }
        ]
    });
    const formatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"])(value ?? '0', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getUnit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnit"])(unit ?? decimals));
    return {
        decimals,
        formatted,
        symbol,
        value
    };
} //# sourceMappingURL=getBalance.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterQueryOptions",
    ()=>filterQueryOptions,
    "hashFn",
    ()=>hashFn,
    "structuralSharing",
    ()=>structuralSharing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
function structuralSharing(oldData, newData) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceEqualDeep"])(oldData, newData);
}
function hashFn(queryKey) {
    return JSON.stringify(queryKey, (_, value)=>{
        if (isPlainObject(value)) return Object.keys(value).sort().reduce((result, key)=>{
            result[key] = value[key];
            return result;
        }, {});
        if (typeof value === 'bigint') return value.toString();
        return value;
    });
}
// biome-ignore lint/complexity/noBannedTypes: using
function isPlainObject(value) {
    if (!hasObjectPrototype(value)) {
        return false;
    }
    // If has modified constructor
    const ctor = value.constructor;
    if (typeof ctor === 'undefined') return true;
    // If has modified prototype
    const prot = ctor.prototype;
    if (!hasObjectPrototype(prot)) return false;
    // If constructor does not have an Object-specific method
    // biome-ignore lint/suspicious/noPrototypeBuiltins: using
    if (!prot.hasOwnProperty('isPrototypeOf')) return false;
    // Most likely a plain Object
    return true;
}
function hasObjectPrototype(o) {
    return Object.prototype.toString.call(o) === '[object Object]';
}
function filterQueryOptions(options) {
    // destructuring is super fast
    // biome-ignore format: no formatting
    const { // import('@tanstack/query-core').QueryOptions
    // biome-ignore lint/correctness/noUnusedVariables: tossing
    _defaulted, behavior, gcTime, initialData, initialDataUpdatedAt, maxPages, meta, networkMode, queryFn, queryHash, queryKey, queryKeyHashFn, retry, retryDelay, structuralSharing, // import('@tanstack/query-core').InfiniteQueryObserverOptions
    // biome-ignore lint/correctness/noUnusedVariables: tossing
    getPreviousPageParam, getNextPageParam, initialPageParam, // import('@tanstack/react-query').UseQueryOptions
    // biome-ignore lint/correctness/noUnusedVariables: tossing
    _optimisticResults, enabled, notifyOnChangeProps, placeholderData, refetchInterval, refetchIntervalInBackground, refetchOnMount, refetchOnReconnect, refetchOnWindowFocus, retryOnMount, select, staleTime, suspense, throwOnError, ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // wagmi
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // biome-ignore lint/correctness/noUnusedVariables: tossing
    config, connector, query, ...rest } = options;
    return rest;
} //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/query/getBalance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBalanceQueryKey",
    ()=>getBalanceQueryKey,
    "getBalanceQueryOptions",
    ()=>getBalanceQueryOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/getBalance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getBalanceQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { address, scopeKey: _, ...parameters } = queryKey[1];
            if (!address) throw new Error('address is required');
            const balance = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBalance"])(config, {
                ...parameters,
                address
            });
            return balance ?? null;
        },
        queryKey: getBalanceQueryKey(options)
    };
}
function getBalanceQueryKey(options = {}) {
    return [
        'balance',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getBalance.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/getChainId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** https://wagmi.sh/core/api/actions/getChainId */ __turbopack_context__.s([
    "getChainId",
    ()=>getChainId
]);
function getChainId(config) {
    return config.state.chainId;
} //# sourceMappingURL=getChainId.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/watchChainId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** https://wagmi.sh/core/api/actions/watchChainId */ __turbopack_context__.s([
    "watchChainId",
    ()=>watchChainId
]);
function watchChainId(config, parameters) {
    const { onChange } = parameters;
    return config.subscribe((state)=>state.chainId, onChange);
} //# sourceMappingURL=watchChainId.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/getEnsAvatar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEnsAvatar",
    ()=>getEnsAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/ens/getEnsAvatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
;
;
function getEnsAvatar(config, parameters) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsAvatar"], 'getEnsAvatar');
    return action(rest);
} //# sourceMappingURL=getEnsAvatar.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/query/getEnsAvatar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEnsAvatarQueryKey",
    ()=>getEnsAvatarQueryKey,
    "getEnsAvatarQueryOptions",
    ()=>getEnsAvatarQueryOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getEnsAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/getEnsAvatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getEnsAvatarQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { name, scopeKey: _, ...parameters } = queryKey[1];
            if (!name) throw new Error('name is required');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getEnsAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsAvatar"])(config, {
                ...parameters,
                name
            });
        },
        queryKey: getEnsAvatarQueryKey(options)
    };
}
function getEnsAvatarQueryKey(options = {}) {
    return [
        'ensAvatar',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getEnsAvatar.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/getEnsName.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEnsName",
    ()=>getEnsName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/ens/getEnsName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
;
;
function getEnsName(config, parameters) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsName"], 'getEnsName');
    return action(rest);
} //# sourceMappingURL=getEnsName.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/query/getEnsName.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEnsNameQueryKey",
    ()=>getEnsNameQueryKey,
    "getEnsNameQueryOptions",
    ()=>getEnsNameQueryOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getEnsName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/getEnsName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getEnsNameQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { address, scopeKey: _, ...parameters } = queryKey[1];
            if (!address) throw new Error('address is required');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getEnsName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsName"])(config, {
                ...parameters,
                address
            });
        },
        queryKey: getEnsNameQueryKey(options)
    };
}
function getEnsNameQueryKey(options = {}) {
    return [
        'ensName',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getEnsName.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/getClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getClient",
    ()=>getClient
]);
function getClient(config, parameters = {}) {
    try {
        return config.getClient(parameters);
    } catch  {
        return undefined;
    }
} //# sourceMappingURL=getClient.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/getPublicClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPublicClient",
    ()=>getPublicClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/clients/decorators/public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/getClient.js [app-client] (ecmascript)");
;
;
function getPublicClient(config, parameters = {}) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])(config, parameters);
    return client?.extend(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicActions"]);
} //# sourceMappingURL=getPublicClient.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/watchPublicClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "watchPublicClient",
    ()=>watchPublicClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/getPublicClient.js [app-client] (ecmascript)");
;
function watchPublicClient(config, parameters) {
    const { onChange } = parameters;
    return config.subscribe(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublicClient"])(config), onChange, {
        equalityFn (a, b) {
            return a?.uid === b?.uid;
        }
    });
} //# sourceMappingURL=watchPublicClient.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/disconnect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** https://wagmi.sh/core/api/actions/disconnect */ __turbopack_context__.s([
    "disconnect",
    ()=>disconnect
]);
async function disconnect(config, parameters = {}) {
    let connector;
    if (parameters.connector) connector = parameters.connector;
    else {
        const { connections, current } = config.state;
        const connection = connections.get(current);
        connector = connection?.connector;
    }
    const connections = config.state.connections;
    if (connector) {
        await connector.disconnect();
        connector.emitter.off('change', config._internal.events.change);
        connector.emitter.off('disconnect', config._internal.events.disconnect);
        connector.emitter.on('connect', config._internal.events.connect);
        connections.delete(connector.uid);
    }
    config.setState((x)=>{
        // if no connections exist, move to disconnected state
        if (connections.size === 0) return {
            ...x,
            connections: new Map(),
            current: null,
            status: 'disconnected'
        };
        // switch over to another connection
        const nextConnection = connections.values().next().value;
        return {
            ...x,
            connections: new Map(connections),
            current: nextConnection.connector.uid
        };
    });
    // Set recent connector if exists
    {
        const current = config.state.current;
        if (!current) return;
        const connector = config.state.connections.get(current)?.connector;
        if (!connector) return;
        await config.storage?.setItem('recentConnectorId', connector.id);
    }
} //# sourceMappingURL=disconnect.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/query/disconnect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "disconnectMutationOptions",
    ()=>disconnectMutationOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$disconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/disconnect.js [app-client] (ecmascript)");
;
function disconnectMutationOptions(config) {
    return {
        mutationFn (variables) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$disconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disconnect"])(config, variables);
        },
        mutationKey: [
            'disconnect'
        ]
    };
} //# sourceMappingURL=disconnect.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/getConnections.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getConnections",
    ()=>getConnections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)");
;
let previousConnections = [];
function getConnections(config) {
    const connections = [
        ...config.state.connections.values()
    ];
    if (config.state.status === 'reconnecting') return previousConnections;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(previousConnections, connections)) return previousConnections;
    previousConnections = connections;
    return connections;
} //# sourceMappingURL=getConnections.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/watchConnections.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "watchConnections",
    ()=>watchConnections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/getConnections.js [app-client] (ecmascript)");
;
;
function watchConnections(config, parameters) {
    const { onChange } = parameters;
    return config.subscribe(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnections"])(config), onChange, {
        equalityFn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"]
    });
} //# sourceMappingURL=watchConnections.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/errors/config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChainNotConfiguredError",
    ()=>ChainNotConfiguredError,
    "ConnectorAccountNotFoundError",
    ()=>ConnectorAccountNotFoundError,
    "ConnectorAlreadyConnectedError",
    ()=>ConnectorAlreadyConnectedError,
    "ConnectorChainMismatchError",
    ()=>ConnectorChainMismatchError,
    "ConnectorNotConnectedError",
    ()=>ConnectorNotConnectedError,
    "ConnectorNotFoundError",
    ()=>ConnectorNotFoundError,
    "ConnectorUnavailableReconnectingError",
    ()=>ConnectorUnavailableReconnectingError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/errors/base.js [app-client] (ecmascript)");
;
class ChainNotConfiguredError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Chain not configured.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ChainNotConfiguredError'
        });
    }
}
class ConnectorAlreadyConnectedError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Connector already connected.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorAlreadyConnectedError'
        });
    }
}
class ConnectorNotConnectedError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Connector not connected.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorNotConnectedError'
        });
    }
}
class ConnectorNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Connector not found.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorNotFoundError'
        });
    }
}
class ConnectorAccountNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ address, connector }){
        super(`Account "${address}" not found for connector "${connector.name}".`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorAccountNotFoundError'
        });
    }
}
class ConnectorChainMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ connectionChainId, connectorChainId }){
        super(`The current chain of the connector (id: ${connectorChainId}) does not match the connection's chain (id: ${connectionChainId}).`, {
            metaMessages: [
                `Current Chain ID:  ${connectorChainId}`,
                `Expected Chain ID: ${connectionChainId}`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorChainMismatchError'
        });
    }
}
class ConnectorUnavailableReconnectingError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ connector }){
        super(`Connector "${connector.name}" unavailable while reconnecting.`, {
            details: [
                'During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`.',
                'All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored.',
                'This error commonly occurs for connectors that asynchronously inject after reconnection has already started.'
            ].join(' ')
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorUnavailableReconnectingError'
        });
    }
} //# sourceMappingURL=config.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/connect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connect",
    ()=>connect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/errors/config.js [app-client] (ecmascript)");
;
async function connect(config, parameters) {
    // "Register" connector if not already created
    let connector;
    if (typeof parameters.connector === 'function') {
        connector = config._internal.connectors.setup(parameters.connector);
    } else connector = parameters.connector;
    // Check if connector is already connected
    if (connector.uid === config.state.current) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorAlreadyConnectedError"]();
    try {
        config.setState((x)=>({
                ...x,
                status: 'connecting'
            }));
        connector.emitter.emit('message', {
            type: 'connecting'
        });
        const { connector: _, ...rest } = parameters;
        const data = await connector.connect(rest);
        connector.emitter.off('connect', config._internal.events.connect);
        connector.emitter.on('change', config._internal.events.change);
        connector.emitter.on('disconnect', config._internal.events.disconnect);
        await config.storage?.setItem('recentConnectorId', connector.id);
        config.setState((x)=>({
                ...x,
                connections: new Map(x.connections).set(connector.uid, {
                    accounts: rest.withCapabilities ? data.accounts.map((account)=>typeof account === 'object' ? account.address : account) : data.accounts,
                    chainId: data.chainId,
                    connector: connector
                }),
                current: connector.uid,
                status: 'connected'
            }));
        return {
            // TODO(v3): Remove `withCapabilities: true` default behavior so remove compat marshalling
            // Workaround so downstream connectors work with `withCapabilities` without any changes required
            accounts: rest.withCapabilities ? data.accounts.map((address)=>typeof address === 'object' ? address : {
                    address,
                    capabilities: {}
                }) : data.accounts,
            chainId: data.chainId
        };
    } catch (error) {
        config.setState((x)=>({
                ...x,
                // Keep existing connector connected in case of error
                status: x.current ? 'connected' : 'disconnected'
            }));
        throw error;
    }
} //# sourceMappingURL=connect.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/query/connect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectMutationOptions",
    ()=>connectMutationOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/connect.js [app-client] (ecmascript)");
;
function connectMutationOptions(config) {
    return {
        mutationFn (variables) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connect"])(config, variables);
        },
        mutationKey: [
            'connect'
        ]
    };
} //# sourceMappingURL=connect.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/getConnectors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getConnectors",
    ()=>getConnectors
]);
let previousConnectors = [];
function getConnectors(config) {
    const connectors = config.connectors;
    if (previousConnectors.length === connectors.length && previousConnectors.every((connector, index)=>connector === connectors[index])) return previousConnectors;
    previousConnectors = connectors;
    return connectors;
} //# sourceMappingURL=getConnectors.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/watchConnectors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** https://wagmi.sh/core/api/actions/watchConnectors */ __turbopack_context__.s([
    "watchConnectors",
    ()=>watchConnectors
]);
function watchConnectors(config, parameters) {
    const { onChange } = parameters;
    return config._internal.connectors.subscribe((connectors, prevConnectors)=>{
        onChange(Object.values(connectors), prevConnectors);
    });
} //# sourceMappingURL=watchConnectors.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/getConnectorClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getConnectorClient",
    ()=>getConnectorClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/clients/createClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/clients/transports/custom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/errors/config.js [app-client] (ecmascript)");
;
;
;
async function getConnectorClient(config, parameters = {}) {
    const { assertChainId = true } = parameters;
    // Get connection
    let connection;
    if (parameters.connector) {
        const { connector } = parameters;
        if (config.state.status === 'reconnecting' && !connector.getAccounts && !connector.getChainId) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorUnavailableReconnectingError"]({
            connector
        });
        const [accounts, chainId] = await Promise.all([
            connector.getAccounts().catch((e)=>{
                if (parameters.account === null) return [];
                throw e;
            }),
            connector.getChainId()
        ]);
        connection = {
            accounts: accounts,
            chainId,
            connector
        };
    } else connection = config.state.connections.get(config.state.current);
    if (!connection) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorNotConnectedError"]();
    const chainId = parameters.chainId ?? connection.chainId;
    // Check connector using same chainId as connection
    const connectorChainId = await connection.connector.getChainId();
    if (assertChainId && connectorChainId !== chainId) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorChainMismatchError"]({
        connectionChainId: chainId,
        connectorChainId
    });
    const connector = connection.connector;
    if (connector.getClient) return connector.getClient({
        chainId
    });
    // Default using `custom` transport
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(parameters.account ?? connection.accounts[0]);
    if (account) account.address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(account.address); // TODO: Checksum address as part of `parseAccount`?
    // If account was provided, check that it exists on the connector
    if (parameters.account && !connection.accounts.some((x)=>x.toLowerCase() === account.address.toLowerCase())) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorAccountNotFoundError"]({
        address: account.address,
        connector
    });
    const chain = config.chains.find((chain)=>chain.id === chainId);
    const provider = await connection.connector.getProvider({
        chainId
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])({
        account,
        chain,
        name: 'Connector Client',
        transport: (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["custom"])(provider)({
                ...opts,
                retryCount: 0
            })
    });
} //# sourceMappingURL=getConnectorClient.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/signMessage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signMessage",
    ()=>signMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/signMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/getConnectorClient.js [app-client] (ecmascript)");
;
;
;
async function signMessage(config, parameters) {
    const { account, connector, ...rest } = parameters;
    let client;
    if (typeof account === 'object' && account.type === 'local') client = config.getClient();
    else client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectorClient"])(config, {
        account,
        connector
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signMessage"], 'signMessage');
    return action({
        ...rest,
        ...account ? {
            account
        } : {}
    });
} //# sourceMappingURL=signMessage.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/query/signMessage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signMessageMutationOptions",
    ()=>signMessageMutationOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$signMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/signMessage.js [app-client] (ecmascript)");
;
function signMessageMutationOptions(config) {
    return {
        mutationFn (variables) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$signMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signMessage"])(config, variables);
        },
        mutationKey: [
            'signMessage'
        ]
    };
} //# sourceMappingURL=signMessage.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/errors/connector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProviderNotFoundError",
    ()=>ProviderNotFoundError,
    "SwitchChainNotSupportedError",
    ()=>SwitchChainNotSupportedError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/errors/base.js [app-client] (ecmascript)");
;
class ProviderNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Provider not found.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ProviderNotFoundError'
        });
    }
}
class SwitchChainNotSupportedError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ connector }){
        super(`"${connector.name}" does not support programmatic chain switching.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SwitchChainNotSupportedError'
        });
    }
} //# sourceMappingURL=connector.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/switchChain.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "switchChain",
    ()=>switchChain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/errors/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/errors/connector.js [app-client] (ecmascript)");
;
;
async function switchChain(config, parameters) {
    const { addEthereumChainParameter, chainId } = parameters;
    const connection = config.state.connections.get(parameters.connector?.uid ?? config.state.current);
    if (connection) {
        const connector = connection.connector;
        if (!connector.switchChain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchChainNotSupportedError"]({
            connector
        });
        const chain = await connector.switchChain({
            addEthereumChainParameter,
            chainId
        });
        return chain;
    }
    const chain = config.chains.find((x)=>x.id === chainId);
    if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainNotConfiguredError"]();
    config.setState((x)=>({
            ...x,
            chainId
        }));
    return chain;
} //# sourceMappingURL=switchChain.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/query/switchChain.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "switchChainMutationOptions",
    ()=>switchChainMutationOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$switchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/switchChain.js [app-client] (ecmascript)");
;
function switchChainMutationOptions(config) {
    return {
        mutationFn (variables) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$switchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["switchChain"])(config, variables);
        },
        mutationKey: [
            'switchChain'
        ]
    };
} //# sourceMappingURL=switchChain.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/getChains.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChains",
    ()=>getChains
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)");
;
let previousChains = [];
function getChains(config) {
    const chains = config.chains;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(previousChains, chains)) return previousChains;
    previousChains = chains;
    return chains;
} //# sourceMappingURL=getChains.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/actions/watchChains.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @internal
 * We don't expose this because as far as consumers know, you can't chainge (lol) `config.chains` at runtime.
 * Setting `config.chains` via `config._internal.chains.setState(...)` is an extremely advanced use case that's not worth documenting or supporting in the public API at this time.
 */ __turbopack_context__.s([
    "watchChains",
    ()=>watchChains
]);
function watchChains(config, parameters) {
    const { onChange } = parameters;
    return config._internal.chains.subscribe((chains, prevChains)=>{
        onChange(chains, prevChains);
    });
} //# sourceMappingURL=watchChains.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/connectors/createConnector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createConnector",
    ()=>createConnector
]);
function createConnector(createConnectorFn) {
    return createConnectorFn;
} //# sourceMappingURL=createConnector.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/connectors/injected.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "injected",
    ()=>injected
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/rpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/promise/withRetry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/promise/withTimeout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/errors/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/errors/connector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$createConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/connectors/createConnector.js [app-client] (ecmascript)");
;
;
;
;
injected.type = 'injected';
function injected(parameters = {}) {
    const { shimDisconnect = true, unstable_shimAsyncInject } = parameters;
    function getTarget() {
        const target = parameters.target;
        if (typeof target === 'function') {
            const result = target();
            if (result) return result;
        }
        if (typeof target === 'object') return target;
        if (typeof target === 'string') return {
            ...targetMap[target] ?? {
                id: target,
                name: `${target[0].toUpperCase()}${target.slice(1)}`,
                provider: `is${target[0].toUpperCase()}${target.slice(1)}`
            }
        };
        return {
            id: 'injected',
            name: 'Injected',
            provider (window1) {
                return window1?.ethereum;
            }
        };
    }
    let accountsChanged;
    let chainChanged;
    let connect;
    let disconnect;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$createConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createConnector"])((config)=>({
            get icon () {
                return getTarget().icon;
            },
            get id () {
                return getTarget().id;
            },
            get name () {
                return getTarget().name;
            },
            /** @deprecated */ get supportsSimulation () {
                return true;
            },
            type: injected.type,
            async setup () {
                const provider = await this.getProvider();
                // Only start listening for events if `target` is set, otherwise `injected()` will also receive events
                if (provider?.on && parameters.target) {
                    if (!connect) {
                        connect = this.onConnect.bind(this);
                        provider.on('connect', connect);
                    }
                    // We shouldn't need to listen for `'accountsChanged'` here since the `'connect'` event should suffice (and wallet shouldn't be connected yet).
                    // Some wallets, like MetaMask, do not implement the `'connect'` event and overload `'accountsChanged'` instead.
                    if (!accountsChanged) {
                        accountsChanged = this.onAccountsChanged.bind(this);
                        provider.on('accountsChanged', accountsChanged);
                    }
                }
            },
            async connect ({ chainId, isReconnecting, withCapabilities } = {}) {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                let accounts = [];
                if (isReconnecting) accounts = await this.getAccounts().catch(()=>[]);
                else if (shimDisconnect) {
                    // Attempt to show another prompt for selecting account if `shimDisconnect` flag is enabled
                    try {
                        const permissions = await provider.request({
                            method: 'wallet_requestPermissions',
                            params: [
                                {
                                    eth_accounts: {}
                                }
                            ]
                        });
                        accounts = permissions[0]?.caveats?.[0]?.value?.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(x));
                        // `'wallet_requestPermissions'` can return a different order of accounts than `'eth_accounts'`
                        // switch to `'eth_accounts'` ordering if more than one account is connected
                        // https://github.com/wevm/wagmi/issues/4140
                        if (accounts.length > 0) {
                            const sortedAccounts = await this.getAccounts();
                            accounts = sortedAccounts;
                        }
                    } catch (err) {
                        const error = err;
                        // Not all injected providers support `wallet_requestPermissions` (e.g. MetaMask iOS).
                        // Only bubble up error if user rejects request
                        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                        // Or prompt is already open
                        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"].code) throw error;
                    }
                }
                try {
                    if (!accounts?.length && !isReconnecting) {
                        const requestedAccounts = await provider.request({
                            method: 'eth_requestAccounts'
                        });
                        accounts = requestedAccounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(x));
                    }
                    // Manage EIP-1193 event listeners
                    // https://eips.ethereum.org/EIPS/eip-1193#events
                    if (connect) {
                        provider.removeListener('connect', connect);
                        connect = undefined;
                    }
                    if (!accountsChanged) {
                        accountsChanged = this.onAccountsChanged.bind(this);
                        provider.on('accountsChanged', accountsChanged);
                    }
                    if (!chainChanged) {
                        chainChanged = this.onChainChanged.bind(this);
                        provider.on('chainChanged', chainChanged);
                    }
                    if (!disconnect) {
                        disconnect = this.onDisconnect.bind(this);
                        provider.on('disconnect', disconnect);
                    }
                    // Switch to chain if provided
                    let currentChainId = await this.getChainId();
                    if (chainId && currentChainId !== chainId) {
                        const chain = await this.switchChain({
                            chainId
                        }).catch((error)=>{
                            if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw error;
                            return {
                                id: currentChainId
                            };
                        });
                        currentChainId = chain?.id ?? currentChainId;
                    }
                    // Remove disconnected shim if it exists
                    if (shimDisconnect) await config.storage?.removeItem(`${this.id}.disconnected`);
                    // Add connected shim if no target exists
                    if (!parameters.target) await config.storage?.setItem('injected.connected', true);
                    return {
                        accounts: withCapabilities ? accounts.map((address)=>({
                                address,
                                capabilities: {}
                            })) : accounts,
                        chainId: currentChainId
                    };
                } catch (err) {
                    const error = err;
                    if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                    if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"](error);
                    throw error;
                }
            },
            async disconnect () {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                // Manage EIP-1193 event listeners
                if (chainChanged) {
                    provider.removeListener('chainChanged', chainChanged);
                    chainChanged = undefined;
                }
                if (disconnect) {
                    provider.removeListener('disconnect', disconnect);
                    disconnect = undefined;
                }
                if (!connect) {
                    connect = this.onConnect.bind(this);
                    provider.on('connect', connect);
                }
                // Experimental support for MetaMask disconnect
                // https://github.com/MetaMask/metamask-improvement-proposals/blob/main/MIPs/mip-2.md
                try {
                    // Adding timeout as not all wallets support this method and can hang
                    // https://github.com/wevm/wagmi/issues/4064
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withTimeout"])(()=>// TODO: Remove explicit type for viem@3
                        provider.request({
                            // `'wallet_revokePermissions'` added in `viem@2.10.3`
                            method: 'wallet_revokePermissions',
                            params: [
                                {
                                    eth_accounts: {}
                                }
                            ]
                        }), {
                        timeout: 100
                    });
                } catch  {}
                // Add shim signalling connector is disconnected
                if (shimDisconnect) {
                    await config.storage?.setItem(`${this.id}.disconnected`, true);
                }
                if (!parameters.target) await config.storage?.removeItem('injected.connected');
            },
            async getAccounts () {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                const accounts = await provider.request({
                    method: 'eth_accounts'
                });
                return accounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(x));
            },
            async getChainId () {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                const hexChainId = await provider.request({
                    method: 'eth_chainId'
                });
                return Number(hexChainId);
            },
            async getProvider () {
                if (typeof window === 'undefined') return undefined;
                let provider;
                const target = getTarget();
                if (typeof target.provider === 'function') provider = target.provider(window);
                else if (typeof target.provider === 'string') provider = findProvider(window, target.provider);
                else provider = target.provider;
                // Some wallets do not conform to EIP-1193 (e.g. Trust Wallet)
                // https://github.com/wevm/wagmi/issues/3526#issuecomment-1912683002
                if (provider && !provider.removeListener) {
                    // Try using `off` handler if it exists, otherwise noop
                    if ('off' in provider && typeof provider.off === 'function') provider.removeListener = provider.off;
                    else provider.removeListener = ()=>{};
                }
                return provider;
            },
            async isAuthorized () {
                try {
                    const isDisconnected = shimDisconnect && await config.storage?.getItem(`${this.id}.disconnected`);
                    if (isDisconnected) return false;
                    // Don't allow injected connector to connect if no target is set and it hasn't already connected
                    // (e.g. flag in storage is not set). This prevents a targetless injected connector from connecting
                    // automatically whenever there is a targeted connector configured.
                    if (!parameters.target) {
                        const connected = await config.storage?.getItem('injected.connected');
                        if (!connected) return false;
                    }
                    const provider = await this.getProvider();
                    if (!provider) {
                        if (unstable_shimAsyncInject !== undefined && unstable_shimAsyncInject !== false) {
                            // If no provider is found, check for async injection
                            // https://github.com/wevm/references/issues/167
                            // https://github.com/MetaMask/detect-provider
                            const handleEthereum = async ()=>{
                                if (typeof window !== 'undefined') window.removeEventListener('ethereum#initialized', handleEthereum);
                                const provider = await this.getProvider();
                                return !!provider;
                            };
                            const timeout = typeof unstable_shimAsyncInject === 'number' ? unstable_shimAsyncInject : 1_000;
                            const res = await Promise.race([
                                ...typeof window !== 'undefined' ? [
                                    new Promise((resolve)=>window.addEventListener('ethereum#initialized', ()=>resolve(handleEthereum()), {
                                            once: true
                                        }))
                                ] : [],
                                new Promise((resolve)=>setTimeout(()=>resolve(handleEthereum()), timeout))
                            ]);
                            if (res) return true;
                        }
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                    }
                    // Use retry strategy as some injected wallets (e.g. MetaMask) fail to
                    // immediately resolve JSON-RPC requests on page load.
                    const accounts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withRetry"])(()=>this.getAccounts());
                    return !!accounts.length;
                } catch  {
                    return false;
                }
            },
            async switchChain ({ addEthereumChainParameter, chainId }) {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                const chain = config.chains.find((x)=>x.id === chainId);
                if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchChainError"](new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainNotConfiguredError"]());
                const promise = new Promise((resolve)=>{
                    const listener = (data)=>{
                        if ('chainId' in data && data.chainId === chainId) {
                            config.emitter.off('change', listener);
                            resolve();
                        }
                    };
                    config.emitter.on('change', listener);
                });
                try {
                    await Promise.all([
                        provider.request({
                            method: 'wallet_switchEthereumChain',
                            params: [
                                {
                                    chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(chainId)
                                }
                            ]
                        })// During `'wallet_switchEthereumChain'`, MetaMask makes a `'net_version'` RPC call to the target chain.
                        // If this request fails, MetaMask does not emit the `'chainChanged'` event, but will still switch the chain.
                        // To counter this behavior, we request and emit the current chain ID to confirm the chain switch either via
                        // this callback or an externally emitted `'chainChanged'` event.
                        // https://github.com/MetaMask/metamask-extension/issues/24247
                        .then(async ()=>{
                            const currentChainId = await this.getChainId();
                            if (currentChainId === chainId) config.emitter.emit('change', {
                                chainId
                            });
                        }),
                        promise
                    ]);
                    return chain;
                } catch (err) {
                    const error = err;
                    // Indicates chain is not added to provider
                    if (error.code === 4902 || // Unwrapping for MetaMask Mobile
                    // https://github.com/MetaMask/metamask-mobile/issues/2944#issuecomment-976988719
                    error?.data?.originalError?.code === 4902) {
                        try {
                            const { default: blockExplorer, ...blockExplorers } = chain.blockExplorers ?? {};
                            let blockExplorerUrls;
                            if (addEthereumChainParameter?.blockExplorerUrls) blockExplorerUrls = addEthereumChainParameter.blockExplorerUrls;
                            else if (blockExplorer) blockExplorerUrls = [
                                blockExplorer.url,
                                ...Object.values(blockExplorers).map((x)=>x.url)
                            ];
                            let rpcUrls;
                            if (addEthereumChainParameter?.rpcUrls?.length) rpcUrls = addEthereumChainParameter.rpcUrls;
                            else rpcUrls = [
                                chain.rpcUrls.default?.http[0] ?? ''
                            ];
                            const addEthereumChain = {
                                blockExplorerUrls,
                                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(chainId),
                                chainName: addEthereumChainParameter?.chainName ?? chain.name,
                                iconUrls: addEthereumChainParameter?.iconUrls,
                                nativeCurrency: addEthereumChainParameter?.nativeCurrency ?? chain.nativeCurrency,
                                rpcUrls
                            };
                            await Promise.all([
                                provider.request({
                                    method: 'wallet_addEthereumChain',
                                    params: [
                                        addEthereumChain
                                    ]
                                }).then(async ()=>{
                                    const currentChainId = await this.getChainId();
                                    if (currentChainId === chainId) config.emitter.emit('change', {
                                        chainId
                                    });
                                    else throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](new Error('User rejected switch after adding network.'));
                                }),
                                promise
                            ]);
                            return chain;
                        } catch (error) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                        }
                    }
                    if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchChainError"](error);
                }
            },
            async onAccountsChanged (accounts) {
                // Disconnect if there are no accounts
                if (accounts.length === 0) this.onDisconnect();
                else if (config.emitter.listenerCount('connect')) {
                    const chainId = (await this.getChainId()).toString();
                    this.onConnect({
                        chainId
                    });
                    // Remove disconnected shim if it exists
                    if (shimDisconnect) await config.storage?.removeItem(`${this.id}.disconnected`);
                } else config.emitter.emit('change', {
                    accounts: accounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(x))
                });
            },
            onChainChanged (chain) {
                const chainId = Number(chain);
                config.emitter.emit('change', {
                    chainId
                });
            },
            async onConnect (connectInfo) {
                const accounts = await this.getAccounts();
                if (accounts.length === 0) return;
                const chainId = Number(connectInfo.chainId);
                config.emitter.emit('connect', {
                    accounts,
                    chainId
                });
                // Manage EIP-1193 event listeners
                const provider = await this.getProvider();
                if (provider) {
                    if (connect) {
                        provider.removeListener('connect', connect);
                        connect = undefined;
                    }
                    if (!accountsChanged) {
                        accountsChanged = this.onAccountsChanged.bind(this);
                        provider.on('accountsChanged', accountsChanged);
                    }
                    if (!chainChanged) {
                        chainChanged = this.onChainChanged.bind(this);
                        provider.on('chainChanged', chainChanged);
                    }
                    if (!disconnect) {
                        disconnect = this.onDisconnect.bind(this);
                        provider.on('disconnect', disconnect);
                    }
                }
            },
            async onDisconnect (error) {
                const provider = await this.getProvider();
                // If MetaMask emits a `code: 1013` error, wait for reconnection before disconnecting
                // https://github.com/MetaMask/providers/pull/120
                if (error && error.code === 1013) {
                    if (provider && !!(await this.getAccounts()).length) return;
                }
                // No need to remove `${this.id}.disconnected` from storage because `onDisconnect` is typically
                // only called when the wallet is disconnected through the wallet's interface, meaning the wallet
                // actually disconnected and we don't need to simulate it.
                config.emitter.emit('disconnect');
                // Manage EIP-1193 event listeners
                if (provider) {
                    if (chainChanged) {
                        provider.removeListener('chainChanged', chainChanged);
                        chainChanged = undefined;
                    }
                    if (disconnect) {
                        provider.removeListener('disconnect', disconnect);
                        disconnect = undefined;
                    }
                    if (!connect) {
                        connect = this.onConnect.bind(this);
                        provider.on('connect', connect);
                    }
                }
            }
        }));
}
const targetMap = {
    coinbaseWallet: {
        id: 'coinbaseWallet',
        name: 'Coinbase Wallet',
        provider (window1) {
            if (window1?.coinbaseWalletExtension) return window1.coinbaseWalletExtension;
            return findProvider(window1, 'isCoinbaseWallet');
        }
    },
    metaMask: {
        id: 'metaMask',
        name: 'MetaMask',
        provider (window1) {
            return findProvider(window1, (provider)=>{
                if (!provider.isMetaMask) return false;
                // Brave tries to make itself look like MetaMask
                // Could also try RPC `web3_clientVersion` if following is unreliable
                if (provider.isBraveWallet && !provider._events && !provider._state) return false;
                // Other wallets that try to look like MetaMask
                const flags = [
                    'isApexWallet',
                    'isAvalanche',
                    'isBitKeep',
                    'isBlockWallet',
                    'isKuCoinWallet',
                    'isMathWallet',
                    'isOkxWallet',
                    'isOKExWallet',
                    'isOneInchIOSWallet',
                    'isOneInchAndroidWallet',
                    'isOpera',
                    'isPhantom',
                    'isPortal',
                    'isRabby',
                    'isTokenPocket',
                    'isTokenary',
                    'isUniswapWallet',
                    'isZerion'
                ];
                for (const flag of flags)if (provider[flag]) return false;
                return true;
            });
        }
    },
    phantom: {
        id: 'phantom',
        name: 'Phantom',
        provider (window1) {
            if (window1?.phantom?.ethereum) return window1.phantom?.ethereum;
            return findProvider(window1, 'isPhantom');
        }
    }
};
function findProvider(window1, select) {
    function isProvider(provider) {
        if (typeof select === 'function') return select(provider);
        if (typeof select === 'string') return provider[select];
        return true;
    }
    const ethereum = window1.ethereum;
    if (ethereum?.providers) return ethereum.providers.find((provider)=>isProvider(provider));
    if (ethereum && isProvider(ethereum)) return ethereum;
    return undefined;
} //# sourceMappingURL=injected.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/createEmitter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Emitter",
    ()=>Emitter,
    "createEmitter",
    ()=>createEmitter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/eventemitter3/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EventEmitter$3e$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/eventemitter3/index.js [app-client] (ecmascript) <export default as EventEmitter>");
;
class Emitter {
    constructor(uid){
        Object.defineProperty(this, "uid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: uid
        });
        Object.defineProperty(this, "_emitter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EventEmitter$3e$__["EventEmitter"]()
        });
    }
    on(eventName, fn) {
        this._emitter.on(eventName, fn);
    }
    once(eventName, fn) {
        this._emitter.once(eventName, fn);
    }
    off(eventName, fn) {
        this._emitter.off(eventName, fn);
    }
    emit(eventName, ...params) {
        const data = params[0];
        this._emitter.emit(eventName, {
            uid: this.uid,
            ...data
        });
    }
    listenerCount(eventName) {
        return this._emitter.listenerCount(eventName);
    }
}
function createEmitter(uid) {
    return new Emitter(uid);
} //# sourceMappingURL=createEmitter.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/deserialize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deserialize",
    ()=>deserialize
]);
function deserialize(value, reviver) {
    return JSON.parse(value, (key, value_)=>{
        let value = value_;
        if (value?.__type === 'bigint') value = BigInt(value.value);
        if (value?.__type === 'Map') value = new Map(value.value);
        return reviver?.(key, value) ?? value;
    });
} //# sourceMappingURL=deserialize.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/serialize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serialize",
    ()=>serialize
]);
/**
 * Get the reference key for the circular value
 *
 * @param keys the keys to build the reference key from
 * @param cutoff the maximum number of keys to include
 * @returns the reference key
 */ function getReferenceKey(keys, cutoff) {
    return keys.slice(0, cutoff).join('.') || '.';
}
/**
 * Faster `Array.prototype.indexOf` implementation build for slicing / splicing
 *
 * @param array the array to match the value in
 * @param value the value to match
 * @returns the matching index, or -1
 */ function getCutoff(array, value) {
    const { length } = array;
    for(let index = 0; index < length; ++index){
        if (array[index] === value) {
            return index + 1;
        }
    }
    return 0;
}
/**
 * Create a replacer method that handles circular values
 *
 * @param [replacer] a custom replacer to use for non-circular values
 * @param [circularReplacer] a custom replacer to use for circular methods
 * @returns the value to stringify
 */ function createReplacer(replacer, circularReplacer) {
    const hasReplacer = typeof replacer === 'function';
    const hasCircularReplacer = typeof circularReplacer === 'function';
    const cache = [];
    const keys = [];
    return function replace(key, value) {
        if (typeof value === 'object') {
            if (cache.length) {
                const thisCutoff = getCutoff(cache, this);
                if (thisCutoff === 0) {
                    cache[cache.length] = this;
                } else {
                    cache.splice(thisCutoff);
                    keys.splice(thisCutoff);
                }
                keys[keys.length] = key;
                const valueCutoff = getCutoff(cache, value);
                if (valueCutoff !== 0) {
                    return hasCircularReplacer ? circularReplacer.call(this, key, value, getReferenceKey(keys, valueCutoff)) : `[ref=${getReferenceKey(keys, valueCutoff)}]`;
                }
            } else {
                cache[0] = value;
                keys[0] = key;
            }
        }
        return hasReplacer ? replacer.call(this, key, value) : value;
    };
}
function serialize(value, replacer, indent, circularReplacer) {
    return JSON.stringify(value, createReplacer((key, value_)=>{
        let value = value_;
        if (typeof value === 'bigint') value = {
            __type: 'bigint',
            value: value_.toString()
        };
        if (value instanceof Map) value = {
            __type: 'Map',
            value: Array.from(value_.entries())
        };
        return replacer?.(key, value) ?? value;
    }, circularReplacer), indent ?? undefined);
} //# sourceMappingURL=serialize.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/createStorage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStorage",
    ()=>createStorage,
    "getDefaultStorage",
    ()=>getDefaultStorage,
    "noopStorage",
    ()=>noopStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deserialize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/deserialize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$serialize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/serialize.js [app-client] (ecmascript)");
;
;
function createStorage(parameters) {
    const { deserialize = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deserialize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deserialize"], key: prefix = 'wagmi', serialize = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$serialize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"], storage = noopStorage } = parameters;
    function unwrap(value) {
        if (value instanceof Promise) return value.then((x)=>x).catch(()=>null);
        return value;
    }
    return {
        ...storage,
        key: prefix,
        async getItem (key, defaultValue) {
            const value = storage.getItem(`${prefix}.${key}`);
            const unwrapped = await unwrap(value);
            if (unwrapped) return deserialize(unwrapped) ?? null;
            return defaultValue ?? null;
        },
        async setItem (key, value) {
            const storageKey = `${prefix}.${key}`;
            if (value === null) await unwrap(storage.removeItem(storageKey));
            else await unwrap(storage.setItem(storageKey, serialize(value)));
        },
        async removeItem (key) {
            await unwrap(storage.removeItem(`${prefix}.${key}`));
        }
    };
}
const noopStorage = {
    getItem: ()=>null,
    setItem: ()=>{},
    removeItem: ()=>{}
};
function getDefaultStorage() {
    const storage = (()=>{
        // biome-ignore lint/complexity/useOptionalChain: _
        if (typeof window !== 'undefined' && window.localStorage) return window.localStorage;
        return noopStorage;
    })();
    return {
        getItem (key) {
            return storage.getItem(key);
        },
        removeItem (key) {
            storage.removeItem(key);
        },
        setItem (key, value) {
            try {
                storage.setItem(key, value);
            // silence errors by default (QuotaExceededError, SecurityError, etc.)
            } catch  {}
        }
    };
} //# sourceMappingURL=createStorage.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/uid.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uid",
    ()=>uid
]);
const size = 256;
let index = size;
let buffer;
function uid(length = 11) {
    if (!buffer || index + length > size * 2) {
        buffer = '';
        index = 0;
        for(let i = 0; i < size; i++){
            buffer += (256 + Math.random() * 256 | 0).toString(16).substring(1);
        }
    }
    return buffer.substring(index, index++ + length);
} //# sourceMappingURL=uid.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/createConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createConfig",
    ()=>createConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$mipd$2f$dist$2f$esm$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/mipd/dist/esm/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/clients/createClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$injected$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/connectors/injected.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createEmitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/createEmitter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/createStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/errors/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$uid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/uid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/version.js [app-client] (ecmascript)");
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
function createConfig(parameters) {
    const { multiInjectedProviderDiscovery = true, storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStorage"])({
        storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultStorage"])()
    }), syncConnectedChain = true, ssr = false, ...rest } = parameters;
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Set up connectors, clients, etc.
    /////////////////////////////////////////////////////////////////////////////////////////////////
    const mipd = typeof window !== 'undefined' && multiInjectedProviderDiscovery ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$mipd$2f$dist$2f$esm$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])() : undefined;
    const chains = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])(()=>rest.chains);
    const connectors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])(()=>{
        const collection = [];
        const rdnsSet = new Set();
        for (const connectorFns of rest.connectors ?? []){
            const connector = setup(connectorFns);
            collection.push(connector);
            if (!ssr && connector.rdns) {
                const rdnsValues = typeof connector.rdns === 'string' ? [
                    connector.rdns
                ] : connector.rdns;
                for (const rdns of rdnsValues){
                    rdnsSet.add(rdns);
                }
            }
        }
        if (!ssr && mipd) {
            const providers = mipd.getProviders();
            for (const provider of providers){
                if (rdnsSet.has(provider.info.rdns)) continue;
                collection.push(setup(providerDetailToConnector(provider)));
            }
        }
        return collection;
    });
    function setup(connectorFn) {
        // Set up emitter with uid and add to connector so they are "linked" together.
        const emitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createEmitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEmitter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$uid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])());
        const connector = {
            ...connectorFn({
                emitter,
                chains: chains.getState(),
                storage,
                transports: rest.transports
            }),
            emitter,
            uid: emitter.uid
        };
        // Start listening for `connect` events on connector setup
        // This allows connectors to "connect" themselves without user interaction (e.g. MetaMask's "Manually connect to current site")
        emitter.on('connect', connect);
        connector.setup?.();
        return connector;
    }
    function providerDetailToConnector(providerDetail) {
        const { info } = providerDetail;
        const provider = providerDetail.provider;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$injected$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injected"])({
            target: {
                ...info,
                id: info.rdns,
                provider
            }
        });
    }
    const clients = new Map();
    function getClient(config = {}) {
        const chainId = config.chainId ?? store.getState().chainId;
        const chain = chains.getState().find((x)=>x.id === chainId);
        // chainId specified and not configured
        if (config.chainId && !chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainNotConfiguredError"]();
        {
            const client = clients.get(store.getState().chainId);
            if (client && !chain) return client;
            if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainNotConfiguredError"]();
        }
        // If a memoized client exists for a chain id, use that.
        {
            const client = clients.get(chainId);
            if (client) return client;
        }
        let client;
        if (rest.client) client = rest.client({
            chain
        });
        else {
            const chainId = chain.id;
            const chainIds = chains.getState().map((x)=>x.id);
            // Grab all properties off `rest` and resolve for use in `createClient`
            const properties = {};
            const entries = Object.entries(rest);
            for (const [key, value] of entries){
                if (key === 'chains' || key === 'client' || key === 'connectors' || key === 'transports') continue;
                if (typeof value === 'object') {
                    // check if value is chainId-specific since some values can be objects
                    // e.g. { batch: { multicall: { batchSize: 1024 } } }
                    if (chainId in value) properties[key] = value[chainId];
                    else {
                        // check if value is chainId-specific, but does not have value for current chainId
                        const hasChainSpecificValue = chainIds.some((x)=>x in value);
                        if (hasChainSpecificValue) continue;
                        properties[key] = value;
                    }
                } else properties[key] = value;
            }
            client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])({
                ...properties,
                chain,
                batch: properties.batch ?? {
                    multicall: true
                },
                transport: (parameters)=>rest.transports[chainId]({
                        ...parameters,
                        connectors
                    })
            });
        }
        clients.set(chainId, client);
        return client;
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Create store
    /////////////////////////////////////////////////////////////////////////////////////////////////
    function getInitialState() {
        return {
            chainId: chains.getState()[0].id,
            connections: new Map(),
            current: null,
            status: 'disconnected'
        };
    }
    let currentVersion;
    const prefix = '0.0.0-canary-';
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"].startsWith(prefix)) currentVersion = Number.parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"].replace(prefix, ''), 10);
    else currentVersion = Number.parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"].split('.')[0] ?? '0', 10);
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeWithSelector"])(// only use persist middleware if storage exists
    storage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])(getInitialState, {
        migrate (persistedState, version) {
            if (version === currentVersion) return persistedState;
            const initialState = getInitialState();
            const chainId = validatePersistedChainId(persistedState, initialState.chainId);
            return {
                ...initialState,
                chainId
            };
        },
        name: 'store',
        partialize (state) {
            // Only persist "critical" store properties to preserve storage size.
            return {
                connections: {
                    __type: 'Map',
                    value: Array.from(state.connections.entries()).map(([key, connection])=>{
                        const { id, name, type, uid } = connection.connector;
                        const connector = {
                            id,
                            name,
                            type,
                            uid
                        };
                        return [
                            key,
                            {
                                ...connection,
                                connector
                            }
                        ];
                    })
                },
                chainId: state.chainId,
                current: state.current
            };
        },
        merge (persistedState, currentState) {
            // `status` should not be persisted as it messes with reconnection
            if (typeof persistedState === 'object' && persistedState && 'status' in persistedState) delete persistedState.status;
            // Make sure persisted `chainId` is valid
            const chainId = validatePersistedChainId(persistedState, currentState.chainId);
            return {
                ...currentState,
                ...persistedState,
                chainId
            };
        },
        skipHydration: ssr,
        storage: storage,
        version: currentVersion
    }) : getInitialState));
    store.setState(getInitialState());
    function validatePersistedChainId(persistedState, defaultChainId) {
        return persistedState && typeof persistedState === 'object' && 'chainId' in persistedState && typeof persistedState.chainId === 'number' && chains.getState().some((x)=>x.id === persistedState.chainId) ? persistedState.chainId : defaultChainId;
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Subscribe to changes
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Update default chain when connector chain changes
    if (syncConnectedChain) store.subscribe(({ connections, current })=>current ? connections.get(current)?.chainId : undefined, (chainId)=>{
        // If chain is not configured, then don't switch over to it.
        const isChainConfigured = chains.getState().some((x)=>x.id === chainId);
        if (!isChainConfigured) return;
        return store.setState((x)=>({
                ...x,
                chainId: chainId ?? x.chainId
            }));
    });
    // EIP-6963 subscribe for new wallet providers
    mipd?.subscribe((providerDetails)=>{
        const connectorIdSet = new Set();
        const connectorRdnsSet = new Set();
        for (const connector of connectors.getState()){
            connectorIdSet.add(connector.id);
            if (connector.rdns) {
                const rdnsValues = typeof connector.rdns === 'string' ? [
                    connector.rdns
                ] : connector.rdns;
                for (const rdns of rdnsValues){
                    connectorRdnsSet.add(rdns);
                }
            }
        }
        const newConnectors = [];
        for (const providerDetail of providerDetails){
            if (connectorRdnsSet.has(providerDetail.info.rdns)) continue;
            const connector = setup(providerDetailToConnector(providerDetail));
            if (connectorIdSet.has(connector.id)) continue;
            newConnectors.push(connector);
        }
        if (storage && !store.persist.hasHydrated()) return;
        connectors.setState((x)=>[
                ...x,
                ...newConnectors
            ], true);
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Emitter listeners
    /////////////////////////////////////////////////////////////////////////////////////////////////
    function change(data) {
        store.setState((x)=>{
            const connection = x.connections.get(data.uid);
            if (!connection) return x;
            return {
                ...x,
                connections: new Map(x.connections).set(data.uid, {
                    accounts: data.accounts ?? connection.accounts,
                    chainId: data.chainId ?? connection.chainId,
                    connector: connection.connector
                })
            };
        });
    }
    function connect(data) {
        // Disable handling if reconnecting/connecting
        if (store.getState().status === 'connecting' || store.getState().status === 'reconnecting') return;
        store.setState((x)=>{
            const connector = connectors.getState().find((x)=>x.uid === data.uid);
            if (!connector) return x;
            if (connector.emitter.listenerCount('connect')) connector.emitter.off('connect', change);
            if (!connector.emitter.listenerCount('change')) connector.emitter.on('change', change);
            if (!connector.emitter.listenerCount('disconnect')) connector.emitter.on('disconnect', disconnect);
            return {
                ...x,
                connections: new Map(x.connections).set(data.uid, {
                    accounts: data.accounts,
                    chainId: data.chainId,
                    connector: connector
                }),
                current: data.uid,
                status: 'connected'
            };
        });
    }
    function disconnect(data) {
        store.setState((x)=>{
            const connection = x.connections.get(data.uid);
            if (connection) {
                const connector = connection.connector;
                if (connector.emitter.listenerCount('change')) connection.connector.emitter.off('change', change);
                if (connector.emitter.listenerCount('disconnect')) connection.connector.emitter.off('disconnect', disconnect);
                if (!connector.emitter.listenerCount('connect')) connection.connector.emitter.on('connect', connect);
            }
            x.connections.delete(data.uid);
            if (x.connections.size === 0) return {
                ...x,
                connections: new Map(),
                current: null,
                status: 'disconnected'
            };
            const nextConnection = x.connections.values().next().value;
            return {
                ...x,
                connections: new Map(x.connections),
                current: nextConnection.connector.uid
            };
        });
    }
    return {
        get chains () {
            return chains.getState();
        },
        get connectors () {
            return connectors.getState();
        },
        storage,
        getClient,
        get state () {
            return store.getState();
        },
        setState (value) {
            let newState;
            if (typeof value === 'function') newState = value(store.getState());
            else newState = value;
            // Reset state if it got set to something not matching the base state
            const initialState = getInitialState();
            if (typeof newState !== 'object') newState = initialState;
            const isCorrupt = Object.keys(initialState).some((x)=>!(x in newState));
            if (isCorrupt) newState = initialState;
            store.setState(newState, true);
        },
        subscribe (selector, listener, options) {
            return store.subscribe(selector, listener, options ? {
                ...options,
                fireImmediately: options.emitImmediately
            } : undefined);
        },
        _internal: {
            mipd,
            async revalidate () {
                // Check connections to see if they are still active
                const state = store.getState();
                const connections = state.connections;
                let current = state.current;
                for (const [, connection] of connections){
                    const connector = connection.connector;
                    // check if `connect.isAuthorized` exists
                    // partial connectors in storage do not have it
                    const isAuthorized = connector.isAuthorized ? await connector.isAuthorized() : false;
                    if (isAuthorized) continue;
                    // Remove stale connection
                    connections.delete(connector.uid);
                    if (current === connector.uid) current = null;
                }
                // set connections
                store.setState((x)=>({
                        ...x,
                        connections,
                        current
                    }));
            },
            store,
            ssr: Boolean(ssr),
            syncConnectedChain,
            transports: rest.transports,
            chains: {
                setState (value) {
                    const nextChains = typeof value === 'function' ? value(chains.getState()) : value;
                    if (nextChains.length === 0) return;
                    return chains.setState(nextChains, true);
                },
                subscribe (listener) {
                    return chains.subscribe(listener);
                }
            },
            connectors: {
                providerDetailToConnector,
                setup: setup,
                setState (value) {
                    return connectors.setState(typeof value === 'function' ? value(connectors.getState()) : value, true);
                },
                subscribe (listener) {
                    return connectors.subscribe(listener);
                }
            },
            events: {
                change,
                connect,
                disconnect
            }
        }
    };
} //# sourceMappingURL=createConfig.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@wagmi/core/dist/esm/utils/extractRpcUrls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractRpcUrls",
    ()=>extractRpcUrls
]);
function extractRpcUrls(parameters) {
    const { chain } = parameters;
    const fallbackUrl = chain.rpcUrls.default.http[0];
    if (!parameters.transports) return [
        fallbackUrl
    ];
    const transport = parameters.transports?.[chain.id]?.({
        chain
    });
    const transports = transport?.value?.transports || [
        transport
    ];
    return transports.map(({ value })=>value?.url || fallbackUrl);
} //# sourceMappingURL=extractRpcUrls.js.map
}),
]);

//# sourceMappingURL=ee741_%40wagmi_core_dist_esm_9fd32ea1._.js.map