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

          <div className="pt-8 md:pt-12 flex justify-center">
            <motion.button
              onClick={onOpen}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 font-sans uppercase tracking-widest text-[10px] md:text-xs border border-paper/40 px-8 py-4 rounded-full hover:bg-paper hover:text-primary transition-all duration-300"
            >
              Scopri il Progetto
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollettivoSection;
