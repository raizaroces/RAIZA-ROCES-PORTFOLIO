import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Download, Award, ShieldCheck, FileText, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CertificateModal({ card, initialIndex = 0, isOpen, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState('preview'); // 'preview' or 'pdf'

  useEffect(() => {
    setActiveIndex(initialIndex || 0);
    setViewMode('preview');
  }, [card, initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (!card || !card.items || card.items.length <= 1) return;
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev === 0 ? card.items.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev === card.items.length - 1 ? 0 : prev + 1));
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, card]);

  if (!isOpen || !card) return null;

  const items = card.items || [];
  const currentItem = items[activeIndex] || items[0] || {};
  const isPdf = currentItem.type === 'pdf';
  const hasMultiple = items.length > 1;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="modal-overlay active cert-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="cert-modal-dialog" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="cert-modal-header">
          <div className="cert-modal-title-box">
            <div className="cert-modal-badge-row">
              <span className="cert-category-badge">{card.category}</span>
              <span className="cert-date-badge">{currentItem.date || card.date}</span>
              {hasMultiple && (
                <span className="cert-counter-pill">
                  Part {activeIndex + 1} of {items.length}
                </span>
              )}
              {currentItem.certId && (
                <span className="cert-id-badge">
                  <ShieldCheck size={14} />
                  <span>ID: {currentItem.certId}</span>
                </span>
              )}
            </div>

            <h3 className="cert-modal-title">{card.title}</h3>

            {hasMultiple && currentItem.subTitle && (
              <p className="cert-modal-session-subtitle">{currentItem.subTitle}</p>
            )}

            <p className="cert-modal-issuer">
              <Award size={15} />
              <span>Issued by <strong>{currentItem.issuer || card.issuer}</strong></span>
            </p>
          </div>

          <div className="cert-modal-actions">
            {isPdf && (
              <div className="cert-view-toggle">
                <button
                  type="button"
                  className={`btn-toggle ${viewMode === 'preview' ? 'active' : ''}`}
                  onClick={() => setViewMode('preview')}
                >
                  Image Preview
                </button>
                <button
                  type="button"
                  className={`btn-toggle ${viewMode === 'pdf' ? 'active' : ''}`}
                  onClick={() => setViewMode('pdf')}
                >
                  <FileText size={14} />
                  PDF Document
                </button>
              </div>
            )}

            <a
              href={currentItem.documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              title="Open document in a new tab"
            >
              <ExternalLink size={16} />
              <span className="btn-text-desktop">Open Original</span>
            </a>

            <a
              href={currentItem.documentUrl}
              download
              className="btn btn-primary btn-sm"
              title="Download original certificate"
            >
              <Download size={16} />
              <span className="btn-text-desktop">Download</span>
            </a>

            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close Certificate Preview"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body with Image/PDF & Next/Prev Navigation */}
        <div className="cert-modal-body">
          {hasMultiple && (
            <button
              type="button"
              className="cert-modal-nav-btn cert-modal-prev-btn"
              onClick={handlePrev}
              aria-label="Previous certificate item"
              title="Previous item"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {isPdf && viewMode === 'pdf' ? (
            <div className="cert-iframe-container">
              <iframe
                src={`${currentItem.documentUrl}#toolbar=1&navpanes=0`}
                title={currentItem.subTitle || card.title}
                className="cert-modal-iframe"
              />
            </div>
          ) : (
            <div className="cert-modal-image-wrapper">
              <img
                src={currentItem.previewImage}
                alt={`${card.title} - ${currentItem.subTitle || ''}`}
                className="cert-modal-image"
                loading="eager"
              />
            </div>
          )}

          {hasMultiple && (
            <button
              type="button"
              className="cert-modal-nav-btn cert-modal-next-btn"
              onClick={handleNext}
              aria-label="Next certificate item"
              title="Next item"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {/* Modal Footer */}
        <div className="cert-modal-footer">
          <div className="cert-modal-desc-box">
            <p className="cert-modal-desc">
              <CheckCircle2 size={16} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
              <span>{card.description}</span>
            </p>
          </div>

          {hasMultiple && (
            <div className="cert-modal-session-selector">
              <span className="session-selector-label">Navigate Parts:</span>
              <div className="session-selector-pills">
                {items.map((it, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`session-pill-btn ${activeIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                    title={it.subTitle}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
