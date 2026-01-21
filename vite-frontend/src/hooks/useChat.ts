import { useState, useEffect, useCallback } from 'react'
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { CONTRACT_ADDRESSES } from '../config/contracts'

// Import the compiled ABI directly
import chatArtifact from '../config/WhisprChat.json'

interface Message {
  sender: string
  receiver: string
  content: string
  timestamp: bigint
}

const chatAbi = chatArtifact.abi

export function useChat() {
  const { address: currentUserAddress } = useAccount()
  const [selectedUser, setSelectedUser] = useState<string>('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoadingMessages, setIsLoadingMessages] = useState(false)

  const { writeContract: sendMessage, data: sendHash, isPending: isSending } = useWriteContract()

  const { isLoading: isConfirmingSend, isSuccess: isSendSuccess } = useWaitForTransactionReceipt({
    hash: sendHash,
  })

  // Fetch messages for the selected conversation
  const { data: conversationData, isLoading: isLoadingConversation, refetch: refetchConversation } = useReadContract({
    address: CONTRACT_ADDRESSES.chat,
    abi: chatAbi,
    functionName: 'getConversation',
    args: selectedUser && currentUserAddress ? [currentUserAddress, selectedUser] : undefined,
    query: {
      enabled: !!selectedUser && !!currentUserAddress,
    },
  })

  // Update messages when conversation data changes
  useEffect(() => {
    if (conversationData) {
      setMessages(conversationData as Message[])
      setIsLoadingMessages(false)
    }
  }, [conversationData])

  // Load messages when user is selected
  useEffect(() => {
    if (selectedUser && currentUserAddress) {
      setIsLoadingMessages(true)
      refetchConversation()
    } else {
      setMessages([])
    }
  }, [selectedUser, currentUserAddress, refetchConversation])

  const handleSendMessage = useCallback(async (content: string) => {
    if (!selectedUser || !content.trim() || !currentUserAddress) return

    try {
      await sendMessage({
        address: CONTRACT_ADDRESSES.chat,
        abi: chatAbi,
        functionName: 'sendMessage',
        args: [selectedUser, content],
      })
    } catch (error) {
      console.error('Failed to send message:', error)
    }
  }, [selectedUser, currentUserAddress, sendMessage])

  // Refresh messages after successful send
  useEffect(() => {
    if (isSendSuccess) {
      refetchConversation()
    }
  }, [isSendSuccess, refetchConversation])

  const selectUser = useCallback((userAddress: string) => {
    setSelectedUser(userAddress)
  }, [])

  return {
    selectedUser,
    messages,
    isLoadingMessages: isLoadingMessages || isLoadingConversation,
    isSending: isSending || isConfirmingSend,
    sendMessage: handleSendMessage,
    selectUser,
    currentUserAddress,
  }
}