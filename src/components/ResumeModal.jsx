import React, { useEffect } from 'react';
import { X, ExternalLink, Download, FileText } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const pdfUrl = 'assets/docs/Roces,%20Raiza%20A.%20-%20Resume.pdf';

  return (
    <div
      className="modal-overlay active"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={(e) => {
        if (e.target.classList.contains('modal-overlay')) {
          onClose();
        }
      }}
    >
      <div className="resume-modal-dialog">
        <div className="resume-modal-header">
          <h3 className="resume-modal-title" id="resume-modal-title">
            <FileText size={20} />
            <span>Curriculum Vitae - Raiza A. Roces</span>
          </h3>

          <div className="resume-modal-actions">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              title="Open in new browser tab"
            >
              <ExternalLink size={15} />
              <span>Open in Tab</span>
            </a>

            <a
              href={pdfUrl}
              download="Raiza_A_Roces_Resume.pdf"
              className="btn btn-primary btn-sm"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close Resume Viewer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="resume-iframe-container">
          <iframe
            src={pdfUrl}
            className="resume-iframe"
            title="Raiza A. Roces Resume Document"
          >
            <p>
              Your browser does not support embedded PDF frames.{' '}
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                Click here to view the PDF directly
              </a>.
            </p>
          </iframe>
        </div>
      </div>
    </div>
  );
}
