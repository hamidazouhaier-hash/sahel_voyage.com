import { Language } from '../types';

export interface SiteTranslations {
  brand: {
    name: string;
    subname: string;
    tagline: string;
  };
  nav: {
    home: string;
    tours: string;
    safariTours: string;
    toursFromSousse: string;
    toursFromHammamet: string;
    toursFromTunis: string;
    privateTours: string;
    aboutUs: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    headline: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trustMessage: string;
    departuresBadge: string;
  };
  categories: {
    title: string;
    subtitle: string;
    discoverBtn: string;
  };
  popularTours: {
    title: string;
    subtitle: string;
    viewDetails: string;
    bookThisTour: string;
    durationLabel: string;
    departureLabel: string;
    itineraryLabel: string;
    highlightsLabel: string;
    inclusionsLabel: string;
    priceStartingAt: string;
    groupTypeLabel: string;
    privateOnly: string;
    smallGroupOnly: string;
    privateOrGroup: string;
  };
  saharaExperience: {
    badge: string;
    headline: string;
    text: string;
    cta: string;
    features: Array<{
      title: string;
      desc: string;
    }>;
  };
  medinatAlZahra: {
    badge: string;
    title: string;
    tagline: string;
    description: string;
    highlights: string[];
    cta: string;
  };
  destinations: {
    title: string;
    subtitle: string;
    instruction: string;
    exploreDest: string;
    viewToursInDest: string;
  };
  whyUs: {
    title: string;
    subtitle: string;
    cards: Array<{
      icon: string;
      title: string;
      desc: string;
    }>;
  };
  booking: {
    title: string;
    subtitle: string;
    fields: {
      fullName: string;
      fullNamePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      travelers: string;
      departureLocation: string;
      departureLocationPlaceholder: string;
      preferredTour: string;
      preferredTourPlaceholder: string;
      preferredDate: string;
      tourType: string;
      privateOption: string;
      smallGroupOption: string;
      message: string;
      messagePlaceholder: string;
    };
    submitCta: string;
    submitting: string;
    confirmationTitle: string;
    confirmationMessage: string;
    whatsappConfirmPrompt: string;
    whatsappDirectBtn: string;
    closeModal: string;
  };
  contact: {
    title: string;
    subtitle: string;
    companyName: string;
    parentAgency: string;
    locationText: string;
    emailLabel: string;
    whatsAppLabel: string;
    phoneLabel: string;
    whatsAppBtn: string;
    callBtn: string;
    emailBtn: string;
    hoursTitle: string;
    hoursText: string;
  };
  footer: {
    aboutBrand: string;
    navTitle: string;
    destinationsTitle: string;
    languagesTitle: string;
    contactTitle: string;
    copyright: string;
  };
}

export const translations: Record<Language, SiteTranslations> = {
  en: {
    brand: {
      name: 'Sahel Voyage',
      subname: 'Licensed Travel Agency • Sousse, Tunisia',
      tagline: 'Authentic tours & desert adventures across Tunisia',
    },
    nav: {
      home: 'Home',
      tours: 'Tours',
      safariTours: 'Safari Tours',
      toursFromSousse: 'Tours from Sousse',
      toursFromHammamet: 'Tours from Hammamet',
      toursFromTunis: 'Tours from Tunis',
      privateTours: 'Private Tours',
      aboutUs: 'About Us',
      contact: 'Contact',
      bookNow: 'Book Now',
    },
    hero: {
      headline: 'Discover the Real Tunisia',
      subtitle: 'Authentic tours, unforgettable adventures and unforgettable moments across Tunisia.',
      primaryCta: 'Explore Tours',
      secondaryCta: 'Book Your Adventure',
      trustMessage: 'Local Tunisia Tour Experts',
      departuresBadge: 'Departures from Sousse • Hammamet • Tunis',
    },
    categories: {
      title: 'Explore Tunisia Your Way',
      subtitle: 'Tailored excursions, desert expeditions and cultural day trips crafted by local experts.',
      discoverBtn: 'Discover Tour',
    },
    popularTours: {
      title: 'Popular Experiences',
      subtitle: 'Handcrafted itineraries departing from Sousse, Hammamet and Tunis, led by professional licensed guides.',
      viewDetails: 'View Full Itinerary',
      bookThisTour: 'Reserve This Tour',
      durationLabel: 'Duration',
      departureLabel: 'Departure',
      itineraryLabel: 'Detailed Itinerary',
      highlightsLabel: 'Highlights',
      inclusionsLabel: 'Included with Your Tour',
      priceStartingAt: 'From',
      groupTypeLabel: 'Travel Style',
      privateOnly: 'Private Tour',
      smallGroupOnly: 'Small Group',
      privateOrGroup: 'Private or Small Group',
    },
    saharaExperience: {
      badge: 'The Grand Erg Oriental',
      headline: 'Feel the Magic of the Sahara',
      text: 'Discover the landscapes, traditions and unforgettable experiences of southern Tunisia.',
      cta: 'Explore Safari Tours',
      features: [
        {
          title: 'Desert Dunes',
          desc: 'Endless rolling waves of golden and reddish sand across the Grand Erg Oriental.',
        },
        {
          title: 'Camel Experiences',
          desc: 'Traditional nomad caravan treks through sunset dunes with Bedouin guides.',
        },
        {
          title: 'Lush Oases',
          desc: 'Cool date palm groves, hidden mountain canyons and natural thermal hot springs.',
        },
        {
          title: 'Jeep Adventures',
          desc: 'High-adrenaline 4x4 dune cresting along legendary Paris-Dakar rally tracks.',
        },
        {
          title: 'Traditional Villages',
          desc: 'Centuries-old underground troglodyte dwellings and fortified Berber ksour castles.',
        },
        {
          title: 'Southern Tunisia Landscapes',
          desc: 'Mirage-shimmering salt flats, lunar mountain ridges and starlit desert camps.',
        },
      ],
    },
    medinatAlZahra: {
      badge: 'Featured Evening Experience',
      title: 'Medinat Al Zahra',
      tagline: 'An immersive journey through 3,000 years of Tunisian history under the stars',
      description: 'An unforgettable cultural evening combining a spectacular sound and light show, live equestrian performances, a traditional Tunisian banquet dinner, and an open-air living heritage museum.',
      highlights: [
        'Open-Air Living Heritage Museum & Artisan Workshops',
        'Traditional Multi-Course Tunisian Dinner with Folkloric Music',
        'Grand Night Spectacle: Laser, Light & Sound History Show',
        'Stunning Arab-Berber Horsemen Performances & Costumes',
      ],
      cta: 'Discover the Experience',
    },
    destinations: {
      title: 'From the Mediterranean to the Sahara',
      subtitle: 'Experience the contrast between azure Mediterranean coastlines and the golden silence of the desert.',
      instruction: 'Click on any destination on the map to explore highlights and available tours.',
      exploreDest: 'Explore Destination',
      viewToursInDest: 'View Tours from Here',
    },
    whyUs: {
      title: 'Why Travel With Sahel Voyage?',
      subtitle: 'With decades of licensed local expertise, passion, and flawless organization in Sousse and across Tunisia.',
      cards: [
        {
          icon: '🇹🇳',
          title: 'Local Tunisia Tour Experts',
          desc: 'Born and based in Sousse, our local travel experts design authentic, insider itineraries.',
        },
        {
          icon: '🏜️',
          title: 'Authentic Sahara Experiences',
          desc: 'Genuine desert bivouacs, nomad encounters, and responsible travel through the Grand Erg Oriental.',
        },
        {
          icon: '🚙',
          title: 'Private & Small Group Tours',
          desc: 'Intimate group sizes and bespoke private options tailored to your schedule, pace, and interests.',
        },
        {
          icon: '👨‍🏫',
          title: 'Experienced Local Guides',
          desc: 'Passionate government-licensed guides fluent in English, French, Polish, and other languages.',
        },
        {
          icon: '📍',
          title: 'Tours From Multiple Locations',
          desc: 'Convenient daily departures and direct hotel pick-ups from Sousse, Hammamet, and Tunis.',
        },
        {
          icon: '💬',
          title: 'Easy Reservation & Contact',
          desc: 'Fast, hassle-free booking with direct WhatsApp support and flexible on-arrival confirmation.',
        },
      ],
    },
    booking: {
      title: 'Request Your Reservation',
      subtitle: 'Fill out this simple form to secure your dates. No upfront payment required online.',
      fields: {
        fullName: 'Full Name',
        fullNamePlaceholder: 'e.g., Sarah Johnson',
        email: 'Email Address',
        emailPlaceholder: 'e.g., sarah@example.com',
        phone: 'WhatsApp / Phone Number',
        phonePlaceholder: 'e.g., +44 7911 123456',
        travelers: 'Number of Travelers',
        departureLocation: 'Departure Location',
        departureLocationPlaceholder: 'Select where you are staying',
        preferredTour: 'Preferred Tour',
        preferredTourPlaceholder: 'Choose a tour or excursion',
        preferredDate: 'Preferred Tour Date',
        tourType: 'Tour Format',
        privateOption: 'Private Tour (Dedicated Guide & Vehicle)',
        smallGroupOption: 'Small Group (Sociable & Cost-Effective)',
        message: 'Special Requests / Notes',
        messagePlaceholder: 'Hotel name, dietary needs, traveling with children, custom timing...',
      },
      submitCta: 'Request a Reservation',
      submitting: 'Submitting Your Request...',
      confirmationTitle: 'Reservation Request Received!',
      confirmationMessage: 'Thank you for choosing Sahel Voyage! Your reservation request has been transmitted to our team. Please note that your reservation should be confirmed by email, SMS, phone or in person after your arrival in Tunisia. We will contact you promptly to finalize details.',
      whatsappConfirmPrompt: 'Prefer instant confirmation? Connect with our team right now on WhatsApp:',
      whatsappDirectBtn: 'Confirm via WhatsApp',
      closeModal: 'Close',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Our travel specialists are available 7 days a week to answer your questions and customize your itinerary.',
      companyName: 'Sahel Voyage',
      parentAgency: 'Sahel Voyage – Licensed Travel Agency (Sousse)',
      locationText: 'Sousse, Tunisia',
      emailLabel: 'Email Address',
      whatsAppLabel: 'WhatsApp / Mobile',
      phoneLabel: 'Direct Phone',
      whatsAppBtn: 'WhatsApp Us',
      callBtn: 'Call Us',
      emailBtn: 'Send Email',
      hoursTitle: 'Opening Hours',
      hoursText: 'Monday to Sunday: 08:00 – 20:00 (Tunis Time)',
    },
    footer: {
      aboutBrand: 'Sahel Voyage is a fully licensed travel agency based in Sousse, Tunisia. We create bespoke private tours, small-group excursions, and unforgettable Sahara desert expeditions departing from Sousse, Hammamet, and Tunis.',
      navTitle: 'Quick Links',
      destinationsTitle: 'Top Destinations',
      languagesTitle: 'Languages',
      contactTitle: 'Direct Contact',
      copyright: '© 2026 Sahel Voyage. All rights reserved.',
    },
  },
  fr: {
    brand: {
      name: 'Sahel Voyage',
      subname: 'Agence de Voyages Agréée • Sousse, Tunisie',
      tagline: 'Circuits authentiques & aventures sahariennes en Tunisie',
    },
    nav: {
      home: 'Accueil',
      tours: 'Circuits',
      safariTours: 'Safari Tours',
      toursFromSousse: 'Excursions de Sousse',
      toursFromHammamet: 'Excursions d’Hammamet',
      toursFromTunis: 'Excursions de Tunis',
      privateTours: 'Circuits Privés',
      aboutUs: 'À Propos',
      contact: 'Contact',
      bookNow: 'Réserver',
    },
    hero: {
      headline: 'Découvrez la Vraie Tunisie',
      subtitle: 'Des circuits authentiques, des aventures inoubliables et des moments mémorables à travers la Tunisie.',
      primaryCta: 'Explorer les Circuits',
      secondaryCta: 'Réserver Votre Aventure',
      trustMessage: 'Experts Locaux des Circuits en Tunisie',
      departuresBadge: 'Départs depuis Sousse • Hammamet • Tunis',
    },
    categories: {
      title: 'Explorez la Tunisie à Votre Façon',
      subtitle: 'Excursions sur mesure, expéditions sahariennes et découvertes culturelles conçues par des spécialistes locaux.',
      discoverBtn: 'Découvrir le Tour',
    },
    popularTours: {
      title: 'Expériences Populaires',
      subtitle: 'Des itinéraires soigneusement créés au départ de Sousse, Hammamet et Tunis, encadrés par des guides officiels certifiés.',
      viewDetails: 'Voir l’itinéraire complet',
      bookThisTour: 'Réserver cette excursion',
      durationLabel: 'Durée',
      departureLabel: 'Départ',
      itineraryLabel: 'Itinéraire détaillé',
      highlightsLabel: 'Points forts',
      inclusionsLabel: 'Inclus dans le tarif',
      priceStartingAt: 'À partir de',
      groupTypeLabel: 'Formule de voyage',
      privateOnly: 'Circuit Privé',
      smallGroupOnly: 'Petit Groupe',
      privateOrGroup: 'Privé ou Petit Groupe',
    },
    saharaExperience: {
      badge: 'Le Grand Erg Oriental',
      headline: 'Ressentez la Magie du Sahara',
      text: 'Découvrez les paysages grandioses, les traditions millénaires et les expériences inoubliables du Sud tunisien.',
      cta: 'Explorer les Safari Tours',
      features: [
        {
          title: 'Dunes du Désert',
          desc: 'Des vagues infinies de sable doré et ocre à perte de vue sur le Grand Erg Oriental.',
        },
        {
          title: 'Méharées en Dromadaire',
          desc: 'Traversée féerique des crêtes de sable au coucher du soleil avec nos chameliers bédouins.',
        },
        {
          title: 'Oasis Verdoyantes',
          desc: 'Palmeraies luxuriantes, cascades de sources chaudes thermales et canyons rocheux.',
        },
        {
          title: 'Aventures en 4x4',
          desc: 'Frissons tout-terrain sur les pistes mythiques du Paris-Dakar et franchissement de dunes.',
        },
        {
          title: 'Villages Traditionnels',
          desc: 'Habitations troglodytiques souterraines de Matmata et greniers fortifiés (ksour).',
        },
        {
          title: 'Paysages du Sud Tunisien',
          desc: 'Mirages scintillants sur le lac salé Chott El Djerid et nuits étoilées sous la tente nomade.',
        },
      ],
    },
    medinatAlZahra: {
      badge: 'Spectacle & Dîner de Prestige',
      title: 'Medinat Al Zahra',
      tagline: 'Une fresque vivante de 3 000 ans d’histoire tunisienne sous les étoiles',
      description: 'Une soirée féerique mêlant spectacle de son et lumière à couper le souffle, cascades équestres traditionnelles, dîner gastronomique de fête et musée vivant des arts et traditions populaires.',
      highlights: [
        'Village musée à ciel ouvert et ateliers d’artisans traditionnels',
        'Dîner-banquet tunisien raffiné avec musique folklorique en live',
        'Grand spectacle son et lumière nocturne avec projections laser',
        'Prouesses équestres et cavaliers arabo-berbères en costumes d’apparat',
      ],
      cta: 'Découvrir l’Expérience',
    },
    destinations: {
      title: 'De la Méditerranée au Sahara',
      subtitle: 'Embarquez pour un voyage à travers les paysages contrastés de la Tunisie.',
      instruction: 'Cliquez sur une destination sur la carte pour afficher ses points forts et excursions.',
      exploreDest: 'Découvrir la Destination',
      viewToursInDest: 'Voir les départs d’ici',
    },
    whyUs: {
      title: 'Pourquoi Voyager avec Sahel Voyage ?',
      subtitle: 'Agence de voyages agréée d’État basée à Sousse, notre équipe vous garantit une expérience locale authentique et un professionnalisme sans faille.',
      cards: [
        {
          icon: '🇹🇳',
          title: 'Experts Locaux des Circuits en Tunisie',
          desc: 'Basés à Sousse, nos spécialistes conçoivent des parcours authentiques hors des sentiers battus.',
        },
        {
          icon: '🏜️',
          title: 'Expériences Authentiques au Sahara',
          desc: 'Bivouacs sous les étoiles, immersion nomade et respect des écosystèmes sahariens.',
        },
        {
          icon: '🚙',
          title: 'Circuits Privés & Petits Groupes',
          desc: 'Des groupes réduits pour préserver l’intimité et des formules 100% privatisées sur mesure.',
        },
        {
          icon: '👨‍🏫',
          title: 'Guides Locaux Expérimentés',
          desc: 'Guides officiels agréés d’État parlant couramment français, anglais, polonais et d’autres langues.',
        },
        {
          icon: '📍',
          title: 'Départs depuis Plusieurs Villes',
          desc: 'Prise en charge directe et transferts confortables depuis vos hôtels à Sousse, Hammamet et Tunis.',
        },
        {
          icon: '💬',
          title: 'Réservation Simple & Contact Direct',
          desc: 'Réservation rapide sans paiement immédiat en ligne, assistance continue par WhatsApp et téléphone.',
        },
      ],
    },
    booking: {
      title: 'Demandez Votre Réservation',
      subtitle: 'Remplissez ce formulaire pour bloquer vos dates. Aucun paiement préalable n’est exigé en ligne.',
      fields: {
        fullName: 'Nom et Prénom',
        fullNamePlaceholder: 'ex. Thomas Dupont',
        email: 'Adresse Email',
        emailPlaceholder: 'ex. thomas.dupont@example.com',
        phone: 'WhatsApp / Téléphone',
        phonePlaceholder: 'ex. +33 6 12 34 56 78',
        travelers: 'Nombre de Voyageurs',
        departureLocation: 'Lieu de Départ',
        departureLocationPlaceholder: 'Sélectionnez votre ville de séjour',
        preferredTour: 'Circuit Souhaité',
        preferredTourPlaceholder: 'Choisissez une excursion ou un safari',
        preferredDate: 'Date Souhaitée',
        tourType: 'Type de Formule',
        privateOption: 'Circuit Privé (Guide & Véhicule Dédiés)',
        smallGroupOption: 'Petit Groupe (Convivial & Économique)',
        message: 'Demandes particulières / Commentaires',
        messagePlaceholder: 'Nom de votre hôtel, enfants, horaires souhaités, questions...',
      },
      submitCta: 'Demander une Réservation',
      submitting: 'Envoi de votre demande...',
      confirmationTitle: 'Demande de Réservation Reçue !',
      confirmationMessage: 'Merci pour votre confiance envers Sahel Voyage ! Votre demande a été enregistrée avec succès. Veuillez noter que la réservation doit être confirmée par email, SMS, téléphone ou en personne après votre arrivée en Tunisie. Notre équipe prendra contact très rapidement avec vous.',
      whatsappConfirmPrompt: 'Besoin d’une réponse instantanée ? Échangez dès maintenant avec nous sur WhatsApp :',
      whatsappDirectBtn: 'Confirmer par WhatsApp',
      closeModal: 'Fermer',
    },
    contact: {
      title: 'Contactez-Nous',
      subtitle: 'Nos conseillers voyage sont à votre disposition 7j/7 pour répondre à toutes vos interrogations.',
      companyName: 'Sahel Voyage',
      parentAgency: 'Sahel Voyage – Agence de Voyages Agréée (Sousse)',
      locationText: 'Sousse, Tunisie',
      emailLabel: 'Adresse Email',
      whatsAppLabel: 'WhatsApp / Mobile',
      phoneLabel: 'Téléphone Direct',
      whatsAppBtn: 'Écrire sur WhatsApp',
      callBtn: 'Appeler l’Agence',
      emailBtn: 'Envoyer un Email',
      hoursTitle: 'Horaires d’Ouverture',
      hoursText: 'Du lundi au dimanche : 08h00 – 20h00 (Heure locale)',
    },
    footer: {
      aboutBrand: 'Sahel Voyage est une agence de voyages titulaire de licence d’État basée à Sousse, Tunisie. Nous organisons des safaris sahariens d’exception, des circuits privés sur mesure et des excursions culturelles au départ de Sousse, Hammamet et Tunis.',
      navTitle: 'Navigation',
      destinationsTitle: 'Destinations Clés',
      languagesTitle: 'Langues',
      contactTitle: 'Coordonnées Directes',
      copyright: '© 2026 Sahel Voyage. Tous droits réservés.',
    },
  },
  pl: {
    brand: {
      name: 'Sahel Voyage',
      subname: 'Licencjonowane Biuro Podróży • Sousse, Tunezja',
      tagline: 'Autentyczne wycieczki i wyprawy na pustynię w Tunezji',
    },
    nav: {
      home: 'Strona Główna',
      tours: 'Wycieczki',
      safariTours: 'Safari na Saharę',
      toursFromSousse: 'Wycieczki z Sousse',
      toursFromHammamet: 'Wycieczki z Hammametu',
      toursFromTunis: 'Wycieczki z Tunisu',
      privateTours: 'Wycieczki Prywatne',
      aboutUs: 'O Nas',
      contact: 'Kontakt',
      bookNow: 'Zarezerwuj',
    },
    hero: {
      headline: 'Odkryj Prawdziwą Tunezję',
      subtitle: 'Autentyczne wycieczki, niezapomniane przygody i wyjątkowe chwile w całej Tunezji.',
      primaryCta: 'Odkryj Wycieczki',
      secondaryCta: 'Zarezerwuj Przygodę',
      trustMessage: 'Lokalni Eksperci od Wycieczek w Tunezji',
      departuresBadge: 'Wyjazdy z Sousse • Hammametu • Tunisu',
    },
    categories: {
      title: 'Odkrywaj Tunezję po Swojemu',
      subtitle: 'Dopasowane wycieczki, wyprawy na pustynię i programy kulturowe przygotowane przez lokalnych znawców.',
      discoverBtn: 'Odkryj Wycieczkę',
    },
    popularTours: {
      title: 'Popularne Doświadczenia',
      subtitle: 'Sprawdzone programy ze startem z Sousse, Hammametu i Tunisu prowadzone przez licencjonowanych przewodników.',
      viewDetails: 'Zobacz pełen program',
      bookThisTour: 'Zarezerwuj tę wycieczkę',
      durationLabel: 'Czas trwania',
      departureLabel: 'Miejsce wyjazdu',
      itineraryLabel: 'Szczegółowy plan',
      highlightsLabel: 'Główne atrakcje',
      inclusionsLabel: 'W cenie wycieczki',
      priceStartingAt: 'Od',
      groupTypeLabel: 'Forma wyjazdu',
      privateOnly: 'Wycieczka Prywatna',
      smallGroupOnly: 'Mała Grupa',
      privateOrGroup: 'Prywatnie lub w Małej Grupie',
    },
    saharaExperience: {
      badge: 'Wielki Erg Wschodni',
      headline: 'Poczuj Magię Sahary',
      text: 'Odkryj krajobrazy, tradycje i niezapomniane przeżycia południowej Tunezji.',
      cta: 'Odkryj Wyprawy Safari',
      features: [
        {
          title: 'Wydmy Pustynne',
          desc: 'Nieskończone fale złotego i czerwonawego piasku Wielkiego Ergu Wschodniego.',
        },
        {
          title: 'Wyprawy na Wielbłądach',
          desc: 'Karawana po wydmach przy zachodzie słońca pod opieką doświadczonych Beduinów.',
        },
        {
          title: 'Zielone Oazy',
          desc: 'Gaje palm daktylowych, górskie kaniony i naturalne gorące źródła termalne.',
        },
        {
          title: 'Przygody 4x4 Jeepem',
          desc: 'Emocjonująca jazda terenowa dawnymi trasami rajdu Paryż-Dakar i grzbietami wydm.',
        },
        {
          title: 'Tradycyjne Wioski',
          desc: 'Podziemne domy troglodytów w Matmacie oraz ufortyfikowane berberyjskie ksoury.',
        },
        {
          title: 'Krajobrazy Południowej Tunezji',
          desc: 'Błyszczące solnisko Chott El Djerid z mirażami oraz rozgwieżdżone noce w obozie na pustyni.',
        },
      ],
    },
    medinatAlZahra: {
      badge: 'Wyjątkowy Wieczór Kulturowy',
      title: 'Medinat Al Zahra',
      tagline: 'Fascynująca podróż przez 3 000 lat historii Tunezji pod rozgwieżdżonym niebem',
      description: 'Niezapomniany wieczór łączący spektakularne widowisko światło i dźwięk, pokazy tradycyjnej jazdy konnej, uroczystą kolację z tunezyjskimi przysmakami oraz skansen rzemiosła i tradycji.',
      highlights: [
        'Skansen i tradycyjne warsztaty rzemieślnicze pod gołym niebem',
        'Uroczysta tradycyjna kolacja tunezyjska z muzyką na żywo',
        'Nocny spektakl historyczny "Światło i Dźwięk" z laserami',
        'Pokazy jeździeckie arabsko-berberyjskich jeźdźców w strojach z epoki',
      ],
      cta: 'Odkryj To Doświadczenie',
    },
    destinations: {
      title: 'Od Morza Śródziemnego po Saharę',
      subtitle: 'Zobacz Tunezję jako fascynującą podróż przez różnorodne krajobrazy i epoki.',
      instruction: 'Kliknij miejscowość na mapie, aby zobaczyć opis, zdjęcia i dostępne wycieczki.',
      exploreDest: 'Odkryj Miejsce',
      viewToursInDest: 'Zobacz Wycieczki z Tego Miejsca',
    },
    whyUs: {
      title: 'Dlaczego Warto Podróżować z Sahel Voyage?',
      subtitle: 'Jako licencjonowane biuro podróży z siedzibą w Sousse gwarantujemy bezpieczeństwo, profesjonalizm i autentyczne emocje.',
      cards: [
        {
          icon: '🇹🇳',
          title: 'Lokalni Eksperci od Wycieczek w Tunezji',
          desc: 'Biuro z siedzibą w Sousse. Znamy każdy zakątek Tunezji i tworzymy autorskie, sprawdzone trasy.',
        },
        {
          icon: '🏜️',
          title: 'Autentyczne Przeżycia na Saharze',
          desc: 'Obozy w sercu pustyni, spotkania z rdzennymi mieszkańcami i bezpieczna eksploracja ergu.',
        },
        {
          icon: '🚙',
          title: 'Wycieczki Prywatne i w Małych Grupach',
          desc: 'Kameralna atmosfera, elastyczność oraz możliwość pełnej personalizacji programu pod Twoje życzenia.',
        },
        {
          icon: '👨‍🏫',
          title: 'Doświadczeni Przewodnicy',
          desc: 'Oficjalni, licencjonowani przewodnicy mówiący płynnie po polsku, angielsku i francusku.',
        },
        {
          icon: '📍',
          title: 'Wyjazdy z Wielu Miejscowości',
          desc: 'Wygodne odbiory bezpośrednio z hoteli w Sousse, Hammamecie oraz Tunisie.',
        },
        {
          icon: '💬',
          title: 'Prosta Rezerwacja i Bezpośredni Kontakt',
          desc: 'Rezerwacja bez konieczności płacenia przez internet, stały kontakt przez WhatsApp i telefon.',
        },
      ],
    },
    booking: {
      title: 'Wyślij Zapytanie o Rezerwację',
      subtitle: 'Wypełnij krótki formularz, aby zarezerwować termin. Nie pobieramy przedpłat przez stronę.',
      fields: {
        fullName: 'Imię i Nazwisko',
        fullNamePlaceholder: 'np. Jan Kowalski',
        email: 'Adres E-mail',
        emailPlaceholder: 'np. jan.kowalski@example.com',
        phone: 'WhatsApp / Telefon',
        phonePlaceholder: 'np. +48 600 123 456',
        travelers: 'Liczba Podróżnych',
        departureLocation: 'Miejsce Wyjazdu',
        departureLocationPlaceholder: 'Wybierz miejscowość swojego hotelu',
        preferredTour: 'Wybrana Wycieczka',
        preferredTourPlaceholder: 'Wybierz wycieczkę lub safari',
        preferredDate: 'Preferowana Data',
        tourType: 'Format Wyjazdu',
        privateOption: 'Wycieczka Prywatna (Dedykowany Przewodnik i Pojazd)',
        smallGroupOption: 'Mała Grupa (Kameralnie i Ekonomicznie)',
        message: 'Uwagi / Dodatkowe Pytania',
        messagePlaceholder: 'Nazwa hotelu, dzieci w podróży, specjalne preferencje...',
      },
      submitCta: 'Wyślij Zapytanie o Rezerwację',
      submitting: 'Wysyłanie zapytania...',
      confirmationTitle: 'Zapytanie o Rezerwację Zostało Wysłane!',
      confirmationMessage: 'Dziękujemy za wybór Sahel Voyage! Twoje zgłoszenie zostało przesłane do naszego zespołu. Pamiętaj, że rezerwacja powinna zostać potwierdzona przez e-mail, SMS, telefonicznie lub osobiście po przyjeździe do Tunezji. Skontaktujemy się z Tobą bardzo szybko.',
      whatsappConfirmPrompt: 'Wolisz natychmiastowe potwierdzenie? Skontaktuj się z nami bezpośrednio przez WhatsApp:',
      whatsappDirectBtn: 'Potwierdź przez WhatsApp',
      closeModal: 'Zamknij',
    },
    contact: {
      title: 'Skontaktuj Się z Nami',
      subtitle: 'Nasi doradcy podróży są dostępni 7 dni w tygodniu, aby odpowiedzieć na Twoje pytania i zaplanować wycieczkę.',
      companyName: 'Sahel Voyage',
      parentAgency: 'Sahel Voyage – Licencjonowane Biuro Podróży (Sousse)',
      locationText: 'Sousse, Tunezja',
      emailLabel: 'Adres E-mail',
      whatsAppLabel: 'WhatsApp / Komórka (PL)',
      phoneLabel: 'Telefony Kontaktowe (PL)',
      whatsAppBtn: 'Napisz na WhatsApp',
      callBtn: 'Zadzwoń do Biura',
      emailBtn: 'Wyślij E-mail',
      hoursTitle: 'Godziny Pracy Biura',
      hoursText: 'Poniedziałek – Niedziela: 08:00 – 20:00 (Czas lokalny)',
    },
    footer: {
      aboutBrand: 'Sahel Voyage to licencjonowane biuro podróży z siedzibą w Sousse w Tunezji. Specjalizujemy się w wyprawach na Saharę, wycieczkach w małych grupach oraz prywatnych wyjazdach z Sousse, Hammametu i Tunisu.',
      navTitle: 'Nawigacja',
      destinationsTitle: 'Główne Destynacje',
      languagesTitle: 'Języki',
      contactTitle: 'Kontakt Bezpośredni',
      copyright: '© 2026 Sahel Voyage. Wszelkie prawa zastrzeżone.',
    },
  },
};
