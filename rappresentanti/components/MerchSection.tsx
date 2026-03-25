import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';

const STORE_URL = 'https://store.ecosum.it/ecommerce-catalogo/iis-maxwell-to';

const MerchSection: React.FC = () => {
  return (
    <section
      id="merch"
      className="relative overflow-hidden bg-paper px-6 py-16 text-primary md:px-12 md:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,0,6,0.05),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(79,0,6,0.04),_transparent_22%)]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-white/70 px-6 py-10 shadow-[0_14px_40px_rgba(79,0,6,0.06)] md:px-10 md:py-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(79,0,6,0.04),_transparent_24%)]" />

          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/10 bg-primary/5 px-5 py-3 font-sans text-xs font-bold uppercase tracking-[0.28em] text-primary/80">
              <Sparkles size={16} />
              Merch ufficiale Maxwell
            </div>

            <h2 className="font-serif text-5xl leading-[0.9] md:text-7xl xl:text-[5.2rem]">
              NUOVO MERCH
              <br />
              <span className="italic text-primary/75">COLLEZIONE 2026</span>
            </h2>

            <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-primary/70 md:text-[1.1rem]">
              Una collezione pensata per portare il Maxwell fuori dall&apos;aula: linee pulite,
              carattere deciso e tutto il peso dell&apos;identita' d&apos;istituto.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-paper px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.2em] text-primary transition hover:scale-[1.02] hover:bg-white"
              >
                <ShoppingBag size={18} />
                Accedi allo store
                <ArrowRight size={18} />
              </a>
              <a
                href="#news"
                className="inline-flex items-center justify-center rounded-full border border-primary/15 px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.2em] text-primary/75 transition hover:border-primary/30 hover:text-primary"
              >
                Leggi la news
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MerchSection;
