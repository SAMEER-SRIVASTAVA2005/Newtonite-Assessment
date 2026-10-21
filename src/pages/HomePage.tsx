// HomePage — full responsive homepage with all sections
// Sections: Hero, Trust strip, How it works, Learn first, Pip guide, KYC preview, FAQ, Final CTA

import { useNavigate } from 'react-router-dom';
import { BookOpen, Map, Target, TrendingDown, LayoutGrid, ChevronRight, Leaf } from 'lucide-react';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { PrimaryButton, SecondaryButton } from '../components/Buttons';
import { RiskDisclaimer } from '../components/RiskDisclaimer';
import { EducationalCard } from '../components/EducationalCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { PipMascot } from '../components/PipMascot';

// Hero illustration — lightweight CSS/SVG illustration of seed growing into sprout
function HeroIllustration() {
  return (
    <div className="flex items-end justify-center gap-4 py-6" aria-hidden="true">
      {/* Growth stages */}
      {[
        { h: 20, opacity: 0.3, label: 'seed' },
        { h: 40, opacity: 0.5, label: 'seedling' },
        { h: 64, opacity: 0.7, label: 'small sprout' },
        { h: 96, opacity: 1, label: 'full sprout' },
      ].map((stage, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div
            className="w-2 rounded-full bg-[#174D3A] transition-all"
            style={{ height: stage.h, opacity: stage.opacity }}
          />
          <div
            className="w-4 h-2 rounded-full bg-[#DCEFE2] border border-[#174D3A]"
            style={{ opacity: stage.opacity }}
          />
        </div>
      ))}
      {/* Pip at the end */}
      <div className="flex flex-col items-center">
        <PipMascot state="welcome" size={72} />
      </div>
    </div>
  );
}

// Step card for "How it works"
function StepCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#174D3A] flex items-center justify-center text-white text-sm font-bold">
        {num}
      </div>
      <div>
        <h3 className="text-[16px] font-semibold text-[#18231D] mb-1">{title}</h3>
        <p className="text-[14px] text-[#5C675F] leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export function HomePage() {
  const navigate = useNavigate();

  const handleStart = () => navigate('/onboarding/welcome');
  const handleLearn = () => {
    document.querySelector('#learn')?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleHowItWorks = () => {
    document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleKycPreview = () => navigate('/onboarding/welcome');

  const trustItems = [
    { icon: <Leaf size={20} />, title: 'Start small.', desc: 'Begin from ₹100, where the investment product supports it. No pressure, no minimums beyond that.' },
    { icon: <BookOpen size={20} />, title: 'Understand before you invest.', desc: 'Read explanations of each step before you commit. We will not rush you through important decisions.' },
    { icon: <Map size={20} />, title: 'Know what happens next.', desc: 'Every screen tells you exactly where you are, what is required, and what comes after.' },
  ];

  const howItWorksSteps = [
    { num: '01', title: 'Learn your options.', desc: 'Explore plain-language explanations of investment products. Understand risk, costs, and liquidity before choosing anything.' },
    { num: '02', title: 'Complete identity verification.', desc: 'KYC (Know Your Customer) is required by regulation. We will explain exactly which documents you need before you begin.' },
    { num: '03', title: 'Choose your first investment.', desc: 'Only when you are ready. Review your options, understand what you are choosing, and invest on your own terms.' },
  ];

  const pipCards = [
    {
      title: 'What is investing?',
      preview: 'Investing means putting money into an investment product with the aim of meeting a financial goal over time.',
      body: 'When you invest, you are allocating money with the hope that it will grow in value. However, investment values can also fall, and you may receive less than you put in. Different products — such as mutual funds, stocks, or fixed deposits — work in different ways and carry different levels of risk. Sprout helps you understand the differences before you choose.',
    },
    {
      title: 'What does risk mean?',
      preview: 'Risk refers to the possibility that your investment may not grow as expected — or may lose value.',
      body: 'All investments carry some degree of risk. A product that offers the possibility of higher returns typically also carries a higher possibility of loss. Lower-risk products generally offer more stability, but may grow more slowly. Understanding your own comfort with uncertainty — and the time you can leave money invested — is an important part of making an informed choice.',
    },
    {
      title: 'What should I understand before choosing?',
      preview: 'Before selecting any investment product, consider your goal, how long you can invest, and what level of risk you are comfortable with.',
      body: 'Ask yourself: What am I trying to achieve? When will I need this money? How would I feel if its value dropped temporarily? You do not need a financial advisor to start learning, but reading the scheme documents, understanding fees, and considering your own circumstances matters. Sprout is an educational tool — the decisions you make are yours.',
    },
  ];

  const kycChecklist = [
    { label: 'PAN card', note: 'Required for identity verification under applicable regulations.' },
    { label: 'Aadhaar or other supported ID', note: 'Exact requirements depend on the verification flow. Check what applies to your situation.' },
    { label: 'Registered mobile number access', note: 'You will likely receive an OTP or confirmation on this number.' },
    { label: 'A few uninterrupted minutes', note: 'Verification can take a few minutes. A stable internet connection helps.' },
  ];

  const faqItems = [
    { q: 'Can I start with ₹100?', a: 'Starting from ₹100 is supported for certain investment products where the minimum investment allows it. The exact minimum varies by product. We will show you the minimum for each option before you decide.' },
    { q: 'Why is identity verification required?', a: 'KYC (Know Your Customer) verification is required by financial regulations in India. It helps establish your identity before you can access regulated investment products. This is a legal requirement, not specific to Sprout.' },
    { q: 'What documents should I prepare?', a: 'Typically, you will need a PAN card and an Aadhaar card or another accepted identity document. The exact requirements depend on the verification flow in use. We explain this clearly before you begin so there are no surprises.' },
    { q: 'How long might verification take?', a: 'Verification time varies. Some flows complete quickly; others may require manual review and take longer. We will show you the status at every stage and explain what to do if a step is taking time.' },
    { q: 'Can I lose money when investing?', a: 'Yes. Investment values can rise or fall. You may receive less than the amount you put in. Investments are subject to market risks. Please read all scheme-related documents carefully before investing.' },
    { q: 'What if verification does not work?', a: 'If verification encounters an issue, we will explain what happened and provide a clear path forward — including options to retry, correct your information, or contact support. You will never be left on a screen without guidance.' },
  ];

  return (
    <div className="min-h-screen bg-[#F8F7F2]">
      <SiteHeader />

      {/* ── Risk disclaimer at top on desktop (always visible) ── */}
      <RiskDisclaimer />

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section
        className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20"
        aria-label="Hero"
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#18231D] leading-tight mb-5">
              Your first step into investing{' '}
              <span className="text-[#174D3A]">starts small.</span>
            </h1>
            <p className="text-[17px] text-[#5C675F] leading-relaxed mb-8 max-w-md">
              Learn the basics, understand your choices, and start your investing journey from ₹100, where available.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <PrimaryButton onClick={handleStart} className="text-base px-7 py-4">
                Start my journey
              </PrimaryButton>
              <SecondaryButton onClick={handleHowItWorks} className="text-base px-7 py-4">
                See how it works
              </SecondaryButton>
            </div>
          </div>

          {/* Right: illustration */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="bg-white rounded-3xl border border-[#DDE3DC] p-8 max-w-xs w-full">
              <HeroIllustration />
              <p className="text-center text-[13px] text-[#5C675F] mt-2">
                Building understanding, one step at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TRUST STRIP ═══════════════════════ */}
      <section className="bg-white border-y border-[#DDE3DC]" aria-label="Why Sprout">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid sm:grid-cols-3 gap-8">
            {trustItems.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#DCEFE2] flex items-center justify-center text-[#174D3A]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#18231D] mb-1">{item.title}</h3>
                  <p className="text-[13px] text-[#5C675F] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ HOW IT WORKS ═══════════════════════ */}
      <section
        id="how-it-works"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20"
        aria-label="How Sprout works"
      >
        <div className="max-w-xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#18231D] mb-3">How Sprout works</h2>
          <p className="text-[16px] text-[#5C675F]">Three steps from curious to getting started.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {howItWorksSteps.map((step) => (
            <StepCard key={step.num} {...step} />
          ))}
        </div>
        <div className="mt-10">
          <PrimaryButton onClick={handleStart}>
            Start my journey <ChevronRight size={16} className="ml-1" aria-hidden="true" />
          </PrimaryButton>
        </div>
      </section>

      {/* ═══════════════════════ LEARN FIRST ═══════════════════════ */}
      <section
        id="learn"
        className="bg-white border-y border-[#DDE3DC]"
        aria-label="Learn first"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#18231D] mb-4">
                You don't need to know everything to begin learning.
              </h2>
              <p className="text-[16px] text-[#5C675F] leading-relaxed mb-4">
                Sprout helps you build a foundation before you make any financial decision. Start wherever you are.
              </p>
              <p className="text-[13px] text-[#5C675F] italic mb-6 border-l-2 border-[#DDE3DC] pl-3">
                The illustrative figures below are educational examples only. They do not represent actual products, returns, or guarantees.
              </p>
              <SecondaryButton onClick={handleLearn}>Explore the basics</SecondaryButton>
            </div>

            {/* Visual: simple concept grid */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Target, label: 'Goal', desc: 'What do you want to achieve?' },
                { icon: LayoutGrid, label: 'Product', desc: 'What type of investment fits?' },
                { icon: TrendingDown, label: 'Risk', desc: 'What could go wrong?' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-[#F8F7F2] rounded-2xl border border-[#DDE3DC] p-4 flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#DCEFE2] flex items-center justify-center text-[#174D3A]">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <span className="text-[13px] font-semibold text-[#18231D]">{label}</span>
                  <span className="text-[11px] text-[#5C675F]">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PIP GUIDE ═══════════════════════ */}
      <section
        className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20"
        aria-label="Pip's beginner guide"
      >
        <div className="flex items-start gap-4 mb-8">
          <PipMascot state="learning" size={56} aria-hidden />
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#18231D] mb-2">
              New to investing? Start with the basics.
            </h2>
            <p className="text-[16px] text-[#5C675F]">
              Pip will guide you through the important terms and explain each step clearly.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pipCards.map((card) => (
            <EducationalCard
              key={card.title}
              title={card.title}
              preview={card.preview}
              body={card.body}
            />
          ))}
        </div>
      </section>

      {/* ═══════════════════════ KYC PREVIEW ═══════════════════════ */}
      <section
        className="bg-[#174D3A] text-white"
        aria-label="KYC readiness"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                A little preparation makes getting started easier.
              </h2>
              <p className="text-[16px] text-[#DCEFE2] leading-relaxed mb-6">
                Understanding what is needed before you begin reduces unexpected interruptions during verification.
              </p>
              <PrimaryButton
                onClick={handleKycPreview}
                className="bg-white text-[#174D3A] hover:bg-[#DCEFE2] active:bg-[#c8e8d5] border-0"
              >
                Check what I need
              </PrimaryButton>
              <p className="text-[12px] text-[#9CBA9E] mt-4 leading-relaxed">
                Exact document requirements depend on the applicable KYC process and should be verified before submission.
              </p>
            </div>

            {/* Checklist */}
            <div className="bg-[#10372B] rounded-2xl p-5 space-y-4">
              {kycChecklist.map((item) => (
                <div key={item.label} className="flex gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#DCEFE2] flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                      <path d="M1 4l2.5 2.5L9 1" stroke="#174D3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold text-white">{item.label}</p>
                    <p className="text-[12px] text-[#9CBA9E] mt-0.5">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FAQ ═══════════════════════ */}
      <section
        className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20"
        aria-label="Frequently asked questions"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#18231D] mb-8">Common questions</h2>
        <div className="max-w-3xl">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* ═══════════════════════ FINAL CTA ═══════════════════════ */}
      <section
        className="bg-[#F0F5F1] border-y border-[#DDE3DC]"
        aria-label="Final call to action"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <PipMascot state="welcome" size={64} className="mx-auto mb-6" aria-hidden />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#18231D] mb-4">
            Ready to take your first step?
          </h2>
          <p className="text-[17px] text-[#5C675F] leading-relaxed mb-8 max-w-lg mx-auto">
            Start by learning what investing involves. Move forward when you understand the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryButton onClick={handleStart} className="text-base px-8 py-4">
              Start my journey
            </PrimaryButton>
            <SecondaryButton onClick={handleLearn} className="text-base px-8 py-4">
              Explore the basics
            </SecondaryButton>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
