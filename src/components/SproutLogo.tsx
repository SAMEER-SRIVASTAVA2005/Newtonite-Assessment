// SproutLogo — inline SVG wordmark with leaf icon
// Renders the Sprout brand mark in forest green.
// No external font required — uses the page's body font.

interface SproutLogoProps {
  className?: string;
  compact?: boolean; // if true, show icon only (for very small spaces)
}

export function SproutLogo({ className = '', compact = false }: SproutLogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-bold text-[#174D3A] select-none ${className}`}
      aria-label="Sprout"
    >
      {/* Leaf icon — inline SVG */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stem */}
        <path
          d="M14 26 L14 14"
          stroke="#174D3A"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Left leaf */}
        <path
          d="M14 14 C14 14 6 12 5 5 C5 5 12 4 14 14 Z"
          fill="#174D3A"
        />
        {/* Right leaf */}
        <path
          d="M14 14 C14 14 22 12 23 5 C23 5 16 4 14 14 Z"
          fill="#DCEFE2"
          stroke="#174D3A"
          strokeWidth="0.5"
        />
        {/* Base/ground dot */}
        <circle cx="14" cy="26" r="1.5" fill="#174D3A" />
      </svg>

      {/* Wordmark */}
      {!compact && (
        <span className="text-[1.2rem] tracking-tight leading-none">Sprout</span>
      )}
    </span>
  );
}
