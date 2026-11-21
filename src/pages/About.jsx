import React from 'react';
import {
  ShieldCheck,
  ArrowRight,
  Compass,
  Award,
  Truck,
  ThumbsUp,
  UserCheck,
  Wrench,
  CalendarCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import InnerHeroBanner from '../components/InnerHeroBanner';

const WHY_CHOOSE_US_ITEMS = [
  {
    icon: Award,
    title: 'Certified Standards'
  },
  {
    icon: Truck,
    title: 'Emergency Service Available'
  },
  {
    icon: ThumbsUp,
    title: 'Top-Notch Workmanship'
  },
  {
    icon: UserCheck,
    title: 'Professional Technicians'
  },
  {
    icon: Wrench,
    title: 'High-Grade Materials'
  },
  {
    icon: CalendarCheck,
    title: 'Same-Day Repairs'
  }
];

export default function About({ setActivePage, onOpenQuote }) {
  return (
    <div>
      {/* Page Hero Banner */}
      <InnerHeroBanner
        heading="Precision Engineering. Trusted Accuracy."
        description="Discover our commitment to manufacturing reliable, high-quality precision measuring instruments and delivering dimensional accuracy to industries."
        bgImage="./images/metrology_lab.jpg"
        breadcrumbs={[
          { label: 'Home', pageId: 'home' },
          { label: 'About Us' }
        ]}
        setActivePage={setActivePage}
      />

      {/* Editorial Company Overview */}
      <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
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
                About Us
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--color-body-text)', marginBottom: '14px' }}>
                {COMPANY_INFO.shortAbout}
              </p>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--color-corporate-grey)', marginBottom: '14px' }}>
                {COMPANY_INFO.aboutDetail}
              </p>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--color-corporate-grey)', marginBottom: '24px' }}>
                {COMPANY_INFO.aboutVision}
              </p>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => setActivePage('products')} className="btn btn-primary">
                  Explore Products <ArrowRight size={14} />
                </button>
                <button onClick={() => onOpenQuote()} className="btn btn-secondary">
                  Enquire Now
                </button>
              </div>
            </div>

            {/* Metrology Inspection Image */}
            <div>
              <div style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--color-grey-border)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <img
                  src="./images/metrology_lab.jpg"
                  alt="Jupiter Gauges - Dimensional Metrology Lab and Standards Room"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: 'var(--color-corporate-grey)',
                marginTop: '8px',
                textAlign: 'right'
              }}>
                Metrology room with comparative length standards and granite inspection surface
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Quality Policy */}
      <section className="section section-alt">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            <div style={{
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-sm)',
              padding: '28px',
              border: '1px solid var(--color-grey-border)',
              boxShadow: 'var(--shadow-xs)'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-grey-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-charcoal)',
                marginBottom: '16px'
              }}>
                <Compass size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--color-heading)' }}>
                Our Mission
              </h3>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--color-corporate-grey)' }}>
                To deliver reliable precision gauges and dimensional inspection solutions that help manufacturing industries improve measurement accuracy, reduce rejection and rework, and maintain consistent product quality.
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-sm)',
              padding: '28px',
              border: '1px solid var(--color-grey-border)',
              boxShadow: 'var(--shadow-xs)'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-grey-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-charcoal)',
                marginBottom: '16px'
              }}>
                <ShieldCheck size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--color-heading)' }}>
                Quality Assurance
              </h3>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--color-corporate-grey)' }}>
                We focus on dimensional accuracy, specified tolerance grades, surface finish, and functional reliability. Each gauge undergoes applicable quality checks, including GO/NO-GO verification, to ensure dependable inspection performance.
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-sm)',
              padding: '28px',
              border: '1px solid var(--color-grey-border)',
              boxShadow: 'var(--shadow-xs)'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-grey-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-charcoal)',
                marginBottom: '16px'
              }}>
                <Award size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--color-heading)' }}>
                Material & Manufacturing Standards
              </h3>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--color-corporate-grey)' }}>
                We emphasize precision manufacturing, quality materials, controlled heat treatment, and dimensional stability. EN31 alloy steel and tungsten carbide are selected according to product specifications and application requirements, following applicable industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Are Best And You Should Choose Us Section */}
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
    </div>
  );
}
