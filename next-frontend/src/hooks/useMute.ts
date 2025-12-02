'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAccount } from 'wagmi';

interface MuteSettings {
  userMutes: Record<string, boolean>; // user address -> is muted
  groupMutes: Record<string, boolean>; // group id -> is muted
}

interface UseMuteReturn {
  muteSettings: MuteSettings;
  isUserMuted: (userAddress: string) => boolean;
  isGroupMuted: (groupId: string) => boolean;
  toggleUserMute: (userAddress: string) => Promise<boolean>;
  toggleGroupMute: (groupId: string) => Promise<boolean>;
  refreshMuteSettings: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export function useMute(): UseMuteReturn {
  const { address, isConnected } = useAccount();
  const [muteSettings, setMuteSettings] = useState<MuteSettings>({
    userMutes: {},
    groupMutes: {}
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Refresh mute settings from the API
  const refreshMuteSettings = useCallback(async () => {
    if (!isConnected || !address) {
      setMuteSettings({ userMutes: {}, groupMutes: {} });
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/mute/list?userAddress=${address}`);
      const data = await response.json();

      if (data.success) {
        const userMutes: Record<string, boolean> = {};
        const groupMutes: Record<string, boolean> = {};

        data.data.settings.forEach((setting: any) => {
          if (setting.targetType === 'user') {
            userMutes[setting.mutedTarget] = true;
          } else if (setting.targetType === 'group') {
            groupMutes[setting.mutedTarget] = true;
          }
        });

        setMuteSettings({ userMutes, groupMutes });
      } else {
        throw new Error(data.error || 'Failed to fetch mute settings');
      }
    } catch (err) {
      console.error('Error fetching mute settings:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch mute settings');
    } finally {
      setIsLoading(false);
    }
  }, [isConnected, address]);

  // Check if a user is muted
  const isUserMuted = useCallback((userAddress: string): boolean => {
    return muteSettings.userMutes[userAddress.toLowerCase()] === true;
  }, [muteSettings.userMutes]);

  // Check if a group is muted
  const isGroupMuted = useCallback((groupId: string): boolean => {
    return muteSettings.groupMutes[groupId] === true;
  }, [muteSettings.groupMutes]);

  // Toggle mute for a user
  const toggleUserMute = useCallback(async (userAddress: string): Promise<boolean> => {
    if (!isConnected || !address) {
      throw new Error('User not connected');
    }

    const isCurrentlyMuted = isUserMuted(userAddress);
    const newMuteState = !isCurrentlyMuted;

    // Optimistically update the UI
    setMuteSettings(prev => ({
      ...prev,
      userMutes: {
        ...prev.userMutes,
        [userAddress.toLowerCase()]: newMuteState
      }
    }));

    try {
      const response = await fetch('/api/mute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userAddress: address,
          targetUserAddress: userAddress,
          mute: newMuteState,
          muteType: 'user'
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Refresh settings to ensure consistency
        await refreshMuteSettings();
        return newMuteState;
      } else {
        // Revert optimistic update on error
        setMuteSettings(prev => ({
          ...prev,
          userMutes: {
            ...prev.userMutes,
            [userAddress.toLowerCase()]: !newMuteState
          }
        }));
        throw new Error(data.error || 'Failed to toggle user mute');
      }
    } catch (err) {
      console.error('Error toggling user mute:', err);
      // Revert optimistic update on error
      setMuteSettings(prev => ({
        ...prev,
        userMutes: {
          ...prev.userMutes,
          [userAddress.toLowerCase()]: !newMuteState
        }
      }));
      throw err;
    }
  }, [isConnected, address, isUserMuted, refreshMuteSettings]);

  // Toggle mute for a group
  const toggleGroupMute = useCallback(async (groupId: string): Promise<boolean> => {
    if (!isConnected || !address) {
      throw new Error('User not connected');
    }

    const isCurrentlyMuted = isGroupMuted(groupId);
    const newMuteState = !isCurrentlyMuted;

    // Optimistically update the UI
    setMuteSettings(prev => ({
      ...prev,
      groupMutes: {
        ...prev.groupMutes,
        [groupId]: newMuteState
      }
    }));

    try {
      const response = await fetch('/api/mute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userAddress: address,
          targetGroupId: groupId,
          mute: newMuteState,
          muteType: 'group'
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Refresh settings to ensure consistency
        await refreshMuteSettings();
        return newMuteState;
      } else {
        // Revert optimistic update on error
        setMuteSettings(prev => ({
          ...prev,
          groupMutes: {
            ...prev.groupMutes,
            [groupId]: !newMuteState
          }
        }));
        throw new Error(data.error || 'Failed to toggle group mute');
      }
    } catch (err) {
      console.error('Error toggling group mute:', err);
      // Revert optimistic update on error
      setMuteSettings(prev => ({
        ...prev,
        groupMutes: {
          ...prev.groupMutes,
          [groupId]: !newMuteState
        }
      }));
      throw err;
    }
  }, [isConnected, address, isGroupMuted, refreshMuteSettings]);

  // Load mute settings when user connects or changes
  useEffect(() => {
    if (isConnected && address) {
      refreshMuteSettings();
    } else {
      // Clear settings when disconnected
      setMuteSettings({ userMutes: {}, groupMutes: {} });
      setError(null);
    }
  }, [isConnected, address, refreshMuteSettings]);

  return {
    muteSettings,
    isUserMuted,
    isGroupMuted,
    toggleUserMute,
    toggleGroupMute,
    refreshMuteSettings,
    isLoading,
    error
  };
}