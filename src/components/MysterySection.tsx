import React from 'react';
import { Sparkles, Eye, Compass } from 'lucide-react';
import { BRAND } from '../config/brand';

export const MysterySection: React.FC = () => {
  return (
    <section
      id="mystery"
      aria-label="The Mystery"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px',
        zIndex: 10
      }}
    >
      {/* Background Volumetric Light Accents */}
      <div
        className="ambient-glow-emerald"
        style={{
          top: '30%',
          right: '5%',
          opacity: 0.35
        }}
      />
      <div
        className="ambient-glow-cyan"
        style={{
          bottom: '20%',
          left: '5%',
          opacity: 0.4
        }}
      />

      <div
        className="section-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '64px',
          maxWidth: '1000px'
        }}
      >
        {/* Subtle section label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: 'var(--accent-cyan)',
            fontSize: '0.78rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            fontWeight: 700
          }}
        >
          <span
            style={{
              width: '32px',
              height: '1px',
              backgroundColor: 'var(--accent-cyan)',
              opacity: 0.5
            }}
          />
          <span>THE HORIZON</span>
          <span
            style={{
              width: '32px',
              height: '1px',
              backgroundColor: 'var(--accent-cyan)',
              opacity: 0.5
            }}
          />
        </div>

        {/* Sequential Cinematic Mystery Cards */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            width: '100%',
            alignItems: 'center'
          }}
        >
          {/* Card 1: THE WAIT WILL BE WORTH IT */}
          <div
            className="glass-card"
            data-magnetic="true"
            style={{
              width: '100%',
              maxWidth: '820px',
              padding: 'clamp(36px, 5vw, 56px) clamp(24px, 4vw, 48px)',
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'center'
            }}
          >
            {/* Subtle corner light reflection */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle at 0% 0%, rgba(0, 229, 255, 0.25), transparent 70%)',
                pointerEvents: 'none'
              }}
            />

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(0, 229, 255, 0.08)',
                border: '1px solid rgba(0, 229, 255, 0.25)',
                color: 'var(--accent-cyan)',
                marginBottom: '20px'
              }}
            >
              <Eye size={20} />
            </div>

            <h2
              className="text-gradient font-display"
              style={{
                fontSize: 'clamp(1.8rem, 4.2vw, 3.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                textTransform: 'uppercase'
              }}
            >
              {BRAND.messages.mysteryLine1}
            </h2>
          </div>

          {/* Card 2: SOMETHING DIFFERENT IS ON ITS WAY */}
          <div
            className="glass-card"
            data-magnetic="true"
            style={{
              width: '100%',
              maxWidth: '820px',
              padding: 'clamp(36px, 5vw, 56px) clamp(24px, 4vw, 48px)',
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'center'
            }}
          >
            {/* Subtle corner light reflection */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle at 100% 0%, rgba(0, 230, 118, 0.25), transparent 70%)',
                pointerEvents: 'none'
              }}
            />

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(0, 230, 118, 0.08)',
                border: '1px solid rgba(0, 230, 118, 0.25)',
                color: 'var(--accent-emerald)',
                marginBottom: '20px'
              }}
            >
              <Compass size={20} />
            </div>

            <h2
              className="text-gradient font-display"
              style={{
                fontSize: 'clamp(1.8rem, 4.2vw, 3.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                textTransform: 'uppercase'
              }}
            >
              {BRAND.messages.mysteryLine2}
            </h2>
          </div>

          {/* Card 3: YOUR EVERYDAY WORLD IS ABOUT TO FEEL DIFFERENT */}
          <div
            className="glass-card"
            data-magnetic="true"
            style={{
              width: '100%',
              maxWidth: '820px',
              padding: 'clamp(36px, 5vw, 56px) clamp(24px, 4vw, 48px)',
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'center'
            }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '200px',
                height: '80px',
                background: 'radial-gradient(circle, rgba(0, 229, 255, 0.2), transparent 70%)',
                pointerEvents: 'none'
              }}
            />

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255, 179, 0, 0.08)',
                border: '1px solid rgba(255, 179, 0, 0.25)',
                color: 'var(--accent-amber)',
                marginBottom: '20px'
              }}
            >
              <Sparkles size={20} />
            </div>

            <h2
              className="text-gradient font-display"
              style={{
                fontSize: 'clamp(1.8rem, 4.2vw, 3.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                textTransform: 'uppercase'
              }}
            >
              {BRAND.messages.mysteryLine3}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
