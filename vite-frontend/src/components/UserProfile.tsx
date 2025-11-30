import { useAccount, useDisconnect, useConnect } from 'wagmi'
import { useRegistration } from '../hooks/useRegistration'

interface UserProfileProps {
  showFullAddress?: boolean
}

export default function UserProfile({ showFullAddress = false }: UserProfileProps) {
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const { isRegistered, ensName, isLoading } = useRegistration()

  if (!isConnected || !address) {
    return null // Let SimpleOnboarding handle the connect button
  }

  if (isLoading) {
    return (
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="text-right">
          <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-16 h-3 bg-gray-200 rounded animate-pulse mt-1"></div>
        </div>
      </div>
    )
  }

  const displayName = ensName || (showFullAddress ? address : `${address.slice(0, 6)}...${address.slice(-4)}`)

  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center space-x-2">
        {isRegistered && (
          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">
              {ensName.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <div className="text-right">
          <div className={`font-medium ${isRegistered ? 'text-gray-900' : 'text-gray-600'}`}>
            {displayName}
          </div>
          {isRegistered && (
            <div className="text-xs text-green-600 font-medium">
              ✓ Verified
            </div>
          )}
          {!isRegistered && (
            <div className="text-xs text-amber-600">
              Not registered
            </div>
          )}
        </div>
      </div>
      <button
        onClick={() => disconnect()}
        className="text-gray-500 hover:text-gray-700 text-sm underline"
        title="Disconnect wallet"
      >
        Disconnect
      </button>
    </div>
  )
}