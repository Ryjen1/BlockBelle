import { useState, useEffect } from 'react'
import { useWriteContract, useReadContract, useWatchContractEvent, usePublicClient } from 'wagmi'
import { parseAbi } from 'viem'
import MembersList from './MembersList'
import { CONTRACT_ADDRESSES } from '../config/contracts'

const chatAbi = parseAbi([
  'function createGroup(string _name) external returns (uint256)',
  'function addMember(uint256 _groupId, address _member) external',
  'function sendGroupMessage(uint256 _groupId, string _content) external',
  'function getGroupMessages(uint256 _groupId, uint256 _start, uint256 _count) external view returns ((address sender, string content, uint256 timestamp)[])',
  'function getGroupMembers(uint256 _groupId) external view returns (address[])',
  'function groupCount() external view returns (uint256)',
])

const registryAbi = parseAbi([
  'function getAllUsers() external view returns (address[] memory)',
  'function getUserDetails(address userAddress) external view returns (string memory ensName, string memory avatarHash, bool registered)',
])

interface Message {
  sender: string
  content: string
  timestamp: bigint
}

export default function GroupChat() {
   const [selectedGroup, setSelectedGroup] = useState<number | null>(null)
   const [messages, setMessages] = useState<Message[]>([])
   const [newMessage, setNewMessage] = useState('')
   const [newGroupName, setNewGroupName] = useState('')
   const [newMember, setNewMember] = useState('')
   const [userNames, setUserNames] = useState<Record<string, string>>({})

   const { writeContract } = useWriteContract()
   const publicClient = usePublicClient()

   const { data: allUsers } = useReadContract({
     address: CONTRACT_ADDRESSES.registry,
     abi: registryAbi,
     functionName: 'getAllUsers',
   })

   const { data: groupMessages } = useReadContract({
     address: CONTRACT_ADDRESSES.chat,
     abi: chatAbi,
     functionName: 'getGroupMessages',
     args: selectedGroup ? [BigInt(selectedGroup), 0n, 100n] : undefined,
   })

   useEffect(() => {
      if (groupMessages) {
        setMessages(groupMessages as Message[])
      }
    }, [groupMessages])

   useEffect(() => {
     if (allUsers && allUsers.length > 0 && publicClient) {
       Promise.all(allUsers.map(address => publicClient.readContract({
         address: CONTRACT_ADDRESSES.registry,
         abi: registryAbi,
         functionName: 'getUserDetails',
         args: [address],
       }))).then(details => {
         const names: Record<string, string> = {}
         allUsers.forEach((address, index) => {
           names[address] = details[index][0] || address.slice(0, 6) + '...' + address.slice(-4)
         })
         setUserNames(names)
       }).catch(error => {
         console.error('Error fetching user details:', error)
       })
     }
   }, [allUsers, publicClient])

   useWatchContractEvent({
     address: CONTRACT_ADDRESSES.chat,
     abi: chatAbi,
     eventName: 'GroupMessageSent',
     onLogs: () => {
       // Refresh messages
       if (selectedGroup) {
         // Trigger refetch
       }
     },
   })

  const handleCreateGroup = () => {
    if (!newGroupName) return
    writeContract({
      address: CONTRACT_ADDRESSES.chat,
      abi: chatAbi,
      functionName: 'createGroup',
      args: [newGroupName],
    })
    setNewGroupName('')
  }

  const handleAddMember = () => {
    if (!selectedGroup || !newMember) return
    writeContract({
      address: CONTRACT_ADDRESSES.chat,
      abi: chatAbi,
      functionName: 'addMember',
      args: [BigInt(selectedGroup), newMember as `0x${string}`],
    })
    setNewMember('')
  }

  const handleSendMessage = () => {
    if (!selectedGroup || !newMessage) return
    writeContract({
      address: CONTRACT_ADDRESSES.chat,
      abi: chatAbi,
      functionName: 'sendGroupMessage',
      args: [BigInt(selectedGroup), newMessage],
    })
    setNewMessage('')
  }

  const handleMemberSelect = (member: { address: string; ensName: string }) => {
    setNewMember(member.address)
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Members List */}
        <div className="lg:col-span-1">
          <MembersList onSelectUser={handleMemberSelect} showChatButton={false} />
        </div>

        {/* Main Chat Area */}
        <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Group Chat</h2>

          <div className="mb-4">
            <input
              type="text"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
              placeholder="New group name"
            />
            <button
              onClick={handleCreateGroup}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Group
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Groups</h3>
              <div className="space-y-2">
                {/* Groups will be populated from smart contract */}
                <div className="text-center py-4 text-gray-500 text-sm">
                  No groups created yet
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              {selectedGroup && (
                <>
                  <div className="mb-4">
                    <input
                      type="text"
                      value={newMember}
                      onChange={(e) => setNewMember(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                      placeholder="Member address"
                    />
                    <button
                      onClick={handleAddMember}
                      className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Add Member
                    </button>
                  </div>

                  <div className="border rounded p-4 h-64 overflow-y-auto mb-4">
                    {messages.length === 0 ? (
                      <div className="text-center text-gray-500 py-8">
                        <p>No messages yet. Start the conversation!</p>
                      </div>
                    ) : (
                      messages.map((msg, index) => (
                        <div key={index} className="mb-2">
                          <span className="font-semibold">{userNames[msg.sender] || msg.sender.slice(0, 6) + '...' + msg.sender.slice(-4)}:</span> {msg.content}
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}