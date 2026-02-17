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
import ScrollToTop from '../components/ScrollToTop';
import { newsData } from '../data/newsData';
import { eventsData } from '../data/eventsData';

import Events from '../components/Events';
import EventReminder from '../components/EventReminder';
import NewsReminder from '../components/NewsReminder';
import CollettivoSection from '../components/CollettivoSection';
// CollettivoDetail rimosso da qui perché ora è una pagina separata
import { isNewNews } from '../utils/dateHelpers';

type HomeView = 'home' | 'archive' | 'article' | 'privacy' | 'events';

const Home: React.FC = () => {
  const [view, setView] = useState<HomeView>('home');
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Handle hash navigation
  useEffect(() => {
    const hash = location.hash;
    if (hash === '#privacy-policy') {
      setView('privacy');
    } else if (hash === '#events') {
      setView('events');
    } else if (hash === '' || hash === '#home') {
      setView('home');
    } else if (hash === '#collettivo') {
        // Se arriviamo con hash collettivo ma siamo in home, scrolliamo alla sezione
        setView('home');
        setTimeout(() => {
            const el = document.getElementById('collettivo');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
  }, [location]);

  // Sync state transitions to URL hash for better UX
  useEffect(() => {
    if (view === 'privacy' && location.hash !== '#privacy-policy') navigate('#privacy-policy');
    if (view === 'events' && location.hash !== '#events') navigate('#events');
    if (view === 'home' && location.hash !== '' && location.hash !== '#home' && location.hash !== '#collettivo') {
      // Clean hash
      navigate(location.pathname, { replace: true });
    }
  }, [view, navigate, location.hash, location.pathname]);

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
    setView('home');
    setSelectedNewsId(null);
    navigate('/', { replace: true });
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
    <div className="antialiased selection:bg-primary selection:text-paper relative">
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

      <AnimatePresence mode="wait">
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
