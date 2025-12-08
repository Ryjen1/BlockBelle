# 👑 BlockBelle

**A Web3 Chat Platform Exclusively for Women in Blockchain**

BlockBelle is a decentralized chat application built on Celo that creates a safe, verified space for women in the Web3 ecosystem to connect, collaborate, and thrive together.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://chata-bella.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Built on Celo](https://img.shields.io/badge/Built%20on-Celo-green)](https://celo.org)

---

## ✨ Features

### 🔐 Identity Verification
- **Self Protocol Integration**: Privacy-preserving age (18+) and gender verification using zero-knowledge proofs
- **Queens-Only Access**: Gender-based verification ensures the platform remains a women-only space
- **On-Chain Attestation**: Verification status stored permanently on Celo blockchain

### 💬 Decentralized Chat
- **ENS-Based Registration**: Users register with custom ENS names
- **Group & Private Messaging**: Chat with the entire community or individual members
- **On-Chain Messages**: All messages stored on Celo for transparency and permanence

### 👑 Tier System
- **Tier 3 Badge**: Verified users receive a crown badge indicating trusted identity
- **Visual Recognition**: Badges displayed next to usernames throughout the app

### 🎨 Modern UI/UX
- **Gradient Design**: Beautiful pink-to-purple-to-indigo gradients
- **Responsive**: Works seamlessly on desktop and mobile
- **Dark Mode Ready**: Glassmorphism effects and modern aesthetics

---

## 🚀 Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Wagmi** - React hooks for Ethereum
- **RainbowKit** - Wallet connection UI
- **Self Protocol** - Identity verification

### Smart Contracts
- **Solidity 0.8.28** - Smart contract language
- **Foundry** - Development framework
- **OpenZeppelin** - Security-audited contract libraries

### Blockchain
- **Celo Mainnet** - Layer-1 blockchain
- **IPFS** - Decentralized storage (planned)

---

## 📋 Prerequisites

- Node.js 18+ (Note: Self Protocol requires Node 22-23)
- npm or yarn
- MetaMask or compatible Web3 wallet
- Celo tokens for gas fees

---

## 🛠️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/BlockBelle.git
cd BlockBelle
```

### 2. Install Frontend Dependencies
```bash
cd next-frontend
npm install
```

### 3. Install Contract Dependencies
```bash
cd ../contracts
forge install
```

### 4. Environment Setup

Create `.env.production` in `next-frontend/`:
```env
NEXT_PUBLIC_SELF_ENDPOINT=0x0a0c863edd00af4e48ecbb6f0cd11fd42dee56c2
NEXT_PUBLIC_SELF_APP_NAME=BlockBelle
NEXT_PUBLIC_SELF_SCOPE=blockbelle-chat
```

Create `.env` in `contracts/`:
```env
PRIVATE_KEY=your_private_key_here
CELOSCAN_API_KEY=your_celoscan_api_key
```

---

## 🏃 Running Locally

### Frontend Development Server
```bash
cd next-frontend
npm run dev
```
Visit `http://localhost:3000`

### Smart Contract Testing
```bash
cd contracts
forge test
```

### Security Auditing
Run automated security scans using Slither:

```bash
# Install Slither (if not already installed)
pip install slither-analyzer

# Run security scan
./scripts/run_security_scan.sh

# Or run manually
slither contracts/src/ --config-file slither.config.json --json slither-report.json
```

The security scan will:
- Analyze all Solidity contracts for vulnerabilities
- Generate a detailed JSON report (`slither-report.json`)
- Fail with exit code 1 if critical/high severity issues are found
- Pass with exit code 0 if no critical/high issues are found

**Severity Levels:**
- 🔴 Critical: Contract-breaking vulnerabilities
- 🟡 High: Serious security issues
- 🟠 Medium: Potential security concerns
- 🟢 Low: Minor issues
- 🔵 Informational: Best practice suggestions
- ⚪ Optimization: Gas optimization opportunities

---

## 📦 Deployment

### Deploy Smart Contracts
```bash
cd contracts
forge script script/DeployProofOfHuman.s.sol --rpc-url celo --broadcast --verify
```

### Deploy Frontend to Vercel
1. Push to GitHub
2. Connect repository to Vercel
3. Set root directory to `next-frontend`
4. Add environment variables
5. Deploy!

---

## 🏗️ Project Structure

```
BlockBelle/
├── next-frontend/          # Next.js frontend application
│   ├── src/
│   │   ├── app/           # App router pages
│   │   ├── components/    # React components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── config/        # Wagmi & Web3 config
│   │   └── lib/           # Utility functions
│   ├── public/            # Static assets
│   └── package.json
│
├── contracts/             # Solidity smart contracts
│   ├── src/
│   │   ├── ProofOfHuman.sol    # Verification contract
│   │   ├── WhisprRegistry.sol  # User registration
│   │   └── WhisprChat.sol      # Chat functionality
│   ├── script/            # Deployment scripts
│   └── test/              # Contract tests
│
└── README.md
```

---

## 📝 Smart Contracts

### Deployed Contracts (Celo Mainnet)

| Contract | Address | Purpose |
|----------|---------|---------|
| ProofOfHuman | `0x0a0c863edd00af4e48ecbb6f0cd11fd42dee56c2` | Identity verification |
| WhisprRegistry | `0xA72B585c6b2293177dd485Ec0A607A471976771B` | User registration |
| WhisprChat | `0x562456dBF6F21d40C96D392Ef6eD1de2e921bF2C` | Chat messages |

### Contract Verification
All contracts are verified on CeloScan. View source code and interact directly on the blockchain explorer.

---

## 🎯 How It Works

### 1. Connect Wallet
Users connect their Web3 wallet (MetaMask, WalletConnect, etc.) using RainbowKit.

### 2. Register
Choose a unique ENS name and register on-chain. This creates your BlockBelle identity.

### 3. Verify Identity
Scan QR code with Self Protocol mobile app to verify:
- Age (18+)
- Gender (Female only)
- Nationality (optional)

### 4. Get Verified
- **Females**: Receive "Congratulations, Queen!" message and Tier 3 badge
- **Males**: Receive respectful redirect message and cannot access chat

### 5. Start Chatting
Join the community chat or send private messages to other verified queens!

---

## 🔒 Security & Privacy

### Zero-Knowledge Proofs
Self Protocol uses ZK proofs to verify identity without revealing personal information. Your passport data never leaves your device.

### On-Chain Verification
Verification status is stored on Celo blockchain, ensuring:
- Transparency
- Immutability
- Decentralization

### Gender Verification
Currently enforced at the frontend level. Future updates will include smart contract-level enforcement for enhanced security.

---

## 🛣️ Roadmap

### Phase 1: Core Features ✅
- [x] Wallet connection
- [x] ENS registration
- [x] Self Protocol verification
- [x] Group chat
- [x] Private messaging
- [x] Gender-specific verification messages

### Phase 2: Enhanced Security 🚧
- [ ] Contract-level gender enforcement
- [ ] Multi-signature admin controls
- [ ] Rate limiting for spam prevention

### Phase 3: Community Features 🔮
- [ ] Mentorship matching
- [ ] Event calendar
- [ ] Resource library
- [ ] Reputation system
- [ ] NFT badges for achievements

### Phase 4: Scalability 🌟
- [ ] IPFS integration for media
- [ ] Layer-2 scaling solutions
- [ ] Mobile app (React Native)
- [ ] Multi-chain support

---

## 🤝 Contributing

We welcome contributions from women developers! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style
- Write tests for new features
- Update documentation
- Be respectful and inclusive

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Celo Foundation** - For the amazing blockchain infrastructure
- **Self Protocol** - For privacy-preserving identity verification
- **RainbowKit** - For beautiful wallet connection UX
- **All the Queens** - Who inspire and support this project

---

## 📞 Contact & Support

- **Website**: [chata-bella.vercel.app](https://chata-bella.vercel.app)
- **Twitter**: [@BlockBelle](https://twitter.com/BlockBelle) *(coming soon)*
- **Discord**: [Join our community](https://discord.gg/blockbelle) *(coming soon)*

---

## 💖 Support the Project

If you believe in creating safe spaces for women in Web3, consider:
- ⭐ Starring this repository
- 🐦 Sharing on social media
- 👩‍💻 Contributing code or documentation
- 💬 Spreading the word to women builders

---

**Built with 💜 for Queens in Web3**

*BlockBelle - Where Women in Blockchain Connect, Collaborate, and Thrive*
