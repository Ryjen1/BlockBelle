import { createPublicClient, http } from 'viem'
import { celo } from 'viem/chains'
import { ENS_ADDRESSES } from '@/config/contracts'

// Create Public client for Celo mainnet (fallback for ENS operations)
const publicClient = createPublicClient({
  chain: celo,
  transport: http('https://forno.celo.org'),
})

// Mock ENS data for development and testing
// This can be replaced with real ENS SDK integration later
const MOCK_ENS_DATA: Record<string, Partial<ENSProfile>> = {
  // Add some mock profiles for testing
  '0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A': {
    name: 'alice.eth',
    displayName: 'Alice Johnson',
    bio: 'Blockchain developer and ENS enthusiast',
    website: 'https://alicejohnson.dev',
    twitter: '@alice_dev',
    github: 'alicejohnson',
    avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
    hasProfile: true,
  },
  '0x8ba1f109551bD432803012645Hac136c32c3c0c4': {
    name: 'bob.eth',
    displayName: 'Bob Smith',
    bio: 'Web3 designer creating beautiful interfaces',
    website: 'https://bobsmith.design',
    twitter: '@bobdesigns',
    avatar: 'https://avatars.githubusercontent.com/u/2?v=4',
    hasProfile: true,
  }
}

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
    // Simulate network delay for realistic UX
    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500))

    // For now, use mock data - this can be replaced with real ENS SDK integration
    const mockData = MOCK_ENS_DATA[address.toLowerCase()]
    
    if (!mockData) {
      // No mock data found, return default profile
      const defaultProfile = getDefaultProfile(address)
      profileCache[address.toLowerCase()] = defaultProfile
      return defaultProfile
    }

    const profile: ENSProfile = {
      name: mockData.name || null,
      avatar: mockData.avatar ? getAvatarUrl(mockData.avatar) : null,
      bio: mockData.bio || null,
      website: mockData.website || null,
      twitter: mockData.twitter || null,
      github: mockData.github || null,
      displayName: mockData.displayName || mockData.name || null,
      isLoading: false,
      error: null,
      hasProfile: mockData.hasProfile || false,
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
 * Subscribe to ENS profile changes with enhanced monitoring
 */
export const subscribeToENSChanges = (
  address: string, 
  callback: (profile: ENSProfile, hasChanges: boolean) => void,
  options?: {
    checkInterval?: number // milliseconds
    fieldsToMonitor?: string[]
  }
) => {
  const {
    checkInterval = 30000, // Check every 30 seconds (more frequent than before)
    fieldsToMonitor = ['name', 'avatar', 'bio', 'website', 'twitter', 'github', 'displayName']
  } = options || {}

  let lastProfile: ENSProfile | null = null
  let pollCount = 0

  const pollForChanges = async () => {
    try {
      const newProfile = await fetchENSProfile(address)
      const cachedProfile = getCachedENSProfile(address)
      
      // Check if profile has changed by comparing monitored fields
      const hasChanges = !cachedProfile || fieldsToMonitor.some(field => {
        const oldValue = cachedProfile[field as keyof ENSProfile] as any
        const newValue = newProfile[field as keyof ENSProfile] as any
        return oldValue !== newValue
      })

      // Only call callback if there are actual changes
      if (hasChanges || pollCount === 0) {
        callback(newProfile, hasChanges)
        lastProfile = newProfile
      }

      pollCount++
    } catch (error) {
      console.error(`Error polling ENS changes for ${address}:`, error)
      // Still call callback with error profile to update UI
      const errorProfile: ENSProfile = {
        ...getDefaultProfile(address),
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch ENS profile',
        hasProfile: false,
      }
      callback(errorProfile, true)
    }
  }

  // Initial poll
  pollForChanges()

  // Set up polling interval
  const interval = setInterval(pollForChanges, checkInterval)

  // Return cleanup function
  return () => {
    clearInterval(interval)
  }
}

/**
 * Batch subscribe to multiple ENS address changes
 */
export const subscribeToMultipleENSChanges = (
  addresses: string[],
  callback: (address: string, profile: ENSProfile, hasChanges: boolean) => void,
  options?: {
    checkInterval?: number
    fieldsToMonitor?: string[]
  }
) => {
  const subscriptions = addresses.map(address => 
    subscribeToENSChanges(
      address, 
      (profile, hasChanges) => callback(address, profile, hasChanges),
      options
    )
  )

  // Return cleanup function that unsubscribes from all
  return () => {
    subscriptions.forEach(unsubscribe => unsubscribe())
  }
}

/**
 * Enhanced profile change detection with smart caching
 */
export const detectProfileChanges = async (address: string): Promise<{
  hasChanges: boolean
  changedFields: string[]
  oldProfile: ENSProfile | null
  newProfile: ENSProfile
}> => {
  const oldProfile = getCachedENSProfile(address)
  const newProfile = await fetchENSProfile(address)
  
  const changedFields: string[] = []
  
  // Compare key profile fields
  const fieldsToCheck = ['name', 'avatar', 'bio', 'website', 'twitter', 'github', 'displayName']
  
  fieldsToCheck.forEach(field => {
    const oldValue = oldProfile?.[field as keyof ENSProfile] as any
    const newValue = newProfile[field as keyof ENSProfile] as any
    
    if (oldValue !== newValue) {
      changedFields.push(field)
    }
  })

  return {
    hasChanges: changedFields.length > 0,
    changedFields,
    oldProfile,
    newProfile
  }
}

export default {
  fetchENSProfile,
  getCachedENSProfile,
  clearENSProfileCache,
  clearAllENSProfileCache,
  fetchMultipleENSProfiles,
  subscribeToENSChanges,
  subscribeToMultipleENSChanges,
  detectProfileChanges,
}