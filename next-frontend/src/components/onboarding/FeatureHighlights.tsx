import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle, ShieldCheck, MessageSquare, Users } from 'lucide-react';
import { useOnboardingStore } from '@/lib/store/onboarding-store';

const features = [
    {
        id: 1,
        title: "Your Web3 Identity",
        description: "BlockBelle uses your ENS name as your primary identity. No more random hex addresses - be known by the name you own.",
        icon: <ShieldCheck className="w-32 h-32 text-pink-500" />,
        color: "from-pink-500 to-rose-500"
    },
    {
        id: 2,
        title: "Verified & Trusted",
        description: "We integrate with Self Protocol to ensure a safe environment. Verify your humanity to unlock exclusive badges and features.",
        icon: <CheckCircle className="w-32 h-32 text-purple-500" />,
        color: "from-purple-500 to-indigo-500"
    },
    {
        id: 3,
        title: "Connect & Collaborate",
        description: "Join topic-based channels, create private groups, or message peers directly. All secured by blockchain technology.",
        icon: <MessageSquare className="w-32 h-32 text-blue-500" />,
        color: "from-blue-500 to-cyan-500"
    }
];

export const FeatureHighlights: React.FC = () => {
    const { setStep } = useOnboardingStore();
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < features.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setStep('tutorial');
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 text-white overflow-hidden">
            {/* Background gradients */}
            <div className={`absolute inset-0 bg-gradient-to-br ${features[currentIndex].color} opacity-20 transition-all duration-700`}></div>
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-white/10 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-6xl w-full px-6 flex flex-col md:flex-row items-center gap-12">

                {/* Image/Icon Side */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full"></div>
                            <div className="relative bg-white/10 p-12 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl">
                                {features[currentIndex].icon}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 space-y-8">
                    <div className="space-y-4">
                        <div className="flex gap-2 mb-4">
                            {features.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'
                                        }`}
                                />
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-4xl md:text-5xl font-bold mb-4">{features[currentIndex].title}</h2>
                                <p className="text-xl text-gray-300 leading-relaxed">{features[currentIndex].description}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex items-center gap-4 pt-4">
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className={`p-4 rounded-full border border-white/20 transition-all ${currentIndex === 0
                                    ? 'opacity-30 cursor-not-allowed'
                                    : 'hover:bg-white/10 hover:border-white/40'
                                }`}
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="flex-1 bg-white text-gray-900 h-14 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            {currentIndex === features.length - 1 ? "Start Tutorial" : "Next Feature"}
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    <button
                        onClick={() => setStep('tutorial')}
                        className="text-sm text-gray-400 hover:text-white transition-colors w-full text-center"
                    >
                        Skip introduction
                    </button>
                </div>
            </div>
        </div>
    );
};
