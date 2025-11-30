'use client';

import { useEffect, useState } from 'react';

export function useServiceWorker() {
  const [isSupported, setIsSupported] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if service workers are supported
    if ('serviceWorker' in navigator) {
      setIsSupported(true);
      
      const registerServiceWorker = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/',
          });
          
          console.log('Service Worker registered successfully:', registration);
          setIsRegistered(true);
          
          // Handle service worker updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New service worker is available
                  console.log('New service worker available');
                  // You could show a prompt to update here
                }
              });
            }
          });
          
        } catch (error) {
          console.error('Service Worker registration failed:', error);
          setError(error instanceof Error ? error.message : 'Registration failed');
        }
      };

      // Register service worker
      registerServiceWorker();
      
    } else {
      console.warn('Service workers are not supported in this browser');
      setIsSupported(false);
    }
  }, []);

  // Unregister service worker (useful for development)
  const unregisterServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.ready;
        const unregistered = await registration.unregister();
        setIsRegistered(!unregistered);
        console.log('Service Worker unregistered:', unregistered);
      } catch (error) {
        console.error('Service Worker unregistration failed:', error);
        setError(error instanceof Error ? error.message : 'Unregistration failed');
      }
    }
  };

  return {
    isSupported,
    isRegistered,
    error,
    unregisterServiceWorker,
  };
}

// Hook to request notification permission and register service worker
export function useNotifications() {
  const { isSupported: swSupported, isRegistered: swRegistered } = useServiceWorker();
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Get current permission
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestPermission = async () => {
    if (!swSupported) {
      throw new Error('Service workers are not supported');
    }

    try {
      const permission = await Notification.requestPermission();
      setPermission(permission);
      setIsEnabled(permission === 'granted');
      return permission;
    } catch (error) {
      console.error('Failed to request notification permission:', error);
      throw error;
    }
  };

  const showNotification = (title: string, options?: NotificationOptions) => {
    if (permission === 'granted' && swRegistered) {
      return new Notification(title, {
        icon: '/icon-192x192.png',
        badge: '/badge-72x72.png',
        ...options,
      });
    }
    return null;
  };

  return {
    isSupported: swSupported && 'Notification' in window,
    isRegistered: swRegistered,
    permission,
    isEnabled,
    requestPermission,
    showNotification,
  };
}