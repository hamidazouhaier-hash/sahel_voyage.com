import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Phone, Globe, Menu, X, ChevronDown, Compass, MessageCircle, MapPin, Mail, Calendar } from 'lucide-react';
import { getPhoneContacts, EMAIL_ADDRESS, getMainWhatsAppLink, getWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
  onNavigateToCategory?: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenBooking,
  onNavigateToCategory,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toursDropdownOpen, setToursDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const languages: Array<{ code: Language; label: string; flag: string }> = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  ];

  const activeLangObj = languages.find((l) => l.code === currentLang) || languages[0];

  const tourSublinks = [
    { label: t.nav.safariTours, href: '#safari-tours', category: 'safari' },
    { label: t.nav.toursFromSousse, href: '#sousse-tours', category: 'sousse' },
    { label: t.nav.toursFromHammamet, href: '#hammamet-tours', category: 'hammamet' },
    { label: t.nav.toursFromTunis, href: '#tunis-tours', category: 'tunis' },
    { label: t.nav.privateTours, href: '#private-tours', category: 'private' },
  ];

  const handleLinkClick = (href: string, category?: string) => {
    setMobileMenuOpen(false);
    setToursDropdownOpen(false);

    if (category && onNavigateToCategory) {
      onNavigateToCategory(category);
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#120F0D]/95 backdrop-blur-md shadow-2xl border-b border-[#e2a048]/20'
          : 'bg-[#120F0D]/90 backdrop-blur-xs border-b border-white/10'
      }`}
    >
      {/* Top Utility Bar */}
      <div className="bg-[#0C0A09] border-b border-white/10 py-1.5 px-4 sm:px-6 lg:px-8 text-white/90 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-sand">
              <MapPin className="w-3.5 h-3.5 shrink-0 text-sand" />
              <span className="text-white/90">Sousse, Tunisia</span>
            </span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-white/80">
              <span className="font-semibold text-sand">Sahel Voyage</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 text-[11px] sm:text-xs ml-auto">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="hidden sm:flex items-center gap-1.5 text-white/80 hover:text-sand transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sand" />
              <span>{EMAIL_ADDRESS}</span>
            </a>

            {getPhoneContacts(currentLang).map((contact) => (
              <a
                key={contact.phone}
                href={getWhatsAppUrl(contact.cleanNumber)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-400 font-medium transition-colors"
                title={`WhatsApp: ${contact.phone}`}
              >
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400 shrink-0" />
                <span className="font-mono font-semibold text-emerald-400">
                  {contact.phone}
                </span>
              </a>
            ))}

            {/* Compact Language Selector in Top Bar */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/15 text-white transition-colors border border-white/10 text-xs"
                aria-expanded={langDropdownOpen}
                aria-label="Select Language"
              >
                <span className="text-sm leading-none">{activeLangObj.flag}</span>
                <span className="font-semibold text-[11px] uppercase tracking-wider">{activeLangObj.code}</span>
                <ChevronDown className="w-3 h-3 text-sand" />
              </button>

              {langDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-1.5 w-36 rounded-xl bg-[#1C1917] border border-sand/30 shadow-2xl py-1 z-50 overflow-hidden">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => {
                          onLanguageChange(lang.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors ${
                          currentLang === lang.code
                            ? 'bg-sand/20 text-sand font-bold'
                            : 'text-white/90 hover:bg-white/10'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-sm">{lang.flag}</span>
                          <span>{lang.label}</span>
                        </span>
                        {currentLang === lang.code && (
                          <span className="w-1.5 h-1.5 rounded-full bg-sand" />
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo & Brand Name */}
          <a
            href="#hero"
            className="group flex items-center gap-3 shrink-0 focus:outline-hidden"
            aria-label="Sahel Voyage Home"
          >
            <div className="w-11 h-11 rounded-2xl bg-linear-to-br from-sand to-[#de5d35] p-0.5 shadow-lg shadow-sand/20 flex items-center justify-center group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-[14px] bg-[#120F0D] flex items-center justify-center">
                <Compass className="w-6 h-6 text-sand group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-sand transition-colors">
                SAHEL VOYAGE
              </span>
              <span className="text-[10px] uppercase tracking-widest text-sand-warm/70 font-medium">
                {currentLang === 'fr'
                  ? 'Agence de Voyages • Sousse'
                  : currentLang === 'pl'
                  ? 'Biuro Podróży • Sousse'
                  : 'Travel Agency • Sousse'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-2" aria-label="Main Navigation">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#hero');
              }}
              className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-sand hover:bg-white/5 transition-colors"
            >
              {t.nav.home}
            </a>

            {/* Tours with Dropdown containing all tour categories */}
            <div
              className="relative group"
              onMouseEnter={() => setToursDropdownOpen(true)}
              onMouseLeave={() => setToursDropdownOpen(false)}
            >
              <a
                href="#tours"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#tours');
                }}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-white/90 group-hover:text-sand group-hover:bg-white/5 transition-colors"
              >
                <span>{t.nav.tours}</span>
                <ChevronDown className="w-3.5 h-3.5 text-sand group-hover:rotate-180 transition-transform" />
              </a>

              {toursDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 rounded-2xl bg-[#1A1614] border border-sand/30 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <a
                    href="#safari-tours"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('#safari-tours', 'safari');
                    }}
                    className="block px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white hover:bg-sand/20 hover:text-sand transition-colors"
                  >
                    🏜️ {t.nav.safariTours}
                  </a>
                  <a
                    href="#sousse-tours"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('#sousse-tours', 'sousse');
                    }}
                    className="block px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white hover:bg-sand/20 hover:text-sand transition-colors"
                  >
                    📍 {t.nav.toursFromSousse}
                  </a>
                  <a
                    href="#hammamet-tours"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('#hammamet-tours', 'hammamet');
                    }}
                    className="block px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white hover:bg-sand/20 hover:text-sand transition-colors"
                  >
                    🏖️ {t.nav.toursFromHammamet}
                  </a>
                  <a
                    href="#tunis-tours"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('#tunis-tours', 'tunis');
                    }}
                    className="block px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white hover:bg-sand/20 hover:text-sand transition-colors"
                  >
                    🏛️ {t.nav.toursFromTunis}
                  </a>
                  <a
                    href="#private-tours"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('#private-tours', 'private');
                    }}
                    className="block px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white hover:bg-sand/20 hover:text-sand transition-colors border-t border-white/10 mt-1 pt-2"
                  >
                    🚙 {t.nav.privateTours}
                  </a>
                </div>
              )}
            </div>

            <a
              href="#safari-tours"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#safari-tours', 'safari');
              }}
              className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-sand hover:bg-white/5 transition-colors"
            >
              {t.nav.safariTours}
            </a>

            <a
              href="#sousse-tours"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#sousse-tours', 'sousse');
              }}
              className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-sand hover:bg-white/5 transition-colors"
            >
              {t.nav.toursFromSousse}
            </a>

            <a
              href="#hammamet-tours"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#hammamet-tours', 'hammamet');
              }}
              className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-sand hover:bg-white/5 transition-colors"
            >
              {t.nav.toursFromHammamet}
            </a>

            <a
              href="#tunis-tours"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#tunis-tours', 'tunis');
              }}
              className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-sand hover:bg-white/5 transition-colors"
            >
              {t.nav.toursFromTunis}
            </a>

            <a
              href="#private-tours"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#private-tours', 'private');
              }}
              className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-sand hover:bg-white/5 transition-colors"
            >
              {t.nav.privateTours}
            </a>

            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#about');
              }}
              className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-sand hover:bg-white/5 transition-colors"
            >
              {t.nav.aboutUs}
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-sand hover:bg-white/5 transition-colors"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Right Action: Book Now Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenBooking}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-linear-to-r from-sand to-[#de5d35] text-[#120F0D] font-bold text-sm uppercase tracking-wider shadow-lg shadow-sand/25 hover:shadow-sand/40 active:scale-95 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#120F0D]" />
              <span>{t.nav.bookNow}</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-sand text-[#120F0D] font-bold text-xs uppercase tracking-wider shadow-xs"
            >
              {t.nav.bookNow}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-hidden"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-sand" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#120F0D]/98 border-b border-sand/30 px-5 py-6 max-h-[calc(100vh-5rem)] overflow-y-auto shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {/* Language Switcher in Mobile Drawer */}
            <div className="pb-3 mb-2 border-b border-white/10 flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-white/50 font-semibold">Language / Langue</span>
              <div className="flex items-center gap-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => {
                      onLanguageChange(l.code);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                      currentLang === l.code
                        ? 'bg-sand text-[#120F0D]'
                        : 'bg-white/10 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#hero');
              }}
              className="px-3 py-2.5 rounded-xl text-base font-medium text-white hover:bg-sand/15 hover:text-sand"
            >
              {t.nav.home}
            </a>

            <div className="py-1 px-3 text-xs uppercase tracking-widest text-sand font-bold">
              {t.nav.tours}
            </div>

            {tourSublinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href, link.category);
                }}
                className="pl-6 pr-3 py-2 rounded-xl text-sm font-medium text-white/80 hover:bg-sand/15 hover:text-sand"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 border-t border-white/10" />

            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#about');
              }}
              className="px-3 py-2.5 rounded-xl text-base font-medium text-white hover:bg-sand/15 hover:text-sand"
            >
              {t.nav.aboutUs}
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="px-3 py-2.5 rounded-xl text-base font-medium text-white hover:bg-sand/15 hover:text-sand"
            >
              {t.nav.contact}
            </a>

            <div className="pt-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-xl bg-linear-to-r from-sand to-[#de5d35] text-[#120F0D] font-bold text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.nav.bookNow}</span>
              </button>

              {currentLang === 'pl' ? (
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={getMainWhatsAppLink('pl', undefined, 0)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>WhatsApp (Nr 1)</span>
                    </a>
                    <a
                      href="tel:+21653211170"
                      className="py-3 px-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-white/15 font-mono"
                    >
                      <Phone className="w-4 h-4 text-sand shrink-0" />
                      <span className="truncate">+216 53 211 170</span>
                    </a>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={getMainWhatsAppLink('pl', undefined, 1)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>WhatsApp (Nr 2)</span>
                    </a>
                    <a
                      href="tel:+21623108284"
                      className="py-3 px-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-white/15 font-mono"
                    >
                      <Phone className="w-4 h-4 text-sand shrink-0" />
                      <span className="truncate">+216 23 108 284</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={getMainWhatsAppLink(currentLang)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="tel:+21698403324"
                    className="py-3 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-white/15"
                  >
                    <Phone className="w-4 h-4 text-sand" />
                    <span>{currentLang === 'fr' ? 'Appeler' : 'Call'}</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
