// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { SelfVerificationRoot } from "self-contracts/contracts/abstract/SelfVerificationRoot.sol";
import { ISelfVerificationRoot } from "self-contracts/contracts/interfaces/ISelfVerificationRoot.sol";
import { SelfStructs } from "self-contracts/contracts/libraries/SelfStructs.sol";
import { SelfUtils } from "self-contracts/contracts/libraries/SelfUtils.sol";
import { IIdentityVerificationHubV2 } from "self-contracts/contracts/interfaces/IIdentityVerificationHubV2.sol";

contract ProofOfHuman is SelfVerificationRoot {
    // Verification result storage
    ISelfVerificationRoot.GenericDiscloseOutputV2 public lastOutput;
    bool public verificationSuccessful;
    bytes public lastUserData;
    address public lastUserAddress;

    // Verification config storage
    SelfStructs.VerificationConfigV2 public verificationConfig;
    bytes32 public verificationConfigId;

    event VerificationCompleted(
        ISelfVerificationRoot.GenericDiscloseOutputV2 output,
        bytes userData
    );

    constructor(
        address identityVerificationHubV2Address,
        string memory scopeSeed,
        SelfUtils.UnformattedVerificationConfigV2 memory _verificationConfig
    ) SelfVerificationRoot(identityVerificationHubV2Address, scopeSeed) {
        // Format and set verification config
        verificationConfig = SelfUtils.formatVerificationConfigV2(_verificationConfig);
        verificationConfigId = IIdentityVerificationHubV2(identityVerificationHubV2Address)
            .setVerificationConfigV2(verificationConfig);
    }

    function customVerificationHook(
        ISelfVerificationRoot.GenericDiscloseOutputV2 memory output,
        bytes memory userData
    ) internal override {
        // Store verification results
        verificationSuccessful = true;
        lastOutput = output;
        lastUserData = userData;
        lastUserAddress = address(uint160(output.userIdentifier));
        
        emit VerificationCompleted(output, userData);
    }

    function getConfigId(
        bytes32, /* destinationChainId */
        bytes32, /* userIdentifier */
        bytes memory /* userDefinedData */
    ) public view override returns (bytes32) {
        return verificationConfigId;
    }
}
