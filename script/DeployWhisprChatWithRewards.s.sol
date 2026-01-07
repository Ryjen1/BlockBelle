// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/WhisprChatWithRewards.sol";

contract DeployWhisprChatWithRewards is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        
        // GoodDollar Engagement Rewards addresses on Celo Mainnet
        address DEV_REWARDS = 0xb44fC3A592aDaA257AECe1Ae8956019EA53d0465;  // Dev - anyone can approve
        address PROD_REWARDS = 0x25db74CF4E7BA120526fd87e159CF656d94bAE43; // Prod - requires approval
        
        // Use DEV for testing, PROD for production
        address rewardsContract = DEV_REWARDS;
        
        vm.startBroadcast(deployerPrivateKey);
        
        WhisprChatWithRewards chat = new WhisprChatWithRewards(rewardsContract);
        
        console.log("WhisprChatWithRewards deployed at:", address(chat));
        console.log("Using Engagement Rewards contract:", rewardsContract);
        
        vm.stopBroadcast();
    }
}