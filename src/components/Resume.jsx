import React, { useState } from 'react';
import { Eye, Download, Award, Briefcase, GraduationCap } from 'lucide-react';
import { certificationsData, educationData, experienceData } from '../data/resumeData';

export default function Resume({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState('certs');

  return (
    <section className="section resume-section-wrapper" id="resume">
      <div className="container">
        
        <div className="section-header">
          <span className="section-badge">Credentials &amp; Verification</span>
          <h2 className="section-title">
            Resume &amp; <span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-subtitle">
            Inspect my authentic resume document directly from the portfolio or download a clean PDF copy for your records.
          </p>
        </div>

        {/* Primary Action Banner */}
        <div className="resume-cta-banner">
          <div className="resume-banner-text">
            <h3 className="resume-banner-title">Authentic Resume Document</h3>
            <p className="resume-banner-desc">
              Directly view or download my official curriculum vitae in PDF format. Preserves original formatting, academic standing, verified contact details, and complete project scopes.
            </p>
          </div>

          <div className="resume-banner-actions">
            <button
              type="button"
              className="btn btn-primary btn-resume-view"
              id="resume-section-view-btn"
              onClick={onOpenResume}
            >
              <Eye size={20} />
              <span>VIEW MY RESUME</span>
            </button>

            <a
              href="assets/docs/Roces,%20Raiza%20A.%20-%20Resume.pdf"
              download="Raiza_A_Roces_Resume.pdf"
              className="btn btn-secondary"
            >
              <Download size={18} />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className="resume-tabs-nav">
          <button
            type="button"
            className={`resume-tab-btn ${activeTab === 'certs' ? 'active' : ''}`}
            onClick={() => setActiveTab('certs')}
          >
            <Award size={18} />
            <span>Certifications (16)</span>
          </button>

          <button
            type="button"
            className={`resume-tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <Briefcase size={18} />
            <span>Work Immersion &amp; Office Experience</span>
          </button>

          <button
            type="button"
            className={`resume-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <GraduationCap size={18} />
            <span>Academic Background</span>
          </button>
        </div>

        {/* Tab 1: Certifications */}
        {activeTab === 'certs' && (
          <div className="resume-tab-content active">
            <div className="certs-grid">
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="cert-card">
                  <div className="cert-icon-wrapper">
                    <Award size={20} />
                  </div>
                  <div className="cert-info">
                    <h4 className="cert-title">{cert.title}</h4>
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Work Experience / Immersion */}
        {activeTab === 'experience' && (
          <div className="resume-tab-content active">
            <div className="timeline-list">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-card">
                    <div className="timeline-header">
                      <span className="timeline-title">{exp.role}</span>
                      <span className="timeline-date">{exp.period}</span>
                    </div>
                    <div className="timeline-subtitle">
                      {exp.organization} | {exp.program}
                    </div>
                    <div className="timeline-desc">
                      {exp.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="timeline-bullet">
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Education */}
        {activeTab === 'education' && (
          <div className="resume-tab-content active">
            <div className="timeline-list">
              {educationData.map((edu, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-card">
                    <div className="timeline-header">
                      <span className="timeline-title">{edu.school}</span>
                      <span className="timeline-date">{edu.period}</span>
                    </div>
                    <div className="timeline-subtitle">{edu.degree}</div>
                    <div className="timeline-desc">
                      {edu.details.map((d, dIdx) => (
                        <div key={dIdx} className="timeline-bullet">
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
