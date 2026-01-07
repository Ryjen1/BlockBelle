import { NextRequest, NextResponse } from 'next/server';
import { createWalletClient, http, type Address } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { celo } from 'viem/chains';

// This would be your app's signing key - MUST be kept secret
// In production, use environment variables and never commit this
const APP_PRIVATE_KEY = process.env.APP_SIGNING_KEY as `0x${string}`;

// BlockBelle app address - WhisprChat contract (core app)
const BLOCKBELLE_APP_ADDRESS = '0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C';

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
    if (!APP_PRIVATE_KEY) {
      console.error('APP_SIGNING_KEY not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Create account from private key
    const account = privateKeyToAccount(APP_PRIVATE_KEY);

    // Create wallet client for signing
    const walletClient = createWalletClient({
      account,
      chain: celo,
      transport: http(),
    });

    // Message format for app signature
    const message = `Claim engagement reward from app ${BLOCKBELLE_APP_ADDRESS} for user ${user} with inviter ${inviter} valid until block ${validUntilBlock}`;

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