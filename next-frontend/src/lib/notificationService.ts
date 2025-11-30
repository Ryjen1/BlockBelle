'use client';

export interface NotificationData {
  title: string;
  body: string;
  icon?: string;
  badge?: string;
  tag?: string;
  data?: any;
  requireInteraction?: boolean;
  silent?: boolean;
  timestamp?: number;
}

export interface NotificationSettings {
  enabled: boolean;
  soundEnabled: boolean;
  showPreview: boolean;
  groupChatEnabled: boolean;
  privateChatEnabled: boolean;
  mentionOnly: boolean;
}

export class NotificationService {
  private static instance: NotificationService;
  private permission: NotificationPermission = 'default';
  private settings: NotificationSettings = {
    enabled: true,
    soundEnabled: true,
    showPreview: true,
    groupChatEnabled: true,
    privateChatEnabled: true,
    mentionOnly: false,
  };

  static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  constructor() {
    this.loadSettings();
    this.permission = Notification.permission;
  }

  // Load settings from localStorage
  private loadSettings(): void {
    try {
      const saved = localStorage.getItem('blockbelle-notification-settings');
      if (saved) {
        this.settings = { ...this.settings, ...JSON.parse(saved) };
      }
    } catch (error) {
      console.warn('Failed to load notification settings:', error);
    }
  }

  // Save settings to localStorage
  private saveSettings(): void {
    try {
      localStorage.setItem('blockbelle-notification-settings', JSON.stringify(this.settings));
    } catch (error) {
      console.warn('Failed to save notification settings:', error);
    }
  }

  // Get current notification permission
  getPermission(): NotificationPermission {
    this.permission = Notification.permission;
    return this.permission;
  }

  // Request notification permission
  async requestPermission(): Promise<NotificationPermission> {
    if (!('Notification' in window)) {
      console.warn('This browser does not support notifications');
      return 'denied';
    }

    if (this.permission === 'granted') {
      return 'granted';
    }

    try {
      const permission = await Notification.requestPermission();
      this.permission = permission;
      return permission;
    } catch (error) {
      console.error('Failed to request notification permission:', error);
      return 'denied';
    }
  }

  // Check if notifications are supported
  isSupported(): boolean {
    return 'Notification' in window && 'serviceWorker' in navigator;
  }

  // Get notification settings
  getSettings(): NotificationSettings {
    return { ...this.settings };
  }

  // Update notification settings
  updateSettings(newSettings: Partial<NotificationSettings>): void {
    this.settings = { ...this.settings, ...newSettings };
    this.saveSettings();
  }

  // Show a notification
  async showNotification(data: NotificationData): Promise<Notification | null> {
    if (!this.isSupported()) {
      console.warn('Notifications not supported');
      return null;
    }

    if (this.permission !== 'granted' || !this.settings.enabled) {
      return null;
    }

    try {
      const notification = new Notification(data.title, {
        body: data.body,
        icon: data.icon || '/icon-192x192.png',
        badge: data.badge || '/badge-72x72.png',
        tag: data.tag || 'blockbelle-message',
        data: data.data,
        requireInteraction: data.requireInteraction ?? false,
        silent: data.silent ?? !this.settings.soundEnabled,
        timestamp: data.timestamp || Date.now(),
      });

      // Auto close after 5 seconds unless requireInteraction is true
      if (!data.requireInteraction) {
        setTimeout(() => {
          notification.close();
        }, 5000);
      }

      return notification;
    } catch (error) {
      console.error('Failed to show notification:', error);
      return null;
    }
  }

  // Show new message notification
  async showNewMessageNotification(
    senderName: string,
    message: string,
    chatType: 'group' | 'private',
    chatId?: string
  ): Promise<Notification | null> {
    const shouldNotify = this.shouldShowNotification(chatType);
    if (!shouldNotify) {
      return null;
    }

    const title = chatType === 'group' ? 'New Group Message' : 'New Private Message';
    const preview = this.settings.showPreview ? `: ${message.slice(0, 50)}${message.length > 50 ? '...' : ''}` : '';
    
    return this.showNotification({
      title: `${senderName} - ${title}`,
      body: chatType === 'group' 
        ? `New message in group chat${preview}`
        : `New private message${preview}`,
      tag: `blockbelle-${chatType}-${chatId || 'general'}`,
      data: {
        type: 'new-message',
        chatType,
        chatId,
        senderName,
        message,
      },
      requireInteraction: false,
    });
  }

  // Show mention notification
  async showMentionNotification(
    senderName: string,
    message: string,
    chatType: 'group' | 'private',
    chatId?: string
  ): Promise<Notification | null> {
    const title = chatType === 'group' ? 'You were mentioned' : 'New Message';
    const preview = this.settings.showPreview ? `: ${message.slice(0, 50)}${message.length > 50 ? '...' : ''}` : '';

    return this.showNotification({
      title: `${senderName} - ${title}`,
      body: `You were mentioned in ${chatType} chat${preview}`,
      tag: `blockbelle-mention-${chatId || 'general'}`,
      data: {
        type: 'mention',
        chatType,
        chatId,
        senderName,
        message,
      },
      requireInteraction: true,
    });
  }

  // Check if notification should be shown based on settings
  private shouldShowNotification(chatType: 'group' | 'private'): boolean {
    if (!this.settings.enabled) {
      return false;
    }

    if (chatType === 'group' && !this.settings.groupChatEnabled) {
      return false;
    }

    if (chatType === 'private' && !this.settings.privateChatEnabled) {
      return false;
    }

    return true;
  }

  // Play notification sound
  playNotificationSound(): void {
    if (!this.settings.soundEnabled) {
      return;
    }

    try {
      // Create a simple notification sound
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    } catch (error) {
      console.warn('Failed to play notification sound:', error);
    }
  }

  // Clear all notifications
  clearAllNotifications(): void {
    // Service worker will handle clearing notifications
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.getNotifications().then((notifications) => {
          notifications.forEach((notification) => notification.close());
        });
      });
    }
  }

  // Handle notification click
  static handleNotificationClick(notificationData: any): void {
    // Focus the window and navigate to the relevant chat
    window.focus();
    
    if (notificationData.type === 'new-message' || notificationData.type === 'mention') {
      // Emit custom event to handle navigation
      window.dispatchEvent(new CustomEvent('blockbelle-notification-click', {
        detail: notificationData
      }));
    }
  }
}

// Export singleton instance
export const notificationService = NotificationService.getInstance();