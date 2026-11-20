import React, { useMemo } from 'react';

/**
 * BackgroundMotion component
 * Adds subtle, elegant motion objects:
 * - Ambient floating gradient orbs
 * - Twinkling stars of varying sizes, opacities, and animation cadences
 * - Rotating 4-point sparkle cross stars
 * - Staggered occasional shooting stars / meteors
 *
 * Designed with pure CSS GPU-accelerated transforms, zero layout shifts,
 * full responsiveness, and non-blocking pointer events.
 */
export default function BackgroundMotion({ theme = 'dark' }) {
  // Deterministic star field generation
  const stars = useMemo(() => {
    const list = [];
    const count = 48;
    const colors = [
      '#ffffff',
      '#a5b4fc', // soft indigo
      '#67e8f9', // cyan
      '#e0e7ff', // crisp light indigo
      '#c084fc', // purple
    ];

    for (let i = 0; i < count; i++) {
      const left = ((i * 37 + 13) % 96) + 2;
      const top = ((i * 53 + 7) % 94) + 3;
      const size = i % 4 === 0 ? 3 : i % 2 === 0 ? 2 : 1.5;
      const duration = 2.4 + (i % 6) * 1.1; // 2.4s to 7.9s
      const delay = ((i % 8) * 0.7);
      const color = colors[i % colors.length];
      const isMobileHidden = i > 28; // Keep only top 28 stars on small mobile screens

      list.push({ id: i, left, top, size, duration, delay, color, isMobileHidden });
    }
    return list;
  }, []);

  // 4-point Sparkle stars
  const sparkles = useMemo(() => [
    { id: 'sp-1', left: '14%', top: '16%', size: 18, duration: 6.5, delay: 0, color: '#67e8f9' },
    { id: 'sp-2', left: '84%', top: '24%', size: 22, duration: 8, delay: 1.8, color: '#a5b4fc' },
    { id: 'sp-3', left: '26%', top: '68%', size: 16, duration: 5.8, delay: 3.2, color: '#c084fc' },
    { id: 'sp-4', left: '76%', top: '78%', size: 19, duration: 7.2, delay: 2.1, color: '#38bdf8' },
    { id: 'sp-5', left: '52%', top: '38%', size: 14, duration: 6.2, delay: 4.5, color: '#ffffff' },
  ], []);

  // Shooting meteors
  const meteors = useMemo(() => [
    { id: 'm-1', top: '12%', left: '72%', duration: 9, delay: 2 },
    { id: 'm-2', top: '32%', left: '88%', duration: 13, delay: 6 },
    { id: 'm-3', top: '8%', left: '42%', duration: 16, delay: 10 },
  ], []);

  return (
    <div className={`bg-motion-container ${theme}`} aria-hidden="true">
      {/* 1. Ambient Floating Glowing Orbs */}
      <div className="bg-motion-orb bg-motion-orb-1" />
      <div className="bg-motion-orb bg-motion-orb-2" />
      <div className="bg-motion-orb bg-motion-orb-3" />

      {/* 2. Twinkling Stars Layer */}
      <div className="bg-stars-layer">
        {stars.map((s) => (
          <span
            key={s.id}
            className={`bg-star ${s.isMobileHidden ? 'bg-star-desktop-only' : ''}`}
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              backgroundColor: s.color,
              boxShadow: `0 0 ${s.size * 2.5}px ${s.color}`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* 3. 4-Point Sparkle Crosses */}
      <div className="bg-sparkles-layer">
        {sparkles.map((sp) => (
          <svg
            key={sp.id}
            className="bg-sparkle-star"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{
              left: sp.left,
              top: sp.top,
              width: `${sp.size}px`,
              height: `${sp.size}px`,
              color: sp.color,
              animationDuration: `${sp.duration}s`,
              animationDelay: `${sp.delay}s`,
            }}
          >
            <path d="M12 0C12 7.5 12 12 24 12C12 12 12 16.5 12 24C12 16.5 12 12 0 12C12 12 12 7.5 12 0Z" />
          </svg>
        ))}
      </div>

      {/* 4. Shooting Meteors */}
      <div className="bg-meteors-layer">
        {meteors.map((m) => (
          <span
            key={m.id}
            className="bg-meteor"
            style={{
              top: m.top,
              left: m.left,
              animationDuration: `${m.duration}s`,
              animationDelay: `${m.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
