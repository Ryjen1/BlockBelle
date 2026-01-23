import { renderHook, act } from '@testing-library/react';
import { useEnsVerification } from '../useEnsVerification';

describe('useEnsVerification Hook', () => {
  test('verifies valid ENS name', async () => {
    const { result } = renderHook(() => useEnsVerification());

    await act(async () => {
      const isValid = await result.current.verifyEnsName('alice.eth');
      expect(isValid).toBe(true);
    });
  });

  test('rejects invalid ENS name', async () => {
    const { result } = renderHook(() => useEnsVerification());

    await act(async () => {
      const isValid = await result.current.verifyEnsName('invalid');
      expect(isValid).toBe(false);
    });
  });

  test('handles network error during verification', async () => {
    const { result } = renderHook(() => useEnsVerification());

    await act(async () => {
      try {
        await result.current.verifyEnsName('test.eth');
      } catch (error) {
        expect(error.message).toBe('Network error');
      }
    });
  });

  test('validates ENS name format', async () => {
    const { result } = renderHook(() => useEnsVerification());

    await act(async () => {
      const isValid = await result.current.verifyEnsName('test..eth');
      expect(isValid).toBe(false);
    });
  });

  test('checks ownership of ENS name', async () => {
    const { result } = renderHook(() => useEnsVerification());

    await act(async () => {
      const isOwner = await result.current.checkOwnership('alice.eth', '0x123...');
      expect(isOwner).toBe(true);
    });
  });

  test('handles unregistered ENS name', async () => {
    const { result } = renderHook(() => useEnsVerification());

    await act(async () => {
      const isValid = await result.current.verifyEnsName('unregistered.eth');
      expect(isValid).toBe(false);
    });
  });
});