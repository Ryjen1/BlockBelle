# Vercel Deployment Troubleshooting Guide

## Problem
Next.js 16 deployment fails on Vercel with error:
```
Error: ENOENT: no such file or directory, open '/vercel/path0/next-frontend/.next/server/app/_global-error.rsc'
```

## Root Cause
Next.js 16 has a bug where it attempts to generate a React Server Component (RSC) file for global-error handling during the build process. Vercel's deployment packaging expects this file to exist, but Next.js doesn't generate it properly, causing the deployment to fail after a successful build.

## Solutions Attempted

### 1. ✅ Removed global-error.tsx (Commit: b47a0fa)
- **Action**: Deleted `next-frontend/src/app/global-error.tsx`
- **Reason**: Removing the file should prevent Next.js from trying to generate the RSC version
- **Result**: Failed - Next.js still generates `_global-error/` directory structure

### 2. ✅ Simplified vercel.json (Commit: 649b2ec)
- **Action**: Removed custom buildCommand from vercel.json
- **Reason**: Let Vercel use default Next.js detection with Root Directory set to `next-frontend`
- **Result**: Failed - Build succeeds but deployment packaging still fails

### 3. ✅ Added .env.production workaround (Commit: 24dc81e)
- **Action**: Created `.env.production` with `NEXT_PRIVATE_SKIP_GLOBAL_ERROR_PRERENDER=1`
- **Action**: Updated `next.config.ts` with additional skip flags
- **Reason**: Official Next.js workaround for this bug
- **Result**: Failed - Environment variable loads but doesn't prevent the error

## Current Configuration

### Project Structure
```
BlockBelle/
├── next-frontend/          # Main Next.js app (Vercel Root Directory)
│   ├── src/app/
│   ├── .env.production     # Production environment variables
│   ├── next.config.ts      # Next.js configuration
│   └── package.json
├── vite-frontend/          # Separate Vite app (not deployed)
├── vercel.json             # Vercel configuration
└── package.json            # Root package.json
```

### Vercel Settings
- **Root Directory**: `next-frontend`
- **Framework Preset**: Next.js
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)

### Files Modified

#### vercel.json
```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json"
}
```

#### next-frontend/.env.production
```env
NEXT_PRIVATE_SKIP_GLOBAL_ERROR_PRERENDER=1
```

#### next-frontend/next.config.ts
```typescript
experimental: {
  staticGenerationRetryCount: 0,
},
skipTrailingSlashRedirect: true,
skipMiddlewareUrlNormalize: true,
```

## Next Steps to Try

### Option 1: Create a stub _global-error.rsc file
Create the missing file manually in a postbuild script

### Option 2: Downgrade to Next.js 15
If Next.js 16 is not critical, downgrade to stable version

### Option 3: Use Vercel's output: 'standalone' mode
Modify next.config.ts to use standalone output mode

### Option 4: Custom Vercel build script
Override Vercel's default packaging behavior

## Build Logs Analysis
- ✅ Dependencies install successfully
- ✅ TypeScript compilation passes
- ✅ Build completes successfully
- ✅ Static pages generated
- ❌ Deployment packaging fails looking for `_global-error.rsc`

The issue occurs AFTER successful build during Vercel's "Traced Next.js server files" phase.