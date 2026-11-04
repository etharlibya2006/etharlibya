import React from 'react';
import { Translations, Language } from '../data/translations';
import { Compass, Landmark, ShieldCheck, CheckCircle2, Warehouse, Truck } from 'lucide-react';

interface AboutSectionProps {
  t: Translations;
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ t, lang }) => {
  const romanNumerals = ['I', 'II', 'III', 'IV', 'V'];

  return (
    <section id="about" className="py-24 bg-[#fbf9f6] border-t-2 border-[#d9b239] text-stone-900 relative overflow-hidden">
      {/* Background Subtle Monogram Watermark Graphic */}
      <div className="absolute top-12 right-12 opacity-[0.04] pointer-events-none select-none">
        <img
          src="./assets/aistudio/logoo_78024bca.svg"
          alt=""
          className="w-[480px] h-[480px] object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-10 bg-[#b4362d]" />
            <span className="text-xs font-bold text-[#b4362d] tracking-widest uppercase font-cinzel">
              {t.about.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight mb-4 font-cinzel">
            {t.about.title}
          </h2>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
            {t.about.intro}
          </p>
        </div>

        {/* Historical Timeline Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* 2006 */}
          <div className="p-8 rounded-2xl bg-white border-2 border-stone-200 hover:border-[#b4362d] transition-all relative group shadow-sm">
            <div className="text-4xl sm:text-5xl font-black text-[#b4362d] font-cinzel mb-3">
              {t.about.milestone1Year}
            </div>
            <div className="h-1 w-12 bg-[#d9b239] mb-4 group-hover:w-24 transition-all" />
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              {t.about.milestone1Title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {t.about.milestone1Desc}
            </p>
          </div>

          {/* 2015 */}
          <div className="p-8 rounded-2xl bg-white border-2 border-[#d9b239] shadow-lg relative group">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#b4362d]" />
            <div className="text-4xl sm:text-5xl font-black text-[#b4362d] font-cinzel mb-3">
              {t.about.milestone2Year}
            </div>
            <div className="h-1 w-12 bg-[#b4362d] mb-4 group-hover:w-24 transition-all" />
            <h3 className="text-lg font-bold text-[#b4362d] mb-2 font-cinzel">
              {t.about.milestone2Title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {t.about.milestone2Desc}
            </p>
          </div>

          {/* Today */}
          <div className="p-8 rounded-2xl bg-white border-2 border-stone-200 hover:border-[#b4362d] transition-all relative group shadow-sm">
            <div className="text-4xl sm:text-5xl font-black text-[#b4362d] font-cinzel mb-3">
              {t.about.milestone3Year}
            </div>
            <div className="h-1 w-12 bg-[#d9b239] mb-4 group-hover:w-24 transition-all" />
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              {t.about.milestone3Title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {t.about.milestone3Desc}
            </p>
          </div>
        </div>

        {/* Vision & Mission as Sovereign Charters on White */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="p-8 sm:p-10 rounded-2xl bg-white border-2 border-[#d9b239] shadow-md relative corner-brackets">
            <div className="w-12 h-12 rounded-lg bg-[#b4362d] flex items-center justify-center text-white mb-6 shadow">
              <Compass className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-3 font-cinzel">
              {t.about.visionTitle}
            </h3>
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              {t.about.visionDesc}
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-white border-2 border-[#d9b239] shadow-md relative corner-brackets">
            <div className="w-12 h-12 rounded-lg bg-[#b4362d] flex items-center justify-center text-white mb-6 shadow">
              <Landmark className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-3 font-cinzel">
              {t.about.missionTitle}
            </h3>
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              {t.about.missionDesc}
            </p>
          </div>
        </div>

        {/* 5 Strategic Pillars */}
        <div className="mb-20">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold text-[#b4362d] uppercase tracking-wider block mb-1 font-cinzel">
              {lang === 'ar' ? 'القيمة التنافسية للشركة' : 'CORE VALUE PROPOSITIONS'}
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-stone-900 font-cinzel">
              {t.about.whyUsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.about.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-stone-200 hover:border-[#b4362d] transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-black font-cinzel text-[#b4362d]">
                      {romanNumerals[idx]}.
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-[#d9b239]" />
                  </div>
                  <h4 className="text-base font-bold text-stone-900 mb-2 font-cinzel">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Central Bank of Libya (CBL) Compliance Certificate Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border-2 border-[#b4362d] shadow-lg mb-20 relative">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="w-16 h-16 rounded-xl bg-[#b4362d] flex items-center justify-center text-white shrink-0 shadow-md">
              <ShieldCheck className="w-10 h-10 stroke-[2.2]" />
            </div>
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-[#b4362d] uppercase tracking-wider font-mono">
                  {lang === 'ar' ? 'اعتماد مصرفي وتجاري رسمي' : 'OFFICIAL BANKING ACCREDITATION'}
                </span>
                <span className="text-stone-400">·</span>
                <span className="text-xs text-stone-600 font-mono">
                  CENTRAL BANK OF LIBYA (CBL)
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-stone-900">
                {t.about.cblComplianceTitle}
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {t.about.cblComplianceDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Operational Infrastructure (Warehouses & Fleet) */}
        <div>
          <h3 className="text-xl sm:text-3xl font-black text-stone-900 mb-8 font-cinzel">
            {t.about.facilitiesTitle}
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Warehouse Facility */}
            <div className="group rounded-2xl overflow-hidden bg-white border-2 border-stone-200 hover:border-[#b4362d] transition-all shadow-md">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src="/src/assets/images/fmcg_logistics_warehouse_1793782333131.jpg"
                  alt="Ethar Libya FMCG Warehouses"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
                  <Warehouse className="w-5 h-5 text-[#d9b239]" />
                  <span className="font-bold text-sm sm:text-base font-cinzel text-white">
                    {lang === 'ar' ? 'المستودعات المركزية وسلاسل التخزين' : 'Central Logistics & Warehousing Hub'}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {t.about.facilityWarehouse}
                </p>
                <div className="mt-4 pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500 font-mono">
                  <span>{lang === 'ar' ? 'الموقع: طرابلس - الكريمية' : 'Al-Karimiyah, Tripoli'}</span>
                  <span className="text-[#b4362d] font-bold">{lang === 'ar' ? 'تخزين مطابق للمواصفات' : 'Certified High-Bay Storage'}</span>
                </div>
              </div>
            </div>

            {/* Distribution Fleet */}
            <div className="group rounded-2xl overflow-hidden bg-white border-2 border-stone-200 hover:border-[#b4362d] transition-all shadow-md">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src="/src/assets/images/food_distribution_fleet_1793782332269.jpg"
                  alt="Ethar Libya Distribution Fleet"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
                  <Truck className="w-5 h-5 text-[#d9b239]" />
                  <span className="font-bold text-sm sm:text-base font-cinzel text-white">
                    {lang === 'ar' ? 'أسطول شاحنات التوزيع المجهزة' : 'Nationwide Commercial Distribution Fleet'}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {t.about.facilityFleet}
                </p>
                <div className="mt-4 pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500 font-mono">
                  <span>{lang === 'ar' ? 'تغطية: شرق، غرب، وجنوب ليبيا' : 'Nationwide Fleet Coverage'}</span>
                  <span className="text-[#b4362d] font-bold">{lang === 'ar' ? 'انطلاق يومي منتظم' : 'Daily Scheduled Routes'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
