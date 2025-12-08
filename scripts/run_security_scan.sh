#!/bin/bash
# Security Scan Script for BlockBelle Smart Contracts

# Exit immediately if any command fails
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🔍 Running Slither security scan...${NC}"

# Check if slither is installed
if ! command -v slither &> /dev/null; then
    echo -e "${RED}❌ Slither is not installed. Please install it first:${NC}"
    echo "   pip install slither-analyzer"
    exit 1
fi

# Run Slither on all contract files
echo -e "${YELLOW}📁 Scanning contracts/src/...${NC}"
slither contracts/src/ --config-file slither.config.json --json slither-report.json

# Check if report was generated
if [ -f "slither-report.json" ]; then
    echo -e "${GREEN}✅ Security scan completed. Report saved to slither-report.json${NC}"

    # Check for critical/high severity issues
    CRITICAL_COUNT=$(jq '.results.detectors[] | select(.impact == "Critical") | length' slither-report.json 2>/dev/null | grep -v "null" | wc -l || echo "0")
    HIGH_COUNT=$(jq '.results.detectors[] | select(.impact == "High") | length' slither-report.json 2>/dev/null | grep -v "null" | wc -l || echo "0")

    if [ "$CRITICAL_COUNT" -gt 0 ] || [ "$HIGH_COUNT" -gt 0 ]; then
        echo -e "${RED}❌ Found $CRITICAL_COUNT critical and $HIGH_COUNT high severity issues!${NC}"
        echo -e "${RED}📋 Critical issues:${NC}"
        jq '.results.detectors[] | select(.impact == "Critical")' slither-report.json 2>/dev/null || echo "No critical issues found in report"
        echo -e "${RED}📋 High severity issues:${NC}"
        jq '.results.detectors[] | select(.impact == "High")' slither-report.json 2>/dev/null || echo "No high severity issues found in report"
        exit 1
    else
        echo -e "${GREEN}✅ No critical or high severity issues found!${NC}"
        exit 0
    fi
else
    echo -e "${RED}❌ Failed to generate security report${NC}"
    exit 1
fi