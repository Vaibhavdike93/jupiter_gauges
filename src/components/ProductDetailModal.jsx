import React from 'react';
import { 
  X, 
  ShieldCheck, 
  Check, 
  FileText, 
  ArrowRight,
  Layers,
  Thermometer,
  Compass,
  Cpu
} from 'lucide-react';

export default function ProductDetailModal({ product, isOpen, onClose, onOpenQuote }) {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="product-detail-title">
      <div 
        className="modal-content" 
        style={{ maxWidth: '840px' }} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <span className="badge badge-yellow" style={{ marginBottom: '6px' }}>
              {product.standard}
            </span>
            <h3 id="product-detail-title" style={{ fontSize: '1.5rem', color: 'var(--color-charcoal)' }}>
              {product.name}
            </h3>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* Top Image & Overview Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '32px'
          }}>
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              backgroundColor: '#1E2124',
              border: '1px solid var(--color-grey-border)'
            }}>
              <img 
                src={product.image} 
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-charcoal)', marginBottom: '20px' }}>
                {product.fullDesc}
              </p>

              <div style={{
                backgroundColor: 'var(--color-bg)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                border: '1px solid var(--color-grey-border)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                fontSize: '0.8125rem'
              }}>
                <div>
                  <div style={{ color: 'var(--color-grey-medium)' }}>Hardness:</div>
                  <strong style={{ fontFamily: 'var(--font-mono)' }}>{product.hardness}</strong>
                </div>
                <div>
                  <div style={{ color: 'var(--color-grey-medium)' }}>Tolerance:</div>
                  <strong style={{ fontFamily: 'var(--font-mono)' }}>{product.toleranceGrade}</strong>
                </div>
                <div>
                  <div style={{ color: 'var(--color-grey-medium)' }}>Size Range:</div>
                  <strong style={{ fontFamily: 'var(--font-mono)' }}>{product.sizeRange}</strong>
                </div>
                <div>
                  <div style={{ color: 'var(--color-grey-medium)' }}>Stabilization:</div>
                  <strong style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-success)' }}>
                    {product.subZeroTreated}
                  </strong>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{
              fontSize: '1.15rem',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Compass size={18} color="var(--color-primary-yellow)" />
              Metrological & Material Specifications
            </h4>

            <div style={{
              border: '1px solid var(--color-grey-border)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--color-grey-border)', backgroundColor: 'var(--color-surface)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--color-grey-medium)', width: '35%' }}>
                      Governing Standard
                    </td>
                    <td style={{ padding: '12px 16px', fontFamily: 'var(--font-mono)', color: 'var(--color-charcoal)' }}>
                      {product.standard}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-grey-border)', backgroundColor: 'var(--color-bg)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--color-grey-medium)' }}>
                      Base Material Metallurgy
                    </td>
                    <td style={{ padding: '12px 16px', color: 'var(--color-charcoal)' }}>
                      {product.material}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-grey-border)', backgroundColor: 'var(--color-surface)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--color-grey-medium)' }}>
                      Surface Hardness
                    </td>
                    <td style={{ padding: '12px 16px', fontFamily: 'var(--font-mono)', color: 'var(--color-charcoal)' }}>
                      {product.hardness}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-grey-border)', backgroundColor: 'var(--color-bg)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--color-grey-medium)' }}>
                      Manufacturing Range
                    </td>
                    <td style={{ padding: '12px 16px', fontFamily: 'var(--font-mono)', color: 'var(--color-charcoal)' }}>
                      {product.sizeRange}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-grey-border)', backgroundColor: 'var(--color-surface)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--color-grey-medium)' }}>
                      Cryogenic Sub-Zero Treatment
                    </td>
                    <td style={{ padding: '12px 16px', color: 'var(--color-charcoal)' }}>
                      {product.subZeroTreated}
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--color-bg)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--color-grey-medium)' }}>
                      Calibration Traceability
                    </td>
                    <td style={{ padding: '12px 16px', color: 'var(--color-charcoal)' }}>
                      {product.calibration}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Engineering Features */}
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{
              fontSize: '1.15rem',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Cpu size={18} color="var(--color-primary-yellow)" />
              Key Design & Inspection Features
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px' }}>
              {product.features.map((feat, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  backgroundColor: 'var(--color-bg)',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.85rem'
                }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(244, 196, 48, 0.2)',
                    color: 'var(--color-charcoal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Industrial Applications */}
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{
              fontSize: '1.15rem',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Layers size={18} color="var(--color-primary-yellow)" />
              Target Engineering Applications
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {product.applications.map((app, idx) => (
                <li key={idx} style={{
                  backgroundColor: 'var(--color-yellow-light)',
                  color: '#6E5300',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8125rem',
                  fontWeight: '500',
                  border: '1px solid rgba(244, 196, 48, 0.3)'
                }}>
                  • {app}
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Actions */}
          <div style={{
            paddingTop: '20px',
            borderTop: '1px solid var(--color-grey-border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <button onClick={onClose} className="btn btn-secondary">
              Back to Catalog
            </button>
            <button 
              onClick={() => {
                onClose();
                onOpenQuote(product.name);
              }}
              className="btn btn-primary"
            >
              <FileText size={16} /> Request Quotation for this Gauge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
