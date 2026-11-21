import React, { useState, useEffect, useCallback } from 'react';
import { 
  X, 
  CheckCircle, 
  Send 
} from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function QuoteModal({ isOpen, onClose, preselectedProduct = null }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const [productChoice, setProductChoice] = useState('');
  const activeProduct = productChoice || preselectedProduct || PRODUCTS[0]?.name || '';

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const resetForm = useCallback(() => {
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      message: ''
    });
    setProductChoice('');
    setErrors({});
    setSubmitted(false);
  }, []);

  const handleModalClose = useCallback(() => {
    resetForm();
    onClose();
  }, [resetForm, onClose]);

  // Auto-close and refresh the modal 2.5s after successful submission
  useEffect(() => {
    if (!submitted) return;

    const timer = setTimeout(() => {
      handleModalClose();
    }, 2500);

    return () => clearTimeout(timer);
  }, [submitted, handleModalClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.length !== 10) {
      errs.phone = 'Please enter a valid 10-digit number';
    }
    if (formData.email.trim() && !formData.email.includes('@')) errs.email = 'Valid email address is required';
    if (!formData.message.trim()) errs.message = 'Your message is required';
    if (!activeProduct) errs.product = 'Please select a gauge type';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={handleModalClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="badge badge-neutral" style={{ marginBottom: '4px' }}>
              RFQ Transmittal
            </span>
            <h3 id="modal-title" style={{ fontSize: '1.25rem', color: 'var(--color-heading)', margin: 0 }}>
              Request a Technical Quotation
            </h3>
          </div>
          <button onClick={handleModalClose} className="modal-close-btn" aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '36px 16px' }}>
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
                <CheckCircle size={32} />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '8px', color: 'var(--color-heading)' }}>
                Quotation Request Sent Successfully
              </h3>
              <p style={{ maxWidth: '440px', margin: '0 auto 24px auto', fontSize: '0.875rem', color: 'var(--color-corporate-grey)', lineHeight: 1.5 }}>
                Thank you! Your quotation request has been sent successfully. Our technical team will review your specifications and contact you shortly.
              </p>
              <button type="button" onClick={handleModalClose} className="btn btn-primary btn-sm" style={{ minWidth: '120px' }}>
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '14px'
              }}>
                {/* Product Selection */}
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Select Gauge Type *</label>
                  <select 
                    className="form-select"
                    value={activeProduct}
                    onChange={(e) => setProductChoice(e.target.value)}
                  >
                    {PRODUCTS.map(p => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                    <option value="Custom Gauge / Non-Standard Tooling">Custom Gauge / Non-Standard Tooling</option>
                  </select>
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
                    placeholder="e.g. Precision Engineering Ltd."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                  {errors.company && <div className="form-error-msg">{errors.company}</div>}
                </div>

                {/* Phone Number */}
                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp *</label>
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

                {/* Email Address */}
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    placeholder="e.g. purchase@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <div className="form-error-msg">{errors.email}</div>}
                </div>

                {/* Your Message */}
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Your Message *</label>
                  <textarea 
                    className="form-textarea" 
                    rows={3}
                    placeholder="Enter your requirements, dimensions, quantities, or specific questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && <div className="form-error-msg">{errors.message}</div>}
                </div>
              </div>

              <div style={{
                marginTop: '8px',
                paddingTop: '16px',
                borderTop: '1px solid var(--color-grey-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-corporate-grey)' }}>
                  ✓ Dimensional inspection certificate traceable to standards included.
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button type="button" onClick={onClose} className="btn btn-outline-grey btn-sm">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary btn-sm" style={{ fontWeight: '600' }}>
                    <Send size={14} /> Submit RFQ
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
