#!/usr/bin/env python3
"""
BlockBelle Issue Labeling Automation Script
This script helps apply help wanted labels to existing issues.
"""

import os
import sys
import requests
import json
from typing import List, Dict, Any
from datetime import datetime, timedelta

class IssueLabeler:
    def __init__(self, token: str, owner: str, repo: str):
        self.token = token
        self.owner = owner
        self.repo = repo
        self.api_url = "https://api.github.com"
        self.headers = {
            "Authorization": f"token {token}",
            "Accept": "application/vnd.github.v3+json",
            "Content-Type": "application/json"
        }
    
    def get_open_issues(self) -> List[Dict[str, Any]]:
        """Fetch all open issues (excluding pull requests)."""
        issues_url = f"{self.api_url}/repos/{self.owner}/{self.repo}/issues"
        params = {
            "state": "open",
            "per_page": 100
        }
        
        try:
            response = requests.get(issues_url, headers=self.headers, params=params)
            response.raise_for_status()
            issues = response.json()
            # Filter out pull requests (they appear in issues endpoint)
            return [issue for issue in issues if not issue.get('pull_request')]
        except requests.exceptions.RequestException as e:
            print(f"❌ Error fetching issues: {e}")
            return []
    
    def analyze_issue_for_labels(self, issue: Dict[str, Any]) -> List[str]:
        """Analyze an issue and determine appropriate labels."""
        title = issue.get('title', '').lower()
        body = issue.get('body', '').lower()
        labels = [label['name'] for label in issue.get('labels', [])]
        
        suggested_labels = []
        
        # Check for existing help wanted related labels
        if any(existing in labels for existing in ['help wanted', 'good first issue', 'enhancement', 'documentation']):
            return suggested_labels  # Already labeled
        
        # Keywords for different label categories
        frontend_keywords = ['ui', 'ux', 'frontend', 'react', 'nextjs', 'component', 'interface', 'design', 'css', 'tailwind']
        backend_keywords = ['api', 'backend', 'server', 'database', 'postgres', 'neon']
        contract_keywords = ['solidity', 'contract', 'smart', 'blockchain', 'foundry', 'whispr']
        doc_keywords = ['doc', 'readme', 'guide', 'tutorial', 'documentation', 'readme']
        testing_keywords = ['test', 'testing', 'unit', 'integration', 'e2e', 'coverage']
        bug_keywords = ['bug', 'error', 'fix', 'broken', 'issue', 'problem']
        enhancement_keywords = ['feature', 'enhancement', 'improve', 'add', 'implement', 'support']
        
        # Analyze content
        content = f"{title} {body}"
        
        # Determine labels based on content
        if any(keyword in content for keyword in frontend_keywords):
            suggested_labels.append('frontend')
        
        if any(keyword in content for keyword in backend_keywords):
            suggested_labels.append('backend')
        
        if any(keyword in content for keyword in contract_keywords):
            suggested_labels.append('smart-contracts')
        
        if any(keyword in content for keyword in doc_keywords):
            suggested_labels.append('documentation')
        
        if any(keyword in content for keyword in testing_keywords):
            suggested_labels.append('testing')
        
        if any(keyword in content for keyword in bug_keywords):
            suggested_labels.append('bug')
        
        if any(keyword in content for keyword in enhancement_keywords):
            suggested_labels.append('enhancement')
        
        # Determine if it's suitable for help wanted
        # Simple heuristics: short issues, documentation, simple enhancements
        issue_age = (datetime.now() - datetime.fromisoformat(issue['created_at'][:-1])).days
        content_length = len(body) if body else 0
        
        if (suggested_labels and 
            (issue_age > 7 or 'documentation' in suggested_labels) and
            ('enhancement' in suggested_labels or 'bug' in suggested_labels)):
            suggested_labels.append('help wanted')
        
        # Good first issue criteria
        if (content_length < 500 and 
            ('documentation' in suggested_labels or 'enhancement' in suggested_labels) and
            not any(expert in suggested_labels for expert in ['smart-contracts', 'backend']) and
            not any(word in content for word in ['security', 'complex', 'advanced'])):
            suggested_labels.append('good first issue')
        
        # Remove duplicates while preserving order
        return list(dict.fromkeys(suggested_labels))
    
    def add_labels_to_issue(self, issue_number: int, labels: List[str]) -> bool:
        """Add labels to an issue."""
        if not labels:
            return True  # No labels to add
        
        url = f"{self.api_url}/repos/{self.owner}/{self.repo}/issues/{issue_number}/labels"
        
        try:
            response = requests.post(url, headers=self.headers, json=labels)
            response.raise_for_status()
            print(f"✅ Added labels {labels} to issue #{issue_number}")
            return True
        except requests.exceptions.RequestException as e:
            print(f"❌ Error adding labels to issue #{issue_number}: {e}")
            return False
    
    def process_all_issues(self) -> Dict[str, int]:
        """Process all open issues and suggest labels."""
        issues = self.get_open_issues()
        stats = {
            'total_issues': len(issues),
            'labeled': 0,
            'suggestions': 0,
            'errors': 0
        }
        
        print(f"📋 Analyzing {len(issues)} open issues...")
        print()
        
        for issue in issues:
            issue_number = issue['number']
            title = issue['title']
            suggested_labels = self.analyze_issue_for_labels(issue)
            
            if suggested_labels:
                stats['suggestions'] += 1
                print(f"🔍 Issue #{issue_number}: {title}")
                print(f"   Suggested labels: {suggested_labels}")
                
                # Ask for confirmation before applying (if running interactively)
                if len(sys.argv) > 4 and sys.argv[4].lower() == '--auto':
                    # Auto-apply labels
                    if self.add_labels_to_issue(issue_number, suggested_labels):
                        stats['labeled'] += 1
                    else:
                        stats['errors'] += 1
                else:
                    # Manual confirmation
                    response = input(f"   Apply these labels? (y/n): ").lower()
                    if response == 'y':
                        if self.add_labels_to_issue(issue_number, suggested_labels):
                            stats['labeled'] += 1
                        else:
                            stats['errors'] += 1
                print()
            else:
                print(f"⏭️  Issue #{issue_number}: {title} - No suggestions")
        
        return stats

def main():
    if len(sys.argv) < 4:
        print("Usage: python label-issues.py <GITHUB_TOKEN> <REPO_OWNER> <REPO_NAME> [--auto]")
        print("Example: python label-issues.py ghp_xxx Ryjen1 BlockBelle --auto")
        sys.exit(1)
    
    token = sys.argv[1]
    owner = sys.argv[2]
    repo = sys.argv[3]
    auto_mode = len(sys.argv) > 4 and sys.argv[4] == '--auto'
    
    labeler = IssueLabeler(token, owner, repo)
    stats = labeler.process_all_issues()
    
    print("📊 Processing Summary:")
    print(f"   Total issues analyzed: {stats['total_issues']}")
    print(f"   Issues with suggestions: {stats['suggestions']}")
    print(f"   Labels applied: {stats['labeled']}")
    print(f"   Errors: {stats['errors']}")
    
    if not auto_mode:
        print()
        print("💡 Tip: Use --auto flag to automatically apply all suggestions")
    
    print()
    print("✅ Issue labeling analysis complete!")
    print("📝 Next steps:")
    print("   1. Review and apply the suggested labels manually")
    print("   2. Create new issues using the templates in docs/help-wanted-labels-guide.md")
    print("   3. Set up the GitHub Actions workflow for automated labeling")

if __name__ == "__main__":
    main()
