import React from 'react'
import { useUsernames } from '../hooks/useUsernames'
import { useAccount } from 'wagmi'

interface UserListProps {
  onUserSelect?: (address: string) => void
  selectedUser?: string
}

const UserList: React.FC<UserListProps> = ({ onUserSelect, selectedUser }) => {
  const { allUsers, isLoadingUsers, getCachedUsername } = useUsernames()
  const { address: currentUserAddress } = useAccount()

  if (isLoadingUsers) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Registered Users</h3>
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          <span className="ml-2 text-gray-600">Loading users...</span>
        </div>
      </div>
    )
  }

  // Filter out current user from the list
  const otherUsers = allUsers.filter((addr: string) => addr.toLowerCase() !== currentUserAddress?.toLowerCase())

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Registered Users</h3>

      {otherUsers.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-gray-400 mb-2">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </div>
          <p className="text-gray-600">No other users registered yet.</p>
          <p className="text-sm text-gray-500 mt-1">Be the first to invite friends!</p>
        </div>
      ) : (
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {otherUsers.map((userAddress: string) => (
            <div
              key={userAddress}
              onClick={() => onUserSelect?.(userAddress)}
              className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                selectedUser === userAddress
                  ? 'bg-indigo-100 border-2 border-indigo-300'
                  : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {getCachedUsername(userAddress).charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {getCachedUsername(userAddress)}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {userAddress.slice(0, 6)}...{userAddress.slice(-4)}
                  </p>
                </div>
                {selectedUser === userAddress && (
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          Total users: {otherUsers.length}
        </div>
      </div>
    </div>
  )
}

export default UserList