import React from 'react';
import { Language, Tour } from '../types';
import { PopularToursSection } from './PopularToursSection';

interface ExperiencesSectionProps {
  currentLang: Language;
  onSelectTour: (tour: Tour) => void;
  onRequestQuoteForTour: (tour: Tour) => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  currentLang,
  onSelectTour,
  onRequestQuoteForTour,
}) => {
  return (
    <PopularToursSection
      currentLang={currentLang}
      selectedFilter="all"
      onFilterChange={() => {}}
      onSelectTour={onSelectTour}
      onBookTour={onRequestQuoteForTour}
    />
  );
};
