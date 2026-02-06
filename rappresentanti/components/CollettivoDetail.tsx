import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Users, ShieldCheck, Zap, Target, ArrowDownRight, Sparkles } from 'lucide-react';
import Footer from './Footer';

interface CollettivoDetailProps {
  onBack: () => void;
}

const CollettivoDetail: React.FC<CollettivoDetailProps> = ({ onBack }) => {
  const points = [
    {
      t: "Incontra gli Studenti",
      d: "Raccogliamo segnalazioni, criticità e proposte reali.",
      icon: <Users size={24} />
    },
    {
      t: "Motore Operativo",
      d: "Supportiamo i Rappresentanti d’Istituto nei loro progetti.",
      icon: <Zap size={24} />
    },
    {
      t: "Tutela Diritti",
      d: "Lavoriamo per proteggere le volontà della collettività.",
      icon: <ShieldCheck size={24} />
    },
    {
      t: "Partecipazione",
      d: "Promuoviamo cittadinanza attiva e consapevolezza sociale.",
      icon: <Sparkles size={24} />
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[120] bg-paper overflow-y-auto no-scrollbar text-primary"
    >
      <div className="min-h-screen relative flex flex-col">
        {/* Navbar */}
        <nav className="sticky top-0 left-0 w-full p-4 md:p-10 flex justify-between items-center bg-paper/80 backdrop-blur-md z-[125] border-b border-primary/5">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 md:gap-3 font-sans uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold"
          >
            <div className="p-2 md:p-2.5 border border-primary rounded-full group-hover:bg-primary group-hover:text-paper transition-all">
              <ArrowLeft size={14} className="md:w-4 md:h-4" />
            </div>
            <span className="hidden xs:inline">Torna Indietro</span>
            <span className="xs:hidden">Indietro</span>
          </button>
          <div className="font-serif italic text-lg md:text-2xl tracking-tighter">Collettivo Maxwell</div>
        </nav>

        {/* Hero Section */}
        <header className="relative pt-16 md:pt-24 pb-24 md:pb-40 px-6 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] bg-primary/5 rounded-full blur-[60px] md:blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-serif text-[13vw] sm:text-[11vw] md:text-[10vw] lg:text-[11vw] leading-[0.9] md:leading-[0.8] mb-8 md:mb-12">
                La Voce <br />
                Di <span className="italic text-primary/30">Ogni</span> Studente.
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                 <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="font-sans text-xl md:text-3xl max-w-2xl leading-tight font-light opacity-80"
                 >
                   Il Collettivo nasce per unire, ascoltare e dare <span className="text-primary font-medium italic underline decoration-primary/20 underline-offset-4">forza reale</span> ad ogni singolo studente della nostra scuola.
                 </motion.p>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow max-w-7xl mx-auto px-6 space-y-24 md:space-y-40 pb-12 md:pb-16">
          
          {/* Manifesto Block */}
          <motion.section 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-primary text-paper p-8 md:p-24 rounded-[2.5rem] md:rounded-[3rem] text-center space-y-6 md:space-y-8 shadow-2xl relative overflow-hidden"
          >
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_100%)] pointer-events-none" />
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true }}
                className="h-[1px] md:h-[2px] bg-paper/30 mx-auto rounded-full" 
              />
              <h2 className="font-serif text-2xl sm:text-3xl md:text-6xl italic leading-tight max-w-3xl mx-auto relative z-10">
                "Trasformare le idee degli studenti in azioni concrete per la scuola."
              </h2>
              <p className="font-sans text-base md:text-xl opacity-80 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
                 Uno spazio di confronto, ascolto e progettazione, creato per far sentire la voce di tutti.
              </p>
          </motion.section>

          {/* Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, backgroundColor: "rgba(79, 0, 6, 0.05)" }}
                className="p-10 border border-primary/5 bg-primary/[0.02] rounded-[2.5rem] space-y-6 transition-colors duration-500"
              >
                <div className="p-3 bg-primary/5 text-primary rounded-xl w-fit">
                  {p.icon}
                </div>
                <h3 className="font-serif text-2xl">{p.t}</h3>
                <p className="font-sans text-sm opacity-60 leading-relaxed font-light">{p.d}</p>
              </motion.div>
            ))}
          </div>

          {/* Text Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight">Cos'è il Collettivo</h2>
              <div className="font-sans text-lg opacity-70 leading-relaxed space-y-4 font-light">
                <p>Il Collettivo Studentesco è un gruppo di studenti attivi e motivati che opera in collaborazione diretta con i Rappresentanti d’Istituto.</p>
                <p>Gode di autonomia nel dibattito e nella proposta, ma agisce in modo coordinato con i rappresentanti per garantire serietà e correttezza istituzionale.</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight">Progetto Futuro</h2>
              <div className="font-sans text-lg opacity-70 leading-relaxed space-y-4 font-light">
                <p>Non è solo un gruppo di lavoro, ma una visione di scuola. L'obiettivo è diventare un punto di riferimento ufficiale per l'intera comunità.</p>
                <p>Se dimostra valore nel tempo, il Collettivo potrà essere proposto come nuovo organo riconosciuto dell'Istituto.</p>
              </div>
            </motion.div>
          </div>

          {/* Members Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="pt-12 border-t border-primary/5"
          >
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-12 text-center md:text-left">Il Team Attuale</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
              {[
                "Daniele Mazzetti",
                "Matteo Meledandri",
                "Lisa Rebufello",
                "Enzo Arcidiacono",
                "Asia Zarif"
              ].map((name, i) => (
                <div key={i} className="px-6 py-3 bg-primary/5 rounded-full border border-primary/5 hover:bg-primary hover:text-paper transition-all duration-500 group">
                  <span className="font-sans text-sm md:text-base font-medium tracking-wide">{name}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <section className="pt-16 pb-8 md:pt-24 md:pb-12 border-t border-primary/5 text-center space-y-8 md:space-y-12">
             <h2 className="font-serif text-5xl md:text-8xl italic">Contattaci.</h2>
             <div className="flex flex-col items-center gap-6">
               <a
                href="mailto:collettivo@rappresentantimaxwell.it"
                className="group flex items-center gap-6 bg-primary text-paper px-12 py-6 rounded-full font-sans font-bold uppercase tracking-widest text-sm shadow-xl hover:scale-105 transition-all"
               >
                 Contatta il Collettivo
                 <Send size={18} />
               </a>
               <p className="font-serif italic text-xl opacity-40">collettivo@rappresentantimaxwell.it</p>
             </div>
          </section>

        </main>

        <Footer />
      </div>
    </motion.div>
  );
};

export default CollettivoDetail;
