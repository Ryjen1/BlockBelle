import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useMute } from '@/hooks/useMute';
import { useAccount } from 'wagmi';

// Mock the wagmi hooks
vi.mock('wagmi', () => ({
  useAccount: vi.fn(),
}));

// Mock fetch
global.fetch = vi.fn();

const mockUseAccount = vi.mocked(useAccount);

describe('useMute hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseAccount.mockReturnValue({
      address: '0x1234567890123456789012345678901234567890',
      isConnected: true,
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should initialize with empty mute settings', () => {
    // Mock successful API response
    (fetch as vi.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({
        success: true,
        data: {
          userAddress: '0x1234567890123456789012345678901234567890',
          settings: []
        }
      }),
    });

    const { result } = renderHook(() => useMute());

    expect(result.current.muteSettings).toEqual({
      userMutes: {},
      groupMutes: {}
    });
    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBeNull();
  });

  it('should load mute settings on mount', async () => {
    const mockSettings = [
      {
        id: 1,
        userAddress: '0x1234567890123456789012345678901234567890',
        mutedTarget: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
        targetType: 'user',
        mutedAt: '2023-01-01T00:00:00Z',
        isMuted: true
      },
      {
        id: 2,
        userAddress: '0x1234567890123456789012345678901234567890',
        mutedTarget: 'group123',
        targetType: 'group',
        mutedAt: '2023-01-02T00:00:00Z',
        isMuted: true
      }
    ];

    (fetch as vi.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({
        success: true,
        data: {
          userAddress: '0x1234567890123456789012345678901234567890',
          settings: mockSettings
        }
      }),
    });

    const { result } = renderHook(() => useMute());

    // Wait for the hook to finish loading
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.muteSettings).toEqual({
      userMutes: {
        '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd': true
      },
      groupMutes: {
        'group123': true
      }
    });
  });

  it('should check if user is muted', () => {
    (fetch as vi.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({
        success: true,
        data: {
          userAddress: '0x1234567890123456789012345678901234567890',
          settings: [
            {
              id: 1,
              mutedTarget: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
              targetType: 'user',
              isMuted: true
            }
          ]
        }
      }),
    });

    const { result } = renderHook(() => useMute());

    expect(result.current.isUserMuted('0xabcdefabcdefabcdefabcdefabcdefabcdefabcd')).toBe(true);
    expect(result.current.isUserMuted('0x1111111111111111111111111111111111111111')).toBe(false);
  });

  it('should check if group is muted', () => {
    (fetch as vi.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({
        success: true,
        data: {
          userAddress: '0x1234567890123456789012345678901234567890',
          settings: [
            {
              id: 1,
              mutedTarget: 'group123',
              targetType: 'group',
              isMuted: true
            }
          ]
        }
      }),
    });

    const { result } = renderHook(() => useMute());

    expect(result.current.isGroupMuted('group123')).toBe(true);
    expect(result.current.isGroupMuted('group456')).toBe(false);
  });

  it('should toggle user mute', async () => {
    const mockToggleResponse = {
      success: true,
      message: 'Successfully muted',
      data: {
        userAddress: '0x1234567890123456789012345678901234567890',
        targetUserAddress: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
        muteType: 'user',
        isMuted: true
      }
    };

    (fetch as vi.MockedFunction<typeof fetch>)
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockToggleResponse),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({
          success: true,
          data: {
            userAddress: '0x1234567890123456789012345678901234567890',
            settings: []
          }
        }),
      });

    const { result } = renderHook(() => useMute());

    await act(async () => {
      const muteState = await result.current.toggleUserMute('0xabcdefabcdefabcdefabcdefabcdefabcdefabcd');
      expect(muteState).toBe(true);
    });

    expect(fetch).toHaveBeenCalledWith('/api/mute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userAddress: '0x1234567890123456789012345678901234567890',
        targetUserAddress: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
        mute: true,
        muteType: 'user'
      }),
    });
  });

  it('should handle API errors gracefully', async () => {
    (fetch as vi.MockedFunction<typeof fetch>).mockRejectedValueOnce(
      new Error('Network error')
    );

    const { result } = renderHook(() => useMute());

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(result.current.error).toBe('Network error');
    expect(result.current.isLoading).toBe(false);
  });

  it('should not operate when user is not connected', () => {
    mockUseAccount.mockReturnValue({
      address: undefined,
      isConnected: false,
    });

    const { result } = renderHook(() => useMute());

    expect(result.current.muteSettings).toEqual({
      userMutes: {},
      groupMutes: {}
    });
  });
});