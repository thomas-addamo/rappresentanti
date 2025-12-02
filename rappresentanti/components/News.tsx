import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { newsData } from '../data/newsData';

interface NewsProps {
  onOpenNews: (id: number) => void;
  onOpenArchive: () => void;
}

const News: React.FC<NewsProps> = ({ onOpenNews, onOpenArchive }) => {
  // Take only the first 3 items (or featured items)
  const displayedNews = newsData.slice(0, 3);

  return (
    <section id="news" className="py-24 px-6 md:px-12 bg-paper-dark text-primary relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-primary/20 pb-8">
            <h2 className="font-serif text-5xl md:text-7xl">Ultime News</h2>
            <button 
                onClick={onOpenArchive}
                className="hidden md:flex items-center gap-2 font-sans uppercase tracking-widest text-sm border border-primary px-6 py-3 hover:bg-primary hover:text-paper transition-all group"
            >
                Vedi archivio
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform"/>
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayedNews.map((item, index) => (
                <motion.div 
                    key={item.id} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => onOpenNews(item.id)}
                    className="group cursor-pointer flex flex-col h-full justify-between"
                >
                    <div>
                        <div className="border-t border-primary/80 pt-4 flex justify-between font-sans text-xs uppercase tracking-widest mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                            <span className="bg-primary/10 px-2 py-1 rounded">{item.category}</span>
                            <span className="py-1">{item.date}</span>
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl mb-4 leading-tight group-hover:italic transition-all duration-300 decoration-primary underline-offset-4 group-hover:underline">
                            {item.title}
                        </h3>
                        <p className="font-sans text-primary/70 line-clamp-3 leading-relaxed mb-6">
                            {item.excerpt}
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-widest opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        Leggi <ArrowRight size={14} />
                    </div>
                </motion.div>
            ))}
        </div>
        
        <button 
            onClick={onOpenArchive}
            className="md:hidden mt-12 w-full font-sans uppercase tracking-widest text-sm border border-primary px-6 py-3 hover:bg-primary hover:text-paper transition-all flex justify-center items-center gap-2"
        >
            Vedi archivio <ArrowRight size={16}/>
        </button>
      </div>
    </section>
  );
};

export default News;