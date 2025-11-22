#!/usr/bin/env node

/**
 * Workaround for Next.js 16 + Vercel deployment issue
 * Creates stub _global-error.rsc file if it doesn't exist
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rscPath = path.join(__dirname, '../.next/server/app/_global-error.rsc');
const rscDir = path.dirname(rscPath);

// Only run if .next directory exists (after build)
if (fs.existsSync(path.join(__dirname, '../.next'))) {
  // Create directory if it doesn't exist
  if (!fs.existsSync(rscDir)) {
    fs.mkdirSync(rscDir, { recursive: true });
  }
  
  // Create stub file if it doesn't exist
  if (!fs.existsSync(rscPath)) {
    fs.writeFileSync(rscPath, '');
    console.log('✓ Created stub _global-error.rsc file for Vercel deployment');
  }
}