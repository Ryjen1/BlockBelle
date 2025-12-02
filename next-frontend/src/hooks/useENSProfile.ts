import { useState, useEffect, useCallback } from 'react'
import { useAccount } from 'wagmi'
import { fetchENSProfile, getCachedENSProfile, subscribeToENSChanges, ENSProfile } from '@/lib/ensService'

/**
 * Hook for fetching and managing ENS profiles
 */
export const useENSProfile = (address?: string) => {
  const { address: connectedAddress } = useAccount()
  const [profile, setProfile] = useState<ENSProfile | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Use connected address if no address provided
  const targetAddress = address || connectedAddress

  const fetchProfile = useCallback(async (addr: string) => {
    if (!addr) return

    setIsLoading(true)
    setError(null)

    try {
      // Check cache first
      const cachedProfile = getCachedENSProfile(addr)
      if (cachedProfile && !cachedProfile.isLoading) {
        setProfile(cachedProfile)
        setIsLoading(false)
        return
      }

      const newProfile = await fetchENSProfile(addr)
      setProfile(newProfile)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch ENS profile'
      setError(errorMessage)
      console.error('Error fetching ENS profile:', err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Fetch profile when address changes
  useEffect(() => {
    if (targetAddress) {
      fetchProfile(targetAddress)
    }
  }, [targetAddress, fetchProfile])

  // Set up subscription for profile changes
  useEffect(() => {
    if (targetAddress) {
      const unsubscribe = subscribeToENSChanges(targetAddress, (updatedProfile) => {
        setProfile(updatedProfile)
      })

      return unsubscribe
    }
  }, [targetAddress])

  return {
    profile,
    isLoading,
    error,
    refetch: () => targetAddress ? fetchProfile(targetAddress) : Promise.resolve(),
    address: targetAddress,
  }
}

/**
 * Hook for managing multiple ENS profiles (for user lists, etc.)
 */
export const useENSProfiles = (addresses: string[]) => {
  const [profiles, setProfiles] = useState<Record<string, ENSProfile>>({})
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({})
  const [errors, setErrors] = useState<Record<string, string | null>>({})

  const fetchProfiles = useCallback(async (addrList: string[]) => {
    if (!addrList.length) return

    // Set loading states
    const newLoadingStates: Record<string, boolean> = {}
    addrList.forEach(addr => {
      newLoadingStates[addr.toLowerCase()] = true
    })
    setLoadingStates(prev => ({ ...prev, ...newLoadingStates }))

    try {
      // Import fetchMultipleENSProfiles dynamically to avoid circular dependencies
      const { fetchMultipleENSProfiles } = await import('@/lib/ensService')
      const newProfiles = await fetchMultipleENSProfiles(addrList)
      
      setProfiles(prev => ({ ...prev, ...newProfiles }))
      setErrors(prev => {
        const newErrors = { ...prev }
        Object.keys(newProfiles).forEach(addr => {
          newErrors[addr] = newProfiles[addr].error
        })
        return newErrors
      })
    } catch (err) {
      console.error('Error fetching multiple ENS profiles:', err)
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch ENS profiles'
      setErrors(prev => {
        const newErrors = { ...prev }
        addrList.forEach(addr => {
          newErrors[addr.toLowerCase()] = errorMessage
        })
        return newErrors
      })
    } finally {
      // Clear loading states
      const clearedLoadingStates: Record<string, boolean> = {}
      addrList.forEach(addr => {
        clearedLoadingStates[addr.toLowerCase()] = false
      })
      setLoadingStates(prev => ({ ...prev, ...clearedLoadingStates }))
    }
  }, [])

  // Fetch profiles when addresses change
  useEffect(() => {
    if (addresses.length > 0) {
      fetchProfiles(addresses)
    }
  }, [addresses, fetchProfiles])

  return {
    profiles,
    loadingStates,
    errors,
    refetch: () => fetchProfiles(addresses),
  }
}

/**
 * Hook for getting display information for a profile
 */
export const useENSDisplayInfo = (address?: string) => {
  const { profile } = useENSProfile(address)

  const getDisplayInfo = useCallback(() => {
    if (!profile) {
      return {
        displayName: address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Unknown',
        avatar: null,
        isVerified: false,
        hasProfile: false,
      }
    }

    return {
      displayName: profile.displayName || profile.name || 
        (address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Unknown'),
      avatar: profile.avatar,
      isVerified: !!profile.hasProfile,
      hasProfile: profile.hasProfile,
      bio: profile.bio,
      website: profile.website,
      twitter: profile.twitter,
      github: profile.github,
    }
  }, [profile, address])

  return {
    profile,
    displayInfo: getDisplayInfo(),
  }
}

export default {
  useENSProfile,
  useENSProfiles,
  useENSDisplayInfo,
}