import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import Home from './pages/Home';
import CollettivoPage from './pages/CollettivoPage';
import ScrollToTop from './components/ScrollToTop';
import ScrollHandler from './components/ScrollHandler';
import CookieBanner, { hasAnalyticsConsent } from './components/CookieBanner';

const ConditionalAnalytics: React.FC = () => {
  const [enabled, setEnabled] = useState(hasAnalyticsConsent());

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setEnabled(detail?.analytics === true);
    };
    window.addEventListener('consent-updated', handler);
    return () => window.removeEventListener('consent-updated', handler);
  }, []);

  if (!enabled) return null;
  return <Analytics />;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collettivo" element={<CollettivoPage />} />
      </Routes>
      <ConditionalAnalytics />
      <CookieBanner />
    </BrowserRouter>
  );
};

export default App;