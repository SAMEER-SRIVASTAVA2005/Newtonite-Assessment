// EducationalCard — expandable learning card with title, preview text, and full body
// Used in homepage Pip guide and onboarding screens.

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface EducationalCardProps {
  title: string;
  preview: string;
  body: string;
  icon?: React.ReactNode;
  className?: string;
}

export function EducationalCard({ title, preview, body, icon, className = '' }: EducationalCardProps) {
  const [expanded, setExpanded] = useState(false);
  const id = `edu-card-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className={`bg-white rounded-2xl border border-[#DDE3DC] overflow-hidden ${className}`}>
      <button
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls={id}
        className="
          w-full text-left px-5 py-4 flex items-start gap-3
          hover:bg-[#F8F7F2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#174D3A]
          transition-colors duration-150 rounded-2xl
        "
      >
        {icon && (
          <span className="flex-shrink-0 text-[#174D3A] mt-0.5" aria-hidden="true">
            {icon}
          </span>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-[15px] font-semibold text-[#18231D] mb-1">{title}</h3>
          <p className="text-[13px] text-[#5C675F] leading-relaxed">{preview}</p>
        </div>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={`flex-shrink-0 mt-1 text-[#5C675F] transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
        />
      </button>

      {expanded && (
        <div
          id={id}
          className="px-5 pb-5 text-[14px] text-[#18231D] leading-relaxed border-t border-[#DDE3DC] pt-4"
        >
          {icon && <span className="sr-only">{title}: </span>}
          {body}
        </div>
      )}
    </div>
  );
}

// Compact card variant for onboarding screens (no expand, always shows full content)
export function LearnCard({
  title,
  body,
  icon,
  className = '',
}: {
  title: string;
  body: string;
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-white rounded-2xl border border-[#DDE3DC] p-5 ${className}`}>
      <div className="flex items-start gap-3">
        {icon && (
          <span className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-[#DCEFE2] text-[#174D3A]" aria-hidden="true">
            {icon}
          </span>
        )}
        <div>
          <h3 className="text-[15px] font-semibold text-[#18231D] mb-1.5">{title}</h3>
          <p className="text-[14px] text-[#5C675F] leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );
}
