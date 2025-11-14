// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {WhisprChat} from "../src/WhisprChat.sol";

contract DeployWhisprChat is Script {
    function run() public {
        vm.startBroadcast();

        WhisprChat chat = new WhisprChat(3600); // 1 hour interval

        vm.stopBroadcast();

        console.log("WhisprChat deployed at:", address(chat));
    }
}