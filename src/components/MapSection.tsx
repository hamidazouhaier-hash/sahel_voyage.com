import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { MapPin, Navigation, Phone, Clock, ExternalLink, MessageCircle } from 'lucide-react';

interface MapSectionProps {
  currentLang: Language;
}

export const MapSection: React.FC<MapSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Rue+Palestine,+Sousse+4000,+Tunisia';

  return (
    <section className="py-20 bg-navy text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-sand font-bold block mb-2">
            Notre Agence à Sousse
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t.mapSection.title}
          </h2>
          <div className="w-16 h-0.5 bg-sand mx-auto mb-5" />
          <p className="text-base sm:text-lg text-sand-warm leading-relaxed">
            {t.mapSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Display Card */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden border border-sand/30 shadow-2xl bg-navy-dark min-h-[380px] relative">
            <iframe
              title="Sahel Voyages - Rue Palestine Sousse"
              src="https://www.openstreetmap.org/export/embed.html?bbox=10.6300%2C35.8200%2C10.6480%2C35.8350&amp;layer=mapnik&amp;marker=35.8288%2C10.6384"
              className="w-full h-full min-h-[380px] border-0 filter contrast-[1.05] brightness-[0.95]"
              loading="lazy"
            />
            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 p-3 rounded-xl bg-navy/90 backdrop-blur-md border border-white/20 text-white shadow-lg pointer-events-none">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sand" />
                <span className="font-serif font-bold text-xs">Sahel Voyages</span>
              </div>
              <p className="text-[11px] text-sand-warm">Rue Palestine, Sousse 4000</p>
            </div>
          </div>

          {/* Location Info Box */}
          <div className="lg:col-span-4 bg-navy-light rounded-3xl p-6 sm:p-8 border border-sand/30 shadow-2xl flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand/15 text-sand text-[11px] font-bold uppercase tracking-wider mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>{t.mapSection.agencyOffice}</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Sousse, Tunisie
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-white/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-sand shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Adresse</span>
                    <span>Rue Palestine, Sousse 4000, Tunisie</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">
                      {currentLang === 'pl' ? 'Telefon & WhatsApp' : currentLang === 'fr' ? 'WhatsApp & Téléphone' : 'WhatsApp & Phone'}
                    </span>
                    {currentLang === 'pl' ? (
                      <div className="space-y-1 mt-1">
                        <div className="flex items-center gap-2">
                          <a
                            href="tel:+21653211170"
                            className="text-white hover:text-sand font-mono text-xs transition-colors"
                          >
                            +216 53 211 170
                          </a>
                          <a
                            href="https://wa.me/21653211170"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-400 hover:text-emerald-300 text-xs font-semibold underline"
                          >
                            WhatsApp PL 1
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <a
                            href="tel:+21623108284"
                            className="text-white hover:text-sand font-mono text-xs transition-colors"
                          >
                            +216 23 108 284
                          </a>
                          <a
                            href="https://wa.me/21623108284"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-400 hover:text-emerald-300 text-xs font-semibold underline"
                          >
                            WhatsApp PL 2
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1 mt-1">
                        <div className="flex items-center gap-2">
                          <a
                            href="tel:+21698403324"
                            className="text-white hover:text-sand font-mono text-xs transition-colors"
                          >
                            +216 98 403 324
                          </a>
                          <a
                            href="https://wa.me/21698403324"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-400 hover:text-emerald-300 text-xs font-semibold underline"
                          >
                            WhatsApp Direct
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-sand shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Accueil</span>
                    <span>Sur rendez-vous et assistance téléphonique</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Itinéraire Button */}
            <div className="pt-4 border-t border-white/10">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-navy bg-sand hover:bg-white transition-all flex items-center justify-center gap-2 shadow-lg group"
              >
                <Navigation className="w-4 h-4 transform group-hover:rotate-45 transition-transform" />
                <span>{t.mapSection.directionsBtn}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
