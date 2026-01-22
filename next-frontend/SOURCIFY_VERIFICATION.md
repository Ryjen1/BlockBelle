# 🔐 Verify WhisprChat Contract on Sourcify

## What is Sourcify?

Sourcify is a decentralized contract verification service. GoodDollar requires your contract to be verified on Sourcify before approving your app.

## Your Contract Details

- **Contract**: WhisprChat
- **Address**: `0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C`
- **Network**: Celo Mainnet (Chain ID: 42220)

## Step 1: Check if Already Verified

Visit: https://sourcify.dev/#/lookup/0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C

If it shows "Contract is verified!", you're done! ✅

If not verified, continue to Step 2.

## Step 2: Verify Your Contract

### Method A: Using Sourcify Web Interface (Easiest)

1. **Visit**: https://sourcify.dev/#/verifier

2. **Fill in details**:
   - **Contract Address**: `0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C`
   - **Chain**: Select "Celo Mainnet" or enter Chain ID `42220`

3. **Upload Files**:
   You need to upload your contract source files from the `contracts/src/` directory:
   - `WhisprChat.sol`
   - Any imported contracts/interfaces

4. **Submit** and wait for verification

### Method B: Using Hardhat/Foundry Plugin

If you used Hardhat or Foundry to deploy, you can use their Sourcify plugins.

#### For Foundry (forge):

```bash
cd contracts

# Verify on Sourcify
forge verify-contract \
  0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C \
  src/WhisprChat.sol:WhisprChat \
  --chain celo \
  --verifier sourcify
```

#### For Hardhat:

```bash
# Install plugin if not already installed
npm install --save-dev @nomiclabs/hardhat-etherscan

# Add to hardhat.config.js
# Then run:
npx hardhat verify --network celo 0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C
```

### Method C: Using Foundry's Verification Service

```bash
cd contracts

# Verify using forge
forge verify-contract \
  --chain-id 42220 \
  --num-of-optimizations 200 \
  --compiler-version v0.8.0 \
  0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C \
  src/WhisprChat.sol:WhisprChat \
  --verifier sourcify
```

## Step 3: Verify Success

After submission, check verification status at:
https://sourcify.dev/#/lookup/0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C

You should see:
- ✅ "Contract is verified!"
- Source code displayed
- ABI available

## Step 4: Proceed with GoodDollar Application

Once verified on Sourcify:
1. ✅ Contract verified on Sourcify
2. 🚀 Apply at: https://engagement-rewards-dev.vercel.app/apply
3. 📝 Use contract address: `0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C`

## Troubleshooting

### "Contract not found"
- Make sure you're using the correct network (Celo Mainnet)
- Verify the contract address is correct

### "Compilation failed"
- Ensure you're using the same compiler version used during deployment
- Check that all imported files are included
- Verify optimizer settings match deployment

### "Already verified on other service"
- If verified on Celoscan but not Sourcify, you'll need to verify on Sourcify specifically
- Sourcify uses IPFS for decentralized verification

## Need Source Files?

If you need to get your contract source files:

```bash
# They should be in your contracts directory
cd contracts/src/

# Check for WhisprChat.sol
ls -la WhisprChat.sol
```

## Important Notes

⚠️ **Sourcify vs Celoscan**: These are different verification services
- **Celoscan**: Centralized explorer verification
- **Sourcify**: Decentralized IPFS-based verification
- **GoodDollar requires**: Sourcify verification

✅ **After Verification**: Wait a few minutes for Sourcify to index, then proceed with GoodDollar application

## Resources

- Sourcify Homepage: https://sourcify.dev
- Sourcify Docs: https://docs.sourcify.dev
- Celo Explorer: https://celoscan.io/address/0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C

---

**Next Step**: Once verified, update APPLICATION_INSTRUCTIONS.md and apply for engagement rewards!