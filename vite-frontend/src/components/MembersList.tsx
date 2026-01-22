import { useState, useEffect } from 'react'
import { useAccount, useReadContract } from 'wagmi'
import { parseAbi } from 'viem'
import { UserIcon, ChatBubbleLeftRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { CONTRACT_ADDRESSES } from '../config/contracts'
import { getUserDetailsFromContract } from '../utils/contractReads'

const registryAbi = parseAbi([
  'function getAllUsers() external view returns (address[])',
  'function getUserDetails(address userAddress) external view returns (string memory ensName, string memory avatarHash, bool registered)',
])

interface Member {
  address: string
  ensName: string
}

interface MembersListProps {
  onSelectUser?: (user: Member) => void
  showChatButton?: boolean
}

export default function MembersList({ onSelectUser, showChatButton = true }: MembersListProps) {
    const { address: currentUserAddress } = useAccount()
    const [members, setMembers] = useState<Member[]>([])

    const { data: allUsers } = useReadContract({
      address: CONTRACT_ADDRESSES.registry,
      abi: registryAbi,
      functionName: 'getAllUsers',
    })

    useEffect(() => {
      if (allUsers && allUsers.length > 0) {
        const membersList: Member[] = []

        // Create members list
        for (const userAddress of allUsers) {
          if (userAddress.toLowerCase() !== currentUserAddress?.toLowerCase()) {
            membersList.push({
              address: userAddress,
              ensName: `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`
            })
          }
        }

        setMembers(membersList)

        // Fetch actual usernames from the contract
        allUsers.forEach((userAddress) => {
          if (userAddress.toLowerCase() !== currentUserAddress?.toLowerCase()) {
            // Use the contract reading utility to fetch actual username
            try {
              const fetchUsername = async () => {
                try {
                  const userDetails = await getUserDetailsFromContract(userAddress)

                  if (userDetails) {
                    const actualUsername = userDetails.registered && userDetails.ensName
                      ? userDetails.ensName
                      : `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`

                    // Update the member in the list
                    setMembers(prev => prev.map(member =>
                      member.address === userAddress
                        ? { ...member, ensName: actualUsername }
                        : member
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
        })
      }
    }, [allUsers, currentUserAddress])

  const isCurrentUser = (memberAddress: string) => {
    return currentUserAddress?.toLowerCase() === memberAddress.toLowerCase()
  }

  const handleUserClick = (member: Member) => {
    if (onSelectUser) {
      onSelectUser(member)
    }
  }

  if (members.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-2 mb-4">
          <UserIcon className="h-5 w-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-800">Community Members</h3>
        </div>
        <div className="text-center py-8">
          <UserIcon className="h-12 w-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No registered members yet</p>
          <p className="text-sm text-gray-400 mt-1">Be the first to join the community!</p>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-xs text-blue-700">
              <strong>How to get started:</strong>
            </p>
            <ol className="text-xs text-blue-600 mt-1 space-y-1">
              <li>1. Go to the Register tab</li>
              <li>2. Create your profile with any name</li>
              <li>3. Come back here to see all members</li>
              <li>4. Start chatting with other users!</li>
            </ol>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <UserIcon className="h-5 w-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-800">Community Members</h3>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
            {members.length}
          </span>
        </div>
      </div>

      <div className="space-y-2 max-h-64 overflow-y-auto">
        {members.map((member, index) => {
          const isCurrentUserMember = isCurrentUser(member.address)
          return (
            <div
              key={member.address}
              className={`flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${
                isCurrentUserMember
                  ? 'bg-blue-50 border-2 border-blue-200'
                  : 'hover:bg-gray-50 cursor-pointer group'
              }`}
              onClick={() => !isCurrentUserMember && handleUserClick(member)}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isCurrentUserMember
                      ? 'bg-gradient-to-r from-blue-400 to-blue-600'
                      : 'bg-gradient-to-r from-pink-400 to-purple-500'
                  }`}>
                    <span className="text-white text-sm font-medium">
                      {member.ensName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  {isCurrentUserMember && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <CheckCircleIcon className="h-3 w-3 text-white" />
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <p className={`font-medium transition-colors ${
                      isCurrentUserMember ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-600'
                    }`}>
                      {member.ensName}
                    </p>
                    {isCurrentUserMember && (
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        You
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 font-mono">
                    {member.address.slice(0, 6)}...{member.address.slice(-4)}
                  </p>
                </div>
              </div>

              {showChatButton && !isCurrentUserMember && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleUserClick(member)
                  }}
                  className="opacity-0 group-hover:opacity-100 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-all duration-200 transform hover:scale-105"
                  title="Start chat"
                >
                  <ChatBubbleLeftRightIcon className="h-4 w-4" />
                </button>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 text-center">
          Click on any member to start a private conversation
        </p>
      </div>
    </div>
  )
}