import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Sparkles, Calendar, ArrowRight, Music, Utensils, Eye, Landmark, Check, X } from 'lucide-react';
import medinatImg from '../assets/images/medinat_al_zahra_1789116592428.jpg';
import { getMainWhatsAppLink } from '../utils/whatsapp';

interface MedinatAlZahraSectionProps {
  currentLang: Language;
  onBookExperience: () => void;
}

export const MedinatAlZahraSection: React.FC<MedinatAlZahraSectionProps> = ({
  currentLang,
  onBookExperience,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const t = translations[currentLang];

  const features = [
    {
      icon: <Sparkles className="w-5 h-5 text-sand" />,
      title: currentLang === 'pl' ? 'Spektakl Światło i Dźwięk' : currentLang === 'fr' ? 'Spectacle Son & Lumière' : 'Light & Sound Show',
      desc: currentLang === 'pl' ? 'Zaawansowane lasery i efekty wizualne na gigantycznym naturalnym amfiteatrze.' : currentLang === 'fr' ? 'Projections laser monumentales et effets pyrotechniques sur les remparts.' : 'Monumental laser projections and dramatic illumination across historic battlements.',
    },
    {
      icon: <Music className="w-5 h-5 text-sand" />,
      title: currentLang === 'pl' ? 'Występy Jeździeckie i Folklor' : currentLang === 'fr' ? 'Prouesses Équestres & Folkloriques' : 'Equestrian & Folk Performances',
      desc: currentLang === 'pl' ? 'Jeźdźcy z pochodniami, tradycyjna muzyka beduińska i taniec brzucha.' : currentLang === 'fr' ? 'Cavaliers arabo-berbères avec flambeaux, danseuses et musiciens en costumes d’époque.' : 'Arabian-Berber horseback warriors with fire torches, live folkloric troupes and dancers.',
    },
    {
      icon: <Utensils className="w-5 h-5 text-sand" />,
      title: currentLang === 'pl' ? 'Tradycyjna Uczta Tunezyjska' : currentLang === 'fr' ? 'Dîner Gastronomique Tunisien' : 'Traditional Banquet Dinner',
      desc: currentLang === 'pl' ? 'Uczta z kuskusem, brikami, pieczoną jagnięciną i tunezyjskimi słodkościami.' : currentLang === 'fr' ? 'Banquet festif servi sous de somptueuses tentes caïdales au son de la nouba.' : 'Festive multi-course dinner served in imperial caïdal tents with mint tea & pastries.',
    },
    {
      icon: <Landmark className="w-5 h-5 text-sand" />,
      title: currentLang === 'pl' ? 'Skansen Rzemiosła i Tradycji' : currentLang === 'fr' ? 'Musée Vivant à Ciel Ouvert' : 'Open-Air Living Museum',
      desc: currentLang === 'pl' ? 'Tradycyjna wioska berberyjska, tłocznia oliwy, piekarnie tabouna i warsztaty.' : currentLang === 'fr' ? 'Reconstitution d’un village traditionnel, ateliers d’artisans et pressoir à huile.' : 'Reconstructed artisan heritage village with tabouna bakers, potters and weavers.',
    },
  ];

  return (
    <section
      id="medinat-al-zahra"
      className="py-20 lg:py-28 bg-[#14100E] text-white relative overflow-hidden"
      aria-label="Medinat Al Zahra Cultural Spectacle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Visual Asset */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-sand/30 shadow-2xl group">
              <img
                src={medinatImg}
                alt="Medinat Al Zahra night show with horses and light display"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14100E] via-transparent to-black/30" />

              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full bg-sand text-[#120F0D] text-xs font-bold uppercase tracking-wider shadow-lg">
                  {t.medinatAlZahra.badge}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-sand font-semibold block">
                    {currentLang === 'pl' ? 'Lokalizacja' : currentLang === 'fr' ? 'Lieu' : 'Location'}
                  </span>
                  <span className="text-sm font-bold text-white">
                    Sousse / Kalaa Kebira, Tunisia
                  </span>
                </div>
                <div className="px-3 py-1 rounded-lg bg-white/10 text-xs font-bold text-sand-warm">
                  {currentLang === 'pl' ? 'Wieczór (18:30 - 23:00)' : currentLang === 'fr' ? 'Soirée (18h30 - 23h00)' : 'Evening (18:30 - 23:00)'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Highlights */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand/15 border border-sand/30 text-sand text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentLang === 'pl' ? 'Unikalna Atrakcja' : currentLang === 'fr' ? 'Attraction Incontournable' : 'Must-See Tunisia Evening'}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
              {t.medinatAlZahra.title}
            </h2>

            <p className="text-sand text-base sm:text-lg font-medium mb-4">
              {t.medinatAlZahra.tagline}
            </p>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
              {t.medinatAlZahra.description}
            </p>

            {/* 4 Feature Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-sand/30 transition-colors">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    {feat.icon}
                    <h3 className="text-sm font-bold text-white">{feat.title}</h3>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-linear-to-r from-sand to-[#de5d35] hover:from-[#f0b555] hover:to-[#e86b43] text-[#120F0D] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
              >
                <span>{t.medinatAlZahra.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onBookExperience}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Calendar className="w-4 h-4 text-sand" />
                <span>{t.nav.bookNow}</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Medinat Al Zahra Detailed Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="bg-[#1A1614] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-sand/40 shadow-2xl p-6 sm:p-8 relative text-white">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-60 rounded-2xl overflow-hidden mb-6">
              <img
                src={medinatImg}
                alt="Medinat Al Zahra show"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sand text-[#120F0D] mb-1 inline-block">
                  Sousse Excursion
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Medinat Al Zahra Spectacular
                </h3>
              </div>
            </div>

            <h4 className="text-xs uppercase tracking-widest text-sand font-bold mb-3">
              {currentLang === 'pl' ? 'Program Wieczoru' : currentLang === 'fr' ? 'Programme de la Soirée' : 'Evening Program'}
            </h4>

            <div className="space-y-3 mb-6">
              {t.medinatAlZahra.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white/90">
                  <Check className="w-4 h-4 text-sand shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-sand/10 border border-sand/30 text-xs text-sand-warm mb-6">
              <p>
                {currentLang === 'pl'
                  ? 'Odbiór i powrót do hotelu w Sousse, Port El Kantaoui lub Monastyrze w cenie. Rezerwacja bez przedpłat.'
                  : currentLang === 'fr'
                  ? 'Prise en charge et retour inclus depuis votre hôtel à Sousse, Port El Kantaoui ou Monastir. Réservation sans prépaiement en ligne.'
                  : 'Hotel pick-up and return transfer included from Sousse, Port El Kantaoui or Monastir. Flexible booking with no upfront payment.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setModalOpen(false);
                  onBookExperience();
                }}
                className="flex-1 py-3 px-5 rounded-xl bg-linear-to-r from-sand to-[#de5d35] text-[#120F0D] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.nav.bookNow}</span>
              </button>

              <a
                href={getMainWhatsAppLink(currentLang, 'Medinat Al Zahra Cultural Spectacle')}
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
