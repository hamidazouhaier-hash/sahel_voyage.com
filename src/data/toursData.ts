import { Tour, TourCategory, Destination } from '../types';
import heroSaharaImg from '../assets/images/sahel_sahara_hero_1789034117357.jpg';
import ksarGhilaneImg from '../assets/images/ksar_ghilane.jpg';
import elJemImg from '../assets/images/el_jem_amphitheatre.jpg';
import matmataImg from '../assets/images/matmata_troglodyte.jpg';
import chottElDjeridImg from '../assets/images/chott_el_djerid.jpg';
import sidiBouSaidImg from '../assets/images/sidi_bou_said.jpg';
import sousseMedinaImg from '../assets/images/sousse_medina.jpg';
import portElKantaouiImg from '../assets/images/port_el_kantaoui.jpg';
import hammametImg from '../assets/images/hammamet_coast.jpg';
import ksarOuledSoltaneImg from '../assets/images/ksar_ouled_soltane.jpg';
import chebikaImg from '../assets/images/chebika_oasis.jpg';

export const tourCategories: TourCategory[] = [
  {
    id: 'sousse',
    image: sousseMedinaImg,
    badge: {
      en: 'Departure Port & Hub',
      fr: 'Point de départ principal',
      pl: 'Główny punkt startowy',
    },
    title: {
      en: 'Tours from Sousse',
      fr: 'Excursions depuis Sousse',
      pl: 'Wycieczki z Sousse',
    },
    description: {
      en: 'Discover Tunisia starting from Sousse with cultural excursions, city tours, private tours and Sahara adventures.',
      fr: 'Découvrez la Tunisie au départ de Sousse : excursions culturelles, visites de la ville, circuits privés et aventures au Sahara.',
      pl: 'Odkryj Tunezję rozpoczynając od Sousse: wycieczki kulturowe, zwiedzanie miasta, wyjazdy prywatne i wyprawy na Saharę.',
    },
  },
  {
    id: 'hammamet',
    image: hammametImg,
    badge: {
      en: 'Coast & Jasmine',
      fr: 'Côte & Jasmin',
      pl: 'Wybrzeże i Jaśmin',
    },
    title: {
      en: 'Tours from Hammamet',
      fr: 'Excursions depuis Hammamet',
      pl: 'Wycieczki z Hammametu',
    },
    description: {
      en: 'Explore Tunisia with excursions and private experiences departing from Hammamet.',
      fr: 'Explorez la Tunisie avec des excursions et des expériences privées au départ de Hammamet.',
      pl: 'Zwiedzaj Tunezję dzięki wycieczkom i spersonalizowanym wyprawom z Hammametu.',
    },
  },
  {
    id: 'tunis',
    image: sidiBouSaidImg,
    badge: {
      en: 'Heritage & Medina',
      fr: 'Histoire & Capitale',
      pl: 'Dziedzictwo i Stolica',
    },
    title: {
      en: 'Tours from Tunis',
      fr: 'Excursions depuis Tunis',
      pl: 'Wycieczki z Tunisu',
    },
    description: {
      en: 'Discover the history and culture of Tunis and its surrounding destinations.',
      fr: 'Découvrez l’histoire millénaire et la culture vibrante de Tunis et de ses environs.',
      pl: 'Poznaj fascynującą historię i bogatą kulturę stolicy Tunezji oraz okolicznych perełek.',
    },
  },
  {
    id: 'safari',
    image: heroSaharaImg,
    badge: {
      en: 'Grand Erg Oriental',
      fr: 'Grand Erg Oriental',
      pl: 'Wielki Erg Wschodni',
    },
    title: {
      en: 'Safari Tours',
      fr: 'Circuits Safari Sahara',
      pl: 'Wyprawy Safari na Saharę',
    },
    description: {
      en: 'Experience the Tunisian Sahara, desert landscapes, oases, dunes, camel rides and southern Tunisia.',
      fr: 'Vivez la magie du Sahara tunisien : paysages désertiques, oasis luxuriantes, dunes dorées, balades à dos de dromadaire et Sud tunisien.',
      pl: 'Doświadcz tunezyjskiej Sahary: pustynne bezkresy, oazy, wydmy, przejażdżki wielbłądami i urok południa Tunezji.',
    },
  },
  {
    id: 'private',
    image: ksarOuledSoltaneImg,
    badge: {
      en: 'VIP & Tailor-made',
      fr: 'Sur-mesure & VIP',
      pl: 'Prywatnie i Na Miarę',
    },
    title: {
      en: 'Private Tours',
      fr: 'Circuits Privés',
      pl: 'Wycieczki Prywatne',
    },
    description: {
      en: 'Enjoy a personalized experience with a private guide and driver dedicated to your group.',
      fr: 'Profitez d’une expérience haut de gamme sur mesure avec guide privé et chauffeur dédié à votre groupe.',
      pl: 'Ciesz się spersonalizowaną podróżą z prywatnym przewodnikiem i dedykowanym kierowcą tylko dla Twojej grupy.',
    },
  },
  {
    id: 'small_group',
    image: elJemImg,
    badge: {
      en: 'Intimate & Friendly',
      fr: 'Convivial & Équilibré',
      pl: 'Kameralnie i Komfortowo',
    },
    title: {
      en: 'Small Group Tours',
      fr: 'Tours en Petit Groupe',
      pl: 'Wycieczki w Małych Grupach',
    },
    description: {
      en: 'Travel with a smaller group while discovering Tunisia\'s history, culture and landscapes.',
      fr: 'Voyagez en petit groupe intime pour explorer l’histoire fascinante, la culture et les panoramas de la Tunisie.',
      pl: 'Podróżuj w kameralnej grupie, odkrywając historię, kulturę i malownicze krajobrazy Tunezji.',
    },
  },
];

export const popularTours: Tour[] = [
  {
    id: 'sousse-old-town-walking',
    category: 'sousse',
    departureCities: ['Sousse'],
    groupType: 'both',
    image: sousseMedinaImg,
    title: {
      en: 'Sousse Old Town Walking Tour',
      fr: 'Visite guidée de la Médina de Sousse',
      pl: 'Piesza wycieczka po Starym Mieście w Sousse',
    },
    subtitle: {
      en: 'UNESCO Medina, authentic souks and Ribat fortress',
      fr: 'Médina UNESCO, souks authentiques et forteresse du Ribat',
      pl: 'Medyna UNESCO, autentyczne suki i twierdza Ribat',
    },
    duration: {
      en: 'Half Day (approx. 4 hours)',
      fr: 'Demi-journée (env. 4 heures)',
      pl: 'Pół dnia (ok. 4 godziny)',
    },
    departure: {
      en: 'Sousse (hotel pick-up or meeting point)',
      fr: 'Sousse (départ hôtel ou point de rendez-vous)',
      pl: 'Sousse (odbiór z hotelu lub punkt zbiórki)',
    },
    route: {
      en: 'Port de Sousse → Bab El Bhar → Great Mosque → UNESCO Medina Souks → Ribat Tower',
      fr: 'Port de Sousse → Bab El Bhar → Grande Mosquée → Souks de la Médina → Tour du Ribat',
      pl: 'Port w Sousse → Bab El Bhar → Wielki Meczet → Suki Medyny → Wieża Ribat',
    },
    referencePrice: 75,
    ctaText: {
      en: 'Discover Sousse',
      fr: 'Découvrir Sousse',
      pl: 'Odkryj Sousse',
    },
    description: {
      en: 'A walking experience through the authentic Tunisian heritage of Sousse, including vibrant souks, exotic spices, colorful streets and impressive Arab architecture such as the Ribat.',
      fr: 'Une immersion pédestre au cœur du patrimoine authentique de Sousse : souks animés aux épices enivrantes, ruelles colorées et chef-d’œuvres de l’architecture arabo-musulmane comme le Ribat.',
      pl: 'Piesza podróż przez autentyczne dziedzictwo Sousse, tętniące życiem bazary, orientalne przyprawy, urokliwe uliczki oraz imponującą architekturę arabską, taką jak twierdza Ribat.',
    },
    itinerary: [
      {
        day: 1,
        title: {
          en: 'Guided Walk in the Medina & Ribat Fortress',
          fr: 'Balade guidée dans la Médina et la forteresse du Ribat',
          pl: 'Spacer z przewodnikiem po Medynie i twierdzy Ribat',
        },
        description: {
          en: 'Meet your licensed guide, enter through historical stone gates into the lively souk alleys (carpets, leather, brass, pottery), ascend the Ribat watchtower for 360° coastal panoramas, and pause at a traditional café for fresh mint tea with pine nuts.',
          fr: 'Accueil par votre guide certifié, découverte des remparts et des souks artisanaux (tapis mérgoum, cuir, poterie), ascension de la tour du Ribat pour une vue panoramique sur le port et la mer, pause thé à la menthe traditionnel.',
          pl: 'Spotkanie z licencjonowanym przewodnikiem, wejście przez zabytkowe bramy do suków (dywany, ceramika, wyroby skórzane), wejście na wieżę Ribat z panoramą 360° na miasto i wybrzeże oraz tradycyjna herbata miętowa.',
        },
      },
    ],
    inclusions: {
      en: [
        'Official English/French/Polish licensed local guide',
        'Admission fees to the Ribat of Sousse',
        'Traditional Tunisian mint tea tasting',
        'Hotel pick-up & drop-off within Sousse area',
      ],
      fr: [
        'Guide local officiel francophone / anglophone / polonophone',
        'Billet d’entrée au Ribat historique de Sousse',
        'Dégustation de thé à la menthe dans un café traditionnel',
        'Prise en charge et retour à votre hôtel à Sousse',
      ],
      pl: [
        'Oficjalny przewodnik lokalny mówiący w wybranym języku',
        'Bilety wstępu do twierdzy Ribat w Sousse',
        'Degustacja tradycyjnej tunezyjskiej herbaty z miętą',
        'Transfer z i do hotelu w rejonie Sousse',
      ],
    },
    highlights: {
      en: [
        'UNESCO World Heritage 9th-century Medina',
        'Panoramic views from the Ribat watchtower',
        'Artisan shops, spices, perfumes and olive wood craft',
        'Personalized pace and authentic local encounters',
      ],
      fr: [
        'Médina classée au Patrimoine Mondial de l’UNESCO',
        'Panorama exceptionnel depuis la tour de guet du Ribat',
        'Souks des artisans, épices, parfums et bois d’olivier',
        'Rythme adapté et échanges chaleureux avec les habitants',
      ],
      pl: [
        'Medyna z IX wieku wpisana na listę UNESCO',
        'Panorama wybrzeża i miasta ze szczytu Ribatu',
        'Warsztaty rzemieślnicze, przyprawy i wyroby z drewna oliwnego',
        'Komfortowe tempo i autentyczna atmosfera',
      ],
    },
  },
  {
    id: 'tunis-carthage-sidi-bou-said-private',
    category: 'private',
    departureCities: ['Sousse', 'Hammamet', 'Tunis'],
    groupType: 'private',
    image: sidiBouSaidImg,
    title: {
      en: 'Tunis – Carthage – Sidi Bou Said Private Tour',
      fr: 'Circuit Privé : Tunis – Carthage – Sidi Bou Said',
      pl: 'Prywatna wycieczka: Tunis – Kartagina – Sidi Bou Said',
    },
    subtitle: {
      en: 'Exclusive day tour with dedicated private guide & chauffeur',
      fr: 'Journée VIP exclusive avec chauffeur privé et guide dédié',
      pl: 'Ekskluzywny dzień z prywatnym kierowcą i przewodnikiem',
    },
    duration: {
      en: '1 Full Day (approx. 8–9 hours)',
      fr: '1 Journée Complète (env. 8–9 heures)',
      pl: '1 Pełny Dzień (ok. 8–9 godzin)',
    },
    departure: {
      en: 'Sousse, Hammamet, or Tunis',
      fr: 'Sousse, Hammamet ou Tunis',
      pl: 'Sousse, Hammamet lub Tunis',
    },
    route: {
      en: 'Your Hotel → Carthage Punic & Roman Ruins → Sidi Bou Said Cliff Village → Tunis UNESCO Medina',
      fr: 'Votre Hôtel → Vestiges puniques et romains de Carthage → Village blanc et bleu de Sidi Bou Said → Médina de Tunis',
      pl: 'Hotel → Kartagina (ruiny punickie i rzymskie) → Sidi Bou Said → Medyna w Tunisie',
    },
    referencePrice: 320,
    ctaText: {
      en: 'Explore the Tour',
      fr: 'Découvrir le circuit',
      pl: 'Odkryj wycieczkę',
    },
    description: {
      en: 'A private experience with a dedicated guide and driver. Guests can ask questions and discover Tunisia\'s cultural and historical highlights with personalized explanations.',
      fr: 'Une expérience haut de gamme sur mesure avec guide privé et chauffeur dédié. Prenez le temps de poser vos questions, d’adapter votre rythme et de percer les secrets des plus prestigieux sites de Tunisie.',
      pl: 'Spersonalizowana, prywatna wyprawa z dedykowanym przewodnikiem i kierowcą. Swobodnie zadawaj pytania, decyduj o tempie i odkrywaj najważniejsze perły kultury i historii Tunezji.',
    },
    itinerary: [
      {
        day: 1,
        title: {
          en: 'Antiquity to Bohemian Romance: Carthage, Sidi Bou Said & Tunis Medina',
          fr: 'De l’Antiquité à la bohème : Carthage, Sidi Bou Said et Médina de Tunis',
          pl: 'Od Starożytności po Bohemę: Kartagina, Sidi Bou Said i Medyna Tunisu',
        },
        description: {
          en: 'Morning visit to legendary Carthage: Antonine Baths, Byrsa Hill, and the Punic ports. Continue to the romantic cliffside village of Sidi Bou Said with whitewashed walls, cobalt blue shutters, and Café des Délices. Mediterranean lunch included. Afternoon immersion into the 8th-century Tunis Medina and Zitouna Mosque surrounding markets.',
          fr: 'Matinée consacrée aux ruines glorieuses de Carthage : Thermes d’Antonin face à la mer, colline de Byrsa et ports puniques. Découverte de la colline enchanteresse de Sidi Bou Said aux façades blanches et moucharabiehs bleus. Déjeuner raffiné de spécialités tunisiennes. Après-midi dans la grande Médina de Tunis et ses palais beylicaux.',
          pl: 'Poranne zwiedzanie legendarnej Kartaginy: Termy Antonina nad brzegiem morza, wzgórze Byrsa i porty punickie. Następnie malownicze miasteczko artystów Sidi Bou Said z białymi domami i kobaltowymi okiennicami. Wykwintny obiad z lokalnymi specjałami. Popołudnie w tętniącej życiem medynie w Tunisie.',
        },
      },
    ],
    inclusions: {
      en: [
        'Private premium air-conditioned Mercedes or equivalent vehicle',
        'Dedicated licensed expert Egyptologist/Historian guide',
        'All entry tickets: Carthage Archaeological Park & Antonine Baths',
        'Gourmet Tunisian lunch at a selected scenic restaurant',
        'Hotel door-to-door pick-up and drop-off (Sousse, Hammamet, Tunis)',
      ],
      fr: [
        'Véhicule privé climatisé grand confort avec chauffeur privé',
        'Guide conférencier officiel diplômé en histoire',
        'Billets d’entrée pour tous les sites archéologiques de Carthage',
        'Déjeuner gastronomique de spécialités tunisiennes inclus',
        'Prise en charge personnalisée à votre hôtel ou villa',
      ],
      pl: [
        'Prywatny, komfortowy klimatyzowany pojazd z kierowcą',
        'Dedykowany licencjonowany przewodnik historyk',
        'Wszystkie bilety wstępu: Park Archeologiczny Kartagina i Termy Antonina',
        'Znakomity obiad z daniami kuchni tunezyjskiej',
        'Odbiór i odwiezienie bezpośrednio pod drzwi Twojego hotelu',
      ],
    },
    highlights: {
      en: [
        'Completely flexible itinerary tailored to your preferences',
        'UNESCO Carthage Roman Baths overlooking turquoise waters',
        'Breathtaking panoramas from iconic Café des Délices in Sidi Bou Said',
        'Private shopping tips for genuine Tunisian handicraft and perfumes',
      ],
      fr: [
        'Itinéraire entièrement flexible selon vos envies et votre rythme',
        'Thermes romains de Carthage classés UNESCO face aux flots bleus',
        'Vue spectaculaire depuis la terrasse du Café des Délices à Sidi Bou Said',
        'Conseils personnalisés pour l’artisanat d’art et la parfumerie traditionnelle',
      ],
      pl: [
        'Elastyczny program dostosowany w 100% do Twojej grupy',
        'Rzymskie Termy Antonina w Kartaginie nad błękitnym morzem',
        'Widok z kultowej kawiarni Café des Délices w Sidi Bou Said',
        'Dostęp do autentycznych pracowni rzemieślniczych i perfumiarzy',
      ],
    },
  },
  {
    id: 'tunis-carthage-sidi-bou-said-small-group',
    category: 'small_group',
    departureCities: ['Sousse', 'Hammamet', 'Tunis'],
    groupType: 'small_group',
    image: sidiBouSaidImg,
    title: {
      en: 'Tunis – Carthage – Sidi Bou Said Small Group Tour',
      fr: 'Tunis – Carthage – Sidi Bou Said en Petit Groupe',
      pl: 'Tunis – Kartagina – Sidi Bou Said w Małej Grupie',
    },
    subtitle: {
      en: '3,000 years of civilization shared with fellow culture enthusiasts',
      fr: '3 000 ans d’histoire partagés dans une ambiance conviviale',
      pl: '3 000 lat historii w kameralnym i przyjaznym gronie',
    },
    duration: {
      en: '1 Full Day (approx. 8 hours)',
      fr: '1 Journée Complète (env. 8 heures)',
      pl: '1 Pełny Dzień (ok. 8 godzin)',
    },
    departure: {
      en: 'Sousse, Hammamet, Tunis',
      fr: 'Sousse, Hammamet, Tunis',
      pl: 'Sousse, Hammamet, Tunis',
    },
    route: {
      en: 'Hotel Pick-up → Carthage Historic Ruins → Sidi Bou Said Promenade → Tunis Old Medina',
      fr: 'Départ Hôtels → Ruines antiques de Carthage → Flânerie à Sidi Bou Said → Médina de Tunis',
      pl: 'Zbiórka z hoteli → Ruiny Kartaginy → Spacer po Sidi Bou Said → Stara Medyna w Tunisie',
    },
    referencePrice: 160,
    ctaText: {
      en: 'Discover History',
      fr: 'Découvrir l’Histoire',
      pl: 'Odkryj Historię',
    },
    description: {
      en: 'A unique journey through approximately 3,000 years of Tunisian history, discovering the fascinating historical periods and cultural heritage of Tunisia.',
      fr: 'Un voyage inoubliable à travers 3 000 ans d’histoire tunisienne : découvrez les grandes époques puniques, romaines, byzantines et arabo-islamiques qui ont forgé la Tunisie moderne.',
      pl: 'Niezwykła podróż przez blisko 3 000 lat historii Tunezji, pozwalająca poznać fascynujące epoki historyczne i unikalne dziedzictwo kulturowe tego kraju.',
    },
    itinerary: [
      {
        day: 1,
        title: {
          en: 'Carthage Empires & Andalusian Charm',
          fr: 'Les grands empires de Carthage et le charme andalou',
          pl: 'Wielkie imperia Kartaginy i andaluzyjski urok',
        },
        description: {
          en: 'Travel in an intimate mini-coach (max 12 travelers). Discover Hannibal’s capital Carthage, wander the cobblestone paths of Sidi Bou Said famous for bougainvillea and blue arches, enjoy an authentic local lunch, and finish with a guided stroll in the lively Tunis Medina.',
          fr: 'Voyage en minibus grand confort (maximum 12 participants). Visite commentée des vestiges de Carthage, promenade dans le village perché de Sidi Bou Said, pause déjeuner convivial et découverte des ruelles médiévales de la Médina de Tunis.',
          pl: 'Podróż nowoczesnym minibusem w małej grupie (maks. 12 osób). Zwiedzanie Kartaginy Hannibala, spacer urokliwymi uliczkami Sidi Bou Said, tradycyjny lunch i zwiedzanie medyny stolicy.',
        },
      },
    ],
    inclusions: {
      en: [
        'Small group format for an intimate experience (max 12 travelers)',
        'Professional licensed English / French / Polish speaking guide',
        'Comfortable air-conditioned mini-coach transport',
        'All entrance fees included',
        'Traditional Tunisian lunch',
      ],
      fr: [
        'Format convivial en petit groupe (maximum 12 personnes)',
        'Guide conférencier officiel multilingue',
        'Transport en minibus récent et climatisé',
        'Billets d’entrée aux monuments de Carthage',
        'Déjeuner tunisien traditionnel inclus',
      ],
      pl: [
        'Kameralna grupa do 12 osób gwarantująca komfort zwiedzania',
        'Profesjonalny przewodnik mówiący w Twoim języku',
        'Klimatyzowany, nowoczesny transport minibusowy',
        'Wszystkie opłaty wstępu w cenie',
        'Tradycyjny tunezyjski obiad',
      ],
    },
    highlights: {
      en: [
        'Balanced pace with ample free time for photos',
        'Carthage ruins perched over the Mediterranean gulf',
        'Artisan bambalouni doughnut and jasmine flower sellers in Sidi Bou Said',
        'Great value combined with high comfort',
      ],
      fr: [
        'Rythme équilibré avec du temps libre pour photos et flânerie',
        'Vestiges de Carthage dominant le golfe étincelant',
        'Dégustation de bambalouni chaud et colliers de jasmin à Sidi Bou Said',
        'Excellent rapport qualité/prix et confort optimal',
      ],
      pl: [
        'Świetnie zbalansowany czas zwiedzania i chwile na zdjęcia',
        'Starożytne ruiny Kartaginy z widokiem na Zatokę Tuniską',
        'Słynne pączki bambalouni i zapach jaśminu w Sidi Bou Said',
        'Wysoki standard i świetny stosunek jakości do ceny',
      ],
    },
  },
  {
    id: 'berbers-land-2days',
    category: 'safari',
    departureCities: ['Sousse', 'Hammamet', 'Tunis'],
    groupType: 'both',
    image: ksarGhilaneImg,
    title: {
      en: 'Berbers\' Land',
      fr: 'Terre des Berbères (2 Jours)',
      pl: 'Ziemia Berberów (2 Dni)',
    },
    subtitle: {
      en: 'Grand Erg Oriental, Ksar Ghilane hot spring & troglodyte caves',
      fr: 'Grand Erg Oriental, source thermale de Ksar Ghilane & maisons troglodytes',
      pl: 'Wielki Erg Wschodni, gorące źródła Ksar Ghilane i domy troglodytów',
    },
    duration: {
      en: '2 Days / 1 Night',
      fr: '2 Jours / 1 Nuit',
      pl: '2 Dni / 1 Noc',
    },
    departure: {
      en: 'Sousse, Hammamet, Tunis',
      fr: 'Sousse, Hammamet, Tunis',
      pl: 'Sousse, Hammamet, Tunis',
    },
    route: {
      en: 'El Jem Colosseum → Matmata Troglodytes → Ksar Ghilane Oasis Dunes → Chott El Djerid',
      fr: 'Amphithéâtre d’El Jem → Troglodytes de Matmata → Oasis de Ksar Ghilane → Lac salé Chott El Djerid',
      pl: 'Amfiteatr El Jem → Matmata (troglodyci) → Oaza Ksar Ghilane → Jezioro Chott El Djerid',
    },
    referencePrice: 420,
    ctaText: {
      en: 'Explore the Sahara',
      fr: 'Explorer le Sahara',
      pl: 'Odkryj Saharę',
    },
    description: {
      en: 'A two-day adventure toward the Great Erg Oriental and the famous Ksar Ghilane oasis. Experience the desert, reddish sand and a camel ride while discovering southern Tunisia.',
      fr: 'Une aventure de deux jours vers le Grand Erg Oriental et la célèbre oasis de Ksar Ghilane. Ressentez la magie du désert, le sable ocre rougeoyant et vivez une balade à dos de dromadaire au cœur des traditions berbères.',
      pl: 'Dwudniowa wyprawa w stronę Wielkiego Ergu Wschodniego i słynnej oazy Ksar Ghilane. Doświadcz bezkresu pustyni, czerwonawego piasku i przejażdżki na wielbłądzie w sercu południowej Tunezji.',
    },
    itinerary: [
      {
        day: 1,
        title: {
          en: 'Day 1: El Jem Amphitheatre, Matmata Cave Houses & Ksar Ghilane Camp',
          fr: 'Jour 1 : Colisée d’El Jem, troglodytes de Matmata et campement à Ksar Ghilane',
          pl: 'Dzień 1: Koloseum w El Jem, domy troglodytów w Matmacie i obóz w Ksar Ghilane',
        },
        description: {
          en: 'Morning departure to the magnificent Roman Colosseum of El Jem. Ascend through lunar mountain passes to Matmata to visit an authentic underground Berber family home. Enter the desert tracks toward Ksar Ghilane oasis. Swim in the natural thermal spring (32°C) nestled among date palms. Camel ride or quad excursion over reddish dunes at sunset. Traditional dinner and overnight in desert tents.',
          fr: 'Départ matinal vers le majestueux amphithéâtre romain d’El Jem. Traversée des reliefs lunaires jusqu’à Matmata pour visiter une authentique habitation troglodytique berbère. Piste saharienne vers Ksar Ghilane. Baignade dans la source d’eau chaude naturelle sous les palmiers. Balade à dromadaire au coucher du soleil. Dîner berbère et nuitée sous tente saharienne.',
          pl: 'Poranny wyjazd do rzymskiego amfiteatru w El Jem. Przejazd przez księżycowe krajobrazy do Matmaty – wizyta w podziemnym domostwie berberyjskim. Przejazd do oazy Ksar Ghilane. Kąpiel w naturalnym źródle termalnym (32°C). Zachód słońca na wielbłądach lub quadach. Kolacja przy ognisku i nocleg w obozie na pustyni.',
        },
      },
      {
        day: 2,
        title: {
          en: 'Day 2: Sunrise over the Dunes, Salt Lake Mirage & Return Journey',
          fr: 'Jour 2 : Lever de soleil sur les dunes, mirages du Chott El Djerid et retour',
          pl: 'Dzień 2: Wschód słońca nad wydmami, miraże Chott El Djerid i powrót',
        },
        description: {
          en: 'Wake up to the breathtaking dawn silence over the Erg Oriental dunes. Cross the vast glittering salt flats of Chott El Djerid with its famous pinkish hues and mirages. Visit the fortified Berber granaries (Ksour) before comfortable return to your coastal hotel.',
          fr: 'Réveil magique au lever du soleil sur les grandes dunes dorées. Traversée spectaculaire de la mer de sel asséchée du Chott El Djerid avec ses teintes rosées et mirages optiques. Visite d’un ksar fortifié avant le retour confortable vers votre hôtel de séjour.',
          pl: 'Magiczny poranek i wschód słońca nad wydmami Wielkiego Ergu. Przejazd przez olbrzymie słone jezioro Chott El Djerid ze słynnymi różowymi refleksami i mirażami. Zwiedzanie ufortyfikowanych spichlerzy ksour i powrót na wybrzeże.',
        },
      },
    ],
    inclusions: {
      en: [
        'Air-conditioned 4x4 or comfort coach with experienced desert driver',
        'Professional multilingual guide throughout both days',
        'Overnight accommodation in an authentic Sahara desert camp',
        'Dinner on Day 1 and breakfast on Day 2',
        'El Jem amphitheatre entrance ticket',
        'Berber troglodyte home visit with local bread and olive oil tasting',
      ],
      fr: [
        'Transport en 4x4 tout-terrain ou minibus climatisé avec chauffeur aguerri',
        'Guide professionnel accompagnateur durant tout le circuit',
        'Nuitée en campement saharien sous les étoiles',
        'Dîner traditionnel du jour 1 et petit-déjeuner du jour 2',
        'Billet d’entrée au Colisée romain d’El Jem',
        'Visite d’une véritable maison troglodyte avec dégustation de pain tabouna et miel',
      ],
      pl: [
        'Transport pojazdem 4x4 lub minibusem z doświadczonym kierowcą',
        'Opieka licencjonowanego przewodnika przez 2 dni',
        'Nocleg w klimatycznym obozie na Saharze',
        'Kolacja w dniu 1 oraz śniadanie w dniu 2',
        'Bilet wstępu do amfiteatru w El Jem',
        'Wizyta w autentycznym domu troglodytów z poczęstunkiem',
      ],
    },
    highlights: {
      en: [
        'Warm thermal spring bathing in the heart of Ksar Ghilane oasis',
        'Sunset camel trek across endless red-golden sand dunes',
        'Underground Star Wars filming location in Matmata',
        'El Jem Roman colosseum preserved better than Rome\'s',
      ],
      fr: [
        'Baignade revigorante dans la source thermale chaude de l’oasis',
        'Balade à dos de dromadaire au coucher du soleil sur les dunes ocre',
        'Maison troglodytique légendaire ayant servi de décor à Star Wars',
        'Colisée d’El Jem, l’un des monuments romains les mieux préservés au monde',
      ],
      pl: [
        'Kąpiel w gorących źródłach termalnych pośród palm oazy',
        'Karawana wielbłądów po złotych wydmach przy zachodzie słońca',
        'Wizyta w podziemnych domach znanych m.in. z Gwiezdnych Wojen',
        'Amfiteatr w El Jem – trzeci co do wielkości na świecie',
      ],
    },
  },
  {
    id: 'sahara-explorer-2days',
    category: 'safari',
    departureCities: ['Sousse', 'Hammamet', 'Tunis'],
    groupType: 'both',
    image: heroSaharaImg,
    title: {
      en: 'Sahara Explorer',
      fr: 'Sahara Explorer (2 Jours)',
      pl: 'Sahara Explorer (2 Dni)',
    },
    subtitle: {
      en: 'Dunes, camel rides, palm tree juice & southern treasures',
      fr: 'Dunes dorées, dromadaires, jus de palme frais & merveilles du Sud',
      pl: 'Wydmy, karawana wielbłądów, sok palmowy i skarby południa',
    },
    duration: {
      en: '2 Days / 1 Night',
      fr: '2 Jours / 1 Nuit',
      pl: '2 Dni / 1 Noc',
    },
    departure: {
      en: 'Sousse, Hammamet, Tunis',
      fr: 'Sousse, Hammamet, Tunis',
      pl: 'Sousse, Hammamet, Tunis',
    },
    route: {
      en: 'El Jem → Matmata → Douz (Gate of Sahara) → Chott El Djerid → Tozeur / Mountain Oases',
      fr: 'El Jem → Matmata → Douz (Porte du Sahara) → Chott El Djerid → Tozeur & Oasis de montagne',
      pl: 'El Jem → Matmata → Douz (Wrota Sahary) → Chott El Djerid → Tozeur i oazy górskie',
    },
    referencePrice: 380,
    ctaText: {
      en: 'Discover the Sahara',
      fr: 'Découvrir le Sahara',
      pl: 'Odkryj Saharę',
    },
    description: {
      en: 'A two-day tour discovering some of the most important attractions of southern Tunisia. Experience desert sand, dunes, camel rides and palm tree juice.',
      fr: 'Un circuit incontournable de deux jours reliant les sites majeurs du Sud tunisien : dunes de sable infinies, méharée en dromadaire, dégustation de sève de palmier fraîche (lagmi) et oasis verdoyantes.',
      pl: 'Dwudniowa klasyczna wyprawa ukazująca najważniejsze atrakcje południowej Tunezji: ocean piasku, wydmy, przejażdżki wielbłądami, świeży sok palmowy i bajeczne oazy.',
    },
    itinerary: [
      {
        day: 1,
        title: {
          en: 'Day 1: Roman Heritage to the Gate of the Desert in Douz',
          fr: 'Jour 1 : Du colisée romain aux portes du désert à Douz',
          pl: 'Dzień 1: Od rzymskiego koloseum po wrota pustyni w Douz',
        },
        description: {
          en: 'Visit the 3rd-century El Jem Amphitheatre. Traverse the lunar hills of Matmata to explore Berber troglodyte caves. Reach Douz, known as the "Gate of the Sahara". Dress in traditional Tuareg scarves for a camel ride into the white-sand dunes. Taste fresh local palm tree juice (lagmi) and check into a 4-star desert hotel with pool.',
          fr: 'Visite guidée du Colisée d’El Jem. Route vers les paysages lunaires de Matmata et découverte des grottes troglodytes. Arrivée à Douz, la Porte du désert. Enfilez le chèche traditionnel pour une méharée sur les grandes dunes de sable fin. Dégustation de jus de palmier frais. Dîner buffet et nuitée en hôtel saharien 4 étoiles.',
          pl: 'Zwiedzanie amfiteatru w El Jem. Przejazd do Matmaty i wizyta u Berberów w domach wydrążonych w ziemi. Przyjazd do Douz – "Wrót Sahary". Tradycyjne chusty pustynne i karawana wielbłądów po białych wydmach. Degustacja świeżego soku palmowego. Kolacja i nocleg w 4* hotelu z basenem.',
        },
      },
      {
        day: 2,
        title: {
          en: 'Day 2: Salt Lake Sunrise, Mountain Oases of Chebika & Return',
          fr: 'Jour 2 : Lever de soleil sur le Chott El Djerid, oasis de montagne de Chebika et retour',
          pl: 'Dzień 2: Wschód słońca nad Chott El Djerid, górska oaza Chebika i powrót',
        },
        description: {
          en: 'Early morning crossing of Chott El Djerid to catch the sunrise over crystallized salt expanses. Explore the breathtaking mountain canyon oasis of Chebika with its natural freshwater waterfall. Scenic return route via Kairouan.',
          fr: 'Traversée à l’aube du Chott El Djerid pour admirer le lever du soleil et les reflets cristallins. Découverte de l’oasis de montagne suspendue de Chebika et de ses cascades d’eau pure au milieu des rochers arides. Retour par les routes historiques de Kairouan.',
          pl: 'Przejazd o świcie przez słone jezioro Chott El Djerid z podziwianiem wschodu słońca. Piesza wycieczka do górskiej oazy Chebika z wodospadami pośród skalnych kanionów. Powrót z postojem w Kairouanie.',
        },
      },
    ],
    inclusions: {
      en: [
        'Modern air-conditioned transport throughout',
        'Expert licensed government guide',
        '1-night 4-star desert hotel accommodation with dinner and breakfast',
        'Visit to El Jem Colosseum, Matmata cave home, and Chebika oasis',
        'Fresh date and palm juice tasting in the palm grove',
      ],
      fr: [
        'Transport en autocar ou minibus grand tourisme climatisé',
        'Guide accompagnateur agréé bilingue tout au long du voyage',
        '1 nuitée en hôtel 4 étoiles avec dîner et petit-déjeuner inclus',
        'Entrées au Colisée d’El Jem, maison troglodyte et canyon de Chebika',
        'Dégustation de dattes deglet nour et de sève de palmier fraîche',
      ],
      pl: [
        'Klimatyzowany transport autokarowy lub minibusowy o wysokim komforcie',
        'Doświadczony przewodnik przez cały czas trwania wycieczki',
        '1 nocleg w hotelu 4* z obiadokolacją i śniadaniem',
        'Bilety i wstępy: El Jem, dom troglodytów, oaza Chebika',
        'Degustacja świeżych daktyli i soku palmowego',
      ],
    },
    highlights: {
      en: [
        'Douz Sahara dunes camel safari with nomad guides',
        'Unique taste of natural palm tree juice straight from the oasis',
        'Chebika canyon oasis with dramatic palm canyons and springs',
        'Pink and golden sunrise reflections over Chott El Djerid',
      ],
      fr: [
        'Méharée sur les dunes de Douz avec guides chameliers chamarrés',
        'Dégustation authentique de jus de palmier frais au cœur de la palmeraie',
        'Oasis de montagne de Chebika avec source d’eau cristalline dans les gorges',
        'Lever de soleil inoubliable sur les étendues salines du Chott El Djerid',
      ],
      pl: [
        'Wyprawa na wielbłądach po bezkresnych wydmach Douz',
        'Smak naturalnego, orzeźwiającego soku z palmy prosto z oazy',
        'Górska oaza Chebika z malowniczym kanionem i wodospadem',
        'Niezwykłe kolory i miraże na słonym jeziorze Chott El Djerid',
      ],
    },
  },
  {
    id: '3-days-jeep-safari',
    category: 'safari',
    departureCities: ['Sousse', 'Hammamet', 'Tunis'],
    groupType: 'both',
    image: ksarOuledSoltaneImg,
    title: {
      en: '3 Days Jeep Safari',
      fr: 'Safari Jeep 4x4 (3 Jours)',
      pl: 'Safari Jeepem 4x4 (3 Dni)',
    },
    subtitle: {
      en: 'Ultimate southern expedition: dunes, oases, canyons & Berber ksour',
      fr: 'La grande expédition du Sud : dunes, oasis de montagne, canyons et ksour',
      pl: 'Wielka ekspedycja na południe: wydmy, oazy górskie, kaniony i ksoury',
    },
    duration: {
      en: '3 Days / 2 Nights',
      fr: '3 Jours / 2 Nuits',
      pl: '3 Dni / 2 Noce',
    },
    departure: {
      en: 'Sousse, Hammamet, Tunis',
      fr: 'Sousse, Hammamet, Tunis',
      pl: 'Sousse, Hammamet, Tunis',
    },
    route: {
      en: 'El Jem → Matmata → Ksar Ghilane → Douz Dunes → Chott El Djerid → Tozeur → Chebika & Tamerza Canyons',
      fr: 'El Jem → Matmata → Ksar Ghilane → Dunes de Douz → Chott El Djerid → Tozeur → Canyons de Chebika & Tamerza',
      pl: 'El Jem → Matmata → Ksar Ghilane → Wydmy Douz → Chott El Djerid → Tozeur → Kaniony Chebika i Tamerza',
    },
    referencePrice: 590,
    ctaText: {
      en: 'Start the Adventure',
      fr: 'Commencer l’Aventure',
      pl: 'Rozpocznij Przygodę',
    },
    description: {
      en: 'A three-day Jeep safari through southern Tunisia, designed to discover as many highlights of the region as possible, including the attractions of the Sahara Explorer tour and much more.',
      fr: 'La plus complète des aventures sahariennes : trois jours intenses en véhicule tout-terrain 4x4 pour découvrir tous les trésors du Sud tunisien, alliant pistes sablonneuses, oasis verdoyantes, villages troglodytes et citadelles berbères.',
      pl: 'Trzydniowe safari jeepami z napędem 4x4 przez południową Tunezję, stworzone aby odkryć jak najwięcej cudów tego regionu – od atrakcji wyprawy Sahara Explorer po bezdroża i ukryte kaniony.',
    },
    itinerary: [
      {
        day: 1,
        title: {
          en: 'Day 1: El Jem, Matmata Underground Houses & Desert Camp',
          fr: 'Jour 1 : Colisée d’El Jem, Matmata et campement saharien',
          pl: 'Dzień 1: El Jem, podziemna Matmata i obóz na Saharze',
        },
        description: {
          en: 'Depart in rugged 4x4 vehicles. Stop at the colossal amphitheatre of El Jem. Ascend the Dahar mountains to Matmata’s subterranean homes. Continue off-road into the sand dunes of the Grand Erg Oriental for sunset, dinner, and starlit camp.',
          fr: 'Départ en 4x4 tout-terrain. Visite approfondie d’El Jem. Immersion dans les habitations troglodytes de Matmata. Piste sablonneuse vers les dunes du Grand Erg Oriental, coucher de soleil et nuit sous les étoiles du Sahara.',
          pl: 'Wyjazd pojazdami 4x4. Zwiedzanie rzymskiego koloseum w El Jem. Odkrywanie podziemnych korytarzy Matmaty. Wjazd na pustynne bezdroża ku wydmom, zachód słońca i nocleg pod gwiazdami.',
        },
      },
      {
        day: 2,
        title: {
          en: 'Day 2: Douz Dunes, Salt Flats of Chott El Djerid & Tozeur Palm Oasis',
          fr: 'Jour 2 : Dunes de Douz, traversée du Chott El Djerid et palmeraie de Tozeur',
          pl: 'Dzień 2: Wydmy w Douz, jezioro Chott El Djerid i oaza Tozeur',
        },
        description: {
          en: 'Camel riding or quad tracks in Douz. Cross the immense salt lake of Chott El Djerid. Arrive in the oasis city of Tozeur, explore the brick-architecture old town, and enjoy an evening 4x4 ride across the Paris-Dakar rally tracks to the Ong Jmal Star Wars film set.',
          fr: 'Méharée à Douz. Traversée du Chott El Djerid et de ses mirages étincelants. Arrivée dans l’oasis de Tozeur aux façades de briques d’argile tressées. Piste 4x4 sur l’ancien tracé du Paris-Dakar jusqu’au site d’Ong Jmel (décors de Star Wars). Dîner et hôtel à Tozeur.',
          pl: 'Przejażdżka wielbłądami w Douz. Przejazd przez solniska Chott El Djerid. Zwiedzanie Tozeur z unikalną architekturą z wypalanej cegły. Emocjonujący przejazd 4x4 trasą rajdu Paryż-Dakar do miasteczka Star Wars Ong Jmal.',
        },
      },
      {
        day: 3,
        title: {
          en: 'Day 3: Chebika, Tamerza & Midès Mountain Canyons to Holy Kairouan',
          fr: 'Jour 3 : Oasis suspendues de Chebika, Tamerza et Midès vers Kairouan',
          pl: 'Dzień 3: Kaniony górskie Chebika, Tamerza i Mides w drodze do Kairouanu',
        },
        description: {
          en: 'Drive up into the Atlas Mountains. Hike the dramatic gorges of Chebika and the grand canyon of Midès on the Algerian border. Stop at the holy historic city of Kairouan before your evening return.',
          fr: 'Montée spectaculaire en 4x4 dans les monts de l’Atlas. Randonnée dans les gorges vertigineuses de Chebika, la grande cascade de Tamerza et les canyons de Midès face à la frontière algérienne. Halte culturelle à Kairouan puis retour.',
          pl: 'Wjazd w góry Atlasu. Wędrówka wąwozami Chebiki, wodospady Tamerzy i monumentalny kanion Mides na granicy z Algierią. Wizyta w świętym mieście Kairouan i wieczorny powrót.',
        },
      },
    ],
    inclusions: {
      en: [
        'Dedicated 4x4 all-terrain vehicle with expert desert rally driver',
        '2 nights accommodation (1 desert camp + 1 high-tier hotel in Tozeur)',
        'Full-board dining package (all breakfasts, lunches, and dinners)',
        'Off-road expedition to Ong Jmal Star Wars set',
        'All regional park and site entry tickets',
      ],
      fr: [
        'Véhicule 4x4 tout-terrain exclusif avec pilote saharien expérimenté',
        '2 nuitées (1 nuit en campement de charme au désert + 1 nuit en hôtel à Tozeur)',
        'Pension complète : tous les déjeuners, dîners et petits-déjeuners',
        'Rallye 4x4 sur les dunes jusqu’au décor de Star Wars à Ong Jmel',
        'Tous les droits d’accès aux sites, canyons et oasis',
      ],
      pl: [
        'Dedykowany samochód terenowy 4x4 z profesjonalnym kierowcą',
        '2 noclegi (1 w obozie na pustyni + 1 w komfortowym hotelu w Tozeur)',
        'Pełne wyżywienie (wszystkie śniadania, obiady i kolacje)',
        'Wyprawa 4x4 po wydmach na plan filmowy Gwiezdnych Wojen w Ong Jmal',
        'Wszystkie opłaty wstępu do parków, kanionów i zabytków',
      ],
    },
    highlights: {
      en: [
        'Full off-road 4x4 thrill across desert dunes and mountain gorges',
        'Iconic film sets of Star Wars (Mos Espa & Lars Homestead)',
        'Deep Atlas mountain canyons of Midès and mountain springs',
        'Comprehensive 360° overview of Tunisia\'s geographical diversity',
      ],
      fr: [
        'Sensations fortes en 4x4 sur les crêtes des dunes et dans les canyons',
        'Décors mythiques de Star Wars au milieu des sables à Ong Jmel',
        'Canyons grandioses de Midès et cascades naturelles de montagne',
        'Le panorama le plus complet sur la variété des paysages tunisiens',
      ],
      pl: [
        'Moc wrażeń podczas jazdy 4x4 po grzbietach wydm i skalistych kanionach',
        'Kultowe plany filmowe Gwiezdnych Wojen w Ong Jmal pośród piasków',
        'Widokowy kanion Mides oraz naturalne wodospady w Tamerzy',
        'Najpełniejszy program ukazujący całe bogactwo krajobrazowe Tunezji',
      ],
    },
  },
];

export const destinationsData: Destination[] = [
  {
    id: 'sousse',
    name: 'Sousse',
    region: {
      en: 'Central Sahel Coast',
      fr: 'Côte centrale du Sahel',
      pl: 'Środkowe Wybrzeże Sahelu',
    },
    tagline: {
      en: 'The Pearl of the Sahel, historic fortress & vibrant souks',
      fr: 'La Perle du Sahel, forteresse historique & souks animés',
      pl: 'Perła Sahelu, historyczna twierdza i barwne suki',
    },
    description: {
      en: 'Founded over 2,800 years ago by the Phoenicians, Sousse combines a magnificent UNESCO-listed medieval Medina, a fortified Ribat, sandy Mediterranean beaches, and the luxurious marina of Port El Kantaoui.',
      fr: 'Fondée il y a plus de 2 800 ans par les Phéniciens, Sousse réunit une somptueuse Médina classée à l’UNESCO, la fière tour du Ribat, de grandes plages de sable fin et le port de plaisance de Port El Kantaoui.',
      pl: 'Założone ponad 2800 lat temu przez Fenickich żeglarzy Sousse łączy wspaniałą medynę wpisaną na listę UNESCO, potężny Ribat, piaszczyste plaże oraz elegancką marinę Port El Kantaoui.',
    },
    image: sousseMedinaImg,
    highlights: {
      en: [
        'UNESCO 9th-century Medina with walled ramparts',
        'The historic Ribat fortress & Great Mosque',
        'Port El Kantaoui garden marina with yachts & seaside cafés',
        'Prime departure base for southern and desert safaris',
      ],
      fr: [
        'Médina fortifiée du IXe siècle classée UNESCO',
        'Forteresse du Ribat et Grande Mosquée de Sousse',
        'Marina de Port El Kantaoui avec cafés en terrasse',
        'Point de départ idéal vers le Sahara et les circuits culturels',
      ],
      pl: [
        'Medyna z IX wieku otoczona monumentalnymi murami (UNESCO)',
        'Twierdza Ribat i Wielki Meczet w Sousse',
        'Marina ogrodowa Port El Kantaoui z kawiarniami nad wodą',
        'Doskonała baza wypadowa na Saharę i wycieczki objazdowe',
      ],
    },
    coordinates: {
      lat: 35.8288,
      lng: 10.6384,
      mapX: 62,
      mapY: 34,
    },
  },
  {
    id: 'tunis',
    name: 'Tunis',
    region: {
      en: 'Northern Capital Region',
      fr: 'Région de la Capitale Nord',
      pl: 'Północny Region Stolicy',
    },
    tagline: {
      en: 'Cosmopolitan capital with 700 monuments and Ottoman palaces',
      fr: 'Capitale cosmopolite aux 700 monuments et palais ottomans',
      pl: 'Kosmopolityczna stolica z 700 zabytkami i pałacami',
    },
    description: {
      en: 'Tunis represents the beating heart of Tunisian history, from its vast UNESCO Medina packed with palaces, madrasas, and Zitouna Mosque to modern tree-lined avenues and the famed Bardo Museum mosaics.',
      fr: 'Cœur battant du pays, Tunis charme par sa grandiose Médina abritant la mosquée Zitouna, ses anciens palais de beys, ses artères modernes à l’architecture art nouveau et les chefs-d’œuvre de mosaïques romaines.',
      pl: 'Tętniące życiem serce Tunezji, urzekające ogromną medyną z meczetem Zitouna, pałacami bejów, secesyjną architekturą oraz bezcennymi rzymskimi mozaikami.',
    },
    image: sidiBouSaidImg,
    highlights: {
      en: [
        'Grand UNESCO Medina with 700+ historic palaces',
        'Great Zitouna Mosque dating back to 698 AD',
        'Artisan perfumers in Souk El Attarine',
        'World-famous Roman mosaic collections',
      ],
      fr: [
        'Médina UNESCO aux plus de 700 palais historiques',
        'Grande Mosquée Zitouna fondée en 698',
        'Souk des parfumeurs et distillateurs d’essences florales',
        'Splendides collections de mosaïques antiques',
      ],
      pl: [
        'Medyna UNESCO z ponad 700 zabytkowymi pałacami',
        'Wielki Meczet Zitouna założony w 698 roku',
        'Aromatyczny suk perfumiarzy i olejków kwiatowych',
        'Największe na świecie zbiory mozaik rzymskich',
      ],
    },
    coordinates: {
      lat: 36.8065,
      lng: 10.1815,
      mapX: 52,
      mapY: 15,
    },
  },
  {
    id: 'carthage',
    name: 'Carthage',
    region: {
      en: 'Gulf of Tunis',
      fr: 'Golfe de Tunis',
      pl: 'Zatoka Tuniska',
    },
    tagline: {
      en: 'Echoes of Hannibal, ancient Rome & seaside thermal baths',
      fr: 'Sur les pas d’Hannibal, de Rome et des thermes marins',
      pl: 'Śladami Hannibala, potęgi Rzymu i morskich łaźni',
    },
    description: {
      en: 'Once the legendary Mediterranean rival to the Roman Empire, Carthage is an extraordinary open-air museum featuring the Punic Ports, Byrsa Hill, and the colossal Antonine Baths directly on the sea.',
      fr: 'Célèbre cité rivale de Rome antique, Carthage déploie ses trésors face au golfe bleu : les ports puniques circulaires, la colline de Byrsa et les immenses Thermes d’Antonin baignés par les embruns.',
      pl: 'Niegdyś potężna rywalka Rzymu, Kartagina to fascynujące muzeum na wolnym powietrzu z portami punickimi, wzgórzem Byrsa i monumentalnymi Termami Antonina nad brzegiem morza.',
    },
    image: elJemImg,
    highlights: {
      en: [
        'Baths of Antoninus, the largest Roman thermal complex in Africa',
        'Byrsa Hill & Saint Louis Cathedral panorama',
        'Ancient military & commercial Punic harbor basins',
        'Rich archaeological museum and Roman villas',
      ],
      fr: [
        'Thermes d’Antonin, plus grand ensemble thermal romain d’Afrique',
        'Colline de Byrsa et cathédrale Saint-Louis avec vue sur le golfe',
        'Bassins des ports puniques militaire et marchand',
        'Villas romaines aux pavements de mosaïques préservés',
      ],
      pl: [
        'Termy Antonina – największe łaźnie rzymskie w Afryce',
        'Wzgórze Byrsa i katedra św. Ludwika z widokiem na zatokę',
        'Starożytne doki i porty punickie Hannibala',
        'Doskonale zachowane rzymskie wille z mozaikami',
      ],
    },
    coordinates: {
      lat: 36.8529,
      lng: 10.3217,
      mapX: 55,
      mapY: 16,
    },
  },
  {
    id: 'sidi-bou-said',
    name: 'Sidi Bou Said',
    region: {
      en: 'Northern Cliffside',
      fr: 'Falaise côtière du Nord',
      pl: 'Klifowe Wybrzeże Północy',
    },
    tagline: {
      en: 'The blue-and-white jewel overlooking the Mediterranean',
      fr: 'Le joyau blanc et bleu dominant la Méditerranée',
      pl: 'Biało-niebieska perła zawieszona nad Morzem Śródziemnym',
    },
    description: {
      en: 'Perched high on a cliff above the sea, Sidi Bou Said is famous worldwide for its whitewashed houses, cobalt blue wooden lattices (moucharabiehs), bougainvillea flowers, and romantic art cafés.',
      fr: 'Perché sur une haute falaise au-dessus des flots turquoise, Sidi Bou Said est célèbre dans le monde entier pour ses façades à la chaux, ses portes cloutées et ses moucharabiehs bleu azur.',
      pl: 'Wznoszące się na klifie nad błękitnym morzem Sidi Bou Said słynie na całym świecie ze śnieżnobiałych domów, kobaltowych okiennic, kwiatów bugenwilli i artystycznych kawiarni.',
    },
    image: sidiBouSaidImg,
    highlights: {
      en: [
        'Iconic blue doors with decorative black studded nails',
        'Famous Café des Délices cliffside terrace',
        'Sweet bambalouni pastries rolled in sugar',
        'Artisan galleries, jasmine necklaces and sea views',
      ],
      fr: [
        'Portes cloutées emblématiques peintes en bleu cobalt',
        'Terrasse mythique du Café des Délices surplombant le golfe',
        'Dégustation des célèbres beignets bambalouni croustillants',
        'Galeries d’artistes peintres et colliers de jasmin odorant',
      ],
      pl: [
        'Kultowe niebieskie drzwi z ozdobnymi ćwiekami',
        'Taras słynnej kawiarni Café des Délices nad urwiskiem',
        'Gorące pączki bambalouni obsypane cukrem',
        'Galerie malarzy, zapach jaśminu i spektakularne widoki',
      ],
    },
    coordinates: {
      lat: 36.8708,
      lng: 10.3414,
      mapX: 56,
      mapY: 14,
    },
  },
  {
    id: 'hammamet',
    name: 'Hammamet',
    region: {
      en: 'Cap Bon Peninsula',
      fr: 'Péninsule du Cap Bon',
      pl: 'Półwysep Cap Bon',
    },
    tagline: {
      en: 'Sun-drenched beaches, 15th-century Kasbah & fragrant orange blossoms',
      fr: 'Plages dorées, Kasbah du XVe siècle & senteurs de fleur d’oranger',
      pl: 'Słoneczne plaże, XV-wieczna Kasba i zapach kwiatów pomarańczy',
    },
    description: {
      en: 'Beloved by artists like Paul Klee, Hammamet is a relaxed coastal sanctuary where golden beaches meet a sea-facing 15th-century Kasbah fortress, jasmine gardens, and modern seaside luxury.',
      fr: 'Chère à Paul Klee et aux écrivains voyageurs, Hammamet est une escale balnéaire de charme où de longues plages de sable doré côtoient une Kasbah médiévale, des remparts face aux vagues et des jardins d’orangers.',
      pl: 'Ukochane miasto artystów, Hammamet to uroczy kurort, gdzie złote plaże spotykają się z XV-wieczną twierdzą Kasba na brzegu morza, ogrodami jaśminu i gajami cytrusowymi.',
    },
    image: hammametImg,
    highlights: {
      en: [
        '15th-century coastal fortress with sea ramparts',
        'Intimate old medina enclosed within stone battlements',
        'Yasmine Hammamet marina and resort promenades',
        'Popular starting point for cultural tours and desert safaris',
      ],
      fr: [
        'Kasbah du XVe siècle dominant les vagues turquoise',
        'Médina intime ceinte de remparts en pierre dorée',
        'Marina de Yasmine Hammamet et promenades en front de mer',
        'Point de départ privilégié pour les excursions du pays',
      ],
      pl: [
        'XV-wieczna twierdza tuż nad falami morza',
        'Kameralna medyna otoczona murami obronnymi',
        'Nowoczesna marina Yasmine Hammamet z promenadą',
        'Wygodny punkt startowy na wycieczki i safari',
      ],
    },
    coordinates: {
      lat: 36.4000,
      lng: 10.6167,
      mapX: 60,
      mapY: 24,
    },
  },
  {
    id: 'ksar-ghilane',
    name: 'Ksar Ghilane',
    region: {
      en: 'Grand Erg Oriental Gates',
      fr: 'Portes du Grand Erg Oriental',
      pl: 'Wrota Wielkiego Ergu Wschodniego',
    },
    tagline: {
      en: 'Warm thermal oasis surrounded by the rolling red sand dunes',
      fr: 'Oasis thermale aux eaux chaudes cernée de dunes rouges',
      pl: 'Termalna oaza z ciepłą wodą otoczona czerwonymi wydmami',
    },
    description: {
      en: 'The most famous desert oasis in southern Tunisia. Located at the edge of the Grand Erg Oriental, Ksar Ghilane is famous for its natural hot spring pool (32°C), date palms, and access to red dunes and ancient Roman desert outposts.',
      fr: 'L’oasis saharienne la plus emblématique du Sud tunisien. À la lisière des immenses dunes du Grand Erg Oriental, Ksar Ghilane enchante par sa source d’eau chaude naturelle (32°C), ses palmiers et le fort romain de Tisavar.',
      pl: 'Najsłynniejsza oaza pustynna w południowej Tunezji na skraju Wielkiego Ergu Wschodniego, słynąca z naturalnego basenu z wodą termalną (32°C), palm daktylowych i rzymskiego fortu Tisavar.',
    },
    image: ksarGhilaneImg,
    highlights: {
      en: [
        'Natural warm sulfur spring pool (32°C) for relaxing swimming',
        'Direct gateway to the immense red dunes of the Grand Erg Oriental',
        'Tisavar ancient Roman outpost fort in the sands',
        'Spectacular sunset camel and quad bike expeditions',
      ],
      fr: [
        'Baignade relaxante dans la source thermale chaude (32°C)',
        'Accès direct aux dunes majestueuses du Grand Erg Oriental',
        'Fort romain antique de Tisavar enfoui dans les sables',
        'Balades à dromadaire et pistes en quad au coucher de soleil',
      ],
      pl: [
        'Relaksująca kąpiel w naturalnym źródle termalnym (32°C)',
        'Bezpośrednie wejście na czerwone wydmy Wielkiego Ergu',
        'Pozostałości rzymskiego fortu Tisavar pośród piasków',
        'Wyprawy na wielbłądach i quadach o zachodzie słońca',
      ],
    },
    coordinates: {
      lat: 32.9833,
      lng: 9.6333,
      mapX: 48,
      mapY: 76,
    },
  },
  {
    id: 'southern-tunisia',
    name: 'Southern Tunisia',
    region: {
      en: 'Dahar Mountains & Berber Ksours',
      fr: 'Monts du Dahar & Ksour Berbères',
      pl: 'Góry Dahar i Berberyjskie Ksoury',
    },
    tagline: {
      en: 'Troglodyte underground houses, fortified granaries & salt lake mirages',
      fr: 'Villages troglodytes, greniers fortifiés & mirages salés',
      pl: 'Podziemne domy troglodytów, spichlerze ksour i miraże',
    },
    description: {
      en: 'A surreal landscape sculpted by nature and Berber heritage: from the crater homes of Matmata to the multi-level vaulted granaries of Ksar Ouled Soltane and the shimmering crystal crust of Chott El Djerid.',
      fr: 'Un territoire fascinant forgé par la culture berbère : des maisons troglodytiques creusées dans la roche à Matmata aux spectaculaires ksour fortifiés de Tataouine et à l’immense mer de sel étincelante du Chott El Djerid.',
      pl: 'Kraina jak z innej planety ukształtowana przez tradycję berberyjską: podziemne domostwa Matmaty, wielopoziomowe ufortyfikowane spichlerze Ksar Ouled Soltane i lśniące solne jezioro Chott El Djerid.',
    },
    image: ksarOuledSoltaneImg,
    highlights: {
      en: [
        'Matmata subterranean troglodyte caves featured in Star Wars',
        'Ksar Ouled Soltane multi-tiered Berber granary fortress',
        'Chott El Djerid giant salt flats with pink reflections and mirages',
        'Warm encounters with local Berber families and mint tea traditions',
      ],
      fr: [
        'Maisons souterraines de Matmata immortalisées par Star Wars',
        'Ksar Ouled Soltane, forteresse grenier berbère à plusieurs étages',
        'Lac de sel du Chott El Djerid aux reflets roses et mirages optiques',
        'Accueil chaleureux des familles berbères et dégustation de galettes',
      ],
      pl: [
        'Podziemne domy w Matmacie znane z filmów Gwiezdne Wojny',
        'Ksar Ouled Soltane – niezwykły piętrowy spichlerz berberyjski',
        'Wielkie solnisko Chott El Djerid z różowymi odcieniami i mirażami',
        'Gościnność lokalnych rodzin berberyjskich i tradycyjna herbata',
      ],
    },
    coordinates: {
      lat: 33.5417,
      lng: 9.9722,
      mapX: 52,
      mapY: 68,
    },
  },
  {
    id: 'sahara-desert',
    name: 'Sahara Desert',
    region: {
      en: 'The Great Golden Dunes',
      fr: 'Les Grandes Dunes Dorées',
      pl: 'Wielkie Złote Wydmy',
    },
    tagline: {
      en: 'Infinite silence, starlit camps, rolling dunes & nomad spirit',
      fr: 'Silence infini, camps étoilés, dunes majestueuses & esprit nomade',
      pl: 'Nieskończona cisza, noce pod gwiazdami i duch nomadów',
    },
    description: {
      en: 'The world’s greatest desert unfolds in southern Tunisia with soaring orange-gold sand dunes, starlit nomad bivouacs, camel caravans, and an overwhelming sense of timeless peace.',
      fr: 'Le plus grand désert de la planète dévoile ici ses cordons de dunes ondulantes, ses ciels étoilés d’une pureté absolue, ses feux de camp traditionnels et son silence légendaire qui ressource l’âme.',
      pl: 'Największa pustynia świata roztacza w Tunezji złociste wydmy, niebo usiane tysiącami gwiazd, karawany wielbłądów i kojącą ciszę, która zapada w pamięć na zawsze.',
    },
    image: heroSaharaImg,
    highlights: {
      en: [
        'Stargazing under one of the clearest night skies on Earth',
        'Camel treks guided by local Bedouin desert masters',
        'High-adrenaline 4x4 dune cresting and sandboarding',
        'Fresh campfire-baked tabouna bread and Saharan folklore',
      ],
      fr: [
        'Observation des étoiles sous l’un des ciels les plus purs au monde',
        'Méharée guidée par des chameliers bédouins chevronnés',
        'Traversée des crêtes de sable en 4x4 et glisse en sandboard',
        'Pain traditionnel cuit sous le sable et veillées musicales au coin du feu',
      ],
      pl: [
        'Obserwacja gwiazd pod jednym z najczystszych niebios na Ziemi',
        'Karawany wielbłądów z doświadczonymi przewodnikami beduińskimi',
        'Jazda 4x4 po grzbietach wydm i zjazdy na desce (sandboarding)',
        'Chleb pieczony w piasku przy ognisku i muzyka saharyjska',
      ],
    },
    coordinates: {
      lat: 32.5000,
      lng: 8.8000,
      mapX: 38,
      mapY: 84,
    },
  },
];

export const destinationsList = destinationsData;
export const allExperiences = popularTours;

export const reviewThemesData = [
  {
    id: 'rev-1',
    author: 'Sophie Laurent',
    date: 'Octobre 2024',
    rating: 5,
    comment: {
      en: 'Unforgettable 2-day Sahara trip departing from Sousse! The sunset over the dunes at Ksar Ghilane and the night in the desert camp were pure magic.',
      fr: 'Excursion inoubliable de 2 jours au Sahara au départ de Sousse ! Le coucher de soleil sur les dunes de Ksar Ghilane et la nuit en camp étaient magiques.',
      pl: 'Niezapomniana 2-dniowa wyprawa na Saharę z Sousse! Zachód słońca na wydmach Ksar Ghilane i nocleg w obozie pustynnym były wspaniałym przeżyciem.',
    },
  },
  {
    id: 'rev-2',
    author: 'Marek Wiśniewski',
    date: 'Wrzesień 2024',
    rating: 5,
    comment: {
      en: 'Great organization with Sahel Voyage. Direct contact via WhatsApp was super fast and clear. Highly recommended!',
      fr: 'Organisation parfaite avec Sahel Voyage. Le contact direct via WhatsApp a été très rapide et professionnel. À recommander !',
      pl: 'Świetna organizacja wycieczki przez Sahel Voyage. Szybki kontakt przez WhatsApp i doskonały przewodnik. Szczerze polecam!',
    },
  },
  {
    id: 'rev-3',
    author: 'David & Emily Miller',
    date: 'November 2024',
    rating: 5,
    comment: {
      en: 'Our private tour of Tunis, Carthage, and Sidi Bou Said was the highlight of our holiday. Professional driver and wonderful local guide.',
      fr: 'Notre excursion privée à Tunis, Carthage et Sidi Bou Said a été le clou de nos vacances. Chauffeur ponctuel et guide local passionné.',
      pl: 'Nasza prywatna wycieczka do Tunisu, Kartaginy i Sidi Bou Said była punktem kulminacyjnym urlopu. Profesjonalny kierowca i wspaniały przewodnik.',
    },
  },
];
