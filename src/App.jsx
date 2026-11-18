import React, { useState, useEffect } from 'react';
import { ChevronUp, CheckCircle, AlertCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Strengths from './components/Strengths';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import ResumeModal from './components/ResumeModal';
import '../css/style.css';

export default function App() {
  // 1. Dark Mode Default (always opens in dark mode; session-preserved when toggled)
  const [theme, setTheme] = useState(() => {
    try {
      localStorage.removeItem('portfolio-theme');
      return sessionStorage.getItem('portfolio-theme') || 'dark';
    } catch {
      return 'dark';
    }
  });

  const [lightboxProject, setLightboxProject] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Synchronize data-theme attribute on documentElement
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      sessionStorage.setItem('portfolio-theme', theme);
    } catch {}
  }, [theme]);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenGallery = (project, index = 0) => {
    setLightboxProject(project);
    setLightboxIndex(index);
  };

  const handleCloseGallery = () => {
    setLightboxProject(null);
  };

  const showToast = (message, type = 'toast-success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio-app">
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setResumeOpen(true)}
      />

      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <Projects onOpenGallery={handleOpenGallery} />
        <Skills />
        <Strengths />
        <Resume onOpenResume={() => setResumeOpen(true)} />
        <Contact onShowToast={showToast} />
      </main>

      <Footer />

      {/* Lightbox Modal Gallery */}
      {lightboxProject && (
        <LightboxModal
          project={lightboxProject}
          currentIndex={lightboxIndex}
          onClose={handleCloseGallery}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}

      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Floating Back to Top Button */}
      <button
        type="button"
        className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll Back to Top"
      >
        <ChevronUp size={22} />
      </button>

      {/* Toast Notification */}
      {toast && (
        <div className="toast-container">
          <div className={`toast show ${toast.type}`}>
            {toast.type === 'toast-success' ? (
              <CheckCircle size={18} />
            ) : (
              <AlertCircle size={18} />
            )}
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  );
}
