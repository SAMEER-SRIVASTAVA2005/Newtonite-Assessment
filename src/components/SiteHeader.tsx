// SiteHeader — responsive navigation
// Desktop: logo + nav links + Sign in + Primary CTA
// Mobile: logo + hamburger menu

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { SproutLogo } from './SproutLogo';
import { PrimaryButton } from './Buttons';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Product', href: '#how-it-works' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Learn', href: '#learn' },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleStart = () => {
    setMenuOpen(false);
    navigate('/onboarding/welcome');
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#DDE3DC] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" aria-label="Sprout home" className="flex-shrink-0">
          <SproutLogo className="text-lg" />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-[14px] font-medium text-[#5C675F] hover:text-[#174D3A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#174D3A] rounded transition-colors duration-150 px-1 py-0.5"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-[14px] font-medium text-[#174D3A] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#174D3A] rounded px-2 py-1">
            Sign in
          </button>
          <PrimaryButton onClick={handleStart} className="text-sm px-5 py-2.5">
            Start with ₹100
          </PrimaryButton>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center w-11 h-11 text-[#174D3A] hover:bg-[#DCEFE2] rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#174D3A] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-[#DDE3DC] px-4 py-4 flex flex-col gap-1"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-[15px] font-medium text-[#18231D] px-3 py-3 rounded-xl hover:bg-[#F8F7F2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#174D3A] min-h-[44px]"
            >
              {link.label}
            </button>
          ))}
          <hr className="border-[#DDE3DC] my-2" />
          <button className="text-left text-[15px] font-medium text-[#174D3A] px-3 py-3 rounded-xl hover:bg-[#F8F7F2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#174D3A] min-h-[44px]">
            Sign in
          </button>
          <PrimaryButton onClick={handleStart} fullWidth className="mt-2">
            Start with ₹100
          </PrimaryButton>
        </div>
      )}
    </header>
  );
}
