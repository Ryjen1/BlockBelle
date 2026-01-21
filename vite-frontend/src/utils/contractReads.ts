import { createPublicClient, http } from 'viem'
import { baseSepolia } from 'viem/chains'
import { parseAbi } from 'viem'
import { CONTRACT_ADDRESSES } from '../config/contracts'

const registryAbi = parseAbi([
  'function getUserDetails(address userAddress) external view returns (string memory ensName, string memory avatarHash, bool registered)',
])

// Create a public client for reading contract data
const publicClient = createPublicClient({
  chain: baseSepolia,
  transport: http('https://base-sepolia.g.alchemy.com/v2/Ef7_aX-IDtQ-omvBIoGSs1Nzm_1N4C1x')
})

export async function getUserDetailsFromContract(userAddress: string) {
  try {
    const result = await publicClient.readContract({
      address: CONTRACT_ADDRESSES.registry as `0x${string}`,
      abi: registryAbi,
      functionName: 'getUserDetails',
      args: [userAddress as `0x${string}`],
    })

    if (result && Array.isArray(result) && result.length >= 3) {
      const [ensName, avatarHash, registered] = result
      return {
        ensName: ensName || '',
        avatarHash: avatarHash || '',
        registered: Boolean(registered)
      }
    }

    return { ensName: '', avatarHash: '', registered: false }
  } catch (error) {
    console.error('Error reading user details from contract:', error)
    return { ensName: '', avatarHash: '', registered: false }
  }
}