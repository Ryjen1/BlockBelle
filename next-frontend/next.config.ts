import type { NextConfig } from 'next';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
    root: __dirname,
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
  // Use skipProxyUrlNormalize instead of deprecated skipMiddlewareUrlNormalize
  skipProxyUrlNormalize: true,
};

export default nextConfig;