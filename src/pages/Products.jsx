import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  FileText, 
  Check, 
  SlidersHorizontal,
  Compass,
  Layers,
  Sparkles
} from 'lucide-react';
import { PRODUCTS, PRODUCT_CATEGORIES, TECHNICAL_STANDARDS } from '../data/products';

export default function Products({ onOpenQuote, onSelectProduct, initialCategory = 'all' }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  // Expose global hook for navbar dropdown category clicks
  useEffect(() => {
    window.filterProductCategory = (catId) => {
      setSelectedCategory(catId);
    };
    return () => {
      window.filterProductCategory = null;
    };
  }, []);

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.standard.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.material.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <span className="section-tag">Precision Gauges Catalogue</span>
            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: '800',
              color: '#FFFFFF',
              marginBottom: '16px'
            }}>
              Industrial Limit Gauges & <span style={{ color: 'var(--color-primary-yellow)' }}>Metrology Standards</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#B0B8C0', lineHeight: 1.6 }}>
              Manufactured with hardened tool steel, cryogenic sub-zero stabilization, and super-finished lapping. Available in standard catalog ranges and custom dimensions to customer engineering drawings.
            </p>
          </div>
        </div>
      </section>

      {/* Main Catalogue Area */}
      <section className="section">
        <div className="container">
          {/* Controls Bar: Category Pills + Search */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginBottom: '40px'
          }}>
            {/* Search Input */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'var(--color-surface)',
              border: '1.5px solid var(--color-grey-border)',
              borderRadius: 'var(--radius-md)',
              padding: '6px 16px',
              maxWidth: '480px'
            }}>
              <Search size={18} color="var(--color-grey-medium)" style={{ marginRight: '10px' }} />
              <input
                type="text"
                placeholder="Search by gauge name, standard (IS, DIN, ISO), or material..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  width: '100%',
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font-body)',
                  backgroundColor: 'transparent'
                }}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  style={{ fontSize: '0.8rem', color: 'var(--color-grey-medium)', padding: '4px' }}
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    border: '1.5px solid',
                    borderColor: selectedCategory === cat.id ? 'var(--color-primary-yellow)' : 'var(--color-grey-border)',
                    backgroundColor: selectedCategory === cat.id ? 'var(--color-primary-yellow)' : 'var(--color-surface)',
                    color: selectedCategory === cat.id ? 'var(--color-charcoal)' : 'var(--color-grey-medium)',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-lg)',
              border: '1px dashed var(--color-grey-border)'
            }}>
              <SlidersHorizontal size={40} color="var(--color-grey-medium)" style={{ margin: '0 auto 16px auto' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>No Gauges Match Your Filter</h3>
              <p style={{ color: 'var(--color-grey-medium)', marginBottom: '20px' }}>
                Try searching with a different keyword or reset category selection.
              </p>
              <button 
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="btn btn-secondary"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
              marginBottom: '56px'
            }}>
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-img-wrap">
                    <img src={product.image} alt={product.name} className="product-img" loading="lazy" />
                    <span className="badge badge-yellow" style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(255, 248, 225, 0.95)'
                    }}>
                      {product.standard}
                    </span>
                    <span className="badge badge-charcoal" style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(37, 40, 43, 0.9)'
                    }}>
                      <span style={{ color: 'var(--color-accent-yellow)' }}>{product.hardness.split('(')[0]}</span>
                    </span>
                  </div>

                  <div className="product-card-body">
                    <h3 className="product-card-title">{product.name}</h3>
                    <p className="product-card-desc">{product.shortDesc}</p>

                    <div className="product-specs-preview">
                      <div className="spec-preview-row">
                        <span className="spec-preview-label">Material:</span>
                        <span className="spec-preview-val">{product.material.split('/')[0]}</span>
                      </div>
                      <div className="spec-preview-row">
                        <span className="spec-preview-label">Tolerance Class:</span>
                        <span className="spec-preview-val">{product.toleranceGrade.split(',')[0]}</span>
                      </div>
                      <div className="spec-preview-row">
                        <span className="spec-preview-label">Size Range:</span>
                        <span className="spec-preview-val">{product.sizeRange}</span>
                      </div>
                      <div className="spec-preview-row">
                        <span className="spec-preview-label">Sub-Zero Treated:</span>
                        <span className="spec-preview-val" style={{ color: 'var(--color-success)' }}>
                          -80°C Stabilized
                        </span>
                      </div>
                    </div>

                    <div className="product-card-actions">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="btn btn-secondary btn-sm"
                      >
                        Technical Specs
                      </button>
                      <button
                        onClick={() => onOpenQuote(product.name)}
                        className="btn btn-primary btn-sm"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Custom Non-Standard Gauging Box */}
          <div style={{
            backgroundColor: '#1E2124',
            borderRadius: 'var(--radius-xl)',
            padding: '40px',
            color: '#FFFFFF',
            border: '1px solid #3A3F45',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }} className="industrial-grid-bg">
            <div style={{ maxWidth: '640px' }}>
              <span className="badge badge-yellow" style={{ marginBottom: '12px' }}>
                Engineering Customization
              </span>
              <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '8px' }}>
                Require Custom Limits, Stepped Gauges, or Non-Standard Pitches?
              </h3>
              <p style={{ color: '#B0B8C0', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Jupiter Gauges manufactures custom limit gauges tailored to your proprietary component drawings, keyway gauges, splines, and special thread profiles (Trapezoidal, ACME, Buttress, and multi-start).
              </p>
            </div>
            <button
              onClick={() => onOpenQuote('Custom Gauge / Non-Standard Tooling')}
              className="btn btn-primary btn-lg"
              style={{ fontWeight: '700' }}
            >
              <FileText size={18} /> Request Custom Gauge Quotation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
