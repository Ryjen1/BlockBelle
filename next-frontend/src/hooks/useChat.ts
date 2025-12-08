import { useState, useEffect, useCallback } from 'react';
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { CONTRACT_ADDRESSES } from '@/config/contracts';

// Import the compiled ABI directly
import chatArtifact from '@/config/WhisprChat.json';

interface Message {
  sender: string
  receiver: string
  content: string
  timestamp: bigint
  isPinned?: boolean
}

interface PinnedMessage {
  messageId: bigint
  sender: string
  content: string
  timestamp: bigint
}

const chatAbi = chatArtifact.abi

export function useChat() {
  const { address: currentUserAddress } = useAccount()
  const [selectedUser, setSelectedUser] = useState<string>('')
  const [messages, setMessages] = useState<Message[]>([])
  const [pinnedMessage, setPinnedMessage] = useState<PinnedMessage | null>(null)
  const [isLoadingMessages, setIsLoadingMessages] = useState(false)
  const [isLoadingPinnedMessage, setIsLoadingPinnedMessage] = useState(false)

  const { writeContract: sendMessage, data: sendHash, isPending: isSending } = useWriteContract()
  const { writeContract: pinMessage, data: pinHash, isPending: isPinning } = useWriteContract()
  const { writeContract: unpinMessage, data: unpinHash, isPending: isUnpinning } = useWriteContract()

  const { isLoading: isConfirmingSend, isSuccess: isSendSuccess } = useWaitForTransactionReceipt({
    hash: sendHash,
  })

  const { isLoading: isConfirmingPin, isSuccess: isPinSuccess } = useWaitForTransactionReceipt({
    hash: pinHash,
  })

  const { isLoading: isConfirmingUnpin, isSuccess: isUnpinSuccess } = useWaitForTransactionReceipt({
    hash: unpinHash,
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

  // Fetch pinned message for the selected conversation
  const { data: pinnedMessageData, isLoading: isLoadingPinned, refetch: refetchPinnedMessage } = useReadContract({
    address: CONTRACT_ADDRESSES.chat,
    abi: chatAbi,
    functionName: 'getPinnedMessage',
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

  // Update pinned message when data changes
  useEffect(() => {
    if (pinnedMessageData) {
      setPinnedMessage(pinnedMessageData as PinnedMessage)
      setIsLoadingPinnedMessage(false)
    } else {
      setPinnedMessage(null)
    }
  }, [pinnedMessageData])

  // Load messages when user is selected
  useEffect(() => {
    if (selectedUser && currentUserAddress) {
      setIsLoadingMessages(true)
      setIsLoadingPinnedMessage(true)
      refetchConversation()
      refetchPinnedMessage()
    } else {
      setMessages([])
      setPinnedMessage(null)
    }
  }, [selectedUser, currentUserAddress, refetchConversation, refetchPinnedMessage])

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

  const handlePinMessage = useCallback(async (messageId: number) => {
    if (!selectedUser || !currentUserAddress) return

    try {
      await pinMessage({
        address: CONTRACT_ADDRESSES.chat,
        abi: chatAbi,
        functionName: 'pinMessage',
        args: [selectedUser, BigInt(messageId)],
      })
    } catch (error) {
      console.error('Failed to pin message:', error)
    }
  }, [selectedUser, currentUserAddress, pinMessage])

  const handleUnpinMessage = useCallback(async () => {
    if (!selectedUser || !currentUserAddress) return

    try {
      await unpinMessage({
        address: CONTRACT_ADDRESSES.chat,
        abi: chatAbi,
        functionName: 'unpinMessage',
        args: [selectedUser],
      })
    } catch (error) {
      console.error('Failed to unpin message:', error)
    }
  }, [selectedUser, currentUserAddress, unpinMessage])

  // Refresh messages after successful send
  useEffect(() => {
    if (isSendSuccess) {
      refetchConversation()
    }
  }, [isSendSuccess, refetchConversation])

  // Refresh pinned message after successful pin/unpin
  useEffect(() => {
    if (isPinSuccess || isUnpinSuccess) {
      refetchPinnedMessage()
      refetchConversation()
    }
  }, [isPinSuccess, isUnpinSuccess, refetchPinnedMessage, refetchConversation])

  const selectUser = useCallback((userAddress: string) => {
    setSelectedUser(userAddress)
  }, [])

  return {
    selectedUser,
    messages,
    pinnedMessage,
    isLoadingMessages: isLoadingMessages || isLoadingConversation,
    isLoadingPinnedMessage: isLoadingPinnedMessage || isLoadingPinned,
    isSending: isSending || isConfirmingSend,
    isPinning: isPinning || isConfirmingPin,
    isUnpinning: isUnpinning || isConfirmingUnpin,
    sendMessage: handleSendMessage,
    pinMessage: handlePinMessage,
    unpinMessage: handleUnpinMessage,
    selectUser,
    currentUserAddress,
  }
}