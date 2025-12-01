'use client';

import { useEffect } from 'react';
import { useServiceWorker } from '@/hooks/useServiceWorker';

export default function ServiceWorkerInitializer() {
  const { isSupported, isRegistered, error } = useServiceWorker();

  useEffect(() => {
    if (error) {
      console.error('Service Worker error:', error);
    }
    
    if (isSupported && isRegistered) {
      console.log('Service Worker initialized successfully');
    }
  }, [isSupported, isRegistered, error]);

  // This component doesn't render anything
  return null;
}