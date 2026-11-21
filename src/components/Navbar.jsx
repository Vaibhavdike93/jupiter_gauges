import React, { useState } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  FileText,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/products';
import { COMPANY_INFO } from '../data/company';

export default function Navbar({ activePage, setActivePage, onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products', hasDropdown: true },
    { id: 'clients', label: 'Clients' },
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
    <header style={{ position: 'sticky', top: 0, zIndex: 900 }}>
      {/* Top Corporate Strip */}
      <div style={{
        backgroundColor: '#1E2124',
        color: '#9EABB5',
        fontSize: '0.775rem',
        padding: '6px 0',
        borderBottom: '1px solid #363B40'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}></div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Phone size={12} color="var(--color-primary-yellow)" />
              {COMPANY_INFO.contact.phonePrimary}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Mail size={12} color="var(--color-primary-yellow)" />
              {COMPANY_INFO.contact.emailSales}
            </span>
          </div>
        </div>
      </div>

      {/* Main Corporate Navbar */}
      <nav style={{
        backgroundColor: 'var(--color-charcoal)',
        borderBottom: '1px solid #3A3F44',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '66px'
        }}>
          {/* Logo Mark & Name */}
          <button
            onClick={() => handleNavClick('home')}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', textAlign: 'left', padding: 0 }}
            aria-label="Jupiter Gauges Home"
          >
            <div style={{
              width: '36px',
              height: '36px',
              backgroundColor: 'var(--color-primary-yellow)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#292D30" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" strokeDasharray="3 2" />
                <circle cx="12" cy="12" r="4" fill="#292D30" />
                <line x1="12" y1="2" x2="12" y2="5" />
                <line x1="12" y1="19" x2="12" y2="22" />
                <line x1="2" y1="12" x2="5" y2="12" />
                <line x1="19" y1="12" x2="22" y2="12" />
              </svg>
            </div>
            <div>
              <div style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                letterSpacing: '-0.01em',
                color: 'var(--color-white)',
                lineHeight: 1.15
              }}>
                JUPITER <span style={{ color: 'var(--color-primary-yellow)' }}>GAUGES</span>
              </div>
              <div style={{
                fontFamily: 'var(--font-primary)',
                fontSize: '0.625rem',
                fontWeight: '500',
                color: '#9BA3AB',
                letterSpacing: '0.06em',
                textTransform: 'uppercase'
              }}>
                Precision Measuring Instruments
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="nav-desktop">
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
                    fontSize: '0.875rem',
                    fontWeight: activePage === item.id ? '600' : '500',
                    letterSpacing: '-0.005em',
                    color: activePage === item.id ? 'var(--color-primary-yellow)' : '#ECEFF1',
                    padding: '8px 2px',
                    borderBottom: activePage === item.id ? '2px solid var(--color-primary-yellow)' : '2px solid transparent',
                    transition: 'color var(--transition-fast)'
                  }}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown size={14} style={{
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
                    left: '0',
                    width: '280px',
                    backgroundColor: '#1E2124',
                    border: '1px solid #3E444A',
                    borderRadius: 'var(--radius-sm)',
                    boxShadow: 'var(--shadow-lg)',
                    padding: '8px',
                    zIndex: 950
                  }}>
                    <div style={{
                      fontSize: '0.6875rem',
                      fontFamily: 'var(--font-primary)',
                      fontWeight: '600',
                      color: 'var(--color-primary-yellow)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      padding: '6px 10px',
                      borderBottom: '1px solid #2F343A',
                      marginBottom: '4px'
                    }}>
                      Gauging Products
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
                          padding: '7px 10px',
                          borderRadius: 'var(--radius-xs)',
                          color: '#E0E5EA',
                          fontSize: '0.8125rem',
                          transition: 'background-color var(--transition-fast)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#2D3237';
                          e.currentTarget.style.color = 'var(--color-primary-yellow)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#E0E5EA';
                        }}
                      >
                        <span>{cat.name}</span>
                        <ArrowRight size={12} opacity={0.6} />
                      </button>
                    ))}
                    <div style={{ marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #2F343A' }}>
                      <button
                        onClick={() => handleNavClick('products')}
                        style={{
                          width: '100%',
                          textAlign: 'center',
                          padding: '6px',
                          color: 'var(--color-primary-yellow)',
                          fontSize: '0.75rem',
                          fontWeight: '600'
                        }}
                      >
                        View Full Catalogue →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Header CTA */}
          <div className="nav-cta-desktop">
            <button
              onClick={() => onOpenQuote()}
              className="btn btn-primary btn-sm"
              style={{ fontWeight: '600' }}
            >
              <FileText size={14} />
              Enquire Now
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="nav-mobile-toggle" style={{ alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => onOpenQuote()}
              className="btn btn-primary btn-sm"
              style={{ fontSize: '0.75rem', padding: '6px 10px' }}
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: '#353A3E',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '66px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#1E2124',
          zIndex: 899,
          padding: '20px',
          overflowY: 'auto'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: activePage === item.id ? '#2D3237' : 'transparent',
                  color: activePage === item.id ? 'var(--color-primary-yellow)' : '#FFFFFF',
                  fontSize: '1rem',
                  fontWeight: '600',
                  textAlign: 'left',
                  borderLeft: activePage === item.id ? '3px solid var(--color-primary-yellow)' : '3px solid transparent'
                }}
              >
                <span>{item.label}</span>
                <ArrowRight size={16} opacity={0.5} />
              </button>
            ))}

            <div style={{ margin: '12px 0', borderTop: '1px solid #363B40' }} />

            <div style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-primary)',
              fontWeight: '600',
              color: '#8E96A0',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '6px',
              paddingLeft: '4px'
            }}>
              Product Categories
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              {PRODUCT_CATEGORIES.slice(1).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleNavClick('products', cat.id)}
                  style={{
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: '#262A2E',
                    color: '#C5CBD2',
                    fontSize: '0.78rem',
                    textAlign: 'left'
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div style={{ marginTop: '20px' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px' }}
              >
                <FileText size={16} />
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
