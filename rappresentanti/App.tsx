import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CollettivoPage from './pages/CollettivoPage';
import ScrollToTop from './components/ScrollToTop';
import ScrollHandler from './components/ScrollHandler';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <ScrollToTop /> {/* Questo componente gestisce lo scroll on route change se configurato, altrimenti lo fa il browser di default in alcuni casi, ma meglio averlo */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collettivo" element={<CollettivoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;