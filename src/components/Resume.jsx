import React, { useState, useMemo } from 'react';
import { Eye, Download, Award, Briefcase, GraduationCap, Search } from 'lucide-react';
import { educationData, experienceData } from '../data/resumeData';
import { certificatesData } from '../data/certificatesData';
import CertificateCard from './CertificateCard';
import CertificateModal from './CertificateModal';

export default function Resume({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState('certs');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalData, setActiveModalData] = useState(null);

  const categories = ['All', 'Cloud & DevOps', 'AI & Machine Learning', 'IT Infrastructure', 'Professional & Specialization'];

  // Total count of verified credentials across all groups
  const totalCredentialCount = useMemo(() => {
    return certificatesData.reduce((acc, c) => acc + (c.items ? c.items.length : 1), 0);
  }, []);

  const filteredCertificates = useMemo(() => {
    return certificatesData.filter((card) => {
      const matchesCategory = selectedCategory === 'All' || card.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        card.title.toLowerCase().includes(q) ||
        card.issuer.toLowerCase().includes(q) ||
        card.items.some(
          (it) =>
            (it.subTitle && it.subTitle.toLowerCase().includes(q)) ||
            (it.certId && it.certId.toLowerCase().includes(q))
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="section resume-section-wrapper" id="resume">
      <div className="container">
        
        <div className="section-header">
          <span className="section-badge">Credentials &amp; Verification</span>
          <h2 className="section-title">
            Resume &amp; <span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-subtitle">
            Browse my verified credentials arranged chronologically from newest to oldest. Multi-part workshops and modular courses are organized with interactive navigation.
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
            <span>Certificates &amp; Credentials ({totalCredentialCount})</span>
          </button>

          <button
            type="button"
            className={`resume-tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <Briefcase size={18} />
            <span>Work Immersion &amp; Experience</span>
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

        {/* Tab 1: Certificates & Credentials Gallery */}
        {activeTab === 'certs' && (
          <div className="resume-tab-content active">
            
            {/* Gallery Controls: Filter Pills & Search */}
            <div className="cert-gallery-controls">
              <div className="cert-filter-pills">
                {categories.map((cat) => {
                  const count = cat === 'All'
                    ? certificatesData.length
                    : certificatesData.filter((c) => c.category === cat).length;
                  return (
                    <button
                      key={cat}
                      type="button"
                      className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      <span>{cat}</span>
                      <span className="filter-count-badge">{count}</span>
                    </button>
                  );
                })}
              </div>

              <div className="cert-search-box">
                <Search size={16} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search by title, session, or issuer..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="cert-search-input"
                  aria-label="Search certificates"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="search-clear-btn"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                  >
                    &times;
                  </button>
                )}
              </div>
            </div>

            {/* Gallery Grid of Organized & Grouped Certificates */}
            {filteredCertificates.length > 0 ? (
              <div className="cert-gallery-grid">
                {filteredCertificates.map((card) => (
                  <CertificateCard
                    key={card.id}
                    card={card}
                    onViewCertificate={(selectedCard, idx) =>
                      setActiveModalData({ card: selectedCard, initialIndex: idx })
                    }
                  />
                ))}
              </div>
            ) : (
              <div className="cert-no-results">
                <p>No certificates found matching "{searchQuery}" in "{selectedCategory}".</p>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}

          </div>
        )}

        {/* Tab 2: Work Immersion / Experience */}
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

      {/* Certificate Viewer Modal */}
      <CertificateModal
        card={activeModalData?.card}
        initialIndex={activeModalData?.initialIndex || 0}
        isOpen={Boolean(activeModalData)}
        onClose={() => setActiveModalData(null)}
      />
    </section>
  );
}
