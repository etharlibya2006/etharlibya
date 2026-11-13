import React from 'react';
import { Translations, Language } from '../data/translations';
import { Compass, Landmark, ShieldCheck, CheckCircle2, Warehouse, Truck } from 'lucide-react';
import { GalleryItem, getStoredGalleryItems } from '../data/store';

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

        {/* Central Bank of Libya (CBL) Compliance Certificate Box & Legal Accreditations */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border-2 border-[#b4362d] shadow-lg mb-20 relative">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-6">
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

          {/* Legal Identifiers & Trade Registration Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-stone-200">
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
              <span className="text-[11px] text-stone-500 block mb-1 font-mono">
                {lang === 'ar' ? 'السجل التجاري / الرخصة' : 'Commercial License'}
              </span>
              <span className="text-xs sm:text-sm font-bold text-stone-900 font-mono" dir="ltr">
                {t.contact.commercialLicense}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
              <span className="text-[11px] text-stone-500 block mb-1 font-mono">
                {lang === 'ar' ? 'الرقم الضريبي المعتمد' : 'Tax Identification No.'}
              </span>
              <span className="text-xs sm:text-sm font-bold text-stone-900 font-mono" dir="ltr">
                {t.contact.taxNumber}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
              <span className="text-[11px] text-stone-500 block mb-1 font-mono">
                {lang === 'ar' ? 'الغرفة التجارية (رقم النادي والقيد)' : 'Chamber of Commerce Reg.'}
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#b4362d] font-mono" dir="ltr">
                {t.contact.chamberReg}
              </span>
            </div>
          </div>
        </div>


        {/* Operational Infrastructure (Warehouses & Fleet Gallery) */}
        <OperationalShowcase t={t} lang={lang} />
      </div>
    </section>
  );
};

const OperationalShowcase: React.FC<{ t: Translations; lang: Language }> = ({ t, lang }) => {
  const [activeTab, setActiveTab] = React.useState<'all' | 'trucks' | 'warehouses' | 'distribution'>('all');
  const [selectedItem, setSelectedItem] = React.useState<GalleryItem | null>(null);
  const [galleryItems, setGalleryItems] = React.useState<GalleryItem[]>(() => getStoredGalleryItems());
  const [imgErrors, setImgErrors] = React.useState<Record<string, boolean>>({});
  const [fallbackTried, setFallbackTried] = React.useState<Record<string, boolean>>({});

  React.useEffect(() => {
    const handleUpdate = () => {
      setGalleryItems(getStoredGalleryItems());
      setImgErrors({});
      setFallbackTried({});
    };
    window.addEventListener('ethar_data_updated', handleUpdate);
    return () => window.removeEventListener('ethar_data_updated', handleUpdate);
  }, []);

  const safeGalleryItems = Array.isArray(galleryItems) ? galleryItems : [];
  const hasTrucks = safeGalleryItems.some((i) => i && i.category === 'trucks');
  const hasWarehouses = safeGalleryItems.some((i) => i && i.category === 'warehouses');
  const hasDistribution = safeGalleryItems.some((i) => i && i.category === 'distribution');

  const filteredItems = activeTab === 'all'
    ? safeGalleryItems
    : safeGalleryItems.filter((item) => item && item.category === activeTab);

  return (
    <div>
      {/* Title & Description */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <span className="text-xs font-bold text-[#b4362d] uppercase tracking-wider block mb-1 font-cinzel">
            {lang === 'ar' ? 'الميدان والأسطول على أرض الواقع' : 'OPERATIONAL REALITY & LOGISTICS'}
          </span>
          <h3 className="text-2xl sm:text-4xl font-black text-stone-900 font-cinzel">
            {t.about.facilitiesTitle}
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
            {lang === 'ar'
              ? 'صور حية وموثقة من مخازن الكريمية ورصيف الشحن وشاحنات أسطول التوزيع التي تجوب مختلف المدن الليبية يومياً.'
              : 'Authentic photos from our central Al-Karimiyah warehouses, shipping docks, and commercial transport fleet across Libya.'}
          </p>
        </div>

        {/* Filter Tabs */}
        {(hasTrucks || hasWarehouses || hasDistribution) && safeGalleryItems.length > 1 && (
          <div className="flex flex-wrap gap-2 p-1.5 bg-stone-200/70 rounded-xl">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-[#b4362d] shadow-sm'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              {lang === 'ar' ? 'جميع الصور الميدانية' : 'All Operations'}
            </button>
            {hasTrucks && (
              <button
                onClick={() => setActiveTab('trucks')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'trucks'
                    ? 'bg-white text-[#b4362d] shadow-sm'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                {lang === 'ar' ? 'الشاحنات والتفريغ المبرد' : 'Trucks & Cold Cargo'}
              </button>
            )}
            {hasWarehouses && (
              <button
                onClick={() => setActiveTab('warehouses')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'warehouses'
                    ? 'bg-white text-[#b4362d] shadow-sm'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                {lang === 'ar' ? 'مستودعات وسوق الكريمية' : 'Karimiyah Hub'}
              </button>
            )}
            {hasDistribution && (
              <button
                onClick={() => setActiveTab('distribution')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'distribution'
                    ? 'bg-white text-[#b4362d] shadow-sm'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                {lang === 'ar' ? 'التوزيع السريع في ليبيا' : 'Highway Logistics'}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Unified Authentic Facilities & Logistics Gallery Grid (Aspect-Square 1:1, Zero Duplication) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const hasError = !!imgErrors[item.id];
          return (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl bg-white border border-stone-200 hover:border-[#b4362d] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image Box - Aspect-Square (1:1 Ratio) */}
              <div className="relative aspect-square w-full bg-stone-900 overflow-hidden flex items-center justify-center">
                {!hasError ? (
                  <img
                    src={fallbackTried[item.id] && item.fallbackSrc ? item.fallbackSrc : item.src}
                    alt={lang === 'ar' ? item.titleAr : item.titleEn}
                    loading="eager"
                    decoding="async"
                    onError={() => {
                      if (item.fallbackSrc && !fallbackTried[item.id]) {
                        setFallbackTried((prev) => ({ ...prev, [item.id]: true }));
                      } else {
                        setImgErrors((prev) => ({ ...prev, [item.id]: true }));
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950 p-6 flex flex-col justify-between text-white relative">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#b4362d] flex items-center justify-center text-white shadow-md">
                        {item.category === 'trucks' || item.category === 'distribution' ? (
                          <Truck className="w-5 h-5 stroke-[2.2]" />
                        ) : (
                          <Warehouse className="w-5 h-5 stroke-[2.2]" />
                        )}
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/10 text-stone-200 border border-white/15">
                        {lang === 'ar' ? item.tagAr : item.tagEn}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#d9b239] block mb-1">
                        {lang === 'ar' ? item.badgeAr : item.badgeEn}
                      </span>
                      <h4 className="font-bold text-base text-white font-cinzel line-clamp-2">
                        {lang === 'ar' ? item.titleAr : item.titleEn}
                      </h4>
                    </div>
                  </div>
                )}
                {!hasError && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                )}

                {/* Tag / Badge */}
                {!hasError && (
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold border border-white/20">
                    <span>{lang === 'ar' ? item.tagAr : item.tagEn}</span>
                  </div>
                )}

                {/* Location pin & Title on photo */}
                {!hasError && (
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-mono text-[#d9b239] block mb-0.5">
                      {lang === 'ar' ? item.badgeAr : item.badgeEn}
                    </span>
                    <h4 className="font-bold text-sm sm:text-base leading-snug line-clamp-1">
                      {lang === 'ar' ? item.titleAr : item.titleEn}
                    </h4>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-stone-600 leading-relaxed mb-3 line-clamp-2">
                  {lang === 'ar' ? item.descAr : item.descEn}
                </p>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2 text-xs text-stone-500">
                  <span className="font-mono text-stone-700 truncate max-w-[65%]">
                    {lang === 'ar' ? item.locationAr : item.locationEn}
                  </span>
                  <span className="text-[#b4362d] font-bold group-hover:underline inline-flex items-center gap-1 shrink-0">
                    {lang === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full-Screen Lightbox Modal - Optimized for Square 1:1 Images */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors shadow-lg"
              title={lang === 'ar' ? 'إغلاق' : 'Close'}
            >
              ✕
            </button>

            {/* Modal Image Frame */}
            <div className="relative w-full min-h-[320px] max-h-[68vh] bg-stone-950 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
              {!imgErrors[selectedItem.id] ? (
                <img
                  src={fallbackTried[selectedItem.id] && selectedItem.fallbackSrc ? selectedItem.fallbackSrc : selectedItem.src}
                  alt={lang === 'ar' ? selectedItem.titleAr : selectedItem.titleEn}
                  onError={() => {
                    if (selectedItem.fallbackSrc && !fallbackTried[selectedItem.id]) {
                      setFallbackTried((prev) => ({ ...prev, [selectedItem.id]: true }));
                    } else {
                      setImgErrors((prev) => ({ ...prev, [selectedItem.id]: true }));
                    }
                  }}
                  className="max-h-[64vh] max-w-full aspect-square sm:aspect-auto object-contain mx-auto rounded-xl shadow-2xl"
                />
              ) : (
                <div className="text-center p-12 text-white flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#b4362d] flex items-center justify-center text-white mb-4 shadow-lg">
                    {selectedItem.category === 'trucks' || selectedItem.category === 'distribution' ? (
                      <Truck className="w-8 h-8 stroke-[2.2]" />
                    ) : (
                      <Warehouse className="w-8 h-8 stroke-[2.2]" />
                    )}
                  </div>
                  <span className="text-sm font-mono text-[#d9b239] block mb-2 font-bold">
                    {lang === 'ar' ? selectedItem.badgeAr : selectedItem.badgeEn}
                  </span>
                  <h4 className="text-lg font-bold text-white max-w-md">
                    {lang === 'ar' ? selectedItem.titleAr : selectedItem.titleEn}
                  </h4>
                </div>
              )}
              <div className="absolute top-4 left-4 bg-[#b4362d] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                {lang === 'ar' ? selectedItem.tagAr : selectedItem.tagEn}
              </div>
            </div>

            {/* Modal Details */}
            <div className="p-6 sm:p-8 bg-stone-50">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#b4362d]">
                  {lang === 'ar' ? selectedItem.badgeAr : selectedItem.badgeEn}
                </span>
                <span className="text-xs font-mono text-stone-500">
                  {lang === 'ar' ? selectedItem.locationAr : selectedItem.locationEn}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2 font-cinzel">
                {lang === 'ar' ? selectedItem.titleAr : selectedItem.titleEn}
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                {lang === 'ar' ? selectedItem.descAr : selectedItem.descEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

