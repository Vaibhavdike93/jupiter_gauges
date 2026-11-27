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

const VALID_PAGES = ['home', 'about', 'products', 'clients', 'contact', 'quote'];

function getPageFromUrl() {
  // 1. Check hash first (#about, #/about)
  const hash = window.location.hash.replace(/^#[/]?/, '').toLowerCase();
  if (VALID_PAGES.includes(hash)) {
    return hash;
  }

  // 2. Check query parameter (?p=/about or ?p=about)
  const searchParams = new URLSearchParams(window.location.search);
  const pParam = searchParams.get('p');
  if (pParam) {
    const cleanP = pParam.replace(/^[/]?/, '').toLowerCase();
    if (VALID_PAGES.includes(cleanP)) {
      return cleanP;
    }
  }

  // 3. Check pathname (/jupiter_gauges/about or /about)
  const pathSegments = window.location.pathname.split('/').filter(Boolean);
  const lastSegment = (pathSegments[pathSegments.length - 1] || '').toLowerCase();
  if (VALID_PAGES.includes(lastSegment)) {
    return lastSegment;
  }

  return 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState(getPageFromUrl);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState('');

  // Sync with browser URL changes (hash, popstate, decoder replaceState)
  useEffect(() => {
    const syncRoute = () => {
      setActivePage(getPageFromUrl());
    };

    window.addEventListener('hashchange', syncRoute);
    window.addEventListener('popstate', syncRoute);
    return () => {
      window.removeEventListener('hashchange', syncRoute);
      window.removeEventListener('popstate', syncRoute);
    };
  }, []);

  const navigateToPage = (page) => {
    setActivePage(page);
    window.location.hash = page === 'home' ? '' : page;
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
        {(activePage === 'home' || activePage === '/') && (
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
