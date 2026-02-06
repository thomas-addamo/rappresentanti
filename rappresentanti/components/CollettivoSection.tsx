import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CollettivoSectionProps {
  onOpen: () => void;
}

const CollettivoSection: React.FC<CollettivoSectionProps> = ({ onOpen }) => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-primary text-paper">
      {/* Subtle Background elements to maintain consistency with Hero */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#f5f2eb" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-6 md:space-y-10"
        >
          <div className="inline-flex items-center justify-center px-6 py-2 border border-paper/20 rounded-full bg-paper/5 backdrop-blur-md mb-2">
            <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold opacity-80 leading-none">A.S. 2025 — 2026</span>
          </div>

          <h2 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[11rem] leading-[0.95] md:leading-[0.85] tracking-tight">
            È arrivato <br /> 
            il <span className="italic text-paper/40 italic">Collettivo.</span>
          </h2>
          
          <p className="font-sans text-lg md:text-2xl text-paper/70 max-w-2xl mx-auto leading-relaxed font-light px-4 md:px-0">
            Diamo voce e forza alla partecipazione attiva degli studenti. <br className="hidden md:block" />
            Scopri come stiamo cambiando il volto della nostra scuola.
          </p>

          <div className="pt-6 md:pt-10">
            <motion.button
              onClick={onOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-6 bg-paper text-primary px-10 py-5 md:px-12 md:py-6 rounded-full font-sans font-bold uppercase tracking-widest text-xs md:text-sm transition-all shadow-2xl hover:bg-white"
            >
              Scopri il Progetto
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-primary/20 rounded-full group-hover:bg-primary group-hover:text-paper transition-all">
                <ArrowRight size={20} />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollettivoSection;
