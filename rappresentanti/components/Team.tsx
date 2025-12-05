import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Representative } from '../types';

const reps: Representative[] = [
  {
    id: 1,
    name: "Giulio Castellani",
    role: "4A LSA",
    description: "Si occupa della comunicazione tramite email, coordina le attività e supporta il gruppo nel mantenimento degli obiettivi.",
    image: "https://thomas-addamo.github.io/A.S.-2025-26-/Tpsit/Html/castellani.jpg",
    instaHandle: "@caaste.e"
  },
  {
    id: 2,
    name: "Emma Cirafici",
    role: "4A LES",
    description: "Gestisce collaborazioni e partnership e si occupa dell’organizzazione e del coordinamento degli eventi.",
    image: "https://thomas-addamo.github.io/A.S.-2025-26-/Tpsit/Html/emmaaa.jpg",
    instaHandle: "@ciraficiemma_"
  },
  {
    id: 3,
    name: "Eleonora Schirru",
    role: "5A INFO",
    description: "Da tre anni coordina la rappresentanza studentesca. Cura la comunicazione interna e i rapporti con il Comune di Nichelino.",
    image: "https://thomas-addamo.github.io/A.S.-2025-26-/Tpsit/Html/a29d99a2-c1ae-4337-851b-cdbe4758706c.jpg",
    instaHandle: "@schirrulele"
  },
  {
    id: 4,
    name: "Nicol Polizzi",
    role: "4B LES",
    description: "Fornisce supporto consulenziale, offre indicazioni strategiche e prende contatto con persone e realtà utili ai progetti del gruppo.",
    image: "https://thomas-addamo.github.io/A.S.-2025-26-/Tpsit/Html/nicol.jpg",
    instaHandle: "@_nicolpolizzi_"
  }
];

const Team: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  // Dynamically calculate the total scrollable width relative to the viewport
  // This ensures the last card is always fully visible regardless of screen size
  useEffect(() => {
    const updateWidth = () => {
      if (scrollContainerRef.current) {
        // Calculate total width of the container minus the viewport width
        // We add a small buffer (e.g., 50px) to ensure the last item has some breathing room
        const totalWidth = scrollContainerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setScrollRange(totalWidth - viewportWidth); // Exact scroll to end
      }
    };

    // Initial calculation
    updateWidth();

    // Recalculate on resize
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform scroll Y (0 to 1) to horizontal X translation (0 to -scrollRange)
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section id="chi-siamo" ref={targetRef} className="relative h-[300vh] bg-primary text-paper">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">

        {/* Title positioned absolutely */}
        <div className="absolute top-8 left-6 md:top-12 md:left-12 z-10 mix-blend-overlay pointer-events-none">
          <h2 className="font-serif text-5xl md:text-8xl opacity-30">I Rappresentanti</h2>
        </div>

        <motion.div
          ref={scrollContainerRef}
          style={{ x }}
          className="flex gap-8 md:gap-12 pl-[10vw] pr-[10vw]"
        >
          {reps.map((rep) => (
            <div key={rep.id} className="relative w-[85vw] md:w-[30vw] flex-shrink-0 group">
              <div className="w-full h-[55vh] md:h-[60vh] overflow-hidden rounded-sm relative">
                <img
                  src={rep.image}
                  alt={rep.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 md:opacity-60"></div>

                {/* Mobile Title Overlay (easier to read) */}
                <div className="absolute bottom-4 left-4 md:hidden">
                  <h3 className="font-serif text-4xl text-paper">{rep.name}</h3>
                  <p className="font-sans text-xs uppercase tracking-widest text-paper/80">{rep.role}</p>
                </div>
              </div>

              <div className="mt-6 border-l border-paper/30 pl-4 md:block hidden">
                <h3 className="font-serif text-4xl md:text-5xl mb-2">{rep.name}</h3>
                <p className="font-sans text-xs uppercase tracking-widest text-paper/60 mb-4">{rep.role}</p>
                <p className="font-sans text-lg opacity-80 max-w-sm leading-relaxed">
                  {rep.description}
                </p>
                <div className="mt-4 inline-block border border-paper/20 rounded-full px-4 py-1 text-sm font-sans hover:bg-paper hover:text-primary transition-colors cursor-pointer">
                  {rep.instaHandle}
                </div>
              </div>

              {/* Mobile Description (visible below image) */}
              <div className="mt-4 md:hidden pl-2">
                <p className="font-sans text-base opacity-90 leading-relaxed mb-3">
                  {rep.description}
                </p>
                <span className="text-sm font-sans opacity-60 border-b border-paper/30 pb-0.5">{rep.instaHandle}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;