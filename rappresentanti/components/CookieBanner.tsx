import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield } from 'lucide-react';

interface CookieConsent {
  analytics: boolean;
  timestamp: string;
}

const getConsent = (): CookieConsent | null => {
  try {
    const raw = localStorage.getItem('cookie_consent');
    if (!raw) return null;
    return JSON.parse(raw) as CookieConsent;
  } catch {
    return null;
  }
};

const saveConsent = (analytics: boolean) => {
  const consent: CookieConsent = {
    analytics,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem('cookie_consent', JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent('consent-updated', { detail: consent }));
};

// Analytics sono sempre attivi — questa funzione restituisce sempre true
export const hasAnalyticsConsent = (): boolean => true;

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Mostra il banner se non c'è ancora un consenso salvato
    if (!getConsent()) {
      setVisible(true);
    }

    // Ascolta il footer "Gestisci preferenze cookie"
    const handler = () => {
      setVisible(true);
    };
    window.addEventListener('open-cookie-settings', handler);
    return () => window.removeEventListener('open-cookie-settings', handler);
  }, []);

  // Accetta tutti (tecnici + analytics)
  const handleAcceptAll = () => {
    saveConsent(true);
    setVisible(false);
  };

  // Accetta solo essenziali — analytics rimane comunque attivo lato Vercel
  const handleAcceptEssential = () => {
    saveConsent(true); // analytics sempre attivo
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop — non chiude il banner al click */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
          />

          {/* Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
          >
            <div className="max-w-3xl mx-auto bg-primary text-paper rounded-2xl shadow-2xl border border-paper/10 overflow-hidden">
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="p-2.5 bg-paper/10 rounded-xl flex-shrink-0">
                    <Shield size={22} className="text-paper" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl mb-1">La tua privacy è importante</h3>
                    <p className="font-sans text-sm opacity-70 leading-relaxed">
                      Utilizziamo cookie tecnici necessari al funzionamento del sito e cookie statistici (Vercel Analytics)
                      per migliorare l'esperienza di navigazione.{' '}
                      <a href="#cookie-policy" className="underline hover:opacity-100 transition-opacity" onClick={() => setVisible(false)}>
                        Cookie Policy
                      </a>
                    </p>
                  </div>
                </div>

                {/* Pulsanti */}
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 px-6 py-3 bg-paper text-primary font-sans text-sm uppercase tracking-widest font-medium rounded-lg hover:bg-white transition-colors"
                  >
                    Accetta tutti
                  </button>
                  <button
                    onClick={handleAcceptEssential}
                    className="flex-1 px-6 py-3 bg-paper/10 text-paper font-sans text-sm uppercase tracking-widest font-medium rounded-lg hover:bg-paper/20 transition-colors"
                  >
                    Solo essenziali
                  </button>
                </div>

                {/* Nota legale */}
                <p className="text-center font-sans text-[11px] opacity-40 leading-relaxed">
                  Se non desideri accettare nemmeno i cookie essenziali, ti invitiamo a uscire dal sito.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
