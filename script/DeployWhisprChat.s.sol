// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {WhisprChat} from "../src/WhisprChat.sol";

contract DeployWhisprChat is Script {
    function run() public {
        vm.startBroadcast();

        // Celo Mainnet Engagement Rewards address
        address engagementRewards = 0x25db74CF4E7BA120526fd87e159CF656d94bAE43;

        WhisprChat chat = new WhisprChat(3600, engagementRewards); // 1 hour interval

        vm.stopBroadcast();

        console.log("WhisprChat deployed at:", address(chat));
    }
}