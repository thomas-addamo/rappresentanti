import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { newsData } from '../data/newsData';
import { isNewNews } from '../utils/dateHelpers';

interface NewsArchiveProps {
  onBack: () => void;
  onOpenNews: (id: number) => void;
}

const NewsArchive: React.FC<NewsArchiveProps> = ({ onBack, onOpenNews }) => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[60] bg-paper-dark overflow-y-auto no-scrollbar"
    >
      <div className="min-h-screen px-6 py-12 md:p-24 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <button
              onClick={onBack}
              className="mb-8 flex items-center gap-2 font-sans uppercase tracking-widest text-sm text-primary hover:opacity-60 transition-opacity"
            >
              <ArrowLeft size={16} /> Torna alla Home
            </button>
            <h1 className="font-serif text-6xl md:text-9xl text-primary">Archivio</h1>
          </div>
          <div className="font-sans text-primary/60 uppercase tracking-widest">
            {newsData.length} Articoli totali
          </div>
        </div>

        {/* List */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col"
        >
          {newsData.map((news) => (
            <motion.div
              key={news.id}
              variants={itemAnim}
              onClick={() => onOpenNews(news.id)}
              className="group border-t border-primary/20 py-8 md:py-12 cursor-pointer hover:bg-primary/5 transition-colors -mx-4 px-4 md:-mx-8 md:px-8 rounded-xl"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                <div className="w-32 font-sans text-sm uppercase tracking-widest opacity-60 shrink-0 flex flex-col gap-1">
                  <span>{news.date}</span>
                  {isNewNews(news.date) && (
                    <span className="text-primary font-bold text-[0.6rem] border border-primary px-1 w-fit rounded animate-pulse">
                      NOVITÀ
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-3xl md:text-5xl text-primary mb-2 group-hover:italic transition-all">
                    {news.title}
                  </h2>
                  <div className="flex items-center gap-4 mt-2 opacity-0 group-hover:opacity-60 transition-opacity transform -translate-x-4 group-hover:translate-x-0 duration-300 font-sans text-sm uppercase tracking-widest">
                    <span>{news.category}</span>
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    <span className="flex items-center gap-1">Leggi <ArrowUpRight size={14} /></span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-primary/20 w-full"></div>
        </motion.div>

        {/* Footer for Archive */}
        <div className="mt-24 text-center font-sans opacity-40 text-sm uppercase tracking-widest">
          Fine dell'archivio
        </div>
      </div>
    </motion.div>
  );
};

export default NewsArchive;