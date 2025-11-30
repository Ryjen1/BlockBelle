import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type OnboardingStep = 'welcome' | 'features' | 'tutorial' | 'completed';

interface OnboardingState {
  // State
  currentStep: OnboardingStep;
  tutorialStepIndex: number;
  isCompleted: boolean;
  isVisible: boolean;
  
  // Actions
  setStep: (step: OnboardingStep) => void;
  setTutorialStep: (index: number) => void;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
  skipOnboarding: () => void;
  showOnboarding: () => void;
  hideOnboarding: () => void;
}

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      currentStep: 'welcome',
      tutorialStepIndex: 0,
      isCompleted: false,
      isVisible: true,

      setStep: (step) => set({ currentStep: step }),
      
      setTutorialStep: (index) => set({ tutorialStepIndex: index }),
      
      completeOnboarding: () => set({ 
        isCompleted: true, 
        isVisible: false,
        currentStep: 'completed' 
      }),
      
      resetOnboarding: () => set({ 
        currentStep: 'welcome', 
        tutorialStepIndex: 0, 
        isCompleted: false,
        isVisible: true
      }),
      
      skipOnboarding: () => set({ 
        isCompleted: true, 
        isVisible: false,
        currentStep: 'completed'
      }),

      showOnboarding: () => set({ isVisible: true }),
      hideOnboarding: () => set({ isVisible: false }),
    }),
    {
      name: 'blockbelle-onboarding-storage',
      partialize: (state) => ({ isCompleted: state.isCompleted }), // Only persist completion status
    }
  )
);
