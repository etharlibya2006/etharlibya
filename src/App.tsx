import React, { useState, useEffect } from 'react';
import { TRANSLATIONS, Language } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductsCatalog } from './components/ProductsCatalog';
import { BrandsShowcase } from './components/BrandsShowcase';
import { LibyaDistributionMap } from './components/LibyaDistributionMap';
import { GlobalSourcing } from './components/GlobalSourcing';
import { B2BPartnership } from './components/B2BPartnership';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string>('all');
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);

  // Check URL hash for #admin or #/admin
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#admin' || hash === '#/admin' || hash.startsWith('#/admin')) {
        setIsAdminOpen(true);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  // Secret keyboard shortcut: Ctrl+Shift+A or Cmd+Shift+A
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsAdminOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCloseAdmin = () => {
    setIsAdminOpen(false);
    if (window.location.hash.toLowerCase().includes('admin')) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  // Toggle Language and synchronize document attributes
  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleFilterBrandFromShowcase = (brandName: string) => {
    setSelectedBrandFilter(brandName);
    handleNavigate('products');
  };

  const t = TRANSLATIONS[lang];

  return (
    <div
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="min-h-screen bg-white text-stone-900 font-sans selection:bg-[#b4362d] selection:text-white"
    >
      {/* Top Bar Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        t={t}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero & Portal Header */}
        <Hero
          t={t}
          lang={lang}
          onExploreProducts={() => handleNavigate('products')}
          onPartnerWithUs={() => handleNavigate('b2b')}
        />

        {/* 2. About Us, Corporate Journey & CBL Compliance */}
        <AboutSection t={t} lang={lang} />

        {/* 3. Product Catalog with Filter & Search */}
        <ProductsCatalog t={t} lang={lang} externalBrandFilter={selectedBrandFilter} />

        {/* 4. Brand Showcase: Dedicated MONALISA Spotlight & Partner Brands */}
        <BrandsShowcase
          t={t}
          lang={lang}
          onFilterBrand={handleFilterBrandFromShowcase}
        />

        {/* 5. Distribution Reach Across Libya (Interactive SVG Infographic Map) */}
        <LibyaDistributionMap t={t} lang={lang} />

        {/* 6. Global Sourcing & International Manufacturers Gateway */}
        <GlobalSourcing
          t={t}
          lang={lang}
          onOpenB2B={() => handleNavigate('b2b')}
        />

        {/* 7. B2B Commercial Cooperation & Manufacturer Proposal Form */}
        <B2BPartnership t={t} lang={lang} />

        {/* 8. Contact Us & Tripoli Headquarters Location */}
        <ContactSection t={t} lang={lang} />
      </main>

      {/* Quiet Institutional Footer with Secret 5-Click Admin Trigger */}
      <Footer
        t={t}
        lang={lang}
        onNavigate={handleNavigate}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Secret In-Browser Admin Dashboard */}
      <AdminDashboard isOpen={isAdminOpen} onClose={handleCloseAdmin} />
    </div>
  );
}
