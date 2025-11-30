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

## Self Protocol Integration ✅

**Self Protocol identity verification is now fully integrated!**

Users can verify their identity using the Self mobile app directly from the Account page. The integration includes:

- ✅ QR Code verification flow
- ✅ Real Self Protocol SDK integration (not mock)
- ✅ Backend verification endpoint
- ✅ Persistent verification status
- ✅ Privacy-preserving zero-knowledge proofs

### Quick Start

1. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```

2. **For local testing with Self app**:
   ```bash
   # Install ngrok
   npm install -g ngrok
   
   # Expose your local server
   ngrok http 3000
   
   # Update .env.local with ngrok URL
   NEXT_PUBLIC_SELF_ENDPOINT=https://your-ngrok-url.ngrok.io/api/self/verify
   SELF_ENDPOINT=https://your-ngrok-url.ngrok.io/api/self/verify
   ```

3. **Run the app**:
   ```bash
   npm run dev
   ```

4. **Test verification**:
   - Navigate to Account tab
   - Click "Verify with Self Protocol"
   - Scan QR code with Self mobile app
   - Complete verification

### Documentation

- 📖 [Integration Guide](./SELF_PROTOCOL_INTEGRATION.md) - Complete setup and usage guide
- 🧪 [Testing Plan](./SELF_TESTING_PLAN.md) - Comprehensive testing procedures
- 🔗 [Self Protocol Docs](https://docs.self.xyz) - Official documentation

### Configuration

The integration uses these environment variables:
- `NEXT_PUBLIC_SELF_APP_NAME` - App name shown in Self app
- `NEXT_PUBLIC_SELF_SCOPE` - Unique identifier for your app
- `NEXT_PUBLIC_SELF_ENDPOINT` - Verification endpoint URL
- `NEXT_PUBLIC_SELF_ENDPOINT_TYPE` - `staging_https` for mock, `https` for production
- `SELF_USE_MOCK_PASSPORT` - `true` for testing, `false` for production

See `.env.example` for all configuration options.

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