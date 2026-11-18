import React from 'react';
import { BookOpen, Users, MessageSquare, Clock } from 'lucide-react';

export default function Strengths() {
  const items = [
    {
      icon: BookOpen,
      color: 'var(--accent-primary)',
      label: 'Willingness to Learn & Upskill',
      desc: 'Continuously expanding knowledge in emerging technologies and development practices.'
    },
    {
      icon: Users,
      color: 'var(--accent-secondary)',
      label: 'Teamwork & Collaboration',
      desc: 'Working effectively with cross-functional teams to deliver shared goals.'
    },
    {
      icon: MessageSquare,
      color: '#a855f7',
      label: 'Clear Communication & Documentation',
      desc: 'Conveying technical concepts clearly and maintaining well-structured documentation.'
    },
    {
      icon: Clock,
      color: '#34d399',
      label: 'Time Management & Reliability',
      desc: 'Delivering quality work on schedule while managing multiple responsibilities.'
    },
  ];

  return (
    <section className="section" id="strengths" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Professional Attributes</span>
          <h2 className="section-title">
            Core Strengths &amp; <span className="gradient-text">Work Ethics</span>
          </h2>
          <p className="section-subtitle">
            The values and qualities I bring to every project and team I work with.
          </p>
        </div>

        <div className="strengths-grid" style={{ maxWidth: '860px', margin: '0 auto' }}>
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="strength-chip" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.75rem', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div
                    style={{
                      background: `${item.color}18`,
                      borderRadius: '10px',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} style={{ color: item.color }} />
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-primary)' }}>
                    {item.label}
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
