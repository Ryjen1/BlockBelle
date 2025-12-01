import { useState, useMemo } from 'react';

export interface Message {
  sender: string;
  receiver?: string;
  content: string;
  timestamp: bigint;
  type?: 'private' | 'group';
  chatId?: string;
}

export interface SearchFilters {
  content?: string;
  sender?: string;
  startDate?: string;
  endDate?: string;
}

export interface SearchResult extends Message {
  highlights: {
    content: boolean;
    sender: boolean;
  };
}

export function useMessageSearch(messages: Message[]) {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({});
  const [isSearchActive, setIsSearchActive] = useState(false);

  const filteredMessages = useMemo(() => {
    if (!isSearchActive || !messages.length) {
      return messages.map(msg => ({
        ...msg,
        highlights: { content: false, sender: false }
      })) as SearchResult[];
    }

    return messages.filter(message => {
      // Content filter
      if (searchFilters.content) {
        const contentMatch = message.content.toLowerCase().includes(
          searchFilters.content.toLowerCase()
        );
        if (!contentMatch) return false;
      }

      // Sender filter
      if (searchFilters.sender) {
        const senderMatch = message.sender.toLowerCase().includes(
          searchFilters.sender.toLowerCase()
        );
        if (!senderMatch) return false;
      }

      // Date range filter
      if (searchFilters.startDate || searchFilters.endDate) {
        const messageDate = new Date(Number(message.timestamp) * 1000);
        
        if (searchFilters.startDate) {
          const startDate = new Date(searchFilters.startDate);
          if (messageDate < startDate) return false;
        }
        
        if (searchFilters.endDate) {
          const endDate = new Date(searchFilters.endDate);
          if (messageDate > endDate) return false;
        }
      }

      return true;
    }).map(message => {
      // Add highlighting information
      const highlights = {
        content: searchFilters.content ? 
          message.content.toLowerCase().includes(searchFilters.content.toLowerCase()) : false,
        sender: searchFilters.sender ? 
          message.sender.toLowerCase().includes(searchFilters.sender.toLowerCase()) : false,
      };

      return {
        ...message,
        highlights
      } as SearchResult;
    });
  }, [messages, searchFilters, isSearchActive]);

  const searchStats = useMemo(() => {
    const total = messages.length;
    const filtered = filteredMessages.length;
    
    return {
      total,
      filtered,
      hasResults: filtered > 0,
      searchTerm: searchFilters.content || '',
    };
  }, [messages.length, filteredMessages.length, searchFilters.content]);

  const updateFilters = (newFilters: Partial<SearchFilters>) => {
    setSearchFilters(prev => ({ ...prev, ...newFilters }));
    setIsSearchActive(true);
  };

  const clearFilters = () => {
    setSearchFilters({});
    setIsSearchActive(false);
  };

  const getHighlightedContent = (content: string, searchTerm: string): string => {
    if (!searchTerm || !isSearchActive) return content;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return content.replace(regex, '<mark class="bg-yellow-300 dark:bg-yellow-600">$1</mark>');
  };

  const getHighlightedSender = (sender: string, searchTerm: string): string => {
    if (!searchTerm || !isSearchActive) return sender;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return sender.replace(regex, '<mark class="bg-yellow-300 dark:bg-yellow-600">$1</mark>');
  };

  return {
    filteredMessages,
    searchFilters,
    isSearchActive,
    searchStats,
    updateFilters,
    clearFilters,
    getHighlightedContent,
    getHighlightedSender,
  };
}