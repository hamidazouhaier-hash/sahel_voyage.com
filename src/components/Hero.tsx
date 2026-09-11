import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ArrowRight, Compass, ShieldCheck, MapPin, Sparkles, Calendar } from 'lucide-react';
import heroImg from '../assets/images/sahel_sahara_hero_1789034117357.jpg';

interface HeroProps {
  currentLang: Language;
  onOpenBooking: () => void;
  onSelectDepartureFilter?: (city: 'sousse' | 'hammamet' | 'tunis') => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenBooking,
  onSelectDepartureFilter,
}) => {
  const t = translations[currentLang];

  const handleCityClick = (city: 'sousse' | 'hammamet' | 'tunis') => {
    if (onSelectDepartureFilter) {
      onSelectDepartureFilter(city);
    }
    const target = document.querySelector('#tours');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#100C08]"
      aria-label="Sahel Voyage Hero"
    >
      {/* Background Image with Cinematic Depth */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={heroImg}
          alt="Sahara desert dunes at sunset in Tunisia - Sahel Voyage"
          className="w-full h-full object-cover object-center scale-105 transform transition-transform duration-[20000ms] hover:scale-110 motion-safe:animate-pulse"
          style={{ animationDuration: '18s' }}
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Cinematic Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#100C08] via-[#100C08]/65 to-[#100C08]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#100C08]/80 via-transparent to-[#100C08]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(16,12,8,0.7)_100%)]" />
      </div>

      {/* Hero Core Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 sm:pt-36 lg:pt-40 pb-16 flex flex-col items-center">
        
        {/* Trust Badge / Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand/20 backdrop-blur-md border border-sand/40 text-sand text-xs sm:text-sm font-semibold tracking-wide shadow-lg mb-6">
          <ShieldCheck className="w-4 h-4 text-sand shrink-0" />
          <span>{t.hero.trustMessage}</span>
          <span className="text-white/40">•</span>
          <span className="text-white/90 font-normal">Sahel Voyages • Sousse</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-4xl mb-6 drop-shadow-xl leading-[1.08]">
          {t.hero.headline}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-sand-warm max-w-3xl font-light tracking-wide mb-10 leading-relaxed drop-shadow">
          {t.hero.subtitle}
        </p>

        {/* Primary & Secondary Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <a
            href="#tours"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-linear-to-r from-sand to-[#de5d35] hover:from-[#f0b555] hover:to-[#e86b43] text-[#120F0D] text-sm sm:text-base font-bold tracking-wider uppercase transition-all duration-300 shadow-xl shadow-sand/25 hover:shadow-sand/40 active:scale-95 flex items-center justify-center gap-3 group"
          >
            <span>{t.hero.primaryCta}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
          </a>

          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-sm sm:text-base font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg active:scale-95 flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-sand" />
            <span>{t.hero.secondaryCta}</span>
          </button>
        </div>

        {/* Quick Access to Departures from Sousse, Hammamet, and Tunis */}
        <div className="w-full max-w-3xl rounded-2xl bg-[#1A1614]/85 backdrop-blur-md border border-sand/30 p-4 sm:p-5 shadow-2xl">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-sand-warm/90 font-bold mb-3">
            <Compass className="w-3.5 h-3.5 text-sand animate-spin" style={{ animationDuration: '12s' }} />
            <span>{t.hero.departuresBadge}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <button
              type="button"
              onClick={() => handleCityClick('sousse')}
              className="group flex items-center justify-between sm:justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-sand/20 border border-white/10 hover:border-sand/40 transition-all text-left sm:text-center"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sand group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-sand">
                  {currentLang === 'pl' ? 'Wyjazdy z Sousse' : currentLang === 'fr' ? 'Départs de Sousse' : 'From Sousse'}
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-sand group-hover:translate-x-1 transition-all sm:hidden" />
            </button>

            <button
              type="button"
              onClick={() => handleCityClick('hammamet')}
              className="group flex items-center justify-between sm:justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-sand/20 border border-white/10 hover:border-sand/40 transition-all text-left sm:text-center"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sand group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-sand">
                  {currentLang === 'pl' ? 'Wyjazdy z Hammametu' : currentLang === 'fr' ? 'Départs d’Hammamet' : 'From Hammamet'}
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-sand group-hover:translate-x-1 transition-all sm:hidden" />
            </button>

            <button
              type="button"
              onClick={() => handleCityClick('tunis')}
              className="group flex items-center justify-between sm:justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-sand/20 border border-white/10 hover:border-sand/40 transition-all text-left sm:text-center"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sand group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-sand">
                  {currentLang === 'pl' ? 'Wyjazdy z Tunisu' : currentLang === 'fr' ? 'Départs de Tunis' : 'From Tunis'}
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-sand group-hover:translate-x-1 transition-all sm:hidden" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
