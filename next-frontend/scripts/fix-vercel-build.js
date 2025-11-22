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

const appServerDir = path.join(__dirname, '../.next/server/app');
const filesToCreate = [
  '_global-error.rsc',
  '_global-error.html'
];

// Only run if .next directory exists (after build)
if (fs.existsSync(path.join(__dirname, '../.next'))) {
  // Create app server directory if it doesn't exist
  if (!fs.existsSync(appServerDir)) {
    fs.mkdirSync(appServerDir, { recursive: true });
  }
  
  // Create stub files
  filesToCreate.forEach(filename => {
    const filePath = path.join(appServerDir, filename);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '');
      console.log(`✓ Created stub ${filename} file for Vercel deployment`);
    }
  });
}