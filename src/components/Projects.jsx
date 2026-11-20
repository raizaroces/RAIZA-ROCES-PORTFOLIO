import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';

export default function Projects({ onOpenGallery }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projectsData.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  return (
    <section className="section" id="projects">
      <div className="container">
        
        <div className="section-header">
          <span className="section-badge">Portfolio Showcase</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Showcasing all seven verified projects. Each project features its thumbnail preview, verified GitHub repository or live deployment, and interactive screenshot gallery.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="projects-filter-bar">
          <button
            type="button"
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects (7)
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web Applications (4)
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => setFilter('mobile')}
          >
            Mobile Apps (3)
          </button>
        </div>

        {/* Dynamic Project Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenGallery={onOpenGallery}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
