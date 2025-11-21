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
  ],
  // Add turbopack config
  turbopack: {
    root: process.cwd(),
    resolveAlias: {
      '@': './src',
    },
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      '@react-native-async-storage/async-storage': false,
    };
    return config;
  },
  // Workaround for Next.js 16 global-error prerendering bug
  experimental: {
    staticGenerationRetryCount: 0,
  },
};

export default nextConfig;