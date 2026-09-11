import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { MapPin, Phone, Compass, Shield, Users, Award, MessageCircle } from 'lucide-react';
import heroSaharaImg from '../assets/images/sahel_sahara_hero_1789034117357.jpg';

interface AboutSectionProps {
  currentLang: Language;
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLang,
  onOpenQuoteModal,
}) => {
  const t = translations[currentLang];

  return (
    <section id="about" className="py-24 bg-sand-light/40 relative overflow-hidden border-t border-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand/20 text-navy text-xs uppercase tracking-widest font-bold">
              <Compass className="w-3.5 h-3.5 text-terracotta" />
              <span>{t.about.agencyType}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight">
              {t.about.title}
            </h2>

            <div className="w-20 h-1 bg-sand rounded-full" />

            {/* Factual Core Mission Text */}
            <p className="text-lg sm:text-xl text-navy font-serif italic leading-relaxed border-l-4 border-sand pl-4 py-1">
              « {t.about.mainText} »
            </p>

            <p className="text-sm sm:text-base text-navy/80 leading-relaxed">
              {currentLang === 'fr' && (
                "Implantée au centre de Sousse, notre agence est spécialisée dans l'organisation d'expéditions sahariennes, d'excursions culturelles à travers la Tunisie et d'itinéraires personnalisés pour les voyageurs francophones, polonais et internationaux."
              )}
              {currentLang === 'en' && (
                "Based in the heart of Sousse, our travel agency specializes in Sahara desert expeditions, cultural day trips across Tunisia, and customized private itineraries for English, French, and Polish-speaking travelers."
              )}
              {currentLang === 'pl' && (
                "Nasze biuro podróży z siedzibą w centrum Sousse specjalizuje się w wyprawach na Saharę, wycieczkach krajoznawczych po Tunezji oraz indywidualnych programach dla podróżnych z Polski i całego świata."
              )}
            </p>

            {/* Structured Contact & Operational Facts Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-sand/30 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-terracotta mb-1">
                  <MapPin className="w-4 h-4 text-sand" />
                  <span>{t.about.addressLabel}</span>
                </div>
                <p className="text-sm font-semibold text-navy">
                  Rue Palestine, Sousse 4000, Tunisie
                </p>
                <p className="text-xs text-navy/60 mt-1">
                  {t.about.operatingHours}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-sand/30 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
                  <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                  <span>WhatsApp & Téléphone</span>
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm font-semibold">
                  {currentLang === 'pl' ? (
                    <>
                      <div className="flex flex-wrap items-center gap-2">
                        <a
                          href="tel:+21653211170"
                          className="text-navy hover:text-emerald-700 transition-colors font-mono"
                        >
                          🇵🇱 Telefon 1 : +216 53 211 170
                        </a>
                        <a
                          href="https://wa.me/21653211170"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-emerald-600 hover:underline font-semibold"
                        >
                          (WhatsApp)
                        </a>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <a
                          href="tel:+21623108284"
                          className="text-navy hover:text-emerald-700 transition-colors font-mono"
                        >
                          🇵🇱 Telefon 2 : +216 23 108 284
                        </a>
                        <a
                          href="https://wa.me/21623108284"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-emerald-600 hover:underline font-semibold"
                        >
                          (WhatsApp)
                        </a>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href="tel:+21698403324"
                        className="text-navy hover:text-emerald-700 transition-colors font-mono"
                      >
                        {currentLang === 'fr' ? '🇫🇷 WhatsApp / Tél :' : '🇬🇧 WhatsApp / Call :'} +216 98 403 324
                      </a>
                      <a
                        href="https://wa.me/21698403324"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-emerald-600 hover:underline font-semibold"
                      >
                        (WhatsApp)
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase text-navy bg-sand hover:bg-sand-warm shadow-md transition-all active:scale-95"
              >
                {t.hero.primaryCta}
              </button>
            </div>
          </div>

          {/* Right Image & Trust Badge Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-navy">
              <img
                src={heroSaharaImg}
                alt="Sahel Voyages - Sahara & Excursions"
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
              
              {/* Bottom Floating Details */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-navy/90 backdrop-blur-md border border-white/20 text-white">
                <span className="text-[10px] uppercase tracking-widest text-sand font-bold block mb-1">
                  Sousse • Sahel • Sahara
                </span>
                <h4 className="font-serif text-lg font-bold text-[#FAF8F5]">
                  Sahel Voyages
                </h4>
                <p className="text-xs text-white/80 mt-1">
                  Rue Palestine, Sousse 4000, Tunisie
                </p>
                <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-xs">
                  <span className="text-sand">Avis Google vérifiés : 4.4 / 5</span>
                  <span className="text-white/60">31 avis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
