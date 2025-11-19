'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { config } from '@/config/wagmi';
import { celo } from 'wagmi/chains';
import '@rainbow-me/rainbowkit/styles.css';
import { useState, useEffect } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Suppress Chrome extension runtime errors
    const originalError = console.error;
    console.error = (...args) => {
      if (
        args[0] &&
        typeof args[0] === 'string' &&
        (args[0].includes('chrome.runtime.sendMessage') ||
          args[0].includes('Extension context invalidated'))
      ) {
        return;
      }
      originalError.apply(console, args);
    };

    // Global error handler for unhandled promise rejections
    const handleRejection = (event: PromiseRejectionEvent) => {
      if (
        event.reason &&
        event.reason.message &&
        (event.reason.message.includes('chrome.runtime.sendMessage') ||
          event.reason.message.includes('Extension context invalidated'))
      ) {
        event.preventDefault();
      }
    };

    window.addEventListener('unhandledrejection', handleRejection);

    return () => {
      window.removeEventListener('unhandledrejection', handleRejection);
      console.error = originalError;
    };
  }, []);

  if (!mounted) return null;

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          modalSize="compact"
          initialChain={celo}
          showRecentTransactions={true}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}