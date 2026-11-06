import React from 'react';
import { Translations, Language } from '../data/translations';
import { Compass, Landmark, ShieldCheck, CheckCircle2, Warehouse, Truck } from 'lucide-react';
import warehouseImg from '../assets/images/fmcg_logistics_warehouse_1793782333131.webp';
import fleetImg from '../assets/images/food_distribution_fleet_1793782332269.webp';

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

        {/* Authorized Brand Logos Banner (الشعارات والوكالات الحصرية المعتمدة) */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-black text-[#b4362d] uppercase tracking-widest font-mono block mb-2">
              {lang === 'ar' ? 'العلامات التجارية المعتمدة والشعارات الحصرية' : 'AUTHORIZED BRANDS & EXCLUSIVE LOGOS'}
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-stone-900 font-cinzel">
              {lang === 'ar' ? 'شعارات العلامات التجارية الرائدة' : 'Official Authorized Brand Identities'}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-600">
              {lang === 'ar'
                ? 'علامات غذائية دولية ومحلية موثوقة تستوردها وتوزعها شركة إيثار ليبيا وفق أعلى مواصفات الجودة'
                : 'International and regional flagship food brands exclusively imported and distributed by Ethar Libya'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* MONA LISA LOGO */}
            <div className="p-6 rounded-2xl bg-white border-2 border-stone-200 hover:border-[#b4362d] transition-all shadow-sm flex flex-col items-center text-center group">
              <div className="w-full h-36 flex items-center justify-center p-3 mb-4 bg-stone-50 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src="./assets/logos/monalisa_italy_flag.webp"
                  alt="MONA LISA Italy Logo"
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                {lang === 'ar' ? 'العلامة الرائدة الأكثر طلباً' : 'Flagship Brand'}
              </div>
              <h4 className="text-lg font-bold text-stone-900 font-cinzel">MONALISA · موناليزا</h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                {lang === 'ar'
                  ? 'تشكيلة الويفر الإيطالي، سويس رول الشوكولاتة، الكيك، والحليب المكثف المحلى الفاخر.'
                  : 'Italian-style crispy wafers, Swiss rolls, chocolate confectionery, and sweetened condensed milk.'}
              </p>
            </div>

            {/* BAKEMATE LOGO */}
            <div className="p-6 rounded-2xl bg-white border-2 border-stone-200 hover:border-[#d9b239] transition-all shadow-sm flex flex-col items-center text-center group">
              <div className="w-full h-36 flex items-center justify-center p-3 mb-4 bg-stone-50 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src="./assets/logos/bakemate_seal.svg"
                  alt="BAKEMATE Circular Seal Logo"
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 text-[11px] font-bold mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d9b239]" />
                {lang === 'ar' ? 'مخبوزات وبسكويت عالمي' : 'Global Bakery Lines'}
              </div>
              <h4 className="text-lg font-bold text-stone-900 font-cinzel">BAKEMATE · بيك ميت</h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                {lang === 'ar'
                  ? 'رولات الويفر المحشوة بون تون (Bon Ton)، بسكويت الدايجستيف بالقمح الكامل، وشوكو بي آر.'
                  : 'Bon Ton chocolate wafer rolls, whole wheat digestives, and Choco BR crispy biscuits.'}
              </p>
            </div>

            {/* LookMe LOGO */}
            <div className="p-6 rounded-2xl bg-stone-950 border-2 border-stone-800 hover:border-[#d9b239] transition-all shadow-sm flex flex-col items-center text-center group text-white">
              <div className="w-full h-36 flex items-center justify-center p-3 mb-4 bg-black rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src="./assets/logos/lookme_logo.svg"
                  alt="LookMe Pastry Logo"
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-800 text-stone-300 text-[11px] font-bold mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                {lang === 'ar' ? 'كواسون وبريوش فاخر' : 'French Viennoiserie'}
              </div>
              <h4 className="text-lg font-bold text-white font-cinzel">LookMe · لوك مي</h4>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                {lang === 'ar'
                  ? 'بريوش الكواسون المورق والمحشو بكريمة الكاكاو الذائبة بعبوات 24 قطعة مخصصة للمقاهي والمدارس.'
                  : 'Flaky brioche croissants filled with luscious melted cocoa cream in 24-piece cartons.'}
              </p>
            </div>
          </div>
        </div>

        {/* Operational Infrastructure (Warehouses & Fleet Gallery) */}
        <OperationalShowcase t={t} lang={lang} />
      </div>
    </section>
  );
};

interface GalleryItem {
  id: string;
  category: 'trucks' | 'warehouses' | 'distribution';
  src: string;
  fallbackSrc: string;
  titleAr: string;
  titleEn: string;
  tagAr: string;
  tagEn: string;
  descAr: string;
  descEn: string;
  locationAr: string;
  locationEn: string;
  badgeAr: string;
  badgeEn: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'bonton_fleet_dispatch',
    category: 'trucks',
    src: './assets/facilities/bonton_fleet_dispatch.webp',
    fallbackSrc: './assets/facilities/bonton_fleet_dispatch.jpg',
    titleAr: 'تفريغ وشحن بون تون وشوكو بي آر (شاحنة ليبيا 25-53205)',
    titleEn: 'Bakemate Freight Handling (Libya Plate 25-53205)',
    tagAr: 'مناولة لوجستية متخصصة',
    tagEn: 'Professional Freight Handling',
    descAr: 'فريق العمل اللوجستي داخل الشاحنة لتفريغ وترتيب كراتين رولات بون تون (Bon Ton)، وبسكويت شوكو بي آر (Choco BR)، ويم وان (Wim Wan).',
    descEn: 'Logistics handling crew inside the commercial transport vehicle unloading cartons of Bon Ton rolls and Choco BR biscuits for scheduled store distribution.',
    locationAr: 'طرابلس - الكريمية · رصيف شحن الجملة',
    locationEn: 'Tripoli Karimiyah Wholesale Dispatch Bay',
    badgeAr: 'لوحة الشاحنة: ليبيا 25-53205',
    badgeEn: 'Vehicle Plate: Libya 25-53205',
  },
  {
    id: 'truck_loading_dock',
    category: 'trucks',
    src: './assets/facilities/truck_loading_dock.webp',
    fallbackSrc: './assets/facilities/truck_loading_dock.jpg',
    titleAr: 'تفريغ وتوريد شحنات مونا ليسا سويس رول',
    titleEn: 'Container Dock Unloading - Mona Lisa Swiss Rolls',
    tagAr: 'رصيف التحميل المباشر',
    tagEn: 'Direct Logistics Loading Dock',
    descAr: 'وصول الشاحنات المحملة بكراتين سويس رول مونا ليسا إلى رصيف التحميل المجهز بالمستودع المركزي بالكريمية، لتصنيفها وتوزيعها المباشر.',
    descEn: 'Heavy logistics trailers docking at Tripoli Karimiyah hub unloading pallets of Mona Lisa Swiss Roll cartons for direct dispatch.',
    locationAr: 'طرابلس - الكريمية · مستودع الاستلام المركزي',
    locationEn: 'Tripoli - Al-Karimiyah Central Logistics Hub',
    badgeAr: 'شحنات يومية منتظمة',
    badgeEn: 'Daily Scheduled Inbound',
  },
  {
    id: 'refrigerated_fleet_worker',
    category: 'trucks',
    src: './assets/facilities/refrigerated_fleet_worker.webp',
    fallbackSrc: './assets/facilities/refrigerated_fleet_worker.jpg',
    titleAr: 'أسطول شاحنات التبريد المجهزة (لوحة طرابلس ن 34 - 2)',
    titleEn: 'Insulated Refrigerated Fleet (Tripoli Plate 34-2 N)',
    tagAr: 'نقل مبرد ومكيف 100%',
    tagEn: 'Temperature-Controlled Logistics',
    descAr: 'تحميل كراتين ويفر مونا ليسا سنوفليك واكسترا داخل مقصورة التبريد المعزولة لضمان ثبات القوام وجودة الشوكولاتة في مختلف فصول السنة.',
    descEn: 'Logistics crew loading Mona Lisa Snowflake and Extra wafers into modern insulated refrigerated cargo bays preserving crispiness.',
    locationAr: 'مستودعات الكريمية · رصيف شاحنات التبريد',
    locationEn: 'Karimiyah Warehousing · Refrigerated Fleet Bay',
    badgeAr: 'لوحة نقل معتمدة: ن 34 - 2',
    badgeEn: 'Official Plate: 34-2 N',
  },
  {
    id: 'pickup_distribution_road',
    category: 'distribution',
    src: './assets/facilities/pickup_distribution_road.webp',
    fallbackSrc: './assets/facilities/pickup_distribution_road.jpg',
    titleAr: 'شاحنات التوزيع التجاري السريع على الطرق الليبية',
    titleEn: 'Commercial Highway Express Delivery (Mona Lisa Wafers)',
    tagAr: 'تغذية الأسواق والمحال',
    tagEn: 'Rapid Retail Replenishment',
    descAr: 'شاحنات النقل الخفيف تنطلق يومياً محملة بكراتين ويفر مونا ليسا اكسترا (أزرق، أحمر، أخضر) لتوصيلها فورياً لمحلات التجزئة والسوبرماركت.',
    descEn: 'Commercial delivery pickup transporting stacked secured Mona Lisa cartons across Libyan arterial highways directly to retailers.',
    locationAr: 'الطريق الساحلي وشرايين النقل بين المدن',
    locationEn: 'Tripoli Arterial Expressways & Regional Routes',
    badgeAr: 'توصيل خلال 24 ساعة',
    badgeEn: '24h Fast Fulfillment',
  },
  {
    id: 'karimiyah_showroom_shelf',
    category: 'warehouses',
    src: './assets/facilities/karimiyah_showroom_shelf.webp',
    fallbackSrc: './assets/facilities/karimiyah_showroom_shelf.jpg',
    titleAr: 'صالة عرض المنتجات النموذجية بالكريمية',
    titleEn: 'Al-Karimiyah Showroom Unit (Honey St & High School St)',
    tagAr: 'الكريمية شارع العسل والثانوية',
    tagEn: 'Al-Karimiyah Honey St & High School St',
    descAr: 'جناح وخزانة العرض النموذجية التي تضم أصناف ويفر مونا ليسا، بورتو بيلو، وبسكويت الشوكولاتة لتسهيل معاينة الأصناف واختيار طلبيات الجملة.',
    descEn: 'Dedicated retail showroom display cabinet exhibiting the full portfolio of Mona Lisa wafers, Porto Bello snacks, and biscuits in Al-Karimiyah.',
    locationAr: 'الكريمية · شارع العسل وشارع الثانوية',
    locationEn: 'Al-Karimiyah, Honey St & High School St, Tripoli',
    badgeAr: 'معاينة وطلب فوري',
    badgeEn: 'On-Demand Wholesale Orders',
  },

  {
    id: 'consumer_moments_wafers',
    category: 'distribution',
    src: './assets/facilities/consumer_moments_wafers.webp',
    fallbackSrc: './assets/facilities/consumer_moments_wafers.jpg',
    titleAr: 'اختيار العائلة الليبية الأول ولمسات السعادة',
    titleEn: 'The Libyan Household Favorite - Pure Crispiness',
    tagAr: 'ثقة المستهلك وجودة المذاق',
    tagEn: 'Household Consumer Trust',
    descAr: 'حضور منتجات مونا ليسا وبيك ميت في كل بيت ليبي؛ طعم الويفر الهش والمكونات النقية التي تمنح الأطفال والعائلات لحظات لا تُنسى.',
    descEn: 'Mona Lisa wafers bring smiles to Libyan homes every day, renowned for rich cream, authentic Italian wafer recipe, and wholesome quality.',
    locationAr: 'في كل بيت ليبي · من طرابلس إلى بنغازي وسبها',
    locationEn: 'Across Libyan Homes from Tripoli to Benghazi',
    badgeAr: 'جودة معتمدة ومرخصة',
    badgeEn: 'FDA & Health Certified',
  },
];

const OperationalShowcase: React.FC<{ t: Translations; lang: Language }> = ({ t, lang }) => {
  const [activeTab, setActiveTab] = React.useState<'all' | 'trucks' | 'warehouses' | 'distribution'>('all');
  const [selectedItem, setSelectedItem] = React.useState<GalleryItem | null>(null);

  const filteredItems = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

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
        </div>
      </div>

      {/* Main Highlights: 2 Macro Overview Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Warehouse Card */}
        <div className="group rounded-2xl overflow-hidden bg-white border-2 border-stone-200 hover:border-[#b4362d] transition-all shadow-md">
          <div className="relative h-64 sm:h-72 w-full overflow-hidden">
            <img
              src="./assets/facilities/karimiyah_showroom_shelf.webp"
              alt="Ethar Libya FMCG Warehouses"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute top-4 right-4 bg-[#b4362d] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md font-mono">
              {lang === 'ar' ? 'المقر وسوق الكريمية' : 'Karimiyah HQ & Wholesale'}
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
              <Warehouse className="w-5 h-5 text-[#d9b239]" />
              <span className="font-bold text-base sm:text-lg font-cinzel text-white">
                {lang === 'ar' ? 'المستودعات المركزية وسلاسل التخزين' : 'Central Logistics & Warehousing Hub'}
              </span>
            </div>
          </div>
          <div className="p-6">
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {t.about.facilityWarehouse}
            </p>
            <div className="mt-4 pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500 font-mono">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#b4362d]" />
                {lang === 'ar' ? 'طرابلس - الكريمية (شارع الثانوية والعسل)' : 'Al-Karimiyah, Tripoli'}
              </span>
              <span className="text-[#b4362d] font-bold">
                {lang === 'ar' ? 'مساحات مجهزة ومكيفة 24/7' : 'Certified High-Bay Storage'}
              </span>
            </div>
          </div>
        </div>

        {/* Distribution Fleet Card */}
        <div className="group rounded-2xl overflow-hidden bg-white border-2 border-stone-200 hover:border-[#b4362d] transition-all shadow-md">
          <div className="relative h-64 sm:h-72 w-full overflow-hidden">
            <img
              src="./assets/facilities/truck_loading_dock.webp"
              alt="Ethar Libya Distribution Fleet"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute top-4 right-4 bg-[#d9b239] text-stone-900 text-[11px] font-bold px-3 py-1 rounded-full shadow-md font-mono">
              {lang === 'ar' ? 'أسطول الشاحنات' : 'Distribution Fleet'}
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
              <Truck className="w-5 h-5 text-[#d9b239]" />
              <span className="font-bold text-base sm:text-lg font-cinzel text-white">
                {lang === 'ar' ? 'أسطول شاحنات التوزيع المجهزة' : 'Nationwide Commercial Distribution Fleet'}
              </span>
            </div>
          </div>
          <div className="p-6">
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {t.about.facilityFleet}
            </p>
            <div className="mt-4 pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500 font-mono">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#d9b239]" />
                {lang === 'ar' ? 'تغطية: طرابلس، بنغازي، مصراتة، سبها، الزاوية' : 'Nationwide Fleet Coverage'}
              </span>
              <span className="text-[#b4362d] font-bold">
                {lang === 'ar' ? 'شاحنات نقل مجهزة بمقصورات تبريد' : 'Temperature-Controlled Fleet'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 6 Real Operations Visual Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group cursor-pointer rounded-2xl bg-white border border-stone-200 hover:border-[#b4362d] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Image Box */}
            <div className="relative aspect-[4/3] w-full bg-stone-100 overflow-hidden">
              <img
                src={item.src}
                alt={lang === 'ar' ? item.titleAr : item.titleEn}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

              {/* Tag / Badge */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold border border-white/20">
                <span>{lang === 'ar' ? item.tagAr : item.tagEn}</span>
              </div>

              {/* Location pin */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[11px] font-mono text-[#d9b239] block mb-0.5">
                  {lang === 'ar' ? item.badgeAr : item.badgeEn}
                </span>
                <h4 className="font-bold text-sm sm:text-base leading-snug line-clamp-1">
                  {lang === 'ar' ? item.titleAr : item.titleEn}
                </h4>
              </div>
            </div>

            {/* Description */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
              <p className="text-xs text-stone-600 leading-relaxed mb-3">
                {lang === 'ar' ? item.descAr : item.descEn}
              </p>
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                <span className="font-mono text-stone-700">
                  {lang === 'ar' ? item.locationAr : item.locationEn}
                </span>
                <span className="text-[#b4362d] font-bold group-hover:underline inline-flex items-center gap-1">
                  {lang === 'ar' ? 'عرض الصورة المكبرة' : 'Expand Photo'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
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

            {/* Modal Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black overflow-hidden">
              <img
                src={selectedItem.src}
                alt={lang === 'ar' ? selectedItem.titleAr : selectedItem.titleEn}
                className="w-full h-full object-contain"
              />
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

