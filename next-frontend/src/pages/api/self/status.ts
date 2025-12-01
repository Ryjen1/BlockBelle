import type { NextApiRequest, NextApiResponse } from 'next';
import { getVerification } from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { address } = req.body;

    if (!address) {
      return res.status(400).json({ error: 'Address is required' });
    }

    // Check if user is verified in database
    const verificationData = await getVerification(address);

    // Return verification data or default unverified state
    return res.status(200).json(verificationData || { verified: false });
  } catch (error) {
    console.error('Error checking verification status:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      verified: false 
    });
  }
}