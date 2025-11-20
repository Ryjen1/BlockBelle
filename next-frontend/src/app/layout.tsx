import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'BlockBelle',
  description: 'The elegant web3 chat dApp where women in blockchain connect, collaborate, and share their contributions through ENS-verified conversations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}