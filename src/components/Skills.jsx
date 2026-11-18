import React, { useState } from 'react';
import { Code, Globe, Smartphone, Database, Wrench, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: Code,
    color: '#6366f1',
    bg: 'rgba(99, 102, 241, 0.12)',
    skills: ['Java', 'Python', 'PHP', 'JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3']
  },
  {
    id: 'web',
    title: 'Web & Frontend Development',
    icon: Globe,
    color: '#06b6d4',
    bg: 'rgba(6, 182, 212, 0.12)',
    skills: ['React.js', 'Node.js', 'Express.js', 'Role-Based Access Control (RBAC)', 'Responsive UI/UX', 'System Testing / QA']
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    icon: Smartphone,
    color: '#10b981',
    bg: 'rgba(16, 185, 129, 0.12)',
    skills: ['Android Studio', 'Android Development (Java)', 'Point-of-Sale (POS) Logic', 'Cart & Checkout Computing', 'Mobile UI/UX Design']
  },
  {
    id: 'database',
    title: 'Database Management',
    icon: Database,
    color: '#f59e0b',
    bg: 'rgba(245, 158, 11, 0.12)',
    skills: ['MySQL', 'Relational Schema Design', 'Data Management', 'Document Classification']
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: Wrench,
    color: '#a855f7',
    bg: 'rgba(168, 85, 247, 0.12)',
    skills: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'Figma (Basic)', 'Canva', 'Microsoft Excel (Basic)']
  },
  {
    id: 'ai-cloud',
    title: 'AI & Cloud Competencies',
    icon: Sparkles,
    color: '#ec4899',
    bg: 'rgba(236, 72, 153, 0.12)',
    skills: [
      'Prompt Engineering',
      'Gemini for App Developers',
      'Claude 101',
      'AI Tools (ChatGPT, Gemini, Copilot)',
      'Google Cloud Fundamentals',
      'Alibaba Cloud Masterclass',
      'Machine Learning & Computer Vision'
    ]
  }
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCategories = activeFilter === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === activeFilter);

  return (
    <section
      className="section"
      id="skills"
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container">
        
        <div className="section-header">
          <span className="section-badge">Verified Capabilities</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Organized by development discipline, verified strictly from my resume, project implementations, and official industry certifications.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="skills-filter-bar">
          <button
            type="button"
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Skills
          </button>
          <button
            type="button"
            className={`filter-btn ${activeFilter === 'languages' ? 'active' : ''}`}
            onClick={() => setActiveFilter('languages')}
          >
            Languages
          </button>
          <button
            type="button"
            className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
            onClick={() => setActiveFilter('web')}
          >
            Web Dev
          </button>
          <button
            type="button"
            className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`}
            onClick={() => setActiveFilter('mobile')}
          >
            Mobile Dev
          </button>
          <button
            type="button"
            className={`filter-btn ${activeFilter === 'database' ? 'active' : ''}`}
            onClick={() => setActiveFilter('database')}
          >
            Database
          </button>
          <button
            type="button"
            className={`filter-btn ${activeFilter === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveFilter('tools')}
          >
            Tools
          </button>
          <button
            type="button"
            className={`filter-btn ${activeFilter === 'ai-cloud' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ai-cloud')}
          >
            AI &amp; Cloud
          </button>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredCategories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div key={cat.id} className="skill-category-card">
                <div className="skill-category-header">
                  <div className="skill-category-icon" style={{ color: cat.color, background: cat.bg }}>
                    <IconComponent size={22} />
                  </div>
                  <h3 className="skill-category-title">{cat.title}</h3>
                </div>

                <div className="skills-pill-container">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
