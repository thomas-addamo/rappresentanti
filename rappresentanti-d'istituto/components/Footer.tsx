import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-paper py-8 px-6 border-t border-paper/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <div className="font-serif italic text-2xl">Rappresentanti.</div>
      </div>
      <div className="font-sans text-xs uppercase tracking-widest opacity-50">
        &copy; {new Date().getFullYear()} RAPPRESENTANTI D'ISTITUTO
      </div>
    </footer>
  );
};

export default Footer;