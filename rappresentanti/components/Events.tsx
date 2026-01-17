import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Clock } from 'lucide-react';
import { eventsData } from '../data/eventsData';

interface EventsProps {
  onBack: () => void;
}

const Events: React.FC<EventsProps> = ({ onBack }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 50, damping: 15 }
    }
  };

  const currentDate = new Date();

  const addToCalendar = (event: typeof eventsData[0]) => {
    const startTime = new Date(event.date).toISOString().replace(/-|:|\.\d\d\d/g, "");
    
    // Use endDate if available, otherwise default to 1 hour
    let endTime: string;
    if (event.endDate) {
      endTime = new Date(event.endDate).toISOString().replace(/-|:|\.\d\d\d/g, "");
    } else {
      endTime = new Date(new Date(event.date).getTime() + 60 * 60 * 1000).toISOString().replace(/-|:|\.\d\d\d/g, "");
    }
    
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `DTSTART:${startTime}`,
      `DTEND:${endTime}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.location}`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\n");

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${event.title.replace(/\s+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="fixed inset-0 z-[60] bg-paper-dark overflow-y-auto no-scrollbar"
    >
      <div className="min-h-screen px-6 py-12 md:p-24 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div className="relative z-10">
            <button
              onClick={onBack}
              className="group mb-8 flex items-center gap-3 font-sans uppercase tracking-widest text-sm text-primary transition-all duration-300 hover:-translate-x-2"
            >
              <ArrowLeft size={16} className="group-hover:scale-110" /> 
              <span>Torna alla Home</span>
            </button>
            <h1 className="font-serif text-6xl md:text-9xl text-primary leading-[0.9]">
              Eventi
              <span className="block text-3xl md:text-4xl italic opacity-50 mt-2 font-light">
                & Programmazione
              </span>
            </h1>
          </div>
          <div className="font-sans text-primary/60 uppercase tracking-widest text-right hidden md:block">
            <div className="text-4xl font-serif mb-2">{eventsData.length}</div>
            <div>Appuntamenti</div>
          </div>
        </div>

        {/* Timeline/Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-12 md:gap-24 relative"
        >
          {/* Vertical Line - Main Axis */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/20" />

          {eventsData.map((event, index) => {
            const eventDate = new Date(event.date);
            const isPast = eventDate < currentDate;
            const isNext = !isPast && (index === 0 || new Date(eventsData[index - 1].date) < currentDate); 

            // Time Formatting
            const startTime = eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const endTime = event.endDate 
              ? new Date(event.endDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              : null;
            
            const timeDisplay = endTime ? `${startTime} - ${endTime}` : startTime;

            return (
              <motion.div
                key={event.id}
                variants={itemAnim}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-24 ${
                  index % 2 === 0 ? 'md:text-right md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Point */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-8 w-4 h-4 rounded-full bg-primary border-4 border-paper-dark transform -translate-x-1/2 z-10 shrink-0" />

                {/* Date Side */}
                <div className={`flex-1 md:pt-4 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                  <div className={`font-sans uppercase tracking-[0.2em] mb-2 ${isPast ? 'opacity-40' : 'text-primary'}`}>
                    {event.displayDate}
                  </div>
                   <div className="text-primary/60 font-sans text-sm flex items-center gap-2 md:justify-end justify-start">
                     {index % 2 !== 0 && <Clock size={14} />}
                     <span>{timeDisplay}</span>
                     {index % 2 === 0 && <Clock size={14} />}
                   </div>
                </div>

                {/* Content Side */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} pl-8 md:pl-0 pb-12 md:pb-0`}>
                  <div 
                    className={`
                      group relative overflow-hidden rounded-2xl p-8 
                      ${isPast ? 'bg-primary/5 grayscale' : 'bg-white shadow-xl hover:shadow-2xl'}
                      transition-all duration-500
                    `}
                  >
                    {/* Decorative Blob */}
                    {!isPast && (
                      <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
                    )}

                    <div className="relative z-10">
                      <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-sans uppercase tracking-widest ${isPast ? 'bg-gray-200 text-gray-500' : 'bg-primary text-white'}`}>
                          {isPast ? 'Concluso' : 'Programmato'}
                        </span>
                        <div className="flex items-center gap-1 text-xs font-sans uppercase tracking-widest opacity-60">
                           <MapPin size={12} />
                           {event.location}
                        </div>
                      </div>

                      <h3 className="font-serif text-4xl md:text-5xl text-primary mb-6 leading-tight">
                        {event.title}
                      </h3>

                      <p className="font-sans text-primary/70 leading-relaxed mb-6">
                        {event.description}
                      </p>

                      {!isPast && (
                        <button 
                          onClick={() => addToCalendar(event)}
                          className="text-xs font-sans uppercase tracking-[0.2em] border-b border-primary pb-1 hover:opacity-60 transition-opacity"
                        >
                          Aggiungi al calendario
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-32 text-center opacity-30 font-serif italic text-2xl">
          More to come...
        </div>
      </div>
    </motion.div>
  );
};

export default Events;
