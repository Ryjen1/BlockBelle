/**
 * E2E Tests for Non-Verified User Chat Flows
 * 
 * These tests verify the chat functionality for users who have not completed
 * ENS verification, ensuring they can:
 * - Connect to the chat interface with limited features
 * - Send and receive messages with restricted functionality
 * - See that they cannot access premium features
 * - Experience appropriate UI limitations
 */

import { test, expect } from '../../fixtures/chat-fixtures'
import { MOCK_USERS } from '../../fixtures/chat-fixtures'

test.describe('Non-Verified User Chat Flows', () => {
  let unverifiedUser: typeof MOCK_USERS[2]

  test.beforeEach(async ({ page, mockWalletConnection, setupMockContract }) => {
    unverifiedUser = MOCK_USERS[2] // Charlie - Non-verified user
    await mockWalletConnection(unverifiedUser)
    await setupMockContract()
    await page.goto('/')
  })

  test('should display chat interface with unverified user status', async ({ 
    page, 
    waitForChatLoad 
  }) => {
    await waitForChatLoad()

    // Verify chat interface loads
    await expect(page.locator('[data-testid="main-chat"]')).toBeVisible()
    
    // Verify user status is shown as unverified
    await expect(page.locator('[data-testid="user-status"]')).toContainText('Unverified')
    
    // Verify no ENS name is displayed
    await expect(page.locator('[data-testid="user-ens-name"]')).not.toBeVisible()
    
    // Verify display name shows truncated address
    await expect(page.locator('[data-testid="user-display-name"]')).toContainText('123456...7890')
  })

  test('should allow unverified user to send basic messages', async ({ 
    page, 
    waitForChatLoad,
    selectChat,
    sendMessage,
    verifyMessageDelivery
  }) => {
    await waitForChatLoad()

    // Select a chat with a verified user
    const targetUser = MOCK_USERS[0] // Alice (verified)
    await selectChat(targetUser.address)

    // Send a message
    const messageContent = 'Hello Alice! I am a new user exploring the platform.'
    await sendMessage(messageContent)

    // Verify message delivery
    await verifyMessageDelivery(messageContent)

    // Verify the message does not show verification badge
    const messageBubble = page.locator('[data-testid="message-bubble"]').filter({ 
      hasText: messageContent 
    })
    await expect(messageBubble).toBeVisible()
    await expect(messageBubble.locator('[data-testid="verification-badge"]')).not.toBeVisible()
  })

  test('should limit features for unverified users in chat list', async ({ 
    page, 
    waitForChatLoad 
  }) => {
    await waitForChatLoad()

    // Verify that unverified users don't show verification badges
    const unverifiedChatItems = page.locator('[data-testid="chat-item"]').filter({
      hasNot: page.locator('[data-testid="verification-badge"]')
    })
    await expect(unverifiedChatItems).toHaveCount(3) // Charlie + 2 others

    // Verify that verified users still show verification badges
    const verifiedChatItems = page.locator('[data-testid="chat-item"]').filter({
      has: page.locator('[data-testid="verification-badge"]')
    })
    await expect(verifiedChatItems).toHaveCount(2) // Alice and Dave are verified
  })

  test('should show upgrade prompts for unverified users', async ({ 
    page, 
    waitForChatLoad,
    selectChat
  }) => {
    await waitForChatLoad()

    await selectChat(MOCK_USERS[0].address) // Alice (verified user)

    // Verify upgrade prompts are visible
    await expect(page.locator('[data-testid="upgrade-prompt"]')).toBeVisible()
    await expect(page.locator('[data-testid="upgrade-prompt"]')).toContainText('Verify your ENS to unlock premium features')
  })

  test('should restrict enhanced features for unverified users', async ({ 
    page, 
    waitForChatLoad,
    selectChat
  }) => {
    await waitForChatLoad()

    await selectChat(MOCK_USERS[0].address) // Alice

    // Verify enhanced features are disabled or restricted
    await expect(page.locator('[data-testid="file-attachment-button"]')).toBeDisabled()
    await expect(page.locator('[data-testid="voice-call-button"]')).toBeDisabled()
    await expect(page.locator('[data-testid="video-call-button"]')).toBeDisabled()
    
    // Verify tooltips show why features are disabled
    await page.locator('[data-testid="file-attachment-button"]').hover()
    await expect(page.locator('[data-testid="feature-disabled-tooltip"]')).toBeVisible()
    await expect(page.locator('[data-testid="feature-disabled-tooltip"]')).toContainText('ENS verification required')
  })

  test('should show basic messaging functionality only', async ({ 
    page, 
    waitForChatLoad,
    selectChat
  }) => {
    await waitForChatLoad()

    await selectChat(MOCK_USERS[1].address) // Bob (verified)

    // Verify only basic message input is available
    await expect(page.locator('[data-testid="message-input"]')).toBeVisible()
    await expect(page.locator('[data-testid="send-button"]')).toBeVisible()
    
    // Verify other input options are not available
    await expect(page.locator('[data-testid="emoji-picker-button"]')).not.toBeVisible()
    await expect(page.locator('[data-testid="sticker-button"]')).not.toBeVisible()
  })

  test('should handle search with limited results for unverified users', async ({ 
    page, 
    waitForChatLoad 
  }) => {
    await waitForChatLoad()

    // Open search functionality
    await page.locator('[data-testid="search-input"]').click()
    
    // Search for users
    await page.locator('[data-testid="search-input"]').fill('user')
    
    // Verify search results don't show verification badges for current user
    const searchResults = page.locator('[data-testid="search-results"] [data-testid="user-item"]')
    const resultCount = await searchResults.count()
    
    for (let i = 0; i < resultCount; i++) {
      const result = searchResults.nth(i)
      const isCurrentUser = await result.getAttribute('data-is-current-user')
      if (isCurrentUser === 'true') {
        await expect(result.locator('[data-testid="verification-badge"]')).not.toBeVisible()
      }
    }
  })

  test('should display appropriate messaging limits for unverified users', async ({ 
    page, 
    waitForChatLoad,
    selectChat
  }) => {
    await waitForChatLoad()

    await selectChat(MOCK_USERS[0].address) // Alice

    // Send multiple messages to test rate limiting
    for (let i = 1; i <= 5; i++) {
      await sendMessage(`Test message ${i} from unverified user`)
      
      // After 3 messages, expect rate limiting warning
      if (i === 3) {
        await expect(page.locator('[data-testid="rate-limit-warning"]')).toBeVisible()
        await expect(page.locator('[data-testid="rate-limit-warning"]')).toContainText('Verify ENS to remove message limits')
      }
    }
  })

  test('should show verification process in chat interface', async ({ 
    page, 
    waitForChatLoad 
  }) => {
    await waitForChatLoad()

    // Verify verification prompt is visible in main interface
    await expect(page.locator('[data-testid="verification-prompt-banner"]')).toBeVisible()
    await expect(page.locator('[data-testid="verification-prompt-banner"]')).toContainText('Complete ENS verification to unlock all features')
    
    // Verify verification button is available
    await expect(page.locator('[data-testid="start-verification-button"]')).toBeVisible()
  })

  test('should maintain messaging capability but show limitations', async ({ 
    page, 
    waitForChatLoad,
    selectChat
  }) => {
    await waitForChatLoad()

    await selectChat(MOCK_USERS[1].address) // Bob

    // Send message and verify it works
    const messageContent = 'Basic message still works for unverified users'
    await sendMessage(messageContent)
    await verifyMessageDelivery(messageContent)

    // But verify limitations are clearly indicated
    await expect(page.locator('[data-testid="feature-restriction-notice"]')).toBeVisible()
    await expect(page.locator('[data-testid="feature-restriction-notice"]')).toContainText('Limited features - Verify ENS for full access')
  })

  test('should handle messaging with other unverified users', async ({ 
    page, 
    waitForChatLoad,
    selectChat
  }) => {
    await waitForChatLoad()

    // Mock another unverified user
    const otherUnverifiedUser = {
      ...unverifiedUser,
      address: '0x1111111111111111111111111111111111111111',
      displayName: 'Another User'
    }

    // Create a new chat with another unverified user (simulated)
    await page.locator('[data-testid="add-contact-button"]').click()
    await page.locator('[data-testid="user-search-input"]').fill(otherUnverifiedUser.address)
    
    // Verify no verification badges between unverified users
    const userResult = page.locator('[data-testid="user-search-result"]').first()
    await expect(userResult.locator('[data-testid="verification-badge"]')).not.toBeVisible()
  })
})