import React, { useState, useRef } from 'react';
import { Translations, Language } from '../data/translations';
import { ShieldCheck, MessageCircle, ArrowUp } from 'lucide-react';

interface FooterProps {
  t: Translations;
  lang: Language;
  onNavigate: (sectionId: string) => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ t, lang, onNavigate, onOpenAdmin }) => {
  const [clickCount, setClickCount] = useState(0);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleLogoClick = () => {
    setClickCount((prev) => {
      const next = prev + 1;
      if (next >= 5) {
        if (onOpenAdmin) onOpenAdmin();
        return 0;
      }
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
      clickTimerRef.current = setTimeout(() => {
        setClickCount(0);
      }, 3000);
      return next;
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#b4362d] border-t-3 border-[#d9b239] text-white/90 text-xs relative">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand info with Vector Primary SVG logo.svg */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                onClick={handleLogoClick}
                className="h-14 w-auto rounded overflow-hidden bg-white/10 p-1 border border-[#d9b239]/50 shadow-sm cursor-pointer select-none active:scale-95 transition-transform"
                title="Ethar Libya"
              >
                <img
                  src="./assets/aistudio/logo_d6d6ec2d.svg"
                  alt="Ethar Libya Logo"
                  className="h-full w-auto object-contain filter drop-shadow-md"
                />
              </div>
            </div>
            <p className="text-xs text-white/90 leading-relaxed font-light">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-2 text-white font-bold text-xs pt-1">
              <ShieldCheck className="w-4 h-4 text-[#d9b239] shrink-0" />
              <span className="font-mono text-[11px] text-[#d9b239]">{t.footer.cblAffiliation}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-cinzel">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {[
                { id: 'hero', label: t.nav.home },
                { id: 'about', label: t.nav.about },
                { id: 'products', label: t.nav.products },
                { id: 'brands', label: t.nav.brands },
                { id: 'distribution', label: t.nav.distribution },
                { id: 'sourcing', label: t.nav.globalSourcing },
                { id: 'b2b', label: t.nav.b2b },
                { id: 'contact', label: t.nav.contact },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-[#d9b239] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Product Brands */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-cinzel">
              {lang === 'ar' ? 'العلامات التجارية المعتمدة' : 'PORTFOLIO BRANDS'}
            </h4>
            <ul className="space-y-2.5 text-white/90">
              <li className="font-bold text-[#d9b239]">MONALISA – موناليزا (العلامة الخاصة)</li>
              <li>BAKEMATE – دايجستيف، كوكيز وبون تون</li>
              <li>Nutri-Food (غذائي) – كيك ووافل تيراميسو</li>
              <li>LookMe – بريوش كواسون شوكولاتة</li>
              <li>BOLANTY – بار جوز الهند بالشوكولاتة</li>
              <li>LIBRA – بسكويت القهوة بركة الحلال</li>
            </ul>
          </div>

          {/* Corporate Contact Info */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-cinzel">
              {lang === 'ar' ? 'المقر والتواصل المباشر' : 'EXECUTIVE CONTACT'}
            </h4>
            <div className="space-y-2.5 leading-relaxed font-mono">
              <p className="text-white">
                {lang === 'ar'
                  ? 'طرابلس، الكريمية – شارع الثانوية'
                  : 'Tripoli, Al-Karimiyah – Al-Thanawiya St'}
              </p>
              <p className="text-[#d9b239] font-bold" dir="ltr">
                Tel: 0925062360 / 0913253515
              </p>
              <p className="text-white">
                Email: ethar.libya2015@gmail.com
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/218925062360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 py-2 px-3.5 rounded bg-emerald-600 border border-white text-white font-bold hover:bg-emerald-700 transition-colors shadow"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'تواصل فوري عبر واتساب' : 'Direct WhatsApp'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 bg-[#87251d] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/80 text-[11px] text-center sm:text-left rtl:sm:text-right font-mono">
            {t.footer.rights}
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#d9b239] hover:text-white transition-colors font-cinzel font-bold"
          >
            <span>{lang === 'ar' ? 'العودة للأعلى' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Floating Instant WhatsApp Button */}
      <a
        href="https://wa.me/218925062360"
        target="_blank"
        rel="noopener noreferrer"
        title={lang === 'ar' ? 'محادثة فورية مع إيثار ليبيا' : 'Chat with Ethar Libya'}
        className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40 w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_4px_25px_rgba(16,185,129,0.5)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </a>
    </footer>
  );
};
