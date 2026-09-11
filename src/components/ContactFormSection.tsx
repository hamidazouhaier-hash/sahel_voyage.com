import React, { useState, useEffect } from 'react';
import { Language, BookingFormState } from '../types';
import { translations } from '../data/translations';
import { popularTours } from '../data/toursData';
import { getPhoneContacts, getPrimaryPhone, EMAIL_ADDRESS, getMainWhatsAppLink, getWhatsAppUrl } from '../utils/whatsapp';
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Calendar,
  Users,
  ShieldCheck,
  X,
  Compass,
  Clock,
  Sparkles,
} from 'lucide-react';

interface ContactFormSectionProps {
  currentLang: Language;
  preselectedTourTitle?: string;
  preselectedCity?: string;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  currentLang,
  preselectedTourTitle,
  preselectedCity,
}) => {
  const t = translations[currentLang];

  const [formData, setFormData] = useState<BookingFormState>({
    fullName: '',
    email: '',
    phone: '',
    numberOfTravelers: 2,
    departureLocation: (preselectedCity as 'sousse' | 'hammamet' | 'tunis') || 'sousse',
    preferredTour: preselectedTourTitle || '',
    preferredDate: '',
    tourType: 'group',
    message: '',
    honeypot: '',
  });

  useEffect(() => {
    if (preselectedTourTitle) {
      setFormData((prev) => ({ ...prev, preferredTour: preselectedTourTitle }));
    }
  }, [preselectedTourTitle]);

  useEffect(() => {
    if (preselectedCity) {
      setFormData((prev) => ({
        ...prev,
        departureLocation: preselectedCity as 'sousse' | 'hammamet' | 'tunis',
      }));
    }
  }, [preselectedCity]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormState | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      setShowSuccessModal(true);
      return;
    }

    setIsSubmitting(true);

    try {
      // Optional backend endpoint call
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch(() => {});
    } catch {
      // Graceful fallback
    } finally {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setShowSuccessModal(true);
    }
  };

  const getWhatsAppConfirmationMessage = () => {
    if (!submittedData) return '';
    const dateStr = submittedData.preferredDate || 'flexible';
    const greeting =
      currentLang === 'fr'
        ? 'Bonjour Sahel Voyage ! J’ai soumis une demande de réservation :'
        : currentLang === 'pl'
        ? 'Dzień dobry Sahel Voyage! Przesłałem/am zapytanie o rezerwację:'
        : 'Hello Sahel Voyage! I have submitted a reservation request:';

    return (
      `${greeting}\n` +
      `- Nom / Name: ${submittedData.fullName}\n` +
      `- Circuit / Tour: ${submittedData.preferredTour || 'À définir / To be defined'}\n` +
      `- Départ / Departure: ${submittedData.departureLocation.toUpperCase()}\n` +
      `- Date: ${dateStr}\n` +
      `- Voyageurs / Travelers: ${submittedData.numberOfTravelers}\n` +
      `- Formule: ${submittedData.tourType === 'private' ? 'Privé / Private' : 'Groupe / Group'}\n` +
      `Merci de confirmer la disponibilité !`
    );
  };

  return (
    <section
      id="booking"
      className="py-20 lg:py-28 bg-[#100D0B] text-white relative overflow-hidden"
      aria-label="Booking and Contact Section"
    >
      {/* Anchor for contact */}
      <div id="contact" className="absolute top-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand/15 border border-sand/30 text-sand text-xs font-semibold uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>Direct Agency Reservation</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.booking.title}
          </h2>

          <p className="text-sand-warm/80 text-base sm:text-lg leading-relaxed">
            {t.booking.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-7 bg-[#1A1614] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Anti-spam honeypot */}
              <input
                type="text"
                name="company_website_url"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-sand font-bold mb-2">
                    {t.booking.fields.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={t.booking.fields.fullNamePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-hidden focus:border-sand transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-sand font-bold mb-2">
                    {t.booking.fields.email} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.booking.fields.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-hidden focus:border-sand transition-colors"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp & Travelers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-sand font-bold mb-2">
                    {t.booking.fields.phone} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t.booking.fields.phonePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-hidden focus:border-sand transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-sand font-bold mb-2">
                    {t.booking.fields.travelers} *
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min={1}
                      max={50}
                      required
                      value={formData.numberOfTravelers}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          numberOfTravelers: Math.max(1, parseInt(e.target.value, 10) || 1),
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-hidden focus:border-sand transition-colors"
                    />
                    <Users className="w-4 h-4 text-sand absolute right-4 top-3.5 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Departure Location & Preferred Tour */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-sand font-bold mb-2">
                    {t.booking.fields.departureLocation} *
                  </label>
                  <select
                    value={formData.departureLocation}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        departureLocation: e.target.value as 'sousse' | 'hammamet' | 'tunis',
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#1C1816] border border-white/10 text-white text-sm focus:outline-hidden focus:border-sand transition-colors"
                  >
                    <option value="sousse">📍 Sousse & Sahel</option>
                    <option value="hammamet">🏖️ Hammamet & Nabeul</option>
                    <option value="tunis">🏛️ Tunis, Gammarth & La Marsa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-sand font-bold mb-2">
                    {t.booking.fields.preferredTour}
                  </label>
                  <select
                    value={formData.preferredTour}
                    onChange={(e) => setFormData({ ...formData, preferredTour: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1C1816] border border-white/10 text-white text-sm focus:outline-hidden focus:border-sand transition-colors"
                  >
                    <option value="">-- {t.booking.fields.preferredTourPlaceholder} --</option>
                    {popularTours.map((tour) => (
                      <option key={tour.id} value={tour.title[currentLang]}>
                        {tour.title[currentLang]}
                      </option>
                    ))}
                    <option value="Medinat Al Zahra Cultural Spectacle">
                      Medinat Al Zahra Spectacle & Dîner
                    </option>
                    <option value="Custom Private Itinerary">
                      {currentLang === 'pl' ? 'Indywidualna trasa na życzenie' : currentLang === 'fr' ? 'Itinéraire personnalisé sur mesure' : 'Custom Tailor-Made Itinerary'}
                    </option>
                  </select>
                </div>
              </div>

              {/* Date & Private vs Small Group */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-sand font-bold mb-2">
                    {t.booking.fields.preferredDate}
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-hidden focus:border-sand transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-sand font-bold mb-2">
                    {t.booking.fields.tourType}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, tourType: 'group' })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                        formData.tourType === 'group'
                          ? 'bg-sand text-[#120F0D] border-sand font-bold'
                          : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {currentLang === 'pl' ? 'Mała Grupa' : currentLang === 'fr' ? 'Petit Groupe' : 'Small Group'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, tourType: 'private' })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                        formData.tourType === 'private'
                          ? 'bg-sand text-[#120F0D] border-sand font-bold'
                          : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {currentLang === 'pl' ? 'Prywatnie' : currentLang === 'fr' ? 'Circuit Privé' : 'Private Tour'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Message / Notes */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-sand font-bold mb-2">
                  {t.booking.fields.message}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.booking.fields.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-hidden focus:border-sand transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-linear-to-r from-sand to-[#de5d35] hover:from-[#f0b555] hover:to-[#e86b43] text-[#120F0D] font-bold text-sm uppercase tracking-wider shadow-xl shadow-sand/20 hover:shadow-sand/35 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Calendar className="w-4 h-4" />
                <span>{isSubmitting ? t.booking.submitting : t.booking.submitCta}</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-sand-warm/80 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {currentLang === 'pl'
                    ? 'Bezpieczna rezerwacja bez przedpłat online • Płatność po przyjeździe'
                    : currentLang === 'fr'
                    ? 'Réservation garantie sans paiement immédiat en ligne • Règlement sur place'
                    : 'Flexible booking with no upfront payment online • Pay on arrival'}
                </span>
              </div>
            </form>
          </div>

          {/* Right Column: Contact Details & Direct Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-[#1A1614] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand/15 text-sand text-xs font-semibold uppercase tracking-wider mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>Agency Headquarters</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-1">
                {t.contact.companyName}
              </h3>
              <p className="text-sand text-xs uppercase tracking-widest font-semibold mb-6">
                {t.contact.parentAgency}
              </p>

              <div className="space-y-4 text-sm text-white/90">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sand shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-white/50 block font-semibold">
                      Location
                    </span>
                    <span className="text-white font-medium">
                      Rue Palestine, Sousse 4000, Tunisia
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-sand shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-white/50 block font-semibold">
                      {t.contact.emailLabel}
                    </span>
                    <a
                      href={`mailto:${EMAIL_ADDRESS}`}
                      className="text-white hover:text-sand transition-colors font-medium"
                    >
                      {EMAIL_ADDRESS}
                    </a>
                  </div>
                </div>

                {/* Language-specific Phone & WhatsApp Contacts */}
                {currentLang === 'pl' ? (
                  <div className="space-y-3">
                    <div className="text-xs uppercase tracking-wider text-sand font-bold">
                      {t.contact.phoneLabel}
                    </div>
                    {getPhoneContacts('pl').map((contact) => (
                      <div
                        key={contact.phone}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-3"
                      >
                        <div className="space-y-0.5">
                          <span className="text-[11px] text-white/50 block font-medium">
                            {contact.sublabel}
                          </span>
                          <a
                            href={contact.telUrl}
                            className="font-mono font-semibold text-white hover:text-sand transition-colors text-sm flex items-center gap-1.5"
                          >
                            <Phone className="w-3.5 h-3.5 text-sand shrink-0" />
                            <span>{contact.phone}</span>
                          </a>
                        </div>
                        <a
                          href={getWhatsAppUrl(contact.cleanNumber, 'Dzień dobry Sahel Voyage! Chciał(a)bym zadać pytanie o wycieczki.')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-1 border border-emerald-500/30 transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-xs uppercase tracking-wider text-sand font-bold block">
                      {currentLang === 'fr' ? 'WhatsApp & Téléphone Direct' : 'Direct WhatsApp & Phone'}
                    </span>
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href="tel:+21698403324"
                        className="font-mono font-semibold text-white hover:text-sand transition-colors text-sm flex items-center gap-1.5"
                      >
                        <Phone className="w-4 h-4 text-sand shrink-0" />
                        <span>+216 98 403 324</span>
                      </a>
                      <a
                        href={getMainWhatsAppLink(currentLang)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 border border-emerald-500/30 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                        <span>WhatsApp Direct</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Direct Action Buttons */}
              <div className="mt-8 space-y-3 pt-6 border-t border-white/10">
                {currentLang === 'pl' ? (
                  <div className="space-y-2.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <a
                        href={getMainWhatsAppLink('pl', undefined, 0)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                      >
                        <MessageCircle className="w-4 h-4 fill-white text-white" />
                        <span>WhatsApp (+216 53 211 170)</span>
                      </a>
                      <a
                        href="tel:+21653211170"
                        className="py-3 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs flex items-center justify-center gap-2 transition-all font-mono"
                      >
                        <Phone className="w-4 h-4 text-sand" />
                        <span>Zadzwoń: +216 53 211 170</span>
                      </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <a
                        href={getMainWhatsAppLink('pl', undefined, 1)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                      >
                        <MessageCircle className="w-4 h-4 fill-white text-white" />
                        <span>WhatsApp (+216 23 108 284)</span>
                      </a>
                      <a
                        href="tel:+21623108284"
                        className="py-3 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs flex items-center justify-center gap-2 transition-all font-mono"
                      >
                        <Phone className="w-4 h-4 text-sand" />
                        <span>Zadzwoń: +216 23 108 284</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* 1. WhatsApp Button: opens WhatsApp with +216 98 403 324 */}
                    <a
                      href={getMainWhatsAppLink(currentLang)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2.5 transition-all"
                    >
                      <MessageCircle className="w-5 h-5 fill-white text-white" />
                      <span>{t.contact.whatsAppBtn} (+216 98 403 324)</span>
                    </a>

                    {/* 2. Call Us Button: calls +216 98 403 324 */}
                    <a
                      href="tel:+21698403324"
                      className="w-full py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all font-mono"
                    >
                      <Phone className="w-4 h-4 text-sand" />
                      <span>{t.contact.callBtn} (+216 98 403 324)</span>
                    </a>
                  </>
                )}

                {/* 3. Send Email Button */}
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <Mail className="w-4 h-4 text-sand" />
                  <span>{t.contact.emailBtn}</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-[#1A1614]/70 rounded-2xl p-5 border border-white/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-sand/15 border border-sand/30 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-sand" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-sand font-bold block">
                  {t.contact.hoursTitle}
                </span>
                <span className="text-xs text-white/80">
                  {t.contact.hoursText}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Confirmation Modal */}
      {showSuccessModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="bg-[#1A1614] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-sand/40 shadow-2xl text-center relative text-white">
            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-white mb-3">
              {t.booking.confirmationTitle}
            </h3>

            {/* Mandatory confirmation message as requested by user */}
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              {t.booking.confirmationMessage}
            </p>

            <div className="p-4 rounded-2xl bg-sand/10 border border-sand/30 text-left mb-6 text-xs text-sand-warm space-y-1">
              <div className="font-bold text-sand uppercase tracking-wider mb-1">
                {currentLang === 'pl' ? 'Podsumowanie Zapytania' : currentLang === 'fr' ? 'Récapitulatif de la Demande' : 'Reservation Summary'}:
              </div>
              <div><strong>Tour:</strong> {submittedData?.preferredTour || 'Tour Selection'}</div>
              <div><strong>Departure:</strong> {submittedData?.departureLocation.toUpperCase()}</div>
              <div><strong>Travelers:</strong> {submittedData?.numberOfTravelers}</div>
              {submittedData?.preferredDate && <div><strong>Date:</strong> {submittedData.preferredDate}</div>}
            </div>

            <div className="space-y-2.5">
              {currentLang === 'pl' ? (
                <div className="space-y-2">
                  <a
                    href={getWhatsAppUrl('21653211170', getWhatsAppConfirmationMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>{t.booking.whatsappDirectBtn} (+216 53 211 170)</span>
                  </a>
                  <a
                    href={getWhatsAppUrl('21623108284', getWhatsAppConfirmationMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>{t.booking.whatsappDirectBtn} (+216 23 108 284)</span>
                  </a>
                </div>
              ) : (
                <a
                  href={getWhatsAppUrl('21698403324', getWhatsAppConfirmationMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{t.booking.whatsappDirectBtn} (+216 98 403 324)</span>
                </a>
              )}

              <button
                type="button"
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold tracking-wider"
              >
                {t.booking.closeModal}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
