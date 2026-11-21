import React, { useState } from 'react';
import { 
  FileText, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  MessageSquare,
  Upload,
  Download
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { COMPANY_INFO } from '../data/company';
import InnerHeroBanner from '../components/InnerHeroBanner';

export default function Quote({ setActivePage }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: PRODUCTS[0]?.name || 'Plain Plug Gauges (GO / NO-GO)',
    toleranceClass: 'Class XX (±0.001mm)',
    nominalSize: '',
    quantity: '1',
    standardsConformity: 'IS 3455 / ISO 1502',
    deliveryUrgency: 'Standard (1-2 Weeks)',
    notes: '',
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

    const ref = `JG-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    setSubmitted(true);
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const handleDownloadTransmittal = () => {
    const slipText = `=====================================================
JUPITER GAUGES - FORMAL RFQ TRANSMITTAL
Reference: ${referenceId}
Date: ${new Date().toLocaleDateString()}
=====================================================

CLIENT DETAILS:
- Contact Person: ${formData.name}
- Organisation: ${formData.company}
- Email: ${formData.email}
- Phone: ${formData.phone}

GAUGE SPECIFICATIONS:
- Primary Product: ${formData.product}
- Nominal Size / Dim: ${formData.nominalSize || 'As per engineering drawing'}
- Tolerance Class: ${formData.toleranceClass}
- Governing Standard: ${formData.standardsConformity}
- Required Quantity: ${formData.quantity} Units
- Delivery Requirement: ${formData.deliveryUrgency}
- Drawing / File Attached: ${formData.fileName || 'Attached under separate transmittal'}
- Special Technical Notes: ${formData.notes || 'Standard manufacturing tolerance applies'}

DISPATCH & CERTIFICATION DESK:
Jupiter Gauges Works - Kharadi, Pune, Maharashtra
Sales Desk: ${COMPANY_INFO.contact.emailSales} | ${COMPANY_INFO.contact.phonePrimary}
=====================================================`;

    const blob = new Blob([slipText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${referenceId}-JupiterGauges-RFQ.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello Jupiter Gauges,\nI have submitted a formal RFQ:\n` +
      `Product: ${formData.product}\n` +
      `Size/Tol: ${formData.nominalSize || 'As per drawing'} (${formData.toleranceClass})\n` +
      `Qty: ${formData.quantity}\n` +
      `Company: ${formData.company}\n` +
      `Contact: ${formData.name} (${formData.phone})`
    );
    window.open(`https://wa.me/${COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${msg}`, '_blank');
  };

  return (
    <div>
      {/* Page Hero Banner */}
      <InnerHeroBanner
        heading="Get the Right Gauging Solution for Your Requirements"
        description="Share your product specifications and measurement requirements. Our team will help you with suitable precision gauging solutions."
        bgImage="./images/master_setting_rings.jpg"
        breadcrumbs={[
          { label: 'Home', pageId: 'home' },
          { label: 'Enquire Now' }
        ]}
        setActivePage={setActivePage}
      />

      {/* Main RFQ Form Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'flex-start'
          }}>
            {/* Left Column: Comprehensive RFQ Form */}
            <div style={{
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-grey-border)',
              padding: 'clamp(20px, 3.5vw, 36px)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '24px 12px' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-success-bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px auto'
                  }}>
                    <CheckCircle2 size={36} color="var(--color-success)" />
                  </div>

                  <span className="badge badge-success" style={{ marginBottom: '12px', fontSize: '0.8rem' }}>
                    RFQ Registered: {referenceId}
                  </span>

                  <h3 style={{ fontSize: '1.45rem', color: 'var(--color-heading)', marginBottom: '10px' }}>
                    Quotation Request Transmitted
                  </h3>

                  <p style={{ color: 'var(--color-corporate-grey)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '28px', maxWidth: '480px', margin: '0 auto 28px auto' }}>
                    Thank you, <strong>{formData.name}</strong>. Our metrology engineering team at Jupiter Gauges has received your requirements for <strong>{formData.product}</strong> and will prepare an official commercial quotation within 4–6 business hours.
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
                    <button
                      onClick={handleDownloadTransmittal}
                      className="btn btn-secondary btn-sm"
                    >
                      <Download size={14} /> Download RFQ Slip (.txt)
                    </button>
                    <button
                      onClick={handleWhatsApp}
                      className="btn btn-primary btn-sm"
                    >
                      <MessageSquare size={14} /> Speed Track on WhatsApp
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn btn-outline-grey btn-sm"
                    >
                      Submit Another Item
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '24px' }}>
                    <span className="badge badge-neutral" style={{ marginBottom: '6px' }}>
                      Commercial & Technical Quotation
                    </span>
                    <h2 style={{ fontSize: '1.4rem', color: 'var(--color-heading)', margin: 0 }}>
                      Engineering Specification Sheet
                    </h2>
                    <p style={{ color: 'var(--color-corporate-grey)', fontSize: '0.85rem', marginTop: '6px' }}>
                      Provide target dimensions, pitch diameters, or attach CAD blueprints (.dwg, .dxf, .pdf) for drawing feasibility.
                    </p>
                  </div>

                  {/* Form Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', marginBottom: '18px' }}>
                    {/* Full Name */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '600', marginBottom: '6px', color: 'var(--color-heading)' }}>
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rajesh Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          border: `1px solid ${errors.name ? 'var(--color-error)' : 'var(--color-grey-border)'}`,
                          borderRadius: 'var(--radius-xs)',
                          fontSize: '0.9rem'
                        }}
                      />
                      {errors.name && <span style={{ color: 'var(--color-error)', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '600', marginBottom: '6px', color: 'var(--color-heading)' }}>
                        Company / Plant Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Bharat Auto Components Ltd."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          border: `1px solid ${errors.company ? 'var(--color-error)' : 'var(--color-grey-border)'}`,
                          borderRadius: 'var(--radius-xs)',
                          fontSize: '0.9rem'
                        }}
                      />
                      {errors.company && <span style={{ color: 'var(--color-error)', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.company}</span>}
                    </div>

                    {/* Corporate Email */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '600', marginBottom: '6px', color: 'var(--color-heading)' }}>
                        Corporate Email ID *
                      </label>
                      <input
                        type="email"
                        placeholder="purchase@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          border: `1px solid ${errors.email ? 'var(--color-error)' : 'var(--color-grey-border)'}`,
                          borderRadius: 'var(--radius-xs)',
                          fontSize: '0.9rem'
                        }}
                      />
                      {errors.email && <span style={{ color: 'var(--color-error)', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '600', marginBottom: '6px', color: 'var(--color-heading)' }}>
                        Mobile / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        maxLength="10"
                        placeholder="10-digit number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          border: `1px solid ${errors.phone ? 'var(--color-error)' : 'var(--color-grey-border)'}`,
                          borderRadius: 'var(--radius-xs)',
                          fontSize: '0.9rem'
                        }}
                      />
                      {errors.phone && <span style={{ color: 'var(--color-error)', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.phone}</span>}
                    </div>
                  </div>

                  {/* Product & Specifications Selection */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', marginBottom: '18px' }}>
                    {/* Gauge Category */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '600', marginBottom: '6px', color: 'var(--color-heading)' }}>
                        Gauge Type / Product Category
                      </label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          border: '1px solid var(--color-grey-border)',
                          borderRadius: 'var(--radius-xs)',
                          fontSize: '0.875rem',
                          backgroundColor: 'var(--color-white)'
                        }}
                      >
                        {PRODUCTS.map((prod) => (
                          <option key={prod.id} value={prod.name}>
                            {prod.name}
                          </option>
                        ))}
                        <option value="Custom Gauge / Non-Standard Tooling">
                          Custom Limit Gauge to Drawing
                        </option>
                      </select>
                    </div>

                    {/* Tolerance Class */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '600', marginBottom: '6px', color: 'var(--color-heading)' }}>
                        Tolerance Class / Grade
                      </label>
                      <select
                        value={formData.toleranceClass}
                        onChange={(e) => setFormData({ ...formData, toleranceClass: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          border: '1px solid var(--color-grey-border)',
                          borderRadius: 'var(--radius-xs)',
                          fontSize: '0.875rem',
                          backgroundColor: 'var(--color-white)'
                        }}
                      >
                        <option value="Class XX (±0.001mm)">Class XX (Ultra-Precision ±0.001mm)</option>
                        <option value="Class X (±0.0015mm)">Class X (Precision Metrology ±0.0015mm)</option>
                        <option value="Class Y (±0.002mm)">Class Y (Standard Shopfloor ±0.002mm)</option>
                        <option value="ISO 6H / 6g Thread Limits">ISO 6H / 6g Thread Fit Limits</option>
                        <option value="H7 / g6 Limit Fit Standards">ISO H7 / g6 Cylindrical Fit Standards</option>
                        <option value="Grade 0 Calibration Standards">Grade 0 Metrology Room Standards</option>
                      </select>
                    </div>

                    {/* Nominal Size */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '600', marginBottom: '6px', color: 'var(--color-heading)' }}>
                        Nominal Size / Dimension Range
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ø25.000 mm, M12x1.5-6H"
                        value={formData.nominalSize}
                        onChange={(e) => setFormData({ ...formData, nominalSize: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          border: '1px solid var(--color-grey-border)',
                          borderRadius: 'var(--radius-xs)',
                          fontSize: '0.9rem'
                        }}
                      />
                    </div>

                    {/* Quantity */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '600', marginBottom: '6px', color: 'var(--color-heading)' }}>
                        Required Quantity (Sets/Pcs)
                      </label>
                      <input
                        type="number"
                        min="1"
                        placeholder="1"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          border: '1px solid var(--color-grey-border)',
                          borderRadius: 'var(--radius-xs)',
                          fontSize: '0.9rem'
                        }}
                      />
                    </div>
                  </div>

                  {/* Drawing File Attachment Mock */}
                  <div style={{ marginBottom: '18px' }}>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '600', marginBottom: '6px', color: 'var(--color-heading)' }}>
                      Engineering Drawing / CAD Blueprint (Optional)
                    </label>
                    <div style={{
                      border: '1.5px dashed var(--color-grey-border)',
                      borderRadius: 'var(--radius-xs)',
                      padding: '18px',
                      textAlign: 'center',
                      backgroundColor: 'var(--color-grey-light)'
                    }}>
                      <Upload size={22} color="var(--color-corporate-grey)" style={{ margin: '0 auto 8px auto', display: 'block' }} />
                      <div style={{ fontSize: '0.825rem', color: 'var(--color-heading)', fontWeight: '600', marginBottom: '2px' }}>
                        {formData.fileName ? formData.fileName : 'Upload Drawing File (.pdf, .dwg, .dxf, .step, .png)'}
                      </div>
                      <div style={{ fontSize: '0.725rem', color: 'var(--color-corporate-grey)' }}>
                        Max file size: 15 MB. All drawing transfers protected under NDA.
                      </div>
                      <input
                        type="file"
                        id="quote-file-input"
                        style={{ display: 'none' }}
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setFormData({ ...formData, fileName: e.target.files[0].name });
                          }
                        }}
                      />
                      <label
                        htmlFor="quote-file-input"
                        style={{
                          display: 'inline-block',
                          marginTop: '10px',
                          padding: '6px 14px',
                          backgroundColor: 'var(--color-white)',
                          border: '1px solid var(--color-grey-border)',
                          borderRadius: 'var(--radius-xs)',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          cursor: 'pointer'
                        }}
                      >
                        Choose File
                      </label>
                    </div>
                  </div>

                  {/* Notes / Technical Requirements */}
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '600', marginBottom: '6px', color: 'var(--color-heading)' }}>
                      Technical Requirements / Custom Specifications
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Include wear allowance, carbide tip requirements, special pitches, depth steps, or calibration certificate preferences..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid var(--color-grey-border)',
                        borderRadius: 'var(--radius-xs)',
                        fontSize: '0.875rem',
                        fontFamily: 'inherit',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '14px 20px', fontSize: '0.95rem' }}
                  >
                    <Send size={16} /> Submit Request for Quotation (RFQ)
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: RFQ Guidelines & Metrology Assurance */}
            <div>
              <div style={{
                backgroundColor: 'var(--color-grey-light)',
                borderRadius: 'var(--radius-md)',
                padding: '28px',
                border: '1px solid var(--color-grey-border)',
                marginBottom: '24px'
              }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-heading)', marginBottom: '14px' }}>
                  Jupiter Gauges Quotation Guidelines
                </h3>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.84rem', color: 'var(--color-body-text)' }}>
                    <Clock size={16} color="var(--color-charcoal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Rapid Turnaround:</strong> Standard catalogue items quoted in 4 business hours. Custom drawings evaluated within 24 hours.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.84rem', color: 'var(--color-body-text)' }}>
                    <ShieldCheck size={16} color="var(--color-charcoal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>100% Traceability:</strong> Every gauge accompanied by an individual inspection report traceable to NPL standards.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.84rem', color: 'var(--color-body-text)' }}>
                    <FileText size={16} color="var(--color-charcoal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Drawing Confidentiality:</strong> Proprietary drawings and CAD files are handled under strict industrial confidentiality.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.84rem', color: 'var(--color-body-text)' }}>
                    <CheckCircle2 size={16} color="var(--color-charcoal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Annual Rate Contracts:</strong> Special volume pricing and scheduled delivery options for production OEM accounts.</span>
                  </li>
                </ul>

                <div style={{
                  paddingTop: '16px',
                  borderTop: '1px solid var(--color-grey-border)',
                  fontSize: '0.8rem',
                  color: 'var(--color-corporate-grey)'
                }}>
                  Need immediate technical clarification? Call our works desk directly: <strong style={{ color: 'var(--color-heading)' }}>{COMPANY_INFO.contact.phonePrimary}</strong>
                </div>
              </div>

              {/* Direct Works Contact Card */}
              <div style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                border: '1px solid var(--color-grey-border)'
              }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-charcoal)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                  Direct Sales Desk
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-corporate-grey)', marginBottom: '14px' }}>
                  Sr. No. 27, Behind Hotel Relax, Kharadi, Pune - 411014, Maharashtra
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem' }}>
                  <div><strong>Email:</strong> {COMPANY_INFO.contact.emailSales}</div>
                  <div><strong>Works:</strong> {COMPANY_INFO.contact.phonePrimary}</div>
                  <div><strong>Hours:</strong> {COMPANY_INFO.contact.workingHours}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
