import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 300); // Small delay to allow menu closing animation
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
    { label: "News", id: "news" },
    { label: "Contattaci", id: "contatti" }
  ];

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
        className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-difference text-white"
      >
        <button
          onClick={scrollToTop}
          className="font-serif text-2xl font-italic tracking-tighter relative z-50 hover:opacity-80 transition-opacity"
        >
          Rappresentanti.
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-sans text-sm uppercase tracking-widest">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative overflow-hidden group"
            >
              <div className="transition-transform duration-300 group-hover:-translate-y-full">
                {link.label}
              </div>
              <div className="absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                {link.label}
              </div>
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-50 p-2 hover:opacity-70 transition-opacity"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
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