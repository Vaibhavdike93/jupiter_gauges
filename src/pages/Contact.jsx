import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { PRODUCTS } from '../data/products';
import InnerHeroBanner from '../components/InnerHeroBanner';

export default function Contact({ preselectedProduct = null, setActivePage }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productInterest: preselectedProduct || 'Plain Plug Gauges (GO / NO-GO)',
    specs: '',
    quantity: '1',
    message: '',
    fileName: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid corporate email is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.length !== 10) {
      errs.phone = 'Please enter a valid 10-digit number';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div>
      {/* Page Hero Banner */}
      <InnerHeroBanner
        heading="Let's Discuss Your Precision Measurement Requirements"
        description="Connect with our team for product enquiries, technical assistance, custom gauging requirements and business collaborations."
        bgImage="./images/od_master.jpg"
        breadcrumbs={[
          { label: 'Home', pageId: 'home' },
          { label: 'Contact Us' }
        ]}
        setActivePage={setActivePage}
      />

      {/* Main Contact Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px'
          }}>
            {/* Left Column: Contact Cards & Office Details */}
            <div>
              <h2 style={{ fontSize: '1.45rem', marginBottom: '6px', color: 'var(--color-heading)' }}>
                Manufacturing Facility & Sales Office
              </h2>
              <p style={{ color: 'var(--color-corporate-grey)', marginBottom: '28px', fontSize: '0.9rem' }}>
                Our customer desk and metrology lab are operational Monday through Sunday (Thursday is a weekly holiday).
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                {/* Address Card */}
                <div style={{
                  backgroundColor: 'var(--color-white)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '20px',
                  border: '1px solid var(--color-grey-border)',
                  boxShadow: 'var(--shadow-xs)',
                  display: 'flex',
                  gap: '14px'
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
                    flexShrink: 0
                  }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.95rem', marginBottom: '3px', color: 'var(--color-heading)' }}>
                      Facility & Works Address
                    </h3>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-body-text)' }}>
                      {COMPANY_INFO.contact.addressLine1}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-corporate-grey)' }}>
                      {COMPANY_INFO.contact.addressLine2}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-corporate-grey)' }}>
                      {COMPANY_INFO.contact.addressState}
                    </div>
                  </div>
                </div>

                {/* Telephone Card */}
                <div style={{
                  backgroundColor: 'var(--color-white)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '20px',
                  border: '1px solid var(--color-grey-border)',
                  boxShadow: 'var(--shadow-xs)',
                  display: 'flex',
                  gap: '14px'
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
                    flexShrink: 0
                  }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.95rem', marginBottom: '3px', color: 'var(--color-heading)' }}>
                      Telephone & WhatsApp Inquiries
                    </h3>
                    <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-body-text)' }}>
                      Direct: {COMPANY_INFO.contact.phonePrimary}
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div style={{
                  backgroundColor: 'var(--color-white)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '20px',
                  border: '1px solid var(--color-grey-border)',
                  boxShadow: 'var(--shadow-xs)',
                  display: 'flex',
                  gap: '14px'
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
                    flexShrink: 0
                  }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.95rem', marginBottom: '3px', color: 'var(--color-heading)' }}>
                      Mail Id
                    </h3>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-body-text)' }}>
                      {COMPANY_INFO.contact.emailSales}
                    </div>
                  </div>
                </div>

                {/* Operating Hours Card */}
                <div style={{
                  backgroundColor: 'var(--color-white)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '20px',
                  border: '1px solid var(--color-grey-border)',
                  boxShadow: 'var(--shadow-xs)',
                  display: 'flex',
                  gap: '14px'
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
                    flexShrink: 0
                  }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.95rem', marginBottom: '3px', color: 'var(--color-heading)' }}>
                      Operating Timings
                    </h3>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-body-text)' }}>
                      {COMPANY_INFO.contact.workingHours}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Technical Enquiry Form */}
            <div>
              <div style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--radius-sm)',
                padding: '32px',
                border: '1px solid var(--color-grey-border)',
                boxShadow: 'var(--shadow-xs)'
              }}>
                <h2 style={{ fontSize: '1.35rem', marginBottom: '6px', color: 'var(--color-heading)' }}>
                  Submit Enquiry
                </h2>
                <p style={{ color: 'var(--color-corporate-grey)', marginBottom: '24px', fontSize: '0.875rem' }}>
                  Share your specifications for a technical quotation.
                </p>

                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '48px 16px' }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-success-bg)',
                      color: 'var(--color-success)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px auto'
                    }}>
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '8px', color: 'var(--color-heading)' }}>
                      Enquiry Submitted Successfully
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-corporate-grey)', maxWidth: '420px', margin: '0 auto', lineHeight: 1.6 }}>
                      Thank you! Your enquiry has been sent successfully. Our team will review your specifications and contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                      {/* Name */}
                      <div className="form-group">
                        <label className="form-label">Contact Person Name *</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="e.g. Suresh Patil"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        {errors.name && <div className="form-error-msg">{errors.name}</div>}
                      </div>

                      {/* Company */}
                      <div className="form-group">
                        <label className="form-label">Company / Manufacturing Unit *</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="e.g. Precision Engineering Ltd."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                        {errors.company && <div className="form-error-msg">{errors.company}</div>}
                      </div>

                      {/* Email */}
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input
                          type="email"
                          className="form-input"
                          placeholder="e.g. quality@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        {errors.email && <div className="form-error-msg">{errors.email}</div>}
                      </div>

                      {/* Phone */}
                      <div className="form-group">
                        <label className="form-label">Phone / Mobile *</label>
                        <div style={{ display: 'flex', alignItems: 'stretch' }}>
                          <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '0 12px',
                            backgroundColor: 'var(--color-grey-light)',
                            border: '1px solid var(--color-grey-border)',
                            borderRight: 'none',
                            borderRadius: 'var(--radius-sm) 0 0 var(--radius-sm)',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            color: 'var(--color-charcoal)',
                            userSelect: 'none'
                          }}>
                            +91
                          </span>
                          <input
                            type="tel"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={10}
                            className="form-input"
                            placeholder="98XXX XXXXX"
                            style={{
                              borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                              flex: 1
                            }}
                            value={formData.phone}
                            onChange={(e) => {
                              const numeric = e.target.value.replace(/\D/g, '').slice(0, 10);
                              setFormData({ ...formData, phone: numeric });
                            }}
                            onKeyDown={(e) => {
                              if (['Backspace', 'Tab', 'Delete', 'ArrowLeft', 'ArrowRight', 'Enter', 'Home', 'End'].includes(e.key)) {
                                return;
                              }
                              if (e.ctrlKey || e.metaKey) {
                                return;
                              }
                              if (!/^\d$/.test(e.key)) {
                                e.preventDefault();
                              }
                            }}
                          />
                        </div>
                        {errors.phone && <div className="form-error-msg">{errors.phone}</div>}
                      </div>

                      {/* Product Interest */}
                      <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                        <label className="form-label">Gauge Category of Interest</label>
                        <select
                          className="form-select"
                          value={formData.productInterest}
                          onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                        >
                          {PRODUCTS.map(p => (
                            <option key={p.id} value={p.name}>{p.name}</option>
                          ))}
                          <option value="Custom Gauge / Tooling to Drawing">Custom Gauge / Tooling to Drawing</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                        <label className="form-label">Application Notes / Message</label>
                        <textarea
                          className="form-textarea"
                          rows={3}
                          placeholder="Describe specific engineering tolerances, surface finish requirements, wear allowances, or delivery timeline..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ width: '100%', marginTop: '6px', padding: '12px', fontWeight: '600' }}
                    >
                      <Send size={15} /> Submit Technical Enquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Plant Location Information */}
          <div style={{ marginTop: '48px', paddingTop: '36px', borderTop: '1px solid var(--color-grey-border)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-heading)' }}>
              Plant Geographic Location
            </h3>
            <div style={{
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--color-grey-border)',
              backgroundColor: 'var(--color-grey-light)',
              padding: '32px 24px',
              textAlign: 'center'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-grey-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 12px auto',
                color: 'var(--color-charcoal)'
              }}>
                <MapPin size={22} />
              </div>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--color-heading)', marginBottom: '6px' }}>
                Jupiter Gauges Works & Metrology Center
              </h4>
              <p style={{ color: 'var(--color-corporate-grey)', fontSize: '0.875rem', maxWidth: '440px', margin: '0 auto 12px auto' }}>
                {COMPANY_INFO.contact.addressLine1}, {COMPANY_INFO.contact.addressLine2}, {COMPANY_INFO.contact.addressState}
              </p>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-corporate-grey)' }}>
                Industrial manufacturing and metrology inspection facility. Factory visits by appointment.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
