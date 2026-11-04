import React, { useState, useMemo, useEffect } from 'react';
import { Product, PRODUCTS, CATEGORIES, BRANDS } from '../data/products';
import { Translations, Language } from '../data/translations';
import { Search, Eye, MessageCircle, X, Check, Package, Sparkles } from 'lucide-react';

interface ProductsCatalogProps {
  t: Translations;
  lang: Language;
  externalBrandFilter?: string;
}

export const ProductsCatalog: React.FC<ProductsCatalogProps> = ({ t, lang, externalBrandFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (externalBrandFilter) {
      setSelectedBrand(externalBrandFilter);
    }
  }, [externalBrandFilter]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchBrand = selectedBrand === 'all' || item.brand === selectedBrand;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.nameAr.toLowerCase().includes(q) ||
        item.nameEn.toLowerCase().includes(q) ||
        item.brand.toLowerCase().includes(q) ||
        item.descriptionAr.toLowerCase().includes(q);

      return matchCategory && matchBrand && matchSearch;
    });
  }, [selectedCategory, selectedBrand, searchQuery]);

  const openWhatsAppOrder = (product: Product) => {
    const text =
      lang === 'ar'
        ? `السلام عليكم، أود الاستفسار عن طلب جملة وتوريد لمنتج: ${product.nameAr} (${product.brand}) من شركة إيثار ليبيا.`
        : `Hello, I would like to inquire about wholesale distribution for: ${product.nameEn} (${product.brand}) from Ethar Libya.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/218925062360?text=${encoded}`, '_blank');
  };

  return (
    <section id="products" className="py-24 bg-white text-stone-900 border-t-2 border-[#d9b239] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-0.5 w-10 bg-[#b4362d]" />
              <span className="text-xs font-bold text-[#b4362d] tracking-widest uppercase font-cinzel">
                {t.products.badge}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight mb-3 font-cinzel">
              {t.products.title}
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              {t.products.subtitle}
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80 shrink-0">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.products.searchPlaceholder}
              className="w-full pl-10 pr-4 rtl:pr-10 rtl:pl-4 py-3 rounded-lg bg-[#fbf9f6] border border-stone-300 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#b4362d] transition-all shadow-sm"
            />
            <Search className="w-4 h-4 text-[#b4362d] absolute top-3.5 left-3.5 rtl:right-3.5 rtl:left-auto" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute top-3 right-3 rtl:left-3 rtl:right-auto text-stone-400 hover:text-stone-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs: Brick Red & Ivory */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-thin">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded transition-all whitespace-nowrap shrink-0 border ${
                  isActive
                    ? 'bg-[#b4362d] text-white border-[#b4362d] shadow-md shadow-[#b4362d]/20'
                    : 'bg-[#fbf9f6] text-stone-700 hover:bg-[#f2eee7] border-stone-200'
                }`}
              >
                {lang === 'ar' ? cat.nameAr : cat.nameEn}
              </button>
            );
          })}
        </div>

        {/* Brand Segment Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-stone-200 text-xs">
          <span className="font-bold text-stone-800 whitespace-nowrap shrink-0 font-cinzel">
            {lang === 'ar' ? 'تصفية حسب العلامة:' : 'BRAND SPECIFICATION:'}
          </span>
          {BRANDS.map((b) => {
            const isActive = selectedBrand === b.id;
            return (
              <button
                key={b.id}
                onClick={() => setSelectedBrand(b.id)}
                className={`px-3 py-1 rounded transition-colors whitespace-nowrap shrink-0 font-bold ${
                  isActive
                    ? 'bg-[#d9b239] text-[#50120d] shadow-sm'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {lang === 'ar' ? b.name : b.nameEn}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid on White Canvas */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#fbf9f6] rounded-2xl border border-stone-200">
            <Package className="w-12 h-12 text-stone-400 mx-auto mb-3" />
            <p className="text-stone-600 text-sm">{t.products.noResults}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group rounded-2xl bg-white border border-stone-200 hover:border-[#b4362d] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                {/* Physical Packaging Showcase Tray with Clean Background */}
                <div className="relative aspect-[4/3] bg-gradient-to-b from-[#faf8f5] to-[#f4efe8] p-4 flex items-center justify-center overflow-hidden border-b border-stone-100">
                  <img
                    src={product.image}
                    alt={lang === 'ar' ? product.nameAr : product.nameEn}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_6px_12px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Brand Tag */}
                  <div className="absolute top-3 left-3 rtl:right-3 rtl:left-auto">
                    <span className="text-[10px] font-black tracking-wider text-white bg-[#b4362d] px-2 py-0.5 rounded shadow-sm font-cinzel">
                      {product.brand}
                    </span>
                  </div>

                  {product.isFlagship && (
                    <div className="absolute top-3 right-3 rtl:left-3 rtl:right-auto">
                      <span className="text-[10px] font-bold text-[#50120d] bg-[#d9b239] px-2 py-0.5 rounded flex items-center gap-1 font-mono shadow-sm">
                        <Sparkles className="w-2.5 h-2.5" />
                        {lang === 'ar' ? 'مميز' : 'HERITAGE'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-2 font-mono">
                      <span>{product.weight}</span>
                      <span className="text-[#b4362d]">·</span>
                      <span>{product.cartonSpec}</span>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 mb-2 leading-snug group-hover:text-[#b4362d] transition-colors">
                      {lang === 'ar' ? product.nameAr : product.nameEn}
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
                      {lang === 'ar' ? product.descriptionAr : product.descriptionEn}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-stone-100 flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold rounded bg-[#fbf9f6] hover:bg-[#b4362d] hover:text-white border border-stone-200 hover:border-[#b4362d] text-stone-800 transition-all shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#d9b239]" />
                      <span>{t.products.viewDetails}</span>
                    </button>

                    <button
                      onClick={() => openWhatsAppOrder(product)}
                      title="طلب جملة عبر واتساب"
                      className="p-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white border-2 border-[#d9b239] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#fbf9f6]">
              <div className="flex items-center gap-2 font-cinzel">
                <span className="text-xs font-black text-[#b4362d]">
                  {activeModalProduct.brand}
                </span>
                <span className="text-stone-300">·</span>
                <span className="text-xs text-stone-600 font-mono">
                  {activeModalProduct.weight}
                </span>
              </div>
              <button
                onClick={() => setActiveModalProduct(null)}
                className="p-1 rounded text-stone-400 hover:text-stone-700 hover:bg-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="aspect-[16/9] w-full bg-[#fbf9f6] rounded-xl overflow-hidden flex items-center justify-center p-4 border border-stone-200">
                <img
                  src={activeModalProduct.image}
                  alt={lang === 'ar' ? activeModalProduct.nameAr : activeModalProduct.nameEn}
                  className="max-h-full max-w-full object-contain filter drop-shadow-lg"
                />
              </div>

              <div>
                <h3 className="text-2xl font-black text-stone-900 mb-2 font-cinzel">
                  {lang === 'ar' ? activeModalProduct.nameAr : activeModalProduct.nameEn}
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {lang === 'ar' ? activeModalProduct.descriptionAr : activeModalProduct.descriptionEn}
                </p>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#fbf9f6] border border-stone-200 text-xs font-mono">
                <div>
                  <span className="text-stone-500 block mb-1 font-sans">{t.products.specWeight}</span>
                  <span className="text-stone-900 font-bold">{activeModalProduct.weight}</span>
                </div>
                <div>
                  <span className="text-stone-500 block mb-1 font-sans">{t.products.specCarton}</span>
                  <span className="text-stone-900 font-bold">{activeModalProduct.cartonSpec}</span>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-bold text-[#b4362d] uppercase tracking-wider mb-3 font-cinzel">
                  {t.products.keyFeatures}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                  {(lang === 'ar' ? activeModalProduct.featuresAr : activeModalProduct.featuresEn).map(
                    (f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-stone-200 bg-[#fbf9f6] flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => openWhatsAppOrder(activeModalProduct)}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-black uppercase text-white bg-[#b4362d] hover:bg-[#942921] rounded shadow-md border border-[#d9b239]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.products.orderWhatsApp}</span>
              </button>
              <button
                onClick={() => setActiveModalProduct(null)}
                className="w-full sm:w-auto px-4 py-3 text-xs font-bold text-stone-600 hover:text-stone-900"
              >
                {lang === 'ar' ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
