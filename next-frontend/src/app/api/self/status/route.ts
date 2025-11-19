import { NextRequest, NextResponse } from 'next/server';

// In-memory store (shared with verify route)
// In production, this should be a database
const verificationStore = new Map<string, any>();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { address } = body;

    if (!address) {
      return NextResponse.json(
        { error: 'Address is required' },
        { status: 400 }
      );
    }

    // Check if user is verified
    const verificationData = verificationStore.get(address.toLowerCase());

    if (verificationData) {
      return NextResponse.json({
        verified: true,
        ...verificationData,
      });
    }

    return NextResponse.json({
      verified: false,
    });
  } catch (error) {
    console.error('Error checking verification status:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}