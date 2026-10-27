import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { BRAND } from '../config/brand';

export const SocialInvitationSection: React.FC = () => {
  return (
    <section
      id="invitation"
      aria-labelledby="invitation-heading"
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '100px 24px',
        zIndex: 10
      }}
    >
      {/* Radiant Background Glows */}
      <div
        className="ambient-glow-emerald"
        style={{
          top: '40%',
          left: '30%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.35
        }}
      />
      <div
        className="ambient-glow-cyan"
        style={{
          top: '45%',
          right: '30%',
          transform: 'translate(50%, -50%)',
          opacity: 0.4
        }}
      />

      <div
        className="section-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '860px'
        }}
      >
        <div
          className="glass-card"
          style={{
            width: '100%',
            padding: 'clamp(40px, 6vw, 68px) clamp(24px, 5vw, 56px)',
            borderRadius: '28px',
            position: 'relative',
            overflow: 'hidden',
            border: '1.5px solid rgba(0, 229, 255, 0.28)',
            boxShadow:
              '0 30px 80px rgba(0, 0, 0, 0.8), 0 0 50px rgba(0, 229, 255, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.2)'
          }}
        >
          {/* Subtle glowing highlight bar across top */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '15%',
              right: '15%',
              height: '1px',
              background:
                'linear-gradient(90deg, transparent, var(--accent-cyan), var(--accent-emerald), transparent)'
            }}
          />

          {/* Slogan Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(0, 230, 118, 0.08)',
              border: '1px solid rgba(0, 230, 118, 0.25)',
              marginBottom: '28px'
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-emerald)',
                boxShadow: '0 0 8px var(--accent-emerald)'
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--accent-emerald)'
              }}
            >
              OFFICIAL INVITATION
            </span>
          </div>

          {/* Headline */}
          <h2
            id="invitation-heading"
            className="text-gradient font-display"
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}
          >
            {BRAND.messages.invitationHeading}
          </h2>

          {/* Supporting Line */}
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2.4vw, 1.35rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: '36ch',
              margin: '0 auto 40px auto'
            }}
          >
            {BRAND.messages.invitationSub}
          </p>

          {/* Primary CTA Button */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px'
            }}
          >
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow the Journey on GharCares official Instagram"
              data-magnetic="true"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                padding: '18px 42px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #00e5ff 0%, #00c2ff 50%, #00e676 100%)',
                color: '#030712',
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow:
                  '0 10px 30px rgba(0, 229, 255, 0.45), 0 0 40px rgba(0, 230, 118, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                minHeight: '56px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                e.currentTarget.style.boxShadow =
                  '0 15px 40px rgba(0, 229, 255, 0.65), 0 0 50px rgba(0, 230, 118, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow =
                  '0 10px 30px rgba(0, 229, 255, 0.45), 0 0 40px rgba(0, 230, 118, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.5)';
              }}
            >
              <InstagramIcon size={20} />
              <span>{BRAND.messages.ctaButton}</span>
              <ArrowUpRight size={20} />
            </a>

            {/* Email Contact Link */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.9rem',
                color: 'var(--text-muted)'
              }}
            >
              <span>Direct correspondence:</span>
              <a
                href={BRAND.gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open Gmail to email GharCares at ${BRAND.contactEmail}`}
                data-magnetic="true"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--accent-cyan)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  borderBottom: '1px dashed rgba(0, 229, 255, 0.4)',
                  paddingBottom: '2px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.4)';
                  e.currentTarget.style.color = 'var(--accent-cyan)';
                }}
              >
                <Mail size={15} />
                <span>{BRAND.contactEmail}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
