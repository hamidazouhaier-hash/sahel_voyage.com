import React from 'react';
import { Language, Tour } from '../types';
import { popularTours } from '../data/toursData';
import { translations } from '../data/translations';
import { Clock, MapPin, Users, ArrowRight, Calendar, Sparkles } from 'lucide-react';

interface PopularToursSectionProps {
  currentLang: Language;
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  onSelectTour: (tour: Tour) => void;
  onBookTour: (tour: Tour) => void;
}

export const PopularToursSection: React.FC<PopularToursSectionProps> = ({
  currentLang,
  selectedFilter,
  onFilterChange,
  onSelectTour,
  onBookTour,
}) => {
  const t = translations[currentLang];

  const filterTabs = [
    { id: 'all', label: currentLang === 'pl' ? 'Wszystkie' : currentLang === 'fr' ? 'Tous les circuits' : 'All Tours' },
    { id: 'safari', label: currentLang === 'pl' ? 'Safari & Pustynia' : currentLang === 'fr' ? 'Safari & Désert' : 'Safari & Desert' },
    { id: 'sousse', label: currentLang === 'pl' ? 'Z Sousse' : currentLang === 'fr' ? 'Départ Sousse' : 'From Sousse' },
    { id: 'hammamet', label: currentLang === 'pl' ? 'Z Hammametu' : currentLang === 'fr' ? 'Départ Hammamet' : 'From Hammamet' },
    { id: 'tunis', label: currentLang === 'pl' ? 'Z Tunisu' : currentLang === 'fr' ? 'Départ Tunis' : 'From Tunis' },
    { id: 'private', label: currentLang === 'pl' ? 'Wycieczki Prywatne' : currentLang === 'fr' ? 'Circuits Privés' : 'Private Tours' },
  ];

  const filteredTours = popularTours.filter((tour) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'safari') {
      return tour.category === 'safari' || tour.id.includes('sahara') || tour.id.includes('ksar');
    }
    const cities = tour.departureCities.map((c) => String(c).toLowerCase());
    if (selectedFilter === 'sousse') return cities.includes('sousse');
    if (selectedFilter === 'hammamet') return cities.includes('hammamet');
    if (selectedFilter === 'tunis') return cities.includes('tunis');
    if (selectedFilter === 'private') {
      return tour.groupType === 'private' || tour.groupType === 'both';
    }
    return true;
  });

  return (
    <section
      id="tours"
      className="py-20 lg:py-28 bg-[#120F0D] text-white relative overflow-hidden"
      aria-label="Popular Experiences Section"
    >
      {/* Target Anchors for direct navbar jumps */}
      <div id="safari-tours" className="absolute -top-24" />
      <div id="sousse-tours" className="absolute -top-24" />
      <div id="hammamet-tours" className="absolute -top-24" />
      <div id="tunis-tours" className="absolute -top-24" />
      <div id="private-tours" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#de5d35]/20 border border-[#de5d35]/40 text-sand text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sand" />
            <span>{t.popularTours.tag}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.popularTours.title}
          </h2>

          <p className="text-sand-warm/80 text-base sm:text-lg leading-relaxed">
            {t.popularTours.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onFilterChange(tab.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-linear-to-r from-sand to-[#de5d35] text-[#120F0D] font-bold shadow-lg shadow-sand/20 scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => {
            const title = tour.title?.[currentLang] || tour.title?.en || '';
            const description = tour.description?.[currentLang] || tour.description?.en || '';
            const duration = tour.duration?.[currentLang] || tour.duration?.en || '';
            const departureLocations = tour.departure?.[currentLang] || tour.departure?.en || '';
            const price = tour.referencePrice
              ? `~${tour.referencePrice} TND`
              : currentLang === 'pl'
              ? 'Na zapytanie'
              : currentLang === 'fr'
              ? 'Sur devis'
              : 'On request';

            return (
              <div
                key={tour.id}
                id={`tour-card-${tour.id}`}
                className="group rounded-2xl overflow-hidden bg-[#1A1614] border border-white/10 hover:border-sand/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:-translate-y-1.5"
              >
                {/* Image Section */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-black/40">
                  <img
                    src={tour.image}
                    alt={title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614] via-transparent to-black/40" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-sand text-[11px] font-bold tracking-wider uppercase">
                      {tour.groupType === 'private'
                        ? t.popularTours.privateOnly
                        : tour.groupType === 'small_group'
                        ? t.popularTours.smallGroupOnly
                        : t.popularTours.privateOrGroup}
                    </span>

                    <span className="px-3 py-1 rounded-full bg-sand text-[#120F0D] text-[11px] font-bold shadow-md">
                      {price}
                    </span>
                  </div>

                  {/* Departure Badges at Bottom of Image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 flex-wrap">
                    <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-white/90 text-xs">
                      <MapPin className="w-3 h-3 text-sand shrink-0" />
                      <span className="truncate">{departureLocations}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Duration & Group pill */}
                    <div className="flex items-center gap-4 text-xs text-sand mb-2.5">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-sand" />
                        {duration}
                      </span>
                      <span className="flex items-center gap-1.5 font-medium">
                        <Users className="w-3.5 h-3.5 text-sand" />
                        {tour.groupType === 'private' ? 'Private' : 'Small Group'}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-sand transition-colors mb-2 line-clamp-2">
                      {title}
                    </h3>

                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {description}
                    </p>
                  </div>

                  {/* Action Buttons: View Details & Book Now */}
                  <div className="pt-4 border-t border-white/10 flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => onSelectTour(tour)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>{t.popularTours.viewDetails}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-sand" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onBookTour(tour)}
                      className="py-2.5 px-4 rounded-xl bg-linear-to-r from-sand to-[#de5d35] hover:from-[#f0b555] hover:to-[#e86b43] text-[#120F0D] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md hover:shadow-sand/30 cursor-pointer transition-all"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{t.popularTours.bookThisTour || t.nav.bookNow}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
