import React from 'react';
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  Layers, 
  Award,
  Compass,
  Briefcase
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function Clients({ setActivePage, onOpenQuote }) {
  return (
    <div>
      {/* Header Banner */}
      <section style={{
        backgroundColor: '#1E2124',
        padding: '64px 0 48px 0',
        color: '#FFFFFF',
        borderBottom: '1px solid #33383E'
      }} className="industrial-grid-bg">
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span className="section-tag">Industries & Partnerships</span>
            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: '800',
              color: '#FFFFFF',
              marginBottom: '16px'
            }}>
              Supplying Precision to <span style={{ color: 'var(--color-primary-yellow)' }}>Global Manufacturing</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#B0B8C0', lineHeight: 1.6 }}>
              Serving tier-1 automotive suppliers, aerospace contractors, defense manufacturing units, and precision machine shops with traceable industrial gauging solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Sector Expertise</span>
            <h2 className="section-title">Critical Gauging Applications by Industry</h2>
            <p className="section-subtitle">
              Our gauging systems are tailored to the dimensional tolerances and high-throughput demands of major manufacturing segments.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            marginBottom: '60px'
          }}>
            {COMPANY_INFO.industries.map((ind) => (
              <div key={ind.id} style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                border: '1px solid var(--color-grey-border)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--color-yellow-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8A6E00',
                  marginBottom: '16px'
                }}>
                  <Briefcase size={20} />
                </div>

                <h3 style={{ fontSize: '1.3rem', color: 'var(--color-charcoal)', marginBottom: '12px' }}>
                  {ind.name}
                </h3>

                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--color-grey-medium)', marginBottom: '20px', flexGrow: 1 }}>
                  {ind.desc}
                </p>

                <div style={{
                  backgroundColor: 'var(--color-bg)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px 16px',
                  border: '1px solid var(--color-grey-border)',
                  fontSize: '0.8125rem'
                }}>
                  <span style={{ color: 'var(--color-grey-medium)', display: 'block', marginBottom: '2px' }}>
                    Typical Gauging Setup:
                  </span>
                  <strong style={{ color: 'var(--color-charcoal)' }}>
                    {ind.application}
                  </strong>
                </div>
              </div>
            ))}
          </div>

          {/* Client Showcase Note & Editable Placeholders */}
          <div className="section-header" style={{ marginBottom: '32px' }}>
            <span className="section-tag">Client Roster</span>
            <h2 className="section-title">Verified Industrial Client Showcase</h2>
            <p className="section-subtitle">
              Jupiter Gauges maintains supply agreements with reputable manufacturers across industrial hubs.
            </p>
          </div>

          <div className="placeholder-notice" style={{ maxWidth: '860px', margin: '0 auto 36px auto' }}>
            <div>
              <strong>Jupiter Gauges Client Directory Rules:</strong> Client entries below are displayed as clean, editable placeholders. In accordance with strict branding and confidentiality directives, competitor references or unverified third-party names are excluded.
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            marginBottom: '60px'
          }}>
            {COMPANY_INFO.clientPlaceholders.map((client) => (
              <div key={client.id} style={{
                backgroundColor: 'var(--color-surface)',
                border: '1.5px dashed var(--color-grey-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '30px 20px',
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-grey-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 14px auto',
                  color: 'var(--color-charcoal)'
                }}>
                  <Building2 size={20} />
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  color: 'var(--color-charcoal)',
                  marginBottom: '6px'
                }}>
                  {client.name}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-grey-medium)' }}>
                  {client.segment}
                </div>
              </div>
            ))}
          </div>

          {/* Client Quality Collaboration Process */}
          <div style={{
            backgroundColor: '#25282B',
            borderRadius: 'var(--radius-xl)',
            padding: '44px',
            color: '#FFFFFF',
            border: '1px solid #3E4348'
          }} className="industrial-grid-bg">
            <div style={{ maxWidth: '720px', marginBottom: '32px' }}>
              <span className="badge badge-yellow" style={{ marginBottom: '12px' }}>
                Long-Term Rate Contracts & Toolroom Partnerships
              </span>
              <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '10px' }}>
                How We Partner with Quality Teams
              </h3>
              <p style={{ color: '#B0B8C0', fontSize: '0.95rem', lineHeight: 1.6 }}>
                We work closely with Chief Quality Officers, Metrology Lab Incharges, and Purchase Managers to establish annual rate contracts (ARC), periodic recalibration cycles, and fast-track replacement pins for production lines.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              marginBottom: '36px'
            }}>
              <div style={{ borderLeft: '3px solid var(--color-primary-yellow)', paddingLeft: '16px' }}>
                <div style={{ fontWeight: '700', color: '#FFFFFF', marginBottom: '4px' }}>
                  1. Drawing Feasibility Review
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#9DA6AF' }}>
                  Complete evaluation of tolerance classes, wear allowances, and material grades.
                </div>
              </div>

              <div style={{ borderLeft: '3px solid var(--color-primary-yellow)', paddingLeft: '16px' }}>
                <div style={{ fontWeight: '700', color: '#FFFFFF', marginBottom: '4px' }}>
                  2. First-Article Calibration
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#9DA6AF' }}>
                  Detailed inspection report supplied with initial sample piece for customer signoff.
                </div>
              </div>

              <div style={{ borderLeft: '3px solid var(--color-primary-yellow)', paddingLeft: '16px' }}>
                <div style={{ fontWeight: '700', color: '#FFFFFF', marginBottom: '4px' }}>
                  3. Batch Production & Dispatch
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#9DA6AF' }}>
                  100% inspected gauges packed in protective wax / oil and delivered on scheduled timelines.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <button onClick={() => onOpenQuote()} className="btn btn-primary">
                <FileText size={16} /> Request Supply Contract Proposal
              </button>
              <button onClick={() => setActivePage('contact')} className="btn btn-outline-white">
                Contact Vendor Development Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
