'use client';

import { useLocale } from 'next-intl';
import { routing, useRouter } from '@/i18n/routing';
import { useState } from 'react';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    // Update the URL with the new locale
    router.replace({ pathname: window.location.pathname }, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        aria-label="Select language"
        title="Select language"
      >
        {/* Current language flag */}
        <span className="text-lg">{currentLanguage.flag}</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-20">
            <div className="py-1">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2 ${
                    language.code === locale 
                      ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span className="text-base">{language.flag}</span>
                  <span>{language.name}</span>
                  {language.code === locale && (
                    <span className="ml-auto text-indigo-500">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}