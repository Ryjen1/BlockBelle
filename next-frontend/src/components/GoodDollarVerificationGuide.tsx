'use client';

import { ExclamationTriangleIcon, CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface GoodDollarVerificationGuideProps {
  onClose?: () => void;
}

export default function GoodDollarVerificationGuide({ onClose }: GoodDollarVerificationGuideProps) {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 border-2 border-yellow-300 rounded-xl p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-yellow-400 p-3 rounded-lg">
            <ExclamationTriangleIcon className="h-6 w-6 text-yellow-900" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Verification Required</h3>
            <p className="text-sm text-gray-600">Complete GoodDollar verification to claim rewards</p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Why This Happened */}
      <div className="bg-white/80 rounded-lg p-4 mb-4 border border-yellow-200">
        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
          <span className="text-yellow-500 mr-2">⚠️</span>
          Why did this happen?
        </h4>
        <p className="text-sm text-gray-700 leading-relaxed">
          To receive GoodDollar engagement rewards, you must be a <strong>verified GoodDollar user</strong>. 
          This ensures fair distribution of rewards and prevents abuse. Your wallet address isn't yet whitelisted 
          in the GoodDollar system.
        </p>
      </div>

      {/* Step-by-step Guide */}
      <div className="bg-white/80 rounded-lg p-4 mb-4 border border-orange-200">
        <h4 className="font-semibold text-gray-900 mb-3">How to get verified:</h4>
        
        <div className="space-y-4">
          {/* Step 1 */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              1
            </div>
            <div className="flex-1">
              <h5 className="font-medium text-gray-900 mb-1">Download GoodDollar App</h5>
              <p className="text-sm text-gray-600 mb-2">
                Get the official GoodDollar wallet app on your mobile device:
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.gooddollar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Google Play
                </a>
                <a
                  href="https://apps.apple.com/app/gooddollar/id1463678415"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  App Store
                </a>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              2
            </div>
            <div className="flex-1">
              <h5 className="font-medium text-gray-900 mb-1">Complete Face Verification (FV)</h5>
              <p className="text-sm text-gray-600 mb-2">
                Open the GoodDollar app and complete the face verification process. This is a one-time verification 
                that uses FaceTec's liveness detection to prove you're a unique human.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
                <p className="font-medium mb-1">💡 Tips for successful verification:</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Use good lighting (face the light source)</li>
                  <li>Remove glasses and hats</li>
                  <li>Hold phone at eye level</li>
                  <li>Follow on-screen instructions carefully</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-pink-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              3
            </div>
            <div className="flex-1">
              <h5 className="font-medium text-gray-900 mb-1">Wait for Confirmation</h5>
              <p className="text-sm text-gray-600 mb-2">
                After completing face verification, your wallet will be whitelisted within a few minutes. 
                You'll receive your daily UBI (Universal Basic Income) claim in the app.
              </p>
              <div className="flex items-center space-x-2 text-sm text-green-700">
                <CheckCircleIcon className="h-4 w-4" />
                <span>Usually takes 5-10 minutes</span>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              4
            </div>
            <div className="flex-1">
              <h5 className="font-medium text-gray-900 mb-1">Return to Chata-Bella</h5>
              <p className="text-sm text-gray-600">
                Once you're verified and whitelisted, come back to Chata-Bella and click the claim button again. 
                You'll be able to claim your welcome bonus!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notes */}
      <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 mb-4">
        <h4 className="font-semibold text-pink-900 mb-2 flex items-center">
          <span className="mr-2">📌</span>
          Important to know:
        </h4>
        <ul className="space-y-2 text-sm text-pink-800">
          <li className="flex items-start">
            <span className="mr-2 flex-shrink-0">•</span>
            <span><strong>One-time verification:</strong> You only need to verify once with GoodDollar</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 flex-shrink-0">•</span>
            <span><strong>Same wallet required:</strong> Use the same wallet address that you'll connect to Chata-Bella</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 flex-shrink-0">•</span>
            <span><strong>Privacy protected:</strong> GoodDollar uses zero-knowledge proofs - your biometric data never leaves your device</span>
          </li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="https://www.gooddollar.org"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl text-center flex items-center justify-center"
        >
          <span>Learn More About GoodDollar</span>
          <ArrowRightIcon className="h-5 w-5 ml-2" />
        </a>
        <a
          href="https://www.gooddollar.org/faq"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all text-center"
        >
          View FAQ
        </a>
      </div>

      {/* Help Text */}
      <p className="text-xs text-gray-500 text-center mt-4">
        Need help? Visit <a href="https://help.gooddollar.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">help.gooddollar.org</a> or join the <a href="https://t.me/GoodDollarX" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Telegram community</a>
      </p>
    </div>
  );
}