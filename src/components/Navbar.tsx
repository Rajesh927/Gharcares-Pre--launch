import React from 'react';
import { Mail, Sparkles, Activity } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { BRAND } from '../config/brand';

interface NavbarProps {
  motionEnabled: boolean;
  onToggleMotion: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ motionEnabled, onToggleMotion }) => {
  return (
    <header
      role="banner"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: '16px 24px',
        background: 'linear-gradient(180deg, rgba(3, 7, 14, 0.85) 0%, rgba(3, 7, 14, 0.4) 70%, transparent 100%)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0, 229, 255, 0.08)',
        transition: 'all 0.3s ease'
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Brand Logo & Name */}
        <a
          href="#top"
          aria-label="GharCares Homepage"
          data-magnetic="true"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none'
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(0, 230, 118, 0.1))',
              border: '1px solid rgba(0, 229, 255, 0.3)',
              boxShadow: '0 0 15px rgba(0, 229, 255, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <img
              src={BRAND.assets.logoDark}
              alt="GharCares Official Logo Mark"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.25rem',
                letterSpacing: '-0.01em',
                color: '#ffffff',
                display: 'block',
                lineHeight: 1.1
              }}
            >
              GharCares
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-cyan)',
                fontWeight: 500
              }}
            >
              {BRAND.secondarySlogan}
            </span>
          </div>
        </a>

        {/* Center Coming Soon status */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '9999px',
            background: 'rgba(0, 229, 255, 0.06)',
            border: '1px solid rgba(0, 229, 255, 0.2)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
          className="coming-soon-pill"
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-emerald)',
              boxShadow: '0 0 8px var(--accent-emerald)'
            }}
            className="status-dot"
          />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#d4e6f1'
            }}
          >
            {BRAND.status}
          </span>
        </div>

        {/* Quick Social & Action Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          {/* Motion Toggle Button */}
          <button
            onClick={onToggleMotion}
            aria-label={motionEnabled ? 'Disable 3D motion' : 'Enable 3D motion'}
            title={motionEnabled ? 'Disable 3D Motion (Save power/reduced motion)' : 'Enable 3D Motion'}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: motionEnabled ? 'var(--accent-cyan)' : 'var(--text-muted)',
              transition: 'all 0.2s ease'
            }}
          >
            {motionEnabled ? <Sparkles size={16} /> : <Activity size={16} />}
          </button>

          {/* Instagram Link */}
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GharCares Official Instagram profile"
            data-magnetic="true"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(0, 229, 255, 0.18)',
              color: '#ffffff',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-cyan)';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 229, 255, 0.35)';
              e.currentTarget.style.color = 'var(--accent-cyan)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.18)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            <InstagramIcon size={17} />
          </a>

          {/* Email Link (Opens Gmail directly) */}
          <a
            href={BRAND.gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Send email to GharCares via Gmail (${BRAND.contactEmail})`}
            data-magnetic="true"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(0, 229, 255, 0.18)',
              color: '#ffffff',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-emerald)';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 230, 118, 0.35)';
              e.currentTarget.style.color = 'var(--accent-emerald)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.18)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
    </header>
  );
};
