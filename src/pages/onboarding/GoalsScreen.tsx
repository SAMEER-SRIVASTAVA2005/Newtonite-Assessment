// Screen 2 — Goals
// Route: /onboarding/goals

import { useNavigate } from 'react-router-dom';
import { OnboardingLayout } from '../../components/OnboardingLayout';
import { PrimaryButton, GhostButton } from '../../components/Buttons';
import { useOnboarding } from '../../context/OnboardingContext';

const GOALS = [
  { id: 'habit', label: 'Build an investing habit', desc: 'Start small and invest consistently over time.' },
  { id: 'mutual-funds', label: 'Learn about mutual funds', desc: 'Understand how mutual funds pool investments and manage risk.' },
  { id: 'explore-options', label: 'Understand different investment options', desc: 'Compare equity, debt, hybrid, and other product types.' },
  { id: 'exploring', label: "I'm still exploring", desc: "I'm curious but haven't decided yet." },
];

export function GoalsScreen() {
  const navigate = useNavigate();
  const { state, setGoal, setCurrentStep } = useOnboarding();

  const handleContinue = () => {
    setCurrentStep(2);
    navigate('/onboarding/learn');
  };

  const handleSkip = () => {
    setGoal(null);
    setCurrentStep(2);
    navigate('/onboarding/learn');
  };

  const handleBack = () => {
    setCurrentStep(0);
    navigate('/onboarding/welcome');
  };

  return (
    <OnboardingLayout currentStep={1} onBack={handleBack} showDisclaimer={false}>
      <div className="flex flex-col gap-6">
        {/* Heading */}
        <div>
          <h1 className="text-2xl font-bold text-[#18231D] mb-2">
            What would you like to start with?
          </h1>
          <p className="text-[15px] text-[#5C675F] leading-relaxed">
            Your answer helps us show you relevant learning content. It is not investment advice.
          </p>
        </div>

        {/* Goal options */}
        <fieldset>
          <legend className="sr-only">Select your starting goal</legend>
          <div className="flex flex-col gap-3">
            {GOALS.map((goal) => {
              const isSelected = state.selectedGoal === goal.id;
              return (
                <label
                  key={goal.id}
                  className={`
                    flex items-start gap-3 p-4 rounded-2xl border-2 cursor-pointer
                    transition-all duration-150 min-h-[44px]
                    ${isSelected
                      ? 'border-[#174D3A] bg-[#DCEFE2]'
                      : 'border-[#DDE3DC] bg-white hover:border-[#174D3A] hover:bg-[#F0F5F1]'
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="goal"
                    value={goal.id}
                    checked={isSelected}
                    onChange={() => setGoal(goal.id)}
                    className="mt-1 w-4 h-4 accent-[#174D3A] flex-shrink-0"
                  />
                  <div>
                    <span className="text-[15px] font-semibold text-[#18231D] block">{goal.label}</span>
                    <span className="text-[13px] text-[#5C675F]">{goal.desc}</span>
                  </div>
                </label>
              );
            })}
          </div>
        </fieldset>

        {/* Privacy note */}
        <p className="text-[12px] text-[#5C675F] bg-[#F8F7F2] border border-[#DDE3DC] rounded-xl p-3 leading-relaxed">
          <strong className="text-[#18231D]">Privacy: </strong>
          Your selection personalises the educational content we show you. It is not treated as financial advice and does not affect your actual investment options.
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-3 mt-2">
          <PrimaryButton
            onClick={handleContinue}
            fullWidth
            className="text-base py-4"
          >
            Continue
          </PrimaryButton>
          <GhostButton onClick={handleSkip} fullWidth>
            Skip for now
          </GhostButton>
        </div>
      </div>
    </OnboardingLayout>
  );
}
