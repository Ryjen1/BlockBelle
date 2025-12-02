'use client';

import React, { useState } from 'react';
import { useNotifications } from '@/contexts/NotificationContext';
import { useTranslations } from 'next-intl';
import LanguageToggle from './LanguageToggle';

export default function NotificationSettings() {
  const t = useTranslations('notifications');
  const {
    permission,
    isSupported,
    isEnabled,
    settings,
    updateSettings,
    requestPermission,
    testNotification,
    clearAllNotifications,
  } = useNotifications();

  const [isExpanded, setIsExpanded] = useState(false);
  const [isTesting, setIsTesting] = useState(false);

  const handleToggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSettingChange = (key: keyof typeof settings, value: boolean) => {
    updateSettings({ [key]: value });
  };

  const handleRequestPermission = async () => {
    await requestPermission();
  };

  const handleTestNotification = async () => {
    setIsTesting(true);
    try {
      await testNotification();
    } finally {
      setIsTesting(false);
    }
  };

  const handleClearNotifications = () => {
    clearAllNotifications();
  };

  if (!isSupported) {
    return (
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <div className="flex items-center">
          <div className="text-yellow-600 dark:text-yellow-400 mr-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
              Notifications Not Supported
            </h3>
            <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
              Your browser doesn't support push notifications.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/20">
      {/* Header */}
      <div 
        className="p-4 cursor-pointer flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
        onClick={handleToggleExpanded}
      >
        <div className="flex items-center">
          <div className="text-gray-600 dark:text-gray-400 mr-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-2a3 3 0 00-3-3H9m1 6V9a3 3 0 013-3h2a3 3 0 013 3v6z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Notification Settings
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {permission === 'granted' && isEnabled 
                ? 'Push notifications are enabled'
                : permission === 'denied'
                ? 'Notifications blocked'
                : 'Notifications disabled'
              }
            </p>
          </div>
        </div>
        <div className="text-gray-400 dark:text-gray-500">
          {isExpanded ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-4 pb-4 border-t border-gray-200 dark:border-gray-700">
          <div className="mt-4 space-y-4">
            {/* Permission Status */}
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Permission Status
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {permission === 'granted' 
                    ? 'Notifications are allowed'
                    : permission === 'denied'
                    ? 'Notifications are blocked'
                    : 'Click to allow notifications'
                  }
                </p>
              </div>
              <div className="flex items-center space-x-2">
                {permission !== 'granted' && (
                  <button
                    onClick={handleRequestPermission}
                    className="px-3 py-1 text-xs bg-indigo-600 dark:bg-indigo-700 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-200"
                  >
                    Enable
                  </button>
                )}
                <div className={`w-2 h-2 rounded-full ${
                  permission === 'granted' 
                    ? 'bg-green-500' 
                    : permission === 'denied' 
                    ? 'bg-red-500' 
                    : 'bg-yellow-500'
                }`}></div>
              </div>
            </div>

            {/* Main Settings */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                General Settings
              </h4>

              {/* Enable Notifications */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Enable Notifications
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Receive push notifications for new messages
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.enabled}
                    onChange={(e) => handleSettingChange('enabled', e.target.checked)}
                    className="sr-only peer"
                    disabled={permission !== 'granted'}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                </label>
              </div>

              {/* Sound */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Sound Alerts
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Play notification sound with alerts
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.soundEnabled}
                    onChange={(e) => handleSettingChange('soundEnabled', e.target.checked)}
                    className="sr-only peer"
                    disabled={!settings.enabled || permission !== 'granted'}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                </label>
              </div>

              {/* Show Preview */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Message Preview
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Show message content in notifications
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.showPreview}
                    onChange={(e) => handleSettingChange('showPreview', e.target.checked)}
                    className="sr-only peer"
                    disabled={!settings.enabled || permission !== 'granted'}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            </div>

            {/* Language Settings */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                {t('language')}
              </h4>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {t('language')}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Select your preferred language
                  </p>
                </div>
                <LanguageToggle />
              </div>
            </div>

            {/* Chat Type Settings */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                Chat Type Settings
              </h4>

              {/* Group Chat Notifications */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Group Chat Notifications
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Get notified about group messages
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.groupChatEnabled}
                    onChange={(e) => handleSettingChange('groupChatEnabled', e.target.checked)}
                    className="sr-only peer"
                    disabled={!settings.enabled || permission !== 'granted'}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                </label>
              </div>

              {/* Private Chat Notifications */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Private Chat Notifications
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Get notified about private messages
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.privateChatEnabled}
                    onChange={(e) => handleSettingChange('privateChatEnabled', e.target.checked)}
                    className="sr-only peer"
                    disabled={!settings.enabled || permission !== 'granted'}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-3">
                <button
                  onClick={handleTestNotification}
                  disabled={permission !== 'granted' || isTesting || !settings.enabled}
                  className="flex-1 px-4 py-2 bg-indigo-600 dark:bg-indigo-700 text-white text-sm font-medium rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {isTesting ? 'Testing...' : 'Test Notification'}
                </button>
                <button
                  onClick={handleClearNotifications}
                  className="px-4 py-2 bg-gray-600 dark:bg-gray-700 text-white text-sm font-medium rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}