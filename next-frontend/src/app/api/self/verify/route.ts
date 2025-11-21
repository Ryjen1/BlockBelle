import { NextRequest, NextResponse } from 'next/server';
import { SelfBackendVerifier, DefaultConfigStore, AllIds } from '@selfxyz/core';
import { saveVerification, initDatabase } from '@/lib/db';

// Initialize Self Backend Verifier
const getSelfVerifier = () => {
  const scope = process.env.SELF_SCOPE || 'blockbelle-chat';
  const endpoint = process.env.SELF_ENDPOINT || `${process.env.NEXT_PUBLIC_BASE_URL}/api/self/verify`;
  const useMockPassport = process.env.SELF_USE_MOCK_PASSPORT === 'true';

  return new SelfBackendVerifier(
    scope,
    endpoint,
    useMockPassport,
    AllIds,
    new DefaultConfigStore({
      minimumAge: 18,
      excludedCountries: ['CUB', 'IRN', 'PRK', 'RUS'], // Cuba, Iran, North Korea, Russia
      ofac: false,
    }),
    'hex'
  );
};

export async function POST(request: NextRequest) {
  try {
    // Initialize database on first request (idempotent)
    await initDatabase();
    
    const body = await request.json();
    const { attestationId, proof, publicSignals, userContextData } = body;

    // Validate required fields
    if (!proof || !publicSignals || !attestationId || !userContextData) {
      return NextResponse.json(
        {
          status: 'error',
          result: false,
          reason: 'Proof, publicSignals, attestationId and userContextData are required',
        },
        { status: 200 }
      );
    }

    // Initialize verifier
    const selfBackendVerifier = getSelfVerifier();

    // Verify the proof
    const result = await selfBackendVerifier.verify(
      attestationId,
      proof,
      publicSignals,
      userContextData
    );

    const { isValid, isMinimumAgeValid } = result.isValidDetails;

    if (!isValid || !isMinimumAgeValid) {
      let reason = 'Verification failed';
      if (!isMinimumAgeValid) reason = 'Minimum age verification failed';

      return NextResponse.json(
        {
          status: 'error',
          result: false,
          reason,
        },
        { status: 200 }
      );
    }

    // Extract user identifier from userContextData
    const userIdentifier = result.userData?.userIdentifier;

    // Store verification result in database
    if (userIdentifier) {
      await saveVerification(userIdentifier, {
        verified: true,
        verifiedAt: new Date().toISOString(),
        selfDid: userIdentifier,
        attestationId,
        nationality: result.discloseOutput?.nationality,
        gender: result.discloseOutput?.gender,
        minimumAge: result.discloseOutput?.minimumAge,
      });
    }

    return NextResponse.json(
      {
        status: 'success',
        result: true,
        data: {
          nationality: result.discloseOutput?.nationality,
          gender: result.discloseOutput?.gender,
          minimumAge: result.discloseOutput?.minimumAge,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json(
      {
        status: 'error',
        result: false,
        reason: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 200 }
    );
  }
}