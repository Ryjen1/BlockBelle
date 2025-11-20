import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
  // Exclude problematic server-side packages
  serverExternalPackages: [
    'pino',
    'pino-pretty',
    'thread-stream',
    '@walletconnect/universal-provider',
  ],
};

export default nextConfig;