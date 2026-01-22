import { useState, useEffect } from 'react'

interface UserPresence {
  address: string
  ensName: string
  isOnline: boolean
  lastSeen: number
}

interface PresenceIndicatorProps {
  users: UserPresence[]
  currentUser?: string
  showDetails?: boolean
}

export default function PresenceIndicator({
  users,
  currentUser,
  showDetails = false
}: PresenceIndicatorProps) {
  const [presenceData, setPresenceData] = useState<UserPresence[]>(users)

  // Simulate real-time presence updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPresenceData(prev =>
        prev.map(user => ({
          ...user,
          isOnline: Math.random() > 0.3, // 70% chance of being online
          lastSeen: user.isOnline ? Date.now() : user.lastSeen
        }))
      )
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const onlineUsers = presenceData.filter(u => u.isOnline)
  const offlineUsers = presenceData.filter(u => !u.isOnline)

  const formatLastSeen = (timestamp: number) => {
    const now = Date.now()
    const diff = now - timestamp

    if (diff < 60000) return 'Just now'
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`
    return `${Math.floor(diff / 86400000)}d ago`
  }

  if (!showDetails) {
    return (
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>{onlineUsers.length} online</span>
        </div>
        {offlineUsers.length > 0 && (
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <span>{offlineUsers.length} offline</span>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Member Status</h3>

      {/* Online Users */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <h4 className="font-medium text-gray-900">
            Online ({onlineUsers.length})
          </h4>
        </div>

        <div className="space-y-2">
          {onlineUsers.map((user) => (
            <div key={user.address} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {user.ensName.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              </div>

              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{user.ensName}</p>
                <p className="text-xs text-green-600">Online now</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offline Users */}
      {offlineUsers.length > 0 && (
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <h4 className="font-medium text-gray-900">
              Offline ({offlineUsers.length})
            </h4>
          </div>

          <div className="space-y-2">
            {offlineUsers.map((user) => (
              <div key={user.address} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-sm font-medium">
                    {user.ensName.charAt(0).toUpperCase()}
                  </span>
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{user.ensName}</p>
                  <p className="text-xs text-gray-500">
                    Last seen {formatLastSeen(user.lastSeen)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}