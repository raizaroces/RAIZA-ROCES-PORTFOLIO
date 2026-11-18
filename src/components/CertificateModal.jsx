import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Download, Award, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export default function CertificateModal({ certificate, isOpen, onClose }) {
  const [viewMode, setViewMode] = useState('preview'); // 'preview' or 'pdf'

  useEffect(() => {
    if (certificate) {
      setViewMode('preview');
    }
  }, [certificate]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
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
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  const isPdf = certificate.type === 'pdf';

  return (
    <div className={`modal-overlay active cert-modal-overlay`} onClick={onClose} role="dialog" aria-modal="true">
      <div className="cert-modal-dialog" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="cert-modal-header">
          <div className="cert-modal-title-box">
            <div className="cert-modal-badge-row">
              <span className="cert-category-badge">{certificate.category}</span>
              <span className="cert-date-badge">{certificate.date}</span>
              {certificate.certId && (
                <span className="cert-id-badge">
                  <ShieldCheck size={14} />
                  <span>ID: {certificate.certId}</span>
                </span>
              )}
            </div>
            <h3 className="cert-modal-title">{certificate.title}</h3>
            <p className="cert-modal-issuer">
              <Award size={15} />
              <span>Issued by <strong>{certificate.issuer}</strong></span>
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
              href={certificate.documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              title="Open document in a new tab"
            >
              <ExternalLink size={16} />
              <span className="btn-text-desktop">Open Original</span>
            </a>

            <a
              href={certificate.documentUrl}
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

        {/* Modal Body */}
        <div className="cert-modal-body">
          {isPdf && viewMode === 'pdf' ? (
            <div className="cert-iframe-container">
              <iframe
                src={`${certificate.documentUrl}#toolbar=1&navpanes=0`}
                title={certificate.title}
                className="cert-modal-iframe"
              />
            </div>
          ) : (
            <div className="cert-modal-image-wrapper">
              <img
                src={certificate.previewImage}
                alt={certificate.title}
                className="cert-modal-image"
                loading="lazy"
              />
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="cert-modal-footer">
          <div className="cert-modal-desc-box">
            <p className="cert-modal-desc">
              <CheckCircle2 size={16} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
              <span>{certificate.description}</span>
            </p>
          </div>

          {certificate.additionalDocUrl && (
            <div className="cert-additional-docs">
              <span className="additional-docs-label">Companion Credential:</span>
              <a
                href={certificate.additionalDocUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-text-link"
              >
                <FileText size={14} />
                <span>View Official DICT-ITU DTC Certificate</span>
                <ExternalLink size={12} />
              </a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
