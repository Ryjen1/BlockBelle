 import { useState, useEffect } from 'react'
 import { useAccount, useWriteContract, useReadContract } from 'wagmi'
 import { parseAbi } from 'viem'
 import { UserIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
 import { CONTRACT_ADDRESSES } from '../config/contracts'
 
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

   const handleRegister = async () => {
     if (!ensName.trim()) return

     try {
       await writeContract({
         address: CONTRACT_ADDRESSES.registry,
         abi: registryAbi,
         functionName: 'registerUser',
         args: [ensName, avatarHash || ''],
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
                Display Name
              </label>
              <input
                type="text"
                value={ensName}
                onChange={(e) => setEnsName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                placeholder="Enter your display name"
              />
              <p className="text-sm text-gray-500 mt-2">
                Choose any name you'd like to be known by in the community
              </p>
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

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">How it works:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Choose any display name you like</li>
                <li>• Optionally add an avatar hash for your profile picture</li>
                <li>• One profile per wallet address</li>
                <li>• Start chatting with other community members!</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Need Base Sepolia ETH?</h4>
              <p className="text-sm text-blue-700 mb-2">
                This app runs on Base Sepolia testnet. If your transaction fails due to insufficient funds:
              </p>
              <a
                href="https://sepolia.base.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline text-sm"
              >
                Get free Base Sepolia ETH from faucet →
              </a>
            </div>

            <button
              onClick={handleRegister}
              disabled={!ensName.trim() || isUserRegistered}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
            >
              {isUserRegistered ? 'Already Registered' : 'Register Profile'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}