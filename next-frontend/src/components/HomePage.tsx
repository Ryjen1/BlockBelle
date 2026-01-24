'use client';

import { useState, useCallback, useEffect } from 'react';
import Register from '@/components/Register';
import GroupChat from '@/components/GroupChat';
import MainChat from '@/components/MainChat';
import UserProfile from '@/components/UserProfile';
import RegistrationCheck from '@/components/RegistrationCheck';
import SimpleOnboarding from '@/components/SimpleOnboarding';
import Account from '@/components/Account';
import GoodDollarClaim from '@/components/GoodDollarClaim';
import EngagementRewardsClaim from '@/components/EngagementRewardsClaim';
import GoodDollarInfoBanner from '@/components/GoodDollarInfoBanner';
// import QuestsPage from '@/components/QuestsPage'; // Hidden for release
import Navbar, { type TabType } from '@/components/Navbar';
import Image from 'next/image';
import { useEngagementRewards } from '@/hooks/useEngagementRewards';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabType>('register');
  const [_hasRegistered, _setHasRegistered] = useState(false);
  const [_showRegistrationCheck, _setShowRegistrationCheck] = useState(false);
  const [showInfoBanner, setShowInfoBanner] = useState(false);

  // Engagement rewards hook
  const { inviterAddress, setInviterAddress } = useEngagementRewards();

  // Extract ref parameter from URL on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const urlParams = new URLSearchParams(window.location.search);
    const refParam = urlParams.get('ref');

    if (refParam && refParam.startsWith('0x')) {
      setInviterAddress(refParam as `0x${string}`);
      // Show info banner when user arrives with referral link
      setShowInfoBanner(true);
    }
  }, [setInviterAddress]);

  const handleRegistrationSuccess = useCallback(() => {
    _setHasRegistered(true);
    setActiveTab('main');
  }, []);

  const handleStartChatting = useCallback(() => {
    console.log('Start Chatting button clicked');
    _setShowRegistrationCheck(true);
    setActiveTab('check');
  }, []);

  const handleRegistrationCheckComplete = useCallback(() => {
    _setShowRegistrationCheck(false);
    setActiveTab('main');
  }, []);

  const handleRegistrationRequired = useCallback(() => {
    _setShowRegistrationCheck(false);
    setActiveTab('register');
  }, []);

  const handleOnboardingComplete = useCallback(() => {
    console.log('SimpleOnboarding onComplete called - DISABLED');
    // Disabled auto-navigation to prevent interference with user clicks
    // setActiveTab('main');
  }, []);

  const handleOnboardingRegister = useCallback(() => {
    console.log('SimpleOnboarding onRegister called');
    setActiveTab('register');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto mobile-container">
          <div className="flex justify-between items-center py-4 sm:py-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient-blockbelle">Chata-Bella</h1>
            <div className="flex items-center gap-2 sm:gap-4">
              <UserProfile />
              <SimpleOnboarding
                onComplete={handleOnboardingComplete}
                onRegister={handleOnboardingRegister}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="relative bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <Image
          src="/hero-image.jpg"
          alt="Chata-Bella Hero"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="relative max-w-7xl mx-auto mobile-container py-8 sm:py-12">
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
              Chata-Bella
            </h1>
            <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto leading-relaxed px-4">
              Web3 chat for women in blockchain
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8 px-4">
              <button
                onClick={handleStartChatting}
                className="btn-touch bg-pink-500 hover:bg-pink-600 text-white shadow-lg animate-scale-in"
              >
                Start Chatting
              </button>
              <button className="btn-touch border-2 border-white text-white hover:bg-white hover:text-purple-700 animate-scale-in">
                View Demo
              </button>
            </div>
            {/* Features - Compact on mobile, detailed on desktop */}
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto px-4">
              <div className="text-center">
                <div className="bg-pink-500/30 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                  <span className="text-xl sm:text-2xl">👩‍💻</span>
                </div>
                <h3 className="text-xs sm:text-sm font-semibold mb-1">ENS Verified</h3>
                <p className="text-xs text-white/80 hidden sm:block">Authentic conversations</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500/30 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                  <span className="text-xl sm:text-2xl">👥</span>
                </div>
                <h3 className="text-xs sm:text-sm font-semibold mb-1">Group Chats</h3>
                <p className="text-xs text-white/80 hidden sm:block">DeFi, NFTs, DAOs</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-500/30 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                  <span className="text-xl sm:text-2xl">💬</span>
                </div>
                <h3 className="text-xs sm:text-sm font-semibold mb-1">Private Messages</h3>
                <p className="text-xs text-white/80 hidden sm:block">Secure on-chain storage</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-7xl mx-auto mobile-container py-6 pb-24 md:pb-6">
        {activeTab === 'register' && (
          <div className="animate-fade-in">
            <Register onRegistrationSuccess={handleRegistrationSuccess} />
          </div>
        )}
        {activeTab === 'group' && (
          <div className="animate-fade-in">
            <GroupChat />
          </div>
        )}

        {activeTab === 'main' && (
          <div className="animate-fade-in">
            <MainChat />
          </div>
        )}
        {activeTab === 'check' && (
          <div className="animate-fade-in">
            <RegistrationCheck
              onRegistered={handleRegistrationCheckComplete}
              onNotRegistered={handleRegistrationRequired}
            />
          </div>
        )}
        {activeTab === 'account' && (
          <div className="animate-fade-in">
            <Account />
          </div>
        )}
        {activeTab === 'gooddollar' && (
          <div className="space-y-6 animate-fade-in">
            {/* Info banner explaining verification */}
            {showInfoBanner && inviterAddress && (
              <GoodDollarInfoBanner showByDefault={false} />
            )}
            {/* Show Engagement Rewards if user has inviter */}
            {inviterAddress && <EngagementRewardsClaim />}
            <GoodDollarClaim />
          </div>
        )}
        {/* {activeTab === 'quests' && (
          <div className="animate-fade-in">
            <QuestsPage />
          </div>
        )} */}
      </main>
    </div>
  );
}