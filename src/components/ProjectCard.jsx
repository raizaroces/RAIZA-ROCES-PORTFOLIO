import React, { useState } from 'react';
import { ExternalLink, Image as ImageIcon, GraduationCap } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, onOpenGallery }) {
  const [imgError, setImgError] = useState(false);
  const hasMultipleImages = project.gallery && project.gallery.length > 0;

  const handleImgError = (e) => {
    if (!imgError) {
      setImgError(true);
      e.target.src = encodeURI(project.mainImage);
    }
  };

  return (
    <div className="project-card" data-id={project.id}>
      <div className="project-thumbnail-wrapper">
        <img
          src={project.mainImage}
          alt={project.title}
          className="project-thumbnail"
          loading="lazy"
          onError={handleImgError}
        />
        <div className="project-thumbnail-overlay"></div>

        <div className="project-badge-top">
          <span className="project-tag project-tag-year">{project.year}</span>
          <span className="project-tag">
            {project.category === 'web' ? 'Web Application' : 'Mobile App'}
          </span>
        </div>

        {hasMultipleImages && (
          <div
            className="project-gallery-count"
            title="Additional screenshots available in gallery"
          >
            <ImageIcon size={14} />
            <span>+{project.gallery.length} Images</span>
          </div>
        )}
      </div>

      <div className="project-body">
        <div className="project-role-text">{project.role}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech-stack">
          {project.tech.map((t, idx) => (
            <span key={idx} className="tech-chip">
              {t}
            </span>
          ))}
        </div>

        <div className="project-footer-actions">
          <div className="project-action-left">
            {project.externalType === 'live' && (
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-project-link"
                title="Open live website in new tab"
              >
                <ExternalLink size={15} />
                <span>Live Demo</span>
              </a>
            )}

            {project.externalType === 'github' && (
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-project-link"
                title="View source repository on GitHub"
              >
                <GithubIcon size={15} />
                <span>GitHub Repo</span>
              </a>
            )}

            {project.id === 'capstone-hte' && (
              <span className="project-no-link-badge">
                <GraduationCap size={14} />
                <span>Academic Capstone System</span>
              </span>
            )}
          </div>

          {hasMultipleImages && (
            <button
              type="button"
              className="btn-project-gallery"
              onClick={() => onOpenGallery(project, 0)}
              title="View full screenshot gallery for this project"
            >
              <ImageIcon size={16} />
              <span>View Gallery</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
