import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle, 
  FileText, 
  Upload, 
  Send, 
  Download, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { COMPANY_INFO } from '../data/company';

export default function QuoteModal({ isOpen, onClose, preselectedProduct = null }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    sizeOrTolerance: '',
    quantity: '1',
    deliveryTimeline: 'Standard (1-2 Weeks)',
    notes: '',
    attachedFileName: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [rfqReferenceNumber, setRfqReferenceNumber] = useState('');

  useEffect(() => {
    if (preselectedProduct) {
      setFormData(prev => ({ ...prev, product: preselectedProduct }));
    } else {
      setFormData(prev => ({ ...prev, product: PRODUCTS[0]?.name || '' }));
    }
    setSubmitted(false);
    setErrors({});
  }, [isOpen, preselectedProduct]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid corporate email is required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid phone number is required';
    if (!formData.product) errs.product = 'Please select a gauge type';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const ref = `JG-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setRfqReferenceNumber(ref);
    setSubmitted(true);
  };

  const handleDownloadRfq = () => {
    const rfqText = `=====================================================
JUPITER GAUGES - REQUEST FOR QUOTATION (RFQ)
Reference ID: ${rfqReferenceNumber}
Date: ${new Date().toLocaleDateString()}
=====================================================

CLIENT DETAILS:
- Name: ${formData.name}
- Company: ${formData.company}
- Email: ${formData.email}
- Phone: ${formData.phone}

TECHNICAL SPECIFICATIONS:
- Product Type: ${formData.product}
- Size / Dimension / Tolerance: ${formData.sizeOrTolerance || 'Standard Catalog Range'}
- Required Quantity: ${formData.quantity} Units
- Delivery Timeline: ${formData.deliveryTimeline}
- Drawing Attached: ${formData.attachedFileName || 'Will send via email'}
- Technical Notes: ${formData.notes || 'None specified'}

SUPPLIER:
Jupiter Gauges
Email: ${COMPANY_INFO.contact.emailSales}
Phone: ${COMPANY_INFO.contact.phonePrimary}
Website: https://jupitergauges.com
=====================================================`;

    const blob = new Blob([rfqText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${rfqReferenceNumber}-JupiterGauges-RFQ.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Jupiter Gauges,\nI have submitted RFQ *${rfqReferenceNumber}*:\n` +
      `Product: ${formData.product}\n` +
      `Size/Tolerance: ${formData.sizeOrTolerance || 'Catalog Range'}\n` +
      `Qty: ${formData.quantity}\n` +
      `Company: ${formData.company}\n` +
      `Contact: ${formData.name} (${formData.phone})`
    );
    window.open(`https://wa.me/${COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-primary-yellow)',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: '700',
              textTransform: 'uppercase'
            }}>
              <FileText size={14} /> Official Technical RFQ
            </div>
            <h3 id="modal-title" style={{ fontSize: '1.4rem', marginTop: '2px' }}>
              Request a Technical Quotation
            </h3>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '24px 8px' }}>
              <div style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-success-bg)',
                color: 'var(--color-success)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}>
                <CheckCircle size={40} />
              </div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>
                Quotation Request Generated!
              </h3>
              <p style={{ maxWidth: '480px', margin: '0 auto 24px auto', fontSize: '0.95rem' }}>
                Your quotation request has been prepared with reference code{' '}
                <strong style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-charcoal)' }}>
                  {rfqReferenceNumber}
                </strong>
                . Our metrology engineering team will review your specifications and contact you promptly.
              </p>

              <div style={{
                backgroundColor: 'var(--color-bg)',
                borderRadius: 'var(--radius-lg)',
                padding: '20px',
                textAlign: 'left',
                border: '1px solid var(--color-grey-border)',
                marginBottom: '24px',
                fontSize: '0.875rem'
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <span style={{ color: 'var(--color-grey-medium)' }}>Item:</span>{' '}
                    <strong>{formData.product}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--color-grey-medium)' }}>Quantity:</span>{' '}
                    <strong>{formData.quantity} Units</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--color-grey-medium)' }}>Client:</span>{' '}
                    <strong>{formData.name} ({formData.company})</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--color-grey-medium)' }}>Specs:</span>{' '}
                    <strong>{formData.sizeOrTolerance || 'Standard Grade'}</strong>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
                <button onClick={handleDownloadRfq} className="btn btn-primary">
                  <Download size={16} /> Download RFQ Summary (.txt)
                </button>
                <button onClick={handleWhatsAppSend} className="btn btn-secondary">
                  <MessageSquare size={16} /> Send via WhatsApp
                </button>
                <button onClick={onClose} className="btn btn-dark">
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '16px'
              }}>
                {/* Product Selection */}
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Select Gauge / Measuring Instrument *</label>
                  <select 
                    className="form-select"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  >
                    {PRODUCTS.map(p => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                    <option value="Custom Gauge / Non-Standard Tooling">Custom Gauge / Non-Standard Tooling</option>
                  </select>
                </div>

                {/* Specific Dimensions / Tolerance */}
                <div className="form-group">
                  <label className="form-label">Nominal Size / Tolerance Class</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Ø 25.000 H7 or M16x2.0 6H"
                    value={formData.sizeOrTolerance}
                    onChange={(e) => setFormData({ ...formData, sizeOrTolerance: e.target.value })}
                  />
                  <small style={{ color: 'var(--color-grey-medium)', fontSize: '0.75rem' }}>
                    Specify nominal dimension, pitch, or drawing tolerance class
                  </small>
                </div>

                {/* Quantity */}
                <div className="form-group">
                  <label className="form-label">Required Quantity (Units) *</label>
                  <input 
                    type="number" 
                    min="1"
                    className="form-input" 
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  />
                </div>

                {/* Full Name */}
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <div className="form-error-msg">{errors.name}</div>}
                </div>

                {/* Company Name */}
                <div className="form-group">
                  <label className="form-label">Company / Manufacturing Unit *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Precision Engineering Works Ltd."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                  {errors.company && <div className="form-error-msg">{errors.company}</div>}
                </div>

                {/* Corporate Email */}
                <div className="form-group">
                  <label className="form-label">Corporate Email Address *</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    placeholder="e.g. purchase@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <div className="form-error-msg">{errors.email}</div>}
                </div>

                {/* Phone Number */}
                <div className="form-group">
                  <label className="form-label">Contact Phone / WhatsApp *</label>
                  <input 
                    type="tel" 
                    className="form-input" 
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  {errors.phone && <div className="form-error-msg">{errors.phone}</div>}
                </div>

                {/* Delivery Timeline */}
                <div className="form-group">
                  <label className="form-label">Target Delivery Timeline</label>
                  <select 
                    className="form-select"
                    value={formData.deliveryTimeline}
                    onChange={(e) => setFormData({ ...formData, deliveryTimeline: e.target.value })}
                  >
                    <option value="Urgent Breakdown (3-5 Days)">Urgent Breakdown (3-5 Days)</option>
                    <option value="Standard (1-2 Weeks)">Standard (1-2 Weeks)</option>
                    <option value="Scheduled Monthly Batch">Scheduled Monthly Batch</option>
                  </select>
                </div>

                {/* Drawing / File indicator */}
                <div className="form-group">
                  <label className="form-label">2D / 3D Component Drawing</label>
                  <div style={{
                    border: '1.5px dashed var(--color-grey-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    backgroundColor: 'var(--color-bg)',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    const input = document.getElementById('rfq-file-input');
                    if (input) input.click();
                  }}
                  >
                    <Upload size={18} color="var(--color-primary-yellow)" />
                    <span style={{ fontSize: '0.85rem', color: formData.attachedFileName ? 'var(--color-charcoal)' : 'var(--color-grey-medium)' }}>
                      {formData.attachedFileName || 'Click to select PDF / CAD drawing (optional)'}
                    </span>
                    <input 
                      id="rfq-file-input" 
                      type="file" 
                      style={{ display: 'none' }} 
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setFormData({ ...formData, attachedFileName: e.target.files[0].name });
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Special Requirements / Hardness / Material Specs</label>
                  <textarea 
                    className="form-textarea" 
                    rows={3}
                    placeholder="Enter any specific requirements such as air relief flats, special thread pitch, carbide tipped anvils, or calibration certificate needs..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>
              </div>

              <div style={{
                marginTop: '12px',
                paddingTop: '20px',
                borderTop: '1px solid var(--color-grey-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-grey-medium)' }}>
                  ✓ Calibration report traceable to NABL / National Standards included.
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button type="button" onClick={onClose} className="btn btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <Send size={16} /> Submit RFQ Proposal
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
