// ChecklistItem — accessible checklist row with optional checkbox

interface ChecklistItemProps {
  label: string;
  note?: string;
  required?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  interactive?: boolean; // if true, renders a checkbox
  className?: string;
}

export function ChecklistItem({
  label,
  note,
  required = true,
  checked = false,
  onChange,
  interactive = false,
  className = '',
}: ChecklistItemProps) {
  return (
    <div className={`flex gap-3 py-3 border-b border-[#DDE3DC] last:border-b-0 ${className}`}>
      {/* Status icon / checkbox */}
      <div className="flex-shrink-0 mt-0.5">
        {interactive ? (
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => onChange?.(e.target.checked)}
              className="
                w-5 h-5 mt-0.5 rounded border-2 border-[#DDE3DC] bg-white
                checked:bg-[#174D3A] checked:border-[#174D3A]
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#174D3A]
                cursor-pointer
              "
              aria-label={label}
            />
          </label>
        ) : (
          <span
            aria-hidden="true"
            className="flex items-center justify-center w-5 h-5 mt-0.5 rounded-full bg-[#DCEFE2] border border-[#174D3A] text-[#174D3A]"
          >
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[15px] font-semibold text-[#18231D]">{label}</span>
          {required ? (
            <span className="text-[11px] font-medium text-[#174D3A] bg-[#DCEFE2] px-2 py-0.5 rounded-full">Required</span>
          ) : (
            <span className="text-[11px] font-medium text-[#5C675F] bg-[#F0F5F1] px-2 py-0.5 rounded-full">Helpful</span>
          )}
        </div>
        {note && (
          <p className="text-[13px] text-[#5C675F] mt-1 leading-relaxed">{note}</p>
        )}
      </div>
    </div>
  );
}
