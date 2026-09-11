import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Compass, ShieldCheck, HeartHandshake, Users, MapPin, MessageSquareText } from 'lucide-react';

interface WhyUsSectionProps {
  currentLang: Language;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const cardIcons = [
    <ShieldCheck key="0" className="w-8 h-8 text-sand" />,
    <Compass key="1" className="w-8 h-8 text-sand" />,
    <Users key="2" className="w-8 h-8 text-sand" />,
    <HeartHandshake key="3" className="w-8 h-8 text-sand" />,
    <MapPin key="4" className="w-8 h-8 text-sand" />,
    <MessageSquareText key="5" className="w-8 h-8 text-sand" />,
  ];

  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-[#120F0D] text-white border-y border-white/10 relative overflow-hidden"
      aria-label="Why Choose Sahel Voyage"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand/15 border border-sand/30 text-sand text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>
              {currentLang === 'fr'
                ? 'Confiance & Savoir-faire Sahel Voyage'
                : currentLang === 'pl'
                ? 'Gwarancja Jakości Sahel Voyage'
                : 'Sahel Voyage Trust & Excellence'}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.whyUs.title}
          </h2>

          <p className="text-sand-warm/80 text-base sm:text-lg leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.whyUs.cards.map((card, idx) => (
            <div
              key={idx}
              id={`why-card-${idx}`}
              className="group bg-[#1A1614] rounded-2xl p-7 sm:p-8 border border-white/10 hover:border-sand/50 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Icon Container */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 group-hover:bg-sand/20 border border-white/10 group-hover:border-sand/40 flex items-center justify-center transition-colors duration-300">
                  {cardIcons[idx]}
                </div>
                <span className="text-2xl">{card.icon}</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-sand transition-colors">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/70 leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
