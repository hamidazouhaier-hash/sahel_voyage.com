export type Language = 'en' | 'fr' | 'pl';

export type DepartureCity = 'Sousse' | 'Hammamet' | 'Tunis' | 'sousse' | 'hammamet' | 'tunis';

export type TourGroupType = 'private' | 'small_group' | 'group' | 'both';

export type CategoryKey = 
  | 'sousse' 
  | 'hammamet' 
  | 'tunis' 
  | 'safari' 
  | 'private' 
  | 'small_group'
  | 'day_trips';

export interface TourCategory {
  id: CategoryKey | string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  image: string;
  badge?: Record<Language, string>;
  subtitle?: Record<Language, string>;
  icon?: string;
}

export interface Tour {
  id: string;
  category: CategoryKey | 'cultural' | 'safari' | 'private' | string;
  departureCities: (DepartureCity | string)[];
  departureLocations?: Record<Language, string>;
  title: Record<Language, string>;
  subtitle?: Record<Language, string>;
  duration: Record<Language, string>;
  departure: Record<Language, string>;
  route?: Record<Language, string>;
  referencePrice?: number;
  priceStartingFrom?: Record<Language, string>;
  image: string;
  description: Record<Language, string>;
  ctaText?: Record<Language, string>;
  groupType?: 'private' | 'small_group' | 'both';
  tourType?: 'private' | 'group' | 'both';
  isSafari?: boolean;
  itinerary: Array<{
    day: number;
    title: Record<Language, string>;
    description: Record<Language, string>;
  }>;
  inclusions: Record<Language, string[]>;
  highlights: Record<Language, string[]>;
}

export interface Destination {
  id: string;
  name: string;
  region: Record<Language, string>;
  tagline: Record<Language, string>;
  description: Record<Language, string>;
  image: string;
  highlights: Record<Language, string[]>;
  coordinates?: {
    lat: number;
    lng: number;
    mapX: number;
    mapY: number;
  };
}

export interface BookingFormState {
  fullName: string;
  email: string;
  phone: string;
  numberOfTravelers: number;
  departureLocation: 'sousse' | 'hammamet' | 'tunis' | DepartureCity;
  preferredTour: string;
  preferredDate: string;
  tourType: 'private' | 'group' | TourGroupType;
  message: string;
  honeypot?: string;
}

// Backward compatibility types
export type TravelCategory = 'sahara' | 'excursions' | 'circuits' | 'sejours' | 'prives';
export type TravelType = string;
export interface QuoteFormState extends BookingFormState {
  name?: string;
  destination?: string;
  travelType?: string;
  preferredLanguage?: Language;
  preferredDates?: string;
}
export interface ReviewTheme {
  id: string;
  author: string;
  date: string;
  rating: number;
  comment: Record<Language, string>;
}
