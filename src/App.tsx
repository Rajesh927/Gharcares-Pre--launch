import React, { useState, useEffect, Suspense, lazy } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MysterySection } from './components/MysterySection';
import { BrandStatementSection } from './components/BrandStatementSection';
import { SocialInvitationSection } from './components/SocialInvitationSection';
import { Footer } from './components/Footer';

// Code-split Three.js canvas so initial HTML/CSS and logo render instantaneously
const ThreeCanvas = lazy(() =>
  import('./components/ThreeCanvas').then((module) => ({ default: module.ThreeCanvas }))
);

export const App: React.FC = () => {
  const [motionEnabled, setMotionEnabled] = useState<boolean>(true);

  useEffect(() => {
    // Check user's system preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setMotionEnabled(false);
    }

    const handler = (e: MediaQueryListEvent) => {
      setMotionEnabled(!e.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleToggleMotion = () => {
    setMotionEnabled((prev) => !prev);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-void)' }}>
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Interactive 3D WebGL Canvas (Lazy Loaded for Instant Paint) */}
      <Suspense
        fallback={
          <div
            style={{
              position: 'fixed',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 1,
              background:
                'radial-gradient(circle at 50% 30%, rgba(0, 229, 255, 0.08) 0%, transparent 70%)'
            }}
          />
        }
      >
        <ThreeCanvas motionEnabled={motionEnabled} />
      </Suspense>

      {/* Cinematic Navigation Header */}
      <Navbar motionEnabled={motionEnabled} onToggleMotion={handleToggleMotion} />

      {/* Full-Page Story & Scroll Sections */}
      <main id="top" role="main" tabIndex={-1}>
        {/* Section A: The Arrival */}
        <HeroSection />

        {/* Section B: The Mystery */}
        <MysterySection />

        {/* Section C: The Brand */}
        <BrandStatementSection />

        {/* Section D: The Social Invitation */}
        <SocialInvitationSection />
      </main>

      {/* Section E: The Footer */}
      <Footer />
    </div>
  );
};

export default App;
