import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity } from 'framer-motion';
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

const TeamCard = ({ rep }: { rep: Representative, key?: React.Key }) => {
  return (
    <div className="relative w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[25vw] flex-shrink-0 group">
      <div className="w-full h-[60vh] md:h-[70vh] overflow-hidden rounded-xl relative shadow-2xl bg-paper/5 border border-paper/10 cursor-pointer">
        <motion.div 
            className="w-full h-full relative"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            <img
            src={rep.image}
            alt={rep.name}
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-90 transition-opacity duration-500"></div>

        <div className="absolute bottom-0 left-0 p-6 md:p-8 lg:p-10 w-full transform translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 will-change-transform z-10">
          <p className="font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-paper/70 mb-2">
            {rep.role}
          </p>
          <h3 className="font-serif text-4xl sm:text-5xl md:text-5xl lg:text-7xl text-paper mb-4 leading-tight drop-shadow-lg">
            {rep.name}
          </h3>
          
          <div className="overflow-hidden">
             <p className="font-sans text-sm md:text-base lg:text-lg text-paper/90 max-w-md leading-relaxed opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden md:block">
                {rep.description}
             </p>
          </div>
          
          <p className="font-sans text-sm sm:text-base text-paper/90 leading-relaxed md:hidden line-clamp-3 mb-3">
            {rep.description}
          </p>

          <div className="mt-4 md:mt-6 flex items-center gap-3 opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 delay-200">
            <span className="w-8 md:w-12 h-[1px] bg-paper/50"></span>
            <span className="font-sans text-xs md:text-sm text-paper tracking-wider hover:underline underline-offset-4">{rep.instaHandle}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      
      if (scrollContainerRef.current) {
        const totalWidth = scrollContainerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const range = totalWidth - viewportWidth;
        setScrollRange(range > 0 ? range + 100 : 0);
      }
    };

    handleResize();
    const timeoutId = setTimeout(handleResize, 100);

    const resizeObserver = new ResizeObserver(handleResize);
    if (scrollContainerRef.current) resizeObserver.observe(scrollContainerRef.current);
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1, stiffness: 100, damping: 20 });
  const x = useTransform(smoothProgress, [0, 1], [0, -scrollRange]);
  const xVelocity = useVelocity(x);
  const skewX = useTransform(xVelocity, [-1000, 1000], [2, -2]); 
  const smoothSkew = useSpring(skewX, { stiffness: 400, damping: 30 });

  if (isMobile) {
    return (
      <section id="chi-siamo" className="relative py-20 bg-primary text-paper px-6 overflow-hidden">
        {/* Mobile Background Title removed as requested - showing only on desktop in that view if needed, but here we hide it for mobile explicitly */}
        <div className="absolute top-10 left-4 z-0 pointer-events-none opacity-10 hidden md:block">
          <h2 className="font-serif text-[25vw] leading-none text-paper uppercase tracking-tighter">
            Team
          </h2>
        </div>

        <div className="relative z-10 space-y-12">
          <div className="space-y-4">
            <h3 className="font-serif text-5xl sm:text-6xl leading-none text-paper">
              Chi <span className="text-paper/50 italic">Siamo</span>
            </h3>
            <p className="font-sans text-xl text-paper/80 leading-relaxed font-light">
              Studenti per gli studenti. 
              <br/>
              Costruiamo insieme il futuro della nostra scuola.
            </p>
            <div className="w-16 h-1 bg-paper/30 rounded-full"></div>
          </div>

          <div className="flex flex-col gap-10">
            {reps.map((rep) => (
              <div key={rep.id} className="relative w-full overflow-hidden rounded-2xl shadow-xl bg-paper/5 border border-paper/10">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={rep.image} alt={rep.name} className="w-full h-full object-cover grayscale" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-95 p-6 flex flex-col justify-end">
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-paper/70 mb-1">{rep.role}</p>
                  <h3 className="font-serif text-4xl text-paper mb-2">{rep.name}</h3>
                  <p className="font-sans text-sm text-paper/90 leading-relaxed mb-4">{rep.description}</p>
                  <div className="flex items-center gap-3 opacity-60">
                    <span className="w-8 h-[1px] bg-paper/50"></span>
                    <span className="font-sans text-xs text-paper tracking-wider">{rep.instaHandle}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="chi-siamo" ref={targetRef} className="relative h-[350vh] bg-primary text-paper">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute top-4 left-4 md:top-10 md:left-10 z-0 pointer-events-none mix-blend-overlay opacity-10">
          <h2 className="font-serif text-[18vw] leading-none text-paper uppercase tracking-tighter">
            Team
          </h2>
        </div>

        <motion.div
          ref={scrollContainerRef}
          style={{ x, skewX: smoothSkew }}
          className="flex gap-6 sm:gap-8 md:gap-12 lg:gap-16 pl-[10vw] md:pl-[10vw] pr-[10vw] md:pr-[20vw] items-center h-full relative z-10"
        >
            <div className="hidden md:flex w-[35vw] lg:w-[30vw] xl:w-[25vw] flex-shrink-0 flex-col justify-center pr-10">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="font-serif text-6xl md:text-7xl lg:text-8xl mb-6 leading-none text-paper">
                        Chi <br/><span className="text-paper/50 italic">Siamo</span>
                    </h3>
                    <p className="font-sans text-xl lg:text-2xl text-paper/80 leading-relaxed font-light">
                        Studenti per gli studenti. 
                        <br/>
                        Costruiamo insieme il futuro della nostra scuola.
                    </p>
                    <div className="mt-10 w-24 h-1 bg-paper/30 rounded-full"></div>
                </motion.div>
            </div>

            {reps.map((rep) => (
                <TeamCard key={rep.id} rep={rep} />
            ))}
            
            <div className="w-[5vw] flex-shrink-0"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;