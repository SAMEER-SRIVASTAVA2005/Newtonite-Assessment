// FAQAccordion — keyboard-accessible FAQ expand/collapse

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className={`divide-y divide-[#DDE3DC] border border-[#DDE3DC] rounded-2xl overflow-hidden ${className}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const headerId = `faq-header-${i}`;
        return (
          <div key={i}>
            <h3>
              <button
                id={headerId}
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="
                  w-full text-left flex items-center justify-between gap-4
                  px-5 py-4 bg-white hover:bg-[#F8F7F2]
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#174D3A]
                  transition-colors duration-150
                "
              >
                <span className="text-[15px] font-semibold text-[#18231D]">{item.q}</span>
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className={`flex-shrink-0 text-[#5C675F] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </h3>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className="px-5 pb-5 pt-1 bg-white text-[14px] text-[#5C675F] leading-relaxed"
              >
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
