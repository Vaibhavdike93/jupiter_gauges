import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Thermometer, 
  Compass, 
  Cpu,
  Layers,
  Sparkles,
  Users
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { TECHNICAL_STANDARDS } from '../data/products';

export default function About({ setActivePage, onOpenQuote }) {
  return (
    <div>
      {/* Page Header Banner */}
      <section style={{
        backgroundColor: '#1E2124',
        padding: '64px 0 54px 0',
        color: '#FFFFFF',
        borderBottom: '1px solid #33383E'
      }} className="industrial-grid-bg">
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="section-tag">About Jupiter Gauges</span>
            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: '800',
              color: '#FFFFFF',
              marginBottom: '16px'
            }}>
              Precision Engineering & <span style={{ color: 'var(--color-primary-yellow)' }}>Metrological Excellence</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#B0B8C0', lineHeight: 1.6 }}>
              Engineering reliable industrial limit gauges, thread inspection masters, and dimensional standards designed for uncompromising accuracy in global manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Company Overview */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}>
            <div>
              <span className="section-tag">Company Profile</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Dedicated to Zero-Defect Measurement
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, marginBottom: '20px', color: 'var(--color-charcoal)' }}>
                {COMPANY_INFO.shortAbout}
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '24px', color: 'var(--color-grey-medium)' }}>
                Founded with a singular commitment to dimensional integrity, Jupiter Gauges has evolved into a trusted manufacturing partner for precision automotive component makers, aerospace contractors, and machine tool builders. By combining ultra-rigid CNC machine tools, metallurgical cryogenic stabilization, and hand-lapping craftsmanship, we deliver gauges that endure millions of inspection cycles without losing their calibrated limits.
              </p>

              {/* Editable Placeholder for Leadership */}
              <div className="placeholder-notice">
                <div>
                  <strong>Company Leadership Placeholder:</strong> Directed by{' '}
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: '700' }}>
                    {COMPANY_INFO.contact.ownerName}
                  </span>{' '}
                  ({COMPANY_INFO.contact.ownerTitle}). Contact: {COMPANY_INFO.contact.emailInfo}.
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => setActivePage('products')} className="btn btn-primary">
                  Explore Product Range <ArrowRight size={16} />
                </button>
                <button onClick={() => onOpenQuote()} className="btn btn-secondary">
                  Request Quotation
                </button>
              </div>
            </div>

            {/* Visual Lab Showcase */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid var(--color-grey-border)'
              }}>
                <img
                  src="/images/metrology_lab.jpg"
                  alt="Jupiter Gauges 20°C Climate Controlled Metrology Laboratory"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                right: '20px',
                backgroundColor: 'var(--color-charcoal)',
                color: '#FFFFFF',
                padding: '16px 20px',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid #3E4348',
                maxWidth: '260px'
              }}>
                <div style={{ color: 'var(--color-primary-yellow)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700' }}>
                  20°C REFERENCE METROLOGY
                </div>
                <div style={{ fontSize: '0.8125rem', marginTop: '4px' }}>
                  Final calibration performed strictly at ISO international standard temperature.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="section" style={{ backgroundColor: '#ECEFF1' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            <div style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-lg)',
              padding: '36px',
              border: '1px solid var(--color-grey-border)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: 'var(--color-yellow-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#8A6E00',
                marginBottom: '20px'
              }}>
                <Compass size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--color-charcoal)' }}>
                Our Mission
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--color-grey-medium)' }}>
                To empower quality-driven manufacturing plants with uncompromising gauging instruments, accelerating inspection speed while eliminating false scrap and dimensional disputes on precision assembly lines.
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-lg)',
              padding: '36px',
              border: '1px solid var(--color-grey-border)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: 'var(--color-yellow-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#8A6E00',
                marginBottom: '20px'
              }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--color-charcoal)' }}>
                Our Vision
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--color-grey-medium)' }}>
                To stand as the industry benchmark for sub-micron industrial limit gauges, celebrated for metallurgical innovation, traceable calibration authenticity, and unmatched customer responsiveness.
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-lg)',
              padding: '36px',
              border: '1px solid var(--color-grey-border)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: 'var(--color-yellow-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#8A6E00',
                marginBottom: '20px'
              }}>
                <Award size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--color-charcoal)' }}>
                Core Values
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--color-grey-medium)' }}>
                <strong>Precision First:</strong> Zero compromise on calibration tolerances.<br />
                <strong>Metallurgical Longevity:</strong> Cryogenic treatments for long life.<br />
                <strong>Client Partnership:</strong> Prompt turnarounds for production critical tooling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & Metrology Capabilities */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Engineering Infrastructure</span>
            <h2 className="section-title">Specialized Gauge Manufacturing Capabilities</h2>
            <p className="section-subtitle">
              Every stage of our machining, heat treatment, and lapping processes is optimized for gauge steel stability and sub-micron repeatability.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}>
            {COMPANY_INFO.capabilities.map((cap, idx) => (
              <div key={idx} style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
                border: '1px solid var(--color-grey-border)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--color-primary-yellow)',
                  fontWeight: '700',
                  marginBottom: '8px'
                }}>
                  CAPABILITY 0{idx + 1}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-charcoal)' }}>
                  {cap.title}
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--color-grey-medium)' }}>
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--color-grey-border)'
          }}>
            <img 
              src="/images/manufacturing_facility.jpg" 
              alt="CNC Cylindrical and Thread Grinding Shop at Jupiter Gauges"
              style={{ width: '100%', maxHeight: '420px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Quality Workflow (01 to 05) */}
      <section className="section section-dark industrial-grid-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Metrology Discipline</span>
            <h2 className="section-title">5-Stage Quality Assurance Workflow</h2>
            <p className="section-subtitle">
              From receipt of client 2D engineering drawings to final dispatched calibration documentation.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            {COMPANY_INFO.workflow.map((wf) => (
              <div key={wf.step} style={{
                backgroundColor: 'rgba(46, 50, 54, 0.9)',
                borderRadius: 'var(--radius-md)',
                padding: '24px 20px',
                border: '1px solid #3E4348'
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: 'var(--color-primary-yellow)',
                  marginBottom: '10px'
                }}>
                  {wf.step}
                </div>
                <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '8px' }}>
                  {wf.title}
                </h4>
                <p style={{ fontSize: '0.8125rem', color: '#A8B1BA', lineHeight: 1.5 }}>
                  {wf.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Technical Standards Adherence */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Specifications</span>
            <h2 className="section-title">Governing Standards & Metrology Systems</h2>
            <p className="section-subtitle">
              Our gauges comply strictly with Indian, International, and German industrial standards.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px'
          }}>
            {TECHNICAL_STANDARDS.map((std, idx) => (
              <div key={idx} style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-grey-border)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                display: 'flex',
                gap: '16px',
                alignItems: 'center'
              }}>
                <span className="badge badge-yellow" style={{ fontSize: '0.85rem' }}>
                  {std.standard}
                </span>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--color-charcoal)' }}>
                    {std.title}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-grey-medium)' }}>
                    {std.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
