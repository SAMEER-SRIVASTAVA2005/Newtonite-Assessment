// ProgressIndicator — onboarding step tracker
// Shows 5 dots corresponding to the 5 onboarding screens.

interface ProgressIndicatorProps {
  steps: string[];
  current: number; // 0-indexed
  className?: string;
}

export function ProgressIndicator({ steps, current, className = '' }: ProgressIndicatorProps) {
  return (
    <nav aria-label="Onboarding progress" className={`flex items-center gap-2 ${className}`}>
      {steps.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div
            key={label}
            className="flex items-center gap-2"
          >
            <div
              aria-current={active ? 'step' : undefined}
              aria-label={`Step ${i + 1}: ${label}${done ? ' — complete' : active ? ' — current' : ''}`}
              className={`
                h-2 rounded-full transition-all duration-300
                ${active ? 'w-6 bg-[#174D3A]' : done ? 'w-2 bg-[#174D3A] opacity-40' : 'w-2 bg-[#DDE3DC]'}
              `}
            />
            {i < steps.length - 1 && (
              <div className={`h-px w-4 transition-colors duration-300 ${done ? 'bg-[#174D3A] opacity-40' : 'bg-[#DDE3DC]'}`} />
            )}
          </div>
        );
      })}
    </nav>
  );
}
