'use client';

import { useState, useEffect } from 'react';
import { useAccount, useWriteContract, useReadContract } from 'wagmi';
import { parseAbi, getEnsAddress } from 'viem';
import { UserIcon, CheckCircleIcon, ExclamationTriangleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { CONTRACT_ADDRESSES } from '@/config/contracts';
 
 const registryAbi = parseAbi([
   'function registerUser(string ensName, string avatarHash) external',
   'function getUserDetails(address userAddress) external view returns (string memory ensName, string memory avatarHash, bool registered)',
   'function isUserRegistered(address userAddress) external view returns (bool)',
 ])

interface RegisterProps {
  onRegistrationSuccess?: () => void
}

export default function Register({ onRegistrationSuccess }: RegisterProps) {
    const { address } = useAccount()
    const [ensName, setEnsName] = useState('')
    const [avatarHash, setAvatarHash] = useState('')
    const [isUserRegistered, setIsUserRegistered] = useState(false)
    const [isVerifyingEns, setIsVerifyingEns] = useState(false)
    const [ensVerified, setEnsVerified] = useState<boolean | null>(null)
    const [verificationError, setVerificationError] = useState('')
    const { writeContract } = useWriteContract()

   const { data: userDetails } = useReadContract({
     address: CONTRACT_ADDRESSES.registry,
     abi: registryAbi,
     functionName: 'getUserDetails',
     args: [address!],
   })

   const { data: registrationStatus } = useReadContract({
     address: CONTRACT_ADDRESSES.registry,
     abi: registryAbi,
     functionName: 'isUserRegistered',
     args: [address!],
   })

   const verifyEnsOwnership = async (name: string) => {
     if (!name.trim() || !address) return

     setIsVerifyingEns(true)
     setVerificationError('')
     setEnsVerified(null)

     try {
       const fullEnsName = name.endsWith('.eth') ? name : `${name}.eth`
       const ensAddress = await getEnsAddress({
         name: fullEnsName,
       })

       if (ensAddress?.toLowerCase() === address.toLowerCase()) {
         setEnsVerified(true)
       } else {
         setEnsVerified(false)
         setVerificationError('This ENS name is not owned by your wallet address.')
       }
     } catch (error) {
       console.error('ENS verification failed:', error)
       setEnsVerified(false)
       setVerificationError('Failed to verify ENS ownership. Please check your connection and try again.')
     } finally {
       setIsVerifyingEns(false)
     }
   }

   const handleRegister = async () => {
     if (!ensName.trim() || !ensVerified) return

     try {
       const fullEnsName = ensName.endsWith('.eth') ? ensName : `${ensName}.eth`
       await writeContract({
         address: CONTRACT_ADDRESSES.registry,
         abi: registryAbi,
         functionName: 'registerUser',
         args: [fullEnsName, avatarHash || ''],
       })
       onRegistrationSuccess?.()
     } catch (error: any) {
       console.error('Registration failed:', error)

       // Show user-friendly error message
       if (error.message?.includes('insufficient funds')) {
         alert('❌ Transaction failed: Insufficient funds for gas. Please get some Base Sepolia ETH from a faucet.')
       } else if (error.message?.includes('User rejected')) {
         alert('❌ Transaction cancelled: You rejected the transaction in your wallet.')
       } else if (error.message?.includes('already registered')) {
         alert('❌ Registration failed: You are already registered with a name.')
       } else if (error.message?.includes('Name is already taken')) {
         alert('❌ Registration failed: This name is already taken. Please choose a different name.')
       } else {
         alert('❌ Registration failed: ' + (error.message || 'Unknown error. Please try again.'))
       }
     }
   }

   // Check user registration status
   useEffect(() => {
     if (registrationStatus !== undefined) {
       setIsUserRegistered(registrationStatus)
     }
   }, [registrationStatus])

   // Verify ENS ownership when name changes
   useEffect(() => {
     if (ensName.trim()) {
       const timeoutId = setTimeout(() => {
         verifyEnsOwnership(ensName)
       }, 500) // Debounce verification
       return () => clearTimeout(timeoutId)
     } else {
       setEnsVerified(null)
       setVerificationError('')
     }
   }, [ensName, address])

  // Auto-navigate when registration is successful
  useEffect(() => {
    if (userDetails && userDetails[2] && onRegistrationSuccess) {
      // Add a small delay to show the success message before navigating
      const timer = setTimeout(() => {
        onRegistrationSuccess()
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [userDetails, onRegistrationSuccess])

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-6">
          <div className="flex items-center space-x-3">
            <UserIcon className="h-8 w-8 text-white" />
            <h2 className="text-2xl font-bold text-white">Register Your Profile</h2>
          </div>
          <p className="text-pink-100 mt-2">
            Create your unique profile to start chatting!
          </p>
        </div>

        <div className="px-8 py-8">
          {userDetails && userDetails[2] ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <div className="flex items-center">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-green-800">Registration Complete!</h3>
                  <p className="text-green-700">You're registered as: <span className="font-mono font-bold">{userDetails[0]}</span></p>
                  <p className="text-green-600 text-sm mt-1">Your profile is now active!</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <div className="flex items-start">
                <UserIcon className="h-6 w-6 text-blue-500 mr-3 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-800">Create Your Profile</h3>
                  <p className="text-blue-700 text-sm">
                    Register your unique name and avatar to join the community.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                ENS Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={ensName}
                  onChange={(e) => setEnsName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg pr-12"
                  placeholder="yourname"
                />
                <div className="absolute right-3 top-3 text-gray-400 font-medium">
                  .eth
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Enter your ENS name without .eth - we'll add it automatically
              </p>

              {/* ENS Verification Status */}
              {ensName.trim() && (
                <div className="mt-3">
                  {isVerifyingEns ? (
                    <div className="flex items-center space-x-2 text-blue-600">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                      <span className="text-sm">Verifying ENS ownership...</span>
                    </div>
                  ) : ensVerified === true ? (
                    <div className="flex items-center space-x-2 text-green-600">
                      <ShieldCheckIcon className="h-4 w-4" />
                      <span className="text-sm">✓ ENS ownership verified</span>
                    </div>
                  ) : ensVerified === false ? (
                    <div className="flex items-center space-x-2 text-red-600">
                      <ExclamationTriangleIcon className="h-4 w-4" />
                      <span className="text-sm">{verificationError || 'ENS ownership not verified'}</span>
                    </div>
                  ) : null}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Avatar Hash (Optional)
              </label>
              <input
                type="text"
                value={avatarHash}
                onChange={(e) => setAvatarHash(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="IPFS hash or URL for your avatar"
              />
              <p className="text-sm text-gray-500 mt-2">
                Leave empty for default avatar, or add an IPFS hash/URL for your custom avatar
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-amber-800 mb-2">Requirements:</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• You must own the ENS domain you enter</li>
                <li>• The domain must be registered on Ethereum</li>
                <li>• One ENS name per wallet address</li>
                <li>• Optionally add an avatar hash for your profile picture</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Need Celo?</h4>
              <p className="text-sm text-blue-700 mb-2">
                This app runs on Celo mainnet. If your transaction fails due to insufficient funds:
              </p>
              <a
                href="https://faucet.celo.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline text-sm"
              >
                Get Celo from faucet →
              </a>
            </div>

            <button
              onClick={handleRegister}
              disabled={!ensName.trim() || !ensVerified || isUserRegistered}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
            >
              {isUserRegistered ? 'Already Registered' : ensVerified ? 'Register ENS Profile' : 'Verify ENS Ownership First'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}