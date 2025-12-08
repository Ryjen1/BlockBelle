'use client';

import React, { useState } from 'react';
import UserList from './UserList';
import { useChat } from '@/hooks/useChat';
import { useUsernames } from '@/hooks/useUsernames';
import { useAccount } from 'wagmi';
import Tier3Badge from '@/components/Tier3Badge';
import { useBulkSelfVerification } from '@/hooks/useBulkSelfVerification';

interface NotificationProps {
  message: string
  type: 'success' | 'error' | 'info'
  show: boolean
}

const Notification: React.FC<NotificationProps> = ({ message, type, show }) => {
  if (!show) return null

  const bgColor = type === 'success' ? 'bg-green-100 border-green-500' :
                  type === 'error' ? 'bg-red-100 border-red-500' :
                  'bg-blue-100 border-blue-500'

  const textColor = type === 'success' ? 'text-green-800' :
                    type === 'error' ? 'text-red-800' :
                    'text-blue-800'

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

  const [messageInput, setMessageInput] = useState('')
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' | 'info'; show: boolean }>({
    message: '',
    type: 'info',
    show: false,
  })

  // Check if selected user is tier 3 (on-chain verification)
  const { verifications: userVerifications } = useBulkSelfVerification(selectedUser ? [selectedUser] : [])
  const selectedUserVerified = selectedUser ? userVerifications[selectedUser] : false

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
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Connect Your Wallet</h2>
          <p className="text-gray-600">Please connect your wallet to start chatting.</p>
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
          <div className="bg-white rounded-lg shadow-md h-80 lg:h-96 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200">
              {selectedUser ? (
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {getCachedUsername(selectedUser).charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-semibold text-gray-900">
                        {getCachedUsername(selectedUser)}
                      </h3>
                      {selectedUserVerified && <Tier3Badge size="sm" />}
                    </div>
                    <p className="text-xs text-gray-500">
                      {selectedUser.slice(0, 6)}...{selectedUser.slice(-4)}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">Select a user to start chatting</h3>
                  <p className="text-sm text-gray-500">Choose someone from the list to begin your conversation</p>
                </div>
              )}
            </div>

            {/* Pinned Message Display */}
            {pinnedMessage && (
              <div className="p-4 border-b border-gray-200 bg-yellow-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-800">Pinned Message</span>
                    <span className="text-xs text-gray-500">by {pinnedMessage.sender.slice(0, 6)}...{pinnedMessage.sender.slice(-4)}</span>
                  </div>
                  <button
                    onClick={handleUnpinMessage}
                    disabled={isUnpinning}
                    className="text-xs text-blue-600 hover:text-blue-800 disabled:opacity-50"
                  >
                    {isUnpinning ? 'Unpinning...' : 'Unpin'}
                  </button>
                </div>
                <p className="text-sm text-gray-700 mt-1">{pinnedMessage.content}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {formatTimestamp(pinnedMessage.timestamp)}
                </p>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {isLoadingMessages ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600"></div>
                  <span className="ml-2 text-gray-600">Loading messages...</span>
                </div>
              ) : messages.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-2">
                    <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <p className="text-gray-600">No messages yet.</p>
                  <p className="text-sm text-gray-500">Start the conversation!</p>
                </div>
              ) : (
                messages.map((message, index) => {
                  const isOwnMessage = message.sender.toLowerCase() === address.toLowerCase()
                  return (
                    <div key={index} className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        isOwnMessage
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-200 text-gray-900'
                      }`}>
                        {!isOwnMessage && selectedUserVerified && (
                          <div className="flex items-center gap-1 mb-1">
                            <p className="text-xs font-semibold text-gray-700">
                              {getCachedUsername(selectedUser)}
                            </p>
                            <Tier3Badge size="sm" />
                          </div>
                        )}
                        <div className="flex items-start justify-between">
                          <p className="text-sm">{message.content}</p>
                          {!message.isPinned && isOwnMessage && (
                            <button
                              onClick={() => handlePinMessage(index)}
                              disabled={isPinning}
                              className="ml-2 text-xs text-blue-400 hover:text-blue-600 disabled:opacity-50"
                            >
                              {isPinning ? 'Pinning...' : 'Pin'}
                            </button>
                          )}
                        </div>
                        <p className={`text-xs mt-1 ${
                          isOwnMessage ? 'text-indigo-200' : 'text-gray-500'
                        }`}>
                          {formatTimestamp(message.timestamp)}
                        </p>
                      </div>
                    </div>
                  )
                })
              )}
            </div>

            {/* Message Input */}
            {selectedUser && (
              <div className="p-4 border-t border-gray-200">
                <form onSubmit={handleSendMessage}>
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      disabled={isSending}
                    />
                    <button
                      type="submit"
                      disabled={!messageInput.trim() || isSending}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
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