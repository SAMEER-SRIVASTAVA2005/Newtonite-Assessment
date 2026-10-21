// PipMascot — the Sprout brand mascot
// Pip is an abstract sprout: two leaf forms and a rounded base.
// Six states: welcome, learning, preparation, verification, success, error
// All inline SVG — no external assets, works at 24px, 48px, and larger.
// Motion only shown when prefers-reduced-motion is not set.

export type PipState = 'welcome' | 'learning' | 'preparation' | 'verification' | 'success' | 'error';

interface PipMascotProps {
  state?: PipState;
  size?: number; // px
  className?: string;
  'aria-hidden'?: boolean;
}

export function PipMascot({
  state = 'welcome',
  size = 80,
  className = '',
  'aria-hidden': ariaHidden,
}: PipMascotProps) {
  const label = `Pip the Sprout mascot — ${state} state`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={ariaHidden ? undefined : label}
      aria-hidden={ariaHidden}
      role={ariaHidden ? 'presentation' : 'img'}
      className={className}
    >
      {state === 'welcome' && <PipWelcome />}
      {state === 'learning' && <PipLearning />}
      {state === 'preparation' && <PipPreparation />}
      {state === 'verification' && <PipVerification />}
      {state === 'success' && <PipSuccess />}
      {state === 'error' && <PipError />}
    </svg>
  );
}

// ─────────────── SVG sub-components ───────────────

// Shared base: stem + ground + leaves
function PipBase({
  leftLeafFill = '#174D3A',
  rightLeafFill = '#DCEFE2',
  tilt = 0,
}: {
  leftLeafFill?: string;
  rightLeafFill?: string;
  tilt?: number;
}) {
  return (
    <g transform={`translate(50,60) rotate(${tilt})`}>
      {/* Ground circle */}
      <ellipse cx={0} cy={48} rx={14} ry={5} fill="#DDE3DC" />
      {/* Stem */}
      <line x1={0} y1={40} x2={0} y2={0} stroke="#174D3A" strokeWidth={4} strokeLinecap="round" />
      {/* Left leaf */}
      <path
        d="M0 0 C0 0 -30 -8 -28 -34 C-28 -34 -4 -28 0 0 Z"
        fill={leftLeafFill}
      />
      {/* Right leaf */}
      <path
        d="M0 0 C0 0 30 -8 28 -34 C28 -34 4 -28 0 0 Z"
        fill={rightLeafFill}
        stroke={leftLeafFill}
        strokeWidth={0.8}
      />
    </g>
  );
}

function PipWelcome() {
  return (
    <>
      <PipBase />
      {/* Friendly small dot-eyes */}
      <circle cx={43} cy={33} r={2.5} fill="#174D3A" />
      <circle cx={57} cy={33} r={2.5} fill="#174D3A" />
      {/* Gentle smile */}
      <path d="M44 40 Q50 46 56 40" stroke="#174D3A" strokeWidth={2} strokeLinecap="round" fill="none" />
    </>
  );
}

function PipLearning() {
  return (
    <>
      <PipBase tilt={-6} />
      {/* Pointing arm (right) */}
      <line x1={70} y1={55} x2={88} y2={45} stroke="#174D3A" strokeWidth={3} strokeLinecap="round" />
      {/* Small arrow tip */}
      <circle cx={88} cy={44} r={3} fill="#DCEFE2" stroke="#174D3A" strokeWidth={1.5} />
      {/* Eyes looking right */}
      <circle cx={44} cy={32} r={2.5} fill="#174D3A" />
      <circle cx={58} cy={31} r={2.5} fill="#174D3A" />
    </>
  );
}

function PipPreparation() {
  return (
    <>
      <PipBase />
      {/* Checklist lines beside Pip */}
      <rect x={65} y={28} width={22} height={3} rx={1.5} fill="#DCEFE2" />
      <rect x={65} y={36} width={18} height={3} rx={1.5} fill="#DCEFE2" />
      <rect x={65} y={44} width={20} height={3} rx={1.5} fill="#DCEFE2" />
      {/* Tick marks */}
      <path d="M61 30 L63 32 L67 27" stroke="#174D3A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Eyes focused down */}
      <circle cx={44} cy={34} r={2.5} fill="#174D3A" />
      <circle cx={56} cy={34} r={2.5} fill="#174D3A" />
    </>
  );
}

function PipVerification() {
  return (
    <>
      <PipBase tilt={3} leftLeafFill="#174D3A" rightLeafFill="#DCEFE2" />
      {/* Calm, neutral eyes */}
      <circle cx={44} cy={33} r={2} fill="#174D3A" />
      <circle cx={56} cy={33} r={2} fill="#174D3A" />
      {/* Small hourglass / clock element */}
      <circle cx={76} cy={28} r={9} fill="none" stroke="#DDE3DC" strokeWidth={2} />
      <path d="M76 22 L76 28 L80 31" stroke="#174D3A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  );
}

function PipSuccess() {
  return (
    <>
      <PipBase leftLeafFill="#176B45" rightLeafFill="#DCEFE2" tilt={-4} />
      {/* Happy eyes */}
      <path d="M41 31 Q44 28 47 31" stroke="#174D3A" strokeWidth={2} strokeLinecap="round" fill="none" />
      <path d="M53 31 Q56 28 59 31" stroke="#174D3A" strokeWidth={2} strokeLinecap="round" fill="none" />
      {/* Small checkmark badge */}
      <circle cx={68} cy={20} r={10} fill="#176B45" />
      <path d="M62 20 L66 24 L74 15" stroke="#FFFFFF" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Light sparkle */}
      <circle cx={30} cy={15} r={3} fill="#DCEFE2" opacity={0.8} />
      <circle cx={22} cy={28} r={2} fill="#DCEFE2" opacity={0.6} />
    </>
  );
}

function PipError() {
  return (
    <>
      <PipBase leftLeafFill="#5C675F" rightLeafFill="#DDE3DC" />
      {/* Neutral concerned eyes */}
      <circle cx={44} cy={34} r={2.5} fill="#5C675F" />
      <circle cx={56} cy={34} r={2.5} fill="#5C675F" />
      {/* Small flat mouth */}
      <line x1={45} y1={41} x2={55} y2={41} stroke="#5C675F" strokeWidth={2} strokeLinecap="round" />
      {/* Info badge */}
      <circle cx={68} cy={20} r={10} fill="#F8F7F2" stroke="#DDE3DC" strokeWidth={1.5} />
      <text x={68} y={25} textAnchor="middle" fontSize={14} fill="#B42318" fontWeight="bold">!</text>
    </>
  );
}
