import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ChevronDown, ChevronUp } from 'lucide-react';

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

export const hasAnalyticsConsent = (): boolean => {
  const consent = getConsent();
  return consent?.analytics === true;
};

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsToggle, setAnalyticsToggle] = useState(false);

  useEffect(() => {
    // Show banner if no consent saved
    if (!getConsent()) {
      setVisible(true);
    }

    // Listen for footer "Gestisci preferenze cookie" button
    const handler = () => {
      const current = getConsent();
      if (current) setAnalyticsToggle(current.analytics);
      setShowCustomize(true);
      setVisible(true);
    };
    window.addEventListener('open-cookie-settings', handler);
    return () => window.removeEventListener('open-cookie-settings', handler);
  }, []);

  const handleAcceptAll = () => {
    saveConsent(true);
    setVisible(false);
    setShowCustomize(false);
  };

  const handleReject = () => {
    saveConsent(false);
    setVisible(false);
    setShowCustomize(false);
  };

  const handleSaveCustom = () => {
    saveConsent(analyticsToggle);
    setVisible(false);
    setShowCustomize(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
            onClick={handleReject}
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
              {/* Main content */}
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-5">
                  <div className="p-2.5 bg-paper/10 rounded-xl flex-shrink-0">
                    <Shield size={22} className="text-paper" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl mb-1">La tua privacy è importante</h3>
                    <p className="font-sans text-sm opacity-70 leading-relaxed">
                      Utilizziamo cookie tecnici necessari al funzionamento del sito e, previo tuo consenso, cookie statistici (Vercel Analytics) per migliorare l'esperienza di navigazione.{' '}
                      <a href="#cookie-policy" className="underline hover:opacity-100 transition-opacity" onClick={() => setVisible(false)}>
                        Cookie Policy
                      </a>
                    </p>
                  </div>
                </div>

                {/* Customization panel */}
                <AnimatePresence>
                  {showCustomize && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-paper/10 pt-5 mb-5 space-y-4">
                        {/* Technical cookies - always on */}
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-sans text-sm font-medium">Cookie tecnici</p>
                            <p className="font-sans text-xs opacity-50">Necessari al funzionamento del sito</p>
                          </div>
                          <div className="px-3 py-1 rounded-full bg-paper/10 text-[10px] uppercase tracking-widest font-sans font-medium opacity-60">
                            Sempre attivi
                          </div>
                        </div>

                        {/* Analytics cookies - toggleable */}
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-sans text-sm font-medium">Cookie statistici</p>
                            <p className="font-sans text-xs opacity-50">Vercel Analytics — statistiche anonime</p>
                          </div>
                          <button
                            onClick={() => setAnalyticsToggle(!analyticsToggle)}
                            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                              analyticsToggle ? 'bg-green-500' : 'bg-paper/20'
                            }`}
                          >
                            <span
                              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-paper rounded-full transition-transform duration-300 ${
                                analyticsToggle ? 'translate-x-6' : 'translate-x-0'
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 px-6 py-3 bg-paper text-primary font-sans text-sm uppercase tracking-widest font-medium rounded-lg hover:bg-white transition-colors"
                  >
                    Accetta tutti
                  </button>
                  <button
                    onClick={handleReject}
                    className="flex-1 px-6 py-3 bg-paper/10 text-paper font-sans text-sm uppercase tracking-widest font-medium rounded-lg hover:bg-paper/20 transition-colors"
                  >
                    Rifiuta
                  </button>
                  {!showCustomize ? (
                    <button
                      onClick={() => setShowCustomize(true)}
                      className="flex-1 px-6 py-3 border border-paper/20 text-paper font-sans text-sm uppercase tracking-widest font-medium rounded-lg hover:bg-paper/10 transition-colors flex items-center justify-center gap-2"
                    >
                      Personalizza <ChevronDown size={14} />
                    </button>
                  ) : (
                    <button
                      onClick={handleSaveCustom}
                      className="flex-1 px-6 py-3 border border-paper/20 text-paper font-sans text-sm uppercase tracking-widest font-medium rounded-lg hover:bg-paper/10 transition-colors flex items-center justify-center gap-2"
                    >
                      Salva preferenze <ChevronUp size={14} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
