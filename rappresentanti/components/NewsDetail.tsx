import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react';
import { NewsItem } from '../types';
import { isNewNews } from '../utils/dateHelpers';
import Footer from './Footer';

interface NewsDetailProps {
    news: NewsItem;
    onBack: () => void;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ news, onBack }) => {
    // Scroll to top when mounted
    // Scroll to top when mounted
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-paper overflow-y-auto no-scrollbar"
        >
            <div className="min-h-screen relative">
                {/* Header / Navigation */}
                <div className="sticky top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center bg-primary z-50 border-b border-paper/10">
                    <button
                        onClick={onBack}
                        className="group flex items-center gap-3 font-sans uppercase tracking-widest text-sm text-paper hover:opacity-60 transition-opacity"
                    >
                        <div className="p-2 border border-paper rounded-full group-hover:bg-paper group-hover:text-primary transition-colors">
                            <ArrowLeft size={20} />
                        </div>
                        Torna Indietro
                    </button>
                    <div className="hidden md:block font-serif italic text-xl text-paper">Rappresentanti. News</div>
                </div>

                {/* Article Content */}
                <article className="max-w-3xl mx-auto px-6 pt-12 pb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-4 mb-8 font-sans text-sm uppercase tracking-widest text-primary/60"
                    >
                        <div className="flex items-center gap-2">
                            <span className="flex items-center gap-2 border border-primary/20 px-3 py-1 rounded-full">
                                <Calendar size={14} /> {news.date}
                            </span>
                            {isNewNews(news.date) && (
                                <span className="bg-primary text-paper px-2 py-0.5 text-[0.6rem] font-bold rounded-full animate-pulse">
                                    NOVITÀ
                                </span>
                            )}
                        </div>
                        <span className="flex items-center gap-2 border border-primary/20 px-3 py-1 rounded-full">
                            <Tag size={14} /> {news.category}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="font-serif text-5xl md:text-7xl mb-8 md:mb-12 leading-[1.1] text-primary"
                    >
                        {news.title}
                    </motion.h1>

                    {news.author && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center gap-3 mb-12 border-l-2 border-primary/30 pl-4"
                        >
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <User size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-sans text-xs uppercase tracking-widest opacity-60">Scritto da</span>
                                <span className="font-serif text-lg">{news.author}</span>
                            </div>
                        </motion.div>
                    )}

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="font-sans text-xl md:text-2xl leading-relaxed opacity-90 space-y-6 news-content"
                        dangerouslySetInnerHTML={{ __html: news.content }}
                    />

                    <div className="mt-20 pt-10 border-t border-primary/10 flex justify-center">
                        <div className="font-sans text-3xl opacity-20">***</div>
                    </div>
                </article>
                <Footer />
            </div>
        </motion.div>
    );
};

export default NewsDetail;