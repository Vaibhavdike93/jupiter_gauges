import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import FloatingContactButtons from './components/FloatingContactButtons';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Quote from './pages/Quote';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState('');

  // Sync with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'products', 'clients', 'contact', 'quote'].includes(hash)) {
        setActivePage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (page) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (productName = '') => {
    setQuoteProduct(productName || '');
    setIsQuoteModalOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Bar */}
      <Navbar
        activePage={activePage}
        setActivePage={navigateToPage}
        onOpenQuote={handleOpenQuote}
      />

      {/* Main Page Content */}
      <main style={{ flex: 1 }}>
        {activePage === '/' && (
          <Home
            setActivePage={navigateToPage}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {activePage === 'about' && (
          <About
            setActivePage={navigateToPage}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {activePage === 'products' && (
          <Products
            setActivePage={navigateToPage}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {activePage === 'clients' && (
          <Clients
            setActivePage={navigateToPage}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {activePage === 'contact' && (
          <Contact
            setActivePage={navigateToPage}
            onOpenQuote={handleOpenQuote}
            preselectedProduct={quoteProduct}
          />
        )}

        {activePage === 'quote' && (
          <Quote
            setActivePage={navigateToPage}
            onOpenQuote={handleOpenQuote}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={navigateToPage}
        onOpenQuote={handleOpenQuote}
      />

      {/* Universal Quote / RFQ Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedProduct={quoteProduct}
      />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingContactButtons />
    </div>
  );
}
