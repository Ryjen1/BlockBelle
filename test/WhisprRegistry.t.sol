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

        registry.registerUser(ensName, avatarHash);

        (string memory name, string memory hash, bool registered) = registry.getUserDetails(address(this));
        assertEq(name, ensName);
        assertEq(hash, avatarHash);
        assertTrue(registered);
    }

    function testGetAllUsers() public {
        registry.registerUser("test.eth", "hash");

        address[] memory users = registry.getAllUsers();
        assertEq(users.length, 1);
        assertEq(users[0], address(this));
    }
}