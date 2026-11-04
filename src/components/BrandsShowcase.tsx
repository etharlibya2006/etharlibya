import React from 'react';
import { Translations, Language } from '../data/translations';
import { Sparkles, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { PRODUCTS } from '../data/products';

interface BrandsShowcaseProps {
  t: Translations;
  lang: Language;
  onFilterBrand: (brandName: string) => void;
}

export const BrandsShowcase: React.FC<BrandsShowcaseProps> = ({
  t,
  lang,
  onFilterBrand,
}) => {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const monalisaProducts = PRODUCTS.filter((p) => p.brand === 'MONALISA').slice(0, 6);

  const partnerBrands = [
    {
      name: 'BAKEMATE',
      brandKey: 'BAKEMATE',
      origin: 'Global FMCG Bakery Lines',
      categoryAr: 'بسكويت دايجستيف القمح الكامل، كريسبي كوكيز، وبون تون رولز',
      categoryEn: 'Whole Wheat Digestives, Cookies & Wafer Rolls',
      descAr: 'علامة بسكويت عالمية عريقة تمتاز بجودة الحبوب الكاملة والقرمشة الذهبية الموثوقة لدى المستهلك الليبي.',
      descEn: 'Renowned international bakery brand famous for whole-wheat digestives, rich cookies, and wafer rolls.',
      image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_28_59_PM-4_3d6a1144.png',
    },
    {
      name: 'غذائي (Nutri-Food)',
      brandKey: 'Nutri-Food',
      origin: 'European Recipe Confectionery',
      categoryAr: 'كيك الوافل بالتيراميسو وكيك ميلو الرخامي المحشو',
      categoryEn: 'Gourmet Tiramisu Waffles & Mellow Cakes',
      descAr: 'تشكيلة كيك الوافل الإيطالي ومخبوزات الشوكولاتة والمارشميلو المصممة كوجبات خفيفة يومية غنية بالطاقة.',
      descEn: 'Gourmet soft waffles, marshmallow cakes, and chocolate treats crafted with European recipes.',
      image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_33_07_PM-2_6735f79b.png',
    },
    {
      name: 'LookMe (لوك مي)',
      brandKey: 'LookMe',
      origin: 'French Style Viennoiserie',
      categoryAr: 'بريوش كواسون محشو بكريمة الشوكولاتة الذائبة',
      categoryEn: 'Choco Croissant Brioche (24 Pce)',
      descAr: 'عجينة بريوش مورقة وهشة محشوة بالشوكولاتة الكثيفة، عبوة عملية 24 قطعة مخصصة للمقاهي والمدارس.',
      descEn: 'Flaky French-style brioche croissant pastry filled with rich cocoa cream in 24-piece cartons.',
      image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_59_24_PM-8_f18a1faa.png',
    },
    {
      name: 'BOLANTY (بولانتي)',
      brandKey: 'BOLANTY',
      origin: 'Tropical Chocolate Bars',
      categoryAr: 'أصابع جوز الهند الطبيعي بالشوكولاتة الفاخرة',
      categoryEn: 'Natural Coconut Bars in Milk Chocolate (2x24 Pcs)',
      descAr: 'ألواح جوز الهند الطبيعي الطازج المغطاة بطبقة سميكة من شوكولاتة الحليب الفاخرة بطعم استوائي لا يُنسى.',
      descEn: 'Pure shredded tropical coconut bars enrobed in smooth milk chocolate, double packed 2x24 pcs.',
      image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_28_50_PM-1_f04aa489.png',
    },
    {
      name: 'LIBRA (ليبرا بركة)',
      brandKey: 'LIBRA',
      origin: 'Roasted Coffee Biscuits',
      categoryAr: 'بسكويت القهوة المحمصة المقرمش الحلال',
      categoryEn: 'Halal Roasted Coffee Biscuits',
      descAr: 'بسكويت مقرمش وخفيف مع نكهة البن المحمص الأصيل والشهادات الصحية المعتمدة لرفيق القهوة الأمثل.',
      descEn: 'Aromatic crispy biscuits infused with roasted coffee aroma, officially Halal-certified.',
      image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_51_34_PM-6_23596e29.png',
    },
  ];

  return (
    <section id="brands" className="py-24 bg-[#fbf9f6] border-t-2 border-[#d9b239] text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-0.5 w-10 bg-[#b4362d]" />
            <span className="text-xs font-bold text-[#b4362d] tracking-widest uppercase font-cinzel">
              {t.brands.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight mb-3 font-cinzel">
            {t.brands.title}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            {t.brands.subtitle}
          </p>
        </div>

        {/* Flagship MONALISA Showcase Pavilion (Deep Brick Red & Gold) */}
        <div className="rounded-3xl bg-gradient-to-br from-[#b4362d] via-[#942921] to-[#7a1e17] border-3 border-[#d9b239] p-6 sm:p-12 shadow-2xl mb-24 relative overflow-hidden text-white">
          {/* Top Brand Banner Lockup */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b-2 border-white/20">
            <div className="flex flex-wrap items-center gap-6">
              {/* MONALISA Italian Flag Logo */}
              <div className="h-20 sm:h-24 px-5 py-2.5 bg-white rounded-xl shadow-xl border-2 border-[#d9b239] flex items-center justify-center">
                <img
                  src="./assets/aistudio/WhatsApp_Image_2026-11-03_at_6.00.52_PM_da0e5670.jpeg"
                  alt="MONALISA Brand Logo"
                  className="max-h-full w-auto object-contain"
                />
              </div>

              {/* MONALISA Classic Badge Logo */}
              <div className="h-20 sm:h-24 px-5 py-2.5 bg-stone-900 rounded-xl border-2 border-[#d9b239] flex items-center justify-center shadow-lg">
                <img
                  src="./assets/aistudio/WhatsApp_Image_2026-11-03_at_6.00.49_PM_0b3b858e.jpeg"
                  alt="MONALISA Emblem Badge"
                  className="max-h-full w-auto object-contain"
                />
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#d9b239] text-[#50120d] text-xs font-black mb-2 font-cinzel shadow">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.brands.monalisaBadge}</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white font-cinzel">
                  {t.brands.monalisaTitle}
                </h3>
              </div>
            </div>

            <button
              onClick={() => onFilterBrand('MONALISA')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-black uppercase text-[#50120d] bg-gradient-to-r from-[#d9b239] via-[#f7d86f] to-[#d9b239] rounded shadow-lg hover:brightness-110 transition-all whitespace-nowrap border-2 border-white"
            >
              <span>{lang === 'ar' ? 'استعراض تشكيلة موناليزا بالكامل' : 'View Full MONALISA Lineup'}</span>
              <ArrowIcon className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

          {/* Narrative + Pedestals */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-base text-white/95 leading-relaxed font-light">
                {t.brands.monalisaDesc}
              </p>
              <p className="text-base font-bold text-[#d9b239] font-cinzel tracking-wide">
                {t.brands.monalisaTagline}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {t.brands.monalisaFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-white font-medium">
                    <Check className="w-4 h-4 text-[#d9b239] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pedestals in White Container Contrast */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white p-4 border-2 border-[#d9b239] text-center shadow-xl text-stone-900">
                <img
                  src="./assets/aistudio/ChatGPT_Image_Nov_4__2026__01_51_20_PM-1_5ebf1232.png"
                  alt="MONALISA Biscotti Spread Studio"
                  className="w-full h-40 object-contain rounded-lg mb-2 filter drop-shadow-md"
                />
                <span className="text-xs font-bold text-stone-900 block">
                  {lang === 'ar' ? 'زبدة بيسكوتي سبريد' : 'Biscotti Spread'}
                </span>
                <span className="text-[10px] text-[#b4362d] font-mono font-bold">Lotus Caramel Recipe</span>
              </div>

              <div className="rounded-xl bg-white p-4 border-2 border-[#d9b239] text-center shadow-xl text-stone-900">
                <img
                  src="./assets/aistudio/ChatGPT_Image_Nov_4__2026__01_29_09_PM-9_7877b288.png"
                  alt="MONALISA Sweetened Condensed Milk"
                  className="w-full h-40 object-contain rounded-lg mb-2 filter drop-shadow-md"
                />
                <span className="text-xs font-bold text-stone-900 block">
                  {lang === 'ar' ? 'حليب مكثف محلى 397g' : 'Condensed Milk 397g'}
                </span>
                <span className="text-[10px] text-[#b4362d] font-mono font-bold">100% Pure Dairy</span>
              </div>
            </div>
          </div>

          {/* Marquee Products Strip */}
          <div className="pt-8 border-t-2 border-white/20">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-6 font-cinzel">
              {lang === 'ar' ? 'أبرز منتجات موناليزا في المتاجر الليبية:' : 'MARQUEE MONALISA PRODUCTS ON LIBYAN SHELVES:'}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {monalisaProducts.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => onFilterBrand('MONALISA')}
                  className="cursor-pointer group p-3.5 rounded-xl bg-white border border-[#d9b239]/50 hover:border-white transition-all text-center flex flex-col justify-between shadow text-stone-900"
                >
                  <div className="h-28 w-full flex items-center justify-center p-2 mb-2 bg-[#fbf9f6] rounded-lg">
                    <img
                      src={prod.image}
                      alt={prod.nameAr}
                      className="max-h-full max-w-full object-contain filter drop-shadow group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-xs font-bold text-stone-900 group-hover:text-[#b4362d] transition-colors line-clamp-2">
                    {lang === 'ar' ? prod.nameAr : prod.nameEn}
                  </span>
                  <span className="text-[10px] text-stone-500 mt-1 block font-mono">
                    {prod.weight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Partner Brands on White */}
        <div>
          <div className="mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900 mb-2 font-cinzel">
              {t.brands.partnerBrandsTitle}
            </h3>
            <p className="text-stone-600 text-sm font-light">
              {t.brands.partnerBrandsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerBrands.map((brand, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border-2 border-stone-200 hover:border-[#b4362d] p-6 flex flex-col justify-between transition-all shadow-md"
              >
                <div>
                  <div className="h-44 w-full bg-[#fbf9f6] rounded-xl overflow-hidden p-4 mb-4 flex items-center justify-center border border-stone-200">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-stone-900 font-cinzel">
                      {brand.name}
                    </h4>
                    <span className="text-[10px] font-bold text-white bg-[#b4362d] px-2.5 py-0.5 rounded font-mono">
                      {brand.origin}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#b4362d] mb-2">
                    {lang === 'ar' ? brand.categoryAr : brand.categoryEn}
                  </p>

                  <p className="text-xs text-stone-600 leading-relaxed font-light">
                    {lang === 'ar' ? brand.descAr : brand.descEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => onFilterBrand(brand.brandKey)}
                    className="text-xs font-bold text-[#b4362d] hover:text-[#87251d] inline-flex items-center gap-1.5"
                  >
                    <span>{lang === 'ar' ? 'عرض الكتالوج' : 'View Catalog'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-stone-400 font-mono">
                    {lang === 'ar' ? 'توزيع معتمد' : 'Authorized Dist.'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
