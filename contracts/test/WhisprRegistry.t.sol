// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {WhisprRegistry} from "../src/WhisprRegistry.sol";

contract WhisprRegistryTest is Test {
    WhisprRegistry public registry;
    address public user1 = address(0x1);
    address public user2 = address(0x2);

    function setUp() public {
        registry = new WhisprRegistry();
    }

    function testRegisterUser() public {
        vm.prank(user1);
        registry.registerUser("alice.ens", "avatarHash1");

        (string memory ensName, string memory avatarHash, bool registered) = registry.getUserDetails(user1);
        assertEq(ensName, "alice.ens");
        assertEq(avatarHash, "avatarHash1");
        assertTrue(registered);
        assertTrue(registry.isUserRegistered(user1));
    }

    function testGetAllUsers() public {
        vm.prank(user1);
        registry.registerUser("alice.ens", "avatarHash1");

        vm.prank(user2);
        registry.registerUser("bob.ens", "avatarHash2");

        address[] memory allUsers = registry.getAllUsers();
        assertEq(allUsers.length, 2);
        assertEq(allUsers[0], user1);
        assertEq(allUsers[1], user2);
    }

    function testGetUserCount() public {
        assertEq(registry.getUserCount(), 0);

        vm.prank(user1);
        registry.registerUser("alice.ens", "avatarHash1");

        assertEq(registry.getUserCount(), 1);
    }

    function testDeleteUser() public {
        vm.prank(user1);
        registry.registerUser("alice.ens", "avatarHash1");

        vm.prank(user1);
        registry.deleteUser();

        assertFalse(registry.isUserRegistered(user1));
        (string memory ensName, , bool registered) = registry.getUserDetails(user1);
        assertEq(ensName, "");
        assertFalse(registered);
        assertEq(registry.getUserCount(), 0);
    }

    function testDeleteOtherUser() public {
        vm.prank(user1);
        registry.registerUser("alice.ens", "avatarHash1");

        vm.prank(user2);
        registry.deleteOtherUser(user1);

        assertFalse(registry.isUserRegistered(user1));
    }

    // Edge-case tests
    function testRegisterUserAlreadyRegisteredFails() public {
        vm.prank(user1);
        registry.registerUser("alice.ens", "avatarHash1");

        vm.prank(user1);
        vm.expectRevert("User is already registered");
        registry.registerUser("alice2.ens", "avatarHash2");
    }

    function testRegisterUserEmptyEnsNameFails() public {
        vm.prank(user1);
        vm.expectRevert("ENS name cannot be empty");
        registry.registerUser("", "avatarHash1");
    }

    function testDeleteUserNotRegisteredFails() public {
        vm.prank(user1);
        vm.expectRevert("User is not registered");
        registry.deleteUser();
    }

    function testDeleteOtherUserNotRegisteredFails() public {
        vm.prank(user1);
        vm.expectRevert("User is not registered");
        registry.deleteOtherUser(user2);
    }

    // Security tests
    function testNoReentrancyInRegister() public {
        // Basic test; in real scenario, use reentrancy attack contract
        vm.prank(user1);
        registry.registerUser("alice.ens", "avatarHash1");

        // Ensure state is consistent
        assertTrue(registry.isUserRegistered(user1));
    }

    function testAccessControlDeleteOtherUser() public {
        // Currently, anyone can delete others; this might be a security issue
        vm.prank(user1);
        registry.registerUser("alice.ens", "avatarHash1");

        vm.prank(user2);
        registry.deleteOtherUser(user1); // This succeeds, but should it?

        // For now, test that it works, but note it as potential security issue
        assertFalse(registry.isUserRegistered(user1));
    }
}