import type { Metadata } from 'next';
import type { ReactNode } from 'react';
// import { NextIntlClientProvider } from 'next-intl'; // TODO: Enable when next-intl is installed
// import { getMessages } from 'next-intl/server'; // TODO: Enable when next-intl is installed
// import { notFound } from 'next/navigation'; // TODO: Enable when next-intl is installed
// import { routing } from '@/i18n/routing'; // TODO: Enable when next-intl is installed
import './globals.css';
import { Providers } from '../providers';
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

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  // Validate that the incoming `locale` parameter is valid
  // if (!routing.locales.includes(locale as any)) {
  //   notFound();
  // }

  // Providing all messages to the client side is the easiest way to get started
  // const messages = await getMessages(); // TODO: Enable when next-intl is installed

  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {/* <NextIntlClientProvider messages={messages}> TODO: Enable when next-intl is installed */}
          <ServiceWorkerInitializer />
          <Providers>{children}</Providers>
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}