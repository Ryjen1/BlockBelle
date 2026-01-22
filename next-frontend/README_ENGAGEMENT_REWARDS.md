# GoodDollar Engagement Rewards Integration

This document explains the GoodDollar Engagement Rewards integration in BlockBelle.

## Overview

BlockBelle integrates with GoodDollar's Engagement Rewards program to provide incentives for user referrals. When a user invites a friend to BlockBelle, both parties receive G$ (GoodDollar tokens) as rewards.

## How It Works

1. **Referral Link**: Users share their unique referral link (e.g., `https://blockbelle.app?ref=0x123...`)
2. **New User Arrival**: When someone visits using a referral link, their inviter address is stored
3. **One-Time Claim**: New users can claim their welcome bonus (engagement reward) once
4. **Rewards Distribution**: 
   - New user receives ~63 G$ (70% of 90 G$)
   - Inviter receives ~27 G$ (30% of 90 G$)

## Components

### 1. Configuration (`src/config/engagement-rewards.ts`)
- Contract addresses (DEV and PROD)
- ABI definitions
- Default reward percentages
- Storage keys

### 2. Hook (`src/hooks/useEngagementRewards.ts`)
- Manages engagement rewards state
- Checks user eligibility
- Generates signatures
- Handles inviter address

### 3. UI Component (`src/components/EngagementRewardsClaim.tsx`)
- Displays welcome bonus card
- Handles claim transaction
- Shows eligibility status
- Error handling

### 4. API Route (`src/app/api/engagement-rewards/sign/route.ts`)
- Backend endpoint for app signature
- Signs claim requests
- Validates inputs

## Setup Instructions

### 1. Install Dependencies

```bash
cd next-frontend
npm install @goodsdks/engagement-sdk
```

### 2. Generate App Signing Key

Generate a new private key for signing:

```bash
node -e "console.log('0x' + require('crypto').randomBytes(32).toString('hex'))"
```

### 3. Configure Environment Variables

Create `.env.local` file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your signing key:

```
APP_SIGNING_KEY=0xYOUR_GENERATED_PRIVATE_KEY
```

**⚠️ IMPORTANT**: Never commit this key to git!

### 4. Register Your App

#### For Development Testing:
1. Visit https://engagement-rewards-dev.vercel.app/apply
2. Connect your wallet
3. Fill in application details:
   - App Name: BlockBelle
   - App Address: Your app contract or backend signing address
   - Description: Brief description of BlockBelle
4. Anyone can approve apps in DEV environment

#### For Production:
1. Deploy and verify your contract on Celo Mainnet
2. Visit https://engagement-rewards.vercel.app/apply
3. Submit application
4. Wait for Good Labs approval

## Contract Addresses

### Development (Celo Mainnet)
- Engagement Rewards: `0xb44fC3A592aDaA257AECe1Ae8956019EA53d0465`

### Production (Celo Mainnet)
- Engagement Rewards: `0x25db74CF4E7BA120526fd87e159CF656d94bAE43`

## User Requirements

For users to claim rewards, they must:
1. Have whitelisted status in GoodDollar Identity contract
2. Can verify at:
   - https://goodwallet.xyz
   - https://gooddapp.org
3. Be arriving via a referral link (?ref=ADDRESS)
4. Not have claimed from BlockBelle before
5. Have small gas fee (~$0.01 on Celo)

## Cooldown and Limits

- **User Cooldown**: 180 days between claims per app
- **App Reward Limit**: Maximum rewards per 180-day period
- **Cross-App Limit**: Users can claim from max 3 apps per 180-day period

## Testing Checklist

- [ ] User visits with ?ref= parameter
- [ ] Inviter address is stored and displayed
- [ ] Eligibility check works correctly
- [ ] User can sign claim message
- [ ] Backend signs app signature
- [ ] Transaction submits successfully
- [ ] Both parties receive rewards
- [ ] Already-claimed users see success message
- [ ] Error handling works properly

## Integration Flow

```
1. User visits: https://blockbelle.app?ref=0xINVITER
   └─> Inviter stored in localStorage

2. User connects wallet
   └─> Check if already claimed
   └─> Check eligibility

3. User clicks "Claim Welcome Bonus"
   └─> Get validUntilBlock (current + 600)
   └─> User signs message
   └─> Backend signs app message
   └─> Submit nonContractAppClaim transaction

4. Transaction confirmed
   └─> User and inviter receive G$
   └─> Mark as claimed
   └─> Show success message
```

## Troubleshooting

### User not eligible
- Ensure user is verified on GoodDollar
- Check if user has already claimed
- Verify app is registered and approved

### Signature errors
- Ensure APP_SIGNING_KEY is set correctly
- Check that signing logic matches GoodDollar format

### Transaction fails
- Verify gas fee is available
- Check contract addresses
- Ensure user meets all requirements

## Resources

- [Integration Guide](https://engagement-rewards.vercel.app/guide)
- [GoodDollar Docs](https://docs.gooddollar.org/)
- [Celo Explorer](https://celoscan.io/)

## Support

For issues with:
- **BlockBelle Integration**: Contact your dev team
- **GoodDollar Engagement**: Visit GoodDollar Discord/Telegram
- **App Registration**: Contact Good Labs