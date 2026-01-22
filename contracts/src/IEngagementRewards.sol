// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

interface IEngagementRewards {
    function appClaim(
        address user,
        address inviter,
        uint256 validUntilBlock,
        bytes memory signature
    ) external returns (bool);

    function appClaim(
        address user,
        address inviter,
        uint256 validUntilBlock,
        bytes memory signature,
        uint8 userAndInviterPercentage,
        uint8 userPercentage
    ) external returns (bool);

    // For non-contract apps that need to provide their signature
    function nonContractAppClaim(
        address app,
        address inviter,
        uint256 validUntilBlock,
        bytes memory userSignature,
        bytes memory appSignature
    ) external returns (bool);
}
