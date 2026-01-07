import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const MerchSection: React.FC = () => {
  return (
    <section id="merch" className="relative w-full h-[120vh] md:h-screen flex flex-col md:flex-row bg-[#4f0006] text-[#f5f2eb] overflow-hidden">
      
      {/* Background Image Wrapper (Mobile: Absolute Full Screen, Desktop: Right Side 50%) */}
      <div className="absolute inset-0 z-0 md:relative md:order-2 md:w-1/2 md:h-full overflow-hidden">
         {/* Image Container */}
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://thomas-addamo.github.io/A.S.-2025-26-/Tpsit/Html/Progetto%20senza%20titolo.jpg")',
            backgroundPosition: 'center 20%'
          }}
        >
           {/* Mobile: Heavy Gradient from bottom to top for text readability */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#4f0006] via-[#4f0006]/80 to-transparent md:hidden"></div>
           
           {/* Desktop: Gradient from left to right */}
           <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#4f0006] via-transparent to-transparent"></div>
        </motion.div>
        
        {/* Placeholder Text for Image Area (Desktop Only) */}
        <div className="absolute bottom-12 right-12 z-20 text-right hidden md:block">
          <p className="font-serif text-5xl text-[#f5f2eb]/10 rotate-[-5deg]">
            New Drop
          </p>
        </div>
      </div>

      {/* Content Wrapper (Mobile: Overlay at bottom, Desktop: Left Side 50%) */}
      <div className="relative z-10 w-full h-full md:w-1/2 md:order-1 flex flex-col justify-end md:justify-center px-8 pb-12 pt-20 md:p-20 pointer-events-none md:pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="pointer-events-auto"
        >
          {/* Tagline */}
          <div className="flex items-center gap-3 mb-4 md:mb-8">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f5f2eb] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#f5f2eb]"></span>
            </span>
            <span className="font-sans font-bold tracking-[0.2em] text-xs md:text-base uppercase text-[#f5f2eb]/80 shadow-black/50 drop-shadow-md md:drop-shadow-none">
              Nuova Collezione 2025
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-serif text-5xl leading-[0.9] md:text-[7rem] md:leading-[0.85] mb-4 md:mb-10 drop-shadow-lg md:drop-shadow-none">
            IL MERCH<br />
            <span className="italic opacity-90">È QUI.</span>
          </h2>

          {/* Collaboration Note */}
          <div className="mb-8 md:mb-14">
            <p className="font-sans text-lg md:text-2xl text-[#f5f2eb]/90 md:text-[#f5f2eb]/80 leading-relaxed max-w-lg font-light drop-shadow-md md:drop-shadow-none">
              Realizzato in esclusiva collaborazione con <strong className="text-[#f5f2eb] font-bold">Unihoodies</strong>.
            </p>
          </div>

          {/* CTA Button & Logo */}
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <a 
              href="https://shop.unihoodies.it/scuola/istituto-maxwell/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-4 md:px-10 md:py-5 bg-[#f5f2eb] text-[#4f0006] hover:bg-white font-sans font-bold text-lg md:text-xl rounded-full transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 group"
            >
              <ShoppingBag size={24} className="group-hover:animate-bounce" />
              ACQUISTA ORA
              <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </a>
            
            {/* Logo Placeholder */}
             <div className="h-12 md:h-16 w-full md:w-auto flex items-center justify-center md:justify-start grayscale hover:grayscale-0 transition-all duration-300 opacity-90 hover:opacity-100">
                <img 
                  src="https://www.unihoodies.it/wp-content/uploads/2025/08/Uni-Hoodies-abbigliamento-e-merchandising-scolastico-2.png" 
                  alt="Unihoodies Logo" 
                  className="h-full object-contain brightness-0 invert md:brightness-100 md:invert-0"
                />
             </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default MerchSection;
