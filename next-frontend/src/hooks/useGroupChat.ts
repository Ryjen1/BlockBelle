import { useState, useEffect } from 'react';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import WhisprChatABI from '../../contracts/abi/WhisprChat.json';

interface Message {
  sender: string;
  receiver: string;
  content: string;
  timestamp: number;
}

export function useGroupChat(groupId: number) {
  const { address } = useAccount();
  const [messages, setMessages] = useState<Message[]>([]);

  // Fetch group conversation
  const { data: conversation } = useReadContract({
    address: '0x...', // chat contract address
    abi: WhisprChatABI,
    functionName: 'getGroupConversation',
    args: [groupId],
  });

  useEffect(() => {
    if (conversation) {
      const formattedMessages = conversation.map((msg: any) => ({
        sender: msg.sender,
        receiver: msg.receiver,
        content: msg.content,
        timestamp: msg.timestamp,
      }));
      setMessages(formattedMessages);
    }
  }, [conversation]);

  const sendMessage = useWriteContract();

  const handleSendMessage = (content: string) => {
    sendMessage.writeContract({
      address: '0x...', // chat contract address
      abi: WhisprChatABI,
      functionName: 'sendGroupMessage',
      args: [groupId, content],
    });
  };

  return {
    messages,
    sendMessage: handleSendMessage,
    isLoading: sendMessage.isPending,
  };
}