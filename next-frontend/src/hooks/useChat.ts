import { useState, useEffect } from 'react';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import { encryptMessage, decryptMessage } from '../utils/encryption';
import WhisprChatABI from '../../contracts/abi/WhisprChat.json';
import WhisprRegistryABI from '../../contracts/abi/WhisprRegistry.json';

interface Message {
  sender: string;
  receiver: string;
  content: string;
  timestamp: number;
}

export function useChat(recipientAddress: string) {
  const { address } = useAccount();
  const [messages, setMessages] = useState<Message[]>([]);
  const [recipientPublicKey, setRecipientPublicKey] = useState<string | null>(null);
  const [secretKey, setSecretKey] = useState<string | null>(null);

  // Load secret key
  useEffect(() => {
    const storedSecretKey = localStorage.getItem('secretKey');
    setSecretKey(storedSecretKey);
  }, []);

  // Fetch recipient's public key
  const { data: userDetails } = useReadContract({
    address: '0x...', // registry address
    abi: WhisprRegistryABI,
    functionName: 'getUserDetails',
    args: [recipientAddress],
  });

  useEffect(() => {
    if (userDetails) {
      setRecipientPublicKey(userDetails[2]); // publicKey is at index 2
    }
  }, [userDetails]);

  // Fetch conversation
  const { data: conversation } = useReadContract({
    address: '0x...', // chat contract address
    abi: WhisprChatABI,
    functionName: 'getConversation',
    args: [address, recipientAddress],
  });

  // Fetch sender's public key if needed
  const { data: senderDetails } = useReadContract({
    address: '0x...', // registry address
    abi: WhisprRegistryABI,
    functionName: 'getUserDetails',
    args: conversation ? conversation.find((msg: any) => msg.sender !== address)?.sender : [],
  });

  useEffect(() => {
    if (conversation && secretKey) {
      const decryptedMessages = conversation.map((msg: any) => {
        let content = msg.content;
        if (msg.sender !== address && msg.receiver === address) {
          // Decrypt incoming message
          try {
            const senderPublicKey = senderDetails ? senderDetails[2] : 'sender_public_key'; // publicKey
            content = decryptMessage(msg.content, senderPublicKey, secretKey);
          } catch (error) {
            console.error('Failed to decrypt message:', error);
          }
        }
        return {
          sender: msg.sender,
          receiver: msg.receiver,
          content,
          timestamp: msg.timestamp,
        };
      });
      setMessages(decryptedMessages);
    }
  }, [conversation, secretKey, address, senderDetails]);

  const sendMessage = useWriteContract();

  const handleSendMessage = (content: string) => {
    if (!recipientPublicKey || !secretKey) return;

    // Encrypt the message
    const encryptedContent = encryptMessage(content, recipientPublicKey, secretKey);

    sendMessage.writeContract({
      address: '0x...', // chat contract address
      abi: WhisprChatABI,
      functionName: 'sendMessage',
      args: [recipientAddress, encryptedContent],
    });
  };

  return {
    messages,
    sendMessage: handleSendMessage,
    isLoading: sendMessage.isPending,
  };
}