// Screen 4 — Prepare for KYC
// Route: /onboarding/prepare

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { X } from 'lucide-react';
import { OnboardingLayout } from '../../components/OnboardingLayout';
import { PipMascot } from '../../components/PipMascot';
import { ChecklistItem } from '../../components/ChecklistItem';
import { PrimaryButton, SecondaryButton } from '../../components/Buttons';
import { useOnboarding } from '../../context/OnboardingContext';

const CHECKLIST_ITEMS = [
  {
    label: 'PAN card',
    note: 'Required for identity verification. Have the physical card or a clear digital copy accessible.',
    required: true,
  },
  {
    label: 'Aadhaar or supported identity document',
    note: 'Accepted documents depend on the applicable KYC flow. Check which applies to your situation before proceeding.',
    required: true,
  },
  {
    label: 'Registered mobile number',
    note: 'You may receive a one-time password (OTP) on this number. Ensure you have access to it during verification.',
    required: true,
  },
  {
    label: 'Stable internet connection',
    note: 'A stable connection reduces the risk of interruptions during document upload or verification steps.',
    required: false,
  },
];

function HelpPanel({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-end sm:items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Document guidance"
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-[#DDE3DC]">
          <h2 className="text-lg font-bold text-[#18231D]">Document guidance</h2>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#F8F7F2] text-[#5C675F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#174D3A]"
            aria-label="Close document guidance"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>
        <div className="p-5 space-y-4 text-[14px] text-[#5C675F] leading-relaxed">
          <p>
            Verification requirements vary depending on the KYC provider and your specific circumstances. Generally, the following are needed:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-2">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#174D3A] mt-2" aria-hidden="true" />
              <span><strong className="text-[#18231D]">PAN card:</strong> A valid PAN card is typically required for all investment-related KYC in India.</span>
            </li>
            <li className="flex gap-2">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#174D3A] mt-2" aria-hidden="true" />
              <span><strong className="text-[#18231D]">Aadhaar:</strong> Aadhaar-based eKYC may be supported depending on the verification flow. An alternative government-issued identity document may be accepted if Aadhaar-based verification is not applicable.</span>
            </li>
            <li className="flex gap-2">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#174D3A] mt-2" aria-hidden="true" />
              <span><strong className="text-[#18231D]">Mobile number:</strong> Your registered mobile number may be required for OTP-based verification. Ensure you have access to it before beginning.</span>
            </li>
          </ul>
          <p className="text-[12px] italic border-l-2 border-[#DDE3DC] pl-3">
            Exact requirements must be verified against the applicable KYC process and regulations before submission. If you are unsure, contact support before proceeding.
          </p>
        </div>
        <div className="p-5 pt-0">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-[#F8F7F2] border border-[#DDE3DC] text-[#174D3A] font-semibold text-[14px] hover:bg-[#DCEFE2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#174D3A] min-h-[44px]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function PrepareScreen() {
  const navigate = useNavigate();
  const { state, setChecklistReviewed, setCurrentStep } = useOnboarding();
  const [showHelp, setShowHelp] = useState(false);

  const handleReady = () => {
    setCurrentStep(4);
    navigate('/onboarding/verification');
  };

  const handleBack = () => {
    setCurrentStep(2);
    navigate('/onboarding/learn');
  };

  return (
    <>
      <OnboardingLayout currentStep={3} onBack={handleBack} showDisclaimer>
        <div className="flex flex-col gap-6">
          {/* Pip + heading */}
          <div className="flex items-start gap-3">
            <PipMascot state="preparation" size={60} aria-hidden />
            <div>
              <h1 className="text-2xl font-bold text-[#18231D] mb-1">
                Before we verify your identity
              </h1>
              <p className="text-[14px] text-[#5C675F] leading-relaxed">
                Have the required details ready so you can complete verification without unexpected interruptions.
              </p>
            </div>
          </div>

          {/* Checklist */}
          <div className="bg-white rounded-2xl border border-[#DDE3DC] overflow-hidden">
            {CHECKLIST_ITEMS.map((item) => (
              <ChecklistItem key={item.label} {...item} />
            ))}
          </div>

          {/* Status note */}
          <p className="text-[13px] text-[#5C675F] bg-[#F8F7F2] border border-[#DDE3DC] rounded-xl p-3 leading-relaxed">
            You can review this checklist before continuing. Exact requirements should be verified against the applicable KYC process before submitting.
          </p>

          {/* Optional confirmation checkbox */}
          <label className="flex items-start gap-3 cursor-pointer py-1">
            <input
              type="checkbox"
              checked={state.checklistReviewed}
              onChange={(e) => setChecklistReviewed(e.target.checked)}
              className="w-5 h-5 mt-0.5 rounded border-2 border-[#DDE3DC] bg-white checked:bg-[#174D3A] checked:border-[#174D3A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#174D3A] cursor-pointer"
            />
            <span className="text-[14px] text-[#18231D]">
              I have reviewed the document checklist and understand what may be required.
              <span className="block text-[12px] text-[#5C675F] mt-0.5">
                This reminder is optional. You can continue without checking it.
              </span>
            </span>
          </label>

          {/* CTAs */}
          <div className="flex flex-col gap-3 mt-2">
            <PrimaryButton onClick={handleReady} fullWidth className="text-base py-4">
              I'm ready
            </PrimaryButton>
            <SecondaryButton onClick={() => setShowHelp(true)} fullWidth className="text-base py-3.5">
              I need more information
            </SecondaryButton>
          </div>
        </div>
      </OnboardingLayout>

      {showHelp && <HelpPanel onClose={() => setShowHelp(false)} />}
    </>
  );
}
