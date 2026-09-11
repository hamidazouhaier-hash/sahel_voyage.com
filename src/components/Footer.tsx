import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Compass, Phone, MapPin, Mail, MessageCircle, ArrowUp } from 'lucide-react';
import { getPhoneContacts, EMAIL_ADDRESS, WEBSITE_URL, getMainWhatsAppLink, getWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
  onSelectCategory?: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onLanguageChange,
  onOpenBooking,
  onSelectCategory,
}) => {
  const t = translations[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (href: string, category?: string) => {
    if (category && onSelectCategory) {
      onSelectCategory(category);
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A0807] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-sand to-[#de5d35] p-0.5 flex items-center justify-center shadow-md">
                <div className="w-full h-full rounded-[10px] bg-[#0A0807] flex items-center justify-center">
                  <Compass className="w-5 h-5 text-sand" />
                </div>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  SAHEL VOYAGE
                </span>
                <span className="text-[10px] tracking-widest uppercase text-sand block font-semibold">
                  {currentLang === 'fr'
                    ? 'Agence de Voyages Agréée • Sousse'
                    : currentLang === 'pl'
                    ? 'Licencjonowane Biuro Podróży • Sousse'
                    : 'Licensed Travel Agency • Sousse'}
                </span>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              {t.footer.aboutBrand}
            </p>

            <div className="text-xs text-white/60 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sand" />
                <span>Rue Palestine, Sousse 4000, Tunisia</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-sand" />
                <span>
                  {currentLang === 'fr'
                    ? 'Agence de Voyages Agréée • Sahel Voyage'
                    : currentLang === 'pl'
                    ? 'Licencjonowane Biuro Podróży • Sahel Voyage'
                    : 'Licensed Travel Agency • Sahel Voyage'}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links: Tours, Safari Tours, Private Tours, Reservations, Contact */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-sand uppercase tracking-wider">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <a
                  href="#tours"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#tours', 'all');
                  }}
                  className="hover:text-sand transition-colors"
                >
                  {t.nav.tours}
                </a>
              </li>
              <li>
                <a
                  href="#safari-tours"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#safari-tours', 'safari');
                  }}
                  className="hover:text-sand transition-colors"
                >
                  {t.nav.safariTours}
                </a>
              </li>
              <li>
                <a
                  href="#private-tours"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#private-tours', 'private');
                  }}
                  className="hover:text-sand transition-colors"
                >
                  {t.nav.privateTours}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="hover:text-sand transition-colors text-left"
                >
                  {currentLang === 'pl' ? 'Rezerwacje' : currentLang === 'fr' ? 'Réservations' : 'Reservations'}
                </button>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#contact');
                  }}
                  className="hover:text-sand transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Destinations: Sousse, Hammamet, Tunis, Sahara */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-sand uppercase tracking-wider">
              {t.footer.destinationsTitle}
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <a
                  href="#sousse-tours"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#sousse-tours', 'sousse');
                  }}
                  className="hover:text-sand transition-colors flex items-center gap-1.5"
                >
                  <span>📍 Sousse & Sahel Coast</span>
                </a>
              </li>
              <li>
                <a
                  href="#hammamet-tours"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#hammamet-tours', 'hammamet');
                  }}
                  className="hover:text-sand transition-colors flex items-center gap-1.5"
                >
                  <span>🏖️ Hammamet & Cap Bon</span>
                </a>
              </li>
              <li>
                <a
                  href="#tunis-tours"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#tunis-tours', 'tunis');
                  }}
                  className="hover:text-sand transition-colors flex items-center gap-1.5"
                >
                  <span>🏛️ Tunis, Carthage & Sidi Bou Said</span>
                </a>
              </li>
              <li>
                <a
                  href="#safari-tours"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#safari-tours', 'safari');
                  }}
                  className="hover:text-sand transition-colors flex items-center gap-1.5"
                >
                  <span>🏜️ Sahara & Grand Erg Oriental</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Language Switcher */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-sand uppercase tracking-wider">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-2.5 text-xs text-white/80">
              {getPhoneContacts(currentLang).map((contact) => (
                <div key={contact.phone} className="space-y-1">
                  {currentLang === 'pl' && contact.sublabel && (
                    <span className="text-[10px] text-sand uppercase tracking-wider font-semibold block">
                      {contact.sublabel}
                    </span>
                  )}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href={contact.telUrl}
                      className="flex items-center gap-1.5 hover:text-sand transition-colors font-mono font-medium text-white/90"
                      title={`Call ${contact.phone}`}
                    >
                      <Phone className="w-3.5 h-3.5 text-sand shrink-0" />
                      <span>{contact.phone}</span>
                    </a>
                    <a
                      href={getWhatsAppUrl(contact.cleanNumber)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-mono font-semibold"
                      title={`WhatsApp ${contact.phone}`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400 shrink-0" />
                      <span className="text-[11px]">WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}

              <div className="pt-1">
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex items-center gap-2 hover:text-sand transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-sand shrink-0" />
                  <span>{EMAIL_ADDRESS}</span>
                </a>
              </div>
            </div>

            {/* Languages Switcher: English | Français | Polski */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-white/50 block font-semibold mb-2">
                {t.footer.languagesTitle}
              </span>
              <div className="flex items-center gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    currentLang === 'en'
                      ? 'bg-sand text-[#120F0D] font-bold'
                      : 'bg-white/10 hover:bg-white/20 text-white/80'
                  }`}
                >
                  🇬🇧 English
                </button>
                <button
                  type="button"
                  onClick={() => onLanguageChange('fr')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    currentLang === 'fr'
                      ? 'bg-sand text-[#120F0D] font-bold'
                      : 'bg-white/10 hover:bg-white/20 text-white/80'
                  }`}
                >
                  🇫🇷 Français
                </button>
                <button
                  type="button"
                  onClick={() => onLanguageChange('pl')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    currentLang === 'pl'
                      ? 'bg-sand text-[#120F0D] font-bold'
                      : 'bg-white/10 hover:bg-white/20 text-white/80'
                  }`}
                >
                  🇵🇱 Polski
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            <p>{t.footer.copyright}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={WEBSITE_URL}
              className="hover:text-sand transition-colors"
            >
              {WEBSITE_URL}
            </a>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-sand transition-colors cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
