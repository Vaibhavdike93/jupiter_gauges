import React, { useState } from 'react';
import { Compass, CheckCircle2, ArrowRight, Settings2 } from 'lucide-react';

export default function ToleranceWidget({ onOpenQuote }) {
  const [gaugeType, setGaugeType] = useState('hole');
  const [nominalSize, setNominalSize] = useState('25');
  const [toleranceClass, setToleranceClass] = useState('H7');

  // Standard ISO 286 deviation calculator lookup for common shopfloor engineering fits
  const calculateLimits = () => {
    const size = parseFloat(nominalSize) || 25;
    let goLimit = size;
    let noGoLimit = size;
    let toleranceDesc = '';

    if (gaugeType === 'hole') {
      if (toleranceClass === 'H7') {
        const tol = size <= 18 ? 0.018 : size <= 30 ? 0.021 : size <= 50 ? 0.025 : 0.030;
        goLimit = size.toFixed(3);
        noGoLimit = (size + tol).toFixed(3);
        toleranceDesc = 'Standard Clearance / Transition Fit Bore (IS:3455 / DIN 2245)';
      } else if (toleranceClass === 'H8') {
        const tol = size <= 18 ? 0.027 : size <= 30 ? 0.033 : size <= 50 ? 0.039 : 0.046;
        goLimit = size.toFixed(3);
        noGoLimit = (size + tol).toFixed(3);
        toleranceDesc = 'Reamed Bore / Precision Bushing Limit';
      } else if (toleranceClass === 'H9') {
        const tol = size <= 18 ? 0.043 : size <= 30 ? 0.052 : size <= 50 ? 0.062 : 0.074;
        goLimit = size.toFixed(3);
        noGoLimit = (size + tol).toFixed(3);
        toleranceDesc = 'Turned or Drilled Bore Limit';
      }
    } else {
      // Shaft / External
      if (toleranceClass === 'h6') {
        const tol = size <= 18 ? 0.011 : size <= 30 ? 0.013 : size <= 50 ? 0.016 : 0.019;
        goLimit = size.toFixed(3);
        noGoLimit = (size - tol).toFixed(3);
        toleranceDesc = 'Precision Ground Shaft / Bearing Journal (IS:3485 / DIN 2250)';
      } else if (toleranceClass === 'g6') {
        const ei = size <= 18 ? 0.007 : size <= 30 ? 0.009 : 0.011;
        const es = size <= 18 ? 0.018 : size <= 30 ? 0.022 : 0.027;
        goLimit = (size - ei).toFixed(3);
        noGoLimit = (size - es).toFixed(3);
        toleranceDesc = 'Sliding Clearance Fit Journal';
      } else if (toleranceClass === 'f7') {
        const ei = size <= 18 ? 0.016 : size <= 30 ? 0.020 : 0.025;
        const es = size <= 18 ? 0.034 : size <= 30 ? 0.041 : 0.050;
        goLimit = (size - ei).toFixed(3);
        noGoLimit = (size - es).toFixed(3);
        toleranceDesc = 'Running Fit Journal for Rotating Shafts';
      }
    }

    return { goLimit, noGoLimit, toleranceDesc };
  };

  const { goLimit, noGoLimit, toleranceDesc } = calculateLimits();

  return (
    <div style={{
      backgroundColor: '#25282B',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid #3E4348',
      padding: '36px',
      boxShadow: 'var(--shadow-xl)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative reticle lines */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '180px',
        height: '180px',
        background: 'radial-gradient(circle, rgba(244, 196, 48, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
        <span className="badge badge-dark">
          <Settings2 size={13} style={{ marginRight: '4px' }} /> Shopfloor Metrology Tool
        </span>
      </div>

      <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '8px' }}>
        Interactive Gauge Limit & Tolerance Calculator
      </h3>
      <p style={{ color: '#A6B0BA', fontSize: '0.9rem', marginBottom: '28px', maxWidth: '640px' }}>
        Verify nominal hole/shaft limits to ISO 286 standards and request Jupiter custom-calibrated limit gauges directly.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '28px'
      }}>
        {/* Inspection Type */}
        <div>
          <label style={{ display: 'block', fontSize: '0.8125rem', fontFamily: 'var(--font-heading)', color: '#D0D6DC', marginBottom: '6px' }}>
            Feature Type
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
            <button
              type="button"
              onClick={() => { setGaugeType('hole'); setToleranceClass('H7'); }}
              style={{
                padding: '10px 12px',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: gaugeType === 'hole' ? 'var(--color-primary-yellow)' : '#44494F',
                backgroundColor: gaugeType === 'hole' ? 'rgba(244, 196, 48, 0.15)' : '#1E2124',
                color: gaugeType === 'hole' ? 'var(--color-primary-yellow)' : '#A6B0BA',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}
            >
              Internal Bore (Plug)
            </button>
            <button
              type="button"
              onClick={() => { setGaugeType('shaft'); setToleranceClass('h6'); }}
              style={{
                padding: '10px 12px',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: gaugeType === 'shaft' ? 'var(--color-primary-yellow)' : '#44494F',
                backgroundColor: gaugeType === 'shaft' ? 'rgba(244, 196, 48, 0.15)' : '#1E2124',
                color: gaugeType === 'shaft' ? 'var(--color-primary-yellow)' : '#A6B0BA',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}
            >
              External Shaft (Ring/Snap)
            </button>
          </div>
        </div>

        {/* Nominal Dimension */}
        <div>
          <label style={{ display: 'block', fontSize: '0.8125rem', fontFamily: 'var(--font-heading)', color: '#D0D6DC', marginBottom: '6px' }}>
            Nominal Diameter (mm)
          </label>
          <input 
            type="number" 
            min="1"
            max="300"
            value={nominalSize}
            onChange={(e) => setNominalSize(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: '6px',
              border: '1px solid #44494F',
              backgroundColor: '#1E2124',
              color: '#FFFFFF',
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem'
            }}
          />
        </div>

        {/* Tolerance Grade */}
        <div>
          <label style={{ display: 'block', fontSize: '0.8125rem', fontFamily: 'var(--font-heading)', color: '#D0D6DC', marginBottom: '6px' }}>
            Tolerance Class
          </label>
          <select
            value={toleranceClass}
            onChange={(e) => setToleranceClass(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: '6px',
              border: '1px solid #44494F',
              backgroundColor: '#1E2124',
              color: '#FFFFFF',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.95rem'
            }}
          >
            {gaugeType === 'hole' ? (
              <>
                <option value="H7">H7 (Precision Fit)</option>
                <option value="H8">H8 (Medium Fit)</option>
                <option value="H9">H9 (Coarse Fit)</option>
              </>
            ) : (
              <>
                <option value="h6">h6 (Ground Shaft)</option>
                <option value="g6">g6 (Sliding Fit)</option>
                <option value="f7">f7 (Running Fit)</option>
              </>
            )}
          </select>
        </div>
      </div>

      {/* Calculated Results Card */}
      <div style={{
        backgroundColor: '#1A1D20',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        border: '1px solid #33383E',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '20px',
        alignItems: 'center'
      }}>
        <div>
          <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#2E7D32', textTransform: 'uppercase', fontWeight: '700' }}>
            ● GO Gauge Limit
          </div>
          <div style={{ fontSize: '1.6rem', fontFamily: 'var(--font-mono)', fontWeight: '700', color: '#FFFFFF' }}>
            Ø {goLimit} mm
          </div>
          <div style={{ fontSize: '0.75rem', color: '#88929C' }}>
            Maximum Material Condition (MMC)
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#C62828', textTransform: 'uppercase', fontWeight: '700' }}>
            ● NO-GO Gauge Limit
          </div>
          <div style={{ fontSize: '1.6rem', fontFamily: 'var(--font-mono)', fontWeight: '700', color: '#FFFFFF' }}>
            Ø {noGoLimit} mm
          </div>
          <div style={{ fontSize: '0.75rem', color: '#88929C' }}>
            Least Material Condition (LMC)
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-primary-yellow)', fontWeight: '600' }}>
            Jupiter Gauge Standard
          </div>
          <div style={{ fontSize: '0.9rem', color: '#ECEFF1', fontWeight: '500' }}>
            {toleranceDesc}
          </div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <button
            onClick={() => {
              const specString = `Ø ${nominalSize} mm ${toleranceClass} (GO: ${goLimit} mm / NO-GO: ${noGoLimit} mm)`;
              const pName = gaugeType === 'hole' ? 'Plain Plug Gauges (GO / NO-GO)' : 'Plain Ring Gauges';
              onOpenQuote(pName, specString);
            }}
            className="btn btn-primary"
            style={{ width: '100%', fontSize: '0.875rem' }}
          >
            Quote This Gauge <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
