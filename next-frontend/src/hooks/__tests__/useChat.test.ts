import { renderHook } from '@testing-library/react';
import { useChat } from '../useChat';

describe('useChat Hook', () => {
  test('initializes with account and functions', () => {
    const { result } = renderHook(() => useChat());
    expect(result.current.account).toBe('');
    expect(typeof result.current.sendMessage).toBe('function');
    expect(typeof result.current.createGroup).toBe('function');
    expect(typeof result.current.sendGroupMessage).toBe('function');
    expect(typeof result.current.assignRole).toBe('function');
    expect(typeof result.current.removeParticipant).toBe('function');
    expect(typeof result.current.muteUser).toBe('function');
    expect(typeof result.current.unmuteUser).toBe('function');
    expect(typeof result.current.pinMessage).toBe('function');
    expect(typeof result.current.unpinMessage).toBe('function');
  });

  // Note: Full integration tests would require mocking ethers and contract
  // For now, we test the hook structure and types
});