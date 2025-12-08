#!/usr/bin/env python3
"""
Slither Security Scanner Setup Script
This script sets up Slither for automated security scanning of Solidity contracts
"""

import subprocess
import sys
import os
import json
from pathlib import Path

def install_slither():
    """Install Slither using pip"""
    print("🔧 Installing Slither for security scanning...")
    try:
        subprocess.run([sys.executable, "-m", "pip", "install", "slither-analyzer"], check=True)
        print("✅ Slither installed successfully")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Failed to install Slither: {e}")
        return False

def create_slither_config():
    """Create Slither configuration file"""
    config = {
        "exclude_dependencies": True,
        "exclude_informational": False,
        "exclude_optimization": False,
        "exclude_low": False,
        "exclude_medium": False,
        "exclude_high": False,
        "exclude_critical": False,
        "solc_remaps": [
            "@selfxyz/contracts/=lib/self/contracts/",
            "forge-std/=lib/forge-std/src/"
        ],
        "filter_paths": [
            "lib/",
            "node_modules/"
        ]
    }

    config_path = Path("slither.config.json")
    with open(config_path, "w") as f:
        json.dump(config, f, indent=2)

    print(f"✅ Slither configuration created at {config_path}")
    return config_path

def create_scan_script():
    """Create a shell script for running security scans"""
    scan_script = """#!/bin/bash
# Security Scan Script for BlockBelle Smart Contracts

# Exit immediately if any command fails
set -e

# Colors for output
RED='\\033[0;31m'
GREEN='\\033[0;32m'
YELLOW='\\033[1;33m'
NC='\\033[0m' # No Color

echo -e "${YELLOW}🔍 Running Slither security scan...${NC}"

# Run Slither on all contract files
echo -e "${YELLOW}📁 Scanning contracts/src/...${NC}"
slither contracts/src/ --config-file slither.config.json --json slither-report.json

# Check if report was generated
if [ -f "slither-report.json" ]; then
    echo -e "${GREEN}✅ Security scan completed. Report saved to slither-report.json${NC}"

    # Check for critical/high severity issues
    CRITICAL_COUNT=$(jq '.results.detectors[] | select(.impact == "Critical") | length' slither-report.json | grep -v "null" | wc -l)
    HIGH_COUNT=$(jq '.results.detectors[] | select(.impact == "High") | length' slither-report.json | grep -v "null" | wc -l)

    if [ "$CRITICAL_COUNT" -gt 0 ] || [ "$HIGH_COUNT" -gt 0 ]; then
        echo -e "${RED}❌ Found $CRITICAL_COUNT critical and $HIGH_COUNT high severity issues!${NC}"
        echo -e "${RED}📋 Critical issues:${NC}"
        jq '.results.detectors[] | select(.impact == "Critical")' slither-report.json
        echo -e "${RED}📋 High severity issues:${NC}"
        jq '.results.detectors[] | select(.impact == "High")' slither-report.json
        exit 1
    else
        echo -e "${GREEN}✅ No critical or high severity issues found!${NC}"
        exit 0
    fi
else
    echo -e "${RED}❌ Failed to generate security report${NC}"
    exit 1
fi
"""

    script_path = Path("scripts/run_security_scan.sh")
    with open(script_path, "w") as f:
        f.write(scan_script)

    # Make script executable
    try:
        subprocess.run(["chmod", "+x", str(script_path)], check=True)
    except:
        pass  # Windows compatibility

    print(f"✅ Security scan script created at {script_path}")
    return script_path

def main():
    print("🚀 Setting up Slither security scanner for BlockBelle...")
    print("=" * 60)

    # Install Slither
    if not install_slither():
        sys.exit(1)

    # Create configuration
    create_slither_config()

    # Create scan script
    create_scan_script()

    print("\n" + "=" * 60)
    print("✅ Slither setup completed successfully!")
    print("📝 To run a security scan, use:")
    print("   ./scripts/run_security_scan.sh")
    print("   or")
    print("   python scripts/setup_slither.py && ./scripts/run_security_scan.sh")

if __name__ == "__main__":
    main()