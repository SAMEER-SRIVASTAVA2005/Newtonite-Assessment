// OnboardingLayout — consistent app shell for all 5 onboarding screens
// Provides: logo, back button, progress indicator, risk disclaimer at bottom

import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SproutLogo } from './SproutLogo';
import { ProgressIndicator } from './ProgressIndicator';
import { RiskDisclaimer } from './RiskDisclaimer';
import { useLocale } from '../context/LocaleContext';

interface OnboardingLayoutProps {
  children: ReactNode;
  currentStep: number; // 0-indexed
  showBack?: boolean;
  onBack?: () => void;
  showDisclaimer?: boolean;
}

const STEP_LABELS = ['Welcome', 'Your goals', 'Learn', 'Prepare', 'Verify'];

export function OnboardingLayout({
  children,
  currentStep,
  showBack = true,
  onBack,
  showDisclaimer = true,
}: OnboardingLayoutProps) {
  const navigate = useNavigate();
  useLocale(); // locale available via context; imported for future use

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F2] flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#F8F7F2] border-b border-[#DDE3DC]">
        <div className="max-w-lg mx-auto w-full px-4 h-14 flex items-center justify-between">
          {/* Back button */}
          {showBack ? (
            <button
              onClick={handleBack}
              className="
                flex items-center gap-1.5 text-[#174D3A] text-sm font-medium
                min-h-[44px] min-w-[44px] -ml-2 px-2
                hover:bg-[#DCEFE2] rounded-lg
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#174D3A]
                transition-colors duration-150
              "
              aria-label="Go back to previous step"
            >
              <ArrowLeft size={18} aria-hidden="true" />
              <span className="sr-only sm:not-sr-only">Back</span>
            </button>
          ) : (
            <div className="w-11" /> /* spacer */
          )}

          {/* Logo */}
          <SproutLogo className="text-base" />

          {/* Step counter */}
          <span className="text-[13px] text-[#5C675F] font-medium tabular-nums">
            {currentStep + 1} / {STEP_LABELS.length}
          </span>
        </div>

        {/* Progress bar */}
        <div className="max-w-lg mx-auto w-full px-4 pb-3 pt-1">
          <ProgressIndicator steps={STEP_LABELS} current={currentStep} />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-lg mx-auto w-full px-4 py-6 flex flex-col">
        {children}
      </main>

      {/* Risk disclaimer — visible without scrolling on investment-related screens */}
      {showDisclaimer && (
        <RiskDisclaimer />
      )}
    </div>
  );
}
