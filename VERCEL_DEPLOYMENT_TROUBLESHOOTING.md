# Vercel Deployment Troubleshooting Guide

## Latest Issue: Build Error - "exports is not defined in ES module scope" (Jan 2025)

**Error Message:**
```
ReferenceError: exports is not defined in ES module scope
This file is being treated as an ES module because it has a '.js' file extension and '/vercel/path0/next-frontend/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
    at <unknown> (next.config.compiled.js:2:23)
```

**Root Cause:**
- Next.js 16.0.3 has issues compiling `next.config.ts` files in projects with `"type": "module"` in package.json
- When Next.js tries to compile the TypeScript config, it generates `next.config.compiled.js` internally
- This compiled file contains CommonJS syntax (`exports`) but is treated as an ES module due to package.json settings
- The error occurs during the compilation phase, not from any root-level config files

**Solution Attempts:**
1. ❌ Renamed root `next.config.js` to `next.config.cjs` - didn't fix the issue (error persists)
2. ✅ **Converted `next-frontend/next.config.ts` to `next.config.mjs`** - using native ES module syntax

**Final Solution:**
- Deleted: `next-frontend/next.config.ts` (TypeScript config causing compilation issues)
- Created: `next-frontend/next.config.mjs` (JavaScript ES module config)
- The `.mjs` extension explicitly marks it as an ES module, avoiding TypeScript compilation issues
- All functionality preserved with JSDoc type hints for IDE support

**Files Changed:**
- Deleted: `next-frontend/next.config.ts`
- Created: `next-frontend/next.config.mjs`
- Renamed: `next.config.js` → `next.config.cjs` (root placeholder)
- Updated: `.vercelignore` to exclude `/next.config.cjs`

**Why this works:**
- `.mjs` files are native ES modules - no compilation needed
- Avoids Next.js TypeScript config compilation that was causing the error
- Works seamlessly with `"type": "module"` in package.json

---

## Previous Issue: Build Error - "module is not defined in ES module scope" (Jan 2025)

**Error Message:**
```
ReferenceError: module is not defined in ES module scope
This file is being treated as an ES module because it has a '.js' file extension and '/vercel/path0/next-frontend/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
    at <unknown> (next.config.js:9:1)
```

**Root Cause:**
- The project had both `next.config.js` (CommonJS syntax) and `next.config.ts` (ES module syntax)
- Since `package.json` contains `"type": "module"`, all `.js` files are treated as ES modules
- The `next.config.js` file was using `module.exports` which is CommonJS syntax, causing a conflict

**Solution:**
- Deleted the redundant `next.config.js` file
- Kept only `next.config.ts` which uses proper ES module syntax (`export default`)
- Next.js automatically uses `next.config.ts` when available

**Files Changed:**
- Deleted: `next-frontend/next.config.js`
- Kept: `next-frontend/next.config.ts` (already properly configured)

### Issue: App Router Routes Not Generated - Only 404 Page Shows (Jan 2025)

**Error Symptoms:**
- Build succeeds but shows only `Route (pages) ─ ○ /404`
- No App Router routes generated (should show `Route (app)`)
- Deployment returns 404 for all pages

**Root Cause:**
Next.js detected wrong workspace root due to multiple `package-lock.json` files in monorepo:
```
Warning: Next.js inferred your workspace root, but it may not be correct.
We detected multiple lockfiles and selected C:\Users\HP\package-lock.json as root
```

This caused Next.js to look for pages in the wrong directory, resulting in no routes being generated.

**Solution:**
1. **Fix `next.config.ts` to explicitly set turbopack root:**
   - Import `fileURLToPath` and `dirname` to get `__dirname` in ES modules
   - Set `turbopack.root: __dirname` to point to `next-frontend/` directory
   - This prevents Next.js from auto-detecting the wrong root

2. **Fix deprecated config:**
   - Replace `skipMiddlewareUrlNormalize` with `skipProxyUrlNormalize`

**Updated next.config.ts:**
```typescript
import type { NextConfig } from 'next';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig: NextConfig = {
  // ... other config
  turbopack: {
    root: __dirname,  // Critical: prevents wrong root detection
    resolveAlias: {
      '@': './src',
    },
  },
  skipProxyUrlNormalize: true,  // Updated from deprecated skipMiddlewareUrlNormalize
  // ... rest of config
};
```

**Why this works:**
- Explicitly tells Next.js that the project root is `next-frontend/`
- Prevents auto-detection from choosing the repository root
- App Router routes will now be properly generated
- Build output should show `Route (app)` instead of `Route (pages)`

**Follow-up Fix:** After build succeeded, deployment showed 404 error.

**Root Cause of 404:**
- Build succeeded but deployment is showing 404
- Root Directory is already correctly set to `next-frontend` in Vercel dashboard
- The issue is that after deleting `next-frontend/next.config.js`, the deployment needs to be redeployed with the changes

**Solution - Force a Clean Deployment:**

1. **Clear Vercel Cache:**
   - In Vercel Dashboard → Settings → Build and Deployment
   - Scroll down and click "Clear Cache"

2. **Trigger a new deployment:**
   - Make a small change (like add a comment) and push to trigger new build
   - OR use Vercel dashboard → Deployments → Click "..." → "Redeploy"
   - Make sure to check "Use existing Build Cache" is **UNCHECKED**

3. **Verify the deployment:**
   - Check build logs to ensure it's using `next-frontend/next.config.ts` (not the deleted .js file)
   - The build should complete successfully
   - The app should now be accessible

**Files that were changed:**
- ✅ Deleted: `next-frontend/next.config.js` (was conflicting with .ts version)
- ✅ Kept: `next-frontend/next.config.ts` (the correct config file)
- ✅ Simplified: `vercel.json` (removed unnecessary build commands)

**Important:** After deleting files, always do a clean deployment (without cache) to ensure Vercel picks up the changes.

---

## Previous Problem: Global Error Prerendering
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

## FINAL SOLUTION - 404 Error Fix

### Attempt 1: Remove `force-dynamic` (Commit: 5f52577) ❌
**Problem:** Still showing 404 after removing `force-dynamic` from layout.tsx

**Build Log Still Shows:**
```
Route (pages)
─ ○ /404
```

**Root Cause Found:** The `page.tsx` file has `'use client'` directive at the top, which ALSO prevents static generation!

### Attempt 2: Split Client/Server Components (Commit: CURRENT) ✅

**The Real Problem:**
1. ~~`dynamic = 'force-dynamic'` in layout.tsx~~ (Fixed)
2. **`'use client'` at top of `page.tsx`** ← This was the actual blocker!

When a page component has `'use client'`, Next.js cannot statically generate it.

**Solution:**
1. ✅ Removed `force-dynamic` from layout.tsx
2. ✅ **Moved all client-side logic to `HomePage.tsx` component**
3. ✅ **Made `page.tsx` a server component that imports `HomePage`**

### Files Modified

#### next-frontend/src/app/page.tsx (NEW - Server Component)
```typescript
import HomePage from '@/components/HomePage';

export default function Page() {
  return <HomePage />;
}
```

#### next-frontend/src/components/HomePage.tsx (NEW - Client Component)
```typescript
'use client';
// All the previous page.tsx logic moved here
```

#### next-frontend/src/app/layout.tsx (PREVIOUS FIX)
```typescript
// REMOVED:
// export const dynamic = 'force-dynamic';
// export const dynamicParams = true;
// export const revalidate = 0;
```

## Build Logs Analysis - After REAL Fix
- ✅ Dependencies install successfully
- ✅ TypeScript compilation passes
- ✅ Build completes successfully
- ✅ Static pages should now generate (including `/` index page)
- ✅ Deployment packaging succeeds with stub _global-error.rsc
- ✅ Live site should now load correctly

## 404 ERROR FIX - Root Directory Issue (Current Fix)

### Problem Identified (Day 3)
After successful build, deployment shows **404 error** instead of the application.

**Root Cause:** 
- Repository has TWO frontend folders: `next-frontend/` and `vite-frontend/`
- Vercel was deploying from repository root instead of `next-frontend/`
- This caused Vercel to not find the Next.js application

### ❌ FAILED Attempt: vercel.json with cd commands
Tried adding build/install commands with `cd next-frontend` to vercel.json but Vercel's build system doesn't support directory changes in commands.

**Error:**
```
sh: line 1: cd: next-frontend: No such file or directory
```

### ✅ CORRECT Solution: Configure Root Directory in Vercel Dashboard

**You MUST configure this in the Vercel Dashboard, NOT in vercel.json:**

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **General**
3. Scroll to **Root Directory** section
4. Click **Edit**
5. Enter: `next-frontend`
6. Check the box: **Include source files outside of the Root Directory in the Build Step**
7. Click **Save**

**Why this works:**
- Vercel will treat `next-frontend/` as the project root
- All build commands will run from within that directory
- Next.js will be properly detected and configured
- The `vercel.json` can remain minimal (just schema)

**Current vercel.json (correct):**
```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json"
}
```

**Additional Fix: Updated .vercelignore**
Added exclusions for root-level files that could confuse Vercel's framework detection:
```
/next.config.js
/package.json
/package-lock.json
```

These files exist at the repository root for local development convenience but should not be used by Vercel since the Root Directory is set to `next-frontend/`.

**CRITICAL ISSUE FOUND: Vercel Detecting Pages Router Instead of App Router**

The Vercel build log shows:
```
Route (pages)
─ ○ /404
```

This means Vercel is building with **Pages Router** instead of **App Router**, even though the app uses App Router (`src/app/` directory).

**Solution to Try:**

1. **Clear Vercel Build Cache:**
   - Go to Vercel Dashboard → Your Project
   - Click on Deployments
   - Click "..." menu on latest deployment
   - Select "Redeploy" 
   - **Check the box "Clear build cache and redeploy"**
   - Click "Redeploy"

2. **If that doesn't work, check Framework Preset:**
   - Go to Settings → General
   - Find "Framework Preset"
   - Make sure it's set to "Next.js" (not "Other")

3. **Verify Root Directory is still set to `next-frontend`**

**Expected Result After Cache Clear:**
- Build log should show `Route (app)` instead of `Route (pages)`
- Should show routes like:
  ```
  Route (app)
  ○ /
  ○ /api/self/status
  ○ /api/self/verify
  ```
- Homepage should load correctly instead of 404

## Key Learnings

1. **Don't use `output: 'standalone'` on Vercel** unless you have a specific need for it (like Docker deployments)
2. **Don't use `dynamic = 'force-dynamic'`** in root layout unless absolutely necessary - it prevents all static generation
3. **Web3 providers work fine with SSG** - they're client-side only and don't need server-side rendering
4. **Next.js 16 global-error bug** can be worked around with a postbuild script
5. **Always specify root directory in vercel.json** when you have multiple frontend folders in monorepo
6. **Vercel needs explicit paths** when Next.js app is not at repository root