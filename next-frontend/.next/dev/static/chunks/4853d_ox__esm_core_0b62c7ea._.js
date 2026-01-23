(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/version.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @internal */ __turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '0.1.1'; //# sourceMappingURL=version.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/internal/errors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUrl",
    ()=>getUrl,
    "getVersion",
    ()=>getVersion,
    "prettyPrint",
    ()=>prettyPrint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/version.js [app-client] (ecmascript)");
;
function getUrl(url) {
    return url;
}
function getVersion() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"];
}
function prettyPrint(args) {
    if (!args) return '';
    const entries = Object.entries(args).map(([key, value])=>{
        if (value === undefined || value === false) return null;
        return [
            key,
            value
        ];
    }).filter(Boolean);
    const maxLength = entries.reduce((acc, [key])=>Math.max(acc, key.length), 0);
    return entries.map(([key, value])=>`  ${`${key}:`.padEnd(maxLength + 1)}  ${value}`).join('\n');
} //# sourceMappingURL=errors.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Errors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseError",
    ()=>BaseError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/internal/errors.js [app-client] (ecmascript)");
;
class BaseError extends Error {
    constructor(shortMessage, options = {}){
        const details = (()=>{
            if (options.cause instanceof BaseError) {
                if (options.cause.details) return options.cause.details;
                if (options.cause.shortMessage) return options.cause.shortMessage;
            }
            if (options.cause?.message) return options.cause.message;
            return options.details;
        })();
        const docsPath = (()=>{
            if (options.cause instanceof BaseError) return options.cause.docsPath || options.docsPath;
            return options.docsPath;
        })();
        const docsBaseUrl = 'https://oxlib.sh';
        const docs = `${docsBaseUrl}${docsPath ?? ''}`;
        const message = [
            shortMessage || 'An error occurred.',
            ...options.metaMessages ? [
                '',
                ...options.metaMessages
            ] : [],
            ...details || docsPath ? [
                '',
                details ? `Details: ${details}` : undefined,
                docsPath ? `See: ${docs}` : undefined
            ] : []
        ].filter((x)=>typeof x === 'string').join('\n');
        super(message, options.cause ? {
            cause: options.cause
        } : undefined);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docs", {
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
        Object.defineProperty(this, "shortMessage", {
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
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BaseError'
        });
        Object.defineProperty(this, "version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: `ox@${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVersion"])()}`
        });
        this.cause = options.cause;
        this.details = details;
        this.docs = docs;
        this.docsPath = docsPath;
        this.shortMessage = shortMessage;
    }
    walk(fn) {
        return walk(this, fn);
    }
}
/** @internal */ function walk(err, fn) {
    if (fn?.(err)) return err;
    if (err && typeof err === 'object' && 'cause' in err && err.cause) return walk(err.cause, fn);
    return fn ? null : err;
} //# sourceMappingURL=Errors.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Json.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parse",
    ()=>parse,
    "stringify",
    ()=>stringify
]);
const bigIntSuffix = '#__bigint';
function parse(string, reviver) {
    return JSON.parse(string, (key, value_)=>{
        const value = value_;
        if (typeof value === 'string' && value.endsWith(bigIntSuffix)) return BigInt(value.slice(0, -bigIntSuffix.length));
        return typeof reviver === 'function' ? reviver(key, value) : value;
    });
}
function stringify(value, replacer, space) {
    return JSON.stringify(value, (key, value)=>{
        if (typeof replacer === 'function') return replacer(key, value);
        if (typeof value === 'bigint') return value.toString() + bigIntSuffix;
        return value;
    }, space);
} //# sourceMappingURL=Json.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/internal/bytes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertEndOffset",
    ()=>assertEndOffset,
    "assertSize",
    ()=>assertSize,
    "assertStartOffset",
    ()=>assertStartOffset,
    "charCodeMap",
    ()=>charCodeMap,
    "charCodeToBase16",
    ()=>charCodeToBase16,
    "pad",
    ()=>pad,
    "trim",
    ()=>trim
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Bytes.js [app-client] (ecmascript)");
;
function assertSize(bytes, size_) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"](bytes) > size_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SizeOverflowError"]({
        givenSize: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"](bytes),
        maxSize: size_
    });
}
function assertStartOffset(value, start) {
    if (typeof start === 'number' && start > 0 && start > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"](value) - 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SliceOffsetOutOfBoundsError"]({
        offset: start,
        position: 'start',
        size: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"](value)
    });
}
function assertEndOffset(value, start, end) {
    if (typeof start === 'number' && typeof end === 'number' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"](value) !== end - start) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SliceOffsetOutOfBoundsError"]({
            offset: end,
            position: 'end',
            size: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"](value)
        });
    }
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
function pad(bytes, options = {}) {
    const { dir, size = 32 } = options;
    if (size === 0) return bytes;
    if (bytes.length > size) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SizeExceedsPaddingSizeError"]({
        size: bytes.length,
        targetSize: size,
        type: 'Bytes'
    });
    const paddedBytes = new Uint8Array(size);
    for(let i = 0; i < size; i++){
        const padEnd = dir === 'right';
        paddedBytes[padEnd ? i : size - i - 1] = bytes[padEnd ? i : bytes.length - i - 1];
    }
    return paddedBytes;
}
function trim(value, options = {}) {
    const { dir = 'left' } = options;
    let data = value;
    let sliceLength = 0;
    for(let i = 0; i < data.length - 1; i++){
        if (data[dir === 'left' ? i : data.length - i - 1].toString() === '0') sliceLength++;
        else break;
    }
    data = dir === 'left' ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
    return data;
} //# sourceMappingURL=bytes.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/internal/hex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertEndOffset",
    ()=>assertEndOffset,
    "assertSize",
    ()=>assertSize,
    "assertStartOffset",
    ()=>assertStartOffset,
    "pad",
    ()=>pad,
    "trim",
    ()=>trim
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Hex.js [app-client] (ecmascript)");
;
function assertSize(hex, size_) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"](hex) > size_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SizeOverflowError"]({
        givenSize: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"](hex),
        maxSize: size_
    });
}
function assertStartOffset(value, start) {
    if (typeof start === 'number' && start > 0 && start > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"](value) - 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SliceOffsetOutOfBoundsError"]({
        offset: start,
        position: 'start',
        size: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"](value)
    });
}
function assertEndOffset(value, start, end) {
    if (typeof start === 'number' && typeof end === 'number' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"](value) !== end - start) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SliceOffsetOutOfBoundsError"]({
            offset: end,
            position: 'end',
            size: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"](value)
        });
    }
}
function pad(hex_, options = {}) {
    const { dir, size = 32 } = options;
    if (size === 0) return hex_;
    const hex = hex_.replace('0x', '');
    if (hex.length > size * 2) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SizeExceedsPaddingSizeError"]({
        size: Math.ceil(hex.length / 2),
        targetSize: size,
        type: 'Hex'
    });
    return `0x${hex[dir === 'right' ? 'padEnd' : 'padStart'](size * 2, '0')}`;
}
function trim(value, options = {}) {
    const { dir = 'left' } = options;
    let data = value.replace('0x', '');
    let sliceLength = 0;
    for(let i = 0; i < data.length - 1; i++){
        if (data[dir === 'left' ? i : data.length - i - 1].toString() === '0') sliceLength++;
        else break;
    }
    data = dir === 'left' ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
    if (data === '0') return '0x';
    if (dir === 'right' && data.length % 2 === 1) return `0x${data}0`;
    return `0x${data}`;
} //# sourceMappingURL=hex.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Bytes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidBytesBooleanError",
    ()=>InvalidBytesBooleanError,
    "InvalidBytesTypeError",
    ()=>InvalidBytesTypeError,
    "SizeExceedsPaddingSizeError",
    ()=>SizeExceedsPaddingSizeError,
    "SizeOverflowError",
    ()=>SizeOverflowError,
    "SliceOffsetOutOfBoundsError",
    ()=>SliceOffsetOutOfBoundsError,
    "assert",
    ()=>assert,
    "concat",
    ()=>concat,
    "from",
    ()=>from,
    "fromArray",
    ()=>fromArray,
    "fromBoolean",
    ()=>fromBoolean,
    "fromHex",
    ()=>fromHex,
    "fromNumber",
    ()=>fromNumber,
    "fromString",
    ()=>fromString,
    "isEqual",
    ()=>isEqual,
    "padLeft",
    ()=>padLeft,
    "padRight",
    ()=>padRight,
    "random",
    ()=>random,
    "size",
    ()=>size,
    "slice",
    ()=>slice,
    "toBigInt",
    ()=>toBigInt,
    "toBoolean",
    ()=>toBoolean,
    "toHex",
    ()=>toHex,
    "toNumber",
    ()=>toNumber,
    "toString",
    ()=>toString,
    "trimLeft",
    ()=>trimLeft,
    "trimRight",
    ()=>trimRight,
    "validate",
    ()=>validate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/@noble/curves/esm/abstract/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Hex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Json.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/internal/bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/internal/hex.js [app-client] (ecmascript)");
;
;
;
;
;
;
const decoder = /*#__PURE__*/ new TextDecoder();
const encoder = /*#__PURE__*/ new TextEncoder();
function assert(value) {
    if (value instanceof Uint8Array) return;
    if (!value) throw new InvalidBytesTypeError(value);
    if (typeof value !== 'object') throw new InvalidBytesTypeError(value);
    if (!('BYTES_PER_ELEMENT' in value)) throw new InvalidBytesTypeError(value);
    if (value.BYTES_PER_ELEMENT !== 1 || value.constructor.name !== 'Uint8Array') throw new InvalidBytesTypeError(value);
}
function concat(...values) {
    let length = 0;
    for (const arr of values){
        length += arr.length;
    }
    const result = new Uint8Array(length);
    for(let i = 0, index = 0; i < values.length; i++){
        const arr = values[i];
        result.set(arr, index);
        index += arr.length;
    }
    return result;
}
function from(value) {
    if (value instanceof Uint8Array) return value;
    if (typeof value === 'string') return fromHex(value);
    return fromArray(value);
}
function fromArray(value) {
    return value instanceof Uint8Array ? value : new Uint8Array(value);
}
function fromBoolean(value, options = {}) {
    const { size } = options;
    const bytes = new Uint8Array(1);
    bytes[0] = Number(value);
    if (typeof size === 'number') {
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSize"](bytes, size);
        return padLeft(bytes, size);
    }
    return bytes;
}
function fromHex(value, options = {}) {
    const { size } = options;
    let hex = value;
    if (size) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSize"](value, size);
        hex = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padRight"](value, size);
    }
    let hexString = hex.slice(2);
    if (hexString.length % 2) hexString = `0${hexString}`;
    const length = hexString.length / 2;
    const bytes = new Uint8Array(length);
    for(let index = 0, j = 0; index < length; index++){
        const nibbleLeft = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodeToBase16"](hexString.charCodeAt(j++));
        const nibbleRight = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodeToBase16"](hexString.charCodeAt(j++));
        if (nibbleLeft === undefined || nibbleRight === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"](`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
        }
        bytes[index] = nibbleLeft * 16 + nibbleRight;
    }
    return bytes;
}
function fromNumber(value, options) {
    const hex = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromNumber"](value, options);
    return fromHex(hex);
}
function fromString(value, options = {}) {
    const { size } = options;
    const bytes = encoder.encode(value);
    if (typeof size === 'number') {
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSize"](bytes, size);
        return padRight(bytes, size);
    }
    return bytes;
}
function isEqual(bytesA, bytesB) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equalBytes"])(bytesA, bytesB);
}
function padLeft(value, size) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"](value, {
        dir: 'left',
        size
    });
}
function padRight(value, size) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"](value, {
        dir: 'right',
        size
    });
}
function random(length) {
    return crypto.getRandomValues(new Uint8Array(length));
}
function size(value) {
    return value.length;
}
function slice(value, start, end, options = {}) {
    const { strict } = options;
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertStartOffset"](value, start);
    const value_ = value.slice(start, end);
    if (strict) __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEndOffset"](value_, start, end);
    return value_;
}
function toBigInt(bytes, options = {}) {
    const { size } = options;
    if (typeof size !== 'undefined') __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSize"](bytes, size);
    const hex = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBytes"](bytes, options);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBigInt"](hex, options);
}
function toBoolean(bytes, options = {}) {
    const { size } = options;
    let bytes_ = bytes;
    if (typeof size !== 'undefined') {
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSize"](bytes_, size);
        bytes_ = trimLeft(bytes_);
    }
    if (bytes_.length > 1 || bytes_[0] > 1) throw new InvalidBytesBooleanError(bytes_);
    return Boolean(bytes_[0]);
}
function toHex(value, options = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBytes"](value, options);
}
function toNumber(bytes, options = {}) {
    const { size } = options;
    if (typeof size !== 'undefined') __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSize"](bytes, size);
    const hex = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBytes"](bytes, options);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNumber"](hex, options);
}
function toString(bytes, options = {}) {
    const { size } = options;
    let bytes_ = bytes;
    if (typeof size !== 'undefined') {
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSize"](bytes_, size);
        bytes_ = trimRight(bytes_);
    }
    return decoder.decode(bytes_);
}
function trimLeft(value) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"](value, {
        dir: 'left'
    });
}
function trimRight(value) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"](value, {
        dir: 'right'
    });
}
function validate(value) {
    try {
        assert(value);
        return true;
    } catch  {
        return false;
    }
}
class InvalidBytesBooleanError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(bytes){
        super(`Bytes value \`${bytes}\` is not a valid boolean.`, {
            metaMessages: [
                'The bytes array must contain a single byte of either a `0` or `1` value.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.InvalidBytesBooleanError'
        });
    }
}
class InvalidBytesTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(value){
        super(`Value \`${typeof value === 'object' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"](value) : value}\` of type \`${typeof value}\` is an invalid Bytes value.`, {
            metaMessages: [
                'Bytes values must be of type `Bytes`.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.InvalidBytesTypeError'
        });
    }
}
class SizeOverflowError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ givenSize, maxSize }){
        super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.SizeOverflowError'
        });
    }
}
class SliceOffsetOutOfBoundsError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ offset, position, size }){
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset \`${offset}\` is out-of-bounds (size: \`${size}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.SliceOffsetOutOfBoundsError'
        });
    }
}
class SizeExceedsPaddingSizeError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ size, targetSize, type }){
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size}\`) exceeds padding size (\`${targetSize}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.SizeExceedsPaddingSizeError'
        });
    }
} //# sourceMappingURL=Bytes.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Hex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IntegerOutOfRangeError",
    ()=>IntegerOutOfRangeError,
    "InvalidHexBooleanError",
    ()=>InvalidHexBooleanError,
    "InvalidHexTypeError",
    ()=>InvalidHexTypeError,
    "InvalidHexValueError",
    ()=>InvalidHexValueError,
    "InvalidLengthError",
    ()=>InvalidLengthError,
    "SizeExceedsPaddingSizeError",
    ()=>SizeExceedsPaddingSizeError,
    "SizeOverflowError",
    ()=>SizeOverflowError,
    "SliceOffsetOutOfBoundsError",
    ()=>SliceOffsetOutOfBoundsError,
    "assert",
    ()=>assert,
    "concat",
    ()=>concat,
    "from",
    ()=>from,
    "fromBoolean",
    ()=>fromBoolean,
    "fromBytes",
    ()=>fromBytes,
    "fromNumber",
    ()=>fromNumber,
    "fromString",
    ()=>fromString,
    "isEqual",
    ()=>isEqual,
    "padLeft",
    ()=>padLeft,
    "padRight",
    ()=>padRight,
    "random",
    ()=>random,
    "size",
    ()=>size,
    "slice",
    ()=>slice,
    "toBigInt",
    ()=>toBigInt,
    "toBoolean",
    ()=>toBoolean,
    "toBytes",
    ()=>toBytes,
    "toNumber",
    ()=>toNumber,
    "toString",
    ()=>toString,
    "trimLeft",
    ()=>trimLeft,
    "trimRight",
    ()=>trimRight,
    "validate",
    ()=>validate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/@noble/curves/esm/abstract/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Json.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/internal/bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/internal/hex.js [app-client] (ecmascript)");
;
;
;
;
;
;
const encoder = /*#__PURE__*/ new TextEncoder();
const hexes = /*#__PURE__*/ Array.from({
    length: 256
}, (_v, i)=>i.toString(16).padStart(2, '0'));
function assert(value, options = {}) {
    const { strict = false } = options;
    if (!value) throw new InvalidHexTypeError(value);
    if (typeof value !== 'string') throw new InvalidHexTypeError(value);
    if (strict) {
        if (!/^0x[0-9a-fA-F]*$/.test(value)) throw new InvalidHexValueError(value);
    }
    if (!value.startsWith('0x')) throw new InvalidHexValueError(value);
}
function concat(...values) {
    return `0x${values.reduce((acc, x)=>acc + x.replace('0x', ''), '')}`;
}
function from(value) {
    if (value instanceof Uint8Array) return fromBytes(value);
    if (Array.isArray(value)) return fromBytes(new Uint8Array(value));
    return value;
}
function fromBoolean(value, options = {}) {
    const hex = `0x${Number(value)}`;
    if (typeof options.size === 'number') {
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSize"](hex, options.size);
        return padLeft(hex, options.size);
    }
    return hex;
}
function fromBytes(value, options = {}) {
    let string = '';
    for(let i = 0; i < value.length; i++)string += hexes[value[i]];
    const hex = `0x${string}`;
    if (typeof options.size === 'number') {
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSize"](hex, options.size);
        return padRight(hex, options.size);
    }
    return hex;
}
function fromNumber(value, options = {}) {
    const { signed, size } = options;
    const value_ = BigInt(value);
    let maxValue;
    if (size) {
        if (signed) maxValue = (1n << BigInt(size) * 8n - 1n) - 1n;
        else maxValue = 2n ** (BigInt(size) * 8n) - 1n;
    } else if (typeof value === 'number') {
        maxValue = BigInt(Number.MAX_SAFE_INTEGER);
    }
    const minValue = typeof maxValue === 'bigint' && signed ? -maxValue - 1n : 0;
    if (maxValue && value_ > maxValue || value_ < minValue) {
        const suffix = typeof value === 'bigint' ? 'n' : '';
        throw new IntegerOutOfRangeError({
            max: maxValue ? `${maxValue}${suffix}` : undefined,
            min: `${minValue}${suffix}`,
            signed,
            size,
            value: `${value}${suffix}`
        });
    }
    const stringValue = (signed && value_ < 0 ? (1n << BigInt(size * 8)) + BigInt(value_) : value_).toString(16);
    const hex = `0x${stringValue}`;
    if (size) return padLeft(hex, size);
    return hex;
}
function fromString(value, options = {}) {
    return fromBytes(encoder.encode(value), options);
}
function isEqual(hexA, hexB) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equalBytes"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"](hexA), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"](hexB));
}
function padLeft(value, size) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"](value, {
        dir: 'left',
        size
    });
}
function padRight(value, size) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"](value, {
        dir: 'right',
        size
    });
}
function random(length) {
    return fromBytes(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["random"](length));
}
function slice(value, start, end, options = {}) {
    const { strict } = options;
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertStartOffset"](value, start);
    const value_ = `0x${value.replace('0x', '').slice((start ?? 0) * 2, (end ?? value.length) * 2)}`;
    if (strict) __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEndOffset"](value_, start, end);
    return value_;
}
function size(value) {
    return Math.ceil((value.length - 2) / 2);
}
function trimLeft(value) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"](value, {
        dir: 'left'
    });
}
function trimRight(value) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"](value, {
        dir: 'right'
    });
}
function toBigInt(hex, options = {}) {
    const { signed } = options;
    if (options.size) __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSize"](hex, options.size);
    const value = BigInt(hex);
    if (!signed) return value;
    const size = (hex.length - 2) / 2;
    const max_unsigned = (1n << BigInt(size) * 8n) - 1n;
    const max_signed = max_unsigned >> 1n;
    if (value <= max_signed) return value;
    return value - max_unsigned - 1n;
}
function toBoolean(hex, options = {}) {
    if (options.size) __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSize"](hex, options.size);
    const hex_ = trimLeft(hex);
    if (hex_ === '0x') return false;
    if (hex_ === '0x1') return true;
    throw new InvalidHexBooleanError(hex);
}
function toBytes(hex, options = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"](hex, options);
}
function toNumber(hex, options = {}) {
    const { signed, size } = options;
    if (!signed && !size) return Number(hex);
    return Number(toBigInt(hex, options));
}
function toString(hex, options = {}) {
    const { size } = options;
    let bytes = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"](hex);
    if (size) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSize"](bytes, size);
        bytes = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trimRight"](bytes);
    }
    return new TextDecoder().decode(bytes);
}
function validate(value, options = {}) {
    const { strict = false } = options;
    try {
        assert(value, {
            strict
        });
        return true;
    } catch  {
        return false;
    }
}
class IntegerOutOfRangeError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ max, min, signed, size, value }){
        super(`Number \`${value}\` is not in safe${size ? ` ${size * 8}-bit` : ''}${signed ? ' signed' : ' unsigned'} integer range ${max ? `(\`${min}\` to \`${max}\`)` : `(above \`${min}\`)`}`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.IntegerOutOfRangeError'
        });
    }
}
class InvalidHexBooleanError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(hex){
        super(`Hex value \`"${hex}"\` is not a valid boolean.`, {
            metaMessages: [
                'The hex value must be `"0x0"` (false) or `"0x1"` (true).'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidHexBooleanError'
        });
    }
}
class InvalidHexTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(value){
        super(`Value \`${typeof value === 'object' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"](value) : value}\` of type \`${typeof value}\` is an invalid hex type.`, {
            metaMessages: [
                'Hex types must be represented as `"0x${string}"`.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidHexTypeError'
        });
    }
}
class InvalidHexValueError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(value){
        super(`Value \`${value}\` is an invalid hex value.`, {
            metaMessages: [
                'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidHexValueError'
        });
    }
}
class InvalidLengthError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(value){
        super(`Hex value \`"${value}"\` is an odd length (${value.length - 2} nibbles).`, {
            metaMessages: [
                'It must be an even length.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidLengthError'
        });
    }
}
class SizeOverflowError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ givenSize, maxSize }){
        super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.SizeOverflowError'
        });
    }
}
class SliceOffsetOutOfBoundsError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ offset, position, size }){
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset \`${offset}\` is out-of-bounds (size: \`${size}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.SliceOffsetOutOfBoundsError'
        });
    }
}
class SizeExceedsPaddingSizeError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ size, targetSize, type }){
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size}\`) exceeds padding size (\`${targetSize}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.SizeExceedsPaddingSizeError'
        });
    }
} //# sourceMappingURL=Hex.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Hex.js [app-client] (ecmascript) <export * as Hex>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Hex.js [app-client] (ecmascript)");
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/PublicKey.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidCompressedPrefixError",
    ()=>InvalidCompressedPrefixError,
    "InvalidError",
    ()=>InvalidError,
    "InvalidPrefixError",
    ()=>InvalidPrefixError,
    "InvalidSerializedSizeError",
    ()=>InvalidSerializedSizeError,
    "InvalidUncompressedPrefixError",
    ()=>InvalidUncompressedPrefixError,
    "assert",
    ()=>assert,
    "compress",
    ()=>compress,
    "from",
    ()=>from,
    "fromBytes",
    ()=>fromBytes,
    "fromHex",
    ()=>fromHex,
    "toBytes",
    ()=>toBytes,
    "toHex",
    ()=>toHex,
    "validate",
    ()=>validate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Hex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Json.js [app-client] (ecmascript)");
;
;
;
;
function assert(publicKey, options = {}) {
    const { compressed } = options;
    const { prefix, x, y } = publicKey;
    // Uncompressed
    if (compressed === false || typeof x === 'bigint' && typeof y === 'bigint') {
        if (prefix !== 4) throw new InvalidPrefixError({
            prefix,
            cause: new InvalidUncompressedPrefixError()
        });
        return;
    }
    // Compressed
    if (compressed === true || typeof x === 'bigint' && typeof y === 'undefined') {
        if (prefix !== 3 && prefix !== 2) throw new InvalidPrefixError({
            prefix,
            cause: new InvalidCompressedPrefixError()
        });
        return;
    }
    // Unknown/invalid
    throw new InvalidError({
        publicKey
    });
}
function compress(publicKey) {
    const { x, y } = publicKey;
    return {
        prefix: y % 2n === 0n ? 2 : 3,
        x
    };
}
function from(value) {
    const publicKey = (()=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validate"](value)) return fromHex(value);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validate"](value)) return fromBytes(value);
        const { prefix, x, y } = value;
        if (typeof x === 'bigint' && typeof y === 'bigint') return {
            prefix: prefix ?? 0x04,
            x,
            y
        };
        return {
            prefix,
            x
        };
    })();
    assert(publicKey);
    return publicKey;
}
function fromBytes(publicKey) {
    return fromHex(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBytes"](publicKey));
}
function fromHex(publicKey) {
    if (publicKey.length !== 132 && publicKey.length !== 130 && publicKey.length !== 68) throw new InvalidSerializedSizeError({
        publicKey
    });
    if (publicKey.length === 130) {
        const x = BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slice"](publicKey, 0, 32));
        const y = BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slice"](publicKey, 32, 64));
        return {
            prefix: 4,
            x,
            y
        };
    }
    if (publicKey.length === 132) {
        const prefix = Number(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slice"](publicKey, 0, 1));
        const x = BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slice"](publicKey, 1, 33));
        const y = BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slice"](publicKey, 33, 65));
        return {
            prefix,
            x,
            y
        };
    }
    const prefix = Number(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slice"](publicKey, 0, 1));
    const x = BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slice"](publicKey, 1, 33));
    return {
        prefix,
        x
    };
}
function toBytes(publicKey, options = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"](toHex(publicKey, options));
}
function toHex(publicKey, options = {}) {
    assert(publicKey);
    const { prefix, x, y } = publicKey;
    const { includePrefix = true } = options;
    const publicKey_ = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"](includePrefix ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromNumber"](prefix, {
        size: 1
    }) : '0x', __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromNumber"](x, {
        size: 32
    }), // If the public key is not compressed, add the y coordinate.
    typeof y === 'bigint' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromNumber"](y, {
        size: 32
    }) : '0x');
    return publicKey_;
}
function validate(publicKey, options = {}) {
    try {
        assert(publicKey, options);
        return true;
    } catch (error) {
        return false;
    }
}
class InvalidError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ publicKey }){
        super(`Value \`${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"](publicKey)}\` is not a valid public key.`, {
            metaMessages: [
                'Public key must contain:',
                '- an `x` and `prefix` value (compressed)',
                '- an `x`, `y`, and `prefix` value (uncompressed)'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidError'
        });
    }
}
class InvalidPrefixError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ prefix, cause }){
        super(`Prefix "${prefix}" is invalid.`, {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidPrefixError'
        });
    }
}
class InvalidCompressedPrefixError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Prefix must be 2 or 3 for compressed public keys.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidCompressedPrefixError'
        });
    }
}
class InvalidUncompressedPrefixError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Prefix must be 4 for uncompressed public keys.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidUncompressedPrefixError'
        });
    }
}
class InvalidSerializedSizeError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ publicKey }){
        super(`Value \`${publicKey}\` is an invalid public key size.`, {
            metaMessages: [
                'Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).',
                `Received ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"](publicKey))} bytes.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidSerializedSizeError'
        });
    }
} //# sourceMappingURL=PublicKey.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/PublicKey.js [app-client] (ecmascript) <export * as PublicKey>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PublicKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/PublicKey.js [app-client] (ecmascript)");
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Solidity.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrayRegex",
    ()=>arrayRegex,
    "bytesRegex",
    ()=>bytesRegex,
    "integerRegex",
    ()=>integerRegex,
    "maxInt104",
    ()=>maxInt104,
    "maxInt112",
    ()=>maxInt112,
    "maxInt120",
    ()=>maxInt120,
    "maxInt128",
    ()=>maxInt128,
    "maxInt136",
    ()=>maxInt136,
    "maxInt144",
    ()=>maxInt144,
    "maxInt152",
    ()=>maxInt152,
    "maxInt16",
    ()=>maxInt16,
    "maxInt160",
    ()=>maxInt160,
    "maxInt168",
    ()=>maxInt168,
    "maxInt176",
    ()=>maxInt176,
    "maxInt184",
    ()=>maxInt184,
    "maxInt192",
    ()=>maxInt192,
    "maxInt200",
    ()=>maxInt200,
    "maxInt208",
    ()=>maxInt208,
    "maxInt216",
    ()=>maxInt216,
    "maxInt224",
    ()=>maxInt224,
    "maxInt232",
    ()=>maxInt232,
    "maxInt24",
    ()=>maxInt24,
    "maxInt240",
    ()=>maxInt240,
    "maxInt248",
    ()=>maxInt248,
    "maxInt256",
    ()=>maxInt256,
    "maxInt32",
    ()=>maxInt32,
    "maxInt40",
    ()=>maxInt40,
    "maxInt48",
    ()=>maxInt48,
    "maxInt56",
    ()=>maxInt56,
    "maxInt64",
    ()=>maxInt64,
    "maxInt72",
    ()=>maxInt72,
    "maxInt8",
    ()=>maxInt8,
    "maxInt80",
    ()=>maxInt80,
    "maxInt88",
    ()=>maxInt88,
    "maxInt96",
    ()=>maxInt96,
    "maxUint104",
    ()=>maxUint104,
    "maxUint112",
    ()=>maxUint112,
    "maxUint120",
    ()=>maxUint120,
    "maxUint128",
    ()=>maxUint128,
    "maxUint136",
    ()=>maxUint136,
    "maxUint144",
    ()=>maxUint144,
    "maxUint152",
    ()=>maxUint152,
    "maxUint16",
    ()=>maxUint16,
    "maxUint160",
    ()=>maxUint160,
    "maxUint168",
    ()=>maxUint168,
    "maxUint176",
    ()=>maxUint176,
    "maxUint184",
    ()=>maxUint184,
    "maxUint192",
    ()=>maxUint192,
    "maxUint200",
    ()=>maxUint200,
    "maxUint208",
    ()=>maxUint208,
    "maxUint216",
    ()=>maxUint216,
    "maxUint224",
    ()=>maxUint224,
    "maxUint232",
    ()=>maxUint232,
    "maxUint24",
    ()=>maxUint24,
    "maxUint240",
    ()=>maxUint240,
    "maxUint248",
    ()=>maxUint248,
    "maxUint256",
    ()=>maxUint256,
    "maxUint32",
    ()=>maxUint32,
    "maxUint40",
    ()=>maxUint40,
    "maxUint48",
    ()=>maxUint48,
    "maxUint56",
    ()=>maxUint56,
    "maxUint64",
    ()=>maxUint64,
    "maxUint72",
    ()=>maxUint72,
    "maxUint8",
    ()=>maxUint8,
    "maxUint80",
    ()=>maxUint80,
    "maxUint88",
    ()=>maxUint88,
    "maxUint96",
    ()=>maxUint96,
    "minInt104",
    ()=>minInt104,
    "minInt112",
    ()=>minInt112,
    "minInt120",
    ()=>minInt120,
    "minInt128",
    ()=>minInt128,
    "minInt136",
    ()=>minInt136,
    "minInt144",
    ()=>minInt144,
    "minInt152",
    ()=>minInt152,
    "minInt16",
    ()=>minInt16,
    "minInt160",
    ()=>minInt160,
    "minInt168",
    ()=>minInt168,
    "minInt176",
    ()=>minInt176,
    "minInt184",
    ()=>minInt184,
    "minInt192",
    ()=>minInt192,
    "minInt200",
    ()=>minInt200,
    "minInt208",
    ()=>minInt208,
    "minInt216",
    ()=>minInt216,
    "minInt224",
    ()=>minInt224,
    "minInt232",
    ()=>minInt232,
    "minInt24",
    ()=>minInt24,
    "minInt240",
    ()=>minInt240,
    "minInt248",
    ()=>minInt248,
    "minInt256",
    ()=>minInt256,
    "minInt32",
    ()=>minInt32,
    "minInt40",
    ()=>minInt40,
    "minInt48",
    ()=>minInt48,
    "minInt56",
    ()=>minInt56,
    "minInt64",
    ()=>minInt64,
    "minInt72",
    ()=>minInt72,
    "minInt8",
    ()=>minInt8,
    "minInt80",
    ()=>minInt80,
    "minInt88",
    ()=>minInt88,
    "minInt96",
    ()=>minInt96
]);
const arrayRegex = /^(.*)\[([0-9]*)\]$/;
const bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
const integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
const maxInt8 = 2n ** (8n - 1n) - 1n;
const maxInt16 = 2n ** (16n - 1n) - 1n;
const maxInt24 = 2n ** (24n - 1n) - 1n;
const maxInt32 = 2n ** (32n - 1n) - 1n;
const maxInt40 = 2n ** (40n - 1n) - 1n;
const maxInt48 = 2n ** (48n - 1n) - 1n;
const maxInt56 = 2n ** (56n - 1n) - 1n;
const maxInt64 = 2n ** (64n - 1n) - 1n;
const maxInt72 = 2n ** (72n - 1n) - 1n;
const maxInt80 = 2n ** (80n - 1n) - 1n;
const maxInt88 = 2n ** (88n - 1n) - 1n;
const maxInt96 = 2n ** (96n - 1n) - 1n;
const maxInt104 = 2n ** (104n - 1n) - 1n;
const maxInt112 = 2n ** (112n - 1n) - 1n;
const maxInt120 = 2n ** (120n - 1n) - 1n;
const maxInt128 = 2n ** (128n - 1n) - 1n;
const maxInt136 = 2n ** (136n - 1n) - 1n;
const maxInt144 = 2n ** (144n - 1n) - 1n;
const maxInt152 = 2n ** (152n - 1n) - 1n;
const maxInt160 = 2n ** (160n - 1n) - 1n;
const maxInt168 = 2n ** (168n - 1n) - 1n;
const maxInt176 = 2n ** (176n - 1n) - 1n;
const maxInt184 = 2n ** (184n - 1n) - 1n;
const maxInt192 = 2n ** (192n - 1n) - 1n;
const maxInt200 = 2n ** (200n - 1n) - 1n;
const maxInt208 = 2n ** (208n - 1n) - 1n;
const maxInt216 = 2n ** (216n - 1n) - 1n;
const maxInt224 = 2n ** (224n - 1n) - 1n;
const maxInt232 = 2n ** (232n - 1n) - 1n;
const maxInt240 = 2n ** (240n - 1n) - 1n;
const maxInt248 = 2n ** (248n - 1n) - 1n;
const maxInt256 = 2n ** (256n - 1n) - 1n;
const minInt8 = -(2n ** (8n - 1n));
const minInt16 = -(2n ** (16n - 1n));
const minInt24 = -(2n ** (24n - 1n));
const minInt32 = -(2n ** (32n - 1n));
const minInt40 = -(2n ** (40n - 1n));
const minInt48 = -(2n ** (48n - 1n));
const minInt56 = -(2n ** (56n - 1n));
const minInt64 = -(2n ** (64n - 1n));
const minInt72 = -(2n ** (72n - 1n));
const minInt80 = -(2n ** (80n - 1n));
const minInt88 = -(2n ** (88n - 1n));
const minInt96 = -(2n ** (96n - 1n));
const minInt104 = -(2n ** (104n - 1n));
const minInt112 = -(2n ** (112n - 1n));
const minInt120 = -(2n ** (120n - 1n));
const minInt128 = -(2n ** (128n - 1n));
const minInt136 = -(2n ** (136n - 1n));
const minInt144 = -(2n ** (144n - 1n));
const minInt152 = -(2n ** (152n - 1n));
const minInt160 = -(2n ** (160n - 1n));
const minInt168 = -(2n ** (168n - 1n));
const minInt176 = -(2n ** (176n - 1n));
const minInt184 = -(2n ** (184n - 1n));
const minInt192 = -(2n ** (192n - 1n));
const minInt200 = -(2n ** (200n - 1n));
const minInt208 = -(2n ** (208n - 1n));
const minInt216 = -(2n ** (216n - 1n));
const minInt224 = -(2n ** (224n - 1n));
const minInt232 = -(2n ** (232n - 1n));
const minInt240 = -(2n ** (240n - 1n));
const minInt248 = -(2n ** (248n - 1n));
const minInt256 = -(2n ** (256n - 1n));
const maxUint8 = 2n ** 8n - 1n;
const maxUint16 = 2n ** 16n - 1n;
const maxUint24 = 2n ** 24n - 1n;
const maxUint32 = 2n ** 32n - 1n;
const maxUint40 = 2n ** 40n - 1n;
const maxUint48 = 2n ** 48n - 1n;
const maxUint56 = 2n ** 56n - 1n;
const maxUint64 = 2n ** 64n - 1n;
const maxUint72 = 2n ** 72n - 1n;
const maxUint80 = 2n ** 80n - 1n;
const maxUint88 = 2n ** 88n - 1n;
const maxUint96 = 2n ** 96n - 1n;
const maxUint104 = 2n ** 104n - 1n;
const maxUint112 = 2n ** 112n - 1n;
const maxUint120 = 2n ** 120n - 1n;
const maxUint128 = 2n ** 128n - 1n;
const maxUint136 = 2n ** 136n - 1n;
const maxUint144 = 2n ** 144n - 1n;
const maxUint152 = 2n ** 152n - 1n;
const maxUint160 = 2n ** 160n - 1n;
const maxUint168 = 2n ** 168n - 1n;
const maxUint176 = 2n ** 176n - 1n;
const maxUint184 = 2n ** 184n - 1n;
const maxUint192 = 2n ** 192n - 1n;
const maxUint200 = 2n ** 200n - 1n;
const maxUint208 = 2n ** 208n - 1n;
const maxUint216 = 2n ** 216n - 1n;
const maxUint224 = 2n ** 224n - 1n;
const maxUint232 = 2n ** 232n - 1n;
const maxUint240 = 2n ** 240n - 1n;
const maxUint248 = 2n ** 248n - 1n;
const maxUint256 = 2n ** 256n - 1n; //# sourceMappingURL=Solidity.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Signature.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidRError",
    ()=>InvalidRError,
    "InvalidSError",
    ()=>InvalidSError,
    "InvalidSerializedSizeError",
    ()=>InvalidSerializedSizeError,
    "InvalidVError",
    ()=>InvalidVError,
    "InvalidYParityError",
    ()=>InvalidYParityError,
    "MissingPropertiesError",
    ()=>MissingPropertiesError,
    "assert",
    ()=>assert,
    "extract",
    ()=>extract,
    "from",
    ()=>from,
    "fromBytes",
    ()=>fromBytes,
    "fromDerBytes",
    ()=>fromDerBytes,
    "fromDerHex",
    ()=>fromDerHex,
    "fromHex",
    ()=>fromHex,
    "fromLegacy",
    ()=>fromLegacy,
    "fromRpc",
    ()=>fromRpc,
    "fromTuple",
    ()=>fromTuple,
    "toBytes",
    ()=>toBytes,
    "toDerBytes",
    ()=>toDerBytes,
    "toDerHex",
    ()=>toDerHex,
    "toHex",
    ()=>toHex,
    "toLegacy",
    ()=>toLegacy,
    "toRpc",
    ()=>toRpc,
    "toTuple",
    ()=>toTuple,
    "vToYParity",
    ()=>vToYParity,
    "validate",
    ()=>validate,
    "yParityToV",
    ()=>yParityToV
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/@noble/curves/esm/secp256k1.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Hex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Json.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Solidity.js [app-client] (ecmascript)");
;
;
;
;
;
;
function assert(signature, options = {}) {
    const { recovered } = options;
    if (typeof signature.r === 'undefined') throw new MissingPropertiesError({
        signature
    });
    if (typeof signature.s === 'undefined') throw new MissingPropertiesError({
        signature
    });
    if (recovered && typeof signature.yParity === 'undefined') throw new MissingPropertiesError({
        signature
    });
    if (signature.r < 0n || signature.r > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxUint256"]) throw new InvalidRError({
        value: signature.r
    });
    if (signature.s < 0n || signature.s > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxUint256"]) throw new InvalidSError({
        value: signature.s
    });
    if (typeof signature.yParity === 'number' && signature.yParity !== 0 && signature.yParity !== 1) throw new InvalidYParityError({
        value: signature.yParity
    });
}
function fromBytes(signature) {
    return fromHex(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBytes"](signature));
}
function fromHex(signature) {
    if (signature.length !== 130 && signature.length !== 132) throw new InvalidSerializedSizeError({
        signature
    });
    const r = BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slice"](signature, 0, 32));
    const s = BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slice"](signature, 32, 64));
    const yParity = (()=>{
        const yParity = Number(`0x${signature.slice(130)}`);
        if (Number.isNaN(yParity)) return undefined;
        try {
            return vToYParity(yParity);
        } catch  {
            throw new InvalidYParityError({
                value: yParity
            });
        }
    })();
    if (typeof yParity === 'undefined') return {
        r,
        s
    };
    return {
        r,
        s,
        yParity
    };
}
function extract(value) {
    if (typeof value.r === 'undefined') return undefined;
    if (typeof value.s === 'undefined') return undefined;
    return from(value);
}
function from(signature) {
    const signature_ = (()=>{
        if (typeof signature === 'string') return fromHex(signature);
        if (signature instanceof Uint8Array) return fromBytes(signature);
        if (typeof signature.r === 'string') return fromRpc(signature);
        if (signature.v) return fromLegacy(signature);
        return {
            r: signature.r,
            s: signature.s,
            ...typeof signature.yParity !== 'undefined' ? {
                yParity: signature.yParity
            } : {}
        };
    })();
    assert(signature_);
    return signature_;
}
function fromDerBytes(signature) {
    return fromDerHex(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBytes"](signature));
}
function fromDerHex(signature) {
    const { r, s } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].Signature.fromDER(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"](signature).slice(2));
    return {
        r,
        s
    };
}
function fromLegacy(signature) {
    return {
        r: signature.r,
        s: signature.s,
        yParity: vToYParity(signature.v)
    };
}
function fromRpc(signature) {
    const yParity = (()=>{
        const v = signature.v ? Number(signature.v) : undefined;
        let yParity = signature.yParity ? Number(signature.yParity) : undefined;
        if (typeof v === 'number' && typeof yParity !== 'number') yParity = vToYParity(v);
        if (typeof yParity !== 'number') throw new InvalidYParityError({
            value: signature.yParity
        });
        return yParity;
    })();
    return {
        r: BigInt(signature.r),
        s: BigInt(signature.s),
        yParity
    };
}
function fromTuple(tuple) {
    const [yParity, r, s] = tuple;
    return from({
        r: r === '0x' ? 0n : BigInt(r),
        s: s === '0x' ? 0n : BigInt(s),
        yParity: yParity === '0x' ? 0 : Number(yParity)
    });
}
function toBytes(signature) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"](toHex(signature));
}
function toHex(signature) {
    assert(signature);
    const r = signature.r;
    const s = signature.s;
    const signature_ = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromNumber"](r, {
        size: 32
    }), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromNumber"](s, {
        size: 32
    }), // If the signature is recovered, add the recovery byte to the signature.
    typeof signature.yParity === 'number' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromNumber"](yParityToV(signature.yParity), {
        size: 1
    }) : '0x');
    return signature_;
}
function toDerBytes(signature) {
    const sig = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].Signature(signature.r, signature.s);
    return sig.toDERRawBytes();
}
function toDerHex(signature) {
    const sig = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].Signature(signature.r, signature.s);
    return `0x${sig.toDERHex()}`;
}
function toLegacy(signature) {
    return {
        r: signature.r,
        s: signature.s,
        v: yParityToV(signature.yParity)
    };
}
function toRpc(signature) {
    const { r, s, yParity } = signature;
    return {
        r: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromNumber"](r, {
            size: 32
        }),
        s: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromNumber"](s, {
            size: 32
        }),
        yParity: yParity === 0 ? '0x0' : '0x1'
    };
}
function toTuple(signature) {
    const { r, s, yParity } = signature;
    return [
        yParity ? '0x01' : '0x',
        r === 0n ? '0x' : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trimLeft"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromNumber"](r)),
        s === 0n ? '0x' : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trimLeft"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromNumber"](s))
    ];
}
function validate(signature, options = {}) {
    try {
        assert(signature, options);
        return true;
    } catch  {
        return false;
    }
}
function vToYParity(v) {
    if (v === 0 || v === 27) return 0;
    if (v === 1 || v === 28) return 1;
    if (v >= 35) return v % 2 === 0 ? 1 : 0;
    throw new InvalidVError({
        value: v
    });
}
function yParityToV(yParity) {
    if (yParity === 0) return 27;
    if (yParity === 1) return 28;
    throw new InvalidYParityError({
        value: yParity
    });
}
class InvalidSerializedSizeError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ signature }){
        super(`Value \`${signature}\` is an invalid signature size.`, {
            metaMessages: [
                'Expected: 64 bytes or 65 bytes.',
                `Received ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"](signature))} bytes.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidSerializedSizeError'
        });
    }
}
class MissingPropertiesError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ signature }){
        super(`Signature \`${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"](signature)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.MissingPropertiesError'
        });
    }
}
class InvalidRError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ value }){
        super(`Value \`${value}\` is an invalid r value. r must be a positive integer less than 2^256.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidRError'
        });
    }
}
class InvalidSError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ value }){
        super(`Value \`${value}\` is an invalid s value. s must be a positive integer less than 2^256.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidSError'
        });
    }
}
class InvalidYParityError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ value }){
        super(`Value \`${value}\` is an invalid y-parity value. Y-parity must be 0 or 1.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidYParityError'
        });
    }
}
class InvalidVError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ value }){
        super(`Value \`${value}\` is an invalid v value. v must be 27, 28 or >=35.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidVError'
        });
    }
} //# sourceMappingURL=Signature.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Signature.js [app-client] (ecmascript) <export * as Signature>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Signature",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Signature.js [app-client] (ecmascript)");
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Base64.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromBytes",
    ()=>fromBytes,
    "fromHex",
    ()=>fromHex,
    "fromString",
    ()=>fromString,
    "toBytes",
    ()=>toBytes,
    "toHex",
    ()=>toHex,
    "toString",
    ()=>toString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Hex.js [app-client] (ecmascript)");
;
;
const encoder = /*#__PURE__*/ new TextEncoder();
const decoder = /*#__PURE__*/ new TextDecoder();
const integerToCharacter = /*#__PURE__*/ Object.fromEntries(Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/').map((a, i)=>[
        i,
        a.charCodeAt(0)
    ]));
const characterToInteger = /*#__PURE__*/ {
    ...Object.fromEntries(Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/').map((a, i)=>[
            a.charCodeAt(0),
            i
        ])),
    ['='.charCodeAt(0)]: 0,
    ['-'.charCodeAt(0)]: 62,
    ['_'.charCodeAt(0)]: 63
};
function fromBytes(value, options = {}) {
    const { pad = true, url = false } = options;
    const encoded = new Uint8Array(Math.ceil(value.length / 3) * 4);
    for(let i = 0, j = 0; j < value.length; i += 4, j += 3){
        const y = (value[j] << 16) + (value[j + 1] << 8) + (value[j + 2] | 0);
        encoded[i] = integerToCharacter[y >> 18];
        encoded[i + 1] = integerToCharacter[y >> 12 & 0x3f];
        encoded[i + 2] = integerToCharacter[y >> 6 & 0x3f];
        encoded[i + 3] = integerToCharacter[y & 0x3f];
    }
    const k = value.length % 3;
    const end = Math.floor(value.length / 3) * 4 + (k && k + 1);
    let base64 = decoder.decode(new Uint8Array(encoded.buffer, 0, end));
    if (pad && k === 1) base64 += '==';
    if (pad && k === 2) base64 += '=';
    if (url) base64 = base64.replaceAll('+', '-').replaceAll('/', '_');
    return base64;
}
function fromHex(value, options = {}) {
    return fromBytes(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"](value), options);
}
function fromString(value, options = {}) {
    return fromBytes(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"](value), options);
}
function toBytes(value) {
    const base64 = value.replace(/=+$/, '');
    const size = base64.length;
    const decoded = new Uint8Array(size + 3);
    encoder.encodeInto(base64 + '===', decoded);
    for(let i = 0, j = 0; i < base64.length; i += 4, j += 3){
        const x = (characterToInteger[decoded[i]] << 18) + (characterToInteger[decoded[i + 1]] << 12) + (characterToInteger[decoded[i + 2]] << 6) + characterToInteger[decoded[i + 3]];
        decoded[j] = x >> 16;
        decoded[j + 1] = x >> 8 & 0xff;
        decoded[j + 2] = x & 0xff;
    }
    const decodedSize = (size >> 2) * 3 + (size % 4 && size % 4 - 1);
    return new Uint8Array(decoded.buffer, 0, decodedSize);
}
function toHex(value) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBytes"](toBytes(value));
}
function toString(value) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"](toBytes(value));
} //# sourceMappingURL=Base64.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Hash.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "keccak256",
    ()=>keccak256,
    "ripemd160",
    ()=>ripemd160,
    "sha256",
    ()=>sha256,
    "validate",
    ()=>validate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$ripemd160$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/node_modules/@noble/hashes/esm/ripemd160.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/node_modules/@noble/hashes/esm/sha3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/node_modules/@noble/hashes/esm/sha256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Hex.js [app-client] (ecmascript)");
;
;
;
;
;
function keccak256(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak_256"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"](value));
    if (as === 'Bytes') return bytes;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBytes"](bytes);
}
function ripemd160(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$ripemd160$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ripemd160"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"](value));
    if (as === 'Bytes') return bytes;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBytes"](bytes);
}
function sha256(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"](value));
    if (as === 'Bytes') return bytes;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBytes"](bytes);
}
function validate(value) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validate"](value) && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"](value) === 32;
} //# sourceMappingURL=Hash.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/internal/entropy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extraEntropy",
    ()=>extraEntropy,
    "setExtraEntropy",
    ()=>setExtraEntropy
]);
let extraEntropy = false;
function setExtraEntropy(entropy) {
    extraEntropy = entropy;
} //# sourceMappingURL=entropy.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/P256.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPublicKey",
    ()=>getPublicKey,
    "noble",
    ()=>noble,
    "randomPrivateKey",
    ()=>randomPrivateKey,
    "recoverPublicKey",
    ()=>recoverPublicKey,
    "sign",
    ()=>sign,
    "verify",
    ()=>verify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$p256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/@noble/curves/esm/p256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Hex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/PublicKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$entropy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/internal/entropy.js [app-client] (ecmascript)");
;
;
;
;
;
const noble = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$p256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256r1"];
function getPublicKey(options) {
    const { privateKey } = options;
    const point = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$p256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256r1"].ProjectivePoint.fromPrivateKey(typeof privateKey === 'string' ? privateKey.slice(2) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBytes"](privateKey).slice(2));
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"](point);
}
function randomPrivateKey(options = {}) {
    const { as = 'Hex' } = options;
    const bytes = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$p256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256r1"].utils.randomPrivateKey();
    if (as === 'Hex') return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBytes"](bytes);
    return bytes;
}
function recoverPublicKey(options) {
    const { payload, signature } = options;
    const { r, s, yParity } = signature;
    const signature_ = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$p256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256r1"].Signature(BigInt(r), BigInt(s)).addRecoveryBit(yParity);
    const payload_ = payload instanceof Uint8Array ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBytes"](payload) : payload;
    const point = signature_.recoverPublicKey(payload_.substring(2));
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"](point);
}
function sign(options) {
    const { extraEntropy = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$entropy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extraEntropy"], hash, payload, privateKey } = options;
    const { r, s, recovery } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$p256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256r1"].sign(payload instanceof Uint8Array ? payload : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"](payload), privateKey instanceof Uint8Array ? privateKey : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"](privateKey), {
        extraEntropy: typeof extraEntropy === 'boolean' ? extraEntropy : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"](extraEntropy).slice(2),
        lowS: true,
        ...hash ? {
            prehash: true
        } : {}
    });
    return {
        r,
        s,
        yParity: recovery
    };
}
function verify(options) {
    const { hash, payload, publicKey, signature } = options;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$p256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256r1"].verify(signature, payload instanceof Uint8Array ? payload : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"](payload), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"](publicKey).substring(2), ...hash ? [
        {
            prehash: true,
            lowS: true
        }
    ] : []);
} //# sourceMappingURL=P256.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/internal/webauthn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseAsn1Signature",
    ()=>parseAsn1Signature,
    "parseCredentialPublicKey",
    ()=>parseCredentialPublicKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$p256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/@noble/curves/esm/p256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Hex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/PublicKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$WebAuthnP256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/WebAuthnP256.js [app-client] (ecmascript)");
;
;
;
;
function parseAsn1Signature(bytes) {
    const r_start = bytes[4] === 0 ? 5 : 4;
    const r_end = r_start + 32;
    const s_start = bytes[r_end + 2] === 0 ? r_end + 3 : r_end + 2;
    const r = BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBytes"](bytes.slice(r_start, r_end)));
    const s = BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBytes"](bytes.slice(s_start)));
    return {
        r,
        s: s > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$p256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p256"].CURVE.n / 2n ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$p256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p256"].CURVE.n - s : s
    };
}
async function parseCredentialPublicKey(response) {
    try {
        const publicKeyBuffer = response.getPublicKey();
        if (!publicKeyBuffer) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$WebAuthnP256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CredentialCreationFailedError"]();
        // Converting `publicKeyBuffer` throws when credential is created by 1Password Firefox Add-on
        const publicKeyBytes = new Uint8Array(publicKeyBuffer);
        const cryptoKey = await crypto.subtle.importKey('spki', new Uint8Array(publicKeyBytes), {
            name: 'ECDSA',
            namedCurve: 'P-256',
            hash: 'SHA-256'
        }, true, [
            'verify'
        ]);
        const publicKey = new Uint8Array(await crypto.subtle.exportKey('raw', cryptoKey));
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"](publicKey);
    } catch (error) {
        // Fallback for 1Password Firefox Add-on restricts access to certain credential properties
        // so we need to use `attestationObject` to extract the public key.
        // https://github.com/passwordless-id/webauthn/issues/50#issuecomment-2072902094
        if (error.message !== 'Permission denied to access object') throw error;
        const data = new Uint8Array(response.attestationObject);
        const coordinateLength = 0x20;
        const cborPrefix = 0x58;
        const findStart = (key)=>{
            const coordinate = new Uint8Array([
                key,
                cborPrefix,
                coordinateLength
            ]);
            for(let i = 0; i < data.length - coordinate.length; i++)if (coordinate.every((byte, j)=>data[i + j] === byte)) return i + coordinate.length;
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$WebAuthnP256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CredentialCreationFailedError"]();
        };
        const xStart = findStart(0x21);
        const yStart = findStart(0x22);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"](new Uint8Array([
            0x04,
            ...data.slice(xStart, xStart + coordinateLength),
            ...data.slice(yStart, yStart + coordinateLength)
        ]));
    }
} //# sourceMappingURL=webauthn.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/WebAuthnP256.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CredentialCreationFailedError",
    ()=>CredentialCreationFailedError,
    "CredentialRequestFailedError",
    ()=>CredentialRequestFailedError,
    "createChallenge",
    ()=>createChallenge,
    "createCredential",
    ()=>createCredential,
    "getAuthenticatorData",
    ()=>getAuthenticatorData,
    "getClientDataJSON",
    ()=>getClientDataJSON,
    "getCredentialCreationOptions",
    ()=>getCredentialCreationOptions,
    "getCredentialRequestOptions",
    ()=>getCredentialRequestOptions,
    "getSignPayload",
    ()=>getSignPayload,
    "sign",
    ()=>sign,
    "verify",
    ()=>verify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Base64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Base64.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Hex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$P256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/P256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$webauthn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/internal/webauthn.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const createChallenge = Uint8Array.from([
    105,
    171,
    180,
    181,
    160,
    222,
    75,
    198,
    42,
    42,
    32,
    31,
    141,
    37,
    186,
    233
]);
async function createCredential(options) {
    const { createFn = window.navigator.credentials.create.bind(window.navigator.credentials), ...rest } = options;
    const creationOptions = getCredentialCreationOptions(rest);
    try {
        const credential = await createFn(creationOptions);
        if (!credential) throw new CredentialCreationFailedError();
        const response = credential.response;
        const publicKey = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$webauthn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseCredentialPublicKey"](response);
        return {
            id: credential.id,
            publicKey,
            raw: credential
        };
    } catch (error) {
        throw new CredentialCreationFailedError({
            cause: error
        });
    }
}
function getAuthenticatorData(options = {}) {
    const { flag = 5, rpId = window.location.hostname, signCount = 0 } = options;
    const rpIdHash = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"](rpId));
    const flag_bytes = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromNumber"](flag, {
        size: 1
    });
    const signCount_bytes = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromNumber"](signCount, {
        size: 4
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"](rpIdHash, flag_bytes, signCount_bytes);
}
function getClientDataJSON(options) {
    const { challenge, crossOrigin = false, extraClientData, origin = window.location.origin } = options;
    return JSON.stringify({
        type: 'webauthn.get',
        challenge: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Base64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"](challenge, {
            url: true,
            pad: false
        }),
        origin,
        crossOrigin,
        ...extraClientData
    });
}
function getCredentialCreationOptions(options) {
    const { attestation = 'none', authenticatorSelection = {
        residentKey: 'preferred',
        requireResidentKey: false,
        userVerification: 'required'
    }, challenge = createChallenge, excludeCredentialIds, name: name_, rp = {
        id: window.location.hostname,
        name: window.document.title
    }, user, extensions } = options;
    const name = user?.name ?? name_;
    return {
        publicKey: {
            attestation,
            authenticatorSelection,
            challenge,
            ...excludeCredentialIds ? {
                excludeCredentials: excludeCredentialIds?.map((id)=>({
                        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Base64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBytes"](id),
                        type: 'public-key'
                    }))
            } : {},
            pubKeyCredParams: [
                {
                    type: 'public-key',
                    alg: -7
                }
            ],
            rp,
            user: {
                id: user?.id ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"](name), {
                    as: 'Bytes'
                }),
                name,
                displayName: user?.displayName ?? name
            },
            extensions
        }
    };
}
function getCredentialRequestOptions(options) {
    const { credentialId, challenge, rpId = window.location.hostname, userVerification = 'required' } = options;
    return {
        publicKey: {
            ...credentialId ? {
                allowCredentials: [
                    {
                        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Base64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBytes"](credentialId),
                        type: 'public-key'
                    }
                ]
            } : {},
            challenge: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"](challenge),
            rpId,
            userVerification
        }
    };
}
function getSignPayload(options) {
    const { challenge, crossOrigin, extraClientData, flag, origin, rpId, signCount, userVerification = 'required' } = options;
    const authenticatorData = getAuthenticatorData({
        flag,
        rpId,
        signCount
    });
    const clientDataJSON = getClientDataJSON({
        challenge,
        crossOrigin,
        extraClientData,
        origin
    });
    const clientDataJSONHash = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"](clientDataJSON));
    const challengeIndex = clientDataJSON.indexOf('"challenge"');
    const typeIndex = clientDataJSON.indexOf('"type"');
    const metadata = {
        authenticatorData,
        clientDataJSON,
        challengeIndex,
        typeIndex,
        userVerificationRequired: userVerification === 'required'
    };
    const payload = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"](authenticatorData, clientDataJSONHash);
    return {
        metadata,
        payload
    };
}
async function sign(options) {
    const { getFn = window.navigator.credentials.get.bind(window.navigator.credentials), ...rest } = options;
    const requestOptions = getCredentialRequestOptions(rest);
    try {
        const credential = await getFn(requestOptions);
        if (!credential) throw new CredentialRequestFailedError();
        const response = credential.response;
        const clientDataJSON = String.fromCharCode(...new Uint8Array(response.clientDataJSON));
        const challengeIndex = clientDataJSON.indexOf('"challenge"');
        const typeIndex = clientDataJSON.indexOf('"type"');
        const signature = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$webauthn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAsn1Signature"](new Uint8Array(response.signature));
        return {
            metadata: {
                authenticatorData: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBytes"](new Uint8Array(response.authenticatorData)),
                clientDataJSON,
                challengeIndex,
                typeIndex,
                userVerificationRequired: requestOptions.publicKey.userVerification === 'required'
            },
            signature,
            raw: credential
        };
    } catch (error) {
        throw new CredentialRequestFailedError({
            cause: error
        });
    }
}
function verify(options) {
    const { challenge, hash = true, metadata, publicKey, signature } = options;
    const { authenticatorData, challengeIndex, clientDataJSON, typeIndex, userVerificationRequired } = metadata;
    const authenticatorDataBytes = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"](authenticatorData);
    // Check length of `authenticatorData`.
    if (authenticatorDataBytes.length < 37) return false;
    const flag = authenticatorDataBytes[32];
    // Verify that the UP bit of the flags in authData is set.
    if ((flag & 0x01) !== 0x01) return false;
    // If user verification was determined to be required, verify that
    // the UV bit of the flags in authData is set. Otherwise, ignore the
    // value of the UV flag.
    if (userVerificationRequired && (flag & 0x04) !== 0x04) return false;
    // If the BE bit of the flags in authData is not set, verify that
    // the BS bit is not set.
    if ((flag & 0x08) !== 0x08 && (flag & 0x10) === 0x10) return false;
    // Check that response is for an authentication assertion
    const type = '"type":"webauthn.get"';
    if (type !== clientDataJSON.slice(Number(typeIndex), type.length + 1)) return false;
    // Check that hash is in the clientDataJSON.
    const match = clientDataJSON.slice(Number(challengeIndex)).match(/^"challenge":"(.*?)"/);
    if (!match) return false;
    // Validate the challenge in the clientDataJSON.
    const [_, challenge_extracted] = match;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBytes"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Base64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBytes"](challenge_extracted)) !== challenge) return false;
    const clientDataJSONHash = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"](clientDataJSON), {
        as: 'Bytes'
    });
    const payload = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"](authenticatorDataBytes, clientDataJSONHash);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$P256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verify"]({
        hash,
        payload,
        publicKey,
        signature
    });
}
class CredentialCreationFailedError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause } = {}){
        super('Failed to create credential.', {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WebAuthnP256.CredentialCreationFailedError'
        });
    }
}
class CredentialRequestFailedError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause } = {}){
        super('Failed to request credential.', {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WebAuthnP256.CredentialRequestFailedError'
        });
    }
} //# sourceMappingURL=WebAuthnP256.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/WebAuthnP256.js [app-client] (ecmascript) <export * as WebAuthnP256>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebAuthnP256",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$WebAuthnP256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$WebAuthnP256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/WebAuthnP256.js [app-client] (ecmascript)");
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/WebCryptoP256.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createKeyPair",
    ()=>createKeyPair,
    "sign",
    ()=>sign,
    "verify",
    ()=>verify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$p256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/@noble/curves/esm/p256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/Bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/PublicKey.js [app-client] (ecmascript)");
;
;
;
async function createKeyPair(options = {}) {
    const { extractable = false } = options;
    const keypair = await globalThis.crypto.subtle.generateKey({
        name: 'ECDSA',
        namedCurve: 'P-256'
    }, extractable, [
        'sign',
        'verify'
    ]);
    const publicKey_raw = await globalThis.crypto.subtle.exportKey('raw', keypair.publicKey);
    const publicKey = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"](new Uint8Array(publicKey_raw));
    return {
        privateKey: keypair.privateKey,
        publicKey
    };
}
async function sign(options) {
    const { payload, privateKey } = options;
    const signature = await globalThis.crypto.subtle.sign({
        name: 'ECDSA',
        hash: 'SHA-256'
    }, privateKey, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"](payload));
    const signature_bytes = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromArray"](new Uint8Array(signature));
    const r = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBigInt"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slice"](signature_bytes, 0, 32));
    let s = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBigInt"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slice"](signature_bytes, 32, 64));
    if (s > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$p256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p256"].CURVE.n / 2n) s = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$p256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p256"].CURVE.n - s;
    return {
        r,
        s
    };
}
async function verify(options) {
    const { payload, signature } = options;
    const publicKey = await globalThis.crypto.subtle.importKey('raw', __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBytes"](options.publicKey), {
        name: 'ECDSA',
        namedCurve: 'P-256'
    }, true, [
        'verify'
    ]);
    return await globalThis.crypto.subtle.verify({
        name: 'ECDSA',
        hash: 'SHA-256'
    }, publicKey, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromNumber"](signature.r), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromNumber"](signature.s)), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"](payload));
} //# sourceMappingURL=WebCryptoP256.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/WebCryptoP256.js [app-client] (ecmascript) <export * as WebCryptoP256>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebCryptoP256",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$WebCryptoP256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f40$base$2d$org$2f$account$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$WebCryptoP256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/@base-org/account/node_modules/ox/_esm/core/WebCryptoP256.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=4853d_ox__esm_core_0b62c7ea._.js.map