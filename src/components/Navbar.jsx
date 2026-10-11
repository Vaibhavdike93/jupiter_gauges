import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  FileText, 
  Phone, 
  ArrowRight,
  ShieldCheck,
  Disc,
  CircleDot
} from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/products';
import { COMPANY_INFO } from '../data/company';

export default function Navbar({ activePage, setActivePage, onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products', hasDropdown: true },
    { id: 'clients', label: 'Clients & Industries' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (pageId, categoryId = null) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    setProductDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (categoryId && window.filterProductCategory) {
      window.filterProductCategory(categoryId);
    }
  };

  return (
    <>
      {/* Top Industrial Quality Strip */}
      <div style={{
        backgroundColor: '#1A1D20',
        color: '#A0A7AF',
        fontSize: '0.75rem',
        padding: '6px 0',
        borderBottom: '1px solid #2E3236',
        fontFamily: 'var(--font-mono)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2E7D32', display: 'inline-block' }} />
              20°C Stabilized Metrology Lab
            </span>
            <span style={{ display: 'none', md: 'inline' }}>| ISO / DIN / IS Compliant Standards</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Inquiry: {COMPANY_INFO.contact.phonePrimary}</span>
            <span>Email: {COMPANY_INFO.contact.emailSales}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 900,
        backgroundColor: isScrolled ? 'rgba(37, 40, 43, 0.98)' : 'rgba(37, 40, 43, 0.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: isScrolled ? '1px solid #3D4247' : '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: isScrolled ? '0 8px 24px rgba(0,0,0,0.3)' : 'none',
        transition: 'all var(--transition-normal)'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px'
        }}>
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left', padding: 0 }}
            aria-label="Jupiter Gauges Home"
          >
            {/* Precision Caliper Gauge Logo Mark */}
            <div style={{
              width: '42px',
              height: '42px',
              backgroundColor: 'var(--color-primary-yellow)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(244, 196, 48, 0.4)'
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#25282B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" strokeDasharray="3 2" />
                <circle cx="12" cy="12" r="4" fill="#25282B" />
                <line x1="12" y1="2" x2="12" y2="5" />
                <line x1="12" y1="19" x2="12" y2="22" />
                <line x1="2" y1="12" x2="5" y2="12" />
                <line x1="19" y1="12" x2="22" y2="12" />
              </svg>
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.45rem',
                fontWeight: '800',
                letterSpacing: '-0.02em',
                color: 'var(--color-text-white)',
                lineHeight: 1.1
              }}>
                JUPITER <span style={{ color: 'var(--color-primary-yellow)' }}>GAUGES</span>
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: '#9EABB5',
                letterSpacing: '0.12em',
                textTransform: 'uppercase'
              }}>
                Precision Gauging Systems
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'none', lg: 'flex', alignItems: 'center', gap: '32px' }}>
            {navItems.map((item) => (
              <div 
                key={item.id} 
                style={{ position: 'relative' }}
                onMouseEnter={() => item.hasDropdown && setProductDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setProductDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.95rem',
                    fontWeight: activePage === item.id ? '700' : '500',
                    color: activePage === item.id ? 'var(--color-primary-yellow)' : '#ECEFF1',
                    padding: '8px 0',
                    borderBottom: activePage === item.id ? '2px solid var(--color-primary-yellow)' : '2px solid transparent',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown size={15} style={{ 
                      transition: 'transform var(--transition-fast)',
                      transform: productDropdownOpen ? 'rotate(180deg)' : 'rotate(0)'
                    }} />
                  )}
                </button>

                {/* Dropdown Menu for Products */}
                {item.hasDropdown && productDropdownOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-20px',
                    width: '320px',
                    backgroundColor: '#1E2124',
                    border: '1px solid #3D4247',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-xl)',
                    padding: '12px',
                    zIndex: 950,
                    animation: 'fadeIn 180ms ease-out'
                  }}>
                    <div style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--color-primary-yellow)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      padding: '6px 12px',
                      borderBottom: '1px solid #2E3236',
                      marginBottom: '6px'
                    }}>
                      Product Categories
                    </div>
                    {PRODUCT_CATEGORIES.slice(1).map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleNavClick('products', cat.id)}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '8px 12px',
                          borderRadius: 'var(--radius-md)',
                          color: '#E0E5EA',
                          fontSize: '0.875rem',
                          fontFamily: 'var(--font-body)',
                          transition: 'background var(--transition-fast)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#2C3136';
                          e.currentTarget.style.color = 'var(--color-primary-yellow)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#E0E5EA';
                        }}
                      >
                        <span>{cat.name}</span>
                        <ArrowRight size={13} opacity={0.6} />
                      </button>
                    ))}
                    <div style={{
                      marginTop: '8px',
                      paddingTop: '8px',
                      borderTop: '1px solid #2E3236'
                    }}>
                      <button
                        onClick={() => handleNavClick('products')}
                        style={{
                          width: '100%',
                          textAlign: 'center',
                          padding: '8px',
                          backgroundColor: 'rgba(244, 196, 48, 0.1)',
                          color: 'var(--color-primary-yellow)',
                          fontSize: '0.8125rem',
                          fontWeight: '600',
                          borderRadius: 'var(--radius-sm)'
                        }}
                      >
                        View Full Catalogue & Specifications
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Header CTAs */}
          <div style={{ display: 'none', lg: 'flex', alignItems: 'center', gap: '16px' }}>
            <button 
              onClick={() => onOpenQuote()}
              className="btn btn-primary"
              style={{ fontWeight: '700' }}
            >
              <FileText size={16} />
              Request a Quote
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div style={{ display: 'flex', lg: 'none', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => onOpenQuote()}
              className="btn btn-primary btn-sm"
              style={{ fontSize: '0.8rem', padding: '7px 12px' }}
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: '#32363B',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slideout Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '76px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(26, 29, 32, 0.98)',
          backdropFilter: 'blur(12px)',
          zIndex: 899,
          padding: '24px',
          overflowY: 'auto',
          animation: 'fadeIn 200ms ease-out'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: activePage === item.id ? '#2E3236' : 'transparent',
                  color: activePage === item.id ? 'var(--color-primary-yellow)' : '#FFFFFF',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  fontWeight: '600',
                  textAlign: 'left'
                }}
              >
                <span>{item.label}</span>
                <ArrowRight size={18} color="var(--color-primary-yellow)" />
              </button>
            ))}

            <div style={{ margin: '16px 0', borderTop: '1px solid #3D4247' }} />

            <div style={{
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              color: '#8A94A0',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '8px'
            }}>
              Direct Product Categories
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {PRODUCT_CATEGORIES.slice(1).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleNavClick('products', cat.id)}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '6px',
                    backgroundColor: '#26292D',
                    color: '#D0D6DC',
                    fontSize: '0.8rem',
                    textAlign: 'left'
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div style={{ marginTop: '24px' }}>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="btn btn-primary"
                style={{ width: '100%', padding: '16px' }}
              >
                <FileText size={18} />
                Request Technical Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
