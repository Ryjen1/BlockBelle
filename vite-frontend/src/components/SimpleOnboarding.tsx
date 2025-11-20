import { useState, useEffect, useCallback } from 'react'
import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useRegistration } from '../hooks/useRegistration'
import { UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

interface SimpleOnboardingProps {
  onComplete: () => void
  onRegister: () => void
}

export default function SimpleOnboarding({ onComplete, onRegister }: SimpleOnboardingProps) {
  const { address, isConnected } = useAccount()
  const { isRegistered, ensName, isLoading } = useRegistration()
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [hasCompleted, setHasCompleted] = useState(false)

  // Memoize the onComplete callback to prevent unnecessary re-renders
  const handleComplete = useCallback(() => {
    if (!hasCompleted) {
      setHasCompleted(true)
      onComplete()
    }
  }, [onComplete, hasCompleted])

  useEffect(() => {
    if (isConnected && !isLoading) {
      if (isRegistered && !hasCompleted) {
        // User is registered and hasn't completed yet, trigger callback
        handleComplete()
      } else if (!isRegistered) {
        // User is not registered, show onboarding
        setShowOnboarding(true)
        // Reset completion state when user is not registered
        setHasCompleted(false)
      }
    }
  }, [isConnected, isRegistered, isLoading, handleComplete, hasCompleted])

  if (!isConnected) {
    return (
      <div className="flex items-center space-x-4">
        <ConnectButton.Custom>
          {({ openConnectModal }) => (
            <button
              onClick={openConnectModal}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Connect Wallet
            </button>
          )}
        </ConnectButton.Custom>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="flex items-center space-x-4">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
        <span className="text-gray-600">Checking...</span>
      </div>
    )
  }

  // Show connected status for registered users
  if (isRegistered) {
    return (
      <div className="flex items-center space-x-4">
        <div className="text-sm text-green-600 font-medium">
          ✓ Wallet Connected & Registered
        </div>
      </div>
    )
  }

  // Show connected but not registered
  return (
    <div className="flex items-center space-x-4">
      <div className="text-sm text-green-600 font-medium">
        ✓ Wallet Connected
      </div>
      <button
        onClick={onRegister}
        className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
      >
        Register ENS
      </button>
    </div>
  )
}