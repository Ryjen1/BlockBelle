'use client';

import React, { useState } from 'react';
import { 
  MagnifyingGlassIcon, 
  XMarkIcon, 
  CalendarIcon,
  UserIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import { SearchFilters } from '@/hooks/useMessageSearch';

interface ChatSearchProps {
  onSearchChange: (filters: Partial<SearchFilters>) => void;
  onClearSearch: () => void;
  isSearchActive: boolean;
  searchStats: {
    total: number;
    filtered: number;
    hasResults: boolean;
    searchTerm: string;
  };
  className?: string;
}

export default function ChatSearch({ 
  onSearchChange, 
  onClearSearch, 
  isSearchActive, 
  searchStats,
  className = ''
}: ChatSearchProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [localFilters, setLocalFilters] = useState<SearchFilters>({});

  const handleContentSearch = (content: string) => {
    const filters = { ...localFilters, content: content || undefined };
    setLocalFilters(filters);
    onSearchChange(filters);
  };

  const handleSenderSearch = (sender: string) => {
    const filters = { ...localFilters, sender: sender || undefined };
    setLocalFilters(filters);
    onSearchChange(filters);
  };

  const handleDateChange = (field: 'startDate' | 'endDate', value: string) => {
    const filters = { ...localFilters, [field]: value || undefined };
    setLocalFilters(filters);
    onSearchChange(filters);
  };

  const handleClear = () => {
    setLocalFilters({});
    setShowAdvanced(false);
    onClearSearch();
  };

  const hasActiveFilters = Object.values(localFilters).some(value => value);

  return (
    <div className={`bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 ${className}`}>
      {/* Basic Search Bar */}
      <div className="p-4">
        <div className="relative">
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search messages..."
            value={localFilters.content || ''}
            onChange={(e) => handleContentSearch(e.target.value)}
            className="w-full pl-10 pr-12 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
            {hasActiveFilters && (
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                title="Advanced filters"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </button>
            )}
            {isSearchActive && (
              <button
                onClick={handleClear}
                className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                title="Clear search"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="px-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Sender Filter */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <UserIcon className="h-4 w-4 mr-1" />
                Sender
              </label>
              <input
                type="text"
                placeholder="Filter by sender..."
                value={localFilters.sender || ''}
                onChange={(e) => handleSenderSearch(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
            </div>

            {/* Date Range */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <CalendarIcon className="h-4 w-4 mr-1" />
                Date Range
              </label>
              <div className="space-y-2">
                <input
                  type="date"
                  value={localFilters.startDate || ''}
                  onChange={(e) => handleDateChange('startDate', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
                <input
                  type="date"
                  value={localFilters.endDate || ''}
                  onChange={(e) => handleDateChange('endDate', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <DocumentTextIcon className="h-4 w-4 mr-1" />
                Quick Filters
              </label>
              <div className="space-y-1">
                <button
                  onClick={() => {
                    const yesterday = new Date();
                    yesterday.setDate(yesterday.getDate() - 1);
                    const dateStr = yesterday.toISOString().split('T')[0];
                    handleDateChange('startDate', dateStr);
                  }}
                  className="w-full text-left px-3 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md"
                >
                  Last 24 hours
                </button>
                <button
                  onClick={() => {
                    const weekAgo = new Date();
                    weekAgo.setDate(weekAgo.getDate() - 7);
                    const dateStr = weekAgo.toISOString().split('T')[0];
                    handleDateChange('startDate', dateStr);
                  }}
                  className="w-full text-left px-3 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md"
                >
                  Last 7 days
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Results Summary */}
      {isSearchActive && (
        <div className="px-4 pb-3 border-t border-gray-200 dark:border-gray-700 pt-3">
          <div className="flex items-center justify-between text-sm">
            <div className="text-gray-600 dark:text-gray-400">
              {searchStats.hasResults ? (
                <span>
                  Found <span className="font-semibold text-gray-900 dark:text-gray-100">{searchStats.filtered}</span> of{' '}
                  <span className="font-semibold">{searchStats.total}</span> messages
                </span>
              ) : (
                <span className="text-red-600 dark:text-red-400">
                  No messages found
                </span>
              )}
            </div>
            {hasActiveFilters && (
              <button
                onClick={handleClear}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}