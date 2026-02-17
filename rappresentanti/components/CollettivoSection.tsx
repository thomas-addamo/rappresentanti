import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CollettivoSectionProps {
  onOpen: () => void;
}

const CollettivoSection: React.FC<CollettivoSectionProps> = ({ onOpen }) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-primary text-paper">
      {/* Subtle Background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#f5f2eb" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 border border-paper/20 rounded-full bg-paper/5 backdrop-blur-md mb-4">
             <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium opacity-90">Partecipazione Studentesca</span>
          </div>

          <h2 className="font-serif text-6xl sm:text-8xl md:text-9xl leading-none tracking-tight">
            Il Collettivo<br />
            <span className="italic text-paper/50">Studentesco.</span>
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-paper/70 max-w-xl mx-auto leading-relaxed font-light px-4">
            Uno spazio aperto di confronto e azione. Unisciti a noi per trasformare le idee in progetti concreti per la nostra scuola.
          </p>

          <div className="pt-8 flex justify-center">
            <motion.button
              onClick={onOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 bg-paper text-primary px-8 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-[10px] md:text-xs overflow-hidden transition-all shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                Scopri di più <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollettivoSection;
