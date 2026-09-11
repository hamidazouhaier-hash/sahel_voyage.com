import React, { useState } from 'react';
import { Language, Destination } from '../types';
import { translations } from '../data/translations';
import { destinationsList } from '../data/toursData';
import { MapPin, ArrowRight, X, Sparkles, Compass, Check, Calendar } from 'lucide-react';
import { getMainWhatsAppLink } from '../utils/whatsapp';

interface DestinationsSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
  onSelectDepartureFilter?: (city: 'sousse' | 'hammamet' | 'tunis') => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  currentLang,
  onOpenBooking,
  onSelectDepartureFilter,
}) => {
  const [activeDestination, setActiveDestination] = useState<Destination | null>(null);
  const t = translations[currentLang];

  return (
    <section
      id="destinations"
      className="py-20 lg:py-28 bg-[#161210] relative overflow-hidden"
      aria-label="Destinations Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand/15 border border-sand/30 text-sand text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>
              {currentLang === 'fr'
                ? 'Odyssée Sahel Voyage'
                : currentLang === 'pl'
                ? 'Odyseja Sahel Voyage'
                : 'Sahel Voyage Odyssey'}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.destinations.title}
          </h2>

          <p className="text-sand-warm/80 text-base sm:text-lg leading-relaxed">
            {t.destinations.subtitle}
          </p>
        </div>

        {/* 8 Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinationsList.map((dest) => {
            const region = dest.region?.[currentLang] || dest.region?.en || '';
            const tagline = dest.tagline?.[currentLang] || dest.tagline?.en || '';

            return (
              <div
                key={dest.id}
                id={`destination-card-${dest.id}`}
                onClick={() => setActiveDestination(dest)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-[#1F1A17] border border-white/10 hover:border-sand/50 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black/50">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A17] via-transparent to-black/30" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-sand border border-white/20">
                      {region}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-serif text-lg font-bold tracking-tight text-white mb-0.5 group-hover:text-sand transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-white/70 line-clamp-1">
                      {tagline}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-3.5 flex items-center justify-between border-t border-white/10 bg-[#1A1614] group-hover:bg-sand/10 transition-colors">
                  <span className="text-xs font-semibold text-sand-warm group-hover:text-sand transition-colors">
                    {t.destinations.exploreDest}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-sand group-hover:bg-sand group-hover:text-[#120F0D] transition-all">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Destination Detail Modal */}
      {activeDestination && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="bg-[#1A1614] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-sand/40 shadow-2xl p-6 sm:p-8 relative text-white">
            <button
              type="button"
              onClick={() => setActiveDestination(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
              <img
                src={activeDestination.image}
                alt={activeDestination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sand text-[#120F0D] mb-2 inline-block">
                  {activeDestination.region?.[currentLang] || activeDestination.region?.en || ''}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {activeDestination.name}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
              {activeDestination.description?.[currentLang] || activeDestination.description?.en || ''}
            </p>

            {/* Highlights list */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest text-sand font-bold mb-3">
                {currentLang === 'pl' ? 'Kluczowe atrakcje' : currentLang === 'fr' ? 'Points d’intérêt majeurs' : 'Key Highlights'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(activeDestination.highlights?.[currentLang] || activeDestination.highlights?.en || []).map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white/90 bg-white/5 p-2.5 rounded-xl border border-white/10">
                    <Check className="w-4 h-4 text-sand shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  setActiveDestination(null);
                  onOpenBooking();
                }}
                className="flex-1 py-3 px-5 rounded-xl bg-linear-to-r from-sand to-[#de5d35] text-[#120F0D] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.nav.bookNow}</span>
              </button>

              <a
                href={getMainWhatsAppLink(currentLang, activeDestination.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>
                  WhatsApp ({currentLang === 'pl' ? '+216 53 211 170' : '+216 98 403 324'})
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
