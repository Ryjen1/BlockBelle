import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import { useChat } from '../hooks/useChat';

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
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button onClick={handleSendMessage} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
}