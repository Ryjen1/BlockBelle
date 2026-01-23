# Quick Start: GoodDollar Engagement Rewards

## 🚀 Get Started in 5 Minutes

### Step 1: Generate Your Signing Key

```bash
cd next-frontend
node scripts/generate-signing-key.js
```

Copy the generated key.

### Step 2: Create Environment File

```bash
# Copy the example file
cp .env.local.example .env.local

# Edit and add your key
# APP_SIGNING_KEY=0xYOUR_KEY_HERE
```

### Step 3: Register Your App (Development)

1. Visit: https://engagement-rewards-dev.vercel.app/apply
2. Connect your wallet
3. Fill in:
   - **App Name**: BlockBelle
   - **App Address**: `0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C` (WhisprChat contract)
   - **Description**: "Web3 chat platform for women in blockchain"
4. Submit and approve (anyone can approve in DEV)

### Step 4: Test the Integration

1. Start your dev server:
```bash
npm run dev
```

2. Visit with a referral link:
```
http://localhost:3000?ref=0xYOUR_WALLET_ADDRESS
```

3. Connect wallet and navigate to "GoodDollar" tab

4. Click "Claim Welcome Bonus" button

5. Sign the message and confirm transaction

### Step 5: Verify Rewards

- Check user balance at: https://celoscan.io/address/YOUR_ADDRESS
- Verify engagement rewards contract: https://celoscan.io/address/0xb44fC3A592aDaA257AECe1Ae8956019EA53d0465

## 📋 Pre-requisites

- User must be verified on GoodDollar (https://goodwallet.xyz)
- User needs small gas fee (~$0.01 worth of CELO)
- App must be registered and approved

## 🎯 Features Implemented

✅ Automatic inviter detection from URL (?ref=ADDRESS)
✅ Eligibility checking
✅ User signature generation
✅ Backend app signature via API route
✅ Transaction submission and tracking
✅ Success/error handling
✅ Persistent state (localStorage)
✅ UI components integrated

## 🔧 Configuration

Edit `src/config/engagement-rewards.ts` to:
- Switch between DEV and PROD contracts
- Adjust reward percentages
- Modify app address

## 📱 User Flow

1. **Inviter shares link**: `https://blockbelle.app?ref=0xINVITER`
2. **New user visits**: Inviter stored automatically
3. **User connects wallet**: Eligibility checked
4. **User clicks claim**: Signs message → Backend signs → Transaction submitted
5. **Rewards distributed**: Both parties receive G$ tokens
6. **Success shown**: Card displays confirmation

## 🛠️ Troubleshooting

### "App not registered" error
→ Register your app at engagement-rewards-dev.vercel.app/apply

### "User not eligible" error
→ Ensure user is verified on GoodDollar

### "Failed to get app signature" error
→ Check APP_SIGNING_KEY in .env.local

### Transaction fails
→ Ensure user has CELO for gas
→ Check user hasn't claimed before

## 📚 Important Files

- `src/config/engagement-rewards.ts` - Configuration
- `src/hooks/useEngagementRewards.ts` - Main logic hook
- `src/components/EngagementRewardsClaim.tsx` - UI component
- `src/app/api/engagement-rewards/sign/route.ts` - Backend signing
- `.env.local` - Environment variables (keep secret!)

## 🚨 Security Reminders

- **NEVER** commit APP_SIGNING_KEY to git
- Use different keys for dev and production
- Keep .env.local in .gitignore
- Rotate keys periodically

## 🎉 You're Ready!

Your GoodDollar Engagement Rewards integration is complete. Start sharing referral links and earning rewards!