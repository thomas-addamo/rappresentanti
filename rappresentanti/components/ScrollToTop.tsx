import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    });

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
                    className="fixed bottom-8 left-8 z-40 p-3 bg-primary text-paper rounded-full shadow-lg hover:bg-primary/90 transition-colors mix-blend-difference"
                    aria-label="Torna su"
                >
                    <ArrowUp size={24} strokeWidth={2} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
