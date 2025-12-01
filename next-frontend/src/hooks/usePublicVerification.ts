import { useState, useEffect } from 'react';

/**
 * Hook to check if a user (by address) has completed Self Protocol verification
 * This data is public and fetched from the backend API
 */
export function usePublicVerification(address: string | undefined) {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!address) {
      setIsVerified(false);
      setIsLoading(false);
      return;
    }

    const checkVerification = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/self/status', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ address }),
        });

        if (response.ok) {
          const data = await response.json();
          setIsVerified(data.verified || false);
        } else {
          setIsVerified(false);
        }
      } catch (error) {
        console.error('Error checking verification status:', error);
        setIsVerified(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkVerification();
  }, [address]);

  return { isVerified, isLoading };
}

/**
 * Hook to check verification status for multiple users
 * Returns a map of address -> verification status
 */
export function useBulkPublicVerification(addresses: string[]) {
  const [verifications, setVerifications] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!addresses || addresses.length === 0) {
      setVerifications({});
      setIsLoading(false);
      return;
    }

    const checkVerifications = async () => {
      setIsLoading(true);
      const results: Record<string, boolean> = {};

      // Fetch verification status for each address
      await Promise.all(
        addresses.map(async (address) => {
          try {
            const response = await fetch('/api/self/status', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ address }),
            });

            if (response.ok) {
              const data = await response.json();
              results[address] = data.verified || false;
            } else {
              results[address] = false;
            }
          } catch (error) {
            console.error(`Error checking verification for ${address}:`, error);
            results[address] = false;
          }
        })
      );

      setVerifications(results);
      setIsLoading(false);
    };

    checkVerifications();
  }, [addresses.join(',')]); // Use join to create stable dependency

  return { verifications, isLoading };
}