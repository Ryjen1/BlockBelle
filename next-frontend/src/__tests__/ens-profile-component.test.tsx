import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ENSProfile from '@/components/ENSProfile'

// Mock the hooks
vi.mock('@/hooks/useENSProfile', () => ({
  useENSProfile: vi.fn(),
  useENSDisplayInfo: vi.fn(),
}))

vi.mock('wagmi', () => ({
  useAccount: vi.fn(() => ({
    address: '0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A',
    isConnected: true,
  })),
}))

describe('ENSProfile Component', () => {
  const defaultProps = {
    address: '0x742d35cc6cF6B4633F82c9B7C7C31E7c7B6C8F9A',
    size: 'md' as const,
    showBadge: true,
    showFullProfile: false,
    className: '',
    fallbackToAddress: true,
  }

  const mockProfile = {
    name: 'alice.eth',
    displayName: 'Alice Johnson',
    bio: 'Blockchain developer and ENS enthusiast',
    avatar: 'https://example.com/avatar.jpg',
    website: 'https://alice.dev',
    twitter: '@alice_dev',
    github: 'alicejohnson',
    isLoading: false,
    error: null,
    hasProfile: true,
  }

  const mockDisplayInfo = {
    displayName: 'Alice Johnson',
    avatar: 'https://example.com/avatar.jpg',
    isVerified: true,
    hasProfile: true,
    bio: 'Blockchain developer and ENS enthusiast',
    website: 'https://alice.dev',
    twitter: '@alice_dev',
    github: 'alicejohnson',
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders profile with ENS data', () => {
    const { useENSProfile, useENSDisplayInfo } = require('@/hooks/useENSProfile')
    useENSProfile.mockReturnValue({ profile: mockProfile })
    useENSDisplayInfo.mockReturnValue({ displayInfo: mockDisplayInfo })

    render(<ENSProfile {...defaultProps} />)

    expect(screen.getByText('Alice Johnson')).toBeInTheDocument()
    expect(screen.getByText('ENS')).toBeInTheDocument()
    expect(screen.getByAltText('ENS Avatar')).toBeInTheDocument()
  })

  it('renders loading state', () => {
    const { useENSProfile, useENSDisplayInfo } = require('@/hooks/useENSProfile')
    useENSProfile.mockReturnValue({ profile: { ...mockProfile, isLoading: true } })
    useENSDisplayInfo.mockReturnValue({ displayInfo: { ...mockDisplayInfo, displayName: 'Loading...' } })

    render(<ENSProfile {...defaultProps} />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
    expect(screen.getByTestId('loading-skeleton')).toBeInTheDocument()
  })

  it('renders fallback when no ENS profile', () => {
    const { useENSProfile, useENSDisplayInfo } = require('@/hooks/useENSProfile')
    const noProfile = {
      name: null,
      displayName: null,
      bio: null,
      avatar: null,
      website: null,
      twitter: null,
      github: null,
      isLoading: false,
      error: null,
      hasProfile: false,
    }
    
    useENSProfile.mockReturnValue({ profile: noProfile })
    useENSDisplayInfo.mockReturnValue({ 
      displayInfo: { 
        ...mockDisplayInfo, 
        displayName: '742d35...c8f9a',
        hasProfile: false,
      } 
    })

    render(<ENSProfile {...defaultProps} />)

    expect(screen.getByText('742d35...c8f9a')).toBeInTheDocument()
    expect(screen.queryByText('ENS')).not.toBeInTheDocument()
  })

  it('renders error state when fetch fails', () => {
    const { useENSProfile, useENSDisplayInfo } = require('@/hooks/useENSProfile')
    const errorProfile = {
      ...mockProfile,
      isLoading: false,
      error: 'Failed to fetch profile',
      hasProfile: false,
    }
    
    useENSProfile.mockReturnValue({ profile: errorProfile })
    useENSDisplayInfo.mockReturnValue({ 
      displayInfo: { 
        ...mockDisplayInfo, 
        displayName: 'Error',
        hasProfile: false,
      } 
    })

    render(<ENSProfile {...defaultProps} />)

    expect(screen.getByText('Failed to load profile')).toBeInTheDocument()
  })

  it('renders full profile with bio and links', () => {
    const { useENSProfile, useENSDisplayInfo } = require('@/hooks/useENSProfile')
    useENSProfile.mockReturnValue({ profile: mockProfile })
    useENSDisplayInfo.mockReturnValue({ displayInfo: mockDisplayInfo })

    render(<ENSProfile {...defaultProps} showFullProfile={true} />)

    expect(screen.getByText('Alice Johnson')).toBeInTheDocument()
    expect(screen.getByText('Blockchain developer and ENS enthusiast')).toBeInTheDocument()
    expect(screen.getByText('Website')).toBeInTheDocument()
    expect(screen.getByText('Twitter')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
  })

  it('handles missing bio gracefully', () => {
    const { useENSProfile, useENSDisplayInfo } = require('@/hooks/useENSProfile')
    const profileWithoutBio = { ...mockProfile, bio: null }
    const displayInfoWithoutBio = { ...mockDisplayInfo, bio: null }
    
    useENSProfile.mockReturnValue({ profile: profileWithoutBio })
    useENSDisplayInfo.mockReturnValue({ displayInfo: displayInfoWithoutBio })

    render(<ENSProfile {...defaultProps} showFullProfile={true} />)

    expect(screen.queryByText('bio')).not.toBeInTheDocument()
    expect(screen.getByText('Website')).toBeInTheDocument()
  })

  it('hides social links when not available', () => {
    const { useENSProfile, useENSDisplayInfo } = require('@/hooks/useENSProfile')
    const minimalProfile = {
      name: 'minimal.eth',
      displayName: 'Minimal User',
      bio: null,
      avatar: null,
      website: null,
      twitter: null,
      github: null,
      isLoading: false,
      error: null,
      hasProfile: true,
    }
    
    const minimalDisplayInfo = {
      ...mockDisplayInfo,
      displayName: 'Minimal User',
      bio: null,
      website: null,
      twitter: null,
      github: null,
    }
    
    useENSProfile.mockReturnValue({ profile: minimalProfile })
    useENSDisplayInfo.mockReturnValue({ displayInfo: minimalDisplayInfo })

    render(<ENSProfile {...defaultProps} showFullProfile={true} />)

    expect(screen.queryByText('Website')).not.toBeInTheDocument()
    expect(screen.queryByText('Twitter')).not.toBeInTheDocument()
    expect(screen.queryByText('GitHub')).not.toBeInTheDocument()
  })

  it('handles avatar image loading error', async () => {
    const { useENSProfile, useENSDisplayInfo } = require('@/hooks/useENSProfile')
    useENSProfile.mockReturnValue({ profile: mockProfile })
    useENSDisplayInfo.mockReturnValue({ displayInfo: mockDisplayInfo })

    render(<ENSProfile {...defaultProps} />)

    const avatarImg = screen.getByAltText('ENS Avatar')
    
    // Simulate image load error
    fireEvent.error(avatarImg)

    await waitFor(() => {
      // Should fallback to initials
      expect(screen.getByText('A')).toBeInTheDocument()
    })
  })

  it('renders different sizes correctly', () => {
    const { useENSProfile, useENSDisplayInfo } = require('@/hooks/useENSProfile')
    useENSProfile.mockReturnValue({ profile: mockProfile })
    useENSDisplayInfo.mockReturnValue({ displayInfo: mockDisplayInfo })

    const { rerender } = render(<ENSProfile {...defaultProps} size="sm" />)
    
    // Size sm should render
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument()

    rerender(<ENSProfile {...defaultProps} size="lg" />)
    
    // Size lg should render
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { useENSProfile, useENSDisplayInfo } = require('@/hooks/useENSProfile')
    useENSProfile.mockReturnValue({ profile: mockProfile })
    useENSDisplayInfo.mockReturnValue({ displayInfo: mockDisplayInfo })

    render(<ENSProfile {...defaultProps} className="custom-class" />)

    const container = screen.getByTestId('ens-profile-container')
    expect(container).toHaveClass('custom-class')
  })

  it('hides badge when showBadge is false', () => {
    const { useENSProfile, useENSDisplayInfo } = require('@/hooks/useENSProfile')
    useENSProfile.mockReturnValue({ profile: mockProfile })
    useENSDisplayInfo.mockReturnValue({ displayInfo: mockDisplayInfo })

    render(<ENSProfile {...defaultProps} showBadge={false} />)

    expect(screen.queryByText('ENS')).not.toBeInTheDocument()
  })

  it('opens external links in new tab', () => {
    const { useENSProfile, useENSDisplayInfo } = require('@/hooks/useENSProfile')
    useENSProfile.mockReturnValue({ profile: mockProfile })
    useENSDisplayInfo.mockReturnValue({ displayInfo: mockDisplayInfo })

    render(<ENSProfile {...defaultProps} showFullProfile={true} />)

    const websiteLink = screen.getByText('Website').closest('a')
    const twitterLink = screen.getByText('Twitter').closest('a')
    const githubLink = screen.getByText('GitHub').closest('a')

    expect(websiteLink).toHaveAttribute('target', '_blank')
    expect(twitterLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('target', '_blank')
    
    expect(websiteLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(twitterLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('handles missing address gracefully', () => {
    const { useENSProfile } = require('@/hooks/useENSProfile')
    useENSProfile.mockReturnValue({ profile: null })

    render(<ENSProfile {...defaultProps} address={undefined} />)

    // Component should not render when no address
    expect(screen.queryByText('Alice Johnson')).not.toBeInTheDocument()
  })

  it('does not render when connected address is missing', () => {
    const { useAccount } = require('wagmi')
    useAccount.mockReturnValue({
      address: undefined,
      isConnected: false,
    })

    const { useENSProfile } = require('@/hooks/useENSProfile')
    useENSProfile.mockReturnValue({ profile: mockProfile })

    render(<ENSProfile {...defaultProps} address={undefined} />)

    expect(screen.queryByText('Alice Johnson')).not.toBeInTheDocument()
  })

  it('shows verification badge when user is verified', () => {
    const { useENSProfile, useENSDisplayInfo } = require('@/hooks/useENSProfile')
    const verifiedDisplayInfo = {
      ...mockDisplayInfo,
      isVerified: true,
      hasProfile: true,
    }
    
    useENSProfile.mockReturnValue({ profile: mockProfile })
    useENSDisplayInfo.mockReturnValue({ displayInfo: verifiedDisplayInfo })

    render(<ENSProfile {...defaultProps} showBadge={true} />)

    expect(screen.getByText('ENS')).toBeInTheDocument()
  })

  it('handles avatar URL transformations', () => {
    const { useENSProfile, useENSDisplayInfo } = require('@/hooks/useENSProfile')
    const profileWithIpfs = {
      ...mockProfile,
      avatar: 'ipfs://QmTest123',
    }
    
    const displayInfoWithIpfs = {
      ...mockDisplayInfo,
      avatar: 'ipfs://QmTest123',
    }
    
    useENSProfile.mockReturnValue({ profile: profileWithIpfs })
    useENSDisplayInfo.mockReturnValue({ displayInfo: displayInfoWithIpfs })

    render(<ENSProfile {...defaultProps} />)

    const avatarImg = screen.getByAltText('ENS Avatar')
    expect(avatarImg).toHaveAttribute('src', 'https://example.com/avatar.jpg')
  })
})