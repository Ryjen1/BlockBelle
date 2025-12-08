'use client';

import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import { useChat } from '@/hooks/useChat';
import { useUsernames } from '@/hooks/useUsernames';
import { useAccount } from 'wagmi';
import ENSProfile from '@/components/ENSProfile';
import { useENSDisplayInfo } from '@/hooks/useENSProfile';
import Tier3Badge from '@/components/Tier3Badge';
import ChatSearch from './ChatSearch';
import MessageHighlighter from './MessageHighlighter';
import { usePublicVerification } from '@/hooks/usePublicVerification';
import { useNotifications, useAppFocus } from '@/contexts/NotificationContext';
import { useMessageSearch } from '@/hooks/useMessageSearch';
import MessageBubble from './MessageBubble';

interface NotificationProps {
  message: string
  type: 'success' | 'error' | 'info'
  show: boolean
}

const Notification: React.FC<NotificationProps> = ({ message, type, show }) => {
  if (!show) return null

  const bgColor = type === 'success' ? 'bg-green-100 dark:bg-green-900/50 border-green-500' :
                  type === 'error' ? 'bg-red-100 dark:bg-red-900/50 border-red-500' :
                  'bg-blue-100 dark:bg-blue-900/50 border-blue-500'

  const textColor = type === 'success' ? 'text-green-800 dark:text-green-200' :
                    type === 'error' ? 'text-red-800 dark:text-red-200' :
                    'text-blue-800 dark:text-blue-200'

  return (
    <div className={`fixed top-4 right-4 z-50 p-4 rounded-md border-l-4 ${bgColor} ${textColor} shadow-lg max-w-sm`}>
      <p className="text-sm font-medium">{message}</p>
    </div>
  )
}

const ChatInterface: React.FC = () => {
  const { address, isConnected } = useAccount()
  const { getCachedUsername } = useUsernames()
  const {
    selectedUser,
    messages,
    pinnedMessage,
    isLoadingMessages,
    isLoadingPinnedMessage,
    isSending,
    isPinning,
    isUnpinning,
    sendMessage,
    pinMessage,
    unpinMessage,
    selectUser,
  } = useChat()
  const { showNewMessageNotification, isEnabled } = useNotifications()
  const isFocused = useAppFocus()
  
  // Message search functionality
  const {
    filteredMessages,
    searchFilters,
    isSearchActive,
    searchStats,
    updateFilters,
    clearFilters,
  } = useMessageSearch(messages)
  
  // Get ENS profile info for the selected user
  const { displayInfo: selectedUserDisplayInfo } = useENSDisplayInfo(selectedUser)
  
  // Check if selected user is tier 3 (public verification)
  const { isVerified: selectedUserVerified } = usePublicVerification(selectedUser || undefined)

  const [messageInput, setMessageInput] = useState('')
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' | 'info'; show: boolean }>({
    message: '',
    type: 'info',
    show: false,
  })
  
  const [previousMessageCount, setPreviousMessageCount] = useState(0)

  // Component cleanup on unmount
  React.useEffect(() => {
    return () => {
      // Clear any pending timeouts
      if (notification.show) {
        setNotification({ message: '', type: 'info', show: false })
      }
      // Reset any form state
      setMessageInput('')
    }
  }, [])

  // Show notifications for new messages when app is not focused
  React.useEffect(() => {
    if (isFocused || !isEnabled || !selectedUser || messages.length === 0) {
      setPreviousMessageCount(messages.length)
      return
    }

    const newMessages = messages.slice(previousMessageCount)
    const latestMessage = newMessages[newMessages.length - 1]
    
    if (latestMessage && latestMessage.sender.toLowerCase() !== address?.toLowerCase()) {
      // Use ENS display name if available, fallback to cached username
      const senderENSInfo = useENSDisplayInfo(latestMessage.sender)
      const senderName = senderENSInfo.displayInfo.displayName || getCachedUsername(latestMessage.sender)
      const isGroupChat = false // Assuming private chat for now, will be enhanced later
      
      showNewMessageNotification(
        senderName,
        latestMessage.content,
        isGroupChat ? 'group' : 'private',
        selectedUser
      )
    }
    
    setPreviousMessageCount(messages.length)
  }, [messages, isFocused, isEnabled, selectedUser, address, getCachedUsername, showNewMessageNotification, previousMessageCount])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!messageInput.trim() || isSending || !selectedUser) return

    try {
      await sendMessage(messageInput)
      setMessageInput('')
      setNotification({
        message: 'Message sent successfully!',
        type: 'success',
        show: true,
      })
      setTimeout(() => setNotification({ message: '', type: 'info', show: false }), 3000)
    } catch (error) {
      console.error('Failed to send message:', error)
      setNotification({
        message: 'Failed to send message. Please try again.',
        type: 'error',
        show: true,
      })
      setTimeout(() => setNotification({ message: '', type: 'info', show: false }), 5000)
    }
  }

  const handlePinMessage = async (messageId: number) => {
    if (!selectedUser || isPinning) return

    try {
      await pinMessage(messageId)
      setNotification({
        message: 'Message pinned successfully!',
        type: 'success',
        show: true,
      })
      setTimeout(() => setNotification({ message: '', type: 'info', show: false }), 3000)
    } catch (error) {
      console.error('Failed to pin message:', error)
      setNotification({
        message: 'Failed to pin message. Please try again.',
        type: 'error',
        show: true,
      })
      setTimeout(() => setNotification({ message: '', type: 'info', show: false }), 5000)
    }
  }

  const handleUnpinMessage = async () => {
    if (!selectedUser || isUnpinning) return

    try {
      await unpinMessage()
      setNotification({
        message: 'Message unpinned successfully!',
        type: 'success',
        show: true,
      })
      setTimeout(() => setNotification({ message: '', type: 'info', show: false }), 3000)
    } catch (error) {
      console.error('Failed to unpin message:', error)
      setNotification({
        message: 'Failed to unpin message. Please try again.',
        type: 'error',
        show: true,
      })
      setTimeout(() => setNotification({ message: '', type: 'info', show: false }), 5000)
    }
  }

  const showNotification = (message: string, type: 'success' | 'error' | 'info') => {
    setNotification({ message, type, show: true })
    setTimeout(() => setNotification({ message: '', type: 'info', show: false }), type === 'error' ? 5000 : 3000)
  }

  const formatTimestamp = (timestamp: bigint) => {
    return new Date(Number(timestamp) * 1000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (!isConnected || !address) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/20 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Connect Your Wallet</h2>
          <p className="text-gray-600 dark:text-gray-400">Please connect your wallet to start chatting.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Notification message={notification.message} type={notification.type} show={notification.show} />
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        {/* User List */}
        <div className="w-full lg:w-80 lg:flex-shrink-0">
          <UserList onUserSelect={selectUser} selectedUser={selectedUser} />
        </div>

        {/* Chat Area */}
        <div className="flex-1 min-w-0">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/20 h-80 lg:h-96 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              {selectedUser ? (
                <div className="flex items-center space-x-3">
                  <ENSProfile
                    address={selectedUser}
                    size="md"
                    showBadge={true}
                    showFullProfile={false}
                    className=""
                    fallbackToAddress={true}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {selectedUserDisplayInfo.displayName}
                      </h3>
                      {selectedUserVerified && <Tier3Badge size="sm" />}
                      {selectedUserDisplayInfo.hasProfile && (
                        <div className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200">
                          ENS
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {selectedUserDisplayInfo.bio || `${selectedUser.slice(0, 6)}...${selectedUser.slice(-4)}`}
                    </p>
                    {(selectedUserDisplayInfo.website || selectedUserDisplayInfo.twitter || selectedUserDisplayInfo.github) && (
                      <div className="flex gap-2 mt-1">
                        {selectedUserDisplayInfo.website && (
                          <a
                            href={selectedUserDisplayInfo.website.startsWith('http') ? selectedUserDisplayInfo.website : `https://${selectedUserDisplayInfo.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            Website
                          </a>
                        )}
                        {selectedUserDisplayInfo.twitter && (
                          <a
                            href={`https://twitter.com/${selectedUserDisplayInfo.twitter.replace('@', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-400 dark:text-blue-300 hover:underline"
                          >
                            Twitter
                          </a>
                        )}
                        {selectedUserDisplayInfo.github && (
                          <a
                            href={`https://github.com/${selectedUserDisplayInfo.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-gray-700 dark:text-gray-300 hover:underline"
                          >
                            GitHub
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Select a user to start chatting</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Choose someone from the list to begin your conversation</p>
                </div>
              )}
            </div>

            {/* Chat Search */}
            {selectedUser && (
              <ChatSearch
                onSearchChange={updateFilters}
                onClearSearch={clearFilters}
                isSearchActive={isSearchActive}
                searchStats={searchStats}
              />
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {isLoadingMessages ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600 dark:border-indigo-400"></div>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">Loading messages...</span>
                </div>
              ) : (isSearchActive ? filteredMessages : messages).length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-gray-400 dark:text-gray-500 mb-2">
                    <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">No messages yet.</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Start the conversation!</p>
                </div>
              ) : (
                (isSearchActive ? filteredMessages : messages).map((message, index) => {
                  const isOwnMessage = message.sender.toLowerCase() === address.toLowerCase()
                  const messageSenderDisplayInfo = useENSDisplayInfo(message.sender)
                  const senderName = messageSenderDisplayInfo.displayInfo.displayName || `${message.sender.slice(0, 6)}...${message.sender.slice(-4)}`;
                  
                  return (
                    <div key={index} className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
                      <MessageBubble
                        content={isSearchActive ? (searchFilters.content ? message.content.replace(new RegExp(searchFilters.content, 'gi'), `<mark>${searchFilters.content}</mark>`) : message.content) : message.content}
                        isOwnMessage={isOwnMessage}
                        senderName={senderName}
                        timestamp={message.timestamp}
                        showSender={!isOwnMessage && (selectedUserVerified || messageSenderDisplayInfo.displayInfo.hasProfile)}
                        className={`${
                          isOwnMessage 
                            ? 'bg-indigo-600 dark:bg-indigo-700 text-white' 
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                        } ${messageSenderDisplayInfo.displayInfo.isVerified ? 'border-l-4 border-green-400' : ''}`}
                      />
                    </div>
                  )
                })
              )}
            </div>

            {/* Message Input */}
            {selectedUser && (
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <form onSubmit={handleSendMessage}>
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      disabled={isSending}
                    />
                    <button
                      type="submit"
                      disabled={!messageInput.trim() || isSending}
                      className="px-4 py-2 bg-indigo-600 dark:bg-indigo-700 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSending ? 'Sending...' : 'Send'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatInterface