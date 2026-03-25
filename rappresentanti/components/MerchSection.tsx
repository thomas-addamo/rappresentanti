import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';

const STORE_URL = 'https://store.ecosum.it/ecommerce-catalogo/iis-maxwell-to';

const MerchSection: React.FC = () => {
  return (
    <section
      id="merch"
      className="relative overflow-hidden bg-[#4f0006] px-6 py-20 text-[#f5f2eb] md:px-12 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,242,235,0.14),_transparent_30%),radial-gradient(circle_at_80%_25%,_rgba(245,242,235,0.1),_transparent_24%),linear-gradient(180deg,#5e050d_0%,#420005_52%,#2c0004_100%)]" />
      <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-paper/10 blur-[140px]" />
      <div className="absolute bottom-16 right-[-4rem] h-64 w-64 rounded-full bg-paper/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2.5rem] border border-paper/15 bg-[linear-gradient(145deg,rgba(245,242,235,0.12),rgba(245,242,235,0.04))] px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm md:px-10 md:py-14"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,242,235,0.12),_transparent_26%)]" />

          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-paper/15 bg-paper/10 px-5 py-3 font-sans text-xs font-bold uppercase tracking-[0.28em] text-paper/80">
              <Sparkles size={16} />
              Merch ufficiale Maxwell
            </div>

            <h2 className="font-serif text-5xl leading-[0.9] md:text-7xl xl:text-[5.4rem]">
              NUOVO MERCH
              <br />
              <span className="italic text-paper/75">COLLEZIONE 2026</span>
            </h2>

            <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-paper/78 md:text-[1.15rem]">
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
                className="inline-flex items-center justify-center rounded-full border border-paper/20 px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.2em] text-paper/80 transition hover:border-paper/40 hover:text-paper"
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
