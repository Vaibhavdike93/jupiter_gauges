import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function InnerHeroBanner({
  label,
  heading,
  description,
  bgImage,
  breadcrumbs = [],
  ctaText,
  onCtaClick,
  setActivePage
}) {
  const handleBreadcrumbClick = (pageId) => {
    if (setActivePage && pageId) {
      setActivePage(pageId);
    }
  };

  return (
    <section className="inner-hero-banner" role="banner" aria-label={heading}>
      {/* Background Photographic Stage */}
      <div className="inner-hero-bg-wrapper">
        <img
          src={bgImage}
          alt={heading}
          className="inner-hero-bg-img"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Multi-layer Overlays for High-Contrast Industrial Contrast */}
      <div className="inner-hero-overlay-gradient" />
      <div className="inner-hero-overlay-grid" />
      <div className="inner-hero-corner-accent" />

      {/* Content Container */}
      <div className="container inner-hero-content">
        {/* Breadcrumb Navigation */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="inner-hero-breadcrumb" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              const labelText = typeof crumb === 'string' ? crumb : crumb.label;
              const targetPage = typeof crumb === 'object' ? crumb.pageId : null;

              return (
                <React.Fragment key={idx}>
                  {idx > 0 && (
                    <ChevronRight size={13} className="inner-hero-breadcrumb-sep" />
                  )}
                  {isLast ? (
                    <span className="inner-hero-breadcrumb-current" aria-current="page">
                      {labelText}
                    </span>
                  ) : (
                    <button
                      type="button"
                      className="inner-hero-breadcrumb-link"
                      onClick={() => handleBreadcrumbClick(targetPage || 'home')}
                    >
                      {labelText}
                    </button>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        )}

        {/* Category Accent Label */}
        {label && (
          <div className="inner-hero-label-wrap">
            <span className="inner-hero-label-bar" aria-hidden="true" />
            <span className="inner-hero-label-text">{label}</span>
          </div>
        )}

        {/* Primary Headline */}
        <h1 className="inner-hero-headline">{heading}</h1>

        {/* Supporting Description */}
        {description && (
          <p className="inner-hero-description">{description}</p>
        )}

        {/* Optional Call-to-Action Button */}
        {ctaText && onCtaClick && (
          <div className="inner-hero-cta-wrap">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onCtaClick}
            >
              {ctaText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

