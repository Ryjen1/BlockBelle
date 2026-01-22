# GoodDollar Engagement Rewards - Troubleshooting Guide

## Common Error: "GoodDollar: user not whitelisted"

### What This Means

When someone tries to claim engagement rewards through your referral link and sees the error **"GoodDollar: user not whitelisted"**, it means:

1. ❌ The user is **not a verified GoodDollar user**
2. ❌ Their wallet address is **not whitelisted** in the GoodDollar system
3. ✅ They need to complete GoodDollar verification first

This is a **security feature** by GoodDollar to ensure fair distribution of rewards and prevent Sybil attacks.

---

## How Users Can Fix This

### Step 1: Download GoodDollar App

Users must download the official GoodDollar wallet:

- **Android**: [Google Play Store](https://play.google.com/store/apps/details?id=com.gooddollar)
- **iOS**: [Apple App Store](https://apps.apple.com/app/gooddollar/id1463678415)

### Step 2: Complete Face Verification (FV)

1. Open the GoodDollar app
2. Follow the onboarding process
3. Complete the **Face Verification (FV)** using FaceTec technology
4. This is a one-time process that proves the user is a unique human

**Tips for successful verification:**
- Use good lighting (face the light source)
- Remove glasses and hats
- Hold phone at eye level
- Follow on-screen instructions carefully

### Step 3: Wait for Confirmation

- After successful FV, the wallet will be whitelisted within 5-10 minutes
- Users will receive their first daily UBI (Universal Basic Income) claim in the app
- Once confirmed, they can return to Chata-Bella to claim engagement rewards

### Step 4: Return to Chata-Bella

- Come back to the Chata-Bella app
- Connect the **same wallet** that was verified
- Click the claim button again
- The transaction should now succeed ✅

---

## Why This Requirement Exists

GoodDollar uses face verification to ensure:

1. **One person = One wallet**: Prevents people from creating multiple accounts
2. **Fair distribution**: Rewards go to real, unique humans
3. **Sybil resistance**: Protects against bot attacks and reward farming
4. **Privacy preserved**: Biometric data never leaves the device (zero-knowledge proofs)

---

## For Developers: Detecting and Handling This Error

### Error Detection

```typescript
try {
  // Attempt claim transaction
  await writeContractAsync({ ... });
} catch (error: any) {
  const errorMessage = error.message || error.toString() || '';
  
  // Check if it's a whitelisting error
  const isWhitelistError = 
    errorMessage.toLowerCase().includes('not whitelisted') || 
    errorMessage.toLowerCase().includes('user not whitelisted');
  
  if (isWhitelistError) {
    // Show verification guide to user
    showVerificationGuide();
  } else {
    // Handle other errors
    console.error('Claim error:', error);
  }
}
```

### User Experience Improvements

The app now includes:

1. **GoodDollarVerificationGuide** component - Step-by-step verification instructions
2. **Enhanced error messages** - Clear, actionable guidance
3. **Info banner** - Proactive notification when users arrive via referral link
4. **Better error detection** - Automatically identifies whitelisting errors

---

## Testing the Integration

### Test with Verified Users

To test the full claim flow, you need users who are:

1. ✅ Verified on GoodDollar (completed FV)
2. ✅ Have whitelisted wallet addresses
3. ✅ Haven't claimed from your app before (or it's been 180 days)

### Test Environments

- **DEV Contract**: Use for testing - allows anyone to approve apps
  - Address: `0xb44fC3A592aDaA257AECe1Ae8956019EA53d0465`
  
- **PROD Contract**: Requires Good Labs approval
  - Address: `0x25db74CF4E7BA120526fd87e159CF656d94bAE43`

### Testing Checklist

- [ ] App registered on engagement rewards contract
- [ ] User has completed GoodDollar verification
- [ ] User connects the same wallet used for GoodDollar
- [ ] User hasn't claimed before (or cooldown has passed)
- [ ] Inviter address is valid and set correctly
- [ ] Backend signing API is working
- [ ] Sufficient gas available for transaction

---

## Additional Resources

- **GoodDollar Website**: https://www.gooddollar.org
- **Engagement Rewards Guide**: https://engagement-rewards.vercel.app/guide
- **GoodDollar FAQ**: https://www.gooddollar.org/faq
- **Help Center**: https://help.gooddollar.org
- **Telegram Community**: https://t.me/GoodDollarX

---

## FAQ

### Q: How long does verification take?

**A**: Face verification takes 2-3 minutes. Whitelisting typically happens within 5-10 minutes after successful verification.

### Q: Can users verify with a different wallet?

**A**: Yes, but they must connect to Chata-Bella with the **same wallet** they verified with GoodDollar.

### Q: What if verification fails?

**A**: Users should:
1. Ensure good lighting conditions
2. Follow on-screen instructions carefully
3. Try again if the first attempt fails
4. Contact GoodDollar support if issues persist

### Q: Is there a cost to verify?

**A**: No! GoodDollar verification is completely free. Only the claim transaction requires a small gas fee (~$0.01 on Celo).

### Q: How often can users claim?

**A**: Once per app, per 180 days (6 months).

### Q: Can I test without verifying?

**A**: No - the smart contract requires users to be whitelisted. You need actual verified GoodDollar users for end-to-end testing.

---

## Need Help?

If you encounter issues beyond whitelisting errors:

1. Check the [integration test page](/test-integration) for diagnostics
2. Review transaction on [Celoscan](https://celoscan.io)
3. Join the [GoodDollar Telegram](https://t.me/GoodDollarX) community
4. Contact GoodDollar support through their [help center](https://help.gooddollar.org)