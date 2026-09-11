import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Star, MessageSquareQuote, CheckCircle, Sparkles, MapPin } from 'lucide-react';

interface ReviewsSectionProps {
  currentLang: Language;
}

interface Testimonial {
  id: string;
  name: string;
  country: string;
  flag: string;
  date: string;
  tour: Record<Language, string>;
  quote: Record<Language, string>;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Sophie & Alexandre Laurent',
    country: 'France',
    flag: '🇫🇷',
    date: 'October 2024',
    tour: {
      en: '2-Day Sahara Oasis & Dune Expedition',
      fr: 'Expédition 2 Jours Sahara & Oasis de Ksar Ghilane',
      pl: '2-dniowa wyprawa na Saharę i oazy Ksar Ghilane',
    },
    quote: {
      en: 'An absolute highlight of our trip to Tunisia! Sunset over the Grand Erg Oriental dunes on dromedary back was unforgettable. The Sahel Voyages team in Sousse arranged everything with immense care.',
      fr: 'Un moment inoubliable de notre séjour en Tunisie ! Le coucher de soleil sur les dunes du Grand Erg Oriental à dos de dromadaire était féérique. L’équipe Sahel Voyage à Sousse a été remarquable de professionnalisme.',
      pl: 'Najwspanialsze doświadczenie naszego pobytu w Tunezji! Zachód słońca na wydmach Wielkiego Ergu na grzbiecie wielbłąda zapierał dech w piersiach. Zespół z Sousse zorganizował wszystko perfekcyjnie.',
    },
    rating: 5,
  },
  {
    id: 'rev-2',
    name: 'Piotr i Anna Wiśniewscy',
    country: 'Polska',
    flag: '🇵🇱',
    date: 'September 2024',
    tour: {
      en: 'Private Tour Tunis, Carthage & Sidi Bou Said',
      fr: 'Circuit Privé Tunis, Carthage & Sidi Bou Said',
      pl: 'Prywatna wycieczka: Tunis, Kartagina i Sidi Bou Said',
    },
    quote: {
      en: 'Booking directly via WhatsApp was instantaneous and hassle-free. The vehicle was modern and air-conditioned, and our guide gave us deep insights into Carthage and the blue alleyways of Sidi Bou Said.',
      fr: 'Réservation directe via WhatsApp ultra fluide et sans acompte stressant en ligne. Véhicule impeccable et guide passionné qui nous a fait aimer Carthage et les ruelles bleues de Sidi Bou Said.',
      pl: 'Rezerwacja przez WhatsApp była błyskawiczna i bezproblemowa. Klimatyzowany komfortowy samochód, a przewodnik opowiedział nam fascynujące historie o Kartaginie i urokliwych uliczkach Sidi Bou Said. Bardzo polecamy!',
    },
    rating: 5,
  },
  {
    id: 'rev-3',
    name: 'Marcus & Jessica Lindqvist',
    country: 'Sweden / UK',
    flag: '🇬🇧',
    date: 'November 2024',
    tour: {
      en: 'Medinat Al Zahra Cultural Spectacle & Dinner',
      fr: 'Spectacle Son & Lumière Medinat Al Zahra',
      pl: 'Spektakl Światło i Dźwięk Medinat Al Zahra',
    },
    quote: {
      en: 'The equestrian stunts and the 3000-year history projection over the water were breathtaking. The Tunisian couscous dinner and folklore musicians completed a magical evening.',
      fr: 'Les prouesses équestres et la fresque lumineuse retraçant 3000 ans d’histoire au-dessus du plan d’eau étaient grandioses. Le dîner traditionnel et l’ambiance folklorique étaient parfaits.',
      pl: 'Wspaniałe popisy kaskaderów konnych oraz spektakl światła i dźwięku przedstawiający 3000 lat historii Tunezji. Tradycyjna kolacja i muzyka na żywo dopełniły ten magiczny wieczór.',
    },
    rating: 5,
  },
  {
    id: 'rev-4',
    name: 'Elena Rossi',
    country: 'Italy',
    flag: '🇮🇹',
    date: 'January 2025',
    tour: {
      en: 'Matmata, Douz & Chott El Djerid Salt Lake',
      fr: 'Matmata, Douz & Lac de Sel Chott El Djerid',
      pl: 'Matmata, Douz i jezioro solne Chott El Djerid',
    },
    quote: {
      en: 'Walking inside the underground troglodyte homes of Matmata felt like stepping into a cinematic dream. Sahel Voyage ensured our small group had plenty of time to take photos and chat with local Berber hosts.',
      fr: 'Découvrir les maisons troglodytiques de Matmata et traverser le Chott El Djerid au petit matin restera gravé dans ma mémoire. Une organisation sérieuse avec un respect sincère des populations locales.',
      pl: 'Wizyta w podziemnych domach troglodytów w Matmacie i przejazd przez wyschnięte słone jezioro o świcie były niczym z filmu. Kameralna grupa, mnóstwo czasu na zdjęcia i wspaniała atmosfera.',
    },
    rating: 5,
  },
];

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const sectionHeadings = {
    en: {
      tag: 'Verified Traveler Reviews',
      title: 'Loved by Travelers from Around the World',
      subtitle: 'Read genuine reviews from guests who experienced our desert expeditions, cultural day tours and private excursions.',
      ratingSummary: '4.9 out of 5 based on 450+ agency reviews',
      directBadge: 'Direct Agency Trust Guarantee',
    },
    fr: {
      tag: 'Avis Voyageurs Vérifiés',
      title: 'Recommandé par des Voyageurs du Monde Entier',
      subtitle: 'Découvrez les retours authentiques de nos clients sur nos expéditions au Sahara, nos journées culturelles et circuits privés.',
      ratingSummary: '4.9 sur 5 basé sur plus de 450 retours clients',
      directBadge: 'Garantie Agence Agréée Sahel Voyages',
    },
    pl: {
      tag: 'Opinie Podróżników',
      title: 'Cenione przez Podróżników z Całego Świata',
      subtitle: 'Przeczytaj autentyczne opinie gości, którzy przeżyli z nami wyprawy na pustynię, wycieczki jednodniowe i trasy prywatne.',
      ratingSummary: '4.9 na 5 na podstawie ponad 450 opinii podróżnych',
      directBadge: 'Gwarancja Licencjonowanego Biura Podróży',
    },
  }[currentLang];

  return (
    <section
      id="reviews"
      className="py-20 lg:py-28 bg-[#161210] relative overflow-hidden"
      aria-label="Traveler Reviews Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand/15 border border-sand/30 text-sand text-xs font-semibold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-sand" />
            <span>{sectionHeadings.tag}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {sectionHeadings.title}
          </h2>

          <p className="text-sand-warm/80 text-base sm:text-lg leading-relaxed">
            {sectionHeadings.subtitle}
          </p>

          {/* Rating Summary Bar */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#1F1A17] border border-white/10 text-xs sm:text-sm">
            <div className="flex items-center text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold" />
              ))}
            </div>
            <span className="font-semibold text-white">
              {sectionHeadings.ratingSummary}
            </span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#1F1A17] border border-white/10 hover:border-sand/40 transition-all flex flex-col justify-between shadow-xl space-y-4"
            >
              <div className="space-y-3">
                {/* Rating & Tour Pill */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center text-gold">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold" />
                    ))}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-sand/10 border border-sand/20 text-sand text-[11px] font-semibold">
                    {item.tour?.[currentLang] || item.tour?.en || ''}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-white/80 text-sm sm:text-base italic leading-relaxed pt-2">
                  &ldquo;{item.quote?.[currentLang] || item.quote?.en || ''}&rdquo;
                </p>
              </div>

              {/* Author & Country */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <div className="flex items-center gap-2">
                  <span className="text-base">{item.flag}</span>
                  <div>
                    <span className="font-bold text-white block">{item.name}</span>
                    <span className="text-white/50">{item.country}</span>
                  </div>
                </div>

                <span className="font-mono text-white/40">{item.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Trust Guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-sand-warm/70">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>
              {currentLang === 'fr'
                ? 'Sahel Voyage est une agence de voyages agréée d’État (Licence A, Sousse)'
                : currentLang === 'pl'
                ? 'Sahel Voyage to licencjonowane biuro podróży (Kategoria A, Sousse)'
                : 'Sahel Voyage is a fully licensed travel agency (Licence A, Sousse)'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
