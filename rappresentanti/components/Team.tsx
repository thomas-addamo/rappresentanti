import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity, AnimatePresence } from 'framer-motion';
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
    description: "Gestisce collaborazioni e partnership e si occupa dell'organizzazione e del coordinamento degli eventi.",
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

type ScrollMode = 'horizontal' | 'vertical';

const STORAGE_KEY = 'team-scroll-mode';

// ─── DETAIL MODAL ───
const RepDetailModal = ({ rep, onClose }: { rep: Representative; onClose: () => void }) => {
  const instaUrl = `https://instagram.com/${rep.instaHandle.replace('@', '')}`;

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  // Shared Instagram button
  const instaButton = (
    <motion.a
      href={instaUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group/btn inline-flex items-center gap-3 md:gap-4 px-5 md:px-7 py-3 md:py-4 rounded-full border border-paper/25 bg-paper/5 hover:bg-paper hover:border-paper transition-all duration-500 cursor-pointer w-fit"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <svg
        width="20" height="20" viewBox="0 0 24 24" fill="none"
        className="text-paper/80 group-hover/btn:text-primary transition-colors duration-500 flex-shrink-0"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
      <span className="font-sans text-sm md:text-base tracking-wider text-paper/90 group-hover/btn:text-primary transition-colors duration-500">
        Segui {rep.instaHandle}
      </span>
      <svg
        width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="text-paper/50 group-hover/btn:text-primary group-hover/btn:translate-x-1 transition-all duration-500 flex-shrink-0"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </motion.a>
  );

  return (
    <motion.div
      className="fixed inset-0 z-[100]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/* Backdrop — visible on desktop, hidden on mobile (fullscreen modal covers everything) */}
      <motion.div
        className="absolute inset-0 bg-primary/90 backdrop-blur-xl md:cursor-pointer"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Close button */}
      <motion.button
        className="absolute top-4 right-4 md:top-6 md:right-8 z-[110] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-paper/20 bg-primary/40 md:bg-paper/5 backdrop-blur-md text-paper/80 hover:text-paper hover:border-paper/40 hover:bg-paper/10 transition-all duration-300 cursor-pointer"
        onClick={onClose}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </motion.button>

      {/* ─── MOBILE LAYOUT: fullscreen card with image bg ─── */}
      <motion.div
        className="md:hidden relative z-[105] h-full w-full overflow-y-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Hero image taking top portion */}
        <div className="relative w-full h-[55vh] overflow-hidden">
          <img
            src={rep.image}
            alt={rep.name}
            className="w-full h-full object-cover"
          />
          {/* Strong gradient from bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        </div>

        {/* Content overlapping the image bottom */}
        <div className="relative -mt-28 px-6 pb-10 z-10">
          <motion.p
            className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-paper/50 mb-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            {rep.role}
          </motion.p>

          <motion.h2
            className="font-serif text-5xl text-paper mb-4 leading-[0.95]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {rep.name}
          </motion.h2>

          <motion.div
            className="w-14 h-[2px] bg-paper/30 rounded-full mb-5"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left' }}
          />

          <motion.p
            className="font-sans text-base text-paper/80 leading-relaxed font-light mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            {rep.description}
          </motion.p>

          {instaButton}
        </div>
      </motion.div>

      {/* ─── DESKTOP LAYOUT: side-by-side ─── */}
      <div className="hidden md:flex relative z-[105] items-center gap-16 w-full max-w-6xl mx-auto px-12 h-full">
        {/* Image */}
        <motion.div
          className="w-[45%] aspect-[3/4] max-h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-paper/10 relative"
          initial={{ opacity: 0, x: -80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -80, scale: 0.9 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={rep.image} alt={rep.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
        </motion.div>

        {/* Info */}
        <motion.div
          className="w-[55%] flex flex-col justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            className="font-sans text-sm font-bold uppercase tracking-[0.3em] text-paper/50 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {rep.role}
          </motion.p>

          <motion.h2
            className="font-serif text-7xl lg:text-8xl text-paper mb-6 leading-[0.95]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {rep.name}
          </motion.h2>

          <motion.div
            className="w-20 h-[2px] bg-paper/30 rounded-full mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left' }}
          />

          <motion.p
            className="font-sans text-lg lg:text-xl text-paper/80 leading-relaxed font-light max-w-lg mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            {rep.description}
          </motion.p>

          {instaButton}
        </motion.div>
      </div>
    </motion.div>
  );
};

// ─── CARD COMPONENTS ───

const TeamCard = ({ rep, onSelect }: { rep: Representative; onSelect: () => void; key?: React.Key }) => {
  return (
    <div className="relative w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[25vw] flex-shrink-0 group" onClick={onSelect}>
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

const VerticalTeamCard = ({ rep, index, onSelect }: { rep: Representative; index: number; onSelect: () => void; key?: React.Key }) => {
  return (
    <motion.div
      className="relative w-full group cursor-pointer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      onClick={onSelect}
    >
      <div className="w-full h-[70vh] overflow-hidden rounded-xl relative shadow-2xl bg-paper/5 border border-paper/10">
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
          <h3 className="font-serif text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-paper mb-4 leading-tight drop-shadow-lg">
            {rep.name}
          </h3>

          <div className="overflow-hidden">
            <p className="font-sans text-sm md:text-base lg:text-lg text-paper/90 max-w-md leading-relaxed opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {rep.description}
            </p>
          </div>

          <div className="mt-4 md:mt-6 flex items-center gap-3 opacity-0 md:group-hover:opacity-100 transition-all duration-500 delay-200">
            <span className="w-8 md:w-12 h-[1px] bg-paper/50"></span>
            <span className="font-sans text-xs md:text-sm text-paper tracking-wider hover:underline underline-offset-4">{rep.instaHandle}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── TOGGLE BUTTON ───
const ScrollModeToggle = ({ mode, onToggle }: { mode: ScrollMode; onToggle: () => void }) => {
  return (
    <motion.button
      onClick={onToggle}
      className="hidden md:flex items-center gap-2.5 px-4 py-2 rounded-full border border-paper/20 bg-paper/5 backdrop-blur-sm text-paper/60 hover:text-paper hover:border-paper/40 hover:bg-paper/10 transition-all duration-300 font-sans text-xs tracking-wider uppercase cursor-pointer"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      title={mode === 'horizontal' ? 'Passa a scorrimento verticale' : 'Passa a scorrimento orizzontale'}
    >
      <AnimatePresence mode="wait">
        {mode === 'horizontal' ? (
          <motion.svg
            key="vertical-icon"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </motion.svg>
        ) : (
          <motion.svg
            key="horizontal-icon"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </motion.svg>
        )}
      </AnimatePresence>
      <span>
        {mode === 'horizontal' ? 'Verticale' : 'Orizzontale'}
      </span>
    </motion.button>
  );
};

// ─── MAIN COMPONENT ───
const Team: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedRep, setSelectedRep] = useState<Representative | null>(null);

  const handleSelectRep = useCallback((rep: Representative) => setSelectedRep(rep), []);
  const handleCloseModal = useCallback(() => setSelectedRep(null), []);

  // Scroll mode state with localStorage persistence
  const [scrollMode, setScrollMode] = useState<ScrollMode>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'horizontal' || saved === 'vertical') return saved;
    } catch {}
    return 'horizontal';
  });

  const toggleScrollMode = () => {
    setScrollMode(prev => {
      const next = prev === 'horizontal' ? 'vertical' : 'horizontal';
      try { localStorage.setItem(STORAGE_KEY, next); } catch {}
      return next;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      
      if (scrollContainerRef.current && scrollMode === 'horizontal') {
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
  }, [scrollMode]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1, stiffness: 100, damping: 20 });
  const x = useTransform(smoothProgress, [0, 1], [0, -scrollRange]);
  const xVelocity = useVelocity(x);
  const skewX = useTransform(xVelocity, [-1000, 1000], [2, -2]); 
  const smoothSkew = useSpring(skewX, { stiffness: 400, damping: 30 });

  // Detail modal — rendered in all layouts
  const modal = (
    <AnimatePresence>
      {selectedRep && (
        <RepDetailModal rep={selectedRep} onClose={handleCloseModal} />
      )}
    </AnimatePresence>
  );

  // ─── MOBILE LAYOUT ───
  if (isMobile) {
    return (
      <>
        <section id="chi-siamo" className="relative py-20 bg-primary text-paper px-6 overflow-hidden">
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
                <div
                  key={rep.id}
                  className="relative w-full overflow-hidden rounded-2xl shadow-xl bg-paper/5 border border-paper/10 cursor-pointer"
                  onClick={() => handleSelectRep(rep)}
                >
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
        {modal}
      </>
    );
  }

  // ─── DESKTOP: VERTICAL LAYOUT ───
  if (scrollMode === 'vertical') {
    return (
      <>
        <section id="chi-siamo" className="relative bg-primary text-paper py-24 md:py-32 overflow-hidden">
          {/* Background title */}
          <div className="absolute top-4 left-4 md:top-10 md:left-10 z-0 pointer-events-none mix-blend-overlay opacity-10">
            <h2 className="font-serif text-[18vw] leading-none text-paper uppercase tracking-tighter">
              Team
            </h2>
          </div>

          <div className="relative z-10 px-[8vw] md:px-[10vw]">
            {/* Header row with title + toggle */}
            <div className="flex items-start justify-between mb-16 md:mb-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="font-serif text-6xl md:text-7xl lg:text-8xl mb-6 leading-none text-paper">
                  Chi <br/><span className="text-paper/50 italic">Siamo</span>
                </h3>
                <p className="font-sans text-xl lg:text-2xl text-paper/80 leading-relaxed font-light max-w-lg">
                  Studenti per gli studenti. 
                  <br/>
                  Costruiamo insieme il futuro della nostra scuola.
                </p>
                <div className="mt-10 w-24 h-1 bg-paper/30 rounded-full"></div>
              </motion.div>

              <div className="pt-2">
                <ScrollModeToggle mode={scrollMode} onToggle={toggleScrollMode} />
              </div>
            </div>

            {/* 2-column grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {reps.map((rep, index) => (
                <VerticalTeamCard key={rep.id} rep={rep} index={index} onSelect={() => handleSelectRep(rep)} />
              ))}
            </div>
          </div>
        </section>
        {modal}
      </>
    );
  }

  // ─── DESKTOP: HORIZONTAL LAYOUT (default) ───
  return (
    <>
      <section id="chi-siamo" ref={targetRef} className="relative h-[350vh] bg-primary text-paper">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          {/* Toggle button — absolute positioned top-right */}
          <div className="absolute top-6 right-8 z-30">
            <ScrollModeToggle mode={scrollMode} onToggle={toggleScrollMode} />
          </div>

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
                  <TeamCard key={rep.id} rep={rep} onSelect={() => handleSelectRep(rep)} />
              ))}
              
              <div className="w-[5vw] flex-shrink-0"></div>
          </motion.div>
        </div>
      </section>
      {modal}
    </>
  );
};

export default Team;