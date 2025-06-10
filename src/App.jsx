// ✅ App.jsx com animações de página, suporte a menu mobile e tema dark/light
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Contato from './pages/Contato'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Servicos from './components/Servicos';
import PageWrapper from './components/PageWrapper';

export default function App() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-pearl text-prussian dark:bg-prussian dark:text-pearl">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                  <Servicos />
                  <About />
                  <Portfolio />
                  <Contato />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
