#!/bin/bash

# BlockBelle Help Wanted Labels Setup Script
# This script helps set up GitHub labels for the project
# Usage: ./scripts/labels-setup.sh [GITHUB_TOKEN] [REPO_OWNER] [REPO_NAME]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if required arguments are provided
if [ $# -lt 3 ]; then
    print_error "Usage: $0 <GITHUB_TOKEN> <REPO_OWNER> <REPO_NAME>"
    print_info "Example: $0 ghp_xxx Ryjen1 BlockBelle"
    exit 1
fi

GITHUB_TOKEN="$1"
REPO_OWNER="$2"
REPO_NAME="$3"
API_URL="https://api.github.com"

# Validate token
print_info "Validating GitHub token..."
if ! curl -s -H "Authorization: token $GITHUB_TOKEN" "$API_URL/user" > /dev/null; then
    print_error "Invalid GitHub token"
    exit 1
fi
print_success "GitHub token validated"

# Define labels to create
declare -A LABELS=(
    ["help wanted"]="fbca04"
    ["good first issue"]="00ff00"
    ["enhancement"]="0366d6"
    ["documentation"]="bfd4f2"
    ["frontend"]="fb8500"
    ["smart-contracts"]="d73a4a"
    ["testing"]="d876e3"
    ["ui/ux"]="39d353"
    ["bug"]="d73a4a"
    ["performance"]="6a737d"
    ["backend"]="0075ca"
    ["devops"]="8b949e"
    ["security"]="da3633"
    ["priority: high"]="d73a4a"
    ["priority: medium"]="fb8500"
    ["priority: low"]="6a737d"
)

# Function to create a label
create_label() {
    local name="$1"
    local color="$2"
    
    # Check if label already exists
    if curl -s -H "Authorization: token $GITHUB_TOKEN" \
        "$API_URL/repos/$REPO_OWNER/$REPO_NAME/labels/$name" | grep -q "\"name\":"; then
        print_warning "Label '$name' already exists, skipping..."
        return 0
    fi
    
    # Create the label
    response=$(curl -s -X POST \
        -H "Authorization: token $GITHUB_TOKEN" \
        -H "Content-Type: application/json" \
        -d "{\"name\":\"$name\",\"color\":\"$color\"}" \
        "$API_URL/repos/$REPO_OWNER/$REPO_NAME/labels")
    
    if echo "$response" | grep -q "\"name\":"; then
        print_success "Created label: $name"
    else
        print_error "Failed to create label: $name"
        echo "$response"
        return 1
    fi
}

print_info "Setting up GitHub labels for $REPO_OWNER/$REPO_NAME..."
echo

# Create all labels
for label_name in "${!LABELS[@]}"; do
    color="${LABELS[$label_name]}"
    create_label "$label_name" "$color"
done

echo
print_success "All labels have been processed!"

# Summary
print_info "Label Summary:"
echo "  📋 help wanted (fbca04) - Issues needing community help"
echo "  🆕 good first issue (00ff00) - Beginner-friendly tasks"
echo "  ✨ enhancement (0366d6) - Feature requests and improvements"
echo "  📚 documentation (bfd4f2) - Documentation improvements"
echo "  🎨 frontend (fb8500) - Next.js/React related issues"
echo "  📜 smart-contracts (d73a4a) - Solidity/Foundry related issues"
echo "  🧪 testing (d876e3) - Test-related improvements"
echo "  💻 ui/ux (39d353) - User interface and experience"
echo "  🐛 bug (d73a4a) - Bug reports"
echo "  ⚡ performance (6a737d) - Performance optimization"
echo
print_success "Setup complete! You can now apply these labels to issues."
print_info "Next steps:"
echo "  1. Create issues using the templates in docs/help-wanted-labels-guide.md"
echo "  2. Apply appropriate labels to existing issues"
echo "  3. Monitor and maintain labels regularly"
