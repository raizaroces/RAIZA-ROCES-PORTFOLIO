import React, { useState } from 'react';
import { Eye, ExternalLink, ChevronLeft, ChevronRight, Award, ShieldCheck, FileText, CheckCircle2, Layers } from 'lucide-react';

export default function CertificateCard({ card, onViewCertificate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = card.items || [];
  const currentItem = items[currentIndex] || items[0];
  const hasMultiple = items.length > 1;

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <article className="cert-gallery-card">
      
      {/* Visual Preview Container */}
      <div
        className="cert-card-preview-wrapper"
        onClick={() => onViewCertificate(card, currentIndex)}
        title="Click to view full certificate"
      >
        <img
          src={currentItem.previewImage}
          alt={`${card.title} - ${currentItem.subTitle || ''}`}
          className="cert-card-image"
          loading="lazy"
        />

        {/* Hover Overlay */}
        <div className="cert-card-overlay">
          <span className="btn-view-preview">
            <Eye size={18} />
            <span>View Certificate</span>
          </span>
        </div>

        {/* Document Type Badge */}
        <span className="cert-type-pill">
          {currentItem.type === 'pdf' ? (
            <>
              <FileText size={12} />
              <span>PDF Document</span>
            </>
          ) : (
            <>
              <CheckCircle2 size={12} />
              <span>Verified Image</span>
            </>
          )}
        </span>

        {/* Group Multi-Item Counter Badge */}
        {hasMultiple && (
          <span className="cert-multi-badge">
            <Layers size={12} />
            <span>{items.length} Credentials</span>
          </span>
        )}
      </div>

      {/* Previous / Next Navigation Bar for Grouped Certificates */}
      {hasMultiple && (
        <div className="cert-card-nav-bar">
          <button
            type="button"
            className="cert-nav-arrow-btn"
            onClick={handlePrev}
            aria-label="Previous certificate part"
            title="View previous session"
          >
            <ChevronLeft size={16} />
            <span className="cert-nav-btn-text">Previous</span>
          </button>

          <span className="cert-nav-counter">
            {currentIndex + 1} of {items.length}
          </span>

          <button
            type="button"
            className="cert-nav-arrow-btn"
            onClick={handleNext}
            aria-label="Next certificate part"
            title="View next session"
          >
            <span className="cert-nav-btn-text">Next</span>
            <ChevronRight size={16} />
          </button>
        </div>
      )}

      {/* Card Content Body */}
      <div className="cert-card-body">
        
        {/* Meta Row: Category & Event Date */}
        <div className="cert-card-meta">
          <span className="cert-badge-category">{card.category}</span>
          <span className="cert-badge-date">{currentItem.date || card.date}</span>
        </div>

        {/* Main Event Title */}
        <h4 className="cert-card-title" title={card.title}>
          {card.title}
        </h4>

        {/* Subtitle / Session Name (for multi-part programs) */}
        {hasMultiple && currentItem.subTitle && (
          <p className="cert-card-session-title" title={currentItem.subTitle}>
            {currentItem.subTitle}
          </p>
        )}

        {/* Issuing Organization */}
        <p className="cert-card-issuer">
          <Award size={14} className="cert-issuer-icon" />
          <span>{currentItem.issuer || card.issuer}</span>
        </p>

        {/* Credential ID if present */}
        {currentItem.certId && (
          <div className="cert-card-id" title={`Credential ID: ${currentItem.certId}`}>
            <ShieldCheck size={13} />
            <span>ID: {currentItem.certId}</span>
          </div>
        )}

        {/* Action Buttons Row */}
        <div className="cert-card-actions">
          <button
            type="button"
            className="btn btn-primary btn-sm btn-view-cert"
            onClick={() => onViewCertificate(card, currentIndex)}
          >
            <Eye size={15} />
            <span>View Certificate</span>
          </button>

          <a
            href={currentItem.documentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm btn-icon-only"
            title="Open original document in new tab"
            aria-label={`Open ${card.title} document in new tab`}
          >
            <ExternalLink size={15} />
          </a>
        </div>

      </div>

    </article>
  );
}
