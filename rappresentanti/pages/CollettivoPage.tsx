import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Zap, Sparkles, MoveRight, Star, CheckCircle2, Clock } from 'lucide-react';
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
      status: "completed"
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
    <div className="antialiased selection:bg-primary selection:text-paper bg-paper text-primary min-h-screen flex flex-col overflow-x-hidden">
       <div className="fixed top-0 left-0 w-full z-50">
          <CollettivoNavbar />
       </div>

        {/* Hero Section */}
        <section className="relative min-h-[90vh] md:h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-paper text-primary pt-20 border-b border-primary/10">
          {/* Subtle background glow */}
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <svg className="w-full h-full scale-150 md:scale-100" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 0 C 50 100 80 100 100 0 Z" fill="#4f0006" />
            </svg>
          </div>
          
          <div className="max-w-7xl mx-auto w-full relative z-10 px-6 text-center flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
              className="mb-8 md:mb-12 relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full transform scale-150"></div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em] font-medium relative z-10">
                Chi Siamo
              </div>
            </motion.div>

            <h1 className="font-serif text-[18vw] leading-[0.85] md:text-[11vw] text-primary flex flex-col items-center mb-8">
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="tracking-tight"
              >
                La Voce
              </motion.span>
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="italic text-primary/80 tracking-tight"
              >
                Di Tutti.
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-sans text-lg sm:text-xl md:text-2xl leading-[1.4] font-light tracking-wide text-primary/70 max-w-2xl mx-auto"
            >
              Uno spazio aperto, nato per unire, ascoltare e dare <span className="italic font-serif text-primary opacity-100 decoration-primary/30 underline-offset-4 decoration-1">forza reale</span> alle idee che cambiano la scuola.
            </motion.p>
          </div>
        </section>

        {/* Main Content - No global constrained wrapper so sections can span full width */}
        <main className="flex-grow w-full">
          
          {/* Manifesto Block */}
          <section id="chi-siamo-collettivo" className="py-24 md:py-32 px-6 bg-paper">
            <motion.div 
              viewport={{ once: true, margin: "-10%" }}
              className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center"
            >
                <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.8 }}
                 className="flex-1 order-2 lg:order-1"
                >
                    <div className="h-px w-24 bg-primary/20 mb-8" />
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl italic leading-[1.1] mb-8 text-primary">
                      "Trasforma le idee in azioni."
                    </h2>
                    <p className="font-sans text-lg md:text-xl opacity-70 leading-relaxed font-light mb-8">
                       Non ci fermiamo alla lamentela: costruiamo soluzioni affrontando direttamente i reali problemi della scuola. Ogni membro diventa parte del cambiamento.
                    </p>
                    
                    <ul className="space-y-4 font-sans text-base md:text-lg">
                        {["Indipendenza", "Collaborazione", "Concretezza"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 opacity-90 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 block" /> {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 order-1 lg:order-2 w-full"
                >
                    <div className="bg-primary text-paper p-10 md:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden min-h-[300px] flex flex-col justify-between">
                       <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <Star className="text-paper/20 w-12 h-12 mb-6" />
                        <div className="relative z-10">
                          <h3 className="font-sans text-xs uppercase tracking-[0.3em] font-bold opacity-60 mb-4">La Nostra Missione</h3>
                          <p className="font-serif text-3xl md:text-4xl leading-tight opacity-90">Diventare un punto di riferimento stabile e riconosciuto.</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
          </section>

          {/* Values Grid */}
          <section className="py-24 md:py-32 px-6 bg-paper border-t border-primary/10">
            <div className="max-w-7xl mx-auto">
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
                      viewport={{ once: true, margin: "-50px" }}
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
            </div>
          </section>

          {/* Link to Diritti e Doveri */}
          <section className="py-24 md:py-32 px-6 bg-primary/5">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-paper border border-primary/10 shadow-xl rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 group hover:border-primary/30 transition-colors duration-500"
              >
                <div className="flex-1">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
                    <ShieldCheck size={12} className="mr-1.5" /> Regolamento 2025/26
                  </div>
                  <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight text-primary">Diritti e <span className="italic opacity-80">Doveri</span> dello Studente.</h2>
                  <p className="font-sans text-lg md:text-xl opacity-70 font-light max-w-xl line-clamp-3">
                    Scopri cosa puoi pretendere, cosa devi rispettare e le nuove regole sull'uso dello smartphone a scuola in una guida chiara e schematica.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="/collettivo/diritti-e-doveri"
                    className="inline-flex items-center justify-center bg-primary text-paper px-8 py-5 rounded-full font-sans font-bold uppercase tracking-widest text-xs md:text-sm hover:scale-105 hover:shadow-lg transition-transform"
                  >
                    Leggi la Guida <MoveRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* OBIETTIVI RAGGIUNTI SECTION */}
          <section id="obiettivi-collettivo" className="py-24 md:py-32 px-6 bg-paper border-t border-primary/10">
            <div className="max-w-7xl mx-auto">
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
                          viewport={{ once: true, margin: "-50px" }}
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
            </div>
          </section>

          {/* Members Section */}
          <section className="py-24 md:py-32 px-6 bg-paper border-t border-primary/10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-start"
            >
                <div className="md:w-1/3">
                    <h2 className="font-serif text-5xl md:text-7xl mb-6 tracking-tight">Il Team.</h2>
                    <p className="font-sans text-lg md:text-xl opacity-60 leading-relaxed font-light">Gli studenti che ogni giorno dedicano il loro tempo per far funzionare questa macchina.</p>
                </div>
                <div className="md:w-2/3 pt-2 md:pt-4">
                    <div className="flex flex-wrap gap-3 md:gap-4">
                        {team.map((name, i) => (
                            <div key={i} className="px-5 py-3 md:px-6 md:py-4 bg-white border border-primary/10 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                                <span className="font-sans text-sm md:text-base tracking-wide text-primary/80 font-medium">{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
          </section>

          {/* CTA Section - Edge to Edge Background */}
          <section id="unisciti-collettivo" className="min-h-[80vh] flex items-center justify-center py-24 md:py-32 px-6 bg-primary text-paper relative overflow-hidden">
             <div className="absolute top-0 left-0 w-96 h-96 bg-paper/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-paper/5 rounded-full blur-[60px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

             <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8 md:space-y-12">
                <span className="inline-block px-4 py-1.5 rounded-full border border-paper/20 bg-paper/5 text-[10px] uppercase tracking-[0.3em] font-medium">
                    Partecipa ora
                </span>
                <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl italic leading-[0.9]">Fai sentire<br/>la tua voce.</h2>
                <p className="font-sans text-lg md:text-2xl opacity-70 font-light max-w-2xl mx-auto leading-relaxed">
                    Il Collettivo è alla ricerca di nuove menti e nuove energie. Se vuoi fare la differenza, questo è il posto giusto per te.
                </p>
                
                <div className="flex flex-col items-center gap-6 pt-8">
                    <a
                        href="mailto:collettivo@rappresentantimaxwell.it"
                        className="group relative inline-flex items-center justify-center gap-4 bg-paper text-primary px-10 py-5 rounded-full font-sans font-bold uppercase tracking-widest text-[10px] md:text-xs overflow-hidden transition-transform shadow-xl hover:scale-105"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Scrivici una mail <MoveRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                    <p className="font-serif italic text-lg opacity-50 tracking-wide">collettivo@rappresentantimaxwell.it</p>
                </div>
             </div>
          </section>
        </main>

        <CollettivoFooter />
    </div>
  );
};

export default CollettivoPage;
