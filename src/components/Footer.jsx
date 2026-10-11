import React from 'react';
import { 
  ArrowUp, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Award,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { PRODUCT_CATEGORIES } from '../data/products';

export default function Footer({ setActivePage, onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (pageId, categoryId = null) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (categoryId && window.filterProductCategory) {
      window.filterProductCategory(categoryId);
    }
  };

  return (
    <footer style={{
      backgroundColor: '#1E2124',
      color: '#B0B8C0',
      borderTop: '3px solid var(--color-primary-yellow)',
      position: 'relative'
    }}>
      {/* Upper Pre-Footer Callout Bar */}
      <div style={{
        backgroundColor: '#151719',
        padding: '32px 0',
        borderBottom: '1px solid #2B2F34'
      }}>
        <div className="container" style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#FFFFFF'
            }}>
              Need a Custom Limit Gauge or Special Thread Standard?
            </div>
            <div style={{ fontSize: '0.875rem', color: '#8E96A0' }}>
              Send us your manufacturing 2D drawings, tolerances (H7, 6H, etc.), or nominal dimensions for a prompt technical proposal.
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              onClick={() => onOpenQuote()} 
              className="btn btn-primary"
            >
              Request a Quotation
            </button>
            <button 
              onClick={() => handleNav('contact')} 
              className="btn btn-outline-white"
            >
              Contact Engineering Team
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container" style={{ padding: '64px 24px 48px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px'
        }}>
          {/* Column 1: Brand & Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                backgroundColor: 'var(--color-primary-yellow)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#25282B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" strokeDasharray="3 2" />
                  <circle cx="12" cy="12" r="4" fill="#25282B" />
                  <line x1="12" y1="2" x2="12" y2="5" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                </svg>
              </div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                fontWeight: '800',
                color: '#FFFFFF',
                letterSpacing: '-0.02em'
              }}>
                JUPITER <span style={{ color: 'var(--color-primary-yellow)' }}>GAUGES</span>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '20px', color: '#9DA6B0' }}>
              Dedicated to manufacturing sub-micron precision plain plug gauges, ring gauges, thread inspection masters, and metrology standards for global aerospace, automotive, and engineering tooling sectors.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge badge-dark">
                <ShieldCheck size={13} style={{ marginRight: '4px' }} /> ISO / DIN / IS Compliant
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              color: '#FFFFFF',
              marginBottom: '20px',
              position: 'relative',
              paddingBottom: '10px'
            }}>
              Quick Navigation
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '30px',
                height: '2px',
                backgroundColor: 'var(--color-primary-yellow)'
              }} />
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              <li>
                <button 
                  onClick={() => handleNav('home')}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#B0B8C0', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-yellow)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#B0B8C0'}
                >
                  <ChevronRight size={14} color="var(--color-primary-yellow)" /> Home Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#B0B8C0', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-yellow)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#B0B8C0'}
                >
                  <ChevronRight size={14} color="var(--color-primary-yellow)" /> About Us & Metrology Lab
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('products')}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#B0B8C0', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-yellow)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#B0B8C0'}
                >
                  <ChevronRight size={14} color="var(--color-primary-yellow)" /> Precision Product Catalogue
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('clients')}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#B0B8C0', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-yellow)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#B0B8C0'}
                >
                  <ChevronRight size={14} color="var(--color-primary-yellow)" /> Industries & Client Partners
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#B0B8C0', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-yellow)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#B0B8C0'}
                >
                  <ChevronRight size={14} color="var(--color-primary-yellow)" /> Contact & RFQ Center
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Range */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              color: '#FFFFFF',
              marginBottom: '20px',
              position: 'relative',
              paddingBottom: '10px'
            }}>
              Product Range
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '30px',
                height: '2px',
                backgroundColor: 'var(--color-primary-yellow)'
              }} />
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              {PRODUCT_CATEGORIES.slice(1).map((cat) => (
                <li key={cat.id}>
                  <button 
                    onClick={() => handleNav('products', cat.id)}
                    style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#B0B8C0', textAlign: 'left' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-yellow)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#B0B8C0'}
                  >
                    <ChevronRight size={14} color="var(--color-primary-yellow)" /> {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Facility Placeholders */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              color: '#FFFFFF',
              marginBottom: '20px',
              position: 'relative',
              paddingBottom: '10px'
            }}>
              Works & Metrology Center
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '30px',
                height: '2px',
                backgroundColor: 'var(--color-primary-yellow)'
              }} />
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--color-primary-yellow)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ color: '#E0E5EA' }}>{COMPANY_INFO.contact.addressLine1}</div>
                  <div style={{ color: '#8E96A0' }}>{COMPANY_INFO.contact.addressLine2}</div>
                  <div style={{ color: '#8E96A0' }}>{COMPANY_INFO.contact.addressState}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} color="var(--color-primary-yellow)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ color: '#E0E5EA' }}>{COMPANY_INFO.contact.phonePrimary}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={18} color="var(--color-primary-yellow)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ color: '#E0E5EA' }}>{COMPANY_INFO.contact.emailSales}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Clock size={18} color="var(--color-primary-yellow)" style={{ flexShrink: 0 }} />
                <div style={{ color: '#8E96A0', fontSize: '0.8rem' }}>
                  {COMPANY_INFO.contact.workingHours}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Editable Placeholder Note for User */}
        <div style={{
          marginTop: '48px',
          padding: '16px 20px',
          backgroundColor: '#272B30',
          borderRadius: 'var(--radius-md)',
          border: '1px dashed #4A5057',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div style={{ fontSize: '0.8125rem', color: '#D0D6DD' }}>
            <strong style={{ color: 'var(--color-primary-yellow)' }}>Jupiter Gauges Identity Note:</strong> Contact details, address, and client names are currently configured with clearly demarcated editable placeholders.
          </div>
          <button 
            onClick={() => handleNav('contact')} 
            className="btn btn-sm btn-secondary" 
            style={{ color: '#FFF', borderColor: '#666', fontSize: '0.75rem' }}
          >
            Update Contact Details
          </button>
        </div>

        {/* Lower Copyright & Legal Strip */}
        <div style={{
          marginTop: '36px',
          paddingTop: '24px',
          borderTop: '1px solid #2B2F34',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '0.8125rem',
          color: '#7D8690'
        }}>
          <div>
            © {new Date().getFullYear()} Jupiter Gauges. All rights reserved. Precision Measuring Instruments & Industrial Gauges.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <button 
              onClick={() => handleNav('about')}
              style={{ color: '#7D8690', transition: 'color var(--transition-fast)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFF'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#7D8690'}
            >
              Quality Policy
            </button>
            <button 
              onClick={() => handleNav('products')}
              style={{ color: '#7D8690', transition: 'color var(--transition-fast)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFF'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#7D8690'}
            >
              Metrology Standards
            </button>
            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--color-primary-yellow)',
                fontWeight: '600',
                padding: '4px 8px',
                borderRadius: '4px',
                backgroundColor: 'rgba(244, 196, 48, 0.1)'
              }}
              aria-label="Scroll to top of page"
            >
              Top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
