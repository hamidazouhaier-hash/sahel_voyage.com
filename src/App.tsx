import React, { useState, useEffect } from 'react';
import { Language, Tour } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TourCategoriesSection } from './components/TourCategoriesSection';
import { PopularToursSection } from './components/PopularToursSection';
import { SaharaToursSection } from './components/SaharaToursSection';
import { MedinatAlZahraSection } from './components/MedinatAlZahraSection';
import { DestinationsSection } from './components/DestinationsSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactFormSection } from './components/ContactFormSection';
import { Footer } from './components/Footer';
import { TourModal } from './components/TourModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { getPrimaryPhone, getMainWhatsAppLink } from './utils/whatsapp';
import { MessageCircle, Phone, Calendar } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('tunisia_safari_lang');
    if (saved === 'en' || saved === 'fr' || saved === 'pl') {
      return saved as Language;
    }
    return 'en';
  });

  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [tourFilter, setTourFilter] = useState<string>('all');
  const [preselectedTourTitle, setPreselectedTourTitle] = useState<string | undefined>();
  const [preselectedCity, setPreselectedCity] = useState<string | undefined>();

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('tunisia_safari_lang', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const scrollToBooking = (tourTitle?: string, city?: string) => {
    if (tourTitle) setPreselectedTourTitle(tourTitle);
    if (city) setPreselectedCity(city);

    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookTour = (tour: Tour) => {
    setSelectedTour(null);
    scrollToBooking(tour.title?.[currentLang] || tour.title?.en || '');
  };

  const handleCategorySelect = (categoryId: string) => {
    if (categoryId === 'safari') setTourFilter('safari');
    else if (categoryId === 'sousse') setTourFilter('sousse');
    else if (categoryId === 'hammamet') setTourFilter('hammamet');
    else if (categoryId === 'tunis') setTourFilter('tunis');
    else if (categoryId === 'private') setTourFilter('private');
    else setTourFilter('all');
  };

  return (
    <div className="min-h-screen bg-[#120F0D] text-white font-sans selection:bg-sand selection:text-[#120F0D]">
      {/* Sticky Modern Navbar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenBooking={() => scrollToBooking()}
        onNavigateToCategory={handleCategorySelect}
      />

      <main id="main-content">
        {/* Full-Screen Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenBooking={() => scrollToBooking()}
          onSelectDepartureFilter={(city) => {
            setTourFilter(city);
            setPreselectedCity(city);
          }}
        />

        {/* Tour Categories: Explore Tunisia Your Way */}
        <TourCategoriesSection
          currentLang={currentLang}
          onSelectCategory={handleCategorySelect}
        />

        {/* Featured Tours: Popular Experiences */}
        <PopularToursSection
          currentLang={currentLang}
          selectedFilter={tourFilter}
          onFilterChange={setTourFilter}
          onSelectTour={(tour) => setSelectedTour(tour)}
          onBookTour={handleBookTour}
        />

        {/* Sahara Experience Section: Feel the Magic of the Sahara */}
        <SaharaToursSection
          currentLang={currentLang}
          onExploreSafariTours={() => {
            setTourFilter('safari');
            const el = document.getElementById('tours');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Medinat Al Zahra Cultural Spectacle & Dinner */}
        <MedinatAlZahraSection
          currentLang={currentLang}
          onBookExperience={() =>
            scrollToBooking('Medinat Al Zahra Cultural Spectacle', 'sousse')
          }
        />

        {/* Destination Section: From the Mediterranean to the Sahara */}
        <DestinationsSection
          currentLang={currentLang}
          onOpenBooking={() => scrollToBooking()}
          onSelectDepartureFilter={(city) => {
            setTourFilter(city);
            setPreselectedCity(city);
            const el = document.getElementById('tours');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Why Choose Us Section: Why Travel With Sahel Voyage? */}
        <WhyUsSection currentLang={currentLang} />

        {/* Traveler Testimonials & Reviews */}
        <ReviewsSection currentLang={currentLang} />

        {/* Booking / Reservation Form & Contact Information Section */}
        <ContactFormSection
          currentLang={currentLang}
          preselectedTourTitle={preselectedTourTitle}
          preselectedCity={preselectedCity}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenBooking={() => scrollToBooking()}
        onSelectCategory={handleCategorySelect}
      />

      {/* Tour Detail Modal */}
      <TourModal
        tour={selectedTour}
        currentLang={currentLang}
        onClose={() => setSelectedTour(null)}
        onBookTour={handleBookTour}
      />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp currentLang={currentLang} />

      {/* Mobile Floating Bottom Bar */}
      <div className="fixed bottom-3 left-3 right-3 z-40 sm:hidden flex items-center gap-2 p-2 rounded-2xl bg-[#1A1614]/95 backdrop-blur-md border border-sand/30 shadow-2xl">
        <a
          href={getMainWhatsAppLink(currentLang)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>

        <a
          href={getPrimaryPhone(currentLang).telUrl}
          className="py-3 px-3 rounded-xl bg-white/10 text-white text-xs font-semibold flex items-center justify-center"
          aria-label={`Call Sahel Voyage ${getPrimaryPhone(currentLang).phone}`}
          title={`Call ${getPrimaryPhone(currentLang).phone}`}
        >
          <Phone className="w-4 h-4 text-sand" />
        </a>

        <button
          type="button"
          onClick={() => scrollToBooking()}
          className="flex-1 py-3 px-2 rounded-xl bg-linear-to-r from-sand to-[#de5d35] text-[#120F0D] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
        >
          <Calendar className="w-4 h-4" />
          <span>{currentLang === 'pl' ? 'Zarezerwuj' : currentLang === 'fr' ? 'Réserver' : 'Book Now'}</span>
        </button>
      </div>
    </div>
  );
}
