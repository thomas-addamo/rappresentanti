import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Newspaper, ArrowRight } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsReminderProps {
  news: NewsItem;
  onDismiss: () => void;
  onOpenNews: (id: number) => void;
}

const NewsReminder: React.FC<NewsReminderProps> = ({ news, onDismiss, onOpenNews }) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className="bg-paper border-b border-primary/10 text-primary relative overflow-hidden z-[60] group/banner"
    >
      <div className="max-w-7xl mx-auto px-4 py-2.5 md:py-3.5 flex items-center justify-between gap-4 relative z-10">
        
        {/* Left: News Info */}
        <div 
          className="flex items-center gap-3 flex-1 min-w-0 cursor-pointer"
          onClick={() => onOpenNews(news.id)}
        >
          <div className="p-2 bg-primary/5 rounded-xl flex-shrink-0 group-hover/banner:bg-primary/10 transition-colors duration-300">
            <Newspaper size={20} className="text-primary" />
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 min-w-0">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-black leading-none opacity-60">
                Novità
              </span>
            </div>
            <span className="font-serif italic text-base md:text-xl leading-tight truncate text-primary group-hover/banner:translate-x-1 transition-transform duration-300">
              {news.title}
            </span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <button 
            onClick={() => onOpenNews(news.id)}
            className="hidden md:flex items-center gap-2 font-sans uppercase tracking-widest text-[10px] font-bold bg-primary text-paper px-4 py-2 hover:bg-primary/90 transition-all shadow-sm active:scale-95"
          >
            Leggi <ArrowRight size={14} />
          </button>
          
          <button 
            onClick={onDismiss}
            className="p-2 hover:bg-primary/5 rounded-full transition-colors opacity-40 hover:opacity-100 group/close"
          >
            <X size={20} className="group-hover/close:rotate-90 transition-transform duration-300" />
          </button>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      </div>
    </motion.div>
  );
};

export default NewsReminder;
