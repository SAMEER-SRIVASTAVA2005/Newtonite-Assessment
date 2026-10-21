// Screen 1 — Welcome
// Route: /onboarding/welcome

import { useNavigate } from 'react-router-dom';
import { OnboardingLayout } from '../../components/OnboardingLayout';
import { PipMascot } from '../../components/PipMascot';
import { PrimaryButton, SecondaryButton } from '../../components/Buttons';
import { useOnboarding } from '../../context/OnboardingContext';
import { useState } from 'react';

function LearnBasicsPanel({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-end sm:items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Learn the basics"
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md max-h-[80vh] overflow-y-auto p-6">
        <h2 className="text-xl font-bold text-[#18231D] mb-4">The basics of investing</h2>
        <div className="space-y-4 text-[14px] text-[#5C675F] leading-relaxed">
          <p>
            <strong className="text-[#18231D]">What is investing?</strong><br />
            Investing means putting money into an investment product with the aim of meeting a financial goal. Unlike keeping money in a savings account, investments can grow in value — but they can also fall.
          </p>
          <p>
            <strong className="text-[#18231D]">What is risk?</strong><br />
            Risk is the possibility that your investment may not perform as hoped, or that you may receive less than you put in. All investments carry some level of risk.
          </p>
          <p>
            <strong className="text-[#18231D]">What is KYC?</strong><br />
            Know Your Customer (KYC) is an identity verification process required by financial regulations in India. Before you can access regulated investment products, you will need to verify your identity using approved documents such as PAN and Aadhaar.
          </p>
          <p className="text-[12px] italic border-l-2 border-[#DDE3DC] pl-3">
            This information is educational only and does not constitute financial advice. Make your own informed decisions.
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full py-3 rounded-xl bg-[#F8F7F2] border border-[#DDE3DC] text-[#174D3A] font-semibold text-[14px] hover:bg-[#DCEFE2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#174D3A] min-h-[44px]"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export function WelcomeScreen() {
  const navigate = useNavigate();
  const { setCurrentStep } = useOnboarding();
  const [showLearn, setShowLearn] = useState(false);

  const handleGetStarted = () => {
    setCurrentStep(1);
    navigate('/onboarding/goals');
  };

  return (
    <>
      <OnboardingLayout currentStep={0} showBack={false} showDisclaimer>
        <div className="flex flex-col flex-1 items-center text-center gap-6 pt-4">
          {/* Pip */}
          <PipMascot state="welcome" size={100} />

          {/* Heading */}
          <div>
            <h1 className="text-3xl font-bold text-[#18231D] mb-3">
              Let's make your first step simple.
            </h1>
            <p className="text-[16px] text-[#5C675F] leading-relaxed max-w-xs mx-auto">
              Learn how investing works, prepare what you need, and move at your own pace. No jargon, no pressure.
            </p>
          </div>

          {/* Feature list */}
          <div className="w-full max-w-xs bg-white rounded-2xl border border-[#DDE3DC] divide-y divide-[#DDE3DC]">
            {[
              { icon: '📚', text: 'Plain-language explanations' },
              { icon: '✅', text: 'Document checklist before you start' },
              { icon: '🛡️', text: 'No data shared without your knowledge' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3 px-4 py-3">
                <span className="text-lg" aria-hidden="true">{icon}</span>
                <span className="text-[14px] text-[#18231D] font-medium">{text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="w-full max-w-xs flex flex-col gap-3 mt-2">
            <PrimaryButton onClick={handleGetStarted} fullWidth className="text-base py-4">
              Get started
            </PrimaryButton>
            <SecondaryButton onClick={() => setShowLearn(true)} fullWidth className="text-base py-3.5">
              Learn the basics
            </SecondaryButton>
          </div>
        </div>
      </OnboardingLayout>

      {/* Educational panel */}
      {showLearn && <LearnBasicsPanel onClose={() => setShowLearn(false)} />}
    </>
  );
}
