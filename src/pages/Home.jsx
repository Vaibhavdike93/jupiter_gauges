import React from 'react';
import {
  ArrowRight,
  FileText,
  ChevronRight,
  Award,
  Truck,
  ThumbsUp,
  UserCheck,
  Wrench,
  CalendarCheck
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { COMPANY_INFO } from '../data/company';
import HeroSlider from '../components/HeroSlider';

const WHY_CHOOSE_US_ITEMS = [
  {
    icon: Award,
    title: 'Certified Standards'
  },
  {
    icon: Truck,
    title: 'Fast & Rush Support'
  },
  {
    icon: ThumbsUp,
    title: 'Sub-Micron Precision'
  },
  {
    icon: UserCheck,
    title: 'Skilled Metrologists'
  },
  {
    icon: Wrench,
    title: 'High-Grade Materials'
  },
  {
    icon: CalendarCheck,
    title: 'Dependable Turnaround'
  }
];

export default function Home({ setActivePage, onOpenQuote }) {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div>
      {/* =========================================================================
          1. CORPORATE HERO SLIDESHOW (5-Slide Reference-Inspired Industrial Showcase)
          ========================================================================= */}
      <HeroSlider setActivePage={setActivePage} onOpenQuote={onOpenQuote} />

      {/* =========================================================================
          2. FEATURED PRODUCT CATALOGUE SECTION
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Gauging Products</span>
            <h2 className="section-title">Precision Gauging Solutions</h2>
            <p className="section-subtitle">
              Engineered for dimensional inspection on production lines, quality assurance cells, and metrology standards laboratories.
            </p>
          </div>

          {/* 4 Column Product Grid on Desktop */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            marginBottom: '36px'
          }}>
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-img-wrap">
                  <img src={product.image} alt={product.name} className="product-img" loading="lazy" />
                </div>
                <div className="product-card-body">
                  <h3 className="product-card-title">{product.name}</h3>
                  <p className="product-card-desc">{product.shortDesc}</p>
                  <div className="product-card-actions">
                    <button
                      onClick={() => onOpenQuote(product.name)}
                      className="btn btn-primary btn-sm"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => setActivePage('products')}
              className="btn btn-secondary"
            >
              Browse Product<ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>



      {/* =========================================================================
          3. COMPANY OVERVIEW (Short Info from About Page)
          ========================================================================= */}
      <section className="section section-alt">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}>
            <div>
              <span className="section-tag">
                Company Overview
              </span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>
                About Jupiter Gauges
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--color-body-text)', marginBottom: '14px' }}>
                {COMPANY_INFO.shortAbout}
              </p>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--color-corporate-grey)', marginBottom: '24px' }}>
                {COMPANY_INFO.aboutDetail}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <button
                  onClick={() => setActivePage('about')}
                  className="btn btn-primary"
                >
                  Learn More About Us <ArrowRight size={14} />
                </button>
                <button
                  onClick={() => onOpenQuote()}
                  className="btn btn-secondary"
                >
                  Enquire Now
                </button>
              </div>
            </div>

            {/* Metrology / Standards Room Photo */}
            <div>
              <div style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--color-grey-border)',
                boxShadow: 'var(--shadow-sm)',
                backgroundColor: 'var(--color-white)'
              }}>
                <img
                  src="./images/metrology_lab.jpg"
                  alt="Jupiter Gauges - Dimensional Metrology Lab and Standards Room"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div style={{ padding: '12px 16px', fontSize: '0.8125rem', color: 'var(--color-corporate-grey)', backgroundColor: 'var(--color-white)' }}>
                  Metrology room with comparative length standards and granite inspection surface
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          4. WHY WE ARE BEST AND YOU SHOULD CHOOSE US SECTION
          ========================================================================= */}
      <section className="choose-us-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              Why Choose Us
            </span>
            <h2 className="section-title">
              Why We Are Best And You Should Choose Us
            </h2>
            <p className="section-subtitle">
              Delivering precision engineering, certified accuracy, and dependable customer service to manufacturing leaders.
            </p>
          </div>

          <div className="choose-us-grid">
            {WHY_CHOOSE_US_ITEMS.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="choose-us-card">
                  <div className="choose-us-icon-box">
                    <IconComponent size={24} strokeWidth={2} />
                  </div>
                  <div className="choose-us-title">
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. CLIENTS & INDUSTRIES SHOWCASE (Formal Corporate Roster)
          ========================================================================= */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Trusted Partnerships</span>
            <h2 className="section-title">Our Esteemed Clients & Industry Partners</h2>
            <p className="section-subtitle">
              Supplying high-precision limit gauges and metrology standards to India's leading manufacturing enterprises.
            </p>
          </div>

          {/* Client Logos Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
            marginBottom: '36px'
          }}>
            {COMPANY_INFO.clients.map((client) => (
              <div
                key={client.id}
                style={{
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-grey-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.2s ease',
                  boxShadow: 'var(--shadow-xs)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-primary-yellow)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-grey-border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
                }}
              >
                {/* Logo Container */}
                <div style={{
                  height: '84px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '16px',
                  border: '1px solid #f0f2f5'
                }}>
                  <img
                    src={client.logo}
                    alt={client.name}
                    style={{
                      maxHeight: '68px',
                      maxWidth: '100%',
                      objectFit: 'contain'
                    }}
                    loading="lazy"
                  />
                </div>

                {/* Company Name */}
                <div style={{
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  color: 'var(--color-heading)',
                  marginBottom: '6px',
                  lineHeight: 1.3
                }}>
                  {client.name}
                </div>

                {/* Segment */}
                <div style={{
                  fontSize: '0.8rem',
                  color: 'var(--color-corporate-grey)',
                  marginBottom: '14px',
                  lineHeight: 1.4,
                  flexGrow: 1
                }}>
                  {client.segment}
                </div>
              </div>
            ))}
          </div>


          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => setActivePage('clients')}
              className="btn btn-secondary"
            >
              View Client Engagements <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. CORPORATE CALL TO ACTION BANNER (Charcoal Accent Section)
          ========================================================================= */}
      <section style={{
        backgroundColor: 'var(--color-charcoal)',
        padding: '56px 0',
        color: 'var(--color-white)',
        borderTop: '3px solid var(--color-primary-yellow)'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 2.8vw, 2rem)',
            color: 'var(--color-white)',
            marginBottom: '12px',
            fontWeight: '700',
            letterSpacing: '-0.02em'
          }}>
            Require Standard or Custom Gauges for Your Production Line?
          </h2>
          <p style={{
            maxWidth: '640px',
            margin: '0 auto 28px auto',
            color: '#B2B9C0',
            fontSize: '0.95rem',
            lineHeight: 1.6
          }}>
            Share your specifications for a technical quotation.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <button
              onClick={() => onOpenQuote()}
              className="btn btn-primary btn-lg"
              style={{ fontWeight: '600' }}
            >
              <FileText size={16} /> Enquire Now
            </button>
            <button
              onClick={() => setActivePage('contact')}
              className="btn btn-outline-white btn-lg"
            >
              Contact Works Office
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
