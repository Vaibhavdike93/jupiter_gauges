import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ToleranceWidget({ onOpenQuote }) {
  const [gaugeType, setGaugeType] = useState('hole');
  const [nominalSize, setNominalSize] = useState('25');
  const [toleranceClass, setToleranceClass] = useState('H7');

  // ISO 286 / IS:3455 standard limit calculation for common engineering workshop fits
  const calculateLimits = () => {
    const size = parseFloat(nominalSize) || 25;
    let goLimit = size;
    let noGoLimit = size;
    let toleranceDesc = '';
    let toleranceBand = '';

    if (gaugeType === 'hole') {
      if (toleranceClass === 'H7') {
        const tol = size <= 18 ? 0.018 : size <= 30 ? 0.021 : size <= 50 ? 0.025 : 0.030;
        goLimit = size.toFixed(3);
        noGoLimit = (size + tol).toFixed(3);
        toleranceBand = `+${(tol * 1000).toFixed(0)} µm / 0 µm`;
        toleranceDesc = 'Standard Clearance & Location Fit Bore (IS:3455 / ISO 286)';
      } else if (toleranceClass === 'H8') {
        const tol = size <= 18 ? 0.027 : size <= 30 ? 0.033 : size <= 50 ? 0.039 : 0.046;
        goLimit = size.toFixed(3);
        noGoLimit = (size + tol).toFixed(3);
        toleranceBand = `+${(tol * 1000).toFixed(0)} µm / 0 µm`;
        toleranceDesc = 'Precision Reamed Bore Fit';
      } else if (toleranceClass === 'H9') {
        const tol = size <= 18 ? 0.043 : size <= 30 ? 0.052 : size <= 50 ? 0.062 : 0.074;
        goLimit = size.toFixed(3);
        noGoLimit = (size + tol).toFixed(3);
        toleranceBand = `+${(tol * 1000).toFixed(0)} µm / 0 µm`;
        toleranceDesc = 'Standard Machined Bore Fit';
      }
    } else {
      // Shaft / External
      if (toleranceClass === 'h6') {
        const tol = size <= 18 ? 0.011 : size <= 30 ? 0.013 : size <= 50 ? 0.016 : 0.019;
        goLimit = size.toFixed(3);
        noGoLimit = (size - tol).toFixed(3);
        toleranceBand = `0 µm / -${(tol * 1000).toFixed(0)} µm`;
        toleranceDesc = 'Precision Ground Shaft / Bearing Journal (IS:3485 / ISO 286)';
      } else if (toleranceClass === 'g6') {
        const ei = size <= 18 ? 0.007 : size <= 30 ? 0.009 : 0.011;
        const es = size <= 18 ? 0.018 : size <= 30 ? 0.022 : 0.027;
        goLimit = (size - ei).toFixed(3);
        noGoLimit = (size - es).toFixed(3);
        toleranceBand = `-${(ei * 1000).toFixed(0)} µm / -${(es * 1000).toFixed(0)} µm`;
        toleranceDesc = 'Sliding Clearance Fit Journal';
      } else if (toleranceClass === 'f7') {
        const ei = size <= 18 ? 0.016 : size <= 30 ? 0.020 : 0.025;
        const es = size <= 18 ? 0.034 : size <= 30 ? 0.041 : 0.050;
        goLimit = (size - ei).toFixed(3);
        noGoLimit = (size - es).toFixed(3);
        toleranceBand = `-${(ei * 1000).toFixed(0)} µm / -${(es * 1000).toFixed(0)} µm`;
        toleranceDesc = 'Close Running Fit Journal for Rotating Shafts';
      }
    }

    return { goLimit, noGoLimit, toleranceDesc, toleranceBand };
  };

  const { goLimit, noGoLimit, toleranceDesc, toleranceBand } = calculateLimits();

  return (
    <div style={{
      backgroundColor: 'var(--color-white)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--color-grey-border)',
      boxShadow: 'var(--shadow-sm)',
      padding: '28px 32px'
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: '12px',
        borderBottom: '1px solid var(--color-grey-border)',
        paddingBottom: '16px',
        marginBottom: '24px'
      }}>
        <div>
          <span className="section-tag" style={{ marginBottom: '8px' }}>
            Engineering Reference Utility
          </span>
          <h3 style={{ fontSize: '1.35rem', color: 'var(--color-heading)', margin: 0 }}>
            ISO 286 Gauge Limit & Tolerance Calculator
          </h3>
        </div>
        <div style={{ fontSize: '0.8125rem', color: 'var(--color-corporate-grey)' }}>
          Reference Standard: IS:3455 / DIN 2245 / ISO 286-2
        </div>
      </div>

      {/* Input Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '24px'
      }}>
        {/* Inspection Feature */}
        <div>
          <label className="form-label">
            Component Feature
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
            <button
              type="button"
              onClick={() => { setGaugeType('hole'); setToleranceClass('H7'); }}
              style={{
                padding: '9px 12px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid',
                borderColor: gaugeType === 'hole' ? 'var(--color-charcoal)' : 'var(--color-grey-border)',
                backgroundColor: gaugeType === 'hole' ? 'var(--color-charcoal)' : 'var(--color-white)',
                color: gaugeType === 'hole' ? 'var(--color-white)' : 'var(--color-body-text)',
                fontSize: '0.8125rem',
                fontWeight: '600',
                transition: 'all var(--transition-fast)'
              }}
            >
              Internal Bore (Plug)
            </button>
            <button
              type="button"
              onClick={() => { setGaugeType('shaft'); setToleranceClass('h6'); }}
              style={{
                padding: '9px 12px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid',
                borderColor: gaugeType === 'shaft' ? 'var(--color-charcoal)' : 'var(--color-grey-border)',
                backgroundColor: gaugeType === 'shaft' ? 'var(--color-charcoal)' : 'var(--color-white)',
                color: gaugeType === 'shaft' ? 'var(--color-white)' : 'var(--color-body-text)',
                fontSize: '0.8125rem',
                fontWeight: '600',
                transition: 'all var(--transition-fast)'
              }}
            >
              External Shaft (Ring/Snap)
            </button>
          </div>
        </div>

        {/* Nominal Diameter */}
        <div>
          <label className="form-label">
            Nominal Diameter (mm)
          </label>
          <input 
            type="number" 
            min="1"
            max="300"
            step="0.001"
            value={nominalSize}
            onChange={(e) => setNominalSize(e.target.value)}
            className="form-input"
            style={{ fontFamily: 'var(--font-mono)', fontWeight: '600' }}
          />
        </div>

        {/* Tolerance Grade */}
        <div>
          <label className="form-label">
            Tolerance Class
          </label>
          <select
            value={toleranceClass}
            onChange={(e) => setToleranceClass(e.target.value)}
            className="form-select"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {gaugeType === 'hole' ? (
              <>
                <option value="H7">Class H7 (Precision Bore)</option>
                <option value="H8">Class H8 (Standard Bore)</option>
                <option value="H9">Class H9 (Commercial Bore)</option>
              </>
            ) : (
              <>
                <option value="h6">Class h6 (Precision Ground Shaft)</option>
                <option value="g6">Class g6 (Sliding Fit)</option>
                <option value="f7">Class f7 (Close Running Fit)</option>
              </>
            )}
          </select>
        </div>
      </div>

      {/* Calculated Output Readout */}
      <div style={{
        backgroundColor: 'var(--color-grey-light)',
        border: '1px solid var(--color-grey-border)',
        borderRadius: 'var(--radius-sm)',
        padding: '20px 24px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '20px',
        alignItems: 'center'
      }}>
        {/* GO Limit */}
        <div>
          <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-success)', fontWeight: '700', textTransform: 'uppercase' }}>
            ● GO Gauge Limit
          </div>
          <div style={{ fontSize: '1.45rem', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--color-heading)' }}>
            Ø {goLimit} mm
          </div>
          <div style={{ fontSize: '0.725rem', color: 'var(--color-corporate-grey)' }}>
            Maximum Material Condition (MMC)
          </div>
        </div>

        {/* NO-GO Limit */}
        <div>
          <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-error)', fontWeight: '700', textTransform: 'uppercase' }}>
            ● NO-GO Gauge Limit
          </div>
          <div style={{ fontSize: '1.45rem', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--color-heading)' }}>
            Ø {noGoLimit} mm
          </div>
          <div style={{ fontSize: '0.725rem', color: 'var(--color-corporate-grey)' }}>
            Least Material Condition (LMC)
          </div>
        </div>

        {/* Description & Band */}
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-corporate-grey)', fontWeight: '600' }}>
            Tolerance Band: <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-charcoal)' }}>{toleranceBand}</span>
          </div>
          <div style={{ fontSize: '0.8125rem', color: 'var(--color-body-text)', fontWeight: '500', marginTop: '2px' }}>
            {toleranceDesc}
          </div>
        </div>

        {/* Quote CTA */}
        <div style={{ textAlign: 'right' }}>
          <button
            onClick={() => {
              const specString = `Ø ${nominalSize} mm ${toleranceClass} (GO: ${goLimit} mm / NO-GO: ${noGoLimit} mm)`;
              const pName = gaugeType === 'hole' ? 'Plain Plug Gauges (GO / NO-GO)' : 'Plain Ring Gauges';
              onOpenQuote(pName, specString);
            }}
            className="btn btn-primary btn-sm"
            style={{ width: '100%', fontWeight: '600' }}
          >
            Enquire for this Dimension <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
