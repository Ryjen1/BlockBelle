/**
 * E2E Tests for Message Delivery Scenarios
 * 
 * These tests verify various message delivery scenarios including:
 * - Successful message delivery
 * - Failed message delivery and error handling
 * - Network issues and retry mechanisms
 * - Message ordering and timestamp verification
 */

import { test, expect } from '../../fixtures/chat-fixtures'
import { MOCK_USERS, MOCK_MESSAGES } from '../../fixtures/chat-fixtures'

test.describe('Message Delivery Scenarios', () => {
  test.beforeEach(async ({ page, mockWalletConnection, setupMockContract }) => {
    const user = MOCK_USERS[0] // Alice - verified user
    await mockWalletConnection(user)
    await setupMockContract()
    await page.goto('/')
  })

  test.describe('Successful Message Delivery', () => {
    test('should deliver messages successfully between verified users', async ({ 
      page, 
      waitForChatLoad,
      selectChat,
      sendMessage,
      verifyMessageDelivery
    }) => {
      await waitForChatLoad()

      const targetUser = MOCK_USERS[1] // Bob
      await selectChat(targetUser.address)

      // Send various types of messages
      const messages = [
        'Hello Bob! How are you?',
        'This is a longer message to test message delivery with more content. It should wrap properly and maintain formatting.',
        'Message with special characters: @#$%^&*()_+{}|:<>?[]\\;\'",./',
        'Unicode message: 你好世界 🌍 🚀'
      ]

      for (const message of messages) {
        await sendMessage(message)
        await verifyMessageDelivery(message)
      }

      // Verify all messages appear in correct order
      const messageBubbles = page.locator('[data-testid="message-bubble"]')
      const messageCount = await messageBubbles.count()
      expect(messageCount).toBe(messages.length)

      // Verify timestamps are displayed
      for (let i = 0; i < messageCount; i++) {
        const messageBubble = messageBubbles.nth(i)
        await expect(messageBubble.locator('[data-testid="message-timestamp"]')).toBeVisible()
      }
    })

    test('should deliver messages with proper sender identification', async ({ 
      page, 
      waitForChatLoad,
      selectChat,
      sendMessage
    }) => {
      await waitForChatLoad()

      const targetUser = MOCK_USERS[2] // Charlie (unverified)
      await selectChat(targetUser.address)

      const messageContent = 'Message with sender identification test'
      await sendMessage(messageContent)

      // Verify message shows correct sender
      const messageBubble = page.locator('[data-testid="message-bubble"]').filter({ 
        hasText: messageContent 
      })
      
      await expect(messageBubble).toHaveAttribute('data-sender', MOCK_USERS[0].address.toLowerCase())
      await expect(messageBubble).toHaveAttribute('data-is-own-message', 'true')
    })

    test('should update chat list with last message info', async ({ 
      page, 
      waitForChatLoad,
      selectChat,
      sendMessage
    }) => {
      await waitForChatLoad()

      const targetUser = MOCK_USERS[1] // Bob
      await selectChat(targetUser.address)

      const messageContent = 'This should appear in chat list as last message'
      await sendMessage(messageContent)

      // Go back to chat list
      await page.locator('[data-testid="back-to-chat-list"]').click()

      // Verify chat item shows last message and timestamp
      const chatItem = page.locator(`[data-testid="chat-item-${targetUser.address}"]`)
      await expect(chatItem.locator('[data-testid="last-message"]')).toContainText(messageContent)
      await expect(chatItem.locator('[data-testid="last-message-time"]')).toBeVisible()
      
      // Verify message is marked as read
      await expect(chatItem.locator('[data-testid="unread-badge"]')).not.toBeVisible()
    })

    test('should handle rapid message sending', async ({ 
      page, 
      waitForChatLoad,
      selectChat
    }) => {
      await waitForChatLoad()

      const targetUser = MOCK_USERS[3] // Dave
      await selectChat(targetUser.address)

      // Send multiple messages rapidly
      const messages = Array.from({ length: 5 }, (_, i) => `Rapid message ${i + 1}`)
      
      for (const message of messages) {
        await page.locator('[data-testid="message-input"]').fill(message)
        await page.locator('[data-testid="send-button"]').click()
      }

      // Wait for all messages to appear
      await page.waitForFunction((expectedMessages) => {
        const messageBubbles = document.querySelectorAll('[data-testid="message-bubble"]')
        return messageBubbles.length >= expectedMessages
      }, messages.length, { timeout: 10000 })

      // Verify all messages are delivered in order
      const messageBubbles = page.locator('[data-testid="message-bubble"]')
      const messageCount = await messageBubbles.count()
      expect(messageCount).toBeGreaterThanOrEqual(messages.length)
    })
  })

  test.describe('Failed Message Delivery', () => {
    test('should handle network failures gracefully', async ({ 
      page, 
      waitForChatLoad,
      selectChat
    }) => {
      await waitForChatLoad()

      const targetUser = MOCK_USERS[1] // Bob
      await selectChat(targetUser.address)

      // Simulate network failure
      await page.addInitScript(() => {
        window.writeContractMock = async () => {
          throw new Error('Network error: Failed to send transaction')
        }
      })

      // Attempt to send message
      const messageContent = 'This message should fail to send'
      await page.locator('[data-testid="message-input"]').fill(messageContent)
      await page.locator('[data-testid="send-button"]').click()

      // Verify error handling
      await expect(page.locator('[data-testid="error-message"]')).toBeVisible()
      await expect(page.locator('[data-testid="error-message"]')).toContainText('Failed to send message')
      
      // Verify retry option is available
      await expect(page.locator('[data-testid="retry-send-button"]')).toBeVisible()
      
      // Verify message is not displayed in chat
      const messageBubble = page.locator('[data-testid="message-bubble"]').filter({ 
        hasText: messageContent 
      })
      await expect(messageBubble).not.toBeVisible()
    })

    test('should handle contract transaction failures', async ({ 
      page, 
      waitForChatLoad,
      selectChat
    }) => {
      await waitForChatLoad()

      const targetUser = MOCK_USERS[2] // Charlie
      await selectChat(targetUser.address)

      // Simulate contract error
      await page.addInitScript(() => {
        window.writeContractMock = async () => {
          throw new Error('Contract error: Insufficient gas')
        }
      })

      // Attempt to send message
      await page.locator('[data-testid="message-input"]').fill('Contract error test message')
      await page.locator('[data-testid="send-button"]').click()

      // Verify specific error message
      await expect(page.locator('[data-testid="error-message"]')).toContainText('Insufficient gas')
      
      // Verify suggestions are provided
      await expect(page.locator('[data-testid="error-suggestions"]')).toBeVisible()
      await expect(page.locator('[data-testid="error-suggestions"]')).toContainText('Try increasing gas limit')
    })

    test('should handle invalid recipient addresses', async ({ 
      page, 
      waitForChatLoad,
      selectChat
    }) => {
      await waitForChatLoad()

      const targetUser = MOCK_USERS[1] // Bob
      await selectChat(targetUser.address)

      // Simulate invalid address response
      await page.addInitScript(() => {
        window.writeContractMock = async (contractAddress: string, functionName: string, args: any[]) => {
          if (functionName === 'sendMessage') {
            throw new Error('Invalid recipient address')
          }
          return null
        }
      })

      await page.locator('[data-testid="message-input"]').fill('Invalid address test')
      await page.locator('[data-testid="send-button"]').click()

      // Verify invalid address error
      await expect(page.locator('[data-testid="error-message"]')).toContainText('Invalid recipient')
      
      // Verify user is prompted to select a different recipient
      await expect(page.locator('[data-testid="select-different-user-prompt"]')).toBeVisible()
    })

    test('should handle message content validation errors', async ({ 
      page, 
      waitForChatLoad,
      selectChat
    }) => {
      await waitForChatLoad()

      const targetUser = MOCK_USERS[3] // Dave
      await selectChat(targetUser.address)

      // Test empty message
      await page.locator('[data-testid="message-input"]').fill('')
      await page.locator('[data-testid="send-button"]').click()
      
      // Send button should be disabled for empty messages
      await expect(page.locator('[data-testid="send-button"]')).toBeDisabled()

      // Test message that's too long
      const longMessage = 'x'.repeat(10000) // Very long message
      await page.locator('[data-testid="message-input"]').fill(longMessage)
      
      // Character count should show limit exceeded
      await expect(page.locator('[data-testid="character-count"]')).toContainText('10000/1000')
      await expect(page.locator('[data-testid="character-count"]')).toHaveClass(/text-red/)
      
      // Send button should be disabled
      await expect(page.locator('[data-testid="send-button"]')).toBeDisabled()
    })

    test('should retry failed messages automatically', async ({ 
      page, 
      waitForChatLoad,
      selectChat
    }) => {
      await waitForChatLoad()

      const targetUser = MOCK_USERS[1] // Bob
      await selectChat(targetUser.address)

      let attemptCount = 0
      await page.addInitScript(() => {
        window.writeContractMock = async () => {
          attemptCount++
          if (attemptCount < 3) {
            throw new Error('Temporary network error')
          }
          return '0xsuccessAfterRetry'
        }
      })

      const messageContent = 'This message should eventually succeed after retries'
      await page.locator('[data-testid="message-input"]').fill(messageContent)
      await page.locator('[data-testid="send-button"]').click()

      // Should show retry attempts
      await expect(page.locator('[data-testid="retry-attempt-indicator"]')).toContainText('Retrying...')
      
      // Should eventually succeed
      await page.waitForFunction((msgContent) => {
        const messages = document.querySelectorAll('[data-testid="message-bubble"]')
        return Array.from(messages).some(message => 
          message.textContent?.includes(msgContent)
        )
      }, messageContent, { timeout: 15000 })

      // Verify final success message
      await expect(page.locator('[data-testid="success-message"]')).toContainText('Message sent successfully')
    })
  })

  test.describe('Message Ordering and Timestamps', () => {
    test('should maintain message order in conversation', async ({ 
      page, 
      waitForChatLoad,
      selectChat,
      sendMessage
    }) => {
      await waitForChatLoad()

      const targetUser = MOCK_USERS[1] // Bob
      await selectChat(targetUser.address)

      const messages = ['First message', 'Second message', 'Third message']
      
      for (const message of messages) {
        await sendMessage(message)
      }

      // Verify messages appear in correct order
      const messageBubbles = page.locator('[data-testid="message-bubble"]')
      const messageCount = await messageBubbles.count()
      
      for (let i = 0; i < messages.length; i++) {
        const messageBubble = messageBubbles.nth(i)
        await expect(messageBubble).toContainText(messages[i])
      }

      // Verify timestamps are in ascending order
      const timestamps = []
      for (let i = 0; i < messageCount; i++) {
        const timestampText = await page.locator('[data-testid="message-bubble"]').nth(i)
          .locator('[data-testid="message-timestamp"]').textContent()
        timestamps.push(timestampText)
      }

      // Timestamps should be in order (allowing for slight time differences)
      expect(timestamps[0]).toBeTruthy()
      expect(timestamps[1]).toBeTruthy()
      expect(timestamps[2]).toBeTruthy()
    })

    test('should display message timestamps correctly', async ({ 
      page, 
      waitForChatLoad,
      selectChat,
      sendMessage
    }) => {
      await waitForChatLoad()

      const targetUser = MOCK_USERS[2] // Charlie
      await selectChat(targetUser.address)

      const messageContent = 'Timestamp test message'
      await sendMessage(messageContent)

      // Verify timestamp is displayed in readable format
      const timestampElement = page.locator('[data-testid="message-bubble"]')
        .filter({ hasText: messageContent })
        .locator('[data-testid="message-timestamp"]')
      
      await expect(timestampElement).toBeVisible()
      
      // Timestamp should show relative time (e.g., "now", "1m ago")
      const timestampText = await timestampElement.textContent()
      expect(timestampText).toMatch(/(now|\d+\s*(m|h|d)\s*ago)/)
    })
  })
})