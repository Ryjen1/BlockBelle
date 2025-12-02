'use client';

import React, { useState, useEffect } from 'react';
import { useMute } from '@/hooks/useMute';
import { useUsernames } from '@/hooks/useUsernames';
import { useENSDisplayInfo } from '@/hooks/useENSProfile';
import { 
  SpeakerXMarkIcon,
  UserGroupIcon,
  UserIcon,
  XMarkIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

interface MutedListProps {
  onClose?: () => void;
  className?: string;
}

export default function MutedList({ onClose, className = '' }: MutedListProps) {
  const { 
    muteSettings, 
    toggleUserMute, 
    toggleGroupMute, 
    refreshMuteSettings,
    isLoading 
  } = useMute();
  const { getCachedUsername } = useUsernames();
  const [activeTab, setActiveTab] = useState<'users' | 'groups'>('users');

  const userMutes = Object.entries(muteSettings.userMutes).filter(([_, isMuted]) => isMuted);
  const groupMutes = Object.entries(muteSettings.groupMutes).filter(([_, isMuted]) => isMuted);

  const formatMutedAt = (mutedAt: string) => {
    const date = new Date(mutedAt);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 30) return `${days}d ago`;
    
    return date.toLocaleDateString();
  };

  const getUserDisplayInfo = (userAddress: string) => {
    const displayInfo = useENSDisplayInfo(userAddress);
    const cachedUsername = getCachedUsername(userAddress);
    
    return {
      displayName: displayInfo.displayInfo.displayName || cachedUsername || 
                  `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`,
      avatar: displayInfo.displayInfo.avatar || null,
      isVerified: displayInfo.displayInfo.isVerified || false
    };
  };

  const handleUnmuteUser = async (userAddress: string) => {
    try {
      await toggleUserMute(userAddress);
    } catch (error) {
      console.error('Failed to unmute user:', error);
      alert('Failed to unmute user. Please try again.');
    }
  };

  const handleUnmuteGroup = async (groupId: string) => {
    try {
      await toggleGroupMute(groupId);
    } catch (error) {
      console.error('Failed to unmute group:', error);
      alert('Failed to unmute group. Please try again.');
    }
  };

  const totalMuted = userMutes.length + groupMutes.length;

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <SpeakerXMarkIcon className="h-5 w-5 text-red-500" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Muted ({totalMuted})
          </h2>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={refreshMuteSettings}
            disabled={isLoading}
            className="p-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            title="Refresh"
          >
            <svg 
              className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              title="Close"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {totalMuted === 0 ? (
        <div className="p-8 text-center">
          <SpeakerXMarkIcon className="h-12 w-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400 mb-2">No muted users or groups</p>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            When you mute someone, they'll appear here
          </p>
        </div>
      ) : (
        <>
          {/* Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('users')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-medium ${
                activeTab === 'users'
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              <UserIcon className="h-4 w-4" />
              <span>Users ({userMutes.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('groups')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-medium ${
                activeTab === 'groups'
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              <UserGroupIcon className="h-4 w-4" />
              <span>Groups ({groupMutes.length})</span>
            </button>
          </div>

          {/* Content */}
          <div className="max-h-80 overflow-y-auto">
            {activeTab === 'users' && (
              <div className="p-4 space-y-3">
                {userMutes.length === 0 ? (
                  <div className="text-center py-6">
                    <UserIcon className="h-8 w-8 text-gray-300 dark:text-gray-600 mx-auto mb-2" />
                    <p className="text-gray-500 dark:text-gray-400 text-sm">No muted users</p>
                  </div>
                ) : (
                  userMutes.map(([userAddress]) => {
                    const userInfo = getUserDisplayInfo(userAddress);
                    return (
                      <div
                        key={userAddress}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-medium text-sm">
                              {userInfo.displayName.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {userInfo.displayName}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                              {userAddress.slice(0, 6)}...{userAddress.slice(-4)}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                            <ClockIcon className="h-3 w-3" />
                            <span>Now</span>
                          </div>
                          <button
                            onClick={() => handleUnmuteUser(userAddress)}
                            disabled={isLoading}
                            className="p-1 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded"
                            title="Unmute user"
                          >
                            <XMarkIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            )}

            {activeTab === 'groups' && (
              <div className="p-4 space-y-3">
                {groupMutes.length === 0 ? (
                  <div className="text-center py-6">
                    <UserGroupIcon className="h-8 w-8 text-gray-300 dark:text-gray-600 mx-auto mb-2" />
                    <p className="text-gray-500 dark:text-gray-400 text-sm">No muted groups</p>
                  </div>
                ) : (
                  groupMutes.map(([groupId]) => (
                    <div
                      key={groupId}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                          <UserGroupIcon className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            Group {groupId}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {groupId}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                          <ClockIcon className="h-3 w-3" />
                          <span>Now</span>
                        </div>
                        <button
                          onClick={() => handleUnmuteGroup(groupId)}
                          disabled={isLoading}
                          className="p-1 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded"
                          title="Unmute group"
                        >
                          <XMarkIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}