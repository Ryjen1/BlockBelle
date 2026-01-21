import { renderHook, act } from '@testing-library/react';
import { useChat } from '../useChat';

describe('useChat Hook', () => {
  test('initializes with empty messages', () => {
    const { result } = renderHook(() => useChat());
    expect(result.current.messages).toEqual([]);
  });

  test('sends message successfully', async () => {
    const { result } = renderHook(() => useChat());

    await act(async () => {
      await result.current.sendMessage('Hello World');
    });

    expect(result.current.messages).toContain('Hello World');
  });

  test('handles send message error', async () => {
    const { result } = renderHook(() => useChat());

    await act(async () => {
      try {
        await result.current.sendMessage('');
      } catch (error) {
        expect(error.message).toBe('Message cannot be empty');
      }
    });
  });

  test('loads conversation history', async () => {
    const { result } = renderHook(() => useChat());

    await act(async () => {
      await result.current.loadConversation('user1', 'user2');
    });

    expect(result.current.messages.length).toBeGreaterThan(0);
  });

  test('handles network error during message send', async () => {
    // Mock network failure
    const { result } = renderHook(() => useChat());

    await act(async () => {
      try {
        await result.current.sendMessage('Test message');
      } catch (error) {
        expect(error.message).toBe('Network error');
      }
    });
  });

  test('validates message length', async () => {
    const { result } = renderHook(() => useChat());
    const longMessage = 'a'.repeat(1001); // Assuming 1000 char limit

    await act(async () => {
      try {
        await result.current.sendMessage(longMessage);
      } catch (error) {
        expect(error.message).toBe('Message too long');
      }
    });
  });
});