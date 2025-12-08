'use client';

import React from 'react';
import { useUsernames } from '@/hooks/useUsernames';
import { useAccount } from 'wagmi';
import Tier3Badge from '@/components/Tier3Badge';
import { useBulkPublicVerification } from '@/hooks/usePublicVerification';
import ENSProfile from '@/components/ENSProfile';
import { useENSProfiles } from '@/hooks/useENSProfile';

interface UserListProps {
  onUserSelect?: (address: string) => void
  selectedUser?: string
}

const UserList: React.FC<UserListProps> = ({ onUserSelect, selectedUser }) => {
  const { allUsers, isLoadingUsers, getCachedUsername } = useUsernames()
  const { address: currentUserAddress } = useAccount()
  
  // Filter out current user from the list
  const otherUsers = allUsers.filter((addr: string) => addr.toLowerCase() !== currentUserAddress?.toLowerCase())
  
  // Fetch public verification status for all users
  const { verifications: userVerifications } = useBulkPublicVerification(otherUsers)
  
  // Fetch ENS profiles for all users
  const { profiles: ensProfiles, loadingStates: ensLoadingStates } = useENSProfiles(otherUsers)

  if (isLoadingUsers) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/20 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Registered Users</h3>
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 dark:border-indigo-400"></div>
          <span className="ml-2 text-gray-600 dark:text-gray-400">Loading users...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/20 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Registered Users</h3>

      {otherUsers.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-gray-400 dark:text-gray-500 mb-2">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </div>
          <p className="text-gray-600 dark:text-gray-400">No other users registered yet.</p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Be the first to invite friends!</p>
        </div>
      ) : (
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {otherUsers.map((userAddress: string) => {
            const isVerified = userVerifications[userAddress] || false
            const ensProfile = ensProfiles[userAddress.toLowerCase()]
            const isLoadingENS = ensLoadingStates[userAddress.toLowerCase()] || false
            
            return (
              <div
                key={userAddress}
                onClick={() => onUserSelect?.(userAddress)}
                className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedUser === userAddress
                    ? 'bg-indigo-100 dark:bg-indigo-900/50 border-2 border-indigo-300 dark:border-indigo-600'
                    : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border-2 border-transparent'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <ENSProfile
                      address={userAddress}
                      size="md"
                      className=""
                      showBadge={false}
                      showFullProfile={false}
                      fallbackToAddress={true}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                        {ensProfile?.displayName || ensProfile?.name || getCachedUsername(userAddress)}
                      </p>
                      {isVerified && <Tier3Badge size="sm" />}
                      {ensProfile?.hasProfile && (
                        <div className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200">
                          ENS
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {ensProfile?.bio || `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`}
                      </p>
                      {isLoadingENS && (
                        <div className="animate-spin rounded-full h-3 w-3 border-b border-indigo-600 dark:border-indigo-400"></div>
                      )}
                    </div>
                  </div>
                  {selectedUser === userAddress && (
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                    </div>
                  )}
                </div>
                
                {/* Show additional ENS profile info on hover */}
                {ensProfile?.hasProfile && (
                  <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-600 opacity-0 hover:opacity-100 transition-opacity duration-200">
                    <div className="flex gap-2 text-xs">
                      {ensProfile.website && (
                        <a
                          href={ensProfile.website.startsWith('http') ? ensProfile.website : `https://${ensProfile.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Website
                        </a>
                      )}
                      {ensProfile.twitter && (
                        <a
                          href={`https://twitter.com/${ensProfile.twitter.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 dark:text-blue-300 hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Twitter
                        </a>
                      )}
                      {ensProfile.github && (
                        <a
                          href={`https://github.com/${ensProfile.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
          Total users: {otherUsers.length}
          {otherUsers.length > 0 && (
            <div className="mt-1">
              <span className="text-green-600 dark:text-green-400">
                {Object.values(ensProfiles).filter(p => p?.hasProfile).length}
              </span>
              <span className="text-gray-500 dark:text-gray-400"> with ENS profiles</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserList