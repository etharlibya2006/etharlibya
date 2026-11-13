import React, { useState, useEffect } from 'react';
import { Translations, Language } from '../data/translations';
import { MapPin, Phone, Mail, Clock, ExternalLink, MessageCircle } from 'lucide-react';
import { getStoredSettings, AppSettings } from '../data/store';

interface ContactSectionProps {
  t: Translations;
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ t, lang }) => {
  const [settings, setSettings] = useState<AppSettings>(getStoredSettings());

  useEffect(() => {
    const handleUpdate = () => {
      setSettings(getStoredSettings());
    };
    window.addEventListener('ethar_data_updated', handleUpdate);
    return () => window.removeEventListener('ethar_data_updated', handleUpdate);
  }, []);
  return (
    <section id="contact" className="py-24 bg-[#fbf9f6] border-t-2 border-[#d9b239] text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-0.5 w-10 bg-[#b4362d]" />
            <span className="text-xs font-bold text-[#b4362d] tracking-widest uppercase font-cinzel">
              {t.contact.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight mb-3 font-cinzel">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Address */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200 flex items-start gap-4 hover:border-[#b4362d] transition-colors shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#b4362d] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                <MapPin className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-bold text-[#b4362d] uppercase tracking-wider mb-1 font-cinzel">
                  {t.contact.addressTitle}
                </h4>
                <p className="text-sm font-semibold text-stone-900 leading-relaxed">
                  {t.contact.addressValue}
                </p>
                <a
                  href="https://maps.app.goo.gl/wvbivb9d5qGedRRu6?g_st=iwb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#b4362d] hover:text-[#87251d] font-bold"
                >
                  <span>{t.contact.openInMaps}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phones & WhatsApp */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200 flex items-start gap-4 hover:border-[#b4362d] transition-colors shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#b4362d] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                <Phone className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex-1 space-y-3">
                <h4 className="text-xs font-bold text-[#b4362d] uppercase tracking-wider font-cinzel">
                  {t.contact.phoneTitle}
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#fbf9f6] border border-stone-200">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-xs sm:text-sm text-stone-900 font-mono font-bold tracking-wider" dir="ltr">
                        092 506 2360
                      </span>
                    </div>
                    <a
                      href="https://wa.me/218925062360"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-lg shadow-sm transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>واتساب</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#fbf9f6] border border-stone-200">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-xs sm:text-sm text-stone-900 font-mono font-bold tracking-wider" dir="ltr">
                        091 325 3515
                      </span>
                    </div>
                    <a
                      href="https://wa.me/218913253515"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-lg shadow-sm transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>واتساب</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200 flex items-start gap-4 hover:border-[#b4362d] transition-colors shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#b4362d] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                <Mail className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-bold text-[#b4362d] uppercase tracking-wider mb-1 font-cinzel">
                  {t.contact.emailTitle}
                </h4>
                <a
                  href={`mailto:${t.contact.emailValue}`}
                  className="text-sm font-bold text-stone-900 hover:text-[#b4362d] font-mono tracking-wide"
                  dir="ltr"
                >
                  {t.contact.emailValue}
                </a>
              </div>
            </div>

            {/* Official Social Media with Icons */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
              <h4 className="text-xs font-bold text-[#b4362d] uppercase tracking-wider mb-3 font-cinzel">
                {t.contact.socialTitle}
              </h4>
              <div className="grid grid-cols-3 gap-2.5">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1HXcNcEXPs/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-[#fbf9f6] hover:bg-[#1877F2] hover:text-white border border-stone-200 text-stone-800 text-xs font-bold transition-all shadow-sm group"
                >
                  <svg className="w-5 h-5 fill-current text-[#1877F2] group-hover:text-white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-[11px]">فيسبوك</span>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@etharlibya?_r=1&_t=ZS-9B54eWdwjyg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-[#fbf9f6] hover:bg-black hover:text-white border border-stone-200 text-stone-800 text-xs font-bold transition-all shadow-sm group"
                >
                  <svg className="w-5 h-5 fill-current text-black group-hover:text-white" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                  </svg>
                  <span className="text-[11px]">تيك توك</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/etharlibya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-[#fbf9f6] hover:bg-[#E4405F] hover:text-white border border-stone-200 text-stone-800 text-xs font-bold transition-all shadow-sm group"
                >
                  <svg className="w-5 h-5 fill-current text-[#E4405F] group-hover:text-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-[11px]">إنستغرام</span>
                </a>
              </div>
            </div>

            {/* Official Registration Badges */}
            <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 text-xs space-y-1.5 font-mono">
              <div className="flex items-center justify-between text-stone-700">
                <span className="font-bold">{t.contact.commercialLicense}</span>
              </div>
              <div className="flex items-center justify-between text-stone-700">
                <span className="font-bold">{t.contact.taxNumber}</span>
              </div>
              <div className="flex items-center justify-between text-[#b4362d]">
                <span className="font-bold">{t.contact.chamberReg}</span>
              </div>
            </div>
          </div>

          {/* Map Preview & Location Details */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-white border-2 border-[#d9b239] p-6 sm:p-8 shadow-md relative corner-brackets">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-stone-900 font-cinzel">
                  {lang === 'ar' ? 'مقر الشركة والمستودعات في طرابلس' : 'Headquarters & Logistics Center in Tripoli'}
                </h3>
                <span className="text-xs text-white font-bold bg-[#b4362d] px-2.5 py-1 rounded shadow-sm">
                  {lang === 'ar' ? 'منطقة الكريمية التجارية' : 'Al-Karimiyah Trade Hub'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed font-light">
                {lang === 'ar'
                  ? 'تقع مقراتنا ومستودعاتنا الرئيسية في شارع الثانوية بمنطقة الكريمية بطرابلس، وهي النقطة التجارية الأكبر في ليبيا لتجارة المواد الغذائية بالجملة والخدمات اللوجستية.'
                  : 'Strategically located on Al-Thanawiya Street in Al-Karimiyah, Tripoli, the epicenter of Libya’s premier FMCG wholesale and supply chain trade.'}
              </p>

              {/* Map Graphic Showcase */}
              <div className="relative aspect-[16/10] w-full bg-[#fbf9f6] rounded-xl overflow-hidden border border-stone-200 flex items-center justify-center group shadow-inner">
                <div className="absolute inset-0 white-paper-grid opacity-60" />
                <div className="relative z-10 text-center p-6 max-w-sm">
                  <div className="w-14 h-14 rounded-2xl bg-[#b4362d] flex items-center justify-center text-white mx-auto mb-3 shadow-md">
                    <MapPin className="w-8 h-8 stroke-[2.2]" />
                  </div>
                  <h4 className="text-base font-bold text-stone-900 mb-1 font-cinzel">
                    {lang === 'ar' ? 'شركة إيثار ليبيا لاستيراد المواد الغذائية' : 'Ethar Libya for Food Import'}
                  </h4>
                  <p className="text-xs text-stone-600 mb-4 font-mono">
                    {lang === 'ar' ? 'طرابلس، الكريمية - شارع الثانوية والعسل' : 'Tripoli, Al-Karimiyah - Al-Thanawiya & Honey St'}
                  </p>
                  <a
                    href="https://maps.app.goo.gl/wvbivb9d5qGedRRu6?g_st=iwb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded text-xs font-black uppercase text-white bg-[#b4362d] hover:bg-[#942921] shadow-md transition-transform hover:scale-105 border border-[#d9b239]"
                  >
                    <span>{t.contact.openInMaps}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#d9b239]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Assistance Banner */}
            <div className="mt-6 pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
              <span>
                {lang === 'ar'
                  ? 'مكتب الاستيراد والمبيعات متاح طيلة أيام الأسبوع للموردين والتجار'
                  : 'Import and sales offices open Saturday through Thursday'}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/218925062360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#b4362d] hover:text-black font-mono tracking-wider"
                  dir="ltr"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>092 506 2360</span>
                </a>
                <span className="text-stone-300">/</span>
                <a
                  href="https://wa.me/218913253515"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#b4362d] hover:text-black font-mono tracking-wider"
                  dir="ltr"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>091 325 3515</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
