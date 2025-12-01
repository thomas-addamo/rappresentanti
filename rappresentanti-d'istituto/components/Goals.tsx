import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Lock, Loader2, Trophy } from 'lucide-react';
import { Goal } from '../types';

const goals: Goal[] = [
  {
    id: 1,
    title: "Assemblea di Benvenuto",
    description: "Organizzazione della prima assemblea plenaria in presenza post-estate.",
    status: "achieved",
    icon: "🎉"
  },
  {
    id: 2,
    title: "Nuove Macchinette",
    description: "Installazione distributori con opzioni gluten-free e prezzi bloccati.",
    status: "achieved",
    icon: "☕"
  },
  {
    id: 3,
    title: "Ristrutturazione Palestra",
    description: "Fondi approvati dal consiglio. In attesa di inizio lavori.",
    status: "in-progress",
    icon: "🏀"
  },
  {
    id: 4,
    title: "Merch d'Istituto",
    description: "Felpe e magliette personalizzate. Design contest in arrivo.",
    status: "in-progress",
    icon: "👕"
  },
  {
    id: 5,
    title: "Giornata dell'Arte",
    description: "Evento di fine anno con musica e mostre.",
    status: "locked",
    icon: "🎨"
  }
];

const Goals: React.FC = () => {
  return (
    <section id="obiettivi" className="py-32 px-6 md:px-24 bg-paper relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center">
            <h2 className="font-serif text-6xl text-primary mb-4">Roadmap 2025/26</h2>
            <p className="font-sans text-primary/70">Il nostro piano d'azione, passo dopo passo.</p>
        </div>

        <div className="relative border-l-2 border-primary/10 ml-6 md:ml-0 space-y-16">
          {goals.map((goal, index) => {
            const isAchieved = goal.status === 'achieved';
            const isInProgress = goal.status === 'in-progress';
            const isLocked = goal.status === 'locked';

            return (
              <motion.div 
                key={goal.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-12 md:pl-24 group"
              >
                {/* Connector Node */}
                <div 
                  className={`absolute -left-[9px] top-2 w-5 h-5 rounded-full border-4 border-paper z-10 transition-colors duration-500
                    ${isAchieved ? 'bg-primary' : isInProgress ? 'bg-orange-500 animate-pulse' : 'bg-gray-300'}
                  `}
                />

                <div className={`p-8 rounded-lg border transition-all duration-300 hover:shadow-lg
                    ${isLocked ? 'bg-gray-100 border-dashed border-gray-300 opacity-60 grayscale' : 'bg-white border-primary/10'}
                `}>
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                            <span className="text-3xl">{goal.icon}</span>
                            <h3 className={`font-serif text-2xl md:text-3xl ${isLocked ? 'text-gray-500' : 'text-primary'}`}>
                                {goal.title}
                            </h3>
                        </div>
                        <div className="font-sans text-xs uppercase tracking-widest font-bold">
                            {isAchieved && <span className="text-green-600 flex items-center gap-1"><CheckCircle2 size={14}/> Completato</span>}
                            {isInProgress && <span className="text-orange-500 flex items-center gap-1"><Loader2 size={14} className="animate-spin"/> In Corso</span>}
                            {isLocked && <span className="text-gray-400 flex items-center gap-1"><Lock size={14}/> Bloccato</span>}
                        </div>
                    </div>
                    <p className="font-sans text-gray-600 leading-relaxed">
                        {isLocked ? "Obiettivo non ancora sbloccato. Completare i precedenti per rivelare i dettagli." : goal.description}
                    </p>

                    {/* Progress Bar for In-Progress items */}
                    {isInProgress && (
                         <div className="w-full bg-gray-200 h-1.5 rounded-full mt-6 overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: '30%' }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="bg-orange-500 h-full rounded-full"
                            />
                         </div>
                    )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Goals;