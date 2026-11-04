import React from 'react';
import { Translations, Language } from '../data/translations';
import { MapPin, Phone, Mail, Clock, ExternalLink, MessageCircle } from 'lucide-react';

interface ContactSectionProps {
  t: Translations;
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ t, lang }) => {
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
                  <div className="flex items-center justify-between gap-2 p-2.5 rounded bg-[#fbf9f6] border border-stone-200">
                    <span className="text-xs text-stone-800 font-mono font-bold" dir="ltr">
                      0925062360
                    </span>
                    <a
                      href="https://wa.me/218925062360"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-emerald-600 px-2.5 py-1 rounded hover:bg-emerald-700 shadow-sm"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-between gap-2 p-2.5 rounded bg-[#fbf9f6] border border-stone-200">
                    <span className="text-xs text-stone-800 font-mono font-bold" dir="ltr">
                      0913253515
                    </span>
                    <a
                      href="https://wa.me/218913253515"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-emerald-600 px-2.5 py-1 rounded hover:bg-emerald-700 shadow-sm"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>WhatsApp</span>
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
                  className="text-sm font-semibold text-stone-900 hover:text-[#b4362d] font-mono tracking-wide"
                >
                  {t.contact.emailValue}
                </a>
              </div>
            </div>

            {/* Official Social Media */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
              <h4 className="text-xs font-bold text-[#b4362d] uppercase tracking-wider mb-3 font-cinzel">
                {t.contact.socialTitle}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://www.facebook.com/share/1HXcNcEXPs/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#fbf9f6] hover:bg-[#b4362d] hover:text-white border border-stone-200 text-stone-800 text-xs font-bold transition-all shadow-sm"
                >
                  <span>Facebook</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#d9b239]" />
                </a>

                <a
                  href="https://www.tiktok.com/@etharlibya?_r=1&_t=ZS-9B54eWdwjyg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#fbf9f6] hover:bg-[#b4362d] hover:text-white border border-stone-200 text-stone-800 text-xs font-bold transition-all shadow-sm"
                >
                  <span>TikTok</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#d9b239]" />
                </a>
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
                    {lang === 'ar' ? 'شركة إيثار ليبيا - المقر الرسمي' : 'Ethar Libya Headquarters'}
                  </h4>
                  <p className="text-xs text-stone-600 mb-4 font-mono">
                    {lang === 'ar' ? 'طرابلس، الكريمية - شارع الثانوية' : 'Tripoli, Al-Karimiyah - Al-Thanawiya St'}
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
              <a
                href="https://wa.me/218925062360"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#b4362d] hover:text-black font-mono"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>+218 92 506 2360</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
