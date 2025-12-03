import { useReadContracts } from 'wagmi';
import { useMemo } from 'react';

const PROOF_OF_HUMAN_ADDRESS = (process.env.NEXT_PUBLIC_SELF_ENDPOINT || '0x72493afCa2789dA494DD3695d74b50DE7774336A') as `0x${string}`;

const PROOF_OF_HUMAN_ABI = [
  {
    inputs: [{ name: '', type: 'address' }],
    name: 'isVerified',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

/**
 * Hook to check verification status for multiple users from blockchain
 * Returns a map of address -> verification status
 */
export function useBulkSelfVerification(addresses: string[]) {
  // Create contracts array for batch reading
  const contracts = useMemo(() => 
    addresses.map(address => ({
      address: PROOF_OF_HUMAN_ADDRESS,
      abi: PROOF_OF_HUMAN_ABI,
      functionName: 'isVerified' as const,
      args: [address as `0x${string}`],
    })),
    [addresses.join(',')]
  );

  const { data, isLoading } = useReadContracts({
    contracts,
    query: {
      enabled: addresses.length > 0,
    },
  });

  // Transform results into a map
  const verifications = useMemo(() => {
    const result: Record<string, boolean> = {};
    
    if (data) {
      addresses.forEach((address, index) => {
        result[address] = (data[index]?.result as boolean) || false;
      });
    }
    
    return result;
  }, [data, addresses.join(',')]);

  return { verifications, isLoading };
}