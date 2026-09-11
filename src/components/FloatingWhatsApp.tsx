import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { MessageCircle, X, Phone } from 'lucide-react';
import { getPhoneContacts, getMainWhatsAppLink, getWhatsAppUrl } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  currentLang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contacts = getPhoneContacts(currentLang);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const titles = {
    fr: {
      btnLabel: 'WhatsApp Direct',
      chatHeader: 'Sahel Voyage • WhatsApp',
      agency: 'Sahel Voyage • Sousse',
      status: 'En ligne pour vous conseiller',
      directPrompt: 'Échangez en direct avec nos conseillers voyage pour réserver ou poser vos questions :',
      callPrompt: 'Ou appelez directement :',
    },
    en: {
      btnLabel: 'WhatsApp Direct',
      chatHeader: 'Sahel Voyage • WhatsApp',
      agency: 'Sahel Voyage • Sousse',
      status: 'Online to assist you',
      directPrompt: 'Chat directly with our tour specialists to book or ask questions:',
      callPrompt: 'Or call directly:',
    },
    pl: {
      btnLabel: 'WhatsApp Direct',
      chatHeader: 'Sahel Voyage • WhatsApp PL',
      agency: 'Sahel Voyage • Sousse',
      status: 'Dostępni na WhatsApp',
      directPrompt: 'Skontaktuj się bezpośrednio z naszym zespołem Sahel Voyage (obsługa w j. polskim):',
      callPrompt: 'Lub zadzwoń bezpośrednio:',
    },
  }[currentLang];

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end pointer-events-auto"
    >
      {/* Expanded Popup Window */}
      {isOpen && (
        <div className="mb-3 w-[300px] sm:w-[330px] rounded-3xl bg-[#1A1614] border border-emerald-500/40 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200 text-white">
          {/* Header */}
          <div className="bg-[#121B22] p-4 relative border-b border-white/10">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-md">
                <MessageCircle className="w-5 h-5 fill-white" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-white">
                  {titles.chatHeader}
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{titles.status}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-4 space-y-3">
            <p className="text-xs text-white/80 leading-relaxed">
              {titles.directPrompt}
            </p>

            {currentLang === 'pl' ? (
              <div className="space-y-2">
                <a
                  href={getMainWhatsAppLink('pl', undefined, 0)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                  <span>Napisz: +216 53 211 170</span>
                </a>
                <a
                  href={getMainWhatsAppLink('pl', undefined, 1)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                  <span>Napisz: +216 23 108 284</span>
                </a>
                <div className="pt-2 border-t border-white/10">
                  <span className="text-[11px] text-white/60 block mb-1.5 font-medium">
                    {titles.callPrompt}
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="tel:+21653211170"
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-mono flex items-center justify-center gap-1 border border-white/10"
                    >
                      <Phone className="w-3 h-3 text-sand" />
                      <span className="truncate">53 211 170</span>
                    </a>
                    <a
                      href="tel:+21623108284"
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-mono flex items-center justify-center gap-1 border border-white/10"
                    >
                      <Phone className="w-3 h-3 text-sand" />
                      <span className="truncate">23 108 284</span>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <a
                  href={getMainWhatsAppLink(currentLang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>
                    {currentLang === 'fr'
                      ? 'Ouvrir WhatsApp (+216 98 403 324)'
                      : 'Open WhatsApp (+216 98 403 324)'}
                  </span>
                </a>
                <a
                  href="tel:+21698403324"
                  className="w-full p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-mono font-medium flex items-center justify-center gap-1.5 border border-white/10"
                >
                  <Phone className="w-3.5 h-3.5 text-sand" />
                  <span>Appel / Call: +216 98 403 324</span>
                </a>
              </div>
            )}

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/50">
              <span>Sahel Voyage • Sousse</span>
              <span className="font-mono text-emerald-400">
                {currentLang === 'pl' ? '+216 53 211 170 / +216 23 108 284' : '+216 98 403 324'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Pill Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/40 hover:scale-105 active:scale-95 transition-all duration-300 border border-emerald-400/40 focus:outline-hidden cursor-pointer"
        aria-label="WhatsApp Sahel Voyage"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-white" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-300 rounded-full border-2 border-emerald-800 animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-300 rounded-full border-2 border-emerald-800" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-xs sm:text-sm font-bold tracking-wide leading-none">
            {titles.btnLabel}
          </span>
          <span className="text-[10px] font-mono text-emerald-100 font-medium">
            {currentLang === 'pl' ? '+216 53 211 170' : '+216 98 403 324'}
          </span>
        </div>
      </button>
    </div>
  );
};
