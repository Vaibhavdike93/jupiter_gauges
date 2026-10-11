import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  Thermometer, 
  Award,
  Zap,
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { COMPANY_INFO } from '../data/company';
import ToleranceWidget from '../components/ToleranceWidget';

export default function Home({ setActivePage, onOpenQuote, onSelectProduct }) {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div>
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section style={{
        position: 'relative',
        backgroundColor: '#1E2124',
        color: '#FFFFFF',
        paddingTop: '60px',
        paddingBottom: '90px',
        overflow: 'hidden',
        borderBottom: '1px solid #33383E'
      }} className="industrial-grid-bg">
        
        {/* Subtle Yellow Ambient Accent Light */}
        <div style={{
          position: 'absolute',
          top: '-150px',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244, 196, 48, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}>
            {/* Left Content Column */}
            <div style={{ zIndex: 2 }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(244, 196, 48, 0.15)',
                color: 'var(--color-primary-yellow)',
                border: '1px solid rgba(244, 196, 48, 0.3)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '20px'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary-yellow)' }} />
                Sub-Micron Industrial Metrology
              </div>

              <h1 style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: '800',
                color: '#FFFFFF',
                lineHeight: 1.15,
                marginBottom: '20px',
                letterSpacing: '-0.02em'
              }}>
                Precision in <span style={{ color: 'var(--color-primary-yellow)' }}>Every</span> Measurement.
              </h1>

              <p style={{
                fontSize: '1.15rem',
                color: '#CBD3DC',
                lineHeight: 1.6,
                marginBottom: '32px',
                maxWidth: '560px'
              }}>
                Reliable industrial gauging solutions engineered for quality-driven manufacturing. Manufactured from cryogenically stabilized alloy steel to international ISO, DIN, and IS standards.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '40px' }}>
                <button
                  onClick={() => setActivePage('products')}
                  className="btn btn-primary btn-lg"
                  style={{ fontWeight: '700' }}
                >
                  Explore Our Products <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => onOpenQuote()}
                  className="btn btn-outline-white btn-lg"
                >
                  <FileText size={18} /> Request a Quote
                </button>
              </div>

              {/* Live Metric Badges */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.35rem', fontWeight: '700', color: 'var(--color-primary-yellow)' }}>
                    ±0.001 mm
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#8E96A0' }}>
                    Sub-Micron Tolerance
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.35rem', fontWeight: '700', color: '#FFFFFF' }}>
                    60-64 HRC
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#8E96A0' }}>
                    Hardened Metallurgy
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.35rem', fontWeight: '700', color: '#FFFFFF' }}>
                    20.0°C
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#8E96A0' }}>
                    Stabilized Metrology Lab
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                border: '1px solid #3E4348'
              }}>
                <img
                  src="/images/hero_gauges.jpg"
                  alt="Jupiter Gauges - Precision Plain Plug, Thread Ring Gauges and Micrometer"
                  style={{ width: '100%', height: 'auto', display: 'block', transform: 'scale(1.02)' }}
                />
                
                {/* Floating Glassmorphic Spec Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  backgroundColor: 'rgba(30, 33, 36, 0.88)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(244, 196, 48, 0.3)',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-primary-yellow)' }}>
                      METROLOGY VERIFICATION
                    </div>
                    <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#FFFFFF' }}>
                      Cylindrical Limit & Thread Pitch Standards
                    </div>
                  </div>
                  <span className="badge badge-yellow" style={{ flexShrink: 0 }}>
                    100% Calibrated
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. INTERACTIVE GAUGE CALCULATOR WIDGET SECTION
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#1A1D20', paddingTop: '40px', paddingBottom: '60px' }}>
        <div className="container">
          <ToleranceWidget onOpenQuote={onOpenQuote} />
        </div>
      </section>

      {/* =========================================================================
          3. FEATURED PRODUCTS PREVIEW
          ========================================================================= */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Gauging Solutions</span>
            <h2 className="section-title">Engineered for Rigorous Production Lines</h2>
            <p className="section-subtitle">
              Every gauge is ground, sub-zero treated, and precision lapped to eliminate wear and deliver continuous repeatability across automotive, aerospace, and tooling components.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}>
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-img-wrap">
                  <img src={product.image} alt={product.name} className="product-img" loading="lazy" />
                  <span className="badge badge-charcoal" style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)'
                  }}>
                    {product.standard}
                  </span>
                </div>
                <div className="product-card-body">
                  <h3 className="product-card-title">{product.name}</h3>
                  <p className="product-card-desc">{product.shortDesc}</p>

                  <div className="product-specs-preview">
                    <div className="spec-preview-row">
                      <span className="spec-preview-label">Material:</span>
                      <span className="spec-preview-val">{product.material.split('/')[0]}</span>
                    </div>
                    <div className="spec-preview-row">
                      <span className="spec-preview-label">Hardness:</span>
                      <span className="spec-preview-val">{product.hardness.split('(')[0]}</span>
                    </div>
                    <div className="spec-preview-row">
                      <span className="spec-preview-label">Tolerance:</span>
                      <span className="spec-preview-val">{product.toleranceGrade.split(',')[0]}</span>
                    </div>
                  </div>

                  <div className="product-card-actions">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="btn btn-secondary btn-sm"
                    >
                      View Specs
                    </button>
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
              className="btn btn-dark"
            >
              Browse Complete Catalog ({PRODUCTS.length} Gauging Categories) <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHY CHOOSE JUPITER GAUGES (ENGINEERING VALUE)
          ========================================================================= */}
      <section className="section section-dark industrial-grid-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Quality Commitment</span>
            <h2 className="section-title">The Foundation of Dimensional Reliability</h2>
            <p className="section-subtitle">
              Precision gauges are only as trustworthy as the metallurgical science and climate stability behind them. Here is how Jupiter Gauges delivers consistent accuracy.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            {COMPANY_INFO.highlights.map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: 'rgba(46, 50, 54, 0.8)',
                border: '1px solid #3E4348',
                borderRadius: 'var(--radius-lg)',
                padding: '30px 24px',
                transition: 'transform var(--transition-fast)'
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: 'var(--color-primary-yellow)',
                  marginBottom: '12px'
                }}>
                  {item.metric}
                </div>
                <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#A6B0BA' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. MANUFACTURING & METROLOGY FACILITY SHOWCASE
          ========================================================================= */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}>
            <div>
              <span className="section-tag">Manufacturing Capabilities</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Advanced CNC Grinding & 20°C Standards Metrology
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, marginBottom: '20px' }}>
                At Jupiter Gauges, manufacturing precision is backed by specialized CNC thread and cylindrical grinders, hand-lapping stations, and continuous temperature-stabilized metrology inspection rooms maintained strictly at 20°C and 45% relative humidity.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(244, 196, 48, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <CheckCircle2 size={15} color="var(--color-charcoal)" />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--color-charcoal)', fontSize: '0.95rem' }}>
                      Cryogenic Cold Aging Treatment (-80°C)
                    </strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-grey-medium)' }}>
                      Converts unstable retained austenite into martensite, completely safeguarding against secular growth over years of use.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(244, 196, 48, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <CheckCircle2 size={15} color="var(--color-charcoal)" />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--color-charcoal)', fontSize: '0.95rem' }}>
                      Super-Finishing & Optical Flat Lapping
                    </strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-grey-medium)' }}>
                      Surface roughness finishes below Ra 0.05 µm for effortless hole entry, smooth wringing, and extended gauge life.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(244, 196, 48, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <CheckCircle2 size={15} color="var(--color-charcoal)" />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--color-charcoal)', fontSize: '0.95rem' }}>
                      NABL Traceable Calibration Certification
                    </strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-grey-medium)' }}>
                      Multi-point coordinate inspection, pitch diameter measurement by 3-wire method, and recorded deviation charts.
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActivePage('about')}
                className="btn btn-secondary"
              >
                Learn More About Our Capabilities <ArrowRight size={16} />
              </button>
            </div>

            {/* Split Media Column */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
              <div style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--color-grey-border)'
              }}>
                <img
                  src="/images/manufacturing_facility.jpg"
                  alt="High-Precision CNC Cylindrical Grinding Machine at Jupiter Gauges"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div style={{ padding: '12px 16px', backgroundColor: 'var(--color-surface)', fontSize: '0.8125rem', color: 'var(--color-grey-medium)' }}>
                  CNC Cylindrical Grinding Facility: Micro-finishing hardened alloy gauge pins
                </div>
              </div>

              <div style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--color-grey-border)'
              }}>
                <img
                  src="/images/metrology_lab.jpg"
                  alt="Climate Controlled 20°C Metrology Calibration Laboratory at Jupiter Gauges"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div style={{ padding: '12px 16px', backgroundColor: 'var(--color-surface)', fontSize: '0.8125rem', color: 'var(--color-grey-medium)' }}>
                  20°C Stabilized Metrology Lab: CMM, optical projector, and granite surface tables
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. INDUSTRIES SERVED PREVIEW
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ECEFF1' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Sectors Served</span>
            <h2 className="section-title">Critical Gauging for Core Industries</h2>
            <p className="section-subtitle">
              From high-volume automotive powertrain lines to sub-micron aerospace flight hardware, Jupiter Gauges delivers trusted measurement reliability.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '36px'
          }}>
            {COMPANY_INFO.industries.slice(0, 3).map((ind) => (
              <div key={ind.id} style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
                border: '1px solid var(--color-grey-border)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--color-charcoal)' }}>
                  {ind.name}
                </h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--color-grey-medium)', marginBottom: '16px' }}>
                  {ind.desc}
                </p>
                <div style={{
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#7A6200',
                  backgroundColor: 'var(--color-yellow-light)',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-sm)'
                }}>
                  Key: {ind.application}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => setActivePage('clients')}
              className="btn btn-secondary"
            >
              View All Industries & Client Collaboration Process <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. VERIFIED CLIENT SHOWCASE (EDITABLE PLACEHOLDERS ONLY)
          ========================================================================= */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Trusted Partners</span>
            <h2 className="section-title">Supplying Quality-Driven Enterprises</h2>
            <p className="section-subtitle">
              We serve component manufacturers, toolrooms, and defense contractors across India and overseas.
            </p>
          </div>

          {/* Clearly Labelled Editable Placeholders */}
          <div className="placeholder-notice" style={{ maxWidth: '800px', margin: '0 auto 32px auto' }}>
            <div>
              <strong>Jupiter Gauges Client Directory Note:</strong> As per company identity guidelines, client logos below are configured as clearly demarcated editable placeholders ready to be linked with verified Jupiter client credentials.
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            marginBottom: '40px'
          }}>
            {COMPANY_INFO.clientPlaceholders.map((client) => (
              <div key={client.id} style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px dashed var(--color-grey-border)',
                borderRadius: 'var(--radius-md)',
                padding: '24px 16px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '110px'
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  color: 'var(--color-charcoal)',
                  marginBottom: '4px'
                }}>
                  {client.name}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--color-grey-medium)' }}>
                  {client.segment}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. CALL TO ACTION BANNER
          ========================================================================= */}
      <section style={{
        backgroundColor: 'var(--color-charcoal)',
        padding: '72px 0',
        position: 'relative',
        overflow: 'hidden'
      }} className="industrial-grid-bg">
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <span className="badge badge-yellow" style={{ marginBottom: '16px' }}>
            Instant Engineering Response
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#FFFFFF',
            marginBottom: '16px'
          }}>
            Have a Specific Limit Gauge Requirement?
          </h2>
          <p style={{
            maxWidth: '680px',
            margin: '0 auto 32px auto',
            color: '#B0B8C0',
            fontSize: '1.05rem',
            lineHeight: 1.6
          }}>
            Submit your nominal dimensions, component drawings, or standard thread specifications. Our metrology team will review and revert with competitive pricing and technical drawings.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            <button
              onClick={() => onOpenQuote()}
              className="btn btn-primary btn-lg"
              style={{ fontWeight: '700' }}
            >
              <FileText size={18} /> Request Formal Quotation (RFQ)
            </button>
            <button
              onClick={() => setActivePage('contact')}
              className="btn btn-outline-white btn-lg"
            >
              Contact Engineering Facility
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
