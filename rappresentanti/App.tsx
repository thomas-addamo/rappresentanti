import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import Goals from './components/Goals';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NewsDetail from './components/NewsDetail';
import NewsArchive from './components/NewsArchive';
import PrivacyPolicy from './components/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';
import { newsData } from './data/newsData';
import MerchModal from './components/MerchModal';
import MerchSection from './components/MerchSection';

type AppView = 'home' | 'archive' | 'article' | 'privacy';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('home');
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null);

  // Handle hash navigation for Privacy Policy
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#privacy-policy') {
        setView('privacy');
      } else if (view === 'privacy') {
        // Only go back to home if we were on privacy and hash changed to something else (or empty)
        setView('home');
      }
    };

    // Check on mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [view]);

  // Function to handle opening a specific news item
  const handleOpenNews = (id: number) => {
    setSelectedNewsId(id);
    setView('article');
  };

  // Function to handle opening the archive
  const handleOpenArchive = () => {
    setView('archive');
  };

  // Function to return to home
  const handleBackToHome = () => {
    if (view === 'privacy') {
      // Remove hash without triggering a reload, but trigger hashchange if needed or just update state
      history.pushState("", document.title, window.location.pathname + window.location.search);
      setView('home');
    } else {
      setView('home');
      setSelectedNewsId(null);
    }
  };

  // Find the selected news object based on ID
  const selectedNews = newsData.find(n => n.id === selectedNewsId);

  // Lock body scroll when a modal view is active
  useEffect(() => {
    if (view !== 'home') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [view]);

  return (
    <main className="antialiased selection:bg-primary selection:text-paper relative">
      {/* 
         We keep the Main Content rendered and visible to preserve scroll position.
         The sub-pages (article, archive, privacy) are fixed overlays that cover the content.
      */}

      <div>
        <Navbar />
        <Hero />
        <Team />
        <MerchSection />
        <Goals />
        <News onOpenNews={handleOpenNews} onOpenArchive={handleOpenArchive} />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>

      <AnimatePresence>
        {view === 'article' && selectedNews && (
          <NewsDetail
            key="detail"
            news={selectedNews}
            onBack={handleBackToHome}
          />
        )}

        {view === 'archive' && (
          <NewsArchive
            key="archive"
            onBack={handleBackToHome}
            onOpenNews={handleOpenNews}
          />
        )}

        {view === 'privacy' && (
          <PrivacyPolicy
            key="privacy"
            onBack={handleBackToHome}
          />
        )}
      </AnimatePresence>
      
      <MerchModal />
    </main>
  );
};

export default App;