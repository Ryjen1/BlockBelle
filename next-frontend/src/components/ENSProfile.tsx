'use client'

import React from 'react'
import { useENSProfile, useENSDisplayInfo } from '@/hooks/useENSProfile'
import { useAccount } from 'wagmi'

interface ENSProfileProps {
  address?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  showBadge?: boolean
  showFullProfile?: boolean
  className?: string
  fallbackToAddress?: boolean
}

/**
 * Avatar component with ENS avatar support and fallback
 */
const ProfileAvatar: React.FC<{
  address: string
  avatarUrl: string | null
  size: string
  isVerified: boolean
  hasProfile: boolean
  className?: string
}> = ({ address, avatarUrl, size, isVerified, hasProfile, className = '' }) => {
  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
  }

  const textSizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  }

  const baseSizeClass = sizeClasses[size as keyof typeof sizeClasses] || sizeClasses.md
  const textSizeClass = textSizeClasses[size as keyof typeof textSizeClasses] || textSizeClasses.md

  return (
    <div className={`relative ${baseSizeClass} ${className}`}>
      {avatarUrl ? (
        <div className={`${baseSizeClass} rounded-full overflow-hidden border-2 ${
          hasProfile ? 'border-green-400 dark:border-green-500' : 'border-gray-300 dark:border-gray-600'
        }`}>
          <img
            src={avatarUrl}
            alt="ENS Avatar"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to initials if image fails to load
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              target.parentElement!.innerHTML = `
                <div class="${baseSizeClass} bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span class="text-white font-semibold ${textSizeClass}">
                    ${address.charAt(2).toUpperCase()}
                  </span>
                </div>
              `
            }}
          />
        </div>
      ) : (
        <div className={`${baseSizeClass} bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center ${
          hasProfile ? 'ring-2 ring-green-400 dark:ring-green-500' : ''
        }`}>
          <span className={`text-white font-semibold ${textSizeClass}`}>
            {address.charAt(2).toUpperCase()}
          </span>
        </div>
      )}
      
      {isVerified && (
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  )
}

/**
 * Profile information display component
 */
const ProfileInfo: React.FC<{
  displayName: string
  bio: string | null
  website: string | null
  twitter: string | null
  github: string | null
  address: string
  hasProfile: boolean
  size: string
}> = ({ displayName, bio, website, twitter, github, address, hasProfile, size }) => {
  const textSizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
  }
  
  const smallTextSizeClasses = {
    xs: 'text-xs',
    sm: 'text-xs',
    md: 'text-xs',
    lg: 'text-sm',
    xl: 'text-sm',
  }

  const textSizeClass = textSizeClasses[size as keyof typeof textSizeClasses] || textSizeClasses.md
  const smallTextSizeClass = smallTextSizeClasses[size as keyof typeof smallTextSizeClasses] || smallTextSizeClasses.md

  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-1.5">
        <p className={`font-medium text-gray-900 dark:text-white truncate ${textSizeClass}`}>
          {displayName}
        </p>
        {hasProfile && (
          <div className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200">
            ENS
          </div>
        )}
      </div>
      
      {bio && (
        <p className={`text-gray-600 dark:text-gray-400 truncate ${smallTextSizeClass} mt-0.5`}>
          {bio}
        </p>
      )}
      
      <p className={`text-gray-500 dark:text-gray-500 truncate ${smallTextSizeClass}`}>
        {address.slice(0, 6)}...{address.slice(-4)}
      </p>
      
      {(website || twitter || github) && (
        <div className="flex gap-2 mt-1">
          {website && (
            <a
              href={website.startsWith('http') ? website : `https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${smallTextSizeClass} text-blue-600 dark:text-blue-400 hover:underline`}
            >
              Website
            </a>
          )}
          {twitter && (
            <a
              href={`https://twitter.com/${twitter.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${smallTextSizeClass} text-blue-400 dark:text-blue-300 hover:underline`}
            >
              Twitter
            </a>
          )}
          {github && (
            <a
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${smallTextSizeClass} text-gray-700 dark:text-gray-300 hover:underline`}
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  )
}

/**
 * Main ENS Profile component
 */
export default function ENSProfile({
  address,
  size = 'md',
  showBadge = false,
  showFullProfile = false,
  className = '',
  fallbackToAddress = true,
}: ENSProfileProps) {
  const { address: connectedAddress } = useAccount()
  const { profile } = useENSProfile(address)
  const { displayInfo } = useENSDisplayInfo(address)

  const targetAddress = address || connectedAddress

  if (!targetAddress) {
    return null
  }

  // If loading, show loading skeleton
  if (profile?.isLoading) {
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        <div className={`${
          size === 'xs' ? 'w-6 h-6' :
          size === 'sm' ? 'w-8 h-8' :
          size === 'md' ? 'w-10 h-10' :
          size === 'lg' ? 'w-12 h-12' :
          'w-16 h-16'
        } bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse`}></div>
        {showFullProfile && (
          <div className="flex-1">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-1"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-2/3"></div>
          </div>
        )}
      </div>
    )
  }

  // If error and no fallback, show error state
  if (profile?.error && !fallbackToAddress) {
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        <ProfileAvatar
          address={targetAddress}
          avatarUrl={null}
          size={size}
          isVerified={false}
          hasProfile={false}
        />
        <div className="text-red-600 dark:text-red-400 text-sm">
          Failed to load profile
        </div>
      </div>
    )
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <ProfileAvatar
        address={targetAddress}
        avatarUrl={displayInfo.avatar}
        size={size}
        isVerified={displayInfo.isVerified}
        hasProfile={displayInfo.hasProfile}
      />
      
      {showFullProfile && (
        <ProfileInfo
          displayName={displayInfo.displayName}
          bio={displayInfo.bio}
          website={displayInfo.website}
          twitter={displayInfo.twitter}
          github={displayInfo.github}
          address={targetAddress}
          hasProfile={displayInfo.hasProfile}
          size={size}
        />
      )}
    </div>
  )
}

// Export individual components for more granular usage
export { ProfileAvatar, ProfileInfo }