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
            La voce degli studenti dell'Istituto Maxwell.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="font-sans text-xs opacity-70 flex flex-wrap justify-center items-center gap-1">
              <a href="https://rappresentantimaxwell.it" className="hover:text-white transition-colors">Rappresentanti Maxwell</a> 
              <span>&copy; {new Date().getFullYear()} by</span> 
              <span className="hover:text-white transition-colors cursor-default">Thomas Addamo</span>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-1.5 font-sans text-xs opacity-60">
              <span>is licensed under</span> 
              <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-dotted border-paper/40 hover:border-white">
                CC BY-NC-ND 4.0
              </a>
              <div className="flex items-center gap-[0.2em] opacity-80">
                 <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="cc" className="h-4 w-4" />
                 <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="by" className="h-4 w-4" />
                 <img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="nc" className="h-4 w-4" />
                 <img src="https://mirrors.creativecommons.org/presskit/icons/nd.svg" alt="nd" className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
             <a href="https://www.iubenda.com/privacy-policy/14149172" target="_blank" rel="noopener noreferrer" className="font-sans text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity" title="Privacy Policy">Privacy Policy</a>
             <a href="https://www.iubenda.com/privacy-policy/14149172/cookie-policy" target="_blank" rel="noopener noreferrer" className="font-sans text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity" title="Cookie Policy">Cookie Policy</a>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-40">Seguici su Instagram</span>
          <a href="https://instagram.com/rappresentanti.maxwell" target="_blank" rel="noopener noreferrer" className="font-sans text-sm tracking-widest hover:opacity-70 transition-opacity border-b border-paper/20 pb-1">
            @rappresentanti.maxwell
          </a>
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-40 mt-4">Scrivici una mail</span>
          <a href="mailto:info@rappresentantimaxwell.it" className="font-sans text-sm tracking-widest hover:opacity-70 transition-opacity border-b border-paper/20 pb-1">
            info@rappresentantimaxwell.it
          </a>
        </div>

        {/* Disclaimer */}
        <div className="col-span-1 md:col-span-3 mt-8 pt-8 border-t border-paper/10 w-full text-center">
          <p className="font-sans text-[12px] opacity-40 tracking-wider">
            Il presente sito è gestito autonomamente dai rappresentanti d’istituto e non costituisce un canale ufficiale dell’Istituto Maxwell di Nichelino.
            L’istituto scolastico non è in alcun modo responsabile dei contenuti pubblicati né delle informazioni fornite su questa piattaforma.
            Il nome dell’istituto è utilizzato esclusivamente per indicare l’ambito di rappresentanza studentesca. 
            Al termine del mandato, le responsabilità connesse alla gestione del sito decadono automaticamente per i rappresentanti uscenti.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;