# 🚨 URGENT: Apply for GoodDollar Engagement Rewards TODAY

## Quick Application Steps

### 1. Choose Environment

**For Testing (Recommended First)**:
- URL: https://engagement-rewards-dev.vercel.app/apply
- Anyone can approve
- Contract: `0xb44fC3A592aDaA257AECe1Ae8956019EA53d0465`

**For Production**:
- URL: https://engagement-rewards.vercel.app/apply
- Requires Good Labs approval
- Contract: `0x25db74CF4E7BA120526fd87e159CF656d94bAE43`

### 2. Application Form Details

Fill in exactly as shown:

**App Name**: 
```
BlockBelle
```

**App Address** (Your WhisprChat Contract):
```
0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C
```

**Description**:
```
BlockBelle is an elegant web3 chat platform designed for women in blockchain. Users can create verified profiles using ENS, participate in group chats, and claim UBI through GoodDollar integration. The engagement rewards incentivize user growth through referrals.
```

**Website/Social** (if asked):
```
https://blockbelle.vercel.app
```

### 3. After Submitting

#### For DEV Environment:
1. After submitting, you can approve your own app
2. Click "Approve" button
3. Confirm transaction
4. Wait for confirmation
5. You're ready to test!

#### For PROD Environment:
1. Wait for Good Labs team to review
2. They will approve if criteria met
3. You'll be notified when approved
4. Then you can go live!

### 4. Before Going Live

**Important Setup Steps**:

1. **Generate Signing Key**:
```bash
cd next-frontend
node scripts/generate-signing-key.js
```

2. **Create .env.local**:
```bash
cp .env.local.example .env.local
# Add the generated key
```

3. **Test on DEV First**:
- Apply and get approved on DEV
- Test full claim flow
- Verify rewards are distributed
- Check all error cases

4. **Then Apply to PROD**:
- Once DEV testing is successful
- Apply for production approval
- Wait for Good Labs review

## What You Need

✅ **Contract Deployed**: Yes - `0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C` (WhisprChat)
⚠️ **Contract Verified on Sourcify**: **REQUIRED!** See SOURCIFY_VERIFICATION.md
   - Check: https://sourcify.dev/#/lookup/0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C
   - If not verified, follow instructions in SOURCIFY_VERIFICATION.md first
✅ **Code Integration**: Complete ✅
✅ **Documentation**: Complete ✅

## ⚠️ IMPORTANT: Verify on Sourcify First!

Before applying, you **MUST** verify your contract on Sourcify:

1. Check if verified: https://sourcify.dev/#/lookup/0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C
2. If not verified, follow: **SOURCIFY_VERIFICATION.md**
3. Only apply after Sourcify verification is complete

## Application Checklist

- [ ] **Verify contract on Sourcify** (see SOURCIFY_VERIFICATION.md)
- [ ] Confirm verification at https://sourcify.dev/#/lookup/0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C
- [ ] Visit engagement rewards application page
- [ ] Connect wallet (must have CELO for gas)
- [ ] Fill in application form with details above
- [ ] Submit application
- [ ] (DEV only) Approve your app
- [ ] Generate signing key
- [ ] Setup .env.local
- [ ] Test claiming flow

## Quick Test After Approval

```bash
# 1. Generate key and setup env
node scripts/generate-signing-key.js
cp .env.local.example .env.local
# Edit .env.local with your key

# 2. Start dev server
npm run dev

# 3. Visit with referral
# Open: http://localhost:3000?ref=YOUR_WALLET_ADDRESS

# 4. Navigate to "GoodDollar" tab

# 5. Click "Claim Welcome Bonus"

# 6. Sign and confirm transaction
```

## Support

If you run into issues:
- **Dev Environment**: Self-service approval
- **Prod Environment**: Contact Good Labs on Discord/Telegram
- **Integration Issues**: Check QUICKSTART_ENGAGEMENT_REWARDS.md

## Important Notes

⚠️ **Apply TODAY**: You mentioned it's the deadline
⚠️ **Start with DEV**: Test everything first
⚠️ **Keep Key Secret**: Never commit APP_SIGNING_KEY
✅ **Already Verified**: Your contract is on Celo Mainnet

---

**Status**: Ready to apply! Go to the application URL now! 🚀