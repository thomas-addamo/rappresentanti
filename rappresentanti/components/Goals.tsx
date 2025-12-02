import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Lock, Loader2 } from 'lucide-react';
import { Goal } from '../types';

const goals: Goal[] = [
  {
    id: 1,
    title: "Assemblea di Benvenuto",
    description: "Organizzazione della prima assemblea plenaria in presenza post-estate.",
    status: "achieved",
    icon: ""
  },
  {
    id: 2,
    title: "Nuove Macchinette",
    description: "Installazione distributori con opzioni gluten-free e prezzi bloccati.",
    status: "achieved",
    icon: ""
  },
  {
    id: 3,
    title: "Ristrutturazione Palestra",
    description: "Fondi approvati dal consiglio. In attesa di inizio lavori.",
    status: "in-progress",
    icon: ""
  },
  {
    id: 4,
    title: "Merch d'Istituto",
    description: "Felpe e magliette personalizzate. Design contest in arrivo.",
    status: "in-progress",
    icon: ""
  },
  {
    id: 5,
    title: "Giornata dell'Arte",
    description: "Evento di fine anno con musica e mostre.",
    status: "locked",
    icon: ""
  }
];

const Goals: React.FC = () => {
  return (
    <section id="obiettivi" className="py-20 md:py-32 px-4 md:px-24 bg-paper relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16 md:mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl text-primary mb-6"
          >
            Roadmap 2025/26
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-primary/70 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Il nostro piano d'azione, passo dopo passo. Trasparenza totale su ogni obiettivo.
          </motion.p>
        </div>

        <div className="relative border-l-2 border-primary/10 ml-4 md:ml-0 space-y-12 md:space-y-16">
          {goals.map((goal, index) => {
            const isAchieved = goal.status === 'achieved';
            const isInProgress = goal.status === 'in-progress';
            const isLocked = goal.status === 'locked';

            return (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-24 group"
              >
                {/* Connector Node */}
                <div
                  className={`absolute -left-[9px] top-8 md:top-10 w-5 h-5 rounded-full border-4 border-paper z-10 transition-all duration-500
                    ${isAchieved ? 'bg-primary scale-110 shadow-[0_0_10px_rgba(79,0,6,0.3)]' : isInProgress ? 'bg-orange-500 animate-pulse' : 'bg-gray-300'}
                  `}
                />

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden
                        ${isLocked ? 'bg-gray-50/80 border-dashed border-gray-300 backdrop-blur-sm' : 'bg-white border-primary/10'}
                    `}
                >
                  {/* Status Badge - Mobile Optimized */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <h3 className={`font-serif text-2xl md:text-3xl leading-tight ${isLocked ? 'text-gray-400' : 'text-primary'}`}>
                        {goal.title}
                      </h3>
                    </div>

                    {/* Status Indicator */}
                    <div className="self-start md:self-auto order-first md:order-last mb-2 md:mb-0">
                      {isAchieved && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-800 text-[10px] md:text-xs font-bold uppercase tracking-widest border border-green-200 shadow-sm">
                          <CheckCircle2 size={14} className="stroke-[3]" /> Completato
                        </span>
                      )}
                      {isInProgress && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-[10px] md:text-xs font-bold uppercase tracking-widest border border-orange-200 shadow-sm">
                          <Loader2 size={14} className="animate-spin stroke-[3]" /> In Corso
                        </span>
                      )}
                      {isLocked && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest border border-gray-200 shadow-sm">
                          <Lock size={14} className="stroke-[3]" /> Bloccato
                        </span>
                      )}
                    </div>
                  </div>

                  <p className={`font-sans leading-relaxed text-sm md:text-base ${isLocked ? 'text-gray-400 italic' : 'text-gray-600'}`}>
                    {isLocked ? "Obiettivo non ancora sbloccato. Completare i precedenti per rivelare i dettagli." : goal.description}
                  </p>

                  {/* Progress Bar for In-Progress items */}
                  {isInProgress && (
                    <div className="w-full bg-gray-100 h-2 rounded-full mt-6 overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '45%' }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="bg-orange-500 h-full rounded-full relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-white/30 animate-[pulse_2s_infinite]" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Goals;