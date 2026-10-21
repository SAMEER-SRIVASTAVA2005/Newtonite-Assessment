import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export interface OnboardingState {
  selectedGoal: string | null;
  checklistReviewed: boolean;
  verificationStatus: 'idle' | 'processing' | 'success' | 'additionalInfo' | 'failed';
  currentStep: number; // 0-4 for the five onboarding screens
}

interface OnboardingContextValue {
  state: OnboardingState;
  setGoal: (goal: string | null) => void;
  setChecklistReviewed: (reviewed: boolean) => void;
  setVerificationStatus: (status: OnboardingState['verificationStatus']) => void;
  setCurrentStep: (step: number) => void;
  resetOnboarding: () => void;
}

const STORAGE_KEY = 'sprout_onboarding_v1';

const defaultState: OnboardingState = {
  selectedGoal: null,
  checklistReviewed: false,
  verificationStatus: 'idle',
  currentStep: 0,
};

const OnboardingContext = createContext<OnboardingContextValue>({
  state: defaultState,
  setGoal: () => undefined,
  setChecklistReviewed: () => undefined,
  setVerificationStatus: () => undefined,
  setCurrentStep: () => undefined,
  resetOnboarding: () => undefined,
});

function loadState(): OnboardingState {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) return { ...defaultState, ...JSON.parse(raw) };
  } catch {
    // ignore parse errors
  }
  return defaultState;
}

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<OnboardingState>(loadState);

  // Persist to sessionStorage on every change (not localStorage — no sensitive data crosses sessions)
  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const setGoal = (goal: string | null) =>
    setState((s) => ({ ...s, selectedGoal: goal }));

  const setChecklistReviewed = (reviewed: boolean) =>
    setState((s) => ({ ...s, checklistReviewed: reviewed }));

  const setVerificationStatus = (status: OnboardingState['verificationStatus']) =>
    setState((s) => ({ ...s, verificationStatus: status }));

  const setCurrentStep = (step: number) =>
    setState((s) => ({ ...s, currentStep: step }));

  const resetOnboarding = () => setState(defaultState);

  return (
    <OnboardingContext.Provider
      value={{ state, setGoal, setChecklistReviewed, setVerificationStatus, setCurrentStep, resetOnboarding }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  return useContext(OnboardingContext);
}
