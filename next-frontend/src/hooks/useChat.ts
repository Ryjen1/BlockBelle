import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import WhisprChatABI from '../../contracts/WhisprChat.json'; // Assume ABI is generated

const CONTRACT_ADDRESS = '0x...'; // Replace with actual address

export enum Role {
  Member = 0,
  Moderator = 1,
  Admin = 2,
}

export interface Message {
  sender: string;
  receiver: string;
  content: string;
  timestamp: number;
}

export interface Group {
  name: string;
  avatarHash: string;
  members: string[];
}

export const useChat = () => {
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [account, setAccount] = useState<string>('');
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(web3Provider);
        const signer = web3Provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        const chatContract = new ethers.Contract(CONTRACT_ADDRESS, WhisprChatABI, signer);
        setContract(chatContract);
      }
    };
    init();
  }, []);

  useEffect(() => {
    if (!contract) return;

    const onMessageSent = (from: string, to: string, message: string, timestamp: any) => {
      const conversationId = getConversationId(from, to);
      const newMessage: Message = {
        sender: from,
        receiver: to,
        content: message,
        timestamp: timestamp.toNumber ? timestamp.toNumber() : Number(timestamp)
      };
      setConversations(prev => {
        const newMap = new Map(prev);
        const msgs = newMap.get(conversationId) || [];
        newMap.set(conversationId, [...msgs, newMessage]);
        return newMap;
      });
    };

    const onGroupMessageSent = (groupId: number, sender: string, message: string, timestamp: any) => {
      const newMessage: Message = {
        sender: sender,
        receiver: '',
        content: message,
        timestamp: timestamp.toNumber ? timestamp.toNumber() : Number(timestamp)
      };
      setGroupConversations(prev => {
        const newMap = new Map(prev);
        const msgs = newMap.get(groupId) || [];
        newMap.set(groupId, [...msgs, newMessage]);
        return newMap;
      });
    };

    contract.on('MessageSent', onMessageSent);
    contract.on('GroupMessageSent', onGroupMessageSent);

    return () => {
      contract.off('MessageSent', onMessageSent);
      contract.off('GroupMessageSent', onGroupMessageSent);
    };
  }, [contract]);

  const sendMessage = async (to: string, content: string) => {
    if (!contract) return;
    const tx = await contract.sendMessage(to, content);
    await tx.wait();
  };

  const getConversation = async (user1: string, user2: string): Promise<Message[]> => {
    if (!contract) return [];
    const conversationId = getConversationId(user1, user2);
    const cached = conversations.get(conversationId);
    if (cached) return cached;
    const msgs = await contract.getConversation(user1, user2);
    setConversations(prev => new Map(prev).set(conversationId, msgs));
    return msgs;
  };

  const createGroup = async (name: string, avatarHash: string, members: string[]): Promise<number> => {
    if (!contract) return 0;
    const tx = await contract.createGroup(name, avatarHash, members);
    const receipt = await tx.wait();
    // Extract groupId from event
    const event = receipt.events.find((e: any) => e.event === 'GroupCreated');
    return event.args.groupId;
  };

  const sendGroupMessage = async (groupId: number, content: string) => {
    if (!contract) return;
    const tx = await contract.sendGroupMessage(groupId, content);
    await tx.wait();
  };

  const getGroupConversation = async (groupId: number): Promise<Message[]> => {
    if (!contract) return [];
    const cached = groupConversations.get(groupId);
    if (cached) return cached;
    const msgs = await contract.getGroupConversation(groupId);
    setGroupConversations(prev => new Map(prev).set(groupId, msgs));
    return msgs;
  };

  const getGroupDetails = async (groupId: number): Promise<Group> => {
    if (!contract) return { name: '', avatarHash: '', members: [] };
    return await contract.getGroupDetails(groupId);
  };

  const getUserRole = async (groupId: number, user: string): Promise<Role> => {
    if (!contract) return Role.Member;
    return await contract.getUserRole(groupId, user);
  };

  const assignRole = async (groupId: number, user: string, role: Role) => {
    if (!contract) return;
    const tx = await contract.assignRole(groupId, user, role);
    await tx.wait();
  };

  const removeParticipant = async (groupId: number, participant: string) => {
    if (!contract) return;
    const tx = await contract.removeParticipant(groupId, participant);
    await tx.wait();
  };

  const muteUser = async (groupId: number, user: string) => {
    if (!contract) return;
    const tx = await contract.muteUser(groupId, user);
    await tx.wait();
  };

  const unmuteUser = async (groupId: number, user: string) => {
    if (!contract) return;
    const tx = await contract.unmuteUser(groupId, user);
    await tx.wait();
  };

  const pinMessage = async (groupId: number, messageIndex: number) => {
    if (!contract) return;
    const tx = await contract.pinMessage(groupId, messageIndex);
    await tx.wait();
  };

  const unpinMessage = async (groupId: number, messageIndex: number) => {
    if (!contract) return;
    const tx = await contract.unpinMessage(groupId, messageIndex);
    await tx.wait();
  };

  const getPinnedMessages = async (groupId: number): Promise<number[]> => {
    if (!contract) return [];
    return await contract.pinnedMessages(groupId);
  };

  const isMuted = async (groupId: number, user: string): Promise<boolean> => {
    if (!contract) return false;
    return await contract.mutedUsers(groupId, user);
  };

  return {
    account,
    conversations,
    groupConversations,
    sendMessage,
    getConversation,
    createGroup,
    sendGroupMessage,
    getGroupConversation,
    getGroupDetails,
    getUserRole,
    assignRole,
    removeParticipant,
    muteUser,
    unmuteUser,
    pinMessage,
    unpinMessage,
    getPinnedMessages,
    isMuted,
  };
};