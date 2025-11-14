// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {WhisprChat} from "../src/WhisprChat.sol";

contract WhisprChatTest is Test {
    WhisprChat public chat;

    function setUp() public {
        chat = new WhisprChat(3600); // 1 hour interval
    }

    function testSendMessage() public {
        address receiver = address(0x123);
        string memory content = "Hello";

        chat.sendMessage(receiver, content);

        WhisprChat.Message[] memory messages = chat.getConversation(address(this), receiver);
        assertEq(messages.length, 1);
        assertEq(messages[0].content, content);
    }

    function testCreateGroup() public {
        string memory name = "Test Group";
        string memory avatarHash = "hash";
        address[] memory members = new address[](1);
        members[0] = address(0x123);

        uint256 groupId = chat.createGroup(name, avatarHash, members);
        assertEq(groupId, 1);

        (string memory gName, , ) = chat.getGroupDetails(groupId);
        assertEq(gName, name);
    }
}