import React, { useEffect } from 'react';
import { Language, Tour } from '../types';
import { translations } from '../data/translations';
import { X, Clock, MapPin, Check, Calendar, MessageCircle, Users, Sparkles, Navigation } from 'lucide-react';
import { getMainWhatsAppLink, MAIN_WHATSAPP } from '../utils/whatsapp';

interface TourModalProps {
  tour: Tour | null;
  currentLang: Language;
  onClose: () => void;
  onBookTour: (tour: Tour) => void;
}

export const TourModal: React.FC<TourModalProps> = ({
  tour,
  currentLang,
  onClose,
  onBookTour,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!tour) return null;

  const t = translations[currentLang] || translations.en;
  const title = tour.title?.[currentLang] || tour.title?.en || '';
  const description = tour.description?.[currentLang] || tour.description?.en || '';
  const duration = tour.duration?.[currentLang] || tour.duration?.en || '';
  const departureLocations =
    tour.departure?.[currentLang] ||
    tour.departureLocations?.[currentLang] ||
    tour.departure?.en ||
    'Sousse • Hammamet • Tunis';
  const price =
    tour.priceStartingFrom?.[currentLang] ||
    (tour.referencePrice
      ? `~${tour.referencePrice} TND`
      : currentLang === 'fr'
      ? 'Sur devis'
      : currentLang === 'pl'
      ? 'Na zapytanie'
      : 'On request');
  const route = tour.route?.[currentLang] || tour.route?.en || '';
  const itinerary = Array.isArray(tour.itinerary) ? tour.itinerary : [];
  const highlights = tour.highlights?.[currentLang] || tour.highlights?.en || [];
  const inclusions = tour.inclusions?.[currentLang] || tour.inclusions?.en || [];

  const isPrivate = tour.groupType === 'private' || tour.tourType === 'private';
  const isSmallGroup = tour.groupType === 'small_group' || tour.tourType === 'group';
  const groupLabel = isPrivate
    ? t.popularTours.privateOnly
    : isSmallGroup
    ? t.popularTours.smallGroupOnly
    : t.popularTours.privateOrGroup;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
    >
      <div className="bg-[#1A1614] rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-sand/40 shadow-2xl relative my-auto text-white">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero banner of modal */}
        <div className="relative h-64 sm:h-72 bg-black overflow-hidden">
          <img
            src={tour.image}
            alt={title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614] via-[#1A1614]/40 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-8 sm:right-8 text-white">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sand text-[#120F0D]">
                {groupLabel}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white">
                {price}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {title}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-sand shrink-0" />
              <div>
                <span className="text-white/50 block text-[10px] uppercase font-semibold">
                  {t.popularTours.durationLabel}
                </span>
                <span className="font-bold text-white">{duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-sand shrink-0" />
              <div>
                <span className="text-white/50 block text-[10px] uppercase font-semibold">
                  {t.popularTours.departureLabel}
                </span>
                <span className="font-bold text-white truncate max-w-[130px] sm:max-w-none">
                  {departureLocations}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
              <Users className="w-4 h-4 text-sand shrink-0" />
              <div>
                <span className="text-white/50 block text-[10px] uppercase font-semibold">
                  {t.popularTours.groupTypeLabel}
                </span>
                <span className="font-bold text-white">
                  {isPrivate
                    ? currentLang === 'fr' ? 'Privé' : currentLang === 'pl' ? 'Prywatnie' : 'Private'
                    : currentLang === 'fr' ? 'Petit Groupe / Privé' : currentLang === 'pl' ? 'Mała Grupa / Prywatnie' : 'Small Group / Private'}
                </span>
              </div>
            </div>
          </div>

          {/* Route if available */}
          {route && (
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs flex items-center gap-2.5 text-sand-warm">
              <Navigation className="w-4 h-4 text-sand shrink-0" />
              <span className="leading-relaxed"><strong className="text-sand uppercase font-bold mr-1">Route:</strong> {route}</span>
            </div>
          )}

          {/* Description */}
          <div>
            <p className="text-white/80 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Highlights */}
          {highlights.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-widest text-sand font-bold mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sand" />
                <span>{t.popularTours.highlightsLabel}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90 bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Itinerary */}
          {itinerary.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-widest text-sand font-bold mb-3">
                {t.popularTours.itineraryLabel}
              </h4>
              <div className="space-y-4 border-l-2 border-sand/30 pl-4 ml-2">
                {itinerary.map((step, idx) => {
                  const stepTitle =
                    typeof step === 'string'
                      ? step
                      : step.title?.[currentLang] || step.title?.en || '';
                  const stepDesc =
                    typeof step === 'string'
                      ? ''
                      : step.description?.[currentLang] || step.description?.en || '';
                  const stepDay = typeof step === 'object' && step.day ? step.day : idx + 1;

                  return (
                    <div key={idx} className="relative text-xs sm:text-sm text-white/80">
                      <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-sand" />
                      <div className="font-semibold text-white">
                        <span className="text-sand mr-1.5">
                          {currentLang === 'fr' ? `Jour ${stepDay}:` : currentLang === 'pl' ? `Dzień ${stepDay}:` : `Day ${stepDay}:`}
                        </span>
                        {stepTitle}
                      </div>
                      {stepDesc && (
                        <p className="text-white/70 text-xs sm:text-sm mt-1 leading-relaxed">
                          {stepDesc}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Inclusions */}
          {inclusions.length > 0 && (
            <div className="p-4 rounded-2xl bg-sand/10 border border-sand/20">
              <h4 className="text-xs uppercase tracking-widest text-sand font-bold mb-2">
                {t.popularTours.inclusionsLabel}
              </h4>
              <ul className="text-xs text-sand-warm/90 space-y-1">
                {inclusions.map((inc, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sand" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Footer Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookTour(tour);
              }}
              className="flex-1 py-3.5 px-5 rounded-xl bg-linear-to-r from-sand to-[#de5d35] hover:from-[#f0b555] hover:to-[#e86b43] text-[#120F0D] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.popularTours.bookThisTour}</span>
            </button>

            <a
              href={getMainWhatsAppLink(currentLang, title)}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp ({MAIN_WHATSAPP.phone})</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
