import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Shield, Users } from 'lucide-react';
import { useOnboardingStore } from '@/lib/store/onboarding-store';

export const WelcomeScreen: React.FC = () => {
    const { setStep } = useOnboardingStore();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>

            <motion.div
                className="relative z-10 max-w-4xl w-full px-6 py-12 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="mb-8 flex justify-center">
                    <div className="relative">
                        <div className="absolute -inset-4 rounded-full bg-pink-500 opacity-30 blur-xl animate-pulse"></div>
                        <img
                            src="/logo.png"
                            alt="BlockBelle Logo"
                            className="relative h-24 w-24 object-contain"
                            onError={(e) => {
                                // Fallback if logo doesn't exist
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement!.innerHTML += '<span class="text-6xl">👑</span>';
                            }}
                        />
                    </div>
                </motion.div>

                <motion.h1 variants={itemVariants} className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
                    Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">BlockBelle</span>
                </motion.h1>

                <motion.p variants={itemVariants} className="mb-12 text-xl text-gray-300 md:text-2xl max-w-2xl mx-auto">
                    The elegant web3 chat dApp where women in blockchain connect, collaborate, and share.
                </motion.p>

                <motion.div variants={itemVariants} className="grid gap-8 md:grid-cols-3 mb-12 text-left">
                    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-lg border border-white/10 hover:bg-white/20 transition-colors">
                        <Shield className="h-10 w-10 text-pink-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Verified Identity</h3>
                        <p className="text-gray-300">Connect with confidence using ENS and Self Protocol verification.</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-lg border border-white/10 hover:bg-white/20 transition-colors">
                        <MessageCircle className="h-10 w-10 text-purple-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Secure Chat</h3>
                        <p className="text-gray-300">End-to-end encrypted messaging for private and group conversations.</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-lg border border-white/10 hover:bg-white/20 transition-colors">
                        <Users className="h-10 w-10 text-indigo-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Community</h3>
                        <p className="text-gray-300">Join exclusive groups and connect with like-minded builders.</p>
                    </div>
                </motion.div>

                <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setStep('features')}
                    className="group relative inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-purple-900 shadow-xl hover:bg-gray-50 transition-all"
                >
                    Start Your Journey
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
            </motion.div>
        </div>
    );
};
