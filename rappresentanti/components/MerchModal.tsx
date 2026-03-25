import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShoppingBag, Sparkles, X } from 'lucide-react';

const STORE_URL = 'https://store.ecosum.it/ecommerce-catalogo/iis-maxwell-to';
const DISPLAY_SECONDS = 6;

const MerchModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState(DISPLAY_SECONDS);

  useEffect(() => {
    const startedAt = Date.now();
    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, DISPLAY_SECONDS * 1000);

    const interval = window.setInterval(() => {
      const elapsed = (Date.now() - startedAt) / 1000;
      setTimeLeft(Math.max(0, DISPLAY_SECONDS - elapsed));
    }, 100);

    return () => {
      window.clearTimeout(timer);
      window.clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.35 } }}
        className="fixed inset-0 z-[110] flex items-center justify-center overflow-hidden bg-primary/65 px-4 backdrop-blur-md"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,242,235,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(245,242,235,0.12),_transparent_32%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[2rem] border border-paper/20 bg-[#4f0006] text-paper shadow-[0_30px_120px_rgba(0,0,0,0.35)]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(245,242,235,0.16),transparent_32%,transparent_65%,rgba(245,242,235,0.08))]" />

          <div className="absolute left-0 top-0 h-1.5 w-full bg-paper/10">
            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: DISPLAY_SECONDS, ease: 'linear' }}
              className="h-full bg-paper"
            />
          </div>

          <button
            onClick={() => setIsVisible(false)}
            aria-label="Chiudi annuncio merch"
            className="absolute right-4 top-4 z-20 rounded-full border border-paper/20 bg-paper/10 p-3 text-paper/80 transition hover:bg-paper/20 hover:text-paper"
          >
            <X size={20} />
          </button>

          <div className="relative z-10 grid min-h-[520px] md:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col justify-between px-6 pb-8 pt-20 md:px-10 md:pb-10 md:pt-12">
              <div>
                <div className="mb-6 flex flex-wrap items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-paper/75">
                  <span className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper/10 px-4 py-2">
                    <Sparkles size={14} />
                    Nuovo Merch
                  </span>
                  <span className="rounded-full border border-paper/15 px-4 py-2">Collezione 2026</span>
                  <span className="rounded-full border border-paper/15 px-4 py-2">Online adesso</span>
                </div>

                <h1 className="max-w-3xl font-serif text-5xl leading-[0.9] md:text-7xl">
                  NUOVO MERCH
                  <br />
                  <span className="italic text-paper/80">COLLEZIONE 2026</span>
                </h1>

                <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-paper/80 md:text-xl">
                  La nuova collezione Maxwell 2026 e&apos; arrivata: capi essenziali, identita'
                  d&apos;istituto e uno stile pensato per farsi riconoscere.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
                <a
                  href={STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-paper px-7 py-4 font-sans text-sm font-bold uppercase tracking-[0.2em] text-primary transition hover:scale-[1.02] hover:bg-white"
                >
                  <ShoppingBag size={18} />
                  Vai allo Store
                  <ArrowRight size={18} />
                </a>

                <button
                  onClick={() => setIsVisible(false)}
                  className="inline-flex items-center justify-center rounded-full border border-paper/20 px-7 py-4 font-sans text-sm font-bold uppercase tracking-[0.2em] text-paper/80 transition hover:border-paper/40 hover:text-paper"
                >
                  Continua sul sito
                </button>
              </div>
            </div>

            <div className="relative flex min-h-[280px] items-end overflow-hidden border-t border-paper/10 md:min-h-full md:border-l md:border-t-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,242,235,0.15),transparent_26%),linear-gradient(160deg,#7a0812_0%,#4f0006_55%,#250003_100%)]" />
              <motion.div
                initial={{ rotate: -10, scale: 0.92, opacity: 0 }}
                animate={{ rotate: -10, scale: 1, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.55 }}
                className="absolute left-6 top-10 rounded-[1.75rem] border border-paper/15 bg-paper/10 px-6 py-5 shadow-2xl backdrop-blur-sm"
              >
                <p className="font-sans text-[0.72rem] font-bold uppercase tracking-[0.28em] text-paper/60">
                  Collezione 2026
                </p>
                <p className="mt-2 font-serif text-3xl leading-none">MAXWELL</p>
                <p className="mt-1 font-sans text-sm text-paper/70">Stile d&apos;istituto</p>
              </motion.div>
              <motion.div
                initial={{ x: 20, y: 20, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.55 }}
                className="absolute right-5 top-24 rounded-[1.75rem] border border-paper/15 bg-black/15 px-5 py-4 backdrop-blur-sm"
              >
                <p className="font-sans text-[0.72rem] font-bold uppercase tracking-[0.28em] text-paper/60">
                  Nuovo merch
                </p>
                <p className="mt-2 max-w-[10rem] font-serif text-2xl leading-tight">
                  Scoprilo ora
                </p>
              </motion.div>

              <div className="relative z-10 w-full px-6 pb-8 md:px-8 md:pb-10">
                <div className="rounded-[2rem] border border-paper/15 bg-paper/10 p-6 backdrop-blur-md">
                  <p className="font-sans text-[0.72rem] font-bold uppercase tracking-[0.28em] text-paper/60">
                    Chiusura automatica
                  </p>
                  <div className="mt-3 flex items-end justify-between gap-4">
                    <div>
                      <p className="font-serif text-6xl leading-none">
                        {Math.ceil(timeLeft)}
                      </p>
                      <p className="mt-2 font-sans text-sm uppercase tracking-[0.22em] text-paper/65">
                        secondi ancora
                      </p>
                    </div>
                    <p className="max-w-[12rem] text-right font-sans text-sm leading-relaxed text-paper/75">
                      Entra nello store e guarda la collezione completa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MerchModal;
