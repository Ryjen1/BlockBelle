'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { SelfQRcodeWrapper, SelfAppBuilder, countries } from '@selfxyz/qrcode';
import type { SelfApp } from '@selfxyz/qrcode';
import { useRegistration } from '@/hooks/useRegistration';
import { useSelfVerification } from '@/hooks/useSelfVerification';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import Tier3Badge from '@/components/Tier3Badge';

export default function Account() {
  const { address, isConnected } = useAccount();
  const { isRegistered, ensName } = useRegistration();
  const { verificationData, isLoading: isLoadingVerification, refreshVerification } = useSelfVerification();
  const [selfApp, setSelfApp] = useState<SelfApp | null>(null);
  const [showQRCode, setShowQRCode] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    if (!address || !isConnected) {
      setSelfApp(null);
      return;
    }

    // Initialize Self App
    const app = new SelfAppBuilder({
      version: 2,
      appName: process.env.NEXT_PUBLIC_SELF_APP_NAME || 'BlockBelle',
      scope: process.env.NEXT_PUBLIC_SELF_SCOPE || 'blockbelle-chat',
      endpoint: '0x802116977C25b9C4987A07Ab516C4724f36F3043', // Deployed ProofOfHuman contract
      logoBase64: 'https://i.postimg.cc/mrmVf9hm/self.png',
      userId: address,
      endpointType: 'celo', // Celo Mainnet
      userIdType: 'hex',
      userDefinedData: `BlockBelle verification for ${ensName || address}`,
      disclosures: {
        minimumAge: 18,
        excludedCountries: [
          countries.CUBA,
          countries.IRAN,
          countries.NORTH_KOREA,
          countries.RUSSIA,
        ],
        nationality: true,
        gender: true,
      },
    }).build();

    setSelfApp(app);
  }, [address, isConnected, ensName]);

  const handleSuccessfulVerification = async () => {
    setIsVerifying(true);
    try {
      // Wait a bit for the backend to process the verification
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Refresh verification status from backend API
      await refreshVerification();

      // Close QR code modal if verification successful
      if (verificationData.selfVerified) {
        setShowQRCode(false);
      }
    } catch (error) {
      console.error('Error fetching verification status:', error);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleVerificationError = (error: { error_code?: string; reason?: string }) => {
    console.error('Verification error:', error);
    setIsVerifying(false);
  };

  if (!isConnected || !address) {
    return (
      <div className="bg-gradient-to-br from-blockbelle-pink/10 via-blockbelle-purple/10 to-blockbelle-indigo/10 shadow-lg rounded-xl p-6 border border-blockbelle-purple/20">
        <h2 className="text-2xl font-bold text-gradient-blockbelle mb-4">Account</h2>
        <p className="text-gray-600">Please connect your wallet to view your account.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Account Info */}
      <div className="bg-gradient-to-br from-blockbelle-pink/10 via-blockbelle-purple/10 to-blockbelle-indigo/10 shadow-lg rounded-xl p-6 border border-blockbelle-purple/20">
        <h2 className="text-2xl font-bold text-gradient-blockbelle mb-4">Account Information</h2>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-blockbelle-purple">Wallet Address</label>
            <p className="mt-1 text-sm text-gray-900 font-mono">{address}</p>
          </div>
          {isRegistered && ensName && (
            <div>
              <label className="block text-sm font-medium text-blockbelle-purple">ENS Name</label>
              <div className="mt-1 flex items-center gap-2">
                <p className="text-sm text-gray-900">{ensName}</p>
                {verificationData.selfVerified && <Tier3Badge size="sm" />}
              </div>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-blockbelle-purple">Registration Status</label>
            <div className="mt-1 flex items-center">
              {isRegistered ? (
                <>
                  <CheckCircleIcon className="h-5 w-5 text-blockbelle-pink mr-2" />
                  <span className="text-sm text-blockbelle-pink font-medium">Registered</span>
                </>
              ) : (
                <>
                  <XCircleIcon className="h-5 w-5 text-amber-500 mr-2" />
                  <span className="text-sm text-amber-600 font-medium">Not Registered</span>
                </>
              )}
            </div>
          </div>
          {verificationData.selfVerified && (
            <div>
              <label className="block text-sm font-medium text-blockbelle-purple">Verification Tier</label>
              <div className="mt-1">
                <Tier3Badge size="md" showLabel={true} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Self Verification Section */}
      <div className="bg-gradient-to-br from-blockbelle-pink/10 via-blockbelle-purple/10 to-blockbelle-indigo/10 shadow-lg rounded-xl p-6 border border-blockbelle-purple/20">
        <h2 className="text-2xl font-bold text-gradient-blockbelle mb-4">Identity Verification</h2>
        <p className="text-sm text-gray-600 mb-6">
          Verify your identity using Self Protocol to unlock <span className="font-semibold text-blockbelle-purple">Tier 3 status</span> and build trust in the community.
        </p>

        {isLoadingVerification ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blockbelle-purple"></div>
          </div>
        ) : verificationData.selfVerified ? (
          <div className="border-2 border-blockbelle-gold bg-gradient-to-br from-blockbelle-gold/10 to-blockbelle-gold/5 rounded-xl p-6 shadow-lg">
            <div className="flex items-start">
              <div className="mr-3 mt-0.5">
                <Tier3Badge size="lg" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-blockbelle-purple">Tier 3 - Verified</h3>
                  <CheckCircleIcon className="h-5 w-5 text-blockbelle-pink" />
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <span className="font-medium">Verified At:</span>{' '}
                    {verificationData.verifiedAt
                      ? new Date(verificationData.verifiedAt).toLocaleString()
                      : 'N/A'}
                  </p>
                  {verificationData.nationality && (
                    <p>
                      <span className="font-medium">Nationality:</span> {verificationData.nationality}
                    </p>
                  )}
                  {verificationData.gender && (
                    <p>
                      <span className="font-medium">Gender:</span> {verificationData.gender}
                    </p>
                  )}
                  {verificationData.minimumAge && (
                    <p>
                      <span className="font-medium">Age Verification:</span> 18+ confirmed
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {!showQRCode ? (
              <div>
                <button
                  onClick={() => setShowQRCode(true)}
                  className="gradient-blockbelle hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Verify with Self Protocol
                </button>
                <p className="mt-3 text-xs text-gray-500">
                  You'll need the Self mobile app to complete verification. Download it from your app store.
                </p>
              </div>
            ) : (
              <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Scan QR Code</h3>
                  <button
                    onClick={() => setShowQRCode(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XCircleIcon className="h-6 w-6" />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Open the Self app on your mobile device and scan this QR code to verify your identity.
                </p>
                {selfApp && (
                  <div className="flex justify-center">
                    {isVerifying ? (
                      <div className="text-center py-8">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blockbelle-purple mx-auto mb-4"></div>
                        <p className="text-sm text-gray-600">Processing verification...</p>
                      </div>
                    ) : (
                      <SelfQRcodeWrapper
                        selfApp={selfApp}
                        onSuccess={handleSuccessfulVerification}
                        onError={handleVerificationError}
                        size={300}
                        darkMode={false}
                      />
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Additional Info */}
      <div className="bg-gradient-to-br from-blockbelle-purple/10 to-blockbelle-indigo/10 border border-blockbelle-purple/30 rounded-xl p-4">
        <h3 className="text-sm font-semibold text-blockbelle-purple mb-2">About Self Protocol & Tier 3</h3>
        <p className="text-xs text-gray-700 mb-2">
          Self Protocol provides privacy-preserving identity verification using zero-knowledge proofs.
          Your personal information is never shared - only the verification result is confirmed on-chain.
        </p>
        <p className="text-xs text-blockbelle-purple font-medium">
          ✨ Tier 3 users display a crown badge next to their username, indicating verified identity status.
        </p>
      </div>
    </div>
  );
}