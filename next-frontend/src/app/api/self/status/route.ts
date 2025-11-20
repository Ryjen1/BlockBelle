import { NextRequest, NextResponse } from 'next/server';
import { getVerification } from '@/lib/db';

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

    // Check if user is verified in database
    const verificationData = await getVerification(address);

    return NextResponse.json(verificationData);
  } catch (error) {
    console.error('Error checking verification status:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}