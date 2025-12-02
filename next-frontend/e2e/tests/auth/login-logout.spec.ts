/**
 * E2E Tests for Login and Logout Flows
 * 
 * These tests verify authentication functionality including:
 * - Wallet connection and disconnection
 * - User session management
 * - Authentication state persistence
 * - Login error handling
 */

import { test, expect } from '../fixtures/chat-fixtures'
import { MOCK_USERS } from '../fixtures/chat-fixtures'

test.describe('Login and Logout Flows', () => {
  test.beforeEach(async ({ page }) => {
    // Clear any existing session
    await page.context().clearCookies()
    await page.goto('/')
  })

  test.describe('Wallet Connection', () => {
    test('should connect wallet successfully', async ({ 
      page, 
      mockWalletConnection
    }) => {
      const user = MOCK_USERS[0] // Alice

      // Mock wallet not connected initially
      await page.addInitScript(() => {
        window.ethereum = {
          request: async ({ method, params }: any) => {
            switch (method) {
              case 'eth_accounts':
                return [] // No accounts connected initially
              case 'eth_chainId':
                return '0xa4ec' // Celo mainnet
              default:
                return null
            }
          },
          isMetaMask: true
        }
      })

      // Click connect wallet button
      await page.locator('[data-testid="connect-wallet-button"]').click()

      // Select wallet (mock MetaMask)
      await page.locator('[data-testid="metamask-option"]').click()

      // Mock successful wallet connection
      await mockWalletConnection(user)

      // Verify wallet connected successfully
      await expect(page.locator('[data-testid="wallet-connected"]')).toBeVisible()
      await expect(page.locator('[data-testid="wallet-address"]')).toContainText(user.address.slice(0, 6))
      
      // Verify user profile is displayed
      await expect(page.locator('[data-testid="user-profile"]')).toBeVisible()
      await expect(page.locator('[data-testid="user-display-name"]')).toContainText(user.displayName)

      // Verify chat interface is accessible
      await expect(page.locator('[data-testid="main-chat"]')).toBeVisible()
    })

    test('should handle wallet connection rejection', async ({ 
      page 
    }) => {
      // Mock wallet that rejects connection
      await page.addInitScript(() => {
        window.ethereum = {
          request: async ({ method, params }: any) => {
            if (method === 'eth_requestAccounts') {
              throw new Error('User rejected the request')
            }
            return []
          },
          isMetaMask: true
        }
      })

      // Attempt to connect wallet
      await page.locator('[data-testid="connect-wallet-button"]').click()
      await page.locator('[data-testid="metamask-option"]').click()

      // Verify error handling
      await expect(page.locator('[data-testid="connection-error"]')).toBeVisible()
      await expect(page.locator('[data-testid="connection-error"]')).toContainText('Connection rejected')
      
      // Verify retry option is available
      await expect(page.locator('[data-testid="retry-connection-button"]')).toBeVisible()
    })

    test('should handle MetaMask not installed', async ({ 
      page 
    }) => {
      // Mock no wallet installed
      await page.addInitScript(() => {
        window.ethereum = undefined
      })

      // Attempt to connect wallet
      await page.locator('[data-testid="connect-wallet-button"]').click()

      // Verify wallet installation prompt
      await expect(page.locator('[data-testid="wallet-not-found"]')).toBeVisible()
      await expect(page.locator('[data-testid="install-metamask-button"]')).toBeVisible()
      
      // Verify instructions are provided
      await expect(page.locator('[data-testid="installation-instructions"]')).toContainText('install MetaMask')
    })

    test('should handle wrong network selection', async ({ 
      page, 
      mockWalletConnection
    }) => {
      const user = MOCK_USERS[0]

      // Mock wallet connected to wrong network
      await page.addInitScript(() => {
        window.ethereum = {
          request: async ({ method, params }: any) => {
            switch (method) {
              case 'eth_accounts':
                return [user.address]
              case 'eth_chainId':
                return '0x1' // Ethereum mainnet instead of Celo
              default:
                return null
            }
          },
          isMetaMask: true,
          selectedAddress: user.address
        }
      })

      await mockWalletConnection(user)
      await page.goto('/')

      // Verify network switch prompt
      await expect(page.locator('[data-testid="wrong-network-warning"]')).toBeVisible()
      await expect(page.locator('[data-testid="wrong-network-warning"]')).toContainText('Please switch to Celo network')
      await expect(page.locator('[data-testid="switch-network-button"]')).toBeVisible()

      // Simulate network switch
      await page.locator('[data-testid="switch-network-button"]').click()
      await page.waitForTimeout(2000)

      // Verify network switch success
      await expect(page.locator('[data-testid="network-switch-success"]')).toBeVisible()
      await expect(page.locator('[data-testid="current-network"]')).toContainText('Celo')
    })
  })

  test.describe('Session Management', () => {
    test('should maintain session across page refreshes', async ({ 
      page, 
      mockWalletConnection
    }) => {
      const user = MOCK_USERS[0]
      await mockWalletConnection(user)
      await page.goto('/')

      // Verify session is maintained
      await expect(page.locator('[data-testid="wallet-connected"]')).toBeVisible()
      await expect(page.locator('[data-testid="user-profile"]')).toBeVisible()

      // Refresh page
      await page.reload()
      await page.waitForTimeout(3000)

      // Verify session persists
      await expect(page.locator('[data-testid="wallet-connected"]')).toBeVisible()
      await expect(page.locator('[data-testid="user-display-name"]')).toContainText(user.displayName)

      // Verify chat state is preserved
      await expect(page.locator('[data-testid="main-chat"]')).toBeVisible()
      await expect(page.locator('[data-testid="chat-list"]')).toBeVisible()
    })

    test('should handle expired sessions', async ({ 
      page, 
      mockWalletConnection
    }) => {
      const user = MOCK_USERS[1] // Bob

      await mockWalletConnection(user)
      await page.goto('/')

      // Wait for session to be established
      await expect(page.locator('[data-testid="wallet-connected"]')).toBeVisible()

      // Mock session expiry by clearing localStorage
      await page.evaluate(() => {
        localStorage.clear()
        sessionStorage.clear()
      })

      // Force page reload
      await page.reload()
      await page.waitForTimeout(3000)

      // Verify session reset
      await expect(page.locator('[data-testid="connect-wallet-button"]')).toBeVisible()
      await expect(page.locator('[data-testid="wallet-connected"]')).not.toBeVisible()
    })

    test('should remember user preferences', async ({ 
      page, 
      mockWalletConnection
    }) => {
      const user = MOCK_USERS[0]

      await mockWalletConnection(user)
      await page.goto('/')

      // Set user preferences
      await page.locator('[data-testid="theme-toggle"]').click()
      await page.locator('[data-testid="language-selector"]').selectOption('es')
      
      // Verify preferences are saved
      await expect(page.locator('[data-testid="theme-dark"]')).toHaveClass(/active/)
      await expect(page.locator('[data-testid="language-spanish"]')).toHaveClass(/active/)

      // Refresh and verify preferences persist
      await page.reload()
      await page.waitForTimeout(2000)
      await expect(page.locator('[data-testid="theme-dark"]')).toHaveClass(/active/)
      await expect(page.locator('[data-testid="language-spanish"]')).toHaveClass(/active/)
    })
  })

  test.describe('Logout Functionality', () => {
    test('should disconnect wallet successfully', async ({ 
      page, 
      mockWalletConnection
    }) => {
      const user = MOCK_USERS[2] // Charlie (unverified)

      await mockWalletConnection(user)
      await page.goto('/')

      // Verify connected state
      await expect(page.locator('[data-testid="wallet-connected"]')).toBeVisible()

      // Open user menu
      await page.locator('[data-testid="user-profile-button"]').click()

      // Click disconnect
      await page.locator('[data-testid="disconnect-wallet-button"]').click()

      // Confirm disconnection
      await page.locator('[data-testid="confirm-disconnect"]').click()

      // Verify disconnection
      await expect(page.locator('[data-testid="connect-wallet-button"]')).toBeVisible()
      await expect(page.locator('[data-testid="wallet-connected"]')).not.toBeVisible()
      await expect(page.locator('[data-testid="user-profile"]')).not.toBeVisible()

      // Verify chat interface is hidden
      await expect(page.locator('[data-testid="main-chat"]')).not.toBeVisible()
    })

    test('should clear user data on logout', async ({ 
      page, 
      mockWalletConnection
    }) => {
      const user = MOCK_USERS[1] // Bob

      await mockWalletConnection(user)
      await page.goto('/')

      // Add some user data
      await page.evaluate(() => {
        localStorage.setItem('userMessages', JSON.stringify(['test message']))
        localStorage.setItem('chatPreferences', JSON.stringify({ theme: 'dark' }))
        sessionStorage.setItem('tempData', 'temp value')
      })

      // Disconnect wallet
      await page.locator('[data-testid="user-profile-button"]').click()
      await page.locator('[data-testid="disconnect-wallet-button"]').click()
      await page.locator('[data-testid="confirm-disconnect"]').click()

      // Verify data is cleared
      const userMessages = await page.evaluate(() => localStorage.getItem('userMessages'))
      const chatPreferences = await page.evaluate(() => localStorage.getItem('chatPreferences'))
      const tempData = await page.evaluate(() => sessionStorage.getItem('tempData'))

      expect(userMessages).toBeNull()
      expect(chatPreferences).toBeNull()
      expect(tempData).toBeNull()
    })

    test('should handle logout cancellation', async ({ 
      page, 
      mockWalletConnection
    }) => {
      const user = MOCK_USERS[3] // Dave

      await mockWalletConnection(user)
      await page.goto('/')

      // Open user menu
      await page.locator('[data-testid="user-profile-button"]').click()

      // Click disconnect
      await page.locator('[data-testid="disconnect-wallet-button"]').click()

      // Cancel disconnection
      await page.locator('[data-testid="cancel-disconnect"]').click()

      // Verify still connected
      await expect(page.locator('[data-testid="wallet-connected"]')).toBeVisible()
      await expect(page.locator('[data-testid="user-profile"]')).toBeVisible()
    })
  })

  test.describe('Authentication State Management', () => {
    test('should handle multiple wallet connections', async ({ 
      page, 
      mockWalletConnection
    }) => {
      const user1 = MOCK_USERS[0] // Alice
      const user2 = MOCK_USERS[1] // Bob

      // Connect first user
      await mockWalletConnection(user1)
      await page.goto('/')

      await expect(page.locator('[data-testid="wallet-connected"]')).toBeVisible()
      await expect(page.locator('[data-testid="user-display-name"]')).toContainText(user1.displayName)

      // Simulate wallet account change
      await page.addInitScript(() => {
        window.ethereum.request = async ({ method, params }: any) => {
          switch (method) {
            case 'eth_accounts':
              return [user2.address] // Switch to different account
            default:
              return null
          }
        }

        // Trigger accountsChanged event
        setTimeout(() => {
          window.ethereum.emit('accountsChanged', [user2.address])
        }, 100)
      })

      // Wait for account change processing
      await page.waitForTimeout(2000)

      // Verify user switched
      await expect(page.locator('[data-testid="user-display-name"]')).toContainText(user2.displayName)
      await expect(page.locator('[data-testid="account-switch-notification"]')).toBeVisible()
    })

    test('should handle wallet lock/unlock', async ({ 
      page, 
      mockWalletConnection
    }) => {
      const user = MOCK_USERS[2] // Charlie

      await mockWalletConnection(user)
      await page.goto('/')

      // Verify connected
      await expect(page.locator('[data-testid="wallet-connected"]')).toBeVisible()

      // Simulate wallet lock
      await page.addInitScript(() => {
        window.ethereum.request = async ({ method, params }: any) => {
          switch (method) {
            case 'eth_accounts':
              return [] // No accounts when locked
            default:
              return null
          }
        }
      })

      // Wait for lock detection
      await page.waitForTimeout(2000)

      // Verify wallet appears disconnected
      await expect(page.locator('[data-testid="wallet-disconnected-warning"]')).toBeVisible()
      await expect(page.locator('[data-testid="reconnect-prompt"]')).toBeVisible()

      // Simulate unlock
      await page.addInitScript(() => {
        window.ethereum.request = async ({ method, params }: any) => {
          switch (method) {
            case 'eth_accounts':
              return [user.address] // Account available again
            default:
              return null
          }
        }
      })

      // Auto-reconnect should trigger
      await page.waitForTimeout(1000)
      await expect(page.locator('[data-testid="wallet-reconnected"]')).toBeVisible()
    })

    test('should validate authentication before sensitive actions', async ({ 
      page, 
      mockWalletConnection
    }) => {
      const user = MOCK_USERS[0] // Alice

      await mockWalletConnection(user)
      await page.goto('/')

      // Navigate to sensitive action (e.g., group creation)
      await page.locator('[data-testid="create-group-chat-button"]').click()

      // Verify authentication validation
      await expect(page.locator('[data-testid="authentication-check"]')).toBeVisible()
      await expect(page.locator('[data-testid="authentication-check"]')).toContainText('Confirm your identity')
      
      // Mock successful authentication
      await page.locator('[data-testid="confirm-authentication"]').click()
      
      // Verify access granted
      await expect(page.locator('[data-testid="group-creation-form"]')).toBeVisible()
    })
  })

  test.describe('Error Recovery', () => {
    test('should recover from authentication errors', async ({ 
      page 
    }) => {
      // Start with no wallet
      await page.goto('/')

      // Try to access protected feature
      await page.locator('[data-testid="main-chat"]').click()

      // Verify authentication required message
      await expect(page.locator('[data-testid="authentication-required"]')).toBeVisible()
      await expect(page.locator('[data-testid="connect-wallet-prompt"]')).toBeVisible()

      // Connect wallet to recover
      await page.locator('[data-testid="connect-wallet-button"]').click()
      
      // Mock successful connection
      await page.addInitScript(() => {
        window.ethereum = {
          request: async ({ method, params }: any) => {
            switch (method) {
              case 'eth_accounts':
                return [MOCK_USERS[0].address]
              default:
                return null
            }
          },
          isMetaMask: true
        }
      })

      // Simulate connection
      await page.locator('[data-testid="metamask-option"]').click()

      // Verify recovery
      await expect(page.locator('[data-testid="main-chat"]')).toBeVisible()
      await expect(page.locator('[data-testid="authentication-required"]')).not.toBeVisible()
    })

    test('should handle network errors gracefully', async ({ 
      page, 
      mockWalletConnection
    }) => {
      const user = MOCK_USERS[0]

      await mockWalletConnection(user)
      await page.goto('/')

      // Simulate network error during authentication check
      await page.addInitScript(() => {
        window.readContractMock = async () => {
          throw new Error('Network error')
        }
      })

      // Try to access contract data
      await page.locator('[data-testid="refresh-chat-data"]').click()

      // Verify error handling
      await expect(page.locator('[data-testid="network-error-message"]')).toBeVisible()
      await expect(page.locator('[data-testid="retry-button"]')).toBeVisible()

      // Retry and verify recovery
      await page.locator('[data-testid="retry-button"]').click()
      await page.waitForTimeout(2000)

      // Should show loading state during retry
      await expect(page.locator('[data-testid="loading-indicator"]')).toBeVisible()
    })
  })
})