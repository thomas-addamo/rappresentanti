import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Zap, Sparkles, Send, CheckCircle2, Clock, MoveRight, Star } from 'lucide-react';
import CollettivoNavbar from '../components/CollettivoNavbar';
import CollettivoFooter from '../components/CollettivoFooter';

const CollettivoPage: React.FC = () => {
  const points = [
    {
      t: "Dialogo Reale",
      d: "Non solo ascolto, ma comprensione profonda delle necessità.",
      icon: <Users size={28} />
    },
    {
      t: "Azione Diretta",
      d: "Supporto operativo immediato ai progetti dei Rappresentanti.",
      icon: <Zap size={28} />
    },
    {
      t: "Tutela",
      d: "Difesa attiva dei diritti e della volontà studentesca.",
      icon: <ShieldCheck size={28} />
    },
    {
      t: "Cultura",
      d: "Promozione di una cittadinanza scolastica attiva e consapevole.",
      icon: <Sparkles size={28} />
    }
  ];

  const goals = [
    {
      title: "Diritti e doveri dello studente",
      desc: "Pubblicazione su Instagram di contenuti chiari e accessibili per informare tutta la comunità scolastica.",
      status: "progress"
    },
    {
      title: "Co-gestione",
      desc: "Spazi di collaborazione tra studenti e scuola per la gestione di attività e progetti.",
      status: "progress"
    },
  ];

  const team = [
    "Daniele Mazzetti", "Matteo Meledandri", "Lisa Rebufello", "Enzo Arcidiacono", "Asia Zarif"
  ];

  return (
    <div className="antialiased selection:bg-primary selection:text-paper bg-paper text-primary min-h-screen flex flex-col">
       <div className="fixed top-0 left-0 w-full z-50">
          <CollettivoNavbar />
       </div>

       {/* Hero Section (Chi Siamo) */}
        <header id="chi-siamo-collettivo" className="relative pt-32 md:pt-48 pb-24 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em] mb-8 sm:mb-12 font-medium">
                Chi Siamo
              </div>
              <h1 className="font-serif text-[14vw] sm:text-[12vw] md:text-[11vw] leading-[0.85] md:leading-[0.8] mb-10 sm:mb-16 tracking-tight -ml-1 sm:-ml-2">
                La Voce <br />
                Di <span className="italic text-primary/30 relative">Ogni
                <span className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-[2px] sm:h-[4px] bg-primary/10 rounded-full" />
                </span> Studente.
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
                 <div className="lg:col-span-7">
                    <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="font-sans text-xl sm:text-2xl md:text-4xl leading-[1.15] font-light tracking-tight text-primary/90"
                    >
                      Il Collettivo non è un gruppo chiuso. È uno spazio aperto, nato per unire, ascoltare e dare <span className="italic font-serif text-primary opacity-80 decoration-primary/20 underline-offset-4 decoration-1">forza reale</span> alle idee che cambiano la scuola.
                    </motion.p>
                 </div>
                 <div className="lg:col-span-5 flex lg:justify-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="p-8 border-l border-primary/20 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm"
                    >
                        <p className="font-sans text-sm opacity-60 leading-relaxed max-w-xs">
                            Fondato nel 2026, lavora a stretto contatto con la Rappresentanza d'Istituto per garantire trasparenza, partecipazione e risultati concreti.
                        </p>
                    </motion.div>
                 </div>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow max-w-7xl mx-auto w-full px-6 space-y-32 md:space-y-48 pb-20">
          
          {/* Manifesto Block */}
          <motion.section 
            viewport={{ once: true, margin: "-10%" }}
            className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center"
          >
              <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="flex-1 order-2 lg:order-1"
              >
                  <div className="h-px w-24 bg-primary/20 mb-8" />
                  <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl italic leading-[1.1] mb-8 text-primary">
                    "Trasformare le idee in azioni concrete."
                  </h2>
                  <p className="font-sans text-lg opacity-70 leading-relaxed font-light mb-8">
                     Crediamo in una scuola che non si ferma alla lamentela, ma che costruisce soluzioni. Ogni membro del Collettivo è parte di un ingranaggio che muove il cambiamento.
                  </p>
                  
                  <ul className="space-y-4 font-sans text-base">
                      {["Indipendenza", "Collaborazione", "Concretezza"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 opacity-90">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/40 block" /> {item}
                          </li>
                      ))}
                  </ul>
              </motion.div>

              <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 order-1 lg:order-2 w-full"
              >
                  <div className="bg-primary text-paper p-10 md:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden min-h-[300px] flex flex-col justify-between">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                      <Star className="text-paper/20 w-12 h-12 mb-6" />
                      <div className="relative z-10">
                        <h3 className="font-sans text-xs uppercase tracking-[0.3em] font-bold opacity-60 mb-4">La Nostra Missione</h3>
                        <p className="font-serif text-3xl md:text-4xl leading-tight opacity-90">Diventare un punto di riferimento stabile e riconosciuto per la comunità studentesca.</p>
                      </div>
                  </div>
              </motion.div>
          </motion.section>

          {/* Values Grid */}
          {/* Values Grid */}
          <section>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
                <div>
                  <h2 className="font-serif text-5xl md:text-7xl tracking-tight leading-none">I Nostri Valori.</h2>
                  <p className="font-sans text-lg md:text-xl opacity-60 max-w-sm mt-4 font-light leading-relaxed">I pilastri fondamentali su cui costruiamo ogni nostra iniziativa e progetto.</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {points.map((p, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group p-8 bg-paper border border-primary/10 rounded-[2rem] hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-500 flex flex-col justify-between h-full min-h-[16rem]"
                >
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                        {p.icon}
                    </div>
                    <div>
                        <h3 className="font-serif text-2xl mb-3 text-primary group-hover:text-primary transition-colors duration-300">{p.t}</h3>
                        <p className="font-sans text-sm md:text-base opacity-60 leading-relaxed font-light group-hover:opacity-90 transition-opacity duration-300">{p.d}</p>
                    </div>
                </motion.div>
                ))}
            </div>
          </section>

          {/* OBIETTIVI RAGGIUNTI SECTION */}
          <section id="obiettivi-collettivo" className="border-t border-primary/10 pt-24 md:pt-32">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                 <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 mb-6">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                        <span className="text-[10px] uppercase tracking-widest font-sans font-medium">Roadmap 2025/26</span>
                    </div>
                    <h2 className="font-serif text-5xl md:text-7xl tracking-tight leading-[0.9]">Impatto <br/><span className="italic text-primary/40">Concreto.</span></h2>
                 </div>
                 <p className="font-sans text-lg md:text-xl opacity-60 max-w-sm font-light leading-relaxed">Non promesse, ma fatti. Ecco cosa stiamo realizzando insieme grazie al supporto degli studenti.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                {goals.map((goal, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="group border-b border-primary/10 pb-8 hover:border-primary/40 transition-colors duration-300"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-serif text-3xl md:text-4xl group-hover:translate-x-2 transition-transform duration-300">{goal.title}</h3>
                            {goal.status === 'completed' ? (
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100/50 text-green-800 text-[10px] font-bold uppercase tracking-widest border border-green-200">
                                    <CheckCircle2 size={12} className="mr-1.5" /> Fatto
                                </span>
                            ) : (
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100/50 text-orange-800 text-[10px] font-bold uppercase tracking-widest border border-orange-200">
                                    <Clock size={12} className="mr-1.5" /> In corso
                                </span>
                            )}
                        </div>
                        <p className="font-sans text-lg opacity-60 font-light max-w-md group-hover:opacity-90 transition-opacity leading-relaxed">{goal.desc}</p>
                    </motion.div>
                ))}
            </div>
          </section>

          {/* Members Section - Clean List */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="pt-12"
          >
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
                <div className="md:w-1/3">
                    <h2 className="font-serif text-5xl md:text-7xl mb-4 tracking-tight">Il Team.</h2>
                    <p className="font-sans text-lg md:text-xl opacity-60 leading-relaxed font-light">Gli studenti che ogni giorno dedicano il loro tempo per far funzionare questa macchina.</p>
                </div>
                <div className="md:w-2/3 pt-2 md:pt-4">
                    <div className="flex flex-wrap gap-3 md:gap-4">
                        {team.map((name, i) => (
                            <div key={i} className="px-5 py-3 bg-white border border-primary/10 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                                <span className="font-sans text-sm md:text-base tracking-wide text-primary/80">{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <section id="unisciti-collettivo" className="pt-16 pb-8 md:pt-32 md:pb-16 text-center">
             <div className="max-w-4xl mx-auto bg-primary text-paper rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
                 {/* Decorative circles */}
                 <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                 <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[60px] translate-x-1/2 translate-y-1/2 pointer-events-none" />
                 
                 <div className="relative z-10 space-y-8 md:space-y-12">
                    <span className="inline-block px-4 py-1 rounded-full border border-paper/20 bg-paper/5 text-[10px] uppercase tracking-[0.3em] font-medium">
                        Partecipa ora
                    </span>
                    <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl italic leading-[0.9]">Fai sentire<br/>la tua voce.</h2>
                    <p className="font-sans text-lg md:text-xl opacity-70 font-light max-w-xl mx-auto">
                        Il Collettivo è alla ricerca di nuove menti e nuove energie. Se vuoi fare la differenza, questo è il posto giusto.
                    </p>
                    
                    <div className="flex flex-col items-center gap-6 pt-4">
                        <a
                            href="mailto:collettivo@rappresentantimaxwell.it"
                            className="group relative inline-flex items-center gap-4 bg-paper text-primary px-10 py-5 rounded-full font-sans font-bold uppercase tracking-widest text-xs md:text-sm overflow-hidden transition-transform hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Scrivici una mail <MoveRight size={18} />
                            </span>
                        </a>
                        <p className="font-serif italic text-lg opacity-50">collettivo@rappresentantimaxwell.it</p>
                    </div>
                 </div>
             </div>
          </section>
        </main>

        <CollettivoFooter />
    </div>
  );
};

export default CollettivoPage;
