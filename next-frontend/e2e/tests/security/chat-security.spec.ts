/**
 * E2E Tests for Security Protections on Chat Routes
 * 
 * These tests verify security measures including:
 * - Route access control and authentication
 * - Input validation and sanitization
 * - CSRF protection
 * - Message encryption and privacy
 * - Rate limiting and abuse prevention
 */

import { test, expect } from '../../fixtures/chat-fixtures'
import { MOCK_USERS } from '../../fixtures/chat-fixtures'

test.describe('Chat Route Security Protections', () => {
  test.beforeEach(async ({ page, mockWalletConnection, setupMockContract }) => {
    const user = MOCK_USERS[0] // Alice - verified user
    await mockWalletConnection(user)
    await setupMockContract()
    await page.goto('/')
  })

  test.describe('Route Access Control', () => {
    test('should prevent unauthorized access to protected routes', async ({ 
      page 
    }) => {
      // Start with no wallet connection
      await page.context().clearCookies()
      await page.goto('/')

      // Try to access protected chat route directly
      await page.goto('/chat')

      // Verify redirect to authentication
      await expect(page).toHaveURL(/.*\/.*auth.*/)
      await expect(page.locator('[data-testid="authentication-required"]')).toBeVisible()

      // Try to access API routes directly
      await page.goto('/api/chat/messages')

      // Should return unauthorized or redirect
      const response = await page.request.get('/api/chat/messages')
      expect(response.status()).toBe(401)
    })

    test('should validate wallet ownership for route access', async ({ 
      page, 
      mockWalletConnection
    }) => {
      const user = MOCK_USERS[0] // Alice

      // Connect with user's wallet
      await mockWalletConnection(user)
      await page.goto('/')

      // Try to access another user's private chat route
      await page.goto(`/chat/private/${MOCK_USERS[1].address}`)

      // Verify access is granted (should be able to chat with others)
      await expect(page.locator('[data-testid="chat-header"]')).toBeVisible()

      // Try to access invalid/inaccessible route
      await page.goto('/chat/private/invalid-address')

      // Should handle invalid route gracefully
      await expect(page.locator('[data-testid="invalid-route-error"]')).toBeVisible()
    })

    test('should enforce authentication on all chat operations', async ({ 
      page, 
      mockWalletConnection
    }) => {
      // Clear authentication
      await page.context().clearCookies()
      await page.goto('/')

      // Try to perform chat operations without authentication
      await page.locator('[data-testid="message-input"]').fill('Test message')

      // Should not allow sending without auth
      await page.locator('[data-testid="send-button"]').click()

      // Verify authentication requirement
      await expect(page.locator('[data-testid="auth-required-modal"]')).toBeVisible()
      await expect(page.locator('[data-testid="auth-required-modal"]')).toContainText('Please connect your wallet')
    })

    test('should validate session tokens on protected routes', async ({ 
      page, 
      mockWalletConnection
    }) => {
      const user = MOCK_USERS[0]

      await mockWalletConnection(user)
      await page.goto('/')

      // Obtain valid session token
      const sessionToken = await page.evaluate(() => localStorage.getItem('sessionToken'))

      // Manually invalidate session
      await page.evaluate(() => {
        localStorage.setItem('sessionToken', 'invalid-token')
      })

      // Try to access protected API
      const response = await page.request.get('/api/chat/send', {
        headers: {
          'Authorization': 'Bearer invalid-token'
        }
      })

      // Should reject invalid token
      expect(response.status()).toBe(401)
      
      // Verify UI shows session expired
      await expect(page.locator('[data-testid="session-expired-message"]')).toBeVisible()
    })
  })

  test.describe('Input Validation and Sanitization', () => {
    test('should prevent XSS in message content', async ({ 
      page, 
      waitForChatLoad,
      selectChat
    }) => {
      await waitForChatLoad()

      await selectChat(MOCK_USERS[1].address) // Bob

      // Attempt XSS injection
      const xssPayload = '<script>alert("XSS")</script><img src=x onerror=alert("XSS")>'
      await page.locator('[data-testid="message-input"]').fill(xssPayload)
      await page.locator('[data-testid="send-button"]').click()

      // Verify message is sanitized
      const messageContent = await page.locator('[data-testid="message-bubble"]').textContent()
      expect(messageContent).not.toContain('<script>')
      expect(messageContent).not.toContain('<img')
      
      // Verify script didn't execute
      await expect(page.locator('[data-testid="script-executed-warning"]')).not.toBeVisible()
    })

    test('should validate message length and content', async ({ 
      page, 
      waitForChatLoad,
      selectChat
    }) => {
      await waitForChatLoad()

      await selectChat(MOCK_USERS[2].address) // Charlie

      // Test empty message
      await page.locator('[data-testid="message-input"]').fill('')
      await page.locator('[data-testid="send-button"]').click()
      
      // Send button should be disabled
      await expect(page.locator('[data-testid="send-button"]')).toBeDisabled()

      // Test oversized message
      const oversizedMessage = 'x'.repeat(10000)
      await page.locator('[data-testid="message-input"]').fill(oversizedMessage)
      
      // Should show length warning
      await expect(page.locator('[data-testid="message-length-warning"]')).toBeVisible()
      await expect(page.locator('[data-testid="message-length-warning"]')).toContainText('Message too long')

      // Should prevent sending
      await expect(page.locator('[data-testid="send-button"]')).toBeDisabled()
    })

    test('should sanitize user-generated content in group names', async ({ 
      page, 
      waitForChatLoad
    }) => {
      await waitForChatLoad()

      // Try to create group with malicious name
      await page.locator('[data-testid="create-group-chat-button"]').click()
      
      const maliciousName = '<script>alert("Group XSS")</script>Test Group'
      await page.locator('[data-testid="group-name-input"]').fill(maliciousName)
      
      // Verify sanitization
      const sanitizedName = await page.locator('[data-testid="group-name-input"]').inputValue()
      expect(sanitizedName).not.toContain('<script>')
      
      // Should still be able to create group
      await page.locator('[data-testid="create-group-submit"]').click()
      await expect(page.locator('[data-testid="group-created-success"]')).toBeVisible()
    })

    test('should validate wallet addresses', async ({ 
      page, 
      waitForChatLoad
    }) => {
      await waitForChatLoad()

      // Try to add contact with invalid address
      await page.locator('[data-testid="add-contact-button"]').click()
      await page.locator('[data-testid="user-search-input"]').fill('invalid-address')
      
      // Should show address validation error
      await expect(page.locator('[data-testid="invalid-address-error"]')).toBeVisible()
      await expect(page.locator('[data-testid="invalid-address-error"]')).toContainText('Invalid address format')

      // Try valid address format but non-existent address
      await page.locator('[data-testid="user-search-input"]').fill('0x1234567890123456789012345678901234567890')
      await page.locator('[data-testid="search-user-button"]').click()
      
      // Should show user not found
      await expect(page.locator('[data-testid="user-not-found-message"]')).toBeVisible()
    })
  })

  test.describe('Rate Limiting and Abuse Prevention', () => {
    test('should enforce rate limits on message sending', async ({ 
      page, 
      waitForChatLoad,
      selectChat
    }) => {
      await waitForChatLoad()

      await selectChat(MOCK_USERS[1].address) // Bob

      // Send messages rapidly to trigger rate limit
      const messages = Array.from({ length: 10 }, (_, i) => `Rapid message ${i + 1}`)
      
      for (const message of messages) {
        await page.locator('[data-testid="message-input"]').fill(message)
        await page.locator('[data-testid="send-button"]').click()
        await page.waitForTimeout(100) // Minimal delay
      }

      // Should trigger rate limiting
      await expect(page.locator('[data-testid="rate-limit-warning"]')).toBeVisible()
      await expect(page.locator('[data-testid="rate-limit-warning"]')).toContainText('Too many messages')

      // Should temporarily disable sending
      await expect(page.locator('[data-testid="send-button"]')).toBeDisabled()
      
      // Should show cooldown timer
      await expect(page.locator('[data-testid="cooldown-timer"]')).toBeVisible()
    })

    test('should limit group creation attempts', async ({ 
      page, 
      waitForChatLoad
    }) => {
      await waitForChatLoad()

      // Attempt to create multiple groups rapidly
      for (let i = 0; i < 5; i++) {
        await page.locator('[data-testid="create-group-chat-button"]').click()
        await page.locator('[data-testid="group-name-input"]').fill(`Test Group ${i + 1}`)
        await page.locator('[data-testid="create-group-submit"]').click()
        
        if (i >= 2) {
          // Should trigger group creation rate limit
          await expect(page.locator('[data-testid="group-creation-limit"]')).toBeVisible()
          break
        }
      }
    })

    test('should prevent spam friend requests', async ({ 
      page, 
      waitForChatLoad
    }) => {
      await waitForChatLoad()

      // Attempt multiple rapid friend requests
      for (let i = 0; i < 10; i++) {
        await page.locator('[data-testid="add-contact-button"]').click()
        await page.locator('[data-testid="user-search-input"]').fill(`0x${'1'.repeat(40)}`)
        await page.locator('[data-testid="send-friend-request"]').click()
        
        if (i >= 3) {
          // Should trigger spam protection
          await expect(page.locator('[data-testid="spam-protection-triggered"]')).toBeVisible()
          await expect(page.locator('[data-testid="friend-request-limit"]')).toBeVisible()
          break
        }
      }
    })

    test('should handle DDoS protection on API routes', async ({ 
      page 
    }) => {
      // Make rapid API requests to test DDoS protection
      const requests = Array.from({ length: 100 }, () => 
        page.request.get('/api/chat/messages')
      )

      // Wait for responses
      const responses = await Promise.all(requests)

      // Some requests should be rate limited
      const rateLimitedResponses = responses.filter(r => r.status() === 429)
      expect(rateLimitedResponses.length).toBeGreaterThan(0)

      // Should show rate limit message in UI
      await expect(page.locator('[data-testid="rate-limit-api-warning"]')).toBeVisible()
    })
  })

  test.describe('Message Privacy and Encryption', () => {
    test('should verify message encryption in transit', async ({ 
      page, 
      waitForChatLoad,
      selectChat
    }) => {
      await waitForChatLoad()

      await selectChat(MOCK_USERS[1].address) // Bob

      const sensitiveMessage = 'This is a secret message'
      await page.locator('[data-testid="message-input"]').fill(sensitiveMessage)
      await page.locator('[data-testid="send-button"]').click()

      // Intercept network requests to verify encryption
      const [request] = await Promise.all([
        page.waitForRequest('**/api/chat/send'),
        page.locator('[data-testid="send-button"]').click()
      ])

      // Verify request payload is encrypted
      const postData = request.postData()
      expect(postData).not.toContain(sensitiveMessage) // Should be encrypted
    })

    test('should validate message integrity', async ({ 
      page, 
      waitForChatLoad,
      selectChat
    }) => {
      await waitForChatLoad()

      await selectChat(MOCK_USERS[2].address) // Charlie

      const testMessage = 'Integrity test message'
      await page.locator('[data-testid="message-input"]').fill(testMessage)
      await page.locator('[data-testid="send-button"]').click()

      // Verify message hash/checksum is included
      const messageElement = page.locator('[data-testid="message-bubble"]').filter({ 
        hasText: testMessage 
      })
      
      await expect(messageElement.locator('[data-testid="message-integrity"]')).toBeVisible()
      
      // Should show verification indicator
      await expect(messageElement.locator('[data-testid="message-verified"]')).toBeVisible()
    })

    test('should prevent message tampering', async ({ 
      page, 
      waitForChatLoad,
      selectChat
    }) => {
      await waitForChatLoad()

      await selectChat(MOCK_USERS[3].address) // Dave

      const originalMessage = 'Original message'
      await page.locator('[data-testid="message-input"]').fill(originalMessage)
      await page.locator('[data-testid="send-button"]').click()

      // Try to modify message via browser dev tools
      await page.evaluate(() => {
        const messageElement = document.querySelector('[data-testid="message-bubble"]')
        if (messageElement) {
          messageElement.textContent = 'Modified message'
        }
      })

      // Should detect tampering
      await expect(page.locator('[data-testid="message-tampering-detected"]')).toBeVisible()
      
      // Should show integrity check failure
      await expect(page.locator('[data-testid="integrity-check-failed"]')).toBeVisible()
    })

    test('should handle encrypted group communications', async ({ 
      page, 
      waitForChatLoad
    }) => {
      await waitForChatLoad()

      // Create encrypted group
      await page.locator('[data-testid="create-group-chat-button"]').click()
      await page.locator('[data-testid="group-name-input"]').fill('Secure Group')
      await page.locator('[data-testid="enable-encryption-toggle"]').check()
      await page.locator('[data-testid="create-group-submit"]').click()

      // Send encrypted group message
      const groupMessage = 'Encrypted group message'
      await page.locator('[data-testid="message-input"]').fill(groupMessage)
      await page.locator('[data-testid="send-button"]').click()

      // Verify encryption indicators
      await expect(page.locator('[data-testid="encryption-enabled-indicator"]')).toBeVisible()
      await expect(page.locator('[data-testid="message-encrypted-badge"]')).toBeVisible()
      
      // Verify message appears encrypted in network traffic
      const [request] = await Promise.all([
        page.waitForRequest('**/api/group/send'),
        page.locator('[data-testid="message-input"]').fill('Another encrypted message'),
        page.locator('[data-testid="send-button"]').click()
      ])

      const postData = request.postData()
      expect(postData).toMatch(/.{32,}/) // Should contain encrypted data
    })
  })

  test.describe('CSRF Protection', () => {
    test('should validate CSRF tokens on sensitive operations', async ({ 
      page, 
      mockWalletConnection
    }) => {
      const user = MOCK_USERS[0]

      await mockWalletConnection(user)
      await page.goto('/')

      // Obtain CSRF token
      const csrfToken = await page.evaluate(() => 
        document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')
      )

      // Test sensitive operation without CSRF token
      const response = await page.request.post('/api/chat/send', {
        data: { message: 'test', to: MOCK_USERS[1].address },
        headers: {
          'Content-Type': 'application/json'
          // No CSRF token
        }
      })

      // Should reject request without CSRF token
      expect(response.status()).toBe(403)

      // Test with invalid CSRF token
      const invalidResponse = await page.request.post('/api/chat/send', {
        data: { message: 'test', to: MOCK_USERS[1].address },
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': 'invalid-token'
        }
      })

      expect(invalidResponse.status()).toBe(403)

      // Test with valid CSRF token
      const validResponse = await page.request.post('/api/chat/send', {
        data: { message: 'test', to: MOCK_USERS[1].address },
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken || 'valid-token'
        }
      })

      expect(validResponse.status()).toBe(200)
    })

    test('should prevent cross-site request forgery', async ({ 
      page, 
      waitForChatLoad
    }) => {
      await waitForChatLoad()

      // Simulate malicious script attempt
      await page.addInitScript(() => {
        // Try to send message via XHR without proper headers
        const xhr = new XMLHttpRequest()
        xhr.open('POST', '/api/chat/send', true)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify({
          message: 'Malicious message',
          to: MOCK_USERS[1].address
        }))
      })

      // Should be blocked by CSRF protection
      await page.waitForTimeout(2000)
      await expect(page.locator('[data-testid="csrf-protection-triggered"]')).toBeVisible()
    })
  })

  test.describe('Session Security', () => {
    test('should validate session on each request', async ({ 
      page, 
      mockWalletConnection
    }) => {
      const user = MOCK_USERS[1]

      await mockWalletConnection(user)
      await page.goto('/')

      // Obtain session information
      const cookies = await page.context().cookies()
      const sessionCookie = cookies.find(c => c.name.includes('session'))

      // Manually expire session
      await page.context().clearCookies()
      await page.reload()

      // Try to perform action requiring valid session
      await page.locator('[data-testid="message-input"]').fill('Test message')
      await page.locator('[data-testid="send-button"]').click()

      // Should detect session expiry
      await expect(page.locator('[data-testid="session-expired-modal"]')).toBeVisible()
      await expect(page.locator('[data-testid="session-expired-modal"]')).toContainText('Session expired')
    })

    test('should handle concurrent sessions securely', async ({ 
      page, 
      mockWalletConnection
    }) => {
      const user = MOCK_USERS[0]

      await mockWalletConnection(user)
      await page.goto('/')

      // Open new tab with same user
      const newPage = await page.context().newPage()
      await newPage.goto('/')

      // Make changes in first tab
      await page.locator('[data-testid="user-profile-button"]').click()
      await page.locator('[data-testid="settings-button"]').click()

      // Verify session conflict detection
      await expect(page.locator('[data-testid="session-conflict-warning"]')).toBeVisible()
      await expect(page.locator('[data-testid="session-conflict-warning"]')).toContainText('Multiple sessions detected')
    })
  })
})