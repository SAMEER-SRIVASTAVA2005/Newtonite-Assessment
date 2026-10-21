// ProductPreviewCard — illustrative (non-transactional) investment product card

interface ProductPreviewCardProps {
  name: string;
  category: string;
  riskLevel: string;
  minInvestment: string;
  note: string;
  description: string;
  onLearnMore?: () => void;
}

const riskColors: Record<string, { bg: string; text: string }> = {
  High: { bg: 'bg-[#FEF2F2]', text: 'text-[#B42318]' },
  'Moderate-High': { bg: 'bg-[#FEF8EC]', text: 'text-[#7A4A00]' },
  Moderate: { bg: 'bg-[#FEFCE8]', text: 'text-[#6B5C00]' },
  Low: { bg: 'bg-[#F0FDF4]', text: 'text-[#176B45]' },
};

export function ProductPreviewCard({
  name,
  category,
  riskLevel,
  minInvestment,
  note,
  description,
  onLearnMore,
}: ProductPreviewCardProps) {
  const risk = riskColors[riskLevel] ?? { bg: 'bg-[#F8F7F2]', text: 'text-[#5C675F]' };

  return (
    <div className="bg-white rounded-2xl border border-[#DDE3DC] p-5 flex flex-col gap-3">
      {/* Illustrative label */}
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-semibold text-[#5C675F] bg-[#F8F7F2] border border-[#DDE3DC] px-2 py-0.5 rounded-full uppercase tracking-wide">
          Illustrative · Not real
        </span>
      </div>

      {/* Name + category */}
      <div>
        <h3 className="text-[16px] font-semibold text-[#18231D] mb-1">{name}</h3>
        <span className="text-[13px] text-[#5C675F] font-medium">{category} Fund</span>
      </div>

      {/* Risk + minimum */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className={`text-[12px] font-semibold px-2.5 py-1 rounded-full ${risk.bg} ${risk.text}`}>
          Risk: {riskLevel}
        </span>
        <span className="text-[13px] text-[#5C675F]">
          Minimum: <span className="font-semibold text-[#18231D]">{minInvestment}</span>
        </span>
      </div>

      {/* Description */}
      <p className="text-[13px] text-[#5C675F] leading-relaxed">{description}</p>

      {/* Illustrative note */}
      <p className="text-[12px] text-[#5C675F] italic">{note}</p>

      {/* Action */}
      <button
        onClick={onLearnMore}
        className="
          mt-1 w-full text-center py-2.5 px-4 rounded-xl
          border border-[#174D3A] text-[#174D3A] text-[14px] font-semibold
          hover:bg-[#DCEFE2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#174D3A]
          transition-colors duration-150 min-h-[44px]
        "
      >
        Learn about this option
      </button>
    </div>
  );
}
