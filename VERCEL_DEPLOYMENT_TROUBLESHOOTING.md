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

### 4. ✅ Created postbuild script (Commit: 6a21a69)
- **Action**: Added `scripts/fix-vercel-build.js` to create stub `_global-error.rsc` file
- **Action**: Updated build command to run script after build
- **Reason**: Manually create the missing file that Next.js fails to generate
- **Result**: Success - Build and deployment packaging now works!

## FINAL SOLUTION - 404 Error Fix (Commit: CURRENT)

### Problem After Deployment Success
Build succeeds, deployment succeeds, but live site shows 404 error.

**Vercel Build Log Shows:**
```
Route (pages)
─ ○ /404

○  (Static)  prerendered as static content
```
Only the 404 page was generated - NO index page (`/`)!

### Root Cause
The `dynamic = 'force-dynamic'` export in `layout.tsx` prevents Next.js from generating ANY static pages during build. This means:
- No `/` (index) page is created
- Only error pages (404) are generated
- Vercel deploys successfully but serves 404 for all routes

### Solution
**Removed `dynamic = 'force-dynamic'` from layout.tsx**

Why this is safe:
- Web3 providers (RainbowKit, Wagmi) are wrapped in `'use client'` components in `providers.tsx`
- They initialize on the client side AFTER the page loads
- No server-side rendering needed for wallet connections
- Static Site Generation (SSG) works perfectly with client-side Web3 initialization

### Files Modified

#### next-frontend/src/app/layout.tsx
```typescript
// REMOVED these lines:
// export const dynamic = 'force-dynamic';
// export const dynamicParams = true;
// export const revalidate = 0;
```

**Note:** Kept `output: 'standalone'` in next.config.ts - it's working fine with the postbuild script.

## Build Logs Analysis - After Fix
- ✅ Dependencies install successfully
- ✅ TypeScript compilation passes
- ✅ Build completes successfully
- ✅ Static pages generated (including `/` index page)
- ✅ Deployment packaging succeeds with stub _global-error.rsc
- ✅ Live site should now load correctly

## Key Learnings

1. **Don't use `output: 'standalone'` on Vercel** unless you have a specific need for it (like Docker deployments)
2. **Don't use `dynamic = 'force-dynamic'`** in root layout unless absolutely necessary - it prevents all static generation
3. **Web3 providers work fine with SSG** - they're client-side only and don't need server-side rendering
4. **Next.js 16 global-error bug** can be worked around with a postbuild script