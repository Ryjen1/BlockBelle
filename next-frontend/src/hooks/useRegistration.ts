import { useState, useEffect } from 'react';
import { useAccount, useReadContract } from 'wagmi';
import { parseAbi } from 'viem';
import { CONTRACT_ADDRESSES } from '@/config/contracts';

const registryAbi = parseAbi([
  'function getUserDetails(address userAddress) external view returns (string memory ensName, string memory avatarHash, bool registered)',
  'function isUserRegistered(address userAddress) external view returns (bool)',
])

export function useRegistration() {
   const { address, isConnected } = useAccount()
   const [isRegistered, setIsRegistered] = useState(false)
   const [ensName, setEnsName] = useState('')
   const [isLoading, setIsLoading] = useState(true)

   const { data: userDetails, isLoading: isLoadingUserDetails } = useReadContract({
     address: CONTRACT_ADDRESSES.registry,
     abi: registryAbi,
     functionName: 'getUserDetails',
     args: address ? [address] : undefined,
     query: {
       enabled: !!address && isConnected,
       refetchInterval: false,
       refetchOnWindowFocus: false,
       refetchOnMount: false,
       staleTime: Infinity,
     },
   })

   const { data: registrationStatus, isLoading: isLoadingRegistrationStatus } = useReadContract({
     address: CONTRACT_ADDRESSES.registry,
     abi: registryAbi,
     functionName: 'isUserRegistered',
     args: address ? [address] : undefined,
     query: {
       enabled: !!address && isConnected,
       refetchInterval: false,
       refetchOnWindowFocus: false,
       refetchOnMount: false,
       staleTime: Infinity,
     },
   })

   useEffect(() => {
     if (isLoadingUserDetails || isLoadingRegistrationStatus) {
       setIsLoading(true)
       return
     }

     if (userDetails && registrationStatus !== undefined) {
       const [name, , registered] = userDetails as [string, string, boolean]
       const hasName = !!(name && name.length > 0)

       setIsRegistered((prev) => {
         if (prev !== registered) {
           console.log('Registration status changed:', prev, '->', registered)
           return registered
         }
         return prev
       })
       setEnsName((prev) => {
         const newName = hasName ? name : ''
         if (prev !== newName) {
           return newName
         }
         return prev
       })
       setIsLoading(false)
     } else {
       setIsRegistered((prev) => prev !== false ? false : prev)
       setEnsName((prev) => prev !== '' ? '' : prev)
       setIsLoading(false)
     }
   }, [userDetails, registrationStatus, isLoadingUserDetails, isLoadingRegistrationStatus])

   return {
     isRegistered,
     ensName,
     isLoading,
     address,
     isConnected,
   }
}