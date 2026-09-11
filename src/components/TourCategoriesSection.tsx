import React from 'react';
import { Language } from '../types';
import { tourCategories } from '../data/toursData';
import { translations } from '../data/translations';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';

interface TourCategoriesSectionProps {
  currentLang: Language;
  onSelectCategory: (categoryId: string) => void;
}

export const TourCategoriesSection: React.FC<TourCategoriesSectionProps> = ({
  currentLang,
  onSelectCategory,
}) => {
  const t = translations[currentLang];

  const handleCategoryClick = (categoryId: string) => {
    onSelectCategory(categoryId);
    const target = document.querySelector('#tours');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="tour-categories"
      className="py-20 lg:py-28 bg-[#161210] relative overflow-hidden"
      aria-label="Tour Categories Section"
    >
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sand/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#de5d35]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand/15 border border-sand/30 text-sand text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>
              {currentLang === 'fr'
                ? 'Catalogue Sahel Voyage'
                : currentLang === 'pl'
                ? 'Katalog Sahel Voyage'
                : 'Sahel Voyage Catalog'}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.categories.title}
          </h2>

          <p className="text-sand-warm/80 text-base sm:text-lg leading-relaxed">
            {t.categories.subtitle}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tourCategories.map((cat) => {
            const title = cat.title?.[currentLang] || cat.title?.en || '';
            const description = cat.description?.[currentLang] || cat.description?.en || '';
            const badge = cat.badge ? (cat.badge[currentLang] || cat.badge.en || '') : '';

            return (
              <div
                key={cat.id}
                id={`cat-card-${cat.id}`}
                className="group relative rounded-2xl overflow-hidden bg-[#1F1A17] border border-white/10 hover:border-sand/50 transition-all duration-300 flex flex-col shadow-xl hover:shadow-2xl hover:-translate-y-1.5"
              >
                {/* Image Container with Zoom */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A17] via-transparent to-black/30" />

                  {/* Badge Tag */}
                  {badge && (
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-xs font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-sand" />
                      <span className="text-sand-warm">{badge}</span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-sand transition-colors mb-3">
                      {title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                      {description}
                    </p>
                  </div>

                  {/* Discover Button */}
                  <button
                    type="button"
                    onClick={() => handleCategoryClick(cat.id)}
                    className="w-full py-3 px-4 rounded-xl bg-white/5 group-hover:bg-sand text-white group-hover:text-[#120F0D] border border-white/10 group-hover:border-sand text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{t.categories.discoverBtn}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
