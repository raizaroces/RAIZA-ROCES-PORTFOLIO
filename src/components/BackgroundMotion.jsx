import React, { useMemo } from 'react';

/**
 * BackgroundMotion component
 * Adds subtle, elegant motion objects:
 * - Ambient floating gradient orbs
 * - Celestial constellation patterns with pulsing star nodes and glowing geometric lines
 * - Twinkling stars of varying sizes, opacities, and animation cadences
 * - Rotating 4-point sparkle cross stars
 * - Slower, majestic falling meteors
 *
 * Built with pure GPU-accelerated CSS transforms, zero layout shifts,
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
      const isMobileHidden = i > 28; // Keep 28 stars on small mobile screens

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

  // Slower, graceful shooting meteors (takes ~3.5-4s to glide across)
  const meteors = useMemo(() => [
    { id: 'm-1', top: '10%', left: '70%', duration: 15, delay: 3 },
    { id: 'm-2', top: '26%', left: '85%', duration: 18, delay: 10 },
  ], []);

  return (
    <div className={`bg-motion-container ${theme}`} aria-hidden="true">
      {/* 1. Ambient Floating Glowing Orbs */}
      <div className="bg-motion-orb bg-motion-orb-1" />
      <div className="bg-motion-orb bg-motion-orb-2" />
      <div className="bg-motion-orb bg-motion-orb-3" />

      {/* 2. Constellation Patterns */}
      <div className="bg-constellations-layer">
        {/* Constellation 1: Top-Left (Cassiopeia / Tech Geometry) */}
        <svg className="bg-constellation bg-constellation-1" viewBox="0 0 280 180" fill="none">
          <polyline
            points="30,130 85,45 155,105 215,35 260,75"
            className="constellation-line"
          />
          <line x1="155" y1="105" x2="260" y2="75" className="constellation-line" />
          {[
            { cx: 30, cy: 130, r: 3.5 },
            { cx: 85, cy: 45, r: 4 },
            { cx: 155, cy: 105, r: 3.5 },
            { cx: 215, cy: 35, r: 4.5 },
            { cx: 260, cy: 75, r: 3.5 },
          ].map((node, idx) => (
            <g key={idx} className="constellation-node">
              <circle cx={node.cx} cy={node.cy} r={node.r + 3} className="constellation-pulse-ring" />
              <circle cx={node.cx} cy={node.cy} r={node.r} className="constellation-star" />
            </g>
          ))}
        </svg>

        {/* Constellation 2: Bottom-Right (Geometric Shield / Diamond) */}
        <svg className="bg-constellation bg-constellation-2" viewBox="0 0 260 200" fill="none">
          <polygon
            points="50,45 150,20 230,85 175,175 70,150"
            className="constellation-line"
          />
          <line x1="150" y1="20" x2="175" y2="175" className="constellation-line" />
          <line x1="50" y1="45" x2="230" y2="85" className="constellation-line" />
          {[
            { cx: 50, cy: 45, r: 3.5 },
            { cx: 150, cy: 20, r: 4.5 },
            { cx: 230, cy: 85, r: 3.5 },
            { cx: 175, cy: 175, r: 4 },
            { cx: 70, cy: 150, r: 3 },
          ].map((node, idx) => (
            <g key={idx} className="constellation-node">
              <circle cx={node.cx} cy={node.cy} r={node.r + 3} className="constellation-pulse-ring" />
              <circle cx={node.cx} cy={node.cy} r={node.r} className="constellation-star" />
            </g>
          ))}
        </svg>

        {/* Constellation 3: Mid-Left (Triangulum / Tech Web) */}
        <svg className="bg-constellation bg-constellation-3" viewBox="0 0 220 160" fill="none">
          <polygon
            points="30,30 110,65 190,40 145,130 65,115"
            className="constellation-line"
          />
          <line x1="110" y1="65" x2="145" y2="130" className="constellation-line" />
          {[
            { cx: 30, cy: 30, r: 3.5 },
            { cx: 110, cy: 65, r: 4 },
            { cx: 190, cy: 40, r: 3.5 },
            { cx: 145, cy: 130, r: 4.5 },
            { cx: 65, cy: 115, r: 3 },
          ].map((node, idx) => (
            <g key={idx} className="constellation-node">
              <circle cx={node.cx} cy={node.cy} r={node.r + 3} className="constellation-pulse-ring" />
              <circle cx={node.cx} cy={node.cy} r={node.r} className="constellation-star" />
            </g>
          ))}
        </svg>
      </div>

      {/* 3. Twinkling Stars Layer */}
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

      {/* 4. 4-Point Sparkle Crosses */}
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

      {/* 5. Slower Shooting Meteors */}
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
