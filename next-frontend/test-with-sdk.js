/**
 * Test using the official @goodsdks/engagement-sdk
 * Run from next-frontend: node test-with-sdk.js
 */

import { createPublicClient, http } from 'viem';
import { celo } from 'viem/chains';

const DEV_CONTRACT = '0xb44fC3A592aDaA257AECe1Ae8956019EA53d0465';
const APP_ADDRESS = '0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C';

// Try the SDK's contract ABI
const ABI = [
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'registeredApps',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  }
];

async function test() {
  console.log('🔍 Testing with SDK-style ABI\n');
  console.log('Contract:', DEV_CONTRACT);
  console.log('App:', APP_ADDRESS);

  const client = createPublicClient({
    chain: celo,
    transport: http('https://forno.celo.org')
  });

  try {
    console.log('\n📞 Calling registeredApps...');
    const result = await client.readContract({
      address: DEV_CONTRACT,
      abi: ABI,
      functionName: 'registeredApps',
      args: [APP_ADDRESS]
    });
    
    console.log('✅ Result:', result);
    console.log(result ? '\n🎉 App IS registered!' : '\n❌ App NOT registered');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

test();