// Shared button primitives

import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fullWidth?: boolean;
}

export function PrimaryButton({ children, fullWidth, className = '', ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        inline-flex items-center justify-center
        min-h-[44px] min-w-[44px] px-6 py-3
        bg-[#174D3A] text-white
        text-sm font-semibold tracking-wide rounded-xl
        hover:bg-[#10372B] active:bg-[#0b2820]
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#174D3A]
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-colors duration-150
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, fullWidth, className = '', ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        inline-flex items-center justify-center
        min-h-[44px] min-w-[44px] px-6 py-3
        bg-transparent text-[#174D3A]
        text-sm font-semibold tracking-wide rounded-xl
        border border-[#174D3A]
        hover:bg-[#DCEFE2] active:bg-[#c8e8d5]
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#174D3A]
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-colors duration-150
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export function GhostButton({ children, fullWidth, className = '', ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        inline-flex items-center justify-center
        min-h-[44px] min-w-[44px] px-4 py-2
        bg-transparent text-[#5C675F]
        text-sm font-medium rounded-lg
        hover:text-[#174D3A] hover:bg-[#F0F5F1]
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#174D3A]
        transition-colors duration-150
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
