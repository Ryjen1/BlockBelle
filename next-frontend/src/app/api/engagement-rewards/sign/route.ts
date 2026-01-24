import { NextRequest, NextResponse } from 'next/server';
import { createWalletClient, http, type Address } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { celo } from 'viem/chains';

// This would be your app's signing key - MUST be kept secret
// In production, use environment variables and never commit this

// Chata-Bella app address - WhisprChat contract approved on DEV
const CHATABELLA_APP_ADDRESS = '0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { user, inviter, validUntilBlock } = body;

    // Validate inputs
    if (!user || !inviter || !validUntilBlock) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // Check if we have a signing key configured
    // Read inside handler to ensure env vars are loaded
    let signingKey = process.env.APP_SIGNING_KEY;

    console.log('Debug: Checking API Key...');

    if (!signingKey) {
      console.error('CRITICAL: APP_SIGNING_KEY environment variable is missing!');
      return NextResponse.json(
        { error: 'Server configuration error: Key missing' },
        { status: 500 }
      );
    }

    // Clean the key
    signingKey = signingKey.trim();
    console.log(`Debug: Key loaded. Length: ${signingKey.length}. Starts with 0x: ${signingKey.startsWith('0x')}`);

    if (!signingKey.startsWith('0x')) {
      signingKey = `0x${signingKey}`;
    }

    const appPrivateKey = signingKey as `0x${string}`;

    // Create account from private key
    const account = privateKeyToAccount(appPrivateKey);

    // Create wallet client for signing
    const walletClient = createWalletClient({
      account,
      chain: celo,
      transport: http(),
    });

    // Message format for app signature
    const message = `Claim engagement reward from app ${CHATABELLA_APP_ADDRESS} for user ${user} with inviter ${inviter} valid until block ${validUntilBlock}`;

    // Sign the message
    const signature = await walletClient.signMessage({
      account,
      message,
    });

    return NextResponse.json({ signature });

  } catch (error: any) {
    console.error('Error signing engagement reward:', error);
    return NextResponse.json(
      { error: 'Failed to sign message', details: error.message },
      { status: 500 }
    );
  }
}