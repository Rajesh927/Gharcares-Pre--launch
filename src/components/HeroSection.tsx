import React from 'react';
import { ChevronDown, Mail } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { BRAND } from '../config/brand';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 24px 60px 24px',
        zIndex: 10,
        overflow: 'hidden'
      }}
    >
      {/* Volumetric Radial Ambient Glow Behind Logo */}
      <div
        className="ambient-glow-cyan"
        style={{
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.8
        }}
      />
      <div
        className="ambient-glow-emerald"
        style={{
          top: '35%',
          left: '50%',
          transform: 'translate(-45%, -45%)',
          opacity: 0.5
        }}
      />

      <div
        className="section-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '920px'
        }}
      >
        {/* Official GharCares Logo Focal Point */}
        <div
          data-magnetic="true"
          style={{
            position: 'relative',
            marginBottom: '32px',
            transform: 'perspective(1000px) rotateX(4deg)',
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          className="animate-float"
        >
          {/* Logo Glow Ring */}
          <div
            style={{
              position: 'absolute',
              inset: '-14px',
              borderRadius: '34px',
              background:
                'radial-gradient(circle, rgba(0, 229, 255, 0.35) 0%, rgba(0, 230, 118, 0.15) 50%, transparent 80%)',
              filter: 'blur(20px)',
              zIndex: -1
            }}
          />

          <div
            style={{
              width: '180px',
              height: '180px',
              borderRadius: '30px',
              background: 'linear-gradient(145deg, #091322, #040812)',
              border: '1.5px solid rgba(0, 229, 255, 0.35)',
              boxShadow:
                '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 229, 255, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.25)',
              padding: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
            className="hero-logo-box"
          >
            <img
              src={BRAND.assets.logoDark}
              alt="Official GharCares Logo - Home Help. Right Away."
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 4px 12px rgba(0, 229, 255, 0.3))'
              }}
              loading="eager"
            />
          </div>
        </div>

        {/* Coming Soon Restrained Animated Label */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 20px',
            borderRadius: '9999px',
            background: 'rgba(0, 229, 255, 0.05)',
            border: '1px solid rgba(0, 229, 255, 0.25)',
            boxShadow: '0 0 20px rgba(0, 229, 255, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            marginBottom: '28px'
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-cyan)',
              boxShadow: '0 0 10px var(--accent-cyan)',
              animation: 'subtlePulse 2s infinite ease-in-out'
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--accent-cyan)'
            }}
          >
            {BRAND.status}
          </span>
        </div>

        {/* Cinematic Headline */}
        <h1
          id="hero-heading"
          className="text-gradient font-display"
          style={{
            fontSize: 'clamp(2.4rem, 6.2vw, 4.8rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            marginBottom: '24px',
            maxWidth: '18ch'
          }}
        >
          {BRAND.primarySlogan}
        </h1>

        {/* Supporting Message */}
        <p
          style={{
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            color: 'var(--text-secondary)',
            fontWeight: 400,
            maxWidth: '38ch',
            lineHeight: 1.6,
            marginBottom: '36px',
            letterSpacing: '0.01em'
          }}
        >
          {BRAND.messages.heroSub}
        </p>

        {/* Subtle Minimal Contact & Social Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '48px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow GharCares on Instagram"
            data-magnetic="true"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 22px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(0, 229, 255, 0.2)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              color: '#ffffff',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-cyan)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 229, 255, 0.3)';
              e.currentTarget.style.background = 'rgba(0, 229, 255, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.2)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
            }}
          >
            <InstagramIcon size={16} color="var(--accent-cyan)" />
            <span>@ghar.cares</span>
          </a>

          <a
            href={BRAND.gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open Gmail to email GharCares at ${BRAND.contactEmail}`}
            data-magnetic="true"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 22px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              fontSize: '0.85rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: 'var(--text-secondary)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-emerald)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 230, 118, 0.3)';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <Mail size={16} color="var(--accent-emerald)" />
            <span>{BRAND.contactEmail}</span>
          </a>
        </div>

        {/* Subtle Scroll Indicator */}
        <a
          href="#mystery"
          aria-label="Scroll to explore the mystery"
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--text-muted)',
            fontSize: '0.72rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 600,
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--accent-cyan)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-muted)';
          }}
        >
          <span>EXPLORE</span>
          <div
            style={{
              width: '28px',
              height: '42px',
              borderRadius: '16px',
              border: '1.5px solid rgba(0, 229, 255, 0.3)',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '6px',
              position: 'relative'
            }}
          >
            <div
              style={{
                width: '4px',
                height: '8px',
                borderRadius: '9999px',
                backgroundColor: 'var(--accent-cyan)',
                animation: 'subtlePulse 1.8s infinite ease-in-out'
              }}
            />
          </div>
          <ChevronDown size={14} style={{ opacity: 0.7 }} />
        </a>
      </div>
    </section>
  );
};
