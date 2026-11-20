import React from 'react';
import { Code, FileText, Award, GraduationCap, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ onOpenResume }) {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-grid">
          
          {/* Left Column: Bio & Intro */}
          <div className="hero-content">
            <div className="status-badge">
              <span className="pulse-dot"></span>
              <span>Available for Opportunities &amp; Collaborations</span>
            </div>

            <p className="hero-title-greeting">Hello, I'm</p>
            <h1 className="hero-name">
              Raiza A. <span className="gradient-text">Roces</span>
            </h1>

            <div className="hero-role">
              <span>Web and Mobile Application Developer</span>
              <span style={{ color: 'var(--accent-primary)' }}>•</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.95em' }}>
                Bachelor of Science in Information Technology
              </span>
            </div>

            <p className="hero-description">
              4th-year Bachelor of Science in Information Technology student at Pamantasan ng Lungsod ng Pasig. Experienced in developing responsive web and mobile applications through academic and collaborative projects, with core strengths in frontend development, system testing, UI/UX design, and technical documentation.
            </p>

            {/* Action CTA Group */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">
                <Code size={18} />
                <span>View My Projects</span>
              </a>

              <button
                type="button"
                className="btn btn-secondary"
                id="hero-view-resume-btn"
                onClick={onOpenResume}
              >
                <FileText size={18} />
                <span>VIEW MY RESUME</span>
              </button>
            </div>

            {/* Social Links (No location, no phone number) */}
            <div className="hero-social-links">
              <a
                href="https://github.com/raizaroces"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
                title="GitHub: @raizaroces"
              >
                <GithubIcon size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/raizaroces"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn: @raizaroces"
              >
                <LinkedinIcon size={20} />
              </a>

              <a
                href="mailto:raizaroces2800@gmail.com"
                className="social-icon-btn"
                aria-label="Email Raiza Roces"
                title="Email: raizaroces2800@gmail.com"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Picture (MY_PIC.png) without floating badges */}
          <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            
            <div className="hero-image-container">
              <img
                src="assets/images/profile/MY_PIC.png"
                alt="Raiza A. Roces - Web and Mobile Application Developer"
                className="hero-image"
                loading="eager"
              />
            </div>
          </div>

        </div>

        {/* Quick Highlights Bar (No location, no President's Lister) */}
        <div className="hero-highlights-strip">
          <div className="highlight-card">
            <div className="highlight-icon-box">
              <Code size={24} />
            </div>
            <div className="highlight-info">
              <span className="highlight-number">7</span>
              <span className="highlight-label">Verified Development Projects</span>
            </div>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon-box" style={{ color: '#38bdf8', background: 'rgba(56, 189, 248, 0.12)' }}>
              <Award size={24} />
            </div>
            <div className="highlight-info">
              <span className="highlight-number">36</span>
              <span className="highlight-label">Verified Certifications &amp; Credentials</span>
            </div>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon-box" style={{ color: '#a855f7', background: 'rgba(168, 85, 247, 0.12)' }}>
              <GraduationCap size={24} />
            </div>
            <div className="highlight-info">
              <span className="highlight-number">4th Year</span>
              <span className="highlight-label">BS Information Technology</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
