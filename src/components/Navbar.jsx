import React, { useState, useEffect } from 'react';
import { Sun, Moon, FileText, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'projects', 'skills', 'credentials', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'credentials', label: 'Credentials' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container nav-container">
          <a href="#home" className="brand-logo" aria-label="Raiza Roces Home">
            <div className="brand-monogram">RR</div>
            <div className="brand-text">
              <span className="brand-name">Raiza Roces</span>
              <span className="brand-role">Bachelor of Science in Information Technology</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="nav-links" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Controls */}
          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <button
              type="button"
              className="btn btn-outline btn-sm nav-resume-btn"
              onClick={onOpenResume}
            >
              <FileText size={15} />
              <span>Resume</span>
            </button>

            <button
              type="button"
              className="hamburger-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`drawer-backdrop ${mobileOpen ? 'active' : ''}`}
        onClick={() => setMobileOpen(false)}
      ></div>

      <aside className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              <span>{link.label}</span>
              <ArrowRight size={16} />
            </a>
          ))}
        </div>

        <div className="mobile-drawer-footer">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => {
              setMobileOpen(false);
              onOpenResume();
            }}
          >
            <FileText size={18} />
            <span>VIEW MY RESUME</span>
          </button>
          <a
            href="assets/docs/Roces,%20Raiza%20A.%20-%20Resume.pdf"
            download="Raiza_A_Roces_Resume.pdf"
            className="btn btn-secondary"
            style={{ width: '100%' }}
            onClick={() => setMobileOpen(false)}
          >
            Download Resume (PDF)
          </a>
        </div>
      </aside>
    </>
  );
}
