import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function FloatingContactButtons() {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const phoneRaw = COMPANY_INFO.contact.phonePrimary.replace(/[^0-9+]/g, '');
  const whatsappNumber = COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappMsg = encodeURIComponent(
    COMPANY_INFO.contact.whatsappMessageDefault || 'Hello Jupiter Gauges, I would like to enquire about gauges.'
  );

  return (
    <aside
      className="floating-contact-container"
      aria-label="Quick contact channels"
    >
      {/* 1. Phone Call Floating Button */}
      <div style={{ position: 'relative' }}>
        {hoveredBtn === 'call' && (
          <div className="floating-contact-tooltip">
            Call: {COMPANY_INFO.contact.phonePrimary}
          </div>
        )}
        <a
          href={`tel:${phoneRaw}`}
          className="floating-btn floating-btn-call"
          aria-label={`Call Jupiter Gauges at ${COMPANY_INFO.contact.phonePrimary}`}
          onMouseEnter={() => setHoveredBtn('call')}
          onMouseLeave={() => setHoveredBtn(null)}
          onFocus={() => setHoveredBtn('call')}
          onBlur={() => setHoveredBtn(null)}
        >
          <Phone size={22} color="#FFFFFF" strokeWidth={2.2} />
        </a>
      </div>

      {/* 2. WhatsApp Floating Button with Subtle Glow Halo */}
      <div style={{ position: 'relative' }}>
        {hoveredBtn === 'whatsapp' && (
          <div className="floating-contact-tooltip">
            Chat on WhatsApp
          </div>
        )}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-btn-whatsapp"
          aria-label="Chat with Jupiter Gauges on WhatsApp"
          onMouseEnter={() => setHoveredBtn('whatsapp')}
          onMouseLeave={() => setHoveredBtn(null)}
          onFocus={() => setHoveredBtn('whatsapp')}
          onBlur={() => setHoveredBtn(null)}
        >
          {/* Subtle outer halo ring */}
          <span className="whatsapp-halo-ring" aria-hidden="true" />

          {/* Official WhatsApp SVG Logo */}
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="#FFFFFF"
            aria-hidden="true"
            style={{ position: 'relative', zIndex: 2 }}
          >
            <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.979-.276-.1-.477-.15-.678.15-.2.301-.778.979-.954 1.18-.176.2-.351.226-.653.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.787-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.635-.929-2.238-.244-.588-.493-.508-.678-.518l-.578-.01c-.2 0-.527.075-.803.377-.276.301-1.054 1.03-1.054 2.511 0 1.481 1.079 2.912 1.229 3.113.15.201 2.124 3.243 5.145 4.549.719.311 1.281.497 1.719.636.723.23 1.381.198 1.901.12.58-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.351zM12.042 21.672c-1.749 0-3.46-.466-4.969-1.348l-.356-.21-3.693.968.986-3.599-.231-.368c-.968-1.543-1.48-3.33-1.48-5.165 0-5.32 4.329-9.649 9.65-9.649 2.578 0 4.999 1.004 6.822 2.827 1.823 1.823 2.827 4.246 2.827 6.824 0 5.322-4.329 9.65-9.649 9.65zM12.042 0C5.399 0 0 5.399 0 12.042c0 2.124.554 4.195 1.606 6.018L0 24l6.111-1.602c1.761.96 3.754 1.467 5.931 1.467 6.643 0 12.042-5.399 12.042-12.042C24.084 5.399 18.685 0 12.042 0z" />
          </svg>
        </a>
      </div>
    </aside>
  );
}

