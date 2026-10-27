import React from 'react';
import { BRAND } from '../config/brand';

export const BrandStatementSection: React.FC = () => {
  return (
    <section
      id="brand"
      aria-label="The GharCares Brand"
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '100px 24px',
        zIndex: 10,
        overflow: 'hidden'
      }}
    >
      {/* Volumetric Center Glow */}
      <div
        className="ambient-glow-cyan"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '650px',
          height: '650px',
          opacity: 0.5
        }}
      />

      <div
        className="section-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '850px'
        }}
      >
        {/* Brand Mark in Focus */}
        <div
          data-magnetic="true"
          style={{
            position: 'relative',
            marginBottom: '40px'
          }}
          className="animate-float"
        >
          {/* Subtle Outer Energy Ring */}
          <div
            style={{
              position: 'absolute',
              inset: '-20px',
              borderRadius: '40px',
              border: '1px solid rgba(0, 229, 255, 0.25)',
              boxShadow: '0 0 50px rgba(0, 229, 255, 0.2), inset 0 0 30px rgba(0, 230, 118, 0.1)',
              animation: 'subtlePulse 4s infinite ease-in-out'
            }}
          />

          <div
            style={{
              width: '210px',
              height: '210px',
              borderRadius: '32px',
              background: 'linear-gradient(135deg, #091325 0%, #030710 100%)',
              border: '1.5px solid rgba(0, 229, 255, 0.4)',
              boxShadow:
                '0 30px 70px rgba(0, 0, 0, 0.85), 0 0 40px rgba(0, 229, 255, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            <img
              src={BRAND.assets.logoDark}
              alt="GharCares Brand Mark"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 4px 16px rgba(0, 229, 255, 0.35))'
              }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Brand Name Title */}
        <h2
          className="text-gradient font-display"
          style={{
            fontSize: 'clamp(2.8rem, 6.5vw, 5rem)',
            fontWeight: 900,
            letterSpacing: '0.04em',
            lineHeight: 1,
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}
        >
          {BRAND.name}
        </h2>

        {/* Brand Tagline */}
        <div
          style={{
            display: 'inline-block',
            position: 'relative',
            padding: '12px 28px',
            borderRadius: '9999px',
            background: 'rgba(0, 229, 255, 0.05)',
            border: '1px solid rgba(0, 229, 255, 0.22)'
          }}
        >
          <p
            className="font-display"
            style={{
              fontSize: 'clamp(1rem, 2.4vw, 1.45rem)',
              fontWeight: 700,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--accent-cyan)',
              margin: 0
            }}
          >
            {BRAND.secondarySlogan}
          </p>
        </div>
      </div>
    </section>
  );
};
