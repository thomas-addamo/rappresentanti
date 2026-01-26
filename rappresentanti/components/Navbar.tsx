import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenEvents?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenEvents }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll states
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    // Auto-hide logic (disabled when menu is open)
    if (!isMobileMenuOpen) {
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    } else {
      setHidden(false);
    }

    // Blurred background threshold
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);

    if (id === 'events') {
      if (onOpenEvents) onOpenEvents();
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    }
  };

  const linkVariants: Variants = {
    closed: { y: 20, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.2 + i * 0.1, duration: 0.4, ease: "easeOut" }
    })
  };

  const links = [
    { label: "Chi Siamo", id: "chi-siamo" },
    { label: "Obiettivi", id: "obiettivi" },
    { label: "Eventi", id: "events" },
    { label: "News", id: "news" },
    { label: "Contattaci", id: "contatti" }
  ];

  // Logic for dynamic classes
  const isTransparent = !scrolled;

  // Background:
  // - Top: Transparent
  // - Scrolled: Opaque 'paper-dark' (Grayish) with blur
  // - Mobile Menu: Transparent (handled by menu overlay)
  const backgroundClass = isMobileMenuOpen
    ? 'bg-transparent'
    : (scrolled ? 'bg-paper-dark/90 backdrop-blur-md shadow-sm' : 'bg-transparent');

  // Text Color:
  // - Top: Primary (Dark Red/Black-ish) - User requested 'Black', Primary is #4f0006 which is very dark.
  // - Scrolled: Primary (Red) - User requested 'Red on Gray'.
  // - Mobile Menu: Paper (White-ish).
  // We avoid mix-blend-mode to guarantee readability.
  const textClass = isMobileMenuOpen
    ? 'text-paper'
    : 'text-primary';

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        initial="hidden"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="w-full z-50 transition-all duration-500"
      >
        {/* Background Layer */}
        <div
          className={`absolute inset-0 z-0 transition-all duration-500 ease-in-out ${backgroundClass}`}
        />

        {/* Content Layer */}
        <div className={`relative z-10 px-6 py-4 flex justify-between items-center w-full transition-all duration-500 ${textClass}`}>
          <button
            onClick={scrollToTop}
            className="font-serif text-2xl font-italic tracking-tighter hover:opacity-80 transition-opacity"
          >
            Rappresentanti.
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-sans text-sm uppercase tracking-widest">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ease-out" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:opacity-70 transition-opacity"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-primary z-40 flex flex-col justify-center items-center text-paper"
          >
            {/* Decorative Background */}
            <div className="absolute inset-0 pointer-events-none opacity-5 overflow-hidden">
              <svg className="w-full h-full scale-150" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#f5f2eb" />
              </svg>
            </div>

            <div className="flex flex-col gap-8 text-center relative z-10">
              {links.map((link, i) => (
                <motion.button
                  key={link.id}
                  custom={i}
                  variants={linkVariants}
                  onClick={() => scrollToSection(link.id)}
                  className="font-serif text-5xl md:text-6xl italic hover:text-white transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 font-sans text-xs uppercase tracking-[0.2em]"
            >
              Rappresentanti d'Istituto
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;