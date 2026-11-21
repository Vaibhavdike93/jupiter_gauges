import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { PRODUCT_CATEGORIES } from '../data/products';

export default function Footer({ setActivePage }) {
  const handleNav = (pageId, categoryId = null) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (categoryId && window.filterProductCategory) {
      window.filterProductCategory(categoryId);
    }
  };

  return (
    <footer style={{
      backgroundColor: 'var(--color-charcoal)',
      color: '#A5ACB4',
      borderTop: '3px solid var(--color-primary-yellow)'
    }}>
      {/* Main Footer Content */}
      <div className="container" style={{ padding: '54px 24px 36px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '36px'
        }}>
          {/* Column 1: Company Logo & Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                backgroundColor: 'var(--color-primary-yellow)',
                borderRadius: 'var(--radius-xs)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#292D30" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" strokeDasharray="3 2" />
                  <circle cx="12" cy="12" r="4" fill="#292D30" />
                  <line x1="12" y1="2" x2="12" y2="5" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                </svg>
              </div>
              <div style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: 'var(--color-white)',
                letterSpacing: '-0.01em'
              }}>
                JUPITER <span style={{ color: 'var(--color-primary-yellow)' }}>GAUGES</span>
              </div>
            </div>
            <p style={{ fontSize: '0.8125rem', lineHeight: 1.6, marginBottom: '16px', color: '#9DA4AD' }}>
              Manufacturer of precision limit plug gauges, plain ring gauges, thread inspection masters, and dimensional standards conforming to IS, ISO, and DIN specifications.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{
              fontSize: '0.9rem',
              color: 'var(--color-white)',
              marginBottom: '16px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8125rem' }}>
              <li>
                <button
                  onClick={() => handleNav('home')}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#A5ACB4', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-yellow)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#A5ACB4'}
                >
                  <ChevronRight size={13} color="var(--color-primary-yellow)" /> Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#A5ACB4', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-yellow)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#A5ACB4'}
                >
                  <ChevronRight size={13} color="var(--color-primary-yellow)" /> About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#A5ACB4', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-yellow)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#A5ACB4'}
                >
                  <ChevronRight size={13} color="var(--color-primary-yellow)" /> Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('clients')}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#A5ACB4', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-yellow)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#A5ACB4'}
                >
                  <ChevronRight size={13} color="var(--color-primary-yellow)" />Clients
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#A5ACB4', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-yellow)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#A5ACB4'}
                >
                  <ChevronRight size={13} color="var(--color-primary-yellow)" /> Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div>
            <h4 style={{
              fontSize: '0.9rem',
              color: 'var(--color-white)',
              marginBottom: '16px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}>
              Product Range
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8125rem' }}>
              {PRODUCT_CATEGORIES.slice(1).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleNav('products', cat.id)}
                    style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#A5ACB4', textAlign: 'left', transition: 'color var(--transition-fast)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-yellow)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#A5ACB4'}
                  >
                    <ChevronRight size={13} color="var(--color-primary-yellow)" /> {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 style={{
              fontSize: '0.9rem',
              color: 'var(--color-white)',
              marginBottom: '16px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}>
              Works & Inquiries
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.8125rem' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <MapPin size={15} color="var(--color-primary-yellow)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ color: '#DCE1E6' }}>{COMPANY_INFO.contact.addressLine1}</div>
                  <div style={{ color: '#8E96A0' }}>{COMPANY_INFO.contact.addressLine2}</div>
                  <div style={{ color: '#8E96A0' }}>{COMPANY_INFO.contact.addressState}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Phone size={15} color="var(--color-primary-yellow)" style={{ flexShrink: 0 }} />
                <div style={{ color: '#DCE1E6' }}>{COMPANY_INFO.contact.phonePrimary}</div>
              </div>

              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Mail size={15} color="var(--color-primary-yellow)" style={{ flexShrink: 0 }} />
                <div style={{ color: '#DCE1E6' }}>{COMPANY_INFO.contact.emailSales}</div>
              </div>

              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Clock size={15} color="var(--color-primary-yellow)" style={{ flexShrink: 0 }} />
                <div style={{ color: '#8E96A0', fontSize: '0.75rem' }}>
                  {COMPANY_INFO.contact.workingHours}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Copyright & Legal Strip */}
        <div style={{
          marginTop: '36px',
          paddingTop: '20px',
          borderTop: '1px solid #363B40',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          fontSize: '0.78rem',
          color: '#7D8690'
        }}>
          <div>
            © 2026 Jupiter Gauges. All rights reserved.
          </div>
          <div>
            Developed by{' '}
            <a
              href="https://aurastackitsolution.in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--color-primary-yellow)',
                textDecoration: 'none',
                fontWeight: '600'
              }}
              onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              Aurastack IT Solution
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
