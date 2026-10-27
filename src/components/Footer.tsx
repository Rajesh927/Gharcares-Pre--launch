import { Mail } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { BRAND } from '../config/brand';

export const Footer: React.FC = () => {
  return (
    <footer
      role="contentinfo"
      style={{
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(0, 229, 255, 0.1)',
        background: 'linear-gradient(180deg, transparent 0%, rgba(3, 7, 14, 0.95) 100%)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: '48px 24px 36px 24px'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '28px'
        }}
      >
        {/* Logo and Brand Tagline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(0, 230, 118, 0.1))',
                border: '1px solid rgba(0, 229, 255, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src={BRAND.assets.logoDark}
                alt="GharCares Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.2rem',
                letterSpacing: '-0.01em',
                color: '#ffffff'
              }}
            >
              {BRAND.name}
            </span>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.82rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent-cyan)',
              fontWeight: 600
            }}
          >
            {BRAND.secondarySlogan}
          </p>
        </div>

        {/* Coming Soon Label & Social Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {/* Small Coming Soon Label */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '9999px',
              background: 'rgba(0, 229, 255, 0.05)',
              border: '1px solid rgba(0, 229, 255, 0.2)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent-cyan)'
            }}
          >
            <span
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-cyan)'
              }}
            />
            {BRAND.status}
          </span>

          {/* Instagram Link */}
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GharCares official Instagram profile"
            data-magnetic="true"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--text-secondary)',
              fontSize: '0.85rem',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent-cyan)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <InstagramIcon size={17} />
            <span>Instagram</span>
          </a>

          {/* Email Link (Opens Gmail directly) */}
          <a
            href={BRAND.gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Send email to GharCares via Gmail (${BRAND.contactEmail})`}
            data-magnetic="true"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--text-secondary)',
              fontSize: '0.85rem',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent-emerald)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <Mail size={17} />
            <span>Contact</span>
          </a>
        </div>

        {/* Copyright notice with current year */}
        <div
          style={{
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            textAlign: 'center',
            letterSpacing: '0.04em'
          }}
        >
          © {BRAND.currentYear} {BRAND.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
