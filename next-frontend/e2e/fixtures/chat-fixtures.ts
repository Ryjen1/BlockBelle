/**
 * E2E Test Fixtures for BlockBelle Chat Application
 * 
 * This file contains shared test fixtures and utilities for E2E testing.
 * It provides mock data, helper functions, and setup/teardown utilities.
 */

import { test as base, Page } from '@playwright/test'

export interface MockUser {
  address: string
  ensName?: string
  displayName: string
  isVerified: boolean
  avatar?: string
  bio?: string
}

export interface MockMessage {
  sender: string
  receiver: string
  content: string
  timestamp: number
  type: 'private' | 'group'
}

export const MOCK_USERS: MockUser[] = [
  {
    address: '0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A',
    ensName: 'alice.eth',
    displayName: 'Alice Johnson',
    isVerified: true,
    avatar: 'https://example.com/avatars/alice.jpg',
    bio: 'Blockchain developer and ENS enthusiast'
  },
  {
    address: '0x8ba1f109551bD432803012645Hac136c32c3c0c4',
    ensName: 'bob.smith',
    displayName: 'Bob Smith',
    isVerified: true,
    avatar: 'https://example.com/avatars/bob.jpg',
    bio: 'Web3 designer'
  },
  {
    address: '0x1234567890123456789012345678901234567890',
    displayName: 'Charlie User',
    isVerified: false,
    bio: 'New user exploring the platform'
  },
  {
    address: '0x9876543210987654321098765432109876543210',
    ensName: 'dave.dev',
    displayName: 'Dave Developer',
    isVerified: true,
    avatar: 'https://example.com/avatars/dave.jpg'
  }
]

export const MOCK_MESSAGES: MockMessage[] = [
  {
    sender: '0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A',
    receiver: '0x8ba1f109551bD432803012645Hac136c32c3c0c4',
    content: 'Hey Bob! How is the new project going?',
    timestamp: Date.now() - 3600000,
    type: 'private'
  },
  {
    sender: '0x8ba1f109551bD432803012645Hac136c32c3c0c4',
    receiver: '0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A',
    content: 'Hi Alice! It\'s going great! Just finished the smart contract.',
    timestamp: Date.now() - 3500000,
    type: 'private'
  },
  {
    sender: '0x1234567890123456789012345678901234567890',
    receiver: '0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A',
    content: 'Hi Alice! I\'m new here and would love to connect.',
    timestamp: Date.now() - 1800000,
    type: 'private'
  }
]

export interface ChatTestFixtures {
  mockWalletConnection: (user: MockUser) => Promise<void>
  setupMockContract: () => Promise<void>
  waitForChatLoad: () => Promise<void>
  sendMessage: (content: string) => Promise<void>
  selectChat: (userAddress: string) => Promise<void>
  verifyMessageDelivery: (content: string) => Promise<void>
}

// Custom test fixtures
export const test = base.extend<ChatTestFixtures>({
  mockWalletConnection: async ({ page }, use) => {
    await use(async (user: MockUser) => {
      // Mock wallet connection
      await page.addInitScript((user) => {
        // Mock ethereum provider
        window.ethereum = {
          request: async ({ method, params }: any) => {
            switch (method) {
              case 'eth_accounts':
                return [user.address]
              case 'eth_chainId':
                return '0xa4ec' // Celo mainnet
              case 'personal_sign':
                return '0xmockedSignature'
              default:
                return null
            }
          },
          isMetaMask: true,
          selectedAddress: user.address
        }
        
        // Mock localStorage for user preferences
        localStorage.setItem('connectedAddress', user.address)
        localStorage.setItem('userProfile', JSON.stringify({
          address: user.address,
          displayName: user.displayName,
          isVerified: user.isVerified,
          ensName: user.ensName
        }))
      }, user)
    })
  },

  setupMockContract: async ({ page }, use) => {
    await use(async () => {
      // Mock contract responses
      await page.addInitScript(() => {
        // Mock wagmi readContract
        window.readContractMock = async (contractAddress: string, functionName: string, args?: any[]) => {
          switch (functionName) {
            case 'getAllUsers':
              return [
                '0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A',
                '0x8ba1f109551bD432803012645Hac136c32c3c0c4',
                '0x1234567890123456789012345678901234567890',
                '0x9876543210987654321098765432109876543210'
              ]
            case 'getUserDetails':
              const address = args[0].toLowerCase()
              const mockUsers: Record<string, any> = {
                '0x742d35cc6cF6b4633f82c9b7c7c31e7c7b6c8f9a': {
                  ensName: 'alice.eth',
                  avatarHash: 'QmAlice123',
                  registered: true
                },
                '0x8ba1f109551bd432803012645hac136c32c3c0c4': {
                  ensName: 'bob.smith',
                  avatarHash: 'QmBob456',
                  registered: true
                },
                '0x1234567890123456789012345678901234567890': {
                  ensName: '',
                  avatarHash: '',
                  registered: false
                },
                '0x9876543210987654321098765432109876543210': {
                  ensName: 'dave.dev',
                  avatarHash: 'QmDave789',
                  registered: true
                }
              }
              return mockUsers[address] || { ensName: '', avatarHash: '', registered: false }
            case 'getConversation':
              // Return mock conversation data
              return [
                {
                  sender: args[0],
                  receiver: args[1],
                  content: 'Hey there!',
                  timestamp: Math.floor(Date.now() / 1000) - 3600
                }
              ]
            default:
              return null
          }
        }

        // Mock wagmi writeContract
        window.writeContractMock = async (contractAddress: string, functionName: string, args?: any[]) => {
          if (functionName === 'sendMessage') {
            // Simulate successful message send
            return '0xmockedTransactionHash'
          }
          return null
        }

        // Mock useReadContract hook
        window.mockUseReadContract = (config: any) => ({
          data: window.readContractMock?.(config.address, config.functionName, config.args),
          isLoading: false,
          error: null,
          refetch: () => Promise.resolve()
        })

        // Mock useWriteContract hook
        window.mockUseWriteContract = () => ({
          writeContract: window.writeContractMock,
          data: '0xmockedHash',
          isPending: false,
          error: null
        })
      })
    })
  },

  waitForChatLoad: async ({ page }, use) => {
    await use(async () => {
      await page.waitForSelector('[data-testid="main-chat"]', { timeout: 10000 })
      await page.waitForFunction(() => {
        const chatList = document.querySelector('[data-testid="chat-list"]')
        return chatList && chatList.children.length > 0
      }, { timeout: 5000 })
    })
  },

  sendMessage: async ({ page }, use) => {
    await use(async (content: string) => {
      const messageInput = page.locator('[data-testid="message-input"]')
      const sendButton = page.locator('[data-testid="send-button"]')
      
      await messageInput.fill(content)
      await sendButton.click()
      
      // Wait for message to appear in the chat
      await page.waitForFunction((msgContent) => {
        const messages = document.querySelectorAll('[data-testid="message-bubble"]')
        return Array.from(messages).some(message => 
          message.textContent?.includes(msgContent)
        )
      }, content, { timeout: 5000 })
    })
  },

  selectChat: async ({ page }, use) => {
    await use(async (userAddress: string) => {
      const chatItem = page.locator(`[data-testid="chat-item-${userAddress}"]`)
      await chatItem.click()
      
      // Wait for chat to load
      await page.waitForSelector('[data-testid="chat-header"]', { timeout: 3000 })
    })
  },

  verifyMessageDelivery: async ({ page }, use) => {
    await use(async (content: string) => {
      await page.waitForFunction((msgContent) => {
        const messages = document.querySelectorAll('[data-testid="message-bubble"]')
        return Array.from(messages).some(message => {
          const bubbleText = message.textContent || ''
          return bubbleText.includes(msgContent) && 
                 message.querySelector('[data-testid="message-timestamp"]')
        })
      }, content, { timeout: 8000 })
    })
  }
})

export { expect } from '@playwright/test'