// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {WhisprChat} from "../src/WhisprChat.sol";

contract WhisprChatTest is Test {
    WhisprChat public chat;
    address public user1 = address(0x1);
    address public user2 = address(0x2);
    address public user3 = address(0x3);

    function setUp() public {
        chat = new WhisprChat(3600); // 1 hour interval
    }

    function testSendMessage() public {
        vm.prank(user1);
        chat.sendMessage(user2, "Hello World");

        WhisprChat.Message[] memory messages = chat.getConversation(user1, user2);
        assertEq(messages.length, 1);
        assertEq(messages[0].sender, user1);
        assertEq(messages[0].receiver, user2);
        assertEq(messages[0].content, "Hello World");
        assertGt(messages[0].timestamp, 0);
    }

    function testGetConversation() public {
        vm.prank(user1);
        chat.sendMessage(user2, "Message 1");

        vm.prank(user2);
        chat.sendMessage(user1, "Message 2");

        WhisprChat.Message[] memory messages = chat.getConversation(user1, user2);
        assertEq(messages.length, 2);
        assertEq(messages[0].content, "Message 1");
        assertEq(messages[1].content, "Message 2");
    }

    function testCreateGroup() public {
        address[] memory members = new address[](2);
        members[0] = user1;
        members[1] = user2;

        vm.prank(user1);
        uint256 groupId = chat.createGroup("Test Group", "avatarHash", members);

        assertEq(groupId, 1);
        (string memory name, string memory avatarHash, address[] memory groupMembers) = chat.getGroupDetails(groupId);
        assertEq(name, "Test Group");
        assertEq(avatarHash, "avatarHash");
        assertEq(groupMembers.length, 2);
    }

    function testSendGroupMessage() public {
        address[] memory members = new address[](2);
        members[0] = user1;
        members[1] = user2;

        vm.prank(user1);
        uint256 groupId = chat.createGroup("Test Group", "avatarHash", members);

        vm.prank(user1);
        chat.sendGroupMessage(groupId, "Group Message");

        WhisprChat.Message[] memory messages = chat.getGroupConversation(groupId);
        assertEq(messages.length, 1);
        assertEq(messages[0].content, "Group Message");
    }

    function testIsGroupMember() public {
        address[] memory members = new address[](1);
        members[0] = user2;

        vm.prank(user1);
        uint256 groupId = chat.createGroup("Test Group", "avatarHash", members);

        assertTrue(chat.isGroupMember(groupId, user1)); // creator
        assertTrue(chat.isGroupMember(groupId, user2));
        assertFalse(chat.isGroupMember(groupId, user3));
    }

    function testGetConversationId() public {
        bytes32 id1 = chat.getConversationId(user1, user2);
        bytes32 id2 = chat.getConversationId(user2, user1);
        assertEq(id1, id2);
    }

    // Edge-case tests
    function testSendMessageToSelfFails() public {
        vm.prank(user1);
        vm.expectRevert("Cannot send message to yourself");
        chat.sendMessage(user1, "Self message");
    }

    function testSendEmptyMessageFails() public {
        vm.prank(user1);
        vm.expectRevert("Message content cannot be empty");
        chat.sendMessage(user2, "");
    }

    function testSendMessageToZeroAddressFails() public {
        vm.prank(user1);
        vm.expectRevert("Invalid receiver address");
        chat.sendMessage(address(0), "Message");
    }

    function testSendGroupMessageEmptyContentFails() public {
        address[] memory members = new address[](1);
        members[0] = user1;

        vm.prank(user1);
        uint256 groupId = chat.createGroup("Test Group", "avatarHash", members);

        vm.prank(user1);
        vm.expectRevert("Message content cannot be empty");
        chat.sendGroupMessage(groupId, "");
    }

    function testSendGroupMessageNonMemberFails() public {
        address[] memory members = new address[](1);
        members[0] = user1;

        vm.prank(user1);
        uint256 groupId = chat.createGroup("Test Group", "avatarHash", members);

        vm.prank(user2);
        vm.expectRevert("Not a member of this group");
        chat.sendGroupMessage(groupId, "Message");
    }

    function testCreateGroupEmptyNameFails() public {
        address[] memory members = new address[](1);
        members[0] = user1;

        vm.prank(user1);
        vm.expectRevert("Group name cannot be empty");
        chat.createGroup("", "avatarHash", members);
    }

    function testCreateGroupNoMembersFails() public {
        address[] memory members = new address[](0);

        vm.prank(user1);
        vm.expectRevert("Group must have at least one member");
        chat.createGroup("Test Group", "avatarHash", members);
    }

    function testCreateGroupInvalidMemberAddress() public {
        address[] memory members = new address[](1);
        members[0] = address(0);

        vm.prank(user1);
        vm.expectRevert("Invalid member address");
        chat.createGroup("Test Group", "avatarHash", members);
    }

    function testGetGroupConversationInvalidGroup() public {
        vm.prank(user1);
        vm.expectRevert("Invalid group ID");
        chat.getGroupConversation(999);
    }

    function testGetGroupConversationNonMember() public {
        address[] memory members = new address[](1);
        members[0] = user1;

        vm.prank(user1);
        uint256 groupId = chat.createGroup("Test Group", "avatarHash", members);

        vm.prank(user2);
        vm.expectRevert("Not a member of this group");
        chat.getGroupConversation(groupId);
    }

    function testGetGroupDetailsInvalidGroup() public {
        vm.expectRevert("Invalid group ID");
        chat.getGroupDetails(999);
    }

    function testPostPriceToInvalidGroupFails() public {
        vm.expectRevert("Invalid group ID");
        chat.postPriceToGroup(999);
    }

    function testUpdateDefaultGroupIdInvalid() public {
        vm.expectRevert("Invalid group ID");
        chat.updateDefaultGroupId(999);
    }

    // Security tests
    function testNoReentrancyInSendMessage() public {
        // This is a basic test; in a real scenario, we'd use a reentrancy attack contract
        vm.prank(user1);
        chat.sendMessage(user2, "Test");

        // Ensure state is consistent
        WhisprChat.Message[] memory messages = chat.getConversation(user1, user2);
        assertEq(messages.length, 1);
    }

    function testAccessControlForAutomation() public {
        // performUpkeep should be callable by anyone, but only when conditions met
        // Since interval is 3600, and lastTimeStamp is set in constructor, it won't trigger immediately
        chat.performUpkeep("");
        // Should not revert, but also not do anything if conditions not met
    }
}