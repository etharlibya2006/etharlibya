import React from 'react';
import { Translations, Language } from '../data/translations';
import { ShieldCheck, MessageCircle, ArrowUp } from 'lucide-react';

interface FooterProps {
  t: Translations;
  lang: Language;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ t, lang, onNavigate }) => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#b4362d] border-t-3 border-[#d9b239] text-white/90 text-xs relative">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand info with Transparent PNG Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="select-none inline-block"
                title="Ethar Libya - إيثار ليبيا"
              >
                <img
                  src="./assets/logos/ethar_libya_logo.png"
                  alt="Ethar Libya Logo"
                  className="h-14 sm:h-16 w-auto object-contain filter drop-shadow-md brightness-110"
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

          {/* Corporate Contact Info & Social Media */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-cinzel">
              {lang === 'ar' ? 'المقر والتواصل المباشر' : 'EXECUTIVE CONTACT'}
            </h4>
            <div className="space-y-2.5 leading-relaxed font-mono">
              <p className="text-white">
                {lang === 'ar'
                  ? 'طرابلس، الكريمية – شارع الثانوية والعسل'
                  : 'Tripoli, Al-Karimiyah – Al-Thanawiya & Honey St'}
              </p>
              <div className="text-[#d9b239] font-bold text-xs flex flex-wrap gap-2" dir="ltr">
                <span>092 506 2360</span>
                <span>/</span>
                <span>091 325 3515</span>
              </div>
              <p className="text-white" dir="ltr">
                etharlibya2015@gmail.com
              </p>

              {/* Social Media Icons Strip */}
              <div className="pt-2 flex items-center gap-2">
                <a
                  href="https://www.facebook.com/share/1HXcNcEXPs/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all border border-white/20"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@etharlibya?_r=1&_t=ZS-9B54eWdwjyg"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="TikTok"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-black text-white flex items-center justify-center transition-all border border-white/20"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/etharlibya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#E4405F] text-white flex items-center justify-center transition-all border border-white/20"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>

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
