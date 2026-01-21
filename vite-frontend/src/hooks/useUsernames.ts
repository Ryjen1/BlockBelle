import { useState, useEffect, useCallback } from 'react'
import { CONTRACT_ADDRESSES } from '../config/contracts'

interface UsernameCache {
  [address: string]: string
}

export function useUsernames() {
  const [usernameCache, setUsernameCache] = useState<UsernameCache>({})
  const [allUsers, setAllUsers] = useState<string[]>([])
  const [isLoadingUsers, setIsLoadingUsers] = useState(false)

  // Load cached usernames from localStorage on mount
  useEffect(() => {
    const cached = localStorage.getItem('whispr_usernames')
    if (cached) {
      try {
        setUsernameCache(JSON.parse(cached))
      } catch (error) {
        console.error('Error loading username cache:', error)
      }
    }
  }, [])

  // Save cache to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('whispr_usernames', JSON.stringify(usernameCache))
  }, [usernameCache])

  const resolveUsername = useCallback(async (address: string): Promise<string> => {
    // Return cached username if available
    if (usernameCache[address]) {
      return usernameCache[address]
    }

    try {
      // For now, let's try a direct approach with a simple fetch to a backend endpoint
      // In a real app, you'd want to use wagmi's readContract properly
      const response = await fetch('/api/user-details', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address }),
      })

      if (response.ok) {
        const data = await response.json()
        const username = data.registered && data.ensName ? data.ensName : `${address.slice(0, 6)}...${address.slice(-4)}`

        // Cache the username
        setUsernameCache(prev => ({
          ...prev,
          [address]: username
        }))

        return username
      }
    } catch (error) {
      console.error('Error resolving username for', address, error)
    }

    // Fallback to address format
    const fallbackName = `${address.slice(0, 6)}...${address.slice(-4)}`
    setUsernameCache(prev => ({
      ...prev,
      [address]: fallbackName
    }))

    return fallbackName
  }, [usernameCache])

  const getCachedUsername = useCallback((address: string): string => {
    return usernameCache[address] || `${address.slice(0, 6)}...${address.slice(-4)}`
  }, [usernameCache])

  const preloadUsernames = useCallback(async (addresses: string[]) => {
    const promises = addresses.map(addr => resolveUsername(addr))
    await Promise.allSettled(promises)
  }, [resolveUsername])

  const setUsers = useCallback((users: string[]) => {
    setAllUsers(users)
  }, [])

  const addUser = useCallback((userAddress: string) => {
    setAllUsers(prev => {
      if (!prev.includes(userAddress)) {
        return [...prev, userAddress]
      }
      return prev
    })
  }, [])

  return {
    resolveUsername,
    getCachedUsername,
    preloadUsernames,
    cache: usernameCache,
    allUsers,
    isLoadingUsers,
    setUsers,
    addUser
  }
}