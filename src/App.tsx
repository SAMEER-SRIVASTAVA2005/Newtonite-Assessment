// App.tsx — root component with routing and providers

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LocaleProvider } from './context/LocaleContext';
import { OnboardingProvider } from './context/OnboardingContext';

// Pages
import { HomePage } from './pages/HomePage';
import { WelcomeScreen } from './pages/onboarding/WelcomeScreen';
import { GoalsScreen } from './pages/onboarding/GoalsScreen';
import { LearnScreen } from './pages/onboarding/LearnScreen';
import { PrepareScreen } from './pages/onboarding/PrepareScreen';
import { VerificationScreen } from './pages/onboarding/VerificationScreen';
import { FirstInvestmentPage } from './pages/invest/FirstInvestmentPage';

export default function App() {
  return (
    <LocaleProvider>
      <OnboardingProvider>
        <BrowserRouter>
          <Routes>
            {/* Homepage */}
            <Route path="/" element={<HomePage />} />

            {/* Onboarding */}
            <Route path="/onboarding/welcome" element={<WelcomeScreen />} />
            <Route path="/onboarding/goals" element={<GoalsScreen />} />
            <Route path="/onboarding/learn" element={<LearnScreen />} />
            <Route path="/onboarding/prepare" element={<PrepareScreen />} />
            <Route path="/onboarding/verification" element={<VerificationScreen />} />

            {/* Post-onboarding */}
            <Route path="/invest/first-investment" element={<FirstInvestmentPage />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </OnboardingProvider>
    </LocaleProvider>
  );
}
