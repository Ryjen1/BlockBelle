// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {WhisprRegistry} from "../src/WhisprRegistry.sol";

contract DeployWhisprRegistry is Script {
    function run() public {
        vm.startBroadcast();

        WhisprRegistry registry = new WhisprRegistry();

        vm.stopBroadcast();

        console.log("WhisprRegistry deployed at:", address(registry));
    }
}