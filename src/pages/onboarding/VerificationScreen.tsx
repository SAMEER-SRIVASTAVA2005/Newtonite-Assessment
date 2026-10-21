// Screen 5 — Identity Verification (Demo)
// Route: /onboarding/verification
// IMPORTANT: Does NOT collect or store real identity data.
// All flows are mocked/simulated with explicit demo labeling.

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { OnboardingLayout } from '../../components/OnboardingLayout';
import { PipMascot } from '../../components/PipMascot';
import { PrimaryButton } from '../../components/Buttons';
import { VerificationStatus } from '../../components/VerificationStatus';
import { useOnboarding } from '../../context/OnboardingContext';

// Progress steps indicator (specific to this screen)
function VerifSteps({ currentStep }: { currentStep: number }) {
  const steps = ['Review details', 'Verify identity', 'Check status'];
  return (
    <ol className="flex items-center gap-2" aria-label="Verification progress">
      {steps.map((label, i) => {
        const done = i < currentStep;
        const active = i === currentStep;
        return (
          <li key={label} className="flex items-center gap-2">
            <div
              aria-current={active ? 'step' : undefined}
              className={`
                w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold
                transition-all duration-300
                ${done ? 'bg-[#176B45] text-white' : active ? 'bg-[#174D3A] text-white' : 'bg-[#DDE3DC] text-[#5C675F]'}
              `}
              aria-label={`${i + 1}. ${label}${done ? ' — complete' : active ? ' — current' : ''}`}
            >
              {done ? '✓' : i + 1}
            </div>
            <span className={`text-[11px] font-medium hidden sm:block ${active ? 'text-[#174D3A]' : done ? 'text-[#5C675F]' : 'text-[#DDE3DC]'}`}>
              {label}
            </span>
            {i < steps.length - 1 && (
              <div className={`h-px w-4 sm:w-6 ${done ? 'bg-[#176B45]' : 'bg-[#DDE3DC]'}`} aria-hidden="true" />
            )}
          </li>
        );
      })}
    </ol>
  );
}

// Possible demo outcomes
const DEMO_OUTCOMES: Array<'success' | 'additionalInfo' | 'failed'> = ['success', 'success', 'success', 'additionalInfo', 'failed'];
let outcomeIndex = 0;

export function VerificationScreen() {
  const navigate = useNavigate();
  const { state, setVerificationStatus, setCurrentStep } = useOnboarding();
  const [verifStep, setVerifStep] = useState(0); // 0=review, 1=verifying, 2=result

  const handleBack = () => {
    setCurrentStep(3);
    setVerificationStatus('idle');
    navigate('/onboarding/prepare');
  };

  const handleStartDemo = () => {
    setVerificationStatus('processing');
    setVerifStep(1);
    // Simulate async verification (2.5 seconds)
    setTimeout(() => {
      const outcome = DEMO_OUTCOMES[outcomeIndex % DEMO_OUTCOMES.length];
      outcomeIndex++;
      setVerificationStatus(outcome);
      setVerifStep(2);
    }, 2500);
  };

  const handleRetry = () => {
    setVerificationStatus('idle');
    setVerifStep(0);
  };

  const handleContinue = () => {
    navigate('/invest/first-investment');
  };

  const handleSupport = () => {
    // In a real app, this would open a support channel
    alert('Support contact would open here in the production application.');
  };

  // When status is idle, reset verifStep to 0
  useEffect(() => {
    if (state.verificationStatus === 'idle') setVerifStep(0);
  }, [state.verificationStatus]);

  return (
    <OnboardingLayout currentStep={4} onBack={handleBack} showDisclaimer>
      <div className="flex flex-col gap-6">
        {/* Heading */}
        <div>
          <h1 className="text-2xl font-bold text-[#18231D] mb-1">
            Let's verify your identity.
          </h1>
          <p className="text-[14px] text-[#5C675F] leading-relaxed">
            This step helps establish your identity before you can access eligible investment products.
          </p>
        </div>

        {/* Demo label — always visible */}
        <div className="flex items-center gap-2 bg-[#FEF8EC] border border-[#F0D89B] rounded-xl px-4 py-3">
          <ShieldCheck size={16} className="text-[#7A4A00] flex-shrink-0" aria-hidden="true" />
          <p className="text-[13px] text-[#7A4A00] font-medium">
            <strong>Demo flow:</strong> No real identity data is collected or verified. This simulates the KYC process.
          </p>
        </div>

        {/* Verification progress steps */}
        <VerifSteps currentStep={verifStep} />

        {/* State content */}
        {state.verificationStatus === 'idle' && (
          <div className="bg-white rounded-2xl border border-[#DDE3DC] p-6 flex flex-col items-center text-center gap-5">
            <PipMascot state="verification" size={72} />
            <div>
              <h2 className="text-[17px] font-semibold text-[#18231D] mb-2">Ready to begin demo verification</h2>
              <p className="text-[14px] text-[#5C675F] leading-relaxed max-w-xs mx-auto">
                This demonstration does not collect real PAN numbers, Aadhaar numbers, or identity documents. Click below to simulate the verification process.
              </p>
            </div>
            <div className="w-full max-w-xs space-y-3">
              {/* Sample (fake) input fields — clearly labeled */}
              <div>
                <label className="block text-[12px] font-semibold text-[#5C675F] uppercase tracking-wide mb-1.5">
                  Sample PAN (demo only)
                </label>
                <input
                  type="text"
                  defaultValue="DEMO00000A"
                  readOnly
                  className="w-full px-4 py-3 rounded-xl border border-[#DDE3DC] bg-[#F8F7F2] text-[#5C675F] text-sm font-mono cursor-not-allowed"
                  aria-label="Sample PAN number — demo value, not real"
                />
                <p className="text-[11px] text-[#5C675F] mt-1">Demo placeholder only. Not a real PAN.</p>
              </div>
            </div>
            <PrimaryButton onClick={handleStartDemo} fullWidth className="text-base py-4">
              Start demo verification
            </PrimaryButton>
          </div>
        )}

        {(state.verificationStatus === 'processing' ||
          state.verificationStatus === 'success' ||
          state.verificationStatus === 'additionalInfo' ||
          state.verificationStatus === 'failed') && (
          <div className="bg-white rounded-2xl border border-[#DDE3DC] p-6">
            <VerificationStatus
              status={state.verificationStatus as 'processing' | 'success' | 'additionalInfo' | 'failed'}
              onRetry={handleRetry}
              onContinue={handleContinue}
              onSupport={handleSupport}
            />
          </div>
        )}

        {/* Run multiple demo outcomes notice */}
        {state.verificationStatus === 'idle' && (
          <p className="text-[12px] text-[#5C675F] text-center">
            Tip: Run the demo multiple times to see different outcomes — success, additional information needed, and failed states.
          </p>
        )}
      </div>
    </OnboardingLayout>
  );
}
