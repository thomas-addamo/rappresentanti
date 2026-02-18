import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const toggleVisibility = () => {
            // Hide if scrolled down > 500 AND the body is not locked (no modal open)
            // We check the body overflow style which is set by Home.tsx when a modal opens
            const isBodyLocked = document.body.style.overflow === 'hidden';
            
            if (window.scrollY > 500 && !isBodyLocked) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        
        // Use a MutationObserver to watch for body style changes (like overflow: hidden)
        const observer = new MutationObserver(toggleVisibility);
        observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });

        // Also toggle on location change just in case
        toggleVisibility();

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            observer.disconnect();
        };
    }, [location.hash]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3, ease: "backOut" }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 left-8 z-[100] p-3 bg-primary text-paper rounded-full shadow-lg hover:bg-primary/90 transition-colors mix-blend-normal border border-paper/20"
                    aria-label="Torna su"
                >
                    <ArrowUp size={24} strokeWidth={2} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
