import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Providers } from './providers';
import ServiceWorkerInitializer from '@/components/ServiceWorkerInitializer';

export const metadata: Metadata = {
  title: 'BlockBelle',
  description: 'The elegant web3 chat dApp where women in blockchain connect, collaborate, and share their contributions through ENS-verified conversations.',
  manifest: '/manifest.json',
  themeColor: '#4f46e5',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/icon-192x192.png',
    apple: '/icon-192x192.png',
  },
};

// Web3 providers are client-side only ('use client'), so static generation works fine
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ServiceWorkerInitializer />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}