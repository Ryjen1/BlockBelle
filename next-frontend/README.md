# BlockBelle - Next.js Frontend

This is the Next.js version of the BlockBelle frontend, migrated from Vite to support the Self Protocol integration.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Self Protocol Integration

This Next.js setup is ready for Self Protocol QR Code SDK integration. Follow the [Self Protocol documentation](https://docs.self.xyz/frontend-integration/qrcode-sdk) to complete the integration.

## Project Structure

- `/src/app` - Next.js App Router pages and layouts
- `/src/components` - React components (migrated from Vite)
- `/src/hooks` - Custom React hooks
- `/src/config` - Configuration files and contract ABIs
- `/src/utils` - Utility functions
- `/public` - Static assets

## Key Features

- **Web3 Integration**: RainbowKit + Wagmi for wallet connections
- **Celo Network**: Configured for Celo mainnet
- **Smart Contracts**: WhisprChat and WhisprRegistry integration
- **Tailwind CSS**: For styling
- **TypeScript**: Full type safety

## Build for Production

```bash
npm run build
npm start
```

## Migration Notes

This project was migrated from Vite to Next.js to support Self Protocol integration. All components, hooks, and utilities have been preserved with the following changes:

1. Added `'use client'` directives to all interactive components
2. Updated import paths to use `@/` alias
3. Configured Next.js for Web3 compatibility
4. Updated chain from Base Sepolia to Celo mainnet
5. Configured webpack externals for wallet libraries