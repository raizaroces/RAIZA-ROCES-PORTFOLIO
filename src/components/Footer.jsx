import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-logo" style={{ marginBottom: '0.5rem' }}>
              <div className="brand-monogram">RR</div>
              <span className="brand-name">Raiza A. Roces</span>
            </div>
            <p className="footer-desc">
              4th-year Bachelor of Science in Information Technology student at Pamantasan ng Lungsod ng Pasig. Passionate about engineering dependable web applications, mobile platforms, and AI-enabled software solutions.
            </p>
          </div>

          <ul className="footer-nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#credentials">Credentials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Raiza A. Roces. All rights reserved.</p>
          <p>Built with React.js, modern web standards, responsive architecture, and authentic credentials.</p>
        </div>
      </div>
    </footer>
  );
}
