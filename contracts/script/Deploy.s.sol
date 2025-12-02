// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/ProofOfHuman.sol";
import { SelfUtils } from "self-contracts/contracts/libraries/SelfUtils.sol";

contract DeployScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        
        vm.startBroadcast(deployerPrivateKey);

        // Hub address on Celo Mainnet
        address hubAddress = 0xe57F4773bd9c9d8b6Cd70431117d353298B9f5BF;
        
        // Scope seed
        string memory scopeSeed = "blockbelle-chat";
        
        // Empty verification config (no restrictions)
        SelfUtils.UnformattedVerificationConfigV2 memory config = SelfUtils.UnformattedVerificationConfigV2({
            olderThan: 0,
            forbiddenCountries: new string[](0),
            ofacEnabled: false
        });

        // Deploy the contract
        ProofOfHuman proofOfHuman = new ProofOfHuman(
            hubAddress,
            scopeSeed,
            config
        );

        console.log("ProofOfHuman deployed to:", address(proofOfHuman));

        vm.stopBroadcast();
    }
}
