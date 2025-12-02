#!/bin/bash

# E2E Test Runner Script for BlockBelle
# This script provides convenient commands for running E2E tests

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ and try again."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm and try again."
    exit 1
fi

print_status "Starting BlockBelle E2E Test Suite..."

# Function to install dependencies
install_deps() {
    print_status "Installing dependencies..."
    npm install
    print_success "Dependencies installed"
}

# Function to install Playwright browsers
install_browsers() {
    print_status "Installing Playwright browsers..."
    npx playwright install --with-deps
    print_success "Playwright browsers installed"
}

# Function to run all tests
run_all_tests() {
    print_status "Running all E2E tests..."
    npm run test:e2e
}

# Function to run tests with UI
run_ui_tests() {
    print_status "Running E2E tests with UI mode..."
    npm run test:e2e:ui
}

# Function to run headed tests
run_headed_tests() {
    print_status "Running E2E tests in headed mode..."
    npm run test:e2e:headed
}

# Function to run specific test category
run_category_tests() {
    local category=$1
    if [ -z "$category" ]; then
        print_error "Please specify a test category: chat, auth, security"
        exit 1
    fi
    
    print_status "Running $category tests..."
    npx playwright test tests/$category/
}

# Function to run single test file
run_single_test() {
    local test_file=$1
    if [ -z "$test_file" ]; then
        print_error "Please specify a test file path"
        exit 1
    fi
    
    print_status "Running test: $test_file"
    npx playwright test $test_file
}

# Function to show test report
show_report() {
    print_status "Generating test report..."
    npm run e2e:show-report
}

# Function to run specific user type tests
run_user_type_tests() {
    local user_type=$1
    if [ -z "$user_type" ]; then
        print_error "Please specify user type: verified, unverified"
        exit 1
    fi
    
    print_status "Running tests for $user_type users..."
    npx playwright test --grep="$user_type"
}

# Function to run security tests only
run_security_tests() {
    print_status "Running security-focused tests..."
    npx playwright test tests/security/
}

# Function to clean test artifacts
clean_artifacts() {
    print_status "Cleaning test artifacts..."
    rm -rf test-results/
    rm -rf playwright-report/
    rm -rf playbackwright-report/
    print_success "Test artifacts cleaned"
}

# Function to check test environment
check_environment() {
    print_status "Checking test environment..."
    
    # Check Node.js version
    node_version=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$node_version" -lt 18 ]; then
        print_warning "Node.js version $node_version detected. Recommended: Node.js 18+"
    else
        print_success "Node.js version: $(node -v)"
    fi
    
    # Check if Playwright is installed
    if npx playwright --version &> /dev/null; then
        print_success "Playwright version: $(npx playwright --version)"
    else
        print_warning "Playwright not found. Run with --install-browsers to install."
    fi
    
    # Check for test environment file
    if [ -f ".env" ]; then
        print_success "Environment file found"
    else
        print_warning "No .env file found. Copy .env.example to .env and configure."
    fi
}

# Function to show usage
show_usage() {
    echo "BlockBelle E2E Test Runner"
    echo ""
    echo "Usage: $0 [command] [options]"
    echo ""
    echo "Commands:"
    echo "  --install-deps          Install all dependencies"
    echo "  --install-browsers      Install Playwright browsers"
    echo "  --all                   Run all E2E tests"
    echo "  --ui                    Run tests with UI mode"
    echo "  --headed                Run tests in headed mode"
    echo "  --category <type>       Run tests for specific category (chat|auth|security)"
    echo "  --single <file>         Run single test file"
    echo "  --verified              Run tests for verified users"
    echo "  --unverified            Run tests for unverified users"
    echo "  --security              Run security-focused tests"
    echo "  --report                Show test report"
    echo "  --clean                 Clean test artifacts"
    echo "  --check                 Check test environment"
    echo "  --help                  Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 --install-deps"
    echo "  $0 --install-browsers"
    echo "  $0 --all"
    echo "  $0 --category chat"
    echo "  $0 --verified"
    echo "  $0 --security"
    echo "  $0 --single tests/chat/ens-verified-chat.spec.ts"
}

# Parse command line arguments
case "${1:-}" in
    --install-deps)
        install_deps
        ;;
    --install-browsers)
        install_browsers
        ;;
    --all)
        run_all_tests
        ;;
    --ui)
        run_ui_tests
        ;;
    --headed)
        run_headed_tests
        ;;
    --category)
        run_category_tests "$2"
        ;;
    --single)
        run_single_test "$2"
        ;;
    --verified)
        run_user_type_tests "verified"
        ;;
    --unverified)
        run_user_type_tests "unverified"
        ;;
    --security)
        run_security_tests
        ;;
    --report)
        show_report
        ;;
    --clean)
        clean_artifacts
        ;;
    --check)
        check_environment
        ;;
    --help|-h)
        show_usage
        ;;
    "")
        print_warning "No command specified. Run with --help for usage information."
        show_usage
        ;;
    *)
        print_error "Unknown command: $1"
        show_usage
        exit 1
        ;;
esac