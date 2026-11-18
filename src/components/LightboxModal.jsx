import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ project, currentIndex, onClose, onNavigate }) {
  const thumbRailRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + project.gallery.length) % project.gallery.length);
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % project.gallery.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, currentIndex, onClose, onNavigate]);

  useEffect(() => {
    if (thumbRailRef.current && thumbRailRef.current.children[currentIndex]) {
      thumbRailRef.current.children[currentIndex].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  }, [currentIndex]);

  if (!project || !project.gallery || project.gallery.length === 0) return null;

  const currentItem = project.gallery[currentIndex];
  const total = project.gallery.length;

  return (
    <div
      className="modal-overlay active"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-project-name"
      onClick={(e) => {
        if (e.target.classList.contains('modal-overlay')) {
          onClose();
        }
      }}
    >
      <div className="lightbox-dialog">
        <div className="lightbox-header">
          <div className="lightbox-title-area">
            <h3 className="lightbox-project-name" id="lightbox-project-name">
              {project.title}
            </h3>
            <span className="lightbox-image-caption">{currentItem.title}</span>
          </div>

          <div className="lightbox-header-actions">
            <span className="lightbox-counter-badge">
              {currentIndex + 1} of {total}
            </span>
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close Gallery"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="lightbox-body">
          <button
            type="button"
            className="lightbox-nav-btn lightbox-prev-btn"
            onClick={() => onNavigate((currentIndex - 1 + total) % total)}
            aria-label="Previous Screenshot"
          >
            <ChevronLeft size={26} />
          </button>

          <img
            src={currentItem.src}
            alt={currentItem.title}
            className="lightbox-display-image"
            onError={(e) => {
              e.target.src = encodeURI(currentItem.src);
            }}
          />

          <button
            type="button"
            className="lightbox-nav-btn lightbox-next-btn"
            onClick={() => onNavigate((currentIndex + 1) % total)}
            aria-label="Next Screenshot"
          >
            <ChevronRight size={26} />
          </button>
        </div>

        {/* Thumbnail Carousel Rail */}
        <div className="lightbox-thumbnails-footer" ref={thumbRailRef}>
          {project.gallery.map((item, idx) => (
            <div
              key={idx}
              className={`lightbox-thumb-item ${idx === currentIndex ? 'active' : ''}`}
              title={item.title}
              onClick={() => onNavigate(idx)}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                onError={(e) => {
                  e.target.src = encodeURI(item.src);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
