'use client';

import React from 'react';
import { SearchResult } from '@/hooks/useMessageSearch';

interface MessageHighlighterProps {
  message: SearchResult;
  searchTerm?: string;
  className?: string;
}

export default function MessageHighlighter({ 
  message, 
  searchTerm, 
  className = '' 
}: MessageHighlighterProps) {
  const highlightText = (text: string, shouldHighlight: boolean): React.ReactNode => {
    if (!shouldHighlight || !searchTerm) {
      return text;
    }

    // Create regex to match search term (case insensitive)
    const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark 
          key={index}
          className="bg-yellow-300 dark:bg-yellow-600 px-1 rounded"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const escapeRegExp = (string: string): string => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  return (
    <div className={`${className}`}>
      {/* Highlighted sender */}
      {message.highlights.sender && message.sender && (
        <div className="mb-1">
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            {highlightText(
              message.sender, 
              message.highlights.sender
            )}
          </span>
        </div>
      )}
      
      {/* Highlighted content */}
      <div className="text-sm">
        {highlightText(
          message.content, 
          message.highlights.content
        )}
      </div>
      
      {/* Timestamp */}
      <div className="text-xs mt-1 text-gray-500 dark:text-gray-400">
        {formatTimestamp(message.timestamp)}
      </div>
    </div>
  );
}

function formatTimestamp(timestamp: bigint): string {
  try {
    const timestampNum = Number(timestamp);
    
    // Check if timestamp is 0 or invalid
    if (timestampNum === 0 || timestampNum < 1000000000) {
      return 'now';
    }
    
    const date = new Date(timestampNum * 1000); // Convert from seconds to milliseconds
    return date.toLocaleString([], {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch (error) {
    console.error('Error formatting timestamp:', error);
    return 'now';
  }
}