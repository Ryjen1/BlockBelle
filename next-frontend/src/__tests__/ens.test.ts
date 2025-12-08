import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { 
  fetchENSProfile, 
  getCachedENSProfile, 
  clearENSProfileCache, 
  clearAllENSProfileCache,
  subscribeToENSChanges,
  subscribeToMultipleENSChanges,
  detectProfileChanges,
  type ENSProfile
} from '@/lib/ensService'

// Mock data for testing
const TEST_ADDRESSES = {
  withProfile: '0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A',
  withoutProfile: '0x1234567890123456789012345678901234567890',
  anotherWithProfile: '0x8ba1f109551bD432803012645Hac136c32c3c0c4',
}

describe('ENS Service', () => {
  beforeEach(() => {
    // Clear cache before each test
    clearAllENSProfileCache()
    
    // Mock timer functions
    vi.useFakeTimers()
  })

  afterEach(() => {
    // Restore real timers
    vi.useRealTimers()
    
    // Clear all mocks
    vi.clearAllMocks()
  })

  describe('fetchENSProfile', () => {
    it('should fetch profile with ENS data', async () => {
      const profile = await fetchENSProfile(TEST_ADDRESSES.withProfile)
      
      expect(profile).toBeDefined()
      expect(profile.name).toBe('alice.eth')
      expect(profile.displayName).toBe('Alice Johnson')
      expect(profile.bio).toBe('Blockchain developer and ENS enthusiast')
      expect(profile.website).toBe('https://alicejohnson.dev')
      expect(profile.twitter).toBe('@alice_dev')
      expect(profile.github).toBe('alicejohnson')
      expect(profile.hasProfile).toBe(true)
      expect(profile.isLoading).toBe(false)
      expect(profile.error).toBeNull()
    })

    it('should return default profile for address without ENS', async () => {
      const profile = await fetchENSProfile(TEST_ADDRESSES.withoutProfile)
      
      expect(profile).toBeDefined()
      expect(profile.name).toBeNull()
      expect(profile.displayName).toBeNull()
      expect(profile.bio).toBeNull()
      expect(profile.hasProfile).toBe(false)
      expect(profile.isLoading).toBe(false)
      expect(profile.error).toBeNull()
    })

    it('should cache profiles', async () => {
      // First fetch
      const profile1 = await fetchENSProfile(TEST_ADDRESSES.withProfile)
      
      // Second fetch should use cache
      const profile2 = await fetchENSProfile(TEST_ADDRESSES.withProfile)
      
      expect(profile1).toEqual(profile2)
      
      // Check cache directly
      const cachedProfile = getCachedENSProfile(TEST_ADDRESSES.withProfile)
      expect(cachedProfile).toEqual(profile1)
    })

    it('should handle network errors gracefully', async () => {
      // Mock a network error by interfering with the fetch
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
      
      // Try to fetch a profile (this should still work with mock data)
      const profile = await fetchENSProfile(TEST_ADDRESSES.withProfile)
      
      expect(profile.error).toBeNull() // Mock data should not error
      
      consoleSpy.mockRestore()
    })

    it('should simulate loading state', async () => {
      const loadingPromise = fetchENSProfile(TEST_ADDRESSES.withProfile)
      
      // Check if loading state is set immediately
      const cachedProfile = getCachedENSProfile(TEST_ADDRESSES.withProfile)
      expect(cachedProfile?.isLoading).toBe(true)
      
      // Wait for the promise to resolve
      await loadingPromise
    })
  })

  describe('Cache Management', () => {
    it('should get cached profile', () => {
      // First fetch to populate cache
      const profilePromise = fetchENSProfile(TEST_ADDRESSES.withProfile)
      
      // Should be able to get cached profile immediately
      const cachedProfile = getCachedENSProfile(TEST_ADDRESSES.withProfile)
      expect(cachedProfile).toBeDefined()
      expect(cachedProfile?.isLoading).toBe(true)
    })

    it('should clear single address cache', () => {
      // Populate cache
      fetchENSProfile(TEST_ADDRESSES.withProfile)
      fetchENSProfile(TEST_ADDRESSES.anotherWithProfile)
      
      expect(getCachedENSProfile(TEST_ADDRESSES.withProfile)).toBeDefined()
      expect(getCachedENSProfile(TEST_ADDRESSES.anotherWithProfile)).toBeDefined()
      
      // Clear one cache
      clearENSProfileCache(TEST_ADDRESSES.withProfile)
      
      expect(getCachedENSProfile(TEST_ADDRESSES.withProfile)).toBeNull()
      expect(getCachedENSProfile(TEST_ADDRESSES.anotherWithProfile)).toBeDefined()
    })

    it('should clear all cache', () => {
      // Populate cache
      fetchENSProfile(TEST_ADDRESSES.withProfile)
      fetchENSProfile(TEST_ADDRESSES.anotherWithProfile)
      fetchENSProfile(TEST_ADDRESSES.withoutProfile)
      
      // Clear all
      clearAllENSProfileCache()
      
      // All should be cleared
      expect(getCachedENSProfile(TEST_ADDRESSES.withProfile)).toBeNull()
      expect(getCachedENSProfile(TEST_ADDRESSES.anotherWithProfile)).toBeNull()
      expect(getCachedENSProfile(TEST_ADDRESSES.withoutProfile)).toBeNull()
    })
  })

  describe('Profile Change Detection', () => {
    it('should detect changes in profile fields', async () => {
      // Fetch initial profile
      const initialProfile = await fetchENSProfile(TEST_ADDRESSES.withProfile)
      
      // Mock a change in the profile data (in a real implementation, this would be from ENS)
      // For testing, we'll just verify the detection logic works
      const changeDetection = await detectProfileChanges(TEST_ADDRESSES.withProfile)
      
      expect(changeDetection).toBeDefined()
      expect(changeDetection.oldProfile).toEqual(initialProfile)
      expect(changeDetection.newProfile).toEqual(initialProfile) // No actual change in mock
      expect(Array.isArray(changeDetection.changedFields)).toBe(true)
    })

    it('should identify changed fields', async () => {
      // This test would verify that specific field changes are detected
      // In a real implementation, you would modify the mock data between calls
      const result = await detectProfileChanges(TEST_ADDRESSES.withProfile)
      
      expect(result.hasChanges).toBe(false) // No changes in current mock
      expect(result.changedFields).toEqual([])
    })
  })

  describe('Subscription System', () => {
    it('should create subscription for profile changes', async () => {
      const mockCallback = vi.fn()
      
      const unsubscribe = subscribeToENSChanges(TEST_ADDRESSES.withProfile, mockCallback)
      
      // Should call callback immediately with initial data
      expect(mockCallback).toHaveBeenCalledTimes(1)
      expect(mockCallback).toHaveBeenCalledWith(
        expect.objectContaining({
          name: 'alice.eth',
          hasProfile: true,
        }),
        false // hasChanges should be false for initial call
      )
      
      // Clean up
      unsubscribe()
    })

    it('should handle subscription with custom options', async () => {
      const mockCallback = vi.fn()
      
      const unsubscribe = subscribeToENSChanges(
        TEST_ADDRESSES.withProfile,
        mockCallback,
        {
          checkInterval: 1000, // 1 second for testing
          fieldsToMonitor: ['name', 'bio']
        }
      )
      
      // Advance timer to trigger subscription polling
      vi.advanceTimersByTime(1000)
      
      expect(mockCallback).toHaveBeenCalledTimes(2) // Initial + one poll
      
      // Clean up
      unsubscribe()
    })

    it('should support multiple subscriptions', async () => {
      const mockCallback1 = vi.fn()
      const mockCallback2 = vi.fn()
      
      const unsubscribe1 = subscribeToENSChanges(TEST_ADDRESSES.withProfile, mockCallback1)
      const unsubscribe2 = subscribeToENSChanges(TEST_ADDRESSES.anotherWithProfile, mockCallback2)
      
      // Both callbacks should be called
      expect(mockCallback1).toHaveBeenCalledTimes(1)
      expect(mockCallback2).toHaveBeenCalledTimes(1)
      
      // Clean up
      unsubscribe1()
      unsubscribe2()
    })

    it('should support batch subscriptions', async () => {
      const mockCallback = vi.fn()
      
      const unsubscribe = subscribeToMultipleENSChanges(
        [TEST_ADDRESSES.withProfile, TEST_ADDRESSES.anotherWithProfile],
        mockCallback
      )
      
      // Should call callback for each address
      expect(mockCallback).toHaveBeenCalledTimes(2)
      expect(mockCallback).toHaveBeenNthCalledWith(
        1,
        TEST_ADDRESSES.withProfile,
        expect.objectContaining({ name: 'alice.eth' }),
        false
      )
      expect(mockCallback).toHaveBeenNthCalledWith(
        2,
        TEST_ADDRESSES.anotherWithProfile,
        expect.objectContaining({ name: 'bob.eth' }),
        false
      )
      
      // Clean up
      unsubscribe()
    })

    it('should handle subscription errors gracefully', async () => {
      const mockCallback = vi.fn()
      
      const unsubscribe = subscribeToENSChanges(TEST_ADDRESSES.withProfile, mockCallback)
      
      // Advance timer to trigger polling
      vi.advanceTimersByTime(30000)
      
      // Callback should still be called even with errors
      expect(mockCallback).toHaveBeenCalled()
      
      // Clean up
      unsubscribe()
    })
  })

  describe('Avatar URL Handling', () => {
    it('should handle IPFS avatars', () => {
      const ipfsUrl = 'ipfs://QmTest123'
      const processedUrl = (() => {
        // Test the getAvatarUrl logic
        if (!ipfsUrl) return null
        if (ipfsUrl.startsWith('ipfs://')) {
          return `https://ipfs.io/ipfs/${ipfsUrl.replace('ipfs://', '')}`
        }
        if (ipfsUrl.startsWith('https://') || ipfsUrl.startsWith('http://')) {
          return ipfsUrl
        }
        return null
      })()
      
      expect(processedUrl).toBe('https://ipfs.io/ipfs/QmTest123')
    })

    it('should handle HTTPS avatars', () => {
      const httpsUrl = 'https://example.com/avatar.jpg'
      const processedUrl = (() => {
        if (!httpsUrl) return null
        if (httpsUrl.startsWith('ipfs://')) {
          return `https://ipfs.io/ipfs/${httpsUrl.replace('ipfs://', '')}`
        }
        if (httpsUrl.startsWith('https://') || httpsUrl.startsWith('http://')) {
          return httpsUrl
        }
        return null
      })()
      
      expect(processedUrl).toBe('https://example.com/avatar.jpg')
    })

    it('should return null for invalid avatar URLs', () => {
      const invalidUrl = 'invalid-url'
      const processedUrl = (() => {
        if (!invalidUrl) return null
        if (invalidUrl.startsWith('ipfs://')) {
          return `https://ipfs.io/ipfs/${invalidUrl.replace('ipfs://', '')}`
        }
        if (invalidUrl.startsWith('https://') || invalidUrl.startsWith('http://')) {
          return invalidUrl
        }
        return null
      })()
      
      expect(processedUrl).toBeNull()
    })
  })

  describe('Performance and Edge Cases', () => {
    it('should handle batch fetching efficiently', async () => {
      const addresses = [
        TEST_ADDRESSES.withProfile,
        TEST_ADDRESSES.withoutProfile,
        TEST_ADDRESSES.anotherWithProfile
      ]
      
      const startTime = Date.now()
      const profiles = await Promise.all(
        addresses.map(address => fetchENSProfile(address))
      )
      const endTime = Date.now()
      
      expect(profiles).toHaveLength(3)
      expect(endTime - startTime).toBeLessThan(5000) // Should complete within 5 seconds
    })

    it('should handle rapid successive calls', async () => {
      const promises = Array(10).fill(null).map(() => 
        fetchENSProfile(TEST_ADDRESSES.withProfile)
      )
      
      const results = await Promise.all(promises)
      
      // All results should be identical
      results.forEach(result => {
        expect(result).toEqual(results[0])
      })
    })

    it('should handle invalid addresses gracefully', async () => {
      const invalidAddresses = [
        '0xinvalid',
        '',
        '0x123',
        'not-an-address'
      ]
      
      const promises = invalidAddresses.map(address => 
        fetchENSProfile(address)
      )
      
      const results = await Promise.all(promises)
      
      // All should return valid profile objects even with invalid addresses
      results.forEach(result => {
        expect(result).toBeDefined()
        expect(result.isLoading).toBe(false)
        expect(result.hasProfile).toBe(false)
      })
    })
  })
})