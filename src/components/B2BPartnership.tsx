import React, { useState } from 'react';
import { Translations, Language } from '../data/translations';
import { Handshake, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';

interface B2BPartnershipProps {
  t: Translations;
  lang: Language;
}

export const B2BPartnership: React.FC<B2BPartnershipProps> = ({ t, lang }) => {
  const [selectedTrack, setSelectedTrack] = useState<string>('exclusive');
  const [companyName, setCompanyName] = useState('');
  const [country, setCountry] = useState('');
  const [representativeName, setRepresentativeName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !email || !phone) return;
    setIsSubmitted(true);
  };

  const sendWhatsAppDirect = () => {
    const text =
      lang === 'ar'
        ? `طلب شراكة تجارية رسمي - إيثار ليبيا:
- اسم الشركة/المصنع: ${companyName || 'مرفق'}
- الدولة: ${country || 'مرفق'}
- المسؤول: ${representativeName || 'مرفق'}
- مسار التعاون: ${selectedTrack}
- البريد: ${email}
- الهاتف: ${phone}
- العرض/المنتجات: ${message}`
        : `Official B2B Partnership Inquiry - Ethar Libya:
- Company/Factory: ${companyName || 'N/A'}
- Country: ${country || 'N/A'}
- Executive: ${representativeName || 'N/A'}
- Partnership Track: ${selectedTrack}
- Email: ${email}
- Phone: ${phone}
- Details: ${message}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/218913253515?text=${encoded}`, '_blank');
  };

  return (
    <section id="b2b" className="py-24 bg-white text-stone-900 border-t-2 border-[#d9b239] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-0.5 w-10 bg-[#b4362d]" />
            <span className="text-xs font-bold text-[#b4362d] tracking-widest uppercase font-cinzel">
              {t.b2b.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight mb-3 font-cinzel">
            {t.b2b.title}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            {t.b2b.subtitle}
          </p>
        </div>

        {/* 4 Partnership Tracks */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-stone-900 mb-6 font-cinzel">
            {t.b2b.tracksTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.b2b.tracks.map((track) => {
              const isSelected = selectedTrack === track.id;
              return (
                <div
                  key={track.id}
                  onClick={() => setSelectedTrack(track.id)}
                  className={`cursor-pointer p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between border-2 ${
                    isSelected
                      ? 'bg-[#fdfbf9] border-[#b4362d] shadow-md shadow-[#b4362d]/15'
                      : 'bg-white border-stone-200 hover:border-[#b4362d]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold text-white bg-[#b4362d] px-2.5 py-1 rounded font-mono shadow-sm">
                        {track.badge}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="w-5 h-5 text-[#b4362d]" />
                      )}
                    </div>
                    <h4 className="text-base font-bold text-stone-900 mb-2 font-cinzel">
                      {track.title}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {track.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-stone-100 text-[11px] font-semibold text-[#b4362d]">
                    {isSelected
                      ? (lang === 'ar' ? '✓ تم اعتماد هذا المسار' : '✓ Selected Protocol')
                      : (lang === 'ar' ? 'انقر لتحديد المسار' : 'Click to select')}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* B2B Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Executive Overview Panel */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#fbf9f6] border-2 border-[#d9b239] flex flex-col justify-between shadow-md relative corner-brackets">
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#b4362d] flex items-center justify-center text-white mb-6 shadow-md">
                <Handshake className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-stone-900 mb-3 font-cinzel">
                {t.b2b.formTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 font-light">
                {t.b2b.formSubtitle}
              </p>

              <div className="space-y-4 pt-4 border-t border-stone-200 text-xs text-stone-700">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#b4362d] shrink-0 mt-0.5" />
                  <span>
                    {lang === 'ar'
                      ? 'اعتمادات بنكية مستندية L/C صادرة مباشرة ومطابقة لضوابط مصرف ليبيا المركزي'
                      : 'Documentary Letters of Credit under Central Bank of Libya regulatory decree'}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#b4362d] shrink-0 mt-0.5" />
                  <span>
                    {lang === 'ar'
                      ? 'مشتريات سنوية مجدولة وشحن حاويات بحرية كاملة FCL للموانئ الليبية'
                      : 'Scheduled multi-container procurement with maritime shipping lines'}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#b4362d] shrink-0 mt-0.5" />
                  <span>
                    {lang === 'ar'
                      ? 'حماية الملكية الفكرية وتطوير المنتجات للمستهلك الليبي'
                      : 'Full brand guardianship and consumer marketing in Libyan markets'}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-200 text-xs text-stone-500 font-mono">
              <p>{t.b2b.directContactNote}</p>
            </div>
          </div>

          {/* Actual Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border-2 border-stone-200 shadow-lg">
            {isSubmitted ? (
              <div className="py-14 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#b4362d] flex items-center justify-center text-white mx-auto shadow-xl">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="max-w-md mx-auto">
                  <h4 className="text-2xl font-black text-stone-900 mb-2 font-cinzel">
                    {lang === 'ar' ? 'تم استلام طلب الشراكة رسمياً' : 'Inquiry Officially Registered'}
                  </h4>
                  <p className="text-sm text-stone-600 leading-relaxed mb-6">
                    {t.b2b.successMessage}
                  </p>
                  <button
                    onClick={sendWhatsAppDirect}
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-black uppercase text-white bg-[#b4362d] hover:bg-[#942921] rounded shadow-lg border border-[#d9b239]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>
                      {lang === 'ar'
                        ? 'إرسال الملف فوراً لمكتب الإدارة عبر واتساب'
                        : 'Forward Copy to Executive WhatsApp'}
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1.5 font-cinzel">
                      {t.b2b.companyName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder={lang === 'ar' ? 'مثال: مصنع الصناعات الغذائية...' : 'e.g. Anadolu Food Industries'}
                      className="w-full px-4 py-3 rounded-lg bg-[#fbf9f6] border border-stone-300 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#b4362d] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1.5 font-cinzel">
                      {t.b2b.country} *
                    </label>
                    <input
                      type="text"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder={lang === 'ar' ? 'تركيا / إسبانيا / الصين...' : 'e.g. Turkey / Spain / China'}
                      className="w-full px-4 py-3 rounded-lg bg-[#fbf9f6] border border-stone-300 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#b4362d] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1.5 font-cinzel">
                      {t.b2b.representativeName}
                    </label>
                    <input
                      type="text"
                      value={representativeName}
                      onChange={(e) => setRepresentativeName(e.target.value)}
                      placeholder={lang === 'ar' ? 'اسم مدير التصدير أو المفوض' : 'Export Director / Managing Partner'}
                      className="w-full px-4 py-3 rounded-lg bg-[#fbf9f6] border border-stone-300 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#b4362d] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1.5 font-cinzel">
                      {t.b2b.phoneWhatsApp} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+90 5XX XXX XXXX / +218 9X..."
                      className="w-full px-4 py-3 rounded-lg bg-[#fbf9f6] border border-stone-300 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#b4362d] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1.5 font-cinzel">
                    {t.b2b.email} *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="trade@factory.com"
                    className="w-full px-4 py-3 rounded-lg bg-[#fbf9f6] border border-stone-300 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#b4362d] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1.5 font-cinzel">
                    {t.b2b.cooperationType}
                  </label>
                  <select
                    value={selectedTrack}
                    onChange={(e) => setSelectedTrack(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#fbf9f6] border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-[#b4362d] transition-all"
                  >
                    {t.b2b.tracks.map((tr) => (
                      <option key={tr.id} value={tr.id}>
                        {tr.title} ({tr.badge})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1.5 font-cinzel">
                    {t.b2b.message}
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      lang === 'ar'
                        ? 'أدخل نبذة عن المنتجات، السعات، أو مقترح التوريد والتوزيع المطلوب...'
                        : 'Brief description of products, container volumes, or proposed partnership...'
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#fbf9f6] border border-stone-300 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#b4362d] transition-all"
                  />
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 px-6 text-xs sm:text-sm font-black uppercase text-white bg-[#b4362d] hover:bg-[#942921] rounded shadow-md border border-[#d9b239] transition-all"
                  >
                    {t.b2b.submitButton}
                  </button>
                  <button
                    type="button"
                    onClick={sendWhatsAppDirect}
                    className="w-full sm:w-auto py-3.5 px-5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded inline-flex items-center justify-center gap-2 shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{lang === 'ar' ? 'إرسال مباشر عبر واتساب' : 'Direct WhatsApp'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
