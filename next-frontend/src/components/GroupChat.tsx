import React, { useState, useEffect } from 'react';
import { useChat, Message, Role } from '../hooks/useChat';

interface GroupChatProps {
  groupId: number;
}

const GroupChat: React.FC<GroupChatProps> = ({ groupId }) => {
  const {
    account,
    sendGroupMessage,
    getGroupConversation,
    getGroupDetails,
    getUserRole,
    assignRole,
    removeParticipant,
    muteUser,
    unmuteUser,
    pinMessage,
    unpinMessage,
    getPinnedMessages,
    isMuted,
  } = useChat();

  const [messages, setMessages] = useState<Message[]>([]);
  const [group, setGroup] = useState<{ name: string; avatarHash: string; members: string[] } | null>(null);
  const [userRole, setUserRole] = useState<Role>(Role.Member);
  const [newMessage, setNewMessage] = useState('');
  const [pinned, setPinned] = useState<number[]>([]);
  const [muted, setMuted] = useState<boolean>(false);

  useEffect(() => {
    loadGroupData();
  }, [groupId]);

  const loadGroupData = async () => {
    const groupData = await getGroupDetails(groupId);
    setGroup(groupData);
    const msgs = await getGroupConversation(groupId);
    setMessages(msgs);
    const role = await getUserRole(groupId, account);
    setUserRole(role);
    const pinnedMsgs = await getPinnedMessages(groupId);
    setPinned(pinnedMsgs);
    const isUserMuted = await isMuted(groupId, account);
    setMuted(isUserMuted);
  };

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      await sendGroupMessage(groupId, newMessage);
      setNewMessage('');
      loadGroupData(); // Refresh
    }
  };

  const handleAssignRole = async (user: string, role: Role) => {
    if (userRole === Role.Admin) {
      await assignRole(groupId, user, role);
      loadGroupData();
    }
  };

  const handleRemoveParticipant = async (participant: string) => {
    if (userRole >= Role.Moderator) {
      await removeParticipant(groupId, participant);
      loadGroupData();
    }
  };

  const handleMute = async (user: string) => {
    if (userRole >= Role.Moderator) {
      await muteUser(groupId, user);
      loadGroupData();
    }
  };

  const handleUnmute = async (user: string) => {
    if (userRole >= Role.Moderator) {
      await unmuteUser(groupId, user);
      loadGroupData();
    }
  };

  const handlePin = async (index: number) => {
    if (userRole >= Role.Moderator) {
      await pinMessage(groupId, index);
      loadGroupData();
    }
  };

  const handleUnpin = async (index: number) => {
    if (userRole >= Role.Moderator) {
      await unpinMessage(groupId, index);
      loadGroupData();
    }
  };

  if (!group) return <div>Loading...</div>;

  return (
    <div className="group-chat">
      <h2>{group.name}</h2>
      <div className="pinned-messages">
        <h3>Pinned Messages</h3>
        {pinned.map(index => (
          <div key={index} className="pinned-message">
            {messages[index]?.content}
            {userRole >= Role.Moderator && (
              <button onClick={() => handleUnpin(index)}>Unpin</button>
            )}
          </div>
        ))}
      </div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.sender}:</strong> {msg.content}
            {userRole >= Role.Moderator && !pinned.includes(index) && (
              <button onClick={() => handlePin(index)}>Pin</button>
            )}
          </div>
        ))}
      </div>
      <div className="members">
        <h3>Members</h3>
        {group.members.map(member => (
          <div key={member} className="member">
            {member}
            {userRole === Role.Admin && (
              <select onChange={(e) => handleAssignRole(member, parseInt(e.target.value) as Role)}>
                <option value={Role.Member}>Member</option>
                <option value={Role.Moderator}>Moderator</option>
                <option value={Role.Admin}>Admin</option>
              </select>
            )}
            {userRole >= Role.Moderator && member !== account && (
              <>
                <button onClick={() => handleRemoveParticipant(member)}>Remove</button>
                <button onClick={() => handleMute(member)}>Mute</button>
                <button onClick={() => handleUnmute(member)}>Unmute</button>
              </>
            )}
          </div>
        ))}
      </div>
      {!muted && (
        <div className="send-message">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      )}
      {muted && <div>You are muted in this group.</div>}
    </div>
  );
};

export default GroupChat;