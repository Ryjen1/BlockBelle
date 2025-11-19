'use client';

import { useState, useEffect } from 'react';
import { useAccount, useWriteContract, useReadContract } from 'wagmi';
import { parseAbi } from 'viem';
import { UserIcon, CheckCircleIcon, ExclamationTriangleIcon, ArrowRightIcon, CameraIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { CONTRACT_ADDRESSES } from '@/config/contracts';
import { useRegistration } from '@/hooks/useRegistration';

const registryAbi = parseAbi([
  'function register(string _ensName) external',
  'function getEnsName(address _user) external view returns (string)',
  'function addressToEnsName(address) external view returns (string)',
])

interface OnboardingProps {
  onComplete: () => void
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const { address, isConnected } = useAccount()
  const [ensName, setEnsName] = useState('')
  const [profilePic, setProfilePic] = useState<string>('')
  const [step, setStep] = useState<'welcome' | 'register' | 'complete'>('welcome')
  const [isLoading, setIsLoading] = useState(false)
  const { writeContract } = useWriteContract()

  const { data: currentEnsName } = useReadContract({
    address: CONTRACT_ADDRESSES.registry,
    abi: registryAbi,
    functionName: 'getEnsName',
    args: address ? [address] : undefined,
  })

  // Check if user is already registered
  useEffect(() => {
    if (currentEnsName && (currentEnsName as string).length > 0) {
      setStep('complete')
      setTimeout(() => {
        onComplete()
      }, 1500)
    }
  }, [currentEnsName, onComplete])

  const handleGetStarted = () => {
    if (!isConnected) return
    setStep('register')
  }

  const handleRegister = async () => {
    if (!ensName.trim()) return

    setIsLoading(true)
    try {
      const fullEnsName = ensName.endsWith('.eth') ? ensName : `${ensName}.eth`
      await writeContract({
        address: CONTRACT_ADDRESSES.registry,
        abi: registryAbi,
        functionName: 'register',
        args: [fullEnsName],
      })

      // Success - move to complete step
      setStep('complete')
      setTimeout(() => {
        onComplete()
      }, 2000)
    } catch (error) {
      console.error('Registration failed:', error)
      setIsLoading(false)
    }
  }

  const handleProfilePicUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfilePic(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-12 text-center">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <SparklesIcon className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Welcome to BlockBelle</h1>
            <p className="text-pink-100 text-lg mb-8">
              Connect with amazing women in Web3 through verified ENS conversations
            </p>
            <button
              onClick={handleGetStarted}
              className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started
            </button>
          </div>

          <div className="px-8 py-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold text-sm">1</span>
                </div>
                <span className="text-gray-600">Connect your wallet</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">2</span>
                </div>
                <span className="text-gray-600">Register your ENS name</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-bold text-sm">3</span>
                </div>
                <span className="text-gray-600">Start chatting instantly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (step === 'register') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-6">
            <div className="flex items-center space-x-3">
              <UserIcon className="h-8 w-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Complete Your Profile</h2>
            </div>
            <p className="text-pink-100 mt-2">
              Register your ENS name to join the community
            </p>
          </div>

          <div className="px-8 py-8 space-y-6">
            {/* Profile Picture Upload */}
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                {profilePic ? (
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full flex items-center justify-center">
                    <UserIcon className="h-12 w-12 text-gray-400" />
                  </div>
                )}
                <label className="absolute bottom-0 right-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors">
                  <CameraIcon className="h-4 w-4 text-white" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePicUpload}
                    className="hidden"
                  />
                </label>
              </div>
              <p className="text-sm text-gray-500">Click to upload profile picture (optional)</p>
            </div>

            {/* ENS Name Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                ENS Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={ensName}
                  onChange={(e) => setEnsName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-lg"
                  placeholder="yourname"
                />
                <div className="absolute right-3 top-3 text-gray-400 font-medium">
                  .eth
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Enter your ENS name without .eth - we'll add it automatically
              </p>
            </div>

            {/* Requirements */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-amber-800 mb-2">Requirements:</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• You must own the ENS domain</li>
                <li>• The domain must be registered on Ethereum</li>
                <li>• One ENS name per wallet address</li>
              </ul>
            </div>

            {/* Register Button */}
            <button
              onClick={handleRegister}
              disabled={!ensName.trim() || isLoading}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Registering...</span>
                </>
              ) : (
                <>
                  <span>Join BlockBelle Community</span>
                  <ArrowRightIcon className="h-5 w-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (step === 'complete') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 px-8 py-12 text-center">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Welcome to BlockBelle!</h1>
            <p className="text-green-100 text-lg">
              You're now part of the community and ready to start chatting
            </p>
          </div>

          <div className="px-8 py-8 text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-800 font-semibold">
                ✓ Registration Complete!
              </p>
              <p className="text-green-700 text-sm mt-1">
                Your ENS name is verified and you're ready to connect
              </p>
            </div>

            <div className="animate-pulse">
              <p className="text-gray-600">Redirecting to chat...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}