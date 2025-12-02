import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-paper py-12 px-6 md:px-12 border-t border-paper/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <img src="https://thomas-addamo.github.io/A.S.-2025-26-/Tpsit/Html/logo_rappresentantisvg.svg" alt="Rappresentanti Logo" className="h-12 w-auto" />
            <span className="font-serif italic text-2xl">Rappresentanti.</span>
          </div>
          <p className="font-sans text-xs opacity-60 max-w-[200px] text-center md:text-left hidden md:block">
            La voce degli studenti dell'Istituto J.C. Maxwell.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-40 mb-2">
            &copy; {new Date().getFullYear()} Tutti i diritti riservati
          </div>
          <div className="font-serif text-lg opacity-80">
            Made with passion
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-40">Seguici su Instagram</span>
          <a href="https://instagram.com/rappresentanti.maxwell" target="_blank" rel="noopener noreferrer" className="font-sans text-sm tracking-widest hover:opacity-70 transition-opacity border-b border-paper/20 pb-1">
            @rappresentanti.maxwell
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;