'use client';

import { useState } from 'react';
import {
    Bars3Icon,
    XMarkIcon,
    UserPlusIcon,
    ChatBubbleLeftRightIcon,
    UserCircleIcon,
    TrophyIcon,
    BanknotesIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline';

export type TabType = 'register' | 'group' | 'main' | 'check' | 'account' | 'gooddollar' | 'quests';

interface NavbarProps {
    activeTab: TabType;
    setActiveTab: (tab: TabType) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const navItems: { id: TabType; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
        { id: 'register', label: 'Register', icon: UserPlusIcon },
        { id: 'main', label: 'Chat', icon: ChatBubbleLeftRightIcon },
        // { id: 'quests', label: 'Quests', icon: TrophyIcon }, // Hidden for release
        { id: 'gooddollar', label: 'GoodDollar', icon: BanknotesIcon },
        { id: 'account', label: 'Account', icon: UserCircleIcon },
    ];

    const handleTabClick = (tab: TabType) => {
        setActiveTab(tab);
        setIsOpen(false);
    };

    return (
        <>
            {/* Desktop Navigation - Top */}
            <nav className="hidden md:block bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-8">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleTabClick(item.id)}
                                    className={`inline-flex items-center gap-2 px-1 py-4 border-b-2 text-sm font-medium transition-all duration-200 ${activeTab === item.id
                                        ? 'border-blockbelle-purple text-blockbelle-purple'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                >
                                    <Icon className="h-5 w-5" />
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation - Bottom */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 pb-safe animate-slide-up">
                <div className="grid grid-cols-5 h-16">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeTab === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => handleTabClick(item.id)}
                                className={`flex flex-col items-center justify-center gap-1 transition-all duration-200 relative ${isActive
                                    ? 'text-blockbelle-purple'
                                    : 'text-gray-500 active:bg-gray-100'
                                    }`}
                            >
                                <Icon className={`h-6 w-6 transition-transform duration-200 ${isActive ? 'scale-110' : ''}`} />
                                <span className={`text-xs font-medium ${isActive ? 'font-semibold' : ''}`}>
                                    {item.label}
                                </span>
                                {isActive && (
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blockbelle-purple rounded-t-full" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
