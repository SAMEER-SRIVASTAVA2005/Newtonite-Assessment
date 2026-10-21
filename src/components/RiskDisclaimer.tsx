// RiskDisclaimer — compliance-required risk notice
// Must appear on every investment-related screen, visible without scrolling.
// Minimum 12px text, sufficient contrast.

interface RiskDisclaimerProps {
  className?: string;
  variant?: 'bar' | 'inline'; // bar = full-width strip, inline = compact notice
}

export function RiskDisclaimer({ className = '', variant = 'bar' }: RiskDisclaimerProps) {
  const text =
    'Investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future results.';

  if (variant === 'inline') {
    return (
      <p
        className={`text-[13px] text-[#5C675F] leading-relaxed ${className}`}
        role="note"
      >
        <span className="font-semibold text-[#174D3A]">Risk notice: </span>
        {text}
      </p>
    );
  }

  return (
    <div
      className={`w-full bg-[#DCEFE2] border-t border-[#c5e0cd] px-4 py-3 ${className}`}
      role="note"
      aria-label="Investment risk disclosure"
    >
      <p className="text-[13px] text-[#18231D] leading-relaxed max-w-5xl mx-auto">
        <span className="font-semibold">Risk notice: </span>
        {text}
      </p>
    </div>
  );
}
