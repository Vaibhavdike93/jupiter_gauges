import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Upload, 
  FileText,
  Download,
  AlertCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { PRODUCTS } from '../data/products';

export default function Contact({ onOpenQuote, preselectedProduct = null }) {
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
  const [referenceId, setReferenceId] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid corporate email is required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid phone number is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }

    const ref = `JG-ENQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    setSubmitted(true);
  };

  const handleDownloadEnquiry = () => {
    const slipText = `=====================================================
JUPITER GAUGES - OFFICIAL INQUIRY TRANSMITTAL
Reference: ${referenceId}
Date: ${new Date().toLocaleDateString()}
=====================================================

CONTACT INFORMATION:
- Name: ${formData.name}
- Company: ${formData.company}
- Email: ${formData.email}
- Phone: ${formData.phone}

INQUIRY DETAILS:
- Gauge Category: ${formData.productInterest}
- Quantity: ${formData.quantity} Units
- Target Size / Tolerance: ${formData.specs || 'As per standard specification'}
- File Attachment: ${formData.fileName || 'None'}
- Message: ${formData.message || 'Standard Request'}

SUPPLIER / RECIPIENT:
Jupiter Gauges - Precision Measuring Instruments
Email: ${COMPANY_INFO.contact.emailSales}
Phone: ${COMPANY_INFO.contact.phonePrimary}
Facility: ${COMPANY_INFO.contact.addressLine1}, ${COMPANY_INFO.contact.addressLine2}
=====================================================`;

    const blob = new Blob([slipText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${referenceId}-JupiterGauges-Enquiry.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello Jupiter Gauges,\nI have submitted an inquiry:\n` +
      `Product: ${formData.productInterest}\n` +
      `Specs: ${formData.specs || 'Standard Range'}\n` +
      `Qty: ${formData.quantity}\n` +
      `Company: ${formData.company}\n` +
      `Name: ${formData.name} (${formData.phone})`
    );
    window.open(`https://wa.me/${COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${msg}`, '_blank');
  };

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
            <span className="section-tag">Direct Factory Contact</span>
            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: '800',
              color: '#FFFFFF',
              marginBottom: '16px'
            }}>
              Contact Works & <span style={{ color: 'var(--color-primary-yellow)' }}>Metrology Center</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#B0B8C0', lineHeight: 1.6 }}>
              Reach out to our engineering sales team for technical queries, limit gauge quotations, drawing evaluations, or scheduled plant inspections.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section">
        <div className="container">
          {/* Identity Notice */}
          <div className="placeholder-notice" style={{ marginBottom: '40px' }}>
            <div>
              <strong>Jupiter Gauges Business Identity Notice:</strong> Company address, contact person, and phone numbers are clearly maintained as editable placeholders. You can directly edit these values in <code>src/data/company.js</code> to reflect updated manufacturing details.
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            {/* Left Column: Contact Cards & Info */}
            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '8px', color: 'var(--color-charcoal)' }}>
                Plant & Corporate Office
              </h2>
              <p style={{ color: 'var(--color-grey-medium)', marginBottom: '32px', fontSize: '0.95rem' }}>
                Our metrology inspection lab and customer support desk are operational Monday to Saturday.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
                {/* Address Card */}
                <div style={{
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px',
                  border: '1px solid var(--color-grey-border)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  gap: '16px'
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-yellow-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#8A6E00',
                    flexShrink: 0
                  }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '4px', color: 'var(--color-charcoal)' }}>
                      Manufacturing Facility & Works
                    </h3>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-charcoal)' }}>
                      {COMPANY_INFO.contact.addressLine1}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-grey-medium)' }}>
                      {COMPANY_INFO.contact.addressLine2}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-grey-medium)' }}>
                      {COMPANY_INFO.contact.addressState}
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div style={{
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px',
                  border: '1px solid var(--color-grey-border)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  gap: '16px'
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-yellow-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#8A6E00',
                    flexShrink: 0
                  }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '4px', color: 'var(--color-charcoal)' }}>
                      Telephone & WhatsApp Inquiries
                    </h3>
                    <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-charcoal)' }}>
                      {COMPANY_INFO.contact.phonePrimary}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-grey-medium)' }}>
                      {COMPANY_INFO.contact.phoneSecondary}
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div style={{
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px',
                  border: '1px solid var(--color-grey-border)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  gap: '16px'
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-yellow-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#8A6E00',
                    flexShrink: 0
                  }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '4px', color: 'var(--color-charcoal)' }}>
                      Electronic Mail Desks
                    </h3>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-charcoal)' }}>
                      Sales & RFQs: {COMPANY_INFO.contact.emailSales}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-grey-medium)' }}>
                      General Inquiries: {COMPANY_INFO.contact.emailInfo}
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div style={{
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px',
                  border: '1px solid var(--color-grey-border)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  gap: '16px'
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-yellow-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#8A6E00',
                    flexShrink: 0
                  }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '4px', color: 'var(--color-charcoal)' }}>
                      Operating Timings
                    </h3>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-charcoal)' }}>
                      {COMPANY_INFO.contact.workingHours}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-success)', marginTop: '2px' }}>
                      ● {COMPANY_INFO.contact.labHours}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <button
                onClick={handleWhatsApp}
                className="btn btn-primary"
                style={{ width: '100%', padding: '16px', fontSize: '1rem' }}
              >
                <MessageSquare size={18} /> Chat with Metrology Desk on WhatsApp
              </button>
            </div>

            {/* Right Column: Interactive Contact & Enquiry Form */}
            <div>
              <div style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-xl)',
                padding: '36px',
                border: '1px solid var(--color-grey-border)',
                boxShadow: 'var(--shadow-md)'
              }}>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '8px', color: 'var(--color-charcoal)' }}>
                  Submit Technical Enquiry
                </h2>
                <p style={{ color: 'var(--color-grey-medium)', marginBottom: '28px', fontSize: '0.9rem' }}>
                  Provide your component specifications or attach a 2D engineering drawing. Our metrology team will evaluate tolerances and respond with quotation details.
                </p>

                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '32px 16px' }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-success-bg)',
                      color: 'var(--color-success)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px auto'
                    }}>
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
                      Enquiry Transmitted Successfully
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-grey-medium)', marginBottom: '20px' }}>
                      Transmittal Reference:{' '}
                      <strong style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-charcoal)' }}>
                        {referenceId}
                      </strong>
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <button onClick={handleDownloadEnquiry} className="btn btn-primary">
                        <Download size={16} /> Download Copy of Inquiry (.txt)
                      </button>
                      <button onClick={handleWhatsApp} className="btn btn-secondary">
                        <MessageSquare size={16} /> Forward via WhatsApp
                      </button>
                      <button 
                        onClick={() => { setSubmitted(false); setErrors({}); }} 
                        className="btn btn-dark btn-sm"
                        style={{ marginTop: '10px' }}
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
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
                          placeholder="e.g. Patil Auto Components Ltd."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                        {errors.company && <div className="form-error-msg">{errors.company}</div>}
                      </div>

                      {/* Email */}
                      <div className="form-group">
                        <label className="form-label">Corporate Email Address *</label>
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
                        <input
                          type="tel"
                          className="form-input"
                          placeholder="e.g. +91 98XXX XXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
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

                      {/* Nominal Size / Specs */}
                      <div className="form-group">
                        <label className="form-label">Nominal Size / Tolerance Class</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="e.g. Ø 20.000 H7 or M12x1.75 6H"
                          value={formData.specs}
                          onChange={(e) => setFormData({ ...formData, specs: e.target.value })}
                        />
                      </div>

                      {/* Quantity */}
                      <div className="form-group">
                        <label className="form-label">Quantity (Units)</label>
                        <input
                          type="number"
                          min="1"
                          className="form-input"
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        />
                      </div>

                      {/* Drawing Upload */}
                      <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                        <label className="form-label">Attach 2D Drawing / Tolerance Specification (Optional)</label>
                        <div
                          style={{
                            border: '1.5px dashed var(--color-grey-border)',
                            borderRadius: 'var(--radius-md)',
                            padding: '12px 16px',
                            backgroundColor: 'var(--color-bg)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            cursor: 'pointer'
                          }}
                          onClick={() => {
                            const fi = document.getElementById('contact-file-input');
                            if (fi) fi.click();
                          }}
                        >
                          <Upload size={18} color="var(--color-primary-yellow)" />
                          <span style={{ fontSize: '0.85rem', color: formData.fileName ? 'var(--color-charcoal)' : 'var(--color-grey-medium)' }}>
                            {formData.fileName || 'Click to select drawing file (PDF, DWG, DXF, PNG)'}
                          </span>
                          <input
                            id="contact-file-input"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={(e) => {
                              if (e.target.files && e.target.files[0]) {
                                setFormData({ ...formData, fileName: e.target.files[0].name });
                              }
                            }}
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                        <label className="form-label">Application Notes / Message</label>
                        <textarea
                          className="form-textarea"
                          rows={3}
                          placeholder="Describe specific engineering requirements, wear allowances, surface finish limits, or project delivery schedule..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ width: '100%', marginTop: '8px', padding: '15px' }}
                    >
                      <Send size={18} /> Transmit Technical Enquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Google Maps Embed Placeholder Section */}
          <div style={{ marginTop: '64px' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>
              Plant Geographic Location
            </h3>
            <div style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              border: '1px solid var(--color-grey-border)',
              backgroundColor: '#25282B',
              height: '360px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF'
            }}>
              {/* Styled Metrology Map Backdrop */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'radial-gradient(circle at 50% 50%, #32373D 0%, #1E2124 100%)',
                opacity: 0.95
              }} className="industrial-grid-bg" />

              <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '24px' }}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-primary-yellow)',
                  color: 'var(--color-charcoal)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto',
                  boxShadow: 'var(--shadow-yellow)'
                }}>
                  <MapPin size={28} />
                </div>
                <h4 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '8px' }}>
                  Jupiter Gauges Manufacturing Works
                </h4>
                <p style={{ color: '#B0B8C0', fontSize: '0.9rem', maxWidth: '440px', margin: '0 auto 16px auto' }}>
                  {COMPANY_INFO.contact.addressLine1}, {COMPANY_INFO.contact.addressLine2}, {COMPANY_INFO.contact.addressState}
                </p>
                <div style={{ display: 'inline-flex', gap: '8px' }}>
                  <span className="badge badge-yellow">
                    Latitude & Longitude Verified Upon Address Confirmation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
