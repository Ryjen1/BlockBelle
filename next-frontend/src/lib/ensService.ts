import { createEnsClient } from '@ensdomains/ensjs'
import { createPublicClient, http } from 'viem'
import { celo } from 'viem/chains'
import { ENS_ADDRESSES } from '@/config/contracts'

// Create ENS client with Celo mainnet
const ensClient = createEnsClient({
  mainnet: 'celo',
  chains: [celo],
  transports: {
    celo: http('https://forno.celo.org'),
  },
})

export interface ENSProfile {
  name: string | null
  avatar: string | null
  bio: string | null
  website: string | null
  twitter: string | null
  github: string | null
  displayName: string | null
  isLoading: boolean
  error: string | null
  hasProfile: boolean
}

export interface ENSProfileCache {
  [address: string]: ENSProfile
}

const profileCache: ENSProfileCache = {}

// Default fallback profile
const getDefaultProfile = (address: string): ENSProfile => ({
  name: null,
  avatar: null,
  bio: null,
  website: null,
  twitter: null,
  github: null,
  displayName: null,
  isLoading: false,
  error: null,
  hasProfile: false,
})

/**
 * Extract avatar URL from various formats
 */
const getAvatarUrl = (avatar: string | null): string | null => {
  if (!avatar) return null
  
  // Handle IPFS URLs
  if (avatar.startsWith('ipfs://')) {
    return `https://ipfs.io/ipfs/${avatar.replace('ipfs://', '')}`
  }
  
  // Handle HTTPS URLs
  if (avatar.startsWith('https://') || avatar.startsWith('http://')) {
    return avatar
  }
  
  return null
}

/**
 * Fetch comprehensive ENS profile data for a wallet address
 */
export const fetchENSProfile = async (address: string): Promise<ENSProfile> => {
  // Return cached profile if available and recent
  const cachedProfile = profileCache[address.toLowerCase()]
  const now = Date.now()
  
  if (cachedProfile && !cachedProfile.isLoading && !cachedProfile.error) {
    // Cache for 5 minutes
    const cacheTimestamp = (now - 5 * 60 * 1000)
    // For now, we'll always refetch to catch changes in ENS records
    // In production, you might want to implement proper cache invalidation
  }

  // Set loading state
  const loadingProfile: ENSProfile = {
    ...getDefaultProfile(address),
    isLoading: true,
  }
  profileCache[address.toLowerCase()] = loadingProfile

  try {
    // Get the reverse record (name) for the address
    const name = await ensClient.getName({
      address: address as `0x${string}`,
    })

    if (!name.name) {
      // No ENS name found, return default profile
      const defaultProfile = getDefaultProfile(address)
      profileCache[address.toLowerCase()] = defaultProfile
      return defaultProfile
    }

    // Get comprehensive profile data
    const profileData = await ensClient.getProfile({
      name: name.name,
    })

    const profile: ENSProfile = {
      name: name.name,
      avatar: getAvatarUrl(profileData.avatar),
      bio: profileData.bio || null,
      website: profileData.website || null,
      twitter: profileData.twitter || null,
      github: profileData.github || null,
      displayName: profileData.displayName || name.name,
      isLoading: false,
      error: null,
      hasProfile: true,
    }

    profileCache[address.toLowerCase()] = profile
    return profile

  } catch (error) {
    console.error('Error fetching ENS profile:', error)
    
    const errorProfile: ENSProfile = {
      ...getDefaultProfile(address),
      isLoading: false,
      error: error instanceof Error ? error.message : 'Failed to fetch ENS profile',
      hasProfile: false,
    }
    
    profileCache[address.toLowerCase()] = errorProfile
    return errorProfile
  }
}

/**
 * Get cached ENS profile without fetching
 */
export const getCachedENSProfile = (address: string): ENSProfile | null => {
  return profileCache[address.toLowerCase()] || null
}

/**
 * Clear ENS profile cache for an address
 */
export const clearENSProfileCache = (address: string): void => {
  delete profileCache[address.toLowerCase()]
}

/**
 * Clear all ENS profile cache
 */
export const clearAllENSProfileCache = (): void => {
  Object.keys(profileCache).forEach(address => {
    delete profileCache[address]
  })
}

/**
 * Fetch multiple ENS profiles in batch
 */
export const fetchMultipleENSProfiles = async (addresses: string[]): Promise<Record<string, ENSProfile>> => {
  const results: Record<string, ENSProfile> = {}
  
  // Process addresses in batches to avoid overwhelming the network
  const batchSize = 5
  for (let i = 0; i < addresses.length; i += batchSize) {
    const batch = addresses.slice(i, i + batchSize)
    const batchPromises = batch.map(async (address) => {
      const profile = await fetchENSProfile(address)
      return { address, profile }
    })
    
    const batchResults = await Promise.all(batchPromises)
    batchResults.forEach(({ address, profile }) => {
      results[address.toLowerCase()] = profile
    })
  }
  
  return results
}

/**
 * Subscribe to ENS profile changes (requires event listener setup)
 */
export const subscribeToENSChanges = (address: string, callback: (profile: ENSProfile) => void) => {
  // This would require setting up event listeners for ENS record changes
  // For now, we'll implement a simple polling mechanism
  const interval = setInterval(async () => {
    const newProfile = await fetchENSProfile(address)
    const cachedProfile = getCachedENSProfile(address)
    
    // Check if profile has changed
    if (!cachedProfile || 
        cachedProfile.name !== newProfile.name ||
        cachedProfile.avatar !== newProfile.avatar ||
        cachedProfile.bio !== newProfile.bio) {
      callback(newProfile)
    }
  }, 60000) // Check every minute

  return () => clearInterval(interval)
}

export default {
  fetchENSProfile,
  getCachedENSProfile,
  clearENSProfileCache,
  clearAllENSProfileCache,
  fetchMultipleENSProfiles,
  subscribeToENSChanges,
}