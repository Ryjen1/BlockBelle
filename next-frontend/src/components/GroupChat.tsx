'use client';

import { useState, useEffect } from 'react';
import { useWriteContract, useReadContract, useWatchContractEvent, usePublicClient } from 'wagmi';
import { parseAbi } from 'viem';
import { CONTRACT_ADDRESSES } from '@/config/contracts';

const chatAbi = parseAbi([
  'function createGroup(string _name, string _avatarHash, address[] _members) external returns (uint256)',
  'function sendGroupMessage(uint256 _groupId, string _content) external',
  'function getGroupConversation(uint256 _groupId) external view returns ((address sender, address receiver, string content, uint256 timestamp)[])',
  'function getGroupDetails(uint256 _groupId) external view returns (string memory name, string memory avatarHash, address[] memory members)',
  'function getTotalGroups() external view returns (uint256)',
  'function inviteToGroup(uint256 _groupId, address _invitee) external',
  'function acceptInvite(uint256 _groupId) external',
  'function declineInvite(uint256 _groupId) external',
  'function getMyInvites() external view returns (uint256[] memory groupIds, address[] memory inviters, uint256[] memory timestamps)',
  'function groupInvites(uint256 _groupId) external view returns ((address invitee, address inviter, uint256 timestamp)[])',
])

const registryAbi = parseAbi([
  'function getAllUsers() external view returns (address[] memory)',
  'function getUserDetails(address userAddress) external view returns (string memory ensName, string memory avatarHash, bool registered)',
])

interface Message {
  sender: `0x${string}`
  content: string
  timestamp: bigint
}

export default function GroupChat() {
   const [selectedGroup, setSelectedGroup] = useState<number | null>(null)
   const [messages, setMessages] = useState<Message[]>([])
   const [newMessage, setNewMessage] = useState('')
   const [newGroupName, setNewGroupName] = useState('')
   const [userNames, setUserNames] = useState<Record<string, string>>({})
   const [inviteAddress, setInviteAddress] = useState('')
   const [groups, setGroups] = useState<{id: number, name: string, members: `0x${string}`[]}[]>([])

   const { writeContract } = useWriteContract()
   const publicClient = usePublicClient()

   const { data: allUsers } = useReadContract({
     address: CONTRACT_ADDRESSES.registry,
     abi: registryAbi,
     functionName: 'getAllUsers',
   })

   const { data: totalGroups } = useReadContract({
     address: CONTRACT_ADDRESSES.chat,
     abi: chatAbi,
     functionName: 'getTotalGroups',
   })

   const { data: myInvites } = useReadContract({
     address: CONTRACT_ADDRESSES.chat,
     abi: chatAbi,
     functionName: 'getMyInvites',
   })

   const { data: groupMessages } = useReadContract({
     address: CONTRACT_ADDRESSES.chat,
     abi: chatAbi,
     functionName: 'getGroupConversation',
     args: selectedGroup ? [BigInt(selectedGroup)] : undefined,
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

   useEffect(() => {
     if (totalGroups && publicClient) {
       const fetchGroups = async () => {
         const groupList = []
         for (let i = 1; i <= Number(totalGroups); i++) {
           try {
             const details = await publicClient.readContract({
               address: CONTRACT_ADDRESSES.chat,
               abi: chatAbi,
               functionName: 'getGroupDetails',
               args: [BigInt(i)],
             })
             groupList.push({ id: i, name: details[0], members: details[2] })
           } catch (error) {
             console.error(`Error fetching group ${i}:`, error)
           }
         }
         setGroups(groupList)
       }
       fetchGroups()
     }
   }, [totalGroups, publicClient])

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
      args: [newGroupName, "", []], // name, avatarHash, members (empty array, creator added automatically)
    })
    setNewGroupName('')
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

  const handleInvite = () => {
    if (!selectedGroup || !inviteAddress) return
    writeContract({
      address: CONTRACT_ADDRESSES.chat,
      abi: chatAbi,
      functionName: 'inviteToGroup',
      args: [BigInt(selectedGroup), inviteAddress as `0x${string}`],
    })
    setInviteAddress('')
  }

  const handleAcceptInvite = (groupId: number) => {
    writeContract({
      address: CONTRACT_ADDRESSES.chat,
      abi: chatAbi,
      functionName: 'acceptInvite',
      args: [BigInt(groupId)],
    })
  }

  const handleDeclineInvite = (groupId: number) => {
    writeContract({
      address: CONTRACT_ADDRESSES.chat,
      abi: chatAbi,
      functionName: 'declineInvite',
      args: [BigInt(groupId)],
    })
  }


  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 gap-6">

        {/* Main Chat Area */}
        <div className="bg-white rounded-lg shadow-md p-6">
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

          {selectedGroup && (
            <div className="mb-4">
              <input
                type="text"
                value={inviteAddress}
                onChange={(e) => setInviteAddress(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                placeholder="Invite user address"
              />
              <button
                onClick={handleInvite}
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Invite
              </button>
            </div>
          )}

          {myInvites && myInvites[0].length > 0 && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Pending Invites</h3>
              <div className="space-y-2">
                {myInvites[0].map((groupId, index) => (
                  <div key={Number(groupId)} className="p-2 border rounded flex justify-between items-center">
                    <span>Invited to group {Number(groupId)} by {userNames[myInvites[1][index]] || myInvites[1][index].slice(0, 6) + '...' + myInvites[1][index].slice(-4)}</span>
                    <div>
                      <button
                        onClick={() => handleAcceptInvite(Number(groupId))}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleDeclineInvite(Number(groupId))}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Groups</h3>
              <div className="space-y-2">
                {groups.map(group => (
                  <div
                    key={group.id}
                    className={`p-2 border rounded cursor-pointer ${selectedGroup === group.id ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                    onClick={() => setSelectedGroup(group.id)}
                  >
                    {group.name} ({group.members.length} members)
                  </div>
                ))}
                {groups.length === 0 && (
                  <div className="text-center py-4 text-gray-500 text-sm">
                    No groups created yet
                  </div>
                )}
              </div>
            </div>

            <div className="md:col-span-2">
              {selectedGroup && (
                <>

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
