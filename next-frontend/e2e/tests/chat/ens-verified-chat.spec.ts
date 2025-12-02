/**
 * E2E Tests for ENS-Verified User Chat Flows
 * 
 * These tests verify the chat functionality for users who have completed
 * ENS (Ethereum Name Service) verification, ensuring they can:
 * - Connect to the chat interface
 * - Send and receive messages
 * - See verification badges
 * - Access all chat features
 */

import { test, expect } from '../../fixtures/chat-fixtures'
import { MOCK_USERS } from '../../fixtures/chat-fixtures'

test.describe('ENS-Verified User Chat Flows', () => {
  let verifiedUser: typeof MOCK_USERS[0]

  test.beforeEach(async ({ page, mockWalletConnection, setupMockContract }) => {
    verifiedUser = MOCK_USERS[0] // Alice - ENS verified user
    await mockWalletConnection(verifiedUser)
    await setupMockContract()
    await page.goto('/')
  })

  test('should display chat interface with verified user status', async ({ 
    page, 
    waitForChatLoad 
  }) => {
    await waitForChatLoad()

    // Verify chat interface loads
    await expect(page.locator('[data-testid="main-chat"]')).toBeVisible()
    
    // Verify user status is shown as verified
    await expect(page.locator('[data-testid="user-status"]')).toContainText('Verified')
    
    // Verify ENS name is displayed
    await expect(page.locator('[data-testid="user-ens-name"]')).toContainText('alice.eth')
  })

  test('should allow verified user to send messages', async ({ 
    page, 
    waitForChatLoad,
    selectChat,
    sendMessage,
    verifyMessageDelivery
  }) => {
    await waitForChatLoad()

    // Select a chat with another user
    const targetUser = MOCK_USERS[1] // Bob
    await selectChat(targetUser.address)

    // Send a message
    const messageContent = 'Hello Bob! This is a test message from a verified user.'
    await sendMessage(messageContent)

    // Verify message delivery
    await verifyMessageDelivery(messageContent)

    // Verify the message shows verification status
    const messageBubble = page.locator('[data-testid="message-bubble"]').filter({ 
      hasText: messageContent 
    })
    await expect(messageBubble).toBeVisible()
    await expect(messageBubble.locator('[data-testid="verification-badge"]')).toBeVisible()
  })

  test('should display verification badges for verified users in chat list', async ({ 
    page, 
    waitForChatLoad 
  }) => {
    await waitForChatLoad()

    // Verify that verified users show verification badges
    const verifiedChatItems = page.locator('[data-testid="chat-item"]').filter({
      has: page.locator('[data-testid="verification-badge"]')
    })
    await expect(verifiedChatItems).toHaveCount(2) // Alice and Dave are verified

    // Verify non-verified users don't show verification badges
    const unverifiedChatItems = page.locator('[data-testid="chat-item"]').filter({
      hasNot: page.locator('[data-testid="verification-badge"]')
    })
    await expect(unverifiedChatItems).toHaveCount(1) // Charlie is not verified
  })

  test('should show verification status in chat headers', async ({ 
    page, 
    waitForChatLoad,
    selectChat
  }) => {
    await waitForChatLoad()

    // Select a verified user chat
    const verifiedTargetUser = MOCK_USERS[3] // Dave
    await selectChat(verifiedTargetUser.address)

    // Verify verification badge is shown in chat header
    await expect(page.locator('[data-testid="chat-header"] [data-testid="verification-badge"]')).toBeVisible()
    
    // Verify ENS name is displayed
    await expect(page.locator('[data-testid="chat-header-user-name"]')).toContainText('dave.dev')
  })

  test('should enable enhanced features for verified users', async ({ 
    page, 
    waitForChatLoad,
    selectChat
  }) => {
    await waitForChatLoad()

    await selectChat(MOCK_USERS[1].address) // Bob

    // Verify enhanced features are available (e.g., file sharing, voice/video calls)
    await expect(page.locator('[data-testid="file-attachment-button"]')).toBeVisible()
    await expect(page.locator('[data-testid="voice-call-button"]')).toBeVisible()
    await expect(page.locator('[data-testid="video-call-button"]')).toBeVisible()
  })

  test('should properly display message history with verification context', async ({ 
    page, 
    waitForChatLoad,
    selectChat
  }) => {
    await waitForChatLoad()

    await selectChat(MOCK_USERS[1].address) // Bob

    // Verify existing messages show verification context
    const messageBubbles = page.locator('[data-testid="message-bubble"]')
    const messageCount = await messageBubbles.count()
    
    for (let i = 0; i < messageCount; i++) {
      const messageBubble = messageBubbles.nth(i)
      const senderAddress = await messageBubble.getAttribute('data-sender')
      const sender = MOCK_USERS.find(user => user.address.toLowerCase() === senderAddress?.toLowerCase())
      
      if (sender?.isVerified) {
        await expect(messageBubble.locator('[data-testid="verification-badge"]')).toBeVisible()
      } else {
        await expect(messageBubble.locator('[data-testid="verification-badge"]')).not.toBeVisible()
      }
    }
  })

  test('should handle search functionality for verified users', async ({ 
    page, 
    waitForChatLoad 
  }) => {
    await waitForChatLoad()

    // Open search functionality
    await page.locator('[data-testid="search-input"]').click()
    
    // Search for verified users
    await page.locator('[data-testid="search-input"]').fill('alice')
    
    // Verify search results show verification status
    const searchResults = page.locator('[data-testid="search-results"] [data-testid="user-item"]')
    await expect(searchResults).toHaveCount(1)
    await expect(searchResults.locator('[data-testid="verification-badge"]')).toBeVisible()
  })

  test('should display correct online status for verified users', async ({ 
    page, 
    waitForChatLoad 
  }) => {
    await waitForChatLoad()

    // Check online status indicators for verified users
    const verifiedUserChatItems = page.locator('[data-testid="chat-item"]').filter({
      has: page.locator('[data-testid="verification-badge"]')
    })

    const count = await verifiedUserChatItems.count()
    for (let i = 0; i < count; i++) {
      const chatItem = verifiedUserChatItems.nth(i)
      await expect(chatItem.locator('[data-testid="online-status"]')).toBeVisible()
    }
  })

  test('should maintain verification status across chat sessions', async ({ 
    page, 
    waitForChatLoad,
    selectChat,
    sendMessage
  }) => {
    await waitForChatLoad()

    const targetUser = MOCK_USERS[1]
    await selectChat(targetUser.address)

    // Send multiple messages
    await sendMessage('First message from verified user')
    await sendMessage('Second message from verified user')
    await sendMessage('Third message from verified user')

    // Refresh the page and verify verification status persists
    await page.reload()
    await waitForChatLoad()
    await selectChat(targetUser.address)

    // Verify all messages still show verification status
    const messageBubbles = page.locator('[data-testid="message-bubble"]')
    const messageCount = await messageBubbles.count()
    
    for (let i = 0; i < messageCount; i++) {
      const messageBubble = messageBubbles.nth(i)
      await expect(messageBubble.locator('[data-testid="verification-badge"]')).toBeVisible()
    }
  })
})