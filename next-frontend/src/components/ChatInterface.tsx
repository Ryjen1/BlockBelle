import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import { useChat } from '../hooks/useChat';
import styles from './ChatInterface.module.css';

interface ChatInterfaceProps {
  recipientAddress: string;
}

export default function ChatInterface({ recipientAddress }: ChatInterfaceProps) {
  const { address } = useAccount();
  const [newMessage, setNewMessage] = useState('');
  const { messages, sendMessage, isLoading } = useChat(recipientAddress);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    sendMessage(newMessage);
    setNewMessage('');
  };

  return (
    <div className={styles.chatInterface}>
      <div className={styles.messages}>
        {messages.map((msg, index) => (
          <div key={index} className={`${styles.message} ${msg.sender === address ? styles.sent : styles.received}`}>
            <p>{msg.content}</p>
            <span>{new Date(msg.timestamp * 1000).toLocaleString()}</span>
          </div>
        ))}
      </div>
      <div className={styles.messageInput}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button onClick={handleSendMessage} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
}