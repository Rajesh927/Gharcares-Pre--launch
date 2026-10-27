import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch devices or if user prefers reduced motion
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouchDevice || prefersReducedMotion) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isClicking = false;
    let isVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.closest('[data-magnetic]'))
      ) {
        isHovering = true;
      } else {
        isHovering = false;
      }
    };

    const onMouseDown = () => {
      isClicking = true;
    };

    const onMouseUp = () => {
      isClicking = false;
    };

    const onMouseLeave = () => {
      isVisible = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);

    let animationFrameId: number;

    const render = () => {
      animationFrameId = requestAnimationFrame(render);

      // Smooth trailing ring lerp
      const lerpSpeed = isHovering ? 0.22 : 0.15;
      ringX += (mouseX - ringX) * lerpSpeed;
      ringY += (mouseY - ringY) * lerpSpeed;

      // Transform dot (immediate response)
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${
        isClicking ? 0.75 : 1
      })`;

      // Transform ring (smooth lagging follower)
      const scale = isHovering ? 1.6 : isClicking ? 0.9 : 1;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
      ring.style.borderColor = isHovering ? 'rgba(0, 229, 255, 0.7)' : 'rgba(0, 229, 255, 0.35)';
      ring.style.boxShadow = isHovering
        ? '0 0 20px rgba(0, 229, 255, 0.4), inset 0 0 10px rgba(0, 230, 118, 0.2)'
        : '0 0 12px rgba(0, 229, 255, 0.15)';
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Tiny luminous turquoise point */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '7px',
          height: '7px',
          backgroundColor: '#00e5ff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: 0,
          boxShadow: '0 0 8px #00e5ff, 0 0 16px rgba(0, 229, 255, 0.8)',
          willChange: 'transform, opacity',
          transition: 'opacity 0.2s ease, transform 0.05s ease'
        }}
      />
      {/* Smooth trailing glow aura */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '38px',
          height: '38px',
          border: '1px solid rgba(0, 229, 255, 0.35)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: 0,
          backdropFilter: 'blur(1px)',
          willChange: 'transform, opacity, border-color, box-shadow',
          transition:
            'opacity 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, width 0.2s ease, height 0.2s ease'
        }}
      />
    </>
  );
};
