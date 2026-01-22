import React, { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { generateKeyPair, encryptMessage, decryptMessage } from '../utils/encryption';

interface Message {
  sender: string;
  receiver: string;
  content: string;
  timestamp: number;
}

interface ChatInterfaceProps {
  recipientAddress: string;
}

export default function ChatInterface({ recipientAddress }: ChatInterfaceProps) {
  const { address } = useAccount();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [secretKey, setSecretKey] = useState<string | null>(null);
  const [publicKey, setPublicKey] = useState<string | null>(null);

  useEffect(() => {
    // Load or generate key pair
    const storedSecretKey = localStorage.getItem('secretKey');
    const storedPublicKey = localStorage.getItem('publicKey');

    if (storedSecretKey && storedPublicKey) {
      setSecretKey(storedSecretKey);
      setPublicKey(storedPublicKey);
    } else {
      const keyPair = generateKeyPair();
      setSecretKey(keyPair.secretKey);
      setPublicKey(keyPair.publicKey);
      localStorage.setItem('secretKey', keyPair.secretKey);
      localStorage.setItem('publicKey', keyPair.publicKey);
    }
  }, []);

  const sendMessage = async () => {
    if (!newMessage.trim() || !address || !secretKey) return;

    // Get recipient's public key from registry
    // For now, assume we have it
    const recipientPublicKey = 'recipient_public_key'; // TODO: fetch from contract

    try {
      const encryptedContent = encryptMessage(newMessage, recipientPublicKey, secretKey);

      // Send to contract
      // TODO: call contract sendMessage with encryptedContent

      setNewMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const loadMessages = async () => {
    if (!address || !secretKey) return;

    // Fetch messages from contract
    // TODO: call getConversation

    // For each message, decrypt if it's for us
    // TODO: decrypt messages
  };

  useEffect(() => {
    loadMessages();
  }, [address, secretKey]);

  return (
    <div className="chat-interface">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === address ? 'sent' : 'received'}`}>
            <p>{msg.content}</p>
            <span>{new Date(msg.timestamp * 1000).toLocaleString()}</span>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}