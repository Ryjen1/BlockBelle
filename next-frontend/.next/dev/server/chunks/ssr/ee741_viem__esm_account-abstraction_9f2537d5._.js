module.exports = [
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/errors/bundler.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccountNotDeployedError",
    ()=>AccountNotDeployedError,
    "ExecutionRevertedError",
    ()=>ExecutionRevertedError,
    "FailedToSendToBeneficiaryError",
    ()=>FailedToSendToBeneficiaryError,
    "GasValuesOverflowError",
    ()=>GasValuesOverflowError,
    "HandleOpsOutOfGasError",
    ()=>HandleOpsOutOfGasError,
    "InitCodeFailedError",
    ()=>InitCodeFailedError,
    "InitCodeMustCreateSenderError",
    ()=>InitCodeMustCreateSenderError,
    "InitCodeMustReturnSenderError",
    ()=>InitCodeMustReturnSenderError,
    "InsufficientPrefundError",
    ()=>InsufficientPrefundError,
    "InternalCallOnlyError",
    ()=>InternalCallOnlyError,
    "InvalidAccountNonceError",
    ()=>InvalidAccountNonceError,
    "InvalidAggregatorError",
    ()=>InvalidAggregatorError,
    "InvalidBeneficiaryError",
    ()=>InvalidBeneficiaryError,
    "InvalidFieldsError",
    ()=>InvalidFieldsError,
    "InvalidPaymasterAndDataError",
    ()=>InvalidPaymasterAndDataError,
    "PaymasterDepositTooLowError",
    ()=>PaymasterDepositTooLowError,
    "PaymasterFunctionRevertedError",
    ()=>PaymasterFunctionRevertedError,
    "PaymasterNotDeployedError",
    ()=>PaymasterNotDeployedError,
    "PaymasterPostOpFunctionRevertedError",
    ()=>PaymasterPostOpFunctionRevertedError,
    "PaymasterRateLimitError",
    ()=>PaymasterRateLimitError,
    "PaymasterStakeTooLowError",
    ()=>PaymasterStakeTooLowError,
    "SenderAlreadyConstructedError",
    ()=>SenderAlreadyConstructedError,
    "SignatureCheckFailedError",
    ()=>SignatureCheckFailedError,
    "SmartAccountFunctionRevertedError",
    ()=>SmartAccountFunctionRevertedError,
    "UnknownBundlerError",
    ()=>UnknownBundlerError,
    "UnsupportedSignatureAggregatorError",
    ()=>UnsupportedSignatureAggregatorError,
    "UserOperationExpiredError",
    ()=>UserOperationExpiredError,
    "UserOperationOutOfTimeRangeError",
    ()=>UserOperationOutOfTimeRangeError,
    "UserOperationPaymasterExpiredError",
    ()=>UserOperationPaymasterExpiredError,
    "UserOperationPaymasterSignatureError",
    ()=>UserOperationPaymasterSignatureError,
    "UserOperationRejectedByEntryPointError",
    ()=>UserOperationRejectedByEntryPointError,
    "UserOperationRejectedByOpCodeError",
    ()=>UserOperationRejectedByOpCodeError,
    "UserOperationRejectedByPaymasterError",
    ()=>UserOperationRejectedByPaymasterError,
    "UserOperationSignatureError",
    ()=>UserOperationSignatureError,
    "VerificationGasLimitExceededError",
    ()=>VerificationGasLimitExceededError,
    "VerificationGasLimitTooLowError",
    ()=>VerificationGasLimitTooLowError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
;
class AccountNotDeployedError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('Smart Account is not deployed.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- No `factory`/`factoryData` or `initCode` properties are provided for Smart Account deployment.',
                '- An incorrect `sender` address is provided.'
            ],
            name: 'AccountNotDeployedError'
        });
    }
}
Object.defineProperty(AccountNotDeployedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa20/
});
class ExecutionRevertedError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, data, message } = {}){
        const reason = message?.replace('execution reverted: ', '')?.replace('execution reverted', '');
        super(`Execution reverted ${reason ? `with reason: ${reason}` : 'for an unknown reason'}.`, {
            cause,
            name: 'ExecutionRevertedError'
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
Object.defineProperty(ExecutionRevertedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32521
});
Object.defineProperty(ExecutionRevertedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /execution reverted/
});
class FailedToSendToBeneficiaryError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('Failed to send funds to beneficiary.', {
            cause,
            name: 'FailedToSendToBeneficiaryError'
        });
    }
}
Object.defineProperty(FailedToSendToBeneficiaryError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa91/
});
class GasValuesOverflowError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('Gas value overflowed.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- one of the gas values exceeded 2**120 (uint120)'
            ].filter(Boolean),
            name: 'GasValuesOverflowError'
        });
    }
}
Object.defineProperty(GasValuesOverflowError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa94/
});
class HandleOpsOutOfGasError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('The `handleOps` function was called by the Bundler with a gas limit too low.', {
            cause,
            name: 'HandleOpsOutOfGasError'
        });
    }
}
Object.defineProperty(HandleOpsOutOfGasError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa95/
});
class InitCodeFailedError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, factory, factoryData, initCode }){
        super('Failed to simulate deployment for Smart Account.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- Invalid `factory`/`factoryData` or `initCode` properties are present',
                '- Smart Account deployment execution ran out of gas (low `verificationGasLimit` value)',
                '- Smart Account deployment execution reverted with an error\n',
                factory && `factory: ${factory}`,
                factoryData && `factoryData: ${factoryData}`,
                initCode && `initCode: ${initCode}`
            ].filter(Boolean),
            name: 'InitCodeFailedError'
        });
    }
}
Object.defineProperty(InitCodeFailedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa13/
});
class InitCodeMustCreateSenderError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, factory, factoryData, initCode }){
        super('Smart Account initialization implementation did not create an account.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- `factory`/`factoryData` or `initCode` properties are invalid',
                '- Smart Account initialization implementation is incorrect\n',
                factory && `factory: ${factory}`,
                factoryData && `factoryData: ${factoryData}`,
                initCode && `initCode: ${initCode}`
            ].filter(Boolean),
            name: 'InitCodeMustCreateSenderError'
        });
    }
}
Object.defineProperty(InitCodeMustCreateSenderError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa15/
});
class InitCodeMustReturnSenderError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, factory, factoryData, initCode, sender }){
        super('Smart Account initialization implementation does not return the expected sender.', {
            cause,
            metaMessages: [
                'This could arise when:',
                'Smart Account initialization implementation does not return a sender address\n',
                factory && `factory: ${factory}`,
                factoryData && `factoryData: ${factoryData}`,
                initCode && `initCode: ${initCode}`,
                sender && `sender: ${sender}`
            ].filter(Boolean),
            name: 'InitCodeMustReturnSenderError'
        });
    }
}
Object.defineProperty(InitCodeMustReturnSenderError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa14/
});
class InsufficientPrefundError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('Smart Account does not have sufficient funds to execute the User Operation.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the Smart Account does not have sufficient funds to cover the required prefund, or',
                '- a Paymaster was not provided'
            ].filter(Boolean),
            name: 'InsufficientPrefundError'
        });
    }
}
Object.defineProperty(InsufficientPrefundError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa21/
});
class InternalCallOnlyError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('Bundler attempted to call an invalid function on the EntryPoint.', {
            cause,
            name: 'InternalCallOnlyError'
        });
    }
}
Object.defineProperty(InternalCallOnlyError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa92/
});
class InvalidAggregatorError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('Bundler used an invalid aggregator for handling aggregated User Operations.', {
            cause,
            name: 'InvalidAggregatorError'
        });
    }
}
Object.defineProperty(InvalidAggregatorError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa96/
});
class InvalidAccountNonceError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, nonce }){
        super('Invalid Smart Account nonce used for User Operation.', {
            cause,
            metaMessages: [
                nonce && `nonce: ${nonce}`
            ].filter(Boolean),
            name: 'InvalidAccountNonceError'
        });
    }
}
Object.defineProperty(InvalidAccountNonceError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa25/
});
class InvalidBeneficiaryError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('Bundler has not set a beneficiary address.', {
            cause,
            name: 'InvalidBeneficiaryError'
        });
    }
}
Object.defineProperty(InvalidBeneficiaryError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa90/
});
class InvalidFieldsError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('Invalid fields set on User Operation.', {
            cause,
            name: 'InvalidFieldsError'
        });
    }
}
Object.defineProperty(InvalidFieldsError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32602
});
class InvalidPaymasterAndDataError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, paymasterAndData }){
        super('Paymaster properties provided are invalid.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the `paymasterAndData` property is of an incorrect length\n',
                paymasterAndData && `paymasterAndData: ${paymasterAndData}`
            ].filter(Boolean),
            name: 'InvalidPaymasterAndDataError'
        });
    }
}
Object.defineProperty(InvalidPaymasterAndDataError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa93/
});
class PaymasterDepositTooLowError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('Paymaster deposit for the User Operation is too low.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the Paymaster has deposited less than the expected amount via the `deposit` function'
            ].filter(Boolean),
            name: 'PaymasterDepositTooLowError'
        });
    }
}
Object.defineProperty(PaymasterDepositTooLowError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32508
});
Object.defineProperty(PaymasterDepositTooLowError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa31/
});
class PaymasterFunctionRevertedError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('The `validatePaymasterUserOp` function on the Paymaster reverted.', {
            cause,
            name: 'PaymasterFunctionRevertedError'
        });
    }
}
Object.defineProperty(PaymasterFunctionRevertedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa33/
});
class PaymasterNotDeployedError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('The Paymaster contract has not been deployed.', {
            cause,
            name: 'PaymasterNotDeployedError'
        });
    }
}
Object.defineProperty(PaymasterNotDeployedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa30/
});
class PaymasterRateLimitError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('UserOperation rejected because paymaster (or signature aggregator) is throttled/banned.', {
            cause,
            name: 'PaymasterRateLimitError'
        });
    }
}
Object.defineProperty(PaymasterRateLimitError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32504
});
class PaymasterStakeTooLowError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('UserOperation rejected because paymaster (or signature aggregator) is throttled/banned.', {
            cause,
            name: 'PaymasterStakeTooLowError'
        });
    }
}
Object.defineProperty(PaymasterStakeTooLowError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32505
});
class PaymasterPostOpFunctionRevertedError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('Paymaster `postOp` function reverted.', {
            cause,
            name: 'PaymasterPostOpFunctionRevertedError'
        });
    }
}
Object.defineProperty(PaymasterPostOpFunctionRevertedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa50/
});
class SenderAlreadyConstructedError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, factory, factoryData, initCode }){
        super('Smart Account has already been deployed.', {
            cause,
            metaMessages: [
                'Remove the following properties and try again:',
                factory && '`factory`',
                factoryData && '`factoryData`',
                initCode && '`initCode`'
            ].filter(Boolean),
            name: 'SenderAlreadyConstructedError'
        });
    }
}
Object.defineProperty(SenderAlreadyConstructedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa10/
});
class SignatureCheckFailedError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('UserOperation rejected because account signature check failed (or paymaster signature, if the paymaster uses its data as signature).', {
            cause,
            name: 'SignatureCheckFailedError'
        });
    }
}
Object.defineProperty(SignatureCheckFailedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32507
});
class SmartAccountFunctionRevertedError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('The `validateUserOp` function on the Smart Account reverted.', {
            cause,
            name: 'SmartAccountFunctionRevertedError'
        });
    }
}
Object.defineProperty(SmartAccountFunctionRevertedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa23/
});
class UnsupportedSignatureAggregatorError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('UserOperation rejected because account specified unsupported signature aggregator.', {
            cause,
            name: 'UnsupportedSignatureAggregatorError'
        });
    }
}
Object.defineProperty(UnsupportedSignatureAggregatorError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32506
});
class UserOperationExpiredError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('User Operation expired.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the `validAfter` or `validUntil` values returned from `validateUserOp` on the Smart Account are not satisfied'
            ].filter(Boolean),
            name: 'UserOperationExpiredError'
        });
    }
}
Object.defineProperty(UserOperationExpiredError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa22/
});
class UserOperationPaymasterExpiredError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('Paymaster for User Operation expired.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the `validAfter` or `validUntil` values returned from `validatePaymasterUserOp` on the Paymaster are not satisfied'
            ].filter(Boolean),
            name: 'UserOperationPaymasterExpiredError'
        });
    }
}
Object.defineProperty(UserOperationPaymasterExpiredError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa32/
});
class UserOperationSignatureError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('Signature provided for the User Operation is invalid.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the `signature` for the User Operation is incorrectly computed, and unable to be verified by the Smart Account'
            ].filter(Boolean),
            name: 'UserOperationSignatureError'
        });
    }
}
Object.defineProperty(UserOperationSignatureError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa24/
});
class UserOperationPaymasterSignatureError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('Signature provided for the User Operation is invalid.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the `signature` for the User Operation is incorrectly computed, and unable to be verified by the Paymaster'
            ].filter(Boolean),
            name: 'UserOperationPaymasterSignatureError'
        });
    }
}
Object.defineProperty(UserOperationPaymasterSignatureError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa34/
});
class UserOperationRejectedByEntryPointError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super("User Operation rejected by EntryPoint's `simulateValidation` during account creation or validation.", {
            cause,
            name: 'UserOperationRejectedByEntryPointError'
        });
    }
}
Object.defineProperty(UserOperationRejectedByEntryPointError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32500
});
class UserOperationRejectedByPaymasterError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super("User Operation rejected by Paymaster's `validatePaymasterUserOp`.", {
            cause,
            name: 'UserOperationRejectedByPaymasterError'
        });
    }
}
Object.defineProperty(UserOperationRejectedByPaymasterError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32501
});
class UserOperationRejectedByOpCodeError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('User Operation rejected with op code validation error.', {
            cause,
            name: 'UserOperationRejectedByOpCodeError'
        });
    }
}
Object.defineProperty(UserOperationRejectedByOpCodeError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32502
});
class UserOperationOutOfTimeRangeError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('UserOperation out of time-range: either wallet or paymaster returned a time-range, and it is already expired (or will expire soon).', {
            cause,
            name: 'UserOperationOutOfTimeRangeError'
        });
    }
}
Object.defineProperty(UserOperationOutOfTimeRangeError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32503
});
class UnknownBundlerError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super(`An error occurred while executing user operation: ${cause?.shortMessage}`, {
            cause,
            name: 'UnknownBundlerError'
        });
    }
}
class VerificationGasLimitExceededError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('User Operation verification gas limit exceeded.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the gas used for verification exceeded the `verificationGasLimit`'
            ].filter(Boolean),
            name: 'VerificationGasLimitExceededError'
        });
    }
}
Object.defineProperty(VerificationGasLimitExceededError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa40/
});
class VerificationGasLimitTooLowError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('User Operation verification gas limit is too low.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the `verificationGasLimit` is too low to verify the User Operation'
            ].filter(Boolean),
            name: 'VerificationGasLimitTooLowError'
        });
    }
}
Object.defineProperty(VerificationGasLimitTooLowError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa41/
}); //# sourceMappingURL=bundler.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/errors/userOperation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserOperationExecutionError",
    ()=>UserOperationExecutionError,
    "UserOperationNotFoundError",
    ()=>UserOperationNotFoundError,
    "UserOperationReceiptNotFoundError",
    ()=>UserOperationReceiptNotFoundError,
    "WaitForUserOperationReceiptTimeoutError",
    ()=>WaitForUserOperationReceiptTimeoutError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/unit/formatGwei.js [app-ssr] (ecmascript)");
;
;
;
class UserOperationExecutionError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(cause, { callData, callGasLimit, docsPath, factory, factoryData, initCode, maxFeePerGas, maxPriorityFeePerGas, nonce, paymaster, paymasterAndData, paymasterData, paymasterPostOpGasLimit, paymasterVerificationGasLimit, preVerificationGas, sender, signature, verificationGasLimit }){
        const prettyArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prettyPrint"])({
            callData,
            callGasLimit,
            factory,
            factoryData,
            initCode,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' && `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGwei"])(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' && `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGwei"])(maxPriorityFeePerGas)} gwei`,
            nonce,
            paymaster,
            paymasterAndData,
            paymasterData,
            paymasterPostOpGasLimit,
            paymasterVerificationGasLimit,
            preVerificationGas,
            sender,
            signature,
            verificationGasLimit
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
            name: 'UserOperationExecutionError'
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
class UserOperationReceiptNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ hash }){
        super(`User Operation receipt with hash "${hash}" could not be found. The User Operation may not have been processed yet.`, {
            name: 'UserOperationReceiptNotFoundError'
        });
    }
}
class UserOperationNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ hash }){
        super(`User Operation with hash "${hash}" could not be found.`, {
            name: 'UserOperationNotFoundError'
        });
    }
}
class WaitForUserOperationReceiptTimeoutError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ hash }){
        super(`Timed out while waiting for User Operation with hash "${hash}" to be confirmed.`, {
            name: 'WaitForUserOperationReceiptTimeoutError'
        });
    }
} //# sourceMappingURL=userOperation.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/errors/getBundlerError.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBundlerError",
    ()=>getBundlerError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/errors/bundler.js [app-ssr] (ecmascript)");
;
const bundlerErrors = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExecutionRevertedError"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidFieldsError"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymasterDepositTooLowError"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymasterRateLimitError"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymasterStakeTooLowError"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SignatureCheckFailedError"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnsupportedSignatureAggregatorError"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationOutOfTimeRangeError"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationRejectedByEntryPointError"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationRejectedByPaymasterError"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationRejectedByOpCodeError"]
];
function getBundlerError(err, args) {
    const message = (err.details || '').toLowerCase();
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotDeployedError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotDeployedError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FailedToSendToBeneficiaryError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FailedToSendToBeneficiaryError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GasValuesOverflowError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GasValuesOverflowError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HandleOpsOutOfGasError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HandleOpsOutOfGasError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InitCodeFailedError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InitCodeFailedError"]({
        cause: err,
        factory: args.factory,
        factoryData: args.factoryData,
        initCode: args.initCode
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InitCodeMustCreateSenderError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InitCodeMustCreateSenderError"]({
        cause: err,
        factory: args.factory,
        factoryData: args.factoryData,
        initCode: args.initCode
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InitCodeMustReturnSenderError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InitCodeMustReturnSenderError"]({
        cause: err,
        factory: args.factory,
        factoryData: args.factoryData,
        initCode: args.initCode,
        sender: args.sender
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InsufficientPrefundError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InsufficientPrefundError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalCallOnlyError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalCallOnlyError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAccountNonceError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAccountNonceError"]({
        cause: err,
        nonce: args.nonce
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAggregatorError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAggregatorError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidBeneficiaryError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidBeneficiaryError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidPaymasterAndDataError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidPaymasterAndDataError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymasterDepositTooLowError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymasterDepositTooLowError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymasterFunctionRevertedError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymasterFunctionRevertedError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymasterNotDeployedError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymasterNotDeployedError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymasterPostOpFunctionRevertedError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymasterPostOpFunctionRevertedError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SmartAccountFunctionRevertedError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SmartAccountFunctionRevertedError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SenderAlreadyConstructedError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SenderAlreadyConstructedError"]({
        cause: err,
        factory: args.factory,
        factoryData: args.factoryData,
        initCode: args.initCode
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationExpiredError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationExpiredError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationPaymasterExpiredError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationPaymasterExpiredError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationPaymasterSignatureError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationPaymasterSignatureError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationSignatureError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationSignatureError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VerificationGasLimitExceededError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VerificationGasLimitExceededError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VerificationGasLimitTooLowError"].message.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VerificationGasLimitTooLowError"]({
        cause: err
    });
    const error = err.walk((e)=>bundlerErrors.some((error)=>error.code === e.code));
    if (error) {
        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExecutionRevertedError"].code) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExecutionRevertedError"]({
            cause: err,
            data: error.data,
            message: error.details
        });
        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidFieldsError"].code) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidFieldsError"]({
            cause: err
        });
        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymasterDepositTooLowError"].code) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymasterDepositTooLowError"]({
            cause: err
        });
        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymasterRateLimitError"].code) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymasterRateLimitError"]({
            cause: err
        });
        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymasterStakeTooLowError"].code) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymasterStakeTooLowError"]({
            cause: err
        });
        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SignatureCheckFailedError"].code) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SignatureCheckFailedError"]({
            cause: err
        });
        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnsupportedSignatureAggregatorError"].code) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnsupportedSignatureAggregatorError"]({
            cause: err
        });
        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationOutOfTimeRangeError"].code) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationOutOfTimeRangeError"]({
            cause: err
        });
        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationRejectedByEntryPointError"].code) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationRejectedByEntryPointError"]({
            cause: err
        });
        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationRejectedByPaymasterError"].code) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationRejectedByPaymasterError"]({
            cause: err
        });
        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationRejectedByOpCodeError"].code) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationRejectedByOpCodeError"]({
            cause: err
        });
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnknownBundlerError"]({
        cause: err
    });
} //# sourceMappingURL=getBundlerError.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/errors/getUserOperationError.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserOperationError",
    ()=>getUserOperationError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeErrorResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/abi/decodeErrorResult.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/errors/bundler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$userOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/errors/userOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$errors$2f$getBundlerError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/errors/getBundlerError.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function getUserOperationError(err, { calls, docsPath, ...args }) {
    const cause = (()=>{
        const cause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$errors$2f$getBundlerError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBundlerError"])(err, args);
        if (calls && cause instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExecutionRevertedError"]) {
            const revertData = getRevertData(cause);
            const contractCalls = calls?.filter((call)=>call.abi);
            if (revertData && contractCalls.length > 0) return getContractError({
                calls: contractCalls,
                revertData
            });
        }
        return cause;
    })();
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$userOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationExecutionError"](cause, {
        docsPath,
        ...args
    });
}
/////////////////////////////////////////////////////////////////////////////////
function getRevertData(error) {
    let revertData;
    error.walk((e)=>{
        const error = e;
        if (typeof error.data === 'string' || typeof error.data?.revertData === 'string' || !(error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]) && typeof error.message === 'string') {
            const match = (error.data?.revertData || error.data || error.message).match?.(/(0x[A-Za-z0-9]*)/);
            if (match) {
                revertData = match[1];
                return true;
            }
        }
        return false;
    });
    return revertData;
}
function getContractError(parameters) {
    const { calls, revertData } = parameters;
    const { abi, functionName, args, to } = (()=>{
        const contractCalls = calls?.filter((call)=>Boolean(call.abi));
        if (contractCalls.length === 1) return contractCalls[0];
        const compatContractCalls = contractCalls.filter((call)=>{
            try {
                return Boolean((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeErrorResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrorResult"])({
                    abi: call.abi,
                    data: revertData
                }));
            } catch  {
                return false;
            }
        });
        if (compatContractCalls.length === 1) return compatContractCalls[0];
        return {
            abi: [],
            functionName: contractCalls.reduce((acc, call)=>`${acc ? `${acc} | ` : ''}${call.functionName}`, ''),
            args: undefined,
            to: undefined
        };
    })();
    const cause = (()=>{
        if (revertData === '0x') return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContractFunctionZeroDataError"]({
            functionName
        });
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContractFunctionRevertedError"]({
            abi,
            data: revertData,
            functionName
        });
    })();
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContractFunctionExecutionError"](cause, {
        abi,
        args,
        contractAddress: to,
        functionName
    });
} //# sourceMappingURL=getUserOperationError.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/formatters/userOperationGas.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatUserOperationGas",
    ()=>formatUserOperationGas
]);
function formatUserOperationGas(parameters) {
    const gas = {};
    if (parameters.callGasLimit) gas.callGasLimit = BigInt(parameters.callGasLimit);
    if (parameters.preVerificationGas) gas.preVerificationGas = BigInt(parameters.preVerificationGas);
    if (parameters.verificationGasLimit) gas.verificationGasLimit = BigInt(parameters.verificationGasLimit);
    if (parameters.paymasterPostOpGasLimit) gas.paymasterPostOpGasLimit = BigInt(parameters.paymasterPostOpGasLimit);
    if (parameters.paymasterVerificationGasLimit) gas.paymasterVerificationGasLimit = BigInt(parameters.paymasterVerificationGasLimit);
    return gas;
} //# sourceMappingURL=userOperationGas.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/formatters/userOperationRequest.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatUserOperationRequest",
    ()=>formatUserOperationRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/data/pad.js [app-ssr] (ecmascript)");
;
;
function formatUserOperationRequest(request) {
    const rpcRequest = {};
    if (typeof request.callData !== 'undefined') rpcRequest.callData = request.callData;
    if (typeof request.callGasLimit !== 'undefined') rpcRequest.callGasLimit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(request.callGasLimit);
    if (typeof request.factory !== 'undefined') rpcRequest.factory = request.factory;
    if (typeof request.factoryData !== 'undefined') rpcRequest.factoryData = request.factoryData;
    if (typeof request.initCode !== 'undefined') rpcRequest.initCode = request.initCode;
    if (typeof request.maxFeePerGas !== 'undefined') rpcRequest.maxFeePerGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(request.maxFeePerGas);
    if (typeof request.maxPriorityFeePerGas !== 'undefined') rpcRequest.maxPriorityFeePerGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(request.maxPriorityFeePerGas);
    if (typeof request.nonce !== 'undefined') rpcRequest.nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(request.nonce);
    if (typeof request.paymaster !== 'undefined') rpcRequest.paymaster = request.paymaster;
    if (typeof request.paymasterAndData !== 'undefined') rpcRequest.paymasterAndData = request.paymasterAndData || '0x';
    if (typeof request.paymasterData !== 'undefined') rpcRequest.paymasterData = request.paymasterData;
    if (typeof request.paymasterPostOpGasLimit !== 'undefined') rpcRequest.paymasterPostOpGasLimit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(request.paymasterPostOpGasLimit);
    if (typeof request.paymasterVerificationGasLimit !== 'undefined') rpcRequest.paymasterVerificationGasLimit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(request.paymasterVerificationGasLimit);
    if (typeof request.preVerificationGas !== 'undefined') rpcRequest.preVerificationGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(request.preVerificationGas);
    if (typeof request.sender !== 'undefined') rpcRequest.sender = request.sender;
    if (typeof request.signature !== 'undefined') rpcRequest.signature = request.signature;
    if (typeof request.verificationGasLimit !== 'undefined') rpcRequest.verificationGasLimit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(request.verificationGasLimit);
    if (typeof request.authorization !== 'undefined') rpcRequest.eip7702Auth = formatAuthorization(request.authorization);
    return rpcRequest;
}
function formatAuthorization(authorization) {
    return {
        address: authorization.address,
        chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(authorization.chainId),
        nonce: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(authorization.nonce),
        r: authorization.r ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(BigInt(authorization.r), {
            size: 32
        }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])('0x', {
            size: 32
        }),
        s: authorization.s ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(BigInt(authorization.s), {
            size: 32
        }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])('0x', {
            size: 32
        }),
        yParity: authorization.yParity ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(authorization.yParity, {
            size: 1
        }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])('0x', {
            size: 32
        })
    };
} //# sourceMappingURL=userOperationRequest.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/actions/paymaster/getPaymasterData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPaymasterData",
    ()=>getPaymasterData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$formatters$2f$userOperationRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/formatters/userOperationRequest.js [app-ssr] (ecmascript)");
;
;
;
async function getPaymasterData(client, parameters) {
    const { chainId, entryPointAddress, context, ...userOperation } = parameters;
    const request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$formatters$2f$userOperationRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUserOperationRequest"])(userOperation);
    const { paymasterPostOpGasLimit, paymasterVerificationGasLimit, ...rest } = await client.request({
        method: 'pm_getPaymasterData',
        params: [
            {
                ...request,
                callGasLimit: request.callGasLimit ?? '0x0',
                verificationGasLimit: request.verificationGasLimit ?? '0x0',
                preVerificationGas: request.preVerificationGas ?? '0x0'
            },
            entryPointAddress,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(chainId),
            context
        ]
    });
    return {
        ...rest,
        ...paymasterPostOpGasLimit && {
            paymasterPostOpGasLimit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(paymasterPostOpGasLimit)
        },
        ...paymasterVerificationGasLimit && {
            paymasterVerificationGasLimit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(paymasterVerificationGasLimit)
        }
    };
} //# sourceMappingURL=getPaymasterData.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/actions/paymaster/getPaymasterStubData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPaymasterStubData",
    ()=>getPaymasterStubData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$formatters$2f$userOperationRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/formatters/userOperationRequest.js [app-ssr] (ecmascript)");
;
;
;
async function getPaymasterStubData(client, parameters) {
    const { chainId, entryPointAddress, context, ...userOperation } = parameters;
    const request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$formatters$2f$userOperationRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUserOperationRequest"])(userOperation);
    const { paymasterPostOpGasLimit, paymasterVerificationGasLimit, ...rest } = await client.request({
        method: 'pm_getPaymasterStubData',
        params: [
            {
                ...request,
                callGasLimit: request.callGasLimit ?? '0x0',
                verificationGasLimit: request.verificationGasLimit ?? '0x0',
                preVerificationGas: request.preVerificationGas ?? '0x0'
            },
            entryPointAddress,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(chainId),
            context
        ]
    });
    return {
        ...rest,
        ...paymasterPostOpGasLimit && {
            paymasterPostOpGasLimit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(paymasterPostOpGasLimit)
        },
        ...paymasterVerificationGasLimit && {
            paymasterVerificationGasLimit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(paymasterVerificationGasLimit)
        }
    };
} //# sourceMappingURL=getPaymasterStubData.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/actions/bundler/prepareUserOperation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prepareUserOperation",
    ()=>prepareUserOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareAuthorization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/wallet/prepareAuthorization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateFeesPerGas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/public/estimateFeesPerGas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/public/getChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/account.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$paymaster$2f$getPaymasterData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/actions/paymaster/getPaymasterData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$paymaster$2f$getPaymasterStubData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/actions/paymaster/getPaymasterStubData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$estimateUserOperationGas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/actions/bundler/estimateUserOperationGas.js [app-ssr] (ecmascript)");
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
const defaultParameters = [
    'factory',
    'fees',
    'gas',
    'paymaster',
    'nonce',
    'signature',
    'authorization'
];
async function prepareUserOperation(client, parameters_) {
    const parameters = parameters_;
    const { account: account_ = client.account, parameters: properties = defaultParameters, stateOverride } = parameters;
    ////////////////////////////////////////////////////////////////////////////////
    // Assert that an Account is defined.
    ////////////////////////////////////////////////////////////////////////////////
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]();
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    ////////////////////////////////////////////////////////////////////////////////
    // Declare typed Bundler Client.
    ////////////////////////////////////////////////////////////////////////////////
    const bundlerClient = client;
    ////////////////////////////////////////////////////////////////////////////////
    // Declare Paymaster properties.
    ////////////////////////////////////////////////////////////////////////////////
    const paymaster = parameters.paymaster ?? bundlerClient?.paymaster;
    const paymasterAddress = typeof paymaster === 'string' ? paymaster : undefined;
    const { getPaymasterStubData, getPaymasterData } = (()=>{
        // If `paymaster: true`, we will assume the Bundler Client supports Paymaster Actions.
        if (paymaster === true) return {
            getPaymasterStubData: (parameters)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(bundlerClient, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$paymaster$2f$getPaymasterStubData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPaymasterStubData"], 'getPaymasterStubData')(parameters),
            getPaymasterData: (parameters)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(bundlerClient, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$paymaster$2f$getPaymasterData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPaymasterData"], 'getPaymasterData')(parameters)
        };
        // If Actions are passed to `paymaster` (via Paymaster Client or directly), we will use them.
        if (typeof paymaster === 'object') {
            const { getPaymasterStubData, getPaymasterData } = paymaster;
            return {
                getPaymasterStubData: getPaymasterData && getPaymasterStubData ? getPaymasterStubData : getPaymasterData,
                getPaymasterData: getPaymasterData && getPaymasterStubData ? getPaymasterData : undefined
            };
        }
        // No Paymaster functions.
        return {
            getPaymasterStubData: undefined,
            getPaymasterData: undefined
        };
    })();
    const paymasterContext = parameters.paymasterContext ? parameters.paymasterContext : bundlerClient?.paymasterContext;
    ////////////////////////////////////////////////////////////////////////////////
    // Set up the User Operation request.
    ////////////////////////////////////////////////////////////////////////////////
    let request = {
        ...parameters,
        paymaster: paymasterAddress,
        sender: account.address
    };
    ////////////////////////////////////////////////////////////////////////////////
    // Concurrently prepare properties required to fill the User Operation.
    ////////////////////////////////////////////////////////////////////////////////
    const [callData, factory, fees, nonce, authorization] = await Promise.all([
        (async ()=>{
            if (parameters.calls) return account.encodeCalls(parameters.calls.map((call_)=>{
                const call = call_;
                if (call.abi) return {
                    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])(call),
                    to: call.to,
                    value: call.value
                };
                return call;
            }));
            return parameters.callData;
        })(),
        (async ()=>{
            if (!properties.includes('factory')) return undefined;
            if (parameters.initCode) return {
                initCode: parameters.initCode
            };
            if (parameters.factory && parameters.factoryData) {
                return {
                    factory: parameters.factory,
                    factoryData: parameters.factoryData
                };
            }
            const { factory, factoryData } = await account.getFactoryArgs();
            if (account.entryPoint.version === '0.6') return {
                initCode: factory && factoryData ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])([
                    factory,
                    factoryData
                ]) : undefined
            };
            return {
                factory,
                factoryData
            };
        })(),
        (async ()=>{
            if (!properties.includes('fees')) return undefined;
            // If we have sufficient properties for fees, return them.
            if (typeof parameters.maxFeePerGas === 'bigint' && typeof parameters.maxPriorityFeePerGas === 'bigint') return request;
            // If the Bundler Client has a `estimateFeesPerGas` hook, run it.
            if (bundlerClient?.userOperation?.estimateFeesPerGas) {
                const fees = await bundlerClient.userOperation.estimateFeesPerGas({
                    account,
                    bundlerClient,
                    userOperation: request
                });
                return {
                    ...request,
                    ...fees
                };
            }
            // Otherwise, we will need to estimate the fees to fill the fee properties.
            try {
                const client_ = bundlerClient.client ?? client;
                const fees = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client_, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateFeesPerGas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateFeesPerGas"], 'estimateFeesPerGas')({
                    chain: client_.chain,
                    type: 'eip1559'
                });
                return {
                    maxFeePerGas: typeof parameters.maxFeePerGas === 'bigint' ? parameters.maxFeePerGas : BigInt(// Bundlers unfortunately have strict rules on fee prechecks – we will need to set a generous buffer.
                    2n * fees.maxFeePerGas),
                    maxPriorityFeePerGas: typeof parameters.maxPriorityFeePerGas === 'bigint' ? parameters.maxPriorityFeePerGas : BigInt(// Bundlers unfortunately have strict rules on fee prechecks – we will need to set a generous buffer.
                    2n * fees.maxPriorityFeePerGas)
                };
            } catch  {
                return undefined;
            }
        })(),
        (async ()=>{
            if (!properties.includes('nonce')) return undefined;
            if (typeof parameters.nonce === 'bigint') return parameters.nonce;
            return account.getNonce();
        })(),
        (async ()=>{
            if (!properties.includes('authorization')) return undefined;
            if (typeof parameters.authorization === 'object') return parameters.authorization;
            if (account.authorization && !await account.isDeployed()) {
                const authorization = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareAuthorization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareAuthorization"])(account.client, account.authorization);
                return {
                    ...authorization,
                    r: '0xfffffffffffffffffffffffffffffff000000000000000000000000000000000',
                    s: '0x7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                    yParity: 1
                };
            }
            return undefined;
        })()
    ]);
    ////////////////////////////////////////////////////////////////////////////////
    // Fill User Operation with the prepared properties from above.
    ////////////////////////////////////////////////////////////////////////////////
    if (typeof callData !== 'undefined') request.callData = callData;
    if (typeof factory !== 'undefined') request = {
        ...request,
        ...factory
    };
    if (typeof fees !== 'undefined') request = {
        ...request,
        ...fees
    };
    if (typeof nonce !== 'undefined') request.nonce = nonce;
    if (typeof authorization !== 'undefined') request.authorization = authorization;
    ////////////////////////////////////////////////////////////////////////////////
    // Fill User Operation with the `signature` property.
    ////////////////////////////////////////////////////////////////////////////////
    if (properties.includes('signature')) {
        if (typeof parameters.signature !== 'undefined') request.signature = parameters.signature;
        else request.signature = await account.getStubSignature(request);
    }
    ////////////////////////////////////////////////////////////////////////////////
    // `initCode` is required to be filled with EntryPoint 0.6.
    ////////////////////////////////////////////////////////////////////////////////
    // If no `initCode` is provided, we use an empty bytes string.
    if (account.entryPoint.version === '0.6' && !request.initCode) request.initCode = '0x';
    ////////////////////////////////////////////////////////////////////////////////
    // Fill User Operation with paymaster-related properties for **gas estimation**.
    ////////////////////////////////////////////////////////////////////////////////
    let chainId;
    async function getChainId() {
        if (chainId) return chainId;
        if (client.chain) return client.chain.id;
        const chainId_ = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChainId"], 'getChainId')({});
        chainId = chainId_;
        return chainId;
    }
    // If the User Operation is intended to be sponsored, we will need to fill the paymaster-related
    // User Operation properties required to estimate the User Operation gas.
    let isPaymasterPopulated = false;
    if (properties.includes('paymaster') && getPaymasterStubData && !paymasterAddress && !parameters.paymasterAndData) {
        const { isFinal = false, sponsor: _, ...paymasterArgs } = await getPaymasterStubData({
            chainId: await getChainId(),
            entryPointAddress: account.entryPoint.address,
            context: paymasterContext,
            ...request
        });
        isPaymasterPopulated = isFinal;
        request = {
            ...request,
            ...paymasterArgs
        };
    }
    ////////////////////////////////////////////////////////////////////////////////
    // `paymasterAndData` is required to be filled with EntryPoint 0.6.
    ////////////////////////////////////////////////////////////////////////////////
    // If no `paymasterAndData` is provided, we use an empty bytes string.
    if (account.entryPoint.version === '0.6' && !request.paymasterAndData) request.paymasterAndData = '0x';
    ////////////////////////////////////////////////////////////////////////////////
    // Fill User Operation with gas-related properties.
    ////////////////////////////////////////////////////////////////////////////////
    if (properties.includes('gas')) {
        // If the Account has opinionated gas estimation logic, run the `estimateGas` hook and
        // fill the request with the prepared gas properties.
        if (account.userOperation?.estimateGas) {
            const gas = await account.userOperation.estimateGas(request);
            request = {
                ...request,
                ...gas
            };
        }
        // If not all the gas properties are already populated, we will need to estimate the gas
        // to fill the gas properties.
        if (typeof request.callGasLimit === 'undefined' || typeof request.preVerificationGas === 'undefined' || typeof request.verificationGasLimit === 'undefined' || request.paymaster && typeof request.paymasterPostOpGasLimit === 'undefined' || request.paymaster && typeof request.paymasterVerificationGasLimit === 'undefined') {
            const gas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(bundlerClient, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$estimateUserOperationGas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateUserOperationGas"], 'estimateUserOperationGas')({
                account,
                // Some Bundlers fail if nullish gas values are provided for gas estimation :') –
                // so we will need to set a default zeroish value.
                callGasLimit: 0n,
                preVerificationGas: 0n,
                verificationGasLimit: 0n,
                stateOverride,
                ...request.paymaster ? {
                    paymasterPostOpGasLimit: 0n,
                    paymasterVerificationGasLimit: 0n
                } : {},
                ...request
            });
            request = {
                ...request,
                callGasLimit: request.callGasLimit ?? gas.callGasLimit,
                preVerificationGas: request.preVerificationGas ?? gas.preVerificationGas,
                verificationGasLimit: request.verificationGasLimit ?? gas.verificationGasLimit,
                paymasterPostOpGasLimit: request.paymasterPostOpGasLimit ?? gas.paymasterPostOpGasLimit,
                paymasterVerificationGasLimit: request.paymasterVerificationGasLimit ?? gas.paymasterVerificationGasLimit
            };
        }
    }
    ////////////////////////////////////////////////////////////////////////////////
    // Fill User Operation with paymaster-related properties for **sending** the User Operation.
    ////////////////////////////////////////////////////////////////////////////////
    // If the User Operation is intended to be sponsored, we will need to fill the paymaster-related
    // User Operation properties required to send the User Operation.
    if (properties.includes('paymaster') && getPaymasterData && !paymasterAddress && !parameters.paymasterAndData && !isPaymasterPopulated) {
        // Retrieve paymaster-related User Operation properties to be used for **sending** the User Operation.
        const paymaster = await getPaymasterData({
            chainId: await getChainId(),
            entryPointAddress: account.entryPoint.address,
            context: paymasterContext,
            ...request
        });
        request = {
            ...request,
            ...paymaster
        };
    }
    ////////////////////////////////////////////////////////////////////////////////
    // Remove redundant properties that do not conform to the User Operation schema.
    ////////////////////////////////////////////////////////////////////////////////
    delete request.calls;
    delete request.parameters;
    delete request.paymasterContext;
    if (typeof request.paymaster !== 'string') delete request.paymaster;
    ////////////////////////////////////////////////////////////////////////////////
    return request;
} //# sourceMappingURL=prepareUserOperation.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/actions/bundler/estimateUserOperationGas.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "estimateUserOperationGas",
    ()=>estimateUserOperationGas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/account.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stateOverride$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/stateOverride.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$errors$2f$getUserOperationError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/errors/getUserOperationError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$formatters$2f$userOperationGas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/formatters/userOperationGas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$formatters$2f$userOperationRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/formatters/userOperationRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$prepareUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/actions/bundler/prepareUserOperation.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
async function estimateUserOperationGas(client, parameters) {
    const { account: account_ = client.account, entryPointAddress, stateOverride } = parameters;
    if (!account_ && !parameters.sender) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]();
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : undefined;
    const rpcStateOverride = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stateOverride$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeStateOverride"])(stateOverride);
    const request = account ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$prepareUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareUserOperation"], 'prepareUserOperation')({
        ...parameters,
        parameters: [
            'authorization',
            'factory',
            'nonce',
            'paymaster',
            'signature'
        ]
    }) : parameters;
    try {
        const params = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$formatters$2f$userOperationRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUserOperationRequest"])(request),
            entryPointAddress ?? account?.entryPoint?.address
        ];
        const result = await client.request({
            method: 'eth_estimateUserOperationGas',
            params: rpcStateOverride ? [
                ...params,
                rpcStateOverride
            ] : [
                ...params
            ]
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$formatters$2f$userOperationGas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUserOperationGas"])(result);
    } catch (error) {
        const calls = parameters.calls;
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$errors$2f$getUserOperationError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserOperationError"])(error, {
            ...request,
            ...calls ? {
                calls
            } : {}
        });
    }
} //# sourceMappingURL=estimateUserOperationGas.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/actions/bundler/getSupportedEntryPoints.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns the EntryPoints that the bundler supports.
 *
 * - Docs: https://viem.sh/actions/bundler/getSupportedEntryPoints
 *
 * @param client - Client to use
 * @param parameters - {@link GetSupportedEntryPointsParameters}
 * @returns Supported Entry Points. {@link GetSupportedEntryPointsReturnType}
 *
 * @example
 * import { createBundlerClient, http, parseEther } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getSupportedEntryPoints } from 'viem/actions'
 *
 * const bundlerClient = createBundlerClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 *
 * const addresses = await getSupportedEntryPoints(bundlerClient)
 */ __turbopack_context__.s([
    "getSupportedEntryPoints",
    ()=>getSupportedEntryPoints
]);
function getSupportedEntryPoints(client) {
    return client.request({
        method: 'eth_supportedEntryPoints'
    });
} //# sourceMappingURL=getSupportedEntryPoints.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/formatters/userOperation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatUserOperation",
    ()=>formatUserOperation
]);
function formatUserOperation(parameters) {
    const userOperation = {
        ...parameters
    };
    if (parameters.callGasLimit) userOperation.callGasLimit = BigInt(parameters.callGasLimit);
    if (parameters.maxFeePerGas) userOperation.maxFeePerGas = BigInt(parameters.maxFeePerGas);
    if (parameters.maxPriorityFeePerGas) userOperation.maxPriorityFeePerGas = BigInt(parameters.maxPriorityFeePerGas);
    if (parameters.nonce) userOperation.nonce = BigInt(parameters.nonce);
    if (parameters.paymasterPostOpGasLimit) userOperation.paymasterPostOpGasLimit = BigInt(parameters.paymasterPostOpGasLimit);
    if (parameters.paymasterVerificationGasLimit) userOperation.paymasterVerificationGasLimit = BigInt(parameters.paymasterVerificationGasLimit);
    if (parameters.preVerificationGas) userOperation.preVerificationGas = BigInt(parameters.preVerificationGas);
    if (parameters.verificationGasLimit) userOperation.verificationGasLimit = BigInt(parameters.verificationGasLimit);
    return userOperation;
} //# sourceMappingURL=userOperation.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/actions/bundler/getUserOperation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserOperation",
    ()=>getUserOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$userOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/errors/userOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$formatters$2f$userOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/formatters/userOperation.js [app-ssr] (ecmascript)");
;
;
async function getUserOperation(client, { hash }) {
    const result = await client.request({
        method: 'eth_getUserOperationByHash',
        params: [
            hash
        ]
    }, {
        dedupe: true
    });
    if (!result) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$userOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationNotFoundError"]({
        hash
    });
    const { blockHash, blockNumber, entryPoint, transactionHash, userOperation } = result;
    return {
        blockHash,
        blockNumber: BigInt(blockNumber),
        entryPoint,
        transactionHash,
        userOperation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$formatters$2f$userOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUserOperation"])(userOperation)
    };
} //# sourceMappingURL=getUserOperation.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/formatters/userOperationReceipt.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatUserOperationReceipt",
    ()=>formatUserOperationReceipt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/formatters/log.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/formatters/transactionReceipt.js [app-ssr] (ecmascript)");
;
;
function formatUserOperationReceipt(parameters) {
    const receipt = {
        ...parameters
    };
    if (parameters.actualGasCost) receipt.actualGasCost = BigInt(parameters.actualGasCost);
    if (parameters.actualGasUsed) receipt.actualGasUsed = BigInt(parameters.actualGasUsed);
    if (parameters.logs) receipt.logs = parameters.logs.map((log)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatLog"])(log));
    if (parameters.receipt) receipt.receipt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransactionReceipt"])(receipt.receipt);
    return receipt;
} //# sourceMappingURL=userOperationReceipt.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/actions/bundler/getUserOperationReceipt.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserOperationReceipt",
    ()=>getUserOperationReceipt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$userOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/errors/userOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$formatters$2f$userOperationReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/formatters/userOperationReceipt.js [app-ssr] (ecmascript)");
;
;
async function getUserOperationReceipt(client, { hash }) {
    const receipt = await client.request({
        method: 'eth_getUserOperationReceipt',
        params: [
            hash
        ]
    }, {
        dedupe: true
    });
    if (!receipt) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$userOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserOperationReceiptNotFoundError"]({
        hash
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$formatters$2f$userOperationReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUserOperationReceipt"])(receipt);
} //# sourceMappingURL=getUserOperationReceipt.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/actions/bundler/sendUserOperation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendUserOperation",
    ()=>sendUserOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/errors/account.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$errors$2f$getUserOperationError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/errors/getUserOperationError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$formatters$2f$userOperationRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/formatters/userOperationRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$prepareUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/actions/bundler/prepareUserOperation.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
async function sendUserOperation(client, parameters) {
    const { account: account_ = client.account, entryPointAddress } = parameters;
    if (!account_ && !parameters.sender) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]();
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : undefined;
    const request = account ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$prepareUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareUserOperation"], 'prepareUserOperation')(parameters) : parameters;
    const signature = parameters.signature || await account?.signUserOperation?.(request);
    const rpcParameters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$formatters$2f$userOperationRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUserOperationRequest"])({
        ...request,
        signature
    });
    try {
        return await client.request({
            method: 'eth_sendUserOperation',
            params: [
                rpcParameters,
                entryPointAddress ?? account?.entryPoint?.address
            ]
        }, {
            retryCount: 0
        });
    } catch (error) {
        const calls = parameters.calls;
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$errors$2f$getUserOperationError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserOperationError"])(error, {
            ...request,
            ...calls ? {
                calls
            } : {},
            signature
        });
    }
} //# sourceMappingURL=sendUserOperation.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/actions/bundler/waitForUserOperationReceipt.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "waitForUserOperationReceipt",
    ()=>waitForUserOperationReceipt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/observe.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/poll.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/stringify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$userOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/errors/userOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$getUserOperationReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/actions/bundler/getUserOperationReceipt.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function waitForUserOperationReceipt(client, parameters) {
    const { hash, pollingInterval = client.pollingInterval, retryCount, timeout = 120_000 } = parameters;
    let count = 0;
    const observerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])([
        'waitForUserOperationReceipt',
        client.uid,
        hash
    ]);
    return new Promise((resolve, reject)=>{
        const unobserve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observe"])(observerId, {
            resolve,
            reject
        }, (emit)=>{
            const done = (fn)=>{
                unpoll();
                fn();
                unobserve();
            };
            const timeoutId = timeout ? setTimeout(()=>done(()=>emit.reject(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$userOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WaitForUserOperationReceiptTimeoutError"]({
                        hash
                    }))), timeout) : undefined;
            const unpoll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poll"])(async ()=>{
                if (retryCount && count >= retryCount) {
                    clearTimeout(timeoutId);
                    done(()=>emit.reject(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$errors$2f$userOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WaitForUserOperationReceiptTimeoutError"]({
                            hash
                        })));
                }
                try {
                    const receipt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$getUserOperationReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserOperationReceipt"], 'getUserOperationReceipt')({
                        hash
                    });
                    done(()=>emit.resolve(receipt));
                } catch (err) {
                    const error = err;
                    if (error.name !== 'UserOperationReceiptNotFoundError') done(()=>emit.reject(error));
                } finally{
                    clearTimeout(timeoutId);
                }
                count++;
            }, {
                emitOnBegin: true,
                interval: pollingInterval
            });
            return unpoll;
        });
    });
} //# sourceMappingURL=waitForUserOperationReceipt.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/clients/decorators/bundler.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bundlerActions",
    ()=>bundlerActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/public/getChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$estimateUserOperationGas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/actions/bundler/estimateUserOperationGas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$getSupportedEntryPoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/actions/bundler/getSupportedEntryPoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$getUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/actions/bundler/getUserOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$getUserOperationReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/actions/bundler/getUserOperationReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$prepareUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/actions/bundler/prepareUserOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$sendUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/actions/bundler/sendUserOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$waitForUserOperationReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/actions/bundler/waitForUserOperationReceipt.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function bundlerActions(client) {
    return {
        estimateUserOperationGas: (parameters)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$estimateUserOperationGas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateUserOperationGas"])(client, parameters),
        getChainId: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChainId"])(client),
        getSupportedEntryPoints: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$getSupportedEntryPoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupportedEntryPoints"])(client),
        getUserOperation: (parameters)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$getUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserOperation"])(client, parameters),
        getUserOperationReceipt: (parameters)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$getUserOperationReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserOperationReceipt"])(client, parameters),
        prepareUserOperation: (parameters)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$prepareUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareUserOperation"])(client, parameters),
        sendUserOperation: (parameters)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$sendUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendUserOperation"])(client, parameters),
        waitForUserOperationReceipt: (parameters)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$waitForUserOperationReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitForUserOperationReceipt"])(client, parameters)
    };
} //# sourceMappingURL=bundler.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/clients/createBundlerClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBundlerClient",
    ()=>createBundlerClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/clients/createClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$clients$2f$decorators$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/clients/decorators/bundler.js [app-ssr] (ecmascript)");
;
;
function createBundlerClient(parameters) {
    const { client: client_, key = 'bundler', name = 'Bundler Client', paymaster, paymasterContext, transport, userOperation } = parameters;
    const client = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])({
        ...parameters,
        chain: parameters.chain ?? client_?.chain,
        key,
        name,
        transport,
        type: 'bundlerClient'
    }), {
        client: client_,
        paymaster,
        paymasterContext,
        userOperation
    });
    return client.extend(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$clients$2f$decorators$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bundlerActions"]);
} //# sourceMappingURL=createBundlerClient.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/constants/abis.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "entryPoint06Abi",
    ()=>entryPoint06Abi,
    "entryPoint07Abi",
    ()=>entryPoint07Abi,
    "entryPoint08Abi",
    ()=>entryPoint08Abi
]);
const entryPoint06Abi = [
    {
        inputs: [
            {
                name: 'preOpGas',
                type: 'uint256'
            },
            {
                name: 'paid',
                type: 'uint256'
            },
            {
                name: 'validAfter',
                type: 'uint48'
            },
            {
                name: 'validUntil',
                type: 'uint48'
            },
            {
                name: 'targetSuccess',
                type: 'bool'
            },
            {
                name: 'targetResult',
                type: 'bytes'
            }
        ],
        name: 'ExecutionResult',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'opIndex',
                type: 'uint256'
            },
            {
                name: 'reason',
                type: 'string'
            }
        ],
        name: 'FailedOp',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'sender',
                type: 'address'
            }
        ],
        name: 'SenderAddressResult',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'aggregator',
                type: 'address'
            }
        ],
        name: 'SignatureValidationFailed',
        type: 'error'
    },
    {
        inputs: [
            {
                components: [
                    {
                        name: 'preOpGas',
                        type: 'uint256'
                    },
                    {
                        name: 'prefund',
                        type: 'uint256'
                    },
                    {
                        name: 'sigFailed',
                        type: 'bool'
                    },
                    {
                        name: 'validAfter',
                        type: 'uint48'
                    },
                    {
                        name: 'validUntil',
                        type: 'uint48'
                    },
                    {
                        name: 'paymasterContext',
                        type: 'bytes'
                    }
                ],
                name: 'returnInfo',
                type: 'tuple'
            },
            {
                components: [
                    {
                        name: 'stake',
                        type: 'uint256'
                    },
                    {
                        name: 'unstakeDelaySec',
                        type: 'uint256'
                    }
                ],
                name: 'senderInfo',
                type: 'tuple'
            },
            {
                components: [
                    {
                        name: 'stake',
                        type: 'uint256'
                    },
                    {
                        name: 'unstakeDelaySec',
                        type: 'uint256'
                    }
                ],
                name: 'factoryInfo',
                type: 'tuple'
            },
            {
                components: [
                    {
                        name: 'stake',
                        type: 'uint256'
                    },
                    {
                        name: 'unstakeDelaySec',
                        type: 'uint256'
                    }
                ],
                name: 'paymasterInfo',
                type: 'tuple'
            }
        ],
        name: 'ValidationResult',
        type: 'error'
    },
    {
        inputs: [
            {
                components: [
                    {
                        name: 'preOpGas',
                        type: 'uint256'
                    },
                    {
                        name: 'prefund',
                        type: 'uint256'
                    },
                    {
                        name: 'sigFailed',
                        type: 'bool'
                    },
                    {
                        name: 'validAfter',
                        type: 'uint48'
                    },
                    {
                        name: 'validUntil',
                        type: 'uint48'
                    },
                    {
                        name: 'paymasterContext',
                        type: 'bytes'
                    }
                ],
                name: 'returnInfo',
                type: 'tuple'
            },
            {
                components: [
                    {
                        name: 'stake',
                        type: 'uint256'
                    },
                    {
                        name: 'unstakeDelaySec',
                        type: 'uint256'
                    }
                ],
                name: 'senderInfo',
                type: 'tuple'
            },
            {
                components: [
                    {
                        name: 'stake',
                        type: 'uint256'
                    },
                    {
                        name: 'unstakeDelaySec',
                        type: 'uint256'
                    }
                ],
                name: 'factoryInfo',
                type: 'tuple'
            },
            {
                components: [
                    {
                        name: 'stake',
                        type: 'uint256'
                    },
                    {
                        name: 'unstakeDelaySec',
                        type: 'uint256'
                    }
                ],
                name: 'paymasterInfo',
                type: 'tuple'
            },
            {
                components: [
                    {
                        name: 'aggregator',
                        type: 'address'
                    },
                    {
                        components: [
                            {
                                name: 'stake',
                                type: 'uint256'
                            },
                            {
                                name: 'unstakeDelaySec',
                                type: 'uint256'
                            }
                        ],
                        name: 'stakeInfo',
                        type: 'tuple'
                    }
                ],
                name: 'aggregatorInfo',
                type: 'tuple'
            }
        ],
        name: 'ValidationResultWithAggregation',
        type: 'error'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address'
            },
            {
                indexed: false,
                name: 'factory',
                type: 'address'
            },
            {
                indexed: false,
                name: 'paymaster',
                type: 'address'
            }
        ],
        name: 'AccountDeployed',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [],
        name: 'BeforeExecution',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address'
            },
            {
                indexed: false,
                name: 'totalDeposit',
                type: 'uint256'
            }
        ],
        name: 'Deposited',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'aggregator',
                type: 'address'
            }
        ],
        name: 'SignatureAggregatorChanged',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address'
            },
            {
                indexed: false,
                name: 'totalStaked',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'unstakeDelaySec',
                type: 'uint256'
            }
        ],
        name: 'StakeLocked',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address'
            },
            {
                indexed: false,
                name: 'withdrawTime',
                type: 'uint256'
            }
        ],
        name: 'StakeUnlocked',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address'
            },
            {
                indexed: false,
                name: 'withdrawAddress',
                type: 'address'
            },
            {
                indexed: false,
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'StakeWithdrawn',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address'
            },
            {
                indexed: true,
                name: 'paymaster',
                type: 'address'
            },
            {
                indexed: false,
                name: 'nonce',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'success',
                type: 'bool'
            },
            {
                indexed: false,
                name: 'actualGasCost',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'actualGasUsed',
                type: 'uint256'
            }
        ],
        name: 'UserOperationEvent',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address'
            },
            {
                indexed: false,
                name: 'nonce',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'revertReason',
                type: 'bytes'
            }
        ],
        name: 'UserOperationRevertReason',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address'
            },
            {
                indexed: false,
                name: 'withdrawAddress',
                type: 'address'
            },
            {
                indexed: false,
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'Withdrawn',
        type: 'event'
    },
    {
        inputs: [],
        name: 'SIG_VALIDATION_FAILED',
        outputs: [
            {
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
                name: 'initCode',
                type: 'bytes'
            },
            {
                name: 'sender',
                type: 'address'
            },
            {
                name: 'paymasterAndData',
                type: 'bytes'
            }
        ],
        name: '_validateSenderAndPaymaster',
        outputs: [],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'unstakeDelaySec',
                type: 'uint32'
            }
        ],
        name: 'addStake',
        outputs: [],
        stateMutability: 'payable',
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
                name: 'account',
                type: 'address'
            }
        ],
        name: 'depositTo',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: '',
                type: 'address'
            }
        ],
        name: 'deposits',
        outputs: [
            {
                name: 'deposit',
                type: 'uint112'
            },
            {
                name: 'staked',
                type: 'bool'
            },
            {
                name: 'stake',
                type: 'uint112'
            },
            {
                name: 'unstakeDelaySec',
                type: 'uint32'
            },
            {
                name: 'withdrawTime',
                type: 'uint48'
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
        name: 'getDepositInfo',
        outputs: [
            {
                components: [
                    {
                        name: 'deposit',
                        type: 'uint112'
                    },
                    {
                        name: 'staked',
                        type: 'bool'
                    },
                    {
                        name: 'stake',
                        type: 'uint112'
                    },
                    {
                        name: 'unstakeDelaySec',
                        type: 'uint32'
                    },
                    {
                        name: 'withdrawTime',
                        type: 'uint48'
                    }
                ],
                name: 'info',
                type: 'tuple'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'sender',
                type: 'address'
            },
            {
                name: 'key',
                type: 'uint192'
            }
        ],
        name: 'getNonce',
        outputs: [
            {
                name: 'nonce',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'initCode',
                type: 'bytes'
            }
        ],
        name: 'getSenderAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        name: 'nonce',
                        type: 'uint256'
                    },
                    {
                        name: 'initCode',
                        type: 'bytes'
                    },
                    {
                        name: 'callData',
                        type: 'bytes'
                    },
                    {
                        name: 'callGasLimit',
                        type: 'uint256'
                    },
                    {
                        name: 'verificationGasLimit',
                        type: 'uint256'
                    },
                    {
                        name: 'preVerificationGas',
                        type: 'uint256'
                    },
                    {
                        name: 'maxFeePerGas',
                        type: 'uint256'
                    },
                    {
                        name: 'maxPriorityFeePerGas',
                        type: 'uint256'
                    },
                    {
                        name: 'paymasterAndData',
                        type: 'bytes'
                    },
                    {
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                name: 'userOp',
                type: 'tuple'
            }
        ],
        name: 'getUserOpHash',
        outputs: [
            {
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                name: 'sender',
                                type: 'address'
                            },
                            {
                                name: 'nonce',
                                type: 'uint256'
                            },
                            {
                                name: 'initCode',
                                type: 'bytes'
                            },
                            {
                                name: 'callData',
                                type: 'bytes'
                            },
                            {
                                name: 'callGasLimit',
                                type: 'uint256'
                            },
                            {
                                name: 'verificationGasLimit',
                                type: 'uint256'
                            },
                            {
                                name: 'preVerificationGas',
                                type: 'uint256'
                            },
                            {
                                name: 'maxFeePerGas',
                                type: 'uint256'
                            },
                            {
                                name: 'maxPriorityFeePerGas',
                                type: 'uint256'
                            },
                            {
                                name: 'paymasterAndData',
                                type: 'bytes'
                            },
                            {
                                name: 'signature',
                                type: 'bytes'
                            }
                        ],
                        name: 'userOps',
                        type: 'tuple[]'
                    },
                    {
                        name: 'aggregator',
                        type: 'address'
                    },
                    {
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                name: 'opsPerAggregator',
                type: 'tuple[]'
            },
            {
                name: 'beneficiary',
                type: 'address'
            }
        ],
        name: 'handleAggregatedOps',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        name: 'nonce',
                        type: 'uint256'
                    },
                    {
                        name: 'initCode',
                        type: 'bytes'
                    },
                    {
                        name: 'callData',
                        type: 'bytes'
                    },
                    {
                        name: 'callGasLimit',
                        type: 'uint256'
                    },
                    {
                        name: 'verificationGasLimit',
                        type: 'uint256'
                    },
                    {
                        name: 'preVerificationGas',
                        type: 'uint256'
                    },
                    {
                        name: 'maxFeePerGas',
                        type: 'uint256'
                    },
                    {
                        name: 'maxPriorityFeePerGas',
                        type: 'uint256'
                    },
                    {
                        name: 'paymasterAndData',
                        type: 'bytes'
                    },
                    {
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                name: 'ops',
                type: 'tuple[]'
            },
            {
                name: 'beneficiary',
                type: 'address'
            }
        ],
        name: 'handleOps',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'key',
                type: 'uint192'
            }
        ],
        name: 'incrementNonce',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'callData',
                type: 'bytes'
            },
            {
                components: [
                    {
                        components: [
                            {
                                name: 'sender',
                                type: 'address'
                            },
                            {
                                name: 'nonce',
                                type: 'uint256'
                            },
                            {
                                name: 'callGasLimit',
                                type: 'uint256'
                            },
                            {
                                name: 'verificationGasLimit',
                                type: 'uint256'
                            },
                            {
                                name: 'preVerificationGas',
                                type: 'uint256'
                            },
                            {
                                name: 'paymaster',
                                type: 'address'
                            },
                            {
                                name: 'maxFeePerGas',
                                type: 'uint256'
                            },
                            {
                                name: 'maxPriorityFeePerGas',
                                type: 'uint256'
                            }
                        ],
                        name: 'mUserOp',
                        type: 'tuple'
                    },
                    {
                        name: 'userOpHash',
                        type: 'bytes32'
                    },
                    {
                        name: 'prefund',
                        type: 'uint256'
                    },
                    {
                        name: 'contextOffset',
                        type: 'uint256'
                    },
                    {
                        name: 'preOpGas',
                        type: 'uint256'
                    }
                ],
                name: 'opInfo',
                type: 'tuple'
            },
            {
                name: 'context',
                type: 'bytes'
            }
        ],
        name: 'innerHandleOp',
        outputs: [
            {
                name: 'actualGasCost',
                type: 'uint256'
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
            },
            {
                name: '',
                type: 'uint192'
            }
        ],
        name: 'nonceSequenceNumber',
        outputs: [
            {
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
                components: [
                    {
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        name: 'nonce',
                        type: 'uint256'
                    },
                    {
                        name: 'initCode',
                        type: 'bytes'
                    },
                    {
                        name: 'callData',
                        type: 'bytes'
                    },
                    {
                        name: 'callGasLimit',
                        type: 'uint256'
                    },
                    {
                        name: 'verificationGasLimit',
                        type: 'uint256'
                    },
                    {
                        name: 'preVerificationGas',
                        type: 'uint256'
                    },
                    {
                        name: 'maxFeePerGas',
                        type: 'uint256'
                    },
                    {
                        name: 'maxPriorityFeePerGas',
                        type: 'uint256'
                    },
                    {
                        name: 'paymasterAndData',
                        type: 'bytes'
                    },
                    {
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                name: 'op',
                type: 'tuple'
            },
            {
                name: 'target',
                type: 'address'
            },
            {
                name: 'targetCallData',
                type: 'bytes'
            }
        ],
        name: 'simulateHandleOp',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        name: 'nonce',
                        type: 'uint256'
                    },
                    {
                        name: 'initCode',
                        type: 'bytes'
                    },
                    {
                        name: 'callData',
                        type: 'bytes'
                    },
                    {
                        name: 'callGasLimit',
                        type: 'uint256'
                    },
                    {
                        name: 'verificationGasLimit',
                        type: 'uint256'
                    },
                    {
                        name: 'preVerificationGas',
                        type: 'uint256'
                    },
                    {
                        name: 'maxFeePerGas',
                        type: 'uint256'
                    },
                    {
                        name: 'maxPriorityFeePerGas',
                        type: 'uint256'
                    },
                    {
                        name: 'paymasterAndData',
                        type: 'bytes'
                    },
                    {
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                name: 'userOp',
                type: 'tuple'
            }
        ],
        name: 'simulateValidation',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'unlockStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'withdrawAddress',
                type: 'address'
            }
        ],
        name: 'withdrawStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'withdrawAddress',
                type: 'address'
            },
            {
                name: 'withdrawAmount',
                type: 'uint256'
            }
        ],
        name: 'withdrawTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        stateMutability: 'payable',
        type: 'receive'
    }
];
const entryPoint07Abi = [
    {
        inputs: [
            {
                name: 'success',
                type: 'bool'
            },
            {
                name: 'ret',
                type: 'bytes'
            }
        ],
        name: 'DelegateAndRevert',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'opIndex',
                type: 'uint256'
            },
            {
                name: 'reason',
                type: 'string'
            }
        ],
        name: 'FailedOp',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'opIndex',
                type: 'uint256'
            },
            {
                name: 'reason',
                type: 'string'
            },
            {
                name: 'inner',
                type: 'bytes'
            }
        ],
        name: 'FailedOpWithRevert',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'returnData',
                type: 'bytes'
            }
        ],
        name: 'PostOpReverted',
        type: 'error'
    },
    {
        inputs: [],
        name: 'ReentrancyGuardReentrantCall',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'sender',
                type: 'address'
            }
        ],
        name: 'SenderAddressResult',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'aggregator',
                type: 'address'
            }
        ],
        name: 'SignatureValidationFailed',
        type: 'error'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address'
            },
            {
                indexed: false,
                name: 'factory',
                type: 'address'
            },
            {
                indexed: false,
                name: 'paymaster',
                type: 'address'
            }
        ],
        name: 'AccountDeployed',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [],
        name: 'BeforeExecution',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address'
            },
            {
                indexed: false,
                name: 'totalDeposit',
                type: 'uint256'
            }
        ],
        name: 'Deposited',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address'
            },
            {
                indexed: false,
                name: 'nonce',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'revertReason',
                type: 'bytes'
            }
        ],
        name: 'PostOpRevertReason',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'aggregator',
                type: 'address'
            }
        ],
        name: 'SignatureAggregatorChanged',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address'
            },
            {
                indexed: false,
                name: 'totalStaked',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'unstakeDelaySec',
                type: 'uint256'
            }
        ],
        name: 'StakeLocked',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address'
            },
            {
                indexed: false,
                name: 'withdrawTime',
                type: 'uint256'
            }
        ],
        name: 'StakeUnlocked',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address'
            },
            {
                indexed: false,
                name: 'withdrawAddress',
                type: 'address'
            },
            {
                indexed: false,
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'StakeWithdrawn',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address'
            },
            {
                indexed: true,
                name: 'paymaster',
                type: 'address'
            },
            {
                indexed: false,
                name: 'nonce',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'success',
                type: 'bool'
            },
            {
                indexed: false,
                name: 'actualGasCost',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'actualGasUsed',
                type: 'uint256'
            }
        ],
        name: 'UserOperationEvent',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address'
            },
            {
                indexed: false,
                name: 'nonce',
                type: 'uint256'
            }
        ],
        name: 'UserOperationPrefundTooLow',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address'
            },
            {
                indexed: false,
                name: 'nonce',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'revertReason',
                type: 'bytes'
            }
        ],
        name: 'UserOperationRevertReason',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address'
            },
            {
                indexed: false,
                name: 'withdrawAddress',
                type: 'address'
            },
            {
                indexed: false,
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'Withdrawn',
        type: 'event'
    },
    {
        inputs: [
            {
                name: 'unstakeDelaySec',
                type: 'uint32'
            }
        ],
        name: 'addStake',
        outputs: [],
        stateMutability: 'payable',
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
                name: 'target',
                type: 'address'
            },
            {
                name: 'data',
                type: 'bytes'
            }
        ],
        name: 'delegateAndRevert',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'account',
                type: 'address'
            }
        ],
        name: 'depositTo',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: '',
                type: 'address'
            }
        ],
        name: 'deposits',
        outputs: [
            {
                name: 'deposit',
                type: 'uint256'
            },
            {
                name: 'staked',
                type: 'bool'
            },
            {
                name: 'stake',
                type: 'uint112'
            },
            {
                name: 'unstakeDelaySec',
                type: 'uint32'
            },
            {
                name: 'withdrawTime',
                type: 'uint48'
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
        name: 'getDepositInfo',
        outputs: [
            {
                components: [
                    {
                        name: 'deposit',
                        type: 'uint256'
                    },
                    {
                        name: 'staked',
                        type: 'bool'
                    },
                    {
                        name: 'stake',
                        type: 'uint112'
                    },
                    {
                        name: 'unstakeDelaySec',
                        type: 'uint32'
                    },
                    {
                        name: 'withdrawTime',
                        type: 'uint48'
                    }
                ],
                name: 'info',
                type: 'tuple'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'sender',
                type: 'address'
            },
            {
                name: 'key',
                type: 'uint192'
            }
        ],
        name: 'getNonce',
        outputs: [
            {
                name: 'nonce',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'initCode',
                type: 'bytes'
            }
        ],
        name: 'getSenderAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        name: 'nonce',
                        type: 'uint256'
                    },
                    {
                        name: 'initCode',
                        type: 'bytes'
                    },
                    {
                        name: 'callData',
                        type: 'bytes'
                    },
                    {
                        name: 'accountGasLimits',
                        type: 'bytes32'
                    },
                    {
                        name: 'preVerificationGas',
                        type: 'uint256'
                    },
                    {
                        name: 'gasFees',
                        type: 'bytes32'
                    },
                    {
                        name: 'paymasterAndData',
                        type: 'bytes'
                    },
                    {
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                name: 'userOp',
                type: 'tuple'
            }
        ],
        name: 'getUserOpHash',
        outputs: [
            {
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                name: 'sender',
                                type: 'address'
                            },
                            {
                                name: 'nonce',
                                type: 'uint256'
                            },
                            {
                                name: 'initCode',
                                type: 'bytes'
                            },
                            {
                                name: 'callData',
                                type: 'bytes'
                            },
                            {
                                name: 'accountGasLimits',
                                type: 'bytes32'
                            },
                            {
                                name: 'preVerificationGas',
                                type: 'uint256'
                            },
                            {
                                name: 'gasFees',
                                type: 'bytes32'
                            },
                            {
                                name: 'paymasterAndData',
                                type: 'bytes'
                            },
                            {
                                name: 'signature',
                                type: 'bytes'
                            }
                        ],
                        name: 'userOps',
                        type: 'tuple[]'
                    },
                    {
                        name: 'aggregator',
                        type: 'address'
                    },
                    {
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                name: 'opsPerAggregator',
                type: 'tuple[]'
            },
            {
                name: 'beneficiary',
                type: 'address'
            }
        ],
        name: 'handleAggregatedOps',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        name: 'nonce',
                        type: 'uint256'
                    },
                    {
                        name: 'initCode',
                        type: 'bytes'
                    },
                    {
                        name: 'callData',
                        type: 'bytes'
                    },
                    {
                        name: 'accountGasLimits',
                        type: 'bytes32'
                    },
                    {
                        name: 'preVerificationGas',
                        type: 'uint256'
                    },
                    {
                        name: 'gasFees',
                        type: 'bytes32'
                    },
                    {
                        name: 'paymasterAndData',
                        type: 'bytes'
                    },
                    {
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                name: 'ops',
                type: 'tuple[]'
            },
            {
                name: 'beneficiary',
                type: 'address'
            }
        ],
        name: 'handleOps',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'key',
                type: 'uint192'
            }
        ],
        name: 'incrementNonce',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'callData',
                type: 'bytes'
            },
            {
                components: [
                    {
                        components: [
                            {
                                name: 'sender',
                                type: 'address'
                            },
                            {
                                name: 'nonce',
                                type: 'uint256'
                            },
                            {
                                name: 'verificationGasLimit',
                                type: 'uint256'
                            },
                            {
                                name: 'callGasLimit',
                                type: 'uint256'
                            },
                            {
                                name: 'paymasterVerificationGasLimit',
                                type: 'uint256'
                            },
                            {
                                name: 'paymasterPostOpGasLimit',
                                type: 'uint256'
                            },
                            {
                                name: 'preVerificationGas',
                                type: 'uint256'
                            },
                            {
                                name: 'paymaster',
                                type: 'address'
                            },
                            {
                                name: 'maxFeePerGas',
                                type: 'uint256'
                            },
                            {
                                name: 'maxPriorityFeePerGas',
                                type: 'uint256'
                            }
                        ],
                        name: 'mUserOp',
                        type: 'tuple'
                    },
                    {
                        name: 'userOpHash',
                        type: 'bytes32'
                    },
                    {
                        name: 'prefund',
                        type: 'uint256'
                    },
                    {
                        name: 'contextOffset',
                        type: 'uint256'
                    },
                    {
                        name: 'preOpGas',
                        type: 'uint256'
                    }
                ],
                name: 'opInfo',
                type: 'tuple'
            },
            {
                name: 'context',
                type: 'bytes'
            }
        ],
        name: 'innerHandleOp',
        outputs: [
            {
                name: 'actualGasCost',
                type: 'uint256'
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
            },
            {
                name: '',
                type: 'uint192'
            }
        ],
        name: 'nonceSequenceNumber',
        outputs: [
            {
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
                name: 'interfaceId',
                type: 'bytes4'
            }
        ],
        name: 'supportsInterface',
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
        name: 'unlockStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'withdrawAddress',
                type: 'address'
            }
        ],
        name: 'withdrawStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'withdrawAddress',
                type: 'address'
            },
            {
                name: 'withdrawAmount',
                type: 'uint256'
            }
        ],
        name: 'withdrawTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        stateMutability: 'payable',
        type: 'receive'
    }
];
const entryPoint08Abi = [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        inputs: [
            {
                internalType: 'bool',
                name: 'success',
                type: 'bool'
            },
            {
                internalType: 'bytes',
                name: 'ret',
                type: 'bytes'
            }
        ],
        name: 'DelegateAndRevert',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'opIndex',
                type: 'uint256'
            },
            {
                internalType: 'string',
                name: 'reason',
                type: 'string'
            }
        ],
        name: 'FailedOp',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'opIndex',
                type: 'uint256'
            },
            {
                internalType: 'string',
                name: 'reason',
                type: 'string'
            },
            {
                internalType: 'bytes',
                name: 'inner',
                type: 'bytes'
            }
        ],
        name: 'FailedOpWithRevert',
        type: 'error'
    },
    {
        inputs: [],
        name: 'InvalidShortString',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'returnData',
                type: 'bytes'
            }
        ],
        name: 'PostOpReverted',
        type: 'error'
    },
    {
        inputs: [],
        name: 'ReentrancyGuardReentrantCall',
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
        name: 'SenderAddressResult',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'aggregator',
                type: 'address'
            }
        ],
        name: 'SignatureValidationFailed',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'str',
                type: 'string'
            }
        ],
        name: 'StringTooLong',
        type: 'error'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'factory',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'paymaster',
                type: 'address'
            }
        ],
        name: 'AccountDeployed',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [],
        name: 'BeforeExecution',
        type: 'event'
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
                indexed: false,
                internalType: 'uint256',
                name: 'totalDeposit',
                type: 'uint256'
            }
        ],
        name: 'Deposited',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [],
        name: 'EIP712DomainChanged',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'revertReason',
                type: 'bytes'
            }
        ],
        name: 'PostOpRevertReason',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'aggregator',
                type: 'address'
            }
        ],
        name: 'SignatureAggregatorChanged',
        type: 'event'
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
                indexed: false,
                internalType: 'uint256',
                name: 'totalStaked',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'unstakeDelaySec',
                type: 'uint256'
            }
        ],
        name: 'StakeLocked',
        type: 'event'
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
                indexed: false,
                internalType: 'uint256',
                name: 'withdrawTime',
                type: 'uint256'
            }
        ],
        name: 'StakeUnlocked',
        type: 'event'
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
                indexed: false,
                internalType: 'address',
                name: 'withdrawAddress',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'StakeWithdrawn',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'paymaster',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'success',
                type: 'bool'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'actualGasCost',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'actualGasUsed',
                type: 'uint256'
            }
        ],
        name: 'UserOperationEvent',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256'
            }
        ],
        name: 'UserOperationPrefundTooLow',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'revertReason',
                type: 'bytes'
            }
        ],
        name: 'UserOperationRevertReason',
        type: 'event'
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
                indexed: false,
                internalType: 'address',
                name: 'withdrawAddress',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'Withdrawn',
        type: 'event'
    },
    {
        inputs: [
            {
                internalType: 'uint32',
                name: 'unstakeDelaySec',
                type: 'uint32'
            }
        ],
        name: 'addStake',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address'
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
                internalType: 'address',
                name: 'target',
                type: 'address'
            },
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes'
            }
        ],
        name: 'delegateAndRevert',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address'
            }
        ],
        name: 'depositTo',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'eip712Domain',
        outputs: [
            {
                internalType: 'bytes1',
                name: 'fields',
                type: 'bytes1'
            },
            {
                internalType: 'string',
                name: 'name',
                type: 'string'
            },
            {
                internalType: 'string',
                name: 'version',
                type: 'string'
            },
            {
                internalType: 'uint256',
                name: 'chainId',
                type: 'uint256'
            },
            {
                internalType: 'address',
                name: 'verifyingContract',
                type: 'address'
            },
            {
                internalType: 'bytes32',
                name: 'salt',
                type: 'bytes32'
            },
            {
                internalType: 'uint256[]',
                name: 'extensions',
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
            }
        ],
        name: 'getDepositInfo',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'deposit',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bool',
                        name: 'staked',
                        type: 'bool'
                    },
                    {
                        internalType: 'uint112',
                        name: 'stake',
                        type: 'uint112'
                    },
                    {
                        internalType: 'uint32',
                        name: 'unstakeDelaySec',
                        type: 'uint32'
                    },
                    {
                        internalType: 'uint48',
                        name: 'withdrawTime',
                        type: 'uint48'
                    }
                ],
                internalType: 'struct IStakeManager.DepositInfo',
                name: 'info',
                type: 'tuple'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getDomainSeparatorV4',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'sender',
                type: 'address'
            },
            {
                internalType: 'uint192',
                name: 'key',
                type: 'uint192'
            }
        ],
        name: 'getNonce',
        outputs: [
            {
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getPackedUserOpTypeHash',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'pure',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'initCode',
                type: 'bytes'
            }
        ],
        name: 'getSenderAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'nonce',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes',
                        name: 'initCode',
                        type: 'bytes'
                    },
                    {
                        internalType: 'bytes',
                        name: 'callData',
                        type: 'bytes'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'accountGasLimits',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint256',
                        name: 'preVerificationGas',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'gasFees',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes',
                        name: 'paymasterAndData',
                        type: 'bytes'
                    },
                    {
                        internalType: 'bytes',
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                internalType: 'struct PackedUserOperation',
                name: 'userOp',
                type: 'tuple'
            }
        ],
        name: 'getUserOpHash',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: 'address',
                                name: 'sender',
                                type: 'address'
                            },
                            {
                                internalType: 'uint256',
                                name: 'nonce',
                                type: 'uint256'
                            },
                            {
                                internalType: 'bytes',
                                name: 'initCode',
                                type: 'bytes'
                            },
                            {
                                internalType: 'bytes',
                                name: 'callData',
                                type: 'bytes'
                            },
                            {
                                internalType: 'bytes32',
                                name: 'accountGasLimits',
                                type: 'bytes32'
                            },
                            {
                                internalType: 'uint256',
                                name: 'preVerificationGas',
                                type: 'uint256'
                            },
                            {
                                internalType: 'bytes32',
                                name: 'gasFees',
                                type: 'bytes32'
                            },
                            {
                                internalType: 'bytes',
                                name: 'paymasterAndData',
                                type: 'bytes'
                            },
                            {
                                internalType: 'bytes',
                                name: 'signature',
                                type: 'bytes'
                            }
                        ],
                        internalType: 'struct PackedUserOperation[]',
                        name: 'userOps',
                        type: 'tuple[]'
                    },
                    {
                        internalType: 'contract IAggregator',
                        name: 'aggregator',
                        type: 'address'
                    },
                    {
                        internalType: 'bytes',
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                internalType: 'struct IEntryPoint.UserOpsPerAggregator[]',
                name: 'opsPerAggregator',
                type: 'tuple[]'
            },
            {
                internalType: 'address payable',
                name: 'beneficiary',
                type: 'address'
            }
        ],
        name: 'handleAggregatedOps',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'nonce',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes',
                        name: 'initCode',
                        type: 'bytes'
                    },
                    {
                        internalType: 'bytes',
                        name: 'callData',
                        type: 'bytes'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'accountGasLimits',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint256',
                        name: 'preVerificationGas',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'gasFees',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes',
                        name: 'paymasterAndData',
                        type: 'bytes'
                    },
                    {
                        internalType: 'bytes',
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                internalType: 'struct PackedUserOperation[]',
                name: 'ops',
                type: 'tuple[]'
            },
            {
                internalType: 'address payable',
                name: 'beneficiary',
                type: 'address'
            }
        ],
        name: 'handleOps',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint192',
                name: 'key',
                type: 'uint192'
            }
        ],
        name: 'incrementNonce',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'callData',
                type: 'bytes'
            },
            {
                components: [
                    {
                        components: [
                            {
                                internalType: 'address',
                                name: 'sender',
                                type: 'address'
                            },
                            {
                                internalType: 'uint256',
                                name: 'nonce',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'verificationGasLimit',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'callGasLimit',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'paymasterVerificationGasLimit',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'paymasterPostOpGasLimit',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'preVerificationGas',
                                type: 'uint256'
                            },
                            {
                                internalType: 'address',
                                name: 'paymaster',
                                type: 'address'
                            },
                            {
                                internalType: 'uint256',
                                name: 'maxFeePerGas',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'maxPriorityFeePerGas',
                                type: 'uint256'
                            }
                        ],
                        internalType: 'struct EntryPoint.MemoryUserOp',
                        name: 'mUserOp',
                        type: 'tuple'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'userOpHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint256',
                        name: 'prefund',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'contextOffset',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'preOpGas',
                        type: 'uint256'
                    }
                ],
                internalType: 'struct EntryPoint.UserOpInfo',
                name: 'opInfo',
                type: 'tuple'
            },
            {
                internalType: 'bytes',
                name: 'context',
                type: 'bytes'
            }
        ],
        name: 'innerHandleOp',
        outputs: [
            {
                internalType: 'uint256',
                name: 'actualGasCost',
                type: 'uint256'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                internalType: 'uint192',
                name: '',
                type: 'uint192'
            }
        ],
        name: 'nonceSequenceNumber',
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
        inputs: [],
        name: 'senderCreator',
        outputs: [
            {
                internalType: 'contract ISenderCreator',
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
        inputs: [],
        name: 'unlockStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address payable',
                name: 'withdrawAddress',
                type: 'address'
            }
        ],
        name: 'withdrawStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address payable',
                name: 'withdrawAddress',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: 'withdrawAmount',
                type: 'uint256'
            }
        ],
        name: 'withdrawTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        stateMutability: 'payable',
        type: 'receive'
    }
]; //# sourceMappingURL=abis.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/constants/address.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "entryPoint06Address",
    ()=>entryPoint06Address,
    "entryPoint07Address",
    ()=>entryPoint07Address,
    "entryPoint08Address",
    ()=>entryPoint08Address
]);
const entryPoint06Address = '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789';
const entryPoint07Address = '0x0000000071727De22E5E9d8BAf0edAc6f37da032';
const entryPoint08Address = '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108'; //# sourceMappingURL=address.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/userOperation/getInitCode.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInitCode",
    ()=>getInitCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
;
function getInitCode(userOperation) {
    const { authorization, factory, factoryData } = userOperation;
    if (factory === '0x7702' || factory === '0x7702000000000000000000000000000000000000') {
        if (!authorization) return '0x7702000000000000000000000000000000000000';
        const delegation = authorization.address;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])([
            delegation,
            factoryData ?? '0x'
        ]);
    }
    if (!factory) return '0x';
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])([
        factory,
        factoryData ?? '0x'
    ]);
} //# sourceMappingURL=getInitCode.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/userOperation/toPackedUserOperation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toPackedUserOperation",
    ()=>toPackedUserOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/data/pad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$userOperation$2f$getInitCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/userOperation/getInitCode.js [app-ssr] (ecmascript)");
;
;
;
;
function toPackedUserOperation(userOperation) {
    const { callGasLimit, callData, maxPriorityFeePerGas, maxFeePerGas, paymaster, paymasterData, paymasterPostOpGasLimit, paymasterVerificationGasLimit, sender, signature = '0x', verificationGasLimit } = userOperation;
    const accountGasLimits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(verificationGasLimit || 0n), {
            size: 16
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(callGasLimit || 0n), {
            size: 16
        })
    ]);
    const initCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$userOperation$2f$getInitCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInitCode"])(userOperation);
    const gasFees = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(maxPriorityFeePerGas || 0n), {
            size: 16
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(maxFeePerGas || 0n), {
            size: 16
        })
    ]);
    const nonce = userOperation.nonce ?? 0n;
    const paymasterAndData = paymaster ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])([
        paymaster,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(paymasterVerificationGasLimit || 0n), {
            size: 16
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(paymasterPostOpGasLimit || 0n), {
            size: 16
        }),
        paymasterData || '0x'
    ]) : '0x';
    const preVerificationGas = userOperation.preVerificationGas ?? 0n;
    return {
        accountGasLimits,
        callData,
        initCode,
        gasFees,
        nonce,
        paymasterAndData,
        preVerificationGas,
        sender,
        signature
    };
} //# sourceMappingURL=toPackedUserOperation.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/userOperation/getUserOperationTypedData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserOperationTypedData",
    ()=>getUserOperationTypedData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$userOperation$2f$toPackedUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/userOperation/toPackedUserOperation.js [app-ssr] (ecmascript)");
;
const types = {
    PackedUserOperation: [
        {
            type: 'address',
            name: 'sender'
        },
        {
            type: 'uint256',
            name: 'nonce'
        },
        {
            type: 'bytes',
            name: 'initCode'
        },
        {
            type: 'bytes',
            name: 'callData'
        },
        {
            type: 'bytes32',
            name: 'accountGasLimits'
        },
        {
            type: 'uint256',
            name: 'preVerificationGas'
        },
        {
            type: 'bytes32',
            name: 'gasFees'
        },
        {
            type: 'bytes',
            name: 'paymasterAndData'
        }
    ]
};
function getUserOperationTypedData(parameters) {
    const { chainId, entryPointAddress, userOperation } = parameters;
    const packedUserOp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$userOperation$2f$toPackedUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPackedUserOperation"])(userOperation);
    return {
        types,
        primaryType: 'PackedUserOperation',
        domain: {
            name: 'ERC4337',
            version: '1',
            chainId,
            verifyingContract: entryPointAddress
        },
        message: packedUserOp
    };
} //# sourceMappingURL=getUserOperationTypedData.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/userOperation/getUserOperationHash.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserOperationHash",
    ()=>getUserOperationHash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/hash/keccak256.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/signature/hashTypedData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$userOperation$2f$getInitCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/userOperation/getInitCode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$userOperation$2f$getUserOperationTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/userOperation/getUserOperationTypedData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$userOperation$2f$toPackedUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/utils/userOperation/toPackedUserOperation.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function getUserOperationHash(parameters) {
    const { chainId, entryPointAddress, entryPointVersion } = parameters;
    const userOperation = parameters.userOperation;
    const { authorization, callData = '0x', callGasLimit, maxFeePerGas, maxPriorityFeePerGas, nonce, paymasterAndData = '0x', preVerificationGas, sender, verificationGasLimit } = userOperation;
    if (entryPointVersion === '0.8') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashTypedData"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$userOperation$2f$getUserOperationTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserOperationTypedData"])({
        chainId,
        entryPointAddress,
        userOperation
    }));
    const packedUserOp = (()=>{
        if (entryPointVersion === '0.6') {
            const factory = userOperation.initCode?.slice(0, 42);
            const factoryData = userOperation.initCode?.slice(42);
            const initCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$userOperation$2f$getInitCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInitCode"])({
                authorization,
                factory,
                factoryData
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeAbiParameters"])([
                {
                    type: 'address'
                },
                {
                    type: 'uint256'
                },
                {
                    type: 'bytes32'
                },
                {
                    type: 'bytes32'
                },
                {
                    type: 'uint256'
                },
                {
                    type: 'uint256'
                },
                {
                    type: 'uint256'
                },
                {
                    type: 'uint256'
                },
                {
                    type: 'uint256'
                },
                {
                    type: 'bytes32'
                }
            ], [
                sender,
                nonce,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(initCode),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(callData),
                callGasLimit,
                verificationGasLimit,
                preVerificationGas,
                maxFeePerGas,
                maxPriorityFeePerGas,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(paymasterAndData)
            ]);
        }
        if (entryPointVersion === '0.7') {
            const packedUserOp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$userOperation$2f$toPackedUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPackedUserOperation"])(userOperation);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeAbiParameters"])([
                {
                    type: 'address'
                },
                {
                    type: 'uint256'
                },
                {
                    type: 'bytes32'
                },
                {
                    type: 'bytes32'
                },
                {
                    type: 'bytes32'
                },
                {
                    type: 'uint256'
                },
                {
                    type: 'bytes32'
                },
                {
                    type: 'bytes32'
                }
            ], [
                packedUserOp.sender,
                packedUserOp.nonce,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(packedUserOp.initCode),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(packedUserOp.callData),
                packedUserOp.accountGasLimits,
                packedUserOp.preVerificationGas,
                packedUserOp.gasFees,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(packedUserOp.paymasterAndData)
            ]);
        }
        throw new Error(`entryPointVersion "${entryPointVersion}" not supported.`);
    })();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeAbiParameters"])([
        {
            type: 'bytes32'
        },
        {
            type: 'address'
        },
        {
            type: 'uint256'
        }
    ], [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(packedUserOp),
        entryPointAddress,
        BigInt(chainId)
    ]));
} //# sourceMappingURL=getUserOperationHash.js.map
}),
"[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/account-abstraction/accounts/toSmartAccount.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toSmartAccount",
    ()=>toSmartAccount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/abitype/dist/esm/human-readable/parseAbi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/public/getCode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/actions/public/readContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$nonceManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/nonceManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$serializeErc6492Signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Folder/BlockBelle/next-frontend/node_modules/viem/_esm/utils/signature/serializeErc6492Signature.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
async function toSmartAccount(implementation) {
    const { extend, nonceKeyManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$nonceManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNonceManager"])({
        source: {
            get () {
                return Date.now();
            },
            set () {}
        }
    }), ...rest } = implementation;
    let deployed = false;
    const address = await implementation.getAddress();
    return {
        ...extend,
        ...rest,
        address,
        async getFactoryArgs () {
            if ('isDeployed' in this && await this.isDeployed()) return {
                factory: undefined,
                factoryData: undefined
            };
            return implementation.getFactoryArgs();
        },
        async getNonce (parameters) {
            const key = parameters?.key ?? BigInt(await nonceKeyManager.consume({
                address,
                chainId: implementation.client.chain.id,
                client: implementation.client
            }));
            if (implementation.getNonce) return await implementation.getNonce({
                ...parameters,
                key
            });
            const nonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readContract"])(implementation.client, {
                abi: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbi"])([
                    'function getNonce(address, uint192) pure returns (uint256)'
                ]),
                address: implementation.entryPoint.address,
                functionName: 'getNonce',
                args: [
                    address,
                    key
                ]
            });
            return nonce;
        },
        async isDeployed () {
            if (deployed) return true;
            const code = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(implementation.client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCode"], 'getCode')({
                address
            });
            deployed = Boolean(code);
            return deployed;
        },
        ...implementation.sign ? {
            async sign (parameters) {
                const [{ factory, factoryData }, signature] = await Promise.all([
                    this.getFactoryArgs(),
                    implementation.sign(parameters)
                ]);
                if (factory && factoryData) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$serializeErc6492Signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeErc6492Signature"])({
                    address: factory,
                    data: factoryData,
                    signature
                });
                return signature;
            }
        } : {},
        async signMessage (parameters) {
            const [{ factory, factoryData }, signature] = await Promise.all([
                this.getFactoryArgs(),
                implementation.signMessage(parameters)
            ]);
            if (factory && factoryData && factory !== '0x7702') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$serializeErc6492Signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeErc6492Signature"])({
                address: factory,
                data: factoryData,
                signature
            });
            return signature;
        },
        async signTypedData (parameters) {
            const [{ factory, factoryData }, signature] = await Promise.all([
                this.getFactoryArgs(),
                implementation.signTypedData(parameters)
            ]);
            if (factory && factoryData && factory !== '0x7702') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Folder$2f$BlockBelle$2f$next$2d$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$serializeErc6492Signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeErc6492Signature"])({
                address: factory,
                data: factoryData,
                signature
            });
            return signature;
        },
        type: 'smart'
    };
} //# sourceMappingURL=toSmartAccount.js.map
}),
];

//# sourceMappingURL=ee741_viem__esm_account-abstraction_9f2537d5._.js.map