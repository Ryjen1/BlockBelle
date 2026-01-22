'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export type TabType = 'register' | 'group' | 'main' | 'check' | 'account' | 'gooddollar' | 'quests';

interface NavbarProps {
    activeTab: TabType;
    setActiveTab: (tab: TabType) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const navItems: { id: TabType; label: string }[] = [
        { id: 'register', label: 'Register' },
        { id: 'group', label: 'Group Chat' },
        { id: 'main', label: 'Chat App' },
        { id: 'account', label: 'Account' },
        { id: 'quests', label: 'Quests' },
        { id: 'gooddollar', label: 'GoodDollar UBI' },
    ];

    const handleTabClick = (tab: TabType) => {
        setActiveTab(tab);
        setIsOpen(false);
    };

    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        {/* Logo or Brand if needed in Nav, mostly kept clean as per original design */}
                        <div className="flex-shrink-0 flex items-center md:hidden">
                            <span className="font-bold text-blockbelle-pink">Menu</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleTabClick(item.id)}
                                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeTab === item.id
                                    ? 'border-indigo-500 text-indigo-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleTabClick(item.id)}
                                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-full text-left ${activeTab === item.id
                                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
