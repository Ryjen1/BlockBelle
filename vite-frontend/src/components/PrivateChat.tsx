import { useState, useEffect } from 'react'
import { useAccount, useWriteContract, useReadContract } from 'wagmi'
import { parseAbi } from 'viem'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import MembersList from './MembersList'
import { CONTRACT_ADDRESSES } from '../config/contracts'

const chatAbi = parseAbi([
  'function sendMessage(address to, string content) external',
  'function getConversation(address user1, address user2) external view returns ((address sender, address receiver, string content, uint256 timestamp)[])',
])

interface Message {
  sender: string
  content: string
  timestamp: bigint
}

export default function PrivateChat() {
  const { address } = useAccount()
  const [selectedUser, setSelectedUser] = useState<{ address: string; ensName: string } | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')

  const { writeContract } = useWriteContract()

  const { data: conversation } = useReadContract({
    address: CONTRACT_ADDRESSES.chat,
    abi: chatAbi,
    functionName: 'getConversation',
    args: address && selectedUser ? [address as `0x${string}`, selectedUser.address as `0x${string}`] : undefined,
  })

  useEffect(() => {
    if (conversation) {
      const formattedMessages: Message[] = conversation.map((msg: any) => ({
        sender: msg.sender,
        content: msg.content,
        timestamp: BigInt(msg.timestamp)
      }))
      setMessages(formattedMessages)
    }
  }, [conversation])

  const handleSendMessage = () => {
    if (!selectedUser || !newMessage) return
    writeContract({
      address: CONTRACT_ADDRESSES.chat,
      abi: chatAbi,
      functionName: 'sendMessage',
      args: [selectedUser.address as `0x${string}`, newMessage],
    })
    setNewMessage('')
  }

  const handleUserSelect = (member: { address: string; ensName: string }) => {
    setSelectedUser(member)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Members List */}
        <div className="lg:col-span-1">
          <MembersList onSelectUser={handleUserSelect} showChatButton={false} />
        </div>

        {/* Chat Interface */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Private Chat</h2>

          {selectedUser ? (
            <div className="mb-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Chatting with: <span className="font-semibold text-blue-700">{selectedUser.ensName}</span>
              </p>
              <p className="text-xs text-gray-500 font-mono mt-1">
                {selectedUser.address.slice(0, 6)}...{selectedUser.address.slice(-4)}
              </p>
            </div>
          ) : (
            <div className="mb-4 p-3 bg-gray-50 rounded-lg text-center">
              <p className="text-gray-600">Select a user from the list to start chatting</p>
            </div>
          )}

          <div className="border rounded p-4 h-64 overflow-y-auto mb-4">
            {messages.length === 0 ? (
              <div className="text-center py-8">
                <ChatBubbleLeftRightIcon className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">Select a member from the list to start chatting</p>
                <p className="text-sm text-gray-400 mt-1">Choose someone from the community members to begin a conversation</p>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className={`mb-2 ${msg.sender === address ? 'text-right' : 'text-left'}`}>
                  <span className="font-semibold">{msg.sender.slice(0, 6)}...{msg.sender.slice(-4)}:</span> {msg.content}
                </div>
              ))
            )}
          </div>

          <div className="flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}