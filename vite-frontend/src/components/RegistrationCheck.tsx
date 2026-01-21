import { useState, useEffect } from 'react'
import { useAccount, useReadContract } from 'wagmi'
import { parseAbi } from 'viem'
import { UserIcon, CheckCircleIcon, ExclamationTriangleIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { CONTRACT_ADDRESSES } from '../config/contracts'

const registryAbi = parseAbi([
  'function getUserDetails(address userAddress) external view returns (string memory ensName, string memory avatarHash, bool registered)',
  'function isUserRegistered(address userAddress) external view returns (bool)',
])

interface RegistrationCheckProps {
  onRegistered: () => void
  onNotRegistered: () => void
}

export default function RegistrationCheck({ onRegistered, onNotRegistered }: RegistrationCheckProps) {
   const { address, isConnected } = useAccount()
   const [ensName, setEnsName] = useState<string>('')
   const [isLoading, setIsLoading] = useState(true)

   const { data: userDetails } = useReadContract({
     address: CONTRACT_ADDRESSES.registry,
     abi: registryAbi,
     functionName: 'getUserDetails',
     args: address ? [address] : undefined,
   })

   const { data: registrationStatus } = useReadContract({
     address: CONTRACT_ADDRESSES.registry,
     abi: registryAbi,
     functionName: 'isUserRegistered',
     args: address ? [address] : undefined,
   })

   useEffect(() => {
     if (userDetails !== undefined && registrationStatus !== undefined) {
       setIsLoading(false)

       const [name, , registered] = userDetails as [string, string, boolean]

       if (registered && name && name.length > 0) {
         setEnsName(name)
         onRegistered()
       } else {
         onNotRegistered()
       }
     }
   }, [userDetails, registrationStatus, onRegistered, onNotRegistered])

  // Show loading state while checking registration
  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-600 mb-2">Checking Registration Status</h2>
          <p className="text-gray-500">Verifying your ENS registration...</p>
        </div>
      </div>
    )
  }

  // Show registration status result
  return (
    <div className="flex-1 flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="mb-6">
          {ensName ? (
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <CheckCircleIcon className="h-8 w-8 text-white" />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <ExclamationTriangleIcon className="h-8 w-8 text-white" />
              </div>
            </div>
          )}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          {ensName ? 'Welcome to Whispr Chat!' : 'Create Your Profile'}
        </h2>

        <p className="text-gray-600 mb-6">
          {ensName ? (
            <>
              You're registered as <span className="font-mono font-semibold text-blue-600">{ensName}</span>
              <br />
              Ready to start chatting with the community?
            </>
          ) : (
            <>
              Create your unique profile to start chatting with other community members.
              <br />
              Choose any name you'd like - no ENS ownership required!
            </>
          )}
        </p>

        <div className="space-y-4">
          {ensName ? (
            <button
              onClick={onRegistered}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Start Chatting</span>
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={onNotRegistered}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Register Now</span>
              <UserIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {ensName && (
          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-green-700">
              <strong>✓ Verified:</strong> Your ENS name is confirmed and you can start chatting immediately!
            </p>
          </div>
        )}

        {!ensName && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>💡 Tip:</strong> Choose any name you'd like - no ENS domain ownership required!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}