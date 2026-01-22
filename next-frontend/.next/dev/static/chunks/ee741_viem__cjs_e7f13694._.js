(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAction = getAction;
function getAction(client, actionFn, name) {
    const action_implicit = client[actionFn.name];
    if (typeof action_implicit === 'function') return action_implicit;
    const action_explicit = client[name];
    if (typeof action_explicit === 'function') return action_explicit;
    return (params)=>actionFn(client, params);
} //# sourceMappingURL=getAction.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatAbiItem = formatAbiItem;
exports.formatAbiParams = formatAbiParams;
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
function formatAbiItem(abiItem, { includeName = false } = {}) {
    if (abiItem.type !== 'function' && abiItem.type !== 'event' && abiItem.type !== 'error') throw new abi_js_1.InvalidDefinitionTypeError(abiItem.type);
    return `${abiItem.name}(${formatAbiParams(abiItem.inputs, {
        includeName
    })})`;
}
function formatAbiParams(params, { includeName = false } = {}) {
    if (!params) return '';
    return params.map((param)=>formatAbiParam(param, {
            includeName
        })).join(includeName ? ', ' : ',');
}
function formatAbiParam(param, { includeName }) {
    if (param.type.startsWith('tuple')) {
        return `(${formatAbiParams(param.components, {
            includeName
        })})${param.type.slice('tuple'.length)}`;
    }
    return param.type + (includeName && param.name ? ` ${param.name}` : '');
} //# sourceMappingURL=formatAbiItem.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isHex = isHex;
function isHex(value, { strict = true } = {}) {
    if (!value) return false;
    if (typeof value !== 'string') return false;
    return strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith('0x');
} //# sourceMappingURL=isHex.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.size = size;
const isHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
function size(value) {
    if ((0, isHex_js_1.isHex)(value, {
        strict: false
    })) return Math.ceil((value.length - 2) / 2);
    return value.length;
} //# sourceMappingURL=size.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/version.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.version = void 0;
exports.version = '2.39.3'; //# sourceMappingURL=version.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseError = void 0;
exports.setErrorConfig = setErrorConfig;
const version_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/version.js [app-client] (ecmascript)");
let errorConfig = {
    getDocsUrl: ({ docsBaseUrl, docsPath = '', docsSlug })=>docsPath ? `${docsBaseUrl ?? 'https://viem.sh'}${docsPath}${docsSlug ? `#${docsSlug}` : ''}` : undefined,
    version: `viem@${version_js_1.version}`
};
function setErrorConfig(config) {
    errorConfig = config;
}
class BaseError extends Error {
    constructor(shortMessage, args = {}){
        const details = (()=>{
            if (args.cause instanceof BaseError) return args.cause.details;
            if (args.cause?.message) return args.cause.message;
            return args.details;
        })();
        const docsPath = (()=>{
            if (args.cause instanceof BaseError) return args.cause.docsPath || args.docsPath;
            return args.docsPath;
        })();
        const docsUrl = errorConfig.getDocsUrl?.({
            ...args,
            docsPath
        });
        const message = [
            shortMessage || 'An error occurred.',
            '',
            ...args.metaMessages ? [
                ...args.metaMessages,
                ''
            ] : [],
            ...docsUrl ? [
                `Docs: ${docsUrl}`
            ] : [],
            ...details ? [
                `Details: ${details}`
            ] : [],
            ...errorConfig.version ? [
                `Version: ${errorConfig.version}`
            ] : []
        ].join('\n');
        super(message, args.cause ? {
            cause: args.cause
        } : undefined);
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
        Object.defineProperty(this, "version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BaseError'
        });
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.name = args.name ?? this.name;
        this.shortMessage = shortMessage;
        this.version = version_js_1.version;
    }
    walk(fn) {
        return walk(this, fn);
    }
}
exports.BaseError = BaseError;
function walk(err, fn) {
    if (fn?.(err)) return err;
    if (err && typeof err === 'object' && 'cause' in err && err.cause !== undefined) return walk(err.cause, fn);
    return fn ? null : err;
} //# sourceMappingURL=base.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnsupportedPackedAbiType = exports.InvalidDefinitionTypeError = exports.InvalidArrayError = exports.InvalidAbiDecodingTypeError = exports.InvalidAbiEncodingTypeError = exports.DecodeLogTopicsMismatch = exports.DecodeLogDataMismatch = exports.BytesSizeMismatchError = exports.AbiItemAmbiguityError = exports.AbiFunctionSignatureNotFoundError = exports.AbiFunctionOutputsNotFoundError = exports.AbiFunctionNotFoundError = exports.AbiEventNotFoundError = exports.AbiEventSignatureNotFoundError = exports.AbiEventSignatureEmptyTopicsError = exports.AbiErrorSignatureNotFoundError = exports.AbiErrorNotFoundError = exports.AbiErrorInputsNotFoundError = exports.AbiEncodingLengthMismatchError = exports.AbiEncodingBytesSizeMismatchError = exports.AbiEncodingArrayLengthMismatchError = exports.AbiDecodingZeroDataError = exports.AbiDecodingDataSizeTooSmallError = exports.AbiDecodingDataSizeInvalidError = exports.AbiConstructorParamsNotFoundError = exports.AbiConstructorNotFoundError = void 0;
const formatAbiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class AbiConstructorNotFoundError extends base_js_1.BaseError {
    constructor({ docsPath }){
        super([
            'A constructor was not found on the ABI.',
            'Make sure you are using the correct ABI and that the constructor exists on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiConstructorNotFoundError'
        });
    }
}
exports.AbiConstructorNotFoundError = AbiConstructorNotFoundError;
class AbiConstructorParamsNotFoundError extends base_js_1.BaseError {
    constructor({ docsPath }){
        super([
            'Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.',
            'Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.'
        ].join('\n'), {
            docsPath,
            name: 'AbiConstructorParamsNotFoundError'
        });
    }
}
exports.AbiConstructorParamsNotFoundError = AbiConstructorParamsNotFoundError;
class AbiDecodingDataSizeInvalidError extends base_js_1.BaseError {
    constructor({ data, size }){
        super([
            `Data size of ${size} bytes is invalid.`,
            'Size must be in increments of 32 bytes (size % 32 === 0).'
        ].join('\n'), {
            metaMessages: [
                `Data: ${data} (${size} bytes)`
            ],
            name: 'AbiDecodingDataSizeInvalidError'
        });
    }
}
exports.AbiDecodingDataSizeInvalidError = AbiDecodingDataSizeInvalidError;
class AbiDecodingDataSizeTooSmallError extends base_js_1.BaseError {
    constructor({ data, params, size }){
        super([
            `Data size of ${size} bytes is too small for given parameters.`
        ].join('\n'), {
            metaMessages: [
                `Params: (${(0, formatAbiItem_js_1.formatAbiParams)(params, {
                    includeName: true
                })})`,
                `Data:   ${data} (${size} bytes)`
            ],
            name: 'AbiDecodingDataSizeTooSmallError'
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
        this.params = params;
        this.size = size;
    }
}
exports.AbiDecodingDataSizeTooSmallError = AbiDecodingDataSizeTooSmallError;
class AbiDecodingZeroDataError extends base_js_1.BaseError {
    constructor(){
        super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: 'AbiDecodingZeroDataError'
        });
    }
}
exports.AbiDecodingZeroDataError = AbiDecodingZeroDataError;
class AbiEncodingArrayLengthMismatchError extends base_js_1.BaseError {
    constructor({ expectedLength, givenLength, type }){
        super([
            `ABI encoding array length mismatch for type ${type}.`,
            `Expected length: ${expectedLength}`,
            `Given length: ${givenLength}`
        ].join('\n'), {
            name: 'AbiEncodingArrayLengthMismatchError'
        });
    }
}
exports.AbiEncodingArrayLengthMismatchError = AbiEncodingArrayLengthMismatchError;
class AbiEncodingBytesSizeMismatchError extends base_js_1.BaseError {
    constructor({ expectedSize, value }){
        super(`Size of bytes "${value}" (bytes${(0, size_js_1.size)(value)}) does not match expected size (bytes${expectedSize}).`, {
            name: 'AbiEncodingBytesSizeMismatchError'
        });
    }
}
exports.AbiEncodingBytesSizeMismatchError = AbiEncodingBytesSizeMismatchError;
class AbiEncodingLengthMismatchError extends base_js_1.BaseError {
    constructor({ expectedLength, givenLength }){
        super([
            'ABI encoding params/values length mismatch.',
            `Expected length (params): ${expectedLength}`,
            `Given length (values): ${givenLength}`
        ].join('\n'), {
            name: 'AbiEncodingLengthMismatchError'
        });
    }
}
exports.AbiEncodingLengthMismatchError = AbiEncodingLengthMismatchError;
class AbiErrorInputsNotFoundError extends base_js_1.BaseError {
    constructor(errorName, { docsPath }){
        super([
            `Arguments (\`args\`) were provided to "${errorName}", but "${errorName}" on the ABI does not contain any parameters (\`inputs\`).`,
            'Cannot encode error result without knowing what the parameter types are.',
            'Make sure you are using the correct ABI and that the inputs exist on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiErrorInputsNotFoundError'
        });
    }
}
exports.AbiErrorInputsNotFoundError = AbiErrorInputsNotFoundError;
class AbiErrorNotFoundError extends base_js_1.BaseError {
    constructor(errorName, { docsPath } = {}){
        super([
            `Error ${errorName ? `"${errorName}" ` : ''}not found on ABI.`,
            'Make sure you are using the correct ABI and that the error exists on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiErrorNotFoundError'
        });
    }
}
exports.AbiErrorNotFoundError = AbiErrorNotFoundError;
class AbiErrorSignatureNotFoundError extends base_js_1.BaseError {
    constructor(signature, { docsPath }){
        super([
            `Encoded error signature "${signature}" not found on ABI.`,
            'Make sure you are using the correct ABI and that the error exists on it.',
            `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${signature}.`
        ].join('\n'), {
            docsPath,
            name: 'AbiErrorSignatureNotFoundError'
        });
        Object.defineProperty(this, "signature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.signature = signature;
    }
}
exports.AbiErrorSignatureNotFoundError = AbiErrorSignatureNotFoundError;
class AbiEventSignatureEmptyTopicsError extends base_js_1.BaseError {
    constructor({ docsPath }){
        super('Cannot extract event signature from empty topics.', {
            docsPath,
            name: 'AbiEventSignatureEmptyTopicsError'
        });
    }
}
exports.AbiEventSignatureEmptyTopicsError = AbiEventSignatureEmptyTopicsError;
class AbiEventSignatureNotFoundError extends base_js_1.BaseError {
    constructor(signature, { docsPath }){
        super([
            `Encoded event signature "${signature}" not found on ABI.`,
            'Make sure you are using the correct ABI and that the event exists on it.',
            `You can look up the signature here: https://openchain.xyz/signatures?query=${signature}.`
        ].join('\n'), {
            docsPath,
            name: 'AbiEventSignatureNotFoundError'
        });
    }
}
exports.AbiEventSignatureNotFoundError = AbiEventSignatureNotFoundError;
class AbiEventNotFoundError extends base_js_1.BaseError {
    constructor(eventName, { docsPath } = {}){
        super([
            `Event ${eventName ? `"${eventName}" ` : ''}not found on ABI.`,
            'Make sure you are using the correct ABI and that the event exists on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiEventNotFoundError'
        });
    }
}
exports.AbiEventNotFoundError = AbiEventNotFoundError;
class AbiFunctionNotFoundError extends base_js_1.BaseError {
    constructor(functionName, { docsPath } = {}){
        super([
            `Function ${functionName ? `"${functionName}" ` : ''}not found on ABI.`,
            'Make sure you are using the correct ABI and that the function exists on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiFunctionNotFoundError'
        });
    }
}
exports.AbiFunctionNotFoundError = AbiFunctionNotFoundError;
class AbiFunctionOutputsNotFoundError extends base_js_1.BaseError {
    constructor(functionName, { docsPath }){
        super([
            `Function "${functionName}" does not contain any \`outputs\` on ABI.`,
            'Cannot decode function result without knowing what the parameter types are.',
            'Make sure you are using the correct ABI and that the function exists on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiFunctionOutputsNotFoundError'
        });
    }
}
exports.AbiFunctionOutputsNotFoundError = AbiFunctionOutputsNotFoundError;
class AbiFunctionSignatureNotFoundError extends base_js_1.BaseError {
    constructor(signature, { docsPath }){
        super([
            `Encoded function signature "${signature}" not found on ABI.`,
            'Make sure you are using the correct ABI and that the function exists on it.',
            `You can look up the signature here: https://openchain.xyz/signatures?query=${signature}.`
        ].join('\n'), {
            docsPath,
            name: 'AbiFunctionSignatureNotFoundError'
        });
    }
}
exports.AbiFunctionSignatureNotFoundError = AbiFunctionSignatureNotFoundError;
class AbiItemAmbiguityError extends base_js_1.BaseError {
    constructor(x, y){
        super('Found ambiguous types in overloaded ABI items.', {
            metaMessages: [
                `\`${x.type}\` in \`${(0, formatAbiItem_js_1.formatAbiItem)(x.abiItem)}\`, and`,
                `\`${y.type}\` in \`${(0, formatAbiItem_js_1.formatAbiItem)(y.abiItem)}\``,
                '',
                'These types encode differently and cannot be distinguished at runtime.',
                'Remove one of the ambiguous items in the ABI.'
            ],
            name: 'AbiItemAmbiguityError'
        });
    }
}
exports.AbiItemAmbiguityError = AbiItemAmbiguityError;
class BytesSizeMismatchError extends base_js_1.BaseError {
    constructor({ expectedSize, givenSize }){
        super(`Expected bytes${expectedSize}, got bytes${givenSize}.`, {
            name: 'BytesSizeMismatchError'
        });
    }
}
exports.BytesSizeMismatchError = BytesSizeMismatchError;
class DecodeLogDataMismatch extends base_js_1.BaseError {
    constructor({ abiItem, data, params, size }){
        super([
            `Data size of ${size} bytes is too small for non-indexed event parameters.`
        ].join('\n'), {
            metaMessages: [
                `Params: (${(0, formatAbiItem_js_1.formatAbiParams)(params, {
                    includeName: true
                })})`,
                `Data:   ${data} (${size} bytes)`
            ],
            name: 'DecodeLogDataMismatch'
        });
        Object.defineProperty(this, "abiItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abiItem = abiItem;
        this.data = data;
        this.params = params;
        this.size = size;
    }
}
exports.DecodeLogDataMismatch = DecodeLogDataMismatch;
class DecodeLogTopicsMismatch extends base_js_1.BaseError {
    constructor({ abiItem, param }){
        super([
            `Expected a topic for indexed event parameter${param.name ? ` "${param.name}"` : ''} on event "${(0, formatAbiItem_js_1.formatAbiItem)(abiItem, {
                includeName: true
            })}".`
        ].join('\n'), {
            name: 'DecodeLogTopicsMismatch'
        });
        Object.defineProperty(this, "abiItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abiItem = abiItem;
    }
}
exports.DecodeLogTopicsMismatch = DecodeLogTopicsMismatch;
class InvalidAbiEncodingTypeError extends base_js_1.BaseError {
    constructor(type, { docsPath }){
        super([
            `Type "${type}" is not a valid encoding type.`,
            'Please provide a valid ABI type.'
        ].join('\n'), {
            docsPath,
            name: 'InvalidAbiEncodingType'
        });
    }
}
exports.InvalidAbiEncodingTypeError = InvalidAbiEncodingTypeError;
class InvalidAbiDecodingTypeError extends base_js_1.BaseError {
    constructor(type, { docsPath }){
        super([
            `Type "${type}" is not a valid decoding type.`,
            'Please provide a valid ABI type.'
        ].join('\n'), {
            docsPath,
            name: 'InvalidAbiDecodingType'
        });
    }
}
exports.InvalidAbiDecodingTypeError = InvalidAbiDecodingTypeError;
class InvalidArrayError extends base_js_1.BaseError {
    constructor(value){
        super([
            `Value "${value}" is not a valid array.`
        ].join('\n'), {
            name: 'InvalidArrayError'
        });
    }
}
exports.InvalidArrayError = InvalidArrayError;
class InvalidDefinitionTypeError extends base_js_1.BaseError {
    constructor(type){
        super([
            `"${type}" is not a valid definition type.`,
            'Valid types: "function", "event", "error"'
        ].join('\n'), {
            name: 'InvalidDefinitionTypeError'
        });
    }
}
exports.InvalidDefinitionTypeError = InvalidDefinitionTypeError;
class UnsupportedPackedAbiType extends base_js_1.BaseError {
    constructor(type){
        super(`Type "${type}" is not supported for packed encoding.`, {
            name: 'UnsupportedPackedAbiType'
        });
    }
}
exports.UnsupportedPackedAbiType = UnsupportedPackedAbiType; //# sourceMappingURL=abi.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/log.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FilterTypeNotSupportedError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class FilterTypeNotSupportedError extends base_js_1.BaseError {
    constructor(type){
        super(`Filter type "${type}" is not supported.`, {
            name: 'FilterTypeNotSupportedError'
        });
    }
}
exports.FilterTypeNotSupportedError = FilterTypeNotSupportedError; //# sourceMappingURL=log.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/data.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidBytesLengthError = exports.SizeExceedsPaddingSizeError = exports.SliceOffsetOutOfBoundsError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class SliceOffsetOutOfBoundsError extends base_js_1.BaseError {
    constructor({ offset, position, size }){
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset "${offset}" is out-of-bounds (size: ${size}).`, {
            name: 'SliceOffsetOutOfBoundsError'
        });
    }
}
exports.SliceOffsetOutOfBoundsError = SliceOffsetOutOfBoundsError;
class SizeExceedsPaddingSizeError extends base_js_1.BaseError {
    constructor({ size, targetSize, type }){
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (${size}) exceeds padding size (${targetSize}).`, {
            name: 'SizeExceedsPaddingSizeError'
        });
    }
}
exports.SizeExceedsPaddingSizeError = SizeExceedsPaddingSizeError;
class InvalidBytesLengthError extends base_js_1.BaseError {
    constructor({ size, targetSize, type }){
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} is expected to be ${targetSize} ${type} long, but is ${size} ${type} long.`, {
            name: 'InvalidBytesLengthError'
        });
    }
}
exports.InvalidBytesLengthError = InvalidBytesLengthError; //# sourceMappingURL=data.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/pad.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pad = pad;
exports.padHex = padHex;
exports.padBytes = padBytes;
const data_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/data.js [app-client] (ecmascript)");
function pad(hexOrBytes, { dir, size = 32 } = {}) {
    if (typeof hexOrBytes === 'string') return padHex(hexOrBytes, {
        dir,
        size
    });
    return padBytes(hexOrBytes, {
        dir,
        size
    });
}
function padHex(hex_, { dir, size = 32 } = {}) {
    if (size === null) return hex_;
    const hex = hex_.replace('0x', '');
    if (hex.length > size * 2) throw new data_js_1.SizeExceedsPaddingSizeError({
        size: Math.ceil(hex.length / 2),
        targetSize: size,
        type: 'hex'
    });
    return `0x${hex[dir === 'right' ? 'padEnd' : 'padStart'](size * 2, '0')}`;
}
function padBytes(bytes, { dir, size = 32 } = {}) {
    if (size === null) return bytes;
    if (bytes.length > size) throw new data_js_1.SizeExceedsPaddingSizeError({
        size: bytes.length,
        targetSize: size,
        type: 'bytes'
    });
    const paddedBytes = new Uint8Array(size);
    for(let i = 0; i < size; i++){
        const padEnd = dir === 'right';
        paddedBytes[padEnd ? i : size - i - 1] = bytes[padEnd ? i : bytes.length - i - 1];
    }
    return paddedBytes;
} //# sourceMappingURL=pad.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/encoding.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SizeOverflowError = exports.InvalidHexValueError = exports.InvalidHexBooleanError = exports.InvalidBytesBooleanError = exports.IntegerOutOfRangeError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class IntegerOutOfRangeError extends base_js_1.BaseError {
    constructor({ max, min, signed, size, value }){
        super(`Number "${value}" is not in safe ${size ? `${size * 8}-bit ${signed ? 'signed' : 'unsigned'} ` : ''}integer range ${max ? `(${min} to ${max})` : `(above ${min})`}`, {
            name: 'IntegerOutOfRangeError'
        });
    }
}
exports.IntegerOutOfRangeError = IntegerOutOfRangeError;
class InvalidBytesBooleanError extends base_js_1.BaseError {
    constructor(bytes){
        super(`Bytes value "${bytes}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`, {
            name: 'InvalidBytesBooleanError'
        });
    }
}
exports.InvalidBytesBooleanError = InvalidBytesBooleanError;
class InvalidHexBooleanError extends base_js_1.BaseError {
    constructor(hex){
        super(`Hex value "${hex}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`, {
            name: 'InvalidHexBooleanError'
        });
    }
}
exports.InvalidHexBooleanError = InvalidHexBooleanError;
class InvalidHexValueError extends base_js_1.BaseError {
    constructor(value){
        super(`Hex value "${value}" is an odd length (${value.length}). It must be an even length.`, {
            name: 'InvalidHexValueError'
        });
    }
}
exports.InvalidHexValueError = InvalidHexValueError;
class SizeOverflowError extends base_js_1.BaseError {
    constructor({ givenSize, maxSize }){
        super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`, {
            name: 'SizeOverflowError'
        });
    }
}
exports.SizeOverflowError = SizeOverflowError; //# sourceMappingURL=encoding.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/trim.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.trim = trim;
function trim(hexOrBytes, { dir = 'left' } = {}) {
    let data = typeof hexOrBytes === 'string' ? hexOrBytes.replace('0x', '') : hexOrBytes;
    let sliceLength = 0;
    for(let i = 0; i < data.length - 1; i++){
        if (data[dir === 'left' ? i : data.length - i - 1].toString() === '0') sliceLength++;
        else break;
    }
    data = dir === 'left' ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
    if (typeof hexOrBytes === 'string') {
        if (data.length === 1 && dir === 'right') data = `${data}0`;
        return `0x${data.length % 2 === 1 ? `0${data}` : data}`;
    }
    return data;
} //# sourceMappingURL=trim.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.assertSize = assertSize;
exports.fromHex = fromHex;
exports.hexToBigInt = hexToBigInt;
exports.hexToBool = hexToBool;
exports.hexToNumber = hexToNumber;
exports.hexToString = hexToString;
const encoding_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/encoding.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
const trim_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/trim.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
function assertSize(hexOrBytes, { size }) {
    if ((0, size_js_1.size)(hexOrBytes) > size) throw new encoding_js_1.SizeOverflowError({
        givenSize: (0, size_js_1.size)(hexOrBytes),
        maxSize: size
    });
}
function fromHex(hex, toOrOpts) {
    const opts = typeof toOrOpts === 'string' ? {
        to: toOrOpts
    } : toOrOpts;
    const to = opts.to;
    if (to === 'number') return hexToNumber(hex, opts);
    if (to === 'bigint') return hexToBigInt(hex, opts);
    if (to === 'string') return hexToString(hex, opts);
    if (to === 'boolean') return hexToBool(hex, opts);
    return (0, toBytes_js_1.hexToBytes)(hex, opts);
}
function hexToBigInt(hex, opts = {}) {
    const { signed } = opts;
    if (opts.size) assertSize(hex, {
        size: opts.size
    });
    const value = BigInt(hex);
    if (!signed) return value;
    const size = (hex.length - 2) / 2;
    const max = (1n << BigInt(size) * 8n - 1n) - 1n;
    if (value <= max) return value;
    return value - BigInt(`0x${'f'.padStart(size * 2, 'f')}`) - 1n;
}
function hexToBool(hex_, opts = {}) {
    let hex = hex_;
    if (opts.size) {
        assertSize(hex, {
            size: opts.size
        });
        hex = (0, trim_js_1.trim)(hex);
    }
    if ((0, trim_js_1.trim)(hex) === '0x00') return false;
    if ((0, trim_js_1.trim)(hex) === '0x01') return true;
    throw new encoding_js_1.InvalidHexBooleanError(hex);
}
function hexToNumber(hex, opts = {}) {
    return Number(hexToBigInt(hex, opts));
}
function hexToString(hex, opts = {}) {
    let bytes = (0, toBytes_js_1.hexToBytes)(hex);
    if (opts.size) {
        assertSize(bytes, {
            size: opts.size
        });
        bytes = (0, trim_js_1.trim)(bytes, {
            dir: 'right'
        });
    }
    return new TextDecoder().decode(bytes);
} //# sourceMappingURL=fromHex.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toHex = toHex;
exports.boolToHex = boolToHex;
exports.bytesToHex = bytesToHex;
exports.numberToHex = numberToHex;
exports.stringToHex = stringToHex;
const encoding_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/encoding.js [app-client] (ecmascript)");
const pad_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/pad.js [app-client] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const hexes = Array.from({
    length: 256
}, (_v, i)=>i.toString(16).padStart(2, '0'));
function toHex(value, opts = {}) {
    if (typeof value === 'number' || typeof value === 'bigint') return numberToHex(value, opts);
    if (typeof value === 'string') {
        return stringToHex(value, opts);
    }
    if (typeof value === 'boolean') return boolToHex(value, opts);
    return bytesToHex(value, opts);
}
function boolToHex(value, opts = {}) {
    const hex = `0x${Number(value)}`;
    if (typeof opts.size === 'number') {
        (0, fromHex_js_1.assertSize)(hex, {
            size: opts.size
        });
        return (0, pad_js_1.pad)(hex, {
            size: opts.size
        });
    }
    return hex;
}
function bytesToHex(value, opts = {}) {
    let string = '';
    for(let i = 0; i < value.length; i++){
        string += hexes[value[i]];
    }
    const hex = `0x${string}`;
    if (typeof opts.size === 'number') {
        (0, fromHex_js_1.assertSize)(hex, {
            size: opts.size
        });
        return (0, pad_js_1.pad)(hex, {
            dir: 'right',
            size: opts.size
        });
    }
    return hex;
}
function numberToHex(value_, opts = {}) {
    const { signed, size } = opts;
    const value = BigInt(value_);
    let maxValue;
    if (size) {
        if (signed) maxValue = (1n << BigInt(size) * 8n - 1n) - 1n;
        else maxValue = 2n ** (BigInt(size) * 8n) - 1n;
    } else if (typeof value_ === 'number') {
        maxValue = BigInt(Number.MAX_SAFE_INTEGER);
    }
    const minValue = typeof maxValue === 'bigint' && signed ? -maxValue - 1n : 0;
    if (maxValue && value > maxValue || value < minValue) {
        const suffix = typeof value_ === 'bigint' ? 'n' : '';
        throw new encoding_js_1.IntegerOutOfRangeError({
            max: maxValue ? `${maxValue}${suffix}` : undefined,
            min: `${minValue}${suffix}`,
            signed,
            size,
            value: `${value_}${suffix}`
        });
    }
    const hex = `0x${(signed && value < 0 ? (1n << BigInt(size * 8)) + BigInt(value) : value).toString(16)}`;
    if (size) return (0, pad_js_1.pad)(hex, {
        size
    });
    return hex;
}
const encoder = new TextEncoder();
function stringToHex(value_, opts = {}) {
    const value = encoder.encode(value_);
    return bytesToHex(value, opts);
} //# sourceMappingURL=toHex.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toBytes = toBytes;
exports.boolToBytes = boolToBytes;
exports.hexToBytes = hexToBytes;
exports.numberToBytes = numberToBytes;
exports.stringToBytes = stringToBytes;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const isHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
const pad_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/pad.js [app-client] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const encoder = new TextEncoder();
function toBytes(value, opts = {}) {
    if (typeof value === 'number' || typeof value === 'bigint') return numberToBytes(value, opts);
    if (typeof value === 'boolean') return boolToBytes(value, opts);
    if ((0, isHex_js_1.isHex)(value)) return hexToBytes(value, opts);
    return stringToBytes(value, opts);
}
function boolToBytes(value, opts = {}) {
    const bytes = new Uint8Array(1);
    bytes[0] = Number(value);
    if (typeof opts.size === 'number') {
        (0, fromHex_js_1.assertSize)(bytes, {
            size: opts.size
        });
        return (0, pad_js_1.pad)(bytes, {
            size: opts.size
        });
    }
    return bytes;
}
const charCodeMap = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function charCodeToBase16(char) {
    if (char >= charCodeMap.zero && char <= charCodeMap.nine) return char - charCodeMap.zero;
    if (char >= charCodeMap.A && char <= charCodeMap.F) return char - (charCodeMap.A - 10);
    if (char >= charCodeMap.a && char <= charCodeMap.f) return char - (charCodeMap.a - 10);
    return undefined;
}
function hexToBytes(hex_, opts = {}) {
    let hex = hex_;
    if (opts.size) {
        (0, fromHex_js_1.assertSize)(hex, {
            size: opts.size
        });
        hex = (0, pad_js_1.pad)(hex, {
            dir: 'right',
            size: opts.size
        });
    }
    let hexString = hex.slice(2);
    if (hexString.length % 2) hexString = `0${hexString}`;
    const length = hexString.length / 2;
    const bytes = new Uint8Array(length);
    for(let index = 0, j = 0; index < length; index++){
        const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
        const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
        if (nibbleLeft === undefined || nibbleRight === undefined) {
            throw new base_js_1.BaseError(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
        }
        bytes[index] = nibbleLeft * 16 + nibbleRight;
    }
    return bytes;
}
function numberToBytes(value, opts) {
    const hex = (0, toHex_js_1.numberToHex)(value, opts);
    return hexToBytes(hex);
}
function stringToBytes(value, opts = {}) {
    const bytes = encoder.encode(value);
    if (typeof opts.size === 'number') {
        (0, fromHex_js_1.assertSize)(bytes, {
            size: opts.size
        });
        return (0, pad_js_1.pad)(bytes, {
            dir: 'right',
            size: opts.size
        });
    }
    return bytes;
} //# sourceMappingURL=toBytes.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.keccak256 = keccak256;
const sha3_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/node_modules/@noble/hashes/sha3.js [app-client] (ecmascript)");
const isHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function keccak256(value, to_) {
    const to = to_ || 'hex';
    const bytes = (0, sha3_1.keccak_256)((0, isHex_js_1.isHex)(value, {
        strict: false
    }) ? (0, toBytes_js_1.toBytes)(value) : value);
    if (to === 'bytes') return bytes;
    return (0, toHex_js_1.toHex)(bytes);
} //# sourceMappingURL=keccak256.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/hashSignature.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hashSignature = hashSignature;
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const keccak256_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
const hash = (value)=>(0, keccak256_js_1.keccak256)((0, toBytes_js_1.toBytes)(value));
function hashSignature(sig) {
    return hash(sig);
} //# sourceMappingURL=hashSignature.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/normalizeSignature.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.normalizeSignature = normalizeSignature;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
function normalizeSignature(signature) {
    let active = true;
    let current = '';
    let level = 0;
    let result = '';
    let valid = false;
    for(let i = 0; i < signature.length; i++){
        const char = signature[i];
        if ([
            '(',
            ')',
            ','
        ].includes(char)) active = true;
        if (char === '(') level++;
        if (char === ')') level--;
        if (!active) continue;
        if (level === 0) {
            if (char === ' ' && [
                'event',
                'function',
                ''
            ].includes(result)) result = '';
            else {
                result += char;
                if (char === ')') {
                    valid = true;
                    break;
                }
            }
            continue;
        }
        if (char === ' ') {
            if (signature[i - 1] !== ',' && current !== ',' && current !== ',(') {
                current = '';
                active = false;
            }
            continue;
        }
        result += char;
        current += char;
    }
    if (!valid) throw new base_js_1.BaseError('Unable to normalize signature.');
    return result;
} //# sourceMappingURL=normalizeSignature.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toSignature.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toSignature = void 0;
const abitype_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/exports/index.js [app-client] (ecmascript)");
const normalizeSignature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/normalizeSignature.js [app-client] (ecmascript)");
const toSignature = (def)=>{
    const def_ = (()=>{
        if (typeof def === 'string') return def;
        return (0, abitype_1.formatAbiItem)(def);
    })();
    return (0, normalizeSignature_js_1.normalizeSignature)(def_);
};
exports.toSignature = toSignature; //# sourceMappingURL=toSignature.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toSignatureHash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toSignatureHash = toSignatureHash;
const hashSignature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/hashSignature.js [app-client] (ecmascript)");
const toSignature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toSignature.js [app-client] (ecmascript)");
function toSignatureHash(fn) {
    return (0, hashSignature_js_1.hashSignature)((0, toSignature_js_1.toSignature)(fn));
} //# sourceMappingURL=toSignatureHash.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toEventSelector.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toEventSelector = void 0;
const toSignatureHash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toSignatureHash.js [app-client] (ecmascript)");
exports.toEventSelector = toSignatureHash_js_1.toSignatureHash; //# sourceMappingURL=toEventSelector.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidAddressError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class InvalidAddressError extends base_js_1.BaseError {
    constructor({ address }){
        super(`Address "${address}" is invalid.`, {
            metaMessages: [
                '- Address must be a hex value of 20 bytes (40 hex characters).',
                '- Address must match its checksum counterpart.'
            ],
            name: 'InvalidAddressError'
        });
    }
}
exports.InvalidAddressError = InvalidAddressError; //# sourceMappingURL=address.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/lru.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LruMap = void 0;
class LruMap extends Map {
    constructor(size){
        super();
        Object.defineProperty(this, "maxSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.maxSize = size;
    }
    get(key) {
        const value = super.get(key);
        if (super.has(key) && value !== undefined) {
            this.delete(key);
            super.set(key, value);
        }
        return value;
    }
    set(key, value) {
        super.set(key, value);
        if (this.maxSize && this.size > this.maxSize) {
            const firstKey = this.keys().next().value;
            if (firstKey) this.delete(firstKey);
        }
        return this;
    }
}
exports.LruMap = LruMap; //# sourceMappingURL=lru.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checksumAddress = checksumAddress;
exports.getAddress = getAddress;
const address_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const keccak256_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
const lru_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/lru.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
const checksumAddressCache = new lru_js_1.LruMap(8192);
function checksumAddress(address_, chainId) {
    if (checksumAddressCache.has(`${address_}.${chainId}`)) return checksumAddressCache.get(`${address_}.${chainId}`);
    const hexAddress = chainId ? `${chainId}${address_.toLowerCase()}` : address_.substring(2).toLowerCase();
    const hash = (0, keccak256_js_1.keccak256)((0, toBytes_js_1.stringToBytes)(hexAddress), 'bytes');
    const address = (chainId ? hexAddress.substring(`${chainId}0x`.length) : hexAddress).split('');
    for(let i = 0; i < 40; i += 2){
        if (hash[i >> 1] >> 4 >= 8 && address[i]) {
            address[i] = address[i].toUpperCase();
        }
        if ((hash[i >> 1] & 0x0f) >= 8 && address[i + 1]) {
            address[i + 1] = address[i + 1].toUpperCase();
        }
    }
    const result = `0x${address.join('')}`;
    checksumAddressCache.set(`${address_}.${chainId}`, result);
    return result;
}
function getAddress(address, chainId) {
    if (!(0, isAddress_js_1.isAddress)(address, {
        strict: false
    })) throw new address_js_1.InvalidAddressError({
        address
    });
    return checksumAddress(address, chainId);
} //# sourceMappingURL=getAddress.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isAddressCache = void 0;
exports.isAddress = isAddress;
const lru_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/lru.js [app-client] (ecmascript)");
const getAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
const addressRegex = /^0x[a-fA-F0-9]{40}$/;
exports.isAddressCache = new lru_js_1.LruMap(8192);
function isAddress(address, options) {
    const { strict = true } = options ?? {};
    const cacheKey = `${address}.${strict}`;
    if (exports.isAddressCache.has(cacheKey)) return exports.isAddressCache.get(cacheKey);
    const result = (()=>{
        if (!addressRegex.test(address)) return false;
        if (address.toLowerCase() === address) return true;
        if (strict) return (0, getAddress_js_1.checksumAddress)(address) === address;
        return true;
    })();
    exports.isAddressCache.set(cacheKey, result);
    return result;
} //# sourceMappingURL=isAddress.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concat = concat;
exports.concatBytes = concatBytes;
exports.concatHex = concatHex;
function concat(values) {
    if (typeof values[0] === 'string') return concatHex(values);
    return concatBytes(values);
}
function concatBytes(values) {
    let length = 0;
    for (const arr of values){
        length += arr.length;
    }
    const result = new Uint8Array(length);
    let offset = 0;
    for (const arr of values){
        result.set(arr, offset);
        offset += arr.length;
    }
    return result;
}
function concatHex(values) {
    return `0x${values.reduce((acc, x)=>acc + x.replace('0x', ''), '')}`;
} //# sourceMappingURL=concat.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.slice = slice;
exports.sliceBytes = sliceBytes;
exports.sliceHex = sliceHex;
const data_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/data.js [app-client] (ecmascript)");
const isHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
function slice(value, start, end, { strict } = {}) {
    if ((0, isHex_js_1.isHex)(value, {
        strict: false
    })) return sliceHex(value, start, end, {
        strict
    });
    return sliceBytes(value, start, end, {
        strict
    });
}
function assertStartOffset(value, start) {
    if (typeof start === 'number' && start > 0 && start > (0, size_js_1.size)(value) - 1) throw new data_js_1.SliceOffsetOutOfBoundsError({
        offset: start,
        position: 'start',
        size: (0, size_js_1.size)(value)
    });
}
function assertEndOffset(value, start, end) {
    if (typeof start === 'number' && typeof end === 'number' && (0, size_js_1.size)(value) !== end - start) {
        throw new data_js_1.SliceOffsetOutOfBoundsError({
            offset: end,
            position: 'end',
            size: (0, size_js_1.size)(value)
        });
    }
}
function sliceBytes(value_, start, end, { strict } = {}) {
    assertStartOffset(value_, start);
    const value = value_.slice(start, end);
    if (strict) assertEndOffset(value, start, end);
    return value;
}
function sliceHex(value_, start, end, { strict } = {}) {
    assertStartOffset(value_, start);
    const value = `0x${value_.replace('0x', '').slice((start ?? 0) * 2, (end ?? value_.length) * 2)}`;
    if (strict) assertEndOffset(value, start, end);
    return value;
} //# sourceMappingURL=slice.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/regex.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.integerRegex = exports.bytesRegex = exports.arrayRegex = void 0;
exports.arrayRegex = /^(.*)\[([0-9]*)\]$/;
exports.bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
exports.integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/; //# sourceMappingURL=regex.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeAbiParameters = encodeAbiParameters;
exports.getArrayComponents = getArrayComponents;
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const address_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const encoding_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/encoding.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const pad_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/pad.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
const slice_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const regex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/regex.js [app-client] (ecmascript)");
function encodeAbiParameters(params, values) {
    if (params.length !== values.length) throw new abi_js_1.AbiEncodingLengthMismatchError({
        expectedLength: params.length,
        givenLength: values.length
    });
    const preparedParams = prepareParams({
        params: params,
        values: values
    });
    const data = encodeParams(preparedParams);
    if (data.length === 0) return '0x';
    return data;
}
function prepareParams({ params, values }) {
    const preparedParams = [];
    for(let i = 0; i < params.length; i++){
        preparedParams.push(prepareParam({
            param: params[i],
            value: values[i]
        }));
    }
    return preparedParams;
}
function prepareParam({ param, value }) {
    const arrayComponents = getArrayComponents(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return encodeArray(value, {
            length,
            param: {
                ...param,
                type
            }
        });
    }
    if (param.type === 'tuple') {
        return encodeTuple(value, {
            param: param
        });
    }
    if (param.type === 'address') {
        return encodeAddress(value);
    }
    if (param.type === 'bool') {
        return encodeBool(value);
    }
    if (param.type.startsWith('uint') || param.type.startsWith('int')) {
        const signed = param.type.startsWith('int');
        const [, , size = '256'] = regex_js_1.integerRegex.exec(param.type) ?? [];
        return encodeNumber(value, {
            signed,
            size: Number(size)
        });
    }
    if (param.type.startsWith('bytes')) {
        return encodeBytes(value, {
            param
        });
    }
    if (param.type === 'string') {
        return encodeString(value);
    }
    throw new abi_js_1.InvalidAbiEncodingTypeError(param.type, {
        docsPath: '/docs/contract/encodeAbiParameters'
    });
}
function encodeParams(preparedParams) {
    let staticSize = 0;
    for(let i = 0; i < preparedParams.length; i++){
        const { dynamic, encoded } = preparedParams[i];
        if (dynamic) staticSize += 32;
        else staticSize += (0, size_js_1.size)(encoded);
    }
    const staticParams = [];
    const dynamicParams = [];
    let dynamicSize = 0;
    for(let i = 0; i < preparedParams.length; i++){
        const { dynamic, encoded } = preparedParams[i];
        if (dynamic) {
            staticParams.push((0, toHex_js_1.numberToHex)(staticSize + dynamicSize, {
                size: 32
            }));
            dynamicParams.push(encoded);
            dynamicSize += (0, size_js_1.size)(encoded);
        } else {
            staticParams.push(encoded);
        }
    }
    return (0, concat_js_1.concat)([
        ...staticParams,
        ...dynamicParams
    ]);
}
function encodeAddress(value) {
    if (!(0, isAddress_js_1.isAddress)(value)) throw new address_js_1.InvalidAddressError({
        address: value
    });
    return {
        dynamic: false,
        encoded: (0, pad_js_1.padHex)(value.toLowerCase())
    };
}
function encodeArray(value, { length, param }) {
    const dynamic = length === null;
    if (!Array.isArray(value)) throw new abi_js_1.InvalidArrayError(value);
    if (!dynamic && value.length !== length) throw new abi_js_1.AbiEncodingArrayLengthMismatchError({
        expectedLength: length,
        givenLength: value.length,
        type: `${param.type}[${length}]`
    });
    let dynamicChild = false;
    const preparedParams = [];
    for(let i = 0; i < value.length; i++){
        const preparedParam = prepareParam({
            param,
            value: value[i]
        });
        if (preparedParam.dynamic) dynamicChild = true;
        preparedParams.push(preparedParam);
    }
    if (dynamic || dynamicChild) {
        const data = encodeParams(preparedParams);
        if (dynamic) {
            const length = (0, toHex_js_1.numberToHex)(preparedParams.length, {
                size: 32
            });
            return {
                dynamic: true,
                encoded: preparedParams.length > 0 ? (0, concat_js_1.concat)([
                    length,
                    data
                ]) : length
            };
        }
        if (dynamicChild) return {
            dynamic: true,
            encoded: data
        };
    }
    return {
        dynamic: false,
        encoded: (0, concat_js_1.concat)(preparedParams.map(({ encoded })=>encoded))
    };
}
function encodeBytes(value, { param }) {
    const [, paramSize] = param.type.split('bytes');
    const bytesSize = (0, size_js_1.size)(value);
    if (!paramSize) {
        let value_ = value;
        if (bytesSize % 32 !== 0) value_ = (0, pad_js_1.padHex)(value_, {
            dir: 'right',
            size: Math.ceil((value.length - 2) / 2 / 32) * 32
        });
        return {
            dynamic: true,
            encoded: (0, concat_js_1.concat)([
                (0, pad_js_1.padHex)((0, toHex_js_1.numberToHex)(bytesSize, {
                    size: 32
                })),
                value_
            ])
        };
    }
    if (bytesSize !== Number.parseInt(paramSize, 10)) throw new abi_js_1.AbiEncodingBytesSizeMismatchError({
        expectedSize: Number.parseInt(paramSize, 10),
        value
    });
    return {
        dynamic: false,
        encoded: (0, pad_js_1.padHex)(value, {
            dir: 'right'
        })
    };
}
function encodeBool(value) {
    if (typeof value !== 'boolean') throw new base_js_1.BaseError(`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
    return {
        dynamic: false,
        encoded: (0, pad_js_1.padHex)((0, toHex_js_1.boolToHex)(value))
    };
}
function encodeNumber(value, { signed, size = 256 }) {
    if (typeof size === 'number') {
        const max = 2n ** (BigInt(size) - (signed ? 1n : 0n)) - 1n;
        const min = signed ? -max - 1n : 0n;
        if (value > max || value < min) throw new encoding_js_1.IntegerOutOfRangeError({
            max: max.toString(),
            min: min.toString(),
            signed,
            size: size / 8,
            value: value.toString()
        });
    }
    return {
        dynamic: false,
        encoded: (0, toHex_js_1.numberToHex)(value, {
            size: 32,
            signed
        })
    };
}
function encodeString(value) {
    const hexValue = (0, toHex_js_1.stringToHex)(value);
    const partsLength = Math.ceil((0, size_js_1.size)(hexValue) / 32);
    const parts = [];
    for(let i = 0; i < partsLength; i++){
        parts.push((0, pad_js_1.padHex)((0, slice_js_1.slice)(hexValue, i * 32, (i + 1) * 32), {
            dir: 'right'
        }));
    }
    return {
        dynamic: true,
        encoded: (0, concat_js_1.concat)([
            (0, pad_js_1.padHex)((0, toHex_js_1.numberToHex)((0, size_js_1.size)(hexValue), {
                size: 32
            })),
            ...parts
        ])
    };
}
function encodeTuple(value, { param }) {
    let dynamic = false;
    const preparedParams = [];
    for(let i = 0; i < param.components.length; i++){
        const param_ = param.components[i];
        const index = Array.isArray(value) ? i : param_.name;
        const preparedParam = prepareParam({
            param: param_,
            value: value[index]
        });
        preparedParams.push(preparedParam);
        if (preparedParam.dynamic) dynamic = true;
    }
    return {
        dynamic,
        encoded: dynamic ? encodeParams(preparedParams) : (0, concat_js_1.concat)(preparedParams.map(({ encoded })=>encoded))
    };
}
function getArrayComponents(type) {
    const matches = type.match(/^(.*)\[(\d+)?\]$/);
    return matches ? [
        matches[2] ? Number(matches[2]) : null,
        matches[1]
    ] : undefined;
} //# sourceMappingURL=encodeAbiParameters.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toFunctionSelector.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toFunctionSelector = void 0;
const slice_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)");
const toSignatureHash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toSignatureHash.js [app-client] (ecmascript)");
const toFunctionSelector = (fn)=>(0, slice_js_1.slice)((0, toSignatureHash_js_1.toSignatureHash)(fn), 0, 4);
exports.toFunctionSelector = toFunctionSelector; //# sourceMappingURL=toFunctionSelector.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAbiItem = getAbiItem;
exports.isArgOfType = isArgOfType;
exports.getAmbiguousTypes = getAmbiguousTypes;
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const isHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
const toEventSelector_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toEventSelector.js [app-client] (ecmascript)");
const toFunctionSelector_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toFunctionSelector.js [app-client] (ecmascript)");
function getAbiItem(parameters) {
    const { abi, args = [], name } = parameters;
    const isSelector = (0, isHex_js_1.isHex)(name, {
        strict: false
    });
    const abiItems = abi.filter((abiItem)=>{
        if (isSelector) {
            if (abiItem.type === 'function') return (0, toFunctionSelector_js_1.toFunctionSelector)(abiItem) === name;
            if (abiItem.type === 'event') return (0, toEventSelector_js_1.toEventSelector)(abiItem) === name;
            return false;
        }
        return 'name' in abiItem && abiItem.name === name;
    });
    if (abiItems.length === 0) return undefined;
    if (abiItems.length === 1) return abiItems[0];
    let matchedAbiItem;
    for (const abiItem of abiItems){
        if (!('inputs' in abiItem)) continue;
        if (!args || args.length === 0) {
            if (!abiItem.inputs || abiItem.inputs.length === 0) return abiItem;
            continue;
        }
        if (!abiItem.inputs) continue;
        if (abiItem.inputs.length === 0) continue;
        if (abiItem.inputs.length !== args.length) continue;
        const matched = args.every((arg, index)=>{
            const abiParameter = 'inputs' in abiItem && abiItem.inputs[index];
            if (!abiParameter) return false;
            return isArgOfType(arg, abiParameter);
        });
        if (matched) {
            if (matchedAbiItem && 'inputs' in matchedAbiItem && matchedAbiItem.inputs) {
                const ambiguousTypes = getAmbiguousTypes(abiItem.inputs, matchedAbiItem.inputs, args);
                if (ambiguousTypes) throw new abi_js_1.AbiItemAmbiguityError({
                    abiItem,
                    type: ambiguousTypes[0]
                }, {
                    abiItem: matchedAbiItem,
                    type: ambiguousTypes[1]
                });
            }
            matchedAbiItem = abiItem;
        }
    }
    if (matchedAbiItem) return matchedAbiItem;
    return abiItems[0];
}
function isArgOfType(arg, abiParameter) {
    const argType = typeof arg;
    const abiParameterType = abiParameter.type;
    switch(abiParameterType){
        case 'address':
            return (0, isAddress_js_1.isAddress)(arg, {
                strict: false
            });
        case 'bool':
            return argType === 'boolean';
        case 'function':
            return argType === 'string';
        case 'string':
            return argType === 'string';
        default:
            {
                if (abiParameterType === 'tuple' && 'components' in abiParameter) return Object.values(abiParameter.components).every((component, index)=>{
                    return isArgOfType(Object.values(arg)[index], component);
                });
                if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType)) return argType === 'number' || argType === 'bigint';
                if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType)) return argType === 'string' || arg instanceof Uint8Array;
                if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) {
                    return Array.isArray(arg) && arg.every((x)=>isArgOfType(x, {
                            ...abiParameter,
                            type: abiParameterType.replace(/(\[[0-9]{0,}\])$/, '')
                        }));
                }
                return false;
            }
    }
}
function getAmbiguousTypes(sourceParameters, targetParameters, args) {
    for(const parameterIndex in sourceParameters){
        const sourceParameter = sourceParameters[parameterIndex];
        const targetParameter = targetParameters[parameterIndex];
        if (sourceParameter.type === 'tuple' && targetParameter.type === 'tuple' && 'components' in sourceParameter && 'components' in targetParameter) return getAmbiguousTypes(sourceParameter.components, targetParameter.components, args[parameterIndex]);
        const types = [
            sourceParameter.type,
            targetParameter.type
        ];
        const ambiguous = (()=>{
            if (types.includes('address') && types.includes('bytes20')) return true;
            if (types.includes('address') && types.includes('string')) return (0, isAddress_js_1.isAddress)(args[parameterIndex], {
                strict: false
            });
            if (types.includes('address') && types.includes('bytes')) return (0, isAddress_js_1.isAddress)(args[parameterIndex], {
                strict: false
            });
            return false;
        })();
        if (ambiguous) return types;
    }
    return;
} //# sourceMappingURL=getAbiItem.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeEventTopics.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeEventTopics = encodeEventTopics;
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const log_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/log.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const keccak256_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
const toEventSelector_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toEventSelector.js [app-client] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
const formatAbiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-client] (ecmascript)");
const getAbiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-client] (ecmascript)");
const docsPath = '/docs/contract/encodeEventTopics';
function encodeEventTopics(parameters) {
    const { abi, eventName, args } = parameters;
    let abiItem = abi[0];
    if (eventName) {
        const item = (0, getAbiItem_js_1.getAbiItem)({
            abi,
            name: eventName
        });
        if (!item) throw new abi_js_1.AbiEventNotFoundError(eventName, {
            docsPath
        });
        abiItem = item;
    }
    if (abiItem.type !== 'event') throw new abi_js_1.AbiEventNotFoundError(undefined, {
        docsPath
    });
    const definition = (0, formatAbiItem_js_1.formatAbiItem)(abiItem);
    const signature = (0, toEventSelector_js_1.toEventSelector)(definition);
    let topics = [];
    if (args && 'inputs' in abiItem) {
        const indexedInputs = abiItem.inputs?.filter((param)=>'indexed' in param && param.indexed);
        const args_ = Array.isArray(args) ? args : Object.values(args).length > 0 ? indexedInputs?.map((x)=>args[x.name]) ?? [] : [];
        if (args_.length > 0) {
            topics = indexedInputs?.map((param, i)=>{
                if (Array.isArray(args_[i])) return args_[i].map((_, j)=>encodeArg({
                        param,
                        value: args_[i][j]
                    }));
                return typeof args_[i] !== 'undefined' && args_[i] !== null ? encodeArg({
                    param,
                    value: args_[i]
                }) : null;
            }) ?? [];
        }
    }
    return [
        signature,
        ...topics
    ];
}
function encodeArg({ param, value }) {
    if (param.type === 'string' || param.type === 'bytes') return (0, keccak256_js_1.keccak256)((0, toBytes_js_1.toBytes)(value));
    if (param.type === 'tuple' || param.type.match(/^(.*)\[(\d+)?\]$/)) throw new log_js_1.FilterTypeNotSupportedError(param.type);
    return (0, encodeAbiParameters_js_1.encodeAbiParameters)([
        param
    ], [
        value
    ]);
} //# sourceMappingURL=encodeEventTopics.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/filters/createFilterRequestScope.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createFilterRequestScope = createFilterRequestScope;
function createFilterRequestScope(client, { method }) {
    const requestMap = {};
    if (client.transport.type === 'fallback') client.transport.onResponse?.(({ method: method_, response: id, status, transport })=>{
        if (status === 'success' && method === method_) requestMap[id] = transport.request;
    });
    return (id)=>requestMap[id] || client.request;
} //# sourceMappingURL=createFilterRequestScope.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/createContractEventFilter.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createContractEventFilter = createContractEventFilter;
const encodeEventTopics_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeEventTopics.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const createFilterRequestScope_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/filters/createFilterRequestScope.js [app-client] (ecmascript)");
async function createContractEventFilter(client, parameters) {
    const { address, abi, args, eventName, fromBlock, strict, toBlock } = parameters;
    const getRequest = (0, createFilterRequestScope_js_1.createFilterRequestScope)(client, {
        method: 'eth_newFilter'
    });
    const topics = eventName ? (0, encodeEventTopics_js_1.encodeEventTopics)({
        abi,
        args,
        eventName
    }) : undefined;
    const id = await client.request({
        method: 'eth_newFilter',
        params: [
            {
                address,
                fromBlock: typeof fromBlock === 'bigint' ? (0, toHex_js_1.numberToHex)(fromBlock) : fromBlock,
                toBlock: typeof toBlock === 'bigint' ? (0, toHex_js_1.numberToHex)(toBlock) : toBlock,
                topics
            }
        ]
    });
    return {
        abi,
        args,
        eventName,
        id,
        request: getRequest(id),
        strict: Boolean(strict),
        type: 'event'
    };
} //# sourceMappingURL=createContractEventFilter.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseAccount = parseAccount;
function parseAccount(account) {
    if (typeof account === 'string') return {
        address: account,
        type: 'json-rpc'
    };
    return account;
} //# sourceMappingURL=parseAccount.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/prepareEncodeFunctionData.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.prepareEncodeFunctionData = prepareEncodeFunctionData;
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const toFunctionSelector_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toFunctionSelector.js [app-client] (ecmascript)");
const formatAbiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-client] (ecmascript)");
const getAbiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-client] (ecmascript)");
const docsPath = '/docs/contract/encodeFunctionData';
function prepareEncodeFunctionData(parameters) {
    const { abi, args, functionName } = parameters;
    let abiItem = abi[0];
    if (functionName) {
        const item = (0, getAbiItem_js_1.getAbiItem)({
            abi,
            args,
            name: functionName
        });
        if (!item) throw new abi_js_1.AbiFunctionNotFoundError(functionName, {
            docsPath
        });
        abiItem = item;
    }
    if (abiItem.type !== 'function') throw new abi_js_1.AbiFunctionNotFoundError(undefined, {
        docsPath
    });
    return {
        abi: [
            abiItem
        ],
        functionName: (0, toFunctionSelector_js_1.toFunctionSelector)((0, formatAbiItem_js_1.formatAbiItem)(abiItem))
    };
} //# sourceMappingURL=prepareEncodeFunctionData.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeFunctionData = encodeFunctionData;
const concat_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
const prepareEncodeFunctionData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/prepareEncodeFunctionData.js [app-client] (ecmascript)");
function encodeFunctionData(parameters) {
    const { args } = parameters;
    const { abi, functionName } = (()=>{
        if (parameters.abi.length === 1 && parameters.functionName?.startsWith('0x')) return parameters;
        return (0, prepareEncodeFunctionData_js_1.prepareEncodeFunctionData)(parameters);
    })();
    const abiItem = abi[0];
    const signature = functionName;
    const data = 'inputs' in abiItem && abiItem.inputs ? (0, encodeAbiParameters_js_1.encodeAbiParameters)(abiItem.inputs, args ?? []) : undefined;
    return (0, concat_js_1.concatHex)([
        signature,
        data ?? '0x'
    ]);
} //# sourceMappingURL=encodeFunctionData.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/solidity.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.solidityPanic = exports.solidityError = exports.panicReasons = void 0;
exports.panicReasons = {
    1: 'An `assert` condition failed.',
    17: 'Arithmetic operation resulted in underflow or overflow.',
    18: 'Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).',
    33: 'Attempted to convert to an invalid type.',
    34: 'Attempted to access a storage byte array that is incorrectly encoded.',
    49: 'Performed `.pop()` on an empty array',
    50: 'Array index is out of bounds.',
    65: 'Allocated too much memory or created an array which is too large.',
    81: 'Attempted to call a zero-initialized variable of internal function type.'
};
exports.solidityError = {
    inputs: [
        {
            name: 'message',
            type: 'string'
        }
    ],
    name: 'Error',
    type: 'error'
};
exports.solidityPanic = {
    inputs: [
        {
            name: 'reason',
            type: 'uint256'
        }
    ],
    name: 'Panic',
    type: 'error'
}; //# sourceMappingURL=solidity.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/cursor.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RecursiveReadLimitExceededError = exports.PositionOutOfBoundsError = exports.NegativeOffsetError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class NegativeOffsetError extends base_js_1.BaseError {
    constructor({ offset }){
        super(`Offset \`${offset}\` cannot be negative.`, {
            name: 'NegativeOffsetError'
        });
    }
}
exports.NegativeOffsetError = NegativeOffsetError;
class PositionOutOfBoundsError extends base_js_1.BaseError {
    constructor({ length, position }){
        super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`, {
            name: 'PositionOutOfBoundsError'
        });
    }
}
exports.PositionOutOfBoundsError = PositionOutOfBoundsError;
class RecursiveReadLimitExceededError extends base_js_1.BaseError {
    constructor({ count, limit }){
        super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`, {
            name: 'RecursiveReadLimitExceededError'
        });
    }
}
exports.RecursiveReadLimitExceededError = RecursiveReadLimitExceededError; //# sourceMappingURL=cursor.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/cursor.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createCursor = createCursor;
const cursor_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/cursor.js [app-client] (ecmascript)");
const staticCursor = {
    bytes: new Uint8Array(),
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: new Map(),
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit () {
        if (this.recursiveReadCount >= this.recursiveReadLimit) throw new cursor_js_1.RecursiveReadLimitExceededError({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit
        });
    },
    assertPosition (position) {
        if (position < 0 || position > this.bytes.length - 1) throw new cursor_js_1.PositionOutOfBoundsError({
            length: this.bytes.length,
            position
        });
    },
    decrementPosition (offset) {
        if (offset < 0) throw new cursor_js_1.NegativeOffsetError({
            offset
        });
        const position = this.position - offset;
        this.assertPosition(position);
        this.position = position;
    },
    getReadCount (position) {
        return this.positionReadCount.get(position || this.position) || 0;
    },
    incrementPosition (offset) {
        if (offset < 0) throw new cursor_js_1.NegativeOffsetError({
            offset
        });
        const position = this.position + offset;
        this.assertPosition(position);
        this.position = position;
    },
    inspectByte (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
    },
    inspectBytes (length, position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + length - 1);
        return this.bytes.subarray(position, position + length);
    },
    inspectUint8 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
    },
    inspectUint16 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 1);
        return this.dataView.getUint16(position);
    },
    inspectUint24 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 2);
        return (this.dataView.getUint16(position) << 8) + this.dataView.getUint8(position + 2);
    },
    inspectUint32 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 3);
        return this.dataView.getUint32(position);
    },
    pushByte (byte) {
        this.assertPosition(this.position);
        this.bytes[this.position] = byte;
        this.position++;
    },
    pushBytes (bytes) {
        this.assertPosition(this.position + bytes.length - 1);
        this.bytes.set(bytes, this.position);
        this.position += bytes.length;
    },
    pushUint8 (value) {
        this.assertPosition(this.position);
        this.bytes[this.position] = value;
        this.position++;
    },
    pushUint16 (value) {
        this.assertPosition(this.position + 1);
        this.dataView.setUint16(this.position, value);
        this.position += 2;
    },
    pushUint24 (value) {
        this.assertPosition(this.position + 2);
        this.dataView.setUint16(this.position, value >> 8);
        this.dataView.setUint8(this.position + 2, value & ~4294967040);
        this.position += 3;
    },
    pushUint32 (value) {
        this.assertPosition(this.position + 3);
        this.dataView.setUint32(this.position, value);
        this.position += 4;
    },
    readByte () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectByte();
        this.position++;
        return value;
    },
    readBytes (length, size) {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectBytes(length);
        this.position += size ?? length;
        return value;
    },
    readUint8 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint8();
        this.position += 1;
        return value;
    },
    readUint16 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint16();
        this.position += 2;
        return value;
    },
    readUint24 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint24();
        this.position += 3;
        return value;
    },
    readUint32 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint32();
        this.position += 4;
        return value;
    },
    get remaining () {
        return this.bytes.length - this.position;
    },
    setPosition (position) {
        const oldPosition = this.position;
        this.assertPosition(position);
        this.position = position;
        return ()=>this.position = oldPosition;
    },
    _touch () {
        if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
        const count = this.getReadCount();
        this.positionReadCount.set(this.position, count + 1);
        if (count > 0) this.recursiveReadCount++;
    }
};
function createCursor(bytes, { recursiveReadLimit = 8_192 } = {}) {
    const cursor = Object.create(staticCursor);
    cursor.bytes = bytes;
    cursor.dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    cursor.positionReadCount = new Map();
    cursor.recursiveReadLimit = recursiveReadLimit;
    return cursor;
} //# sourceMappingURL=cursor.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromBytes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromBytes = fromBytes;
exports.bytesToBigInt = bytesToBigInt;
exports.bytesToBool = bytesToBool;
exports.bytesToNumber = bytesToNumber;
exports.bytesToString = bytesToString;
const encoding_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/encoding.js [app-client] (ecmascript)");
const trim_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/trim.js [app-client] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function fromBytes(bytes, toOrOpts) {
    const opts = typeof toOrOpts === 'string' ? {
        to: toOrOpts
    } : toOrOpts;
    const to = opts.to;
    if (to === 'number') return bytesToNumber(bytes, opts);
    if (to === 'bigint') return bytesToBigInt(bytes, opts);
    if (to === 'boolean') return bytesToBool(bytes, opts);
    if (to === 'string') return bytesToString(bytes, opts);
    return (0, toHex_js_1.bytesToHex)(bytes, opts);
}
function bytesToBigInt(bytes, opts = {}) {
    if (typeof opts.size !== 'undefined') (0, fromHex_js_1.assertSize)(bytes, {
        size: opts.size
    });
    const hex = (0, toHex_js_1.bytesToHex)(bytes, opts);
    return (0, fromHex_js_1.hexToBigInt)(hex, opts);
}
function bytesToBool(bytes_, opts = {}) {
    let bytes = bytes_;
    if (typeof opts.size !== 'undefined') {
        (0, fromHex_js_1.assertSize)(bytes, {
            size: opts.size
        });
        bytes = (0, trim_js_1.trim)(bytes);
    }
    if (bytes.length > 1 || bytes[0] > 1) throw new encoding_js_1.InvalidBytesBooleanError(bytes);
    return Boolean(bytes[0]);
}
function bytesToNumber(bytes, opts = {}) {
    if (typeof opts.size !== 'undefined') (0, fromHex_js_1.assertSize)(bytes, {
        size: opts.size
    });
    const hex = (0, toHex_js_1.bytesToHex)(bytes, opts);
    return (0, fromHex_js_1.hexToNumber)(hex, opts);
}
function bytesToString(bytes_, opts = {}) {
    let bytes = bytes_;
    if (typeof opts.size !== 'undefined') {
        (0, fromHex_js_1.assertSize)(bytes, {
            size: opts.size
        });
        bytes = (0, trim_js_1.trim)(bytes, {
            dir: 'right'
        });
    }
    return new TextDecoder().decode(bytes);
} //# sourceMappingURL=fromBytes.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeAbiParameters = decodeAbiParameters;
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const getAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
const cursor_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/cursor.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
const slice_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)");
const trim_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/trim.js [app-client] (ecmascript)");
const fromBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromBytes.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
function decodeAbiParameters(params, data) {
    const bytes = typeof data === 'string' ? (0, toBytes_js_1.hexToBytes)(data) : data;
    const cursor = (0, cursor_js_1.createCursor)(bytes);
    if ((0, size_js_1.size)(bytes) === 0 && params.length > 0) throw new abi_js_1.AbiDecodingZeroDataError();
    if ((0, size_js_1.size)(data) && (0, size_js_1.size)(data) < 32) throw new abi_js_1.AbiDecodingDataSizeTooSmallError({
        data: typeof data === 'string' ? data : (0, toHex_js_1.bytesToHex)(data),
        params: params,
        size: (0, size_js_1.size)(data)
    });
    let consumed = 0;
    const values = [];
    for(let i = 0; i < params.length; ++i){
        const param = params[i];
        cursor.setPosition(consumed);
        const [data, consumed_] = decodeParameter(cursor, param, {
            staticPosition: 0
        });
        consumed += consumed_;
        values.push(data);
    }
    return values;
}
function decodeParameter(cursor, param, { staticPosition }) {
    const arrayComponents = (0, encodeAbiParameters_js_1.getArrayComponents)(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return decodeArray(cursor, {
            ...param,
            type
        }, {
            length,
            staticPosition
        });
    }
    if (param.type === 'tuple') return decodeTuple(cursor, param, {
        staticPosition
    });
    if (param.type === 'address') return decodeAddress(cursor);
    if (param.type === 'bool') return decodeBool(cursor);
    if (param.type.startsWith('bytes')) return decodeBytes(cursor, param, {
        staticPosition
    });
    if (param.type.startsWith('uint') || param.type.startsWith('int')) return decodeNumber(cursor, param);
    if (param.type === 'string') return decodeString(cursor, {
        staticPosition
    });
    throw new abi_js_1.InvalidAbiDecodingTypeError(param.type, {
        docsPath: '/docs/contract/decodeAbiParameters'
    });
}
const sizeOfLength = 32;
const sizeOfOffset = 32;
function decodeAddress(cursor) {
    const value = cursor.readBytes(32);
    return [
        (0, getAddress_js_1.checksumAddress)((0, toHex_js_1.bytesToHex)((0, slice_js_1.sliceBytes)(value, -20))),
        32
    ];
}
function decodeArray(cursor, param, { length, staticPosition }) {
    if (!length) {
        const offset = (0, fromBytes_js_1.bytesToNumber)(cursor.readBytes(sizeOfOffset));
        const start = staticPosition + offset;
        const startOfData = start + sizeOfLength;
        cursor.setPosition(start);
        const length = (0, fromBytes_js_1.bytesToNumber)(cursor.readBytes(sizeOfLength));
        const dynamicChild = hasDynamicChild(param);
        let consumed = 0;
        const value = [];
        for(let i = 0; i < length; ++i){
            cursor.setPosition(startOfData + (dynamicChild ? i * 32 : consumed));
            const [data, consumed_] = decodeParameter(cursor, param, {
                staticPosition: startOfData
            });
            consumed += consumed_;
            value.push(data);
        }
        cursor.setPosition(staticPosition + 32);
        return [
            value,
            32
        ];
    }
    if (hasDynamicChild(param)) {
        const offset = (0, fromBytes_js_1.bytesToNumber)(cursor.readBytes(sizeOfOffset));
        const start = staticPosition + offset;
        const value = [];
        for(let i = 0; i < length; ++i){
            cursor.setPosition(start + i * 32);
            const [data] = decodeParameter(cursor, param, {
                staticPosition: start
            });
            value.push(data);
        }
        cursor.setPosition(staticPosition + 32);
        return [
            value,
            32
        ];
    }
    let consumed = 0;
    const value = [];
    for(let i = 0; i < length; ++i){
        const [data, consumed_] = decodeParameter(cursor, param, {
            staticPosition: staticPosition + consumed
        });
        consumed += consumed_;
        value.push(data);
    }
    return [
        value,
        consumed
    ];
}
function decodeBool(cursor) {
    return [
        (0, fromBytes_js_1.bytesToBool)(cursor.readBytes(32), {
            size: 32
        }),
        32
    ];
}
function decodeBytes(cursor, param, { staticPosition }) {
    const [_, size] = param.type.split('bytes');
    if (!size) {
        const offset = (0, fromBytes_js_1.bytesToNumber)(cursor.readBytes(32));
        cursor.setPosition(staticPosition + offset);
        const length = (0, fromBytes_js_1.bytesToNumber)(cursor.readBytes(32));
        if (length === 0) {
            cursor.setPosition(staticPosition + 32);
            return [
                '0x',
                32
            ];
        }
        const data = cursor.readBytes(length);
        cursor.setPosition(staticPosition + 32);
        return [
            (0, toHex_js_1.bytesToHex)(data),
            32
        ];
    }
    const value = (0, toHex_js_1.bytesToHex)(cursor.readBytes(Number.parseInt(size, 10), 32));
    return [
        value,
        32
    ];
}
function decodeNumber(cursor, param) {
    const signed = param.type.startsWith('int');
    const size = Number.parseInt(param.type.split('int')[1] || '256', 10);
    const value = cursor.readBytes(32);
    return [
        size > 48 ? (0, fromBytes_js_1.bytesToBigInt)(value, {
            signed
        }) : (0, fromBytes_js_1.bytesToNumber)(value, {
            signed
        }),
        32
    ];
}
function decodeTuple(cursor, param, { staticPosition }) {
    const hasUnnamedChild = param.components.length === 0 || param.components.some(({ name })=>!name);
    const value = hasUnnamedChild ? [] : {};
    let consumed = 0;
    if (hasDynamicChild(param)) {
        const offset = (0, fromBytes_js_1.bytesToNumber)(cursor.readBytes(sizeOfOffset));
        const start = staticPosition + offset;
        for(let i = 0; i < param.components.length; ++i){
            const component = param.components[i];
            cursor.setPosition(start + consumed);
            const [data, consumed_] = decodeParameter(cursor, component, {
                staticPosition: start
            });
            consumed += consumed_;
            value[hasUnnamedChild ? i : component?.name] = data;
        }
        cursor.setPosition(staticPosition + 32);
        return [
            value,
            32
        ];
    }
    for(let i = 0; i < param.components.length; ++i){
        const component = param.components[i];
        const [data, consumed_] = decodeParameter(cursor, component, {
            staticPosition
        });
        value[hasUnnamedChild ? i : component?.name] = data;
        consumed += consumed_;
    }
    return [
        value,
        consumed
    ];
}
function decodeString(cursor, { staticPosition }) {
    const offset = (0, fromBytes_js_1.bytesToNumber)(cursor.readBytes(32));
    const start = staticPosition + offset;
    cursor.setPosition(start);
    const length = (0, fromBytes_js_1.bytesToNumber)(cursor.readBytes(32));
    if (length === 0) {
        cursor.setPosition(staticPosition + 32);
        return [
            '',
            32
        ];
    }
    const data = cursor.readBytes(length, 32);
    const value = (0, fromBytes_js_1.bytesToString)((0, trim_js_1.trim)(data));
    cursor.setPosition(staticPosition + 32);
    return [
        value,
        32
    ];
}
function hasDynamicChild(param) {
    const { type } = param;
    if (type === 'string') return true;
    if (type === 'bytes') return true;
    if (type.endsWith('[]')) return true;
    if (type === 'tuple') return param.components?.some(hasDynamicChild);
    const arrayComponents = (0, encodeAbiParameters_js_1.getArrayComponents)(param.type);
    if (arrayComponents && hasDynamicChild({
        ...param,
        type: arrayComponents[1]
    })) return true;
    return false;
} //# sourceMappingURL=decodeAbiParameters.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeErrorResult.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeErrorResult = decodeErrorResult;
const solidity_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/solidity.js [app-client] (ecmascript)");
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const slice_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)");
const toFunctionSelector_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toFunctionSelector.js [app-client] (ecmascript)");
const decodeAbiParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-client] (ecmascript)");
const formatAbiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-client] (ecmascript)");
function decodeErrorResult(parameters) {
    const { abi, data } = parameters;
    const signature = (0, slice_js_1.slice)(data, 0, 4);
    if (signature === '0x') throw new abi_js_1.AbiDecodingZeroDataError();
    const abi_ = [
        ...abi || [],
        solidity_js_1.solidityError,
        solidity_js_1.solidityPanic
    ];
    const abiItem = abi_.find((x)=>x.type === 'error' && signature === (0, toFunctionSelector_js_1.toFunctionSelector)((0, formatAbiItem_js_1.formatAbiItem)(x)));
    if (!abiItem) throw new abi_js_1.AbiErrorSignatureNotFoundError(signature, {
        docsPath: '/docs/contract/decodeErrorResult'
    });
    return {
        abiItem,
        args: 'inputs' in abiItem && abiItem.inputs && abiItem.inputs.length > 0 ? (0, decodeAbiParameters_js_1.decodeAbiParameters)(abiItem.inputs, (0, slice_js_1.slice)(data, 4)) : undefined,
        errorName: abiItem.name
    };
} //# sourceMappingURL=decodeErrorResult.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stringify = void 0;
const stringify = (value, replacer, space)=>JSON.stringify(value, (key, value_)=>{
        const value = typeof value_ === 'bigint' ? value_.toString() : value_;
        return typeof replacer === 'function' ? replacer(key, value) : value;
    }, space);
exports.stringify = stringify; //# sourceMappingURL=stringify.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/formatAbiItemWithArgs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatAbiItemWithArgs = formatAbiItemWithArgs;
const stringify_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
function formatAbiItemWithArgs({ abiItem, args, includeFunctionName = true, includeName = false }) {
    if (!('name' in abiItem)) return;
    if (!('inputs' in abiItem)) return;
    if (!abiItem.inputs) return;
    return `${includeFunctionName ? abiItem.name : ''}(${abiItem.inputs.map((input, i)=>`${includeName && input.name ? `${input.name}: ` : ''}${typeof args[i] === 'object' ? (0, stringify_js_1.stringify)(args[i]) : args[i]}`).join(', ')})`;
} //# sourceMappingURL=formatAbiItemWithArgs.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/unit.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.weiUnits = exports.gweiUnits = exports.etherUnits = void 0;
exports.etherUnits = {
    gwei: 9,
    wei: 18
};
exports.gweiUnits = {
    ether: -9,
    wei: 9
};
exports.weiUnits = {
    ether: -18,
    gwei: -9
}; //# sourceMappingURL=unit.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/formatUnits.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatUnits = formatUnits;
function formatUnits(value, decimals) {
    let display = value.toString();
    const negative = display.startsWith('-');
    if (negative) display = display.slice(1);
    display = display.padStart(decimals, '0');
    let [integer, fraction] = [
        display.slice(0, display.length - decimals),
        display.slice(display.length - decimals)
    ];
    fraction = fraction.replace(/(0+)$/, '');
    return `${negative ? '-' : ''}${integer || '0'}${fraction ? `.${fraction}` : ''}`;
} //# sourceMappingURL=formatUnits.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/formatEther.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatEther = formatEther;
const unit_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/unit.js [app-client] (ecmascript)");
const formatUnits_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/formatUnits.js [app-client] (ecmascript)");
function formatEther(wei, unit = 'wei') {
    return (0, formatUnits_js_1.formatUnits)(wei, unit_js_1.etherUnits[unit]);
} //# sourceMappingURL=formatEther.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatGwei = formatGwei;
const unit_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/unit.js [app-client] (ecmascript)");
const formatUnits_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/formatUnits.js [app-client] (ecmascript)");
function formatGwei(wei, unit = 'wei') {
    return (0, formatUnits_js_1.formatUnits)(wei, unit_js_1.gweiUnits[unit]);
} //# sourceMappingURL=formatGwei.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/stateOverride.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StateAssignmentConflictError = exports.AccountStateConflictError = void 0;
exports.prettyStateMapping = prettyStateMapping;
exports.prettyStateOverride = prettyStateOverride;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class AccountStateConflictError extends base_js_1.BaseError {
    constructor({ address }){
        super(`State for account "${address}" is set multiple times.`, {
            name: 'AccountStateConflictError'
        });
    }
}
exports.AccountStateConflictError = AccountStateConflictError;
class StateAssignmentConflictError extends base_js_1.BaseError {
    constructor(){
        super('state and stateDiff are set on the same account.', {
            name: 'StateAssignmentConflictError'
        });
    }
}
exports.StateAssignmentConflictError = StateAssignmentConflictError;
function prettyStateMapping(stateMapping) {
    return stateMapping.reduce((pretty, { slot, value })=>{
        return `${pretty}        ${slot}: ${value}\n`;
    }, '');
}
function prettyStateOverride(stateOverride) {
    return stateOverride.reduce((pretty, { address, ...state })=>{
        let val = `${pretty}    ${address}:\n`;
        if (state.nonce) val += `      nonce: ${state.nonce}\n`;
        if (state.balance) val += `      balance: ${state.balance}\n`;
        if (state.code) val += `      code: ${state.code}\n`;
        if (state.state) {
            val += '      state:\n';
            val += prettyStateMapping(state.state);
        }
        if (state.stateDiff) {
            val += '      stateDiff:\n';
            val += prettyStateMapping(state.stateDiff);
        }
        return val;
    }, '  State Override:\n').slice(0, -1);
} //# sourceMappingURL=stateOverride.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WaitForTransactionReceiptTimeoutError = exports.TransactionReceiptRevertedError = exports.TransactionReceiptNotFoundError = exports.TransactionNotFoundError = exports.TransactionExecutionError = exports.InvalidStorageKeySizeError = exports.InvalidSerializedTransactionError = exports.InvalidSerializedTransactionTypeError = exports.InvalidSerializableTransactionError = exports.InvalidLegacyVError = exports.FeeConflictError = void 0;
exports.prettyPrint = prettyPrint;
const formatEther_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/formatEther.js [app-client] (ecmascript)");
const formatGwei_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
function prettyPrint(args) {
    const entries = Object.entries(args).map(([key, value])=>{
        if (value === undefined || value === false) return null;
        return [
            key,
            value
        ];
    }).filter(Boolean);
    const maxLength = entries.reduce((acc, [key])=>Math.max(acc, key.length), 0);
    return entries.map(([key, value])=>`  ${`${key}:`.padEnd(maxLength + 1)}  ${value}`).join('\n');
}
class FeeConflictError extends base_js_1.BaseError {
    constructor(){
        super([
            'Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.',
            'Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.'
        ].join('\n'), {
            name: 'FeeConflictError'
        });
    }
}
exports.FeeConflictError = FeeConflictError;
class InvalidLegacyVError extends base_js_1.BaseError {
    constructor({ v }){
        super(`Invalid \`v\` value "${v}". Expected 27 or 28.`, {
            name: 'InvalidLegacyVError'
        });
    }
}
exports.InvalidLegacyVError = InvalidLegacyVError;
class InvalidSerializableTransactionError extends base_js_1.BaseError {
    constructor({ transaction }){
        super('Cannot infer a transaction type from provided transaction.', {
            metaMessages: [
                'Provided Transaction:',
                '{',
                prettyPrint(transaction),
                '}',
                '',
                'To infer the type, either provide:',
                '- a `type` to the Transaction, or',
                '- an EIP-1559 Transaction with `maxFeePerGas`, or',
                '- an EIP-2930 Transaction with `gasPrice` & `accessList`, or',
                '- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or',
                '- an EIP-7702 Transaction with `authorizationList`, or',
                '- a Legacy Transaction with `gasPrice`'
            ],
            name: 'InvalidSerializableTransactionError'
        });
    }
}
exports.InvalidSerializableTransactionError = InvalidSerializableTransactionError;
class InvalidSerializedTransactionTypeError extends base_js_1.BaseError {
    constructor({ serializedType }){
        super(`Serialized transaction type "${serializedType}" is invalid.`, {
            name: 'InvalidSerializedTransactionType'
        });
        Object.defineProperty(this, "serializedType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.serializedType = serializedType;
    }
}
exports.InvalidSerializedTransactionTypeError = InvalidSerializedTransactionTypeError;
class InvalidSerializedTransactionError extends base_js_1.BaseError {
    constructor({ attributes, serializedTransaction, type }){
        const missing = Object.entries(attributes).map(([key, value])=>typeof value === 'undefined' ? key : undefined).filter(Boolean);
        super(`Invalid serialized transaction of type "${type}" was provided.`, {
            metaMessages: [
                `Serialized Transaction: "${serializedTransaction}"`,
                missing.length > 0 ? `Missing Attributes: ${missing.join(', ')}` : ''
            ].filter(Boolean),
            name: 'InvalidSerializedTransactionError'
        });
        Object.defineProperty(this, "serializedTransaction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.serializedTransaction = serializedTransaction;
        this.type = type;
    }
}
exports.InvalidSerializedTransactionError = InvalidSerializedTransactionError;
class InvalidStorageKeySizeError extends base_js_1.BaseError {
    constructor({ storageKey }){
        super(`Size for storage key "${storageKey}" is invalid. Expected 32 bytes. Got ${Math.floor((storageKey.length - 2) / 2)} bytes.`, {
            name: 'InvalidStorageKeySizeError'
        });
    }
}
exports.InvalidStorageKeySizeError = InvalidStorageKeySizeError;
class TransactionExecutionError extends base_js_1.BaseError {
    constructor(cause, { account, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }){
        const prettyArgs = prettyPrint({
            chain: chain && `${chain?.name} (id: ${chain?.id})`,
            from: account?.address,
            to,
            value: typeof value !== 'undefined' && `${(0, formatEther_js_1.formatEther)(value)} ${chain?.nativeCurrency?.symbol || 'ETH'}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(maxPriorityFeePerGas)} gwei`,
            nonce
        });
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...cause.metaMessages ? [
                    ...cause.metaMessages,
                    ' '
                ] : [],
                'Request Arguments:',
                prettyArgs
            ].filter(Boolean),
            name: 'TransactionExecutionError'
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cause = cause;
    }
}
exports.TransactionExecutionError = TransactionExecutionError;
class TransactionNotFoundError extends base_js_1.BaseError {
    constructor({ blockHash, blockNumber, blockTag, hash, index }){
        let identifier = 'Transaction';
        if (blockTag && index !== undefined) identifier = `Transaction at block time "${blockTag}" at index "${index}"`;
        if (blockHash && index !== undefined) identifier = `Transaction at block hash "${blockHash}" at index "${index}"`;
        if (blockNumber && index !== undefined) identifier = `Transaction at block number "${blockNumber}" at index "${index}"`;
        if (hash) identifier = `Transaction with hash "${hash}"`;
        super(`${identifier} could not be found.`, {
            name: 'TransactionNotFoundError'
        });
    }
}
exports.TransactionNotFoundError = TransactionNotFoundError;
class TransactionReceiptNotFoundError extends base_js_1.BaseError {
    constructor({ hash }){
        super(`Transaction receipt with hash "${hash}" could not be found. The Transaction may not be processed on a block yet.`, {
            name: 'TransactionReceiptNotFoundError'
        });
    }
}
exports.TransactionReceiptNotFoundError = TransactionReceiptNotFoundError;
class TransactionReceiptRevertedError extends base_js_1.BaseError {
    constructor({ receipt }){
        super(`Transaction with hash "${receipt.transactionHash}" reverted.`, {
            metaMessages: [
                'The receipt marked the transaction as "reverted". This could mean that the function on the contract you are trying to call threw an error.',
                ' ',
                'You can attempt to extract the revert reason by:',
                '- calling the `simulateContract` or `simulateCalls` Action with the `abi` and `functionName` of the contract',
                '- using the `call` Action with raw `data`'
            ],
            name: 'TransactionReceiptRevertedError'
        });
        Object.defineProperty(this, "receipt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.receipt = receipt;
    }
}
exports.TransactionReceiptRevertedError = TransactionReceiptRevertedError;
class WaitForTransactionReceiptTimeoutError extends base_js_1.BaseError {
    constructor({ hash }){
        super(`Timed out while waiting for transaction with hash "${hash}" to be confirmed.`, {
            name: 'WaitForTransactionReceiptTimeoutError'
        });
    }
}
exports.WaitForTransactionReceiptTimeoutError = WaitForTransactionReceiptTimeoutError; //# sourceMappingURL=transaction.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUrl = exports.getContractAddress = void 0;
const getContractAddress = (address)=>address;
exports.getContractAddress = getContractAddress;
const getUrl = (url)=>url;
exports.getUrl = getUrl; //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/contract.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RawContractError = exports.CounterfactualDeploymentFailedError = exports.ContractFunctionZeroDataError = exports.ContractFunctionRevertedError = exports.ContractFunctionExecutionError = exports.CallExecutionError = void 0;
const parseAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const solidity_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/solidity.js [app-client] (ecmascript)");
const decodeErrorResult_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeErrorResult.js [app-client] (ecmascript)");
const formatAbiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-client] (ecmascript)");
const formatAbiItemWithArgs_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/formatAbiItemWithArgs.js [app-client] (ecmascript)");
const getAbiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-client] (ecmascript)");
const formatEther_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/formatEther.js [app-client] (ecmascript)");
const formatGwei_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-client] (ecmascript)");
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const stateOverride_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/stateOverride.js [app-client] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/utils.js [app-client] (ecmascript)");
class CallExecutionError extends base_js_1.BaseError {
    constructor(cause, { account: account_, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, stateOverride }){
        const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : undefined;
        let prettyArgs = (0, transaction_js_1.prettyPrint)({
            from: account?.address,
            to,
            value: typeof value !== 'undefined' && `${(0, formatEther_js_1.formatEther)(value)} ${chain?.nativeCurrency?.symbol || 'ETH'}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(maxPriorityFeePerGas)} gwei`,
            nonce
        });
        if (stateOverride) {
            prettyArgs += `\n${(0, stateOverride_js_1.prettyStateOverride)(stateOverride)}`;
        }
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...cause.metaMessages ? [
                    ...cause.metaMessages,
                    ' '
                ] : [],
                'Raw Call Arguments:',
                prettyArgs
            ].filter(Boolean),
            name: 'CallExecutionError'
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cause = cause;
    }
}
exports.CallExecutionError = CallExecutionError;
class ContractFunctionExecutionError extends base_js_1.BaseError {
    constructor(cause, { abi, args, contractAddress, docsPath, functionName, sender }){
        const abiItem = (0, getAbiItem_js_1.getAbiItem)({
            abi,
            args,
            name: functionName
        });
        const formattedArgs = abiItem ? (0, formatAbiItemWithArgs_js_1.formatAbiItemWithArgs)({
            abiItem,
            args,
            includeFunctionName: false,
            includeName: false
        }) : undefined;
        const functionWithParams = abiItem ? (0, formatAbiItem_js_1.formatAbiItem)(abiItem, {
            includeName: true
        }) : undefined;
        const prettyArgs = (0, transaction_js_1.prettyPrint)({
            address: contractAddress && (0, utils_js_1.getContractAddress)(contractAddress),
            function: functionWithParams,
            args: formattedArgs && formattedArgs !== '()' && `${[
                ...Array(functionName?.length ?? 0).keys()
            ].map(()=>' ').join('')}${formattedArgs}`,
            sender
        });
        super(cause.shortMessage || `An unknown error occurred while executing the contract function "${functionName}".`, {
            cause,
            docsPath,
            metaMessages: [
                ...cause.metaMessages ? [
                    ...cause.metaMessages,
                    ' '
                ] : [],
                prettyArgs && 'Contract Call:',
                prettyArgs
            ].filter(Boolean),
            name: 'ContractFunctionExecutionError'
        });
        Object.defineProperty(this, "abi", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "args", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "contractAddress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "formattedArgs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "functionName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sender", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abi = abi;
        this.args = args;
        this.cause = cause;
        this.contractAddress = contractAddress;
        this.functionName = functionName;
        this.sender = sender;
    }
}
exports.ContractFunctionExecutionError = ContractFunctionExecutionError;
class ContractFunctionRevertedError extends base_js_1.BaseError {
    constructor({ abi, data, functionName, message }){
        let cause;
        let decodedData;
        let metaMessages;
        let reason;
        if (data && data !== '0x') {
            try {
                decodedData = (0, decodeErrorResult_js_1.decodeErrorResult)({
                    abi,
                    data
                });
                const { abiItem, errorName, args: errorArgs } = decodedData;
                if (errorName === 'Error') {
                    reason = errorArgs[0];
                } else if (errorName === 'Panic') {
                    const [firstArg] = errorArgs;
                    reason = solidity_js_1.panicReasons[firstArg];
                } else {
                    const errorWithParams = abiItem ? (0, formatAbiItem_js_1.formatAbiItem)(abiItem, {
                        includeName: true
                    }) : undefined;
                    const formattedArgs = abiItem && errorArgs ? (0, formatAbiItemWithArgs_js_1.formatAbiItemWithArgs)({
                        abiItem,
                        args: errorArgs,
                        includeFunctionName: false,
                        includeName: false
                    }) : undefined;
                    metaMessages = [
                        errorWithParams ? `Error: ${errorWithParams}` : '',
                        formattedArgs && formattedArgs !== '()' ? `       ${[
                            ...Array(errorName?.length ?? 0).keys()
                        ].map(()=>' ').join('')}${formattedArgs}` : ''
                    ];
                }
            } catch (err) {
                cause = err;
            }
        } else if (message) reason = message;
        let signature;
        if (cause instanceof abi_js_1.AbiErrorSignatureNotFoundError) {
            signature = cause.signature;
            metaMessages = [
                `Unable to decode signature "${signature}" as it was not found on the provided ABI.`,
                'Make sure you are using the correct ABI and that the error exists on it.',
                `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${signature}.`
            ];
        }
        super(reason && reason !== 'execution reverted' || signature ? [
            `The contract function "${functionName}" reverted with the following ${signature ? 'signature' : 'reason'}:`,
            reason || signature
        ].join('\n') : `The contract function "${functionName}" reverted.`, {
            cause,
            metaMessages,
            name: 'ContractFunctionRevertedError'
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "raw", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "reason", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "signature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = decodedData;
        this.raw = data;
        this.reason = reason;
        this.signature = signature;
    }
}
exports.ContractFunctionRevertedError = ContractFunctionRevertedError;
class ContractFunctionZeroDataError extends base_js_1.BaseError {
    constructor({ functionName }){
        super(`The contract function "${functionName}" returned no data ("0x").`, {
            metaMessages: [
                'This could be due to any of the following:',
                `  - The contract does not have the function "${functionName}",`,
                '  - The parameters passed to the contract function may be invalid, or',
                '  - The address is not a contract.'
            ],
            name: 'ContractFunctionZeroDataError'
        });
    }
}
exports.ContractFunctionZeroDataError = ContractFunctionZeroDataError;
class CounterfactualDeploymentFailedError extends base_js_1.BaseError {
    constructor({ factory }){
        super(`Deployment for counterfactual contract call failed${factory ? ` for factory "${factory}".` : ''}`, {
            metaMessages: [
                'Please ensure:',
                '- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).',
                '- The `factoryData` is a valid encoded function call for contract deployment function on the factory.'
            ],
            name: 'CounterfactualDeploymentFailedError'
        });
    }
}
exports.CounterfactualDeploymentFailedError = CounterfactualDeploymentFailedError;
class RawContractError extends base_js_1.BaseError {
    constructor({ data, message }){
        super(message || '', {
            name: 'RawContractError'
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 3
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
    }
}
exports.RawContractError = RawContractError; //# sourceMappingURL=contract.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TimeoutError = exports.SocketClosedError = exports.RpcRequestError = exports.WebSocketRequestError = exports.HttpRequestError = void 0;
const stringify_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/utils.js [app-client] (ecmascript)");
class HttpRequestError extends base_js_1.BaseError {
    constructor({ body, cause, details, headers, status, url }){
        super('HTTP request failed.', {
            cause,
            details,
            metaMessages: [
                status && `Status: ${status}`,
                `URL: ${(0, utils_js_1.getUrl)(url)}`,
                body && `Request body: ${(0, stringify_js_1.stringify)(body)}`
            ].filter(Boolean),
            name: 'HttpRequestError'
        });
        Object.defineProperty(this, "body", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "headers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "status", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.body = body;
        this.headers = headers;
        this.status = status;
        this.url = url;
    }
}
exports.HttpRequestError = HttpRequestError;
class WebSocketRequestError extends base_js_1.BaseError {
    constructor({ body, cause, details, url }){
        super('WebSocket request failed.', {
            cause,
            details,
            metaMessages: [
                `URL: ${(0, utils_js_1.getUrl)(url)}`,
                body && `Request body: ${(0, stringify_js_1.stringify)(body)}`
            ].filter(Boolean),
            name: 'WebSocketRequestError'
        });
    }
}
exports.WebSocketRequestError = WebSocketRequestError;
class RpcRequestError extends base_js_1.BaseError {
    constructor({ body, error, url }){
        super('RPC Request failed.', {
            cause: error,
            details: error.message,
            metaMessages: [
                `URL: ${(0, utils_js_1.getUrl)(url)}`,
                `Request body: ${(0, stringify_js_1.stringify)(body)}`
            ],
            name: 'RpcRequestError'
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.code = error.code;
        this.data = error.data;
    }
}
exports.RpcRequestError = RpcRequestError;
class SocketClosedError extends base_js_1.BaseError {
    constructor({ url } = {}){
        super('The socket has been closed.', {
            metaMessages: [
                url && `URL: ${(0, utils_js_1.getUrl)(url)}`
            ].filter(Boolean),
            name: 'SocketClosedError'
        });
    }
}
exports.SocketClosedError = SocketClosedError;
class TimeoutError extends base_js_1.BaseError {
    constructor({ body, url }){
        super('The request took too long to respond.', {
            details: 'The request timed out.',
            metaMessages: [
                `URL: ${(0, utils_js_1.getUrl)(url)}`,
                `Request body: ${(0, stringify_js_1.stringify)(body)}`
            ],
            name: 'TimeoutError'
        });
    }
}
exports.TimeoutError = TimeoutError; //# sourceMappingURL=request.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/rpc.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnknownRpcError = exports.AtomicityNotSupportedError = exports.AtomicReadyWalletRejectedUpgradeError = exports.BundleTooLargeError = exports.UnknownBundleIdError = exports.DuplicateIdError = exports.UnsupportedChainIdError = exports.UnsupportedNonOptionalCapabilityError = exports.SwitchChainError = exports.ChainDisconnectedError = exports.ProviderDisconnectedError = exports.UnsupportedProviderMethodError = exports.UnauthorizedProviderError = exports.UserRejectedRequestError = exports.JsonRpcVersionUnsupportedError = exports.LimitExceededRpcError = exports.MethodNotSupportedRpcError = exports.TransactionRejectedRpcError = exports.ResourceUnavailableRpcError = exports.ResourceNotFoundRpcError = exports.InvalidInputRpcError = exports.InternalRpcError = exports.InvalidParamsRpcError = exports.MethodNotFoundRpcError = exports.InvalidRequestRpcError = exports.ParseRpcError = exports.ProviderRpcError = exports.RpcError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const request_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)");
const unknownErrorCode = -1;
class RpcError extends base_js_1.BaseError {
    constructor(cause, { code, docsPath, metaMessages, name, shortMessage }){
        super(shortMessage, {
            cause,
            docsPath,
            metaMessages: metaMessages || cause?.metaMessages,
            name: name || 'RpcError'
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name || cause.name;
        this.code = cause instanceof request_js_1.RpcRequestError ? cause.code : code ?? unknownErrorCode;
    }
}
exports.RpcError = RpcError;
class ProviderRpcError extends RpcError {
    constructor(cause, options){
        super(cause, options);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = options.data;
    }
}
exports.ProviderRpcError = ProviderRpcError;
class ParseRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: ParseRpcError.code,
            name: 'ParseRpcError',
            shortMessage: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.'
        });
    }
}
exports.ParseRpcError = ParseRpcError;
Object.defineProperty(ParseRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32700
});
class InvalidRequestRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: InvalidRequestRpcError.code,
            name: 'InvalidRequestRpcError',
            shortMessage: 'JSON is not a valid request object.'
        });
    }
}
exports.InvalidRequestRpcError = InvalidRequestRpcError;
Object.defineProperty(InvalidRequestRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32600
});
class MethodNotFoundRpcError extends RpcError {
    constructor(cause, { method } = {}){
        super(cause, {
            code: MethodNotFoundRpcError.code,
            name: 'MethodNotFoundRpcError',
            shortMessage: `The method${method ? ` "${method}"` : ''} does not exist / is not available.`
        });
    }
}
exports.MethodNotFoundRpcError = MethodNotFoundRpcError;
Object.defineProperty(MethodNotFoundRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32601
});
class InvalidParamsRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: InvalidParamsRpcError.code,
            name: 'InvalidParamsRpcError',
            shortMessage: [
                'Invalid parameters were provided to the RPC method.',
                'Double check you have provided the correct parameters.'
            ].join('\n')
        });
    }
}
exports.InvalidParamsRpcError = InvalidParamsRpcError;
Object.defineProperty(InvalidParamsRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32602
});
class InternalRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: InternalRpcError.code,
            name: 'InternalRpcError',
            shortMessage: 'An internal error was received.'
        });
    }
}
exports.InternalRpcError = InternalRpcError;
Object.defineProperty(InternalRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32603
});
class InvalidInputRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: InvalidInputRpcError.code,
            name: 'InvalidInputRpcError',
            shortMessage: [
                'Missing or invalid parameters.',
                'Double check you have provided the correct parameters.'
            ].join('\n')
        });
    }
}
exports.InvalidInputRpcError = InvalidInputRpcError;
Object.defineProperty(InvalidInputRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32000
});
class ResourceNotFoundRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: ResourceNotFoundRpcError.code,
            name: 'ResourceNotFoundRpcError',
            shortMessage: 'Requested resource not found.'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ResourceNotFoundRpcError'
        });
    }
}
exports.ResourceNotFoundRpcError = ResourceNotFoundRpcError;
Object.defineProperty(ResourceNotFoundRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32001
});
class ResourceUnavailableRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: ResourceUnavailableRpcError.code,
            name: 'ResourceUnavailableRpcError',
            shortMessage: 'Requested resource not available.'
        });
    }
}
exports.ResourceUnavailableRpcError = ResourceUnavailableRpcError;
Object.defineProperty(ResourceUnavailableRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32002
});
class TransactionRejectedRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: TransactionRejectedRpcError.code,
            name: 'TransactionRejectedRpcError',
            shortMessage: 'Transaction creation failed.'
        });
    }
}
exports.TransactionRejectedRpcError = TransactionRejectedRpcError;
Object.defineProperty(TransactionRejectedRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32003
});
class MethodNotSupportedRpcError extends RpcError {
    constructor(cause, { method } = {}){
        super(cause, {
            code: MethodNotSupportedRpcError.code,
            name: 'MethodNotSupportedRpcError',
            shortMessage: `Method${method ? ` "${method}"` : ''} is not supported.`
        });
    }
}
exports.MethodNotSupportedRpcError = MethodNotSupportedRpcError;
Object.defineProperty(MethodNotSupportedRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32004
});
class LimitExceededRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: LimitExceededRpcError.code,
            name: 'LimitExceededRpcError',
            shortMessage: 'Request exceeds defined limit.'
        });
    }
}
exports.LimitExceededRpcError = LimitExceededRpcError;
Object.defineProperty(LimitExceededRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32005
});
class JsonRpcVersionUnsupportedError extends RpcError {
    constructor(cause){
        super(cause, {
            code: JsonRpcVersionUnsupportedError.code,
            name: 'JsonRpcVersionUnsupportedError',
            shortMessage: 'Version of JSON-RPC protocol is not supported.'
        });
    }
}
exports.JsonRpcVersionUnsupportedError = JsonRpcVersionUnsupportedError;
Object.defineProperty(JsonRpcVersionUnsupportedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32006
});
class UserRejectedRequestError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: UserRejectedRequestError.code,
            name: 'UserRejectedRequestError',
            shortMessage: 'User rejected the request.'
        });
    }
}
exports.UserRejectedRequestError = UserRejectedRequestError;
Object.defineProperty(UserRejectedRequestError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4001
});
class UnauthorizedProviderError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: UnauthorizedProviderError.code,
            name: 'UnauthorizedProviderError',
            shortMessage: 'The requested method and/or account has not been authorized by the user.'
        });
    }
}
exports.UnauthorizedProviderError = UnauthorizedProviderError;
Object.defineProperty(UnauthorizedProviderError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4100
});
class UnsupportedProviderMethodError extends ProviderRpcError {
    constructor(cause, { method } = {}){
        super(cause, {
            code: UnsupportedProviderMethodError.code,
            name: 'UnsupportedProviderMethodError',
            shortMessage: `The Provider does not support the requested method${method ? ` " ${method}"` : ''}.`
        });
    }
}
exports.UnsupportedProviderMethodError = UnsupportedProviderMethodError;
Object.defineProperty(UnsupportedProviderMethodError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4200
});
class ProviderDisconnectedError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: ProviderDisconnectedError.code,
            name: 'ProviderDisconnectedError',
            shortMessage: 'The Provider is disconnected from all chains.'
        });
    }
}
exports.ProviderDisconnectedError = ProviderDisconnectedError;
Object.defineProperty(ProviderDisconnectedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4900
});
class ChainDisconnectedError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: ChainDisconnectedError.code,
            name: 'ChainDisconnectedError',
            shortMessage: 'The Provider is not connected to the requested chain.'
        });
    }
}
exports.ChainDisconnectedError = ChainDisconnectedError;
Object.defineProperty(ChainDisconnectedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4901
});
class SwitchChainError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: SwitchChainError.code,
            name: 'SwitchChainError',
            shortMessage: 'An error occurred when attempting to switch chain.'
        });
    }
}
exports.SwitchChainError = SwitchChainError;
Object.defineProperty(SwitchChainError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4902
});
class UnsupportedNonOptionalCapabilityError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: UnsupportedNonOptionalCapabilityError.code,
            name: 'UnsupportedNonOptionalCapabilityError',
            shortMessage: 'This Wallet does not support a capability that was not marked as optional.'
        });
    }
}
exports.UnsupportedNonOptionalCapabilityError = UnsupportedNonOptionalCapabilityError;
Object.defineProperty(UnsupportedNonOptionalCapabilityError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 5700
});
class UnsupportedChainIdError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: UnsupportedChainIdError.code,
            name: 'UnsupportedChainIdError',
            shortMessage: 'This Wallet does not support the requested chain ID.'
        });
    }
}
exports.UnsupportedChainIdError = UnsupportedChainIdError;
Object.defineProperty(UnsupportedChainIdError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 5710
});
class DuplicateIdError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: DuplicateIdError.code,
            name: 'DuplicateIdError',
            shortMessage: 'There is already a bundle submitted with this ID.'
        });
    }
}
exports.DuplicateIdError = DuplicateIdError;
Object.defineProperty(DuplicateIdError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 5720
});
class UnknownBundleIdError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: UnknownBundleIdError.code,
            name: 'UnknownBundleIdError',
            shortMessage: 'This bundle id is unknown / has not been submitted'
        });
    }
}
exports.UnknownBundleIdError = UnknownBundleIdError;
Object.defineProperty(UnknownBundleIdError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 5730
});
class BundleTooLargeError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: BundleTooLargeError.code,
            name: 'BundleTooLargeError',
            shortMessage: 'The call bundle is too large for the Wallet to process.'
        });
    }
}
exports.BundleTooLargeError = BundleTooLargeError;
Object.defineProperty(BundleTooLargeError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 5740
});
class AtomicReadyWalletRejectedUpgradeError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: AtomicReadyWalletRejectedUpgradeError.code,
            name: 'AtomicReadyWalletRejectedUpgradeError',
            shortMessage: 'The Wallet can support atomicity after an upgrade, but the user rejected the upgrade.'
        });
    }
}
exports.AtomicReadyWalletRejectedUpgradeError = AtomicReadyWalletRejectedUpgradeError;
Object.defineProperty(AtomicReadyWalletRejectedUpgradeError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 5750
});
class AtomicityNotSupportedError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: AtomicityNotSupportedError.code,
            name: 'AtomicityNotSupportedError',
            shortMessage: 'The wallet does not support atomic execution but the request requires it.'
        });
    }
}
exports.AtomicityNotSupportedError = AtomicityNotSupportedError;
Object.defineProperty(AtomicityNotSupportedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 5760
});
class UnknownRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            name: 'UnknownRpcError',
            shortMessage: 'An unknown RPC error occurred.'
        });
    }
}
exports.UnknownRpcError = UnknownRpcError; //# sourceMappingURL=rpc.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getContractError.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getContractError = getContractError;
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const contract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/contract.js [app-client] (ecmascript)");
const request_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)");
const rpc_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/rpc.js [app-client] (ecmascript)");
const EXECUTION_REVERTED_ERROR_CODE = 3;
function getContractError(err, { abi, address, args, docsPath, functionName, sender }) {
    const error = err instanceof contract_js_1.RawContractError ? err : err instanceof base_js_1.BaseError ? err.walk((err)=>'data' in err) || err.walk() : {};
    const { code, data, details, message, shortMessage } = error;
    const cause = (()=>{
        if (err instanceof abi_js_1.AbiDecodingZeroDataError) return new contract_js_1.ContractFunctionZeroDataError({
            functionName
        });
        if ([
            EXECUTION_REVERTED_ERROR_CODE,
            rpc_js_1.InternalRpcError.code
        ].includes(code) && (data || details || message || shortMessage) || code === rpc_js_1.InvalidInputRpcError.code && details === 'execution reverted' && data) {
            return new contract_js_1.ContractFunctionRevertedError({
                abi,
                data: typeof data === 'object' ? data.data : data,
                functionName,
                message: error instanceof request_js_1.RpcRequestError ? details : shortMessage ?? message
            });
        }
        return err;
    })();
    return new contract_js_1.ContractFunctionExecutionError(cause, {
        abi,
        args,
        contractAddress: address,
        docsPath,
        functionName,
        sender
    });
} //# sourceMappingURL=getContractError.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/publicKeyToAddress.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.publicKeyToAddress = publicKeyToAddress;
const getAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
const keccak256_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
function publicKeyToAddress(publicKey) {
    const address = (0, keccak256_js_1.keccak256)(`0x${publicKey.substring(4)}`).substring(26);
    return (0, getAddress_js_1.checksumAddress)(`0x${address}`);
} //# sourceMappingURL=publicKeyToAddress.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverPublicKey.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recoverPublicKey = recoverPublicKey;
const isHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
async function recoverPublicKey({ hash, signature }) {
    const hashHex = (0, isHex_js_1.isHex)(hash) ? hash : (0, toHex_js_1.toHex)(hash);
    const { secp256k1 } = await Promise.resolve().then(()=>__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/node_modules/@noble/curves/secp256k1.js [app-client] (ecmascript)"));
    const signature_ = (()=>{
        if (typeof signature === 'object' && 'r' in signature && 's' in signature) {
            const { r, s, v, yParity } = signature;
            const yParityOrV = Number(yParity ?? v);
            const recoveryBit = toRecoveryBit(yParityOrV);
            return new secp256k1.Signature((0, fromHex_js_1.hexToBigInt)(r), (0, fromHex_js_1.hexToBigInt)(s)).addRecoveryBit(recoveryBit);
        }
        const signatureHex = (0, isHex_js_1.isHex)(signature) ? signature : (0, toHex_js_1.toHex)(signature);
        if ((0, size_js_1.size)(signatureHex) !== 65) throw new Error('invalid signature length');
        const yParityOrV = (0, fromHex_js_1.hexToNumber)(`0x${signatureHex.slice(130)}`);
        const recoveryBit = toRecoveryBit(yParityOrV);
        return secp256k1.Signature.fromCompact(signatureHex.substring(2, 130)).addRecoveryBit(recoveryBit);
    })();
    const publicKey = signature_.recoverPublicKey(hashHex.substring(2)).toHex(false);
    return `0x${publicKey}`;
}
function toRecoveryBit(yParityOrV) {
    if (yParityOrV === 0 || yParityOrV === 1) return yParityOrV;
    if (yParityOrV === 27) return 0;
    if (yParityOrV === 28) return 1;
    throw new Error('Invalid yParityOrV value');
} //# sourceMappingURL=recoverPublicKey.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverAddress.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recoverAddress = recoverAddress;
const publicKeyToAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/publicKeyToAddress.js [app-client] (ecmascript)");
const recoverPublicKey_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverPublicKey.js [app-client] (ecmascript)");
async function recoverAddress({ hash, signature }) {
    return (0, publicKeyToAddress_js_1.publicKeyToAddress)(await (0, recoverPublicKey_js_1.recoverPublicKey)({
        hash,
        signature
    }));
} //# sourceMappingURL=recoverAddress.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toRlp.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toRlp = toRlp;
exports.bytesToRlp = bytesToRlp;
exports.hexToRlp = hexToRlp;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const cursor_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/cursor.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function toRlp(bytes, to = 'hex') {
    const encodable = getEncodable(bytes);
    const cursor = (0, cursor_js_1.createCursor)(new Uint8Array(encodable.length));
    encodable.encode(cursor);
    if (to === 'hex') return (0, toHex_js_1.bytesToHex)(cursor.bytes);
    return cursor.bytes;
}
function bytesToRlp(bytes, to = 'bytes') {
    return toRlp(bytes, to);
}
function hexToRlp(hex, to = 'hex') {
    return toRlp(hex, to);
}
function getEncodable(bytes) {
    if (Array.isArray(bytes)) return getEncodableList(bytes.map((x)=>getEncodable(x)));
    return getEncodableBytes(bytes);
}
function getEncodableList(list) {
    const bodyLength = list.reduce((acc, x)=>acc + x.length, 0);
    const sizeOfBodyLength = getSizeOfLength(bodyLength);
    const length = (()=>{
        if (bodyLength <= 55) return 1 + bodyLength;
        return 1 + sizeOfBodyLength + bodyLength;
    })();
    return {
        length,
        encode (cursor) {
            if (bodyLength <= 55) {
                cursor.pushByte(0xc0 + bodyLength);
            } else {
                cursor.pushByte(0xc0 + 55 + sizeOfBodyLength);
                if (sizeOfBodyLength === 1) cursor.pushUint8(bodyLength);
                else if (sizeOfBodyLength === 2) cursor.pushUint16(bodyLength);
                else if (sizeOfBodyLength === 3) cursor.pushUint24(bodyLength);
                else cursor.pushUint32(bodyLength);
            }
            for (const { encode } of list){
                encode(cursor);
            }
        }
    };
}
function getEncodableBytes(bytesOrHex) {
    const bytes = typeof bytesOrHex === 'string' ? (0, toBytes_js_1.hexToBytes)(bytesOrHex) : bytesOrHex;
    const sizeOfBytesLength = getSizeOfLength(bytes.length);
    const length = (()=>{
        if (bytes.length === 1 && bytes[0] < 0x80) return 1;
        if (bytes.length <= 55) return 1 + bytes.length;
        return 1 + sizeOfBytesLength + bytes.length;
    })();
    return {
        length,
        encode (cursor) {
            if (bytes.length === 1 && bytes[0] < 0x80) {
                cursor.pushBytes(bytes);
            } else if (bytes.length <= 55) {
                cursor.pushByte(0x80 + bytes.length);
                cursor.pushBytes(bytes);
            } else {
                cursor.pushByte(0x80 + 55 + sizeOfBytesLength);
                if (sizeOfBytesLength === 1) cursor.pushUint8(bytes.length);
                else if (sizeOfBytesLength === 2) cursor.pushUint16(bytes.length);
                else if (sizeOfBytesLength === 3) cursor.pushUint24(bytes.length);
                else cursor.pushUint32(bytes.length);
                cursor.pushBytes(bytes);
            }
        }
    };
}
function getSizeOfLength(length) {
    if (length < 2 ** 8) return 1;
    if (length < 2 ** 16) return 2;
    if (length < 2 ** 24) return 3;
    if (length < 2 ** 32) return 4;
    throw new base_js_1.BaseError('Length is too large.');
} //# sourceMappingURL=toRlp.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/authorization/hashAuthorization.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hashAuthorization = hashAuthorization;
const concat_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const toRlp_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toRlp.js [app-client] (ecmascript)");
const keccak256_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
function hashAuthorization(parameters) {
    const { chainId, nonce, to } = parameters;
    const address = parameters.contractAddress ?? parameters.address;
    const hash = (0, keccak256_js_1.keccak256)((0, concat_js_1.concatHex)([
        '0x05',
        (0, toRlp_js_1.toRlp)([
            chainId ? (0, toHex_js_1.numberToHex)(chainId) : '0x',
            address,
            nonce ? (0, toHex_js_1.numberToHex)(nonce) : '0x'
        ])
    ]));
    if (to === 'bytes') return (0, toBytes_js_1.hexToBytes)(hash);
    return hash;
} //# sourceMappingURL=hashAuthorization.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/authorization/recoverAuthorizationAddress.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recoverAuthorizationAddress = recoverAuthorizationAddress;
const recoverAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverAddress.js [app-client] (ecmascript)");
const hashAuthorization_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/authorization/hashAuthorization.js [app-client] (ecmascript)");
async function recoverAuthorizationAddress(parameters) {
    const { authorization, signature } = parameters;
    return (0, recoverAddress_js_1.recoverAddress)({
        hash: (0, hashAuthorization_js_1.hashAuthorization)(authorization),
        signature: signature ?? authorization
    });
} //# sourceMappingURL=recoverAuthorizationAddress.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/estimateGas.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EstimateGasExecutionError = void 0;
const formatEther_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/formatEther.js [app-client] (ecmascript)");
const formatGwei_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
class EstimateGasExecutionError extends base_js_1.BaseError {
    constructor(cause, { account, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }){
        const prettyArgs = (0, transaction_js_1.prettyPrint)({
            from: account?.address,
            to,
            value: typeof value !== 'undefined' && `${(0, formatEther_js_1.formatEther)(value)} ${chain?.nativeCurrency?.symbol || 'ETH'}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(maxPriorityFeePerGas)} gwei`,
            nonce
        });
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...cause.metaMessages ? [
                    ...cause.metaMessages,
                    ' '
                ] : [],
                'Estimate Gas Arguments:',
                prettyArgs
            ].filter(Boolean),
            name: 'EstimateGasExecutionError'
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cause = cause;
    }
}
exports.EstimateGasExecutionError = EstimateGasExecutionError; //# sourceMappingURL=estimateGas.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/node.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnknownNodeError = exports.TipAboveFeeCapError = exports.TransactionTypeNotSupportedError = exports.IntrinsicGasTooLowError = exports.IntrinsicGasTooHighError = exports.InsufficientFundsError = exports.NonceMaxValueError = exports.NonceTooLowError = exports.NonceTooHighError = exports.FeeCapTooLowError = exports.FeeCapTooHighError = exports.ExecutionRevertedError = void 0;
const formatGwei_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class ExecutionRevertedError extends base_js_1.BaseError {
    constructor({ cause, message } = {}){
        const reason = message?.replace('execution reverted: ', '')?.replace('execution reverted', '');
        super(`Execution reverted ${reason ? `with reason: ${reason}` : 'for an unknown reason'}.`, {
            cause,
            name: 'ExecutionRevertedError'
        });
    }
}
exports.ExecutionRevertedError = ExecutionRevertedError;
Object.defineProperty(ExecutionRevertedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 3
});
Object.defineProperty(ExecutionRevertedError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /execution reverted/
});
class FeeCapTooHighError extends base_js_1.BaseError {
    constructor({ cause, maxFeePerGas } = {}){
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${(0, formatGwei_js_1.formatGwei)(maxFeePerGas)} gwei` : ''}) cannot be higher than the maximum allowed value (2^256-1).`, {
            cause,
            name: 'FeeCapTooHighError'
        });
    }
}
exports.FeeCapTooHighError = FeeCapTooHighError;
Object.defineProperty(FeeCapTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class FeeCapTooLowError extends base_js_1.BaseError {
    constructor({ cause, maxFeePerGas } = {}){
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${(0, formatGwei_js_1.formatGwei)(maxFeePerGas)}` : ''} gwei) cannot be lower than the block base fee.`, {
            cause,
            name: 'FeeCapTooLowError'
        });
    }
}
exports.FeeCapTooLowError = FeeCapTooLowError;
Object.defineProperty(FeeCapTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
class NonceTooHighError extends base_js_1.BaseError {
    constructor({ cause, nonce } = {}){
        super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ''}is higher than the next one expected.`, {
            cause,
            name: 'NonceTooHighError'
        });
    }
}
exports.NonceTooHighError = NonceTooHighError;
Object.defineProperty(NonceTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce too high/
});
class NonceTooLowError extends base_js_1.BaseError {
    constructor({ cause, nonce } = {}){
        super([
            `Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ''}is lower than the current nonce of the account.`,
            'Try increasing the nonce or find the latest nonce with `getTransactionCount`.'
        ].join('\n'), {
            cause,
            name: 'NonceTooLowError'
        });
    }
}
exports.NonceTooLowError = NonceTooLowError;
Object.defineProperty(NonceTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce too low|transaction already imported|already known/
});
class NonceMaxValueError extends base_js_1.BaseError {
    constructor({ cause, nonce } = {}){
        super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ''}exceeds the maximum allowed nonce.`, {
            cause,
            name: 'NonceMaxValueError'
        });
    }
}
exports.NonceMaxValueError = NonceMaxValueError;
Object.defineProperty(NonceMaxValueError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce has max value/
});
class InsufficientFundsError extends base_js_1.BaseError {
    constructor({ cause } = {}){
        super([
            'The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.'
        ].join('\n'), {
            cause,
            metaMessages: [
                'This error could arise when the account does not have enough funds to:',
                ' - pay for the total gas fee,',
                ' - pay for the value to send.',
                ' ',
                'The cost of the transaction is calculated as `gas * gas fee + value`, where:',
                ' - `gas` is the amount of gas needed for transaction to execute,',
                ' - `gas fee` is the gas fee,',
                ' - `value` is the amount of ether to send to the recipient.'
            ],
            name: 'InsufficientFundsError'
        });
    }
}
exports.InsufficientFundsError = InsufficientFundsError;
Object.defineProperty(InsufficientFundsError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /insufficient funds|exceeds transaction sender account balance/
});
class IntrinsicGasTooHighError extends base_js_1.BaseError {
    constructor({ cause, gas } = {}){
        super(`The amount of gas ${gas ? `(${gas}) ` : ''}provided for the transaction exceeds the limit allowed for the block.`, {
            cause,
            name: 'IntrinsicGasTooHighError'
        });
    }
}
exports.IntrinsicGasTooHighError = IntrinsicGasTooHighError;
Object.defineProperty(IntrinsicGasTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /intrinsic gas too high|gas limit reached/
});
class IntrinsicGasTooLowError extends base_js_1.BaseError {
    constructor({ cause, gas } = {}){
        super(`The amount of gas ${gas ? `(${gas}) ` : ''}provided for the transaction is too low.`, {
            cause,
            name: 'IntrinsicGasTooLowError'
        });
    }
}
exports.IntrinsicGasTooLowError = IntrinsicGasTooLowError;
Object.defineProperty(IntrinsicGasTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /intrinsic gas too low/
});
class TransactionTypeNotSupportedError extends base_js_1.BaseError {
    constructor({ cause }){
        super('The transaction type is not supported for this chain.', {
            cause,
            name: 'TransactionTypeNotSupportedError'
        });
    }
}
exports.TransactionTypeNotSupportedError = TransactionTypeNotSupportedError;
Object.defineProperty(TransactionTypeNotSupportedError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /transaction type not valid/
});
class TipAboveFeeCapError extends base_js_1.BaseError {
    constructor({ cause, maxPriorityFeePerGas, maxFeePerGas } = {}){
        super([
            `The provided tip (\`maxPriorityFeePerGas\`${maxPriorityFeePerGas ? ` = ${(0, formatGwei_js_1.formatGwei)(maxPriorityFeePerGas)} gwei` : ''}) cannot be higher than the fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${(0, formatGwei_js_1.formatGwei)(maxFeePerGas)} gwei` : ''}).`
        ].join('\n'), {
            cause,
            name: 'TipAboveFeeCapError'
        });
    }
}
exports.TipAboveFeeCapError = TipAboveFeeCapError;
Object.defineProperty(TipAboveFeeCapError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
class UnknownNodeError extends base_js_1.BaseError {
    constructor({ cause }){
        super(`An error occurred while executing: ${cause?.shortMessage}`, {
            cause,
            name: 'UnknownNodeError'
        });
    }
}
exports.UnknownNodeError = UnknownNodeError; //# sourceMappingURL=node.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getNodeError.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.containsNodeError = containsNodeError;
exports.getNodeError = getNodeError;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const node_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/node.js [app-client] (ecmascript)");
const request_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)");
const rpc_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/rpc.js [app-client] (ecmascript)");
function containsNodeError(err) {
    return err instanceof rpc_js_1.TransactionRejectedRpcError || err instanceof rpc_js_1.InvalidInputRpcError || err instanceof request_js_1.RpcRequestError && err.code === node_js_1.ExecutionRevertedError.code;
}
function getNodeError(err, args) {
    const message = (err.details || '').toLowerCase();
    const executionRevertedError = err instanceof base_js_1.BaseError ? err.walk((e)=>e?.code === node_js_1.ExecutionRevertedError.code) : err;
    if (executionRevertedError instanceof base_js_1.BaseError) return new node_js_1.ExecutionRevertedError({
        cause: err,
        message: executionRevertedError.details
    });
    if (node_js_1.ExecutionRevertedError.nodeMessage.test(message)) return new node_js_1.ExecutionRevertedError({
        cause: err,
        message: err.details
    });
    if (node_js_1.FeeCapTooHighError.nodeMessage.test(message)) return new node_js_1.FeeCapTooHighError({
        cause: err,
        maxFeePerGas: args?.maxFeePerGas
    });
    if (node_js_1.FeeCapTooLowError.nodeMessage.test(message)) return new node_js_1.FeeCapTooLowError({
        cause: err,
        maxFeePerGas: args?.maxFeePerGas
    });
    if (node_js_1.NonceTooHighError.nodeMessage.test(message)) return new node_js_1.NonceTooHighError({
        cause: err,
        nonce: args?.nonce
    });
    if (node_js_1.NonceTooLowError.nodeMessage.test(message)) return new node_js_1.NonceTooLowError({
        cause: err,
        nonce: args?.nonce
    });
    if (node_js_1.NonceMaxValueError.nodeMessage.test(message)) return new node_js_1.NonceMaxValueError({
        cause: err,
        nonce: args?.nonce
    });
    if (node_js_1.InsufficientFundsError.nodeMessage.test(message)) return new node_js_1.InsufficientFundsError({
        cause: err
    });
    if (node_js_1.IntrinsicGasTooHighError.nodeMessage.test(message)) return new node_js_1.IntrinsicGasTooHighError({
        cause: err,
        gas: args?.gas
    });
    if (node_js_1.IntrinsicGasTooLowError.nodeMessage.test(message)) return new node_js_1.IntrinsicGasTooLowError({
        cause: err,
        gas: args?.gas
    });
    if (node_js_1.TransactionTypeNotSupportedError.nodeMessage.test(message)) return new node_js_1.TransactionTypeNotSupportedError({
        cause: err
    });
    if (node_js_1.TipAboveFeeCapError.nodeMessage.test(message)) return new node_js_1.TipAboveFeeCapError({
        cause: err,
        maxFeePerGas: args?.maxFeePerGas,
        maxPriorityFeePerGas: args?.maxPriorityFeePerGas
    });
    return new node_js_1.UnknownNodeError({
        cause: err
    });
} //# sourceMappingURL=getNodeError.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getEstimateGasError.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEstimateGasError = getEstimateGasError;
const estimateGas_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/estimateGas.js [app-client] (ecmascript)");
const node_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/node.js [app-client] (ecmascript)");
const getNodeError_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getNodeError.js [app-client] (ecmascript)");
function getEstimateGasError(err, { docsPath, ...args }) {
    const cause = (()=>{
        const cause = (0, getNodeError_js_1.getNodeError)(err, args);
        if (cause instanceof node_js_1.UnknownNodeError) return err;
        return cause;
    })();
    return new estimateGas_js_1.EstimateGasExecutionError(cause, {
        docsPath,
        ...args
    });
} //# sourceMappingURL=getEstimateGasError.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/extract.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extract = extract;
function extract(value_, { format }) {
    if (!format) return {};
    const value = {};
    function extract_(formatted) {
        const keys = Object.keys(formatted);
        for (const key of keys){
            if (key in value_) value[key] = value_[key];
            if (formatted[key] && typeof formatted[key] === 'object' && !Array.isArray(formatted[key])) extract_(formatted[key]);
        }
    }
    const formatted = format(value_ || {});
    extract_(formatted);
    return value;
} //# sourceMappingURL=extract.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/formatter.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineFormatter = defineFormatter;
function defineFormatter(type, format) {
    return ({ exclude, format: overrides })=>{
        return {
            exclude,
            format: (args, action)=>{
                const formatted = format(args, action);
                if (exclude) {
                    for (const key of exclude){
                        delete formatted[key];
                    }
                }
                return {
                    ...formatted,
                    ...overrides(args, action)
                };
            },
            type
        };
    };
} //# sourceMappingURL=formatter.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineTransactionRequest = exports.rpcTransactionType = void 0;
exports.formatTransactionRequest = formatTransactionRequest;
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const formatter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/formatter.js [app-client] (ecmascript)");
exports.rpcTransactionType = {
    legacy: '0x0',
    eip2930: '0x1',
    eip1559: '0x2',
    eip4844: '0x3',
    eip7702: '0x4'
};
function formatTransactionRequest(request, _) {
    const rpcRequest = {};
    if (typeof request.authorizationList !== 'undefined') rpcRequest.authorizationList = formatAuthorizationList(request.authorizationList);
    if (typeof request.accessList !== 'undefined') rpcRequest.accessList = request.accessList;
    if (typeof request.blobVersionedHashes !== 'undefined') rpcRequest.blobVersionedHashes = request.blobVersionedHashes;
    if (typeof request.blobs !== 'undefined') {
        if (typeof request.blobs[0] !== 'string') rpcRequest.blobs = request.blobs.map((x)=>(0, toHex_js_1.bytesToHex)(x));
        else rpcRequest.blobs = request.blobs;
    }
    if (typeof request.data !== 'undefined') rpcRequest.data = request.data;
    if (request.account) rpcRequest.from = request.account.address;
    if (typeof request.from !== 'undefined') rpcRequest.from = request.from;
    if (typeof request.gas !== 'undefined') rpcRequest.gas = (0, toHex_js_1.numberToHex)(request.gas);
    if (typeof request.gasPrice !== 'undefined') rpcRequest.gasPrice = (0, toHex_js_1.numberToHex)(request.gasPrice);
    if (typeof request.maxFeePerBlobGas !== 'undefined') rpcRequest.maxFeePerBlobGas = (0, toHex_js_1.numberToHex)(request.maxFeePerBlobGas);
    if (typeof request.maxFeePerGas !== 'undefined') rpcRequest.maxFeePerGas = (0, toHex_js_1.numberToHex)(request.maxFeePerGas);
    if (typeof request.maxPriorityFeePerGas !== 'undefined') rpcRequest.maxPriorityFeePerGas = (0, toHex_js_1.numberToHex)(request.maxPriorityFeePerGas);
    if (typeof request.nonce !== 'undefined') rpcRequest.nonce = (0, toHex_js_1.numberToHex)(request.nonce);
    if (typeof request.to !== 'undefined') rpcRequest.to = request.to;
    if (typeof request.type !== 'undefined') rpcRequest.type = exports.rpcTransactionType[request.type];
    if (typeof request.value !== 'undefined') rpcRequest.value = (0, toHex_js_1.numberToHex)(request.value);
    return rpcRequest;
}
exports.defineTransactionRequest = (0, formatter_js_1.defineFormatter)('transactionRequest', formatTransactionRequest);
function formatAuthorizationList(authorizationList) {
    return authorizationList.map((authorization)=>({
            address: authorization.address,
            r: authorization.r ? (0, toHex_js_1.numberToHex)(BigInt(authorization.r)) : authorization.r,
            s: authorization.s ? (0, toHex_js_1.numberToHex)(BigInt(authorization.s)) : authorization.s,
            chainId: (0, toHex_js_1.numberToHex)(authorization.chainId),
            nonce: (0, toHex_js_1.numberToHex)(authorization.nonce),
            ...typeof authorization.yParity !== 'undefined' ? {
                yParity: (0, toHex_js_1.numberToHex)(authorization.yParity)
            } : {},
            ...typeof authorization.v !== 'undefined' && typeof authorization.yParity === 'undefined' ? {
                v: (0, toHex_js_1.numberToHex)(authorization.v)
            } : {}
        }));
} //# sourceMappingURL=transactionRequest.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/stateOverride.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeStateMapping = serializeStateMapping;
exports.serializeAccountStateOverride = serializeAccountStateOverride;
exports.serializeStateOverride = serializeStateOverride;
const address_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const data_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/data.js [app-client] (ecmascript)");
const stateOverride_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/stateOverride.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function serializeStateMapping(stateMapping) {
    if (!stateMapping || stateMapping.length === 0) return undefined;
    return stateMapping.reduce((acc, { slot, value })=>{
        if (slot.length !== 66) throw new data_js_1.InvalidBytesLengthError({
            size: slot.length,
            targetSize: 66,
            type: 'hex'
        });
        if (value.length !== 66) throw new data_js_1.InvalidBytesLengthError({
            size: value.length,
            targetSize: 66,
            type: 'hex'
        });
        acc[slot] = value;
        return acc;
    }, {});
}
function serializeAccountStateOverride(parameters) {
    const { balance, nonce, state, stateDiff, code } = parameters;
    const rpcAccountStateOverride = {};
    if (code !== undefined) rpcAccountStateOverride.code = code;
    if (balance !== undefined) rpcAccountStateOverride.balance = (0, toHex_js_1.numberToHex)(balance);
    if (nonce !== undefined) rpcAccountStateOverride.nonce = (0, toHex_js_1.numberToHex)(nonce);
    if (state !== undefined) rpcAccountStateOverride.state = serializeStateMapping(state);
    if (stateDiff !== undefined) {
        if (rpcAccountStateOverride.state) throw new stateOverride_js_1.StateAssignmentConflictError();
        rpcAccountStateOverride.stateDiff = serializeStateMapping(stateDiff);
    }
    return rpcAccountStateOverride;
}
function serializeStateOverride(parameters) {
    if (!parameters) return undefined;
    const rpcStateOverride = {};
    for (const { address, ...accountState } of parameters){
        if (!(0, isAddress_js_1.isAddress)(address, {
            strict: false
        })) throw new address_js_1.InvalidAddressError({
            address
        });
        if (rpcStateOverride[address]) throw new stateOverride_js_1.AccountStateConflictError({
            address: address
        });
        rpcStateOverride[address] = serializeAccountStateOverride(accountState);
    }
    return rpcStateOverride;
} //# sourceMappingURL=stateOverride.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/number.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.minInt144 = exports.minInt136 = exports.minInt128 = exports.minInt120 = exports.minInt112 = exports.minInt104 = exports.minInt96 = exports.minInt88 = exports.minInt80 = exports.minInt72 = exports.minInt64 = exports.minInt56 = exports.minInt48 = exports.minInt40 = exports.minInt32 = exports.minInt24 = exports.minInt16 = exports.minInt8 = exports.maxInt256 = exports.maxInt248 = exports.maxInt240 = exports.maxInt232 = exports.maxInt224 = exports.maxInt216 = exports.maxInt208 = exports.maxInt200 = exports.maxInt192 = exports.maxInt184 = exports.maxInt176 = exports.maxInt168 = exports.maxInt160 = exports.maxInt152 = exports.maxInt144 = exports.maxInt136 = exports.maxInt128 = exports.maxInt120 = exports.maxInt112 = exports.maxInt104 = exports.maxInt96 = exports.maxInt88 = exports.maxInt80 = exports.maxInt72 = exports.maxInt64 = exports.maxInt56 = exports.maxInt48 = exports.maxInt40 = exports.maxInt32 = exports.maxInt24 = exports.maxInt16 = exports.maxInt8 = void 0;
exports.maxUint256 = exports.maxUint248 = exports.maxUint240 = exports.maxUint232 = exports.maxUint224 = exports.maxUint216 = exports.maxUint208 = exports.maxUint200 = exports.maxUint192 = exports.maxUint184 = exports.maxUint176 = exports.maxUint168 = exports.maxUint160 = exports.maxUint152 = exports.maxUint144 = exports.maxUint136 = exports.maxUint128 = exports.maxUint120 = exports.maxUint112 = exports.maxUint104 = exports.maxUint96 = exports.maxUint88 = exports.maxUint80 = exports.maxUint72 = exports.maxUint64 = exports.maxUint56 = exports.maxUint48 = exports.maxUint40 = exports.maxUint32 = exports.maxUint24 = exports.maxUint16 = exports.maxUint8 = exports.minInt256 = exports.minInt248 = exports.minInt240 = exports.minInt232 = exports.minInt224 = exports.minInt216 = exports.minInt208 = exports.minInt200 = exports.minInt192 = exports.minInt184 = exports.minInt176 = exports.minInt168 = exports.minInt160 = exports.minInt152 = void 0;
exports.maxInt8 = 2n ** (8n - 1n) - 1n;
exports.maxInt16 = 2n ** (16n - 1n) - 1n;
exports.maxInt24 = 2n ** (24n - 1n) - 1n;
exports.maxInt32 = 2n ** (32n - 1n) - 1n;
exports.maxInt40 = 2n ** (40n - 1n) - 1n;
exports.maxInt48 = 2n ** (48n - 1n) - 1n;
exports.maxInt56 = 2n ** (56n - 1n) - 1n;
exports.maxInt64 = 2n ** (64n - 1n) - 1n;
exports.maxInt72 = 2n ** (72n - 1n) - 1n;
exports.maxInt80 = 2n ** (80n - 1n) - 1n;
exports.maxInt88 = 2n ** (88n - 1n) - 1n;
exports.maxInt96 = 2n ** (96n - 1n) - 1n;
exports.maxInt104 = 2n ** (104n - 1n) - 1n;
exports.maxInt112 = 2n ** (112n - 1n) - 1n;
exports.maxInt120 = 2n ** (120n - 1n) - 1n;
exports.maxInt128 = 2n ** (128n - 1n) - 1n;
exports.maxInt136 = 2n ** (136n - 1n) - 1n;
exports.maxInt144 = 2n ** (144n - 1n) - 1n;
exports.maxInt152 = 2n ** (152n - 1n) - 1n;
exports.maxInt160 = 2n ** (160n - 1n) - 1n;
exports.maxInt168 = 2n ** (168n - 1n) - 1n;
exports.maxInt176 = 2n ** (176n - 1n) - 1n;
exports.maxInt184 = 2n ** (184n - 1n) - 1n;
exports.maxInt192 = 2n ** (192n - 1n) - 1n;
exports.maxInt200 = 2n ** (200n - 1n) - 1n;
exports.maxInt208 = 2n ** (208n - 1n) - 1n;
exports.maxInt216 = 2n ** (216n - 1n) - 1n;
exports.maxInt224 = 2n ** (224n - 1n) - 1n;
exports.maxInt232 = 2n ** (232n - 1n) - 1n;
exports.maxInt240 = 2n ** (240n - 1n) - 1n;
exports.maxInt248 = 2n ** (248n - 1n) - 1n;
exports.maxInt256 = 2n ** (256n - 1n) - 1n;
exports.minInt8 = -(2n ** (8n - 1n));
exports.minInt16 = -(2n ** (16n - 1n));
exports.minInt24 = -(2n ** (24n - 1n));
exports.minInt32 = -(2n ** (32n - 1n));
exports.minInt40 = -(2n ** (40n - 1n));
exports.minInt48 = -(2n ** (48n - 1n));
exports.minInt56 = -(2n ** (56n - 1n));
exports.minInt64 = -(2n ** (64n - 1n));
exports.minInt72 = -(2n ** (72n - 1n));
exports.minInt80 = -(2n ** (80n - 1n));
exports.minInt88 = -(2n ** (88n - 1n));
exports.minInt96 = -(2n ** (96n - 1n));
exports.minInt104 = -(2n ** (104n - 1n));
exports.minInt112 = -(2n ** (112n - 1n));
exports.minInt120 = -(2n ** (120n - 1n));
exports.minInt128 = -(2n ** (128n - 1n));
exports.minInt136 = -(2n ** (136n - 1n));
exports.minInt144 = -(2n ** (144n - 1n));
exports.minInt152 = -(2n ** (152n - 1n));
exports.minInt160 = -(2n ** (160n - 1n));
exports.minInt168 = -(2n ** (168n - 1n));
exports.minInt176 = -(2n ** (176n - 1n));
exports.minInt184 = -(2n ** (184n - 1n));
exports.minInt192 = -(2n ** (192n - 1n));
exports.minInt200 = -(2n ** (200n - 1n));
exports.minInt208 = -(2n ** (208n - 1n));
exports.minInt216 = -(2n ** (216n - 1n));
exports.minInt224 = -(2n ** (224n - 1n));
exports.minInt232 = -(2n ** (232n - 1n));
exports.minInt240 = -(2n ** (240n - 1n));
exports.minInt248 = -(2n ** (248n - 1n));
exports.minInt256 = -(2n ** (256n - 1n));
exports.maxUint8 = 2n ** 8n - 1n;
exports.maxUint16 = 2n ** 16n - 1n;
exports.maxUint24 = 2n ** 24n - 1n;
exports.maxUint32 = 2n ** 32n - 1n;
exports.maxUint40 = 2n ** 40n - 1n;
exports.maxUint48 = 2n ** 48n - 1n;
exports.maxUint56 = 2n ** 56n - 1n;
exports.maxUint64 = 2n ** 64n - 1n;
exports.maxUint72 = 2n ** 72n - 1n;
exports.maxUint80 = 2n ** 80n - 1n;
exports.maxUint88 = 2n ** 88n - 1n;
exports.maxUint96 = 2n ** 96n - 1n;
exports.maxUint104 = 2n ** 104n - 1n;
exports.maxUint112 = 2n ** 112n - 1n;
exports.maxUint120 = 2n ** 120n - 1n;
exports.maxUint128 = 2n ** 128n - 1n;
exports.maxUint136 = 2n ** 136n - 1n;
exports.maxUint144 = 2n ** 144n - 1n;
exports.maxUint152 = 2n ** 152n - 1n;
exports.maxUint160 = 2n ** 160n - 1n;
exports.maxUint168 = 2n ** 168n - 1n;
exports.maxUint176 = 2n ** 176n - 1n;
exports.maxUint184 = 2n ** 184n - 1n;
exports.maxUint192 = 2n ** 192n - 1n;
exports.maxUint200 = 2n ** 200n - 1n;
exports.maxUint208 = 2n ** 208n - 1n;
exports.maxUint216 = 2n ** 216n - 1n;
exports.maxUint224 = 2n ** 224n - 1n;
exports.maxUint232 = 2n ** 232n - 1n;
exports.maxUint240 = 2n ** 240n - 1n;
exports.maxUint248 = 2n ** 248n - 1n;
exports.maxUint256 = 2n ** 256n - 1n; //# sourceMappingURL=number.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.assertRequest = assertRequest;
const parseAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const number_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/number.js [app-client] (ecmascript)");
const address_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const node_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/node.js [app-client] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
function assertRequest(args) {
    const { account: account_, gasPrice, maxFeePerGas, maxPriorityFeePerGas, to } = args;
    const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : undefined;
    if (account && !(0, isAddress_js_1.isAddress)(account.address)) throw new address_js_1.InvalidAddressError({
        address: account.address
    });
    if (to && !(0, isAddress_js_1.isAddress)(to)) throw new address_js_1.InvalidAddressError({
        address: to
    });
    if (typeof gasPrice !== 'undefined' && (typeof maxFeePerGas !== 'undefined' || typeof maxPriorityFeePerGas !== 'undefined')) throw new transaction_js_1.FeeConflictError();
    if (maxFeePerGas && maxFeePerGas > number_js_1.maxUint256) throw new node_js_1.FeeCapTooHighError({
        maxFeePerGas
    });
    if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas) throw new node_js_1.TipAboveFeeCapError({
        maxFeePerGas,
        maxPriorityFeePerGas
    });
} //# sourceMappingURL=assertRequest.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/fee.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MaxFeePerGasTooLowError = exports.Eip1559FeesNotSupportedError = exports.BaseFeeScalarError = void 0;
const formatGwei_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class BaseFeeScalarError extends base_js_1.BaseError {
    constructor(){
        super('`baseFeeMultiplier` must be greater than 1.', {
            name: 'BaseFeeScalarError'
        });
    }
}
exports.BaseFeeScalarError = BaseFeeScalarError;
class Eip1559FeesNotSupportedError extends base_js_1.BaseError {
    constructor(){
        super('Chain does not support EIP-1559 fees.', {
            name: 'Eip1559FeesNotSupportedError'
        });
    }
}
exports.Eip1559FeesNotSupportedError = Eip1559FeesNotSupportedError;
class MaxFeePerGasTooLowError extends base_js_1.BaseError {
    constructor({ maxPriorityFeePerGas }){
        super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0, formatGwei_js_1.formatGwei)(maxPriorityFeePerGas)} gwei).`, {
            name: 'MaxFeePerGasTooLowError'
        });
    }
}
exports.MaxFeePerGasTooLowError = MaxFeePerGasTooLowError; //# sourceMappingURL=fee.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/block.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BlockNotFoundError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class BlockNotFoundError extends base_js_1.BaseError {
    constructor({ blockHash, blockNumber }){
        let identifier = 'Block';
        if (blockHash) identifier = `Block at hash "${blockHash}"`;
        if (blockNumber) identifier = `Block at number "${blockNumber}"`;
        super(`${identifier} could not be found.`, {
            name: 'BlockNotFoundError'
        });
    }
}
exports.BlockNotFoundError = BlockNotFoundError; //# sourceMappingURL=block.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transaction.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineTransaction = exports.transactionType = void 0;
exports.formatTransaction = formatTransaction;
const fromHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const formatter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/formatter.js [app-client] (ecmascript)");
exports.transactionType = {
    '0x0': 'legacy',
    '0x1': 'eip2930',
    '0x2': 'eip1559',
    '0x3': 'eip4844',
    '0x4': 'eip7702'
};
function formatTransaction(transaction, _) {
    const transaction_ = {
        ...transaction,
        blockHash: transaction.blockHash ? transaction.blockHash : null,
        blockNumber: transaction.blockNumber ? BigInt(transaction.blockNumber) : null,
        chainId: transaction.chainId ? (0, fromHex_js_1.hexToNumber)(transaction.chainId) : undefined,
        gas: transaction.gas ? BigInt(transaction.gas) : undefined,
        gasPrice: transaction.gasPrice ? BigInt(transaction.gasPrice) : undefined,
        maxFeePerBlobGas: transaction.maxFeePerBlobGas ? BigInt(transaction.maxFeePerBlobGas) : undefined,
        maxFeePerGas: transaction.maxFeePerGas ? BigInt(transaction.maxFeePerGas) : undefined,
        maxPriorityFeePerGas: transaction.maxPriorityFeePerGas ? BigInt(transaction.maxPriorityFeePerGas) : undefined,
        nonce: transaction.nonce ? (0, fromHex_js_1.hexToNumber)(transaction.nonce) : undefined,
        to: transaction.to ? transaction.to : null,
        transactionIndex: transaction.transactionIndex ? Number(transaction.transactionIndex) : null,
        type: transaction.type ? exports.transactionType[transaction.type] : undefined,
        typeHex: transaction.type ? transaction.type : undefined,
        value: transaction.value ? BigInt(transaction.value) : undefined,
        v: transaction.v ? BigInt(transaction.v) : undefined
    };
    if (transaction.authorizationList) transaction_.authorizationList = formatAuthorizationList(transaction.authorizationList);
    transaction_.yParity = (()=>{
        if (transaction.yParity) return Number(transaction.yParity);
        if (typeof transaction_.v === 'bigint') {
            if (transaction_.v === 0n || transaction_.v === 27n) return 0;
            if (transaction_.v === 1n || transaction_.v === 28n) return 1;
            if (transaction_.v >= 35n) return transaction_.v % 2n === 0n ? 1 : 0;
        }
        return undefined;
    })();
    if (transaction_.type === 'legacy') {
        delete transaction_.accessList;
        delete transaction_.maxFeePerBlobGas;
        delete transaction_.maxFeePerGas;
        delete transaction_.maxPriorityFeePerGas;
        delete transaction_.yParity;
    }
    if (transaction_.type === 'eip2930') {
        delete transaction_.maxFeePerBlobGas;
        delete transaction_.maxFeePerGas;
        delete transaction_.maxPriorityFeePerGas;
    }
    if (transaction_.type === 'eip1559') {
        delete transaction_.maxFeePerBlobGas;
    }
    return transaction_;
}
exports.defineTransaction = (0, formatter_js_1.defineFormatter)('transaction', formatTransaction);
function formatAuthorizationList(authorizationList) {
    return authorizationList.map((authorization)=>({
            address: authorization.address,
            chainId: Number(authorization.chainId),
            nonce: Number(authorization.nonce),
            r: authorization.r,
            s: authorization.s,
            yParity: Number(authorization.yParity)
        }));
} //# sourceMappingURL=transaction.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/block.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineBlock = void 0;
exports.formatBlock = formatBlock;
const formatter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/formatter.js [app-client] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transaction.js [app-client] (ecmascript)");
function formatBlock(block, _) {
    const transactions = (block.transactions ?? []).map((transaction)=>{
        if (typeof transaction === 'string') return transaction;
        return (0, transaction_js_1.formatTransaction)(transaction);
    });
    return {
        ...block,
        baseFeePerGas: block.baseFeePerGas ? BigInt(block.baseFeePerGas) : null,
        blobGasUsed: block.blobGasUsed ? BigInt(block.blobGasUsed) : undefined,
        difficulty: block.difficulty ? BigInt(block.difficulty) : undefined,
        excessBlobGas: block.excessBlobGas ? BigInt(block.excessBlobGas) : undefined,
        gasLimit: block.gasLimit ? BigInt(block.gasLimit) : undefined,
        gasUsed: block.gasUsed ? BigInt(block.gasUsed) : undefined,
        hash: block.hash ? block.hash : null,
        logsBloom: block.logsBloom ? block.logsBloom : null,
        nonce: block.nonce ? block.nonce : null,
        number: block.number ? BigInt(block.number) : null,
        size: block.size ? BigInt(block.size) : undefined,
        timestamp: block.timestamp ? BigInt(block.timestamp) : undefined,
        transactions,
        totalDifficulty: block.totalDifficulty ? BigInt(block.totalDifficulty) : null
    };
}
exports.defineBlock = (0, formatter_js_1.defineFormatter)('block', formatBlock); //# sourceMappingURL=block.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getBlock.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBlock = getBlock;
const block_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/block.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const block_js_2 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/block.js [app-client] (ecmascript)");
async function getBlock(client, { blockHash, blockNumber, blockTag = client.experimental_blockTag ?? 'latest', includeTransactions: includeTransactions_ } = {}) {
    const includeTransactions = includeTransactions_ ?? false;
    const blockNumberHex = blockNumber !== undefined ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
    let block = null;
    if (blockHash) {
        block = await client.request({
            method: 'eth_getBlockByHash',
            params: [
                blockHash,
                includeTransactions
            ]
        }, {
            dedupe: true
        });
    } else {
        block = await client.request({
            method: 'eth_getBlockByNumber',
            params: [
                blockNumberHex || blockTag,
                includeTransactions
            ]
        }, {
            dedupe: Boolean(blockNumberHex)
        });
    }
    if (!block) throw new block_js_1.BlockNotFoundError({
        blockHash,
        blockNumber
    });
    const format = client.chain?.formatters?.block?.format || block_js_2.formatBlock;
    return format(block, 'getBlock');
} //# sourceMappingURL=getBlock.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getGasPrice.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getGasPrice = getGasPrice;
async function getGasPrice(client) {
    const gasPrice = await client.request({
        method: 'eth_gasPrice'
    });
    return BigInt(gasPrice);
} //# sourceMappingURL=getGasPrice.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/estimateMaxPriorityFeePerGas.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.estimateMaxPriorityFeePerGas = estimateMaxPriorityFeePerGas;
exports.internal_estimateMaxPriorityFeePerGas = internal_estimateMaxPriorityFeePerGas;
const fee_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/fee.js [app-client] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const getBlock_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getBlock.js [app-client] (ecmascript)");
const getGasPrice_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getGasPrice.js [app-client] (ecmascript)");
async function estimateMaxPriorityFeePerGas(client, args) {
    return internal_estimateMaxPriorityFeePerGas(client, args);
}
async function internal_estimateMaxPriorityFeePerGas(client, args) {
    const { block: block_, chain = client.chain, request } = args || {};
    try {
        const maxPriorityFeePerGas = chain?.fees?.maxPriorityFeePerGas ?? chain?.fees?.defaultPriorityFee;
        if (typeof maxPriorityFeePerGas === 'function') {
            const block = block_ || await (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({});
            const maxPriorityFeePerGas_ = await maxPriorityFeePerGas({
                block,
                client,
                request
            });
            if (maxPriorityFeePerGas_ === null) throw new Error();
            return maxPriorityFeePerGas_;
        }
        if (typeof maxPriorityFeePerGas !== 'undefined') return maxPriorityFeePerGas;
        const maxPriorityFeePerGasHex = await client.request({
            method: 'eth_maxPriorityFeePerGas'
        });
        return (0, fromHex_js_1.hexToBigInt)(maxPriorityFeePerGasHex);
    } catch  {
        const [block, gasPrice] = await Promise.all([
            block_ ? Promise.resolve(block_) : (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({}),
            (0, getAction_js_1.getAction)(client, getGasPrice_js_1.getGasPrice, 'getGasPrice')({})
        ]);
        if (typeof block.baseFeePerGas !== 'bigint') throw new fee_js_1.Eip1559FeesNotSupportedError();
        const maxPriorityFeePerGas = gasPrice - block.baseFeePerGas;
        if (maxPriorityFeePerGas < 0n) return 0n;
        return maxPriorityFeePerGas;
    }
} //# sourceMappingURL=estimateMaxPriorityFeePerGas.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/estimateFeesPerGas.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.estimateFeesPerGas = estimateFeesPerGas;
exports.internal_estimateFeesPerGas = internal_estimateFeesPerGas;
const fee_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/fee.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const estimateMaxPriorityFeePerGas_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/estimateMaxPriorityFeePerGas.js [app-client] (ecmascript)");
const getBlock_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getBlock.js [app-client] (ecmascript)");
const getGasPrice_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getGasPrice.js [app-client] (ecmascript)");
async function estimateFeesPerGas(client, args) {
    return internal_estimateFeesPerGas(client, args);
}
async function internal_estimateFeesPerGas(client, args) {
    const { block: block_, chain = client.chain, request, type = 'eip1559' } = args || {};
    const baseFeeMultiplier = await (async ()=>{
        if (typeof chain?.fees?.baseFeeMultiplier === 'function') return chain.fees.baseFeeMultiplier({
            block: block_,
            client,
            request
        });
        return chain?.fees?.baseFeeMultiplier ?? 1.2;
    })();
    if (baseFeeMultiplier < 1) throw new fee_js_1.BaseFeeScalarError();
    const decimals = baseFeeMultiplier.toString().split('.')[1]?.length ?? 0;
    const denominator = 10 ** decimals;
    const multiply = (base)=>base * BigInt(Math.ceil(baseFeeMultiplier * denominator)) / BigInt(denominator);
    const block = block_ ? block_ : await (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({});
    if (typeof chain?.fees?.estimateFeesPerGas === 'function') {
        const fees = await chain.fees.estimateFeesPerGas({
            block: block_,
            client,
            multiply,
            request,
            type
        });
        if (fees !== null) return fees;
    }
    if (type === 'eip1559') {
        if (typeof block.baseFeePerGas !== 'bigint') throw new fee_js_1.Eip1559FeesNotSupportedError();
        const maxPriorityFeePerGas = typeof request?.maxPriorityFeePerGas === 'bigint' ? request.maxPriorityFeePerGas : await (0, estimateMaxPriorityFeePerGas_js_1.internal_estimateMaxPriorityFeePerGas)(client, {
            block: block,
            chain,
            request
        });
        const baseFeePerGas = multiply(block.baseFeePerGas);
        const maxFeePerGas = request?.maxFeePerGas ?? baseFeePerGas + maxPriorityFeePerGas;
        return {
            maxFeePerGas,
            maxPriorityFeePerGas
        };
    }
    const gasPrice = request?.gasPrice ?? multiply(await (0, getAction_js_1.getAction)(client, getGasPrice_js_1.getGasPrice, 'getGasPrice')({}));
    return {
        gasPrice
    };
} //# sourceMappingURL=estimateFeesPerGas.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getTransactionCount.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransactionCount = getTransactionCount;
const fromHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
async function getTransactionCount(client, { address, blockTag = 'latest', blockNumber }) {
    const count = await client.request({
        method: 'eth_getTransactionCount',
        params: [
            address,
            typeof blockNumber === 'bigint' ? (0, toHex_js_1.numberToHex)(blockNumber) : blockTag
        ]
    }, {
        dedupe: Boolean(blockNumber)
    });
    return (0, fromHex_js_1.hexToNumber)(count);
} //# sourceMappingURL=getTransactionCount.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/blobsToCommitments.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.blobsToCommitments = blobsToCommitments;
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function blobsToCommitments(parameters) {
    const { kzg } = parameters;
    const to = parameters.to ?? (typeof parameters.blobs[0] === 'string' ? 'hex' : 'bytes');
    const blobs = typeof parameters.blobs[0] === 'string' ? parameters.blobs.map((x)=>(0, toBytes_js_1.hexToBytes)(x)) : parameters.blobs;
    const commitments = [];
    for (const blob of blobs)commitments.push(Uint8Array.from(kzg.blobToKzgCommitment(blob)));
    return to === 'bytes' ? commitments : commitments.map((x)=>(0, toHex_js_1.bytesToHex)(x));
} //# sourceMappingURL=blobsToCommitments.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/blobsToProofs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.blobsToProofs = blobsToProofs;
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function blobsToProofs(parameters) {
    const { kzg } = parameters;
    const to = parameters.to ?? (typeof parameters.blobs[0] === 'string' ? 'hex' : 'bytes');
    const blobs = typeof parameters.blobs[0] === 'string' ? parameters.blobs.map((x)=>(0, toBytes_js_1.hexToBytes)(x)) : parameters.blobs;
    const commitments = typeof parameters.commitments[0] === 'string' ? parameters.commitments.map((x)=>(0, toBytes_js_1.hexToBytes)(x)) : parameters.commitments;
    const proofs = [];
    for(let i = 0; i < blobs.length; i++){
        const blob = blobs[i];
        const commitment = commitments[i];
        proofs.push(Uint8Array.from(kzg.computeBlobKzgProof(blob, commitment)));
    }
    return to === 'bytes' ? proofs : proofs.map((x)=>(0, toHex_js_1.bytesToHex)(x));
} //# sourceMappingURL=blobsToProofs.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/sha256.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sha256 = sha256;
const sha256_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/node_modules/@noble/hashes/sha256.js [app-client] (ecmascript)");
const isHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function sha256(value, to_) {
    const to = to_ || 'hex';
    const bytes = (0, sha256_1.sha256)((0, isHex_js_1.isHex)(value, {
        strict: false
    }) ? (0, toBytes_js_1.toBytes)(value) : value);
    if (to === 'bytes') return bytes;
    return (0, toHex_js_1.toHex)(bytes);
} //# sourceMappingURL=sha256.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/commitmentToVersionedHash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.commitmentToVersionedHash = commitmentToVersionedHash;
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const sha256_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/sha256.js [app-client] (ecmascript)");
function commitmentToVersionedHash(parameters) {
    const { commitment, version = 1 } = parameters;
    const to = parameters.to ?? (typeof commitment === 'string' ? 'hex' : 'bytes');
    const versionedHash = (0, sha256_js_1.sha256)(commitment, 'bytes');
    versionedHash.set([
        version
    ], 0);
    return to === 'bytes' ? versionedHash : (0, toHex_js_1.bytesToHex)(versionedHash);
} //# sourceMappingURL=commitmentToVersionedHash.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/commitmentsToVersionedHashes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.commitmentsToVersionedHashes = commitmentsToVersionedHashes;
const commitmentToVersionedHash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/commitmentToVersionedHash.js [app-client] (ecmascript)");
function commitmentsToVersionedHashes(parameters) {
    const { commitments, version } = parameters;
    const to = parameters.to ?? (typeof commitments[0] === 'string' ? 'hex' : 'bytes');
    const hashes = [];
    for (const commitment of commitments){
        hashes.push((0, commitmentToVersionedHash_js_1.commitmentToVersionedHash)({
            commitment,
            to,
            version
        }));
    }
    return hashes;
} //# sourceMappingURL=commitmentsToVersionedHashes.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/blob.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.maxBytesPerTransaction = exports.bytesPerBlob = exports.fieldElementsPerBlob = exports.bytesPerFieldElement = void 0;
const blobsPerTransaction = 6;
exports.bytesPerFieldElement = 32;
exports.fieldElementsPerBlob = 4096;
exports.bytesPerBlob = exports.bytesPerFieldElement * exports.fieldElementsPerBlob;
exports.maxBytesPerTransaction = exports.bytesPerBlob * blobsPerTransaction - 1 - 1 * exports.fieldElementsPerBlob * blobsPerTransaction; //# sourceMappingURL=blob.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/kzg.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.versionedHashVersionKzg = void 0;
exports.versionedHashVersionKzg = 1; //# sourceMappingURL=kzg.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/blob.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidVersionedHashVersionError = exports.InvalidVersionedHashSizeError = exports.EmptyBlobError = exports.BlobSizeTooLargeError = void 0;
const kzg_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/kzg.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class BlobSizeTooLargeError extends base_js_1.BaseError {
    constructor({ maxSize, size }){
        super('Blob size is too large.', {
            metaMessages: [
                `Max: ${maxSize} bytes`,
                `Given: ${size} bytes`
            ],
            name: 'BlobSizeTooLargeError'
        });
    }
}
exports.BlobSizeTooLargeError = BlobSizeTooLargeError;
class EmptyBlobError extends base_js_1.BaseError {
    constructor(){
        super('Blob data must not be empty.', {
            name: 'EmptyBlobError'
        });
    }
}
exports.EmptyBlobError = EmptyBlobError;
class InvalidVersionedHashSizeError extends base_js_1.BaseError {
    constructor({ hash, size }){
        super(`Versioned hash "${hash}" size is invalid.`, {
            metaMessages: [
                'Expected: 32',
                `Received: ${size}`
            ],
            name: 'InvalidVersionedHashSizeError'
        });
    }
}
exports.InvalidVersionedHashSizeError = InvalidVersionedHashSizeError;
class InvalidVersionedHashVersionError extends base_js_1.BaseError {
    constructor({ hash, version }){
        super(`Versioned hash "${hash}" version is invalid.`, {
            metaMessages: [
                `Expected: ${kzg_js_1.versionedHashVersionKzg}`,
                `Received: ${version}`
            ],
            name: 'InvalidVersionedHashVersionError'
        });
    }
}
exports.InvalidVersionedHashVersionError = InvalidVersionedHashVersionError; //# sourceMappingURL=blob.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/toBlobs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toBlobs = toBlobs;
const blob_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/blob.js [app-client] (ecmascript)");
const blob_js_2 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/blob.js [app-client] (ecmascript)");
const cursor_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/cursor.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function toBlobs(parameters) {
    const to = parameters.to ?? (typeof parameters.data === 'string' ? 'hex' : 'bytes');
    const data = typeof parameters.data === 'string' ? (0, toBytes_js_1.hexToBytes)(parameters.data) : parameters.data;
    const size_ = (0, size_js_1.size)(data);
    if (!size_) throw new blob_js_2.EmptyBlobError();
    if (size_ > blob_js_1.maxBytesPerTransaction) throw new blob_js_2.BlobSizeTooLargeError({
        maxSize: blob_js_1.maxBytesPerTransaction,
        size: size_
    });
    const blobs = [];
    let active = true;
    let position = 0;
    while(active){
        const blob = (0, cursor_js_1.createCursor)(new Uint8Array(blob_js_1.bytesPerBlob));
        let size = 0;
        while(size < blob_js_1.fieldElementsPerBlob){
            const bytes = data.slice(position, position + (blob_js_1.bytesPerFieldElement - 1));
            blob.pushByte(0x00);
            blob.pushBytes(bytes);
            if (bytes.length < 31) {
                blob.pushByte(0x80);
                active = false;
                break;
            }
            size++;
            position += 31;
        }
        blobs.push(blob);
    }
    return to === 'bytes' ? blobs.map((x)=>x.bytes) : blobs.map((x)=>(0, toHex_js_1.bytesToHex)(x.bytes));
} //# sourceMappingURL=toBlobs.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/toBlobSidecars.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toBlobSidecars = toBlobSidecars;
const blobsToCommitments_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/blobsToCommitments.js [app-client] (ecmascript)");
const blobsToProofs_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/blobsToProofs.js [app-client] (ecmascript)");
const toBlobs_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/toBlobs.js [app-client] (ecmascript)");
function toBlobSidecars(parameters) {
    const { data, kzg, to } = parameters;
    const blobs = parameters.blobs ?? (0, toBlobs_js_1.toBlobs)({
        data: data,
        to
    });
    const commitments = parameters.commitments ?? (0, blobsToCommitments_js_1.blobsToCommitments)({
        blobs,
        kzg: kzg,
        to
    });
    const proofs = parameters.proofs ?? (0, blobsToProofs_js_1.blobsToProofs)({
        blobs,
        commitments,
        kzg: kzg,
        to
    });
    const sidecars = [];
    for(let i = 0; i < blobs.length; i++)sidecars.push({
        blob: blobs[i],
        commitment: commitments[i],
        proof: proofs[i]
    });
    return sidecars;
} //# sourceMappingURL=toBlobSidecars.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/getTransactionType.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransactionType = getTransactionType;
const transaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
function getTransactionType(transaction) {
    if (transaction.type) return transaction.type;
    if (typeof transaction.authorizationList !== 'undefined') return 'eip7702';
    if (typeof transaction.blobs !== 'undefined' || typeof transaction.blobVersionedHashes !== 'undefined' || typeof transaction.maxFeePerBlobGas !== 'undefined' || typeof transaction.sidecars !== 'undefined') return 'eip4844';
    if (typeof transaction.maxFeePerGas !== 'undefined' || typeof transaction.maxPriorityFeePerGas !== 'undefined') {
        return 'eip1559';
    }
    if (typeof transaction.gasPrice !== 'undefined') {
        if (typeof transaction.accessList !== 'undefined') return 'eip2930';
        return 'legacy';
    }
    throw new transaction_js_1.InvalidSerializableTransactionError({
        transaction
    });
} //# sourceMappingURL=getTransactionType.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getChainId.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getChainId = getChainId;
const fromHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
async function getChainId(client) {
    const chainIdHex = await client.request({
        method: 'eth_chainId'
    }, {
        dedupe: true
    });
    return (0, fromHex_js_1.hexToNumber)(chainIdHex);
} //# sourceMappingURL=getChainId.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/prepareTransactionRequest.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.eip1559NetworkCache = exports.defaultParameters = void 0;
exports.prepareTransactionRequest = prepareTransactionRequest;
const parseAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const estimateFeesPerGas_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/estimateFeesPerGas.js [app-client] (ecmascript)");
const estimateGas_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/estimateGas.js [app-client] (ecmascript)");
const getBlock_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getBlock.js [app-client] (ecmascript)");
const getTransactionCount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getTransactionCount.js [app-client] (ecmascript)");
const fee_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/fee.js [app-client] (ecmascript)");
const blobsToCommitments_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/blobsToCommitments.js [app-client] (ecmascript)");
const blobsToProofs_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/blobsToProofs.js [app-client] (ecmascript)");
const commitmentsToVersionedHashes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/commitmentsToVersionedHashes.js [app-client] (ecmascript)");
const toBlobSidecars_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/toBlobSidecars.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const assertRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-client] (ecmascript)");
const getTransactionType_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/getTransactionType.js [app-client] (ecmascript)");
const getChainId_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getChainId.js [app-client] (ecmascript)");
exports.defaultParameters = [
    'blobVersionedHashes',
    'chainId',
    'fees',
    'gas',
    'nonce',
    'type'
];
exports.eip1559NetworkCache = new Map();
async function prepareTransactionRequest(client, args) {
    const { account: account_ = client.account, blobs, chain, gas, kzg, nonce, nonceManager, parameters = exports.defaultParameters, type } = args;
    const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : account_;
    const request = {
        ...args,
        ...account ? {
            from: account?.address
        } : {}
    };
    let block;
    async function getBlock() {
        if (block) return block;
        block = await (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({
            blockTag: 'latest'
        });
        return block;
    }
    let chainId;
    async function getChainId() {
        if (chainId) return chainId;
        if (chain) return chain.id;
        if (typeof args.chainId !== 'undefined') return args.chainId;
        const chainId_ = await (0, getAction_js_1.getAction)(client, getChainId_js_1.getChainId, 'getChainId')({});
        chainId = chainId_;
        return chainId;
    }
    if (parameters.includes('nonce') && typeof nonce === 'undefined' && account) {
        if (nonceManager) {
            const chainId = await getChainId();
            request.nonce = await nonceManager.consume({
                address: account.address,
                chainId,
                client
            });
        } else {
            request.nonce = await (0, getAction_js_1.getAction)(client, getTransactionCount_js_1.getTransactionCount, 'getTransactionCount')({
                address: account.address,
                blockTag: 'pending'
            });
        }
    }
    if ((parameters.includes('blobVersionedHashes') || parameters.includes('sidecars')) && blobs && kzg) {
        const commitments = (0, blobsToCommitments_js_1.blobsToCommitments)({
            blobs,
            kzg
        });
        if (parameters.includes('blobVersionedHashes')) {
            const versionedHashes = (0, commitmentsToVersionedHashes_js_1.commitmentsToVersionedHashes)({
                commitments,
                to: 'hex'
            });
            request.blobVersionedHashes = versionedHashes;
        }
        if (parameters.includes('sidecars')) {
            const proofs = (0, blobsToProofs_js_1.blobsToProofs)({
                blobs,
                commitments,
                kzg
            });
            const sidecars = (0, toBlobSidecars_js_1.toBlobSidecars)({
                blobs,
                commitments,
                proofs,
                to: 'hex'
            });
            request.sidecars = sidecars;
        }
    }
    if (parameters.includes('chainId')) request.chainId = await getChainId();
    if ((parameters.includes('fees') || parameters.includes('type')) && typeof type === 'undefined') {
        try {
            request.type = (0, getTransactionType_js_1.getTransactionType)(request);
        } catch  {
            let isEip1559Network = exports.eip1559NetworkCache.get(client.uid);
            if (typeof isEip1559Network === 'undefined') {
                const block = await getBlock();
                isEip1559Network = typeof block?.baseFeePerGas === 'bigint';
                exports.eip1559NetworkCache.set(client.uid, isEip1559Network);
            }
            request.type = isEip1559Network ? 'eip1559' : 'legacy';
        }
    }
    if (parameters.includes('fees')) {
        if (request.type !== 'legacy' && request.type !== 'eip2930') {
            if (typeof request.maxFeePerGas === 'undefined' || typeof request.maxPriorityFeePerGas === 'undefined') {
                const block = await getBlock();
                const { maxFeePerGas, maxPriorityFeePerGas } = await (0, estimateFeesPerGas_js_1.internal_estimateFeesPerGas)(client, {
                    block: block,
                    chain,
                    request: request
                });
                if (typeof args.maxPriorityFeePerGas === 'undefined' && args.maxFeePerGas && args.maxFeePerGas < maxPriorityFeePerGas) throw new fee_js_1.MaxFeePerGasTooLowError({
                    maxPriorityFeePerGas
                });
                request.maxPriorityFeePerGas = maxPriorityFeePerGas;
                request.maxFeePerGas = maxFeePerGas;
            }
        } else {
            if (typeof args.maxFeePerGas !== 'undefined' || typeof args.maxPriorityFeePerGas !== 'undefined') throw new fee_js_1.Eip1559FeesNotSupportedError();
            if (typeof args.gasPrice === 'undefined') {
                const block = await getBlock();
                const { gasPrice: gasPrice_ } = await (0, estimateFeesPerGas_js_1.internal_estimateFeesPerGas)(client, {
                    block: block,
                    chain,
                    request: request,
                    type: 'legacy'
                });
                request.gasPrice = gasPrice_;
            }
        }
    }
    if (parameters.includes('gas') && typeof gas === 'undefined') request.gas = await (0, getAction_js_1.getAction)(client, estimateGas_js_1.estimateGas, 'estimateGas')({
        ...request,
        account,
        prepare: account?.type === 'local' ? [] : [
            'blobVersionedHashes'
        ]
    });
    (0, assertRequest_js_1.assertRequest)(request);
    delete request.parameters;
    return request;
} //# sourceMappingURL=prepareTransactionRequest.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/estimateGas.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.estimateGas = estimateGas;
const parseAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const recoverAuthorizationAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/authorization/recoverAuthorizationAddress.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const getEstimateGasError_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getEstimateGasError.js [app-client] (ecmascript)");
const extract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/extract.js [app-client] (ecmascript)");
const transactionRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
const stateOverride_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/stateOverride.js [app-client] (ecmascript)");
const assertRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-client] (ecmascript)");
const prepareTransactionRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/prepareTransactionRequest.js [app-client] (ecmascript)");
async function estimateGas(client, args) {
    const { account: account_ = client.account, prepare = true } = args;
    const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : undefined;
    const parameters = (()=>{
        if (Array.isArray(prepare)) return prepare;
        if (account?.type !== 'local') return [
            'blobVersionedHashes'
        ];
        return undefined;
    })();
    try {
        const { accessList, authorizationList, blobs, blobVersionedHashes, blockNumber, blockTag, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, value, stateOverride, ...rest } = prepare ? await (0, prepareTransactionRequest_js_1.prepareTransactionRequest)(client, {
            ...args,
            parameters
        }) : args;
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const rpcStateOverride = (0, stateOverride_js_1.serializeStateOverride)(stateOverride);
        const to = await (async ()=>{
            if (rest.to) return rest.to;
            if (authorizationList && authorizationList.length > 0) return await (0, recoverAuthorizationAddress_js_1.recoverAuthorizationAddress)({
                authorization: authorizationList[0]
            }).catch(()=>{
                throw new base_js_1.BaseError('`to` is required. Could not infer from `authorizationList`');
            });
            return undefined;
        })();
        (0, assertRequest_js_1.assertRequest)(args);
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || transactionRequest_js_1.formatTransactionRequest;
        const request = format({
            ...(0, extract_js_1.extract)(rest, {
                format: chainFormat
            }),
            account,
            accessList,
            authorizationList,
            blobs,
            blobVersionedHashes,
            data,
            gas,
            gasPrice,
            maxFeePerBlobGas,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to,
            value
        }, 'estimateGas');
        return BigInt(await client.request({
            method: 'eth_estimateGas',
            params: rpcStateOverride ? [
                request,
                block ?? client.experimental_blockTag ?? 'latest',
                rpcStateOverride
            ] : block ? [
                request,
                block
            ] : [
                request
            ]
        }));
    } catch (err) {
        throw (0, getEstimateGasError_js_1.getEstimateGasError)(err, {
            ...args,
            account,
            chain: client.chain
        });
    }
} //# sourceMappingURL=estimateGas.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/estimateContractGas.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.estimateContractGas = estimateContractGas;
const parseAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
const getContractError_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getContractError.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const estimateGas_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/estimateGas.js [app-client] (ecmascript)");
async function estimateContractGas(client, parameters) {
    const { abi, address, args, functionName, dataSuffix, ...request } = parameters;
    const data = (0, encodeFunctionData_js_1.encodeFunctionData)({
        abi,
        args,
        functionName
    });
    try {
        const gas = await (0, getAction_js_1.getAction)(client, estimateGas_js_1.estimateGas, 'estimateGas')({
            data: `${data}${dataSuffix ? dataSuffix.replace('0x', '') : ''}`,
            to: address,
            ...request
        });
        return gas;
    } catch (error) {
        const account = request.account ? (0, parseAccount_js_1.parseAccount)(request.account) : undefined;
        throw (0, getContractError_js_1.getContractError)(error, {
            abi,
            address,
            args,
            docsPath: '/docs/contract/estimateContractGas',
            functionName,
            sender: account?.address
        });
    }
} //# sourceMappingURL=estimateContractGas.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isAddressEqual = isAddressEqual;
const address_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
function isAddressEqual(a, b) {
    if (!(0, isAddress_js_1.isAddress)(a, {
        strict: false
    })) throw new address_js_1.InvalidAddressError({
        address: a
    });
    if (!(0, isAddress_js_1.isAddress)(b, {
        strict: false
    })) throw new address_js_1.InvalidAddressError({
        address: b
    });
    return a.toLowerCase() === b.toLowerCase();
} //# sourceMappingURL=isAddressEqual.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeEventLog.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeEventLog = decodeEventLog;
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const cursor_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/cursor.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
const toEventSelector_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toEventSelector.js [app-client] (ecmascript)");
const decodeAbiParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-client] (ecmascript)");
const formatAbiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-client] (ecmascript)");
const docsPath = '/docs/contract/decodeEventLog';
function decodeEventLog(parameters) {
    const { abi, data, strict: strict_, topics } = parameters;
    const strict = strict_ ?? true;
    const [signature, ...argTopics] = topics;
    if (!signature) throw new abi_js_1.AbiEventSignatureEmptyTopicsError({
        docsPath
    });
    const abiItem = abi.find((x)=>x.type === 'event' && signature === (0, toEventSelector_js_1.toEventSelector)((0, formatAbiItem_js_1.formatAbiItem)(x)));
    if (!(abiItem && 'name' in abiItem) || abiItem.type !== 'event') throw new abi_js_1.AbiEventSignatureNotFoundError(signature, {
        docsPath
    });
    const { name, inputs } = abiItem;
    const isUnnamed = inputs?.some((x)=>!('name' in x && x.name));
    const args = isUnnamed ? [] : {};
    const indexedInputs = inputs.map((x, i)=>[
            x,
            i
        ]).filter(([x])=>'indexed' in x && x.indexed);
    for(let i = 0; i < indexedInputs.length; i++){
        const [param, argIndex] = indexedInputs[i];
        const topic = argTopics[i];
        if (!topic) throw new abi_js_1.DecodeLogTopicsMismatch({
            abiItem,
            param: param
        });
        args[isUnnamed ? argIndex : param.name || argIndex] = decodeTopic({
            param,
            value: topic
        });
    }
    const nonIndexedInputs = inputs.filter((x)=>!('indexed' in x && x.indexed));
    if (nonIndexedInputs.length > 0) {
        if (data && data !== '0x') {
            try {
                const decodedData = (0, decodeAbiParameters_js_1.decodeAbiParameters)(nonIndexedInputs, data);
                if (decodedData) {
                    if (isUnnamed) for(let i = 0; i < inputs.length; i++)args[i] = args[i] ?? decodedData.shift();
                    else for(let i = 0; i < nonIndexedInputs.length; i++)args[nonIndexedInputs[i].name] = decodedData[i];
                }
            } catch (err) {
                if (strict) {
                    if (err instanceof abi_js_1.AbiDecodingDataSizeTooSmallError || err instanceof cursor_js_1.PositionOutOfBoundsError) throw new abi_js_1.DecodeLogDataMismatch({
                        abiItem,
                        data: data,
                        params: nonIndexedInputs,
                        size: (0, size_js_1.size)(data)
                    });
                    throw err;
                }
            }
        } else if (strict) {
            throw new abi_js_1.DecodeLogDataMismatch({
                abiItem,
                data: '0x',
                params: nonIndexedInputs,
                size: 0
            });
        }
    }
    return {
        eventName: name,
        args: Object.values(args).length > 0 ? args : undefined
    };
}
function decodeTopic({ param, value }) {
    if (param.type === 'string' || param.type === 'bytes' || param.type === 'tuple' || param.type.match(/^(.*)\[(\d+)?\]$/)) return value;
    const decodedArg = (0, decodeAbiParameters_js_1.decodeAbiParameters)([
        param
    ], value) || [];
    return decodedArg[0];
} //# sourceMappingURL=decodeEventLog.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/parseEventLogs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseEventLogs = parseEventLogs;
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const isAddressEqual_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const keccak256_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
const toEventSelector_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toEventSelector.js [app-client] (ecmascript)");
const decodeEventLog_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeEventLog.js [app-client] (ecmascript)");
function parseEventLogs(parameters) {
    const { abi, args, logs, strict = true } = parameters;
    const eventName = (()=>{
        if (!parameters.eventName) return undefined;
        if (Array.isArray(parameters.eventName)) return parameters.eventName;
        return [
            parameters.eventName
        ];
    })();
    return logs.map((log)=>{
        try {
            const abiItem = abi.find((abiItem)=>abiItem.type === 'event' && log.topics[0] === (0, toEventSelector_js_1.toEventSelector)(abiItem));
            if (!abiItem) return null;
            const event = (0, decodeEventLog_js_1.decodeEventLog)({
                ...log,
                abi: [
                    abiItem
                ],
                strict
            });
            if (eventName && !eventName.includes(event.eventName)) return null;
            if (!includesArgs({
                args: event.args,
                inputs: abiItem.inputs,
                matchArgs: args
            })) return null;
            return {
                ...event,
                ...log
            };
        } catch (err) {
            let eventName;
            let isUnnamed;
            if (err instanceof abi_js_1.AbiEventSignatureNotFoundError) return null;
            if (err instanceof abi_js_1.DecodeLogDataMismatch || err instanceof abi_js_1.DecodeLogTopicsMismatch) {
                if (strict) return null;
                eventName = err.abiItem.name;
                isUnnamed = err.abiItem.inputs?.some((x)=>!('name' in x && x.name));
            }
            return {
                ...log,
                args: isUnnamed ? [] : {},
                eventName
            };
        }
    }).filter(Boolean);
}
function includesArgs(parameters) {
    const { args, inputs, matchArgs } = parameters;
    if (!matchArgs) return true;
    if (!args) return false;
    function isEqual(input, value, arg) {
        try {
            if (input.type === 'address') return (0, isAddressEqual_js_1.isAddressEqual)(value, arg);
            if (input.type === 'string' || input.type === 'bytes') return (0, keccak256_js_1.keccak256)((0, toBytes_js_1.toBytes)(value)) === arg;
            return value === arg;
        } catch  {
            return false;
        }
    }
    if (Array.isArray(args) && Array.isArray(matchArgs)) {
        return matchArgs.every((value, index)=>{
            if (value === null || value === undefined) return true;
            const input = inputs[index];
            if (!input) return false;
            const value_ = Array.isArray(value) ? value : [
                value
            ];
            return value_.some((value)=>isEqual(input, value, args[index]));
        });
    }
    if (typeof args === 'object' && !Array.isArray(args) && typeof matchArgs === 'object' && !Array.isArray(matchArgs)) return Object.entries(matchArgs).every(([key, value])=>{
        if (value === null || value === undefined) return true;
        const input = inputs.find((input)=>input.name === key);
        if (!input) return false;
        const value_ = Array.isArray(value) ? value : [
            value
        ];
        return value_.some((value)=>isEqual(input, value, args[key]));
    });
    return false;
} //# sourceMappingURL=parseEventLogs.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/log.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatLog = formatLog;
function formatLog(log, { args, eventName } = {}) {
    return {
        ...log,
        blockHash: log.blockHash ? log.blockHash : null,
        blockNumber: log.blockNumber ? BigInt(log.blockNumber) : null,
        logIndex: log.logIndex ? Number(log.logIndex) : null,
        transactionHash: log.transactionHash ? log.transactionHash : null,
        transactionIndex: log.transactionIndex ? Number(log.transactionIndex) : null,
        ...eventName ? {
            args,
            eventName
        } : {}
    };
} //# sourceMappingURL=log.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getLogs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getLogs = getLogs;
const encodeEventTopics_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeEventTopics.js [app-client] (ecmascript)");
const parseEventLogs_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/parseEventLogs.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const log_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/log.js [app-client] (ecmascript)");
async function getLogs(client, { address, blockHash, fromBlock, toBlock, event, events: events_, args, strict: strict_ } = {}) {
    const strict = strict_ ?? false;
    const events = events_ ?? (event ? [
        event
    ] : undefined);
    let topics = [];
    if (events) {
        const encoded = events.flatMap((event)=>(0, encodeEventTopics_js_1.encodeEventTopics)({
                abi: [
                    event
                ],
                eventName: event.name,
                args: events_ ? undefined : args
            }));
        topics = [
            encoded
        ];
        if (event) topics = topics[0];
    }
    let logs;
    if (blockHash) {
        logs = await client.request({
            method: 'eth_getLogs',
            params: [
                {
                    address,
                    topics,
                    blockHash
                }
            ]
        });
    } else {
        logs = await client.request({
            method: 'eth_getLogs',
            params: [
                {
                    address,
                    topics,
                    fromBlock: typeof fromBlock === 'bigint' ? (0, toHex_js_1.numberToHex)(fromBlock) : fromBlock,
                    toBlock: typeof toBlock === 'bigint' ? (0, toHex_js_1.numberToHex)(toBlock) : toBlock
                }
            ]
        });
    }
    const formattedLogs = logs.map((log)=>(0, log_js_1.formatLog)(log));
    if (!events) return formattedLogs;
    return (0, parseEventLogs_js_1.parseEventLogs)({
        abi: events,
        args: args,
        logs: formattedLogs,
        strict
    });
} //# sourceMappingURL=getLogs.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getContractEvents.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getContractEvents = getContractEvents;
const getAbiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const getLogs_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getLogs.js [app-client] (ecmascript)");
async function getContractEvents(client, parameters) {
    const { abi, address, args, blockHash, eventName, fromBlock, toBlock, strict } = parameters;
    const event = eventName ? (0, getAbiItem_js_1.getAbiItem)({
        abi,
        name: eventName
    }) : undefined;
    const events = !event ? abi.filter((x)=>x.type === 'event') : undefined;
    return (0, getAction_js_1.getAction)(client, getLogs_js_1.getLogs, 'getLogs')({
        address,
        args,
        blockHash,
        event,
        events,
        fromBlock,
        toBlock,
        strict
    });
} //# sourceMappingURL=getContractEvents.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeFunctionResult = decodeFunctionResult;
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const decodeAbiParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-client] (ecmascript)");
const getAbiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-client] (ecmascript)");
const docsPath = '/docs/contract/decodeFunctionResult';
function decodeFunctionResult(parameters) {
    const { abi, args, functionName, data } = parameters;
    let abiItem = abi[0];
    if (functionName) {
        const item = (0, getAbiItem_js_1.getAbiItem)({
            abi,
            args,
            name: functionName
        });
        if (!item) throw new abi_js_1.AbiFunctionNotFoundError(functionName, {
            docsPath
        });
        abiItem = item;
    }
    if (abiItem.type !== 'function') throw new abi_js_1.AbiFunctionNotFoundError(undefined, {
        docsPath
    });
    if (!abiItem.outputs) throw new abi_js_1.AbiFunctionOutputsNotFoundError(abiItem.name, {
        docsPath
    });
    const values = (0, decodeAbiParameters_js_1.decodeAbiParameters)(abiItem.outputs, data);
    if (values && values.length > 1) return values;
    if (values && values.length === 1) return values[0];
    return undefined;
} //# sourceMappingURL=decodeFunctionResult.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/abis.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.erc4626Abi = exports.erc721Abi = exports.erc1155Abi = exports.erc20Abi_bytes32 = exports.erc20Abi = exports.erc6492SignatureValidatorAbi = exports.erc1271Abi = exports.addressResolverAbi = exports.textResolverAbi = exports.universalResolverReverseAbi = exports.universalResolverResolveAbi = exports.batchGatewayAbi = exports.multicall3Abi = void 0;
exports.multicall3Abi = [
    {
        inputs: [
            {
                components: [
                    {
                        name: 'target',
                        type: 'address'
                    },
                    {
                        name: 'allowFailure',
                        type: 'bool'
                    },
                    {
                        name: 'callData',
                        type: 'bytes'
                    }
                ],
                name: 'calls',
                type: 'tuple[]'
            }
        ],
        name: 'aggregate3',
        outputs: [
            {
                components: [
                    {
                        name: 'success',
                        type: 'bool'
                    },
                    {
                        name: 'returnData',
                        type: 'bytes'
                    }
                ],
                name: 'returnData',
                type: 'tuple[]'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getCurrentBlockTimestamp',
        outputs: [
            {
                internalType: 'uint256',
                name: 'timestamp',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
];
exports.batchGatewayAbi = [
    {
        name: 'query',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                type: 'tuple[]',
                name: 'queries',
                components: [
                    {
                        type: 'address',
                        name: 'sender'
                    },
                    {
                        type: 'string[]',
                        name: 'urls'
                    },
                    {
                        type: 'bytes',
                        name: 'data'
                    }
                ]
            }
        ],
        outputs: [
            {
                type: 'bool[]',
                name: 'failures'
            },
            {
                type: 'bytes[]',
                name: 'responses'
            }
        ]
    },
    {
        name: 'HttpError',
        type: 'error',
        inputs: [
            {
                type: 'uint16',
                name: 'status'
            },
            {
                type: 'string',
                name: 'message'
            }
        ]
    }
];
const universalResolverErrors = [
    {
        inputs: [
            {
                name: 'dns',
                type: 'bytes'
            }
        ],
        name: 'DNSDecodingFailed',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'ens',
                type: 'string'
            }
        ],
        name: 'DNSEncodingFailed',
        type: 'error'
    },
    {
        inputs: [],
        name: 'EmptyAddress',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'status',
                type: 'uint16'
            },
            {
                name: 'message',
                type: 'string'
            }
        ],
        name: 'HttpError',
        type: 'error'
    },
    {
        inputs: [],
        name: 'InvalidBatchGatewayResponse',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'errorData',
                type: 'bytes'
            }
        ],
        name: 'ResolverError',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'name',
                type: 'bytes'
            },
            {
                name: 'resolver',
                type: 'address'
            }
        ],
        name: 'ResolverNotContract',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'name',
                type: 'bytes'
            }
        ],
        name: 'ResolverNotFound',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'primary',
                type: 'string'
            },
            {
                name: 'primaryAddress',
                type: 'bytes'
            }
        ],
        name: 'ReverseAddressMismatch',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'bytes4',
                name: 'selector',
                type: 'bytes4'
            }
        ],
        name: 'UnsupportedResolverProfile',
        type: 'error'
    }
];
exports.universalResolverResolveAbi = [
    ...universalResolverErrors,
    {
        name: 'resolveWithGateways',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'name',
                type: 'bytes'
            },
            {
                name: 'data',
                type: 'bytes'
            },
            {
                name: 'gateways',
                type: 'string[]'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bytes'
            },
            {
                name: 'address',
                type: 'address'
            }
        ]
    }
];
exports.universalResolverReverseAbi = [
    ...universalResolverErrors,
    {
        name: 'reverseWithGateways',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                type: 'bytes',
                name: 'reverseName'
            },
            {
                type: 'uint256',
                name: 'coinType'
            },
            {
                type: 'string[]',
                name: 'gateways'
            }
        ],
        outputs: [
            {
                type: 'string',
                name: 'resolvedName'
            },
            {
                type: 'address',
                name: 'resolver'
            },
            {
                type: 'address',
                name: 'reverseResolver'
            }
        ]
    }
];
exports.textResolverAbi = [
    {
        name: 'text',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'name',
                type: 'bytes32'
            },
            {
                name: 'key',
                type: 'string'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'string'
            }
        ]
    }
];
exports.addressResolverAbi = [
    {
        name: 'addr',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'name',
                type: 'bytes32'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'address'
            }
        ]
    },
    {
        name: 'addr',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'name',
                type: 'bytes32'
            },
            {
                name: 'coinType',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bytes'
            }
        ]
    }
];
exports.erc1271Abi = [
    {
        name: 'isValidSignature',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'hash',
                type: 'bytes32'
            },
            {
                name: 'signature',
                type: 'bytes'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bytes4'
            }
        ]
    }
];
exports.erc6492SignatureValidatorAbi = [
    {
        inputs: [
            {
                name: '_signer',
                type: 'address'
            },
            {
                name: '_hash',
                type: 'bytes32'
            },
            {
                name: '_signature',
                type: 'bytes'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        inputs: [
            {
                name: '_signer',
                type: 'address'
            },
            {
                name: '_hash',
                type: 'bytes32'
            },
            {
                name: '_signature',
                type: 'bytes'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        name: 'isValidSig'
    }
];
exports.erc20Abi = [
    {
        type: 'event',
        name: 'Approval',
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                name: 'spender',
                type: 'address'
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256'
            }
        ]
    },
    {
        type: 'event',
        name: 'Transfer',
        inputs: [
            {
                indexed: true,
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'allowance',
        stateMutability: 'view',
        inputs: [
            {
                name: 'owner',
                type: 'address'
            },
            {
                name: 'spender',
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
        name: 'approve',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'spender',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    },
    {
        type: 'function',
        name: 'balanceOf',
        stateMutability: 'view',
        inputs: [
            {
                name: 'account',
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
        name: 'name',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'string'
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
                type: 'string'
            }
        ]
    },
    {
        type: 'function',
        name: 'totalSupply',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'transfer',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    },
    {
        type: 'function',
        name: 'transferFrom',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'sender',
                type: 'address'
            },
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    }
];
exports.erc20Abi_bytes32 = [
    {
        type: 'event',
        name: 'Approval',
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                name: 'spender',
                type: 'address'
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256'
            }
        ]
    },
    {
        type: 'event',
        name: 'Transfer',
        inputs: [
            {
                indexed: true,
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'allowance',
        stateMutability: 'view',
        inputs: [
            {
                name: 'owner',
                type: 'address'
            },
            {
                name: 'spender',
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
        name: 'approve',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'spender',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    },
    {
        type: 'function',
        name: 'balanceOf',
        stateMutability: 'view',
        inputs: [
            {
                name: 'account',
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
        name: 'name',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'bytes32'
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
                type: 'bytes32'
            }
        ]
    },
    {
        type: 'function',
        name: 'totalSupply',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'transfer',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    },
    {
        type: 'function',
        name: 'transferFrom',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'sender',
                type: 'address'
            },
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    }
];
exports.erc1155Abi = [
    {
        inputs: [
            {
                internalType: 'address',
                name: 'sender',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: 'balance',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: 'needed',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'ERC1155InsufficientBalance',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'approver',
                type: 'address'
            }
        ],
        name: 'ERC1155InvalidApprover',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'idsLength',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: 'valuesLength',
                type: 'uint256'
            }
        ],
        name: 'ERC1155InvalidArrayLength',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'operator',
                type: 'address'
            }
        ],
        name: 'ERC1155InvalidOperator',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'receiver',
                type: 'address'
            }
        ],
        name: 'ERC1155InvalidReceiver',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'sender',
                type: 'address'
            }
        ],
        name: 'ERC1155InvalidSender',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'operator',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'owner',
                type: 'address'
            }
        ],
        name: 'ERC1155MissingApprovalForAll',
        type: 'error'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'operator',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'approved',
                type: 'bool'
            }
        ],
        name: 'ApprovalForAll',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'operator',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256[]',
                name: 'ids',
                type: 'uint256[]'
            },
            {
                indexed: false,
                internalType: 'uint256[]',
                name: 'values',
                type: 'uint256[]'
            }
        ],
        name: 'TransferBatch',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'operator',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'id',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
            }
        ],
        name: 'TransferSingle',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'string',
                name: 'value',
                type: 'string'
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'id',
                type: 'uint256'
            }
        ],
        name: 'URI',
        type: 'event'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: 'id',
                type: 'uint256'
            }
        ],
        name: 'balanceOf',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address[]',
                name: 'accounts',
                type: 'address[]'
            },
            {
                internalType: 'uint256[]',
                name: 'ids',
                type: 'uint256[]'
            }
        ],
        name: 'balanceOfBatch',
        outputs: [
            {
                internalType: 'uint256[]',
                name: '',
                type: 'uint256[]'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'operator',
                type: 'address'
            }
        ],
        name: 'isApprovedForAll',
        outputs: [
            {
                internalType: 'bool',
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
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                internalType: 'uint256[]',
                name: 'ids',
                type: 'uint256[]'
            },
            {
                internalType: 'uint256[]',
                name: 'values',
                type: 'uint256[]'
            },
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes'
            }
        ],
        name: 'safeBatchTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: 'id',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
            },
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes'
            }
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'operator',
                type: 'address'
            },
            {
                internalType: 'bool',
                name: 'approved',
                type: 'bool'
            }
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes4',
                name: 'interfaceId',
                type: 'bytes4'
            }
        ],
        name: 'supportsInterface',
        outputs: [
            {
                internalType: 'bool',
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
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        name: 'uri',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
];
exports.erc721Abi = [
    {
        type: 'event',
        name: 'Approval',
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                name: 'spender',
                type: 'address'
            },
            {
                indexed: true,
                name: 'tokenId',
                type: 'uint256'
            }
        ]
    },
    {
        type: 'event',
        name: 'ApprovalForAll',
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                name: 'operator',
                type: 'address'
            },
            {
                indexed: false,
                name: 'approved',
                type: 'bool'
            }
        ]
    },
    {
        type: 'event',
        name: 'Transfer',
        inputs: [
            {
                indexed: true,
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                name: 'to',
                type: 'address'
            },
            {
                indexed: true,
                name: 'tokenId',
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'approve',
        stateMutability: 'payable',
        inputs: [
            {
                name: 'spender',
                type: 'address'
            },
            {
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        outputs: []
    },
    {
        type: 'function',
        name: 'balanceOf',
        stateMutability: 'view',
        inputs: [
            {
                name: 'account',
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
        name: 'getApproved',
        stateMutability: 'view',
        inputs: [
            {
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'address'
            }
        ]
    },
    {
        type: 'function',
        name: 'isApprovedForAll',
        stateMutability: 'view',
        inputs: [
            {
                name: 'owner',
                type: 'address'
            },
            {
                name: 'operator',
                type: 'address'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    },
    {
        type: 'function',
        name: 'name',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'string'
            }
        ]
    },
    {
        type: 'function',
        name: 'ownerOf',
        stateMutability: 'view',
        inputs: [
            {
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: 'owner',
                type: 'address'
            }
        ]
    },
    {
        type: 'function',
        name: 'safeTransferFrom',
        stateMutability: 'payable',
        inputs: [
            {
                name: 'from',
                type: 'address'
            },
            {
                name: 'to',
                type: 'address'
            },
            {
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        outputs: []
    },
    {
        type: 'function',
        name: 'safeTransferFrom',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'from',
                type: 'address'
            },
            {
                name: 'to',
                type: 'address'
            },
            {
                name: 'id',
                type: 'uint256'
            },
            {
                name: 'data',
                type: 'bytes'
            }
        ],
        outputs: []
    },
    {
        type: 'function',
        name: 'setApprovalForAll',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'operator',
                type: 'address'
            },
            {
                name: 'approved',
                type: 'bool'
            }
        ],
        outputs: []
    },
    {
        type: 'function',
        name: 'symbol',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'string'
            }
        ]
    },
    {
        type: 'function',
        name: 'tokenByIndex',
        stateMutability: 'view',
        inputs: [
            {
                name: 'index',
                type: 'uint256'
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
        name: 'tokenByIndex',
        stateMutability: 'view',
        inputs: [
            {
                name: 'owner',
                type: 'address'
            },
            {
                name: 'index',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: 'tokenId',
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'tokenURI',
        stateMutability: 'view',
        inputs: [
            {
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'string'
            }
        ]
    },
    {
        type: 'function',
        name: 'totalSupply',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'transferFrom',
        stateMutability: 'payable',
        inputs: [
            {
                name: 'sender',
                type: 'address'
            },
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        outputs: []
    }
];
exports.erc4626Abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                name: 'spender',
                type: 'address'
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256'
            }
        ],
        name: 'Approval',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'sender',
                type: 'address'
            },
            {
                indexed: true,
                name: 'receiver',
                type: 'address'
            },
            {
                indexed: false,
                name: 'assets',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'shares',
                type: 'uint256'
            }
        ],
        name: 'Deposit',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256'
            }
        ],
        name: 'Transfer',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'sender',
                type: 'address'
            },
            {
                indexed: true,
                name: 'receiver',
                type: 'address'
            },
            {
                indexed: true,
                name: 'owner',
                type: 'address'
            },
            {
                indexed: false,
                name: 'assets',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'shares',
                type: 'uint256'
            }
        ],
        name: 'Withdraw',
        type: 'event'
    },
    {
        inputs: [
            {
                name: 'owner',
                type: 'address'
            },
            {
                name: 'spender',
                type: 'address'
            }
        ],
        name: 'allowance',
        outputs: [
            {
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'spender',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'approve',
        outputs: [
            {
                type: 'bool'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'asset',
        outputs: [
            {
                name: 'assetTokenAddress',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'account',
                type: 'address'
            }
        ],
        name: 'balanceOf',
        outputs: [
            {
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        name: 'convertToAssets',
        outputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        name: 'convertToShares',
        outputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'assets',
                type: 'uint256'
            },
            {
                name: 'receiver',
                type: 'address'
            }
        ],
        name: 'deposit',
        outputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'caller',
                type: 'address'
            }
        ],
        name: 'maxDeposit',
        outputs: [
            {
                name: 'maxAssets',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'caller',
                type: 'address'
            }
        ],
        name: 'maxMint',
        outputs: [
            {
                name: 'maxShares',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'owner',
                type: 'address'
            }
        ],
        name: 'maxRedeem',
        outputs: [
            {
                name: 'maxShares',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'owner',
                type: 'address'
            }
        ],
        name: 'maxWithdraw',
        outputs: [
            {
                name: 'maxAssets',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'shares',
                type: 'uint256'
            },
            {
                name: 'receiver',
                type: 'address'
            }
        ],
        name: 'mint',
        outputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        name: 'previewDeposit',
        outputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        name: 'previewMint',
        outputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        name: 'previewRedeem',
        outputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        name: 'previewWithdraw',
        outputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'shares',
                type: 'uint256'
            },
            {
                name: 'receiver',
                type: 'address'
            },
            {
                name: 'owner',
                type: 'address'
            }
        ],
        name: 'redeem',
        outputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'totalAssets',
        outputs: [
            {
                name: 'totalManagedAssets',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'totalSupply',
        outputs: [
            {
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'to',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'transfer',
        outputs: [
            {
                type: 'bool'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'from',
                type: 'address'
            },
            {
                name: 'to',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'transferFrom',
        outputs: [
            {
                type: 'bool'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'assets',
                type: 'uint256'
            },
            {
                name: 'receiver',
                type: 'address'
            },
            {
                name: 'owner',
                type: 'address'
            }
        ],
        name: 'withdraw',
        outputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    }
]; //# sourceMappingURL=abis.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/contract.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.aggregate3Signature = void 0;
exports.aggregate3Signature = '0x82ad56cb'; //# sourceMappingURL=contract.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/contracts.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.multicall3Bytecode = exports.erc6492SignatureValidatorByteCode = exports.deploylessCallViaFactoryBytecode = exports.deploylessCallViaBytecodeBytecode = void 0;
exports.deploylessCallViaBytecodeBytecode = '0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe';
exports.deploylessCallViaFactoryBytecode = '0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe';
exports.erc6492SignatureValidatorByteCode = '0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572';
exports.multicall3Bytecode = '0x608060405234801561001057600080fd5b506115b9806100206000396000f3fe6080604052600436106100f35760003560e01c80634d2301cc1161008a578063a8b0574e11610059578063a8b0574e14610325578063bce38bd714610350578063c3077fa914610380578063ee82ac5e146103b2576100f3565b80634d2301cc1461026257806372425d9d1461029f57806382ad56cb146102ca57806386d516e8146102fa576100f3565b80633408e470116100c65780633408e470146101af578063399542e9146101da5780633e64a6961461020c57806342cbb15c14610237576100f3565b80630f28c97d146100f8578063174dea7114610123578063252dba421461015357806327e86d6e14610184575b600080fd5b34801561010457600080fd5b5061010d6103ef565b60405161011a9190610c0a565b60405180910390f35b61013d60048036038101906101389190610c94565b6103f7565b60405161014a9190610e94565b60405180910390f35b61016d60048036038101906101689190610f0c565b610615565b60405161017b92919061101b565b60405180910390f35b34801561019057600080fd5b506101996107ab565b6040516101a69190611064565b60405180910390f35b3480156101bb57600080fd5b506101c46107b7565b6040516101d19190610c0a565b60405180910390f35b6101f460048036038101906101ef91906110ab565b6107bf565b6040516102039392919061110b565b60405180910390f35b34801561021857600080fd5b506102216107e1565b60405161022e9190610c0a565b60405180910390f35b34801561024357600080fd5b5061024c6107e9565b6040516102599190610c0a565b60405180910390f35b34801561026e57600080fd5b50610289600480360381019061028491906111a7565b6107f1565b6040516102969190610c0a565b60405180910390f35b3480156102ab57600080fd5b506102b4610812565b6040516102c19190610c0a565b60405180910390f35b6102e460048036038101906102df919061122a565b61081a565b6040516102f19190610e94565b60405180910390f35b34801561030657600080fd5b5061030f6109e4565b60405161031c9190610c0a565b60405180910390f35b34801561033157600080fd5b5061033a6109ec565b6040516103479190611286565b60405180910390f35b61036a600480360381019061036591906110ab565b6109f4565b6040516103779190610e94565b60405180910390f35b61039a60048036038101906103959190610f0c565b610ba6565b6040516103a99392919061110b565b60405180910390f35b3480156103be57600080fd5b506103d960048036038101906103d491906112cd565b610bca565b6040516103e69190611064565b60405180910390f35b600042905090565b60606000808484905090508067ffffffffffffffff81111561041c5761041b6112fa565b5b60405190808252806020026020018201604052801561045557816020015b610442610bd5565b81526020019060019003908161043a5790505b5092503660005b828110156105c957600085828151811061047957610478611329565b5b6020026020010151905087878381811061049657610495611329565b5b90506020028101906104a89190611367565b925060008360400135905080860195508360000160208101906104cb91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16818580606001906104f2919061138f565b604051610500929190611431565b60006040518083038185875af1925050503d806000811461053d576040519150601f19603f3d011682016040523d82523d6000602084013e610542565b606091505b5083600001846020018290528215151515815250505081516020850135176105bc577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260846000fd5b826001019250505061045c565b5082341461060c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610603906114a7565b60405180910390fd5b50505092915050565b6000606043915060008484905090508067ffffffffffffffff81111561063e5761063d6112fa565b5b60405190808252806020026020018201604052801561067157816020015b606081526020019060019003908161065c5790505b5091503660005b828110156107a157600087878381811061069557610694611329565b5b90506020028101906106a791906114c7565b92508260000160208101906106bc91906111a7565b73ffffffffffffffffffffffffffffffffffffffff168380602001906106e2919061138f565b6040516106f0929190611431565b6000604051808303816000865af19150503d806000811461072d576040519150601f19603f3d011682016040523d82523d6000602084013e610732565b606091505b5086848151811061074657610745611329565b5b60200260200101819052819250505080610795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078c9061153b565b60405180910390fd5b81600101915050610678565b5050509250929050565b60006001430340905090565b600046905090565b6000806060439250434091506107d68686866109f4565b905093509350939050565b600048905090565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b606060008383905090508067ffffffffffffffff81111561083e5761083d6112fa565b5b60405190808252806020026020018201604052801561087757816020015b610864610bd5565b81526020019060019003908161085c5790505b5091503660005b828110156109db57600084828151811061089b5761089a611329565b5b602002602001015190508686838181106108b8576108b7611329565b5b90506020028101906108ca919061155b565b92508260000160208101906108df91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060400190610905919061138f565b604051610913929190611431565b6000604051808303816000865af19150503d8060008114610950576040519150601f19603f3d011682016040523d82523d6000602084013e610955565b606091505b5082600001836020018290528215151515815250505080516020840135176109cf577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260646000fd5b8160010191505061087e565b50505092915050565b600045905090565b600041905090565b606060008383905090508067ffffffffffffffff811115610a1857610a176112fa565b5b604051908082528060200260200182016040528015610a5157816020015b610a3e610bd5565b815260200190600190039081610a365790505b5091503660005b82811015610b9c576000848281518110610a7557610a74611329565b5b60200260200101519050868683818110610a9257610a91611329565b5b9050602002810190610aa491906114c7565b9250826000016020810190610ab991906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060200190610adf919061138f565b604051610aed929190611431565b6000604051808303816000865af19150503d8060008114610b2a576040519150601f19603f3d011682016040523d82523d6000602084013e610b2f565b606091505b508260000183602001829052821515151581525050508715610b90578060000151610b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b869061153b565b60405180910390fd5b5b81600101915050610a58565b5050509392505050565b6000806060610bb7600186866107bf565b8093508194508295505050509250925092565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b610c0481610bf1565b82525050565b6000602082019050610c1f6000830184610bfb565b92915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f840112610c5457610c53610c2f565b5b8235905067ffffffffffffffff811115610c7157610c70610c34565b5b602083019150836020820283011115610c8d57610c8c610c39565b5b9250929050565b60008060208385031215610cab57610caa610c25565b5b600083013567ffffffffffffffff811115610cc957610cc8610c2a565b5b610cd585828601610c3e565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60008115159050919050565b610d2281610d0d565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d62578082015181840152602081019050610d47565b83811115610d71576000848401525b50505050565b6000601f19601f8301169050919050565b6000610d9382610d28565b610d9d8185610d33565b9350610dad818560208601610d44565b610db681610d77565b840191505092915050565b6000604083016000830151610dd96000860182610d19565b5060208301518482036020860152610df18282610d88565b9150508091505092915050565b6000610e0a8383610dc1565b905092915050565b6000602082019050919050565b6000610e2a82610ce1565b610e348185610cec565b935083602082028501610e4685610cfd565b8060005b85811015610e825784840389528151610e638582610dfe565b9450610e6e83610e12565b925060208a01995050600181019050610e4a565b50829750879550505050505092915050565b60006020820190508181036000830152610eae8184610e1f565b905092915050565b60008083601f840112610ecc57610ecb610c2f565b5b8235905067ffffffffffffffff811115610ee957610ee8610c34565b5b602083019150836020820283011115610f0557610f04610c39565b5b9250929050565b60008060208385031215610f2357610f22610c25565b5b600083013567ffffffffffffffff811115610f4157610f40610c2a565b5b610f4d85828601610eb6565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000610f918383610d88565b905092915050565b6000602082019050919050565b6000610fb182610f59565b610fbb8185610f64565b935083602082028501610fcd85610f75565b8060005b858110156110095784840389528151610fea8582610f85565b9450610ff583610f99565b925060208a01995050600181019050610fd1565b50829750879550505050505092915050565b60006040820190506110306000830185610bfb565b81810360208301526110428184610fa6565b90509392505050565b6000819050919050565b61105e8161104b565b82525050565b60006020820190506110796000830184611055565b92915050565b61108881610d0d565b811461109357600080fd5b50565b6000813590506110a58161107f565b92915050565b6000806000604084860312156110c4576110c3610c25565b5b60006110d286828701611096565b935050602084013567ffffffffffffffff8111156110f3576110f2610c2a565b5b6110ff86828701610eb6565b92509250509250925092565b60006060820190506111206000830186610bfb565b61112d6020830185611055565b818103604083015261113f8184610e1f565b9050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061117482611149565b9050919050565b61118481611169565b811461118f57600080fd5b50565b6000813590506111a18161117b565b92915050565b6000602082840312156111bd576111bc610c25565b5b60006111cb84828501611192565b91505092915050565b60008083601f8401126111ea576111e9610c2f565b5b8235905067ffffffffffffffff81111561120757611206610c34565b5b60208301915083602082028301111561122357611222610c39565b5b9250929050565b6000806020838503121561124157611240610c25565b5b600083013567ffffffffffffffff81111561125f5761125e610c2a565b5b61126b858286016111d4565b92509250509250929050565b61128081611169565b82525050565b600060208201905061129b6000830184611277565b92915050565b6112aa81610bf1565b81146112b557600080fd5b50565b6000813590506112c7816112a1565b92915050565b6000602082840312156112e3576112e2610c25565b5b60006112f1848285016112b8565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b60008235600160800383360303811261138357611382611358565b5b80830191505092915050565b600080833560016020038436030381126113ac576113ab611358565b5b80840192508235915067ffffffffffffffff8211156113ce576113cd61135d565b5b6020830192506001820236038313156113ea576113e9611362565b5b509250929050565b600081905092915050565b82818337600083830152505050565b600061141883856113f2565b93506114258385846113fd565b82840190509392505050565b600061143e82848661140c565b91508190509392505050565b600082825260208201905092915050565b7f4d756c746963616c6c333a2076616c7565206d69736d61746368000000000000600082015250565b6000611491601a8361144a565b915061149c8261145b565b602082019050919050565b600060208201905081810360008301526114c081611484565b9050919050565b6000823560016040038336030381126114e3576114e2611358565b5b80830191505092915050565b7f4d756c746963616c6c333a2063616c6c206661696c6564000000000000000000600082015250565b600061152560178361144a565b9150611530826114ef565b602082019050919050565b6000602082019050818103600083015261155481611518565b9050919050565b60008235600160600383360303811261157757611576611358565b5b8083019150509291505056fea264697066735822122020c1bc9aacf8e4a6507193432a895a8e77094f45a1395583f07b24e860ef06cd64736f6c634300080c0033'; //# sourceMappingURL=contracts.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/chain.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidChainIdError = exports.ClientChainNotConfiguredError = exports.ChainNotFoundError = exports.ChainMismatchError = exports.ChainDoesNotSupportContract = void 0;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class ChainDoesNotSupportContract extends base_js_1.BaseError {
    constructor({ blockNumber, chain, contract }){
        super(`Chain "${chain.name}" does not support contract "${contract.name}".`, {
            metaMessages: [
                'This could be due to any of the following:',
                ...blockNumber && contract.blockCreated && contract.blockCreated > blockNumber ? [
                    `- The contract "${contract.name}" was not deployed until block ${contract.blockCreated} (current block ${blockNumber}).`
                ] : [
                    `- The chain does not have the contract "${contract.name}" configured.`
                ]
            ],
            name: 'ChainDoesNotSupportContract'
        });
    }
}
exports.ChainDoesNotSupportContract = ChainDoesNotSupportContract;
class ChainMismatchError extends base_js_1.BaseError {
    constructor({ chain, currentChainId }){
        super(`The current chain of the wallet (id: ${currentChainId}) does not match the target chain for the transaction (id: ${chain.id} – ${chain.name}).`, {
            metaMessages: [
                `Current Chain ID:  ${currentChainId}`,
                `Expected Chain ID: ${chain.id} – ${chain.name}`
            ],
            name: 'ChainMismatchError'
        });
    }
}
exports.ChainMismatchError = ChainMismatchError;
class ChainNotFoundError extends base_js_1.BaseError {
    constructor(){
        super([
            'No chain was provided to the request.',
            'Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.'
        ].join('\n'), {
            name: 'ChainNotFoundError'
        });
    }
}
exports.ChainNotFoundError = ChainNotFoundError;
class ClientChainNotConfiguredError extends base_js_1.BaseError {
    constructor(){
        super('No chain was provided to the Client.', {
            name: 'ClientChainNotConfiguredError'
        });
    }
}
exports.ClientChainNotConfiguredError = ClientChainNotConfiguredError;
class InvalidChainIdError extends base_js_1.BaseError {
    constructor({ chainId }){
        super(typeof chainId === 'number' ? `Chain ID "${chainId}" is invalid.` : 'Chain ID is invalid.', {
            name: 'InvalidChainIdError'
        });
    }
}
exports.InvalidChainIdError = InvalidChainIdError; //# sourceMappingURL=chain.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeDeployData.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeDeployData = encodeDeployData;
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
const docsPath = '/docs/contract/encodeDeployData';
function encodeDeployData(parameters) {
    const { abi, args, bytecode } = parameters;
    if (!args || args.length === 0) return bytecode;
    const description = abi.find((x)=>'type' in x && x.type === 'constructor');
    if (!description) throw new abi_js_1.AbiConstructorNotFoundError({
        docsPath
    });
    if (!('inputs' in description)) throw new abi_js_1.AbiConstructorParamsNotFoundError({
        docsPath
    });
    if (!description.inputs || description.inputs.length === 0) throw new abi_js_1.AbiConstructorParamsNotFoundError({
        docsPath
    });
    const data = (0, encodeAbiParameters_js_1.encodeAbiParameters)(description.inputs, args);
    return (0, concat_js_1.concatHex)([
        bytecode,
        data
    ]);
} //# sourceMappingURL=encodeDeployData.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getChainContractAddress = getChainContractAddress;
const chain_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/chain.js [app-client] (ecmascript)");
function getChainContractAddress({ blockNumber, chain, contract: name }) {
    const contract = chain?.contracts?.[name];
    if (!contract) throw new chain_js_1.ChainDoesNotSupportContract({
        chain,
        contract: {
            name
        }
    });
    if (blockNumber && contract.blockCreated && contract.blockCreated > blockNumber) throw new chain_js_1.ChainDoesNotSupportContract({
        blockNumber,
        chain,
        contract: {
            name,
            blockCreated: contract.blockCreated
        }
    });
    return contract.address;
} //# sourceMappingURL=getChainContractAddress.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getCallError.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCallError = getCallError;
const contract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/contract.js [app-client] (ecmascript)");
const node_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/node.js [app-client] (ecmascript)");
const getNodeError_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getNodeError.js [app-client] (ecmascript)");
function getCallError(err, { docsPath, ...args }) {
    const cause = (()=>{
        const cause = (0, getNodeError_js_1.getNodeError)(err, args);
        if (cause instanceof node_js_1.UnknownNodeError) return err;
        return cause;
    })();
    return new contract_js_1.CallExecutionError(cause, {
        docsPath,
        ...args
    });
} //# sourceMappingURL=getCallError.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/promise/withResolvers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.withResolvers = withResolvers;
function withResolvers() {
    let resolve = ()=>undefined;
    let reject = ()=>undefined;
    const promise = new Promise((resolve_, reject_)=>{
        resolve = resolve_;
        reject = reject_;
    });
    return {
        promise,
        resolve,
        reject
    };
} //# sourceMappingURL=withResolvers.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/promise/createBatchScheduler.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createBatchScheduler = createBatchScheduler;
const withResolvers_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/promise/withResolvers.js [app-client] (ecmascript)");
const schedulerCache = new Map();
function createBatchScheduler({ fn, id, shouldSplitBatch, wait = 0, sort }) {
    const exec = async ()=>{
        const scheduler = getScheduler();
        flush();
        const args = scheduler.map(({ args })=>args);
        if (args.length === 0) return;
        fn(args).then((data)=>{
            if (sort && Array.isArray(data)) data.sort(sort);
            for(let i = 0; i < scheduler.length; i++){
                const { resolve } = scheduler[i];
                resolve?.([
                    data[i],
                    data
                ]);
            }
        }).catch((err)=>{
            for(let i = 0; i < scheduler.length; i++){
                const { reject } = scheduler[i];
                reject?.(err);
            }
        });
    };
    const flush = ()=>schedulerCache.delete(id);
    const getBatchedArgs = ()=>getScheduler().map(({ args })=>args);
    const getScheduler = ()=>schedulerCache.get(id) || [];
    const setScheduler = (item)=>schedulerCache.set(id, [
            ...getScheduler(),
            item
        ]);
    return {
        flush,
        async schedule (args) {
            const { promise, resolve, reject } = (0, withResolvers_js_1.withResolvers)();
            const split = shouldSplitBatch?.([
                ...getBatchedArgs(),
                args
            ]);
            if (split) exec();
            const hasActiveScheduler = getScheduler().length > 0;
            if (hasActiveScheduler) {
                setScheduler({
                    args,
                    resolve,
                    reject
                });
                return promise;
            }
            setScheduler({
                args,
                resolve,
                reject
            });
            setTimeout(exec, wait);
            return promise;
        }
    };
} //# sourceMappingURL=createBatchScheduler.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/ccip.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OffchainLookupSenderMismatchError = exports.OffchainLookupResponseMalformedError = exports.OffchainLookupError = void 0;
const stringify_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/utils.js [app-client] (ecmascript)");
class OffchainLookupError extends base_js_1.BaseError {
    constructor({ callbackSelector, cause, data, extraData, sender, urls }){
        super(cause.shortMessage || 'An error occurred while fetching for an offchain result.', {
            cause,
            metaMessages: [
                ...cause.metaMessages || [],
                cause.metaMessages?.length ? '' : [],
                'Offchain Gateway Call:',
                urls && [
                    '  Gateway URL(s):',
                    ...urls.map((url)=>`    ${(0, utils_js_1.getUrl)(url)}`)
                ],
                `  Sender: ${sender}`,
                `  Data: ${data}`,
                `  Callback selector: ${callbackSelector}`,
                `  Extra data: ${extraData}`
            ].flat(),
            name: 'OffchainLookupError'
        });
    }
}
exports.OffchainLookupError = OffchainLookupError;
class OffchainLookupResponseMalformedError extends base_js_1.BaseError {
    constructor({ result, url }){
        super('Offchain gateway response is malformed. Response data must be a hex value.', {
            metaMessages: [
                `Gateway URL: ${(0, utils_js_1.getUrl)(url)}`,
                `Response: ${(0, stringify_js_1.stringify)(result)}`
            ],
            name: 'OffchainLookupResponseMalformedError'
        });
    }
}
exports.OffchainLookupResponseMalformedError = OffchainLookupResponseMalformedError;
class OffchainLookupSenderMismatchError extends base_js_1.BaseError {
    constructor({ sender, to }){
        super('Reverted sender address does not match target contract address (`to`).', {
            metaMessages: [
                `Contract address: ${to}`,
                `OffchainLookup sender address: ${sender}`
            ],
            name: 'OffchainLookupSenderMismatchError'
        });
    }
}
exports.OffchainLookupSenderMismatchError = OffchainLookupSenderMismatchError; //# sourceMappingURL=ccip.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeFunctionData.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeFunctionData = decodeFunctionData;
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const slice_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)");
const toFunctionSelector_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toFunctionSelector.js [app-client] (ecmascript)");
const decodeAbiParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-client] (ecmascript)");
const formatAbiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-client] (ecmascript)");
function decodeFunctionData(parameters) {
    const { abi, data } = parameters;
    const signature = (0, slice_js_1.slice)(data, 0, 4);
    const description = abi.find((x)=>x.type === 'function' && signature === (0, toFunctionSelector_js_1.toFunctionSelector)((0, formatAbiItem_js_1.formatAbiItem)(x)));
    if (!description) throw new abi_js_1.AbiFunctionSignatureNotFoundError(signature, {
        docsPath: '/docs/contract/decodeFunctionData'
    });
    return {
        functionName: description.name,
        args: 'inputs' in description && description.inputs && description.inputs.length > 0 ? (0, decodeAbiParameters_js_1.decodeAbiParameters)(description.inputs, (0, slice_js_1.slice)(data, 4)) : undefined
    };
} //# sourceMappingURL=decodeFunctionData.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeErrorResult.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeErrorResult = encodeErrorResult;
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const toFunctionSelector_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toFunctionSelector.js [app-client] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
const formatAbiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-client] (ecmascript)");
const getAbiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-client] (ecmascript)");
const docsPath = '/docs/contract/encodeErrorResult';
function encodeErrorResult(parameters) {
    const { abi, errorName, args } = parameters;
    let abiItem = abi[0];
    if (errorName) {
        const item = (0, getAbiItem_js_1.getAbiItem)({
            abi,
            args,
            name: errorName
        });
        if (!item) throw new abi_js_1.AbiErrorNotFoundError(errorName, {
            docsPath
        });
        abiItem = item;
    }
    if (abiItem.type !== 'error') throw new abi_js_1.AbiErrorNotFoundError(undefined, {
        docsPath
    });
    const definition = (0, formatAbiItem_js_1.formatAbiItem)(abiItem);
    const signature = (0, toFunctionSelector_js_1.toFunctionSelector)(definition);
    let data = '0x';
    if (args && args.length > 0) {
        if (!abiItem.inputs) throw new abi_js_1.AbiErrorInputsNotFoundError(abiItem.name, {
            docsPath
        });
        data = (0, encodeAbiParameters_js_1.encodeAbiParameters)(abiItem.inputs, args);
    }
    return (0, concat_js_1.concatHex)([
        signature,
        data
    ]);
} //# sourceMappingURL=encodeErrorResult.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeFunctionResult.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeFunctionResult = encodeFunctionResult;
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
const getAbiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-client] (ecmascript)");
const docsPath = '/docs/contract/encodeFunctionResult';
function encodeFunctionResult(parameters) {
    const { abi, functionName, result } = parameters;
    let abiItem = abi[0];
    if (functionName) {
        const item = (0, getAbiItem_js_1.getAbiItem)({
            abi,
            name: functionName
        });
        if (!item) throw new abi_js_1.AbiFunctionNotFoundError(functionName, {
            docsPath
        });
        abiItem = item;
    }
    if (abiItem.type !== 'function') throw new abi_js_1.AbiFunctionNotFoundError(undefined, {
        docsPath
    });
    if (!abiItem.outputs) throw new abi_js_1.AbiFunctionOutputsNotFoundError(abiItem.name, {
        docsPath
    });
    const values = (()=>{
        if (abiItem.outputs.length === 0) return [];
        if (abiItem.outputs.length === 1) return [
            result
        ];
        if (Array.isArray(result)) return result;
        throw new abi_js_1.InvalidArrayError(result);
    })();
    return (0, encodeAbiParameters_js_1.encodeAbiParameters)(abiItem.outputs, values);
} //# sourceMappingURL=encodeFunctionResult.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/localBatchGatewayRequest.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.localBatchGatewayUrl = void 0;
exports.localBatchGatewayRequest = localBatchGatewayRequest;
const abis_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/abis.js [app-client] (ecmascript)");
const solidity_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/solidity.js [app-client] (ecmascript)");
const decodeFunctionData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeFunctionData.js [app-client] (ecmascript)");
const encodeErrorResult_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeErrorResult.js [app-client] (ecmascript)");
const encodeFunctionResult_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeFunctionResult.js [app-client] (ecmascript)");
exports.localBatchGatewayUrl = 'x-batch-gateway:true';
async function localBatchGatewayRequest(parameters) {
    const { data, ccipRequest } = parameters;
    const { args: [queries] } = (0, decodeFunctionData_js_1.decodeFunctionData)({
        abi: abis_js_1.batchGatewayAbi,
        data
    });
    const failures = [];
    const responses = [];
    await Promise.all(queries.map(async (query, i)=>{
        try {
            responses[i] = query.urls.includes(exports.localBatchGatewayUrl) ? await localBatchGatewayRequest({
                data: query.data,
                ccipRequest
            }) : await ccipRequest(query);
            failures[i] = false;
        } catch (err) {
            failures[i] = true;
            responses[i] = encodeError(err);
        }
    }));
    return (0, encodeFunctionResult_js_1.encodeFunctionResult)({
        abi: abis_js_1.batchGatewayAbi,
        functionName: 'query',
        result: [
            failures,
            responses
        ]
    });
}
function encodeError(error) {
    if (error.name === 'HttpRequestError' && error.status) return (0, encodeErrorResult_js_1.encodeErrorResult)({
        abi: abis_js_1.batchGatewayAbi,
        errorName: 'HttpError',
        args: [
            error.status,
            error.shortMessage
        ]
    });
    return (0, encodeErrorResult_js_1.encodeErrorResult)({
        abi: [
            solidity_js_1.solidityError
        ],
        errorName: 'Error',
        args: [
            'shortMessage' in error ? error.shortMessage : error.message
        ]
    });
} //# sourceMappingURL=localBatchGatewayRequest.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ccip.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.offchainLookupAbiItem = exports.offchainLookupSignature = void 0;
exports.offchainLookup = offchainLookup;
exports.ccipRequest = ccipRequest;
const call_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/call.js [app-client] (ecmascript)");
const ccip_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/ccip.js [app-client] (ecmascript)");
const request_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)");
const decodeErrorResult_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeErrorResult.js [app-client] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
const isAddressEqual_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const isHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
const localBatchGatewayRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/localBatchGatewayRequest.js [app-client] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
exports.offchainLookupSignature = '0x556f1830';
exports.offchainLookupAbiItem = {
    name: 'OffchainLookup',
    type: 'error',
    inputs: [
        {
            name: 'sender',
            type: 'address'
        },
        {
            name: 'urls',
            type: 'string[]'
        },
        {
            name: 'callData',
            type: 'bytes'
        },
        {
            name: 'callbackFunction',
            type: 'bytes4'
        },
        {
            name: 'extraData',
            type: 'bytes'
        }
    ]
};
async function offchainLookup(client, { blockNumber, blockTag, data, to }) {
    const { args } = (0, decodeErrorResult_js_1.decodeErrorResult)({
        data,
        abi: [
            exports.offchainLookupAbiItem
        ]
    });
    const [sender, urls, callData, callbackSelector, extraData] = args;
    const { ccipRead } = client;
    const ccipRequest_ = ccipRead && typeof ccipRead?.request === 'function' ? ccipRead.request : ccipRequest;
    try {
        if (!(0, isAddressEqual_js_1.isAddressEqual)(to, sender)) throw new ccip_js_1.OffchainLookupSenderMismatchError({
            sender,
            to
        });
        const result = urls.includes(localBatchGatewayRequest_js_1.localBatchGatewayUrl) ? await (0, localBatchGatewayRequest_js_1.localBatchGatewayRequest)({
            data: callData,
            ccipRequest: ccipRequest_
        }) : await ccipRequest_({
            data: callData,
            sender,
            urls
        });
        const { data: data_ } = await (0, call_js_1.call)(client, {
            blockNumber,
            blockTag,
            data: (0, concat_js_1.concat)([
                callbackSelector,
                (0, encodeAbiParameters_js_1.encodeAbiParameters)([
                    {
                        type: 'bytes'
                    },
                    {
                        type: 'bytes'
                    }
                ], [
                    result,
                    extraData
                ])
            ]),
            to
        });
        return data_;
    } catch (err) {
        throw new ccip_js_1.OffchainLookupError({
            callbackSelector,
            cause: err,
            data,
            extraData,
            sender,
            urls
        });
    }
}
async function ccipRequest({ data, sender, urls }) {
    let error = new Error('An unknown error occurred.');
    for(let i = 0; i < urls.length; i++){
        const url = urls[i];
        const method = url.includes('{data}') ? 'GET' : 'POST';
        const body = method === 'POST' ? {
            data,
            sender
        } : undefined;
        const headers = method === 'POST' ? {
            'Content-Type': 'application/json'
        } : {};
        try {
            const response = await fetch(url.replace('{sender}', sender.toLowerCase()).replace('{data}', data), {
                body: JSON.stringify(body),
                headers,
                method
            });
            let result;
            if (response.headers.get('Content-Type')?.startsWith('application/json')) {
                result = (await response.json()).data;
            } else {
                result = await response.text();
            }
            if (!response.ok) {
                error = new request_js_1.HttpRequestError({
                    body,
                    details: result?.error ? (0, stringify_js_1.stringify)(result.error) : response.statusText,
                    headers: response.headers,
                    status: response.status,
                    url
                });
                continue;
            }
            if (!(0, isHex_js_1.isHex)(result)) {
                error = new ccip_js_1.OffchainLookupResponseMalformedError({
                    result,
                    url
                });
                continue;
            }
            return result;
        } catch (err) {
            error = new request_js_1.HttpRequestError({
                body,
                details: err.message,
                url
            });
        }
    }
    throw error;
} //# sourceMappingURL=ccip.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/call.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.call = call;
exports.getRevertErrorData = getRevertErrorData;
const abitype_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/exports/index.js [app-client] (ecmascript)");
const BlockOverrides = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/ox/_cjs/core/BlockOverrides.js [app-client] (ecmascript)");
const parseAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const abis_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/abis.js [app-client] (ecmascript)");
const contract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/contract.js [app-client] (ecmascript)");
const contracts_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/contracts.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const chain_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/chain.js [app-client] (ecmascript)");
const contract_js_2 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/contract.js [app-client] (ecmascript)");
const decodeFunctionResult_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
const encodeDeployData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeDeployData.js [app-client] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
const getChainContractAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const getCallError_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getCallError.js [app-client] (ecmascript)");
const extract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/extract.js [app-client] (ecmascript)");
const transactionRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
const createBatchScheduler_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/promise/createBatchScheduler.js [app-client] (ecmascript)");
const stateOverride_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/stateOverride.js [app-client] (ecmascript)");
const assertRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-client] (ecmascript)");
async function call(client, args) {
    const { account: account_ = client.account, authorizationList, batch = Boolean(client.batch?.multicall), blockNumber, blockTag = client.experimental_blockTag ?? 'latest', accessList, blobs, blockOverrides, code, data: data_, factory, factoryData, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, stateOverride, ...rest } = args;
    const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : undefined;
    if (code && (factory || factoryData)) throw new base_js_1.BaseError('Cannot provide both `code` & `factory`/`factoryData` as parameters.');
    if (code && to) throw new base_js_1.BaseError('Cannot provide both `code` & `to` as parameters.');
    const deploylessCallViaBytecode = code && data_;
    const deploylessCallViaFactory = factory && factoryData && to && data_;
    const deploylessCall = deploylessCallViaBytecode || deploylessCallViaFactory;
    const data = (()=>{
        if (deploylessCallViaBytecode) return toDeploylessCallViaBytecodeData({
            code,
            data: data_
        });
        if (deploylessCallViaFactory) return toDeploylessCallViaFactoryData({
            data: data_,
            factory,
            factoryData,
            to
        });
        return data_;
    })();
    try {
        (0, assertRequest_js_1.assertRequest)(args);
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const rpcBlockOverrides = blockOverrides ? BlockOverrides.toRpc(blockOverrides) : undefined;
        const rpcStateOverride = (0, stateOverride_js_1.serializeStateOverride)(stateOverride);
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || transactionRequest_js_1.formatTransactionRequest;
        const request = format({
            ...(0, extract_js_1.extract)(rest, {
                format: chainFormat
            }),
            accessList,
            account,
            authorizationList,
            blobs,
            data,
            gas,
            gasPrice,
            maxFeePerBlobGas,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to: deploylessCall ? undefined : to,
            value
        }, 'call');
        if (batch && shouldPerformMulticall({
            request
        }) && !rpcStateOverride && !rpcBlockOverrides) {
            try {
                return await scheduleMulticall(client, {
                    ...request,
                    blockNumber,
                    blockTag
                });
            } catch (err) {
                if (!(err instanceof chain_js_1.ClientChainNotConfiguredError) && !(err instanceof chain_js_1.ChainDoesNotSupportContract)) throw err;
            }
        }
        const params = (()=>{
            const base = [
                request,
                block
            ];
            if (rpcStateOverride && rpcBlockOverrides) return [
                ...base,
                rpcStateOverride,
                rpcBlockOverrides
            ];
            if (rpcStateOverride) return [
                ...base,
                rpcStateOverride
            ];
            if (rpcBlockOverrides) return [
                ...base,
                {},
                rpcBlockOverrides
            ];
            return base;
        })();
        const response = await client.request({
            method: 'eth_call',
            params
        });
        if (response === '0x') return {
            data: undefined
        };
        return {
            data: response
        };
    } catch (err) {
        const data = getRevertErrorData(err);
        const { offchainLookup, offchainLookupSignature } = await Promise.resolve().then(()=>__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ccip.js [app-client] (ecmascript)"));
        if (client.ccipRead !== false && data?.slice(0, 10) === offchainLookupSignature && to) return {
            data: await offchainLookup(client, {
                data,
                to
            })
        };
        if (deploylessCall && data?.slice(0, 10) === '0x101bb98d') throw new contract_js_2.CounterfactualDeploymentFailedError({
            factory
        });
        throw (0, getCallError_js_1.getCallError)(err, {
            ...args,
            account,
            chain: client.chain
        });
    }
}
function shouldPerformMulticall({ request }) {
    const { data, to, ...request_ } = request;
    if (!data) return false;
    if (data.startsWith(contract_js_1.aggregate3Signature)) return false;
    if (!to) return false;
    if (Object.values(request_).filter((x)=>typeof x !== 'undefined').length > 0) return false;
    return true;
}
async function scheduleMulticall(client, args) {
    const { batchSize = 1024, deployless = false, wait = 0 } = typeof client.batch?.multicall === 'object' ? client.batch.multicall : {};
    const { blockNumber, blockTag = client.experimental_blockTag ?? 'latest', data, to } = args;
    const multicallAddress = (()=>{
        if (deployless) return null;
        if (args.multicallAddress) return args.multicallAddress;
        if (client.chain) {
            return (0, getChainContractAddress_js_1.getChainContractAddress)({
                blockNumber,
                chain: client.chain,
                contract: 'multicall3'
            });
        }
        throw new chain_js_1.ClientChainNotConfiguredError();
    })();
    const blockNumberHex = typeof blockNumber === 'bigint' ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
    const block = blockNumberHex || blockTag;
    const { schedule } = (0, createBatchScheduler_js_1.createBatchScheduler)({
        id: `${client.uid}.${block}`,
        wait,
        shouldSplitBatch (args) {
            const size = args.reduce((size, { data })=>size + (data.length - 2), 0);
            return size > batchSize * 2;
        },
        fn: async (requests)=>{
            const calls = requests.map((request)=>({
                    allowFailure: true,
                    callData: request.data,
                    target: request.to
                }));
            const calldata = (0, encodeFunctionData_js_1.encodeFunctionData)({
                abi: abis_js_1.multicall3Abi,
                args: [
                    calls
                ],
                functionName: 'aggregate3'
            });
            const data = await client.request({
                method: 'eth_call',
                params: [
                    {
                        ...multicallAddress === null ? {
                            data: toDeploylessCallViaBytecodeData({
                                code: contracts_js_1.multicall3Bytecode,
                                data: calldata
                            })
                        } : {
                            to: multicallAddress,
                            data: calldata
                        }
                    },
                    block
                ]
            });
            return (0, decodeFunctionResult_js_1.decodeFunctionResult)({
                abi: abis_js_1.multicall3Abi,
                args: [
                    calls
                ],
                functionName: 'aggregate3',
                data: data || '0x'
            });
        }
    });
    const [{ returnData, success }] = await schedule({
        data,
        to
    });
    if (!success) throw new contract_js_2.RawContractError({
        data: returnData
    });
    if (returnData === '0x') return {
        data: undefined
    };
    return {
        data: returnData
    };
}
function toDeploylessCallViaBytecodeData(parameters) {
    const { code, data } = parameters;
    return (0, encodeDeployData_js_1.encodeDeployData)({
        abi: (0, abitype_1.parseAbi)([
            'constructor(bytes, bytes)'
        ]),
        bytecode: contracts_js_1.deploylessCallViaBytecodeBytecode,
        args: [
            code,
            data
        ]
    });
}
function toDeploylessCallViaFactoryData(parameters) {
    const { data, factory, factoryData, to } = parameters;
    return (0, encodeDeployData_js_1.encodeDeployData)({
        abi: (0, abitype_1.parseAbi)([
            'constructor(address, bytes, address, bytes)'
        ]),
        bytecode: contracts_js_1.deploylessCallViaFactoryBytecode,
        args: [
            to,
            data,
            factory,
            factoryData
        ]
    });
}
function getRevertErrorData(err) {
    if (!(err instanceof base_js_1.BaseError)) return undefined;
    const error = err.walk();
    return typeof error?.data === 'object' ? error.data?.data : error.data;
} //# sourceMappingURL=call.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/readContract.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.readContract = readContract;
const decodeFunctionResult_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
const getContractError_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getContractError.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const call_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/call.js [app-client] (ecmascript)");
async function readContract(client, parameters) {
    const { abi, address, args, functionName, ...rest } = parameters;
    const calldata = (0, encodeFunctionData_js_1.encodeFunctionData)({
        abi,
        args,
        functionName
    });
    try {
        const { data } = await (0, getAction_js_1.getAction)(client, call_js_1.call, 'call')({
            ...rest,
            data: calldata,
            to: address
        });
        return (0, decodeFunctionResult_js_1.decodeFunctionResult)({
            abi,
            args,
            functionName,
            data: data || '0x'
        });
    } catch (error) {
        throw (0, getContractError_js_1.getContractError)(error, {
            abi,
            address,
            args,
            docsPath: '/docs/contract/readContract',
            functionName
        });
    }
} //# sourceMappingURL=readContract.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/simulateContract.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.simulateContract = simulateContract;
const parseAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const decodeFunctionResult_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
const getContractError_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getContractError.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const call_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/call.js [app-client] (ecmascript)");
async function simulateContract(client, parameters) {
    const { abi, address, args, dataSuffix, functionName, ...callRequest } = parameters;
    const account = callRequest.account ? (0, parseAccount_js_1.parseAccount)(callRequest.account) : client.account;
    const calldata = (0, encodeFunctionData_js_1.encodeFunctionData)({
        abi,
        args,
        functionName
    });
    try {
        const { data } = await (0, getAction_js_1.getAction)(client, call_js_1.call, 'call')({
            batch: false,
            data: `${calldata}${dataSuffix ? dataSuffix.replace('0x', '') : ''}`,
            to: address,
            ...callRequest,
            account
        });
        const result = (0, decodeFunctionResult_js_1.decodeFunctionResult)({
            abi,
            args,
            functionName,
            data: data || '0x'
        });
        const minimizedAbi = abi.filter((abiItem)=>'name' in abiItem && abiItem.name === parameters.functionName);
        return {
            result,
            request: {
                abi: minimizedAbi,
                address,
                args,
                dataSuffix,
                functionName,
                ...callRequest,
                account
            }
        };
    } catch (error) {
        throw (0, getContractError_js_1.getContractError)(error, {
            abi,
            address,
            args,
            docsPath: '/docs/contract/simulateContract',
            functionName,
            sender: account?.address
        });
    }
} //# sourceMappingURL=simulateContract.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/observe.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cleanupCache = exports.listenersCache = void 0;
exports.observe = observe;
exports.listenersCache = new Map();
exports.cleanupCache = new Map();
let callbackCount = 0;
function observe(observerId, callbacks, fn) {
    const callbackId = ++callbackCount;
    const getListeners = ()=>exports.listenersCache.get(observerId) || [];
    const unsubscribe = ()=>{
        const listeners = getListeners();
        exports.listenersCache.set(observerId, listeners.filter((cb)=>cb.id !== callbackId));
    };
    const unwatch = ()=>{
        const listeners = getListeners();
        if (!listeners.some((cb)=>cb.id === callbackId)) return;
        const cleanup = exports.cleanupCache.get(observerId);
        if (listeners.length === 1 && cleanup) {
            const p = cleanup();
            if (p instanceof Promise) p.catch(()=>{});
        }
        unsubscribe();
    };
    const listeners = getListeners();
    exports.listenersCache.set(observerId, [
        ...listeners,
        {
            id: callbackId,
            fns: callbacks
        }
    ]);
    if (listeners && listeners.length > 0) return unwatch;
    const emit = {};
    for(const key in callbacks){
        emit[key] = (...args)=>{
            const listeners = getListeners();
            if (listeners.length === 0) return;
            for (const listener of listeners)listener.fns[key]?.(...args);
        };
    }
    const cleanup = fn(emit);
    if (typeof cleanup === 'function') exports.cleanupCache.set(observerId, cleanup);
    return unwatch;
} //# sourceMappingURL=observe.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/wait.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wait = wait;
async function wait(time) {
    return new Promise((res)=>setTimeout(res, time));
} //# sourceMappingURL=wait.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/poll.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.poll = poll;
const wait_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/wait.js [app-client] (ecmascript)");
function poll(fn, { emitOnBegin, initialWaitTime, interval }) {
    let active = true;
    const unwatch = ()=>active = false;
    const watch = async ()=>{
        let data;
        if (emitOnBegin) data = await fn({
            unpoll: unwatch
        });
        const initialWait = await initialWaitTime?.(data) ?? interval;
        await (0, wait_js_1.wait)(initialWait);
        const poll = async ()=>{
            if (!active) return;
            await fn({
                unpoll: unwatch
            });
            await (0, wait_js_1.wait)(interval);
            poll();
        };
        poll();
    };
    watch();
    return unwatch;
} //# sourceMappingURL=poll.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/promise/withCache.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.responseCache = exports.promiseCache = void 0;
exports.getCache = getCache;
exports.withCache = withCache;
exports.promiseCache = new Map();
exports.responseCache = new Map();
function getCache(cacheKey) {
    const buildCache = (cacheKey, cache)=>({
            clear: ()=>cache.delete(cacheKey),
            get: ()=>cache.get(cacheKey),
            set: (data)=>cache.set(cacheKey, data)
        });
    const promise = buildCache(cacheKey, exports.promiseCache);
    const response = buildCache(cacheKey, exports.responseCache);
    return {
        clear: ()=>{
            promise.clear();
            response.clear();
        },
        promise,
        response
    };
}
async function withCache(fn, { cacheKey, cacheTime = Number.POSITIVE_INFINITY }) {
    const cache = getCache(cacheKey);
    const response = cache.response.get();
    if (response && cacheTime > 0) {
        const age = Date.now() - response.created.getTime();
        if (age < cacheTime) return response.data;
    }
    let promise = cache.promise.get();
    if (!promise) {
        promise = fn();
        cache.promise.set(promise);
    }
    try {
        const data = await promise;
        cache.response.set({
            created: new Date(),
            data
        });
        return data;
    } finally{
        cache.promise.clear();
    }
} //# sourceMappingURL=withCache.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getBlockNumber.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBlockNumberCache = getBlockNumberCache;
exports.getBlockNumber = getBlockNumber;
const withCache_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/promise/withCache.js [app-client] (ecmascript)");
const cacheKey = (id)=>`blockNumber.${id}`;
function getBlockNumberCache(id) {
    return (0, withCache_js_1.getCache)(cacheKey(id));
}
async function getBlockNumber(client, { cacheTime = client.cacheTime } = {}) {
    const blockNumberHex = await (0, withCache_js_1.withCache)(()=>client.request({
            method: 'eth_blockNumber'
        }), {
        cacheKey: cacheKey(client.uid),
        cacheTime
    });
    return BigInt(blockNumberHex);
} //# sourceMappingURL=getBlockNumber.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getFilterChanges.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFilterChanges = getFilterChanges;
const parseEventLogs_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/parseEventLogs.js [app-client] (ecmascript)");
const log_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/log.js [app-client] (ecmascript)");
async function getFilterChanges(_client, { filter }) {
    const strict = 'strict' in filter && filter.strict;
    const logs = await filter.request({
        method: 'eth_getFilterChanges',
        params: [
            filter.id
        ]
    });
    if (typeof logs[0] === 'string') return logs;
    const formattedLogs = logs.map((log)=>(0, log_js_1.formatLog)(log));
    if (!('abi' in filter) || !filter.abi) return formattedLogs;
    return (0, parseEventLogs_js_1.parseEventLogs)({
        abi: filter.abi,
        logs: formattedLogs,
        strict
    });
} //# sourceMappingURL=getFilterChanges.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/uninstallFilter.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uninstallFilter = uninstallFilter;
async function uninstallFilter(_client, { filter }) {
    return filter.request({
        method: 'eth_uninstallFilter',
        params: [
            filter.id
        ]
    });
} //# sourceMappingURL=uninstallFilter.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/watchContractEvent.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.watchContractEvent = watchContractEvent;
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const rpc_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/rpc.js [app-client] (ecmascript)");
const decodeEventLog_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeEventLog.js [app-client] (ecmascript)");
const encodeEventTopics_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeEventTopics.js [app-client] (ecmascript)");
const log_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/log.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const observe_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/observe.js [app-client] (ecmascript)");
const poll_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/poll.js [app-client] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
const createContractEventFilter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/createContractEventFilter.js [app-client] (ecmascript)");
const getBlockNumber_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getBlockNumber.js [app-client] (ecmascript)");
const getContractEvents_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getContractEvents.js [app-client] (ecmascript)");
const getFilterChanges_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getFilterChanges.js [app-client] (ecmascript)");
const uninstallFilter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/uninstallFilter.js [app-client] (ecmascript)");
function watchContractEvent(client, parameters) {
    const { abi, address, args, batch = true, eventName, fromBlock, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ } = parameters;
    const enablePolling = (()=>{
        if (typeof poll_ !== 'undefined') return poll_;
        if (typeof fromBlock === 'bigint') return true;
        if (client.transport.type === 'webSocket' || client.transport.type === 'ipc') return false;
        if (client.transport.type === 'fallback' && (client.transport.transports[0].config.type === 'webSocket' || client.transport.transports[0].config.type === 'ipc')) return false;
        return true;
    })();
    const pollContractEvent = ()=>{
        const strict = strict_ ?? false;
        const observerId = (0, stringify_js_1.stringify)([
            'watchContractEvent',
            address,
            args,
            batch,
            client.uid,
            eventName,
            pollingInterval,
            strict,
            fromBlock
        ]);
        return (0, observe_js_1.observe)(observerId, {
            onLogs,
            onError
        }, (emit)=>{
            let previousBlockNumber;
            if (fromBlock !== undefined) previousBlockNumber = fromBlock - 1n;
            let filter;
            let initialized = false;
            const unwatch = (0, poll_js_1.poll)(async ()=>{
                if (!initialized) {
                    try {
                        filter = await (0, getAction_js_1.getAction)(client, createContractEventFilter_js_1.createContractEventFilter, 'createContractEventFilter')({
                            abi,
                            address,
                            args: args,
                            eventName: eventName,
                            strict: strict,
                            fromBlock
                        });
                    } catch  {}
                    initialized = true;
                    return;
                }
                try {
                    let logs;
                    if (filter) {
                        logs = await (0, getAction_js_1.getAction)(client, getFilterChanges_js_1.getFilterChanges, 'getFilterChanges')({
                            filter
                        });
                    } else {
                        const blockNumber = await (0, getAction_js_1.getAction)(client, getBlockNumber_js_1.getBlockNumber, 'getBlockNumber')({});
                        if (previousBlockNumber && previousBlockNumber < blockNumber) {
                            logs = await (0, getAction_js_1.getAction)(client, getContractEvents_js_1.getContractEvents, 'getContractEvents')({
                                abi,
                                address,
                                args,
                                eventName,
                                fromBlock: previousBlockNumber + 1n,
                                toBlock: blockNumber,
                                strict
                            });
                        } else {
                            logs = [];
                        }
                        previousBlockNumber = blockNumber;
                    }
                    if (logs.length === 0) return;
                    if (batch) emit.onLogs(logs);
                    else for (const log of logs)emit.onLogs([
                        log
                    ]);
                } catch (err) {
                    if (filter && err instanceof rpc_js_1.InvalidInputRpcError) initialized = false;
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval
            });
            return async ()=>{
                if (filter) await (0, getAction_js_1.getAction)(client, uninstallFilter_js_1.uninstallFilter, 'uninstallFilter')({
                    filter
                });
                unwatch();
            };
        });
    };
    const subscribeContractEvent = ()=>{
        const strict = strict_ ?? false;
        const observerId = (0, stringify_js_1.stringify)([
            'watchContractEvent',
            address,
            args,
            batch,
            client.uid,
            eventName,
            pollingInterval,
            strict
        ]);
        let active = true;
        let unsubscribe = ()=>active = false;
        return (0, observe_js_1.observe)(observerId, {
            onLogs,
            onError
        }, (emit)=>{
            ;
            (async ()=>{
                try {
                    const transport = (()=>{
                        if (client.transport.type === 'fallback') {
                            const transport = client.transport.transports.find((transport)=>transport.config.type === 'webSocket' || transport.config.type === 'ipc');
                            if (!transport) return client.transport;
                            return transport.value;
                        }
                        return client.transport;
                    })();
                    const topics = eventName ? (0, encodeEventTopics_js_1.encodeEventTopics)({
                        abi: abi,
                        eventName: eventName,
                        args
                    }) : [];
                    const { unsubscribe: unsubscribe_ } = await transport.subscribe({
                        params: [
                            'logs',
                            {
                                address,
                                topics
                            }
                        ],
                        onData (data) {
                            if (!active) return;
                            const log = data.result;
                            try {
                                const { eventName, args } = (0, decodeEventLog_js_1.decodeEventLog)({
                                    abi: abi,
                                    data: log.data,
                                    topics: log.topics,
                                    strict: strict_
                                });
                                const formatted = (0, log_js_1.formatLog)(log, {
                                    args,
                                    eventName: eventName
                                });
                                emit.onLogs([
                                    formatted
                                ]);
                            } catch (err) {
                                let eventName;
                                let isUnnamed;
                                if (err instanceof abi_js_1.DecodeLogDataMismatch || err instanceof abi_js_1.DecodeLogTopicsMismatch) {
                                    if (strict_) return;
                                    eventName = err.abiItem.name;
                                    isUnnamed = err.abiItem.inputs?.some((x)=>!('name' in x && x.name));
                                }
                                const formatted = (0, log_js_1.formatLog)(log, {
                                    args: isUnnamed ? [] : {},
                                    eventName
                                });
                                emit.onLogs([
                                    formatted
                                ]);
                            }
                        },
                        onError (error) {
                            emit.onError?.(error);
                        }
                    });
                    unsubscribe = unsubscribe_;
                    if (!active) unsubscribe();
                } catch (err) {
                    onError?.(err);
                }
            })();
            return ()=>unsubscribe();
        });
    };
    return enablePolling ? pollContractEvent() : subscribeContractEvent();
} //# sourceMappingURL=watchContractEvent.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/account.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AccountTypeNotSupportedError = exports.AccountNotFoundError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class AccountNotFoundError extends base_js_1.BaseError {
    constructor({ docsPath } = {}){
        super([
            'Could not find an Account to execute with this Action.',
            'Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.'
        ].join('\n'), {
            docsPath,
            docsSlug: 'account',
            name: 'AccountNotFoundError'
        });
    }
}
exports.AccountNotFoundError = AccountNotFoundError;
class AccountTypeNotSupportedError extends base_js_1.BaseError {
    constructor({ docsPath, metaMessages, type }){
        super(`Account type "${type}" is not supported.`, {
            docsPath,
            metaMessages,
            name: 'AccountTypeNotSupportedError'
        });
    }
}
exports.AccountTypeNotSupportedError = AccountTypeNotSupportedError; //# sourceMappingURL=account.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/chain/assertCurrentChain.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.assertCurrentChain = assertCurrentChain;
const chain_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/chain.js [app-client] (ecmascript)");
function assertCurrentChain({ chain, currentChainId }) {
    if (!chain) throw new chain_js_1.ChainNotFoundError();
    if (currentChainId !== chain.id) throw new chain_js_1.ChainMismatchError({
        chain,
        currentChainId
    });
} //# sourceMappingURL=assertCurrentChain.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getTransactionError.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransactionError = getTransactionError;
const node_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/node.js [app-client] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
const getNodeError_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getNodeError.js [app-client] (ecmascript)");
function getTransactionError(err, { docsPath, ...args }) {
    const cause = (()=>{
        const cause = (0, getNodeError_js_1.getNodeError)(err, args);
        if (cause instanceof node_js_1.UnknownNodeError) return err;
        return cause;
    })();
    return new transaction_js_1.TransactionExecutionError(cause, {
        docsPath,
        ...args
    });
} //# sourceMappingURL=getTransactionError.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/sendRawTransaction.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendRawTransaction = sendRawTransaction;
async function sendRawTransaction(client, { serializedTransaction }) {
    return client.request({
        method: 'eth_sendRawTransaction',
        params: [
            serializedTransaction
        ]
    }, {
        retryCount: 0
    });
} //# sourceMappingURL=sendRawTransaction.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/sendTransaction.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendTransaction = sendTransaction;
const parseAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const account_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/account.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const recoverAuthorizationAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/authorization/recoverAuthorizationAddress.js [app-client] (ecmascript)");
const assertCurrentChain_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/chain/assertCurrentChain.js [app-client] (ecmascript)");
const getTransactionError_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getTransactionError.js [app-client] (ecmascript)");
const extract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/extract.js [app-client] (ecmascript)");
const transactionRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const lru_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/lru.js [app-client] (ecmascript)");
const assertRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-client] (ecmascript)");
const getChainId_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getChainId.js [app-client] (ecmascript)");
const prepareTransactionRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/prepareTransactionRequest.js [app-client] (ecmascript)");
const sendRawTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/sendRawTransaction.js [app-client] (ecmascript)");
const supportsWalletNamespace = new lru_js_1.LruMap(128);
async function sendTransaction(client, parameters) {
    const { account: account_ = client.account, chain = client.chain, accessList, authorizationList, blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, type, value, ...rest } = parameters;
    if (typeof account_ === 'undefined') throw new account_js_1.AccountNotFoundError({
        docsPath: '/docs/actions/wallet/sendTransaction'
    });
    const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : null;
    try {
        (0, assertRequest_js_1.assertRequest)(parameters);
        const to = await (async ()=>{
            if (parameters.to) return parameters.to;
            if (parameters.to === null) return undefined;
            if (authorizationList && authorizationList.length > 0) return await (0, recoverAuthorizationAddress_js_1.recoverAuthorizationAddress)({
                authorization: authorizationList[0]
            }).catch(()=>{
                throw new base_js_1.BaseError('`to` is required. Could not infer from `authorizationList`.');
            });
            return undefined;
        })();
        if (account?.type === 'json-rpc' || account === null) {
            let chainId;
            if (chain !== null) {
                chainId = await (0, getAction_js_1.getAction)(client, getChainId_js_1.getChainId, 'getChainId')({});
                (0, assertCurrentChain_js_1.assertCurrentChain)({
                    currentChainId: chainId,
                    chain
                });
            }
            const chainFormat = client.chain?.formatters?.transactionRequest?.format;
            const format = chainFormat || transactionRequest_js_1.formatTransactionRequest;
            const request = format({
                ...(0, extract_js_1.extract)(rest, {
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
            const request = await (0, getAction_js_1.getAction)(client, prepareTransactionRequest_js_1.prepareTransactionRequest, 'prepareTransactionRequest')({
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
                    ...prepareTransactionRequest_js_1.defaultParameters,
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
            return await (0, getAction_js_1.getAction)(client, sendRawTransaction_js_1.sendRawTransaction, 'sendRawTransaction')({
                serializedTransaction
            });
        }
        if (account?.type === 'smart') throw new account_js_1.AccountTypeNotSupportedError({
            metaMessages: [
                'Consider using the `sendUserOperation` Action instead.'
            ],
            docsPath: '/docs/actions/bundler/sendUserOperation',
            type: 'smart'
        });
        throw new account_js_1.AccountTypeNotSupportedError({
            docsPath: '/docs/actions/wallet/sendTransaction',
            type: account?.type
        });
    } catch (err) {
        if (err instanceof account_js_1.AccountTypeNotSupportedError) throw err;
        throw (0, getTransactionError_js_1.getTransactionError)(err, {
            ...parameters,
            account,
            chain: parameters.chain || undefined
        });
    }
} //# sourceMappingURL=sendTransaction.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/writeContract.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.writeContract = writeContract;
const parseAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const account_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/account.js [app-client] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
const getContractError_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getContractError.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const sendTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/sendTransaction.js [app-client] (ecmascript)");
async function writeContract(client, parameters) {
    return writeContract.internal(client, sendTransaction_js_1.sendTransaction, 'sendTransaction', parameters);
}
(function(writeContract) {
    async function internal(client, actionFn, name, parameters) {
        const { abi, account: account_ = client.account, address, args, dataSuffix, functionName, ...request } = parameters;
        if (typeof account_ === 'undefined') throw new account_js_1.AccountNotFoundError({
            docsPath: '/docs/contract/writeContract'
        });
        const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : null;
        const data = (0, encodeFunctionData_js_1.encodeFunctionData)({
            abi,
            args,
            functionName
        });
        try {
            return await (0, getAction_js_1.getAction)(client, actionFn, name)({
                data: `${data}${dataSuffix ? dataSuffix.replace('0x', '') : ''}`,
                to: address,
                account,
                ...request
            });
        } catch (error) {
            throw (0, getContractError_js_1.getContractError)(error, {
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
})(writeContract || (exports.writeContract = writeContract = {})); //# sourceMappingURL=writeContract.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/getContract.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getContract = getContract;
exports.getFunctionParameters = getFunctionParameters;
exports.getEventParameters = getEventParameters;
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const createContractEventFilter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/createContractEventFilter.js [app-client] (ecmascript)");
const estimateContractGas_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/estimateContractGas.js [app-client] (ecmascript)");
const getContractEvents_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getContractEvents.js [app-client] (ecmascript)");
const readContract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/readContract.js [app-client] (ecmascript)");
const simulateContract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/simulateContract.js [app-client] (ecmascript)");
const watchContractEvent_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/watchContractEvent.js [app-client] (ecmascript)");
const writeContract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/writeContract.js [app-client] (ecmascript)");
function getContract({ abi, address, client: client_ }) {
    const client = client_;
    const [publicClient, walletClient] = (()=>{
        if (!client) return [
            undefined,
            undefined
        ];
        if ('public' in client && 'wallet' in client) return [
            client.public,
            client.wallet
        ];
        if ('public' in client) return [
            client.public,
            undefined
        ];
        if ('wallet' in client) return [
            undefined,
            client.wallet
        ];
        return [
            client,
            client
        ];
    })();
    const hasPublicClient = publicClient !== undefined && publicClient !== null;
    const hasWalletClient = walletClient !== undefined && walletClient !== null;
    const contract = {};
    let hasReadFunction = false;
    let hasWriteFunction = false;
    let hasEvent = false;
    for (const item of abi){
        if (item.type === 'function') if (item.stateMutability === 'view' || item.stateMutability === 'pure') hasReadFunction = true;
        else hasWriteFunction = true;
        else if (item.type === 'event') hasEvent = true;
        if (hasReadFunction && hasWriteFunction && hasEvent) break;
    }
    if (hasPublicClient) {
        if (hasReadFunction) contract.read = new Proxy({}, {
            get (_, functionName) {
                return (...parameters)=>{
                    const { args, options } = getFunctionParameters(parameters);
                    return (0, getAction_js_1.getAction)(publicClient, readContract_js_1.readContract, 'readContract')({
                        abi,
                        address,
                        functionName,
                        args,
                        ...options
                    });
                };
            }
        });
        if (hasWriteFunction) contract.simulate = new Proxy({}, {
            get (_, functionName) {
                return (...parameters)=>{
                    const { args, options } = getFunctionParameters(parameters);
                    return (0, getAction_js_1.getAction)(publicClient, simulateContract_js_1.simulateContract, 'simulateContract')({
                        abi,
                        address,
                        functionName,
                        args,
                        ...options
                    });
                };
            }
        });
        if (hasEvent) {
            contract.createEventFilter = new Proxy({}, {
                get (_, eventName) {
                    return (...parameters)=>{
                        const abiEvent = abi.find((x)=>x.type === 'event' && x.name === eventName);
                        const { args, options } = getEventParameters(parameters, abiEvent);
                        return (0, getAction_js_1.getAction)(publicClient, createContractEventFilter_js_1.createContractEventFilter, 'createContractEventFilter')({
                            abi,
                            address,
                            eventName,
                            args,
                            ...options
                        });
                    };
                }
            });
            contract.getEvents = new Proxy({}, {
                get (_, eventName) {
                    return (...parameters)=>{
                        const abiEvent = abi.find((x)=>x.type === 'event' && x.name === eventName);
                        const { args, options } = getEventParameters(parameters, abiEvent);
                        return (0, getAction_js_1.getAction)(publicClient, getContractEvents_js_1.getContractEvents, 'getContractEvents')({
                            abi,
                            address,
                            eventName,
                            args,
                            ...options
                        });
                    };
                }
            });
            contract.watchEvent = new Proxy({}, {
                get (_, eventName) {
                    return (...parameters)=>{
                        const abiEvent = abi.find((x)=>x.type === 'event' && x.name === eventName);
                        const { args, options } = getEventParameters(parameters, abiEvent);
                        return (0, getAction_js_1.getAction)(publicClient, watchContractEvent_js_1.watchContractEvent, 'watchContractEvent')({
                            abi,
                            address,
                            eventName,
                            args,
                            ...options
                        });
                    };
                }
            });
        }
    }
    if (hasWalletClient) {
        if (hasWriteFunction) contract.write = new Proxy({}, {
            get (_, functionName) {
                return (...parameters)=>{
                    const { args, options } = getFunctionParameters(parameters);
                    return (0, getAction_js_1.getAction)(walletClient, writeContract_js_1.writeContract, 'writeContract')({
                        abi,
                        address,
                        functionName,
                        args,
                        ...options
                    });
                };
            }
        });
    }
    if (hasPublicClient || hasWalletClient) {
        if (hasWriteFunction) contract.estimateGas = new Proxy({}, {
            get (_, functionName) {
                return (...parameters)=>{
                    const { args, options } = getFunctionParameters(parameters);
                    const client = publicClient ?? walletClient;
                    return (0, getAction_js_1.getAction)(client, estimateContractGas_js_1.estimateContractGas, 'estimateContractGas')({
                        abi,
                        address,
                        functionName,
                        args,
                        ...options,
                        account: options.account ?? walletClient.account
                    });
                };
            }
        });
    }
    contract.address = address;
    contract.abi = abi;
    return contract;
}
function getFunctionParameters(values) {
    const hasArgs = values.length && Array.isArray(values[0]);
    const args = hasArgs ? values[0] : [];
    const options = (hasArgs ? values[1] : values[0]) ?? {};
    return {
        args,
        options
    };
}
function getEventParameters(values, abiEvent) {
    let hasArgs = false;
    if (Array.isArray(values[0])) hasArgs = true;
    else if (values.length === 1) {
        hasArgs = abiEvent.inputs.some((x)=>x.indexed);
    } else if (values.length === 2) {
        hasArgs = true;
    }
    const args = hasArgs ? values[0] : undefined;
    const options = (hasArgs ? values[1] : values[0]) ?? {};
    return {
        args,
        options
    };
} //# sourceMappingURL=getContract.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/calls.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BundleFailedError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class BundleFailedError extends base_js_1.BaseError {
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
}
exports.BundleFailedError = BundleFailedError; //# sourceMappingURL=calls.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/promise/withRetry.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.withRetry = withRetry;
const wait_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/wait.js [app-client] (ecmascript)");
function withRetry(fn, { delay: delay_ = 100, retryCount = 2, shouldRetry = ()=>true } = {}) {
    return new Promise((resolve, reject)=>{
        const attemptRetry = async ({ count = 0 } = {})=>{
            const retry = async ({ error })=>{
                const delay = typeof delay_ === 'function' ? delay_({
                    count,
                    error
                }) : delay_;
                if (delay) await (0, wait_js_1.wait)(delay);
                attemptRetry({
                    count: count + 1
                });
            };
            try {
                const data = await fn();
                resolve(data);
            } catch (err) {
                if (count < retryCount && await shouldRetry({
                    count,
                    error: err
                })) return retry({
                    error: err
                });
                reject(err);
            }
        };
        attemptRetry();
    });
} //# sourceMappingURL=withRetry.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transactionReceipt.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineTransactionReceipt = exports.receiptStatuses = void 0;
exports.formatTransactionReceipt = formatTransactionReceipt;
const fromHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const formatter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/formatter.js [app-client] (ecmascript)");
const log_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/log.js [app-client] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transaction.js [app-client] (ecmascript)");
exports.receiptStatuses = {
    '0x0': 'reverted',
    '0x1': 'success'
};
function formatTransactionReceipt(transactionReceipt, _) {
    const receipt = {
        ...transactionReceipt,
        blockNumber: transactionReceipt.blockNumber ? BigInt(transactionReceipt.blockNumber) : null,
        contractAddress: transactionReceipt.contractAddress ? transactionReceipt.contractAddress : null,
        cumulativeGasUsed: transactionReceipt.cumulativeGasUsed ? BigInt(transactionReceipt.cumulativeGasUsed) : null,
        effectiveGasPrice: transactionReceipt.effectiveGasPrice ? BigInt(transactionReceipt.effectiveGasPrice) : null,
        gasUsed: transactionReceipt.gasUsed ? BigInt(transactionReceipt.gasUsed) : null,
        logs: transactionReceipt.logs ? transactionReceipt.logs.map((log)=>(0, log_js_1.formatLog)(log)) : null,
        to: transactionReceipt.to ? transactionReceipt.to : null,
        transactionIndex: transactionReceipt.transactionIndex ? (0, fromHex_js_1.hexToNumber)(transactionReceipt.transactionIndex) : null,
        status: transactionReceipt.status ? exports.receiptStatuses[transactionReceipt.status] : null,
        type: transactionReceipt.type ? transaction_js_1.transactionType[transactionReceipt.type] || transactionReceipt.type : null
    };
    if (transactionReceipt.blobGasPrice) receipt.blobGasPrice = BigInt(transactionReceipt.blobGasPrice);
    if (transactionReceipt.blobGasUsed) receipt.blobGasUsed = BigInt(transactionReceipt.blobGasUsed);
    return receipt;
}
exports.defineTransactionReceipt = (0, formatter_js_1.defineFormatter)('transactionReceipt', formatTransactionReceipt); //# sourceMappingURL=transactionReceipt.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/sendCalls.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fallbackTransactionErrorMagicIdentifier = exports.fallbackMagicIdentifier = void 0;
exports.sendCalls = sendCalls;
const parseAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const rpc_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/rpc.js [app-client] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const getTransactionError_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getTransactionError.js [app-client] (ecmascript)");
const sendTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/sendTransaction.js [app-client] (ecmascript)");
exports.fallbackMagicIdentifier = '0x5792579257925792579257925792579257925792579257925792579257925792';
exports.fallbackTransactionErrorMagicIdentifier = (0, toHex_js_1.numberToHex)(0, {
    size: 32
});
async function sendCalls(client, parameters) {
    const { account: account_ = client.account, capabilities, chain = client.chain, experimental_fallback, experimental_fallbackDelay = 32, forceAtomic = false, id, version = '2.0.0' } = parameters;
    const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : null;
    const calls = parameters.calls.map((call_)=>{
        const call = call_;
        const data = call.abi ? (0, encodeFunctionData_js_1.encodeFunctionData)({
            abi: call.abi,
            functionName: call.functionName,
            args: call.args
        }) : call.data;
        return {
            data: call.dataSuffix && data ? (0, concat_js_1.concat)([
                data,
                call.dataSuffix
            ]) : data,
            to: call.to,
            value: call.value ? (0, toHex_js_1.numberToHex)(call.value) : undefined
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
                    chainId: (0, toHex_js_1.numberToHex)(chain.id),
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
        if (experimental_fallback && (error.name === 'MethodNotFoundRpcError' || error.name === 'MethodNotSupportedRpcError' || error.name === 'UnknownRpcError' || error.details.toLowerCase().includes('does not exist / is not available') || error.details.toLowerCase().includes('missing or invalid. request()') || error.details.toLowerCase().includes('did not match any variant of untagged enum') || error.details.toLowerCase().includes('account upgraded to unsupported contract') || error.details.toLowerCase().includes('eip-7702 not supported') || error.details.toLowerCase().includes('unsupported wc_ method') || error.details.toLowerCase().includes('feature toggled misconfigured') || error.details.toLowerCase().includes('jsonrpcengine: response has no error or result for request'))) {
            if (capabilities) {
                const hasNonOptionalCapability = Object.values(capabilities).some((capability)=>!capability.optional);
                if (hasNonOptionalCapability) {
                    const message = 'non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.';
                    throw new rpc_js_1.UnsupportedNonOptionalCapabilityError(new base_js_1.BaseError(message, {
                        details: message
                    }));
                }
            }
            if (forceAtomic && calls.length > 1) {
                const message = '`forceAtomic` is not supported on fallback to `eth_sendTransaction`.';
                throw new rpc_js_1.AtomicityNotSupportedError(new base_js_1.BaseError(message, {
                    details: message
                }));
            }
            const promises = [];
            for (const call of calls){
                const promise = (0, sendTransaction_js_1.sendTransaction)(client, {
                    account,
                    chain,
                    data: call.data,
                    to: call.to,
                    value: call.value ? (0, fromHex_js_1.hexToBigInt)(call.value) : undefined
                });
                promises.push(promise);
                if (experimental_fallbackDelay > 0) await new Promise((resolve)=>setTimeout(resolve, experimental_fallbackDelay));
            }
            const results = await Promise.allSettled(promises);
            if (results.every((r)=>r.status === 'rejected')) throw results[0].reason;
            const hashes = results.map((result)=>{
                if (result.status === 'fulfilled') return result.value;
                return exports.fallbackTransactionErrorMagicIdentifier;
            });
            return {
                id: (0, concat_js_1.concat)([
                    ...hashes,
                    (0, toHex_js_1.numberToHex)(chain.id, {
                        size: 32
                    }),
                    exports.fallbackMagicIdentifier
                ])
            };
        }
        throw (0, getTransactionError_js_1.getTransactionError)(err, {
            ...parameters,
            account,
            chain: parameters.chain
        });
    }
} //# sourceMappingURL=sendCalls.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/getCallsStatus.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCallsStatus = getCallsStatus;
const slice_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)");
const trim_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/trim.js [app-client] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const transactionReceipt_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transactionReceipt.js [app-client] (ecmascript)");
const sendCalls_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/sendCalls.js [app-client] (ecmascript)");
async function getCallsStatus(client, parameters) {
    async function getStatus(id) {
        const isTransactions = id.endsWith(sendCalls_js_1.fallbackMagicIdentifier.slice(2));
        if (isTransactions) {
            const chainId = (0, trim_js_1.trim)((0, slice_js_1.sliceHex)(id, -64, -32));
            const hashes = (0, slice_js_1.sliceHex)(id, 0, -64).slice(2).match(/.{1,64}/g);
            const receipts = await Promise.all(hashes.map((hash)=>sendCalls_js_1.fallbackTransactionErrorMagicIdentifier.slice(2) !== hash ? client.request({
                    method: 'eth_getTransactionReceipt',
                    params: [
                        `0x${hash}`
                    ]
                }, {
                    dedupe: true
                }) : undefined));
            const status = (()=>{
                if (receipts.some((r)=>r === null)) return 100;
                if (receipts.every((r)=>r?.status === '0x1')) return 200;
                if (receipts.every((r)=>r?.status === '0x0')) return 500;
                return 600;
            })();
            return {
                atomic: false,
                chainId: (0, fromHex_js_1.hexToNumber)(chainId),
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
        if (statusCode === 'CONFIRMED') return [
            'success',
            200
        ];
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
        chainId: chainId ? (0, fromHex_js_1.hexToNumber)(chainId) : undefined,
        receipts: receipts?.map((receipt)=>({
                ...receipt,
                blockNumber: (0, fromHex_js_1.hexToBigInt)(receipt.blockNumber),
                gasUsed: (0, fromHex_js_1.hexToBigInt)(receipt.gasUsed),
                status: transactionReceipt_js_1.receiptStatuses[receipt.status]
            })) ?? [],
        statusCode,
        status,
        version
    };
} //# sourceMappingURL=getCallsStatus.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/waitForCallsStatus.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WaitForCallsStatusTimeoutError = void 0;
exports.waitForCallsStatus = waitForCallsStatus;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const calls_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/calls.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const observe_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/observe.js [app-client] (ecmascript)");
const poll_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/poll.js [app-client] (ecmascript)");
const withResolvers_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/promise/withResolvers.js [app-client] (ecmascript)");
const withRetry_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/promise/withRetry.js [app-client] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
const getCallsStatus_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/getCallsStatus.js [app-client] (ecmascript)");
async function waitForCallsStatus(client, parameters) {
    const { id, pollingInterval = client.pollingInterval, status = ({ statusCode })=>statusCode === 200 || statusCode >= 300, retryCount = 4, retryDelay = ({ count })=>~~(1 << count) * 200, timeout = 60_000, throwOnFailure = false } = parameters;
    const observerId = (0, stringify_js_1.stringify)([
        'waitForCallsStatus',
        client.uid,
        id
    ]);
    const { promise, resolve, reject } = (0, withResolvers_js_1.withResolvers)();
    let timer;
    const unobserve = (0, observe_js_1.observe)(observerId, {
        resolve,
        reject
    }, (emit)=>{
        const unpoll = (0, poll_js_1.poll)(async ()=>{
            const done = (fn)=>{
                clearTimeout(timer);
                unpoll();
                fn();
                unobserve();
            };
            try {
                const result = await (0, withRetry_js_1.withRetry)(async ()=>{
                    const result = await (0, getAction_js_1.getAction)(client, getCallsStatus_js_1.getCallsStatus, 'getCallsStatus')({
                        id
                    });
                    if (throwOnFailure && result.status === 'failure') throw new calls_js_1.BundleFailedError(result);
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
class WaitForCallsStatusTimeoutError extends base_js_1.BaseError {
    constructor({ id }){
        super(`Timed out while waiting for call bundle with id "${id}" to be confirmed.`, {
            name: 'WaitForCallsStatusTimeoutError'
        });
    }
}
exports.WaitForCallsStatusTimeoutError = WaitForCallsStatusTimeoutError; //# sourceMappingURL=waitForCallsStatus.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/uid.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uid = uid;
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
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/createClient.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createClient = createClient;
exports.rpcSchema = rpcSchema;
const parseAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const uid_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/uid.js [app-client] (ecmascript)");
function createClient(parameters) {
    const { batch, chain, ccipRead, key = 'base', name = 'Base Client', type = 'base' } = parameters;
    const experimental_blockTag = parameters.experimental_blockTag ?? (typeof chain?.experimental_preconfirmationTime === 'number' ? 'pending' : undefined);
    const blockTime = chain?.blockTime ?? 12_000;
    const defaultPollingInterval = Math.min(Math.max(Math.floor(blockTime / 2), 500), 4_000);
    const pollingInterval = parameters.pollingInterval ?? defaultPollingInterval;
    const cacheTime = parameters.cacheTime ?? pollingInterval;
    const account = parameters.account ? (0, parseAccount_js_1.parseAccount)(parameters.account) : undefined;
    const { config, request, value } = parameters.transport({
        account,
        chain,
        pollingInterval
    });
    const transport = {
        ...config,
        ...value
    };
    const client = {
        account,
        batch,
        cacheTime,
        ccipRead,
        chain,
        key,
        name,
        pollingInterval,
        request,
        transport,
        type,
        uid: (0, uid_js_1.uid)(),
        ...experimental_blockTag ? {
            experimental_blockTag
        } : {}
    };
    function extend(base) {
        return (extendFn)=>{
            const extended = extendFn(base);
            for(const key in client)delete extended[key];
            const combined = {
                ...base,
                ...extended
            };
            return Object.assign(combined, {
                extend: extend(combined)
            });
        };
    }
    return Object.assign(client, {
        extend: extend(client)
    });
}
function rpcSchema() {
    return null;
} //# sourceMappingURL=createClient.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/errors.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isNullUniversalResolverError = isNullUniversalResolverError;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const contract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/contract.js [app-client] (ecmascript)");
function isNullUniversalResolverError(err) {
    if (!(err instanceof base_js_1.BaseError)) return false;
    const cause = err.walk((e)=>e instanceof contract_js_1.ContractFunctionRevertedError);
    if (!(cause instanceof contract_js_1.ContractFunctionRevertedError)) return false;
    if (cause.data?.errorName === 'HttpError') return true;
    if (cause.data?.errorName === 'ResolverError') return true;
    if (cause.data?.errorName === 'ResolverNotContract') return true;
    if (cause.data?.errorName === 'ResolverNotFound') return true;
    if (cause.data?.errorName === 'ReverseAddressMismatch') return true;
    if (cause.data?.errorName === 'UnsupportedResolverProfile') return true;
    return false;
} //# sourceMappingURL=errors.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/encodedLabelToLabelhash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodedLabelToLabelhash = encodedLabelToLabelhash;
const isHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
function encodedLabelToLabelhash(label) {
    if (label.length !== 66) return null;
    if (label.indexOf('[') !== 0) return null;
    if (label.indexOf(']') !== 65) return null;
    const hash = `0x${label.slice(1, 65)}`;
    if (!(0, isHex_js_1.isHex)(hash)) return null;
    return hash;
} //# sourceMappingURL=encodedLabelToLabelhash.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/namehash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.namehash = namehash;
const concat_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const keccak256_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
const encodedLabelToLabelhash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/encodedLabelToLabelhash.js [app-client] (ecmascript)");
function namehash(name) {
    let result = new Uint8Array(32).fill(0);
    if (!name) return (0, toHex_js_1.bytesToHex)(result);
    const labels = name.split('.');
    for(let i = labels.length - 1; i >= 0; i -= 1){
        const hashFromEncodedLabel = (0, encodedLabelToLabelhash_js_1.encodedLabelToLabelhash)(labels[i]);
        const hashed = hashFromEncodedLabel ? (0, toBytes_js_1.toBytes)(hashFromEncodedLabel) : (0, keccak256_js_1.keccak256)((0, toBytes_js_1.stringToBytes)(labels[i]), 'bytes');
        result = (0, keccak256_js_1.keccak256)((0, concat_js_1.concat)([
            result,
            hashed
        ]), 'bytes');
    }
    return (0, toHex_js_1.bytesToHex)(result);
} //# sourceMappingURL=namehash.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/encodeLabelhash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeLabelhash = encodeLabelhash;
function encodeLabelhash(hash) {
    return `[${hash.slice(2)}]`;
} //# sourceMappingURL=encodeLabelhash.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/labelhash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.labelhash = labelhash;
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const keccak256_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
const encodedLabelToLabelhash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/encodedLabelToLabelhash.js [app-client] (ecmascript)");
function labelhash(label) {
    const result = new Uint8Array(32).fill(0);
    if (!label) return (0, toHex_js_1.bytesToHex)(result);
    return (0, encodedLabelToLabelhash_js_1.encodedLabelToLabelhash)(label) || (0, keccak256_js_1.keccak256)((0, toBytes_js_1.stringToBytes)(label));
} //# sourceMappingURL=labelhash.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/packetToBytes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.packetToBytes = packetToBytes;
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const encodeLabelhash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/encodeLabelhash.js [app-client] (ecmascript)");
const labelhash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/labelhash.js [app-client] (ecmascript)");
function packetToBytes(packet) {
    const value = packet.replace(/^\.|\.$/gm, '');
    if (value.length === 0) return new Uint8Array(1);
    const bytes = new Uint8Array((0, toBytes_js_1.stringToBytes)(value).byteLength + 2);
    let offset = 0;
    const list = value.split('.');
    for(let i = 0; i < list.length; i++){
        let encoded = (0, toBytes_js_1.stringToBytes)(list[i]);
        if (encoded.byteLength > 255) encoded = (0, toBytes_js_1.stringToBytes)((0, encodeLabelhash_js_1.encodeLabelhash)((0, labelhash_js_1.labelhash)(list[i])));
        bytes[offset] = encoded.length;
        bytes.set(encoded, offset + 1);
        offset += encoded.length + 1;
    }
    if (bytes.byteLength !== offset + 1) return bytes.slice(0, offset + 1);
    return bytes;
} //# sourceMappingURL=packetToBytes.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/ens/getEnsAddress.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEnsAddress = getEnsAddress;
const abis_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/abis.js [app-client] (ecmascript)");
const decodeFunctionResult_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
const getChainContractAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-client] (ecmascript)");
const trim_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/trim.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/errors.js [app-client] (ecmascript)");
const localBatchGatewayRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/localBatchGatewayRequest.js [app-client] (ecmascript)");
const namehash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/namehash.js [app-client] (ecmascript)");
const packetToBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/packetToBytes.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const readContract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/readContract.js [app-client] (ecmascript)");
async function getEnsAddress(client, parameters) {
    const { blockNumber, blockTag, coinType, name, gatewayUrls, strict } = parameters;
    const { chain } = client;
    const universalResolverAddress = (()=>{
        if (parameters.universalResolverAddress) return parameters.universalResolverAddress;
        if (!chain) throw new Error('client chain not configured. universalResolverAddress is required.');
        return (0, getChainContractAddress_js_1.getChainContractAddress)({
            blockNumber,
            chain,
            contract: 'ensUniversalResolver'
        });
    })();
    const tlds = chain?.ensTlds;
    if (tlds && !tlds.some((tld)=>name.endsWith(tld))) return null;
    const args = (()=>{
        if (coinType != null) return [
            (0, namehash_js_1.namehash)(name),
            BigInt(coinType)
        ];
        return [
            (0, namehash_js_1.namehash)(name)
        ];
    })();
    try {
        const functionData = (0, encodeFunctionData_js_1.encodeFunctionData)({
            abi: abis_js_1.addressResolverAbi,
            functionName: 'addr',
            args
        });
        const readContractParameters = {
            address: universalResolverAddress,
            abi: abis_js_1.universalResolverResolveAbi,
            functionName: 'resolveWithGateways',
            args: [
                (0, toHex_js_1.toHex)((0, packetToBytes_js_1.packetToBytes)(name)),
                functionData,
                gatewayUrls ?? [
                    localBatchGatewayRequest_js_1.localBatchGatewayUrl
                ]
            ],
            blockNumber,
            blockTag
        };
        const readContractAction = (0, getAction_js_1.getAction)(client, readContract_js_1.readContract, 'readContract');
        const res = await readContractAction(readContractParameters);
        if (res[0] === '0x') return null;
        const address = (0, decodeFunctionResult_js_1.decodeFunctionResult)({
            abi: abis_js_1.addressResolverAbi,
            args,
            functionName: 'addr',
            data: res[0]
        });
        if (address === '0x') return null;
        if ((0, trim_js_1.trim)(address) === '0x00') return null;
        return address;
    } catch (err) {
        if (strict) throw err;
        if ((0, errors_js_1.isNullUniversalResolverError)(err)) return null;
        throw err;
    }
} //# sourceMappingURL=getEnsAddress.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/ens.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EnsInvalidChainIdError = exports.EnsAvatarUnsupportedNamespaceError = exports.EnsAvatarUriResolutionError = exports.EnsAvatarInvalidNftUriError = exports.EnsAvatarInvalidMetadataError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class EnsAvatarInvalidMetadataError extends base_js_1.BaseError {
    constructor({ data }){
        super('Unable to extract image from metadata. The metadata may be malformed or invalid.', {
            metaMessages: [
                '- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.',
                '',
                `Provided data: ${JSON.stringify(data)}`
            ],
            name: 'EnsAvatarInvalidMetadataError'
        });
    }
}
exports.EnsAvatarInvalidMetadataError = EnsAvatarInvalidMetadataError;
class EnsAvatarInvalidNftUriError extends base_js_1.BaseError {
    constructor({ reason }){
        super(`ENS NFT avatar URI is invalid. ${reason}`, {
            name: 'EnsAvatarInvalidNftUriError'
        });
    }
}
exports.EnsAvatarInvalidNftUriError = EnsAvatarInvalidNftUriError;
class EnsAvatarUriResolutionError extends base_js_1.BaseError {
    constructor({ uri }){
        super(`Unable to resolve ENS avatar URI "${uri}". The URI may be malformed, invalid, or does not respond with a valid image.`, {
            name: 'EnsAvatarUriResolutionError'
        });
    }
}
exports.EnsAvatarUriResolutionError = EnsAvatarUriResolutionError;
class EnsAvatarUnsupportedNamespaceError extends base_js_1.BaseError {
    constructor({ namespace }){
        super(`ENS NFT avatar namespace "${namespace}" is not supported. Must be "erc721" or "erc1155".`, {
            name: 'EnsAvatarUnsupportedNamespaceError'
        });
    }
}
exports.EnsAvatarUnsupportedNamespaceError = EnsAvatarUnsupportedNamespaceError;
class EnsInvalidChainIdError extends base_js_1.BaseError {
    constructor({ chainId }){
        super(`Invalid ENSIP-11 chainId: ${chainId}. Must be between 0 and 0x7fffffff, or 1.`, {
            name: 'EnsInvalidChainIdError'
        });
    }
}
exports.EnsInvalidChainIdError = EnsInvalidChainIdError; //# sourceMappingURL=ens.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/avatar/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isImageUri = isImageUri;
exports.getGateway = getGateway;
exports.resolveAvatarUri = resolveAvatarUri;
exports.getJsonImage = getJsonImage;
exports.getMetadataAvatarUri = getMetadataAvatarUri;
exports.parseAvatarUri = parseAvatarUri;
exports.parseNftUri = parseNftUri;
exports.getNftTokenUri = getNftTokenUri;
const readContract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/readContract.js [app-client] (ecmascript)");
const ens_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/ens.js [app-client] (ecmascript)");
const networkRegex = /(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/;
const ipfsHashRegex = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/;
const base64Regex = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/;
const dataURIRegex = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function isImageUri(uri) {
    try {
        const res = await fetch(uri, {
            method: 'HEAD'
        });
        if (res.status === 200) {
            const contentType = res.headers.get('content-type');
            return contentType?.startsWith('image/');
        }
        return false;
    } catch (error) {
        if (typeof error === 'object' && typeof error.response !== 'undefined') {
            return false;
        }
        if (!Object.hasOwn(globalThis, 'Image')) return false;
        return new Promise((resolve)=>{
            const img = new Image();
            img.onload = ()=>{
                resolve(true);
            };
            img.onerror = ()=>{
                resolve(false);
            };
            img.src = uri;
        });
    }
}
function getGateway(custom, defaultGateway) {
    if (!custom) return defaultGateway;
    if (custom.endsWith('/')) return custom.slice(0, -1);
    return custom;
}
function resolveAvatarUri({ uri, gatewayUrls }) {
    const isEncoded = base64Regex.test(uri);
    if (isEncoded) return {
        uri,
        isOnChain: true,
        isEncoded
    };
    const ipfsGateway = getGateway(gatewayUrls?.ipfs, 'https://ipfs.io');
    const arweaveGateway = getGateway(gatewayUrls?.arweave, 'https://arweave.net');
    const networkRegexMatch = uri.match(networkRegex);
    const { protocol, subpath, target, subtarget = '' } = networkRegexMatch?.groups || {};
    const isIPNS = protocol === 'ipns:/' || subpath === 'ipns/';
    const isIPFS = protocol === 'ipfs:/' || subpath === 'ipfs/' || ipfsHashRegex.test(uri);
    if (uri.startsWith('http') && !isIPNS && !isIPFS) {
        let replacedUri = uri;
        if (gatewayUrls?.arweave) replacedUri = uri.replace(/https:\/\/arweave.net/g, gatewayUrls?.arweave);
        return {
            uri: replacedUri,
            isOnChain: false,
            isEncoded: false
        };
    }
    if ((isIPNS || isIPFS) && target) {
        return {
            uri: `${ipfsGateway}/${isIPNS ? 'ipns' : 'ipfs'}/${target}${subtarget}`,
            isOnChain: false,
            isEncoded: false
        };
    }
    if (protocol === 'ar:/' && target) {
        return {
            uri: `${arweaveGateway}/${target}${subtarget || ''}`,
            isOnChain: false,
            isEncoded: false
        };
    }
    let parsedUri = uri.replace(dataURIRegex, '');
    if (parsedUri.startsWith('<svg')) {
        parsedUri = `data:image/svg+xml;base64,${btoa(parsedUri)}`;
    }
    if (parsedUri.startsWith('data:') || parsedUri.startsWith('{')) {
        return {
            uri: parsedUri,
            isOnChain: true,
            isEncoded: false
        };
    }
    throw new ens_js_1.EnsAvatarUriResolutionError({
        uri
    });
}
function getJsonImage(data) {
    if (typeof data !== 'object' || !('image' in data) && !('image_url' in data) && !('image_data' in data)) {
        throw new ens_js_1.EnsAvatarInvalidMetadataError({
            data
        });
    }
    return data.image || data.image_url || data.image_data;
}
async function getMetadataAvatarUri({ gatewayUrls, uri }) {
    try {
        const res = await fetch(uri).then((res)=>res.json());
        const image = await parseAvatarUri({
            gatewayUrls,
            uri: getJsonImage(res)
        });
        return image;
    } catch  {
        throw new ens_js_1.EnsAvatarUriResolutionError({
            uri
        });
    }
}
async function parseAvatarUri({ gatewayUrls, uri }) {
    const { uri: resolvedURI, isOnChain } = resolveAvatarUri({
        uri,
        gatewayUrls
    });
    if (isOnChain) return resolvedURI;
    const isImage = await isImageUri(resolvedURI);
    if (isImage) return resolvedURI;
    throw new ens_js_1.EnsAvatarUriResolutionError({
        uri
    });
}
function parseNftUri(uri_) {
    let uri = uri_;
    if (uri.startsWith('did:nft:')) {
        uri = uri.replace('did:nft:', '').replace(/_/g, '/');
    }
    const [reference, asset_namespace, tokenID] = uri.split('/');
    const [eip_namespace, chainID] = reference.split(':');
    const [erc_namespace, contractAddress] = asset_namespace.split(':');
    if (!eip_namespace || eip_namespace.toLowerCase() !== 'eip155') throw new ens_js_1.EnsAvatarInvalidNftUriError({
        reason: 'Only EIP-155 supported'
    });
    if (!chainID) throw new ens_js_1.EnsAvatarInvalidNftUriError({
        reason: 'Chain ID not found'
    });
    if (!contractAddress) throw new ens_js_1.EnsAvatarInvalidNftUriError({
        reason: 'Contract address not found'
    });
    if (!tokenID) throw new ens_js_1.EnsAvatarInvalidNftUriError({
        reason: 'Token ID not found'
    });
    if (!erc_namespace) throw new ens_js_1.EnsAvatarInvalidNftUriError({
        reason: 'ERC namespace not found'
    });
    return {
        chainID: Number.parseInt(chainID, 10),
        namespace: erc_namespace.toLowerCase(),
        contractAddress: contractAddress,
        tokenID
    };
}
async function getNftTokenUri(client, { nft }) {
    if (nft.namespace === 'erc721') {
        return (0, readContract_js_1.readContract)(client, {
            address: nft.contractAddress,
            abi: [
                {
                    name: 'tokenURI',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [
                        {
                            name: 'tokenId',
                            type: 'uint256'
                        }
                    ],
                    outputs: [
                        {
                            name: '',
                            type: 'string'
                        }
                    ]
                }
            ],
            functionName: 'tokenURI',
            args: [
                BigInt(nft.tokenID)
            ]
        });
    }
    if (nft.namespace === 'erc1155') {
        return (0, readContract_js_1.readContract)(client, {
            address: nft.contractAddress,
            abi: [
                {
                    name: 'uri',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [
                        {
                            name: '_id',
                            type: 'uint256'
                        }
                    ],
                    outputs: [
                        {
                            name: '',
                            type: 'string'
                        }
                    ]
                }
            ],
            functionName: 'uri',
            args: [
                BigInt(nft.tokenID)
            ]
        });
    }
    throw new ens_js_1.EnsAvatarUnsupportedNamespaceError({
        namespace: nft.namespace
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/avatar/parseAvatarRecord.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseAvatarRecord = parseAvatarRecord;
const utils_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/avatar/utils.js [app-client] (ecmascript)");
async function parseAvatarRecord(client, { gatewayUrls, record }) {
    if (/eip155:/i.test(record)) return parseNftAvatarUri(client, {
        gatewayUrls,
        record
    });
    return (0, utils_js_1.parseAvatarUri)({
        uri: record,
        gatewayUrls
    });
}
async function parseNftAvatarUri(client, { gatewayUrls, record }) {
    const nft = (0, utils_js_1.parseNftUri)(record);
    const nftUri = await (0, utils_js_1.getNftTokenUri)(client, {
        nft
    });
    const { uri: resolvedNftUri, isOnChain, isEncoded } = (0, utils_js_1.resolveAvatarUri)({
        uri: nftUri,
        gatewayUrls
    });
    if (isOnChain && (resolvedNftUri.includes('data:application/json;base64,') || resolvedNftUri.startsWith('{'))) {
        const encodedJson = isEncoded ? atob(resolvedNftUri.replace('data:application/json;base64,', '')) : resolvedNftUri;
        const decoded = JSON.parse(encodedJson);
        return (0, utils_js_1.parseAvatarUri)({
            uri: (0, utils_js_1.getJsonImage)(decoded),
            gatewayUrls
        });
    }
    let uriTokenId = nft.tokenID;
    if (nft.namespace === 'erc1155') uriTokenId = uriTokenId.replace('0x', '').padStart(64, '0');
    return (0, utils_js_1.getMetadataAvatarUri)({
        gatewayUrls,
        uri: resolvedNftUri.replace(/(?:0x)?{id}/, uriTokenId)
    });
} //# sourceMappingURL=parseAvatarRecord.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/ens/getEnsText.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEnsText = getEnsText;
const abis_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/abis.js [app-client] (ecmascript)");
const decodeFunctionResult_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
const getChainContractAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/errors.js [app-client] (ecmascript)");
const localBatchGatewayRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/localBatchGatewayRequest.js [app-client] (ecmascript)");
const namehash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/namehash.js [app-client] (ecmascript)");
const packetToBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/packetToBytes.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const readContract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/readContract.js [app-client] (ecmascript)");
async function getEnsText(client, parameters) {
    const { blockNumber, blockTag, key, name, gatewayUrls, strict } = parameters;
    const { chain } = client;
    const universalResolverAddress = (()=>{
        if (parameters.universalResolverAddress) return parameters.universalResolverAddress;
        if (!chain) throw new Error('client chain not configured. universalResolverAddress is required.');
        return (0, getChainContractAddress_js_1.getChainContractAddress)({
            blockNumber,
            chain,
            contract: 'ensUniversalResolver'
        });
    })();
    const tlds = chain?.ensTlds;
    if (tlds && !tlds.some((tld)=>name.endsWith(tld))) return null;
    try {
        const readContractParameters = {
            address: universalResolverAddress,
            abi: abis_js_1.universalResolverResolveAbi,
            args: [
                (0, toHex_js_1.toHex)((0, packetToBytes_js_1.packetToBytes)(name)),
                (0, encodeFunctionData_js_1.encodeFunctionData)({
                    abi: abis_js_1.textResolverAbi,
                    functionName: 'text',
                    args: [
                        (0, namehash_js_1.namehash)(name),
                        key
                    ]
                }),
                gatewayUrls ?? [
                    localBatchGatewayRequest_js_1.localBatchGatewayUrl
                ]
            ],
            functionName: 'resolveWithGateways',
            blockNumber,
            blockTag
        };
        const readContractAction = (0, getAction_js_1.getAction)(client, readContract_js_1.readContract, 'readContract');
        const res = await readContractAction(readContractParameters);
        if (res[0] === '0x') return null;
        const record = (0, decodeFunctionResult_js_1.decodeFunctionResult)({
            abi: abis_js_1.textResolverAbi,
            functionName: 'text',
            data: res[0]
        });
        return record === '' ? null : record;
    } catch (err) {
        if (strict) throw err;
        if ((0, errors_js_1.isNullUniversalResolverError)(err)) return null;
        throw err;
    }
} //# sourceMappingURL=getEnsText.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/ens/getEnsAvatar.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEnsAvatar = getEnsAvatar;
const parseAvatarRecord_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/avatar/parseAvatarRecord.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const getEnsText_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/ens/getEnsText.js [app-client] (ecmascript)");
async function getEnsAvatar(client, { blockNumber, blockTag, assetGatewayUrls, name, gatewayUrls, strict, universalResolverAddress }) {
    const record = await (0, getAction_js_1.getAction)(client, getEnsText_js_1.getEnsText, 'getEnsText')({
        blockNumber,
        blockTag,
        key: 'avatar',
        name,
        universalResolverAddress,
        gatewayUrls,
        strict
    });
    if (!record) return null;
    try {
        return await (0, parseAvatarRecord_js_1.parseAvatarRecord)(client, {
            record,
            gatewayUrls: assetGatewayUrls
        });
    } catch  {
        return null;
    }
} //# sourceMappingURL=getEnsAvatar.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/ens/getEnsName.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEnsName = getEnsName;
const abis_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/abis.js [app-client] (ecmascript)");
const getChainContractAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-client] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/errors.js [app-client] (ecmascript)");
const localBatchGatewayRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/localBatchGatewayRequest.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const readContract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/readContract.js [app-client] (ecmascript)");
async function getEnsName(client, parameters) {
    const { address, blockNumber, blockTag, coinType = 60n, gatewayUrls, strict } = parameters;
    const { chain } = client;
    const universalResolverAddress = (()=>{
        if (parameters.universalResolverAddress) return parameters.universalResolverAddress;
        if (!chain) throw new Error('client chain not configured. universalResolverAddress is required.');
        return (0, getChainContractAddress_js_1.getChainContractAddress)({
            blockNumber,
            chain,
            contract: 'ensUniversalResolver'
        });
    })();
    try {
        const readContractParameters = {
            address: universalResolverAddress,
            abi: abis_js_1.universalResolverReverseAbi,
            args: [
                address,
                coinType,
                gatewayUrls ?? [
                    localBatchGatewayRequest_js_1.localBatchGatewayUrl
                ]
            ],
            functionName: 'reverseWithGateways',
            blockNumber,
            blockTag
        };
        const readContractAction = (0, getAction_js_1.getAction)(client, readContract_js_1.readContract, 'readContract');
        const [name] = await readContractAction(readContractParameters);
        return name || null;
    } catch (err) {
        if (strict) throw err;
        if ((0, errors_js_1.isNullUniversalResolverError)(err)) return null;
        throw err;
    }
} //# sourceMappingURL=getEnsName.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/ens/getEnsResolver.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEnsResolver = getEnsResolver;
const getChainContractAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const packetToBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/packetToBytes.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const readContract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/readContract.js [app-client] (ecmascript)");
async function getEnsResolver(client, parameters) {
    const { blockNumber, blockTag, name } = parameters;
    const { chain } = client;
    const universalResolverAddress = (()=>{
        if (parameters.universalResolverAddress) return parameters.universalResolverAddress;
        if (!chain) throw new Error('client chain not configured. universalResolverAddress is required.');
        return (0, getChainContractAddress_js_1.getChainContractAddress)({
            blockNumber,
            chain,
            contract: 'ensUniversalResolver'
        });
    })();
    const tlds = chain?.ensTlds;
    if (tlds && !tlds.some((tld)=>name.endsWith(tld))) throw new Error(`${name} is not a valid ENS TLD (${tlds?.join(', ')}) for chain "${chain.name}" (id: ${chain.id}).`);
    const [resolverAddress] = await (0, getAction_js_1.getAction)(client, readContract_js_1.readContract, 'readContract')({
        address: universalResolverAddress,
        abi: [
            {
                inputs: [
                    {
                        type: 'bytes'
                    }
                ],
                name: 'findResolver',
                outputs: [
                    {
                        type: 'address'
                    },
                    {
                        type: 'bytes32'
                    },
                    {
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            }
        ],
        functionName: 'findResolver',
        args: [
            (0, toHex_js_1.toHex)((0, packetToBytes_js_1.packetToBytes)(name))
        ],
        blockNumber,
        blockTag
    });
    return resolverAddress;
} //# sourceMappingURL=getEnsResolver.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/createAccessList.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createAccessList = createAccessList;
const parseAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const getCallError_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getCallError.js [app-client] (ecmascript)");
const extract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/extract.js [app-client] (ecmascript)");
const transactionRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
const assertRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-client] (ecmascript)");
async function createAccessList(client, args) {
    const { account: account_ = client.account, blockNumber, blockTag = 'latest', blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, to, value, ...rest } = args;
    const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : undefined;
    try {
        (0, assertRequest_js_1.assertRequest)(args);
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || transactionRequest_js_1.formatTransactionRequest;
        const request = format({
            ...(0, extract_js_1.extract)(rest, {
                format: chainFormat
            }),
            account,
            blobs,
            data,
            gas,
            gasPrice,
            maxFeePerBlobGas,
            maxFeePerGas,
            maxPriorityFeePerGas,
            to,
            value
        }, 'createAccessList');
        const response = await client.request({
            method: 'eth_createAccessList',
            params: [
                request,
                block
            ]
        });
        return {
            accessList: response.accessList,
            gasUsed: BigInt(response.gasUsed)
        };
    } catch (err) {
        throw (0, getCallError_js_1.getCallError)(err, {
            ...args,
            account,
            chain: client.chain
        });
    }
} //# sourceMappingURL=createAccessList.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/createBlockFilter.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createBlockFilter = createBlockFilter;
const createFilterRequestScope_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/filters/createFilterRequestScope.js [app-client] (ecmascript)");
async function createBlockFilter(client) {
    const getRequest = (0, createFilterRequestScope_js_1.createFilterRequestScope)(client, {
        method: 'eth_newBlockFilter'
    });
    const id = await client.request({
        method: 'eth_newBlockFilter'
    });
    return {
        id,
        request: getRequest(id),
        type: 'block'
    };
} //# sourceMappingURL=createBlockFilter.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/createEventFilter.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createEventFilter = createEventFilter;
const encodeEventTopics_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeEventTopics.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const createFilterRequestScope_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/filters/createFilterRequestScope.js [app-client] (ecmascript)");
async function createEventFilter(client, { address, args, event, events: events_, fromBlock, strict, toBlock } = {}) {
    const events = events_ ?? (event ? [
        event
    ] : undefined);
    const getRequest = (0, createFilterRequestScope_js_1.createFilterRequestScope)(client, {
        method: 'eth_newFilter'
    });
    let topics = [];
    if (events) {
        const encoded = events.flatMap((event)=>(0, encodeEventTopics_js_1.encodeEventTopics)({
                abi: [
                    event
                ],
                eventName: event.name,
                args
            }));
        topics = [
            encoded
        ];
        if (event) topics = topics[0];
    }
    const id = await client.request({
        method: 'eth_newFilter',
        params: [
            {
                address,
                fromBlock: typeof fromBlock === 'bigint' ? (0, toHex_js_1.numberToHex)(fromBlock) : fromBlock,
                toBlock: typeof toBlock === 'bigint' ? (0, toHex_js_1.numberToHex)(toBlock) : toBlock,
                ...topics.length ? {
                    topics
                } : {}
            }
        ]
    });
    return {
        abi: events,
        args,
        eventName: event ? event.name : undefined,
        fromBlock,
        id,
        request: getRequest(id),
        strict: Boolean(strict),
        toBlock,
        type: 'event'
    };
} //# sourceMappingURL=createEventFilter.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/createPendingTransactionFilter.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createPendingTransactionFilter = createPendingTransactionFilter;
const createFilterRequestScope_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/filters/createFilterRequestScope.js [app-client] (ecmascript)");
async function createPendingTransactionFilter(client) {
    const getRequest = (0, createFilterRequestScope_js_1.createFilterRequestScope)(client, {
        method: 'eth_newPendingTransactionFilter'
    });
    const id = await client.request({
        method: 'eth_newPendingTransactionFilter'
    });
    return {
        id,
        request: getRequest(id),
        type: 'transaction'
    };
} //# sourceMappingURL=createPendingTransactionFilter.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getBalance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBalance = getBalance;
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
async function getBalance(client, { address, blockNumber, blockTag = client.experimental_blockTag ?? 'latest' }) {
    const blockNumberHex = typeof blockNumber === 'bigint' ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
    const balance = await client.request({
        method: 'eth_getBalance',
        params: [
            address,
            blockNumberHex || blockTag
        ]
    });
    return BigInt(balance);
} //# sourceMappingURL=getBalance.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getBlobBaseFee.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBlobBaseFee = getBlobBaseFee;
async function getBlobBaseFee(client) {
    const baseFee = await client.request({
        method: 'eth_blobBaseFee'
    });
    return BigInt(baseFee);
} //# sourceMappingURL=getBlobBaseFee.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getBlockTransactionCount.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBlockTransactionCount = getBlockTransactionCount;
const fromHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
async function getBlockTransactionCount(client, { blockHash, blockNumber, blockTag = 'latest' } = {}) {
    const blockNumberHex = blockNumber !== undefined ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
    let count;
    if (blockHash) {
        count = await client.request({
            method: 'eth_getBlockTransactionCountByHash',
            params: [
                blockHash
            ]
        }, {
            dedupe: true
        });
    } else {
        count = await client.request({
            method: 'eth_getBlockTransactionCountByNumber',
            params: [
                blockNumberHex || blockTag
            ]
        }, {
            dedupe: Boolean(blockNumberHex)
        });
    }
    return (0, fromHex_js_1.hexToNumber)(count);
} //# sourceMappingURL=getBlockTransactionCount.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getCode.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCode = getCode;
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
async function getCode(client, { address, blockNumber, blockTag = 'latest' }) {
    const blockNumberHex = blockNumber !== undefined ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
    const hex = await client.request({
        method: 'eth_getCode',
        params: [
            address,
            blockNumberHex || blockTag
        ]
    }, {
        dedupe: Boolean(blockNumberHex)
    });
    if (hex === '0x') return undefined;
    return hex;
} //# sourceMappingURL=getCode.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/eip712.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Eip712DomainNotFoundError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class Eip712DomainNotFoundError extends base_js_1.BaseError {
    constructor({ address }){
        super(`No EIP-712 domain found on contract "${address}".`, {
            metaMessages: [
                'Ensure that:',
                `- The contract is deployed at the address "${address}".`,
                '- `eip712Domain()` function exists on the contract.',
                '- `eip712Domain()` function matches signature to ERC-5267 specification.'
            ],
            name: 'Eip712DomainNotFoundError'
        });
    }
}
exports.Eip712DomainNotFoundError = Eip712DomainNotFoundError; //# sourceMappingURL=eip712.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getEip712Domain.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEip712Domain = getEip712Domain;
const eip712_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/eip712.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const readContract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/readContract.js [app-client] (ecmascript)");
async function getEip712Domain(client, parameters) {
    const { address, factory, factoryData } = parameters;
    try {
        const [fields, name, version, chainId, verifyingContract, salt, extensions] = await (0, getAction_js_1.getAction)(client, readContract_js_1.readContract, 'readContract')({
            abi,
            address,
            functionName: 'eip712Domain',
            factory,
            factoryData
        });
        return {
            domain: {
                name,
                version,
                chainId: Number(chainId),
                verifyingContract,
                salt
            },
            extensions,
            fields
        };
    } catch (e) {
        const error = e;
        if (error.name === 'ContractFunctionExecutionError' && error.cause.name === 'ContractFunctionZeroDataError') {
            throw new eip712_js_1.Eip712DomainNotFoundError({
                address
            });
        }
        throw error;
    }
}
const abi = [
    {
        inputs: [],
        name: 'eip712Domain',
        outputs: [
            {
                name: 'fields',
                type: 'bytes1'
            },
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'version',
                type: 'string'
            },
            {
                name: 'chainId',
                type: 'uint256'
            },
            {
                name: 'verifyingContract',
                type: 'address'
            },
            {
                name: 'salt',
                type: 'bytes32'
            },
            {
                name: 'extensions',
                type: 'uint256[]'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
]; //# sourceMappingURL=getEip712Domain.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/feeHistory.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatFeeHistory = formatFeeHistory;
function formatFeeHistory(feeHistory) {
    return {
        baseFeePerGas: feeHistory.baseFeePerGas.map((value)=>BigInt(value)),
        gasUsedRatio: feeHistory.gasUsedRatio,
        oldestBlock: BigInt(feeHistory.oldestBlock),
        reward: feeHistory.reward?.map((reward)=>reward.map((value)=>BigInt(value)))
    };
} //# sourceMappingURL=feeHistory.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getFeeHistory.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFeeHistory = getFeeHistory;
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const feeHistory_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/feeHistory.js [app-client] (ecmascript)");
async function getFeeHistory(client, { blockCount, blockNumber, blockTag = 'latest', rewardPercentiles }) {
    const blockNumberHex = typeof blockNumber === 'bigint' ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
    const feeHistory = await client.request({
        method: 'eth_feeHistory',
        params: [
            (0, toHex_js_1.numberToHex)(blockCount),
            blockNumberHex || blockTag,
            rewardPercentiles
        ]
    }, {
        dedupe: Boolean(blockNumberHex)
    });
    return (0, feeHistory_js_1.formatFeeHistory)(feeHistory);
} //# sourceMappingURL=getFeeHistory.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getFilterLogs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFilterLogs = getFilterLogs;
const parseEventLogs_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/parseEventLogs.js [app-client] (ecmascript)");
const log_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/log.js [app-client] (ecmascript)");
async function getFilterLogs(_client, { filter }) {
    const strict = filter.strict ?? false;
    const logs = await filter.request({
        method: 'eth_getFilterLogs',
        params: [
            filter.id
        ]
    });
    const formattedLogs = logs.map((log)=>(0, log_js_1.formatLog)(log));
    if (!filter.abi) return formattedLogs;
    return (0, parseEventLogs_js_1.parseEventLogs)({
        abi: filter.abi,
        logs: formattedLogs,
        strict
    });
} //# sourceMappingURL=getFilterLogs.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodePacked.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodePacked = encodePacked;
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const address_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const pad_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/pad.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const regex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/regex.js [app-client] (ecmascript)");
function encodePacked(types, values) {
    if (types.length !== values.length) throw new abi_js_1.AbiEncodingLengthMismatchError({
        expectedLength: types.length,
        givenLength: values.length
    });
    const data = [];
    for(let i = 0; i < types.length; i++){
        const type = types[i];
        const value = values[i];
        data.push(encode(type, value));
    }
    return (0, concat_js_1.concatHex)(data);
}
function encode(type, value, isArray = false) {
    if (type === 'address') {
        const address = value;
        if (!(0, isAddress_js_1.isAddress)(address)) throw new address_js_1.InvalidAddressError({
            address
        });
        return (0, pad_js_1.pad)(address.toLowerCase(), {
            size: isArray ? 32 : null
        });
    }
    if (type === 'string') return (0, toHex_js_1.stringToHex)(value);
    if (type === 'bytes') return value;
    if (type === 'bool') return (0, pad_js_1.pad)((0, toHex_js_1.boolToHex)(value), {
        size: isArray ? 32 : 1
    });
    const intMatch = type.match(regex_js_1.integerRegex);
    if (intMatch) {
        const [_type, baseType, bits = '256'] = intMatch;
        const size = Number.parseInt(bits, 10) / 8;
        return (0, toHex_js_1.numberToHex)(value, {
            size: isArray ? 32 : size,
            signed: baseType === 'int'
        });
    }
    const bytesMatch = type.match(regex_js_1.bytesRegex);
    if (bytesMatch) {
        const [_type, size] = bytesMatch;
        if (Number.parseInt(size, 10) !== (value.length - 2) / 2) throw new abi_js_1.BytesSizeMismatchError({
            expectedSize: Number.parseInt(size, 10),
            givenSize: (value.length - 2) / 2
        });
        return (0, pad_js_1.pad)(value, {
            dir: 'right',
            size: isArray ? 32 : null
        });
    }
    const arrayMatch = type.match(regex_js_1.arrayRegex);
    if (arrayMatch && Array.isArray(value)) {
        const [_type, childType] = arrayMatch;
        const data = [];
        for(let i = 0; i < value.length; i++){
            data.push(encode(childType, value[i], true));
        }
        if (data.length === 0) return '0x';
        return (0, concat_js_1.concatHex)(data);
    }
    throw new abi_js_1.UnsupportedPackedAbiType(type);
} //# sourceMappingURL=encodePacked.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/isBytes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isBytes = isBytes;
function isBytes(value) {
    if (!value) return false;
    if (typeof value !== 'object') return false;
    if (!('BYTES_PER_ELEMENT' in value)) return false;
    return value.BYTES_PER_ELEMENT === 1 && value.constructor.name === 'Uint8Array';
} //# sourceMappingURL=isBytes.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/getContractAddress.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getContractAddress = getContractAddress;
exports.getCreateAddress = getCreateAddress;
exports.getCreate2Address = getCreate2Address;
const concat_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const isBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/isBytes.js [app-client] (ecmascript)");
const pad_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/pad.js [app-client] (ecmascript)");
const slice_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toRlp_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toRlp.js [app-client] (ecmascript)");
const keccak256_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
const getAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
function getContractAddress(opts) {
    if (opts.opcode === 'CREATE2') return getCreate2Address(opts);
    return getCreateAddress(opts);
}
function getCreateAddress(opts) {
    const from = (0, toBytes_js_1.toBytes)((0, getAddress_js_1.getAddress)(opts.from));
    let nonce = (0, toBytes_js_1.toBytes)(opts.nonce);
    if (nonce[0] === 0) nonce = new Uint8Array([]);
    return (0, getAddress_js_1.getAddress)(`0x${(0, keccak256_js_1.keccak256)((0, toRlp_js_1.toRlp)([
        from,
        nonce
    ], 'bytes')).slice(26)}`);
}
function getCreate2Address(opts) {
    const from = (0, toBytes_js_1.toBytes)((0, getAddress_js_1.getAddress)(opts.from));
    const salt = (0, pad_js_1.pad)((0, isBytes_js_1.isBytes)(opts.salt) ? opts.salt : (0, toBytes_js_1.toBytes)(opts.salt), {
        size: 32
    });
    const bytecodeHash = (()=>{
        if ('bytecodeHash' in opts) {
            if ((0, isBytes_js_1.isBytes)(opts.bytecodeHash)) return opts.bytecodeHash;
            return (0, toBytes_js_1.toBytes)(opts.bytecodeHash);
        }
        return (0, keccak256_js_1.keccak256)(opts.bytecode, 'bytes');
    })();
    return (0, getAddress_js_1.getAddress)((0, slice_js_1.slice)((0, keccak256_js_1.keccak256)((0, concat_js_1.concat)([
        (0, toBytes_js_1.toBytes)('0xff'),
        from,
        salt,
        bytecodeHash
    ])), 12));
} //# sourceMappingURL=getContractAddress.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/assertTransaction.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.assertTransactionEIP7702 = assertTransactionEIP7702;
exports.assertTransactionEIP4844 = assertTransactionEIP4844;
exports.assertTransactionEIP1559 = assertTransactionEIP1559;
exports.assertTransactionEIP2930 = assertTransactionEIP2930;
exports.assertTransactionLegacy = assertTransactionLegacy;
const kzg_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/kzg.js [app-client] (ecmascript)");
const number_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/number.js [app-client] (ecmascript)");
const address_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const blob_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/blob.js [app-client] (ecmascript)");
const chain_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/chain.js [app-client] (ecmascript)");
const node_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/node.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
const slice_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
function assertTransactionEIP7702(transaction) {
    const { authorizationList } = transaction;
    if (authorizationList) {
        for (const authorization of authorizationList){
            const { chainId } = authorization;
            const address = authorization.address;
            if (!(0, isAddress_js_1.isAddress)(address)) throw new address_js_1.InvalidAddressError({
                address
            });
            if (chainId < 0) throw new chain_js_1.InvalidChainIdError({
                chainId
            });
        }
    }
    assertTransactionEIP1559(transaction);
}
function assertTransactionEIP4844(transaction) {
    const { blobVersionedHashes } = transaction;
    if (blobVersionedHashes) {
        if (blobVersionedHashes.length === 0) throw new blob_js_1.EmptyBlobError();
        for (const hash of blobVersionedHashes){
            const size_ = (0, size_js_1.size)(hash);
            const version = (0, fromHex_js_1.hexToNumber)((0, slice_js_1.slice)(hash, 0, 1));
            if (size_ !== 32) throw new blob_js_1.InvalidVersionedHashSizeError({
                hash,
                size: size_
            });
            if (version !== kzg_js_1.versionedHashVersionKzg) throw new blob_js_1.InvalidVersionedHashVersionError({
                hash,
                version
            });
        }
    }
    assertTransactionEIP1559(transaction);
}
function assertTransactionEIP1559(transaction) {
    const { chainId, maxPriorityFeePerGas, maxFeePerGas, to } = transaction;
    if (chainId <= 0) throw new chain_js_1.InvalidChainIdError({
        chainId
    });
    if (to && !(0, isAddress_js_1.isAddress)(to)) throw new address_js_1.InvalidAddressError({
        address: to
    });
    if (maxFeePerGas && maxFeePerGas > number_js_1.maxUint256) throw new node_js_1.FeeCapTooHighError({
        maxFeePerGas
    });
    if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas) throw new node_js_1.TipAboveFeeCapError({
        maxFeePerGas,
        maxPriorityFeePerGas
    });
}
function assertTransactionEIP2930(transaction) {
    const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to } = transaction;
    if (chainId <= 0) throw new chain_js_1.InvalidChainIdError({
        chainId
    });
    if (to && !(0, isAddress_js_1.isAddress)(to)) throw new address_js_1.InvalidAddressError({
        address: to
    });
    if (maxPriorityFeePerGas || maxFeePerGas) throw new base_js_1.BaseError('`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.');
    if (gasPrice && gasPrice > number_js_1.maxUint256) throw new node_js_1.FeeCapTooHighError({
        maxFeePerGas: gasPrice
    });
}
function assertTransactionLegacy(transaction) {
    const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to } = transaction;
    if (to && !(0, isAddress_js_1.isAddress)(to)) throw new address_js_1.InvalidAddressError({
        address: to
    });
    if (typeof chainId !== 'undefined' && chainId <= 0) throw new chain_js_1.InvalidChainIdError({
        chainId
    });
    if (maxPriorityFeePerGas || maxFeePerGas) throw new base_js_1.BaseError('`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.');
    if (gasPrice && gasPrice > number_js_1.maxUint256) throw new node_js_1.FeeCapTooHighError({
        maxFeePerGas: gasPrice
    });
} //# sourceMappingURL=assertTransaction.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/serializeAccessList.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeAccessList = serializeAccessList;
const address_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
function serializeAccessList(accessList) {
    if (!accessList || accessList.length === 0) return [];
    const serializedAccessList = [];
    for(let i = 0; i < accessList.length; i++){
        const { address, storageKeys } = accessList[i];
        for(let j = 0; j < storageKeys.length; j++){
            if (storageKeys[j].length - 2 !== 64) {
                throw new transaction_js_1.InvalidStorageKeySizeError({
                    storageKey: storageKeys[j]
                });
            }
        }
        if (!(0, isAddress_js_1.isAddress)(address, {
            strict: false
        })) {
            throw new address_js_1.InvalidAddressError({
                address
            });
        }
        serializedAccessList.push([
            address,
            storageKeys
        ]);
    }
    return serializedAccessList;
} //# sourceMappingURL=serializeAccessList.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/serializeTransaction.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeTransaction = serializeTransaction;
exports.toYParitySignatureArray = toYParitySignatureArray;
const transaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
const serializeAuthorizationList_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/authorization/serializeAuthorizationList.js [app-client] (ecmascript)");
const blobsToCommitments_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/blobsToCommitments.js [app-client] (ecmascript)");
const blobsToProofs_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/blobsToProofs.js [app-client] (ecmascript)");
const commitmentsToVersionedHashes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/commitmentsToVersionedHashes.js [app-client] (ecmascript)");
const toBlobSidecars_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/toBlobSidecars.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const trim_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/trim.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const toRlp_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toRlp.js [app-client] (ecmascript)");
const assertTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/assertTransaction.js [app-client] (ecmascript)");
const getTransactionType_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/getTransactionType.js [app-client] (ecmascript)");
const serializeAccessList_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/serializeAccessList.js [app-client] (ecmascript)");
function serializeTransaction(transaction, signature) {
    const type = (0, getTransactionType_js_1.getTransactionType)(transaction);
    if (type === 'eip1559') return serializeTransactionEIP1559(transaction, signature);
    if (type === 'eip2930') return serializeTransactionEIP2930(transaction, signature);
    if (type === 'eip4844') return serializeTransactionEIP4844(transaction, signature);
    if (type === 'eip7702') return serializeTransactionEIP7702(transaction, signature);
    return serializeTransactionLegacy(transaction, signature);
}
function serializeTransactionEIP7702(transaction, signature) {
    const { authorizationList, chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
    (0, assertTransaction_js_1.assertTransactionEIP7702)(transaction);
    const serializedAccessList = (0, serializeAccessList_js_1.serializeAccessList)(accessList);
    const serializedAuthorizationList = (0, serializeAuthorizationList_js_1.serializeAuthorizationList)(authorizationList);
    return (0, concat_js_1.concatHex)([
        '0x04',
        (0, toRlp_js_1.toRlp)([
            (0, toHex_js_1.numberToHex)(chainId),
            nonce ? (0, toHex_js_1.numberToHex)(nonce) : '0x',
            maxPriorityFeePerGas ? (0, toHex_js_1.numberToHex)(maxPriorityFeePerGas) : '0x',
            maxFeePerGas ? (0, toHex_js_1.numberToHex)(maxFeePerGas) : '0x',
            gas ? (0, toHex_js_1.numberToHex)(gas) : '0x',
            to ?? '0x',
            value ? (0, toHex_js_1.numberToHex)(value) : '0x',
            data ?? '0x',
            serializedAccessList,
            serializedAuthorizationList,
            ...toYParitySignatureArray(transaction, signature)
        ])
    ]);
}
function serializeTransactionEIP4844(transaction, signature) {
    const { chainId, gas, nonce, to, value, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
    (0, assertTransaction_js_1.assertTransactionEIP4844)(transaction);
    let blobVersionedHashes = transaction.blobVersionedHashes;
    let sidecars = transaction.sidecars;
    if (transaction.blobs && (typeof blobVersionedHashes === 'undefined' || typeof sidecars === 'undefined')) {
        const blobs = typeof transaction.blobs[0] === 'string' ? transaction.blobs : transaction.blobs.map((x)=>(0, toHex_js_1.bytesToHex)(x));
        const kzg = transaction.kzg;
        const commitments = (0, blobsToCommitments_js_1.blobsToCommitments)({
            blobs,
            kzg
        });
        if (typeof blobVersionedHashes === 'undefined') blobVersionedHashes = (0, commitmentsToVersionedHashes_js_1.commitmentsToVersionedHashes)({
            commitments
        });
        if (typeof sidecars === 'undefined') {
            const proofs = (0, blobsToProofs_js_1.blobsToProofs)({
                blobs,
                commitments,
                kzg
            });
            sidecars = (0, toBlobSidecars_js_1.toBlobSidecars)({
                blobs,
                commitments,
                proofs
            });
        }
    }
    const serializedAccessList = (0, serializeAccessList_js_1.serializeAccessList)(accessList);
    const serializedTransaction = [
        (0, toHex_js_1.numberToHex)(chainId),
        nonce ? (0, toHex_js_1.numberToHex)(nonce) : '0x',
        maxPriorityFeePerGas ? (0, toHex_js_1.numberToHex)(maxPriorityFeePerGas) : '0x',
        maxFeePerGas ? (0, toHex_js_1.numberToHex)(maxFeePerGas) : '0x',
        gas ? (0, toHex_js_1.numberToHex)(gas) : '0x',
        to ?? '0x',
        value ? (0, toHex_js_1.numberToHex)(value) : '0x',
        data ?? '0x',
        serializedAccessList,
        maxFeePerBlobGas ? (0, toHex_js_1.numberToHex)(maxFeePerBlobGas) : '0x',
        blobVersionedHashes ?? [],
        ...toYParitySignatureArray(transaction, signature)
    ];
    const blobs = [];
    const commitments = [];
    const proofs = [];
    if (sidecars) for(let i = 0; i < sidecars.length; i++){
        const { blob, commitment, proof } = sidecars[i];
        blobs.push(blob);
        commitments.push(commitment);
        proofs.push(proof);
    }
    return (0, concat_js_1.concatHex)([
        '0x03',
        sidecars ? (0, toRlp_js_1.toRlp)([
            serializedTransaction,
            blobs,
            commitments,
            proofs
        ]) : (0, toRlp_js_1.toRlp)(serializedTransaction)
    ]);
}
function serializeTransactionEIP1559(transaction, signature) {
    const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
    (0, assertTransaction_js_1.assertTransactionEIP1559)(transaction);
    const serializedAccessList = (0, serializeAccessList_js_1.serializeAccessList)(accessList);
    const serializedTransaction = [
        (0, toHex_js_1.numberToHex)(chainId),
        nonce ? (0, toHex_js_1.numberToHex)(nonce) : '0x',
        maxPriorityFeePerGas ? (0, toHex_js_1.numberToHex)(maxPriorityFeePerGas) : '0x',
        maxFeePerGas ? (0, toHex_js_1.numberToHex)(maxFeePerGas) : '0x',
        gas ? (0, toHex_js_1.numberToHex)(gas) : '0x',
        to ?? '0x',
        value ? (0, toHex_js_1.numberToHex)(value) : '0x',
        data ?? '0x',
        serializedAccessList,
        ...toYParitySignatureArray(transaction, signature)
    ];
    return (0, concat_js_1.concatHex)([
        '0x02',
        (0, toRlp_js_1.toRlp)(serializedTransaction)
    ]);
}
function serializeTransactionEIP2930(transaction, signature) {
    const { chainId, gas, data, nonce, to, value, accessList, gasPrice } = transaction;
    (0, assertTransaction_js_1.assertTransactionEIP2930)(transaction);
    const serializedAccessList = (0, serializeAccessList_js_1.serializeAccessList)(accessList);
    const serializedTransaction = [
        (0, toHex_js_1.numberToHex)(chainId),
        nonce ? (0, toHex_js_1.numberToHex)(nonce) : '0x',
        gasPrice ? (0, toHex_js_1.numberToHex)(gasPrice) : '0x',
        gas ? (0, toHex_js_1.numberToHex)(gas) : '0x',
        to ?? '0x',
        value ? (0, toHex_js_1.numberToHex)(value) : '0x',
        data ?? '0x',
        serializedAccessList,
        ...toYParitySignatureArray(transaction, signature)
    ];
    return (0, concat_js_1.concatHex)([
        '0x01',
        (0, toRlp_js_1.toRlp)(serializedTransaction)
    ]);
}
function serializeTransactionLegacy(transaction, signature) {
    const { chainId = 0, gas, data, nonce, to, value, gasPrice } = transaction;
    (0, assertTransaction_js_1.assertTransactionLegacy)(transaction);
    let serializedTransaction = [
        nonce ? (0, toHex_js_1.numberToHex)(nonce) : '0x',
        gasPrice ? (0, toHex_js_1.numberToHex)(gasPrice) : '0x',
        gas ? (0, toHex_js_1.numberToHex)(gas) : '0x',
        to ?? '0x',
        value ? (0, toHex_js_1.numberToHex)(value) : '0x',
        data ?? '0x'
    ];
    if (signature) {
        const v = (()=>{
            if (signature.v >= 35n) {
                const inferredChainId = (signature.v - 35n) / 2n;
                if (inferredChainId > 0) return signature.v;
                return 27n + (signature.v === 35n ? 0n : 1n);
            }
            if (chainId > 0) return BigInt(chainId * 2) + BigInt(35n + signature.v - 27n);
            const v = 27n + (signature.v === 27n ? 0n : 1n);
            if (signature.v !== v) throw new transaction_js_1.InvalidLegacyVError({
                v: signature.v
            });
            return v;
        })();
        const r = (0, trim_js_1.trim)(signature.r);
        const s = (0, trim_js_1.trim)(signature.s);
        serializedTransaction = [
            ...serializedTransaction,
            (0, toHex_js_1.numberToHex)(v),
            r === '0x00' ? '0x' : r,
            s === '0x00' ? '0x' : s
        ];
    } else if (chainId > 0) {
        serializedTransaction = [
            ...serializedTransaction,
            (0, toHex_js_1.numberToHex)(chainId),
            '0x',
            '0x'
        ];
    }
    return (0, toRlp_js_1.toRlp)(serializedTransaction);
}
function toYParitySignatureArray(transaction, signature_) {
    const signature = signature_ ?? transaction;
    const { v, yParity } = signature;
    if (typeof signature.r === 'undefined') return [];
    if (typeof signature.s === 'undefined') return [];
    if (typeof v === 'undefined' && typeof yParity === 'undefined') return [];
    const r = (0, trim_js_1.trim)(signature.r);
    const s = (0, trim_js_1.trim)(signature.s);
    const yParity_ = (()=>{
        if (typeof yParity === 'number') return yParity ? (0, toHex_js_1.numberToHex)(1) : '0x';
        if (v === 0n) return '0x';
        if (v === 1n) return (0, toHex_js_1.numberToHex)(1);
        return v === 27n ? '0x' : (0, toHex_js_1.numberToHex)(1);
    })();
    return [
        yParity_,
        r === '0x00' ? '0x' : r,
        s === '0x00' ? '0x' : s
    ];
} //# sourceMappingURL=serializeTransaction.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/authorization/serializeAuthorizationList.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeAuthorizationList = serializeAuthorizationList;
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const serializeTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/serializeTransaction.js [app-client] (ecmascript)");
function serializeAuthorizationList(authorizationList) {
    if (!authorizationList || authorizationList.length === 0) return [];
    const serializedAuthorizationList = [];
    for (const authorization of authorizationList){
        const { chainId, nonce, ...signature } = authorization;
        const contractAddress = authorization.address;
        serializedAuthorizationList.push([
            chainId ? (0, toHex_js_1.toHex)(chainId) : '0x',
            contractAddress,
            nonce ? (0, toHex_js_1.toHex)(nonce) : '0x',
            ...(0, serializeTransaction_js_1.toYParitySignatureArray)({}, signature)
        ]);
    }
    return serializedAuthorizationList;
} //# sourceMappingURL=serializeAuthorizationList.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/authorization/verifyAuthorization.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyAuthorization = verifyAuthorization;
const getAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
const isAddressEqual_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-client] (ecmascript)");
const recoverAuthorizationAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/authorization/recoverAuthorizationAddress.js [app-client] (ecmascript)");
async function verifyAuthorization({ address, authorization, signature }) {
    return (0, isAddressEqual_js_1.isAddressEqual)((0, getAddress_js_1.getAddress)(address), await (0, recoverAuthorizationAddress_js_1.recoverAuthorizationAddress)({
        authorization,
        signature
    }));
} //# sourceMappingURL=verifyAuthorization.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/promise/withDedupe.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.promiseCache = void 0;
exports.withDedupe = withDedupe;
const lru_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/lru.js [app-client] (ecmascript)");
exports.promiseCache = new lru_js_1.LruMap(8192);
function withDedupe(fn, { enabled = true, id }) {
    if (!enabled || !id) return fn();
    if (exports.promiseCache.get(id)) return exports.promiseCache.get(id);
    const promise = fn().finally(()=>exports.promiseCache.delete(id));
    exports.promiseCache.set(id, promise);
    return promise;
} //# sourceMappingURL=withDedupe.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/buildRequest.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buildRequest = buildRequest;
exports.shouldRetry = shouldRetry;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const request_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)");
const rpc_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/rpc.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const withDedupe_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/promise/withDedupe.js [app-client] (ecmascript)");
const withRetry_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/promise/withRetry.js [app-client] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
function buildRequest(request, options = {}) {
    return async (args, overrideOptions = {})=>{
        const { dedupe = false, methods, retryDelay = 150, retryCount = 3, uid } = {
            ...options,
            ...overrideOptions
        };
        const { method } = args;
        if (methods?.exclude?.includes(method)) throw new rpc_js_1.MethodNotSupportedRpcError(new Error('method not supported'), {
            method
        });
        if (methods?.include && !methods.include.includes(method)) throw new rpc_js_1.MethodNotSupportedRpcError(new Error('method not supported'), {
            method
        });
        const requestId = dedupe ? (0, toHex_js_1.stringToHex)(`${uid}.${(0, stringify_js_1.stringify)(args)}`) : undefined;
        return (0, withDedupe_js_1.withDedupe)(()=>(0, withRetry_js_1.withRetry)(async ()=>{
                try {
                    return await request(args);
                } catch (err_) {
                    const err = err_;
                    switch(err.code){
                        case rpc_js_1.ParseRpcError.code:
                            throw new rpc_js_1.ParseRpcError(err);
                        case rpc_js_1.InvalidRequestRpcError.code:
                            throw new rpc_js_1.InvalidRequestRpcError(err);
                        case rpc_js_1.MethodNotFoundRpcError.code:
                            throw new rpc_js_1.MethodNotFoundRpcError(err, {
                                method: args.method
                            });
                        case rpc_js_1.InvalidParamsRpcError.code:
                            throw new rpc_js_1.InvalidParamsRpcError(err);
                        case rpc_js_1.InternalRpcError.code:
                            throw new rpc_js_1.InternalRpcError(err);
                        case rpc_js_1.InvalidInputRpcError.code:
                            throw new rpc_js_1.InvalidInputRpcError(err);
                        case rpc_js_1.ResourceNotFoundRpcError.code:
                            throw new rpc_js_1.ResourceNotFoundRpcError(err);
                        case rpc_js_1.ResourceUnavailableRpcError.code:
                            throw new rpc_js_1.ResourceUnavailableRpcError(err);
                        case rpc_js_1.TransactionRejectedRpcError.code:
                            throw new rpc_js_1.TransactionRejectedRpcError(err);
                        case rpc_js_1.MethodNotSupportedRpcError.code:
                            throw new rpc_js_1.MethodNotSupportedRpcError(err, {
                                method: args.method
                            });
                        case rpc_js_1.LimitExceededRpcError.code:
                            throw new rpc_js_1.LimitExceededRpcError(err);
                        case rpc_js_1.JsonRpcVersionUnsupportedError.code:
                            throw new rpc_js_1.JsonRpcVersionUnsupportedError(err);
                        case rpc_js_1.UserRejectedRequestError.code:
                            throw new rpc_js_1.UserRejectedRequestError(err);
                        case rpc_js_1.UnauthorizedProviderError.code:
                            throw new rpc_js_1.UnauthorizedProviderError(err);
                        case rpc_js_1.UnsupportedProviderMethodError.code:
                            throw new rpc_js_1.UnsupportedProviderMethodError(err);
                        case rpc_js_1.ProviderDisconnectedError.code:
                            throw new rpc_js_1.ProviderDisconnectedError(err);
                        case rpc_js_1.ChainDisconnectedError.code:
                            throw new rpc_js_1.ChainDisconnectedError(err);
                        case rpc_js_1.SwitchChainError.code:
                            throw new rpc_js_1.SwitchChainError(err);
                        case rpc_js_1.UnsupportedNonOptionalCapabilityError.code:
                            throw new rpc_js_1.UnsupportedNonOptionalCapabilityError(err);
                        case rpc_js_1.UnsupportedChainIdError.code:
                            throw new rpc_js_1.UnsupportedChainIdError(err);
                        case rpc_js_1.DuplicateIdError.code:
                            throw new rpc_js_1.DuplicateIdError(err);
                        case rpc_js_1.UnknownBundleIdError.code:
                            throw new rpc_js_1.UnknownBundleIdError(err);
                        case rpc_js_1.BundleTooLargeError.code:
                            throw new rpc_js_1.BundleTooLargeError(err);
                        case rpc_js_1.AtomicReadyWalletRejectedUpgradeError.code:
                            throw new rpc_js_1.AtomicReadyWalletRejectedUpgradeError(err);
                        case rpc_js_1.AtomicityNotSupportedError.code:
                            throw new rpc_js_1.AtomicityNotSupportedError(err);
                        case 5000:
                            throw new rpc_js_1.UserRejectedRequestError(err);
                        default:
                            if (err_ instanceof base_js_1.BaseError) throw err_;
                            throw new rpc_js_1.UnknownRpcError(err);
                    }
                }
            }, {
                delay: ({ count, error })=>{
                    if (error && error instanceof request_js_1.HttpRequestError) {
                        const retryAfter = error?.headers?.get('Retry-After');
                        if (retryAfter?.match(/\d/)) return Number.parseInt(retryAfter, 10) * 1000;
                    }
                    return ~~(1 << count) * retryDelay;
                },
                retryCount,
                shouldRetry: ({ error })=>shouldRetry(error)
            }), {
            enabled: dedupe,
            id: requestId
        });
    };
}
function shouldRetry(error) {
    if ('code' in error && typeof error.code === 'number') {
        if (error.code === -1) return true;
        if (error.code === rpc_js_1.LimitExceededRpcError.code) return true;
        if (error.code === rpc_js_1.InternalRpcError.code) return true;
        return false;
    }
    if (error instanceof request_js_1.HttpRequestError && error.status) {
        if (error.status === 403) return true;
        if (error.status === 408) return true;
        if (error.status === 413) return true;
        if (error.status === 429) return true;
        if (error.status === 500) return true;
        if (error.status === 502) return true;
        if (error.status === 503) return true;
        if (error.status === 504) return true;
        return false;
    }
    return true;
} //# sourceMappingURL=buildRequest.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineChain = defineChain;
function defineChain(chain) {
    return {
        formatters: undefined,
        fees: undefined,
        serializers: undefined,
        ...chain
    };
} //# sourceMappingURL=defineChain.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/chain/extractChain.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extractChain = extractChain;
function extractChain({ chains, id }) {
    return chains.find((chain)=>chain.id === id);
} //# sourceMappingURL=extractChain.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromRlp.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromRlp = fromRlp;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const encoding_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/encoding.js [app-client] (ecmascript)");
const cursor_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/cursor.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function fromRlp(value, to = 'hex') {
    const bytes = (()=>{
        if (typeof value === 'string') {
            if (value.length > 3 && value.length % 2 !== 0) throw new encoding_js_1.InvalidHexValueError(value);
            return (0, toBytes_js_1.hexToBytes)(value);
        }
        return value;
    })();
    const cursor = (0, cursor_js_1.createCursor)(bytes, {
        recursiveReadLimit: Number.POSITIVE_INFINITY
    });
    const result = fromRlpCursor(cursor, to);
    return result;
}
function fromRlpCursor(cursor, to = 'hex') {
    if (cursor.bytes.length === 0) return to === 'hex' ? (0, toHex_js_1.bytesToHex)(cursor.bytes) : cursor.bytes;
    const prefix = cursor.readByte();
    if (prefix < 0x80) cursor.decrementPosition(1);
    if (prefix < 0xc0) {
        const length = readLength(cursor, prefix, 0x80);
        const bytes = cursor.readBytes(length);
        return to === 'hex' ? (0, toHex_js_1.bytesToHex)(bytes) : bytes;
    }
    const length = readLength(cursor, prefix, 0xc0);
    return readList(cursor, length, to);
}
function readLength(cursor, prefix, offset) {
    if (offset === 0x80 && prefix < 0x80) return 1;
    if (prefix <= offset + 55) return prefix - offset;
    if (prefix === offset + 55 + 1) return cursor.readUint8();
    if (prefix === offset + 55 + 2) return cursor.readUint16();
    if (prefix === offset + 55 + 3) return cursor.readUint24();
    if (prefix === offset + 55 + 4) return cursor.readUint32();
    throw new base_js_1.BaseError('Invalid RLP prefix');
}
function readList(cursor, length, to) {
    const position = cursor.position;
    const value = [];
    while(cursor.position - position < length)value.push(fromRlpCursor(cursor, to));
    return value;
} //# sourceMappingURL=fromRlp.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/isHash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isHash = isHash;
const isHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
function isHash(hash) {
    return (0, isHex_js_1.isHex)(hash) && (0, size_js_1.size)(hash) === 32;
} //# sourceMappingURL=isHash.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/ripemd160.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ripemd160 = ripemd160;
const ripemd160_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/node_modules/@noble/hashes/ripemd160.js [app-client] (ecmascript)");
const isHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function ripemd160(value, to_) {
    const to = to_ || 'hex';
    const bytes = (0, ripemd160_1.ripemd160)((0, isHex_js_1.isHex)(value, {
        strict: false
    }) ? (0, toBytes_js_1.toBytes)(value) : value);
    if (to === 'bytes') return bytes;
    return (0, toHex_js_1.toHex)(bytes);
} //# sourceMappingURL=ripemd160.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toEventHash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toEventHash = void 0;
var toSignatureHash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toSignatureHash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toEventHash", {
    enumerable: true,
    get: function() {
        return toSignatureHash_js_1.toSignatureHash;
    }
}); //# sourceMappingURL=toEventHash.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toEventSignature.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toEventSignature = void 0;
var toSignature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toEventSignature", {
    enumerable: true,
    get: function() {
        return toSignature_js_1.toSignature;
    }
}); //# sourceMappingURL=toEventSignature.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toFunctionHash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toFunctionHash = void 0;
var toSignatureHash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toSignatureHash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toFunctionHash", {
    enumerable: true,
    get: function() {
        return toSignatureHash_js_1.toSignatureHash;
    }
}); //# sourceMappingURL=toFunctionHash.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toFunctionSignature.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toFunctionSignature = void 0;
var toSignature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toFunctionSignature", {
    enumerable: true,
    get: function() {
        return toSignature_js_1.toSignature;
    }
}); //# sourceMappingURL=toFunctionSignature.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/nonceManager.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nonceManager = void 0;
exports.createNonceManager = createNonceManager;
exports.jsonRpc = jsonRpc;
const getTransactionCount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getTransactionCount.js [app-client] (ecmascript)");
const lru_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/lru.js [app-client] (ecmascript)");
function createNonceManager(parameters) {
    const { source } = parameters;
    const deltaMap = new Map();
    const nonceMap = new lru_js_1.LruMap(8192);
    const promiseMap = new Map();
    const getKey = ({ address, chainId })=>`${address}.${chainId}`;
    return {
        async consume ({ address, chainId, client }) {
            const key = getKey({
                address,
                chainId
            });
            const promise = this.get({
                address,
                chainId,
                client
            });
            this.increment({
                address,
                chainId
            });
            const nonce = await promise;
            await source.set({
                address,
                chainId
            }, nonce);
            nonceMap.set(key, nonce);
            return nonce;
        },
        async increment ({ address, chainId }) {
            const key = getKey({
                address,
                chainId
            });
            const delta = deltaMap.get(key) ?? 0;
            deltaMap.set(key, delta + 1);
        },
        async get ({ address, chainId, client }) {
            const key = getKey({
                address,
                chainId
            });
            let promise = promiseMap.get(key);
            if (!promise) {
                promise = (async ()=>{
                    try {
                        const nonce = await source.get({
                            address,
                            chainId,
                            client
                        });
                        const previousNonce = nonceMap.get(key) ?? 0;
                        if (previousNonce > 0 && nonce <= previousNonce) return previousNonce + 1;
                        nonceMap.delete(key);
                        return nonce;
                    } finally{
                        this.reset({
                            address,
                            chainId
                        });
                    }
                })();
                promiseMap.set(key, promise);
            }
            const delta = deltaMap.get(key) ?? 0;
            return delta + await promise;
        },
        reset ({ address, chainId }) {
            const key = getKey({
                address,
                chainId
            });
            deltaMap.delete(key);
            promiseMap.delete(key);
        }
    };
}
function jsonRpc() {
    return {
        async get (parameters) {
            const { address, client } = parameters;
            return (0, getTransactionCount_js_1.getTransactionCount)(client, {
                address,
                blockTag: 'pending'
            });
        },
        set () {}
    };
}
exports.nonceManager = createNonceManager({
    source: jsonRpc()
}); //# sourceMappingURL=nonceManager.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/promise/withTimeout.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.withTimeout = withTimeout;
function withTimeout(fn, { errorInstance = new Error('timed out'), timeout, signal }) {
    return new Promise((resolve, reject)=>{
        ;
        (async ()=>{
            let timeoutId;
            try {
                const controller = new AbortController();
                if (timeout > 0) {
                    timeoutId = setTimeout(()=>{
                        if (signal) {
                            controller.abort();
                        } else {
                            reject(errorInstance);
                        }
                    }, timeout);
                }
                resolve(await fn({
                    signal: controller?.signal || null
                }));
            } catch (err) {
                if (err?.name === 'AbortError') reject(errorInstance);
                reject(err);
            } finally{
                clearTimeout(timeoutId);
            }
        })();
    });
} //# sourceMappingURL=withTimeout.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/rpc/id.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.idCache = void 0;
function createIdStore() {
    return {
        current: 0,
        take () {
            return this.current++;
        },
        reset () {
            this.current = 0;
        }
    };
}
exports.idCache = createIdStore(); //# sourceMappingURL=id.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/rpc/http.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getHttpRpcClient = getHttpRpcClient;
const request_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)");
const withTimeout_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/promise/withTimeout.js [app-client] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
const id_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/rpc/id.js [app-client] (ecmascript)");
function getHttpRpcClient(url, options = {}) {
    return {
        async request (params) {
            const { body, fetchFn = options.fetchFn ?? fetch, onRequest = options.onRequest, onResponse = options.onResponse, timeout = options.timeout ?? 10_000 } = params;
            const fetchOptions = {
                ...options.fetchOptions ?? {},
                ...params.fetchOptions ?? {}
            };
            const { headers, method, signal: signal_ } = fetchOptions;
            try {
                const response = await (0, withTimeout_js_1.withTimeout)(async ({ signal })=>{
                    const init = {
                        ...fetchOptions,
                        body: Array.isArray(body) ? (0, stringify_js_1.stringify)(body.map((body)=>({
                                jsonrpc: '2.0',
                                id: body.id ?? id_js_1.idCache.take(),
                                ...body
                            }))) : (0, stringify_js_1.stringify)({
                            jsonrpc: '2.0',
                            id: body.id ?? id_js_1.idCache.take(),
                            ...body
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                            ...headers
                        },
                        method: method || 'POST',
                        signal: signal_ || (timeout > 0 ? signal : null)
                    };
                    const request = new Request(url, init);
                    const args = await onRequest?.(request, init) ?? {
                        ...init,
                        url
                    };
                    const response = await fetchFn(args.url ?? url, args);
                    return response;
                }, {
                    errorInstance: new request_js_1.TimeoutError({
                        body,
                        url
                    }),
                    timeout,
                    signal: true
                });
                if (onResponse) await onResponse(response);
                let data;
                if (response.headers.get('Content-Type')?.startsWith('application/json')) data = await response.json();
                else {
                    data = await response.text();
                    try {
                        data = JSON.parse(data || '{}');
                    } catch (err) {
                        if (response.ok) throw err;
                        data = {
                            error: data
                        };
                    }
                }
                if (!response.ok) {
                    throw new request_js_1.HttpRequestError({
                        body,
                        details: (0, stringify_js_1.stringify)(data.error) || response.statusText,
                        headers: response.headers,
                        status: response.status,
                        url
                    });
                }
                return data;
            } catch (err) {
                if (err instanceof request_js_1.HttpRequestError) throw err;
                if (err instanceof request_js_1.TimeoutError) throw err;
                throw new request_js_1.HttpRequestError({
                    body,
                    cause: err,
                    url
                });
            }
        }
    };
} //# sourceMappingURL=http.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/rpc/socket.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.socketClientCache = void 0;
exports.getSocketRpcClient = getSocketRpcClient;
const request_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)");
const createBatchScheduler_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/promise/createBatchScheduler.js [app-client] (ecmascript)");
const withTimeout_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/promise/withTimeout.js [app-client] (ecmascript)");
const id_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/rpc/id.js [app-client] (ecmascript)");
exports.socketClientCache = new Map();
async function getSocketRpcClient(parameters) {
    const { getSocket, keepAlive = true, key = 'socket', reconnect = true, url } = parameters;
    const { interval: keepAliveInterval = 30_000 } = typeof keepAlive === 'object' ? keepAlive : {};
    const { attempts = 5, delay = 2_000 } = typeof reconnect === 'object' ? reconnect : {};
    const id = JSON.stringify({
        keepAlive,
        key,
        url,
        reconnect
    });
    let socketClient = exports.socketClientCache.get(id);
    if (socketClient) return socketClient;
    let reconnectCount = 0;
    const { schedule } = (0, createBatchScheduler_js_1.createBatchScheduler)({
        id,
        fn: async ()=>{
            const requests = new Map();
            const subscriptions = new Map();
            let error;
            let socket;
            let keepAliveTimer;
            let reconnectInProgress = false;
            function attemptReconnect() {
                if (reconnect && reconnectCount < attempts) {
                    if (reconnectInProgress) return;
                    reconnectInProgress = true;
                    reconnectCount++;
                    socket?.close();
                    setTimeout(async ()=>{
                        await setup().catch(console.error);
                        reconnectInProgress = false;
                    }, delay);
                } else {
                    requests.clear();
                    subscriptions.clear();
                }
            }
            async function setup() {
                const result = await getSocket({
                    onClose () {
                        for (const request of requests.values())request.onError?.(new request_js_1.SocketClosedError({
                            url
                        }));
                        for (const subscription of subscriptions.values())subscription.onError?.(new request_js_1.SocketClosedError({
                            url
                        }));
                        attemptReconnect();
                    },
                    onError (error_) {
                        error = error_;
                        for (const request of requests.values())request.onError?.(error);
                        for (const subscription of subscriptions.values())subscription.onError?.(error);
                        attemptReconnect();
                    },
                    onOpen () {
                        error = undefined;
                        reconnectCount = 0;
                    },
                    onResponse (data) {
                        const isSubscription = data.method === 'eth_subscription';
                        const id = isSubscription ? data.params.subscription : data.id;
                        const cache = isSubscription ? subscriptions : requests;
                        const callback = cache.get(id);
                        if (callback) callback.onResponse(data);
                        if (!isSubscription) cache.delete(id);
                    }
                });
                socket = result;
                if (keepAlive) {
                    if (keepAliveTimer) clearInterval(keepAliveTimer);
                    keepAliveTimer = setInterval(()=>socket.ping?.(), keepAliveInterval);
                }
                if (reconnect && subscriptions.size > 0) {
                    const subscriptionEntries = subscriptions.entries();
                    for (const [key, { onResponse, body, onError }] of subscriptionEntries){
                        if (!body) continue;
                        subscriptions.delete(key);
                        socketClient?.request({
                            body,
                            onResponse,
                            onError
                        });
                    }
                }
                return result;
            }
            await setup();
            error = undefined;
            socketClient = {
                close () {
                    keepAliveTimer && clearInterval(keepAliveTimer);
                    socket.close();
                    exports.socketClientCache.delete(id);
                },
                get socket () {
                    return socket;
                },
                request ({ body, onError, onResponse }) {
                    if (error && onError) onError(error);
                    const id = body.id ?? id_js_1.idCache.take();
                    const callback = (response)=>{
                        if (typeof response.id === 'number' && id !== response.id) return;
                        if (body.method === 'eth_subscribe' && typeof response.result === 'string') subscriptions.set(response.result, {
                            onResponse: callback,
                            onError,
                            body
                        });
                        if (body.method === 'eth_unsubscribe') subscriptions.delete(body.params?.[0]);
                        onResponse(response);
                    };
                    requests.set(id, {
                        onResponse: callback,
                        onError
                    });
                    try {
                        socket.request({
                            body: {
                                jsonrpc: '2.0',
                                id,
                                ...body
                            }
                        });
                    } catch (error) {
                        onError?.(error);
                    }
                },
                requestAsync ({ body, timeout = 10_000 }) {
                    return (0, withTimeout_js_1.withTimeout)(()=>new Promise((onResponse, onError)=>this.request({
                                body,
                                onError,
                                onResponse
                            })), {
                        errorInstance: new request_js_1.TimeoutError({
                            body,
                            url
                        }),
                        timeout
                    });
                },
                requests,
                subscriptions,
                url
            };
            exports.socketClientCache.set(id, socketClient);
            return [
                socketClient
            ];
        }
    });
    const [_, [socketClient_]] = await schedule();
    return socketClient_;
} //# sourceMappingURL=socket.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/rpc/webSocket.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getWebSocketRpcClient = getWebSocketRpcClient;
const request_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)");
const socket_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/rpc/socket.js [app-client] (ecmascript)");
async function getWebSocketRpcClient(url, options = {}) {
    const { keepAlive, reconnect } = options;
    return (0, socket_js_1.getSocketRpcClient)({
        async getSocket ({ onClose, onError, onOpen, onResponse }) {
            const WebSocket = await Promise.resolve().then(()=>__turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/isows/_esm/native.js [app-client] (ecmascript)")).then((module)=>module.WebSocket);
            const socket = new WebSocket(url);
            function onClose_() {
                socket.removeEventListener('close', onClose_);
                socket.removeEventListener('message', onMessage);
                socket.removeEventListener('error', onError);
                socket.removeEventListener('open', onOpen);
                onClose();
            }
            function onMessage({ data }) {
                if (typeof data === 'string' && data.trim().length === 0) return;
                try {
                    const _data = JSON.parse(data);
                    onResponse(_data);
                } catch (error) {
                    onError(error);
                }
            }
            socket.addEventListener('close', onClose_);
            socket.addEventListener('message', onMessage);
            socket.addEventListener('error', onError);
            socket.addEventListener('open', onOpen);
            if (socket.readyState === WebSocket.CONNECTING) {
                await new Promise((resolve, reject)=>{
                    if (!socket) return;
                    socket.onopen = resolve;
                    socket.onerror = reject;
                });
            }
            const { close: close_ } = socket;
            return Object.assign(socket, {
                close () {
                    close_.bind(socket)();
                    onClose_();
                },
                ping () {
                    try {
                        if (socket.readyState === socket.CLOSED || socket.readyState === socket.CLOSING) throw new request_js_1.WebSocketRequestError({
                            url: socket.url,
                            cause: new request_js_1.SocketClosedError({
                                url: socket.url
                            })
                        });
                        const body = {
                            jsonrpc: '2.0',
                            id: null,
                            method: 'net_version',
                            params: []
                        };
                        socket.send(JSON.stringify(body));
                    } catch (error) {
                        onError(error);
                    }
                },
                request ({ body }) {
                    if (socket.readyState === socket.CLOSED || socket.readyState === socket.CLOSING) throw new request_js_1.WebSocketRequestError({
                        body,
                        url: socket.url,
                        cause: new request_js_1.SocketClosedError({
                            url: socket.url
                        })
                    });
                    return socket.send(JSON.stringify(body));
                }
            });
        },
        keepAlive,
        reconnect,
        url
    });
} //# sourceMappingURL=webSocket.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/rpc/compat.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rpc = void 0;
exports.getSocket = getSocket;
const http_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/rpc/http.js [app-client] (ecmascript)");
const webSocket_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/rpc/webSocket.js [app-client] (ecmascript)");
function webSocket(socketClient, { body, onError, onResponse }) {
    socketClient.request({
        body,
        onError,
        onResponse
    });
    return socketClient;
}
async function webSocketAsync(socketClient, { body, timeout = 10_000 }) {
    return socketClient.requestAsync({
        body,
        timeout
    });
}
async function getSocket(url) {
    const client = await (0, webSocket_js_1.getWebSocketRpcClient)(url);
    return Object.assign(client.socket, {
        requests: client.requests,
        subscriptions: client.subscriptions
    });
}
exports.rpc = {
    http (url, params) {
        return (0, http_js_1.getHttpRpcClient)(url).request(params);
    },
    webSocket,
    webSocketAsync
}; //# sourceMappingURL=compat.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/strings.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.presignMessagePrefix = void 0;
exports.presignMessagePrefix = '\x19Ethereum Signed Message:\n'; //# sourceMappingURL=strings.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/toPrefixedMessage.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toPrefixedMessage = toPrefixedMessage;
const strings_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/strings.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function toPrefixedMessage(message_) {
    const message = (()=>{
        if (typeof message_ === 'string') return (0, toHex_js_1.stringToHex)(message_);
        if (typeof message_.raw === 'string') return message_.raw;
        return (0, toHex_js_1.bytesToHex)(message_.raw);
    })();
    const prefix = (0, toHex_js_1.stringToHex)(`${strings_js_1.presignMessagePrefix}${(0, size_js_1.size)(message)}`);
    return (0, concat_js_1.concat)([
        prefix,
        message
    ]);
} //# sourceMappingURL=toPrefixedMessage.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/hashMessage.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hashMessage = hashMessage;
const keccak256_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
const toPrefixedMessage_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/toPrefixedMessage.js [app-client] (ecmascript)");
function hashMessage(message, to_) {
    return (0, keccak256_js_1.keccak256)((0, toPrefixedMessage_js_1.toPrefixedMessage)(message), to_);
} //# sourceMappingURL=hashMessage.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/typedData.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidStructTypeError = exports.InvalidPrimaryTypeError = exports.InvalidDomainError = void 0;
const stringify_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class InvalidDomainError extends base_js_1.BaseError {
    constructor({ domain }){
        super(`Invalid domain "${(0, stringify_js_1.stringify)(domain)}".`, {
            metaMessages: [
                'Must be a valid EIP-712 domain.'
            ]
        });
    }
}
exports.InvalidDomainError = InvalidDomainError;
class InvalidPrimaryTypeError extends base_js_1.BaseError {
    constructor({ primaryType, types }){
        super(`Invalid primary type \`${primaryType}\` must be one of \`${JSON.stringify(Object.keys(types))}\`.`, {
            docsPath: '/api/glossary/Errors#typeddatainvalidprimarytypeerror',
            metaMessages: [
                'Check that the primary type is a key in `types`.'
            ]
        });
    }
}
exports.InvalidPrimaryTypeError = InvalidPrimaryTypeError;
class InvalidStructTypeError extends base_js_1.BaseError {
    constructor({ type }){
        super(`Struct type "${type}" is invalid.`, {
            metaMessages: [
                'Struct type must not be a Solidity type.'
            ],
            name: 'InvalidStructTypeError'
        });
    }
}
exports.InvalidStructTypeError = InvalidStructTypeError; //# sourceMappingURL=typedData.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/typedData.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeTypedData = serializeTypedData;
exports.validateTypedData = validateTypedData;
exports.getTypesForEIP712Domain = getTypesForEIP712Domain;
exports.domainSeparator = domainSeparator;
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const address_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const typedData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/typedData.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const regex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/regex.js [app-client] (ecmascript)");
const hashTypedData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-client] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
function serializeTypedData(parameters) {
    const { domain: domain_, message: message_, primaryType, types } = parameters;
    const normalizeData = (struct, data_)=>{
        const data = {
            ...data_
        };
        for (const param of struct){
            const { name, type } = param;
            if (type === 'address') data[name] = data[name].toLowerCase();
        }
        return data;
    };
    const domain = (()=>{
        if (!types.EIP712Domain) return {};
        if (!domain_) return {};
        return normalizeData(types.EIP712Domain, domain_);
    })();
    const message = (()=>{
        if (primaryType === 'EIP712Domain') return undefined;
        return normalizeData(types[primaryType], message_);
    })();
    return (0, stringify_js_1.stringify)({
        domain,
        message,
        primaryType,
        types
    });
}
function validateTypedData(parameters) {
    const { domain, message, primaryType, types } = parameters;
    const validateData = (struct, data)=>{
        for (const param of struct){
            const { name, type } = param;
            const value = data[name];
            const integerMatch = type.match(regex_js_1.integerRegex);
            if (integerMatch && (typeof value === 'number' || typeof value === 'bigint')) {
                const [_type, base, size_] = integerMatch;
                (0, toHex_js_1.numberToHex)(value, {
                    signed: base === 'int',
                    size: Number.parseInt(size_, 10) / 8
                });
            }
            if (type === 'address' && typeof value === 'string' && !(0, isAddress_js_1.isAddress)(value)) throw new address_js_1.InvalidAddressError({
                address: value
            });
            const bytesMatch = type.match(regex_js_1.bytesRegex);
            if (bytesMatch) {
                const [_type, size_] = bytesMatch;
                if (size_ && (0, size_js_1.size)(value) !== Number.parseInt(size_, 10)) throw new abi_js_1.BytesSizeMismatchError({
                    expectedSize: Number.parseInt(size_, 10),
                    givenSize: (0, size_js_1.size)(value)
                });
            }
            const struct = types[type];
            if (struct) {
                validateReference(type);
                validateData(struct, value);
            }
        }
    };
    if (types.EIP712Domain && domain) {
        if (typeof domain !== 'object') throw new typedData_js_1.InvalidDomainError({
            domain
        });
        validateData(types.EIP712Domain, domain);
    }
    if (primaryType !== 'EIP712Domain') {
        if (types[primaryType]) validateData(types[primaryType], message);
        else throw new typedData_js_1.InvalidPrimaryTypeError({
            primaryType,
            types
        });
    }
}
function getTypesForEIP712Domain({ domain }) {
    return [
        typeof domain?.name === 'string' && {
            name: 'name',
            type: 'string'
        },
        domain?.version && {
            name: 'version',
            type: 'string'
        },
        (typeof domain?.chainId === 'number' || typeof domain?.chainId === 'bigint') && {
            name: 'chainId',
            type: 'uint256'
        },
        domain?.verifyingContract && {
            name: 'verifyingContract',
            type: 'address'
        },
        domain?.salt && {
            name: 'salt',
            type: 'bytes32'
        }
    ].filter(Boolean);
}
function domainSeparator({ domain }) {
    return (0, hashTypedData_js_1.hashDomain)({
        domain: domain,
        types: {
            EIP712Domain: getTypesForEIP712Domain({
                domain
            })
        }
    });
}
function validateReference(type) {
    if (type === 'address' || type === 'bool' || type === 'string' || type.startsWith('bytes') || type.startsWith('uint') || type.startsWith('int')) throw new typedData_js_1.InvalidStructTypeError({
        type
    });
} //# sourceMappingURL=typedData.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hashTypedData = hashTypedData;
exports.hashDomain = hashDomain;
exports.hashStruct = hashStruct;
exports.encodeType = encodeType;
const encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const keccak256_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
const typedData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/typedData.js [app-client] (ecmascript)");
function hashTypedData(parameters) {
    const { domain = {}, message, primaryType } = parameters;
    const types = {
        EIP712Domain: (0, typedData_js_1.getTypesForEIP712Domain)({
            domain
        }),
        ...parameters.types
    };
    (0, typedData_js_1.validateTypedData)({
        domain,
        message,
        primaryType,
        types
    });
    const parts = [
        '0x1901'
    ];
    if (domain) parts.push(hashDomain({
        domain,
        types: types
    }));
    if (primaryType !== 'EIP712Domain') parts.push(hashStruct({
        data: message,
        primaryType,
        types: types
    }));
    return (0, keccak256_js_1.keccak256)((0, concat_js_1.concat)(parts));
}
function hashDomain({ domain, types }) {
    return hashStruct({
        data: domain,
        primaryType: 'EIP712Domain',
        types: types
    });
}
function hashStruct({ data, primaryType, types }) {
    const encoded = encodeData({
        data: data,
        primaryType,
        types: types
    });
    return (0, keccak256_js_1.keccak256)(encoded);
}
function encodeData({ data, primaryType, types }) {
    const encodedTypes = [
        {
            type: 'bytes32'
        }
    ];
    const encodedValues = [
        hashType({
            primaryType,
            types
        })
    ];
    for (const field of types[primaryType]){
        const [type, value] = encodeField({
            types,
            name: field.name,
            type: field.type,
            value: data[field.name]
        });
        encodedTypes.push(type);
        encodedValues.push(value);
    }
    return (0, encodeAbiParameters_js_1.encodeAbiParameters)(encodedTypes, encodedValues);
}
function hashType({ primaryType, types }) {
    const encodedHashType = (0, toHex_js_1.toHex)(encodeType({
        primaryType,
        types
    }));
    return (0, keccak256_js_1.keccak256)(encodedHashType);
}
function encodeType({ primaryType, types }) {
    let result = '';
    const unsortedDeps = findTypeDependencies({
        primaryType,
        types
    });
    unsortedDeps.delete(primaryType);
    const deps = [
        primaryType,
        ...Array.from(unsortedDeps).sort()
    ];
    for (const type of deps){
        result += `${type}(${types[type].map(({ name, type: t })=>`${t} ${name}`).join(',')})`;
    }
    return result;
}
function findTypeDependencies({ primaryType: primaryType_, types }, results = new Set()) {
    const match = primaryType_.match(/^\w*/u);
    const primaryType = match?.[0];
    if (results.has(primaryType) || types[primaryType] === undefined) {
        return results;
    }
    results.add(primaryType);
    for (const field of types[primaryType]){
        findTypeDependencies({
            primaryType: field.type,
            types
        }, results);
    }
    return results;
}
function encodeField({ types, name, type, value }) {
    if (types[type] !== undefined) {
        return [
            {
                type: 'bytes32'
            },
            (0, keccak256_js_1.keccak256)(encodeData({
                data: value,
                primaryType: type,
                types
            }))
        ];
    }
    if (type === 'bytes') return [
        {
            type: 'bytes32'
        },
        (0, keccak256_js_1.keccak256)(value)
    ];
    if (type === 'string') return [
        {
            type: 'bytes32'
        },
        (0, keccak256_js_1.keccak256)((0, toHex_js_1.toHex)(value))
    ];
    if (type.lastIndexOf(']') === type.length - 1) {
        const parsedType = type.slice(0, type.lastIndexOf('['));
        const typeValuePairs = value.map((item)=>encodeField({
                name,
                type: parsedType,
                types,
                value: item
            }));
        return [
            {
                type: 'bytes32'
            },
            (0, keccak256_js_1.keccak256)((0, encodeAbiParameters_js_1.encodeAbiParameters)(typeValuePairs.map(([t])=>t), typeValuePairs.map(([, v])=>v)))
        ];
    }
    return [
        {
            type
        },
        value
    ];
} //# sourceMappingURL=hashTypedData.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/bytes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zeroHash = exports.erc6492MagicBytes = void 0;
exports.erc6492MagicBytes = '0x6492649264926492649264926492649264926492649264926492649264926492';
exports.zeroHash = '0x0000000000000000000000000000000000000000000000000000000000000000'; //# sourceMappingURL=bytes.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/isErc6492Signature.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isErc6492Signature = isErc6492Signature;
const bytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/bytes.js [app-client] (ecmascript)");
const slice_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)");
function isErc6492Signature(signature) {
    return (0, slice_js_1.sliceHex)(signature, -32) === bytes_js_1.erc6492MagicBytes;
} //# sourceMappingURL=isErc6492Signature.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/isErc8010Signature.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isErc8010Signature = isErc8010Signature;
const erc8010_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/ox/_cjs/erc8010/index.js [app-client] (ecmascript)");
function isErc8010Signature(signature) {
    return erc8010_1.SignatureErc8010.validate(signature);
} //# sourceMappingURL=isErc8010Signature.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/parseErc6492Signature.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseErc6492Signature = parseErc6492Signature;
const decodeAbiParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-client] (ecmascript)");
const isErc6492Signature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/isErc6492Signature.js [app-client] (ecmascript)");
function parseErc6492Signature(signature) {
    if (!(0, isErc6492Signature_js_1.isErc6492Signature)(signature)) return {
        signature
    };
    const [address, data, signature_] = (0, decodeAbiParameters_js_1.decodeAbiParameters)([
        {
            type: 'address'
        },
        {
            type: 'bytes'
        },
        {
            type: 'bytes'
        }
    ], signature);
    return {
        address,
        data,
        signature: signature_
    };
} //# sourceMappingURL=parseErc6492Signature.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/parseErc8010Signature.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseErc8010Signature = parseErc8010Signature;
const erc8010_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/ox/_cjs/erc8010/index.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const isErc8010Signature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/isErc8010Signature.js [app-client] (ecmascript)");
function parseErc8010Signature(signature) {
    if (!(0, isErc8010Signature_js_1.isErc8010Signature)(signature)) return {
        signature
    };
    const { authorization: authorization_ox, to, ...rest } = erc8010_1.SignatureErc8010.unwrap(signature);
    return {
        authorization: {
            address: authorization_ox.address,
            chainId: authorization_ox.chainId,
            nonce: Number(authorization_ox.nonce),
            r: (0, toHex_js_1.numberToHex)(authorization_ox.r, {
                size: 32
            }),
            s: (0, toHex_js_1.numberToHex)(authorization_ox.s, {
                size: 32
            }),
            yParity: authorization_ox.yParity
        },
        ...to ? {
            address: to
        } : {},
        ...rest
    };
} //# sourceMappingURL=parseErc8010Signature.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverMessageAddress.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recoverMessageAddress = recoverMessageAddress;
const hashMessage_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/hashMessage.js [app-client] (ecmascript)");
const recoverAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverAddress.js [app-client] (ecmascript)");
async function recoverMessageAddress({ message, signature }) {
    return (0, recoverAddress_js_1.recoverAddress)({
        hash: (0, hashMessage_js_1.hashMessage)(message),
        signature
    });
} //# sourceMappingURL=recoverMessageAddress.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverTypedDataAddress.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recoverTypedDataAddress = recoverTypedDataAddress;
const hashTypedData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-client] (ecmascript)");
const recoverAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverAddress.js [app-client] (ecmascript)");
async function recoverTypedDataAddress(parameters) {
    const { domain, message, primaryType, signature, types } = parameters;
    return (0, recoverAddress_js_1.recoverAddress)({
        hash: (0, hashTypedData_js_1.hashTypedData)({
            domain,
            message,
            primaryType,
            types
        }),
        signature
    });
} //# sourceMappingURL=recoverTypedDataAddress.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/serializeErc6492Signature.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeErc6492Signature = serializeErc6492Signature;
const bytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/bytes.js [app-client] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
function serializeErc6492Signature(parameters) {
    const { address, data, signature, to = 'hex' } = parameters;
    const signature_ = (0, concat_js_1.concatHex)([
        (0, encodeAbiParameters_js_1.encodeAbiParameters)([
            {
                type: 'address'
            },
            {
                type: 'bytes'
            },
            {
                type: 'bytes'
            }
        ], [
            address,
            data,
            signature
        ]),
        bytes_js_1.erc6492MagicBytes
    ]);
    if (to === 'hex') return signature_;
    return (0, toBytes_js_1.hexToBytes)(signature_);
} //# sourceMappingURL=serializeErc6492Signature.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/serializeErc8010Signature.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeErc8010Signature = serializeErc8010Signature;
const erc8010_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/ox/_cjs/erc8010/index.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
function serializeErc8010Signature(parameters) {
    const { address, data, signature, to = 'hex' } = parameters;
    const signature_ = erc8010_1.SignatureErc8010.wrap({
        authorization: {
            address: parameters.authorization.address,
            chainId: parameters.authorization.chainId,
            nonce: BigInt(parameters.authorization.nonce),
            r: BigInt(parameters.authorization.r),
            s: BigInt(parameters.authorization.s),
            yParity: parameters.authorization.yParity
        },
        data,
        signature,
        to: address
    });
    if (to === 'hex') return signature_;
    return (0, toBytes_js_1.hexToBytes)(signature_);
} //# sourceMappingURL=serializeErc8010Signature.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/verifyHash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyHash = verifyHash;
const getAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
const isAddressEqual_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-client] (ecmascript)");
const recoverAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverAddress.js [app-client] (ecmascript)");
async function verifyHash({ address, hash, signature }) {
    return (0, isAddressEqual_js_1.isAddressEqual)((0, getAddress_js_1.getAddress)(address), await (0, recoverAddress_js_1.recoverAddress)({
        hash,
        signature
    }));
} //# sourceMappingURL=verifyHash.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/verifyMessage.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyMessage = verifyMessage;
const getAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
const isAddressEqual_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-client] (ecmascript)");
const recoverMessageAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverMessageAddress.js [app-client] (ecmascript)");
async function verifyMessage({ address, message, signature }) {
    return (0, isAddressEqual_js_1.isAddressEqual)((0, getAddress_js_1.getAddress)(address), await (0, recoverMessageAddress_js_1.recoverMessageAddress)({
        message,
        signature
    }));
} //# sourceMappingURL=verifyMessage.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/verifyTypedData.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyTypedData = verifyTypedData;
const getAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
const isAddressEqual_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-client] (ecmascript)");
const recoverTypedDataAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverTypedDataAddress.js [app-client] (ecmascript)");
async function verifyTypedData(parameters) {
    const { address, domain, message, primaryType, signature, types } = parameters;
    return (0, isAddressEqual_js_1.isAddressEqual)((0, getAddress_js_1.getAddress)(address), await (0, recoverTypedDataAddress_js_1.recoverTypedDataAddress)({
        domain,
        message,
        primaryType,
        signature,
        types
    }));
} //# sourceMappingURL=verifyTypedData.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/getSerializedTransactionType.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSerializedTransactionType = getSerializedTransactionType;
const transaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
const slice_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
function getSerializedTransactionType(serializedTransaction) {
    const serializedType = (0, slice_js_1.sliceHex)(serializedTransaction, 0, 1);
    if (serializedType === '0x04') return 'eip7702';
    if (serializedType === '0x03') return 'eip4844';
    if (serializedType === '0x02') return 'eip1559';
    if (serializedType === '0x01') return 'eip2930';
    if (serializedType !== '0x' && (0, fromHex_js_1.hexToNumber)(serializedType) >= 0xc0) return 'legacy';
    throw new transaction_js_1.InvalidSerializedTransactionTypeError({
        serializedType
    });
} //# sourceMappingURL=getSerializedTransactionType.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/parseTransaction.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTransaction = parseTransaction;
exports.toTransactionArray = toTransactionArray;
exports.parseAccessList = parseAccessList;
const address_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
const toBlobSidecars_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/toBlobSidecars.js [app-client] (ecmascript)");
const isHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
const pad_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/pad.js [app-client] (ecmascript)");
const trim_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/trim.js [app-client] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const fromRlp_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromRlp.js [app-client] (ecmascript)");
const isHash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/isHash.js [app-client] (ecmascript)");
const assertTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/assertTransaction.js [app-client] (ecmascript)");
const getSerializedTransactionType_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/getSerializedTransactionType.js [app-client] (ecmascript)");
function parseTransaction(serializedTransaction) {
    const type = (0, getSerializedTransactionType_js_1.getSerializedTransactionType)(serializedTransaction);
    if (type === 'eip1559') return parseTransactionEIP1559(serializedTransaction);
    if (type === 'eip2930') return parseTransactionEIP2930(serializedTransaction);
    if (type === 'eip4844') return parseTransactionEIP4844(serializedTransaction);
    if (type === 'eip7702') return parseTransactionEIP7702(serializedTransaction);
    return parseTransactionLegacy(serializedTransaction);
}
function parseTransactionEIP7702(serializedTransaction) {
    const transactionArray = toTransactionArray(serializedTransaction);
    const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to, value, data, accessList, authorizationList, v, r, s] = transactionArray;
    if (transactionArray.length !== 10 && transactionArray.length !== 13) throw new transaction_js_1.InvalidSerializedTransactionError({
        attributes: {
            chainId,
            nonce,
            maxPriorityFeePerGas,
            maxFeePerGas,
            gas,
            to,
            value,
            data,
            accessList,
            authorizationList,
            ...transactionArray.length > 9 ? {
                v,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'eip7702'
    });
    const transaction = {
        chainId: (0, fromHex_js_1.hexToNumber)(chainId),
        type: 'eip7702'
    };
    if ((0, isHex_js_1.isHex)(to) && to !== '0x') transaction.to = to;
    if ((0, isHex_js_1.isHex)(gas) && gas !== '0x') transaction.gas = (0, fromHex_js_1.hexToBigInt)(gas);
    if ((0, isHex_js_1.isHex)(data) && data !== '0x') transaction.data = data;
    if ((0, isHex_js_1.isHex)(nonce)) transaction.nonce = nonce === '0x' ? 0 : (0, fromHex_js_1.hexToNumber)(nonce);
    if ((0, isHex_js_1.isHex)(value) && value !== '0x') transaction.value = (0, fromHex_js_1.hexToBigInt)(value);
    if ((0, isHex_js_1.isHex)(maxFeePerGas) && maxFeePerGas !== '0x') transaction.maxFeePerGas = (0, fromHex_js_1.hexToBigInt)(maxFeePerGas);
    if ((0, isHex_js_1.isHex)(maxPriorityFeePerGas) && maxPriorityFeePerGas !== '0x') transaction.maxPriorityFeePerGas = (0, fromHex_js_1.hexToBigInt)(maxPriorityFeePerGas);
    if (accessList.length !== 0 && accessList !== '0x') transaction.accessList = parseAccessList(accessList);
    if (authorizationList.length !== 0 && authorizationList !== '0x') transaction.authorizationList = parseAuthorizationList(authorizationList);
    (0, assertTransaction_js_1.assertTransactionEIP7702)(transaction);
    const signature = transactionArray.length === 13 ? parseEIP155Signature(transactionArray) : undefined;
    return {
        ...signature,
        ...transaction
    };
}
function parseTransactionEIP4844(serializedTransaction) {
    const transactionOrWrapperArray = toTransactionArray(serializedTransaction);
    const hasNetworkWrapper = transactionOrWrapperArray.length === 4;
    const transactionArray = hasNetworkWrapper ? transactionOrWrapperArray[0] : transactionOrWrapperArray;
    const wrapperArray = hasNetworkWrapper ? transactionOrWrapperArray.slice(1) : [];
    const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to, value, data, accessList, maxFeePerBlobGas, blobVersionedHashes, v, r, s] = transactionArray;
    const [blobs, commitments, proofs] = wrapperArray;
    if (!(transactionArray.length === 11 || transactionArray.length === 14)) throw new transaction_js_1.InvalidSerializedTransactionError({
        attributes: {
            chainId,
            nonce,
            maxPriorityFeePerGas,
            maxFeePerGas,
            gas,
            to,
            value,
            data,
            accessList,
            ...transactionArray.length > 9 ? {
                v,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'eip4844'
    });
    const transaction = {
        blobVersionedHashes: blobVersionedHashes,
        chainId: (0, fromHex_js_1.hexToNumber)(chainId),
        to,
        type: 'eip4844'
    };
    if ((0, isHex_js_1.isHex)(gas) && gas !== '0x') transaction.gas = (0, fromHex_js_1.hexToBigInt)(gas);
    if ((0, isHex_js_1.isHex)(data) && data !== '0x') transaction.data = data;
    if ((0, isHex_js_1.isHex)(nonce)) transaction.nonce = nonce === '0x' ? 0 : (0, fromHex_js_1.hexToNumber)(nonce);
    if ((0, isHex_js_1.isHex)(value) && value !== '0x') transaction.value = (0, fromHex_js_1.hexToBigInt)(value);
    if ((0, isHex_js_1.isHex)(maxFeePerBlobGas) && maxFeePerBlobGas !== '0x') transaction.maxFeePerBlobGas = (0, fromHex_js_1.hexToBigInt)(maxFeePerBlobGas);
    if ((0, isHex_js_1.isHex)(maxFeePerGas) && maxFeePerGas !== '0x') transaction.maxFeePerGas = (0, fromHex_js_1.hexToBigInt)(maxFeePerGas);
    if ((0, isHex_js_1.isHex)(maxPriorityFeePerGas) && maxPriorityFeePerGas !== '0x') transaction.maxPriorityFeePerGas = (0, fromHex_js_1.hexToBigInt)(maxPriorityFeePerGas);
    if (accessList.length !== 0 && accessList !== '0x') transaction.accessList = parseAccessList(accessList);
    if (blobs && commitments && proofs) transaction.sidecars = (0, toBlobSidecars_js_1.toBlobSidecars)({
        blobs: blobs,
        commitments: commitments,
        proofs: proofs
    });
    (0, assertTransaction_js_1.assertTransactionEIP4844)(transaction);
    const signature = transactionArray.length === 14 ? parseEIP155Signature(transactionArray) : undefined;
    return {
        ...signature,
        ...transaction
    };
}
function parseTransactionEIP1559(serializedTransaction) {
    const transactionArray = toTransactionArray(serializedTransaction);
    const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to, value, data, accessList, v, r, s] = transactionArray;
    if (!(transactionArray.length === 9 || transactionArray.length === 12)) throw new transaction_js_1.InvalidSerializedTransactionError({
        attributes: {
            chainId,
            nonce,
            maxPriorityFeePerGas,
            maxFeePerGas,
            gas,
            to,
            value,
            data,
            accessList,
            ...transactionArray.length > 9 ? {
                v,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'eip1559'
    });
    const transaction = {
        chainId: (0, fromHex_js_1.hexToNumber)(chainId),
        type: 'eip1559'
    };
    if ((0, isHex_js_1.isHex)(to) && to !== '0x') transaction.to = to;
    if ((0, isHex_js_1.isHex)(gas) && gas !== '0x') transaction.gas = (0, fromHex_js_1.hexToBigInt)(gas);
    if ((0, isHex_js_1.isHex)(data) && data !== '0x') transaction.data = data;
    if ((0, isHex_js_1.isHex)(nonce)) transaction.nonce = nonce === '0x' ? 0 : (0, fromHex_js_1.hexToNumber)(nonce);
    if ((0, isHex_js_1.isHex)(value) && value !== '0x') transaction.value = (0, fromHex_js_1.hexToBigInt)(value);
    if ((0, isHex_js_1.isHex)(maxFeePerGas) && maxFeePerGas !== '0x') transaction.maxFeePerGas = (0, fromHex_js_1.hexToBigInt)(maxFeePerGas);
    if ((0, isHex_js_1.isHex)(maxPriorityFeePerGas) && maxPriorityFeePerGas !== '0x') transaction.maxPriorityFeePerGas = (0, fromHex_js_1.hexToBigInt)(maxPriorityFeePerGas);
    if (accessList.length !== 0 && accessList !== '0x') transaction.accessList = parseAccessList(accessList);
    (0, assertTransaction_js_1.assertTransactionEIP1559)(transaction);
    const signature = transactionArray.length === 12 ? parseEIP155Signature(transactionArray) : undefined;
    return {
        ...signature,
        ...transaction
    };
}
function parseTransactionEIP2930(serializedTransaction) {
    const transactionArray = toTransactionArray(serializedTransaction);
    const [chainId, nonce, gasPrice, gas, to, value, data, accessList, v, r, s] = transactionArray;
    if (!(transactionArray.length === 8 || transactionArray.length === 11)) throw new transaction_js_1.InvalidSerializedTransactionError({
        attributes: {
            chainId,
            nonce,
            gasPrice,
            gas,
            to,
            value,
            data,
            accessList,
            ...transactionArray.length > 8 ? {
                v,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'eip2930'
    });
    const transaction = {
        chainId: (0, fromHex_js_1.hexToNumber)(chainId),
        type: 'eip2930'
    };
    if ((0, isHex_js_1.isHex)(to) && to !== '0x') transaction.to = to;
    if ((0, isHex_js_1.isHex)(gas) && gas !== '0x') transaction.gas = (0, fromHex_js_1.hexToBigInt)(gas);
    if ((0, isHex_js_1.isHex)(data) && data !== '0x') transaction.data = data;
    if ((0, isHex_js_1.isHex)(nonce)) transaction.nonce = nonce === '0x' ? 0 : (0, fromHex_js_1.hexToNumber)(nonce);
    if ((0, isHex_js_1.isHex)(value) && value !== '0x') transaction.value = (0, fromHex_js_1.hexToBigInt)(value);
    if ((0, isHex_js_1.isHex)(gasPrice) && gasPrice !== '0x') transaction.gasPrice = (0, fromHex_js_1.hexToBigInt)(gasPrice);
    if (accessList.length !== 0 && accessList !== '0x') transaction.accessList = parseAccessList(accessList);
    (0, assertTransaction_js_1.assertTransactionEIP2930)(transaction);
    const signature = transactionArray.length === 11 ? parseEIP155Signature(transactionArray) : undefined;
    return {
        ...signature,
        ...transaction
    };
}
function parseTransactionLegacy(serializedTransaction) {
    const transactionArray = (0, fromRlp_js_1.fromRlp)(serializedTransaction, 'hex');
    const [nonce, gasPrice, gas, to, value, data, chainIdOrV_, r, s] = transactionArray;
    if (!(transactionArray.length === 6 || transactionArray.length === 9)) throw new transaction_js_1.InvalidSerializedTransactionError({
        attributes: {
            nonce,
            gasPrice,
            gas,
            to,
            value,
            data,
            ...transactionArray.length > 6 ? {
                v: chainIdOrV_,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'legacy'
    });
    const transaction = {
        type: 'legacy'
    };
    if ((0, isHex_js_1.isHex)(to) && to !== '0x') transaction.to = to;
    if ((0, isHex_js_1.isHex)(gas) && gas !== '0x') transaction.gas = (0, fromHex_js_1.hexToBigInt)(gas);
    if ((0, isHex_js_1.isHex)(data) && data !== '0x') transaction.data = data;
    if ((0, isHex_js_1.isHex)(nonce)) transaction.nonce = nonce === '0x' ? 0 : (0, fromHex_js_1.hexToNumber)(nonce);
    if ((0, isHex_js_1.isHex)(value) && value !== '0x') transaction.value = (0, fromHex_js_1.hexToBigInt)(value);
    if ((0, isHex_js_1.isHex)(gasPrice) && gasPrice !== '0x') transaction.gasPrice = (0, fromHex_js_1.hexToBigInt)(gasPrice);
    (0, assertTransaction_js_1.assertTransactionLegacy)(transaction);
    if (transactionArray.length === 6) return transaction;
    const chainIdOrV = (0, isHex_js_1.isHex)(chainIdOrV_) && chainIdOrV_ !== '0x' ? (0, fromHex_js_1.hexToBigInt)(chainIdOrV_) : 0n;
    if (s === '0x' && r === '0x') {
        if (chainIdOrV > 0) transaction.chainId = Number(chainIdOrV);
        return transaction;
    }
    const v = chainIdOrV;
    const chainId = Number((v - 35n) / 2n);
    if (chainId > 0) transaction.chainId = chainId;
    else if (v !== 27n && v !== 28n) throw new transaction_js_1.InvalidLegacyVError({
        v
    });
    transaction.v = v;
    transaction.s = s;
    transaction.r = r;
    transaction.yParity = v % 2n === 0n ? 1 : 0;
    return transaction;
}
function toTransactionArray(serializedTransaction) {
    return (0, fromRlp_js_1.fromRlp)(`0x${serializedTransaction.slice(4)}`, 'hex');
}
function parseAccessList(accessList_) {
    const accessList = [];
    for(let i = 0; i < accessList_.length; i++){
        const [address, storageKeys] = accessList_[i];
        if (!(0, isAddress_js_1.isAddress)(address, {
            strict: false
        })) throw new address_js_1.InvalidAddressError({
            address
        });
        accessList.push({
            address: address,
            storageKeys: storageKeys.map((key)=>(0, isHash_js_1.isHash)(key) ? key : (0, trim_js_1.trim)(key))
        });
    }
    return accessList;
}
function parseAuthorizationList(serializedAuthorizationList) {
    const authorizationList = [];
    for(let i = 0; i < serializedAuthorizationList.length; i++){
        const [chainId, address, nonce, yParity, r, s] = serializedAuthorizationList[i];
        authorizationList.push({
            address,
            chainId: chainId === '0x' ? 0 : (0, fromHex_js_1.hexToNumber)(chainId),
            nonce: nonce === '0x' ? 0 : (0, fromHex_js_1.hexToNumber)(nonce),
            ...parseEIP155Signature([
                yParity,
                r,
                s
            ])
        });
    }
    return authorizationList;
}
function parseEIP155Signature(transactionArray) {
    const signature = transactionArray.slice(-3);
    const v = signature[0] === '0x' || (0, fromHex_js_1.hexToBigInt)(signature[0]) === 0n ? 27n : 28n;
    return {
        r: (0, pad_js_1.padHex)(signature[1], {
            size: 32
        }),
        s: (0, pad_js_1.padHex)(signature[2], {
            size: 32
        }),
        v,
        yParity: v === 27n ? 0 : 1
    };
} //# sourceMappingURL=parseTransaction.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/unit.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidDecimalNumberError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class InvalidDecimalNumberError extends base_js_1.BaseError {
    constructor({ value }){
        super(`Number \`${value}\` is not a valid decimal number.`, {
            name: 'InvalidDecimalNumberError'
        });
    }
}
exports.InvalidDecimalNumberError = InvalidDecimalNumberError; //# sourceMappingURL=unit.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/parseUnits.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseUnits = parseUnits;
const unit_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/unit.js [app-client] (ecmascript)");
function parseUnits(value, decimals) {
    if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(value)) throw new unit_js_1.InvalidDecimalNumberError({
        value
    });
    let [integer, fraction = '0'] = value.split('.');
    const negative = integer.startsWith('-');
    if (negative) integer = integer.slice(1);
    fraction = fraction.replace(/(0+)$/, '');
    if (decimals === 0) {
        if (Math.round(Number(`.${fraction}`)) === 1) integer = `${BigInt(integer) + 1n}`;
        fraction = '';
    } else if (fraction.length > decimals) {
        const [left, unit, right] = [
            fraction.slice(0, decimals - 1),
            fraction.slice(decimals - 1, decimals),
            fraction.slice(decimals)
        ];
        const rounded = Math.round(Number(`${unit}.${right}`));
        if (rounded > 9) fraction = `${BigInt(left) + BigInt(1)}0`.padStart(left.length + 1, '0');
        else fraction = `${left}${rounded}`;
        if (fraction.length > decimals) {
            fraction = fraction.slice(1);
            integer = `${BigInt(integer) + 1n}`;
        }
        fraction = fraction.slice(0, decimals);
    } else {
        fraction = fraction.padEnd(decimals, '0');
    }
    return BigInt(`${negative ? '-' : ''}${integer}${fraction}`);
} //# sourceMappingURL=parseUnits.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/parseEther.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseEther = parseEther;
const unit_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/unit.js [app-client] (ecmascript)");
const parseUnits_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/parseUnits.js [app-client] (ecmascript)");
function parseEther(ether, unit = 'wei') {
    return (0, parseUnits_js_1.parseUnits)(ether, unit_js_1.etherUnits[unit]);
} //# sourceMappingURL=parseEther.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/parseGwei.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseGwei = parseGwei;
const unit_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/unit.js [app-client] (ecmascript)");
const parseUnits_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/parseUnits.js [app-client] (ecmascript)");
function parseGwei(ether, unit = 'wei') {
    return (0, parseUnits_js_1.parseUnits)(ether, unit_js_1.gweiUnits[unit]);
} //# sourceMappingURL=parseGwei.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.padBytes = exports.pad = exports.isHex = exports.isBytes = exports.concatHex = exports.concatBytes = exports.concat = exports.getChainContractAddress = exports.extractChain = exports.defineChain = exports.assertCurrentChain = exports.offchainLookupSignature = exports.offchainLookupAbiItem = exports.offchainLookup = exports.ccipFetch = exports.ccipRequest = exports.buildRequest = exports.verifyAuthorization = exports.serializeAuthorizationList = exports.recoverAuthorizationAddress = exports.hashAuthorization = exports.isAddressEqual = exports.isAddress = exports.getCreateAddress = exports.getCreate2Address = exports.getContractAddress = exports.getAddress = exports.parseEventLogs = exports.getAbiItem = exports.formatAbiItemWithArgs = exports.formatAbiParams = exports.formatAbiItem = exports.encodePacked = exports.encodeFunctionResult = exports.encodeFunctionData = exports.encodeEventTopics = exports.encodeErrorResult = exports.encodeDeployData = exports.encodeAbiParameters = exports.decodeFunctionResult = exports.decodeFunctionData = exports.decodeEventLog = exports.decodeErrorResult = exports.decodeAbiParameters = exports.publicKeyToAddress = exports.parseAccount = exports.parseAbiParameters = exports.parseAbiParameter = exports.parseAbiItem = exports.parseAbi = void 0;
exports.ripemd160 = exports.keccak256 = exports.isHash = exports.getAction = exports.formatTransactionRequest = exports.defineTransactionRequest = exports.defineTransactionReceipt = exports.transactionType = exports.formatTransaction = exports.defineTransaction = exports.formatLog = exports.defineFormatter = exports.extract = exports.formatBlock = exports.defineBlock = exports.getTransactionError = exports.getNodeError = exports.containsNodeError = exports.getEstimateGasError = exports.getContractError = exports.getCallError = exports.toRlp = exports.toHex = exports.stringToHex = exports.numberToHex = exports.bytesToHex = exports.boolToHex = exports.toBytes = exports.stringToBytes = exports.numberToBytes = exports.hexToBytes = exports.boolToBytes = exports.fromRlp = exports.hexToString = exports.hexToNumber = exports.hexToBool = exports.hexToBigInt = exports.fromHex = exports.fromBytes = exports.bytesToString = exports.bytesToNumber = exports.bytesToBool = exports.bytesToBigint = exports.bytesToBigInt = exports.trim = exports.sliceHex = exports.sliceBytes = exports.slice = exports.size = exports.padHex = void 0;
exports.validateTypedData = exports.serializeTypedData = exports.serializeTransaction = exports.serializeAccessList = exports.parseTransaction = exports.getTransactionType = exports.getSerializedTransactionType = exports.assertTransactionLegacy = exports.assertTransactionEIP2930 = exports.assertTransactionEIP1559 = exports.assertRequest = exports.stringify = exports.verifyTypedData = exports.verifyMessage = exports.verifyHash = exports.serializeErc8010Signature = exports.serializeErc6492Signature = exports.recoverTypedDataAddress = exports.recoverPublicKey = exports.recoverMessageAddress = exports.recoverAddress = exports.parseErc8010Signature = exports.parseErc6492Signature = exports.isErc8010Signature = exports.isErc6492Signature = exports.hashTypedData = exports.hashStruct = exports.hashMessage = exports.getWebSocketRpcClient = exports.socketClientCache = exports.getSocketRpcClient = exports.getHttpRpcClient = exports.rpc = exports.getSocket = exports.integerRegex = exports.bytesRegex = exports.arrayRegex = exports.nonceManager = exports.createNonceManager = exports.getFunctionSignature = exports.toFunctionSignature = exports.getFunctionSelector = exports.toFunctionSelector = exports.toFunctionHash = exports.getEventSignature = exports.toEventSignature = exports.getEventSelector = exports.toEventSelector = exports.toEventHash = exports.sha256 = void 0;
exports.parseUnits = exports.parseGwei = exports.parseEther = exports.formatUnits = exports.formatGwei = exports.formatEther = void 0;
var abitype_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/exports/index.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseAbi", {
    enumerable: true,
    get: function() {
        return abitype_1.parseAbi;
    }
});
Object.defineProperty(exports, "parseAbiItem", {
    enumerable: true,
    get: function() {
        return abitype_1.parseAbiItem;
    }
});
Object.defineProperty(exports, "parseAbiParameter", {
    enumerable: true,
    get: function() {
        return abitype_1.parseAbiParameter;
    }
});
Object.defineProperty(exports, "parseAbiParameters", {
    enumerable: true,
    get: function() {
        return abitype_1.parseAbiParameters;
    }
});
var parseAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseAccount", {
    enumerable: true,
    get: function() {
        return parseAccount_js_1.parseAccount;
    }
});
var publicKeyToAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/publicKeyToAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "publicKeyToAddress", {
    enumerable: true,
    get: function() {
        return publicKeyToAddress_js_1.publicKeyToAddress;
    }
});
var decodeAbiParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-client] (ecmascript)");
Object.defineProperty(exports, "decodeAbiParameters", {
    enumerable: true,
    get: function() {
        return decodeAbiParameters_js_1.decodeAbiParameters;
    }
});
var decodeErrorResult_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeErrorResult.js [app-client] (ecmascript)");
Object.defineProperty(exports, "decodeErrorResult", {
    enumerable: true,
    get: function() {
        return decodeErrorResult_js_1.decodeErrorResult;
    }
});
var decodeEventLog_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeEventLog.js [app-client] (ecmascript)");
Object.defineProperty(exports, "decodeEventLog", {
    enumerable: true,
    get: function() {
        return decodeEventLog_js_1.decodeEventLog;
    }
});
var decodeFunctionData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeFunctionData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "decodeFunctionData", {
    enumerable: true,
    get: function() {
        return decodeFunctionData_js_1.decodeFunctionData;
    }
});
var decodeFunctionResult_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
Object.defineProperty(exports, "decodeFunctionResult", {
    enumerable: true,
    get: function() {
        return decodeFunctionResult_js_1.decodeFunctionResult;
    }
});
var encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
Object.defineProperty(exports, "encodeAbiParameters", {
    enumerable: true,
    get: function() {
        return encodeAbiParameters_js_1.encodeAbiParameters;
    }
});
var encodeDeployData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeDeployData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "encodeDeployData", {
    enumerable: true,
    get: function() {
        return encodeDeployData_js_1.encodeDeployData;
    }
});
var encodeErrorResult_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeErrorResult.js [app-client] (ecmascript)");
Object.defineProperty(exports, "encodeErrorResult", {
    enumerable: true,
    get: function() {
        return encodeErrorResult_js_1.encodeErrorResult;
    }
});
var encodeEventTopics_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeEventTopics.js [app-client] (ecmascript)");
Object.defineProperty(exports, "encodeEventTopics", {
    enumerable: true,
    get: function() {
        return encodeEventTopics_js_1.encodeEventTopics;
    }
});
var encodeFunctionData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "encodeFunctionData", {
    enumerable: true,
    get: function() {
        return encodeFunctionData_js_1.encodeFunctionData;
    }
});
var encodeFunctionResult_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeFunctionResult.js [app-client] (ecmascript)");
Object.defineProperty(exports, "encodeFunctionResult", {
    enumerable: true,
    get: function() {
        return encodeFunctionResult_js_1.encodeFunctionResult;
    }
});
var encodePacked_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodePacked.js [app-client] (ecmascript)");
Object.defineProperty(exports, "encodePacked", {
    enumerable: true,
    get: function() {
        return encodePacked_js_1.encodePacked;
    }
});
var formatAbiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatAbiItem", {
    enumerable: true,
    get: function() {
        return formatAbiItem_js_1.formatAbiItem;
    }
});
Object.defineProperty(exports, "formatAbiParams", {
    enumerable: true,
    get: function() {
        return formatAbiItem_js_1.formatAbiParams;
    }
});
var formatAbiItemWithArgs_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/formatAbiItemWithArgs.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatAbiItemWithArgs", {
    enumerable: true,
    get: function() {
        return formatAbiItemWithArgs_js_1.formatAbiItemWithArgs;
    }
});
var getAbiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getAbiItem", {
    enumerable: true,
    get: function() {
        return getAbiItem_js_1.getAbiItem;
    }
});
var parseEventLogs_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/parseEventLogs.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseEventLogs", {
    enumerable: true,
    get: function() {
        return parseEventLogs_js_1.parseEventLogs;
    }
});
var getAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getAddress", {
    enumerable: true,
    get: function() {
        return getAddress_js_1.getAddress;
    }
});
var getContractAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/getContractAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getContractAddress", {
    enumerable: true,
    get: function() {
        return getContractAddress_js_1.getContractAddress;
    }
});
Object.defineProperty(exports, "getCreate2Address", {
    enumerable: true,
    get: function() {
        return getContractAddress_js_1.getCreate2Address;
    }
});
Object.defineProperty(exports, "getCreateAddress", {
    enumerable: true,
    get: function() {
        return getContractAddress_js_1.getCreateAddress;
    }
});
var isAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isAddress", {
    enumerable: true,
    get: function() {
        return isAddress_js_1.isAddress;
    }
});
var isAddressEqual_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isAddressEqual", {
    enumerable: true,
    get: function() {
        return isAddressEqual_js_1.isAddressEqual;
    }
});
var hashAuthorization_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/authorization/hashAuthorization.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hashAuthorization", {
    enumerable: true,
    get: function() {
        return hashAuthorization_js_1.hashAuthorization;
    }
});
var recoverAuthorizationAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/authorization/recoverAuthorizationAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "recoverAuthorizationAddress", {
    enumerable: true,
    get: function() {
        return recoverAuthorizationAddress_js_1.recoverAuthorizationAddress;
    }
});
var serializeAuthorizationList_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/authorization/serializeAuthorizationList.js [app-client] (ecmascript)");
Object.defineProperty(exports, "serializeAuthorizationList", {
    enumerable: true,
    get: function() {
        return serializeAuthorizationList_js_1.serializeAuthorizationList;
    }
});
var verifyAuthorization_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/authorization/verifyAuthorization.js [app-client] (ecmascript)");
Object.defineProperty(exports, "verifyAuthorization", {
    enumerable: true,
    get: function() {
        return verifyAuthorization_js_1.verifyAuthorization;
    }
});
var buildRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/buildRequest.js [app-client] (ecmascript)");
Object.defineProperty(exports, "buildRequest", {
    enumerable: true,
    get: function() {
        return buildRequest_js_1.buildRequest;
    }
});
var ccip_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ccip.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ccipRequest", {
    enumerable: true,
    get: function() {
        return ccip_js_1.ccipRequest;
    }
});
Object.defineProperty(exports, "ccipFetch", {
    enumerable: true,
    get: function() {
        return ccip_js_1.ccipRequest;
    }
});
Object.defineProperty(exports, "offchainLookup", {
    enumerable: true,
    get: function() {
        return ccip_js_1.offchainLookup;
    }
});
Object.defineProperty(exports, "offchainLookupAbiItem", {
    enumerable: true,
    get: function() {
        return ccip_js_1.offchainLookupAbiItem;
    }
});
Object.defineProperty(exports, "offchainLookupSignature", {
    enumerable: true,
    get: function() {
        return ccip_js_1.offchainLookupSignature;
    }
});
var assertCurrentChain_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/chain/assertCurrentChain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "assertCurrentChain", {
    enumerable: true,
    get: function() {
        return assertCurrentChain_js_1.assertCurrentChain;
    }
});
var defineChain_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineChain", {
    enumerable: true,
    get: function() {
        return defineChain_js_1.defineChain;
    }
});
var extractChain_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/chain/extractChain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "extractChain", {
    enumerable: true,
    get: function() {
        return extractChain_js_1.extractChain;
    }
});
var getChainContractAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getChainContractAddress", {
    enumerable: true,
    get: function() {
        return getChainContractAddress_js_1.getChainContractAddress;
    }
});
var concat_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
Object.defineProperty(exports, "concat", {
    enumerable: true,
    get: function() {
        return concat_js_1.concat;
    }
});
Object.defineProperty(exports, "concatBytes", {
    enumerable: true,
    get: function() {
        return concat_js_1.concatBytes;
    }
});
Object.defineProperty(exports, "concatHex", {
    enumerable: true,
    get: function() {
        return concat_js_1.concatHex;
    }
});
var isBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/isBytes.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isBytes", {
    enumerable: true,
    get: function() {
        return isBytes_js_1.isBytes;
    }
});
var isHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isHex", {
    enumerable: true,
    get: function() {
        return isHex_js_1.isHex;
    }
});
var pad_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/pad.js [app-client] (ecmascript)");
Object.defineProperty(exports, "pad", {
    enumerable: true,
    get: function() {
        return pad_js_1.pad;
    }
});
Object.defineProperty(exports, "padBytes", {
    enumerable: true,
    get: function() {
        return pad_js_1.padBytes;
    }
});
Object.defineProperty(exports, "padHex", {
    enumerable: true,
    get: function() {
        return pad_js_1.padHex;
    }
});
var size_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
Object.defineProperty(exports, "size", {
    enumerable: true,
    get: function() {
        return size_js_1.size;
    }
});
var slice_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)");
Object.defineProperty(exports, "slice", {
    enumerable: true,
    get: function() {
        return slice_js_1.slice;
    }
});
Object.defineProperty(exports, "sliceBytes", {
    enumerable: true,
    get: function() {
        return slice_js_1.sliceBytes;
    }
});
Object.defineProperty(exports, "sliceHex", {
    enumerable: true,
    get: function() {
        return slice_js_1.sliceHex;
    }
});
var trim_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/trim.js [app-client] (ecmascript)");
Object.defineProperty(exports, "trim", {
    enumerable: true,
    get: function() {
        return trim_js_1.trim;
    }
});
var fromBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromBytes.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bytesToBigInt", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToBigInt;
    }
});
Object.defineProperty(exports, "bytesToBigint", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToBigInt;
    }
});
Object.defineProperty(exports, "bytesToBool", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToBool;
    }
});
Object.defineProperty(exports, "bytesToNumber", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToNumber;
    }
});
Object.defineProperty(exports, "bytesToString", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToString;
    }
});
Object.defineProperty(exports, "fromBytes", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.fromBytes;
    }
});
var fromHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fromHex", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.fromHex;
    }
});
Object.defineProperty(exports, "hexToBigInt", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.hexToBigInt;
    }
});
Object.defineProperty(exports, "hexToBool", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.hexToBool;
    }
});
Object.defineProperty(exports, "hexToNumber", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.hexToNumber;
    }
});
Object.defineProperty(exports, "hexToString", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.hexToString;
    }
});
var fromRlp_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromRlp.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fromRlp", {
    enumerable: true,
    get: function() {
        return fromRlp_js_1.fromRlp;
    }
});
var toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
Object.defineProperty(exports, "boolToBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.boolToBytes;
    }
});
Object.defineProperty(exports, "hexToBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.hexToBytes;
    }
});
Object.defineProperty(exports, "numberToBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.numberToBytes;
    }
});
Object.defineProperty(exports, "stringToBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.stringToBytes;
    }
});
Object.defineProperty(exports, "toBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.toBytes;
    }
});
var toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
Object.defineProperty(exports, "boolToHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.boolToHex;
    }
});
Object.defineProperty(exports, "bytesToHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.bytesToHex;
    }
});
Object.defineProperty(exports, "numberToHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.numberToHex;
    }
});
Object.defineProperty(exports, "stringToHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.stringToHex;
    }
});
Object.defineProperty(exports, "toHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.toHex;
    }
});
var toRlp_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toRlp.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toRlp", {
    enumerable: true,
    get: function() {
        return toRlp_js_1.toRlp;
    }
});
var getCallError_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getCallError.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getCallError", {
    enumerable: true,
    get: function() {
        return getCallError_js_1.getCallError;
    }
});
var getContractError_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getContractError.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getContractError", {
    enumerable: true,
    get: function() {
        return getContractError_js_1.getContractError;
    }
});
var getEstimateGasError_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getEstimateGasError.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getEstimateGasError", {
    enumerable: true,
    get: function() {
        return getEstimateGasError_js_1.getEstimateGasError;
    }
});
var getNodeError_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getNodeError.js [app-client] (ecmascript)");
Object.defineProperty(exports, "containsNodeError", {
    enumerable: true,
    get: function() {
        return getNodeError_js_1.containsNodeError;
    }
});
Object.defineProperty(exports, "getNodeError", {
    enumerable: true,
    get: function() {
        return getNodeError_js_1.getNodeError;
    }
});
var getTransactionError_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getTransactionError.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getTransactionError", {
    enumerable: true,
    get: function() {
        return getTransactionError_js_1.getTransactionError;
    }
});
var block_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/block.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineBlock", {
    enumerable: true,
    get: function() {
        return block_js_1.defineBlock;
    }
});
Object.defineProperty(exports, "formatBlock", {
    enumerable: true,
    get: function() {
        return block_js_1.formatBlock;
    }
});
var extract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/extract.js [app-client] (ecmascript)");
Object.defineProperty(exports, "extract", {
    enumerable: true,
    get: function() {
        return extract_js_1.extract;
    }
});
var formatter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/formatter.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineFormatter", {
    enumerable: true,
    get: function() {
        return formatter_js_1.defineFormatter;
    }
});
var log_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/log.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatLog", {
    enumerable: true,
    get: function() {
        return log_js_1.formatLog;
    }
});
var transaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transaction.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineTransaction", {
    enumerable: true,
    get: function() {
        return transaction_js_1.defineTransaction;
    }
});
Object.defineProperty(exports, "formatTransaction", {
    enumerable: true,
    get: function() {
        return transaction_js_1.formatTransaction;
    }
});
Object.defineProperty(exports, "transactionType", {
    enumerable: true,
    get: function() {
        return transaction_js_1.transactionType;
    }
});
var transactionReceipt_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transactionReceipt.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineTransactionReceipt", {
    enumerable: true,
    get: function() {
        return transactionReceipt_js_1.defineTransactionReceipt;
    }
});
var transactionRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineTransactionRequest", {
    enumerable: true,
    get: function() {
        return transactionRequest_js_1.defineTransactionRequest;
    }
});
Object.defineProperty(exports, "formatTransactionRequest", {
    enumerable: true,
    get: function() {
        return transactionRequest_js_1.formatTransactionRequest;
    }
});
var getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getAction", {
    enumerable: true,
    get: function() {
        return getAction_js_1.getAction;
    }
});
var isHash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/isHash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isHash", {
    enumerable: true,
    get: function() {
        return isHash_js_1.isHash;
    }
});
var keccak256_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
Object.defineProperty(exports, "keccak256", {
    enumerable: true,
    get: function() {
        return keccak256_js_1.keccak256;
    }
});
var ripemd160_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/ripemd160.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ripemd160", {
    enumerable: true,
    get: function() {
        return ripemd160_js_1.ripemd160;
    }
});
var sha256_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/sha256.js [app-client] (ecmascript)");
Object.defineProperty(exports, "sha256", {
    enumerable: true,
    get: function() {
        return sha256_js_1.sha256;
    }
});
var toEventHash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toEventHash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toEventHash", {
    enumerable: true,
    get: function() {
        return toEventHash_js_1.toEventHash;
    }
});
var toEventSelector_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toEventSelector.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toEventSelector", {
    enumerable: true,
    get: function() {
        return toEventSelector_js_1.toEventSelector;
    }
});
Object.defineProperty(exports, "getEventSelector", {
    enumerable: true,
    get: function() {
        return toEventSelector_js_1.toEventSelector;
    }
});
var toEventSignature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toEventSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toEventSignature", {
    enumerable: true,
    get: function() {
        return toEventSignature_js_1.toEventSignature;
    }
});
Object.defineProperty(exports, "getEventSignature", {
    enumerable: true,
    get: function() {
        return toEventSignature_js_1.toEventSignature;
    }
});
var toFunctionHash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toFunctionHash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toFunctionHash", {
    enumerable: true,
    get: function() {
        return toFunctionHash_js_1.toFunctionHash;
    }
});
var toFunctionSelector_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toFunctionSelector.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toFunctionSelector", {
    enumerable: true,
    get: function() {
        return toFunctionSelector_js_1.toFunctionSelector;
    }
});
Object.defineProperty(exports, "getFunctionSelector", {
    enumerable: true,
    get: function() {
        return toFunctionSelector_js_1.toFunctionSelector;
    }
});
var toFunctionSignature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toFunctionSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toFunctionSignature", {
    enumerable: true,
    get: function() {
        return toFunctionSignature_js_1.toFunctionSignature;
    }
});
Object.defineProperty(exports, "getFunctionSignature", {
    enumerable: true,
    get: function() {
        return toFunctionSignature_js_1.toFunctionSignature;
    }
});
var nonceManager_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/nonceManager.js [app-client] (ecmascript)");
Object.defineProperty(exports, "createNonceManager", {
    enumerable: true,
    get: function() {
        return nonceManager_js_1.createNonceManager;
    }
});
Object.defineProperty(exports, "nonceManager", {
    enumerable: true,
    get: function() {
        return nonceManager_js_1.nonceManager;
    }
});
var regex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/regex.js [app-client] (ecmascript)");
Object.defineProperty(exports, "arrayRegex", {
    enumerable: true,
    get: function() {
        return regex_js_1.arrayRegex;
    }
});
Object.defineProperty(exports, "bytesRegex", {
    enumerable: true,
    get: function() {
        return regex_js_1.bytesRegex;
    }
});
Object.defineProperty(exports, "integerRegex", {
    enumerable: true,
    get: function() {
        return regex_js_1.integerRegex;
    }
});
var compat_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/rpc/compat.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getSocket", {
    enumerable: true,
    get: function() {
        return compat_js_1.getSocket;
    }
});
Object.defineProperty(exports, "rpc", {
    enumerable: true,
    get: function() {
        return compat_js_1.rpc;
    }
});
var http_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/rpc/http.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getHttpRpcClient", {
    enumerable: true,
    get: function() {
        return http_js_1.getHttpRpcClient;
    }
});
var socket_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/rpc/socket.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getSocketRpcClient", {
    enumerable: true,
    get: function() {
        return socket_js_1.getSocketRpcClient;
    }
});
Object.defineProperty(exports, "socketClientCache", {
    enumerable: true,
    get: function() {
        return socket_js_1.socketClientCache;
    }
});
var webSocket_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/rpc/webSocket.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getWebSocketRpcClient", {
    enumerable: true,
    get: function() {
        return webSocket_js_1.getWebSocketRpcClient;
    }
});
var hashMessage_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/hashMessage.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hashMessage", {
    enumerable: true,
    get: function() {
        return hashMessage_js_1.hashMessage;
    }
});
var hashTypedData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hashStruct", {
    enumerable: true,
    get: function() {
        return hashTypedData_js_1.hashStruct;
    }
});
Object.defineProperty(exports, "hashTypedData", {
    enumerable: true,
    get: function() {
        return hashTypedData_js_1.hashTypedData;
    }
});
var isErc6492Signature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/isErc6492Signature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isErc6492Signature", {
    enumerable: true,
    get: function() {
        return isErc6492Signature_js_1.isErc6492Signature;
    }
});
var isErc8010Signature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/isErc8010Signature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isErc8010Signature", {
    enumerable: true,
    get: function() {
        return isErc8010Signature_js_1.isErc8010Signature;
    }
});
var parseErc6492Signature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/parseErc6492Signature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseErc6492Signature", {
    enumerable: true,
    get: function() {
        return parseErc6492Signature_js_1.parseErc6492Signature;
    }
});
var parseErc8010Signature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/parseErc8010Signature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseErc8010Signature", {
    enumerable: true,
    get: function() {
        return parseErc8010Signature_js_1.parseErc8010Signature;
    }
});
var recoverAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "recoverAddress", {
    enumerable: true,
    get: function() {
        return recoverAddress_js_1.recoverAddress;
    }
});
var recoverMessageAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverMessageAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "recoverMessageAddress", {
    enumerable: true,
    get: function() {
        return recoverMessageAddress_js_1.recoverMessageAddress;
    }
});
var recoverPublicKey_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverPublicKey.js [app-client] (ecmascript)");
Object.defineProperty(exports, "recoverPublicKey", {
    enumerable: true,
    get: function() {
        return recoverPublicKey_js_1.recoverPublicKey;
    }
});
var recoverTypedDataAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverTypedDataAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "recoverTypedDataAddress", {
    enumerable: true,
    get: function() {
        return recoverTypedDataAddress_js_1.recoverTypedDataAddress;
    }
});
var serializeErc6492Signature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/serializeErc6492Signature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "serializeErc6492Signature", {
    enumerable: true,
    get: function() {
        return serializeErc6492Signature_js_1.serializeErc6492Signature;
    }
});
var serializeErc8010Signature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/serializeErc8010Signature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "serializeErc8010Signature", {
    enumerable: true,
    get: function() {
        return serializeErc8010Signature_js_1.serializeErc8010Signature;
    }
});
var verifyHash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/verifyHash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "verifyHash", {
    enumerable: true,
    get: function() {
        return verifyHash_js_1.verifyHash;
    }
});
var verifyMessage_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/verifyMessage.js [app-client] (ecmascript)");
Object.defineProperty(exports, "verifyMessage", {
    enumerable: true,
    get: function() {
        return verifyMessage_js_1.verifyMessage;
    }
});
var verifyTypedData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/verifyTypedData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "verifyTypedData", {
    enumerable: true,
    get: function() {
        return verifyTypedData_js_1.verifyTypedData;
    }
});
var stringify_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
Object.defineProperty(exports, "stringify", {
    enumerable: true,
    get: function() {
        return stringify_js_1.stringify;
    }
});
var assertRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-client] (ecmascript)");
Object.defineProperty(exports, "assertRequest", {
    enumerable: true,
    get: function() {
        return assertRequest_js_1.assertRequest;
    }
});
var assertTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/assertTransaction.js [app-client] (ecmascript)");
Object.defineProperty(exports, "assertTransactionEIP1559", {
    enumerable: true,
    get: function() {
        return assertTransaction_js_1.assertTransactionEIP1559;
    }
});
Object.defineProperty(exports, "assertTransactionEIP2930", {
    enumerable: true,
    get: function() {
        return assertTransaction_js_1.assertTransactionEIP2930;
    }
});
Object.defineProperty(exports, "assertTransactionLegacy", {
    enumerable: true,
    get: function() {
        return assertTransaction_js_1.assertTransactionLegacy;
    }
});
var getSerializedTransactionType_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/getSerializedTransactionType.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getSerializedTransactionType", {
    enumerable: true,
    get: function() {
        return getSerializedTransactionType_js_1.getSerializedTransactionType;
    }
});
var getTransactionType_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/getTransactionType.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getTransactionType", {
    enumerable: true,
    get: function() {
        return getTransactionType_js_1.getTransactionType;
    }
});
var parseTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/parseTransaction.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseTransaction", {
    enumerable: true,
    get: function() {
        return parseTransaction_js_1.parseTransaction;
    }
});
var serializeAccessList_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/serializeAccessList.js [app-client] (ecmascript)");
Object.defineProperty(exports, "serializeAccessList", {
    enumerable: true,
    get: function() {
        return serializeAccessList_js_1.serializeAccessList;
    }
});
var serializeTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/serializeTransaction.js [app-client] (ecmascript)");
Object.defineProperty(exports, "serializeTransaction", {
    enumerable: true,
    get: function() {
        return serializeTransaction_js_1.serializeTransaction;
    }
});
var typedData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/typedData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "serializeTypedData", {
    enumerable: true,
    get: function() {
        return typedData_js_1.serializeTypedData;
    }
});
Object.defineProperty(exports, "validateTypedData", {
    enumerable: true,
    get: function() {
        return typedData_js_1.validateTypedData;
    }
});
var formatEther_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/formatEther.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatEther", {
    enumerable: true,
    get: function() {
        return formatEther_js_1.formatEther;
    }
});
var formatGwei_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatGwei", {
    enumerable: true,
    get: function() {
        return formatGwei_js_1.formatGwei;
    }
});
var formatUnits_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/formatUnits.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatUnits", {
    enumerable: true,
    get: function() {
        return formatUnits_js_1.formatUnits;
    }
});
var parseEther_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/parseEther.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseEther", {
    enumerable: true,
    get: function() {
        return parseEther_js_1.parseEther;
    }
});
var parseGwei_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/parseGwei.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseGwei", {
    enumerable: true,
    get: function() {
        return parseGwei_js_1.parseGwei;
    }
});
var parseUnits_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/parseUnits.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseUnits", {
    enumerable: true,
    get: function() {
        return parseUnits_js_1.parseUnits;
    }
}); //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/proof.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatProof = formatProof;
const index_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/index.js [app-client] (ecmascript)");
function formatStorageProof(storageProof) {
    return storageProof.map((proof)=>({
            ...proof,
            value: BigInt(proof.value)
        }));
}
function formatProof(proof) {
    return {
        ...proof,
        balance: proof.balance ? BigInt(proof.balance) : undefined,
        nonce: proof.nonce ? (0, index_js_1.hexToNumber)(proof.nonce) : undefined,
        storageProof: proof.storageProof ? formatStorageProof(proof.storageProof) : undefined
    };
} //# sourceMappingURL=proof.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getProof.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getProof = getProof;
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const proof_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/proof.js [app-client] (ecmascript)");
async function getProof(client, { address, blockNumber, blockTag: blockTag_, storageKeys }) {
    const blockTag = blockTag_ ?? 'latest';
    const blockNumberHex = blockNumber !== undefined ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
    const proof = await client.request({
        method: 'eth_getProof',
        params: [
            address,
            storageKeys,
            blockNumberHex || blockTag
        ]
    });
    return (0, proof_js_1.formatProof)(proof);
} //# sourceMappingURL=getProof.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getStorageAt.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getStorageAt = getStorageAt;
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
async function getStorageAt(client, { address, blockNumber, blockTag = 'latest', slot }) {
    const blockNumberHex = blockNumber !== undefined ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
    const data = await client.request({
        method: 'eth_getStorageAt',
        params: [
            address,
            slot,
            blockNumberHex || blockTag
        ]
    });
    return data;
} //# sourceMappingURL=getStorageAt.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getTransaction.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransaction = getTransaction;
const transaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const transaction_js_2 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transaction.js [app-client] (ecmascript)");
async function getTransaction(client, { blockHash, blockNumber, blockTag: blockTag_, hash, index, sender, nonce }) {
    const blockTag = blockTag_ || 'latest';
    const blockNumberHex = blockNumber !== undefined ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
    let transaction = null;
    if (hash) {
        transaction = await client.request({
            method: 'eth_getTransactionByHash',
            params: [
                hash
            ]
        }, {
            dedupe: true
        });
    } else if (blockHash) {
        transaction = await client.request({
            method: 'eth_getTransactionByBlockHashAndIndex',
            params: [
                blockHash,
                (0, toHex_js_1.numberToHex)(index)
            ]
        }, {
            dedupe: true
        });
    } else if ((blockNumberHex || blockTag) && typeof index === 'number') {
        transaction = await client.request({
            method: 'eth_getTransactionByBlockNumberAndIndex',
            params: [
                blockNumberHex || blockTag,
                (0, toHex_js_1.numberToHex)(index)
            ]
        }, {
            dedupe: Boolean(blockNumberHex)
        });
    } else if (sender && typeof nonce === 'number') {
        transaction = await client.request({
            method: 'eth_getTransactionBySenderAndNonce',
            params: [
                sender,
                (0, toHex_js_1.numberToHex)(nonce)
            ]
        }, {
            dedupe: true
        });
    }
    if (!transaction) throw new transaction_js_1.TransactionNotFoundError({
        blockHash,
        blockNumber,
        blockTag,
        hash,
        index
    });
    const format = client.chain?.formatters?.transaction?.format || transaction_js_2.formatTransaction;
    return format(transaction, 'getTransaction');
} //# sourceMappingURL=getTransaction.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getTransactionConfirmations.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransactionConfirmations = getTransactionConfirmations;
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const getBlockNumber_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getBlockNumber.js [app-client] (ecmascript)");
const getTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getTransaction.js [app-client] (ecmascript)");
async function getTransactionConfirmations(client, { hash, transactionReceipt }) {
    const [blockNumber, transaction] = await Promise.all([
        (0, getAction_js_1.getAction)(client, getBlockNumber_js_1.getBlockNumber, 'getBlockNumber')({}),
        hash ? (0, getAction_js_1.getAction)(client, getTransaction_js_1.getTransaction, 'getTransaction')({
            hash
        }) : undefined
    ]);
    const transactionBlockNumber = transactionReceipt?.blockNumber || transaction?.blockNumber;
    if (!transactionBlockNumber) return 0n;
    return blockNumber - transactionBlockNumber + 1n;
} //# sourceMappingURL=getTransactionConfirmations.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getTransactionReceipt.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransactionReceipt = getTransactionReceipt;
const transaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
const transactionReceipt_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transactionReceipt.js [app-client] (ecmascript)");
async function getTransactionReceipt(client, { hash }) {
    const receipt = await client.request({
        method: 'eth_getTransactionReceipt',
        params: [
            hash
        ]
    }, {
        dedupe: true
    });
    if (!receipt) throw new transaction_js_1.TransactionReceiptNotFoundError({
        hash
    });
    const format = client.chain?.formatters?.transactionReceipt?.format || transactionReceipt_js_1.formatTransactionReceipt;
    return format(receipt, 'getTransactionReceipt');
} //# sourceMappingURL=getTransactionReceipt.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/multicall.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.multicall = multicall;
const abis_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/abis.js [app-client] (ecmascript)");
const contracts_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/contracts.js [app-client] (ecmascript)");
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const contract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/contract.js [app-client] (ecmascript)");
const decodeFunctionResult_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
const getChainContractAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-client] (ecmascript)");
const getContractError_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getContractError.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const readContract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/readContract.js [app-client] (ecmascript)");
async function multicall(client, parameters) {
    const { account, authorizationList, allowFailure = true, blockNumber, blockOverrides, blockTag, stateOverride } = parameters;
    const contracts = parameters.contracts;
    const { batchSize = parameters.batchSize ?? 1024, deployless = parameters.deployless ?? false } = typeof client.batch?.multicall === 'object' ? client.batch.multicall : {};
    const multicallAddress = (()=>{
        if (parameters.multicallAddress) return parameters.multicallAddress;
        if (deployless) return null;
        if (client.chain) {
            return (0, getChainContractAddress_js_1.getChainContractAddress)({
                blockNumber,
                chain: client.chain,
                contract: 'multicall3'
            });
        }
        throw new Error('client chain not configured. multicallAddress is required.');
    })();
    const chunkedCalls = [
        []
    ];
    let currentChunk = 0;
    let currentChunkSize = 0;
    for(let i = 0; i < contracts.length; i++){
        const { abi, address, args, functionName } = contracts[i];
        try {
            const callData = (0, encodeFunctionData_js_1.encodeFunctionData)({
                abi,
                args,
                functionName
            });
            currentChunkSize += (callData.length - 2) / 2;
            if (batchSize > 0 && currentChunkSize > batchSize && chunkedCalls[currentChunk].length > 0) {
                currentChunk++;
                currentChunkSize = (callData.length - 2) / 2;
                chunkedCalls[currentChunk] = [];
            }
            chunkedCalls[currentChunk] = [
                ...chunkedCalls[currentChunk],
                {
                    allowFailure: true,
                    callData,
                    target: address
                }
            ];
        } catch (err) {
            const error = (0, getContractError_js_1.getContractError)(err, {
                abi,
                address,
                args,
                docsPath: '/docs/contract/multicall',
                functionName,
                sender: account
            });
            if (!allowFailure) throw error;
            chunkedCalls[currentChunk] = [
                ...chunkedCalls[currentChunk],
                {
                    allowFailure: true,
                    callData: '0x',
                    target: address
                }
            ];
        }
    }
    const aggregate3Results = await Promise.allSettled(chunkedCalls.map((calls)=>(0, getAction_js_1.getAction)(client, readContract_js_1.readContract, 'readContract')({
            ...multicallAddress === null ? {
                code: contracts_js_1.multicall3Bytecode
            } : {
                address: multicallAddress
            },
            abi: abis_js_1.multicall3Abi,
            account,
            args: [
                calls
            ],
            authorizationList,
            blockNumber,
            blockOverrides,
            blockTag,
            functionName: 'aggregate3',
            stateOverride
        })));
    const results = [];
    for(let i = 0; i < aggregate3Results.length; i++){
        const result = aggregate3Results[i];
        if (result.status === 'rejected') {
            if (!allowFailure) throw result.reason;
            for(let j = 0; j < chunkedCalls[i].length; j++){
                results.push({
                    status: 'failure',
                    error: result.reason,
                    result: undefined
                });
            }
            continue;
        }
        const aggregate3Result = result.value;
        for(let j = 0; j < aggregate3Result.length; j++){
            const { returnData, success } = aggregate3Result[j];
            const { callData } = chunkedCalls[i][j];
            const { abi, address, functionName, args } = contracts[results.length];
            try {
                if (callData === '0x') throw new abi_js_1.AbiDecodingZeroDataError();
                if (!success) throw new contract_js_1.RawContractError({
                    data: returnData
                });
                const result = (0, decodeFunctionResult_js_1.decodeFunctionResult)({
                    abi,
                    args,
                    data: returnData,
                    functionName
                });
                results.push(allowFailure ? {
                    result,
                    status: 'success'
                } : result);
            } catch (err) {
                const error = (0, getContractError_js_1.getContractError)(err, {
                    abi,
                    address,
                    args,
                    docsPath: '/docs/contract/multicall',
                    functionName
                });
                if (!allowFailure) throw error;
                results.push({
                    error,
                    result: undefined,
                    status: 'failure'
                });
            }
        }
    }
    if (results.length !== contracts.length) throw new base_js_1.BaseError('multicall results mismatch');
    return results;
} //# sourceMappingURL=multicall.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/simulateBlocks.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.simulateBlocks = simulateBlocks;
const BlockOverrides = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/ox/_cjs/core/BlockOverrides.js [app-client] (ecmascript)");
const parseAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const contract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/contract.js [app-client] (ecmascript)");
const node_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/node.js [app-client] (ecmascript)");
const decodeFunctionResult_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const getContractError_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getContractError.js [app-client] (ecmascript)");
const getNodeError_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getNodeError.js [app-client] (ecmascript)");
const block_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/block.js [app-client] (ecmascript)");
const log_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/log.js [app-client] (ecmascript)");
const transactionRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
const stateOverride_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/stateOverride.js [app-client] (ecmascript)");
const assertRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-client] (ecmascript)");
async function simulateBlocks(client, parameters) {
    const { blockNumber, blockTag = client.experimental_blockTag ?? 'latest', blocks, returnFullTransactions, traceTransfers, validation } = parameters;
    try {
        const blockStateCalls = [];
        for (const block of blocks){
            const blockOverrides = block.blockOverrides ? BlockOverrides.toRpc(block.blockOverrides) : undefined;
            const calls = block.calls.map((call_)=>{
                const call = call_;
                const account = call.account ? (0, parseAccount_js_1.parseAccount)(call.account) : undefined;
                const data = call.abi ? (0, encodeFunctionData_js_1.encodeFunctionData)(call) : call.data;
                const request = {
                    ...call,
                    account,
                    data: call.dataSuffix ? (0, concat_js_1.concat)([
                        data || '0x',
                        call.dataSuffix
                    ]) : data,
                    from: call.from ?? account?.address
                };
                (0, assertRequest_js_1.assertRequest)(request);
                return (0, transactionRequest_js_1.formatTransactionRequest)(request);
            });
            const stateOverrides = block.stateOverrides ? (0, stateOverride_js_1.serializeStateOverride)(block.stateOverrides) : undefined;
            blockStateCalls.push({
                blockOverrides,
                calls,
                stateOverrides
            });
        }
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const result = await client.request({
            method: 'eth_simulateV1',
            params: [
                {
                    blockStateCalls,
                    returnFullTransactions,
                    traceTransfers,
                    validation
                },
                block
            ]
        });
        return result.map((block, i)=>({
                ...(0, block_js_1.formatBlock)(block),
                calls: block.calls.map((call, j)=>{
                    const { abi, args, functionName, to } = blocks[i].calls[j];
                    const data = call.error?.data ?? call.returnData;
                    const gasUsed = BigInt(call.gasUsed);
                    const logs = call.logs?.map((log)=>(0, log_js_1.formatLog)(log));
                    const status = call.status === '0x1' ? 'success' : 'failure';
                    const result = abi && status === 'success' && data !== '0x' ? (0, decodeFunctionResult_js_1.decodeFunctionResult)({
                        abi,
                        data,
                        functionName
                    }) : null;
                    const error = (()=>{
                        if (status === 'success') return undefined;
                        let error;
                        if (call.error?.data === '0x') error = new abi_js_1.AbiDecodingZeroDataError();
                        else if (call.error) error = new contract_js_1.RawContractError(call.error);
                        if (!error) return undefined;
                        return (0, getContractError_js_1.getContractError)(error, {
                            abi: abi ?? [],
                            address: to ?? '0x',
                            args,
                            functionName: functionName ?? '<unknown>'
                        });
                    })();
                    return {
                        data,
                        gasUsed,
                        logs,
                        status,
                        ...status === 'success' ? {
                            result
                        } : {
                            error
                        }
                    };
                })
            }));
    } catch (e) {
        const cause = e;
        const error = (0, getNodeError_js_1.getNodeError)(cause, {});
        if (error instanceof node_js_1.UnknownNodeError) throw cause;
        throw error;
    }
} //# sourceMappingURL=simulateBlocks.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/address.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zeroAddress = exports.ethAddress = exports.entryPoint08Address = exports.entryPoint07Address = exports.entryPoint06Address = void 0;
exports.entryPoint06Address = '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789';
exports.entryPoint07Address = '0x0000000071727De22E5E9d8BAf0edAc6f37da032';
exports.entryPoint08Address = '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108';
exports.ethAddress = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
exports.zeroAddress = '0x0000000000000000000000000000000000000000'; //# sourceMappingURL=address.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/simulateCalls.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.simulateCalls = simulateCalls;
const AbiConstructor = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/ox/_cjs/core/AbiConstructor.js [app-client] (ecmascript)");
const AbiFunction = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/ox/_cjs/core/AbiFunction.js [app-client] (ecmascript)");
const parseAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const address_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/address.js [app-client] (ecmascript)");
const contracts_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/contracts.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
const index_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/index.js [app-client] (ecmascript)");
const createAccessList_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/createAccessList.js [app-client] (ecmascript)");
const simulateBlocks_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/simulateBlocks.js [app-client] (ecmascript)");
const getBalanceCode = '0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033';
async function simulateCalls(client, parameters) {
    const { blockNumber, blockTag, calls, stateOverrides, traceAssetChanges, traceTransfers, validation } = parameters;
    const account = parameters.account ? (0, parseAccount_js_1.parseAccount)(parameters.account) : undefined;
    if (traceAssetChanges && !account) throw new base_js_1.BaseError('`account` is required when `traceAssetChanges` is true');
    const getBalanceData = account ? AbiConstructor.encode(AbiConstructor.from('constructor(bytes, bytes)'), {
        bytecode: contracts_js_1.deploylessCallViaBytecodeBytecode,
        args: [
            getBalanceCode,
            AbiFunction.encodeData(AbiFunction.from('function getBalance(address)'), [
                account.address
            ])
        ]
    }) : undefined;
    const assetAddresses = traceAssetChanges ? await Promise.all(parameters.calls.map(async (call)=>{
        if (!call.data && !call.abi) return;
        const { accessList } = await (0, createAccessList_js_1.createAccessList)(client, {
            account: account.address,
            ...call,
            data: call.abi ? (0, encodeFunctionData_js_1.encodeFunctionData)(call) : call.data
        });
        return accessList.map(({ address, storageKeys })=>storageKeys.length > 0 ? address : null);
    })).then((x)=>x.flat().filter(Boolean)) : [];
    const blocks = await (0, simulateBlocks_js_1.simulateBlocks)(client, {
        blockNumber,
        blockTag: blockTag,
        blocks: [
            ...traceAssetChanges ? [
                {
                    calls: [
                        {
                            data: getBalanceData
                        }
                    ],
                    stateOverrides
                },
                {
                    calls: assetAddresses.map((address, i)=>({
                            abi: [
                                AbiFunction.from('function balanceOf(address) returns (uint256)')
                            ],
                            functionName: 'balanceOf',
                            args: [
                                account.address
                            ],
                            to: address,
                            from: address_js_1.zeroAddress,
                            nonce: i
                        })),
                    stateOverrides: [
                        {
                            address: address_js_1.zeroAddress,
                            nonce: 0
                        }
                    ]
                }
            ] : [],
            {
                calls: [
                    ...calls,
                    {}
                ].map((call)=>({
                        ...call,
                        from: account?.address
                    })),
                stateOverrides
            },
            ...traceAssetChanges ? [
                {
                    calls: [
                        {
                            data: getBalanceData
                        }
                    ]
                },
                {
                    calls: assetAddresses.map((address, i)=>({
                            abi: [
                                AbiFunction.from('function balanceOf(address) returns (uint256)')
                            ],
                            functionName: 'balanceOf',
                            args: [
                                account.address
                            ],
                            to: address,
                            from: address_js_1.zeroAddress,
                            nonce: i
                        })),
                    stateOverrides: [
                        {
                            address: address_js_1.zeroAddress,
                            nonce: 0
                        }
                    ]
                },
                {
                    calls: assetAddresses.map((address, i)=>({
                            to: address,
                            abi: [
                                AbiFunction.from('function decimals() returns (uint256)')
                            ],
                            functionName: 'decimals',
                            from: address_js_1.zeroAddress,
                            nonce: i
                        })),
                    stateOverrides: [
                        {
                            address: address_js_1.zeroAddress,
                            nonce: 0
                        }
                    ]
                },
                {
                    calls: assetAddresses.map((address, i)=>({
                            to: address,
                            abi: [
                                AbiFunction.from('function tokenURI(uint256) returns (string)')
                            ],
                            functionName: 'tokenURI',
                            args: [
                                0n
                            ],
                            from: address_js_1.zeroAddress,
                            nonce: i
                        })),
                    stateOverrides: [
                        {
                            address: address_js_1.zeroAddress,
                            nonce: 0
                        }
                    ]
                },
                {
                    calls: assetAddresses.map((address, i)=>({
                            to: address,
                            abi: [
                                AbiFunction.from('function symbol() returns (string)')
                            ],
                            functionName: 'symbol',
                            from: address_js_1.zeroAddress,
                            nonce: i
                        })),
                    stateOverrides: [
                        {
                            address: address_js_1.zeroAddress,
                            nonce: 0
                        }
                    ]
                }
            ] : []
        ],
        traceTransfers,
        validation
    });
    const block_results = traceAssetChanges ? blocks[2] : blocks[0];
    const [block_ethPre, block_assetsPre, , block_ethPost, block_assetsPost, block_decimals, block_tokenURI, block_symbols] = traceAssetChanges ? blocks : [];
    const { calls: block_calls, ...block } = block_results;
    const results = block_calls.slice(0, -1) ?? [];
    const ethPre = block_ethPre?.calls ?? [];
    const assetsPre = block_assetsPre?.calls ?? [];
    const balancesPre = [
        ...ethPre,
        ...assetsPre
    ].map((call)=>call.status === 'success' ? (0, index_js_1.hexToBigInt)(call.data) : null);
    const ethPost = block_ethPost?.calls ?? [];
    const assetsPost = block_assetsPost?.calls ?? [];
    const balancesPost = [
        ...ethPost,
        ...assetsPost
    ].map((call)=>call.status === 'success' ? (0, index_js_1.hexToBigInt)(call.data) : null);
    const decimals = (block_decimals?.calls ?? []).map((x)=>x.status === 'success' ? x.result : null);
    const symbols = (block_symbols?.calls ?? []).map((x)=>x.status === 'success' ? x.result : null);
    const tokenURI = (block_tokenURI?.calls ?? []).map((x)=>x.status === 'success' ? x.result : null);
    const changes = [];
    for (const [i, balancePost] of balancesPost.entries()){
        const balancePre = balancesPre[i];
        if (typeof balancePost !== 'bigint') continue;
        if (typeof balancePre !== 'bigint') continue;
        const decimals_ = decimals[i - 1];
        const symbol_ = symbols[i - 1];
        const tokenURI_ = tokenURI[i - 1];
        const token = (()=>{
            if (i === 0) return {
                address: address_js_1.ethAddress,
                decimals: 18,
                symbol: 'ETH'
            };
            return {
                address: assetAddresses[i - 1],
                decimals: tokenURI_ || decimals_ ? Number(decimals_ ?? 1) : undefined,
                symbol: symbol_ ?? undefined
            };
        })();
        if (changes.some((change)=>change.token.address === token.address)) continue;
        changes.push({
            token,
            value: {
                pre: balancePre,
                post: balancePost,
                diff: balancePost - balancePre
            }
        });
    }
    return {
        assetChanges: changes,
        block,
        results
    };
} //# sourceMappingURL=simulateCalls.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/serializeSignature.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeSignature = serializeSignature;
const secp256k1_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/node_modules/@noble/curves/secp256k1.js [app-client] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
function serializeSignature({ r, s, to = 'hex', v, yParity }) {
    const yParity_ = (()=>{
        if (yParity === 0 || yParity === 1) return yParity;
        if (v && (v === 27n || v === 28n || v >= 35n)) return v % 2n === 0n ? 1 : 0;
        throw new Error('Invalid `v` or `yParity` value');
    })();
    const signature = `0x${new secp256k1_1.secp256k1.Signature((0, fromHex_js_1.hexToBigInt)(r), (0, fromHex_js_1.hexToBigInt)(s)).toCompactHex()}${yParity_ === 0 ? '1b' : '1c'}`;
    if (to === 'hex') return signature;
    return (0, toBytes_js_1.hexToBytes)(signature);
} //# sourceMappingURL=serializeSignature.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/verifyHash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyHash = verifyHash;
exports.verifyErc8010 = verifyErc8010;
exports.verifyErc1271 = verifyErc1271;
const erc6492_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/ox/_cjs/erc6492/index.js [app-client] (ecmascript)");
const erc8010_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/ox/_cjs/erc8010/index.js [app-client] (ecmascript)");
const abis_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/abis.js [app-client] (ecmascript)");
const contracts_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/contracts.js [app-client] (ecmascript)");
const contract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/contract.js [app-client] (ecmascript)");
const encodeDeployData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeDeployData.js [app-client] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
const getAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
const isAddressEqual_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-client] (ecmascript)");
const verifyAuthorization_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/authorization/verifyAuthorization.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const isHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const recoverAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverAddress.js [app-client] (ecmascript)");
const serializeSignature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/serializeSignature.js [app-client] (ecmascript)");
const call_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/call.js [app-client] (ecmascript)");
const getCode_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getCode.js [app-client] (ecmascript)");
const readContract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/readContract.js [app-client] (ecmascript)");
async function verifyHash(client, parameters) {
    const { address, hash, erc6492VerifierAddress: verifierAddress = parameters.universalSignatureVerifierAddress ?? client.chain?.contracts?.erc6492Verifier?.address, multicallAddress = parameters.multicallAddress ?? client.chain?.contracts?.multicall3?.address } = parameters;
    const signature = (()=>{
        const signature = parameters.signature;
        if ((0, isHex_js_1.isHex)(signature)) return signature;
        if (typeof signature === 'object' && 'r' in signature && 's' in signature) return (0, serializeSignature_js_1.serializeSignature)(signature);
        return (0, toHex_js_1.bytesToHex)(signature);
    })();
    try {
        if (erc8010_1.SignatureErc8010.validate(signature)) return await verifyErc8010(client, {
            ...parameters,
            multicallAddress,
            signature
        });
        return await verifyErc6492(client, {
            ...parameters,
            verifierAddress,
            signature
        });
    } catch (error) {
        try {
            const verified = (0, isAddressEqual_js_1.isAddressEqual)((0, getAddress_js_1.getAddress)(address), await (0, recoverAddress_js_1.recoverAddress)({
                hash,
                signature
            }));
            if (verified) return true;
        } catch  {}
        if (error instanceof VerificationError) {
            return false;
        }
        throw error;
    }
}
async function verifyErc8010(client, parameters) {
    const { address, blockNumber, blockTag, hash, multicallAddress } = parameters;
    const { authorization: authorization_ox, data: initData, signature, to } = erc8010_1.SignatureErc8010.unwrap(parameters.signature);
    const code = await (0, getCode_js_1.getCode)(client, {
        address,
        blockNumber,
        blockTag
    });
    if (code === (0, concat_js_1.concatHex)([
        '0xef0100',
        authorization_ox.address
    ])) return await verifyErc1271(client, {
        address,
        blockNumber,
        blockTag,
        hash,
        signature
    });
    const authorization = {
        address: authorization_ox.address,
        chainId: Number(authorization_ox.chainId),
        nonce: Number(authorization_ox.nonce),
        r: (0, toHex_js_1.numberToHex)(authorization_ox.r, {
            size: 32
        }),
        s: (0, toHex_js_1.numberToHex)(authorization_ox.s, {
            size: 32
        }),
        yParity: authorization_ox.yParity
    };
    const valid = await (0, verifyAuthorization_js_1.verifyAuthorization)({
        address,
        authorization
    });
    if (!valid) throw new VerificationError();
    const results = await (0, getAction_js_1.getAction)(client, readContract_js_1.readContract, 'readContract')({
        ...multicallAddress ? {
            address: multicallAddress
        } : {
            code: contracts_js_1.multicall3Bytecode
        },
        authorizationList: [
            authorization
        ],
        abi: abis_js_1.multicall3Abi,
        blockNumber,
        blockTag: 'pending',
        functionName: 'aggregate3',
        args: [
            [
                ...initData ? [
                    {
                        allowFailure: true,
                        target: to ?? address,
                        callData: initData
                    }
                ] : [],
                {
                    allowFailure: true,
                    target: address,
                    callData: (0, encodeFunctionData_js_1.encodeFunctionData)({
                        abi: abis_js_1.erc1271Abi,
                        functionName: 'isValidSignature',
                        args: [
                            hash,
                            signature
                        ]
                    })
                }
            ]
        ]
    });
    const data = results[results.length - 1]?.returnData;
    if (data?.startsWith('0x1626ba7e')) return true;
    throw new VerificationError();
}
async function verifyErc6492(client, parameters) {
    const { address, factory, factoryData, hash, signature, verifierAddress, ...rest } = parameters;
    const wrappedSignature = await (async ()=>{
        if (!factory && !factoryData) return signature;
        if (erc6492_1.SignatureErc6492.validate(signature)) return signature;
        return erc6492_1.SignatureErc6492.wrap({
            data: factoryData,
            signature,
            to: factory
        });
    })();
    const args = verifierAddress ? {
        to: verifierAddress,
        data: (0, encodeFunctionData_js_1.encodeFunctionData)({
            abi: abis_js_1.erc6492SignatureValidatorAbi,
            functionName: 'isValidSig',
            args: [
                address,
                hash,
                wrappedSignature
            ]
        }),
        ...rest
    } : {
        data: (0, encodeDeployData_js_1.encodeDeployData)({
            abi: abis_js_1.erc6492SignatureValidatorAbi,
            args: [
                address,
                hash,
                wrappedSignature
            ],
            bytecode: contracts_js_1.erc6492SignatureValidatorByteCode
        }),
        ...rest
    };
    const { data } = await (0, getAction_js_1.getAction)(client, call_js_1.call, 'call')(args).catch((error)=>{
        if (error instanceof contract_js_1.CallExecutionError) throw new VerificationError();
        throw error;
    });
    if ((0, fromHex_js_1.hexToBool)(data ?? '0x0')) return true;
    throw new VerificationError();
}
async function verifyErc1271(client, parameters) {
    const { address, blockNumber, blockTag, hash, signature } = parameters;
    const result = await (0, getAction_js_1.getAction)(client, readContract_js_1.readContract, 'readContract')({
        address,
        abi: abis_js_1.erc1271Abi,
        args: [
            hash,
            signature
        ],
        blockNumber,
        blockTag,
        functionName: 'isValidSignature'
    }).catch((error)=>{
        if (error instanceof contract_js_1.ContractFunctionExecutionError) throw new VerificationError();
        throw error;
    });
    if (result.startsWith('0x1626ba7e')) return true;
    throw new VerificationError();
}
class VerificationError extends Error {
} //# sourceMappingURL=verifyHash.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/verifyMessage.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyMessage = verifyMessage;
const hashMessage_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/hashMessage.js [app-client] (ecmascript)");
const verifyHash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/verifyHash.js [app-client] (ecmascript)");
async function verifyMessage(client, { address, message, factory, factoryData, signature, ...callRequest }) {
    const hash = (0, hashMessage_js_1.hashMessage)(message);
    return (0, verifyHash_js_1.verifyHash)(client, {
        address,
        factory: factory,
        factoryData: factoryData,
        hash,
        signature,
        ...callRequest
    });
} //# sourceMappingURL=verifyMessage.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/verifyTypedData.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyTypedData = verifyTypedData;
const hashTypedData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-client] (ecmascript)");
const verifyHash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/verifyHash.js [app-client] (ecmascript)");
async function verifyTypedData(client, parameters) {
    const { address, factory, factoryData, signature, message, primaryType, types, domain, ...callRequest } = parameters;
    const hash = (0, hashTypedData_js_1.hashTypedData)({
        message,
        primaryType,
        types,
        domain
    });
    return (0, verifyHash_js_1.verifyHash)(client, {
        address,
        factory: factory,
        factoryData: factoryData,
        hash,
        signature,
        ...callRequest
    });
} //# sourceMappingURL=verifyTypedData.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/watchBlockNumber.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.watchBlockNumber = watchBlockNumber;
const fromHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const observe_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/observe.js [app-client] (ecmascript)");
const poll_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/poll.js [app-client] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
const getBlockNumber_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getBlockNumber.js [app-client] (ecmascript)");
function watchBlockNumber(client, { emitOnBegin = false, emitMissed = false, onBlockNumber, onError, poll: poll_, pollingInterval = client.pollingInterval }) {
    const enablePolling = (()=>{
        if (typeof poll_ !== 'undefined') return poll_;
        if (client.transport.type === 'webSocket' || client.transport.type === 'ipc') return false;
        if (client.transport.type === 'fallback' && (client.transport.transports[0].config.type === 'webSocket' || client.transport.transports[0].config.type === 'ipc')) return false;
        return true;
    })();
    let prevBlockNumber;
    const pollBlockNumber = ()=>{
        const observerId = (0, stringify_js_1.stringify)([
            'watchBlockNumber',
            client.uid,
            emitOnBegin,
            emitMissed,
            pollingInterval
        ]);
        return (0, observe_js_1.observe)(observerId, {
            onBlockNumber,
            onError
        }, (emit)=>(0, poll_js_1.poll)(async ()=>{
                try {
                    const blockNumber = await (0, getAction_js_1.getAction)(client, getBlockNumber_js_1.getBlockNumber, 'getBlockNumber')({
                        cacheTime: 0
                    });
                    if (prevBlockNumber !== undefined) {
                        if (blockNumber === prevBlockNumber) return;
                        if (blockNumber - prevBlockNumber > 1 && emitMissed) {
                            for(let i = prevBlockNumber + 1n; i < blockNumber; i++){
                                emit.onBlockNumber(i, prevBlockNumber);
                                prevBlockNumber = i;
                            }
                        }
                    }
                    if (prevBlockNumber === undefined || blockNumber > prevBlockNumber) {
                        emit.onBlockNumber(blockNumber, prevBlockNumber);
                        prevBlockNumber = blockNumber;
                    }
                } catch (err) {
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin,
                interval: pollingInterval
            }));
    };
    const subscribeBlockNumber = ()=>{
        const observerId = (0, stringify_js_1.stringify)([
            'watchBlockNumber',
            client.uid,
            emitOnBegin,
            emitMissed
        ]);
        return (0, observe_js_1.observe)(observerId, {
            onBlockNumber,
            onError
        }, (emit)=>{
            let active = true;
            let unsubscribe = ()=>active = false;
            (async ()=>{
                try {
                    const transport = (()=>{
                        if (client.transport.type === 'fallback') {
                            const transport = client.transport.transports.find((transport)=>transport.config.type === 'webSocket' || transport.config.type === 'ipc');
                            if (!transport) return client.transport;
                            return transport.value;
                        }
                        return client.transport;
                    })();
                    const { unsubscribe: unsubscribe_ } = await transport.subscribe({
                        params: [
                            'newHeads'
                        ],
                        onData (data) {
                            if (!active) return;
                            const blockNumber = (0, fromHex_js_1.hexToBigInt)(data.result?.number);
                            emit.onBlockNumber(blockNumber, prevBlockNumber);
                            prevBlockNumber = blockNumber;
                        },
                        onError (error) {
                            emit.onError?.(error);
                        }
                    });
                    unsubscribe = unsubscribe_;
                    if (!active) unsubscribe();
                } catch (err) {
                    onError?.(err);
                }
            })();
            return ()=>unsubscribe();
        });
    };
    return enablePolling ? pollBlockNumber() : subscribeBlockNumber();
} //# sourceMappingURL=watchBlockNumber.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/waitForTransactionReceipt.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.waitForTransactionReceipt = waitForTransactionReceipt;
const block_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/block.js [app-client] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const observe_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/observe.js [app-client] (ecmascript)");
const withResolvers_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/promise/withResolvers.js [app-client] (ecmascript)");
const withRetry_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/promise/withRetry.js [app-client] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
const getBlock_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getBlock.js [app-client] (ecmascript)");
const getTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getTransaction.js [app-client] (ecmascript)");
const getTransactionReceipt_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getTransactionReceipt.js [app-client] (ecmascript)");
const watchBlockNumber_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/watchBlockNumber.js [app-client] (ecmascript)");
async function waitForTransactionReceipt(client, parameters) {
    const { checkReplacement = true, confirmations = 1, hash, onReplaced, retryCount = 6, retryDelay = ({ count })=>~~(1 << count) * 200, timeout = 180_000 } = parameters;
    const observerId = (0, stringify_js_1.stringify)([
        'waitForTransactionReceipt',
        client.uid,
        hash
    ]);
    const pollingInterval = (()=>{
        if (parameters.pollingInterval) return parameters.pollingInterval;
        if (client.chain?.experimental_preconfirmationTime) return client.chain.experimental_preconfirmationTime;
        return client.pollingInterval;
    })();
    let transaction;
    let replacedTransaction;
    let receipt;
    let retrying = false;
    let _unobserve;
    let _unwatch;
    const { promise, resolve, reject } = (0, withResolvers_js_1.withResolvers)();
    const timer = timeout ? setTimeout(()=>{
        _unwatch?.();
        _unobserve?.();
        reject(new transaction_js_1.WaitForTransactionReceiptTimeoutError({
            hash
        }));
    }, timeout) : undefined;
    _unobserve = (0, observe_js_1.observe)(observerId, {
        onReplaced,
        resolve,
        reject
    }, async (emit)=>{
        receipt = await (0, getAction_js_1.getAction)(client, getTransactionReceipt_js_1.getTransactionReceipt, 'getTransactionReceipt')({
            hash
        }).catch(()=>undefined);
        if (receipt && confirmations <= 1) {
            clearTimeout(timer);
            emit.resolve(receipt);
            _unobserve?.();
            return;
        }
        _unwatch = (0, getAction_js_1.getAction)(client, watchBlockNumber_js_1.watchBlockNumber, 'watchBlockNumber')({
            emitMissed: true,
            emitOnBegin: true,
            poll: true,
            pollingInterval,
            async onBlockNumber (blockNumber_) {
                const done = (fn)=>{
                    clearTimeout(timer);
                    _unwatch?.();
                    fn();
                    _unobserve?.();
                };
                let blockNumber = blockNumber_;
                if (retrying) return;
                try {
                    if (receipt) {
                        if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations)) return;
                        done(()=>emit.resolve(receipt));
                        return;
                    }
                    if (checkReplacement && !transaction) {
                        retrying = true;
                        await (0, withRetry_js_1.withRetry)(async ()=>{
                            transaction = await (0, getAction_js_1.getAction)(client, getTransaction_js_1.getTransaction, 'getTransaction')({
                                hash
                            });
                            if (transaction.blockNumber) blockNumber = transaction.blockNumber;
                        }, {
                            delay: retryDelay,
                            retryCount
                        });
                        retrying = false;
                    }
                    receipt = await (0, getAction_js_1.getAction)(client, getTransactionReceipt_js_1.getTransactionReceipt, 'getTransactionReceipt')({
                        hash
                    });
                    if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations)) return;
                    done(()=>emit.resolve(receipt));
                } catch (err) {
                    if (err instanceof transaction_js_1.TransactionNotFoundError || err instanceof transaction_js_1.TransactionReceiptNotFoundError) {
                        if (!transaction) {
                            retrying = false;
                            return;
                        }
                        try {
                            replacedTransaction = transaction;
                            retrying = true;
                            const block = await (0, withRetry_js_1.withRetry)(()=>(0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({
                                    blockNumber,
                                    includeTransactions: true
                                }), {
                                delay: retryDelay,
                                retryCount,
                                shouldRetry: ({ error })=>error instanceof block_js_1.BlockNotFoundError
                            });
                            retrying = false;
                            const replacementTransaction = block.transactions.find(({ from, nonce })=>from === replacedTransaction.from && nonce === replacedTransaction.nonce);
                            if (!replacementTransaction) return;
                            receipt = await (0, getAction_js_1.getAction)(client, getTransactionReceipt_js_1.getTransactionReceipt, 'getTransactionReceipt')({
                                hash: replacementTransaction.hash
                            });
                            if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations)) return;
                            let reason = 'replaced';
                            if (replacementTransaction.to === replacedTransaction.to && replacementTransaction.value === replacedTransaction.value && replacementTransaction.input === replacedTransaction.input) {
                                reason = 'repriced';
                            } else if (replacementTransaction.from === replacementTransaction.to && replacementTransaction.value === 0n) {
                                reason = 'cancelled';
                            }
                            done(()=>{
                                emit.onReplaced?.({
                                    reason,
                                    replacedTransaction: replacedTransaction,
                                    transaction: replacementTransaction,
                                    transactionReceipt: receipt
                                });
                                emit.resolve(receipt);
                            });
                        } catch (err_) {
                            done(()=>emit.reject(err_));
                        }
                    } else {
                        done(()=>emit.reject(err));
                    }
                }
            }
        });
    });
    return promise;
} //# sourceMappingURL=waitForTransactionReceipt.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/watchBlocks.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.watchBlocks = watchBlocks;
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const observe_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/observe.js [app-client] (ecmascript)");
const poll_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/poll.js [app-client] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
const getBlock_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getBlock.js [app-client] (ecmascript)");
function watchBlocks(client, { blockTag = client.experimental_blockTag ?? 'latest', emitMissed = false, emitOnBegin = false, onBlock, onError, includeTransactions: includeTransactions_, poll: poll_, pollingInterval = client.pollingInterval }) {
    const enablePolling = (()=>{
        if (typeof poll_ !== 'undefined') return poll_;
        if (client.transport.type === 'webSocket' || client.transport.type === 'ipc') return false;
        if (client.transport.type === 'fallback' && (client.transport.transports[0].config.type === 'webSocket' || client.transport.transports[0].config.type === 'ipc')) return false;
        return true;
    })();
    const includeTransactions = includeTransactions_ ?? false;
    let prevBlock;
    const pollBlocks = ()=>{
        const observerId = (0, stringify_js_1.stringify)([
            'watchBlocks',
            client.uid,
            blockTag,
            emitMissed,
            emitOnBegin,
            includeTransactions,
            pollingInterval
        ]);
        return (0, observe_js_1.observe)(observerId, {
            onBlock,
            onError
        }, (emit)=>(0, poll_js_1.poll)(async ()=>{
                try {
                    const block = await (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({
                        blockTag,
                        includeTransactions
                    });
                    if (block.number !== null && prevBlock?.number != null) {
                        if (block.number === prevBlock.number) return;
                        if (block.number - prevBlock.number > 1 && emitMissed) {
                            for(let i = prevBlock?.number + 1n; i < block.number; i++){
                                const block = await (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({
                                    blockNumber: i,
                                    includeTransactions
                                });
                                emit.onBlock(block, prevBlock);
                                prevBlock = block;
                            }
                        }
                    }
                    if (prevBlock?.number == null || blockTag === 'pending' && block?.number == null || block.number !== null && block.number > prevBlock.number) {
                        emit.onBlock(block, prevBlock);
                        prevBlock = block;
                    }
                } catch (err) {
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin,
                interval: pollingInterval
            }));
    };
    const subscribeBlocks = ()=>{
        let active = true;
        let emitFetched = true;
        let unsubscribe = ()=>active = false;
        (async ()=>{
            try {
                if (emitOnBegin) {
                    (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({
                        blockTag,
                        includeTransactions
                    }).then((block)=>{
                        if (!active) return;
                        if (!emitFetched) return;
                        onBlock(block, undefined);
                        emitFetched = false;
                    }).catch(onError);
                }
                const transport = (()=>{
                    if (client.transport.type === 'fallback') {
                        const transport = client.transport.transports.find((transport)=>transport.config.type === 'webSocket' || transport.config.type === 'ipc');
                        if (!transport) return client.transport;
                        return transport.value;
                    }
                    return client.transport;
                })();
                const { unsubscribe: unsubscribe_ } = await transport.subscribe({
                    params: [
                        'newHeads'
                    ],
                    async onData (data) {
                        if (!active) return;
                        const block = await (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({
                            blockNumber: data.result?.number,
                            includeTransactions
                        }).catch(()=>{});
                        if (!active) return;
                        onBlock(block, prevBlock);
                        emitFetched = false;
                        prevBlock = block;
                    },
                    onError (error) {
                        onError?.(error);
                    }
                });
                unsubscribe = unsubscribe_;
                if (!active) unsubscribe();
            } catch (err) {
                onError?.(err);
            }
        })();
        return ()=>unsubscribe();
    };
    return enablePolling ? pollBlocks() : subscribeBlocks();
} //# sourceMappingURL=watchBlocks.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/watchEvent.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.watchEvent = watchEvent;
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const rpc_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/rpc.js [app-client] (ecmascript)");
const decodeEventLog_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeEventLog.js [app-client] (ecmascript)");
const encodeEventTopics_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeEventTopics.js [app-client] (ecmascript)");
const log_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/log.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const observe_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/observe.js [app-client] (ecmascript)");
const poll_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/poll.js [app-client] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
const createEventFilter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/createEventFilter.js [app-client] (ecmascript)");
const getBlockNumber_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getBlockNumber.js [app-client] (ecmascript)");
const getFilterChanges_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getFilterChanges.js [app-client] (ecmascript)");
const getLogs_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getLogs.js [app-client] (ecmascript)");
const uninstallFilter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/uninstallFilter.js [app-client] (ecmascript)");
function watchEvent(client, { address, args, batch = true, event, events, fromBlock, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ }) {
    const enablePolling = (()=>{
        if (typeof poll_ !== 'undefined') return poll_;
        if (typeof fromBlock === 'bigint') return true;
        if (client.transport.type === 'webSocket' || client.transport.type === 'ipc') return false;
        if (client.transport.type === 'fallback' && (client.transport.transports[0].config.type === 'webSocket' || client.transport.transports[0].config.type === 'ipc')) return false;
        return true;
    })();
    const strict = strict_ ?? false;
    const pollEvent = ()=>{
        const observerId = (0, stringify_js_1.stringify)([
            'watchEvent',
            address,
            args,
            batch,
            client.uid,
            event,
            pollingInterval,
            fromBlock
        ]);
        return (0, observe_js_1.observe)(observerId, {
            onLogs,
            onError
        }, (emit)=>{
            let previousBlockNumber;
            if (fromBlock !== undefined) previousBlockNumber = fromBlock - 1n;
            let filter;
            let initialized = false;
            const unwatch = (0, poll_js_1.poll)(async ()=>{
                if (!initialized) {
                    try {
                        filter = await (0, getAction_js_1.getAction)(client, createEventFilter_js_1.createEventFilter, 'createEventFilter')({
                            address,
                            args,
                            event: event,
                            events,
                            strict,
                            fromBlock
                        });
                    } catch  {}
                    initialized = true;
                    return;
                }
                try {
                    let logs;
                    if (filter) {
                        logs = await (0, getAction_js_1.getAction)(client, getFilterChanges_js_1.getFilterChanges, 'getFilterChanges')({
                            filter
                        });
                    } else {
                        const blockNumber = await (0, getAction_js_1.getAction)(client, getBlockNumber_js_1.getBlockNumber, 'getBlockNumber')({});
                        if (previousBlockNumber && previousBlockNumber !== blockNumber) {
                            logs = await (0, getAction_js_1.getAction)(client, getLogs_js_1.getLogs, 'getLogs')({
                                address,
                                args,
                                event: event,
                                events,
                                fromBlock: previousBlockNumber + 1n,
                                toBlock: blockNumber
                            });
                        } else {
                            logs = [];
                        }
                        previousBlockNumber = blockNumber;
                    }
                    if (logs.length === 0) return;
                    if (batch) emit.onLogs(logs);
                    else for (const log of logs)emit.onLogs([
                        log
                    ]);
                } catch (err) {
                    if (filter && err instanceof rpc_js_1.InvalidInputRpcError) initialized = false;
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval
            });
            return async ()=>{
                if (filter) await (0, getAction_js_1.getAction)(client, uninstallFilter_js_1.uninstallFilter, 'uninstallFilter')({
                    filter
                });
                unwatch();
            };
        });
    };
    const subscribeEvent = ()=>{
        let active = true;
        let unsubscribe = ()=>active = false;
        (async ()=>{
            try {
                const transport = (()=>{
                    if (client.transport.type === 'fallback') {
                        const transport = client.transport.transports.find((transport)=>transport.config.type === 'webSocket' || transport.config.type === 'ipc');
                        if (!transport) return client.transport;
                        return transport.value;
                    }
                    return client.transport;
                })();
                const events_ = events ?? (event ? [
                    event
                ] : undefined);
                let topics = [];
                if (events_) {
                    const encoded = events_.flatMap((event)=>(0, encodeEventTopics_js_1.encodeEventTopics)({
                            abi: [
                                event
                            ],
                            eventName: event.name,
                            args
                        }));
                    topics = [
                        encoded
                    ];
                    if (event) topics = topics[0];
                }
                const { unsubscribe: unsubscribe_ } = await transport.subscribe({
                    params: [
                        'logs',
                        {
                            address,
                            topics
                        }
                    ],
                    onData (data) {
                        if (!active) return;
                        const log = data.result;
                        try {
                            const { eventName, args } = (0, decodeEventLog_js_1.decodeEventLog)({
                                abi: events_ ?? [],
                                data: log.data,
                                topics: log.topics,
                                strict
                            });
                            const formatted = (0, log_js_1.formatLog)(log, {
                                args,
                                eventName
                            });
                            onLogs([
                                formatted
                            ]);
                        } catch (err) {
                            let eventName;
                            let isUnnamed;
                            if (err instanceof abi_js_1.DecodeLogDataMismatch || err instanceof abi_js_1.DecodeLogTopicsMismatch) {
                                if (strict_) return;
                                eventName = err.abiItem.name;
                                isUnnamed = err.abiItem.inputs?.some((x)=>!('name' in x && x.name));
                            }
                            const formatted = (0, log_js_1.formatLog)(log, {
                                args: isUnnamed ? [] : {},
                                eventName
                            });
                            onLogs([
                                formatted
                            ]);
                        }
                    },
                    onError (error) {
                        onError?.(error);
                    }
                });
                unsubscribe = unsubscribe_;
                if (!active) unsubscribe();
            } catch (err) {
                onError?.(err);
            }
        })();
        return ()=>unsubscribe();
    };
    return enablePolling ? pollEvent() : subscribeEvent();
} //# sourceMappingURL=watchEvent.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/watchPendingTransactions.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.watchPendingTransactions = watchPendingTransactions;
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const observe_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/observe.js [app-client] (ecmascript)");
const poll_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/poll.js [app-client] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
const createPendingTransactionFilter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/createPendingTransactionFilter.js [app-client] (ecmascript)");
const getFilterChanges_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getFilterChanges.js [app-client] (ecmascript)");
const uninstallFilter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/uninstallFilter.js [app-client] (ecmascript)");
function watchPendingTransactions(client, { batch = true, onError, onTransactions, poll: poll_, pollingInterval = client.pollingInterval }) {
    const enablePolling = typeof poll_ !== 'undefined' ? poll_ : client.transport.type !== 'webSocket' && client.transport.type !== 'ipc';
    const pollPendingTransactions = ()=>{
        const observerId = (0, stringify_js_1.stringify)([
            'watchPendingTransactions',
            client.uid,
            batch,
            pollingInterval
        ]);
        return (0, observe_js_1.observe)(observerId, {
            onTransactions,
            onError
        }, (emit)=>{
            let filter;
            const unwatch = (0, poll_js_1.poll)(async ()=>{
                try {
                    if (!filter) {
                        try {
                            filter = await (0, getAction_js_1.getAction)(client, createPendingTransactionFilter_js_1.createPendingTransactionFilter, 'createPendingTransactionFilter')({});
                            return;
                        } catch (err) {
                            unwatch();
                            throw err;
                        }
                    }
                    const hashes = await (0, getAction_js_1.getAction)(client, getFilterChanges_js_1.getFilterChanges, 'getFilterChanges')({
                        filter
                    });
                    if (hashes.length === 0) return;
                    if (batch) emit.onTransactions(hashes);
                    else for (const hash of hashes)emit.onTransactions([
                        hash
                    ]);
                } catch (err) {
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval
            });
            return async ()=>{
                if (filter) await (0, getAction_js_1.getAction)(client, uninstallFilter_js_1.uninstallFilter, 'uninstallFilter')({
                    filter
                });
                unwatch();
            };
        });
    };
    const subscribePendingTransactions = ()=>{
        let active = true;
        let unsubscribe = ()=>active = false;
        (async ()=>{
            try {
                const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
                    params: [
                        'newPendingTransactions'
                    ],
                    onData (data) {
                        if (!active) return;
                        const transaction = data.result;
                        onTransactions([
                            transaction
                        ]);
                    },
                    onError (error) {
                        onError?.(error);
                    }
                });
                unsubscribe = unsubscribe_;
                if (!active) unsubscribe();
            } catch (err) {
                onError?.(err);
            }
        })();
        return ()=>unsubscribe();
    };
    return enablePolling ? pollPendingTransactions() : subscribePendingTransactions();
} //# sourceMappingURL=watchPendingTransactions.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/siwe/parseSiweMessage.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseSiweMessage = parseSiweMessage;
function parseSiweMessage(message) {
    const { scheme, statement, ...prefix } = message.match(prefixRegex)?.groups ?? {};
    const { chainId, expirationTime, issuedAt, notBefore, requestId, ...suffix } = message.match(suffixRegex)?.groups ?? {};
    const resources = message.split('Resources:')[1]?.split('\n- ').slice(1);
    return {
        ...prefix,
        ...suffix,
        ...chainId ? {
            chainId: Number(chainId)
        } : {},
        ...expirationTime ? {
            expirationTime: new Date(expirationTime)
        } : {},
        ...issuedAt ? {
            issuedAt: new Date(issuedAt)
        } : {},
        ...notBefore ? {
            notBefore: new Date(notBefore)
        } : {},
        ...requestId ? {
            requestId
        } : {},
        ...resources ? {
            resources
        } : {},
        ...scheme ? {
            scheme
        } : {},
        ...statement ? {
            statement
        } : {}
    };
}
const prefixRegex = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/;
const suffixRegex = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/; //# sourceMappingURL=parseSiweMessage.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/siwe/validateSiweMessage.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validateSiweMessage = validateSiweMessage;
const isAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
const isAddressEqual_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-client] (ecmascript)");
function validateSiweMessage(parameters) {
    const { address, domain, message, nonce, scheme, time = new Date() } = parameters;
    if (domain && message.domain !== domain) return false;
    if (nonce && message.nonce !== nonce) return false;
    if (scheme && message.scheme !== scheme) return false;
    if (message.expirationTime && time >= message.expirationTime) return false;
    if (message.notBefore && time < message.notBefore) return false;
    try {
        if (!message.address) return false;
        if (!(0, isAddress_js_1.isAddress)(message.address, {
            strict: false
        })) return false;
        if (address && !(0, isAddressEqual_js_1.isAddressEqual)(message.address, address)) return false;
    } catch  {
        return false;
    }
    return true;
} //# sourceMappingURL=validateSiweMessage.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/siwe/verifySiweMessage.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifySiweMessage = verifySiweMessage;
const hashMessage_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/hashMessage.js [app-client] (ecmascript)");
const parseSiweMessage_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/siwe/parseSiweMessage.js [app-client] (ecmascript)");
const validateSiweMessage_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/siwe/validateSiweMessage.js [app-client] (ecmascript)");
const verifyHash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/verifyHash.js [app-client] (ecmascript)");
async function verifySiweMessage(client, parameters) {
    const { address, domain, message, nonce, scheme, signature, time = new Date(), ...callRequest } = parameters;
    const parsed = (0, parseSiweMessage_js_1.parseSiweMessage)(message);
    if (!parsed.address) return false;
    const isValid = (0, validateSiweMessage_js_1.validateSiweMessage)({
        address,
        domain,
        message: parsed,
        nonce,
        scheme,
        time
    });
    if (!isValid) return false;
    const hash = (0, hashMessage_js_1.hashMessage)(message);
    return (0, verifyHash_js_1.verifyHash)(client, {
        address: parsed.address,
        hash,
        signature,
        ...callRequest
    });
} //# sourceMappingURL=verifySiweMessage.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/sendRawTransactionSync.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendRawTransactionSync = sendRawTransactionSync;
const transaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
const transactionReceipt_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transactionReceipt.js [app-client] (ecmascript)");
const index_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/index.js [app-client] (ecmascript)");
async function sendRawTransactionSync(client, { serializedTransaction, throwOnReceiptRevert, timeout }) {
    const receipt = await client.request({
        method: 'eth_sendRawTransactionSync',
        params: timeout ? [
            serializedTransaction,
            (0, index_js_1.numberToHex)(timeout)
        ] : [
            serializedTransaction
        ]
    }, {
        retryCount: 0
    });
    const format = client.chain?.formatters?.transactionReceipt?.format || transactionReceipt_js_1.formatTransactionReceipt;
    const formatted = format(receipt);
    if (formatted.status === 'reverted' && throwOnReceiptRevert) throw new transaction_js_1.TransactionReceiptRevertedError({
        receipt: formatted
    });
    return formatted;
} //# sourceMappingURL=sendRawTransactionSync.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/decorators/public.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.publicActions = publicActions;
const getEnsAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/ens/getEnsAddress.js [app-client] (ecmascript)");
const getEnsAvatar_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/ens/getEnsAvatar.js [app-client] (ecmascript)");
const getEnsName_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/ens/getEnsName.js [app-client] (ecmascript)");
const getEnsResolver_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/ens/getEnsResolver.js [app-client] (ecmascript)");
const getEnsText_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/ens/getEnsText.js [app-client] (ecmascript)");
const call_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/call.js [app-client] (ecmascript)");
const createAccessList_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/createAccessList.js [app-client] (ecmascript)");
const createBlockFilter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/createBlockFilter.js [app-client] (ecmascript)");
const createContractEventFilter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/createContractEventFilter.js [app-client] (ecmascript)");
const createEventFilter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/createEventFilter.js [app-client] (ecmascript)");
const createPendingTransactionFilter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/createPendingTransactionFilter.js [app-client] (ecmascript)");
const estimateContractGas_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/estimateContractGas.js [app-client] (ecmascript)");
const estimateFeesPerGas_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/estimateFeesPerGas.js [app-client] (ecmascript)");
const estimateGas_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/estimateGas.js [app-client] (ecmascript)");
const estimateMaxPriorityFeePerGas_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/estimateMaxPriorityFeePerGas.js [app-client] (ecmascript)");
const getBalance_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getBalance.js [app-client] (ecmascript)");
const getBlobBaseFee_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getBlobBaseFee.js [app-client] (ecmascript)");
const getBlock_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getBlock.js [app-client] (ecmascript)");
const getBlockNumber_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getBlockNumber.js [app-client] (ecmascript)");
const getBlockTransactionCount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getBlockTransactionCount.js [app-client] (ecmascript)");
const getChainId_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getChainId.js [app-client] (ecmascript)");
const getCode_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getCode.js [app-client] (ecmascript)");
const getContractEvents_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getContractEvents.js [app-client] (ecmascript)");
const getEip712Domain_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getEip712Domain.js [app-client] (ecmascript)");
const getFeeHistory_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getFeeHistory.js [app-client] (ecmascript)");
const getFilterChanges_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getFilterChanges.js [app-client] (ecmascript)");
const getFilterLogs_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getFilterLogs.js [app-client] (ecmascript)");
const getGasPrice_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getGasPrice.js [app-client] (ecmascript)");
const getLogs_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getLogs.js [app-client] (ecmascript)");
const getProof_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getProof.js [app-client] (ecmascript)");
const getStorageAt_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getStorageAt.js [app-client] (ecmascript)");
const getTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getTransaction.js [app-client] (ecmascript)");
const getTransactionConfirmations_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getTransactionConfirmations.js [app-client] (ecmascript)");
const getTransactionCount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getTransactionCount.js [app-client] (ecmascript)");
const getTransactionReceipt_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getTransactionReceipt.js [app-client] (ecmascript)");
const multicall_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/multicall.js [app-client] (ecmascript)");
const readContract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/readContract.js [app-client] (ecmascript)");
const simulateBlocks_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/simulateBlocks.js [app-client] (ecmascript)");
const simulateCalls_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/simulateCalls.js [app-client] (ecmascript)");
const simulateContract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/simulateContract.js [app-client] (ecmascript)");
const uninstallFilter_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/uninstallFilter.js [app-client] (ecmascript)");
const verifyHash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/verifyHash.js [app-client] (ecmascript)");
const verifyMessage_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/verifyMessage.js [app-client] (ecmascript)");
const verifyTypedData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/verifyTypedData.js [app-client] (ecmascript)");
const waitForTransactionReceipt_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/waitForTransactionReceipt.js [app-client] (ecmascript)");
const watchBlockNumber_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/watchBlockNumber.js [app-client] (ecmascript)");
const watchBlocks_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/watchBlocks.js [app-client] (ecmascript)");
const watchContractEvent_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/watchContractEvent.js [app-client] (ecmascript)");
const watchEvent_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/watchEvent.js [app-client] (ecmascript)");
const watchPendingTransactions_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/watchPendingTransactions.js [app-client] (ecmascript)");
const verifySiweMessage_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/siwe/verifySiweMessage.js [app-client] (ecmascript)");
const prepareTransactionRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/prepareTransactionRequest.js [app-client] (ecmascript)");
const sendRawTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/sendRawTransaction.js [app-client] (ecmascript)");
const sendRawTransactionSync_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/sendRawTransactionSync.js [app-client] (ecmascript)");
function publicActions(client) {
    return {
        call: (args)=>(0, call_js_1.call)(client, args),
        createAccessList: (args)=>(0, createAccessList_js_1.createAccessList)(client, args),
        createBlockFilter: ()=>(0, createBlockFilter_js_1.createBlockFilter)(client),
        createContractEventFilter: (args)=>(0, createContractEventFilter_js_1.createContractEventFilter)(client, args),
        createEventFilter: (args)=>(0, createEventFilter_js_1.createEventFilter)(client, args),
        createPendingTransactionFilter: ()=>(0, createPendingTransactionFilter_js_1.createPendingTransactionFilter)(client),
        estimateContractGas: (args)=>(0, estimateContractGas_js_1.estimateContractGas)(client, args),
        estimateGas: (args)=>(0, estimateGas_js_1.estimateGas)(client, args),
        getBalance: (args)=>(0, getBalance_js_1.getBalance)(client, args),
        getBlobBaseFee: ()=>(0, getBlobBaseFee_js_1.getBlobBaseFee)(client),
        getBlock: (args)=>(0, getBlock_js_1.getBlock)(client, args),
        getBlockNumber: (args)=>(0, getBlockNumber_js_1.getBlockNumber)(client, args),
        getBlockTransactionCount: (args)=>(0, getBlockTransactionCount_js_1.getBlockTransactionCount)(client, args),
        getBytecode: (args)=>(0, getCode_js_1.getCode)(client, args),
        getChainId: ()=>(0, getChainId_js_1.getChainId)(client),
        getCode: (args)=>(0, getCode_js_1.getCode)(client, args),
        getContractEvents: (args)=>(0, getContractEvents_js_1.getContractEvents)(client, args),
        getEip712Domain: (args)=>(0, getEip712Domain_js_1.getEip712Domain)(client, args),
        getEnsAddress: (args)=>(0, getEnsAddress_js_1.getEnsAddress)(client, args),
        getEnsAvatar: (args)=>(0, getEnsAvatar_js_1.getEnsAvatar)(client, args),
        getEnsName: (args)=>(0, getEnsName_js_1.getEnsName)(client, args),
        getEnsResolver: (args)=>(0, getEnsResolver_js_1.getEnsResolver)(client, args),
        getEnsText: (args)=>(0, getEnsText_js_1.getEnsText)(client, args),
        getFeeHistory: (args)=>(0, getFeeHistory_js_1.getFeeHistory)(client, args),
        estimateFeesPerGas: (args)=>(0, estimateFeesPerGas_js_1.estimateFeesPerGas)(client, args),
        getFilterChanges: (args)=>(0, getFilterChanges_js_1.getFilterChanges)(client, args),
        getFilterLogs: (args)=>(0, getFilterLogs_js_1.getFilterLogs)(client, args),
        getGasPrice: ()=>(0, getGasPrice_js_1.getGasPrice)(client),
        getLogs: (args)=>(0, getLogs_js_1.getLogs)(client, args),
        getProof: (args)=>(0, getProof_js_1.getProof)(client, args),
        estimateMaxPriorityFeePerGas: (args)=>(0, estimateMaxPriorityFeePerGas_js_1.estimateMaxPriorityFeePerGas)(client, args),
        getStorageAt: (args)=>(0, getStorageAt_js_1.getStorageAt)(client, args),
        getTransaction: (args)=>(0, getTransaction_js_1.getTransaction)(client, args),
        getTransactionConfirmations: (args)=>(0, getTransactionConfirmations_js_1.getTransactionConfirmations)(client, args),
        getTransactionCount: (args)=>(0, getTransactionCount_js_1.getTransactionCount)(client, args),
        getTransactionReceipt: (args)=>(0, getTransactionReceipt_js_1.getTransactionReceipt)(client, args),
        multicall: (args)=>(0, multicall_js_1.multicall)(client, args),
        prepareTransactionRequest: (args)=>(0, prepareTransactionRequest_js_1.prepareTransactionRequest)(client, args),
        readContract: (args)=>(0, readContract_js_1.readContract)(client, args),
        sendRawTransaction: (args)=>(0, sendRawTransaction_js_1.sendRawTransaction)(client, args),
        sendRawTransactionSync: (args)=>(0, sendRawTransactionSync_js_1.sendRawTransactionSync)(client, args),
        simulate: (args)=>(0, simulateBlocks_js_1.simulateBlocks)(client, args),
        simulateBlocks: (args)=>(0, simulateBlocks_js_1.simulateBlocks)(client, args),
        simulateCalls: (args)=>(0, simulateCalls_js_1.simulateCalls)(client, args),
        simulateContract: (args)=>(0, simulateContract_js_1.simulateContract)(client, args),
        verifyHash: (args)=>(0, verifyHash_js_1.verifyHash)(client, args),
        verifyMessage: (args)=>(0, verifyMessage_js_1.verifyMessage)(client, args),
        verifySiweMessage: (args)=>(0, verifySiweMessage_js_1.verifySiweMessage)(client, args),
        verifyTypedData: (args)=>(0, verifyTypedData_js_1.verifyTypedData)(client, args),
        uninstallFilter: (args)=>(0, uninstallFilter_js_1.uninstallFilter)(client, args),
        waitForTransactionReceipt: (args)=>(0, waitForTransactionReceipt_js_1.waitForTransactionReceipt)(client, args),
        watchBlocks: (args)=>(0, watchBlocks_js_1.watchBlocks)(client, args),
        watchBlockNumber: (args)=>(0, watchBlockNumber_js_1.watchBlockNumber)(client, args),
        watchContractEvent: (args)=>(0, watchContractEvent_js_1.watchContractEvent)(client, args),
        watchEvent: (args)=>(0, watchEvent_js_1.watchEvent)(client, args),
        watchPendingTransactions: (args)=>(0, watchPendingTransactions_js_1.watchPendingTransactions)(client, args)
    };
} //# sourceMappingURL=public.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/createPublicClient.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createPublicClient = createPublicClient;
const createClient_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/createClient.js [app-client] (ecmascript)");
const public_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/decorators/public.js [app-client] (ecmascript)");
function createPublicClient(parameters) {
    const { key = 'public', name = 'Public Client' } = parameters;
    const client = (0, createClient_js_1.createClient)({
        ...parameters,
        key,
        name,
        type: 'publicClient'
    });
    return client.extend(public_js_1.publicActions);
} //# sourceMappingURL=createPublicClient.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/dropTransaction.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dropTransaction = dropTransaction;
async function dropTransaction(client, { hash }) {
    await client.request({
        method: `${client.mode}_dropTransaction`,
        params: [
            hash
        ]
    });
} //# sourceMappingURL=dropTransaction.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/dumpState.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dumpState = dumpState;
async function dumpState(client) {
    return client.request({
        method: `${client.mode}_dumpState`
    });
} //# sourceMappingURL=dumpState.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/getAutomine.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAutomine = getAutomine;
async function getAutomine(client) {
    if (client.mode === 'ganache') return await client.request({
        method: 'eth_mining'
    });
    return await client.request({
        method: `${client.mode}_getAutomine`
    });
} //# sourceMappingURL=getAutomine.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/getTxpoolContent.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTxpoolContent = getTxpoolContent;
async function getTxpoolContent(client) {
    return await client.request({
        method: 'txpool_content'
    });
} //# sourceMappingURL=getTxpoolContent.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/getTxpoolStatus.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTxpoolStatus = getTxpoolStatus;
const fromHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
async function getTxpoolStatus(client) {
    const { pending, queued } = await client.request({
        method: 'txpool_status'
    });
    return {
        pending: (0, fromHex_js_1.hexToNumber)(pending),
        queued: (0, fromHex_js_1.hexToNumber)(queued)
    };
} //# sourceMappingURL=getTxpoolStatus.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/impersonateAccount.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.impersonateAccount = impersonateAccount;
async function impersonateAccount(client, { address }) {
    await client.request({
        method: `${client.mode}_impersonateAccount`,
        params: [
            address
        ]
    });
} //# sourceMappingURL=impersonateAccount.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/increaseTime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.increaseTime = increaseTime;
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
async function increaseTime(client, { seconds }) {
    return await client.request({
        method: 'evm_increaseTime',
        params: [
            (0, toHex_js_1.numberToHex)(seconds)
        ]
    });
} //# sourceMappingURL=increaseTime.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/inspectTxpool.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.inspectTxpool = inspectTxpool;
async function inspectTxpool(client) {
    return await client.request({
        method: 'txpool_inspect'
    });
} //# sourceMappingURL=inspectTxpool.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/loadState.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadState = loadState;
async function loadState(client, { state }) {
    await client.request({
        method: `${client.mode}_loadState`,
        params: [
            state
        ]
    });
} //# sourceMappingURL=loadState.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/mine.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mine = mine;
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
async function mine(client, { blocks, interval }) {
    if (client.mode === 'ganache') await client.request({
        method: 'evm_mine',
        params: [
            {
                blocks: (0, toHex_js_1.numberToHex)(blocks)
            }
        ]
    });
    else await client.request({
        method: `${client.mode}_mine`,
        params: [
            (0, toHex_js_1.numberToHex)(blocks),
            (0, toHex_js_1.numberToHex)(interval || 0)
        ]
    });
} //# sourceMappingURL=mine.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/removeBlockTimestampInterval.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeBlockTimestampInterval = removeBlockTimestampInterval;
async function removeBlockTimestampInterval(client) {
    await client.request({
        method: `${client.mode}_removeBlockTimestampInterval`
    });
} //# sourceMappingURL=removeBlockTimestampInterval.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/reset.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reset = reset;
async function reset(client, { blockNumber, jsonRpcUrl } = {}) {
    await client.request({
        method: `${client.mode}_reset`,
        params: [
            {
                forking: {
                    blockNumber: Number(blockNumber),
                    jsonRpcUrl
                }
            }
        ]
    });
} //# sourceMappingURL=reset.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/revert.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.revert = revert;
async function revert(client, { id }) {
    await client.request({
        method: 'evm_revert',
        params: [
            id
        ]
    });
} //# sourceMappingURL=revert.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/sendUnsignedTransaction.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendUnsignedTransaction = sendUnsignedTransaction;
const extract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/extract.js [app-client] (ecmascript)");
const transactionRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
async function sendUnsignedTransaction(client, args) {
    const { accessList, data, from, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, ...rest } = args;
    const chainFormat = client.chain?.formatters?.transactionRequest?.format;
    const format = chainFormat || transactionRequest_js_1.formatTransactionRequest;
    const request = format({
        ...(0, extract_js_1.extract)(rest, {
            format: chainFormat
        }),
        accessList,
        data,
        from,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        to,
        value
    }, 'sendUnsignedTransaction');
    const hash = await client.request({
        method: 'eth_sendUnsignedTransaction',
        params: [
            request
        ]
    });
    return hash;
} //# sourceMappingURL=sendUnsignedTransaction.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setAutomine.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setAutomine = setAutomine;
async function setAutomine(client, enabled) {
    if (client.mode === 'ganache') {
        if (enabled) await client.request({
            method: 'miner_start'
        });
        else await client.request({
            method: 'miner_stop'
        });
    } else await client.request({
        method: 'evm_setAutomine',
        params: [
            enabled
        ]
    });
} //# sourceMappingURL=setAutomine.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setBalance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setBalance = setBalance;
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
async function setBalance(client, { address, value }) {
    if (client.mode === 'ganache') await client.request({
        method: 'evm_setAccountBalance',
        params: [
            address,
            (0, toHex_js_1.numberToHex)(value)
        ]
    });
    else await client.request({
        method: `${client.mode}_setBalance`,
        params: [
            address,
            (0, toHex_js_1.numberToHex)(value)
        ]
    });
} //# sourceMappingURL=setBalance.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setBlockGasLimit.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setBlockGasLimit = setBlockGasLimit;
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
async function setBlockGasLimit(client, { gasLimit }) {
    await client.request({
        method: 'evm_setBlockGasLimit',
        params: [
            (0, toHex_js_1.numberToHex)(gasLimit)
        ]
    });
} //# sourceMappingURL=setBlockGasLimit.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setBlockTimestampInterval.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setBlockTimestampInterval = setBlockTimestampInterval;
async function setBlockTimestampInterval(client, { interval }) {
    const interval_ = (()=>{
        if (client.mode === 'hardhat') return interval * 1000;
        return interval;
    })();
    await client.request({
        method: `${client.mode}_setBlockTimestampInterval`,
        params: [
            interval_
        ]
    });
} //# sourceMappingURL=setBlockTimestampInterval.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setCode.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setCode = setCode;
async function setCode(client, { address, bytecode }) {
    if (client.mode === 'ganache') await client.request({
        method: 'evm_setAccountCode',
        params: [
            address,
            bytecode
        ]
    });
    else await client.request({
        method: `${client.mode}_setCode`,
        params: [
            address,
            bytecode
        ]
    });
} //# sourceMappingURL=setCode.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setCoinbase.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setCoinbase = setCoinbase;
async function setCoinbase(client, { address }) {
    await client.request({
        method: `${client.mode}_setCoinbase`,
        params: [
            address
        ]
    });
} //# sourceMappingURL=setCoinbase.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setIntervalMining.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setIntervalMining = setIntervalMining;
async function setIntervalMining(client, { interval }) {
    const interval_ = (()=>{
        if (client.mode === 'hardhat') return interval * 1000;
        return interval;
    })();
    await client.request({
        method: 'evm_setIntervalMining',
        params: [
            interval_
        ]
    });
} //# sourceMappingURL=setIntervalMining.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setLoggingEnabled.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setLoggingEnabled = setLoggingEnabled;
async function setLoggingEnabled(client, enabled) {
    await client.request({
        method: `${client.mode}_setLoggingEnabled`,
        params: [
            enabled
        ]
    });
} //# sourceMappingURL=setLoggingEnabled.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setMinGasPrice.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setMinGasPrice = setMinGasPrice;
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
async function setMinGasPrice(client, { gasPrice }) {
    await client.request({
        method: `${client.mode}_setMinGasPrice`,
        params: [
            (0, toHex_js_1.numberToHex)(gasPrice)
        ]
    });
} //# sourceMappingURL=setMinGasPrice.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setNextBlockBaseFeePerGas.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setNextBlockBaseFeePerGas = setNextBlockBaseFeePerGas;
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
async function setNextBlockBaseFeePerGas(client, { baseFeePerGas }) {
    await client.request({
        method: `${client.mode}_setNextBlockBaseFeePerGas`,
        params: [
            (0, toHex_js_1.numberToHex)(baseFeePerGas)
        ]
    });
} //# sourceMappingURL=setNextBlockBaseFeePerGas.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setNextBlockTimestamp.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setNextBlockTimestamp = setNextBlockTimestamp;
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
async function setNextBlockTimestamp(client, { timestamp }) {
    await client.request({
        method: 'evm_setNextBlockTimestamp',
        params: [
            (0, toHex_js_1.numberToHex)(timestamp)
        ]
    });
} //# sourceMappingURL=setNextBlockTimestamp.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setNonce.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setNonce = setNonce;
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
async function setNonce(client, { address, nonce }) {
    await client.request({
        method: `${client.mode}_setNonce`,
        params: [
            address,
            (0, toHex_js_1.numberToHex)(nonce)
        ]
    });
} //# sourceMappingURL=setNonce.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setRpcUrl.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setRpcUrl = setRpcUrl;
async function setRpcUrl(client, jsonRpcUrl) {
    await client.request({
        method: `${client.mode}_setRpcUrl`,
        params: [
            jsonRpcUrl
        ]
    });
} //# sourceMappingURL=setRpcUrl.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setStorageAt.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setStorageAt = setStorageAt;
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
async function setStorageAt(client, { address, index, value }) {
    await client.request({
        method: `${client.mode}_setStorageAt`,
        params: [
            address,
            typeof index === 'number' ? (0, toHex_js_1.numberToHex)(index) : index,
            value
        ]
    });
} //# sourceMappingURL=setStorageAt.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/snapshot.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.snapshot = snapshot;
async function snapshot(client) {
    return await client.request({
        method: 'evm_snapshot'
    });
} //# sourceMappingURL=snapshot.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/stopImpersonatingAccount.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stopImpersonatingAccount = stopImpersonatingAccount;
async function stopImpersonatingAccount(client, { address }) {
    await client.request({
        method: `${client.mode}_stopImpersonatingAccount`,
        params: [
            address
        ]
    });
} //# sourceMappingURL=stopImpersonatingAccount.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/decorators/test.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.testActions = testActions;
const dropTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/dropTransaction.js [app-client] (ecmascript)");
const dumpState_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/dumpState.js [app-client] (ecmascript)");
const getAutomine_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/getAutomine.js [app-client] (ecmascript)");
const getTxpoolContent_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/getTxpoolContent.js [app-client] (ecmascript)");
const getTxpoolStatus_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/getTxpoolStatus.js [app-client] (ecmascript)");
const impersonateAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/impersonateAccount.js [app-client] (ecmascript)");
const increaseTime_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/increaseTime.js [app-client] (ecmascript)");
const inspectTxpool_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/inspectTxpool.js [app-client] (ecmascript)");
const loadState_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/loadState.js [app-client] (ecmascript)");
const mine_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/mine.js [app-client] (ecmascript)");
const removeBlockTimestampInterval_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/removeBlockTimestampInterval.js [app-client] (ecmascript)");
const reset_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/reset.js [app-client] (ecmascript)");
const revert_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/revert.js [app-client] (ecmascript)");
const sendUnsignedTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/sendUnsignedTransaction.js [app-client] (ecmascript)");
const setAutomine_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setAutomine.js [app-client] (ecmascript)");
const setBalance_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setBalance.js [app-client] (ecmascript)");
const setBlockGasLimit_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setBlockGasLimit.js [app-client] (ecmascript)");
const setBlockTimestampInterval_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setBlockTimestampInterval.js [app-client] (ecmascript)");
const setCode_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setCode.js [app-client] (ecmascript)");
const setCoinbase_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setCoinbase.js [app-client] (ecmascript)");
const setIntervalMining_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setIntervalMining.js [app-client] (ecmascript)");
const setLoggingEnabled_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setLoggingEnabled.js [app-client] (ecmascript)");
const setMinGasPrice_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setMinGasPrice.js [app-client] (ecmascript)");
const setNextBlockBaseFeePerGas_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setNextBlockBaseFeePerGas.js [app-client] (ecmascript)");
const setNextBlockTimestamp_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setNextBlockTimestamp.js [app-client] (ecmascript)");
const setNonce_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setNonce.js [app-client] (ecmascript)");
const setRpcUrl_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setRpcUrl.js [app-client] (ecmascript)");
const setStorageAt_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/setStorageAt.js [app-client] (ecmascript)");
const snapshot_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/snapshot.js [app-client] (ecmascript)");
const stopImpersonatingAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/test/stopImpersonatingAccount.js [app-client] (ecmascript)");
function testActions({ mode }) {
    return (client_)=>{
        const client = client_.extend(()=>({
                mode
            }));
        return {
            dropTransaction: (args)=>(0, dropTransaction_js_1.dropTransaction)(client, args),
            dumpState: ()=>(0, dumpState_js_1.dumpState)(client),
            getAutomine: ()=>(0, getAutomine_js_1.getAutomine)(client),
            getTxpoolContent: ()=>(0, getTxpoolContent_js_1.getTxpoolContent)(client),
            getTxpoolStatus: ()=>(0, getTxpoolStatus_js_1.getTxpoolStatus)(client),
            impersonateAccount: (args)=>(0, impersonateAccount_js_1.impersonateAccount)(client, args),
            increaseTime: (args)=>(0, increaseTime_js_1.increaseTime)(client, args),
            inspectTxpool: ()=>(0, inspectTxpool_js_1.inspectTxpool)(client),
            loadState: (args)=>(0, loadState_js_1.loadState)(client, args),
            mine: (args)=>(0, mine_js_1.mine)(client, args),
            removeBlockTimestampInterval: ()=>(0, removeBlockTimestampInterval_js_1.removeBlockTimestampInterval)(client),
            reset: (args)=>(0, reset_js_1.reset)(client, args),
            revert: (args)=>(0, revert_js_1.revert)(client, args),
            sendUnsignedTransaction: (args)=>(0, sendUnsignedTransaction_js_1.sendUnsignedTransaction)(client, args),
            setAutomine: (args)=>(0, setAutomine_js_1.setAutomine)(client, args),
            setBalance: (args)=>(0, setBalance_js_1.setBalance)(client, args),
            setBlockGasLimit: (args)=>(0, setBlockGasLimit_js_1.setBlockGasLimit)(client, args),
            setBlockTimestampInterval: (args)=>(0, setBlockTimestampInterval_js_1.setBlockTimestampInterval)(client, args),
            setCode: (args)=>(0, setCode_js_1.setCode)(client, args),
            setCoinbase: (args)=>(0, setCoinbase_js_1.setCoinbase)(client, args),
            setIntervalMining: (args)=>(0, setIntervalMining_js_1.setIntervalMining)(client, args),
            setLoggingEnabled: (args)=>(0, setLoggingEnabled_js_1.setLoggingEnabled)(client, args),
            setMinGasPrice: (args)=>(0, setMinGasPrice_js_1.setMinGasPrice)(client, args),
            setNextBlockBaseFeePerGas: (args)=>(0, setNextBlockBaseFeePerGas_js_1.setNextBlockBaseFeePerGas)(client, args),
            setNextBlockTimestamp: (args)=>(0, setNextBlockTimestamp_js_1.setNextBlockTimestamp)(client, args),
            setNonce: (args)=>(0, setNonce_js_1.setNonce)(client, args),
            setRpcUrl: (args)=>(0, setRpcUrl_js_1.setRpcUrl)(client, args),
            setStorageAt: (args)=>(0, setStorageAt_js_1.setStorageAt)(client, args),
            snapshot: ()=>(0, snapshot_js_1.snapshot)(client),
            stopImpersonatingAccount: (args)=>(0, stopImpersonatingAccount_js_1.stopImpersonatingAccount)(client, args)
        };
    };
} //# sourceMappingURL=test.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/createTestClient.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createTestClient = createTestClient;
const createClient_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/createClient.js [app-client] (ecmascript)");
const test_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/decorators/test.js [app-client] (ecmascript)");
function createTestClient(parameters) {
    const { key = 'test', name = 'Test Client', mode } = parameters;
    const client = (0, createClient_js_1.createClient)({
        ...parameters,
        key,
        name,
        type: 'testClient'
    });
    return client.extend((config)=>({
            mode,
            ...(0, test_js_1.testActions)({
                mode
            })(config)
        }));
} //# sourceMappingURL=createTestClient.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/addChain.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addChain = addChain;
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
async function addChain(client, { chain }) {
    const { id, name, nativeCurrency, rpcUrls, blockExplorers } = chain;
    await client.request({
        method: 'wallet_addEthereumChain',
        params: [
            {
                chainId: (0, toHex_js_1.numberToHex)(id),
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
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/deployContract.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deployContract = deployContract;
const encodeDeployData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeDeployData.js [app-client] (ecmascript)");
const sendTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/sendTransaction.js [app-client] (ecmascript)");
function deployContract(walletClient, parameters) {
    const { abi, args, bytecode, ...request } = parameters;
    const calldata = (0, encodeDeployData_js_1.encodeDeployData)({
        abi,
        args,
        bytecode
    });
    return (0, sendTransaction_js_1.sendTransaction)(walletClient, {
        ...request,
        ...request.authorizationList ? {
            to: null
        } : {},
        data: calldata
    });
} //# sourceMappingURL=deployContract.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/getAddresses.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAddresses = getAddresses;
const getAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
async function getAddresses(client) {
    if (client.account?.type === 'local') return [
        client.account.address
    ];
    const addresses = await client.request({
        method: 'eth_accounts'
    }, {
        dedupe: true
    });
    return addresses.map((address)=>(0, getAddress_js_1.checksumAddress)(address));
} //# sourceMappingURL=getAddresses.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/getCapabilities.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCapabilities = getCapabilities;
const parseAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
async function getCapabilities(client, parameters = {}) {
    const { account = client.account, chainId } = parameters;
    const account_ = account ? (0, parseAccount_js_1.parseAccount)(account) : undefined;
    const params = chainId ? [
        account_?.address,
        [
            (0, toHex_js_1.numberToHex)(chainId)
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
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/getPermissions.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPermissions = getPermissions;
async function getPermissions(client) {
    const permissions = await client.request({
        method: 'wallet_getPermissions'
    }, {
        dedupe: true
    });
    return permissions;
} //# sourceMappingURL=getPermissions.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/prepareAuthorization.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.prepareAuthorization = prepareAuthorization;
const parseAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const account_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/account.js [app-client] (ecmascript)");
const isAddressEqual_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const getChainId_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getChainId.js [app-client] (ecmascript)");
const getTransactionCount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getTransactionCount.js [app-client] (ecmascript)");
async function prepareAuthorization(client, parameters) {
    const { account: account_ = client.account, chainId, nonce } = parameters;
    if (!account_) throw new account_js_1.AccountNotFoundError({
        docsPath: '/docs/eip7702/prepareAuthorization'
    });
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    const executor = (()=>{
        if (!parameters.executor) return undefined;
        if (parameters.executor === 'self') return parameters.executor;
        return (0, parseAccount_js_1.parseAccount)(parameters.executor);
    })();
    const authorization = {
        address: parameters.contractAddress ?? parameters.address,
        chainId,
        nonce
    };
    if (typeof authorization.chainId === 'undefined') authorization.chainId = client.chain?.id ?? await (0, getAction_js_1.getAction)(client, getChainId_js_1.getChainId, 'getChainId')({});
    if (typeof authorization.nonce === 'undefined') {
        authorization.nonce = await (0, getAction_js_1.getAction)(client, getTransactionCount_js_1.getTransactionCount, 'getTransactionCount')({
            address: account.address,
            blockTag: 'pending'
        });
        if (executor === 'self' || executor?.address && (0, isAddressEqual_js_1.isAddressEqual)(executor.address, account.address)) authorization.nonce += 1;
    }
    return authorization;
} //# sourceMappingURL=prepareAuthorization.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/requestAddresses.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.requestAddresses = requestAddresses;
const getAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
async function requestAddresses(client) {
    const addresses = await client.request({
        method: 'eth_requestAccounts'
    }, {
        dedupe: true,
        retryCount: 0
    });
    return addresses.map((address)=>(0, getAddress_js_1.getAddress)(address));
} //# sourceMappingURL=requestAddresses.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/requestPermissions.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.requestPermissions = requestPermissions;
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
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/sendCallsSync.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendCallsSync = sendCallsSync;
const sendCalls_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/sendCalls.js [app-client] (ecmascript)");
const waitForCallsStatus_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/waitForCallsStatus.js [app-client] (ecmascript)");
async function sendCallsSync(client, parameters) {
    const { chain = client.chain } = parameters;
    const timeout = parameters.timeout ?? Math.max((chain?.blockTime ?? 0) * 3, 5_000);
    const result = await (0, sendCalls_js_1.sendCalls)(client, parameters);
    const status = await (0, waitForCallsStatus_js_1.waitForCallsStatus)(client, {
        ...parameters,
        id: result.id,
        timeout
    });
    return status;
} //# sourceMappingURL=sendCallsSync.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/sendTransactionSync.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendTransactionSync = sendTransactionSync;
const parseAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const account_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/account.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
const recoverAuthorizationAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/authorization/recoverAuthorizationAddress.js [app-client] (ecmascript)");
const assertCurrentChain_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/chain/assertCurrentChain.js [app-client] (ecmascript)");
const getTransactionError_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getTransactionError.js [app-client] (ecmascript)");
const extract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/extract.js [app-client] (ecmascript)");
const transactionRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const lru_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/lru.js [app-client] (ecmascript)");
const assertRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-client] (ecmascript)");
const getChainId_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getChainId.js [app-client] (ecmascript)");
const waitForTransactionReceipt_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/waitForTransactionReceipt.js [app-client] (ecmascript)");
const prepareTransactionRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/prepareTransactionRequest.js [app-client] (ecmascript)");
const sendRawTransactionSync_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/sendRawTransactionSync.js [app-client] (ecmascript)");
const supportsWalletNamespace = new lru_js_1.LruMap(128);
async function sendTransactionSync(client, parameters) {
    const { account: account_ = client.account, chain = client.chain, accessList, authorizationList, blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, pollingInterval, throwOnReceiptRevert, type, value, ...rest } = parameters;
    const timeout = parameters.timeout ?? Math.max((chain?.blockTime ?? 0) * 3, 5_000);
    if (typeof account_ === 'undefined') throw new account_js_1.AccountNotFoundError({
        docsPath: '/docs/actions/wallet/sendTransactionSync'
    });
    const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : null;
    try {
        (0, assertRequest_js_1.assertRequest)(parameters);
        const to = await (async ()=>{
            if (parameters.to) return parameters.to;
            if (parameters.to === null) return undefined;
            if (authorizationList && authorizationList.length > 0) return await (0, recoverAuthorizationAddress_js_1.recoverAuthorizationAddress)({
                authorization: authorizationList[0]
            }).catch(()=>{
                throw new base_js_1.BaseError('`to` is required. Could not infer from `authorizationList`.');
            });
            return undefined;
        })();
        if (account?.type === 'json-rpc' || account === null) {
            let chainId;
            if (chain !== null) {
                chainId = await (0, getAction_js_1.getAction)(client, getChainId_js_1.getChainId, 'getChainId')({});
                (0, assertCurrentChain_js_1.assertCurrentChain)({
                    currentChainId: chainId,
                    chain
                });
            }
            const chainFormat = client.chain?.formatters?.transactionRequest?.format;
            const format = chainFormat || transactionRequest_js_1.formatTransactionRequest;
            const request = format({
                ...(0, extract_js_1.extract)(rest, {
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
            const receipt = await (0, getAction_js_1.getAction)(client, waitForTransactionReceipt_js_1.waitForTransactionReceipt, 'waitForTransactionReceipt')({
                checkReplacement: false,
                hash,
                pollingInterval,
                timeout
            });
            if (throwOnReceiptRevert && receipt.status === 'reverted') throw new transaction_js_1.TransactionReceiptRevertedError({
                receipt
            });
            return receipt;
        }
        if (account?.type === 'local') {
            const request = await (0, getAction_js_1.getAction)(client, prepareTransactionRequest_js_1.prepareTransactionRequest, 'prepareTransactionRequest')({
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
                    ...prepareTransactionRequest_js_1.defaultParameters,
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
            return await (0, getAction_js_1.getAction)(client, sendRawTransactionSync_js_1.sendRawTransactionSync, 'sendRawTransactionSync')({
                serializedTransaction,
                throwOnReceiptRevert
            });
        }
        if (account?.type === 'smart') throw new account_js_1.AccountTypeNotSupportedError({
            metaMessages: [
                'Consider using the `sendUserOperation` Action instead.'
            ],
            docsPath: '/docs/actions/bundler/sendUserOperation',
            type: 'smart'
        });
        throw new account_js_1.AccountTypeNotSupportedError({
            docsPath: '/docs/actions/wallet/sendTransactionSync',
            type: account?.type
        });
    } catch (err) {
        if (err instanceof account_js_1.AccountTypeNotSupportedError) throw err;
        throw (0, getTransactionError_js_1.getTransactionError)(err, {
            ...parameters,
            account,
            chain: parameters.chain || undefined
        });
    }
} //# sourceMappingURL=sendTransactionSync.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/showCallsStatus.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showCallsStatus = showCallsStatus;
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
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/signAuthorization.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signAuthorization = signAuthorization;
const parseAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const account_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/account.js [app-client] (ecmascript)");
const prepareAuthorization_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/prepareAuthorization.js [app-client] (ecmascript)");
async function signAuthorization(client, parameters) {
    const { account: account_ = client.account } = parameters;
    if (!account_) throw new account_js_1.AccountNotFoundError({
        docsPath: '/docs/eip7702/signAuthorization'
    });
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    if (!account.signAuthorization) throw new account_js_1.AccountTypeNotSupportedError({
        docsPath: '/docs/eip7702/signAuthorization',
        metaMessages: [
            'The `signAuthorization` Action does not support JSON-RPC Accounts.'
        ],
        type: account.type
    });
    const authorization = await (0, prepareAuthorization_js_1.prepareAuthorization)(client, parameters);
    return account.signAuthorization(authorization);
} //# sourceMappingURL=signAuthorization.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/signMessage.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signMessage = signMessage;
const parseAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const account_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/account.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
async function signMessage(client, { account: account_ = client.account, message }) {
    if (!account_) throw new account_js_1.AccountNotFoundError({
        docsPath: '/docs/actions/wallet/signMessage'
    });
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    if (account.signMessage) return account.signMessage({
        message
    });
    const message_ = (()=>{
        if (typeof message === 'string') return (0, toHex_js_1.stringToHex)(message);
        if (message.raw instanceof Uint8Array) return (0, toHex_js_1.toHex)(message.raw);
        return message.raw;
    })();
    return client.request({
        method: 'personal_sign',
        params: [
            message_,
            account.address
        ]
    }, {
        retryCount: 0
    });
} //# sourceMappingURL=signMessage.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/signTransaction.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signTransaction = signTransaction;
const parseAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const account_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/account.js [app-client] (ecmascript)");
const assertCurrentChain_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/chain/assertCurrentChain.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const transactionRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const assertRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-client] (ecmascript)");
const getChainId_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getChainId.js [app-client] (ecmascript)");
async function signTransaction(client, parameters) {
    const { account: account_ = client.account, chain = client.chain, ...transaction } = parameters;
    if (!account_) throw new account_js_1.AccountNotFoundError({
        docsPath: '/docs/actions/wallet/signTransaction'
    });
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    (0, assertRequest_js_1.assertRequest)({
        account,
        ...parameters
    });
    const chainId = await (0, getAction_js_1.getAction)(client, getChainId_js_1.getChainId, 'getChainId')({});
    if (chain !== null) (0, assertCurrentChain_js_1.assertCurrentChain)({
        currentChainId: chainId,
        chain
    });
    const formatters = chain?.formatters || client.chain?.formatters;
    const format = formatters?.transactionRequest?.format || transactionRequest_js_1.formatTransactionRequest;
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
                chainId: (0, toHex_js_1.numberToHex)(chainId),
                from: account.address
            }
        ]
    }, {
        retryCount: 0
    });
} //# sourceMappingURL=signTransaction.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/signTypedData.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signTypedData = signTypedData;
const parseAccount_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const account_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/account.js [app-client] (ecmascript)");
const typedData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/typedData.js [app-client] (ecmascript)");
async function signTypedData(client, parameters) {
    const { account: account_ = client.account, domain, message, primaryType } = parameters;
    if (!account_) throw new account_js_1.AccountNotFoundError({
        docsPath: '/docs/actions/wallet/signTypedData'
    });
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    const types = {
        EIP712Domain: (0, typedData_js_1.getTypesForEIP712Domain)({
            domain
        }),
        ...parameters.types
    };
    (0, typedData_js_1.validateTypedData)({
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
    const typedData = (0, typedData_js_1.serializeTypedData)({
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
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/switchChain.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.switchChain = switchChain;
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
async function switchChain(client, { id }) {
    await client.request({
        method: 'wallet_switchEthereumChain',
        params: [
            {
                chainId: (0, toHex_js_1.numberToHex)(id)
            }
        ]
    }, {
        retryCount: 0
    });
} //# sourceMappingURL=switchChain.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/watchAsset.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.watchAsset = watchAsset;
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
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/writeContractSync.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.writeContractSync = writeContractSync;
const sendTransactionSync_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/sendTransactionSync.js [app-client] (ecmascript)");
const writeContract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/writeContract.js [app-client] (ecmascript)");
async function writeContractSync(client, parameters) {
    return writeContract_js_1.writeContract.internal(client, sendTransactionSync_js_1.sendTransactionSync, 'sendTransactionSync', parameters);
} //# sourceMappingURL=writeContractSync.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/decorators/wallet.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.walletActions = walletActions;
const getChainId_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/public/getChainId.js [app-client] (ecmascript)");
const addChain_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/addChain.js [app-client] (ecmascript)");
const deployContract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/deployContract.js [app-client] (ecmascript)");
const getAddresses_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/getAddresses.js [app-client] (ecmascript)");
const getCallsStatus_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/getCallsStatus.js [app-client] (ecmascript)");
const getCapabilities_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/getCapabilities.js [app-client] (ecmascript)");
const getPermissions_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/getPermissions.js [app-client] (ecmascript)");
const prepareAuthorization_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/prepareAuthorization.js [app-client] (ecmascript)");
const prepareTransactionRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/prepareTransactionRequest.js [app-client] (ecmascript)");
const requestAddresses_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/requestAddresses.js [app-client] (ecmascript)");
const requestPermissions_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/requestPermissions.js [app-client] (ecmascript)");
const sendCalls_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/sendCalls.js [app-client] (ecmascript)");
const sendCallsSync_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/sendCallsSync.js [app-client] (ecmascript)");
const sendRawTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/sendRawTransaction.js [app-client] (ecmascript)");
const sendRawTransactionSync_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/sendRawTransactionSync.js [app-client] (ecmascript)");
const sendTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/sendTransaction.js [app-client] (ecmascript)");
const sendTransactionSync_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/sendTransactionSync.js [app-client] (ecmascript)");
const showCallsStatus_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/showCallsStatus.js [app-client] (ecmascript)");
const signAuthorization_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/signAuthorization.js [app-client] (ecmascript)");
const signMessage_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/signMessage.js [app-client] (ecmascript)");
const signTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/signTransaction.js [app-client] (ecmascript)");
const signTypedData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/signTypedData.js [app-client] (ecmascript)");
const switchChain_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/switchChain.js [app-client] (ecmascript)");
const waitForCallsStatus_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/waitForCallsStatus.js [app-client] (ecmascript)");
const watchAsset_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/watchAsset.js [app-client] (ecmascript)");
const writeContract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/writeContract.js [app-client] (ecmascript)");
const writeContractSync_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/writeContractSync.js [app-client] (ecmascript)");
function walletActions(client) {
    return {
        addChain: (args)=>(0, addChain_js_1.addChain)(client, args),
        deployContract: (args)=>(0, deployContract_js_1.deployContract)(client, args),
        getAddresses: ()=>(0, getAddresses_js_1.getAddresses)(client),
        getCallsStatus: (args)=>(0, getCallsStatus_js_1.getCallsStatus)(client, args),
        getCapabilities: (args)=>(0, getCapabilities_js_1.getCapabilities)(client, args),
        getChainId: ()=>(0, getChainId_js_1.getChainId)(client),
        getPermissions: ()=>(0, getPermissions_js_1.getPermissions)(client),
        prepareAuthorization: (args)=>(0, prepareAuthorization_js_1.prepareAuthorization)(client, args),
        prepareTransactionRequest: (args)=>(0, prepareTransactionRequest_js_1.prepareTransactionRequest)(client, args),
        requestAddresses: ()=>(0, requestAddresses_js_1.requestAddresses)(client),
        requestPermissions: (args)=>(0, requestPermissions_js_1.requestPermissions)(client, args),
        sendCalls: (args)=>(0, sendCalls_js_1.sendCalls)(client, args),
        sendCallsSync: (args)=>(0, sendCallsSync_js_1.sendCallsSync)(client, args),
        sendRawTransaction: (args)=>(0, sendRawTransaction_js_1.sendRawTransaction)(client, args),
        sendRawTransactionSync: (args)=>(0, sendRawTransactionSync_js_1.sendRawTransactionSync)(client, args),
        sendTransaction: (args)=>(0, sendTransaction_js_1.sendTransaction)(client, args),
        sendTransactionSync: (args)=>(0, sendTransactionSync_js_1.sendTransactionSync)(client, args),
        showCallsStatus: (args)=>(0, showCallsStatus_js_1.showCallsStatus)(client, args),
        signAuthorization: (args)=>(0, signAuthorization_js_1.signAuthorization)(client, args),
        signMessage: (args)=>(0, signMessage_js_1.signMessage)(client, args),
        signTransaction: (args)=>(0, signTransaction_js_1.signTransaction)(client, args),
        signTypedData: (args)=>(0, signTypedData_js_1.signTypedData)(client, args),
        switchChain: (args)=>(0, switchChain_js_1.switchChain)(client, args),
        waitForCallsStatus: (args)=>(0, waitForCallsStatus_js_1.waitForCallsStatus)(client, args),
        watchAsset: (args)=>(0, watchAsset_js_1.watchAsset)(client, args),
        writeContract: (args)=>(0, writeContract_js_1.writeContract)(client, args),
        writeContractSync: (args)=>(0, writeContractSync_js_1.writeContractSync)(client, args)
    };
} //# sourceMappingURL=wallet.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/createWalletClient.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createWalletClient = createWalletClient;
const createClient_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/createClient.js [app-client] (ecmascript)");
const wallet_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/decorators/wallet.js [app-client] (ecmascript)");
function createWalletClient(parameters) {
    const { key = 'wallet', name = 'Wallet Client', transport } = parameters;
    const client = (0, createClient_js_1.createClient)({
        ...parameters,
        key,
        name,
        transport,
        type: 'walletClient'
    });
    return client.extend(wallet_js_1.walletActions);
} //# sourceMappingURL=createWalletClient.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/transports/createTransport.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createTransport = createTransport;
const buildRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/buildRequest.js [app-client] (ecmascript)");
const uid_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/uid.js [app-client] (ecmascript)");
function createTransport({ key, methods, name, request, retryCount = 3, retryDelay = 150, timeout, type }, value) {
    const uid = (0, uid_js_1.uid)();
    return {
        config: {
            key,
            methods,
            name,
            request,
            retryCount,
            retryDelay,
            timeout,
            type
        },
        request: (0, buildRequest_js_1.buildRequest)(request, {
            methods,
            retryCount,
            retryDelay,
            uid
        }),
        value
    };
} //# sourceMappingURL=createTransport.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/transports/custom.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.custom = custom;
const createTransport_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/transports/createTransport.js [app-client] (ecmascript)");
function custom(provider, config = {}) {
    const { key = 'custom', methods, name = 'Custom Provider', retryDelay } = config;
    return ({ retryCount: defaultRetryCount })=>(0, createTransport_js_1.createTransport)({
            key,
            methods,
            name,
            request: provider.request.bind(provider),
            retryCount: config.retryCount ?? defaultRetryCount,
            retryDelay,
            type: 'custom'
        });
} //# sourceMappingURL=custom.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/transports/fallback.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fallback = fallback;
exports.shouldThrow = shouldThrow;
exports.rankTransports = rankTransports;
const node_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/node.js [app-client] (ecmascript)");
const rpc_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/rpc.js [app-client] (ecmascript)");
const wait_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/wait.js [app-client] (ecmascript)");
const createTransport_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/transports/createTransport.js [app-client] (ecmascript)");
function fallback(transports_, config = {}) {
    const { key = 'fallback', name = 'Fallback', rank = false, shouldThrow: shouldThrow_ = shouldThrow, retryCount, retryDelay } = config;
    return ({ chain, pollingInterval = 4_000, timeout, ...rest })=>{
        let transports = transports_;
        let onResponse = ()=>{};
        const transport = (0, createTransport_js_1.createTransport)({
            key,
            name,
            async request ({ method, params }) {
                let includes;
                const fetch = async (i = 0)=>{
                    const transport = transports[i]({
                        ...rest,
                        chain,
                        retryCount: 0,
                        timeout
                    });
                    try {
                        const response = await transport.request({
                            method,
                            params
                        });
                        onResponse({
                            method,
                            params: params,
                            response,
                            transport,
                            status: 'success'
                        });
                        return response;
                    } catch (err) {
                        onResponse({
                            error: err,
                            method,
                            params: params,
                            transport,
                            status: 'error'
                        });
                        if (shouldThrow_(err)) throw err;
                        if (i === transports.length - 1) throw err;
                        includes ??= transports.slice(i + 1).some((transport)=>{
                            const { include, exclude } = transport({
                                chain
                            }).config.methods || {};
                            if (include) return include.includes(method);
                            if (exclude) return !exclude.includes(method);
                            return true;
                        });
                        if (!includes) throw err;
                        return fetch(i + 1);
                    }
                };
                return fetch();
            },
            retryCount,
            retryDelay,
            type: 'fallback'
        }, {
            onResponse: (fn)=>onResponse = fn,
            transports: transports.map((fn)=>fn({
                    chain,
                    retryCount: 0
                }))
        });
        if (rank) {
            const rankOptions = typeof rank === 'object' ? rank : {};
            rankTransports({
                chain,
                interval: rankOptions.interval ?? pollingInterval,
                onTransports: (transports_)=>transports = transports_,
                ping: rankOptions.ping,
                sampleCount: rankOptions.sampleCount,
                timeout: rankOptions.timeout,
                transports,
                weights: rankOptions.weights
            });
        }
        return transport;
    };
}
function shouldThrow(error) {
    if ('code' in error && typeof error.code === 'number') {
        if (error.code === rpc_js_1.TransactionRejectedRpcError.code || error.code === rpc_js_1.UserRejectedRequestError.code || node_js_1.ExecutionRevertedError.nodeMessage.test(error.message) || error.code === 5000) return true;
    }
    return false;
}
function rankTransports({ chain, interval = 4_000, onTransports, ping, sampleCount = 10, timeout = 1_000, transports, weights = {} }) {
    const { stability: stabilityWeight = 0.7, latency: latencyWeight = 0.3 } = weights;
    const samples = [];
    const rankTransports_ = async ()=>{
        const sample = await Promise.all(transports.map(async (transport)=>{
            const transport_ = transport({
                chain,
                retryCount: 0,
                timeout
            });
            const start = Date.now();
            let end;
            let success;
            try {
                await (ping ? ping({
                    transport: transport_
                }) : transport_.request({
                    method: 'net_listening'
                }));
                success = 1;
            } catch  {
                success = 0;
            } finally{
                end = Date.now();
            }
            const latency = end - start;
            return {
                latency,
                success
            };
        }));
        samples.push(sample);
        if (samples.length > sampleCount) samples.shift();
        const maxLatency = Math.max(...samples.map((sample)=>Math.max(...sample.map(({ latency })=>latency))));
        const scores = transports.map((_, i)=>{
            const latencies = samples.map((sample)=>sample[i].latency);
            const meanLatency = latencies.reduce((acc, latency)=>acc + latency, 0) / latencies.length;
            const latencyScore = 1 - meanLatency / maxLatency;
            const successes = samples.map((sample)=>sample[i].success);
            const stabilityScore = successes.reduce((acc, success)=>acc + success, 0) / successes.length;
            if (stabilityScore === 0) return [
                0,
                i
            ];
            return [
                latencyWeight * latencyScore + stabilityWeight * stabilityScore,
                i
            ];
        }).sort((a, b)=>b[0] - a[0]);
        onTransports(scores.map(([, i])=>transports[i]));
        await (0, wait_js_1.wait)(interval);
        rankTransports_();
    };
    rankTransports_();
} //# sourceMappingURL=fallback.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/transport.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UrlRequiredError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class UrlRequiredError extends base_js_1.BaseError {
    constructor(){
        super('No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.', {
            docsPath: '/docs/clients/intro',
            name: 'UrlRequiredError'
        });
    }
}
exports.UrlRequiredError = UrlRequiredError; //# sourceMappingURL=transport.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/transports/http.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.http = http;
const request_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)");
const transport_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/transport.js [app-client] (ecmascript)");
const createBatchScheduler_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/promise/createBatchScheduler.js [app-client] (ecmascript)");
const http_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/rpc/http.js [app-client] (ecmascript)");
const createTransport_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/transports/createTransport.js [app-client] (ecmascript)");
function http(url, config = {}) {
    const { batch, fetchFn, fetchOptions, key = 'http', methods, name = 'HTTP JSON-RPC', onFetchRequest, onFetchResponse, retryDelay, raw } = config;
    return ({ chain, retryCount: retryCount_, timeout: timeout_ })=>{
        const { batchSize = 1000, wait = 0 } = typeof batch === 'object' ? batch : {};
        const retryCount = config.retryCount ?? retryCount_;
        const timeout = timeout_ ?? config.timeout ?? 10_000;
        const url_ = url || chain?.rpcUrls.default.http[0];
        if (!url_) throw new transport_js_1.UrlRequiredError();
        const rpcClient = (0, http_js_1.getHttpRpcClient)(url_, {
            fetchFn,
            fetchOptions,
            onRequest: onFetchRequest,
            onResponse: onFetchResponse,
            timeout
        });
        return (0, createTransport_js_1.createTransport)({
            key,
            methods,
            name,
            async request ({ method, params }) {
                const body = {
                    method,
                    params
                };
                const { schedule } = (0, createBatchScheduler_js_1.createBatchScheduler)({
                    id: url_,
                    wait,
                    shouldSplitBatch (requests) {
                        return requests.length > batchSize;
                    },
                    fn: (body)=>rpcClient.request({
                            body
                        }),
                    sort: (a, b)=>a.id - b.id
                });
                const fn = async (body)=>batch ? schedule(body) : [
                        await rpcClient.request({
                            body
                        })
                    ];
                const [{ error, result }] = await fn(body);
                if (raw) return {
                    error,
                    result
                };
                if (error) throw new request_js_1.RpcRequestError({
                    body,
                    error,
                    url: url_
                });
                return result;
            },
            retryCount,
            retryDelay,
            timeout,
            type: 'http'
        }, {
            fetchOptions,
            url: url_
        });
    };
} //# sourceMappingURL=http.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/transports/webSocket.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.webSocket = webSocket;
const request_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)");
const transport_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/transport.js [app-client] (ecmascript)");
const compat_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/rpc/compat.js [app-client] (ecmascript)");
const webSocket_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/rpc/webSocket.js [app-client] (ecmascript)");
const createTransport_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/transports/createTransport.js [app-client] (ecmascript)");
function webSocket(url, config = {}) {
    const { keepAlive, key = 'webSocket', methods, name = 'WebSocket JSON-RPC', reconnect, retryDelay } = config;
    return ({ chain, retryCount: retryCount_, timeout: timeout_ })=>{
        const retryCount = config.retryCount ?? retryCount_;
        const timeout = timeout_ ?? config.timeout ?? 10_000;
        const url_ = url || chain?.rpcUrls.default.webSocket?.[0];
        const wsRpcClientOpts = {
            keepAlive,
            reconnect
        };
        if (!url_) throw new transport_js_1.UrlRequiredError();
        return (0, createTransport_js_1.createTransport)({
            key,
            methods,
            name,
            async request ({ method, params }) {
                const body = {
                    method,
                    params
                };
                const rpcClient = await (0, webSocket_js_1.getWebSocketRpcClient)(url_, wsRpcClientOpts);
                const { error, result } = await rpcClient.requestAsync({
                    body,
                    timeout
                });
                if (error) throw new request_js_1.RpcRequestError({
                    body,
                    error,
                    url: url_
                });
                return result;
            },
            retryCount,
            retryDelay,
            timeout,
            type: 'webSocket'
        }, {
            getSocket () {
                return (0, compat_js_1.getSocket)(url_);
            },
            getRpcClient () {
                return (0, webSocket_js_1.getWebSocketRpcClient)(url_, wsRpcClientOpts);
            },
            async subscribe ({ params, onData, onError }) {
                const rpcClient = await (0, webSocket_js_1.getWebSocketRpcClient)(url_, wsRpcClientOpts);
                const { result: subscriptionId } = await new Promise((resolve, reject)=>rpcClient.request({
                        body: {
                            method: 'eth_subscribe',
                            params
                        },
                        onError (error) {
                            reject(error);
                            onError?.(error);
                            return;
                        },
                        onResponse (response) {
                            if (response.error) {
                                reject(response.error);
                                onError?.(response.error);
                                return;
                            }
                            if (typeof response.id === 'number') {
                                resolve(response);
                                return;
                            }
                            if (response.method !== 'eth_subscription') return;
                            onData(response.params);
                        }
                    }));
                return {
                    subscriptionId,
                    async unsubscribe () {
                        return new Promise((resolve)=>rpcClient.request({
                                body: {
                                    method: 'eth_unsubscribe',
                                    params: [
                                        subscriptionId
                                    ]
                                },
                                onResponse: resolve
                            }));
                    }
                };
            }
        });
    };
} //# sourceMappingURL=webSocket.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/types/eip1193.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProviderRpcError = void 0;
class ProviderRpcError extends Error {
    constructor(code, message){
        super(message);
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.code = code;
        this.details = message;
    }
}
exports.ProviderRpcError = ProviderRpcError; //# sourceMappingURL=eip1193.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeDeployData.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeDeployData = decodeDeployData;
const abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const decodeAbiParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-client] (ecmascript)");
const docsPath = '/docs/contract/decodeDeployData';
function decodeDeployData(parameters) {
    const { abi, bytecode, data } = parameters;
    if (data === bytecode) return {
        bytecode
    };
    const description = abi.find((x)=>'type' in x && x.type === 'constructor');
    if (!description) throw new abi_js_1.AbiConstructorNotFoundError({
        docsPath
    });
    if (!('inputs' in description)) throw new abi_js_1.AbiConstructorParamsNotFoundError({
        docsPath
    });
    if (!description.inputs || description.inputs.length === 0) throw new abi_js_1.AbiConstructorParamsNotFoundError({
        docsPath
    });
    const args = (0, decodeAbiParameters_js_1.decodeAbiParameters)(description.inputs, `0x${data.replace(bytecode, '')}`);
    return {
        args,
        bytecode
    };
} //# sourceMappingURL=decodeDeployData.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/fromBlobs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromBlobs = fromBlobs;
const cursor_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/cursor.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function fromBlobs(parameters) {
    const to = parameters.to ?? (typeof parameters.blobs[0] === 'string' ? 'hex' : 'bytes');
    const blobs = typeof parameters.blobs[0] === 'string' ? parameters.blobs.map((x)=>(0, toBytes_js_1.hexToBytes)(x)) : parameters.blobs;
    const length = blobs.reduce((length, blob)=>length + blob.length, 0);
    const data = (0, cursor_js_1.createCursor)(new Uint8Array(length));
    let active = true;
    for (const blob of blobs){
        const cursor = (0, cursor_js_1.createCursor)(blob);
        while(active && cursor.position < blob.length){
            cursor.incrementPosition(1);
            let consume = 31;
            if (blob.length - cursor.position < 31) consume = blob.length - cursor.position;
            for(const _ in Array.from({
                length: consume
            })){
                const byte = cursor.readByte();
                const isTerminator = byte === 0x80 && !cursor.inspectBytes(cursor.remaining).includes(0x80);
                if (isTerminator) {
                    active = false;
                    break;
                }
                data.pushByte(byte);
            }
        }
    }
    const trimmedData = data.bytes.slice(0, data.position);
    return to === 'hex' ? (0, toHex_js_1.bytesToHex)(trimmedData) : trimmedData;
} //# sourceMappingURL=fromBlobs.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/sidecarsToVersionedHashes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sidecarsToVersionedHashes = sidecarsToVersionedHashes;
const commitmentToVersionedHash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/commitmentToVersionedHash.js [app-client] (ecmascript)");
function sidecarsToVersionedHashes(parameters) {
    const { sidecars, version } = parameters;
    const to = parameters.to ?? (typeof sidecars[0].blob === 'string' ? 'hex' : 'bytes');
    const hashes = [];
    for (const { commitment } of sidecars){
        hashes.push((0, commitmentToVersionedHash_js_1.commitmentToVersionedHash)({
            commitment,
            to,
            version
        }));
    }
    return hashes;
} //# sourceMappingURL=sidecarsToVersionedHashes.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/toCoinType.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toCoinType = toCoinType;
const ens_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/ens.js [app-client] (ecmascript)");
const SLIP44_MSB = 0x80000000;
function toCoinType(chainId) {
    if (chainId === 1) return 60n;
    if (chainId >= SLIP44_MSB || chainId < 0) throw new ens_js_1.EnsInvalidChainIdError({
        chainId
    });
    return BigInt((0x80000000 | chainId) >>> 0);
} //# sourceMappingURL=toCoinType.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/kzg/defineKzg.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineKzg = defineKzg;
function defineKzg({ blobToKzgCommitment, computeBlobKzgProof }) {
    return {
        blobToKzgCommitment,
        computeBlobKzgProof
    };
} //# sourceMappingURL=defineKzg.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/kzg/setupKzg.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setupKzg = setupKzg;
const defineKzg_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/kzg/defineKzg.js [app-client] (ecmascript)");
function setupKzg(parameters, path) {
    try {
        parameters.loadTrustedSetup(path);
    } catch (e) {
        const error = e;
        if (!error.message.includes('trusted setup is already loaded')) throw error;
    }
    return (0, defineKzg_js_1.defineKzg)(parameters);
} //# sourceMappingURL=setupKzg.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/compactSignatureToSignature.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.compactSignatureToSignature = compactSignatureToSignature;
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function compactSignatureToSignature({ r, yParityAndS }) {
    const yParityAndS_bytes = (0, toBytes_js_1.hexToBytes)(yParityAndS);
    const yParity = yParityAndS_bytes[0] & 0x80 ? 1 : 0;
    const s = yParityAndS_bytes;
    if (yParity === 1) s[0] &= 0x7f;
    return {
        r,
        s: (0, toHex_js_1.bytesToHex)(s),
        yParity
    };
} //# sourceMappingURL=compactSignatureToSignature.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/parseCompactSignature.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseCompactSignature = parseCompactSignature;
const secp256k1_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/node_modules/@noble/curves/secp256k1.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function parseCompactSignature(signatureHex) {
    const { r, s } = secp256k1_1.secp256k1.Signature.fromCompact(signatureHex.slice(2, 130));
    return {
        r: (0, toHex_js_1.numberToHex)(r, {
            size: 32
        }),
        yParityAndS: (0, toHex_js_1.numberToHex)(s, {
            size: 32
        })
    };
} //# sourceMappingURL=parseCompactSignature.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/parseSignature.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseSignature = parseSignature;
const secp256k1_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/node_modules/@noble/curves/secp256k1.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function parseSignature(signatureHex) {
    const { r, s } = secp256k1_1.secp256k1.Signature.fromCompact(signatureHex.slice(2, 130));
    const yParityOrV = Number(`0x${signatureHex.slice(130)}`);
    const [v, yParity] = (()=>{
        if (yParityOrV === 0 || yParityOrV === 1) return [
            undefined,
            yParityOrV
        ];
        if (yParityOrV === 27) return [
            BigInt(yParityOrV),
            0
        ];
        if (yParityOrV === 28) return [
            BigInt(yParityOrV),
            1
        ];
        throw new Error('Invalid yParityOrV value');
    })();
    if (typeof v !== 'undefined') return {
        r: (0, toHex_js_1.numberToHex)(r, {
            size: 32
        }),
        s: (0, toHex_js_1.numberToHex)(s, {
            size: 32
        }),
        v,
        yParity
    };
    return {
        r: (0, toHex_js_1.numberToHex)(r, {
            size: 32
        }),
        s: (0, toHex_js_1.numberToHex)(s, {
            size: 32
        }),
        yParity
    };
} //# sourceMappingURL=parseSignature.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverTransactionAddress.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recoverTransactionAddress = recoverTransactionAddress;
const keccak256_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
const parseTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/parseTransaction.js [app-client] (ecmascript)");
const serializeTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/serializeTransaction.js [app-client] (ecmascript)");
const recoverAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverAddress.js [app-client] (ecmascript)");
async function recoverTransactionAddress(parameters) {
    const { serializedTransaction, signature: signature_ } = parameters;
    const transaction = (0, parseTransaction_js_1.parseTransaction)(serializedTransaction);
    const signature = signature_ ?? {
        r: transaction.r,
        s: transaction.s,
        v: transaction.v,
        yParity: transaction.yParity
    };
    const serialized = (0, serializeTransaction_js_1.serializeTransaction)({
        ...transaction,
        r: undefined,
        s: undefined,
        v: undefined,
        yParity: undefined,
        sidecars: undefined
    });
    return await (0, recoverAddress_js_1.recoverAddress)({
        hash: (0, keccak256_js_1.keccak256)(serialized),
        signature
    });
} //# sourceMappingURL=recoverTransactionAddress.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/serializeCompactSignature.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeCompactSignature = serializeCompactSignature;
const secp256k1_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/node_modules/@noble/curves/secp256k1.js [app-client] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
function serializeCompactSignature({ r, yParityAndS }) {
    return `0x${new secp256k1_1.secp256k1.Signature((0, fromHex_js_1.hexToBigInt)(r), (0, fromHex_js_1.hexToBigInt)(yParityAndS)).toCompactHex()}`;
} //# sourceMappingURL=serializeCompactSignature.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/signatureToCompactSignature.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signatureToCompactSignature = signatureToCompactSignature;
const toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function signatureToCompactSignature(signature) {
    const { r, s, v, yParity } = signature;
    const yParity_ = Number(yParity ?? v - 27n);
    let yParityAndS = s;
    if (yParity_ === 1) {
        const bytes = (0, toBytes_js_1.hexToBytes)(s);
        bytes[0] |= 0x80;
        yParityAndS = (0, toHex_js_1.bytesToHex)(bytes);
    }
    return {
        r,
        yParityAndS
    };
} //# sourceMappingURL=signatureToCompactSignature.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.maxInt8 = exports.universalSignatureValidatorByteCode = exports.erc6492SignatureValidatorByteCode = exports.deploylessCallViaFactoryBytecode = exports.deploylessCallViaBytecodeBytecode = exports.zeroHash = exports.zeroAddress = exports.ethAddress = exports.multicall3Abi = exports.universalSignatureValidatorAbi = exports.erc6492SignatureValidatorAbi = exports.erc4626Abi = exports.erc1155Abi = exports.erc721Abi = exports.erc20Abi_bytes32 = exports.erc20Abi = exports.webSocket = exports.http = exports.shouldThrow = exports.fallback = exports.custom = exports.createTransport = exports.walletActions = exports.testActions = exports.publicActions = exports.createWalletClient = exports.createTestClient = exports.createPublicClient = exports.rpcSchema = exports.createClient = exports.WaitForCallsStatusTimeoutError = exports.getContract = exports.UnknownTypeError = exports.UnknownSignatureError = exports.SolidityProtectedKeywordError = exports.parseAbiParameters = exports.parseAbiParameter = exports.parseAbiItem = exports.parseAbi = exports.InvalidStructSignatureError = exports.InvalidSignatureError = exports.InvalidParenthesisError = exports.InvalidParameterError = exports.InvalidModifierError = exports.InvalidFunctionModifierError = exports.InvalidAbiTypeParameterError = exports.InvalidAbiParametersError = exports.InvalidAbiParameterError = exports.InvalidAbiItemError = exports.CircularReferenceError = void 0;
exports.maxUint152 = exports.maxUint144 = exports.maxUint136 = exports.maxUint128 = exports.maxUint120 = exports.maxUint112 = exports.maxUint104 = exports.maxUint96 = exports.maxUint88 = exports.maxUint80 = exports.maxUint72 = exports.maxUint64 = exports.maxUint56 = exports.maxUint48 = exports.maxUint40 = exports.maxUint32 = exports.maxUint24 = exports.maxUint16 = exports.maxUint8 = exports.maxInt256 = exports.maxInt248 = exports.maxInt240 = exports.maxInt232 = exports.maxInt224 = exports.maxInt216 = exports.maxInt208 = exports.maxInt200 = exports.maxInt192 = exports.maxInt184 = exports.maxInt176 = exports.maxInt168 = exports.maxInt160 = exports.maxInt152 = exports.maxInt144 = exports.maxInt136 = exports.maxInt128 = exports.maxInt120 = exports.maxInt112 = exports.maxInt104 = exports.maxInt96 = exports.maxInt88 = exports.maxInt80 = exports.maxInt72 = exports.maxInt64 = exports.maxInt56 = exports.maxInt48 = exports.maxInt40 = exports.maxInt32 = exports.maxInt24 = exports.maxInt16 = void 0;
exports.AbiConstructorNotFoundError = exports.weiUnits = exports.gweiUnits = exports.etherUnits = exports.presignMessagePrefix = exports.minInt256 = exports.minInt248 = exports.minInt240 = exports.minInt232 = exports.minInt224 = exports.minInt216 = exports.minInt208 = exports.minInt200 = exports.minInt192 = exports.minInt184 = exports.minInt176 = exports.minInt168 = exports.minInt160 = exports.minInt152 = exports.minInt144 = exports.minInt136 = exports.minInt128 = exports.minInt120 = exports.minInt112 = exports.minInt104 = exports.minInt96 = exports.minInt88 = exports.minInt80 = exports.minInt72 = exports.minInt64 = exports.minInt56 = exports.minInt48 = exports.minInt40 = exports.minInt32 = exports.minInt24 = exports.minInt16 = exports.minInt8 = exports.maxUint256 = exports.maxUint248 = exports.maxUint240 = exports.maxUint232 = exports.maxUint224 = exports.maxUint216 = exports.maxUint208 = exports.maxUint200 = exports.maxUint192 = exports.maxUint184 = exports.maxUint176 = exports.maxUint168 = exports.maxUint160 = void 0;
exports.EnsAvatarUriResolutionError = exports.EnsAvatarUnsupportedNamespaceError = exports.EnsAvatarInvalidNftUriError = exports.SizeOverflowError = exports.InvalidHexValueError = exports.InvalidHexBooleanError = exports.InvalidBytesBooleanError = exports.IntegerOutOfRangeError = exports.SliceOffsetOutOfBoundsError = exports.SizeExceedsPaddingSizeError = exports.RawContractError = exports.CounterfactualDeploymentFailedError = exports.ContractFunctionZeroDataError = exports.ContractFunctionRevertedError = exports.ContractFunctionExecutionError = exports.CallExecutionError = exports.InvalidChainIdError = exports.ClientChainNotConfiguredError = exports.ChainNotFoundError = exports.ChainMismatchError = exports.ChainDoesNotSupportContract = exports.BundleFailedError = exports.BlockNotFoundError = exports.setErrorConfig = exports.BaseError = exports.InvalidAddressError = exports.UnsupportedPackedAbiType = exports.InvalidDefinitionTypeError = exports.InvalidArrayError = exports.InvalidAbiEncodingTypeError = exports.InvalidAbiDecodingTypeError = exports.DecodeLogTopicsMismatch = exports.DecodeLogDataMismatch = exports.BytesSizeMismatchError = exports.AbiFunctionSignatureNotFoundError = exports.AbiFunctionOutputsNotFoundError = exports.AbiFunctionNotFoundError = exports.AbiEventSignatureNotFoundError = exports.AbiEventSignatureEmptyTopicsError = exports.AbiEventNotFoundError = exports.AbiErrorSignatureNotFoundError = exports.AbiErrorNotFoundError = exports.AbiErrorInputsNotFoundError = exports.AbiEncodingLengthMismatchError = exports.AbiEncodingBytesSizeMismatchError = exports.AbiEncodingArrayLengthMismatchError = exports.AbiDecodingZeroDataError = exports.AbiDecodingDataSizeTooSmallError = exports.AbiDecodingDataSizeInvalidError = exports.AbiConstructorParamsNotFoundError = void 0;
exports.UnsupportedProviderMethodError = exports.UnsupportedNonOptionalCapabilityError = exports.UnsupportedChainIdError = exports.UnknownRpcError = exports.UnknownBundleIdError = exports.UnauthorizedProviderError = exports.TransactionRejectedRpcError = exports.SwitchChainError = exports.RpcError = exports.ResourceUnavailableRpcError = exports.ResourceNotFoundRpcError = exports.ProviderRpcError = exports.ProviderDisconnectedError = exports.ParseRpcError = exports.MethodNotSupportedRpcError = exports.MethodNotFoundRpcError = exports.LimitExceededRpcError = exports.JsonRpcVersionUnsupportedError = exports.InvalidRequestRpcError = exports.InvalidParamsRpcError = exports.InvalidInputRpcError = exports.InternalRpcError = exports.DuplicateIdError = exports.ChainDisconnectedError = exports.BundleTooLargeError = exports.AtomicReadyWalletRejectedUpgradeError = exports.AtomicityNotSupportedError = exports.WebSocketRequestError = exports.TimeoutError = exports.SocketClosedError = exports.RpcRequestError = exports.HttpRequestError = exports.UnknownNodeError = exports.TransactionTypeNotSupportedError = exports.TipAboveFeeCapError = exports.NonceTooLowError = exports.NonceTooHighError = exports.NonceMaxValueError = exports.IntrinsicGasTooLowError = exports.IntrinsicGasTooHighError = exports.InsufficientFundsError = exports.FeeCapTooLowError = exports.FeeCapTooHighError = exports.ExecutionRevertedError = exports.FilterTypeNotSupportedError = exports.MaxFeePerGasTooLowError = exports.Eip1559FeesNotSupportedError = exports.BaseFeeScalarError = exports.EstimateGasExecutionError = exports.EnsInvalidChainIdError = void 0;
exports.toBlobs = exports.toBlobSidecars = exports.sidecarsToVersionedHashes = exports.fromBlobs = exports.commitmentToVersionedHash = exports.commitmentsToVersionedHashes = exports.blobsToProofs = exports.blobsToCommitments = exports.isAddressEqual = exports.isAddress = exports.getCreateAddress = exports.getCreate2Address = exports.getContractAddress = exports.getAddress = exports.checksumAddress = exports.prepareEncodeFunctionData = exports.parseEventLogs = exports.getAbiItem = exports.encodePacked = exports.encodeFunctionResult = exports.encodeFunctionData = exports.encodeEventTopics = exports.encodeErrorResult = exports.encodeDeployData = exports.encodeAbiParameters = exports.decodeFunctionResult = exports.decodeFunctionData = exports.decodeEventLog = exports.decodeErrorResult = exports.decodeDeployData = exports.decodeAbiParameters = exports.EIP1193ProviderRpcError = exports.InvalidDecimalNumberError = exports.InvalidStructTypeError = exports.InvalidPrimaryTypeError = exports.InvalidDomainError = exports.UrlRequiredError = exports.WaitForTransactionReceiptTimeoutError = exports.TransactionReceiptNotFoundError = exports.TransactionNotFoundError = exports.TransactionExecutionError = exports.InvalidStorageKeySizeError = exports.InvalidSerializedTransactionTypeError = exports.InvalidSerializedTransactionError = exports.InvalidSerializableTransactionError = exports.InvalidLegacyVError = exports.FeeConflictError = exports.StateAssignmentConflictError = exports.AccountStateConflictError = exports.UserRejectedRequestError = void 0;
exports.getContractError = exports.toCoinType = exports.namehash = exports.labelhash = exports.toRlp = exports.hexToRlp = exports.bytesToRlp = exports.toHex = exports.stringToHex = exports.numberToHex = exports.bytesToHex = exports.boolToHex = exports.toBytes = exports.stringToBytes = exports.numberToBytes = exports.hexToBytes = exports.boolToBytes = exports.fromRlp = exports.hexToString = exports.hexToNumber = exports.hexToBool = exports.hexToBigInt = exports.fromHex = exports.fromBytes = exports.bytesToString = exports.bytesToNumber = exports.bytesToBool = exports.bytesToBigInt = exports.trim = exports.sliceHex = exports.sliceBytes = exports.slice = exports.size = exports.padHex = exports.padBytes = exports.pad = exports.isHex = exports.isBytes = exports.concatHex = exports.concatBytes = exports.concat = exports.getChainContractAddress = exports.extractChain = exports.defineChain = exports.assertCurrentChain = exports.offchainLookupSignature = exports.offchainLookupAbiItem = exports.offchainLookup = exports.ccipFetch = exports.ccipRequest = void 0;
exports.recoverTypedDataAddress = exports.recoverTransactionAddress = exports.recoverPublicKey = exports.recoverMessageAddress = exports.recoverAddress = exports.parseSignature = exports.hexToSignature = exports.parseErc8010Signature = exports.parseErc6492Signature = exports.parseCompactSignature = exports.hexToCompactSignature = exports.isErc8010Signature = exports.isErc6492Signature = exports.hashTypedData = exports.hashStruct = exports.hashDomain = exports.hashMessage = exports.compactSignatureToSignature = exports.withTimeout = exports.withRetry = exports.withCache = exports.nonceManager = exports.createNonceManager = exports.setupKzg = exports.defineKzg = exports.getFunctionSignature = exports.toFunctionSignature = exports.getFunctionSelector = exports.toFunctionSelector = exports.toFunctionHash = exports.getEventSignature = exports.toEventSignature = exports.getEventSelector = exports.toEventSelector = exports.toEventHash = exports.sha256 = exports.ripemd160 = exports.keccak256 = exports.isHash = exports.rpcTransactionType = exports.formatTransactionRequest = exports.defineTransactionRequest = exports.formatTransactionReceipt = exports.defineTransactionReceipt = exports.transactionType = exports.formatTransaction = exports.defineTransaction = exports.formatLog = exports.formatBlock = exports.defineBlock = void 0;
exports.parseUnits = exports.parseGwei = exports.parseEther = exports.formatUnits = exports.formatGwei = exports.formatEther = exports.validateTypedData = exports.serializeTypedData = exports.getTypesForEIP712Domain = exports.domainSeparator = exports.serializeTransaction = exports.serializeAccessList = exports.parseTransaction = exports.getTransactionType = exports.getSerializedTransactionType = exports.assertTransactionLegacy = exports.assertTransactionEIP2930 = exports.assertTransactionEIP1559 = exports.assertRequest = exports.stringify = exports.verifyTypedData = exports.verifyMessage = exports.verifyHash = exports.toPrefixedMessage = exports.signatureToCompactSignature = exports.serializeSignature = exports.signatureToHex = exports.serializeErc8010Signature = exports.serializeErc6492Signature = exports.serializeCompactSignature = exports.compactSignatureToHex = void 0;
var abitype_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/cjs/exports/index.js [app-client] (ecmascript)");
Object.defineProperty(exports, "CircularReferenceError", {
    enumerable: true,
    get: function() {
        return abitype_1.CircularReferenceError;
    }
});
Object.defineProperty(exports, "InvalidAbiItemError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidAbiItemError;
    }
});
Object.defineProperty(exports, "InvalidAbiParameterError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidAbiParameterError;
    }
});
Object.defineProperty(exports, "InvalidAbiParametersError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidAbiParametersError;
    }
});
Object.defineProperty(exports, "InvalidAbiTypeParameterError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidAbiTypeParameterError;
    }
});
Object.defineProperty(exports, "InvalidFunctionModifierError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidFunctionModifierError;
    }
});
Object.defineProperty(exports, "InvalidModifierError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidModifierError;
    }
});
Object.defineProperty(exports, "InvalidParameterError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidParameterError;
    }
});
Object.defineProperty(exports, "InvalidParenthesisError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidParenthesisError;
    }
});
Object.defineProperty(exports, "InvalidSignatureError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidSignatureError;
    }
});
Object.defineProperty(exports, "InvalidStructSignatureError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidStructSignatureError;
    }
});
Object.defineProperty(exports, "parseAbi", {
    enumerable: true,
    get: function() {
        return abitype_1.parseAbi;
    }
});
Object.defineProperty(exports, "parseAbiItem", {
    enumerable: true,
    get: function() {
        return abitype_1.parseAbiItem;
    }
});
Object.defineProperty(exports, "parseAbiParameter", {
    enumerable: true,
    get: function() {
        return abitype_1.parseAbiParameter;
    }
});
Object.defineProperty(exports, "parseAbiParameters", {
    enumerable: true,
    get: function() {
        return abitype_1.parseAbiParameters;
    }
});
Object.defineProperty(exports, "SolidityProtectedKeywordError", {
    enumerable: true,
    get: function() {
        return abitype_1.SolidityProtectedKeywordError;
    }
});
Object.defineProperty(exports, "UnknownSignatureError", {
    enumerable: true,
    get: function() {
        return abitype_1.UnknownSignatureError;
    }
});
Object.defineProperty(exports, "UnknownTypeError", {
    enumerable: true,
    get: function() {
        return abitype_1.UnknownTypeError;
    }
});
var getContract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/getContract.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getContract", {
    enumerable: true,
    get: function() {
        return getContract_js_1.getContract;
    }
});
var waitForCallsStatus_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/actions/wallet/waitForCallsStatus.js [app-client] (ecmascript)");
Object.defineProperty(exports, "WaitForCallsStatusTimeoutError", {
    enumerable: true,
    get: function() {
        return waitForCallsStatus_js_1.WaitForCallsStatusTimeoutError;
    }
});
var createClient_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/createClient.js [app-client] (ecmascript)");
Object.defineProperty(exports, "createClient", {
    enumerable: true,
    get: function() {
        return createClient_js_1.createClient;
    }
});
Object.defineProperty(exports, "rpcSchema", {
    enumerable: true,
    get: function() {
        return createClient_js_1.rpcSchema;
    }
});
var createPublicClient_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/createPublicClient.js [app-client] (ecmascript)");
Object.defineProperty(exports, "createPublicClient", {
    enumerable: true,
    get: function() {
        return createPublicClient_js_1.createPublicClient;
    }
});
var createTestClient_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/createTestClient.js [app-client] (ecmascript)");
Object.defineProperty(exports, "createTestClient", {
    enumerable: true,
    get: function() {
        return createTestClient_js_1.createTestClient;
    }
});
var createWalletClient_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/createWalletClient.js [app-client] (ecmascript)");
Object.defineProperty(exports, "createWalletClient", {
    enumerable: true,
    get: function() {
        return createWalletClient_js_1.createWalletClient;
    }
});
var public_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/decorators/public.js [app-client] (ecmascript)");
Object.defineProperty(exports, "publicActions", {
    enumerable: true,
    get: function() {
        return public_js_1.publicActions;
    }
});
var test_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/decorators/test.js [app-client] (ecmascript)");
Object.defineProperty(exports, "testActions", {
    enumerable: true,
    get: function() {
        return test_js_1.testActions;
    }
});
var wallet_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/decorators/wallet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "walletActions", {
    enumerable: true,
    get: function() {
        return wallet_js_1.walletActions;
    }
});
var createTransport_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/transports/createTransport.js [app-client] (ecmascript)");
Object.defineProperty(exports, "createTransport", {
    enumerable: true,
    get: function() {
        return createTransport_js_1.createTransport;
    }
});
var custom_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/transports/custom.js [app-client] (ecmascript)");
Object.defineProperty(exports, "custom", {
    enumerable: true,
    get: function() {
        return custom_js_1.custom;
    }
});
var fallback_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/transports/fallback.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fallback", {
    enumerable: true,
    get: function() {
        return fallback_js_1.fallback;
    }
});
Object.defineProperty(exports, "shouldThrow", {
    enumerable: true,
    get: function() {
        return fallback_js_1.shouldThrow;
    }
});
var http_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/transports/http.js [app-client] (ecmascript)");
Object.defineProperty(exports, "http", {
    enumerable: true,
    get: function() {
        return http_js_1.http;
    }
});
var webSocket_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/clients/transports/webSocket.js [app-client] (ecmascript)");
Object.defineProperty(exports, "webSocket", {
    enumerable: true,
    get: function() {
        return webSocket_js_1.webSocket;
    }
});
var abis_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/abis.js [app-client] (ecmascript)");
Object.defineProperty(exports, "erc20Abi", {
    enumerable: true,
    get: function() {
        return abis_js_1.erc20Abi;
    }
});
Object.defineProperty(exports, "erc20Abi_bytes32", {
    enumerable: true,
    get: function() {
        return abis_js_1.erc20Abi_bytes32;
    }
});
Object.defineProperty(exports, "erc721Abi", {
    enumerable: true,
    get: function() {
        return abis_js_1.erc721Abi;
    }
});
Object.defineProperty(exports, "erc1155Abi", {
    enumerable: true,
    get: function() {
        return abis_js_1.erc1155Abi;
    }
});
Object.defineProperty(exports, "erc4626Abi", {
    enumerable: true,
    get: function() {
        return abis_js_1.erc4626Abi;
    }
});
Object.defineProperty(exports, "erc6492SignatureValidatorAbi", {
    enumerable: true,
    get: function() {
        return abis_js_1.erc6492SignatureValidatorAbi;
    }
});
Object.defineProperty(exports, "universalSignatureValidatorAbi", {
    enumerable: true,
    get: function() {
        return abis_js_1.erc6492SignatureValidatorAbi;
    }
});
Object.defineProperty(exports, "multicall3Abi", {
    enumerable: true,
    get: function() {
        return abis_js_1.multicall3Abi;
    }
});
var address_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/address.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ethAddress", {
    enumerable: true,
    get: function() {
        return address_js_1.ethAddress;
    }
});
Object.defineProperty(exports, "zeroAddress", {
    enumerable: true,
    get: function() {
        return address_js_1.zeroAddress;
    }
});
var bytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/bytes.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zeroHash", {
    enumerable: true,
    get: function() {
        return bytes_js_1.zeroHash;
    }
});
var contracts_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/contracts.js [app-client] (ecmascript)");
Object.defineProperty(exports, "deploylessCallViaBytecodeBytecode", {
    enumerable: true,
    get: function() {
        return contracts_js_1.deploylessCallViaBytecodeBytecode;
    }
});
Object.defineProperty(exports, "deploylessCallViaFactoryBytecode", {
    enumerable: true,
    get: function() {
        return contracts_js_1.deploylessCallViaFactoryBytecode;
    }
});
Object.defineProperty(exports, "erc6492SignatureValidatorByteCode", {
    enumerable: true,
    get: function() {
        return contracts_js_1.erc6492SignatureValidatorByteCode;
    }
});
Object.defineProperty(exports, "universalSignatureValidatorByteCode", {
    enumerable: true,
    get: function() {
        return contracts_js_1.erc6492SignatureValidatorByteCode;
    }
});
var number_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/number.js [app-client] (ecmascript)");
Object.defineProperty(exports, "maxInt8", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt8;
    }
});
Object.defineProperty(exports, "maxInt16", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt16;
    }
});
Object.defineProperty(exports, "maxInt24", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt24;
    }
});
Object.defineProperty(exports, "maxInt32", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt32;
    }
});
Object.defineProperty(exports, "maxInt40", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt40;
    }
});
Object.defineProperty(exports, "maxInt48", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt48;
    }
});
Object.defineProperty(exports, "maxInt56", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt56;
    }
});
Object.defineProperty(exports, "maxInt64", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt64;
    }
});
Object.defineProperty(exports, "maxInt72", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt72;
    }
});
Object.defineProperty(exports, "maxInt80", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt80;
    }
});
Object.defineProperty(exports, "maxInt88", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt88;
    }
});
Object.defineProperty(exports, "maxInt96", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt96;
    }
});
Object.defineProperty(exports, "maxInt104", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt104;
    }
});
Object.defineProperty(exports, "maxInt112", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt112;
    }
});
Object.defineProperty(exports, "maxInt120", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt120;
    }
});
Object.defineProperty(exports, "maxInt128", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt128;
    }
});
Object.defineProperty(exports, "maxInt136", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt136;
    }
});
Object.defineProperty(exports, "maxInt144", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt144;
    }
});
Object.defineProperty(exports, "maxInt152", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt152;
    }
});
Object.defineProperty(exports, "maxInt160", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt160;
    }
});
Object.defineProperty(exports, "maxInt168", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt168;
    }
});
Object.defineProperty(exports, "maxInt176", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt176;
    }
});
Object.defineProperty(exports, "maxInt184", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt184;
    }
});
Object.defineProperty(exports, "maxInt192", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt192;
    }
});
Object.defineProperty(exports, "maxInt200", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt200;
    }
});
Object.defineProperty(exports, "maxInt208", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt208;
    }
});
Object.defineProperty(exports, "maxInt216", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt216;
    }
});
Object.defineProperty(exports, "maxInt224", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt224;
    }
});
Object.defineProperty(exports, "maxInt232", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt232;
    }
});
Object.defineProperty(exports, "maxInt240", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt240;
    }
});
Object.defineProperty(exports, "maxInt248", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt248;
    }
});
Object.defineProperty(exports, "maxInt256", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt256;
    }
});
Object.defineProperty(exports, "maxUint8", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint8;
    }
});
Object.defineProperty(exports, "maxUint16", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint16;
    }
});
Object.defineProperty(exports, "maxUint24", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint24;
    }
});
Object.defineProperty(exports, "maxUint32", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint32;
    }
});
Object.defineProperty(exports, "maxUint40", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint40;
    }
});
Object.defineProperty(exports, "maxUint48", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint48;
    }
});
Object.defineProperty(exports, "maxUint56", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint56;
    }
});
Object.defineProperty(exports, "maxUint64", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint64;
    }
});
Object.defineProperty(exports, "maxUint72", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint72;
    }
});
Object.defineProperty(exports, "maxUint80", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint80;
    }
});
Object.defineProperty(exports, "maxUint88", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint88;
    }
});
Object.defineProperty(exports, "maxUint96", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint96;
    }
});
Object.defineProperty(exports, "maxUint104", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint104;
    }
});
Object.defineProperty(exports, "maxUint112", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint112;
    }
});
Object.defineProperty(exports, "maxUint120", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint120;
    }
});
Object.defineProperty(exports, "maxUint128", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint128;
    }
});
Object.defineProperty(exports, "maxUint136", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint136;
    }
});
Object.defineProperty(exports, "maxUint144", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint144;
    }
});
Object.defineProperty(exports, "maxUint152", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint152;
    }
});
Object.defineProperty(exports, "maxUint160", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint160;
    }
});
Object.defineProperty(exports, "maxUint168", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint168;
    }
});
Object.defineProperty(exports, "maxUint176", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint176;
    }
});
Object.defineProperty(exports, "maxUint184", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint184;
    }
});
Object.defineProperty(exports, "maxUint192", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint192;
    }
});
Object.defineProperty(exports, "maxUint200", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint200;
    }
});
Object.defineProperty(exports, "maxUint208", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint208;
    }
});
Object.defineProperty(exports, "maxUint216", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint216;
    }
});
Object.defineProperty(exports, "maxUint224", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint224;
    }
});
Object.defineProperty(exports, "maxUint232", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint232;
    }
});
Object.defineProperty(exports, "maxUint240", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint240;
    }
});
Object.defineProperty(exports, "maxUint248", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint248;
    }
});
Object.defineProperty(exports, "maxUint256", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint256;
    }
});
Object.defineProperty(exports, "minInt8", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt8;
    }
});
Object.defineProperty(exports, "minInt16", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt16;
    }
});
Object.defineProperty(exports, "minInt24", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt24;
    }
});
Object.defineProperty(exports, "minInt32", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt32;
    }
});
Object.defineProperty(exports, "minInt40", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt40;
    }
});
Object.defineProperty(exports, "minInt48", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt48;
    }
});
Object.defineProperty(exports, "minInt56", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt56;
    }
});
Object.defineProperty(exports, "minInt64", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt64;
    }
});
Object.defineProperty(exports, "minInt72", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt72;
    }
});
Object.defineProperty(exports, "minInt80", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt80;
    }
});
Object.defineProperty(exports, "minInt88", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt88;
    }
});
Object.defineProperty(exports, "minInt96", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt96;
    }
});
Object.defineProperty(exports, "minInt104", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt104;
    }
});
Object.defineProperty(exports, "minInt112", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt112;
    }
});
Object.defineProperty(exports, "minInt120", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt120;
    }
});
Object.defineProperty(exports, "minInt128", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt128;
    }
});
Object.defineProperty(exports, "minInt136", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt136;
    }
});
Object.defineProperty(exports, "minInt144", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt144;
    }
});
Object.defineProperty(exports, "minInt152", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt152;
    }
});
Object.defineProperty(exports, "minInt160", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt160;
    }
});
Object.defineProperty(exports, "minInt168", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt168;
    }
});
Object.defineProperty(exports, "minInt176", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt176;
    }
});
Object.defineProperty(exports, "minInt184", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt184;
    }
});
Object.defineProperty(exports, "minInt192", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt192;
    }
});
Object.defineProperty(exports, "minInt200", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt200;
    }
});
Object.defineProperty(exports, "minInt208", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt208;
    }
});
Object.defineProperty(exports, "minInt216", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt216;
    }
});
Object.defineProperty(exports, "minInt224", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt224;
    }
});
Object.defineProperty(exports, "minInt232", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt232;
    }
});
Object.defineProperty(exports, "minInt240", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt240;
    }
});
Object.defineProperty(exports, "minInt248", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt248;
    }
});
Object.defineProperty(exports, "minInt256", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt256;
    }
});
var strings_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/strings.js [app-client] (ecmascript)");
Object.defineProperty(exports, "presignMessagePrefix", {
    enumerable: true,
    get: function() {
        return strings_js_1.presignMessagePrefix;
    }
});
var unit_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/constants/unit.js [app-client] (ecmascript)");
Object.defineProperty(exports, "etherUnits", {
    enumerable: true,
    get: function() {
        return unit_js_1.etherUnits;
    }
});
Object.defineProperty(exports, "gweiUnits", {
    enumerable: true,
    get: function() {
        return unit_js_1.gweiUnits;
    }
});
Object.defineProperty(exports, "weiUnits", {
    enumerable: true,
    get: function() {
        return unit_js_1.weiUnits;
    }
});
var abi_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
Object.defineProperty(exports, "AbiConstructorNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiConstructorNotFoundError;
    }
});
Object.defineProperty(exports, "AbiConstructorParamsNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiConstructorParamsNotFoundError;
    }
});
Object.defineProperty(exports, "AbiDecodingDataSizeInvalidError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiDecodingDataSizeInvalidError;
    }
});
Object.defineProperty(exports, "AbiDecodingDataSizeTooSmallError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiDecodingDataSizeTooSmallError;
    }
});
Object.defineProperty(exports, "AbiDecodingZeroDataError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiDecodingZeroDataError;
    }
});
Object.defineProperty(exports, "AbiEncodingArrayLengthMismatchError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiEncodingArrayLengthMismatchError;
    }
});
Object.defineProperty(exports, "AbiEncodingBytesSizeMismatchError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiEncodingBytesSizeMismatchError;
    }
});
Object.defineProperty(exports, "AbiEncodingLengthMismatchError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiEncodingLengthMismatchError;
    }
});
Object.defineProperty(exports, "AbiErrorInputsNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiErrorInputsNotFoundError;
    }
});
Object.defineProperty(exports, "AbiErrorNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiErrorNotFoundError;
    }
});
Object.defineProperty(exports, "AbiErrorSignatureNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiErrorSignatureNotFoundError;
    }
});
Object.defineProperty(exports, "AbiEventNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiEventNotFoundError;
    }
});
Object.defineProperty(exports, "AbiEventSignatureEmptyTopicsError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiEventSignatureEmptyTopicsError;
    }
});
Object.defineProperty(exports, "AbiEventSignatureNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiEventSignatureNotFoundError;
    }
});
Object.defineProperty(exports, "AbiFunctionNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiFunctionNotFoundError;
    }
});
Object.defineProperty(exports, "AbiFunctionOutputsNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiFunctionOutputsNotFoundError;
    }
});
Object.defineProperty(exports, "AbiFunctionSignatureNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiFunctionSignatureNotFoundError;
    }
});
Object.defineProperty(exports, "BytesSizeMismatchError", {
    enumerable: true,
    get: function() {
        return abi_js_1.BytesSizeMismatchError;
    }
});
Object.defineProperty(exports, "DecodeLogDataMismatch", {
    enumerable: true,
    get: function() {
        return abi_js_1.DecodeLogDataMismatch;
    }
});
Object.defineProperty(exports, "DecodeLogTopicsMismatch", {
    enumerable: true,
    get: function() {
        return abi_js_1.DecodeLogTopicsMismatch;
    }
});
Object.defineProperty(exports, "InvalidAbiDecodingTypeError", {
    enumerable: true,
    get: function() {
        return abi_js_1.InvalidAbiDecodingTypeError;
    }
});
Object.defineProperty(exports, "InvalidAbiEncodingTypeError", {
    enumerable: true,
    get: function() {
        return abi_js_1.InvalidAbiEncodingTypeError;
    }
});
Object.defineProperty(exports, "InvalidArrayError", {
    enumerable: true,
    get: function() {
        return abi_js_1.InvalidArrayError;
    }
});
Object.defineProperty(exports, "InvalidDefinitionTypeError", {
    enumerable: true,
    get: function() {
        return abi_js_1.InvalidDefinitionTypeError;
    }
});
Object.defineProperty(exports, "UnsupportedPackedAbiType", {
    enumerable: true,
    get: function() {
        return abi_js_1.UnsupportedPackedAbiType;
    }
});
var address_js_2 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
Object.defineProperty(exports, "InvalidAddressError", {
    enumerable: true,
    get: function() {
        return address_js_2.InvalidAddressError;
    }
});
var base_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
Object.defineProperty(exports, "BaseError", {
    enumerable: true,
    get: function() {
        return base_js_1.BaseError;
    }
});
Object.defineProperty(exports, "setErrorConfig", {
    enumerable: true,
    get: function() {
        return base_js_1.setErrorConfig;
    }
});
var block_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/block.js [app-client] (ecmascript)");
Object.defineProperty(exports, "BlockNotFoundError", {
    enumerable: true,
    get: function() {
        return block_js_1.BlockNotFoundError;
    }
});
var calls_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/calls.js [app-client] (ecmascript)");
Object.defineProperty(exports, "BundleFailedError", {
    enumerable: true,
    get: function() {
        return calls_js_1.BundleFailedError;
    }
});
var chain_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/chain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ChainDoesNotSupportContract", {
    enumerable: true,
    get: function() {
        return chain_js_1.ChainDoesNotSupportContract;
    }
});
Object.defineProperty(exports, "ChainMismatchError", {
    enumerable: true,
    get: function() {
        return chain_js_1.ChainMismatchError;
    }
});
Object.defineProperty(exports, "ChainNotFoundError", {
    enumerable: true,
    get: function() {
        return chain_js_1.ChainNotFoundError;
    }
});
Object.defineProperty(exports, "ClientChainNotConfiguredError", {
    enumerable: true,
    get: function() {
        return chain_js_1.ClientChainNotConfiguredError;
    }
});
Object.defineProperty(exports, "InvalidChainIdError", {
    enumerable: true,
    get: function() {
        return chain_js_1.InvalidChainIdError;
    }
});
var contract_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/contract.js [app-client] (ecmascript)");
Object.defineProperty(exports, "CallExecutionError", {
    enumerable: true,
    get: function() {
        return contract_js_1.CallExecutionError;
    }
});
Object.defineProperty(exports, "ContractFunctionExecutionError", {
    enumerable: true,
    get: function() {
        return contract_js_1.ContractFunctionExecutionError;
    }
});
Object.defineProperty(exports, "ContractFunctionRevertedError", {
    enumerable: true,
    get: function() {
        return contract_js_1.ContractFunctionRevertedError;
    }
});
Object.defineProperty(exports, "ContractFunctionZeroDataError", {
    enumerable: true,
    get: function() {
        return contract_js_1.ContractFunctionZeroDataError;
    }
});
Object.defineProperty(exports, "CounterfactualDeploymentFailedError", {
    enumerable: true,
    get: function() {
        return contract_js_1.CounterfactualDeploymentFailedError;
    }
});
Object.defineProperty(exports, "RawContractError", {
    enumerable: true,
    get: function() {
        return contract_js_1.RawContractError;
    }
});
var data_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/data.js [app-client] (ecmascript)");
Object.defineProperty(exports, "SizeExceedsPaddingSizeError", {
    enumerable: true,
    get: function() {
        return data_js_1.SizeExceedsPaddingSizeError;
    }
});
Object.defineProperty(exports, "SliceOffsetOutOfBoundsError", {
    enumerable: true,
    get: function() {
        return data_js_1.SliceOffsetOutOfBoundsError;
    }
});
var encoding_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/encoding.js [app-client] (ecmascript)");
Object.defineProperty(exports, "IntegerOutOfRangeError", {
    enumerable: true,
    get: function() {
        return encoding_js_1.IntegerOutOfRangeError;
    }
});
Object.defineProperty(exports, "InvalidBytesBooleanError", {
    enumerable: true,
    get: function() {
        return encoding_js_1.InvalidBytesBooleanError;
    }
});
Object.defineProperty(exports, "InvalidHexBooleanError", {
    enumerable: true,
    get: function() {
        return encoding_js_1.InvalidHexBooleanError;
    }
});
Object.defineProperty(exports, "InvalidHexValueError", {
    enumerable: true,
    get: function() {
        return encoding_js_1.InvalidHexValueError;
    }
});
Object.defineProperty(exports, "SizeOverflowError", {
    enumerable: true,
    get: function() {
        return encoding_js_1.SizeOverflowError;
    }
});
var ens_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/ens.js [app-client] (ecmascript)");
Object.defineProperty(exports, "EnsAvatarInvalidNftUriError", {
    enumerable: true,
    get: function() {
        return ens_js_1.EnsAvatarInvalidNftUriError;
    }
});
Object.defineProperty(exports, "EnsAvatarUnsupportedNamespaceError", {
    enumerable: true,
    get: function() {
        return ens_js_1.EnsAvatarUnsupportedNamespaceError;
    }
});
Object.defineProperty(exports, "EnsAvatarUriResolutionError", {
    enumerable: true,
    get: function() {
        return ens_js_1.EnsAvatarUriResolutionError;
    }
});
Object.defineProperty(exports, "EnsInvalidChainIdError", {
    enumerable: true,
    get: function() {
        return ens_js_1.EnsInvalidChainIdError;
    }
});
var estimateGas_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/estimateGas.js [app-client] (ecmascript)");
Object.defineProperty(exports, "EstimateGasExecutionError", {
    enumerable: true,
    get: function() {
        return estimateGas_js_1.EstimateGasExecutionError;
    }
});
var fee_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/fee.js [app-client] (ecmascript)");
Object.defineProperty(exports, "BaseFeeScalarError", {
    enumerable: true,
    get: function() {
        return fee_js_1.BaseFeeScalarError;
    }
});
Object.defineProperty(exports, "Eip1559FeesNotSupportedError", {
    enumerable: true,
    get: function() {
        return fee_js_1.Eip1559FeesNotSupportedError;
    }
});
Object.defineProperty(exports, "MaxFeePerGasTooLowError", {
    enumerable: true,
    get: function() {
        return fee_js_1.MaxFeePerGasTooLowError;
    }
});
var log_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/log.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FilterTypeNotSupportedError", {
    enumerable: true,
    get: function() {
        return log_js_1.FilterTypeNotSupportedError;
    }
});
var node_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/node.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ExecutionRevertedError", {
    enumerable: true,
    get: function() {
        return node_js_1.ExecutionRevertedError;
    }
});
Object.defineProperty(exports, "FeeCapTooHighError", {
    enumerable: true,
    get: function() {
        return node_js_1.FeeCapTooHighError;
    }
});
Object.defineProperty(exports, "FeeCapTooLowError", {
    enumerable: true,
    get: function() {
        return node_js_1.FeeCapTooLowError;
    }
});
Object.defineProperty(exports, "InsufficientFundsError", {
    enumerable: true,
    get: function() {
        return node_js_1.InsufficientFundsError;
    }
});
Object.defineProperty(exports, "IntrinsicGasTooHighError", {
    enumerable: true,
    get: function() {
        return node_js_1.IntrinsicGasTooHighError;
    }
});
Object.defineProperty(exports, "IntrinsicGasTooLowError", {
    enumerable: true,
    get: function() {
        return node_js_1.IntrinsicGasTooLowError;
    }
});
Object.defineProperty(exports, "NonceMaxValueError", {
    enumerable: true,
    get: function() {
        return node_js_1.NonceMaxValueError;
    }
});
Object.defineProperty(exports, "NonceTooHighError", {
    enumerable: true,
    get: function() {
        return node_js_1.NonceTooHighError;
    }
});
Object.defineProperty(exports, "NonceTooLowError", {
    enumerable: true,
    get: function() {
        return node_js_1.NonceTooLowError;
    }
});
Object.defineProperty(exports, "TipAboveFeeCapError", {
    enumerable: true,
    get: function() {
        return node_js_1.TipAboveFeeCapError;
    }
});
Object.defineProperty(exports, "TransactionTypeNotSupportedError", {
    enumerable: true,
    get: function() {
        return node_js_1.TransactionTypeNotSupportedError;
    }
});
Object.defineProperty(exports, "UnknownNodeError", {
    enumerable: true,
    get: function() {
        return node_js_1.UnknownNodeError;
    }
});
var request_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)");
Object.defineProperty(exports, "HttpRequestError", {
    enumerable: true,
    get: function() {
        return request_js_1.HttpRequestError;
    }
});
Object.defineProperty(exports, "RpcRequestError", {
    enumerable: true,
    get: function() {
        return request_js_1.RpcRequestError;
    }
});
Object.defineProperty(exports, "SocketClosedError", {
    enumerable: true,
    get: function() {
        return request_js_1.SocketClosedError;
    }
});
Object.defineProperty(exports, "TimeoutError", {
    enumerable: true,
    get: function() {
        return request_js_1.TimeoutError;
    }
});
Object.defineProperty(exports, "WebSocketRequestError", {
    enumerable: true,
    get: function() {
        return request_js_1.WebSocketRequestError;
    }
});
var rpc_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/rpc.js [app-client] (ecmascript)");
Object.defineProperty(exports, "AtomicityNotSupportedError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.AtomicityNotSupportedError;
    }
});
Object.defineProperty(exports, "AtomicReadyWalletRejectedUpgradeError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.AtomicReadyWalletRejectedUpgradeError;
    }
});
Object.defineProperty(exports, "BundleTooLargeError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.BundleTooLargeError;
    }
});
Object.defineProperty(exports, "ChainDisconnectedError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.ChainDisconnectedError;
    }
});
Object.defineProperty(exports, "DuplicateIdError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.DuplicateIdError;
    }
});
Object.defineProperty(exports, "InternalRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.InternalRpcError;
    }
});
Object.defineProperty(exports, "InvalidInputRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.InvalidInputRpcError;
    }
});
Object.defineProperty(exports, "InvalidParamsRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.InvalidParamsRpcError;
    }
});
Object.defineProperty(exports, "InvalidRequestRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.InvalidRequestRpcError;
    }
});
Object.defineProperty(exports, "JsonRpcVersionUnsupportedError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.JsonRpcVersionUnsupportedError;
    }
});
Object.defineProperty(exports, "LimitExceededRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.LimitExceededRpcError;
    }
});
Object.defineProperty(exports, "MethodNotFoundRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.MethodNotFoundRpcError;
    }
});
Object.defineProperty(exports, "MethodNotSupportedRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.MethodNotSupportedRpcError;
    }
});
Object.defineProperty(exports, "ParseRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.ParseRpcError;
    }
});
Object.defineProperty(exports, "ProviderDisconnectedError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.ProviderDisconnectedError;
    }
});
Object.defineProperty(exports, "ProviderRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.ProviderRpcError;
    }
});
Object.defineProperty(exports, "ResourceNotFoundRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.ResourceNotFoundRpcError;
    }
});
Object.defineProperty(exports, "ResourceUnavailableRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.ResourceUnavailableRpcError;
    }
});
Object.defineProperty(exports, "RpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.RpcError;
    }
});
Object.defineProperty(exports, "SwitchChainError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.SwitchChainError;
    }
});
Object.defineProperty(exports, "TransactionRejectedRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.TransactionRejectedRpcError;
    }
});
Object.defineProperty(exports, "UnauthorizedProviderError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.UnauthorizedProviderError;
    }
});
Object.defineProperty(exports, "UnknownBundleIdError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.UnknownBundleIdError;
    }
});
Object.defineProperty(exports, "UnknownRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.UnknownRpcError;
    }
});
Object.defineProperty(exports, "UnsupportedChainIdError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.UnsupportedChainIdError;
    }
});
Object.defineProperty(exports, "UnsupportedNonOptionalCapabilityError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.UnsupportedNonOptionalCapabilityError;
    }
});
Object.defineProperty(exports, "UnsupportedProviderMethodError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.UnsupportedProviderMethodError;
    }
});
Object.defineProperty(exports, "UserRejectedRequestError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.UserRejectedRequestError;
    }
});
var stateOverride_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/stateOverride.js [app-client] (ecmascript)");
Object.defineProperty(exports, "AccountStateConflictError", {
    enumerable: true,
    get: function() {
        return stateOverride_js_1.AccountStateConflictError;
    }
});
Object.defineProperty(exports, "StateAssignmentConflictError", {
    enumerable: true,
    get: function() {
        return stateOverride_js_1.StateAssignmentConflictError;
    }
});
var transaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FeeConflictError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.FeeConflictError;
    }
});
Object.defineProperty(exports, "InvalidLegacyVError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.InvalidLegacyVError;
    }
});
Object.defineProperty(exports, "InvalidSerializableTransactionError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.InvalidSerializableTransactionError;
    }
});
Object.defineProperty(exports, "InvalidSerializedTransactionError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.InvalidSerializedTransactionError;
    }
});
Object.defineProperty(exports, "InvalidSerializedTransactionTypeError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.InvalidSerializedTransactionTypeError;
    }
});
Object.defineProperty(exports, "InvalidStorageKeySizeError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.InvalidStorageKeySizeError;
    }
});
Object.defineProperty(exports, "TransactionExecutionError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.TransactionExecutionError;
    }
});
Object.defineProperty(exports, "TransactionNotFoundError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.TransactionNotFoundError;
    }
});
Object.defineProperty(exports, "TransactionReceiptNotFoundError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.TransactionReceiptNotFoundError;
    }
});
Object.defineProperty(exports, "WaitForTransactionReceiptTimeoutError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.WaitForTransactionReceiptTimeoutError;
    }
});
var transport_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/transport.js [app-client] (ecmascript)");
Object.defineProperty(exports, "UrlRequiredError", {
    enumerable: true,
    get: function() {
        return transport_js_1.UrlRequiredError;
    }
});
var typedData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/typedData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "InvalidDomainError", {
    enumerable: true,
    get: function() {
        return typedData_js_1.InvalidDomainError;
    }
});
Object.defineProperty(exports, "InvalidPrimaryTypeError", {
    enumerable: true,
    get: function() {
        return typedData_js_1.InvalidPrimaryTypeError;
    }
});
Object.defineProperty(exports, "InvalidStructTypeError", {
    enumerable: true,
    get: function() {
        return typedData_js_1.InvalidStructTypeError;
    }
});
var unit_js_2 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/errors/unit.js [app-client] (ecmascript)");
Object.defineProperty(exports, "InvalidDecimalNumberError", {
    enumerable: true,
    get: function() {
        return unit_js_2.InvalidDecimalNumberError;
    }
});
var eip1193_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/types/eip1193.js [app-client] (ecmascript)");
Object.defineProperty(exports, "EIP1193ProviderRpcError", {
    enumerable: true,
    get: function() {
        return eip1193_js_1.ProviderRpcError;
    }
});
var decodeAbiParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-client] (ecmascript)");
Object.defineProperty(exports, "decodeAbiParameters", {
    enumerable: true,
    get: function() {
        return decodeAbiParameters_js_1.decodeAbiParameters;
    }
});
var decodeDeployData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeDeployData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "decodeDeployData", {
    enumerable: true,
    get: function() {
        return decodeDeployData_js_1.decodeDeployData;
    }
});
var decodeErrorResult_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeErrorResult.js [app-client] (ecmascript)");
Object.defineProperty(exports, "decodeErrorResult", {
    enumerable: true,
    get: function() {
        return decodeErrorResult_js_1.decodeErrorResult;
    }
});
var decodeEventLog_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeEventLog.js [app-client] (ecmascript)");
Object.defineProperty(exports, "decodeEventLog", {
    enumerable: true,
    get: function() {
        return decodeEventLog_js_1.decodeEventLog;
    }
});
var decodeFunctionData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeFunctionData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "decodeFunctionData", {
    enumerable: true,
    get: function() {
        return decodeFunctionData_js_1.decodeFunctionData;
    }
});
var decodeFunctionResult_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
Object.defineProperty(exports, "decodeFunctionResult", {
    enumerable: true,
    get: function() {
        return decodeFunctionResult_js_1.decodeFunctionResult;
    }
});
var encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
Object.defineProperty(exports, "encodeAbiParameters", {
    enumerable: true,
    get: function() {
        return encodeAbiParameters_js_1.encodeAbiParameters;
    }
});
var encodeDeployData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeDeployData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "encodeDeployData", {
    enumerable: true,
    get: function() {
        return encodeDeployData_js_1.encodeDeployData;
    }
});
var encodeErrorResult_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeErrorResult.js [app-client] (ecmascript)");
Object.defineProperty(exports, "encodeErrorResult", {
    enumerable: true,
    get: function() {
        return encodeErrorResult_js_1.encodeErrorResult;
    }
});
var encodeEventTopics_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeEventTopics.js [app-client] (ecmascript)");
Object.defineProperty(exports, "encodeEventTopics", {
    enumerable: true,
    get: function() {
        return encodeEventTopics_js_1.encodeEventTopics;
    }
});
var encodeFunctionData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "encodeFunctionData", {
    enumerable: true,
    get: function() {
        return encodeFunctionData_js_1.encodeFunctionData;
    }
});
var encodeFunctionResult_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodeFunctionResult.js [app-client] (ecmascript)");
Object.defineProperty(exports, "encodeFunctionResult", {
    enumerable: true,
    get: function() {
        return encodeFunctionResult_js_1.encodeFunctionResult;
    }
});
var encodePacked_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/encodePacked.js [app-client] (ecmascript)");
Object.defineProperty(exports, "encodePacked", {
    enumerable: true,
    get: function() {
        return encodePacked_js_1.encodePacked;
    }
});
var getAbiItem_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getAbiItem", {
    enumerable: true,
    get: function() {
        return getAbiItem_js_1.getAbiItem;
    }
});
var parseEventLogs_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/parseEventLogs.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseEventLogs", {
    enumerable: true,
    get: function() {
        return parseEventLogs_js_1.parseEventLogs;
    }
});
var prepareEncodeFunctionData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/abi/prepareEncodeFunctionData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "prepareEncodeFunctionData", {
    enumerable: true,
    get: function() {
        return prepareEncodeFunctionData_js_1.prepareEncodeFunctionData;
    }
});
var getAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "checksumAddress", {
    enumerable: true,
    get: function() {
        return getAddress_js_1.checksumAddress;
    }
});
Object.defineProperty(exports, "getAddress", {
    enumerable: true,
    get: function() {
        return getAddress_js_1.getAddress;
    }
});
var getContractAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/getContractAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getContractAddress", {
    enumerable: true,
    get: function() {
        return getContractAddress_js_1.getContractAddress;
    }
});
Object.defineProperty(exports, "getCreate2Address", {
    enumerable: true,
    get: function() {
        return getContractAddress_js_1.getCreate2Address;
    }
});
Object.defineProperty(exports, "getCreateAddress", {
    enumerable: true,
    get: function() {
        return getContractAddress_js_1.getCreateAddress;
    }
});
var isAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isAddress", {
    enumerable: true,
    get: function() {
        return isAddress_js_1.isAddress;
    }
});
var isAddressEqual_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isAddressEqual", {
    enumerable: true,
    get: function() {
        return isAddressEqual_js_1.isAddressEqual;
    }
});
var blobsToCommitments_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/blobsToCommitments.js [app-client] (ecmascript)");
Object.defineProperty(exports, "blobsToCommitments", {
    enumerable: true,
    get: function() {
        return blobsToCommitments_js_1.blobsToCommitments;
    }
});
var blobsToProofs_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/blobsToProofs.js [app-client] (ecmascript)");
Object.defineProperty(exports, "blobsToProofs", {
    enumerable: true,
    get: function() {
        return blobsToProofs_js_1.blobsToProofs;
    }
});
var commitmentsToVersionedHashes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/commitmentsToVersionedHashes.js [app-client] (ecmascript)");
Object.defineProperty(exports, "commitmentsToVersionedHashes", {
    enumerable: true,
    get: function() {
        return commitmentsToVersionedHashes_js_1.commitmentsToVersionedHashes;
    }
});
var commitmentToVersionedHash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/commitmentToVersionedHash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "commitmentToVersionedHash", {
    enumerable: true,
    get: function() {
        return commitmentToVersionedHash_js_1.commitmentToVersionedHash;
    }
});
var fromBlobs_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/fromBlobs.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fromBlobs", {
    enumerable: true,
    get: function() {
        return fromBlobs_js_1.fromBlobs;
    }
});
var sidecarsToVersionedHashes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/sidecarsToVersionedHashes.js [app-client] (ecmascript)");
Object.defineProperty(exports, "sidecarsToVersionedHashes", {
    enumerable: true,
    get: function() {
        return sidecarsToVersionedHashes_js_1.sidecarsToVersionedHashes;
    }
});
var toBlobSidecars_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/toBlobSidecars.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toBlobSidecars", {
    enumerable: true,
    get: function() {
        return toBlobSidecars_js_1.toBlobSidecars;
    }
});
var toBlobs_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/blob/toBlobs.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toBlobs", {
    enumerable: true,
    get: function() {
        return toBlobs_js_1.toBlobs;
    }
});
var ccip_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ccip.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ccipRequest", {
    enumerable: true,
    get: function() {
        return ccip_js_1.ccipRequest;
    }
});
Object.defineProperty(exports, "ccipFetch", {
    enumerable: true,
    get: function() {
        return ccip_js_1.ccipRequest;
    }
});
Object.defineProperty(exports, "offchainLookup", {
    enumerable: true,
    get: function() {
        return ccip_js_1.offchainLookup;
    }
});
Object.defineProperty(exports, "offchainLookupAbiItem", {
    enumerable: true,
    get: function() {
        return ccip_js_1.offchainLookupAbiItem;
    }
});
Object.defineProperty(exports, "offchainLookupSignature", {
    enumerable: true,
    get: function() {
        return ccip_js_1.offchainLookupSignature;
    }
});
var assertCurrentChain_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/chain/assertCurrentChain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "assertCurrentChain", {
    enumerable: true,
    get: function() {
        return assertCurrentChain_js_1.assertCurrentChain;
    }
});
var defineChain_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineChain", {
    enumerable: true,
    get: function() {
        return defineChain_js_1.defineChain;
    }
});
var extractChain_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/chain/extractChain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "extractChain", {
    enumerable: true,
    get: function() {
        return extractChain_js_1.extractChain;
    }
});
var getChainContractAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getChainContractAddress", {
    enumerable: true,
    get: function() {
        return getChainContractAddress_js_1.getChainContractAddress;
    }
});
var concat_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
Object.defineProperty(exports, "concat", {
    enumerable: true,
    get: function() {
        return concat_js_1.concat;
    }
});
Object.defineProperty(exports, "concatBytes", {
    enumerable: true,
    get: function() {
        return concat_js_1.concatBytes;
    }
});
Object.defineProperty(exports, "concatHex", {
    enumerable: true,
    get: function() {
        return concat_js_1.concatHex;
    }
});
var isBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/isBytes.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isBytes", {
    enumerable: true,
    get: function() {
        return isBytes_js_1.isBytes;
    }
});
var isHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isHex", {
    enumerable: true,
    get: function() {
        return isHex_js_1.isHex;
    }
});
var pad_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/pad.js [app-client] (ecmascript)");
Object.defineProperty(exports, "pad", {
    enumerable: true,
    get: function() {
        return pad_js_1.pad;
    }
});
Object.defineProperty(exports, "padBytes", {
    enumerable: true,
    get: function() {
        return pad_js_1.padBytes;
    }
});
Object.defineProperty(exports, "padHex", {
    enumerable: true,
    get: function() {
        return pad_js_1.padHex;
    }
});
var size_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
Object.defineProperty(exports, "size", {
    enumerable: true,
    get: function() {
        return size_js_1.size;
    }
});
var slice_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)");
Object.defineProperty(exports, "slice", {
    enumerable: true,
    get: function() {
        return slice_js_1.slice;
    }
});
Object.defineProperty(exports, "sliceBytes", {
    enumerable: true,
    get: function() {
        return slice_js_1.sliceBytes;
    }
});
Object.defineProperty(exports, "sliceHex", {
    enumerable: true,
    get: function() {
        return slice_js_1.sliceHex;
    }
});
var trim_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/data/trim.js [app-client] (ecmascript)");
Object.defineProperty(exports, "trim", {
    enumerable: true,
    get: function() {
        return trim_js_1.trim;
    }
});
var fromBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromBytes.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bytesToBigInt", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToBigInt;
    }
});
Object.defineProperty(exports, "bytesToBool", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToBool;
    }
});
Object.defineProperty(exports, "bytesToNumber", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToNumber;
    }
});
Object.defineProperty(exports, "bytesToString", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToString;
    }
});
Object.defineProperty(exports, "fromBytes", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.fromBytes;
    }
});
var fromHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fromHex", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.fromHex;
    }
});
Object.defineProperty(exports, "hexToBigInt", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.hexToBigInt;
    }
});
Object.defineProperty(exports, "hexToBool", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.hexToBool;
    }
});
Object.defineProperty(exports, "hexToNumber", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.hexToNumber;
    }
});
Object.defineProperty(exports, "hexToString", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.hexToString;
    }
});
var fromRlp_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/fromRlp.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fromRlp", {
    enumerable: true,
    get: function() {
        return fromRlp_js_1.fromRlp;
    }
});
var toBytes_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
Object.defineProperty(exports, "boolToBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.boolToBytes;
    }
});
Object.defineProperty(exports, "hexToBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.hexToBytes;
    }
});
Object.defineProperty(exports, "numberToBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.numberToBytes;
    }
});
Object.defineProperty(exports, "stringToBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.stringToBytes;
    }
});
Object.defineProperty(exports, "toBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.toBytes;
    }
});
var toHex_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
Object.defineProperty(exports, "boolToHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.boolToHex;
    }
});
Object.defineProperty(exports, "bytesToHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.bytesToHex;
    }
});
Object.defineProperty(exports, "numberToHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.numberToHex;
    }
});
Object.defineProperty(exports, "stringToHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.stringToHex;
    }
});
Object.defineProperty(exports, "toHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.toHex;
    }
});
var toRlp_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/encoding/toRlp.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bytesToRlp", {
    enumerable: true,
    get: function() {
        return toRlp_js_1.bytesToRlp;
    }
});
Object.defineProperty(exports, "hexToRlp", {
    enumerable: true,
    get: function() {
        return toRlp_js_1.hexToRlp;
    }
});
Object.defineProperty(exports, "toRlp", {
    enumerable: true,
    get: function() {
        return toRlp_js_1.toRlp;
    }
});
var labelhash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/labelhash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "labelhash", {
    enumerable: true,
    get: function() {
        return labelhash_js_1.labelhash;
    }
});
var namehash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/namehash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "namehash", {
    enumerable: true,
    get: function() {
        return namehash_js_1.namehash;
    }
});
var toCoinType_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/ens/toCoinType.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toCoinType", {
    enumerable: true,
    get: function() {
        return toCoinType_js_1.toCoinType;
    }
});
var getContractError_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/errors/getContractError.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getContractError", {
    enumerable: true,
    get: function() {
        return getContractError_js_1.getContractError;
    }
});
var block_js_2 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/block.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineBlock", {
    enumerable: true,
    get: function() {
        return block_js_2.defineBlock;
    }
});
Object.defineProperty(exports, "formatBlock", {
    enumerable: true,
    get: function() {
        return block_js_2.formatBlock;
    }
});
var log_js_2 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/log.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatLog", {
    enumerable: true,
    get: function() {
        return log_js_2.formatLog;
    }
});
var transaction_js_2 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transaction.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineTransaction", {
    enumerable: true,
    get: function() {
        return transaction_js_2.defineTransaction;
    }
});
Object.defineProperty(exports, "formatTransaction", {
    enumerable: true,
    get: function() {
        return transaction_js_2.formatTransaction;
    }
});
Object.defineProperty(exports, "transactionType", {
    enumerable: true,
    get: function() {
        return transaction_js_2.transactionType;
    }
});
var transactionReceipt_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transactionReceipt.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineTransactionReceipt", {
    enumerable: true,
    get: function() {
        return transactionReceipt_js_1.defineTransactionReceipt;
    }
});
Object.defineProperty(exports, "formatTransactionReceipt", {
    enumerable: true,
    get: function() {
        return transactionReceipt_js_1.formatTransactionReceipt;
    }
});
var transactionRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineTransactionRequest", {
    enumerable: true,
    get: function() {
        return transactionRequest_js_1.defineTransactionRequest;
    }
});
Object.defineProperty(exports, "formatTransactionRequest", {
    enumerable: true,
    get: function() {
        return transactionRequest_js_1.formatTransactionRequest;
    }
});
Object.defineProperty(exports, "rpcTransactionType", {
    enumerable: true,
    get: function() {
        return transactionRequest_js_1.rpcTransactionType;
    }
});
var isHash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/isHash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isHash", {
    enumerable: true,
    get: function() {
        return isHash_js_1.isHash;
    }
});
var keccak256_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
Object.defineProperty(exports, "keccak256", {
    enumerable: true,
    get: function() {
        return keccak256_js_1.keccak256;
    }
});
var ripemd160_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/ripemd160.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ripemd160", {
    enumerable: true,
    get: function() {
        return ripemd160_js_1.ripemd160;
    }
});
var sha256_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/sha256.js [app-client] (ecmascript)");
Object.defineProperty(exports, "sha256", {
    enumerable: true,
    get: function() {
        return sha256_js_1.sha256;
    }
});
var toEventHash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toEventHash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toEventHash", {
    enumerable: true,
    get: function() {
        return toEventHash_js_1.toEventHash;
    }
});
var toEventSelector_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toEventSelector.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toEventSelector", {
    enumerable: true,
    get: function() {
        return toEventSelector_js_1.toEventSelector;
    }
});
Object.defineProperty(exports, "getEventSelector", {
    enumerable: true,
    get: function() {
        return toEventSelector_js_1.toEventSelector;
    }
});
var toEventSignature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toEventSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toEventSignature", {
    enumerable: true,
    get: function() {
        return toEventSignature_js_1.toEventSignature;
    }
});
Object.defineProperty(exports, "getEventSignature", {
    enumerable: true,
    get: function() {
        return toEventSignature_js_1.toEventSignature;
    }
});
var toFunctionHash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toFunctionHash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toFunctionHash", {
    enumerable: true,
    get: function() {
        return toFunctionHash_js_1.toFunctionHash;
    }
});
var toFunctionSelector_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toFunctionSelector.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toFunctionSelector", {
    enumerable: true,
    get: function() {
        return toFunctionSelector_js_1.toFunctionSelector;
    }
});
Object.defineProperty(exports, "getFunctionSelector", {
    enumerable: true,
    get: function() {
        return toFunctionSelector_js_1.toFunctionSelector;
    }
});
var toFunctionSignature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/hash/toFunctionSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toFunctionSignature", {
    enumerable: true,
    get: function() {
        return toFunctionSignature_js_1.toFunctionSignature;
    }
});
Object.defineProperty(exports, "getFunctionSignature", {
    enumerable: true,
    get: function() {
        return toFunctionSignature_js_1.toFunctionSignature;
    }
});
var defineKzg_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/kzg/defineKzg.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineKzg", {
    enumerable: true,
    get: function() {
        return defineKzg_js_1.defineKzg;
    }
});
var setupKzg_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/kzg/setupKzg.js [app-client] (ecmascript)");
Object.defineProperty(exports, "setupKzg", {
    enumerable: true,
    get: function() {
        return setupKzg_js_1.setupKzg;
    }
});
var nonceManager_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/nonceManager.js [app-client] (ecmascript)");
Object.defineProperty(exports, "createNonceManager", {
    enumerable: true,
    get: function() {
        return nonceManager_js_1.createNonceManager;
    }
});
Object.defineProperty(exports, "nonceManager", {
    enumerable: true,
    get: function() {
        return nonceManager_js_1.nonceManager;
    }
});
var withCache_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/promise/withCache.js [app-client] (ecmascript)");
Object.defineProperty(exports, "withCache", {
    enumerable: true,
    get: function() {
        return withCache_js_1.withCache;
    }
});
var withRetry_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/promise/withRetry.js [app-client] (ecmascript)");
Object.defineProperty(exports, "withRetry", {
    enumerable: true,
    get: function() {
        return withRetry_js_1.withRetry;
    }
});
var withTimeout_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/promise/withTimeout.js [app-client] (ecmascript)");
Object.defineProperty(exports, "withTimeout", {
    enumerable: true,
    get: function() {
        return withTimeout_js_1.withTimeout;
    }
});
var compactSignatureToSignature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/compactSignatureToSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "compactSignatureToSignature", {
    enumerable: true,
    get: function() {
        return compactSignatureToSignature_js_1.compactSignatureToSignature;
    }
});
var hashMessage_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/hashMessage.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hashMessage", {
    enumerable: true,
    get: function() {
        return hashMessage_js_1.hashMessage;
    }
});
var hashTypedData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hashDomain", {
    enumerable: true,
    get: function() {
        return hashTypedData_js_1.hashDomain;
    }
});
Object.defineProperty(exports, "hashStruct", {
    enumerable: true,
    get: function() {
        return hashTypedData_js_1.hashStruct;
    }
});
Object.defineProperty(exports, "hashTypedData", {
    enumerable: true,
    get: function() {
        return hashTypedData_js_1.hashTypedData;
    }
});
var isErc6492Signature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/isErc6492Signature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isErc6492Signature", {
    enumerable: true,
    get: function() {
        return isErc6492Signature_js_1.isErc6492Signature;
    }
});
var isErc8010Signature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/isErc8010Signature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isErc8010Signature", {
    enumerable: true,
    get: function() {
        return isErc8010Signature_js_1.isErc8010Signature;
    }
});
var parseCompactSignature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/parseCompactSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hexToCompactSignature", {
    enumerable: true,
    get: function() {
        return parseCompactSignature_js_1.parseCompactSignature;
    }
});
Object.defineProperty(exports, "parseCompactSignature", {
    enumerable: true,
    get: function() {
        return parseCompactSignature_js_1.parseCompactSignature;
    }
});
var parseErc6492Signature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/parseErc6492Signature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseErc6492Signature", {
    enumerable: true,
    get: function() {
        return parseErc6492Signature_js_1.parseErc6492Signature;
    }
});
var parseErc8010Signature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/parseErc8010Signature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseErc8010Signature", {
    enumerable: true,
    get: function() {
        return parseErc8010Signature_js_1.parseErc8010Signature;
    }
});
var parseSignature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/parseSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hexToSignature", {
    enumerable: true,
    get: function() {
        return parseSignature_js_1.parseSignature;
    }
});
Object.defineProperty(exports, "parseSignature", {
    enumerable: true,
    get: function() {
        return parseSignature_js_1.parseSignature;
    }
});
var recoverAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "recoverAddress", {
    enumerable: true,
    get: function() {
        return recoverAddress_js_1.recoverAddress;
    }
});
var recoverMessageAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverMessageAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "recoverMessageAddress", {
    enumerable: true,
    get: function() {
        return recoverMessageAddress_js_1.recoverMessageAddress;
    }
});
var recoverPublicKey_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverPublicKey.js [app-client] (ecmascript)");
Object.defineProperty(exports, "recoverPublicKey", {
    enumerable: true,
    get: function() {
        return recoverPublicKey_js_1.recoverPublicKey;
    }
});
var recoverTransactionAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverTransactionAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "recoverTransactionAddress", {
    enumerable: true,
    get: function() {
        return recoverTransactionAddress_js_1.recoverTransactionAddress;
    }
});
var recoverTypedDataAddress_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/recoverTypedDataAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "recoverTypedDataAddress", {
    enumerable: true,
    get: function() {
        return recoverTypedDataAddress_js_1.recoverTypedDataAddress;
    }
});
var serializeCompactSignature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/serializeCompactSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "compactSignatureToHex", {
    enumerable: true,
    get: function() {
        return serializeCompactSignature_js_1.serializeCompactSignature;
    }
});
Object.defineProperty(exports, "serializeCompactSignature", {
    enumerable: true,
    get: function() {
        return serializeCompactSignature_js_1.serializeCompactSignature;
    }
});
var serializeErc6492Signature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/serializeErc6492Signature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "serializeErc6492Signature", {
    enumerable: true,
    get: function() {
        return serializeErc6492Signature_js_1.serializeErc6492Signature;
    }
});
var serializeErc8010Signature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/serializeErc8010Signature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "serializeErc8010Signature", {
    enumerable: true,
    get: function() {
        return serializeErc8010Signature_js_1.serializeErc8010Signature;
    }
});
var serializeSignature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/serializeSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "signatureToHex", {
    enumerable: true,
    get: function() {
        return serializeSignature_js_1.serializeSignature;
    }
});
Object.defineProperty(exports, "serializeSignature", {
    enumerable: true,
    get: function() {
        return serializeSignature_js_1.serializeSignature;
    }
});
var signatureToCompactSignature_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/signatureToCompactSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "signatureToCompactSignature", {
    enumerable: true,
    get: function() {
        return signatureToCompactSignature_js_1.signatureToCompactSignature;
    }
});
var toPrefixedMessage_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/toPrefixedMessage.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toPrefixedMessage", {
    enumerable: true,
    get: function() {
        return toPrefixedMessage_js_1.toPrefixedMessage;
    }
});
var verifyHash_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/verifyHash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "verifyHash", {
    enumerable: true,
    get: function() {
        return verifyHash_js_1.verifyHash;
    }
});
var verifyMessage_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/verifyMessage.js [app-client] (ecmascript)");
Object.defineProperty(exports, "verifyMessage", {
    enumerable: true,
    get: function() {
        return verifyMessage_js_1.verifyMessage;
    }
});
var verifyTypedData_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/signature/verifyTypedData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "verifyTypedData", {
    enumerable: true,
    get: function() {
        return verifyTypedData_js_1.verifyTypedData;
    }
});
var stringify_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
Object.defineProperty(exports, "stringify", {
    enumerable: true,
    get: function() {
        return stringify_js_1.stringify;
    }
});
var assertRequest_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-client] (ecmascript)");
Object.defineProperty(exports, "assertRequest", {
    enumerable: true,
    get: function() {
        return assertRequest_js_1.assertRequest;
    }
});
var assertTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/assertTransaction.js [app-client] (ecmascript)");
Object.defineProperty(exports, "assertTransactionEIP1559", {
    enumerable: true,
    get: function() {
        return assertTransaction_js_1.assertTransactionEIP1559;
    }
});
Object.defineProperty(exports, "assertTransactionEIP2930", {
    enumerable: true,
    get: function() {
        return assertTransaction_js_1.assertTransactionEIP2930;
    }
});
Object.defineProperty(exports, "assertTransactionLegacy", {
    enumerable: true,
    get: function() {
        return assertTransaction_js_1.assertTransactionLegacy;
    }
});
var getSerializedTransactionType_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/getSerializedTransactionType.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getSerializedTransactionType", {
    enumerable: true,
    get: function() {
        return getSerializedTransactionType_js_1.getSerializedTransactionType;
    }
});
var getTransactionType_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/getTransactionType.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getTransactionType", {
    enumerable: true,
    get: function() {
        return getTransactionType_js_1.getTransactionType;
    }
});
var parseTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/parseTransaction.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseTransaction", {
    enumerable: true,
    get: function() {
        return parseTransaction_js_1.parseTransaction;
    }
});
var serializeAccessList_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/serializeAccessList.js [app-client] (ecmascript)");
Object.defineProperty(exports, "serializeAccessList", {
    enumerable: true,
    get: function() {
        return serializeAccessList_js_1.serializeAccessList;
    }
});
var serializeTransaction_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/transaction/serializeTransaction.js [app-client] (ecmascript)");
Object.defineProperty(exports, "serializeTransaction", {
    enumerable: true,
    get: function() {
        return serializeTransaction_js_1.serializeTransaction;
    }
});
var typedData_js_2 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/typedData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "domainSeparator", {
    enumerable: true,
    get: function() {
        return typedData_js_2.domainSeparator;
    }
});
Object.defineProperty(exports, "getTypesForEIP712Domain", {
    enumerable: true,
    get: function() {
        return typedData_js_2.getTypesForEIP712Domain;
    }
});
Object.defineProperty(exports, "serializeTypedData", {
    enumerable: true,
    get: function() {
        return typedData_js_2.serializeTypedData;
    }
});
Object.defineProperty(exports, "validateTypedData", {
    enumerable: true,
    get: function() {
        return typedData_js_2.validateTypedData;
    }
});
var formatEther_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/formatEther.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatEther", {
    enumerable: true,
    get: function() {
        return formatEther_js_1.formatEther;
    }
});
var formatGwei_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatGwei", {
    enumerable: true,
    get: function() {
        return formatGwei_js_1.formatGwei;
    }
});
var formatUnits_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/formatUnits.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatUnits", {
    enumerable: true,
    get: function() {
        return formatUnits_js_1.formatUnits;
    }
});
var parseEther_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/parseEther.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseEther", {
    enumerable: true,
    get: function() {
        return parseEther_js_1.parseEther;
    }
});
var parseGwei_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/parseGwei.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseGwei", {
    enumerable: true,
    get: function() {
        return parseGwei_js_1.parseGwei;
    }
});
var parseUnits_js_1 = __turbopack_context__.r("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_cjs/utils/unit/parseUnits.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseUnits", {
    enumerable: true,
    get: function() {
        return parseUnits_js_1.parseUnits;
    }
}); //# sourceMappingURL=index.js.map
}),
]);

//# sourceMappingURL=ee741_viem__cjs_e7f13694._.js.map