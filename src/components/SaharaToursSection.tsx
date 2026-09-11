import React from 'react';
import { Language, Tour } from '../types';
import { translations } from '../data/translations';
import { Compass, Sparkles, ArrowRight, Sun, Flame, Wind, Mountain, Navigation, Tent } from 'lucide-react';
import saharaImg from '../assets/images/sahel_sahara_hero_1789034117357.jpg';

interface SaharaToursSectionProps {
  currentLang: Language;
  onExploreSafariTours: () => void;
  onSelectTour?: (tour: Tour) => void;
}

export const SaharaToursSection: React.FC<SaharaToursSectionProps> = ({
  currentLang,
  onExploreSafariTours,
}) => {
  const t = translations[currentLang];

  const featureIcons = [
    <Wind key="0" className="w-6 h-6 text-sand" />,
    <Sun key="1" className="w-6 h-6 text-sand" />,
    <Sparkles key="2" className="w-6 h-6 text-sand" />,
    <Navigation key="3" className="w-6 h-6 text-sand" />,
    <Tent key="4" className="w-6 h-6 text-sand" />,
    <Mountain key="5" className="w-6 h-6 text-sand" />,
  ];

  return (
    <section
      id="sahara-experience"
      className="py-20 lg:py-28 bg-[#0D0B0A] text-white relative overflow-hidden"
      aria-label="Sahara Experience Section"
    >
      {/* Background Graphic Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#de5d35]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-sand/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner with Desert Panorama & Story */}
        <div className="relative rounded-3xl overflow-hidden mb-16 border border-sand/30 shadow-2xl">
          <div className="relative h-[380px] sm:h-[460px] lg:h-[500px] overflow-hidden">
            <img
              src={saharaImg}
              alt="Grand Erg Oriental Sahara Dunes - Sahel Voyage"
              className="w-full h-full object-cover object-center scale-105 transform hover:scale-110 transition-transform duration-10000"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A] via-[#0D0B0A]/60 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D0B0A]/80 via-transparent to-[#0D0B0A]/80" />

            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand/20 border border-sand/40 text-sand text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
                <Compass className="w-3.5 h-3.5" />
                <span>{t.saharaExperience.badge}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
                {t.saharaExperience.headline}
              </h2>

              <p className="text-sand-warm text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-8 max-w-2xl">
                {t.saharaExperience.text}
              </p>

              <div>
                <button
                  type="button"
                  onClick={onExploreSafariTours}
                  className="px-8 py-4 rounded-xl bg-linear-to-r from-sand to-[#de5d35] hover:from-[#f0b555] hover:to-[#e86b43] text-[#120F0D] text-sm sm:text-base font-bold uppercase tracking-wider shadow-xl shadow-sand/25 hover:shadow-sand/40 active:scale-95 transition-all flex items-center gap-3 cursor-pointer"
                >
                  <span>{t.saharaExperience.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Visual Highlights: Dunes, Camels, Oases, Jeep, Villages, Landscapes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.saharaExperience.features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-[#181412] rounded-2xl p-6 border border-white/10 hover:border-sand/40 transition-all duration-300 group flex items-start gap-4 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-sand/20 border border-white/10 group-hover:border-sand/40 flex items-center justify-center shrink-0 transition-colors">
                {featureIcons[idx]}
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-sand transition-colors mb-1.5">
                  {feat.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
