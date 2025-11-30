import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import { useOnboardingStore } from '@/lib/store/onboarding-store';

interface TutorialStep {
    targetId: string;
    title: string;
    content: string;
    position: 'top' | 'bottom' | 'left' | 'right';
}

const tutorialSteps: TutorialStep[] = [
    {
        targetId: 'wallet-connect-btn',
        title: 'Connect Your Wallet',
        content: 'Start by connecting your crypto wallet. We support MetaMask, Rainbow, and other popular wallets.',
        position: 'bottom'
    },
    {
        targetId: 'ens-register-btn',
        title: 'Claim Your Name',
        content: 'Register your unique ENS name to be easily identifiable by other users in the community.',
        position: 'bottom'
    },
    {
        targetId: 'self-verify-btn',
        title: 'Get Verified',
        content: 'Verify your identity with Self Protocol to earn the verified badge and unlock exclusive groups.',
        position: 'top'
    },
    {
        targetId: 'chat-nav-item',
        title: 'Start Chatting',
        content: 'Once verified, jump into the chat to connect with other BlockBelle members!',
        position: 'right'
    }
];

export const TutorialOverlay: React.FC = () => {
    const { tutorialStepIndex, setTutorialStep, completeOnboarding, skipOnboarding } = useOnboardingStore();
    const [targetRect, setTargetRect] = useState<DOMRect | null>(null);

    const currentStep = tutorialSteps[tutorialStepIndex];

    useEffect(() => {
        const updatePosition = () => {
            const element = document.getElementById(currentStep.targetId);
            if (element) {
                setTargetRect(element.getBoundingClientRect());
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                // If element not found, skip to next step or complete if it's the last one
                if (tutorialStepIndex < tutorialSteps.length - 1) {
                    setTutorialStep(tutorialStepIndex + 1);
                } else {
                    completeOnboarding();
                }
            }
        };

        // Small delay to ensure DOM is ready
        const timer = setTimeout(updatePosition, 500);
        window.addEventListener('resize', updatePosition);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', updatePosition);
        };
    }, [tutorialStepIndex, currentStep.targetId, setTutorialStep, completeOnboarding]);

    if (!targetRect) return null;

    const getTooltipPosition = () => {
        if (!targetRect) return {};

        const gap = 20;
        const tooltipWidth = 320;
        const tooltipHeight = 200; // Approx

        switch (currentStep.position) {
            case 'bottom':
                return {
                    top: targetRect.bottom + gap,
                    left: targetRect.left + (targetRect.width / 2) - (tooltipWidth / 2)
                };
            case 'top':
                return {
                    top: targetRect.top - tooltipHeight - gap,
                    left: targetRect.left + (targetRect.width / 2) - (tooltipWidth / 2)
                };
            case 'right':
                return {
                    top: targetRect.top + (targetRect.height / 2) - (tooltipHeight / 2),
                    left: targetRect.right + gap
                };
            case 'left':
                return {
                    top: targetRect.top + (targetRect.height / 2) - (tooltipHeight / 2),
                    left: targetRect.left - tooltipWidth - gap
                };
            default:
                return {};
        }
    };

    const handleNext = () => {
        if (tutorialStepIndex < tutorialSteps.length - 1) {
            setTutorialStep(tutorialStepIndex + 1);
        } else {
            completeOnboarding();
        }
    };

    const handlePrev = () => {
        if (tutorialStepIndex > 0) {
            setTutorialStep(tutorialStepIndex - 1);
        }
    };

    return (
        <div className="fixed inset-0 z-50 pointer-events-none">
            {/* Dark overlay with cutout */}
            <div className="absolute inset-0 bg-gray-900/70 clip-path-transition" style={{
                clipPath: `polygon(
          0% 0%, 
          0% 100%, 
          ${targetRect.left}px 100%, 
          ${targetRect.left}px ${targetRect.top}px, 
          ${targetRect.right}px ${targetRect.top}px, 
          ${targetRect.right}px ${targetRect.bottom}px, 
          ${targetRect.left}px ${targetRect.bottom}px, 
          ${targetRect.left}px 100%, 
          100% 100%, 
          100% 0%
        )`
            }}></div>

            {/* Highlight border */}
            <motion.div
                layoutId="highlight-box"
                className="absolute border-2 border-white rounded-lg shadow-[0_0_0_4px_rgba(255,255,255,0.3)]"
                style={{
                    top: targetRect.top - 4,
                    left: targetRect.left - 4,
                    width: targetRect.width + 8,
                    height: targetRect.height + 8,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {/* Tooltip */}
            <motion.div
                className="absolute pointer-events-auto"
                style={getTooltipPosition()}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
            >
                <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-2xl w-80 relative">
                    <button
                        onClick={skipOnboarding}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="mb-4">
                        <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full mb-2">
                            Step {tutorialStepIndex + 1} of {tutorialSteps.length}
                        </span>
                        <h3 className="text-xl font-bold">{currentStep.title}</h3>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        {currentStep.content}
                    </p>

                    <div className="flex justify-between items-center">
                        <button
                            onClick={handlePrev}
                            disabled={tutorialStepIndex === 0}
                            className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${tutorialStepIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''
                                }`}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div className="flex gap-1">
                            {tutorialSteps.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-2 h-2 rounded-full ${idx === tutorialStepIndex ? 'bg-purple-600' : 'bg-gray-200'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className="flex items-center gap-1 px-4 py-2 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors text-sm"
                        >
                            {tutorialStepIndex === tutorialSteps.length - 1 ? 'Finish' : 'Next'}
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
