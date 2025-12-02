'use client';

import React from 'react';

interface MessageBubbleProps {
  content: string;
  isOwnMessage: boolean;
  senderName?: string;
  timestamp: bigint;
  className?: string;
  showSender?: boolean;
}

export default function MessageBubble({
  content,
  isOwnMessage,
  senderName,
  timestamp,
  className = '',
  showSender = true
}: MessageBubbleProps) {
  const formatContent = (text: string): React.ReactNode => {
    // Split content by lines to preserve formatting
    const lines = text.split('\n');
    
    return (
      <div className="text-sm leading-relaxed">
        {lines.map((line, lineIndex) => (
          <React.Fragment key={lineIndex}>
            {lineIndex > 0 && <br />}
            <span className="break-words">{formatLineContent(line)}</span>
          </React.Fragment>
        ))}
      </div>
    );
  };

  const formatLineContent = (line: string): React.ReactNode => {
    // URL regex pattern
    const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/gi;
    
    const parts = line.split(urlRegex);
    
    return parts.map((part, index) => {
      if (part === undefined || part === null) return null;
      
      // Check if this part is a URL
      if (part.match(/^https?:\/\//) || part.match(/^www\./)) {
        const url = part.startsWith('http') ? part : `https://${part}`;
        return (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`underline ${
              isOwnMessage ? 'text-blue-200 hover:text-blue-100' : 'text-blue-600 hover:text-blue-800'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        );
      }
      
      // Regular text with emoji support
      return (
        <span key={index} className="whitespace-pre-wrap">
          {part}
        </span>
      );
    });
  };

  const formatTimestamp = (timestamp: bigint): string => {
    try {
      const timestampNum = Number(timestamp);
      
      // Check if timestamp is 0 or invalid
      if (timestampNum === 0 || timestampNum < 1000000000) {
        return 'now';
      }
      
      return new Date(timestampNum * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      console.error('Error formatting timestamp:', error);
      return 'now';
    }
  };

  return (
    <div className={`max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] px-3 py-2 sm:px-4 sm:py-3 rounded-lg shadow-sm break-words ${className} ${
      isOwnMessage
        ? 'bg-blue-500 text-white'
        : 'bg-white text-gray-900 border border-gray-200'
    }`}>
      {!isOwnMessage && showSender && senderName && (
        <div className="flex items-center gap-1 mb-1">
          <p className="text-xs font-semibold text-gray-700 truncate">
            {senderName}
          </p>
        </div>
      )}
      
      <div className="break-words">
        {formatContent(content)}
      </div>
      
      <div className={`text-xs mt-1 ${
        isOwnMessage ? 'text-blue-100' : 'text-gray-500'
      }`}>
        {formatTimestamp(timestamp)}
      </div>
    </div>
  );
}