'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAccount, useReadContract, useWriteContract, useWatchContractEvent } from 'wagmi';
import { parseAbi } from 'viem';
import {
  UserIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  VideoCameraIcon,
  MagnifyingGlassIcon,
  PaperClipIcon,
  FaceSmileIcon,
  EllipsisVerticalIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'
import MembersList from './MembersList';
import { CONTRACT_ADDRESSES } from '@/config/contracts';
import { getUserDetailsFromContract } from '@/utils/contractReads';
import Tier3Badge from '@/components/Tier3Badge';
import ChatSearch from './ChatSearch';
import MessageHighlighter from './MessageHighlighter';
import { useBulkPublicVerification } from '@/hooks/usePublicVerification';
import { useMessageSearch, type Message as SearchMessage } from '@/hooks/useMessageSearch';
import MessageBubble from './MessageBubble';

const registryAbi = parseAbi([
  'function getAllUsers() external view returns (address[])',
  'function getUserDetails(address userAddress) external view returns (string memory ensName, string memory avatarHash, bool registered)',
])

const chatAbi = parseAbi([
  'function sendMessage(address to, string content) external',
  'function getConversation(address user1, address user2) external view returns ((address sender, address receiver, string content, uint256 timestamp)[])',
])

interface ChatMessage {
  sender: string
  content: string
  timestamp: bigint
  type: 'private' | 'group'
  chatId?: string
}

interface Chat {
  id: string
  name: string
  type: 'private' | 'group'
  lastMessage?: string
  lastMessageTime?: bigint
  unreadCount: number
  avatar?: string
  isOnline?: boolean
}

interface MainChatProps {
  onClose?: () => void
}

export default function MainChat({ onClose }: MainChatProps) {
    const { address } = useAccount()
    const { writeContract } = useWriteContract()
    const [selectedChat, setSelectedChat] = useState<Chat | null>(null)
    const [messages, setMessages] = useState<ChatMessage[]>([])
    const [newMessage, setNewMessage] = useState('')
    const [chats, setChats] = useState<Chat[]>([])
    const [showMembersList, setShowMembersList] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [userNames, setUserNames] = useState<Map<string, string>>(new Map())
    const [isLoadingMessages, setIsLoadingMessages] = useState(false)

    // Message search functionality
    const {
        filteredMessages,
        searchFilters,
        isSearchActive,
        searchStats,
        updateFilters,
        clearFilters,
        getHighlightedContent
    } = useMessageSearch(messages)

    // Get verification status for selected chat user
    const recipientAddress = selectedChat?.id.replace('private_', '') as `0x${string}` | undefined
    const { verifications: userVerifications } = useBulkSelfVerification(
      recipientAddress ? [recipientAddress] : []
    )

    // Fetch real registered users from smart contract
    const { data: allUsers, refetch: refetchUsers } = useReadContract({
      address: CONTRACT_ADDRESSES.registry,
      abi: registryAbi,
      functionName: 'getAllUsers',
    })

    // Fetch usernames for all users
    useEffect(() => {
      if (!allUsers || allUsers.length === 0) return

      const namesMap = new Map<string, string>()

      // Create initial mapping with cached usernames or address fallbacks
      allUsers.forEach((userAddress) => {
        if (userAddress.toLowerCase() !== address?.toLowerCase()) {
          const cachedName = localStorage.getItem(`username_${userAddress}`)
          if (cachedName) {
            namesMap.set(userAddress, cachedName)
          } else {
            namesMap.set(userAddress, `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`)
          }
        }
      })

      setUserNames(namesMap)

      // Create chats with usernames
      const realChats: Chat[] = allUsers
        .filter(userAddress => userAddress.toLowerCase() !== address?.toLowerCase())
        .map((userAddress) => ({
          id: `private_${userAddress}`,
          name: namesMap.get(userAddress) || `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`,
          type: 'private' as const,
          lastMessage: '',
          lastMessageTime: 0n,
          unreadCount: 0,
          isOnline: Math.random() > 0.5
        }))
      setChats(realChats)

      // Try to fetch actual usernames for users without cached names
      allUsers.forEach((userAddress) => {
        if (userAddress.toLowerCase() !== address?.toLowerCase()) {
          const cachedName = localStorage.getItem(`username_${userAddress}`)
          if (!cachedName) {
            // Use the contract reading utility to fetch actual username
            try {
              const fetchUsername = async () => {
                try {
                  const userDetails = await getUserDetailsFromContract(userAddress)

                  if (userDetails && userDetails.registered) {
                    const actualUsername = userDetails.ensName || `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`

                    // Cache the actual username
                    localStorage.setItem(`username_${userAddress}`, actualUsername)

                    // Update the names map
                    namesMap.set(userAddress, actualUsername)
                    setUserNames(new Map(namesMap))

                    // Update chats with new username
                    setChats(prev => prev.map(chat =>
                      chat.id === `private_${userAddress}`
                        ? { ...chat, name: actualUsername }
                        : chat
                    ))
                  }
                } catch (error) {
                  console.error('Error fetching username from contract:', error)
                }
              }

              // Fetch with a small delay to avoid overwhelming the network
              setTimeout(fetchUsername, Math.random() * 1000)
            } catch (error) {
              console.error('Error setting up username fetch:', error)
            }
          }
        }
      })
    }, [allUsers, address])

    // Usernames are now handled in the other useEffect above

    // Fetch messages for selected chat using wagmi
    const { data: conversation, refetch: refetchMessages } = useReadContract({
      address: CONTRACT_ADDRESSES.chat,
      abi: chatAbi,
      functionName: 'getConversation',
      args: address && recipientAddress ? [address, recipientAddress] : undefined,
      query: {
        enabled: !!address && !!recipientAddress,
      },
    })

    // Update messages when conversation data changes
    useEffect(() => {
      if (conversation) {
        const formattedMessages: ChatMessage[] = conversation.map((msg: any) => ({
          sender: msg.sender,
          content: msg.content,
          timestamp: BigInt(msg.timestamp),
          type: 'private',
          chatId: selectedChat?.id || ''
        }))
        setMessages(formattedMessages)
      }
    }, [conversation, selectedChat])

    // Watch for new messages
    useWatchContractEvent({
      address: CONTRACT_ADDRESSES.chat,
      abi: chatAbi,
      eventName: 'MessageSent',
      onLogs(logs) {
        logs.forEach((log: any) => {
          const { from, to, message, timestamp } = log.args

          // Check if this message is for current user or from current chat
          if ((to === address && selectedChat?.id === `private_${from}`) ||
              (from === address && selectedChat?.id === `private_${to}`)) {

            const newMessage: ChatMessage = {
              sender: from,
              content: message,
              timestamp: BigInt(timestamp),
              type: 'private',
              chatId: selectedChat.id
            }

            setMessages(prev => {
              // Avoid duplicates
              const exists = prev.some(msg =>
                msg.sender === from &&
                msg.content === message &&
                msg.timestamp === BigInt(timestamp)
              )
              return exists ? prev : [...prev, newMessage]
            })

            // Update last message in chats
            setChats(prev => prev.map(chat =>
              chat.id === selectedChat.id
                ? { ...chat, lastMessage: message, lastMessageTime: BigInt(timestamp), unreadCount: 0 }
                : chat
            ))
          }
        })
      },
    })

   const handleSendMessage = async () => {
     if (!newMessage.trim() || !selectedChat) return

     try {
       // Extract recipient address from chat ID
       const recipientAddress = selectedChat.id.replace('private_', '') as `0x${string}`

       // Send message to blockchain
       await writeContract({
         address: CONTRACT_ADDRESSES.chat,
         abi: chatAbi,
         functionName: 'sendMessage',
         args: [recipientAddress, newMessage],
       })

       // Add message to local state for immediate UI feedback
       const message: ChatMessage = {
         sender: address!,
         content: newMessage,
         timestamp: BigInt(Date.now()),
         type: selectedChat.type,
         chatId: selectedChat.id
       }

       setMessages(prev => [...prev, message])
       setNewMessage('')

       // Update last message in chats
       setChats(prev => prev.map(chat =>
         chat.id === selectedChat.id
           ? { ...chat, lastMessage: newMessage, lastMessageTime: BigInt(Date.now()), unreadCount: 0 }
           : chat
       ))
     } catch (error: any) {
       console.error('Failed to send message:', error)
       alert('Failed to send message: ' + (error.message || 'Unknown error'))
     }
   }

   const handleChatSelect = (chat: Chat) => {
     setSelectedChat(chat)
     setMessages([]) // In real app, load messages for this chat
     // Mark as read
     setChats(prev => prev.map(c =>
       c.id === chat.id ? { ...c, unreadCount: 0 } : c
     ))
   }

   const handleUserSelect = (member: { address: string; ensName: string }) => {
     const existingChat = chats.find(c => c.id === `private_${member.address}`)
     if (existingChat) {
       handleChatSelect(existingChat)
     } else {
       const newChat: Chat = {
         id: `private_${member.address}`,
         name: member.ensName,
         type: 'private',
         unreadCount: 0,
         isOnline: Math.random() > 0.5
       }
       setChats(prev => [newChat, ...prev])
       handleChatSelect(newChat)
     }
     setShowMembersList(false)
   }

  const formatTime = (timestamp: bigint) => {
    try {
      const timestampNum = Number(timestamp)

      // Check if timestamp is 0 or invalid
      if (timestampNum === 0 || timestampNum < 1000000000) {
        return 'now'
      }

      const date = new Date(timestampNum * 1000) // Convert from seconds to milliseconds
      const now = new Date()
      const diff = now.getTime() - date.getTime()

      if (diff < 60000) return 'now'
      if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`
      if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`
      return date.toLocaleDateString()
    } catch (error) {
      console.error('Error formatting time:', error)
      return 'now'
    }
  }

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-gray-900">BlockBelle Chat</h1>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowMembersList(!showMembersList)}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full"
                title="Add Contact"
              >
                <UserIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search chats..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Chats List */}
        <div className="flex-1 overflow-y-auto">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => handleChatSelect(chat)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                selectedChat?.id === chat.id ? 'bg-blue-50 border-r-2 border-r-blue-500' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">
                      {chat.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  {chat.isOnline && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 truncate">{chat.name}</h3>
                    {chat.lastMessageTime ? (
                      <span className="text-xs text-gray-500">
                        {formatTime(chat.lastMessageTime)}
                      </span>
                    ) : null}
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 truncate">
                      {chat.lastMessage || 'No messages yet'}
                    </p>
                    {chat.unreadCount > 0 && (
                      <span className="bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {chat.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Members List Sidebar */}
      {showMembersList && (
        <div className="w-80 bg-white border-r border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Add Contact</h2>
              <button
                onClick={() => setShowMembersList(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
          </div>
          <MembersList onSelectUser={handleUserSelect} showChatButton={false} />
        </div>
      )}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">
                      {selectedChat.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  {selectedChat.isOnline && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h2 className="font-semibold text-gray-900">{selectedChat.name}</h2>
                    {recipientAddress && userVerifications[recipientAddress] && <Tier3Badge size="sm" />}
                  </div>
                  <p className="text-sm text-gray-500">
                    {selectedChat.isOnline ? 'Online' : 'Offline'}
                  </p>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full">
                  <PhoneIcon className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full">
                  <VideoCameraIcon className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full">
                  <EllipsisVerticalIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Chat Search */}
            <ChatSearch
              onSearchChange={updateFilters}
              onClearSearch={clearFilters}
              isSearchActive={isSearchActive}
              searchStats={searchStats}
            />

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.length === 0 ? (
                <div className="text-center py-12">
                  <ChatBubbleLeftRightIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">No messages yet</p>
                  <p className="text-gray-400 text-sm">Start the conversation!</p>
                </div>
              ) : (
                messages.map((msg, index) => {
                    const isOwnMessage = msg.sender === address;
                    const senderVerified = !isOwnMessage && userVerifications[msg.sender];
                    const senderName = userNames.get(msg.sender) || `${msg.sender.slice(0, 6)}...${msg.sender.slice(-4)}`;
                  
                  return (
                    <div key={index} className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
                      <MessageBubble
                        content={isSearchActive ? getHighlightedContent(msg as any, searchFilters.content || '') || msg.content : msg.content}
                        isOwnMessage={isOwnMessage}
                        senderName={senderName}
                        timestamp={msg.timestamp}
                        showSender={!isOwnMessage}
                        className={senderVerified ? 'border-l-4 border-green-400' : ''}
                      />
                    </div>
                  );
                })
              )}
            </div>

            {/* Message Input */}
            <div className="bg-white border-t border-gray-200 p-4">
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full">
                  <PaperClipIcon className="h-5 w-5" />
                </button>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full">
                  <FaceSmileIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <ChatBubbleLeftRightIcon className="h-24 w-24 text-gray-300 mx-auto mb-6" />
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">Welcome to BlockBelle Chat</h2>
              <p className="text-gray-500 mb-6">You're registered and ready to start chatting!</p>
              <div className="space-y-3">
                <p className="text-sm text-gray-400">Choose how to start:</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setShowMembersList(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Find Members to Chat
                  </button>
                  <button
                    onClick={() => {/* Navigate to group chat */}}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Create Group Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}