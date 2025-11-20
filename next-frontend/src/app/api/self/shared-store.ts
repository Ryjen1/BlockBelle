/**
 * Shared verification store for SELF Protocol
 * This is a temporary in-memory store until database is connected
 * 
 * IMPORTANT: This will be replaced with Vercel Postgres database
 */

export interface VerificationData {
  verified: boolean;
  attestationId?: number;
  verifiedAt: string;
  selfDid: string;
  nationality?: string;
  gender?: string;
  minimumAge?: string;
}

// Shared Map instance used by both verify and status routes
export const verificationStore = new Map<string, VerificationData>();

/**
 * Save verification data for a wallet address
 */
export function saveVerification(address: string, data: VerificationData): void {
  verificationStore.set(address.toLowerCase(), data);
}

/**
 * Get verification data for a wallet address
 */
export function getVerification(address: string): VerificationData | undefined {
  return verificationStore.get(address.toLowerCase());
}

/**
 * Check if an address is verified
 */
export function isVerified(address: string): boolean {
  const data = verificationStore.get(address.toLowerCase());
  return data?.verified ?? false;
}

/**
 * Clear all verification data (for testing)
 */
export function clearAllVerifications(): void {
  verificationStore.clear();
}