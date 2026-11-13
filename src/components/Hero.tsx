import React from 'react';
import { Translations, Language } from '../data/translations';
import { ShieldCheck, ArrowRight, ArrowLeft, Anchor, Compass } from 'lucide-react';

interface HeroProps {
  t: Translations;
  lang: Language;
  onExploreProducts: () => void;
  onPartnerWithUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  t,
  lang,
  onExploreProducts,
  onPartnerWithUs,
}) => {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="hero"
      className="relative min-h-[94vh] flex flex-col justify-between pt-28 pb-8 overflow-hidden bg-white white-paper-grid text-stone-900"
    >
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none select-none">
        <img
          src="./assets/aistudio/logoo_78024bca.svg"
          alt=""
          className="w-full h-full object-contain scale-150 rotate-12"
        />
      </div>

      {/* Main Architectural Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full pt-4 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Editorial & Brand Column */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-start lg:rtl:text-right">
            {/* 1. Ethar Libya Rosette Monogram Emblem - Exactly as shown in screenshot */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                <img
                  src="./assets/aistudio/logoo_78024bca.svg"
                  alt="Ethar Libya Monogram"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>
            </div>

            {/* 2. CBL Sovereign Authority Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#f6f3ee] border border-[#d9b239] shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#b4362d] shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold text-[#b4362d] tracking-wider font-cinzel">
                  {t.hero.cblBadge}
                </span>
              </div>
            </div>

            {/* 3. Official MONA LISA Flagship Brand Logo with Italian Stripes - Centerpiece as in screenshot */}
            <div className="w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto lg:mx-0 my-1 flex justify-center lg:justify-start">
              <img
                src="./assets/logos/monalisa_italy_flag_transparent.png"
                alt="MONA LISA Brand Logo"
                className="w-full h-auto object-contain filter drop-shadow-md select-none pointer-events-none"
              />
            </div>

            {/* 4. Slogan Banner (shown on desktop / tablet for institutional depth) */}
            <div className="hidden sm:block relative p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#fbf9f5] via-white to-[#f6f3ee] border-r-4 rtl:border-r-4 ltr:border-l-4 border-[#b4362d] border-t border-b border-l rtl:border-l border-[#d9b239]/40 shadow-xs text-start rtl:text-right">
              <div className="flex items-center justify-between gap-4 mb-1">
                <p className="text-base sm:text-lg font-extrabold text-[#b4362d] tracking-wide font-cinzel">
                  {t.hero.slogan}
                </p>
                <span className="text-[11px] text-[#d9b239] font-mono tracking-widest uppercase font-bold">
                  MMVI · 2006
                </span>
              </div>
              <p className="text-xs text-stone-600 font-mono">
                {lang === 'ar'
                  ? 'اعتمادات بنكية رسمية · تغطية سلاسل الإمداد والتخزين الجاف والمبرد'
                  : 'Central Bank L/C Lines · Temperature-Controlled Nationwide Supply Chain'}
              </p>
            </div>

            {/* 5. Concrete Value Description - Matching user screenshot */}
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {t.hero.subheadline}
            </p>

            {/* 6. Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#b4362d] hover:bg-[#942921] rounded shadow-lg shadow-[#b4362d]/25 transition-all hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap border border-[#d9b239]"
              >
                <span>{t.hero.exploreProducts}</span>
                <ArrowIcon className="w-4 h-4 stroke-[3]" />
              </button>

              <button
                onClick={onPartnerWithUs}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-bold text-[#b4362d] bg-white hover:bg-[#fbf9f5] border-2 border-[#b4362d] rounded transition-all hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shadow-sm"
              >
                <Compass className="w-4 h-4 text-[#d9b239]" />
                <span>{t.hero.partnerWithUs}</span>
              </button>
            </div>
          </div>

          {/* Product Spotlight & Maritime Visual Showcase Card on White */}
          <div className="lg:col-span-5 relative hidden sm:block">
            <div className="relative p-6 rounded-2xl bg-white border-2 border-[#d9b239] shadow-xl">
              {/* Corner Bracket Accents in Gold */}
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#d9b239]" />
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#d9b239]" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#d9b239]" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#d9b239]" />

              <div className="flex items-center justify-between pb-3 border-b border-stone-200 text-xs">
                <div className="flex items-center gap-2">
                  {/* Rosette Small Logo (logoo.svg) */}
                  <img
                    src="./assets/aistudio/logoo_78024bca.svg"
                    alt="Emblem"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="font-bold text-[#b4362d] tracking-wider uppercase font-cinzel">
                    {lang === 'ar' ? 'العلامة الخاصة الرائدة' : 'FLAGSHIP PROPRIETARY BRAND'}
                  </span>
                </div>
                <span className="text-[11px] text-[#d9b239] font-mono font-bold">MONALISA · ERAS</span>
              </div>

              {/* Marquee Packagings */}
              <div className="grid grid-cols-2 gap-3 my-4">
                {/* Product 1: Choco Biscuit */}
                <div className="group rounded-xl bg-[#fcfbfa] p-3 border border-stone-200 hover:border-[#b4362d] transition-all text-center shadow-sm">
                  <div className="h-32 w-full flex items-center justify-center p-1 mb-2">
                    <img
                      src="./assets/aistudio/ChatGPT_Image_Nov_4__2026__01_59_11_PM-2_b91814cf.webp"
                      alt="MONALISA Choco Biscuit"
                      loading="eager"
                      decoding="async"
                      className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-xs font-bold text-stone-900 block truncate">
                    {lang === 'ar' ? 'بسكويت شوكو بيسكويت' : 'Choco Biscuit'}
                  </span>
                  <span className="text-[10px] text-[#b4362d] font-mono font-bold">Cocoa & Milk</span>
                </div>

                {/* Product 2: Condensed Milk Gold Can */}
                <div className="group rounded-xl bg-[#fcfbfa] p-3 border border-stone-200 hover:border-[#b4362d] transition-all text-center shadow-sm">
                  <div className="h-32 w-full flex items-center justify-center p-1 mb-2">
                    <img
                      src="./assets/aistudio/ChatGPT_Image_Nov_4__2026__01_29_09_PM-9_7877b288.webp"
                      alt="MONALISA Sweetened Condensed Milk"
                      loading="eager"
                      decoding="async"
                      className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-xs font-bold text-stone-900 block truncate">
                    {lang === 'ar' ? 'حليب مكثف محلى' : 'Condensed Milk'}
                  </span>
                  <span className="text-[10px] text-[#d9b239] font-mono font-bold">397g · 100% Milk</span>
                </div>
              </div>

              {/* Coordinates Badge */}
              <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-600">
                <span className="flex items-center gap-1.5 font-mono text-[#b4362d] font-bold">
                  <Anchor className="w-3.5 h-3.5 text-[#d9b239]" />
                  <span>32°53' N · 13°11' E</span>
                </span>
                <span className="text-stone-600">
                  {lang === 'ar' ? 'ميناء طرابلس التجاري' : 'Tripoli Commercial Port'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Strip on Crisp White with Gold Hairlines */}
      <div className="relative z-10 w-full border-t-2 border-[#d9b239] bg-[#fbf9f6] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="border-r rtl:border-r-0 rtl:border-l border-stone-200 pr-4 rtl:pr-0 rtl:pl-4">
              <span className="block text-2xl sm:text-3xl font-black text-[#b4362d] font-cinzel tabular-nums">
                {t.hero.metrics.experience.value}
              </span>
              <span className="text-xs text-stone-600 font-medium">
                {t.hero.metrics.experience.label}
              </span>
            </div>

            <div className="border-r rtl:border-r-0 rtl:border-l border-stone-200 pr-4 rtl:pr-0 rtl:pl-4">
              <span className="block text-2xl sm:text-3xl font-black text-stone-900 font-cinzel tabular-nums">
                {t.hero.metrics.coverage.value}
              </span>
              <span className="text-xs text-stone-600 font-medium">
                {t.hero.metrics.coverage.label}
              </span>
            </div>

            <div className="border-r rtl:border-r-0 rtl:border-l border-stone-200 pr-4 rtl:pr-0 rtl:pl-4">
              <span className="block text-2xl sm:text-3xl font-black text-[#b4362d] font-cinzel tabular-nums">
                {t.hero.metrics.productsCount.value}
              </span>
              <span className="text-xs text-stone-600 font-medium">
                {t.hero.metrics.productsCount.label}
              </span>
            </div>

            <div>
              <span className="block text-2xl sm:text-3xl font-black text-stone-900 font-cinzel tabular-nums">
                {t.hero.metrics.countries.value}
              </span>
              <span className="text-xs text-stone-600 font-medium">
                {t.hero.metrics.countries.label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
