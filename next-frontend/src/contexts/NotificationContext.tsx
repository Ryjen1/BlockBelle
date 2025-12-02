'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { notificationService, NotificationSettings } from '@/lib/notificationService';
import { useMute } from '@/hooks/useMute';

interface NotificationContextType {
  // Permission state
  permission: NotificationPermission;
  isSupported: boolean;
  isEnabled: boolean;
  
  // Settings
  settings: NotificationSettings;
  updateSettings: (settings: Partial<NotificationSettings>) => void;
  
  // Actions
  requestPermission: () => Promise<NotificationPermission>;
  showNewMessageNotification: (
    senderName: string,
    message: string,
    chatType: 'group' | 'private',
    chatId?: string,
    senderAddress?: string
  ) => Promise<Notification | null>;
  showMentionNotification: (
    senderName: string,
    message: string,
    chatType: 'group' | 'private',
    chatId?: string,
    senderAddress?: string
  ) => Promise<Notification | null>;
  clearAllNotifications: () => void;
  testNotification: () => Promise<Notification | null>;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const [settings, setSettings] = useState<NotificationSettings>({
    enabled: true,
    soundEnabled: true,
    showPreview: true,
    groupChatEnabled: true,
    privateChatEnabled: true,
    mentionOnly: false,
  });
  
  // Get mute functionality
  const { isUserMuted, isGroupMuted } = useMute();

  // Initialize notification service
  useEffect(() => {
    const currentPermission = notificationService.getPermission();
    setPermission(currentPermission);
    
    const currentSettings = notificationService.getSettings();
    setSettings(currentSettings);
  }, []);

  // Handle notification clicks
  useEffect(() => {
    const handleNotificationClick = (event: CustomEvent) => {
      const { detail } = event;
      
      // Handle notification click based on type
      if (detail.type === 'new-message' || detail.type === 'mention') {
        console.log('Notification clicked:', detail);
        // Here you would typically navigate to the relevant chat
        // For now, we'll just log it
      }
    };

    window.addEventListener('blockbelle-notification-click', handleNotificationClick as EventListener);
    
    return () => {
      window.removeEventListener('blockbelle-notification-click', handleNotificationClick as EventListener);
    };
  }, []);

  // Request notification permission
  const requestPermission = async (): Promise<NotificationPermission> => {
    const newPermission = await notificationService.requestPermission();
    setPermission(newPermission);
    return newPermission;
  };

  // Update notification settings
  const updateSettings = (newSettings: Partial<NotificationSettings>) => {
    notificationService.updateSettings(newSettings);
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  // Show new message notification
  const showNewMessageNotification = async (
    senderName: string,
    message: string,
    chatType: 'group' | 'private',
    chatId?: string,
    senderAddress?: string
  ): Promise<Notification | null> => {
    if (permission !== 'granted' || !settings.enabled) {
      return null;
    }

    // Check if sender/group is muted
    if (senderAddress && isUserMuted(senderAddress)) {
      return null; // Don't show notification for muted users
    }
    
    if (chatId && chatType === 'group' && isGroupMuted(chatId)) {
      return null; // Don't show notification for muted groups
    }

    const notification = await notificationService.showNewMessageNotification(
      senderName,
      message,
      chatType,
      chatId
    );

    if (notification && settings.soundEnabled) {
      notificationService.playNotificationSound();
    }

    return notification;
  };

  // Show mention notification
  const showMentionNotification = async (
    senderName: string,
    message: string,
    chatType: 'group' | 'private',
    chatId?: string,
    senderAddress?: string
  ): Promise<Notification | null> => {
    if (permission !== 'granted' || !settings.enabled) {
      return null;
    }

    // Check if sender/group is muted (mentions bypass mute for now, but this can be changed)
    if (senderAddress && isUserMuted(senderAddress) && !settings.mentionOnly) {
      return null; // Don't show notification for muted users unless mention-only mode
    }
    
    if (chatId && chatType === 'group' && isGroupMuted(chatId) && !settings.mentionOnly) {
      return null; // Don't show notification for muted groups unless mention-only mode
    }

    const notification = await notificationService.showMentionNotification(
      senderName,
      message,
      chatType,
      chatId
    );

    if (notification && settings.soundEnabled) {
      notificationService.playNotificationSound();
    }

    return notification;
  };

  // Clear all notifications
  const clearAllNotifications = (): void => {
    notificationService.clearAllNotifications();
  };

  // Test notification
  const testNotification = async (): Promise<Notification | null> => {
    if (permission !== 'granted') {
      await requestPermission();
    }

    return notificationService.showNotification({
      title: 'BlockBelle Notification Test',
      body: 'Push notifications are working correctly!',
      tag: 'blockbelle-test',
      data: { type: 'test' },
      requireInteraction: false,
    });
  };

  const value: NotificationContextType = {
    permission,
    isSupported: notificationService.isSupported(),
    isEnabled: permission === 'granted' && settings.enabled,
    settings,
    updateSettings,
    requestPermission,
    showNewMessageNotification,
    showMentionNotification,
    clearAllNotifications,
    testNotification,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
}

// Hook for checking if app is focused (to avoid notifications when app is active)
export function useAppFocus() {
  const [isFocused, setIsFocused] = useState(!document.hidden);

  useEffect(() => {
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    const handleVisibilityChange = () => setIsFocused(!document.hidden);

    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return isFocused;
}