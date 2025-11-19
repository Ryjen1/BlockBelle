# Self Protocol Integration Guide

This document explains how Self Protocol identity verification has been integrated into BlockBelle.

## Overview

Self Protocol provides privacy-preserving identity verification using zero-knowledge proofs. Users can verify their identity using the Self mobile app by scanning a QR code, without sharing personal information directly.

## Features Implemented

### 1. Account Page with Self Verification
- **Location**: `src/components/Account.tsx`
- **Features**:
  - Display wallet address and ENS name
  - Show registration status
  - Self Protocol verification section
  - QR code display for verification
  - Verification status display with details

### 2. Verification Hook
- **Location**: `src/hooks/useSelfVerification.ts`
- **Purpose**: Manages verification state using localStorage
- **Data Stored**:
  - `selfVerified`: Boolean flag
  - `selfDid`: Self DID identifier
  - `verifiedAt`: Timestamp of verification
  - `nationality`: User's nationality (disclosed)
  - `gender`: User's gender (disclosed)
  - `minimumAge`: Age verification result

### 3. Backend Verification Endpoints

#### Verify Endpoint
- **Location**: `src/app/api/self/verify/route.ts`
- **Method**: POST
- **Purpose**: Receives and validates proofs from Self Protocol
- **Request Body**:
  ```json
  {
    "attestationId": 1,
    "proof": {...},
    "publicSignals": [...],
    "userContextData": "..."
  }
  ```
- **Response**:
  ```json
  {
    "status": "success",
    "result": true,
    "data": {
      "nationality": "USA",
      "gender": "F",
      "minimumAge": "18"
    }
  }
  ```

#### Status Endpoint
- **Location**: `src/app/api/self/status/route.ts`
- **Method**: POST
- **Purpose**: Check verification status for a wallet address
- **Request Body**:
  ```json
  {
    "address": "0x..."
  }
  ```

## Configuration

### Environment Variables

Create a `.env.local` file in the `next-frontend` directory:

```bash
# Frontend Configuration
NEXT_PUBLIC_SELF_APP_NAME=BlockBelle
NEXT_PUBLIC_SELF_SCOPE=blockbelle-chat
NEXT_PUBLIC_SELF_ENDPOINT=http://localhost:3000/api/self/verify
NEXT_PUBLIC_SELF_ENDPOINT_TYPE=staging_https
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Backend Configuration
SELF_SCOPE=blockbelle-chat
SELF_ENDPOINT=http://localhost:3000/api/self/verify
SELF_USE_MOCK_PASSPORT=true
```

### Disclosure Configuration

The current configuration requests:
- **Minimum Age**: 18 years
- **Excluded Countries**: Cuba, Iran, North Korea, Russia
- **Disclosed Fields**: Nationality, Gender

You can modify these in `src/components/Account.tsx`:

```typescript
disclosures: {
  minimumAge: 18,
  excludedCountries: [
    countries.CUBA,
    countries.IRAN,
    countries.NORTH_KOREA,
    countries.RUSSIA,
  ],
  nationality: true,
  gender: true,
  // Add more fields as needed:
  // name: true,
  // date_of_birth: true,
  // passport_number: true,
}
```

## Testing

### Local Development

1. **Install Dependencies**:
   ```bash
   cd next-frontend
   npm install
   ```

2. **Set Up Environment**:
   - Copy `.env.example` to `.env.local`
   - Keep `SELF_USE_MOCK_PASSPORT=true` for testing

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Test with Mock Passports**:
   - Navigate to the Account tab
   - Click "Verify with Self Protocol"
   - Scan the QR code with the Self mobile app
   - Use mock passport data for testing

### Production Deployment

1. **Update Environment Variables**:
   ```bash
   NEXT_PUBLIC_SELF_ENDPOINT_TYPE=https
   SELF_USE_MOCK_PASSPORT=false
   ```

2. **Expose Your API** (for local testing):
   ```bash
   ngrok http 3000
   ```
   Update endpoints to use the ngrok URL.

3. **Deploy**:
   - Deploy to Vercel, Netlify, or your preferred platform
   - Update environment variables in deployment settings
   - Ensure the endpoint URL is publicly accessible

## User Flow

1. User connects wallet
2. User navigates to Account tab
3. User clicks "Verify with Self Protocol"
4. QR code is displayed
5. User scans QR code with Self mobile app
6. User completes verification in the app
7. Proof is sent to backend endpoint
8. Backend validates proof against on-chain hub
9. Verification status is stored
10. UI updates to show verified status

## Data Storage

### Frontend (localStorage)
- Verification status per wallet address
- Disclosed information (nationality, gender, etc.)
- Verification timestamp

### Backend (In-Memory)
- Currently uses Map for demonstration
- **Production**: Replace with database (PostgreSQL, MongoDB, etc.)

Example database schema:
```sql
CREATE TABLE self_verifications (
  id SERIAL PRIMARY KEY,
  wallet_address VARCHAR(42) UNIQUE NOT NULL,
  self_did VARCHAR(255),
  verified BOOLEAN DEFAULT false,
  attestation_id INTEGER,
  nationality VARCHAR(3),
  gender VARCHAR(1),
  minimum_age VARCHAR(2),
  verified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Security Considerations

1. **Proof Validation**: All proofs are validated against on-chain contracts
2. **Privacy**: Only requested fields are disclosed
3. **Zero-Knowledge**: Personal data is never shared, only verification results
4. **Optional**: Verification is optional, not required for app usage

## Troubleshooting

### QR Code Not Displaying
- Check that environment variables are set correctly
- Ensure `@selfxyz/qrcode` is installed
- Check browser console for errors

### Verification Failing
- Verify backend endpoint is accessible
- Check that scope and endpoint match between frontend and backend
- Ensure Self mobile app has latest version
- Check backend logs for detailed error messages

### Mock Passports Not Working
- Ensure `SELF_USE_MOCK_PASSPORT=true`
- Use `staging_https` endpoint type
- Check Self Protocol documentation for mock passport setup

## Resources

- [Self Protocol Documentation](https://docs.self.xyz)
- [QRCode SDK Guide](https://docs.self.xyz/frontend-integration/qrcode-sdk)
- [Backend Integration](https://docs.self.xyz/backend-integration/basic-integration)
- [Self Mobile App](https://self.xyz)

## Future Enhancements

1. **Database Integration**: Replace in-memory storage with persistent database
2. **Additional Disclosures**: Add more verification fields as needed
3. **Verification Badges**: Display verification badges throughout the app
4. **Gated Features**: Unlock features based on verification status
5. **Analytics**: Track verification rates and user engagement
6. **Re-verification**: Allow users to update verification periodically
7. 