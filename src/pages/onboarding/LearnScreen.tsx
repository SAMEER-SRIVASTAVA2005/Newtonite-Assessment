// Screen 3 — Learn
// Route: /onboarding/learn

import { useNavigate } from 'react-router-dom';
import { Target, TrendingDown, LayoutGrid } from 'lucide-react';
import { OnboardingLayout } from '../../components/OnboardingLayout';
import { PipMascot } from '../../components/PipMascot';
import { LearnCard } from '../../components/EducationalCard';
import { PrimaryButton, SecondaryButton } from '../../components/Buttons';
import { useOnboarding } from '../../context/OnboardingContext';
import { useState } from 'react';

function ExploreBasicsPanel({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-end sm:items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Explore investment basics"
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md max-h-[80vh] overflow-y-auto p-6">
        <h2 className="text-xl font-bold text-[#18231D] mb-4">Investment basics explained</h2>
        <div className="space-y-5 text-[14px] text-[#5C675F] leading-relaxed">
          <div>
            <h3 className="text-[15px] font-semibold text-[#18231D] mb-1">Mutual funds</h3>
            <p>A mutual fund pools money from many investors to purchase a collection of assets managed by a professional fund manager. Investors share the fund's gains and losses proportionally. Costs and risk levels vary significantly between fund types.</p>
          </div>
          <div>
            <h3 className="text-[15px] font-semibold text-[#18231D] mb-1">NAV (Net Asset Value)</h3>
            <p>NAV is the price per unit of a mutual fund. It changes daily based on the value of the fund's holdings. A higher NAV does not mean a better fund; it simply reflects the current value of each unit.</p>
          </div>
          <div>
            <h3 className="text-[15px] font-semibold text-[#18231D] mb-1">SIP (Systematic Investment Plan)</h3>
            <p>A SIP allows you to invest a fixed amount in a mutual fund at regular intervals (weekly, monthly, etc.). It encourages consistency and removes the pressure of choosing the "right" time to invest.</p>
          </div>
          <div>
            <h3 className="text-[15px] font-semibold text-[#18231D] mb-1">Liquidity</h3>
            <p>Liquidity refers to how easily you can access your money. Some investments can be redeemed quickly; others may require notice periods or incur exit fees. Always understand the liquidity terms before investing.</p>
          </div>
          <p className="text-[12px] italic border-l-2 border-[#DDE3DC] pl-3">
            This information is educational only and does not constitute financial advice.
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full py-3 rounded-xl bg-[#F8F7F2] border border-[#DDE3DC] text-[#174D3A] font-semibold hover:bg-[#DCEFE2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#174D3A] min-h-[44px]"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export function LearnScreen() {
  const navigate = useNavigate();
  const { setCurrentStep } = useOnboarding();
  const [showExplore, setShowExplore] = useState(false);

  const handleContinue = () => {
    setCurrentStep(3);
    navigate('/onboarding/prepare');
  };

  const handleBack = () => {
    setCurrentStep(1);
    navigate('/onboarding/goals');
  };

  const cards = [
    {
      icon: <Target size={16} />,
      title: 'Investing and financial goals',
      body: 'Investing means putting money into an investment product with the aim of meeting a financial goal. The goal might be building savings, planning for a large purchase, or preparing for the future.',
    },
    {
      icon: <TrendingDown size={16} />,
      title: 'Values can rise and fall',
      body: 'Investment values are not fixed. They can increase or decrease based on market conditions. You may receive less than the amount you put in. This is called investment risk, and it applies to all investment types to varying degrees.',
    },
    {
      icon: <LayoutGrid size={16} />,
      title: 'Products differ in important ways',
      body: 'Different investment products have different risk levels, costs, liquidity (how easily you can access your money), and time horizons. Understanding these differences matters before choosing.',
    },
  ];

  return (
    <>
      <OnboardingLayout currentStep={2} onBack={handleBack} showDisclaimer>
        <div className="flex flex-col gap-6">
          {/* Pip guide */}
          <div className="flex items-center gap-3">
            <PipMascot state="learning" size={52} aria-hidden />
            <div>
              <h1 className="text-2xl font-bold text-[#18231D]">
                Understand first. Choose when you're ready.
              </h1>
              <p className="text-[14px] text-[#5C675F] mt-1">
                Read through these key ideas before making any decision.
              </p>
            </div>
          </div>

          {/* Learning cards */}
          <div className="flex flex-col gap-3">
            {cards.map((card) => (
              <LearnCard key={card.title} {...card} />
            ))}
          </div>

          {/* Disclaimer note */}
          <p className="text-[12px] text-[#5C675F] bg-[#F8F7F2] border border-[#DDE3DC] rounded-xl p-3 leading-relaxed italic">
            Reading these cards does not qualify you to invest or constitute personalised financial advice. Investment decisions are yours to make based on your own circumstances.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 mt-2">
            <PrimaryButton onClick={handleContinue} fullWidth className="text-base py-4">
              Continue
            </PrimaryButton>
            <SecondaryButton onClick={() => setShowExplore(true)} fullWidth className="text-base py-3.5">
              Explore the basics
            </SecondaryButton>
          </div>
        </div>
      </OnboardingLayout>

      {showExplore && <ExploreBasicsPanel onClose={() => setShowExplore(false)} />}
    </>
  );
}
