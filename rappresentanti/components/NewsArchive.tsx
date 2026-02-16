import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Search, X } from 'lucide-react';
import { newsData } from '../data/newsData';
import { isNewNews } from '../utils/dateHelpers';
import Footer from './Footer';

interface NewsArchiveProps {
  onBack: () => void;
  onOpenNews: (id: number) => void;
}

const NewsArchive: React.FC<NewsArchiveProps> = ({ onBack, onOpenNews }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

  // Debounce logic: wait 400ms after last keystroke
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 400);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const filteredNews = useMemo(() => {
    return newsData.filter((news) => {
      const query = debouncedSearchQuery.toLowerCase();
      return (
        news.title.toLowerCase().includes(query) ||
        news.excerpt.toLowerCase().includes(query) ||
        news.category.toLowerCase().includes(query) ||
        news.content.toLowerCase().includes(query)
      );
    });
  }, [debouncedSearchQuery]);

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
          <div className="w-full md:w-auto">
            <button
              onClick={onBack}
              className="mb-8 flex items-center gap-2 font-sans uppercase tracking-widest text-sm text-primary hover:opacity-60 transition-opacity"
            >
              <ArrowLeft size={16} /> Torna alla Home
            </button>
            <h1 className="font-serif text-6xl md:text-9xl text-primary mb-8 md:mb-0">Archivio</h1>
          </div>
          
          <div className="w-full md:w-96 flex flex-col items-end gap-4">
            <div className="relative w-full group flex items-center">
              <Search 
                className="absolute left-5 text-primary/40 group-focus-within:text-primary transition-colors pointer-events-none" 
                size={20} 
              />
              <input
                type="text"
                placeholder="Cerca tra le news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 bg-primary/5 border border-primary/10 rounded-full pl-14 pr-14 font-sans text-primary placeholder:text-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-lg"
              />
              <AnimatePresence>
                {searchQuery && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 w-10 h-10 flex items-center justify-center text-primary/40 hover:text-primary transition-colors rounded-full hover:bg-primary/10"
                  >
                    <X size={20} />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
            <div className="font-sans text-primary/60 uppercase tracking-widest text-xs px-4">
              {filteredNews.length === newsData.length 
                ? `${newsData.length} Articoli totali`
                : `${filteredNews.length} Risultati trovati`}
            </div>
          </div>
        </div>

        {/* List */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col"
          key={debouncedSearchQuery} // Re-animate list when search actually updates
        >
          {filteredNews.length > 0 ? (
            filteredNews.map((news) => (
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
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-32 text-center"
            >
              <Search size={48} className="mx-auto mb-6 text-primary/20" />
              <h3 className="font-serif text-3xl text-primary mb-2">Nessun risultato</h3>
              <p className="font-sans text-primary/60">Prova a cercare con parole chiave diverse.</p>
            </motion.div>
          )}
          <div className="border-t border-primary/20 w-full"></div>
        </motion.div>

        {filteredNews.length > 0 && (
          <div className="mt-24 text-center font-sans opacity-40 text-sm uppercase tracking-widest pb-24">
            Fine dell'archivio
          </div>
        )}
      </div>
      <Footer />
    </motion.div>
  );
};

export default NewsArchive;