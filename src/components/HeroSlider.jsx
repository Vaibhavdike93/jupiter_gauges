import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronRight as ArrowIcon 
} from 'lucide-react';

const AUTOPLAY_INTERVAL = 4500; // 4.5 seconds per slide

const SLIDES = [
  {
    id: 1,
    category: 'Precision Measurement',
    headline: 'Precision Gauges for Quality-Driven Manufacturing',
    description: 'Explore precision gauging solutions for dimensional inspection and manufacturing quality control.',
    image: './images/hero_gauges.jpg',
    imageAlt: 'Jupiter Gauges - Precision plug gauges, ring gauges, and industrial measuring instruments',
  },
  {
    id: 2,
    category: 'Industrial Gauging Solutions',
    headline: 'Reliable Gauging Solutions for Industry',
    description: 'Discover measurement and inspection products suited to industrial quality requirements.',
    image: './images/manufacturing_facility.jpg',
    imageAlt: 'Jupiter Gauges - Industrial manufacturing facility and precision machining setup',
  },
  {
    id: 3,
    category: 'Product Range',
    headline: 'Find the Right Gauge for Your Application',
    description: 'Explore our range of precision gauges and identify suitable solutions for your inspection needs.',
    image: './images/master_setting_rings.jpg',
    imageAlt: 'Jupiter Gauges - Comprehensive collection of master setting rings and industrial gauges',
  },
  {
    id: 4,
    category: 'Engineering and Quality',
    headline: 'Supporting Consistent Manufacturing Quality',
    description: 'Explore gauging solutions for dimensional verification across relevant engineering applications.',
    image: './images/workbench_inspection.jpg',
    imageAlt: 'Jupiter Gauges - Gauge dimensional verification on granite metrology inspection surface',
  },
  {
    id: 5,
    category: 'Customer Enquiries',
    headline: 'Looking for a Suitable Gauging Solution?',
    description: 'Contact our team to discuss your product requirements and quotation enquiries.',
    image: './images/od_master.jpg',
    imageAlt: 'Jupiter Gauges - Custom precision OD masters and industrial gauging solutions',
  },
];

export default function HeroSlider({ setActivePage, onOpenQuote }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [progressKey, setProgressKey] = useState(0);

  // Touch gesture support for mobile devices
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const minSwipeDistance = 45;

  // Track page visibility to pause when user switches browser tabs
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    setProgressKey((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setProgressKey((prev) => prev + 1);
  }, []);

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setCurrentSlide(index);
    setProgressKey((prev) => prev + 1);
  };

  // Continuous Autoplay (4.5s) with pause-on-hover and background tab pause
  useEffect(() => {
    if (isHovered || !isVisible) return;

    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [currentSlide, isHovered, isVisible, nextSlide]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    }
  };

  // Touch swipe handling
  const onTouchStart = (e) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  return (
    <section 
      className="hero-slideshow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label="Jupiter Gauges Hero Slideshow"
      tabIndex={0}
    >
      {/* Top subtle autoplay progress bar */}
      <div className="hero-progress-track" aria-hidden="true">
        <div 
          key={`prog-${currentSlide}-${progressKey}`}
          className={`hero-progress-fill ${isHovered || !isVisible ? 'is-paused' : ''}`}
        />
      </div>

      {/* Horizontal Flex Slides Track with Smooth Hardware-Accelerated Sliding */}
      <div 
        className="hero-slides-track"
        style={{ transform: `translateX(-${currentSlide * 20}%)` }}
      >
        {SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;

          return (
            <div 
              key={slide.id}
              className={`hero-slide-pane ${isActive ? 'active' : ''}`}
              aria-hidden={!isActive}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${SLIDES.length}: ${slide.category}`}
            >
              {/* Background Photographic Stage */}
              <div className="hero-slide-bg-wrapper">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="hero-slide-bg-img"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                {/* Deep Industrial Contrast Gradient Overlay */}
                <div className="hero-slide-overlay-gradient" aria-hidden="true" />
                {/* Metrology Grid Texture Overlay */}
                <div className="hero-slide-overlay-grid" aria-hidden="true" />
              </div>

              {/* Slide Content Layer */}
              <div className="hero-slide-content-container">
                <div className="hero-slide-content-wrapper">
                  {/* Category Accent Label */}
                  <div className="hero-category-label">
                    <span className="hero-category-bar" aria-hidden="true" />
                    <span className="hero-category-text">{slide.category}</span>
                  </div>

                  {/* Slide Headline */}
                  <h1 className="hero-slide-headline">
                    {slide.headline}
                  </h1>

                  {/* Supporting Description */}
                  <p className="hero-slide-description">
                    {slide.description}
                  </p>

                  {/* Dual Call-to-Action Buttons */}
                  <div className="hero-slide-cta-row">
                    <button
                      type="button"
                      onClick={onOpenQuote}
                      className="hero-cta-btn hero-cta-primary"
                      tabIndex={isActive ? 0 : -1}
                      id={`hero-quote-btn-slide-${slide.id}`}
                    >
                      <span>Enquire Now</span>
                      <ArrowIcon size={16} className="hero-cta-arrow" aria-hidden="true" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setActivePage('products')}
                      className="hero-cta-btn hero-cta-secondary"
                      tabIndex={isActive ? 0 : -1}
                      id={`hero-products-btn-slide-${slide.id}`}
                    >
                      <span>Explore Products</span>
                      <span className="hero-cta-arrow-right" aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Glass Navigation Arrows (Desktop / Tablet) */}
      <button
        type="button"
        onClick={prevSlide}
        className="hero-nav-arrow hero-nav-prev"
        aria-label="Previous slide"
        title="Previous slide"
      >
        <ChevronLeft size={22} aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="hero-nav-arrow hero-nav-next"
        aria-label="Next slide"
        title="Next slide"
      >
        <ChevronRight size={22} aria-hidden="true" />
      </button>

      {/* Reference-Inspired Bottom Right Dock: Pill Pagination & Counter */}
      <div className="hero-dock-controls" aria-label="Slide controls">
        {/* Minimalist Pill Pagination Indicators */}
        <div className="hero-dock-pills" role="tablist" aria-label="Choose slide">
          {SLIDES.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                className={`hero-dock-pill ${isActive ? 'active' : ''}`}
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${index + 1}: ${slide.category}`}
                title={slide.category}
              />
            );
          })}
        </div>

        {/* Monospace Slide Counter (e.g. "01 / 05") */}
        <div className="hero-dock-counter" aria-live="polite">
          <span className="counter-current">0{currentSlide + 1}</span>
          <span className="counter-sep">/</span>
          <span className="counter-total">0{SLIDES.length}</span>
        </div>
      </div>
    </section>
  );
}
