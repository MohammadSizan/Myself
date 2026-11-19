import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolio';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(`#${sectionIds[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#100B1C]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 transition-colors hover:text-[#F04BCB]"
        >
          {PORTFOLIO_DATA.name}
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#B9AFC8]"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-white ${
                  isActive ? 'text-white' : ''
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#C13BFF] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#C13BFF] px-4 py-2 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-[#F04BCB]"
          >
            Contact Me
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-[#211632] text-white transition-colors hover:border-[#C13BFF]/50 md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav-menu"
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-[#191127] px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {[...NAV_LINKS, { label: 'Contact', href: '#contact' }].map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`flex min-h-[44px] items-center justify-between rounded-lg px-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#211632] text-white'
                      : 'text-[#B9AFC8] hover:bg-[#211632]/60 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="text-xs font-medium text-[#F04BCB]">Current</span>
                  )}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
