import React from 'react';
import { Translations, Language } from '../data/translations';
import { ArrowUpRight, ShieldCheck, FileCheck2, TrendingUp, Truck, Landmark } from 'lucide-react';

interface GlobalSourcingProps {
  t: Translations;
  lang: Language;
  onOpenB2B: () => void;
}

export const GlobalSourcing: React.FC<GlobalSourcingProps> = ({ t, lang, onOpenB2B }) => {
  return (
    <section id="sourcing" className="py-24 bg-[#fbf9f6] border-t-2 border-[#d9b239] text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-0.5 w-10 bg-[#b4362d]" />
            <span className="text-xs font-bold text-[#b4362d] tracking-widest uppercase font-cinzel">
              {t.globalSourcing.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight mb-3 font-cinzel">
            {t.globalSourcing.title}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            {t.globalSourcing.subtitle}
          </p>
        </div>

        {/* The Exact User-Requested Headline Callout in Bold Brick Red & Gold */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#b4362d] via-[#9e2b22] to-[#7a1e17] border-3 border-[#d9b239] shadow-2xl mb-16 relative overflow-hidden corner-brackets text-white">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold text-[#d9b239] font-cinzel tracking-wider uppercase">
                <Landmark className="w-4 h-4 text-[#d9b239]" />
                <span>{t.globalSourcing.quoteTitle}</span>
              </div>
              <p className="text-xl sm:text-3xl font-black text-white leading-relaxed font-cinzel">
                {t.globalSourcing.quoteText}
              </p>
              <div className="flex items-center gap-4 text-xs text-amber-200 font-mono pt-2">
                <span>Central Bank of Libya Approved Trade Facility</span>
                <span>·</span>
                <span>Documentary L/C Financing</span>
              </div>
            </div>

            <button
              onClick={onOpenB2B}
              className="inline-flex items-center gap-2 px-8 py-4 text-xs sm:text-sm font-black uppercase text-[#50120d] bg-gradient-to-r from-[#d9b239] via-[#f7d86f] to-[#d9b239] hover:brightness-110 rounded shadow-xl transition-all whitespace-nowrap shrink-0 border-2 border-white"
            >
              <span>{lang === 'ar' ? 'تقديم طلب شراكة تجارية' : 'Initiate Trade Partnership'}</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>

        {/* Global Sourcing Nations Grid */}
        <div className="mb-16">
          <div className="mb-8">
            <h3 className="text-xl sm:text-3xl font-black text-stone-900 mb-2 font-cinzel">
              {t.globalSourcing.countriesTitle}
            </h3>
            <p className="text-stone-600 text-sm font-light">
              {t.globalSourcing.countriesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {t.globalSourcing.countriesList.map((country, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-[#b4362d] transition-all flex flex-col justify-between shadow-sm group"
              >
                <div>
                  <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {country.flag}
                  </div>
                  <h4 className="text-base font-bold text-stone-900 mb-1.5 font-cinzel">
                    {country.name}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">
                    {country.special}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] text-[#b4362d] font-mono font-bold flex items-center justify-between">
                  <span>{lang === 'ar' ? 'اعتماد L/C رسمي' : 'Banking L/C Line'}</span>
                  <span>✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Compelling Reasons for Global Factories to Choose Ethar Libya */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.globalSourcing.internationalAdvantages.map((adv, idx) => {
            const icons = [ShieldCheck, FileCheck2, TrendingUp, Truck];
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-stone-200 hover:border-[#b4362d] transition-colors flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#b4362d] flex items-center justify-center text-white mb-4 shadow">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <h4 className="text-base font-bold text-stone-900 mb-2 font-cinzel">
                    {adv.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                    {adv.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
