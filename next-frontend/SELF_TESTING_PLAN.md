# Self Protocol Integration - Testing Plan

## Test Environment Setup

### Prerequisites
1. Self mobile app installed on a smartphone
2. Mock passport configured in Self app (for testing)
3. Next.js development server running
4. ngrok or similar tunneling tool (for local testing)

### Environment Configuration

**Development (.env.local)**:
```bash
NEXT_PUBLIC_SELF_ENDPOINT_TYPE=staging_https
SELF_USE_MOCK_PASSPORT=true
NEXT_PUBLIC_SELF_ENDPOINT=https://your-ngrok-url.ngrok.io/api/self/verify
SELF_ENDPOINT=https://your-ngrok-url.ngrok.io/api/self/verify
```

## Test Cases

### 1. Frontend UI Tests

#### Test 1.1: Account Page Display (Unverified User)
**Steps**:
1. Connect wallet
2. Navigate to Account tab
3. Verify display shows:
   - Wallet address
   - ENS name (if registered)
   - Registration status
   - "Verify with Self Protocol" button
   - Unverified status

**Expected Result**: All elements display correctly

#### Test 1.2: QR Code Display
**Steps**:
1. Click "Verify with Self Protocol" button
2. Observe QR code generation

**Expected Result**: 
- QR code displays within 2 seconds
- QR code is scannable
- Instructions are clear
- Close button is visible

#### Test 1.3: Verified User Display
**Steps**:
1. Complete verification (see Test 2.1)
2. Refresh page
3. Navigate to Account tab

**Expected Result**:
- Green "Verified ✓" badge displays
- Verification timestamp shows
- Disclosed information displays (nationality, gender)
- No "Verify" button visible

### 2. Verification Flow Tests

#### Test 2.1: Successful Verification (Mock Passport)
**Steps**:
1. Click "Verify with Self Protocol"
2. Open Self mobile app
3. Scan QR code
4. Complete verification with mock passport
5. Wait for confirmation

**Expected Result**:
- QR code scans successfully
- Self app shows verification request
- Verification completes in app
- Frontend updates to show verified status
- Verification data stored in localStorage

#### Test 2.2: Verification with Age Restriction
**Steps**:
1. Use mock passport with age < 18
2. Attempt verification

**Expected Result**:
- Verification fails
- Error message indicates age requirement
- User remains unverified

#### Test 2.3: Verification with Excluded Country
**Steps**:
1. Use mock passport from excluded country (Cuba, Iran, North Korea, Russia)
2. Attempt verification

**Expected Result**:
- Verification fails
- Error message indicates country restriction
- User remains unverified

### 3. Backend API Tests

#### Test 3.1: Verify Endpoint - Valid Proof
**Request**:
```bash
curl -X POST http://localhost:3000/api/self/verify \
  -H "Content-Type: application/json" \
  -d '{
    "attestationId": 1,
    "proof": {...},
    "publicSignals": [...],
    "userContextData": "..."
  }'
```

**Expected Response**:
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

#### Test 3.2: Verify Endpoint - Missing Fields
**Request**:
```bash
curl -X POST http://localhost:3000/api/self/verify \
  -H "Content-Type: application/json" \
  -d '{
    "attestationId": 1
  }'
```

**Expected Response**:
```json
{
  "status": "error",
  "result": false,
  "reason": "Proof, publicSignals, attestationId and userContextData are required"
}
```

#### Test 3.3: Status Endpoint - Verified User
**Request**:
```bash
curl -X POST http://localhost:3000/api/self/status \
  -H "Content-Type: application/json" \
  -d '{
    "address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb"
  }'
```

**Expected Response**:
```json
{
  "verified": true,
  "selfDid": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  "nationality": "USA",
  "gender": "F",
  "verifiedAt": "2024-01-15T10:30:00.000Z"
}
```

#### Test 3.4: Status Endpoint - Unverified User
**Expected Response**:
```json
{
  "verified": false
}
```

### 4. Data Persistence Tests

#### Test 4.1: localStorage Persistence
**Steps**:
1. Complete verification
2. Close browser
3. Reopen browser
4. Navigate to Account tab

**Expected Result**: Verification status persists

#### Test 4.2: Multi-Wallet Support
**Steps**:
1. Verify with Wallet A
2. Disconnect Wallet A
3. Connect Wallet B
4. Check verification status

**Expected Result**: 
- Wallet A shows verified
- Wallet B shows unverified
- Each wallet has independent verification state

### 5. Error Handling Tests

#### Test 5.1: Network Error During Verification
**Steps**:
1. Disconnect internet
2. Attempt verification
3. Reconnect internet

**Expected Result**: 
- Error message displays
- User can retry
- No partial verification state

#### Test 5.2: Backend Unavailable
**Steps**:
1. Stop backend server
2. Attempt verification

**Expected Result**:
- Graceful error handling
- User-friendly error message
- No app crash

#### Test 5.3: Invalid QR Code
**Steps**:
1. Modify QR code data manually
2. Scan with Self app

**Expected Result**:
- Self app shows error
- Verification fails
- User can generate new QR code

### 6. Integration Tests

#### Test 6.1: Wallet Connection Flow
**Steps**:
1. Start without wallet connected
2. Navigate to Account tab
3. Connect wallet
4. Verify account page updates

**Expected Result**: Seamless transition from disconnected to connected state

#### Test 6.2: Registration + Verification Flow
**Steps**:
1. Register new user
2. Navigate to Account tab
3. Complete Self verification
4. Check both statuses

**Expected Result**: Both registration and verification show as complete

### 7. Performance Tests

#### Test 7.1: QR Code Generation Time
**Metric**: Time from button click to QR code display
**Expected**: < 2 seconds

#### Test 7.2: Verification Processing Time
**Metric**: Time from app confirmation to UI update
**Expected**: < 5 seconds

#### Test 7.3: Page Load with Verification Data
**Metric**: Time to load Account page with verification
**Expected**: < 1 second

### 8. Security Tests

#### Test 8.1: Proof Validation
**Steps**:
1. Submit invalid proof to backend
2. Check response

**Expected Result**: Proof rejected, error returned

#### Test 8.2: Replay Attack Prevention
**Steps**:
1. Capture valid proof
2. Submit same proof twice

**Expected Result**: Second submission should be handled appropriately

#### Test 8.3: Cross-User Verification
**Steps**:
1. Verify with Wallet A
2. Try to use Wallet A's proof for Wallet B

**Expected Result**: Verification fails, proof tied to specific wallet

## Test Execution Checklist

- [ ] All UI tests pass
- [ ] All verification flow tests pass
- [ ] All backend API tests pass
- [ ] Data persistence verified
- [ ] Error handling tested
- [ ] Integration tests complete
- [ ] Performance metrics acceptable
- [ ] Security tests pass
- [ ] Documentation reviewed
- [ ] Code reviewed

## Known Issues / Limitations

1. **In-Memory Storage**: Backend uses Map instead of database (production needs DB)
2. **No Re-verification**: Once verified, no mechanism to update/reverify
3. **Limited Error Messages**: Some error cases could have more specific messages
4. **No Analytics**: No tracking of verification attempts/success rates

## Production Readiness Checklist

- [ ] Replace in-memory storage with database
- [ ] Set up production environment variables
- [ ] Configure real passport verification (not mock)
- [ ] Set up monitoring and logging
- [ ] Add rate limiting to API endpoints
- [ ] Implement verification expiry/refresh mechanism
- [ ] Add comprehensive error tracking
- [ ] Set up backup/recovery procedures
- [ ] Document deployment process
- [ ] Conduct security audit

## Test Data

### Mock Passport Examples
- **Valid Adult**: Age 25, USA, Female
- **Underage**: Age 16, Canada, Male
- **Excluded Country**: Age 30, Russia, Female
- **Valid Minimum**: Age 18, India, Female

## Reporting Issues

When reporting issues, include:
1. Test case number
2. Steps to reproduce
3. Expected vs actual result
4. Screenshots/logs
5. Environment details (browser, wallet, etc.)
6. Timestamp of occurrence