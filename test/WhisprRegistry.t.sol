// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {WhisprRegistry} from "../src/WhisprRegistry.sol";

contract WhisprRegistryTest is Test {
    WhisprRegistry public registry;

    function setUp() public {
        registry = new WhisprRegistry();
    }

    function testRegisterUser() public {
        string memory ensName = "test.eth";
        string memory avatarHash = "hash";
        string memory publicKey = "pubkey";
        string memory displayName = "Test User";
        string memory bio = "Bio";
        string memory statusMessage = "Status";
        string memory profilePictureHash = "picHash";

        registry.registerUser(ensName, avatarHash, publicKey, displayName, bio, statusMessage, profilePictureHash);

        (string memory name, , string memory aHash, , , , string memory pKey, , bool registered, uint256 lastUpd) = registry.getUserDetails(address(this));
        assertEq(name, ensName);
        assertEq(aHash, avatarHash);
        assertEq(pKey, publicKey);
        assertTrue(registered);
        assertGt(lastUpd, 0);
    }

    function testGetAllUsers() public {
        registry.registerUser("test.eth", "hash", "pubkey", "Display", "Bio", "Status", "pic");

        address[] memory users = registry.getAllUsers();
        assertEq(users.length, 1);
        assertEq(users[0], address(this));
    }
}