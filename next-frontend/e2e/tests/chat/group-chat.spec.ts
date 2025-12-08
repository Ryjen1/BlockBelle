/**
 * E2E Tests for Group Chat Functionality
 * 
 * These tests verify group chat features including:
 * - Creating group chats
 * - Joining existing groups
 * - Managing group members
 * - Sending messages in group context
 * - Group permissions and access control
 */

import { test, expect } from '../../fixtures/chat-fixtures'
import { MOCK_USERS } from '../../fixtures/chat-fixtures'

test.describe('Group Chat Functionality', () => {
  test.beforeEach(async ({ page, mockWalletConnection, setupMockContract }) => {
    const user = MOCK_USERS[0] // Alice - verified user
    await mockWalletConnection(user)
    await setupMockContract()
    await page.goto('/')
  })

  test.describe('Group Creation and Joining', () => {
    test('should allow verified user to create a new group', async ({ 
      page, 
      waitForChatLoad
    }) => {
      await waitForChatLoad()

      // Click "Create Group Chat" button
      await page.locator('[data-testid="create-group-chat-button"]').click()

      // Fill group creation form
      await page.locator('[data-testid="group-name-input"]').fill('Blockchain Developers')
      await page.locator('[data-testid="group-description-input"]').fill('A group for blockchain developers and enthusiasts')

      // Add initial members
      await page.locator('[data-testid="add-member-input"]').fill(MOCK_USERS[1].address)
      await page.locator('[data-testid="add-member-button"]').click()

      await page.locator('[data-testid="add-member-input"]').fill(MOCK_USERS[3].address)
      await page.locator('[data-testid="add-member-button"]').click()

      // Create the group
      await page.locator('[data-testid="create-group-submit"]').click()

      // Verify group creation success
      await expect(page.locator('[data-testid="group-created-success"]')).toBeVisible()
      await expect(page.locator('[data-testid="group-created-success"]')).toContainText('Group created successfully')

      // Verify we're now in the new group chat
      await expect(page.locator('[data-testid="chat-header"] [data-testid="group-name"]')).toContainText('Blockchain Developers')
      await expect(page.locator('[data-testid="member-count"]')).toContainText('3 members')
    })

    test('should allow user to join existing group', async ({ 
      page, 
      waitForChatLoad
    }) => {
      await waitForChatLoad()

      // Mock existing groups
      await page.addInitScript(() => {
        window.readContractMock = (contractAddress: string, functionName: string, args?: any[]) => {
          switch (functionName) {
            case 'getAllUsers':
              return [
                '0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A',
                '0x8ba1f109551bD432803012645Hac136c32c3c0c4',
                '0x1234567890123456789012345678901234567890'
              ]
            case 'getUserGroups':
              return [
                {
                  id: '0xgroup123',
                  name: 'DeFi Traders',
                  description: 'Decentralized Finance trading group',
                  memberCount: 15,
                  isPublic: true,
                  joined: true
                }
              ]
            default:
              return []
          }
        }
      })

      // Navigate to group discovery
      await page.locator('[data-testid="groups-tab"]').click()

      // Verify existing groups are displayed
      const groupCard = page.locator('[data-testid="group-card"]').first()
      await expect(groupCard.locator('[data-testid="group-name"]')).toContainText('DeFi Traders')
      await expect(groupCard.locator('[data-testid="member-count"]')).toContainText('15 members')

      // Join the group
      await groupCard.locator('[data-testid="join-group-button"]').click()

      // Verify join confirmation
      await expect(page.locator('[data-testid="join-success-message"]')).toBeVisible()
      
      // Verify group appears in chat list
      await page.locator('[data-testid="chat-tab"]').click()
      const groupChatItem = page.locator('[data-testid="chat-item-0xgroup123"]')
      await expect(groupChatItem).toBeVisible()
      await expect(groupChatItem.locator('[data-testid="last-message"]')).toContainText('joined the group')
    })

    test('should handle private group joining with invitation', async ({ 
      page, 
      waitForChatLoad
    }) => {
      await waitForChatLoad()

      // Mock private group
      await page.addInitScript(() => {
        window.readContractMock = (contractAddress: string, functionName: string, args?: any[]) => {
          if (functionName === 'getUserGroups') {
            return [
              {
                id: '0xprivategroup',
                name: 'VIP Traders',
                description: 'Private group for verified traders',
                memberCount: 8,
                isPublic: false,
                joined: false,
                hasInvitation: true
              }
            ]
          }
          return []
        }
      })

      await page.locator('[data-testid="groups-tab"]').click()

      // Verify private group is shown with invitation badge
      const privateGroupCard = page.locator('[data-testid="group-card"]').first()
      await expect(privateGroupCard.locator('[data-testid="invitation-badge"]')).toBeVisible()
      await expect(privateGroupCard.locator('[data-testid="join-group-button"]')).toContainText('Accept Invitation')

      // Accept invitation
      await privateGroupCard.locator('[data-testid="join-group-button"]').click()

      // Verify invitation acceptance
      await expect(page.locator('[data-testid="invitation-accepted-message"]')).toBeVisible()
    })

    test('should validate group creation permissions for unverified users', async ({ 
      page, 
      mockWalletConnection,
      waitForChatLoad
    }) => {
      // Switch to unverified user
      const unverifiedUser = MOCK_USERS[2] // Charlie
      await mockWalletConnection(unverifiedUser)
      await page.reload()

      await waitForChatLoad()

      // Try to create group
      await page.locator('[data-testid="create-group-chat-button"]').click()

      // Verify restriction message
      await expect(page.locator('[data-testid="group-creation-restriction"]')).toBeVisible()
      await expect(page.locator('[data-testid="group-creation-restriction"]')).toContainText('ENS verification required to create groups')
      
      // Verify upgrade prompt
      await expect(page.locator('[data-testid="upgrade-to-create-groups"]')).toBeVisible()
      await expect(page.locator('[data-testid="verify-ens-button"]')).toBeVisible()
    })
  })

  test.describe('Group Management', () => {
    test('should allow group admin to manage members', async ({ 
      page, 
      waitForChatLoad
    }) => {
      await waitForChatLoad()

      // Create or join a group first
      await page.locator('[data-testid="create-group-chat-button"]').click()
      await page.locator('[data-testid="group-name-input"]').fill('Test Group')
      await page.locator('[data-testid="create-group-submit"]').click()

      // Open group settings
      await page.locator('[data-testid="group-settings-button"]').click()

      // Add new member
      await page.locator('[data-testid="add-member-to-group"]').fill(MOCK_USERS[2].address)
      await page.locator('[data-testid="add-member-submit"]').click()

      // Verify member added
      await expect(page.locator('[data-testid="member-added-success"]')).toBeVisible()

      // Remove member
      await page.locator('[data-testid="remove-member-button"]').first().click()
      await page.locator('[data-testid="confirm-remove-member"]').click()

      // Verify member removed
      await expect(page.locator('[data-testid="member-removed-success"]')).toBeVisible()
    })

    test('should display member list with verification status', async ({ 
      page, 
      waitForChatLoad
    }) => {
      await waitForChatLoad()

      // Create group with verified and unverified members
      await page.locator('[data-testid="create-group-chat-button"]').click()
      await page.locator('[data-testid="group-name-input"]').fill('Mixed Verification Group')
      
      // Add verified member
      await page.locator('[data-testid="add-member-input"]').fill(MOCK_USERS[1].address)
      await page.locator('[data-testid="add-member-button"]').click()
      
      // Add unverified member
      await page.locator('[data-testid="add-member-input"]').fill(MOCK_USERS[2].address)
      await page.locator('[data-testid="add-member-button"]').click()

      await page.locator('[data-testid="create-group-submit"]').click()

      // Open member list
      await page.locator('[data-testid="view-members-button"]').click()

      // Verify verified members show badges
      const verifiedMembers = page.locator('[data-testid="group-member-item"]').filter({
        has: page.locator('[data-testid="verification-badge"]')
      })
      await expect(verifiedMembers).toHaveCount(1) // Bob is verified

      // Verify unverified members don't show badges
      const unverifiedMembers = page.locator('[data-testid="group-member-item"]').filter({
        hasNot: page.locator('[data-testid="verification-badge"]')
      })
      await expect(unverifiedMembers).toHaveCount(2) // Alice (creator) + Charlie
    })

    test('should handle group invitations and notifications', async ({ 
      page, 
      waitForChatLoad
    }) => {
      await waitForChatLoad()

      // Mock incoming group invitation
      await page.addInitScript(() => {
        window.mockNewNotification = {
          type: 'group_invitation',
          groupId: '0xinvitedgroup',
          groupName: 'Exclusive DeFi Group',
          inviterAddress: MOCK_USERS[1].address,
          inviterName: 'Bob Smith'
        }
      })

      // Verify invitation notification appears
      await expect(page.locator('[data-testid="notification-badge"]')).toBeVisible()
      await expect(page.locator('[data-testid="notification-badge"]')).toContainText('1')

      // Click notification
      await page.locator('[data-testid="notifications-button"]').click()

      // Verify invitation details
      const invitationCard = page.locator('[data-testid="notification-card"]').first()
      await expect(invitationCard.locator('[data-testid="notification-title"]')).toContainText('Group Invitation')
      await expect(invitationCard.locator('[data-testid="notification-content"]')).toContainText('Exclusive DeFi Group')
      await expect(invitationCard.locator('[data-testid="notification-from"]')).toContainText('Bob Smith')

      // Accept invitation
      await invitationCard.locator('[data-testid="accept-invitation-button"]').click()

      // Verify success
      await expect(page.locator('[data-testid="invitation-accepted-toast"]')).toBeVisible()
    })
  })

  test.describe('Group Messaging', () => {
    test('should send messages in group context', async ({ 
      page, 
      waitForChatLoad
    }) => {
      await waitForChatLoad()

      // Create group
      await page.locator('[data-testid="create-group-chat-button"]').click()
      await page.locator('[data-testid="group-name-input"]').fill('Test Group')
      await page.locator('[data-testid="add-member-input"]').fill(MOCK_USERS[1].address)
      await page.locator('[data-testid="add-member-button"]').click()
      await page.locator('[data-testid="create-group-submit"]').click()

      // Send group message
      const groupMessage = 'Hello everyone! This is a group message.'
      await page.locator('[data-testid="message-input"]').fill(groupMessage)
      await page.locator('[data-testid="send-button"]').click()

      // Verify group message delivery
      await page.waitForFunction((msgContent) => {
        const messages = document.querySelectorAll('[data-testid="message-bubble"]')
        return Array.from(messages).some(message => 
          message.textContent?.includes(msgContent)
        )
      }, groupMessage)

      // Verify group context is maintained
      const messageBubble = page.locator('[data-testid="message-bubble"]').filter({ 
        hasText: groupMessage 
      })
      await expect(messageBubble.locator('[data-testid="group-context-indicator"]')).toBeVisible()
      await expect(messageBubble.locator('[data-testid="message-type"]')).toContainText('Group')
    })

    test('should mention specific group members', async ({ 
      page, 
      waitForChatLoad
    }) => {
      await waitForChatLoad()

      // Create group
      await page.locator('[data-testid="create-group-chat-button"]').click()
      await page.locator('[data-testid="group-name-input"]').fill('Dev Team')
      await page.locator('[data-testid="add-member-input"]').fill(MOCK_USERS[1].address)
      await page.locator('[data-testid="add-member-button"]').click()
      await page.locator('[data-testid="create-group-submit"]').click()

      // Send message with mention
      const mentionMessage = 'Hey @bob.smith, can you review this code?'
      await page.locator('[data-testid="message-input"]').fill(mentionMessage)

      // Verify mention suggestion appears
      await page.locator('[data-testid="mention-suggestion"]').waitFor({ timeout: 2000 })
      await expect(page.locator('[data-testid="mention-suggestion"]')).toContainText('bob.smith')

      // Select mention
      await page.locator('[data-testid="mention-suggestion"]').click()

      // Send message
      await page.locator('[data-testid="send-button"]').click()

      // Verify mention is highlighted in sent message
      const messageBubble = page.locator('[data-testid="message-bubble"]').filter({ 
        hasText: mentionMessage 
      })
      await expect(messageBubble.locator('[data-testid="user-mention"]')).toBeVisible()
      await expect(messageBubble.locator('[data-testid="user-mention"]')).toContainText('@bob.smith')
    })

    test('should handle group message history', async ({ 
      page, 
      waitForChatLoad
    }) => {
      await waitForChatLoad()

      // Create group with mock history
      await page.addInitScript(() => {
        window.readContractMock = (contractAddress: string, functionName: string, args?: any[]) => {
          if (functionName === 'getGroupMessages') {
            return [
              {
                sender: MOCK_USERS[1].address,
                content: 'Welcome to the group!',
                timestamp: Math.floor(Date.now() / 1000) - 3600,
                messageType: 'system'
              },
              {
                sender: MOCK_USERS[3].address,
                content: 'Thanks for having me!',
                timestamp: Math.floor(Date.now() / 1000) - 3500,
                messageType: 'text'
              }
            ]
          }
          return []
        }
      })

      await page.locator('[data-testid="create-group-chat-button"]').click()
      await page.locator('[data-testid="group-name-input"]').fill('Existing Group')
      await page.locator('[data-testid="create-group-submit"]').click()

      // Verify historical messages are loaded
      await expect(page.locator('[data-testid="message-bubble"]')).toHaveCount(2)
      
      // Verify system message styling
      const systemMessage = page.locator('[data-testid="message-bubble"]').first()
      await expect(systemMessage).toHaveAttribute('data-message-type', 'system')
      await expect(systemMessage.locator('[data-testid="system-message-indicator"]')).toBeVisible()
    })
  })

  test.describe('Group Security and Permissions', () => {
    test('should enforce group access permissions', async ({ 
      page, 
      waitForChatLoad
    }) => {
      await waitForChatLoad()

      // Mock private group
      await page.addInitScript(() => {
        window.readContractMock = (contractAddress: string, functionName: string, args?: any[]) => {
          if (functionName === 'getUserGroups') {
            return [
              {
                id: '0xprivategroup',
                name: 'Private Group',
                isPublic: false,
                hasAccess: false,
                accessReason: 'invitation_required'
              }
            ]
          }
          return []
        }
      })

      await page.locator('[data-testid="groups-tab"]').click()

      // Try to access private group without invitation
      const privateGroupCard = page.locator('[data-testid="group-card"]').first()
      await privateGroupCard.locator('[data-testid="group-name"]').click()

      // Verify access denied
      await expect(page.locator('[data-testid="access-denied-message"]')).toBeVisible()
      await expect(page.locator('[data-testid="access-denied-message"]')).toContainText('Invitation required')
      await expect(page.locator('[data-testid="request-invitation-button"]')).toBeVisible()
    })

    test('should handle group admin permissions', async ({ 
      page, 
      waitForChatLoad
    }) => {
      await waitForChatLoad()

      // Create group as admin
      await page.locator('[data-testid="create-group-chat-button"]').click()
      await page.locator('[data-testid="group-name-input"]').fill('Admin Test Group')
      await page.locator('[data-testid="create-group-submit"]').click()

      // Verify admin controls are available
      await expect(page.locator('[data-testid="admin-controls"]')).toBeVisible()
      await expect(page.locator('[data-testid="transfer-admin-button"]')).toBeVisible()
      await expect(page.locator('[data-testid="delete-group-button"]')).toBeVisible()

      // Test member management
      await page.locator('[data-testid="group-settings-button"]').click()
      await page.locator('[data-testid="make-admin-button"]').click()
      
      // Verify admin promotion confirmation
      await expect(page.locator('[data-testid="admin-promotion-success"]')).toBeVisible()
    })

    test('should prevent unauthorized group modifications', async ({ 
      page, 
      mockWalletConnection,
      waitForChatLoad
    }) => {
      // Switch to regular member (not admin)
      const regularMember = MOCK_USERS[2] // Charlie
      await mockWalletConnection(regularMember)
      await page.reload()

      await waitForChatLoad()

      // Try to access group settings
      await page.locator('[data-testid="chat-item"]').first().click()
      await page.locator('[data-testid="group-settings-button"]').click()

      // Verify admin-only controls are disabled
      await expect(page.locator('[data-testid="delete-group-button"]')).toBeDisabled()
      await expect(page.locator('[data-testid="transfer-admin-button"]')).toBeDisabled()
      
      // Verify access denied message
      await expect(page.locator('[data-testid="admin-access-required"]')).toBeVisible()
    })
  })
})