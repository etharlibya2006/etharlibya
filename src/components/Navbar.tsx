import React, { useState, useEffect } from 'react';
import { Language, Translations } from '../data/translations';
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  t: Translations;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  t,
  activeSection,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'products', label: t.nav.products },
    { id: 'brands', label: t.nav.brands },
    { id: 'distribution', label: t.nav.distribution },
    { id: 'sourcing', label: t.nav.globalSourcing },
    { id: 'b2b', label: t.nav.b2b },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-md border-b-2 border-[#d9b239] py-2.5'
          : 'bg-white/95 backdrop-blur-sm py-4 border-b border-[#d9b239]/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 lg:gap-8">
          {/* Zone 1: Sovereign Brand Mark - Primary Logo (logo.svg) & Compact (logoo.svg) on mobile */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 text-left rtl:text-right shrink-0 group focus:outline-none"
          >
            {/* Desktop Primary Logo (logo.svg) */}
            <div className="hidden sm:block h-12 w-auto">
              <img
                src="./assets/aistudio/logo_d6d6ec2d.svg"
                alt="Ethar Libya Official Logo"
                className="h-full w-auto object-contain filter drop-shadow-sm group-hover:scale-[1.02] transition-transform"
              />
            </div>

            {/* Mobile Small Logo (logoo.svg) */}
            <div className="sm:hidden h-10 w-10">
              <img
                src="./assets/aistudio/logoo_78024bca.svg"
                alt="Ethar Libya Monogram Logo"
                className="h-full w-full object-contain filter drop-shadow-sm"
              />
            </div>

            <div className="flex flex-col border-r rtl:border-r-0 rtl:border-l border-[#d9b239]/40 pr-3 rtl:pr-0 rtl:pl-3">
              <span className="text-xs font-black text-[#b4362d] font-cinzel tracking-wider">
                {lang === 'ar' ? 'إيثار ليبيا' : 'ETHAR LIBYA'}
              </span>
              <span className="text-[10px] text-stone-500 font-mono">
                CBL COMPLIANT
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links on Crisp White */}
          <nav className="hidden xl:flex items-center gap-6 text-[13px] font-bold text-stone-700">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1.5 transition-all whitespace-nowrap shrink-0 group ${
                    isActive
                      ? 'text-[#b4362d] font-black'
                      : 'text-stone-700 hover:text-[#b4362d]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive ? (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#b4362d]" />
                  ) : (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d9b239] scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Language Switcher + Brick Red CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-stone-800 bg-[#f6f3ee] hover:bg-[#ede8df] border border-[#d9b239] rounded transition-all shadow-sm focus:outline-none"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#b4362d]" />
              <span className="font-mono">{t.nav.switchLang}</span>
            </button>

            {/* Primary Action Button - Brick Red with Gold Border */}
            <button
              onClick={() => handleNavClick('b2b')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white bg-[#b4362d] hover:bg-[#942921] rounded shadow-md shadow-[#b4362d]/25 transition-all hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 border border-[#d9b239]"
            >
              <span>{t.nav.ctaButton}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white stroke-[3]" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#b4362d] hover:bg-stone-100 border border-stone-200 rounded focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b-2 border-[#d9b239] px-5 pt-4 pb-8 mt-3 shadow-2xl">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-200 text-xs text-[#b4362d] font-mono font-bold">
            <span>{lang === 'ar' ? 'فهرس البوابة الرسمية' : 'PORTAL DIRECTORY'}</span>
            <span className="text-[#d9b239]">CBL ACCREDITED · 2006</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pb-4 text-xs">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-right rtl:text-right ltr:text-left px-3 py-2.5 rounded font-bold transition-all ${
                  activeSection === item.id
                    ? 'bg-[#b4362d] text-white'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavClick('b2b')}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-black uppercase text-white bg-[#b4362d] rounded shadow-md border border-[#d9b239]"
          >
            <span>{t.nav.ctaButton}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
