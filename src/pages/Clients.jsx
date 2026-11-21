import React from 'react';
import {
  Briefcase,
  Plane,
  Car,
  Truck,
  Shield,
  Gauge,
  Anchor
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import InnerHeroBanner from '../components/InnerHeroBanner';

const INDUSTRY_ICONS = {
  aerospace: Plane,
  automobile: Car,
  commercial: Truck,
  defence: Shield,
  instrumentation: Gauge,
  marine: Anchor
};

export default function Clients({ setActivePage }) {
  return (
    <div>
      {/* Page Hero Banner */}
      <InnerHeroBanner
        heading="Building Trust Through Precision & Quality"
        description="Partnering with manufacturing industries to deliver dependable gauging solutions, consistent quality and long-term business relationships."
        bgImage="./images/workbench_inspection.jpg"
        breadcrumbs={[
          { label: 'Home', pageId: 'home' },
          { label: 'Clients' }
        ]}
        setActivePage={setActivePage}
      />

      {/* Main Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">

          {/* Client Portfolio Section */}
          <div className="section-header" style={{ marginBottom: '32px' }}>
            <span className="section-tag">
              Client Portfolio
            </span>
            <h2 className="section-title">Our Esteemed Clients & Engineering Partners</h2>
            <p className="section-subtitle">
              Jupiter Gauges maintains long-standing supply partnerships with prestigious automotive OEMs, forging plants, and machining corporations.
            </p>
          </div>

          {/* 8-Client Detailed Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '24px',
            marginBottom: '64px'
          }}>
            {COMPANY_INFO.clients.map((client) => (
              <div
                key={client.id}
                style={{
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-grey-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'var(--shadow-xs)',
                  transition: 'all 0.2s ease',
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
                {/* Top Row: Logo & Client Code Badge */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                  gap: '12px'
                }}>
                  <div style={{
                    height: '100px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#ffffff',
                    padding: '8px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid #f0f2f5'
                  }}>
                    <img
                      src={client.logo}
                      alt={client.name}
                      style={{
                        maxHeight: '70px',
                        maxWidth: '100%',
                        objectFit: 'contain'
                      }}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Client Name */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: 'var(--color-heading)',
                    margin: 0,
                    lineHeight: 1.3
                  }}>
                    {client.name}
                  </h3>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '0.825rem',
                  lineHeight: 1.55,
                  color: 'var(--color-corporate-grey)',
                  marginBottom: '16px',
                  flexGrow: 1
                }}>
                  {client.description}
                </p>
              </div>
            ))}
          </div>

          {/* Industries We Serve Section */}
          <div className="section-header">
            <span className="section-tag">
              Industries We Serve
            </span>
            <h2 className="section-title">Precision Gauging Across Sectors</h2>
            <p className="section-subtitle">
              Engineered to meet the exact dimensional tolerances and high-throughput inspection requirements of Aerospace, Automobile, Commercial, Defence, Instrumentation, and Marine manufacturing.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}>
            {COMPANY_INFO.industries.map((ind) => {
              const Icon = INDUSTRY_ICONS[ind.id] || Briefcase;
              return (
                <div key={ind.id} style={{
                  backgroundColor: 'var(--color-white)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '24px',
                  border: '1px solid var(--color-grey-border)',
                  boxShadow: 'var(--shadow-xs)',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-grey-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-charcoal)',
                    marginBottom: '14px'
                  }}>
                    <Icon size={19} />
                  </div>

                  <h3 style={{ fontSize: '1.15rem', color: 'var(--color-heading)', marginBottom: '8px' }}>
                    {ind.name}
                  </h3>

                  <p style={{ fontSize: '0.85rem', lineHeight: 1.55, color: 'var(--color-corporate-grey)', marginBottom: '16px', flexGrow: 1 }}>
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
