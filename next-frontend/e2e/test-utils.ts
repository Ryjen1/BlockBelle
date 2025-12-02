/**
 * Additional Test Utilities for BlockBelle E2E Tests
 * 
 * This file contains helper functions and utilities that can be shared
 * across different test files for common operations.
 */

import { Page, Browser, BrowserContext, expect } from '@playwright/test'

/**
 * Wait for element to be visible and return when ready
 */
export async function waitForElementVisible(
  page: Page,
  selector: string,
  timeout: number = 10000
) {
  await page.waitForSelector(selector, { timeout, state: 'visible' })
}

/**
 * Wait for element to be clickable
 */
export async function waitForElementClickable(
  page: Page,
  selector: string,
  timeout: number = 10000
) {
  await page.waitForSelector(selector, { timeout, state: 'visible' })
  await page.waitForFunction((sel) => {
    const element = document.querySelector(sel)
    return element && !element.hasAttribute('disabled')
  }, selector)
}

/**
 * Type text into input with realistic delays
 */
export async function typeText(
  page: Page,
  selector: string,
  text: string,
  delay: number = 50
) {
  const element = page.locator(selector)
  await element.click()
  await element.fill(text)
  
  // Simulate realistic typing by adding delays between keypresses
  await page.keyboard.press('End')
  await page.keyboard.press('Backspace')
  await page.keyboard.type(text, { delay })
}

/**
 * Mock blockchain network responses
 */
export function mockBlockchainNetwork(page: Page) {
  // Mock successful transaction
  page.addInitScript(() => {
    window.ethereum = {
      request: async ({ method, params }: any) => {
        switch (method) {
          case 'eth_accounts':
            return ['0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A']
          case 'eth_chainId':
            return '0xa4ec' // Celo mainnet
          case 'personal_sign':
            return '0xmockedSignature'
          default:
            return null
        }
      },
      isMetaMask: true,
      selectedAddress: '0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A',
      on: (event: string, callback: Function) => {
        // Mock wallet event listeners
        if (event === 'accountsChanged') {
          setTimeout(() => callback(['0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A']), 100)
        }
        if (event === 'chainChanged') {
          setTimeout(() => callback('0xa4ec'), 100)
        }
      },
      removeListener: () => {}
    }
  })
}

/**
 * Mock contract responses with realistic data
 */
export function mockContractResponses(page: Page) {
  page.addInitScript(() => {
    // Mock registry contract
    window.readContractMock = async (contractAddress: string, functionName: string, args?: any[]) => {
      switch (functionName) {
        case 'getAllUsers':
          return [
            '0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A', // Alice
            '0x8ba1f109551bD432803012645Hac136c32c3c0c4', // Bob
            '0x1234567890123456789012345678901234567890', // Charlie
            '0x9876543210987654321098765432109876543210'  // Dave
          ]
        
        case 'getUserDetails':
          const address = args[0].toLowerCase()
          const users: Record<string, any> = {
            '0x742d35cc6cF6b4633f82c9b7c7c31e7c7b6c8f9a': {
              ensName: 'alice.eth',
              avatarHash: 'QmAlice123',
              registered: true,
              displayName: 'Alice Johnson',
              bio: 'Blockchain developer'
            },
            '0x8ba1f109551bd432803012645hac136c32c3c0c4': {
              ensName: 'bob.smith',
              avatarHash: 'QmBob456',
              registered: true,
              displayName: 'Bob Smith',
              bio: 'Web3 designer'
            },
            '0x1234567890123456789012345678901234567890': {
              ensName: '',
              avatarHash: '',
              registered: false,
              displayName: 'Charlie User',
              bio: 'New user'
            },
            '0x9876543210987654321098765432109876543210': {
              ensName: 'dave.dev',
              avatarHash: 'QmDave789',
              registered: true,
              displayName: 'Dave Developer',
              bio: 'Smart contract developer'
            }
          }
          return users[address] || { ensName: '', avatarHash: '', registered: false }
        
        case 'getConversation':
          return [
            {
              sender: args[0],
              receiver: args[1],
              content: 'Hey there! Welcome to the chat.',
              timestamp: Math.floor(Date.now() / 1000) - 3600,
              messageType: 'text'
            },
            {
              sender: args[1],
              receiver: args[0],
              content: 'Hi! Thanks for the warm welcome.',
              timestamp: Math.floor(Date.now() / 1000) - 3500,
              messageType: 'text'
            }
          ]
        
        default:
          return null
      }
    }

    // Mock write contract
    window.writeContractMock = async (contractAddress: string, functionName: string, args?: any[]) => {
      if (functionName === 'sendMessage') {
        // Simulate transaction delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        return '0xmockedTransactionHash123456789'
      }
      return null
    }

    // Mock verification status
    window.getVerificationStatus = (address: string) => {
      const verifiedUsers = [
        '0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A',
        '0x8ba1f109551bD432803012645Hac136c32c3c0c4',
        '0x9876543210987654321098765432109876543210'
      ]
      return verifiedUsers.includes(address.toLowerCase())
    }
  })
}

/**
 * Create realistic user scenarios
 */
export async function createRealisticUserScenario(page: Page, userType: 'verified' | 'unverified' = 'verified') {
  const users = {
    verified: {
      address: '0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A',
      ensName: 'alice.eth',
      displayName: 'Alice Johnson',
      isVerified: true
    },
    unverified: {
      address: '0x1234567890123456789012345678901234567890',
      ensName: '',
      displayName: 'Charlie User',
      isVerified: false
    }
  }

  const user = users[userType]
  
  // Mock wallet connection
  await page.addInitScript((user) => {
    window.ethereum = {
      request: async ({ method, params }: any) => {
        switch (method) {
          case 'eth_accounts':
            return [user.address]
          case 'eth_chainId':
            return '0xa4ec'
          default:
            return null
        }
      },
      isMetaMask: true,
      selectedAddress: user.address
    }
  }, user)

  // Mock localStorage with user data
  await page.evaluate((user) => {
    localStorage.setItem('connectedAddress', user.address)
    localStorage.setItem('userProfile', JSON.stringify({
      address: user.address,
      displayName: user.displayName,
      isVerified: user.isVerified,
      ensName: user.ensName
    }))
  }, user)

  return user
}

/**
 * Simulate network latency and delays
 */
export async function simulateNetworkDelay(page: Page, delayMs: number = 1000) {
  await page.waitForTimeout(delayMs)
}

/**
 * Mock file upload scenario
 */
export async function mockFileUpload(page: Page, fileName: string = 'test-document.pdf') {
  // Create a mock file
  const fileContent = 'Mock file content for testing'
  const filePath = `./test-upload-${fileName}`
  
  // In real tests, you would create an actual file
  // For now, we'll mock the file upload dialog
  await page.addInitScript(() => {
    const originalOpen = window.open
    window.open = function(url?: string, target?: string, features?: string) {
      if (url?.includes('file://')) {
        return null // Mock file dialog
      }
      return originalOpen.call(this, url, target, features)
    }
  })
}

/**
 * Verify element has expected text content
 */
export async function verifyTextContent(
  page: Page,
  selector: string,
  expectedText: string
) {
  const element = page.locator(selector)
  await expect(element).toContainText(expectedText)
}

/**
 * Verify element has expected attribute value
 */
export async function verifyAttribute(
  page: Page,
  selector: string,
  attribute: string,
  expectedValue: string
) {
  const element = page.locator(selector)
  await expect(element).toHaveAttribute(attribute, expectedValue)
}

/**
 * Verify element has expected class
 */
export async function verifyClass(
  page: Page,
  selector: string,
  expectedClass: string
) {
  const element = page.locator(selector)
  await expect(element).toHaveClass(new RegExp(expectedClass))
}

/**
 * Wait for API call to complete
 */
export async function waitForApiCall(page: Page, urlPattern: string, timeout: number = 10000) {
  const [response] = await Promise.all([
    page.waitForResponse(response => 
      response.url().includes(urlPattern) && response.status() < 400,
      { timeout }
    )
  ])
  return response
}

/**
 * Generate random test data
 */
export function generateTestData() {
  return {
    randomAddress: `0x${Math.random().toString(16).substr(2, 40)}`,
    randomMessage: `Test message ${Date.now()} - ${Math.random().toString(36).substr(2, 9)}`,
    randomEnsName: `testuser${Math.random().toString(36).substr(2, 6)}.eth`,
    randomGroupName: `Test Group ${Math.random().toString(36).substr(2, 6)}`
  }
}

/**
 * Clean up test data
 */
export async function cleanupTestData(page: Page) {
  // Clear localStorage and sessionStorage
  await page.evaluate(() => {
    localStorage.clear()
    sessionStorage.clear()
  })
  
  // Clear any test cookies
  await page.context().clearCookies()
}

/**
 * Take screenshot for debugging
 */
export async function takeDebugScreenshot(page: Page, name: string) {
  await page.screenshot({ 
    path: `./test-screenshots/${name}-${Date.now()}.png`,
    fullPage: true 
  })
}