import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-paper text-primary">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 C 50 100 80 100 100 0 Z" fill="#4f0006" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 text-center px-4 flex flex-col items-center max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          className="mb-8 md:mb-12 relative"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full transform scale-150"></div>
          <img
            src="https://thomas-addamo.github.io/A.S.-2025-26-/Tpsit/Html/logo_red.svg"
            alt="Rappresentanti Logo"
            className="relative h-32 md:h-48 w-auto drop-shadow-2xl"
          />
        </motion.div>

        <div className="overflow-hidden mb-4">
          <motion.p
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-primary/60"
          >
            Rappresentanti Maxwell
          </motion.p>
        </div>

        <h1 className="font-serif text-[15vw] leading-[0.85] md:text-[11vw] text-primary flex flex-col items-center">
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            La Vostra
          </motion.span>
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="italic text-primary/90"
          >
            Voce.
          </motion.span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-4"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-primary/40">Scorri per scoprire</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;