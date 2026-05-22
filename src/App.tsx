import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import Industries from './components/Industries';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DynamicModals from './components/DynamicModals';

export default function App() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'careers' | 'consultation' | null>(null);

  // Smooth scroll helper for main page entries
  useEffect(() => {
    // If targeted hash on mount, scroll to it smoothly
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-gray-800 font-sans antialiased selection:bg-brand-500 selection:text-white">
      {/* Sticky Premium Nav Header */}
      <Header onOpenConsultationModal={() => setActiveModal('consultation')} />

      {/* Main Structural Flow */}
      <main className="relative">
        {/* 1. Hero Hub */}
        <Hero />

        {/* 2. Corporate Overview / About us */}
        <AboutUs />

        {/* 3. Services / Clinical solutions */}
        

        {/* 4. Why Planet Healthcare */}
        <WhyChooseUs />

        {/* 5. Flagship Specialty Catalog */}
        <Products />

        {/* 6. Targeting Fields served */}
        <Industries />

        {/* 7. Clinical Testimonials */}
        

        {/* 8. Certifications & Audit checks */}
       

        {/* 9. Contact channel & GPS Office maps */}
        <ContactSection />
      </main>

      {/* 10. Footer with corporate legal panels */}
      <Footer
        onOpenPrivacyModal={() => setActiveModal('privacy')}
        onOpenTermsModal={() => setActiveModal('terms')}
        // onOpenCareersModal={() => setActiveModal('careers')}
      />

      {/* Dynamic Overlay Portals (Triage, Resume uploads, legality sheets) */}
      <DynamicModals activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}
