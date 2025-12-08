'use client';

import { useEffect, useRef } from 'react';
import '@goodsdks/ui-components';

// Declare the custom element for TypeScript
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'claim-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
                environment?: 'production' | 'staging' | 'development';
            }, HTMLElement>;
        }
    }
}

export default function GoodDollarClaim() {
    const buttonRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Configure the claim-button via its DOM property
        const configureButton = async () => {
            // Wait for custom element to be defined
            await customElements.whenDefined('claim-button');

            const element = buttonRef.current;
            if (element) {
                // @ts-ignore - The property exists on the web component
                element.appkitConfig = {
                    projectId: '71dd03d057d89d0af68a4c627ec59694', // Using a default/example ID if user didn't provide one, or request one? 
                    // Reusing the one from their example for now or a generic one. 
                    // Ideally user should provide their own Reown/WalletConnect project ID. 
                    // I'll stick to a potentially shared one or the example one from docs for this task unless user provided one.
                    // In the provided docs example, they used "71dd03d057d89d0af68a4c627ec59694". Good to reuse for now.
                    metadata: {
                        name: 'BlockBelle',
                        description: 'BlockBelle - Women in Web3',
                        url: 'https://blockbelle.com', // Placeholder URL
                        icons: ['https://i.postimg.cc/mrmVf9hm/self.png'], // Reusing the Self logo for now
                    },
                };
            }
        };

        configureButton();
    }, []);

    return (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full text-white font-bold text-xl shadow-md">
                    G$
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900">GoodDollar UBI</h3>
                    <p className="text-sm text-gray-600">Claim free G$ tokens daily</p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg border border-green-100 min-h-[200px]">
                {/* The Web Component */}
                <claim-button
                    ref={buttonRef}
                    environment="production"
                    className="w-full"
                />
            </div>

            <div className="mt-4 pt-4 border-t border-green-100 text-center">
                <p className="text-xs text-gray-500">
                    Not sure what this is? <a href="https://gooddollar.org" target="_blank" className="underline hover:text-[#00D09C]">Learn about UBI</a>
                </p>
                <p className="text-xs text-gray-400 mt-1">
                    Referral: <a href="https://wallet.gooddollar.org/?inviteCode=2SKx7jT3C4" target="_blank" className="font-mono bg-gray-100 px-1 rounded hover:text-[#00D09C] transition-colors">2SKx7jT3C4</a>
                </p>
            </div>
        </div>
    );
}
