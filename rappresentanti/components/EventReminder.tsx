import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EventItem } from '../data/eventsData';
import { Clock, X, CalendarDays } from 'lucide-react';

interface EventReminderProps {
  event: EventItem;
  onDismiss: () => void;
}

const EventReminder: React.FC<EventReminderProps> = ({ event, onDismiss }) => {
  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number, seconds: number} | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const eventDate = new Date(event.date);
      const diff = eventDate.getTime() - now.getTime();

      if (diff <= 0) {
        onDismiss(); // Auto dismiss if passed
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [event, onDismiss]);

  if (!timeLeft) return null;

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className="bg-gradient-to-r from-primary via-[#6f0009] to-primary text-paper relative overflow-hidden z-[60]"
    >
      <div className="max-w-7xl mx-auto px-4 py-2 md:py-3 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 relative z-10">
        
        {/* Left: Event Info */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-3">
             <div className="p-1.5 bg-white/10 rounded-lg animate-pulse">
              <CalendarDays size={18} className="text-white" />
            </div>
            <div className="text-left">
              <span className="flex items-center gap-2 text-[10px] font-sans uppercase tracking-widest opacity-80 leading-none mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>
                Prossimo Evento
              </span>
              <span className="font-serif italic text-base md:text-lg leading-none block text-white text-shadow-sm">
                {event.title}
              </span>
            </div>
          </div>
          
          {/* Mobile Close Button (Visible only on mobile for UX) */}
          <button 
             onClick={onDismiss}
             className="md:hidden p-1.5 hover:bg-white/10 rounded-full transition-colors opacity-80"
          >
             <X size={18} />
          </button>
        </div>

        {/* Center/Right: Countdown */}
        <div className="flex items-center gap-1 md:gap-2">
          {/* Days */}
          <div className="flex flex-col items-center bg-black/20 backdrop-blur-md rounded-lg py-1.5 px-2 md:py-2 md:px-3 border border-white/10 shadow-inner min-w-[50px] md:min-w-[70px]">
            <span className="font-mono text-xl md:text-2xl font-bold leading-none tabular-nums tracking-tight text-white mb-0.5 shadow-sm">
              {timeLeft.days}
            </span>
            <span className="text-[8px] md:text-[9px] font-sans uppercase opacity-60 tracking-[0.2em]">Days</span>
          </div>
          
          <div className="text-white/20 text-lg font-light pb-4 hidden md:block">:</div>
          
          {/* Hours */}
          <div className="flex flex-col items-center bg-black/20 backdrop-blur-md rounded-lg py-1.5 px-2 md:py-2 md:px-3 border border-white/10 shadow-inner min-w-[50px] md:min-w-[70px]">
             <span className="font-mono text-xl md:text-2xl font-bold leading-none tabular-nums tracking-tight text-white mb-0.5 shadow-sm">
              {timeLeft.hours.toString().padStart(2, '0')}
            </span>
            <span className="text-[8px] md:text-[9px] font-sans uppercase opacity-60 tracking-[0.2em]">Hrs</span>
          </div>

          <div className="text-white/20 text-lg font-light pb-4 hidden md:block">:</div>

          {/* Minutes */}
          <div className="flex flex-col items-center bg-black/20 backdrop-blur-md rounded-lg py-1.5 px-2 md:py-2 md:px-3 border border-white/10 shadow-inner min-w-[50px] md:min-w-[70px]">
             <span className="font-mono text-xl md:text-2xl font-bold leading-none tabular-nums tracking-tight text-white mb-0.5 shadow-sm">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </span>
            <span className="text-[8px] md:text-[9px] font-sans uppercase opacity-60 tracking-[0.2em]">Mins</span>
          </div>

          <div className="text-white/20 text-lg font-light pb-4 hidden md:block">:</div>

          {/* Seconds */}
          <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-lg py-1.5 px-2 md:py-2 md:px-3 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] min-w-[50px] md:min-w-[70px]">
             <span className="font-mono text-xl md:text-2xl font-bold leading-none tabular-nums tracking-tight text-white mb-0.5 shadow-sm">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </span>
            <span className="text-[8px] md:text-[9px] font-sans uppercase opacity-90 tracking-[0.2em] text-white">Secs</span>
          </div>
        </div>

        {/* Desktop Close Button */}
        <button 
          onClick={onDismiss}
          className="hidden md:block p-1.5 hover:bg-white/10 rounded-full transition-colors opacity-60 hover:opacity-100"
        >
          <X size={18} />
        </button>
      </div>
      
      {/* Decorative Shine Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
    </motion.div>
  );
};
export default EventReminder;
