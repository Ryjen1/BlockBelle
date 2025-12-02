import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MuteButton from '@/components/MuteButton';
import { useAccount } from 'wagmi';

// Mock the wagmi hooks
vi.mock('wagmi', () => ({
  useAccount: vi.fn(),
}));

// Mock fetch
global.fetch = vi.fn();

const mockUseAccount = vi.mocked(useAccount);

describe('MuteButton Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseAccount.mockReturnValue({
      address: '0x1234567890123456789012345678901234567890',
      isConnected: true,
    });
    
    // Mock successful API response for mute check
    (fetch as vi.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({
        success: true,
        data: {
          userAddress: '0x1234567890123456789012345678901234567890',
          isMuted: false
        }
      }),
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should render with unmute state by default', () => {
    render(
      <MuteButton
        targetUserAddress="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
        muteType="user"
      />
    );

    expect(screen.getByTitle('Mute')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByLabelText(/mute/i)).toBeInTheDocument();
  });

  it('should show mute state when user is muted', async () => {
    (fetch as vi.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({
        success: true,
        data: {
          userAddress: '0x1234567890123456789012345678901234567890',
          isMuted: true
        }
      }),
    });

    render(
      <MuteButton
        targetUserAddress="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
        muteType="user"
      />
    );

    await waitFor(() => {
      expect(screen.getByTitle('Unmute')).toBeInTheDocument();
    });
  });

  it('should handle mute toggle for user mute', async () => {
    const user = userEvent.setup();
    
    // Mock successful toggle response
    (fetch as vi.MockedFunction<typeof fetch>)
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({
          success: true,
          data: {
            userAddress: '0x1234567890123456789012345678901234567890',
            isMuted: true
          }
        }),
      });

    render(
      <MuteButton
        targetUserAddress="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
        muteType="user"
      />
    );

    const button = screen.getByRole('button');
    await user.click(button);

    await waitFor(() => {
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
  });

  it('should handle mute toggle for group mute', async () => {
    const user = userEvent.setup();
    
    (fetch as vi.MockedFunction<typeof fetch>)
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({
          success: true,
          data: {
            userAddress: '0x1234567890123456789012345678901234567890',
            isMuted: true
          }
        }),
      });

    render(
      <MuteButton
        targetGroupId="group123"
        muteType="group"
      />
    );

    const button = screen.getByRole('button');
    await user.click(button);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('/api/mute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userAddress: '0x1234567890123456789012345678901234567890',
          targetGroupId: 'group123',
          mute: true,
          muteType: 'group'
        }),
      });
    });
  });

  it('should be disabled when not connected', () => {
    mockUseAccount.mockReturnValue({
      address: undefined,
      isConnected: false,
    });

    render(
      <MuteButton
        targetUserAddress="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
        muteType="user"
      />
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should be disabled when explicitly disabled', () => {
    render(
      <MuteButton
        targetUserAddress="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
        muteType="user"
        disabled={true}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should handle API errors', async () => {
    const user = userEvent.setup();
    
    // Mock failed API response
    (fetch as vi.MockedFunction<typeof fetch>).mockRejectedValueOnce(
      new Error('Network error')
    );

    // Mock alert to prevent test failure
    global.alert = vi.fn();

    render(
      <MuteButton
        targetUserAddress="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
        muteType="user"
      />
    );

    const button = screen.getByRole('button');
    await user.click(button);

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith('Failed to update mute status. Please try again.');
    });
  });

  it('should render different variants correctly', () => {
    const { rerender } = render(
      <MuteButton
        targetUserAddress="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
        muteType="user"
        variant="icon"
      />
    );

    expect(screen.getByRole('button')).toBeInTheDocument();

    rerender(
      <MuteButton
        targetUserAddress="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
        muteType="user"
        variant="toggle"
      />
    );

    expect(screen.getByRole('button')).toBeInTheDocument();

    rerender(
      <MuteButton
        targetUserAddress="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
        muteType="user"
        variant="button"
      />
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should handle different sizes', () => {
    const { rerender } = render(
      <MuteButton
        targetUserAddress="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
        muteType="user"
        size="sm"
      />
    );

    rerender(
      <MuteButton
        targetUserAddress="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
        muteType="user"
        size="md"
      />
    );

    rerender(
      <MuteButton
        targetUserAddress="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
        muteType="user"
        size="lg"
      />
    );

    // Just verify it renders without errors
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});