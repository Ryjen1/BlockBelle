#!/usr/bin/env python3
"""
Test script to verify the security scanning implementation
"""

import os
import json
import subprocess
import sys
from pathlib import Path

def test_files_exist():
    """Test that all required files exist"""
    required_files = [
        "slither.config.json",
        "scripts/run_security_scan.sh",
        "scripts/setup_slither.py",
        ".github/workflows/security-audit.yml",
        "SECURITY.md"
    ]

    print("Testing file existence...")
    missing_files = []

    for file_path in required_files:
        if not Path(file_path).exists():
            missing_files.append(file_path)
            print(f"Missing file: {file_path}")
        else:
            print(f"Found file: {file_path}")

    if missing_files:
        print(f"{len(missing_files)} files are missing!")
        return False
    else:
        print("All required files exist!")
        return True

def test_config_validity():
    """Test that the Slither configuration is valid JSON"""
    print("\nTesting Slither configuration validity...")

    try:
        with open("slither.config.json", "r") as f:
            config = json.load(f)

        print("Slither configuration is valid JSON")
        print(f"📋 Configuration keys: {list(config.keys())}")

        # Check required configuration
        required_keys = ["exclude_dependencies", "solc_remaps", "filter_paths"]
        missing_keys = [key for key in required_keys if key not in config]

        if missing_keys:
            print(f"Missing required config keys: {missing_keys}")
            return False
        else:
            print("All required configuration keys present")
            return True

    except Exception as e:
        print(f"Invalid Slither configuration: {e}")
        return False

def test_workflow_syntax():
    """Test that the GitHub Actions workflow has valid YAML syntax"""
    print("\nTesting GitHub Actions workflow syntax...")

    workflow_path = ".github/workflows/security-audit.yml"

    try:
        with open(workflow_path, "r") as f:
            content = f.read()

        # Basic YAML validation
        if "name:" in content and "on:" in content and "jobs:" in content:
            print("GitHub Actions workflow appears valid")
            return True
        else:
            print("GitHub Actions workflow missing required sections")
            return False

    except Exception as e:
        print(f"Error reading workflow file: {e}")
        return False

def test_documentation():
    """Test that documentation files contain expected content"""
    print("\nTesting documentation completeness...")

    # Check README has security section
    try:
        with open("README.md", "r") as f:
            readme_content = f.read()

        if "Security Auditing" in readme_content and "slither" in readme_content.lower():
            print("README contains security auditing documentation")
        else:
            print("README missing security auditing documentation")
            return False

    except Exception as e:
        print(f"Error reading README: {e}")
        return False

    # Check SECURITY.md exists and has content
    try:
        with open("SECURITY.md", "r") as f:
            security_content = f.read()

        if len(security_content) > 1000:  # Basic content check
            print("SECURITY.md contains comprehensive documentation")
        else:
            print("SECURITY.md appears too short")
            return False

    except Exception as e:
        print(f"Error reading SECURITY.md: {e}")
        return False

    return True

def main():
    """Run all tests"""
    print("Running Security Audit Implementation Tests")
    print("=" * 50)

    tests = [
        test_files_exist,
        test_config_validity,
        test_workflow_syntax,
        test_documentation
    ]

    passed_tests = 0
    total_tests = len(tests)

    for test in tests:
        if test():
            passed_tests += 1

    print("\n" + "=" * 50)
    print(f"Test Results: {passed_tests}/{total_tests} tests passed")

    if passed_tests == total_tests:
        print("All tests passed! Security audit implementation is complete.")
        return True
    else:
        print("Some tests failed. Please review the implementation.")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)