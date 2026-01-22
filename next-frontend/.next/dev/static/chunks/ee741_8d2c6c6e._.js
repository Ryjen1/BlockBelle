(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/version.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSDKVersion = void 0;
const getSDKVersion = ()=>'9.1.0';
exports.getSDKVersion = getSDKVersion; //# sourceMappingURL=version.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateRequestId = void 0;
// i.e. 0-255 -> '00'-'ff'
const dec2hex = (dec)=>dec.toString(16).padStart(2, '0');
const generateId = (len)=>{
    const arr = new Uint8Array((len || 40) / 2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, dec2hex).join('');
};
const generateRequestId = ()=>{
    if (typeof window !== 'undefined') {
        return generateId(10);
    }
    return new Date().getTime().toString(36);
};
exports.generateRequestId = generateRequestId; //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/messageFormatter.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageFormatter = void 0;
const version_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/version.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/utils.js [app-client] (ecmascript)");
class MessageFormatter {
}
exports.MessageFormatter = MessageFormatter;
MessageFormatter.makeRequest = (method, params)=>{
    const id = (0, utils_js_1.generateRequestId)();
    return {
        id,
        method,
        params,
        env: {
            sdkVersion: (0, version_js_1.getSDKVersion)()
        }
    };
};
MessageFormatter.makeResponse = (id, data, version)=>({
        id,
        success: true,
        version,
        data
    });
MessageFormatter.makeErrorResponse = (id, error, version)=>({
        id,
        success: false,
        error,
        version
    }); //# sourceMappingURL=messageFormatter.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/methods.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RestrictedMethods = exports.Methods = void 0;
var Methods;
(function(Methods) {
    Methods["sendTransactions"] = "sendTransactions";
    Methods["rpcCall"] = "rpcCall";
    Methods["getChainInfo"] = "getChainInfo";
    Methods["getSafeInfo"] = "getSafeInfo";
    Methods["getTxBySafeTxHash"] = "getTxBySafeTxHash";
    Methods["getSafeBalances"] = "getSafeBalances";
    Methods["signMessage"] = "signMessage";
    Methods["signTypedMessage"] = "signTypedMessage";
    Methods["getEnvironmentInfo"] = "getEnvironmentInfo";
    Methods["getOffChainSignature"] = "getOffChainSignature";
    Methods["requestAddressBook"] = "requestAddressBook";
    Methods["wallet_getPermissions"] = "wallet_getPermissions";
    Methods["wallet_requestPermissions"] = "wallet_requestPermissions";
})(Methods || (exports.Methods = Methods = {}));
var RestrictedMethods;
(function(RestrictedMethods) {
    RestrictedMethods["requestAddressBook"] = "requestAddressBook";
})(RestrictedMethods || (exports.RestrictedMethods = RestrictedMethods = {})); //# sourceMappingURL=methods.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const messageFormatter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/messageFormatter.js [app-client] (ecmascript)");
class PostMessageCommunicator {
    constructor(allowedOrigins = null, debugMode = false){
        this.allowedOrigins = null;
        this.callbacks = new Map();
        this.debugMode = false;
        this.isServer = typeof window === 'undefined';
        this.isValidMessage = ({ origin, data, source })=>{
            const emptyOrMalformed = !data;
            const sentFromParentEl = !this.isServer && source === window.parent;
            const majorVersionNumber = typeof data.version !== 'undefined' && parseInt(data.version.split('.')[0]);
            const allowedSDKVersion = typeof majorVersionNumber === 'number' && majorVersionNumber >= 1;
            let validOrigin = true;
            if (Array.isArray(this.allowedOrigins)) {
                validOrigin = this.allowedOrigins.find((regExp)=>regExp.test(origin)) !== undefined;
            }
            return !emptyOrMalformed && sentFromParentEl && allowedSDKVersion && validOrigin;
        };
        this.logIncomingMessage = (msg)=>{
            console.info(`Safe Apps SDK v1: A message was received from origin ${msg.origin}. `, msg.data);
        };
        this.onParentMessage = (msg)=>{
            if (this.isValidMessage(msg)) {
                this.debugMode && this.logIncomingMessage(msg);
                this.handleIncomingMessage(msg.data);
            }
        };
        this.handleIncomingMessage = (payload)=>{
            const { id } = payload;
            const cb = this.callbacks.get(id);
            if (cb) {
                cb(payload);
                this.callbacks.delete(id);
            }
        };
        this.send = (method, params)=>{
            const request = messageFormatter_js_1.MessageFormatter.makeRequest(method, params);
            if (this.isServer) {
                throw new Error("Window doesn't exist");
            }
            window.parent.postMessage(request, '*');
            return new Promise((resolve, reject)=>{
                this.callbacks.set(request.id, (response)=>{
                    if (!response.success) {
                        reject(new Error(response.error));
                        return;
                    }
                    resolve(response);
                });
            });
        };
        this.allowedOrigins = allowedOrigins;
        this.debugMode = debugMode;
        if (!this.isServer) {
            window.addEventListener('message', this.onParentMessage);
        }
    }
}
exports.default = PostMessageCommunicator;
__exportStar(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/methods.js [app-client] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/sdk.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isObjectEIP712TypedData = void 0;
const isObjectEIP712TypedData = (obj)=>{
    return typeof obj === 'object' && obj != null && 'domain' in obj && 'types' in obj && 'message' in obj;
};
exports.isObjectEIP712TypedData = isObjectEIP712TypedData; //# sourceMappingURL=sdk.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/rpc.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=rpc.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/gateway.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TransferDirection = exports.TransactionStatus = exports.TokenType = exports.Operation = void 0;
var safe_gateway_typescript_sdk_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/index.js [app-client] (ecmascript)");
Object.defineProperty(exports, "Operation", {
    enumerable: true,
    get: function() {
        return safe_gateway_typescript_sdk_1.Operation;
    }
});
Object.defineProperty(exports, "TokenType", {
    enumerable: true,
    get: function() {
        return safe_gateway_typescript_sdk_1.TokenType;
    }
});
Object.defineProperty(exports, "TransactionStatus", {
    enumerable: true,
    get: function() {
        return safe_gateway_typescript_sdk_1.TransactionStatus;
    }
});
Object.defineProperty(exports, "TransferDirection", {
    enumerable: true,
    get: function() {
        return safe_gateway_typescript_sdk_1.TransferDirection;
    }
}); //# sourceMappingURL=gateway.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/messaging.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const methods_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/methods.js [app-client] (ecmascript)"); //# sourceMappingURL=messaging.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/sdk.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/rpc.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/gateway.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/messaging.js [app-client] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/txs/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TXs = void 0;
const methods_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/methods.js [app-client] (ecmascript)");
const index_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/index.js [app-client] (ecmascript)");
class TXs {
    constructor(communicator){
        this.communicator = communicator;
    }
    async getBySafeTxHash(safeTxHash) {
        if (!safeTxHash) {
            throw new Error('Invalid safeTxHash');
        }
        const response = await this.communicator.send(methods_js_1.Methods.getTxBySafeTxHash, {
            safeTxHash
        });
        return response.data;
    }
    async signMessage(message) {
        const messagePayload = {
            message
        };
        const response = await this.communicator.send(methods_js_1.Methods.signMessage, messagePayload);
        return response.data;
    }
    async signTypedMessage(typedData) {
        if (!(0, index_js_1.isObjectEIP712TypedData)(typedData)) {
            throw new Error('Invalid typed data');
        }
        const response = await this.communicator.send(methods_js_1.Methods.signTypedMessage, {
            typedData
        });
        return response.data;
    }
    async send({ txs, params }) {
        if (!txs || !txs.length) {
            throw new Error('No transactions were passed');
        }
        const messagePayload = {
            txs,
            params
        };
        const response = await this.communicator.send(methods_js_1.Methods.sendTransactions, messagePayload);
        return response.data;
    }
}
exports.TXs = TXs; //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/eth/constants.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RPC_CALLS = void 0;
exports.RPC_CALLS = {
    eth_call: 'eth_call',
    eth_gasPrice: 'eth_gasPrice',
    eth_getLogs: 'eth_getLogs',
    eth_getBalance: 'eth_getBalance',
    eth_getCode: 'eth_getCode',
    eth_getBlockByHash: 'eth_getBlockByHash',
    eth_getBlockByNumber: 'eth_getBlockByNumber',
    eth_getStorageAt: 'eth_getStorageAt',
    eth_getTransactionByHash: 'eth_getTransactionByHash',
    eth_getTransactionReceipt: 'eth_getTransactionReceipt',
    eth_getTransactionCount: 'eth_getTransactionCount',
    eth_estimateGas: 'eth_estimateGas',
    safe_setSettings: 'safe_setSettings'
}; //# sourceMappingURL=constants.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/eth/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Eth = void 0;
const constants_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/eth/constants.js [app-client] (ecmascript)");
const methods_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/methods.js [app-client] (ecmascript)");
const inputFormatters = {
    defaultBlockParam: (arg = 'latest')=>arg,
    returnFullTxObjectParam: (arg = false)=>arg,
    blockNumberToHex: (arg)=>Number.isInteger(arg) ? `0x${arg.toString(16)}` : arg
};
class Eth {
    constructor(communicator){
        this.communicator = communicator;
        this.call = this.buildRequest({
            call: constants_js_1.RPC_CALLS.eth_call,
            formatters: [
                null,
                inputFormatters.defaultBlockParam
            ]
        });
        this.getBalance = this.buildRequest({
            call: constants_js_1.RPC_CALLS.eth_getBalance,
            formatters: [
                null,
                inputFormatters.defaultBlockParam
            ]
        });
        this.getCode = this.buildRequest({
            call: constants_js_1.RPC_CALLS.eth_getCode,
            formatters: [
                null,
                inputFormatters.defaultBlockParam
            ]
        });
        this.getStorageAt = this.buildRequest({
            call: constants_js_1.RPC_CALLS.eth_getStorageAt,
            formatters: [
                null,
                inputFormatters.blockNumberToHex,
                inputFormatters.defaultBlockParam
            ]
        });
        this.getPastLogs = this.buildRequest({
            call: constants_js_1.RPC_CALLS.eth_getLogs
        });
        this.getBlockByHash = this.buildRequest({
            call: constants_js_1.RPC_CALLS.eth_getBlockByHash,
            formatters: [
                null,
                inputFormatters.returnFullTxObjectParam
            ]
        });
        this.getBlockByNumber = this.buildRequest({
            call: constants_js_1.RPC_CALLS.eth_getBlockByNumber,
            formatters: [
                inputFormatters.blockNumberToHex,
                inputFormatters.returnFullTxObjectParam
            ]
        });
        this.getTransactionByHash = this.buildRequest({
            call: constants_js_1.RPC_CALLS.eth_getTransactionByHash
        });
        this.getTransactionReceipt = this.buildRequest({
            call: constants_js_1.RPC_CALLS.eth_getTransactionReceipt
        });
        this.getTransactionCount = this.buildRequest({
            call: constants_js_1.RPC_CALLS.eth_getTransactionCount,
            formatters: [
                null,
                inputFormatters.defaultBlockParam
            ]
        });
        this.getGasPrice = this.buildRequest({
            call: constants_js_1.RPC_CALLS.eth_gasPrice
        });
        this.getEstimateGas = (transaction)=>this.buildRequest({
                call: constants_js_1.RPC_CALLS.eth_estimateGas
            })([
                transaction
            ]);
        this.setSafeSettings = this.buildRequest({
            call: constants_js_1.RPC_CALLS.safe_setSettings
        });
    }
    buildRequest(args) {
        const { call, formatters } = args;
        return async (params)=>{
            if (formatters && Array.isArray(params)) {
                formatters.forEach((formatter, i)=>{
                    if (formatter) {
                        params[i] = formatter(params[i]);
                    }
                });
            }
            const payload = {
                call,
                params: params || []
            };
            const response = await this.communicator.send(methods_js_1.Methods.rpcCall, payload);
            return response.data;
        };
    }
}
exports.Eth = Eth; //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/safe/signatures.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MAGIC_VALUE_BYTES = exports.MAGIC_VALUE = void 0;
const MAGIC_VALUE = '0x1626ba7e';
exports.MAGIC_VALUE = MAGIC_VALUE;
const MAGIC_VALUE_BYTES = '0x20c13b0b';
exports.MAGIC_VALUE_BYTES = MAGIC_VALUE_BYTES; //# sourceMappingURL=signatures.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/permissions.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PermissionsError = exports.PERMISSIONS_REQUEST_REJECTED = void 0;
exports.PERMISSIONS_REQUEST_REJECTED = 4001;
class PermissionsError extends Error {
    constructor(message, code, data){
        super(message);
        this.code = code;
        this.data = data;
        // Should adjust prototype manually because how TS handles the type extension compilation
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, PermissionsError.prototype);
    }
}
exports.PermissionsError = PermissionsError; //# sourceMappingURL=permissions.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/wallet/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Wallet = void 0;
const methods_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/methods.js [app-client] (ecmascript)");
const permissions_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/permissions.js [app-client] (ecmascript)");
class Wallet {
    constructor(communicator){
        this.communicator = communicator;
    }
    async getPermissions() {
        const response = await this.communicator.send(methods_js_1.Methods.wallet_getPermissions, undefined);
        return response.data;
    }
    async requestPermissions(permissions) {
        if (!this.isPermissionRequestValid(permissions)) {
            throw new permissions_js_1.PermissionsError('Permissions request is invalid', permissions_js_1.PERMISSIONS_REQUEST_REJECTED);
        }
        try {
            const response = await this.communicator.send(methods_js_1.Methods.wallet_requestPermissions, permissions);
            return response.data;
        } catch  {
            throw new permissions_js_1.PermissionsError('Permissions rejected', permissions_js_1.PERMISSIONS_REQUEST_REJECTED);
        }
    }
    isPermissionRequestValid(permissions) {
        return permissions.every((pr)=>{
            if (typeof pr === 'object') {
                return Object.keys(pr).every((method)=>{
                    if (Object.values(methods_js_1.RestrictedMethods).includes(method)) {
                        return true;
                    }
                    return false;
                });
            }
            return false;
        });
    }
}
exports.Wallet = Wallet; //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/decorators/requirePermissions.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const index_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/wallet/index.js [app-client] (ecmascript)");
const permissions_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/permissions.js [app-client] (ecmascript)");
const hasPermission = (required, permissions)=>permissions.some((permission)=>permission.parentCapability === required);
const requirePermission = ()=>(_, propertyKey, descriptor)=>{
        const originalMethod = descriptor.value;
        descriptor.value = async function() {
            // @ts-expect-error accessing private property from decorator. 'this' context is the class instance
            const wallet = new index_js_1.Wallet(this.communicator);
            let currentPermissions = await wallet.getPermissions();
            if (!hasPermission(propertyKey, currentPermissions)) {
                currentPermissions = await wallet.requestPermissions([
                    {
                        [propertyKey]: {}
                    }
                ]);
            }
            if (!hasPermission(propertyKey, currentPermissions)) {
                throw new permissions_js_1.PermissionsError('Permissions rejected', permissions_js_1.PERMISSIONS_REQUEST_REJECTED);
            }
            return originalMethod.apply(this);
        };
        return descriptor;
    };
exports.default = requirePermission; //# sourceMappingURL=requirePermissions.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/safe/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __decorate = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Safe = void 0;
const viem_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/index.js [app-client] (ecmascript)");
const signatures_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/safe/signatures.js [app-client] (ecmascript)");
const methods_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/methods.js [app-client] (ecmascript)");
const constants_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/eth/constants.js [app-client] (ecmascript)");
const index_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/index.js [app-client] (ecmascript)");
const requirePermissions_js_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/decorators/requirePermissions.js [app-client] (ecmascript)"));
class Safe {
    constructor(communicator){
        this.communicator = communicator;
    }
    async getChainInfo() {
        const response = await this.communicator.send(methods_js_1.Methods.getChainInfo, undefined);
        return response.data;
    }
    async getInfo() {
        const response = await this.communicator.send(methods_js_1.Methods.getSafeInfo, undefined);
        return response.data;
    }
    // There is a possibility that this method will change because we may add pagination to the endpoint
    async experimental_getBalances({ currency = 'usd' } = {}) {
        const response = await this.communicator.send(methods_js_1.Methods.getSafeBalances, {
            currency
        });
        return response.data;
    }
    async check1271Signature(messageHash, signature = '0x') {
        const safeInfo = await this.getInfo();
        const encodedIsValidSignatureCall = (0, viem_1.encodeFunctionData)({
            abi: [
                {
                    constant: false,
                    inputs: [
                        {
                            name: '_dataHash',
                            type: 'bytes32'
                        },
                        {
                            name: '_signature',
                            type: 'bytes'
                        }
                    ],
                    name: 'isValidSignature',
                    outputs: [
                        {
                            name: '',
                            type: 'bytes4'
                        }
                    ],
                    payable: false,
                    stateMutability: 'nonpayable',
                    type: 'function'
                }
            ],
            functionName: 'isValidSignature',
            args: [
                messageHash,
                signature
            ]
        });
        const payload = {
            call: constants_js_1.RPC_CALLS.eth_call,
            params: [
                {
                    to: safeInfo.safeAddress,
                    data: encodedIsValidSignatureCall
                },
                'latest'
            ]
        };
        try {
            const response = await this.communicator.send(methods_js_1.Methods.rpcCall, payload);
            return response.data.slice(0, 10).toLowerCase() === signatures_js_1.MAGIC_VALUE;
        } catch (err) {
            return false;
        }
    }
    async check1271SignatureBytes(messageHash, signature = '0x') {
        const safeInfo = await this.getInfo();
        const encodedIsValidSignatureCall = (0, viem_1.encodeFunctionData)({
            abi: [
                {
                    constant: false,
                    inputs: [
                        {
                            name: '_data',
                            type: 'bytes'
                        },
                        {
                            name: '_signature',
                            type: 'bytes'
                        }
                    ],
                    name: 'isValidSignature',
                    outputs: [
                        {
                            name: '',
                            type: 'bytes4'
                        }
                    ],
                    payable: false,
                    stateMutability: 'nonpayable',
                    type: 'function'
                }
            ],
            functionName: 'isValidSignature',
            args: [
                messageHash,
                signature
            ]
        });
        const payload = {
            call: constants_js_1.RPC_CALLS.eth_call,
            params: [
                {
                    to: safeInfo.safeAddress,
                    data: encodedIsValidSignatureCall
                },
                'latest'
            ]
        };
        try {
            const response = await this.communicator.send(methods_js_1.Methods.rpcCall, payload);
            return response.data.slice(0, 10).toLowerCase() === signatures_js_1.MAGIC_VALUE_BYTES;
        } catch (err) {
            return false;
        }
    }
    calculateMessageHash(message) {
        return (0, viem_1.hashMessage)(message);
    }
    calculateTypedMessageHash(typedMessage) {
        const chainId = typeof typedMessage.domain.chainId === 'object' ? typedMessage.domain.chainId.toNumber() : Number(typedMessage.domain.chainId);
        let primaryType = typedMessage.primaryType;
        if (!primaryType) {
            const fields = Object.values(typedMessage.types);
            // We try to infer primaryType (simplified ether's version)
            const primaryTypes = Object.keys(typedMessage.types).filter((typeName)=>fields.every((dataTypes)=>dataTypes.every(({ type })=>type.replace('[', '').replace(']', '') !== typeName)));
            if (primaryTypes.length === 0 || primaryTypes.length > 1) throw new Error('Please specify primaryType');
            primaryType = primaryTypes[0];
        }
        return (0, viem_1.hashTypedData)({
            message: typedMessage.message,
            domain: {
                ...typedMessage.domain,
                chainId,
                verifyingContract: typedMessage.domain.verifyingContract,
                salt: typedMessage.domain.salt
            },
            types: typedMessage.types,
            primaryType
        });
    }
    async getOffChainSignature(messageHash) {
        const response = await this.communicator.send(methods_js_1.Methods.getOffChainSignature, messageHash);
        return response.data;
    }
    async isMessageSigned(message, signature = '0x') {
        let check;
        if (typeof message === 'string') {
            check = async ()=>{
                const messageHash = this.calculateMessageHash(message);
                const messageHashSigned = await this.isMessageHashSigned(messageHash, signature);
                return messageHashSigned;
            };
        }
        if ((0, index_js_1.isObjectEIP712TypedData)(message)) {
            check = async ()=>{
                const messageHash = this.calculateTypedMessageHash(message);
                const messageHashSigned = await this.isMessageHashSigned(messageHash, signature);
                return messageHashSigned;
            };
        }
        if (check) {
            const isValid = await check();
            return isValid;
        }
        throw new Error('Invalid message type');
    }
    async isMessageHashSigned(messageHash, signature = '0x') {
        const checks = [
            this.check1271Signature.bind(this),
            this.check1271SignatureBytes.bind(this)
        ];
        for (const check of checks){
            const isValid = await check(messageHash, signature);
            if (isValid) {
                return true;
            }
        }
        return false;
    }
    async getEnvironmentInfo() {
        const response = await this.communicator.send(methods_js_1.Methods.getEnvironmentInfo, undefined);
        return response.data;
    }
    async requestAddressBook() {
        const response = await this.communicator.send(methods_js_1.Methods.requestAddressBook, undefined);
        return response.data;
    }
}
exports.Safe = Safe;
__decorate([
    (0, requirePermissions_js_1.default)()
], Safe.prototype, "requestAddressBook", null); //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/sdk.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const index_js_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/index.js [app-client] (ecmascript)"));
const index_js_2 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/txs/index.js [app-client] (ecmascript)");
const index_js_3 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/eth/index.js [app-client] (ecmascript)");
const index_js_4 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/safe/index.js [app-client] (ecmascript)");
const index_js_5 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/wallet/index.js [app-client] (ecmascript)");
class SafeAppsSDK {
    constructor(opts = {}){
        const { allowedDomains = null, debug = false } = opts;
        this.communicator = new index_js_1.default(allowedDomains, debug);
        this.eth = new index_js_3.Eth(this.communicator);
        this.txs = new index_js_2.TXs(this.communicator);
        this.safe = new index_js_4.Safe(this.communicator);
        this.wallet = new index_js_5.Wallet(this.communicator);
    }
}
exports.default = SafeAppsSDK; //# sourceMappingURL=sdk.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSDKVersion = void 0;
const sdk_js_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/sdk.js [app-client] (ecmascript)"));
exports.default = sdk_js_1.default;
__exportStar(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/sdk.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/index.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/methods.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/messageFormatter.js [app-client] (ecmascript)"), exports);
var version_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/version.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getSDKVersion", {
    enumerable: true,
    get: function() {
        return version_js_1.getSDKVersion;
    }
});
__exportStar(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/eth/constants.js [app-client] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __awaiter = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.insertParams = insertParams;
exports.stringifyQuery = stringifyQuery;
exports.fetchData = fetchData;
exports.getData = getData;
const isErrorResponse = (data)=>{
    const isObject = typeof data === 'object' && data !== null;
    return isObject && ('code' in data || 'statusCode' in data) && 'message' in data;
};
function replaceParam(str, key, value) {
    return str.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
}
function insertParams(template, params) {
    return params ? Object.keys(params).reduce((result, key)=>{
        return replaceParam(result, key, String(params[key]));
    }, template) : template;
}
function stringifyQuery(query) {
    if (!query) {
        return '';
    }
    const searchParams = new URLSearchParams();
    Object.keys(query).forEach((key)=>{
        if (query[key] != null) {
            searchParams.append(key, String(query[key]));
        }
    });
    const searchString = searchParams.toString();
    return searchString ? `?${searchString}` : '';
}
function parseResponse(resp) {
    return __awaiter(this, void 0, void 0, function*() {
        var _a;
        let json;
        try {
            json = yield resp.json();
        } catch (_b) {
            json = {};
        }
        if (!resp.ok) {
            const errTxt = isErrorResponse(json) ? `CGW error - ${(_a = json.code) !== null && _a !== void 0 ? _a : json.statusCode}: ${json.message}` : `CGW error - status ${resp.statusText}`;
            throw new Error(errTxt);
        }
        return json;
    });
}
function fetchData(url, method, body, headers, credentials) {
    return __awaiter(this, void 0, void 0, function*() {
        const requestHeaders = Object.assign({
            'Content-Type': 'application/json'
        }, headers);
        const options = {
            method: method !== null && method !== void 0 ? method : 'POST',
            headers: requestHeaders
        };
        if (credentials) {
            options['credentials'] = credentials;
        }
        if (body != null) {
            options.body = typeof body === 'string' ? body : JSON.stringify(body);
        }
        const resp = yield fetch(url, options);
        return parseResponse(resp);
    });
}
function getData(url, headers, credentials) {
    return __awaiter(this, void 0, void 0, function*() {
        const options = {
            method: 'GET'
        };
        if (headers) {
            options['headers'] = Object.assign(Object.assign({}, headers), {
                'Content-Type': 'application/json'
            });
        }
        if (credentials) {
            options['credentials'] = credentials;
        }
        const resp = yield fetch(url, options);
        return parseResponse(resp);
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/endpoint.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.postEndpoint = postEndpoint;
exports.putEndpoint = putEndpoint;
exports.deleteEndpoint = deleteEndpoint;
exports.getEndpoint = getEndpoint;
const utils_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/utils.js [app-client] (ecmascript)");
function makeUrl(baseUrl, path, pathParams, query) {
    const pathname = (0, utils_1.insertParams)(path, pathParams);
    const search = (0, utils_1.stringifyQuery)(query);
    return `${baseUrl}${pathname}${search}`;
}
function postEndpoint(baseUrl, path, params) {
    const url = makeUrl(baseUrl, path, params === null || params === void 0 ? void 0 : params.path, params === null || params === void 0 ? void 0 : params.query);
    return (0, utils_1.fetchData)(url, 'POST', params === null || params === void 0 ? void 0 : params.body, params === null || params === void 0 ? void 0 : params.headers, params === null || params === void 0 ? void 0 : params.credentials);
}
function putEndpoint(baseUrl, path, params) {
    const url = makeUrl(baseUrl, path, params === null || params === void 0 ? void 0 : params.path, params === null || params === void 0 ? void 0 : params.query);
    return (0, utils_1.fetchData)(url, 'PUT', params === null || params === void 0 ? void 0 : params.body, params === null || params === void 0 ? void 0 : params.headers, params === null || params === void 0 ? void 0 : params.credentials);
}
function deleteEndpoint(baseUrl, path, params) {
    const url = makeUrl(baseUrl, path, params === null || params === void 0 ? void 0 : params.path, params === null || params === void 0 ? void 0 : params.query);
    return (0, utils_1.fetchData)(url, 'DELETE', params === null || params === void 0 ? void 0 : params.body, params === null || params === void 0 ? void 0 : params.headers, params === null || params === void 0 ? void 0 : params.credentials);
}
function getEndpoint(baseUrl, path, params, rawUrl) {
    if (rawUrl) {
        return (0, utils_1.getData)(rawUrl, undefined, params === null || params === void 0 ? void 0 : params.credentials);
    }
    const url = makeUrl(baseUrl, path, params === null || params === void 0 ? void 0 : params.path, params === null || params === void 0 ? void 0 : params.query);
    return (0, utils_1.getData)(url, params === null || params === void 0 ? void 0 : params.headers, params === null || params === void 0 ? void 0 : params.credentials);
} //# sourceMappingURL=endpoint.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/config.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULT_BASE_URL = void 0;
exports.DEFAULT_BASE_URL = 'https://safe-client.safe.global'; //# sourceMappingURL=config.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/safe-info.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImplementationVersionState = void 0;
var ImplementationVersionState;
(function(ImplementationVersionState) {
    ImplementationVersionState["UP_TO_DATE"] = "UP_TO_DATE";
    ImplementationVersionState["OUTDATED"] = "OUTDATED";
    ImplementationVersionState["UNKNOWN"] = "UNKNOWN";
})(ImplementationVersionState || (exports.ImplementationVersionState = ImplementationVersionState = {})); //# sourceMappingURL=safe-info.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/safe-apps.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SafeAppSocialPlatforms = exports.SafeAppFeatures = exports.SafeAppAccessPolicyTypes = void 0;
var SafeAppAccessPolicyTypes;
(function(SafeAppAccessPolicyTypes) {
    SafeAppAccessPolicyTypes["NoRestrictions"] = "NO_RESTRICTIONS";
    SafeAppAccessPolicyTypes["DomainAllowlist"] = "DOMAIN_ALLOWLIST";
})(SafeAppAccessPolicyTypes || (exports.SafeAppAccessPolicyTypes = SafeAppAccessPolicyTypes = {}));
var SafeAppFeatures;
(function(SafeAppFeatures) {
    SafeAppFeatures["BATCHED_TRANSACTIONS"] = "BATCHED_TRANSACTIONS";
})(SafeAppFeatures || (exports.SafeAppFeatures = SafeAppFeatures = {}));
var SafeAppSocialPlatforms;
(function(SafeAppSocialPlatforms) {
    SafeAppSocialPlatforms["TWITTER"] = "TWITTER";
    SafeAppSocialPlatforms["GITHUB"] = "GITHUB";
    SafeAppSocialPlatforms["DISCORD"] = "DISCORD";
    SafeAppSocialPlatforms["TELEGRAM"] = "TELEGRAM";
})(SafeAppSocialPlatforms || (exports.SafeAppSocialPlatforms = SafeAppSocialPlatforms = {})); //# sourceMappingURL=safe-apps.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/transactions.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LabelValue = exports.StartTimeValue = exports.DurationType = exports.DetailedExecutionInfoType = exports.TransactionListItemType = exports.ConflictType = exports.TransactionInfoType = exports.SettingsInfoType = exports.TransactionTokenType = exports.TransferDirection = exports.TransactionStatus = exports.Operation = void 0;
var Operation;
(function(Operation) {
    Operation[Operation["CALL"] = 0] = "CALL";
    Operation[Operation["DELEGATE"] = 1] = "DELEGATE";
})(Operation || (exports.Operation = Operation = {}));
var TransactionStatus;
(function(TransactionStatus) {
    TransactionStatus["AWAITING_CONFIRMATIONS"] = "AWAITING_CONFIRMATIONS";
    TransactionStatus["AWAITING_EXECUTION"] = "AWAITING_EXECUTION";
    TransactionStatus["CANCELLED"] = "CANCELLED";
    TransactionStatus["FAILED"] = "FAILED";
    TransactionStatus["SUCCESS"] = "SUCCESS";
})(TransactionStatus || (exports.TransactionStatus = TransactionStatus = {}));
var TransferDirection;
(function(TransferDirection) {
    TransferDirection["INCOMING"] = "INCOMING";
    TransferDirection["OUTGOING"] = "OUTGOING";
    TransferDirection["UNKNOWN"] = "UNKNOWN";
})(TransferDirection || (exports.TransferDirection = TransferDirection = {}));
var TransactionTokenType;
(function(TransactionTokenType) {
    TransactionTokenType["ERC20"] = "ERC20";
    TransactionTokenType["ERC721"] = "ERC721";
    TransactionTokenType["NATIVE_COIN"] = "NATIVE_COIN";
})(TransactionTokenType || (exports.TransactionTokenType = TransactionTokenType = {}));
var SettingsInfoType;
(function(SettingsInfoType) {
    SettingsInfoType["SET_FALLBACK_HANDLER"] = "SET_FALLBACK_HANDLER";
    SettingsInfoType["ADD_OWNER"] = "ADD_OWNER";
    SettingsInfoType["REMOVE_OWNER"] = "REMOVE_OWNER";
    SettingsInfoType["SWAP_OWNER"] = "SWAP_OWNER";
    SettingsInfoType["CHANGE_THRESHOLD"] = "CHANGE_THRESHOLD";
    SettingsInfoType["CHANGE_IMPLEMENTATION"] = "CHANGE_IMPLEMENTATION";
    SettingsInfoType["ENABLE_MODULE"] = "ENABLE_MODULE";
    SettingsInfoType["DISABLE_MODULE"] = "DISABLE_MODULE";
    SettingsInfoType["SET_GUARD"] = "SET_GUARD";
    SettingsInfoType["DELETE_GUARD"] = "DELETE_GUARD";
})(SettingsInfoType || (exports.SettingsInfoType = SettingsInfoType = {}));
var TransactionInfoType;
(function(TransactionInfoType) {
    TransactionInfoType["TRANSFER"] = "Transfer";
    TransactionInfoType["SETTINGS_CHANGE"] = "SettingsChange";
    TransactionInfoType["CUSTOM"] = "Custom";
    TransactionInfoType["CREATION"] = "Creation";
    TransactionInfoType["SWAP_ORDER"] = "SwapOrder";
    TransactionInfoType["TWAP_ORDER"] = "TwapOrder";
    TransactionInfoType["SWAP_TRANSFER"] = "SwapTransfer";
    TransactionInfoType["NATIVE_STAKING_DEPOSIT"] = "NativeStakingDeposit";
    TransactionInfoType["NATIVE_STAKING_VALIDATORS_EXIT"] = "NativeStakingValidatorsExit";
    TransactionInfoType["NATIVE_STAKING_WITHDRAW"] = "NativeStakingWithdraw";
})(TransactionInfoType || (exports.TransactionInfoType = TransactionInfoType = {}));
var ConflictType;
(function(ConflictType) {
    ConflictType["NONE"] = "None";
    ConflictType["HAS_NEXT"] = "HasNext";
    ConflictType["END"] = "End";
})(ConflictType || (exports.ConflictType = ConflictType = {}));
var TransactionListItemType;
(function(TransactionListItemType) {
    TransactionListItemType["TRANSACTION"] = "TRANSACTION";
    TransactionListItemType["LABEL"] = "LABEL";
    TransactionListItemType["CONFLICT_HEADER"] = "CONFLICT_HEADER";
    TransactionListItemType["DATE_LABEL"] = "DATE_LABEL";
})(TransactionListItemType || (exports.TransactionListItemType = TransactionListItemType = {}));
var DetailedExecutionInfoType;
(function(DetailedExecutionInfoType) {
    DetailedExecutionInfoType["MULTISIG"] = "MULTISIG";
    DetailedExecutionInfoType["MODULE"] = "MODULE";
})(DetailedExecutionInfoType || (exports.DetailedExecutionInfoType = DetailedExecutionInfoType = {}));
var DurationType;
(function(DurationType) {
    DurationType["AUTO"] = "AUTO";
    DurationType["LIMIT_DURATION"] = "LIMIT_DURATION";
})(DurationType || (exports.DurationType = DurationType = {}));
var StartTimeValue;
(function(StartTimeValue) {
    StartTimeValue["AT_MINING_TIME"] = "AT_MINING_TIME";
    StartTimeValue["AT_EPOCH"] = "AT_EPOCH";
})(StartTimeValue || (exports.StartTimeValue = StartTimeValue = {}));
var LabelValue;
(function(LabelValue) {
    LabelValue["Queued"] = "Queued";
    LabelValue["Next"] = "Next";
})(LabelValue || (exports.LabelValue = LabelValue = {})); //# sourceMappingURL=transactions.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/chains.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FEATURES = exports.GAS_PRICE_TYPE = exports.RPC_AUTHENTICATION = void 0;
var RPC_AUTHENTICATION;
(function(RPC_AUTHENTICATION) {
    RPC_AUTHENTICATION["API_KEY_PATH"] = "API_KEY_PATH";
    RPC_AUTHENTICATION["NO_AUTHENTICATION"] = "NO_AUTHENTICATION";
    RPC_AUTHENTICATION["UNKNOWN"] = "UNKNOWN";
})(RPC_AUTHENTICATION || (exports.RPC_AUTHENTICATION = RPC_AUTHENTICATION = {}));
var GAS_PRICE_TYPE;
(function(GAS_PRICE_TYPE) {
    GAS_PRICE_TYPE["ORACLE"] = "ORACLE";
    GAS_PRICE_TYPE["FIXED"] = "FIXED";
    GAS_PRICE_TYPE["FIXED_1559"] = "FIXED1559";
    GAS_PRICE_TYPE["UNKNOWN"] = "UNKNOWN";
})(GAS_PRICE_TYPE || (exports.GAS_PRICE_TYPE = GAS_PRICE_TYPE = {}));
var FEATURES;
(function(FEATURES) {
    FEATURES["ERC721"] = "ERC721";
    FEATURES["SAFE_APPS"] = "SAFE_APPS";
    FEATURES["CONTRACT_INTERACTION"] = "CONTRACT_INTERACTION";
    FEATURES["DOMAIN_LOOKUP"] = "DOMAIN_LOOKUP";
    FEATURES["SPENDING_LIMIT"] = "SPENDING_LIMIT";
    FEATURES["EIP1559"] = "EIP1559";
    FEATURES["SAFE_TX_GAS_OPTIONAL"] = "SAFE_TX_GAS_OPTIONAL";
    FEATURES["TX_SIMULATION"] = "TX_SIMULATION";
    FEATURES["EIP1271"] = "EIP1271";
})(FEATURES || (exports.FEATURES = FEATURES = {})); //# sourceMappingURL=chains.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/common.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TokenType = void 0;
var TokenType;
(function(TokenType) {
    TokenType["ERC20"] = "ERC20";
    TokenType["ERC721"] = "ERC721";
    TokenType["NATIVE_TOKEN"] = "NATIVE_TOKEN";
    TokenType["UNKNOWN"] = "UNKNOWN";
})(TokenType || (exports.TokenType = TokenType = {})); //# sourceMappingURL=common.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/master-copies.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=master-copies.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/decoded-data.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NativeStakingStatus = exports.ConfirmationViewTypes = void 0;
var ConfirmationViewTypes;
(function(ConfirmationViewTypes) {
    ConfirmationViewTypes["GENERIC"] = "GENERIC";
    ConfirmationViewTypes["COW_SWAP_ORDER"] = "COW_SWAP_ORDER";
    ConfirmationViewTypes["COW_SWAP_TWAP_ORDER"] = "COW_SWAP_TWAP_ORDER";
    ConfirmationViewTypes["KILN_NATIVE_STAKING_DEPOSIT"] = "KILN_NATIVE_STAKING_DEPOSIT";
    ConfirmationViewTypes["KILN_NATIVE_STAKING_VALIDATORS_EXIT"] = "KILN_NATIVE_STAKING_VALIDATORS_EXIT";
    ConfirmationViewTypes["KILN_NATIVE_STAKING_WITHDRAW"] = "KILN_NATIVE_STAKING_WITHDRAW";
})(ConfirmationViewTypes || (exports.ConfirmationViewTypes = ConfirmationViewTypes = {}));
var NativeStakingStatus;
(function(NativeStakingStatus) {
    NativeStakingStatus["NOT_STAKED"] = "NOT_STAKED";
    NativeStakingStatus["ACTIVATING"] = "ACTIVATING";
    NativeStakingStatus["DEPOSIT_IN_PROGRESS"] = "DEPOSIT_IN_PROGRESS";
    NativeStakingStatus["ACTIVE"] = "ACTIVE";
    NativeStakingStatus["EXIT_REQUESTED"] = "EXIT_REQUESTED";
    NativeStakingStatus["EXITING"] = "EXITING";
    NativeStakingStatus["EXITED"] = "EXITED";
    NativeStakingStatus["SLASHED"] = "SLASHED";
})(NativeStakingStatus || (exports.NativeStakingStatus = NativeStakingStatus = {})); //# sourceMappingURL=decoded-data.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/safe-messages.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SafeMessageStatus = exports.SafeMessageListItemType = void 0;
var SafeMessageListItemType;
(function(SafeMessageListItemType) {
    SafeMessageListItemType["DATE_LABEL"] = "DATE_LABEL";
    SafeMessageListItemType["MESSAGE"] = "MESSAGE";
})(SafeMessageListItemType || (exports.SafeMessageListItemType = SafeMessageListItemType = {}));
var SafeMessageStatus;
(function(SafeMessageStatus) {
    SafeMessageStatus["NEEDS_CONFIRMATION"] = "NEEDS_CONFIRMATION";
    SafeMessageStatus["CONFIRMED"] = "CONFIRMED";
})(SafeMessageStatus || (exports.SafeMessageStatus = SafeMessageStatus = {})); //# sourceMappingURL=safe-messages.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/notifications.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DeviceType = void 0;
var DeviceType;
(function(DeviceType) {
    DeviceType["ANDROID"] = "ANDROID";
    DeviceType["IOS"] = "IOS";
    DeviceType["WEB"] = "WEB";
})(DeviceType || (exports.DeviceType = DeviceType = {})); //# sourceMappingURL=notifications.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/relay.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=relay.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setBaseUrl = void 0;
exports.relayTransaction = relayTransaction;
exports.getRelayCount = getRelayCount;
exports.getSafeInfo = getSafeInfo;
exports.getIncomingTransfers = getIncomingTransfers;
exports.getModuleTransactions = getModuleTransactions;
exports.getMultisigTransactions = getMultisigTransactions;
exports.getBalances = getBalances;
exports.getFiatCurrencies = getFiatCurrencies;
exports.getOwnedSafes = getOwnedSafes;
exports.getAllOwnedSafes = getAllOwnedSafes;
exports.getCollectibles = getCollectibles;
exports.getCollectiblesPage = getCollectiblesPage;
exports.getTransactionHistory = getTransactionHistory;
exports.getTransactionQueue = getTransactionQueue;
exports.getTransactionDetails = getTransactionDetails;
exports.deleteTransaction = deleteTransaction;
exports.postSafeGasEstimation = postSafeGasEstimation;
exports.getNonces = getNonces;
exports.proposeTransaction = proposeTransaction;
exports.getConfirmationView = getConfirmationView;
exports.getTxPreview = getTxPreview;
exports.getChainsConfig = getChainsConfig;
exports.getChainConfig = getChainConfig;
exports.getSafeApps = getSafeApps;
exports.getMasterCopies = getMasterCopies;
exports.getDecodedData = getDecodedData;
exports.getSafeMessages = getSafeMessages;
exports.getSafeMessage = getSafeMessage;
exports.proposeSafeMessage = proposeSafeMessage;
exports.confirmSafeMessage = confirmSafeMessage;
exports.getDelegates = getDelegates;
exports.registerDevice = registerDevice;
exports.unregisterSafe = unregisterSafe;
exports.unregisterDevice = unregisterDevice;
exports.registerEmail = registerEmail;
exports.changeEmail = changeEmail;
exports.resendEmailVerificationCode = resendEmailVerificationCode;
exports.verifyEmail = verifyEmail;
exports.getRegisteredEmail = getRegisteredEmail;
exports.deleteRegisteredEmail = deleteRegisteredEmail;
exports.registerRecoveryModule = registerRecoveryModule;
exports.unsubscribeSingle = unsubscribeSingle;
exports.unsubscribeAll = unsubscribeAll;
exports.getSafeOverviews = getSafeOverviews;
exports.getContract = getContract;
exports.getAuthNonce = getAuthNonce;
exports.verifyAuth = verifyAuth;
exports.createAccount = createAccount;
exports.getAccount = getAccount;
exports.deleteAccount = deleteAccount;
exports.getAccountDataTypes = getAccountDataTypes;
exports.getAccountDataSettings = getAccountDataSettings;
exports.putAccountDataSettings = putAccountDataSettings;
exports.getIndexingStatus = getIndexingStatus;
const endpoint_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/endpoint.js [app-client] (ecmascript)");
const config_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/config.js [app-client] (ecmascript)");
__exportStar(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/safe-info.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/safe-apps.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/transactions.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/chains.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/common.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/master-copies.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/decoded-data.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/safe-messages.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/notifications.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/relay.js [app-client] (ecmascript)"), exports);
// Can be set externally to a different CGW host
let baseUrl = config_1.DEFAULT_BASE_URL;
/**
 * Set the base CGW URL
 */ const setBaseUrl = (url)=>{
    baseUrl = url;
};
exports.setBaseUrl = setBaseUrl;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */ /**
 * Relay a transaction from a Safe
 */ function relayTransaction(chainId, body) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/chains/{chainId}/relay', {
        path: {
            chainId
        },
        body
    });
}
/**
 * Get the relay limit and number of remaining relays remaining
 */ function getRelayCount(chainId, address) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/relay/{address}', {
        path: {
            chainId,
            address
        }
    });
}
/**
 * Get basic information about a Safe. E.g. owners, modules, version etc
 */ function getSafeInfo(chainId, address) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{address}', {
        path: {
            chainId,
            address
        }
    });
}
/**
 * Get filterable list of incoming transactions
 */ function getIncomingTransfers(chainId, address, query, pageUrl) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{address}/incoming-transfers/', {
        path: {
            chainId,
            address
        },
        query
    }, pageUrl);
}
/**
 * Get filterable list of module transactions
 */ function getModuleTransactions(chainId, address, query, pageUrl) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{address}/module-transactions/', {
        path: {
            chainId,
            address
        },
        query
    }, pageUrl);
}
/**
 * Get filterable list of multisig transactions
 */ function getMultisigTransactions(chainId, address, query, pageUrl) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{address}/multisig-transactions/', {
        path: {
            chainId,
            address
        },
        query
    }, pageUrl);
}
/**
 * Get the total balance and all assets stored in a Safe
 */ function getBalances(chainId, address, currency = 'usd', query = {}) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{address}/balances/{currency}', {
        path: {
            chainId,
            address,
            currency
        },
        query
    });
}
/**
 * Get a list of supported fiat currencies (e.g. USD, EUR etc)
 */ function getFiatCurrencies() {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/balances/supported-fiat-codes');
}
/**
 * Get the addresses of all Safes belonging to an owner
 */ function getOwnedSafes(chainId, address) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/owners/{address}/safes', {
        path: {
            chainId,
            address
        }
    });
}
/**
 * Get the addresses of all Safes belonging to an owner on all chains
 */ function getAllOwnedSafes(address) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/owners/{address}/safes', {
        path: {
            address
        }
    });
}
/**
 * Get NFTs stored in a Safe
 */ function getCollectibles(chainId, address, query = {}) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{address}/collectibles', {
        path: {
            chainId,
            address
        },
        query
    });
}
/**
 * Get NFTs stored in a Safe
 */ function getCollectiblesPage(chainId, address, query = {}, pageUrl) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v2/chains/{chainId}/safes/{address}/collectibles', {
        path: {
            chainId,
            address
        },
        query
    }, pageUrl);
}
/**
 * Get a list of past Safe transactions
 */ function getTransactionHistory(chainId, address, query = {}, pageUrl) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/transactions/history', {
        path: {
            chainId,
            safe_address: address
        },
        query
    }, pageUrl);
}
/**
 * Get the list of pending transactions
 */ function getTransactionQueue(chainId, address, query = {}, pageUrl) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/transactions/queued', {
        path: {
            chainId,
            safe_address: address
        },
        query
    }, pageUrl);
}
/**
 * Get the details of an individual transaction by its id
 */ function getTransactionDetails(chainId, transactionId) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/transactions/{transactionId}', {
        path: {
            chainId,
            transactionId
        }
    });
}
/**
 * Delete a transaction by its safeTxHash
 */ function deleteTransaction(chainId, safeTxHash, signature) {
    return (0, endpoint_1.deleteEndpoint)(baseUrl, '/v1/chains/{chainId}/transactions/{safeTxHash}', {
        path: {
            chainId,
            safeTxHash
        },
        body: {
            signature
        }
    });
}
/**
 * Request a gas estimate & recommmended tx nonce for a created transaction
 */ function postSafeGasEstimation(chainId, address, body) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v2/chains/{chainId}/safes/{safe_address}/multisig-transactions/estimations', {
        path: {
            chainId,
            safe_address: address
        },
        body
    });
}
function getNonces(chainId, address) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/nonces', {
        path: {
            chainId,
            safe_address: address
        }
    });
}
/**
 * Propose a new transaction for other owners to sign/execute
 */ function proposeTransaction(chainId, address, body) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/chains/{chainId}/transactions/{safe_address}/propose', {
        path: {
            chainId,
            safe_address: address
        },
        body
    });
}
/**
 * Returns decoded data
 */ function getConfirmationView(chainId, safeAddress, operation, data, to, value) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/views/transaction-confirmation', {
        path: {
            chainId,
            safe_address: safeAddress
        },
        body: {
            operation,
            data,
            to,
            value
        }
    });
}
/**
 * Get a tx preview
 */ function getTxPreview(chainId, safeAddress, operation, data, to, value) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/chains/{chainId}/transactions/{safe_address}/preview', {
        path: {
            chainId,
            safe_address: safeAddress
        },
        body: {
            operation,
            data,
            to,
            value
        }
    });
}
/**
 * Returns all defined chain configs
 */ function getChainsConfig(query) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains', {
        query
    });
}
/**
 * Returns a chain config
 */ function getChainConfig(chainId) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}', {
        path: {
            chainId: chainId
        }
    });
}
/**
 * Returns Safe Apps List
 */ function getSafeApps(chainId, query = {}) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safe-apps', {
        path: {
            chainId: chainId
        },
        query
    });
}
/**
 * Returns list of Master Copies
 */ function getMasterCopies(chainId) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/about/master-copies', {
        path: {
            chainId: chainId
        }
    });
}
/**
 * Returns decoded data
 */ function getDecodedData(chainId, operation, encodedData, to) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/chains/{chainId}/data-decoder', {
        path: {
            chainId: chainId
        },
        body: {
            operation,
            data: encodedData,
            to
        }
    });
}
/**
 * Returns list of `SafeMessage`s
 */ function getSafeMessages(chainId, address, pageUrl) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/messages', {
        path: {
            chainId,
            safe_address: address
        },
        query: {}
    }, pageUrl);
}
/**
 * Returns a `SafeMessage`
 */ function getSafeMessage(chainId, messageHash) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/messages/{message_hash}', {
        path: {
            chainId,
            message_hash: messageHash
        }
    });
}
/**
 * Propose a new `SafeMessage` for other owners to sign
 */ function proposeSafeMessage(chainId, address, body) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/messages', {
        path: {
            chainId,
            safe_address: address
        },
        body
    });
}
/**
 * Add a confirmation to a `SafeMessage`
 */ function confirmSafeMessage(chainId, messageHash, body) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/chains/{chainId}/messages/{message_hash}/signatures', {
        path: {
            chainId,
            message_hash: messageHash
        },
        body
    });
}
/**
 * Returns a list of delegates
 */ function getDelegates(chainId, query = {}) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v2/chains/{chainId}/delegates', {
        path: {
            chainId
        },
        query
    });
}
/**
 * Registers a device/Safe for notifications
 */ function registerDevice(body) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/register/notifications', {
        body
    });
}
/**
 * Unregisters a Safe from notifications
 */ function unregisterSafe(chainId, address, uuid) {
    return (0, endpoint_1.deleteEndpoint)(baseUrl, '/v1/chains/{chainId}/notifications/devices/{uuid}/safes/{safe_address}', {
        path: {
            chainId,
            safe_address: address,
            uuid
        }
    });
}
/**
 * Unregisters a device from notifications
 */ function unregisterDevice(chainId, uuid) {
    return (0, endpoint_1.deleteEndpoint)(baseUrl, '/v1/chains/{chainId}/notifications/devices/{uuid}', {
        path: {
            chainId,
            uuid
        }
    });
}
/**
 * Registers a email address for a safe signer.
 *
 * The signer wallet has to sign a message of format: `email-register-{chainId}-{safeAddress}-{emailAddress}-{signer}-{timestamp}`
 * The signature is valid for 5 minutes.
 *
 * @param chainId
 * @param safeAddress
 * @param body Signer address and email address
 * @param headers Signature and Signature timestamp
 * @returns 200 if signature matches the data
 */ function registerEmail(chainId, safeAddress, body, headers) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/emails', {
        path: {
            chainId,
            safe_address: safeAddress
        },
        body,
        headers
    });
}
/**
 * Changes an already registered email address for a safe signer. The new email address still needs to be verified.
 *
 * The signer wallet has to sign a message of format: `email-edit-{chainId}-{safeAddress}-{emailAddress}-{signer}-{timestamp}`
 * The signature is valid for 5 minutes.
 *
 * @param chainId
 * @param safeAddress
 * @param signerAddress
 * @param body New email address
 * @param headers Signature and Signature timestamp
 * @returns 202 if signature matches the data
 */ function changeEmail(chainId, safeAddress, signerAddress, body, headers) {
    return (0, endpoint_1.putEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}', {
        path: {
            chainId,
            safe_address: safeAddress,
            signer: signerAddress
        },
        body,
        headers
    });
}
/**
 * Resends an email verification code.
 */ function resendEmailVerificationCode(chainId, safeAddress, signerAddress) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}/verify-resend', {
        path: {
            chainId,
            safe_address: safeAddress,
            signer: signerAddress
        },
        body: ''
    });
}
/**
 * Verifies a pending email address registration.
 *
 * @param chainId
 * @param safeAddress
 * @param signerAddress address who signed the email registration
 * @param body Verification code
 */ function verifyEmail(chainId, safeAddress, signerAddress, body) {
    return (0, endpoint_1.putEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}/verify', {
        path: {
            chainId,
            safe_address: safeAddress,
            signer: signerAddress
        },
        body
    });
}
/**
 * Gets the registered email address of the signer
 *
 * The signer wallet will have to sign a message of format: `email-retrieval-{chainId}-{safe}-{signer}-{timestamp}`
 * The signature is valid for 5 minutes.
 *
 * @param chainId
 * @param safeAddress
 * @param signerAddress address of the owner of the Safe
 *
 * @returns email address and verified flag
 */ function getRegisteredEmail(chainId, safeAddress, signerAddress, headers) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}', {
        path: {
            chainId,
            safe_address: safeAddress,
            signer: signerAddress
        },
        headers
    });
}
/**
 * Delete a registered email address for the signer
 *
 * The signer wallet will have to sign a message of format: `email-delete-{chainId}-{safe}-{signer}-{timestamp}`
 * The signature is valid for 5 minutes.
 *
 * @param chainId
 * @param safeAddress
 * @param signerAddress
 * @param headers
 */ function deleteRegisteredEmail(chainId, safeAddress, signerAddress, headers) {
    return (0, endpoint_1.deleteEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}', {
        path: {
            chainId,
            safe_address: safeAddress,
            signer: signerAddress
        },
        headers
    });
}
/**
 * Register a recovery module for receiving alerts
 * @param chainId
 * @param safeAddress
 * @param body - { moduleAddress: string }
 */ function registerRecoveryModule(chainId, safeAddress, body) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/recovery', {
        path: {
            chainId,
            safe_address: safeAddress
        },
        body
    });
}
/**
 * Delete email subscription for a single category
 * @param query
 */ function unsubscribeSingle(query) {
    return (0, endpoint_1.deleteEndpoint)(baseUrl, '/v1/subscriptions', {
        query
    });
}
/**
 * Delete email subscription for all categories
 * @param query
 */ function unsubscribeAll(query) {
    return (0, endpoint_1.deleteEndpoint)(baseUrl, '/v1/subscriptions/all', {
        query
    });
}
/**
 * Get Safe overviews per address
 */ function getSafeOverviews(safes, query) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/safes', {
        query: Object.assign(Object.assign({}, query), {
            safes: safes.join(',')
        })
    });
}
function getContract(chainId, contractAddress) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/contracts/{contractAddress}', {
        path: {
            chainId: chainId,
            contractAddress: contractAddress
        }
    });
}
function getAuthNonce() {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/auth/nonce', {
        credentials: 'include'
    });
}
function verifyAuth(body) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/auth/verify', {
        body,
        credentials: 'include'
    });
}
function createAccount(body) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/accounts', {
        body,
        credentials: 'include'
    });
}
function getAccount(address) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/accounts/{address}', {
        path: {
            address
        },
        credentials: 'include'
    });
}
function deleteAccount(address) {
    return (0, endpoint_1.deleteEndpoint)(baseUrl, '/v1/accounts/{address}', {
        path: {
            address
        },
        credentials: 'include'
    });
}
function getAccountDataTypes() {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/accounts/data-types');
}
function getAccountDataSettings(address) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/accounts/{address}/data-settings', {
        path: {
            address
        },
        credentials: 'include'
    });
}
function putAccountDataSettings(address, body) {
    return (0, endpoint_1.putEndpoint)(baseUrl, '/v1/accounts/{address}/data-settings', {
        path: {
            address
        },
        body,
        credentials: 'include'
    });
}
function getIndexingStatus(chainId) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/about/indexing', {
        path: {
            chainId
        }
    });
} /* eslint-enable @typescript-eslint/explicit-module-boundary-types */  //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/version.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.version = void 0;
exports.version = '1.1.0'; //# sourceMappingURL=version.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/errors.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseError = void 0;
const version_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/version.js [app-client] (ecmascript)");
class BaseError extends Error {
    constructor(shortMessage, args = {}){
        const details = args.cause instanceof BaseError ? args.cause.details : args.cause?.message ? args.cause.message : args.details;
        const docsPath = args.cause instanceof BaseError ? args.cause.docsPath || args.docsPath : args.docsPath;
        const message = [
            shortMessage || 'An error occurred.',
            '',
            ...args.metaMessages ? [
                ...args.metaMessages,
                ''
            ] : [],
            ...docsPath ? [
                `Docs: https://abitype.dev${docsPath}`
            ] : [],
            ...details ? [
                `Details: ${details}`
            ] : [],
            `Version: abitype@${version_js_1.version}`
        ].join('\n');
        super(message);
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
            value: 'AbiTypeError'
        });
        if (args.cause) this.cause = args.cause;
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.shortMessage = shortMessage;
    }
}
exports.BaseError = BaseError; //# sourceMappingURL=errors.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/narrow.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.narrow = narrow;
function narrow(value) {
    return value;
} //# sourceMappingURL=narrow.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/regex.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isTupleRegex = exports.integerRegex = exports.bytesRegex = void 0;
exports.execTyped = execTyped;
function execTyped(regex, string) {
    const match = regex.exec(string);
    return match?.groups;
}
exports.bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
exports.integerRegex = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
exports.isTupleRegex = /^\(.+?\).*?$/; //# sourceMappingURL=regex.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/formatAbiParameter.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatAbiParameter = formatAbiParameter;
const regex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/regex.js [app-client] (ecmascript)");
const tupleRegex = /^tuple(?<array>(\[(\d*)\])*)$/;
function formatAbiParameter(abiParameter) {
    let type = abiParameter.type;
    if (tupleRegex.test(abiParameter.type) && 'components' in abiParameter) {
        type = '(';
        const length = abiParameter.components.length;
        for(let i = 0; i < length; i++){
            const component = abiParameter.components[i];
            type += formatAbiParameter(component);
            if (i < length - 1) type += ', ';
        }
        const result = (0, regex_js_1.execTyped)(tupleRegex, abiParameter.type);
        type += `)${result?.array ?? ''}`;
        return formatAbiParameter({
            ...abiParameter,
            type
        });
    }
    if ('indexed' in abiParameter && abiParameter.indexed) type = `${type} indexed`;
    if (abiParameter.name) return `${type} ${abiParameter.name}`;
    return type;
} //# sourceMappingURL=formatAbiParameter.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/formatAbiParameters.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatAbiParameters = formatAbiParameters;
const formatAbiParameter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/formatAbiParameter.js [app-client] (ecmascript)");
function formatAbiParameters(abiParameters) {
    let params = '';
    const length = abiParameters.length;
    for(let i = 0; i < length; i++){
        const abiParameter = abiParameters[i];
        params += (0, formatAbiParameter_js_1.formatAbiParameter)(abiParameter);
        if (i !== length - 1) params += ', ';
    }
    return params;
} //# sourceMappingURL=formatAbiParameters.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/formatAbiItem.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatAbiItem = formatAbiItem;
const formatAbiParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/formatAbiParameters.js [app-client] (ecmascript)");
function formatAbiItem(abiItem) {
    if (abiItem.type === 'function') return `function ${abiItem.name}(${(0, formatAbiParameters_js_1.formatAbiParameters)(abiItem.inputs)})${abiItem.stateMutability && abiItem.stateMutability !== 'nonpayable' ? ` ${abiItem.stateMutability}` : ''}${abiItem.outputs?.length ? ` returns (${(0, formatAbiParameters_js_1.formatAbiParameters)(abiItem.outputs)})` : ''}`;
    if (abiItem.type === 'event') return `event ${abiItem.name}(${(0, formatAbiParameters_js_1.formatAbiParameters)(abiItem.inputs)})`;
    if (abiItem.type === 'error') return `error ${abiItem.name}(${(0, formatAbiParameters_js_1.formatAbiParameters)(abiItem.inputs)})`;
    if (abiItem.type === 'constructor') return `constructor(${(0, formatAbiParameters_js_1.formatAbiParameters)(abiItem.inputs)})${abiItem.stateMutability === 'payable' ? ' payable' : ''}`;
    if (abiItem.type === 'fallback') return `fallback() external${abiItem.stateMutability === 'payable' ? ' payable' : ''}`;
    return 'receive() external payable';
} //# sourceMappingURL=formatAbiItem.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/formatAbi.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatAbi = formatAbi;
const formatAbiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/formatAbiItem.js [app-client] (ecmascript)");
function formatAbi(abi) {
    const signatures = [];
    const length = abi.length;
    for(let i = 0; i < length; i++){
        const abiItem = abi[i];
        const signature = (0, formatAbiItem_js_1.formatAbiItem)(abiItem);
        signatures.push(signature);
    }
    return signatures;
} //# sourceMappingURL=formatAbi.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/runtime/signatures.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.functionModifiers = exports.eventModifiers = exports.modifiers = void 0;
exports.isErrorSignature = isErrorSignature;
exports.execErrorSignature = execErrorSignature;
exports.isEventSignature = isEventSignature;
exports.execEventSignature = execEventSignature;
exports.isFunctionSignature = isFunctionSignature;
exports.execFunctionSignature = execFunctionSignature;
exports.isStructSignature = isStructSignature;
exports.execStructSignature = execStructSignature;
exports.isConstructorSignature = isConstructorSignature;
exports.execConstructorSignature = execConstructorSignature;
exports.isFallbackSignature = isFallbackSignature;
exports.execFallbackSignature = execFallbackSignature;
exports.isReceiveSignature = isReceiveSignature;
const regex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/regex.js [app-client] (ecmascript)");
const errorSignatureRegex = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function isErrorSignature(signature) {
    return errorSignatureRegex.test(signature);
}
function execErrorSignature(signature) {
    return (0, regex_js_1.execTyped)(errorSignatureRegex, signature);
}
const eventSignatureRegex = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function isEventSignature(signature) {
    return eventSignatureRegex.test(signature);
}
function execEventSignature(signature) {
    return (0, regex_js_1.execTyped)(eventSignatureRegex, signature);
}
const functionSignatureRegex = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
function isFunctionSignature(signature) {
    return functionSignatureRegex.test(signature);
}
function execFunctionSignature(signature) {
    return (0, regex_js_1.execTyped)(functionSignatureRegex, signature);
}
const structSignatureRegex = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
function isStructSignature(signature) {
    return structSignatureRegex.test(signature);
}
function execStructSignature(signature) {
    return (0, regex_js_1.execTyped)(structSignatureRegex, signature);
}
const constructorSignatureRegex = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
function isConstructorSignature(signature) {
    return constructorSignatureRegex.test(signature);
}
function execConstructorSignature(signature) {
    return (0, regex_js_1.execTyped)(constructorSignatureRegex, signature);
}
const fallbackSignatureRegex = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
function isFallbackSignature(signature) {
    return fallbackSignatureRegex.test(signature);
}
function execFallbackSignature(signature) {
    return (0, regex_js_1.execTyped)(fallbackSignatureRegex, signature);
}
const receiveSignatureRegex = /^receive\(\) external payable$/;
function isReceiveSignature(signature) {
    return receiveSignatureRegex.test(signature);
}
exports.modifiers = new Set([
    'memory',
    'indexed',
    'storage',
    'calldata'
]);
exports.eventModifiers = new Set([
    'indexed'
]);
exports.functionModifiers = new Set([
    'calldata',
    'memory',
    'storage'
]); //# sourceMappingURL=signatures.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/errors/abiItem.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnknownSolidityTypeError = exports.UnknownTypeError = exports.InvalidAbiItemError = void 0;
const errors_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/errors.js [app-client] (ecmascript)");
class InvalidAbiItemError extends errors_js_1.BaseError {
    constructor({ signature }){
        super('Failed to parse ABI item.', {
            details: `parseAbiItem(${JSON.stringify(signature, null, 2)})`,
            docsPath: '/api/human#parseabiitem-1'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiItemError'
        });
    }
}
exports.InvalidAbiItemError = InvalidAbiItemError;
class UnknownTypeError extends errors_js_1.BaseError {
    constructor({ type }){
        super('Unknown type.', {
            metaMessages: [
                `Type "${type}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownTypeError'
        });
    }
}
exports.UnknownTypeError = UnknownTypeError;
class UnknownSolidityTypeError extends errors_js_1.BaseError {
    constructor({ type }){
        super('Unknown type.', {
            metaMessages: [
                `Type "${type}" is not a valid ABI type.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownSolidityTypeError'
        });
    }
}
exports.UnknownSolidityTypeError = UnknownSolidityTypeError; //# sourceMappingURL=abiItem.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/errors/abiParameter.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidAbiTypeParameterError = exports.InvalidFunctionModifierError = exports.InvalidModifierError = exports.SolidityProtectedKeywordError = exports.InvalidParameterError = exports.InvalidAbiParametersError = exports.InvalidAbiParameterError = void 0;
const errors_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/errors.js [app-client] (ecmascript)");
class InvalidAbiParameterError extends errors_js_1.BaseError {
    constructor({ param }){
        super('Failed to parse ABI parameter.', {
            details: `parseAbiParameter(${JSON.stringify(param, null, 2)})`,
            docsPath: '/api/human#parseabiparameter-1'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiParameterError'
        });
    }
}
exports.InvalidAbiParameterError = InvalidAbiParameterError;
class InvalidAbiParametersError extends errors_js_1.BaseError {
    constructor({ params }){
        super('Failed to parse ABI parameters.', {
            details: `parseAbiParameters(${JSON.stringify(params, null, 2)})`,
            docsPath: '/api/human#parseabiparameters-1'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiParametersError'
        });
    }
}
exports.InvalidAbiParametersError = InvalidAbiParametersError;
class InvalidParameterError extends errors_js_1.BaseError {
    constructor({ param }){
        super('Invalid ABI parameter.', {
            details: param
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidParameterError'
        });
    }
}
exports.InvalidParameterError = InvalidParameterError;
class SolidityProtectedKeywordError extends errors_js_1.BaseError {
    constructor({ param, name }){
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `"${name}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SolidityProtectedKeywordError'
        });
    }
}
exports.SolidityProtectedKeywordError = SolidityProtectedKeywordError;
class InvalidModifierError extends errors_js_1.BaseError {
    constructor({ param, type, modifier }){
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `Modifier "${modifier}" not allowed${type ? ` in "${type}" type` : ''}.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidModifierError'
        });
    }
}
exports.InvalidModifierError = InvalidModifierError;
class InvalidFunctionModifierError extends errors_js_1.BaseError {
    constructor({ param, type, modifier }){
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `Modifier "${modifier}" not allowed${type ? ` in "${type}" type` : ''}.`,
                `Data location can only be specified for array, struct, or mapping types, but "${modifier}" was given.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidFunctionModifierError'
        });
    }
}
exports.InvalidFunctionModifierError = InvalidFunctionModifierError;
class InvalidAbiTypeParameterError extends errors_js_1.BaseError {
    constructor({ abiParameter }){
        super('Invalid ABI parameter.', {
            details: JSON.stringify(abiParameter, null, 2),
            metaMessages: [
                'ABI parameter type is invalid.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiTypeParameterError'
        });
    }
}
exports.InvalidAbiTypeParameterError = InvalidAbiTypeParameterError; //# sourceMappingURL=abiParameter.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/errors/signature.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidStructSignatureError = exports.UnknownSignatureError = exports.InvalidSignatureError = void 0;
const errors_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/errors.js [app-client] (ecmascript)");
class InvalidSignatureError extends errors_js_1.BaseError {
    constructor({ signature, type }){
        super(`Invalid ${type} signature.`, {
            details: signature
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidSignatureError'
        });
    }
}
exports.InvalidSignatureError = InvalidSignatureError;
class UnknownSignatureError extends errors_js_1.BaseError {
    constructor({ signature }){
        super('Unknown signature.', {
            details: signature
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownSignatureError'
        });
    }
}
exports.UnknownSignatureError = UnknownSignatureError;
class InvalidStructSignatureError extends errors_js_1.BaseError {
    constructor({ signature }){
        super('Invalid struct signature.', {
            details: signature,
            metaMessages: [
                'No properties exist.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidStructSignatureError'
        });
    }
}
exports.InvalidStructSignatureError = InvalidStructSignatureError; //# sourceMappingURL=signature.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/errors/struct.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CircularReferenceError = void 0;
const errors_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/errors.js [app-client] (ecmascript)");
class CircularReferenceError extends errors_js_1.BaseError {
    constructor({ type }){
        super('Circular reference detected.', {
            metaMessages: [
                `Struct "${type}" is a circular reference.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'CircularReferenceError'
        });
    }
}
exports.CircularReferenceError = CircularReferenceError; //# sourceMappingURL=struct.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/errors/splitParameters.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidParenthesisError = void 0;
const errors_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/errors.js [app-client] (ecmascript)");
class InvalidParenthesisError extends errors_js_1.BaseError {
    constructor({ current, depth }){
        super('Unbalanced parentheses.', {
            metaMessages: [
                `"${current.trim()}" has too many ${depth > 0 ? 'opening' : 'closing'} parentheses.`
            ],
            details: `Depth "${depth}"`
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidParenthesisError'
        });
    }
}
exports.InvalidParenthesisError = InvalidParenthesisError; //# sourceMappingURL=splitParameters.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/runtime/cache.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parameterCache = void 0;
exports.getParameterCacheKey = getParameterCacheKey;
function getParameterCacheKey(param, type, structs) {
    let structKey = '';
    if (structs) for (const struct of Object.entries(structs)){
        if (!struct) continue;
        let propertyKey = '';
        for (const property of struct[1]){
            propertyKey += `[${property.type}${property.name ? `:${property.name}` : ''}]`;
        }
        structKey += `(${struct[0]}{${propertyKey}})`;
    }
    if (type) return `${type}:${param}${structKey}`;
    return param;
}
exports.parameterCache = new Map([
    [
        'address',
        {
            type: 'address'
        }
    ],
    [
        'bool',
        {
            type: 'bool'
        }
    ],
    [
        'bytes',
        {
            type: 'bytes'
        }
    ],
    [
        'bytes32',
        {
            type: 'bytes32'
        }
    ],
    [
        'int',
        {
            type: 'int256'
        }
    ],
    [
        'int256',
        {
            type: 'int256'
        }
    ],
    [
        'string',
        {
            type: 'string'
        }
    ],
    [
        'uint',
        {
            type: 'uint256'
        }
    ],
    [
        'uint8',
        {
            type: 'uint8'
        }
    ],
    [
        'uint16',
        {
            type: 'uint16'
        }
    ],
    [
        'uint24',
        {
            type: 'uint24'
        }
    ],
    [
        'uint32',
        {
            type: 'uint32'
        }
    ],
    [
        'uint64',
        {
            type: 'uint64'
        }
    ],
    [
        'uint96',
        {
            type: 'uint96'
        }
    ],
    [
        'uint112',
        {
            type: 'uint112'
        }
    ],
    [
        'uint160',
        {
            type: 'uint160'
        }
    ],
    [
        'uint192',
        {
            type: 'uint192'
        }
    ],
    [
        'uint256',
        {
            type: 'uint256'
        }
    ],
    [
        'address owner',
        {
            type: 'address',
            name: 'owner'
        }
    ],
    [
        'address to',
        {
            type: 'address',
            name: 'to'
        }
    ],
    [
        'bool approved',
        {
            type: 'bool',
            name: 'approved'
        }
    ],
    [
        'bytes _data',
        {
            type: 'bytes',
            name: '_data'
        }
    ],
    [
        'bytes data',
        {
            type: 'bytes',
            name: 'data'
        }
    ],
    [
        'bytes signature',
        {
            type: 'bytes',
            name: 'signature'
        }
    ],
    [
        'bytes32 hash',
        {
            type: 'bytes32',
            name: 'hash'
        }
    ],
    [
        'bytes32 r',
        {
            type: 'bytes32',
            name: 'r'
        }
    ],
    [
        'bytes32 root',
        {
            type: 'bytes32',
            name: 'root'
        }
    ],
    [
        'bytes32 s',
        {
            type: 'bytes32',
            name: 's'
        }
    ],
    [
        'string name',
        {
            type: 'string',
            name: 'name'
        }
    ],
    [
        'string symbol',
        {
            type: 'string',
            name: 'symbol'
        }
    ],
    [
        'string tokenURI',
        {
            type: 'string',
            name: 'tokenURI'
        }
    ],
    [
        'uint tokenId',
        {
            type: 'uint256',
            name: 'tokenId'
        }
    ],
    [
        'uint8 v',
        {
            type: 'uint8',
            name: 'v'
        }
    ],
    [
        'uint256 balance',
        {
            type: 'uint256',
            name: 'balance'
        }
    ],
    [
        'uint256 tokenId',
        {
            type: 'uint256',
            name: 'tokenId'
        }
    ],
    [
        'uint256 value',
        {
            type: 'uint256',
            name: 'value'
        }
    ],
    [
        'event:address indexed from',
        {
            type: 'address',
            name: 'from',
            indexed: true
        }
    ],
    [
        'event:address indexed to',
        {
            type: 'address',
            name: 'to',
            indexed: true
        }
    ],
    [
        'event:uint indexed tokenId',
        {
            type: 'uint256',
            name: 'tokenId',
            indexed: true
        }
    ],
    [
        'event:uint256 indexed tokenId',
        {
            type: 'uint256',
            name: 'tokenId',
            indexed: true
        }
    ]
]); //# sourceMappingURL=cache.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/runtime/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseSignature = parseSignature;
exports.parseFunctionSignature = parseFunctionSignature;
exports.parseEventSignature = parseEventSignature;
exports.parseErrorSignature = parseErrorSignature;
exports.parseConstructorSignature = parseConstructorSignature;
exports.parseFallbackSignature = parseFallbackSignature;
exports.parseAbiParameter = parseAbiParameter;
exports.splitParameters = splitParameters;
exports.isSolidityType = isSolidityType;
exports.isSolidityKeyword = isSolidityKeyword;
exports.isValidDataLocation = isValidDataLocation;
const regex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/regex.js [app-client] (ecmascript)");
const abiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/errors/abiItem.js [app-client] (ecmascript)");
const abiParameter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/errors/abiParameter.js [app-client] (ecmascript)");
const signature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/errors/signature.js [app-client] (ecmascript)");
const splitParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/errors/splitParameters.js [app-client] (ecmascript)");
const cache_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/runtime/cache.js [app-client] (ecmascript)");
const signatures_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/runtime/signatures.js [app-client] (ecmascript)");
function parseSignature(signature, structs = {}) {
    if ((0, signatures_js_1.isFunctionSignature)(signature)) return parseFunctionSignature(signature, structs);
    if ((0, signatures_js_1.isEventSignature)(signature)) return parseEventSignature(signature, structs);
    if ((0, signatures_js_1.isErrorSignature)(signature)) return parseErrorSignature(signature, structs);
    if ((0, signatures_js_1.isConstructorSignature)(signature)) return parseConstructorSignature(signature, structs);
    if ((0, signatures_js_1.isFallbackSignature)(signature)) return parseFallbackSignature(signature);
    if ((0, signatures_js_1.isReceiveSignature)(signature)) return {
        type: 'receive',
        stateMutability: 'payable'
    };
    throw new signature_js_1.UnknownSignatureError({
        signature
    });
}
function parseFunctionSignature(signature, structs = {}) {
    const match = (0, signatures_js_1.execFunctionSignature)(signature);
    if (!match) throw new signature_js_1.InvalidSignatureError({
        signature,
        type: 'function'
    });
    const inputParams = splitParameters(match.parameters);
    const inputs = [];
    const inputLength = inputParams.length;
    for(let i = 0; i < inputLength; i++){
        inputs.push(parseAbiParameter(inputParams[i], {
            modifiers: signatures_js_1.functionModifiers,
            structs,
            type: 'function'
        }));
    }
    const outputs = [];
    if (match.returns) {
        const outputParams = splitParameters(match.returns);
        const outputLength = outputParams.length;
        for(let i = 0; i < outputLength; i++){
            outputs.push(parseAbiParameter(outputParams[i], {
                modifiers: signatures_js_1.functionModifiers,
                structs,
                type: 'function'
            }));
        }
    }
    return {
        name: match.name,
        type: 'function',
        stateMutability: match.stateMutability ?? 'nonpayable',
        inputs,
        outputs
    };
}
function parseEventSignature(signature, structs = {}) {
    const match = (0, signatures_js_1.execEventSignature)(signature);
    if (!match) throw new signature_js_1.InvalidSignatureError({
        signature,
        type: 'event'
    });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
        modifiers: signatures_js_1.eventModifiers,
        structs,
        type: 'event'
    }));
    return {
        name: match.name,
        type: 'event',
        inputs: abiParameters
    };
}
function parseErrorSignature(signature, structs = {}) {
    const match = (0, signatures_js_1.execErrorSignature)(signature);
    if (!match) throw new signature_js_1.InvalidSignatureError({
        signature,
        type: 'error'
    });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
        structs,
        type: 'error'
    }));
    return {
        name: match.name,
        type: 'error',
        inputs: abiParameters
    };
}
function parseConstructorSignature(signature, structs = {}) {
    const match = (0, signatures_js_1.execConstructorSignature)(signature);
    if (!match) throw new signature_js_1.InvalidSignatureError({
        signature,
        type: 'constructor'
    });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
        structs,
        type: 'constructor'
    }));
    return {
        type: 'constructor',
        stateMutability: match.stateMutability ?? 'nonpayable',
        inputs: abiParameters
    };
}
function parseFallbackSignature(signature) {
    const match = (0, signatures_js_1.execFallbackSignature)(signature);
    if (!match) throw new signature_js_1.InvalidSignatureError({
        signature,
        type: 'fallback'
    });
    return {
        type: 'fallback',
        stateMutability: match.stateMutability ?? 'nonpayable'
    };
}
const abiParameterWithoutTupleRegex = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*(?:\spayable)?)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/;
const abiParameterWithTupleRegex = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/;
const dynamicIntegerRegex = /^u?int$/;
function parseAbiParameter(param, options) {
    const parameterCacheKey = (0, cache_js_1.getParameterCacheKey)(param, options?.type, options?.structs);
    if (cache_js_1.parameterCache.has(parameterCacheKey)) return cache_js_1.parameterCache.get(parameterCacheKey);
    const isTuple = regex_js_1.isTupleRegex.test(param);
    const match = (0, regex_js_1.execTyped)(isTuple ? abiParameterWithTupleRegex : abiParameterWithoutTupleRegex, param);
    if (!match) throw new abiParameter_js_1.InvalidParameterError({
        param
    });
    if (match.name && isSolidityKeyword(match.name)) throw new abiParameter_js_1.SolidityProtectedKeywordError({
        param,
        name: match.name
    });
    const name = match.name ? {
        name: match.name
    } : {};
    const indexed = match.modifier === 'indexed' ? {
        indexed: true
    } : {};
    const structs = options?.structs ?? {};
    let type;
    let components = {};
    if (isTuple) {
        type = 'tuple';
        const params = splitParameters(match.type);
        const components_ = [];
        const length = params.length;
        for(let i = 0; i < length; i++){
            components_.push(parseAbiParameter(params[i], {
                structs
            }));
        }
        components = {
            components: components_
        };
    } else if (match.type in structs) {
        type = 'tuple';
        components = {
            components: structs[match.type]
        };
    } else if (dynamicIntegerRegex.test(match.type)) {
        type = `${match.type}256`;
    } else if (match.type === 'address payable') {
        type = 'address';
    } else {
        type = match.type;
        if (!(options?.type === 'struct') && !isSolidityType(type)) throw new abiItem_js_1.UnknownSolidityTypeError({
            type
        });
    }
    if (match.modifier) {
        if (!options?.modifiers?.has?.(match.modifier)) throw new abiParameter_js_1.InvalidModifierError({
            param,
            type: options?.type,
            modifier: match.modifier
        });
        if (signatures_js_1.functionModifiers.has(match.modifier) && !isValidDataLocation(type, !!match.array)) throw new abiParameter_js_1.InvalidFunctionModifierError({
            param,
            type: options?.type,
            modifier: match.modifier
        });
    }
    const abiParameter = {
        type: `${type}${match.array ?? ''}`,
        ...name,
        ...indexed,
        ...components
    };
    cache_js_1.parameterCache.set(parameterCacheKey, abiParameter);
    return abiParameter;
}
function splitParameters(params, result = [], current = '', depth = 0) {
    const length = params.trim().length;
    for(let i = 0; i < length; i++){
        const char = params[i];
        const tail = params.slice(i + 1);
        switch(char){
            case ',':
                return depth === 0 ? splitParameters(tail, [
                    ...result,
                    current.trim()
                ]) : splitParameters(tail, result, `${current}${char}`, depth);
            case '(':
                return splitParameters(tail, result, `${current}${char}`, depth + 1);
            case ')':
                return splitParameters(tail, result, `${current}${char}`, depth - 1);
            default:
                return splitParameters(tail, result, `${current}${char}`, depth);
        }
    }
    if (current === '') return result;
    if (depth !== 0) throw new splitParameters_js_1.InvalidParenthesisError({
        current,
        depth
    });
    result.push(current.trim());
    return result;
}
function isSolidityType(type) {
    return type === 'address' || type === 'bool' || type === 'function' || type === 'string' || regex_js_1.bytesRegex.test(type) || regex_js_1.integerRegex.test(type);
}
const protectedKeywordsRegex = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function isSolidityKeyword(name) {
    return name === 'address' || name === 'bool' || name === 'function' || name === 'string' || name === 'tuple' || regex_js_1.bytesRegex.test(name) || regex_js_1.integerRegex.test(name) || protectedKeywordsRegex.test(name);
}
function isValidDataLocation(type, isArray) {
    return isArray || type === 'bytes' || type === 'string' || type === 'tuple';
} //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/runtime/structs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseStructs = parseStructs;
const regex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/regex.js [app-client] (ecmascript)");
const abiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/errors/abiItem.js [app-client] (ecmascript)");
const abiParameter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/errors/abiParameter.js [app-client] (ecmascript)");
const signature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/errors/signature.js [app-client] (ecmascript)");
const struct_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/errors/struct.js [app-client] (ecmascript)");
const signatures_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/runtime/signatures.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/runtime/utils.js [app-client] (ecmascript)");
function parseStructs(signatures) {
    const shallowStructs = {};
    const signaturesLength = signatures.length;
    for(let i = 0; i < signaturesLength; i++){
        const signature = signatures[i];
        if (!(0, signatures_js_1.isStructSignature)(signature)) continue;
        const match = (0, signatures_js_1.execStructSignature)(signature);
        if (!match) throw new signature_js_1.InvalidSignatureError({
            signature,
            type: 'struct'
        });
        const properties = match.properties.split(';');
        const components = [];
        const propertiesLength = properties.length;
        for(let k = 0; k < propertiesLength; k++){
            const property = properties[k];
            const trimmed = property.trim();
            if (!trimmed) continue;
            const abiParameter = (0, utils_js_1.parseAbiParameter)(trimmed, {
                type: 'struct'
            });
            components.push(abiParameter);
        }
        if (!components.length) throw new signature_js_1.InvalidStructSignatureError({
            signature
        });
        shallowStructs[match.name] = components;
    }
    const resolvedStructs = {};
    const entries = Object.entries(shallowStructs);
    const entriesLength = entries.length;
    for(let i = 0; i < entriesLength; i++){
        const [name, parameters] = entries[i];
        resolvedStructs[name] = resolveStructs(parameters, shallowStructs);
    }
    return resolvedStructs;
}
const typeWithoutTupleRegex = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
function resolveStructs(abiParameters, structs, ancestors = new Set()) {
    const components = [];
    const length = abiParameters.length;
    for(let i = 0; i < length; i++){
        const abiParameter = abiParameters[i];
        const isTuple = regex_js_1.isTupleRegex.test(abiParameter.type);
        if (isTuple) components.push(abiParameter);
        else {
            const match = (0, regex_js_1.execTyped)(typeWithoutTupleRegex, abiParameter.type);
            if (!match?.type) throw new abiParameter_js_1.InvalidAbiTypeParameterError({
                abiParameter
            });
            const { array, type } = match;
            if (type in structs) {
                if (ancestors.has(type)) throw new struct_js_1.CircularReferenceError({
                    type
                });
                components.push({
                    ...abiParameter,
                    type: `tuple${array ?? ''}`,
                    components: resolveStructs(structs[type] ?? [], structs, new Set([
                        ...ancestors,
                        type
                    ]))
                });
            } else {
                if ((0, utils_js_1.isSolidityType)(type)) components.push(abiParameter);
                else throw new abiItem_js_1.UnknownTypeError({
                    type
                });
            }
        }
    }
    return components;
} //# sourceMappingURL=structs.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/parseAbi.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseAbi = parseAbi;
const signatures_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/runtime/signatures.js [app-client] (ecmascript)");
const structs_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/runtime/structs.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/runtime/utils.js [app-client] (ecmascript)");
function parseAbi(signatures) {
    const structs = (0, structs_js_1.parseStructs)(signatures);
    const abi = [];
    const length = signatures.length;
    for(let i = 0; i < length; i++){
        const signature = signatures[i];
        if ((0, signatures_js_1.isStructSignature)(signature)) continue;
        abi.push((0, utils_js_1.parseSignature)(signature, structs));
    }
    return abi;
} //# sourceMappingURL=parseAbi.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/parseAbiItem.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseAbiItem = parseAbiItem;
const abiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/errors/abiItem.js [app-client] (ecmascript)");
const signatures_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/runtime/signatures.js [app-client] (ecmascript)");
const structs_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/runtime/structs.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/runtime/utils.js [app-client] (ecmascript)");
function parseAbiItem(signature) {
    let abiItem;
    if (typeof signature === 'string') abiItem = (0, utils_js_1.parseSignature)(signature);
    else {
        const structs = (0, structs_js_1.parseStructs)(signature);
        const length = signature.length;
        for(let i = 0; i < length; i++){
            const signature_ = signature[i];
            if ((0, signatures_js_1.isStructSignature)(signature_)) continue;
            abiItem = (0, utils_js_1.parseSignature)(signature_, structs);
            break;
        }
    }
    if (!abiItem) throw new abiItem_js_1.InvalidAbiItemError({
        signature
    });
    return abiItem;
} //# sourceMappingURL=parseAbiItem.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/parseAbiParameter.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseAbiParameter = parseAbiParameter;
const abiParameter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/errors/abiParameter.js [app-client] (ecmascript)");
const signatures_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/runtime/signatures.js [app-client] (ecmascript)");
const structs_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/runtime/structs.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/runtime/utils.js [app-client] (ecmascript)");
function parseAbiParameter(param) {
    let abiParameter;
    if (typeof param === 'string') abiParameter = (0, utils_js_1.parseAbiParameter)(param, {
        modifiers: signatures_js_1.modifiers
    });
    else {
        const structs = (0, structs_js_1.parseStructs)(param);
        const length = param.length;
        for(let i = 0; i < length; i++){
            const signature = param[i];
            if ((0, signatures_js_1.isStructSignature)(signature)) continue;
            abiParameter = (0, utils_js_1.parseAbiParameter)(signature, {
                modifiers: signatures_js_1.modifiers,
                structs
            });
            break;
        }
    }
    if (!abiParameter) throw new abiParameter_js_1.InvalidAbiParameterError({
        param
    });
    return abiParameter;
} //# sourceMappingURL=parseAbiParameter.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/parseAbiParameters.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseAbiParameters = parseAbiParameters;
const abiParameter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/errors/abiParameter.js [app-client] (ecmascript)");
const signatures_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/runtime/signatures.js [app-client] (ecmascript)");
const structs_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/runtime/structs.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/runtime/utils.js [app-client] (ecmascript)");
const utils_js_2 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/runtime/utils.js [app-client] (ecmascript)");
function parseAbiParameters(params) {
    const abiParameters = [];
    if (typeof params === 'string') {
        const parameters = (0, utils_js_1.splitParameters)(params);
        const length = parameters.length;
        for(let i = 0; i < length; i++){
            abiParameters.push((0, utils_js_2.parseAbiParameter)(parameters[i], {
                modifiers: signatures_js_1.modifiers
            }));
        }
    } else {
        const structs = (0, structs_js_1.parseStructs)(params);
        const length = params.length;
        for(let i = 0; i < length; i++){
            const signature = params[i];
            if ((0, signatures_js_1.isStructSignature)(signature)) continue;
            const parameters = (0, utils_js_1.splitParameters)(signature);
            const length = parameters.length;
            for(let k = 0; k < length; k++){
                abiParameters.push((0, utils_js_2.parseAbiParameter)(parameters[k], {
                    modifiers: signatures_js_1.modifiers,
                    structs
                }));
            }
        }
    }
    if (abiParameters.length === 0) throw new abiParameter_js_1.InvalidAbiParametersError({
        params
    });
    return abiParameters;
} //# sourceMappingURL=parseAbiParameters.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/exports/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CircularReferenceError = exports.InvalidParenthesisError = exports.UnknownSignatureError = exports.InvalidSignatureError = exports.InvalidStructSignatureError = exports.InvalidAbiParameterError = exports.InvalidAbiParametersError = exports.InvalidParameterError = exports.SolidityProtectedKeywordError = exports.InvalidModifierError = exports.InvalidFunctionModifierError = exports.InvalidAbiTypeParameterError = exports.UnknownSolidityTypeError = exports.InvalidAbiItemError = exports.UnknownTypeError = exports.parseAbiParameters = exports.parseAbiParameter = exports.parseAbiItem = exports.parseAbi = exports.formatAbiParameters = exports.formatAbiParameter = exports.formatAbiItem = exports.formatAbi = exports.narrow = exports.BaseError = void 0;
var errors_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/errors.js [app-client] (ecmascript)");
Object.defineProperty(exports, "BaseError", {
    enumerable: true,
    get: function() {
        return errors_js_1.BaseError;
    }
});
var narrow_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/narrow.js [app-client] (ecmascript)");
Object.defineProperty(exports, "narrow", {
    enumerable: true,
    get: function() {
        return narrow_js_1.narrow;
    }
});
var formatAbi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/formatAbi.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatAbi", {
    enumerable: true,
    get: function() {
        return formatAbi_js_1.formatAbi;
    }
});
var formatAbiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/formatAbiItem.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatAbiItem", {
    enumerable: true,
    get: function() {
        return formatAbiItem_js_1.formatAbiItem;
    }
});
var formatAbiParameter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/formatAbiParameter.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatAbiParameter", {
    enumerable: true,
    get: function() {
        return formatAbiParameter_js_1.formatAbiParameter;
    }
});
var formatAbiParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/formatAbiParameters.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatAbiParameters", {
    enumerable: true,
    get: function() {
        return formatAbiParameters_js_1.formatAbiParameters;
    }
});
var parseAbi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/parseAbi.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseAbi", {
    enumerable: true,
    get: function() {
        return parseAbi_js_1.parseAbi;
    }
});
var parseAbiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/parseAbiItem.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseAbiItem", {
    enumerable: true,
    get: function() {
        return parseAbiItem_js_1.parseAbiItem;
    }
});
var parseAbiParameter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/parseAbiParameter.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseAbiParameter", {
    enumerable: true,
    get: function() {
        return parseAbiParameter_js_1.parseAbiParameter;
    }
});
var parseAbiParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/parseAbiParameters.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseAbiParameters", {
    enumerable: true,
    get: function() {
        return parseAbiParameters_js_1.parseAbiParameters;
    }
});
var abiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/errors/abiItem.js [app-client] (ecmascript)");
Object.defineProperty(exports, "UnknownTypeError", {
    enumerable: true,
    get: function() {
        return abiItem_js_1.UnknownTypeError;
    }
});
Object.defineProperty(exports, "InvalidAbiItemError", {
    enumerable: true,
    get: function() {
        return abiItem_js_1.InvalidAbiItemError;
    }
});
Object.defineProperty(exports, "UnknownSolidityTypeError", {
    enumerable: true,
    get: function() {
        return abiItem_js_1.UnknownSolidityTypeError;
    }
});
var abiParameter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/errors/abiParameter.js [app-client] (ecmascript)");
Object.defineProperty(exports, "InvalidAbiTypeParameterError", {
    enumerable: true,
    get: function() {
        return abiParameter_js_1.InvalidAbiTypeParameterError;
    }
});
Object.defineProperty(exports, "InvalidFunctionModifierError", {
    enumerable: true,
    get: function() {
        return abiParameter_js_1.InvalidFunctionModifierError;
    }
});
Object.defineProperty(exports, "InvalidModifierError", {
    enumerable: true,
    get: function() {
        return abiParameter_js_1.InvalidModifierError;
    }
});
Object.defineProperty(exports, "SolidityProtectedKeywordError", {
    enumerable: true,
    get: function() {
        return abiParameter_js_1.SolidityProtectedKeywordError;
    }
});
Object.defineProperty(exports, "InvalidParameterError", {
    enumerable: true,
    get: function() {
        return abiParameter_js_1.InvalidParameterError;
    }
});
Object.defineProperty(exports, "InvalidAbiParametersError", {
    enumerable: true,
    get: function() {
        return abiParameter_js_1.InvalidAbiParametersError;
    }
});
Object.defineProperty(exports, "InvalidAbiParameterError", {
    enumerable: true,
    get: function() {
        return abiParameter_js_1.InvalidAbiParameterError;
    }
});
var signature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/errors/signature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "InvalidStructSignatureError", {
    enumerable: true,
    get: function() {
        return signature_js_1.InvalidStructSignatureError;
    }
});
Object.defineProperty(exports, "InvalidSignatureError", {
    enumerable: true,
    get: function() {
        return signature_js_1.InvalidSignatureError;
    }
});
Object.defineProperty(exports, "UnknownSignatureError", {
    enumerable: true,
    get: function() {
        return signature_js_1.UnknownSignatureError;
    }
});
var splitParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/errors/splitParameters.js [app-client] (ecmascript)");
Object.defineProperty(exports, "InvalidParenthesisError", {
    enumerable: true,
    get: function() {
        return splitParameters_js_1.InvalidParenthesisError;
    }
});
var struct_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/human-readable/errors/struct.js [app-client] (ecmascript)");
Object.defineProperty(exports, "CircularReferenceError", {
    enumerable: true,
    get: function() {
        return struct_js_1.CircularReferenceError;
    }
}); //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/isows/_esm/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNativeWebSocket",
    ()=>getNativeWebSocket
]);
function getNativeWebSocket() {
    if (typeof WebSocket !== "undefined") return WebSocket;
    if (typeof /*TURBOPACK member replacement*/ __turbopack_context__.g.WebSocket !== "undefined") return /*TURBOPACK member replacement*/ __turbopack_context__.g.WebSocket;
    if (typeof window.WebSocket !== "undefined") return window.WebSocket;
    if (typeof self.WebSocket !== "undefined") return self.WebSocket;
    throw new Error("`WebSocket` is not supported in this environment");
} //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/isows/_esm/native.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebSocket",
    ()=>WebSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$isows$2f$_esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/isows/_esm/utils.js [app-client] (ecmascript)");
;
const WebSocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$isows$2f$_esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNativeWebSocket"])(); //# sourceMappingURL=native.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/events/events.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') {
    ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
    ReflectOwnKeys = function ReflectOwnKeys(target) {
        return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
    };
} else {
    ReflectOwnKeys = function ReflectOwnKeys(target) {
        return Object.getOwnPropertyNames(target);
    };
}
function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
};
function EventEmitter() {
    EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;
// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;
function checkListener(listener) {
    if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
    }
}
Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function() {
        return defaultMaxListeners;
    },
    set: function(arg) {
        if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
        }
        defaultMaxListeners = arg;
    }
});
EventEmitter.init = function() {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
    }
    this._maxListeners = n;
    return this;
};
function _getMaxListeners(that) {
    if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
    var doError = type === 'error';
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;
    else if (!doError) return false;
    // If there is no 'error' event listener then throw.
    if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) {
            // Note: The comments on the `throw` lines are intentional, they show
            // up in Node's output if this results in an unhandled exception.
            throw er; // Unhandled 'error' event
        }
        // At least give some kind of context to the user
        var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
        err.context = er;
        throw err; // Unhandled 'error' event
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === 'function') {
        ReflectApply(handler, this, args);
    } else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for(var i = 0; i < len; ++i)ReflectApply(listeners[i], this, args);
    }
    return true;
};
function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;
    checkListener(listener);
    events = target._events;
    if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
    } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
            target.emit('newListener', type, listener.listener ? listener.listener : listener);
            // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object
            events = target._events;
        }
        existing = events[type];
    }
    if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
    } else {
        if (typeof existing === 'function') {
            // Adding the second element, need to change to array.
            existing = events[type] = prepend ? [
                listener,
                existing
            ] : [
                existing,
                listener
            ];
        // If we've already got an array, just append.
        } else if (prepend) {
            existing.unshift(listener);
        } else {
            existing.push(listener);
        }
        // Check for listener leak
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax
            var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
            w.name = 'MaxListenersExceededWarning';
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            ProcessEmitWarning(w);
        }
    }
    return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
};
function onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
    }
}
function _onceWrap(target, type, listener) {
    var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
    };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
};
// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events, position, i, originalListener;
    checkListener(listener);
    events = this._events;
    if (events === undefined) return this;
    list = events[type];
    if (list === undefined) return this;
    if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = Object.create(null);
        else {
            delete events[type];
            if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
        }
    } else if (typeof list !== 'function') {
        position = -1;
        for(i = list.length - 1; i >= 0; i--){
            if (list[i] === listener || list[i].listener === listener) {
                originalListener = list[i].listener;
                position = i;
                break;
            }
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else {
            spliceOne(list, position);
        }
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
    }
    return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events, i;
    events = this._events;
    if (events === undefined) return this;
    // not listening for removeListener, no need to emit
    if (events.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0) this._events = Object.create(null);
            else delete events[type];
        }
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for(i = 0; i < keys.length; ++i){
            key = keys[i];
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    listeners = events[type];
    if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
    } else if (listeners !== undefined) {
        // LIFO order
        for(i = listeners.length - 1; i >= 0; i--){
            this.removeListener(type, listeners[i]);
        }
    }
    return this;
};
function _listeners(target, type, unwrap) {
    var events = target._events;
    if (events === undefined) return [];
    var evlistener = events[type];
    if (evlistener === undefined) return [];
    if (typeof evlistener === 'function') return unwrap ? [
        evlistener.listener || evlistener
    ] : [
        evlistener
    ];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
};
EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === 'function') {
        return emitter.listenerCount(type);
    } else {
        return listenerCount.call(emitter, type);
    }
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
    var events = this._events;
    if (events !== undefined) {
        var evlistener = events[type];
        if (typeof evlistener === 'function') {
            return 1;
        } else if (evlistener !== undefined) {
            return evlistener.length;
        }
    }
    return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n) {
    var copy = new Array(n);
    for(var i = 0; i < n; ++i)copy[i] = arr[i];
    return copy;
}
function spliceOne(list, index) {
    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
    list.pop();
}
function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for(var i = 0; i < ret.length; ++i){
        ret[i] = arr[i].listener || arr[i];
    }
    return ret;
}
function once(emitter, name) {
    return new Promise(function(resolve, reject) {
        function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
        }
        function resolver() {
            if (typeof emitter.removeListener === 'function') {
                emitter.removeListener('error', errorListener);
            }
            resolve([].slice.call(arguments));
        }
        ;
        eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
        });
        if (name !== 'error') {
            addErrorHandlerIfEventEmitter(emitter, errorListener, {
                once: true
            });
        }
    });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === 'function') {
        eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
    }
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === 'function') {
        if (flags.once) {
            emitter.once(name, listener);
        } else {
            emitter.on(name, listener);
        }
    } else if (typeof emitter.addEventListener === 'function') {
        // EventTarget does not have `error` event semantics like Node
        // EventEmitters, we do not listen for `error` events here.
        emitter.addEventListener(name, function wrapListener(arg) {
            // IE does not have builtin `{ once: true }` support so we
            // have to do it manually.
            if (flags.once) {
                emitter.removeEventListener(name, wrapListener);
            }
            listener(arg);
        });
    } else {
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
    }
}
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-provider/dist/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.numberToHex = exports.getLowerCase = void 0;
function getLowerCase(value) {
    if (value) {
        return value.toLowerCase();
    }
    return value;
}
exports.getLowerCase = getLowerCase;
function numberToHex(value) {
    return `0x${value.toString(16)}`;
}
exports.numberToHex = numberToHex; //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-provider/dist/provider.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SafeAppProvider = void 0;
const safe_apps_sdk_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-sdk/dist/cjs/index.js [app-client] (ecmascript)");
const events_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/events/events.js [app-client] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-provider/dist/utils.js [app-client] (ecmascript)");
// The API is based on Ethereum JavaScript API Provider Standard. Link: https://eips.ethereum.org/EIPS/eip-1193
class SafeAppProvider extends events_1.EventEmitter {
    constructor(safe, sdk){
        super();
        this.submittedTxs = new Map();
        this.safe = safe;
        this.sdk = sdk;
    }
    async connect() {
        this.emit('connect', {
            chainId: this.chainId
        });
        return;
    }
    async disconnect() {
        return;
    }
    get chainId() {
        return this.safe.chainId;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async request(request) {
        const { method, params = [] } = request;
        switch(method){
            case 'eth_accounts':
                return [
                    this.safe.safeAddress
                ];
            case 'net_version':
            case 'eth_chainId':
                return (0, utils_1.numberToHex)(this.chainId);
            case 'personal_sign':
                {
                    const [message, address] = params;
                    if (this.safe.safeAddress.toLowerCase() !== address.toLowerCase()) {
                        throw new Error('The address or message hash is invalid');
                    }
                    const response = await this.sdk.txs.signMessage(message);
                    const signature = 'signature' in response ? response.signature : undefined;
                    return signature || '0x';
                }
            case 'eth_sign':
                {
                    const [address, messageHash] = params;
                    if (this.safe.safeAddress.toLowerCase() !== address.toLowerCase() || !messageHash.startsWith('0x')) {
                        throw new Error('The address or message hash is invalid');
                    }
                    const response = await this.sdk.txs.signMessage(messageHash);
                    const signature = 'signature' in response ? response.signature : undefined;
                    return signature || '0x';
                }
            case 'eth_signTypedData':
            case 'eth_signTypedData_v4':
                {
                    const [address, typedData] = params;
                    const parsedTypedData = typeof typedData === 'string' ? JSON.parse(typedData) : typedData;
                    if (this.safe.safeAddress.toLowerCase() !== address.toLowerCase()) {
                        throw new Error('The address is invalid');
                    }
                    const response = await this.sdk.txs.signTypedMessage(parsedTypedData);
                    const signature = 'signature' in response ? response.signature : undefined;
                    return signature || '0x';
                }
            case 'eth_sendTransaction':
                // `value` or `data` can be explicitly set as `undefined` for example in Viem. The spread will overwrite the fallback value.
                const tx = {
                    ...params[0],
                    value: params[0].value || '0',
                    data: params[0].data || '0x'
                };
                // Some ethereum libraries might pass the gas as a hex-encoded string
                // We need to convert it to a number because the SDK expects a number and our backend only supports
                // Decimal numbers
                if (typeof tx.gas === 'string' && tx.gas.startsWith('0x')) {
                    tx.gas = parseInt(tx.gas, 16);
                }
                const resp = await this.sdk.txs.send({
                    txs: [
                        tx
                    ],
                    params: {
                        safeTxGas: tx.gas
                    }
                });
                // Store fake transaction
                this.submittedTxs.set(resp.safeTxHash, {
                    from: this.safe.safeAddress,
                    hash: resp.safeTxHash,
                    gas: 0,
                    gasPrice: '0x00',
                    nonce: 0,
                    input: tx.data,
                    value: tx.value,
                    to: tx.to,
                    blockHash: null,
                    blockNumber: null,
                    transactionIndex: null
                });
                return resp.safeTxHash;
            case 'eth_blockNumber':
                const block = await this.sdk.eth.getBlockByNumber([
                    'latest'
                ]);
                return block.number;
            case 'eth_getBalance':
                return this.sdk.eth.getBalance([
                    (0, utils_1.getLowerCase)(params[0]),
                    params[1]
                ]);
            case 'eth_getCode':
                return this.sdk.eth.getCode([
                    (0, utils_1.getLowerCase)(params[0]),
                    params[1]
                ]);
            case 'eth_getTransactionCount':
                return this.sdk.eth.getTransactionCount([
                    (0, utils_1.getLowerCase)(params[0]),
                    params[1]
                ]);
            case 'eth_getStorageAt':
                return this.sdk.eth.getStorageAt([
                    (0, utils_1.getLowerCase)(params[0]),
                    params[1],
                    params[2]
                ]);
            case 'eth_getBlockByNumber':
                return this.sdk.eth.getBlockByNumber([
                    params[0],
                    params[1]
                ]);
            case 'eth_getBlockByHash':
                return this.sdk.eth.getBlockByHash([
                    params[0],
                    params[1]
                ]);
            case 'eth_getTransactionByHash':
                let txHash = params[0];
                try {
                    const resp = await this.sdk.txs.getBySafeTxHash(txHash);
                    txHash = resp.txHash || txHash;
                } catch (e) {}
                // Use fake transaction if we don't have a real tx hash
                if (this.submittedTxs.has(txHash)) {
                    return this.submittedTxs.get(txHash);
                }
                return this.sdk.eth.getTransactionByHash([
                    txHash
                ]).then((tx)=>{
                    // We set the tx hash to the one requested, as some provider assert this
                    if (tx) {
                        tx.hash = params[0];
                    }
                    return tx;
                });
            case 'eth_getTransactionReceipt':
                {
                    let txHash = params[0];
                    try {
                        const resp = await this.sdk.txs.getBySafeTxHash(txHash);
                        txHash = resp.txHash || txHash;
                    } catch (e) {}
                    return this.sdk.eth.getTransactionReceipt([
                        txHash
                    ]).then((tx)=>{
                        // We set the tx hash to the one requested, as some provider assert this
                        if (tx) {
                            tx.transactionHash = params[0];
                        }
                        return tx;
                    });
                }
            case 'eth_estimateGas':
                {
                    return this.sdk.eth.getEstimateGas(params[0]);
                }
            case 'eth_call':
                {
                    return this.sdk.eth.call([
                        params[0],
                        params[1]
                    ]);
                }
            case 'eth_getLogs':
                return this.sdk.eth.getPastLogs([
                    params[0]
                ]);
            case 'eth_gasPrice':
                return this.sdk.eth.getGasPrice();
            case 'wallet_getPermissions':
                return this.sdk.wallet.getPermissions();
            case 'wallet_requestPermissions':
                return this.sdk.wallet.requestPermissions(params[0]);
            case 'safe_setSettings':
                return this.sdk.eth.setSafeSettings([
                    params[0]
                ]);
            case 'wallet_sendCalls':
                {
                    const { from, calls, chainId } = params[0];
                    if (chainId !== (0, utils_1.numberToHex)(this.chainId)) {
                        throw new Error(`Safe is not on chain ${chainId}`);
                    }
                    if (from !== this.safe.safeAddress) {
                        throw Error('Invalid from address');
                    }
                    const txs = calls.map((call, i)=>{
                        if (!call.to) {
                            throw new Error(`Invalid call #${i}: missing "to" field`);
                        }
                        return {
                            to: call.to,
                            data: call.data ?? '0x',
                            value: call.value ?? (0, utils_1.numberToHex)(0)
                        };
                    });
                    const { safeTxHash } = await this.sdk.txs.send({
                        txs
                    });
                    const result = {
                        id: safeTxHash
                    };
                    return result;
                }
            case 'wallet_getCallsStatus':
                {
                    const safeTxHash = params[0];
                    const CallStatus = {
                        [safe_apps_sdk_1.TransactionStatus.AWAITING_CONFIRMATIONS]: 100,
                        [safe_apps_sdk_1.TransactionStatus.AWAITING_EXECUTION]: 100,
                        [safe_apps_sdk_1.TransactionStatus.SUCCESS]: 200,
                        [safe_apps_sdk_1.TransactionStatus.CANCELLED]: 400,
                        [safe_apps_sdk_1.TransactionStatus.FAILED]: 500
                    };
                    const tx = await this.sdk.txs.getBySafeTxHash(safeTxHash);
                    const result = {
                        version: '1.0',
                        id: safeTxHash,
                        chainId: (0, utils_1.numberToHex)(this.chainId),
                        status: CallStatus[tx.txStatus]
                    };
                    // Transaction is queued
                    if (!tx.txHash) {
                        return result;
                    }
                    // If transaction is executing, receipt is null
                    const receipt = await this.sdk.eth.getTransactionReceipt([
                        tx.txHash
                    ]);
                    if (!receipt) {
                        return result;
                    }
                    const calls = tx.txData?.dataDecoded?.method !== 'multiSend' ? 1 : tx.txData.dataDecoded.parameters?.[0].valueDecoded?.length ?? 1;
                    // Typed as number; is hex
                    const blockNumber = Number(receipt.blockNumber);
                    const gasUsed = Number(receipt.gasUsed);
                    result.receipts = Array(calls).fill({
                        logs: receipt.logs,
                        status: (0, utils_1.numberToHex)(tx.txStatus === safe_apps_sdk_1.TransactionStatus.SUCCESS ? 1 : 0),
                        blockHash: receipt.blockHash,
                        blockNumber: (0, utils_1.numberToHex)(blockNumber),
                        gasUsed: (0, utils_1.numberToHex)(gasUsed),
                        transactionHash: tx.txHash
                    });
                    return result;
                }
            case 'wallet_showCallsStatus':
                {
                    // Cannot open transaction details page via SDK
                    throw new Error(`"${request.method}" not supported`);
                }
            case 'wallet_getCapabilities':
                {
                    return {
                        [(0, utils_1.numberToHex)(this.chainId)]: {
                            atomicBatch: {
                                supported: true
                            }
                        }
                    };
                }
            default:
                throw Error(`"${request.method}" not implemented`);
        }
    }
    // this method is needed for ethers v4
    // https://github.com/ethers-io/ethers.js/blob/427e16826eb15d52d25c4f01027f8db22b74b76c/src.ts/providers/web3-provider.ts#L41-L55
    send(request, callback) {
        if (!request) callback('Undefined request');
        this.request(request).then((result)=>callback(null, {
                jsonrpc: '2.0',
                id: request.id,
                result
            })).catch((error)=>callback(error, null));
    }
}
exports.SafeAppProvider = SafeAppProvider; //# sourceMappingURL=provider.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-provider/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SafeAppProvider = void 0;
var provider_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@safe-global/safe-apps-provider/dist/provider.js [app-client] (ecmascript)");
Object.defineProperty(exports, "SafeAppProvider", {
    enumerable: true,
    get: function() {
        return provider_1.SafeAppProvider;
    }
}); //# sourceMappingURL=index.js.map
}),
]);

//# sourceMappingURL=ee741_8d2c6c6e._.js.map