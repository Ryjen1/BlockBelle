/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force App Router
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;