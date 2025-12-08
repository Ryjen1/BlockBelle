# E2E Tests for BlockBelle Chat

This directory contains comprehensive end-to-end (E2E) tests for BlockBelle's chat functionality, built with [Playwright](https://playwright.dev/).

## Overview

The E2E tests verify real user interactions across different scenarios:

- **ENS-Verified User Chat Flows** - Tests for users with completed ENS verification
- **Non-Verified User Chat Flows** - Tests for users without verification
- **Message Delivery Scenarios** - Tests for successful/failed message delivery
- **Group Chat Functionality** - Tests for creating and managing group chats
- **Login/Logout Flows** - Tests for authentication and session management
- **Security Protections** - Tests for security measures and route protection

## Test Structure

```
e2e/
├── fixtures/
│   └── chat-fixtures.ts          # Shared test fixtures and utilities
├── tests/
│   ├── chat/
│   │   ├── ens-verified-chat.spec.ts
│   │   ├── non-verified-chat.spec.ts
│   │   ├── message-delivery.spec.ts
│   │   └── group-chat.spec.ts
│   ├── auth/
│   │   └── login-logout.spec.ts
│   └── security/
│       └── chat-security.spec.ts
├── README.md                     # This file
└── test-utils.ts                 # Additional test utilities
```

## Getting Started

### Prerequisites

1. **Node.js** (v18 or higher)
2. **npm** or **yarn**
3. **Playwright browsers** (will be installed automatically)

### Installation

1. **Install Playwright dependencies:**
   ```bash
   cd next-frontend
   npm run e2e:install
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

### Running Tests

#### Run all E2E tests:
```bash
npm run test:e2e
```

#### Run tests with UI mode:
```bash
npm run test:e2e:ui
```

#### Run tests in headed mode (see browser):
```bash
npm run test:e2e:headed
```

#### Run specific test file:
```bash
npx playwright test tests/chat/ens-verified-chat.spec.ts
```

#### Run tests for specific user type:
```bash
npx playwright test --grep "ENS-Verified"
```

#### Run security tests only:
```bash
npx playwright test tests/security/
```

### Test Reports

After running tests, view the HTML report:
```bash
npm run e2e:show-report
```

## Test Configuration

### Playwright Configuration (`playwright.config.ts`)

The tests are configured to run on multiple browsers:
- **Chromium** (Desktop Chrome)
- **Firefox** (Desktop Firefox)
- **WebKit** (Desktop Safari)
- **Mobile Chrome** (Pixel 5)
- **Mobile Safari** (iPhone 12)

### Environment Variables

Create a `.env` file in the project root:

```env
# Test environment configuration
NEXT_PUBLIC_TEST_MODE=true
NEXT_PUBLIC_MOCK_CONTRACTS=true
NEXT_PUBLIC_E2E_TESTING=true

# Mock contract addresses for testing
NEXT_PUBLIC_REGISTRY_ADDRESS=0xTestRegistry123
NEXT_PUBLIC_CHAT_ADDRESS=0xTestChat123

# Test database (if using test database)
DATABASE_URL=postgresql://test:test@localhost:5432/blockbelle_test
```

## Test Fixtures

### Mock Users

The tests use predefined mock users:

- **Alice Johnson** (`0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A`) - ENS verified user
- **Bob Smith** (`0x8ba1f109551bD432803012645Hac136c32c3c0c4`) - ENS verified user  
- **Charlie User** (`0x1234567890123456789012345678901234567890`) - Non-verified user
- **Dave Developer** (`0x9876543210987654321098765432109876543210`) - ENS verified user

### Custom Test Fixtures

Available fixtures in `fixtures/chat-fixtures.ts`:

- `mockWalletConnection(user)` - Mock wallet connection for a user
- `setupMockContract()` - Mock smart contract responses
- `waitForChatLoad()` - Wait for chat interface to load
- `sendMessage(content)` - Send a message with verification
- `selectChat(userAddress)` - Select a specific chat
- `verifyMessageDelivery(content)` - Verify message was delivered

## Test Scenarios

### 1. ENS-Verified User Chat Flows

Tests for users who have completed ENS verification:
- ✅ Full feature access
- ✅ Verification badges display
- ✅ Enhanced messaging capabilities
- ✅ Priority support features

### 2. Non-Verified User Chat Flows

Tests for users without ENS verification:
- ⚠️ Limited feature access
- ⚠️ Upgrade prompts and restrictions
- ⚠️ Basic messaging only
- ⚠️ Rate limiting and restrictions

### 3. Message Delivery Scenarios

Tests for message handling:
- ✅ Successful message delivery
- ❌ Failed delivery and error handling
- 🔄 Network issues and retry mechanisms
- 📅 Message ordering and timestamps

### 4. Group Chat Functionality

Tests for group features:
- 👥 Group creation and joining
- 🔒 Private vs public groups
- 📝 Group messaging and mentions
- ⚙️ Group management and permissions

### 5. Authentication Flows

Tests for login/logout:
- 🔐 Wallet connection/disconnection
- 📱 Session management
- 🔑 Authentication state persistence
- ❌ Error handling and recovery

### 6. Security Protections

Tests for security measures:
- 🛡️ Route access control
- 🧹 Input validation and sanitization
- 🚫 Rate limiting and abuse prevention
- 🔒 Message encryption and privacy
- 🛡️ CSRF protection

## Mock Data and Utilities

### Contract Mocking

Tests mock smart contract responses for:
- `getAllUsers()` - Returns list of registered users
- `getUserDetails()` - Returns user profile information
- `getConversation()` - Returns message history
- `sendMessage()` - Simulates message sending

### Network Simulation

Tests simulate various network conditions:
- Successful requests
- Network timeouts
- Server errors
- Rate limiting responses

## Continuous Integration

### GitHub Actions

Tests can be run in CI using the included workflow configuration:

```yaml
name: E2E Tests
on: [push, pull_request]
jobs:
  e2e-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run e2e:install
      - run: npm run test:e2e
```

### Environment Setup for CI

1. **Install Playwright browsers:**
   ```bash
   npx playwright install --with-deps
   ```

2. **Set environment variables:**
   ```bash
   export NEXT_PUBLIC_TEST_MODE=true
   export CI=true
   ```

3. **Run tests:**
   ```bash
   npm run test:e2e
   ```

## Debugging Tests

### Common Issues

1. **Tests failing due to timeouts:**
   - Increase timeout values in test configuration
   - Check if mock data is being loaded correctly

2. **Element not found errors:**
   - Verify selectors match actual DOM elements
   - Check if page is fully loaded before interacting

3. **Mock data not working:**
   - Ensure mock scripts are loaded before page interactions
   - Verify mock contract addresses match test configuration

### Debug Commands

```bash
# Run tests with debug output
DEBUG=pw:api npx playwright test

# Record test execution
npx playwright test --record-video

# Take screenshots on failure
npx playwright test --screenshot=only-on-failure

# Generate test artifacts
npx playwright test --tracing=on
```

## Contributing

### Writing New Tests

1. **Create test file** in appropriate directory:
   ```
   e2e/tests/chat/new-feature.spec.ts
   ```

2. **Use existing fixtures** and mock data where possible

3. **Follow naming conventions:**
   - Test files: `*.spec.ts`
   - Test suites: `describe('Feature Name')`
   - Test cases: `it('should do something')`

4. **Add test data attributes** to components for reliable selection:
   ```tsx
   <button data-testid="send-message-button">Send</button>
   ```

### Test Best Practices

1. **Use semantic test names** that describe the scenario
2. **Mock external dependencies** (contracts, APIs)
3. **Clean up test data** between tests
4. **Test both success and failure cases**
5. **Use realistic user scenarios**
6. **Add assertions for UI state changes**

## Troubleshooting

### Common Problems

1. **Playwright browsers not installed:**
   ```bash
   npx playwright install --with-deps
   ```

2. **Tests timing out:**
   - Increase timeout in `playwright.config.ts`
   - Check network conditions in tests

3. **Mock data not working:**
   - Verify mock scripts are injected correctly
   - Check console for JavaScript errors

4. **Authentication issues:**
   - Ensure wallet mocking is complete
   - Check session management in tests

### Getting Help

- 📚 [Playwright Documentation](https://playwright.dev/)
- 🐛 Report issues in the project repository
- 💬 Check existing test patterns in the codebase

## License

These E2E tests are part of the BlockBelle project and follow the same license terms.