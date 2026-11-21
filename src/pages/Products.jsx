import React, { useState, useEffect } from 'react';
import { 
  Search, 
  FileText, 
  SlidersHorizontal
} from 'lucide-react';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data/products';
import InnerHeroBanner from '../components/InnerHeroBanner';

export default function Products({ onOpenQuote, initialCategory = 'all', setActivePage }) {
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
      item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Page Hero Banner */}
      <InnerHeroBanner
        heading="High-Precision Gauges & Measuring Instruments"
        description="Explore our comprehensive range of precision-engineered gauges and measuring solutions designed to meet demanding industrial quality standards."
        bgImage="./images/thread_gauges.jpg"
        breadcrumbs={[
          { label: 'Home', pageId: 'home' },
          { label: 'Products' }
        ]}
        ctaText="Enquire Now"
        onCtaClick={() => onOpenQuote()}
        setActivePage={setActivePage}
      />

      {/* Main Catalogue Area */}
      <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          {/* Controls Bar: Category Filter Tabs + Search */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginBottom: '36px'
          }}>
            {/* Search Input Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'var(--color-white)',
              border: '1px solid var(--color-grey-border)',
              borderRadius: 'var(--radius-sm)',
              padding: '6px 14px',
              maxWidth: '440px'
            }}>
              <Search size={16} color="var(--color-corporate-grey)" style={{ marginRight: '10px' }} />
              <input
                type="text"
                placeholder="Search by gauge type or name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  width: '100%',
                  fontSize: '0.875rem',
                  fontFamily: 'var(--font-primary)',
                  backgroundColor: 'transparent',
                  color: 'var(--color-charcoal)'
                }}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  style={{ fontSize: '0.75rem', color: 'var(--color-corporate-grey)', padding: '2px 6px' }}
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px'
            }}>
              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '7px 14px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8125rem',
                    fontWeight: '600',
                    border: '1px solid',
                    borderColor: selectedCategory === cat.id ? 'var(--color-charcoal)' : 'var(--color-grey-border)',
                    backgroundColor: selectedCategory === cat.id ? 'var(--color-charcoal)' : 'var(--color-white)',
                    color: selectedCategory === cat.id ? 'var(--color-white)' : 'var(--color-body-text)',
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
              padding: '48px 20px',
              backgroundColor: 'var(--color-grey-light)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--color-grey-border)'
            }}>
              <SlidersHorizontal size={36} color="var(--color-corporate-grey)" style={{ margin: '0 auto 12px auto' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '6px', color: 'var(--color-heading)' }}>
                No Gauges Found
              </h3>
              <p style={{ color: 'var(--color-corporate-grey)', fontSize: '0.875rem', marginBottom: '16px' }}>
                Try searching with a different term or clear category filters.
              </p>
              <button 
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="btn btn-secondary btn-sm"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '24px',
              marginBottom: '48px'
            }}>
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-img-wrap">
                    <img src={product.image} alt={product.name} className="product-img" loading="lazy" />
                  </div>

                  <div className="product-card-body">
                    <h3 className="product-card-title">{product.name}</h3>
                    <p className="product-card-desc">{product.shortDesc}</p>
                    <div className="product-card-actions">
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

          {/* Custom Tooling Callout Box */}
          <div style={{
            backgroundColor: 'var(--color-grey-light)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-grey-border)',
            padding: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}>
            <div style={{ maxWidth: '640px' }}>
              <span className="badge badge-neutral" style={{ marginBottom: '8px' }}>
                Custom Engineering
              </span>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-heading)', marginBottom: '6px' }}>
                Require Non-Standard Limit Gauges or Special Thread Profiles?
              </h3>
              <p style={{ color: 'var(--color-corporate-grey)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                Jupiter Gauges manufactures custom limit gauges engineered to customer drawings, stepped plug gauges, extra-length pins, and special thread forms (Trapezoidal, ACME, Buttress, and multi-start).
              </p>
            </div>
            <button
              onClick={() => onOpenQuote('Custom Gauge / Non-Standard Tooling')}
              className="btn btn-primary"
              style={{ fontWeight: '600' }}
            >
              <FileText size={16} /> Enquire Custom Gauge
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
