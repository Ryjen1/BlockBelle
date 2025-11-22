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
  // Skip static generation for error pages to avoid Vercel deployment issues
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
};

export default nextConfig;