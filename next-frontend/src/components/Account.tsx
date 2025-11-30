'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { SelfQRcodeWrapper, SelfAppBuilder, countries } from '@selfxyz/qrcode';
import type { SelfApp } from '@selfxyz/qrcode';
import { useRegistration } from '@/hooks/useRegistration';
import { useSelfVerification } from '@/hooks/useSelfVerification';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

export default function Account() {
  const { address, isConnected } = useAccount();
  const { isRegistered, ensName } = useRegistration();
  const { verificationData, isLoading: isLoadingVerification, saveVerification } = useSelfVerification();
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
      endpoint: process.env.NEXT_PUBLIC_SELF_ENDPOINT || `${window.location.origin}/api/self/verify`,
      logoBase64: 'https://i.postimg.cc/mrmVf9hm/self.png',
      userId: address,
      endpointType: (process.env.NEXT_PUBLIC_SELF_ENDPOINT_TYPE as any) || 'staging_https',
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

        if(!isConnected || !address) {
          return (
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Account</h2>
              <p className="text-gray-600">Please connect your wallet to view your account.</p>
            </div>
          );
  }

  return (
    <div className="space-y-6">
      {/* Account Info */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Information</h2>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">Wallet Address</label>
            <p className="mt-1 text-sm text-gray-900 font-mono">{address}</p>
          </div>
          {isRegistered && ensName && (
            <div>
              <label className="block text-sm font-medium text-gray-700">ENS Name</label>
              <p className="mt-1 text-sm text-gray-900">{ensName}</p>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">Registration Status</label>
            <div className="mt-1 flex items-center">
              {isRegistered ? (
                <>
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-green-600 font-medium">Registered</span>
                </>
              ) : (
                <>
                  <XCircleIcon className="h-5 w-5 text-amber-500 mr-2" />
                  <span className="text-sm text-amber-600 font-medium">Not Registered</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Self Verification Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Identity Verification</h2>
        <p className="text-sm text-gray-600 mb-6">
          Verify your identity using Self Protocol to unlock additional features and build trust in the community.
        </p>

        {isLoadingVerification ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
        ) : verificationData.selfVerified ? (
          <div className="border border-green-200 bg-green-50 rounded-lg p-6">
            <div className="flex items-start">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Verified ✓</h3>
                <div className="space-y-2 text-sm text-green-800">
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
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md"
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
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
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
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-blue-900 mb-2">About Self Protocol</h3>
        <p className="text-xs text-blue-800">
          Self Protocol provides privacy-preserving identity verification using zero-knowledge proofs.
          Your personal information is never shared - only the verification result is confirmed on-chain.
        </p>
      </div>
    </div>
  );
}