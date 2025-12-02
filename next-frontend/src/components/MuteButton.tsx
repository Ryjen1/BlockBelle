'use client';

import React, { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { 
  SpeakerWaveIcon, 
  SpeakerXMarkIcon,
  ExclamationTriangleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

interface MuteButtonProps {
  targetUserAddress?: string;
  targetGroupId?: string;
  muteType: 'user' | 'group';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'button' | 'icon' | 'toggle';
  className?: string;
  onMuteChange?: (isMuted: boolean) => void;
  showTooltip?: boolean;
  disabled?: boolean;
}

export default function MuteButton({
  targetUserAddress,
  targetGroupId,
  muteType,
  size = 'md',
  variant = 'button',
  className = '',
  onMuteChange,
  showTooltip = true,
  disabled = false
}: MuteButtonProps) {
  const { address, isConnected } = useAccount();
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Check current mute status
  useEffect(() => {
    if (isConnected && address && (targetUserAddress || targetGroupId)) {
      checkMuteStatus();
    }
  }, [isConnected, address, targetUserAddress, targetGroupId]);

  const checkMuteStatus = async () => {
    try {
      const params = new URLSearchParams({
        userAddress: address!,
        ...(targetUserAddress && { targetUserAddress }),
        ...(targetGroupId && { targetGroupId })
      });

      const response = await fetch(`/api/mute/check?${params}`);
      const data = await response.json();

      if (data.success) {
        setIsMuted(data.data.isMuted);
        onMuteChange?.(data.data.isMuted);
      }
    } catch (error) {
      console.error('Error checking mute status:', error);
    }
  };

  const handleMuteToggle = async () => {
    if (!isConnected || !address || isLoading) return;

    if (isMuted) {
      // Unmute directly
      await toggleMute(false);
    } else {
      // Show confirmation for muting
      setShowConfirmation(true);
    }
  };

  const toggleMute = async (mute: boolean) => {
    if (!isConnected || !address || isLoading) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/mute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userAddress: address,
          targetUserAddress,
          targetGroupId,
          mute: mute,
          muteType
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsMuted(mute);
        onMuteChange?.(mute);
        
        // Show success notification (you could integrate with your notification system)
        const message = mute ? 'Successfully muted' : 'Successfully unmuted';
        console.log(message);
        
        setShowConfirmation(false);
      } else {
        throw new Error(data.error || 'Failed to update mute status');
      }
    } catch (error) {
      console.error('Error toggling mute:', error);
      // Show error notification
      alert('Failed to update mute status. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  const buttonSizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  if (variant === 'icon') {
    return (
      <>
        <button
          onClick={handleMuteToggle}
          disabled={disabled || isLoading || !isConnected}
          className={`p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
            disabled || isLoading || !isConnected ? 'opacity-50 cursor-not-allowed' : ''
          } ${className}`}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <SpeakerXMarkIcon className={`${sizeClasses[size]} text-red-500`} />
          ) : (
            <SpeakerWaveIcon className={`${sizeClasses[size]} text-gray-500`} />
          )}
        </button>

        {showConfirmation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm mx-4">
              <div className="flex items-center mb-4">
                <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Confirm Mute
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Are you sure you want to mute this {muteType}? You won't receive notifications from them.
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  onClick={() => toggleMute(true)}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  disabled={isLoading}
                >
                  {isLoading ? 'Muting...' : 'Mute'}
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  if (variant === 'toggle') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <button
          onClick={handleMuteToggle}
          disabled={disabled || isLoading || !isConnected}
          className={`${buttonSizeClasses[size]} rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600 flex items-center space-x-2 transition-colors ${
            isMuted 
              ? 'bg-red-600 text-white border-red-600 hover:bg-red-700' 
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
          } ${disabled || isLoading || !isConnected ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isMuted ? (
            <SpeakerXMarkIcon className={sizeClasses[size]} />
          ) : (
            <SpeakerWaveIcon className={sizeClasses[size]} />
          )}
          {size !== 'sm' && (
            <span>{isMuted ? 'Muted' : 'Mute'}</span>
          )}
        </button>
        {isMuted && (
          <div className={`${buttonSizeClasses[size]} bg-red-50 dark:bg-red-900/20 border border-l-0 border-red-300 dark:border-red-600 rounded-r-md flex items-center`}>
            <ClockIcon className={`${sizeClasses[size]} text-red-600`} />
          </div>
        )}
      </div>
    );
  }

  // Default button variant
  return (
    <>
      <button
        onClick={handleMuteToggle}
        disabled={disabled || isLoading || !isConnected}
        className={`${buttonSizeClasses[size]} rounded-md border border-gray-300 dark:border-gray-600 flex items-center space-x-2 transition-colors ${
          isMuted 
            ? 'bg-red-600 text-white border-red-600 hover:bg-red-700' 
            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
        } ${disabled || isLoading || !isConnected ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        title={showTooltip ? (isMuted ? 'Click to unmute' : 'Click to mute') : undefined}
      >
        {isMuted ? (
          <SpeakerXMarkIcon className={sizeClasses[size]} />
        ) : (
          <SpeakerWaveIcon className={sizeClasses[size]} />
        )}
        <span>{isLoading ? 'Loading...' : (isMuted ? 'Unmute' : 'Mute')}</span>
      </button>

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm mx-4">
            <div className="flex items-center mb-4">
              <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Confirm Mute
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Are you sure you want to mute this {muteType}? You won't receive notifications from them.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                onClick={() => toggleMute(true)}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                disabled={isLoading}
              >
                {isLoading ? 'Muting...' : 'Mute'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}