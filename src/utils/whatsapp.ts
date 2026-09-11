import { Language } from '../types';

export interface PhoneContact {
  phone: string;
  cleanNumber: string;
  telUrl: string;
  label: string;
  sublabel?: string;
}

export const PHONE_CONFIG: Record<Language, PhoneContact[]> = {
  fr: [
    {
      phone: '+216 98 403 324',
      cleanNumber: '21698403324',
      telUrl: 'tel:+21698403324',
      label: '+216 98 403 324',
      sublabel: 'WhatsApp & Tél',
    },
  ],
  en: [
    {
      phone: '+216 98 403 324',
      cleanNumber: '21698403324',
      telUrl: 'tel:+21698403324',
      label: '+216 98 403 324',
      sublabel: 'WhatsApp & Call',
    },
  ],
  pl: [
    {
      phone: '+216 53 211 170',
      cleanNumber: '21653211170',
      telUrl: 'tel:+21653211170',
      label: '+216 53 211 170',
      sublabel: 'WhatsApp & Telefon (Nr 1)',
    },
    {
      phone: '+216 23 108 284',
      cleanNumber: '21623108284',
      telUrl: 'tel:+21623108284',
      label: '+216 23 108 284',
      sublabel: 'WhatsApp & Telefon (Nr 2)',
    },
  ],
};

export function getPhoneContacts(lang: Language): PhoneContact[] {
  return PHONE_CONFIG[lang] || PHONE_CONFIG.en;
}

export function getPrimaryPhone(lang: Language): PhoneContact {
  const contacts = getPhoneContacts(lang);
  return contacts[0];
}

export function getPhoneDisplayText(lang: Language): string {
  const contacts = getPhoneContacts(lang);
  if (contacts.length === 1) {
    return contacts[0].phone;
  }
  return contacts.map((c) => c.phone).join(' • ');
}

// Default export fallback for backward compatibility
export const MAIN_WHATSAPP = {
  phone: '+216 98 403 324',
  cleanNumber: '21698403324',
  label: '+216 98 403 324',
  sublabel: 'WhatsApp Direct',
};

export const PHONE_NUMBER = '+216 98 403 324';
export const MOBILE_NUMBER = '+216 98 403 324';
export const EMAIL_ADDRESS = 'contact@sahelvoyage.com';
export const WEBSITE_URL = 'https://sahelvoyage.com/';

export function getWhatsAppUrl(cleanNumber: string, customMessage?: string): string {
  const base = `https://wa.me/${cleanNumber}`;
  if (!customMessage) return base;
  return `${base}?text=${encodeURIComponent(customMessage)}`;
}

export function getMainWhatsAppLink(lang: Language, tourTitle?: string, phoneIndex: number = 0): string {
  const contacts = getPhoneContacts(lang);
  const contact = contacts[phoneIndex] || contacts[0];
  let message = '';
  if (lang === 'en') {
    message = tourTitle
      ? `Hello Sahel Voyage! I would like to inquire about the tour "${tourTitle}".`
      : `Hello Sahel Voyage! I would like to inquire about your tours and excursions in Tunisia.`;
  } else if (lang === 'pl') {
    message = tourTitle
      ? `Dzień dobry! Piszę z zapytaniem o wycieczkę "${tourTitle}" w Sahel Voyage.`
      : `Dzień dobry! Chciał(a)bym zapytać o ofertę wycieczek i wypraw w Sahel Voyage.`;
  } else {
    message = tourTitle
      ? `Bonjour Sahel Voyage ! Je souhaite me renseigner sur le circuit "${tourTitle}".`
      : `Bonjour Sahel Voyage ! Je souhaite obtenir des informations sur vos excursions et safaris en Tunisie.`;
  }
  return getWhatsAppUrl(contact.cleanNumber, message);
}
