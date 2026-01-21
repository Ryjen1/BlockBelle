#!/usr/bin/env node

/**
 * Generate a private key for app signing
 * Used for GoodDollar Engagement Rewards backend signature
 */

import crypto from 'crypto';

function generatePrivateKey() {
  const privateKey = '0x' + crypto.randomBytes(32).toString('hex');
  return privateKey;
}

console.log('='.repeat(60));
console.log('GoodDollar Engagement Rewards - App Signing Key Generator');
console.log('='.repeat(60));
console.log();
console.log('Generated Private Key:');
console.log(generatePrivateKey());
console.log();
console.log('⚠️  IMPORTANT SECURITY NOTES:');
console.log('1. Copy this key to your .env.local file as APP_SIGNING_KEY');
console.log('2. NEVER commit this key to version control');
console.log('3. Keep this key secret and secure');
console.log('4. Use different keys for development and production');
console.log();
console.log('Add to .env.local:');
console.log('APP_SIGNING_KEY=<paste_key_here>');
console.log('='.repeat(60));