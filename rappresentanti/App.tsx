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
import { eventsData } from './data/eventsData';

import Events from './components/Events';
import EventReminder from './components/EventReminder';
import CollettivoSection from './components/CollettivoSection';
import CollettivoDetail from './components/CollettivoDetail';

type AppView = 'home' | 'archive' | 'article' | 'privacy' | 'events' | 'collettivo';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('home');
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null);

  // Handle hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy-policy') {
        setView('privacy');
      } else if (hash === '#collettivo') {
        setView('collettivo');
      } else if (hash === '#events') {
        setView('events');
      } else if (hash === '' || hash === '#home') {
        setView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync state transitions to URL hash for better UX
  useEffect(() => {
    const hash = window.location.hash;
    if (view === 'privacy' && hash !== '#privacy-policy') window.location.hash = 'privacy-policy';
    if (view === 'collettivo' && hash !== '#collettivo') window.location.hash = 'collettivo';
    if (view === 'events' && hash !== '#events') window.location.hash = 'events';
    if (view === 'home' && hash !== '' && hash !== '#home') {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
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

  // Function to handle opening events
  const handleOpenEvents = () => {
    setView('events');
  };

  // Function to handle opening Collettivo
  const handleOpenCollettivo = () => {
    setView('collettivo');
  };

  // Function to return to home
  const handleBackToHome = () => {
    setView('home');
    setSelectedNewsId(null);
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

  return (
    <main className="antialiased selection:bg-primary selection:text-paper relative">
      {/* 
         Fixed Header Wrapper:
         Contains the dismissible Reminder and the Navbar.
         This ensures the Navbar is always positioned correctly relative to the Reminder.
      */}
      <div className="fixed top-0 left-0 w-full z-50 flex flex-col">
        <AnimatePresence>
          {showReminder && upcomingEvent && view === 'home' && (
            <EventReminder 
              event={upcomingEvent}
              onDismiss={() => setShowReminder(false)}
            />
          )}
        </AnimatePresence>
        <Navbar onOpenEvents={handleOpenEvents} onOpenCollettivo={handleOpenCollettivo} />
      </div>

      <div>
        <Hero />
        <Team />
        <CollettivoSection onOpen={handleOpenCollettivo} />
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
        
        {view === 'events' && (
          <Events
            key="events"
            onBack={handleBackToHome}
          />
        )}

        {view === 'collettivo' && (
          <CollettivoDetail
            key="collettivo"
            onBack={handleBackToHome}
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;