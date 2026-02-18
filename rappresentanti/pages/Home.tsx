import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Team from '../components/Team';
import Goals from '../components/Goals';
import News from '../components/News';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import NewsDetail from '../components/NewsDetail';
import NewsArchive from '../components/NewsArchive';
import PrivacyPolicy from '../components/PrivacyPolicy';
import CookiePolicy from '../components/CookiePolicy';
import ScrollToTop from '../components/ScrollToTop';
import { newsData } from '../data/newsData';
import { eventsData } from '../data/eventsData';

import Events from '../components/Events';
import EventReminder from '../components/EventReminder';
import NewsReminder from '../components/NewsReminder';
import CollettivoSection from '../components/CollettivoSection';
// CollettivoDetail rimosso da qui perché ora è una pagina separata
import { isNewNews } from '../utils/dateHelpers';

type HomeView = 'home' | 'archive' | 'article' | 'privacy' | 'cookie-policy' | 'events';

const Home: React.FC = () => {
  // Initialize view from hash to prevent flickering on first load
  const [view, setView] = useState<HomeView>(() => {
    const hash = window.location.hash;
    if (hash === '#privacy-policy') return 'privacy';
    if (hash === '#cookie-policy') return 'cookie-policy';
    if (hash === '#events') return 'events';
    return 'home';
  });
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Sync view status with URL hash
  useEffect(() => {
    const hash = location.hash;
    
    if (hash === '#privacy-policy') {
      if (view !== 'privacy') setView('privacy');
    } else if (hash === '#cookie-policy') {
      if (view !== 'cookie-policy') setView('cookie-policy');
    } else if (hash === '#events') {
      if (view !== 'events') setView('events');
    } else if (hash === '#collettivo') {
      if (view !== 'home') setView('home');
      setTimeout(() => {
          const el = document.getElementById('collettivo');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (hash === '' || hash === '#home') {
      if (view !== 'home' && view !== 'article' && view !== 'archive') setView('home');
    }
  }, [location.hash, view]);

  // Function to handle opening a specific news item
  const handleOpenNews = (id: number) => {
    setSelectedNewsId(id);
    setView('article');
  };

  // Function to handle opening the archive
  const handleOpenArchive = () => {
    setView('archive');
  };

  // Function to handle opening events
  const handleOpenEvents = () => {
    setView('events');
  };

  // Function to handle opening Collettivo (Redirect to new page)
  const handleOpenCollettivoPage = () => {
    // Apri in nuova scheda come richiesto ("scheda esterna")
    window.open('/collettivo', '_blank');
  };

  const handleScrollToCollettivoSection = () => {
      const el = document.getElementById('collettivo');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to return to home view
  const handleBackToHomeView = () => {
    if (view === 'article' || view === 'archive') {
      setView('home');
      setSelectedNewsId(null);
    } else {
      // For hash-based views (privacy, cookie, events), just remove the hash
      navigate(location.pathname, { replace: true });
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

  // Event Reminder Logic
  const [upcomingEvent, setUpcomingEvent] = useState<typeof eventsData[0] | null>(null);
  const [showReminder, setShowReminder] = useState(false);

  useEffect(() => {
    const now = new Date();
    const futureEvents = eventsData
      .filter(e => new Date(e.date) > now)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    if (futureEvents.length > 0) {
      const event = futureEvents[0];
      const eventDate = new Date(event.date);
      const diff = eventDate.getTime() - now.getTime();
      const daysUntil = diff / (1000 * 60 * 60 * 24);

      if (daysUntil <= 7) {
        setUpcomingEvent(event);
        setShowReminder(true);
      }
    }
  }, []);

  // News Reminder Logic
  const [latestNewNews, setLatestNewNews] = useState<typeof newsData[0] | null>(null);
  const [showNewsReminder, setShowNewsReminder] = useState(false);

  useEffect(() => {
    // Find the latest news item and check if it's "new"
    const latestNews = newsData[0]; // Assuming newsData is sorted by date descending
    if (latestNews && isNewNews(latestNews.date)) {
      setLatestNewNews(latestNews);
      setShowNewsReminder(true);
    }
  }, []);

  return (
    <div className="min-h-screen relative antialiased selection:bg-primary selection:text-paper">
      <div className="fixed top-0 left-0 w-full z-50 flex flex-col">
        <AnimatePresence>
          {showReminder && upcomingEvent && view === 'home' && (
            <EventReminder 
              event={upcomingEvent}
              onDismiss={() => setShowReminder(false)}
            />
          )}
          {showNewsReminder && latestNewNews && view === 'home' && (
            <NewsReminder 
              news={latestNewNews}
              onDismiss={() => setShowNewsReminder(false)}
              onOpenNews={handleOpenNews}
            />
          )}
        </AnimatePresence>
        {/* Navbar in Home: scrolla alla sezione collettivo */}
        <Navbar 
            onOpenEvents={handleOpenEvents} 
            onOpenCollettivo={handleScrollToCollettivoSection} 
        />
      </div>

      <div>
        <Hero />
        <Team />
        {/* CollettivoSection: ID per lo scroll, e pulsante che apre la pagina esterna */}
        <div id="collettivo">
            <CollettivoSection onOpen={handleOpenCollettivoPage} />
        </div>
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
            onBack={handleBackToHomeView}
          />
        )}

        {view === 'archive' && (
          <NewsArchive
            key="archive"
            onBack={handleBackToHomeView}
            onOpenNews={handleOpenNews}
          />
        )}

        {view === 'privacy' && (
          <PrivacyPolicy
            key="privacy"
            onBack={handleBackToHomeView}
          />
        )}

        {view === 'cookie-policy' && (
          <CookiePolicy
            key="cookie-policy"
            onBack={handleBackToHomeView}
          />
        )}
        
        {view === 'events' && (
          <Events
            key="events"
            onBack={handleBackToHomeView}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
