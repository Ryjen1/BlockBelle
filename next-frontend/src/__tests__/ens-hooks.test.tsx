import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act, waitFor } from '@testing-library/react'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiConfig } from 'wagmi'
import { celo } from 'wagmi/chains'
import { http, createConfig } from 'wagmi'
import { 
  useENSProfile, 
  useENSProfiles, 
  useENSDisplayInfo 
} from '@/hooks/useENSProfile'

// Mock wagmi and react-query
vi.mock('wagmi', () => ({
  useAccount: vi.fn(() => ({
    address: '0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A',
    isConnected: true,
  })),
}))

vi.mock('@/lib/ensService', () => ({
  fetchENSProfile: vi.fn(),
  getCachedENSProfile: vi.fn(),
  subscribeToENSChanges: vi.fn(() => vi.fn()),
  clearENSProfileCache: vi.fn(),
}))

// Create a wrapper component for testing hooks
const createWrapper = () => {
  const config = createConfig({
    chains: [celo],
    transports: {
      [celo.id]: http(),
    },
  })

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  return ({ children }: { children: ReactNode }) => (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiConfig>
  )
}

const wrapper = createWrapper()

describe('ENS Hooks', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('useENSProfile', () => {
    it('should fetch profile for provided address', async () => {
      const mockProfile = {
        name: 'alice.eth',
        displayName: 'Alice Johnson',
        bio: 'Blockchain developer',
        avatar: 'https://example.com/avatar.jpg',
        website: 'https://alice.dev',
        twitter: '@alice_dev',
        github: 'alicejohnson',
        isLoading: false,
        error: null,
        hasProfile: true,
      }

      const { fetchENSProfile, getCachedENSProfile } = await import('@/lib/ensService')
      vi.mocked(fetchENSProfile).mockResolvedValue(mockProfile)
      vi.mocked(getCachedENSProfile).mockReturnValue(null)

      const { result } = renderHook(() => useENSProfile('0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A'), {
        wrapper,
      })

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.profile).toEqual(mockProfile)
      expect(result.current.error).toBeNull()
      expect(fetchENSProfile).toHaveBeenCalledWith('0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A')
    })

    it('should use connected address when no address provided', async () => {
      const mockProfile = {
        name: 'bob.eth',
        displayName: 'Bob Smith',
        bio: 'Web3 designer',
        avatar: null,
        website: null,
        twitter: null,
        github: null,
        isLoading: false,
        error: null,
        hasProfile: true,
      }

      const { fetchENSProfile } = await import('@/lib/ensService')
      vi.mocked(fetchENSProfile).mockResolvedValue(mockProfile)

      const { result } = renderHook(() => useENSProfile(), {
        wrapper,
      })

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.profile).toEqual(mockProfile)
      expect(fetchENSProfile).toHaveBeenCalledWith('0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A')
    })

    it('should handle loading state', async () => {
      const { fetchENSProfile } = await import('@/lib/ensService')
      vi.mocked(fetchENSProfile).mockImplementation(
        () => new Promise(resolve => setTimeout(() => resolve({
          name: null,
          displayName: null,
          bio: null,
          avatar: null,
          website: null,
          twitter: null,
          github: null,
          isLoading: false,
          error: null,
          hasProfile: false,
        }), 100))
      )

      const { result } = renderHook(() => useENSProfile('0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A'), {
        wrapper,
      })

      expect(result.current.isLoading).toBe(true)
      expect(result.current.profile).toBeNull()

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })
    })

    it('should handle errors gracefully', async () => {
      const error = new Error('Failed to fetch profile')
      
      const { fetchENSProfile } = await import('@/lib/ensService')
      vi.mocked(fetchENSProfile).mockRejectedValue(error)

      const { result } = renderHook(() => useENSProfile('0xinvalid'), {
        wrapper,
      })

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      expect(result.current.error).toBe('Failed to fetch profile')
      expect(result.current.profile).toBeNull()
    })

    it('should provide refetch function', async () => {
      const mockProfile = {
        name: 'alice.eth',
        displayName: 'Alice Johnson',
        bio: 'Updated bio',
        avatar: null,
        website: null,
        twitter: null,
        github: null,
        isLoading: false,
        error: null,
        hasProfile: true,
      }

      const { fetchENSProfile } = await import('@/lib/ensService')
      vi.mocked(fetchENSProfile).mockResolvedValue(mockProfile)

      const { result } = renderHook(() => useENSProfile('0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A'), {
        wrapper,
      })

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
      })

      // Call refetch
      await act(async () => {
        await result.current.refetch()
      })

      expect(fetchENSProfile).toHaveBeenCalledTimes(2)
    })
  })

  describe('useENSProfiles', () => {
    it('should fetch multiple profiles', async () => {
      const addresses = [
        '0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A',
        '0x8ba1f109551bD432803012645Hac136c32c3c0c4',
      ]

      const mockProfiles = {
        '0x742d35cc6cF6b4633f82c9b7c7c31e7c7b6c8f9a': {
          name: 'alice.eth',
          displayName: 'Alice Johnson',
          bio: 'Developer',
          avatar: null,
          website: null,
          twitter: null,
          github: null,
          isLoading: false,
          error: null,
          hasProfile: true,
        },
        '0x8ba1f109551bd432803012645hac136c32c3c0c4': {
          name: 'bob.eth',
          displayName: 'Bob Smith',
          bio: 'Designer',
          avatar: null,
          website: null,
          twitter: null,
          github: null,
          isLoading: false,
          error: null,
          hasProfile: true,
        },
      }

      const { fetchMultipleENSProfiles } = await import('@/lib/ensService')
      vi.mocked(fetchMultipleENSProfiles).mockResolvedValue(mockProfiles)

      const { result } = renderHook(() => useENSProfiles(addresses), {
        wrapper,
      })

      await waitFor(() => {
        expect(result.current.loadingStates['0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A']).toBe(false)
      })

      expect(result.current.profiles).toEqual(mockProfiles)
      expect(fetchMultipleENSProfiles).toHaveBeenCalledWith(addresses)
    })

    it('should handle loading states for multiple addresses', async () => {
      const addresses = ['0x123', '0x456', '0x789']

      const { result } = renderHook(() => useENSProfiles(addresses), {
        wrapper,
      })

      // Initially all should be loading
      Object.values(result.current.loadingStates).forEach(loading => {
        expect(loading).toBe(true)
      })
    })

    it('should handle errors for individual addresses', async () => {
      const addresses = ['0xvalid', '0xinvalid']

      const mockErrorProfiles = {
        '0xvalid': {
          name: 'valid.eth',
          displayName: 'Valid User',
          bio: null,
          avatar: null,
          website: null,
          twitter: null,
          github: null,
          isLoading: false,
          error: null,
          hasProfile: true,
        },
        '0xinvalid': {
          name: null,
          displayName: null,
          bio: null,
          avatar: null,
          website: null,
          twitter: null,
          github: null,
          isLoading: false,
          error: 'Invalid address',
          hasProfile: false,
        },
      }

      const { fetchMultipleENSProfiles } = await import('@/lib/ensService')
      vi.mocked(fetchMultipleENSProfiles).mockResolvedValue(mockErrorProfiles)

      const { result } = renderHook(() => useENSProfiles(addresses), {
        wrapper,
      })

      await waitFor(() => {
        expect(result.current.errors['0xinvalid']).toBe('Invalid address')
      })

      expect(result.current.profiles['0xvalid'].error).toBeNull()
      expect(result.current.errors['0xinvalid']).toBe('Invalid address')
    })
  })

  describe('useENSDisplayInfo', () => {
    it('should return display info from profile', async () => {
      const mockProfile = {
        name: 'alice.eth',
        displayName: 'Alice Johnson',
        bio: 'Blockchain developer and ENS enthusiast',
        avatar: 'https://example.com/avatar.jpg',
        website: 'https://alice.dev',
        twitter: '@alice_dev',
        github: 'alicejohnson',
        isLoading: false,
        error: null,
        hasProfile: true,
      }

      const { fetchENSProfile } = await import('@/lib/ensService')
      vi.mocked(fetchENSProfile).mockResolvedValue(mockProfile)

      const { result } = renderHook(() => useENSDisplayInfo('0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A'), {
        wrapper,
      })

      await waitFor(() => {
        expect(result.current.profile).toBeDefined()
      })

      expect(result.current.displayInfo).toEqual({
        displayName: 'Alice Johnson',
        avatar: 'https://example.com/avatar.jpg',
        isVerified: true,
        hasProfile: true,
        bio: 'Blockchain developer and ENS enthusiast',
        website: 'https://alice.dev',
        twitter: '@alice_dev',
        github: 'alicejohnson',
      })
    })

    it('should fallback to address when no profile', async () => {
      const mockProfile = {
        name: null,
        displayName: null,
        bio: null,
        avatar: null,
        website: null,
        twitter: null,
        github: null,
        isLoading: false,
        error: null,
        hasProfile: false,
      }

      const { fetchENSProfile } = await import('@/lib/ensService')
      vi.mocked(fetchENSProfile).mockResolvedValue(mockProfile)

      const { result } = renderHook(() => useENSDisplayInfo('0x1234567890123456789012345678901234567890'), {
        wrapper,
      })

      await waitFor(() => {
        expect(result.current.profile).toBeDefined()
      })

      expect(result.current.displayInfo).toEqual({
        displayName: '123456...7890',
        avatar: null,
        isVerified: false,
        hasProfile: false,
        bio: null,
        website: null,
        twitter: null,
        github: null,
      })
    })

    it('should handle missing address gracefully', async () => {
      const { result } = renderHook(() => useENSDisplayInfo(), {
        wrapper,
      })

      expect(result.current.displayInfo).toEqual({
        displayName: 'Unknown',
        avatar: null,
        isVerified: false,
        hasProfile: false,
        bio: undefined,
        website: undefined,
        twitter: undefined,
        github: undefined,
      })
    })
  })

  describe('Integration with ENS Service', () => {
    it('should set up subscription for profile changes', async () => {
      const mockProfile = {
        name: 'alice.eth',
        displayName: 'Alice Johnson',
        bio: 'Developer',
        avatar: null,
        website: null,
        twitter: null,
        github: null,
        isLoading: false,
        error: null,
        hasProfile: true,
      }

      const { fetchENSProfile, subscribeToENSChanges } = await import('@/lib/ensService')
      vi.mocked(fetchENSProfile).mockResolvedValue(mockProfile)
      
      const mockUnsubscribe = vi.fn()
      vi.mocked(subscribeToENSChanges).mockReturnValue(mockUnsubscribe)

      const { result } = renderHook(() => useENSProfile('0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A'), {
        wrapper,
      })

      await waitFor(() => {
        expect(result.current.profile).toBeDefined()
      })

      expect(subscribeToENSChanges).toHaveBeenCalledWith(
        '0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A',
        expect.any(Function)
      )

      // Cleanup should call unsubscribe
      result.unmount()
      expect(mockUnsubscribe).toHaveBeenCalled()
    })
  })
})