// SiteFooter — links, risk disclosure, language selector

import { useLocale } from '../context/LocaleContext';

export function SiteFooter() {
  const { locale, setLocale } = useLocale();

  return (
    <footer className="bg-[#18231D] text-white" aria-label="Site footer">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-1">
            <span className="inline-flex items-center gap-2 font-bold text-[#DCEFE2] text-lg mb-3">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M14 26 L14 14" stroke="#DCEFE2" strokeWidth="2" strokeLinecap="round" />
                <path d="M14 14 C14 14 6 12 5 5 C5 5 12 4 14 14 Z" fill="#DCEFE2" />
                <path d="M14 14 C14 14 22 12 23 5 C23 5 16 4 14 14 Z" fill="#174D3A" stroke="#DCEFE2" strokeWidth="0.5" />
                <circle cx="14" cy="26" r="1.5" fill="#DCEFE2" />
              </svg>
              Sprout
            </span>
            <p className="text-[13px] text-[#9BA89E] leading-relaxed">
              A beginner-friendly guide to understanding your first investment.
            </p>
          </div>

          {/* Product column */}
          <div>
            <h3 className="text-[12px] font-semibold text-[#9BA89E] uppercase tracking-widest mb-3">Product</h3>
            <ul className="flex flex-col gap-2">
              {['Product', 'How it works', 'Learn'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[14px] text-[#DDE3DC] hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-white rounded transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support column */}
          <div>
            <h3 className="text-[12px] font-semibold text-[#9BA89E] uppercase tracking-widest mb-3">Support</h3>
            <ul className="flex flex-col gap-2">
              {['Help', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[14px] text-[#DDE3DC] hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-white rounded transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="text-[12px] font-semibold text-[#9BA89E] uppercase tracking-widest mb-3">Legal</h3>
            <ul className="flex flex-col gap-2">
              {['Privacy policy', 'Terms of service'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[14px] text-[#DDE3DC] hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-white rounded transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Language selector */}
        <div className="flex items-center gap-3 mb-8 pb-8 border-b border-[#2D3D35]">
          <span className="text-[13px] text-[#9BA89E]">Language:</span>
          <button
            onClick={() => setLocale('en')}
            className={`text-[13px] px-3 py-1 rounded-lg border transition-colors min-h-[36px] focus-visible:outline focus-visible:outline-1 focus-visible:outline-white ${
              locale === 'en'
                ? 'border-[#DCEFE2] text-white bg-[#174D3A]'
                : 'border-[#2D3D35] text-[#9BA89E] hover:border-[#5C675F]'
            }`}
          >
            English
          </button>
          <button
            onClick={() => undefined} // Hindi not yet available
            disabled
            title="Hindi translation coming soon"
            className="text-[13px] px-3 py-1 rounded-lg border border-[#2D3D35] text-[#5C675F] cursor-not-allowed min-h-[36px]"
          >
            हिन्दी <span className="text-[11px]">(coming soon)</span>
          </button>
        </div>

        {/* Risk disclosure */}
        <div className="mb-6">
          <p className="text-[13px] text-[#9BA89E] leading-relaxed">
            <span className="font-semibold text-[#DDE3DC]">Risk disclosure: </span>
            Investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future results.
          </p>
        </div>

        {/* Legal notice */}
        <div className="mb-6">
          <p className="text-[12px] text-[#5C675F] leading-relaxed">
            This prototype is for educational and demonstration purposes only. It does not constitute financial advice, a regulated investment service, or a real product offering. Legal entity name, SEBI registration, and regulatory details are placeholders and would require appropriate compliance review before production launch.
          </p>
        </div>

        {/* Copyright */}
        <p className="text-[12px] text-[#5C675F]">
          © {new Date().getFullYear()} Sprout. Prototype build — not a licensed investment service.
        </p>
      </div>
    </footer>
  );
}
