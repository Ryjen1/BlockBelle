/**
 * Database module for BlockBelle Next.js application
 * This module provides database functionality using Vercel Postgres
 * Currently falls back to in-memory shared store for development
 */

import { 
  saveVerification as storeSaveVerification, 
  getVerification as storeGetVerification,
  type VerificationData 
} from './shared-store';

export type { VerificationData } from './shared-store';

export interface VerificationRecord {
  id: number;
  user_identifier: string;
  attestation_id: number;
  verified_at: string;
  nationality?: string;
  gender?: string;
  minimum_age?: string;
}

// Lazy-loaded SQL client
let sqlClient: any = null;
let sqlInitialized = false;

async function getSql() {
  if (sqlInitialized) {
    return sqlClient;
  }

  sqlInitialized = true;

  // Only try to load Vercel Postgres if we have the connection string
  if (process.env.POSTGRES_URL) {
    try {
      const postgres = await import('@vercel/postgres');
      sqlClient = postgres.sql;
      return sqlClient;
    } catch (error) {
      console.warn('Vercel Postgres not available:', error);
      return null;
    }
  }

  return null;
}

/**
 * Initialize database tables (idempotent)
 * This function creates the necessary tables if they don't exist
 */
export async function initDatabase(): Promise<void> {
  const sql = await getSql();
  
  if (!sql) {
    console.log('Database not available, using in-memory store');
    return;
  }

  try {
    // Create verifications table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS verifications (
        id SERIAL PRIMARY KEY,
        user_identifier VARCHAR(255) UNIQUE NOT NULL,
        attestation_id INTEGER NOT NULL,
        verified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        nationality VARCHAR(3),
        gender VARCHAR(10),
        minimum_age VARCHAR(20)
      )
    `;
    
    console.log('Database initialized successfully');
  } catch (error) {
    console.warn('Database initialization failed, falling back to in-memory store:', error);
  }
}

/**
 * Save verification data to database
 */
export async function saveVerification(userIdentifier: string, data: VerificationData): Promise<void> {
  const sql = await getSql();
  
  if (!sql) {
    storeSaveVerification(userIdentifier, data);
    return;
  }

  try {
    // Try to save to database first
    await sql`
      INSERT INTO verifications (
        user_identifier, 
        attestation_id, 
        verified_at, 
        nationality, 
        gender, 
        minimum_age
      ) VALUES (
        ${userIdentifier}, 
        ${data.attestationId || 0}, 
        ${data.verifiedAt}, 
        ${data.nationality || null}, 
        ${data.gender || null}, 
        ${data.minimumAge || null}
      )
      ON CONFLICT (user_identifier) 
      DO UPDATE SET
        attestation_id = EXCLUDED.attestation_id,
        verified_at = EXCLUDED.verified_at,
        nationality = EXCLUDED.nationality,
        gender = EXCLUDED.gender,
        minimum_age = EXCLUDED.minimum_age
    `;
  } catch (error) {
    console.warn('Database save failed, using in-memory store:', error);
    // Fallback to in-memory storage
    storeSaveVerification(userIdentifier, data);
  }
}

/**
 * Get verification data from database
 */
export async function getVerification(userIdentifier: string): Promise<VerificationData | null> {
  const sql = await getSql();
  
  if (!sql) {
    return storeGetVerification(userIdentifier) || null;
  }

  try {
    // Try to get from database first
    const { rows } = await sql<VerificationRecord>`
      SELECT * FROM verifications WHERE user_identifier = ${userIdentifier}
    `;
    
    if (rows.length === 0) {
      return null;
    }
    
    const row = rows[0];
    return {
      verified: true,
      attestationId: row.attestation_id,
      verifiedAt: row.verified_at,
      selfDid: row.user_identifier,
      nationality: row.nationality || undefined,
      gender: row.gender || undefined,
      minimumAge: row.minimum_age || undefined,
    };
  } catch (error) {
    console.warn('Database read failed, using in-memory store:', error);
    // Fallback to in-memory storage
    return storeGetVerification(userIdentifier) || null;
  }
}

/**
 * Check if a user is verified
 */
export async function isVerified(userIdentifier: string): Promise<boolean> {
  const verificationData = await getVerification(userIdentifier);
  return verificationData?.verified ?? false;
}