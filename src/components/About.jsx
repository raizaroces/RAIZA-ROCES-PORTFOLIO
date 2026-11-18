import React from 'react';
import { User, GraduationCap, Mail, CheckCircle, BookOpen, Users, MessageSquare, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { educationData } from '../data/resumeData';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        
        <div className="section-header">
          <span className="section-badge">Background &amp; Profile</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            A dedicated Information Technology student committed to technical excellence, continuous learning, and crafting dependable digital solutions.
          </p>
        </div>

        <div className="about-grid">
          
          {/* Left Column: Portrait & Verified Metadata (No location, no phone) */}
          <div className="about-card-left">
            <div className="about-photo-wrapper">
              <img
                src="assets/images/profile/MY_PIC.png"
                alt="Raiza A. Roces"
                className="about-photo"
                loading="lazy"
              />
            </div>

            <div className="about-personal-meta">
              <div className="meta-item">
                <span className="meta-icon">
                  <User size={18} />
                </span>
                <span><strong>Full Name:</strong> Raiza A. Roces</span>
              </div>

              <div className="meta-item">
                <span className="meta-icon">
                  <GraduationCap size={18} />
                </span>
                <span><strong>Degree:</strong> Bachelor of Science in Information Technology (4th Year)</span>
              </div>

              <div className="meta-item">
                <span className="meta-icon">
                  <Mail size={18} />
                </span>
                <span>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:raizaroces2800@gmail.com" style={{ color: 'var(--accent-primary)' }}>
                    raizaroces2800@gmail.com
                  </a>
                </span>
              </div>

              <div className="meta-item">
                <span className="meta-icon">
                  <GithubIcon size={18} />
                </span>
                <span>
                  <strong>GitHub:</strong>{' '}
                  <a
                    href="https://github.com/raizaroces"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    github.com/raizaroces
                  </a>
                </span>
              </div>

              <div className="meta-item">
                <span className="meta-icon">
                  <LinkedinIcon size={18} />
                </span>
                <span>
                  <strong>LinkedIn:</strong>{' '}
                  <a
                    href="https://www.linkedin.com/in/raizaroces"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    linkedin.com/in/raizaroces
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Structured Timeline */}
          <div className="about-content-right">
            
            <div className="about-narrative">
              <p className="about-paragraph">
                I am a 4th-year Bachelor of Science in Information Technology student at Pamantasan ng Lungsod ng Pasig. Through rigorous academic projects, I have developed a strong foundation in both frontend and backend architectures, system testing (QA), and comprehensive technical documentation.
              </p>
              <p className="about-paragraph" style={{ marginTop: '1rem' }}>
                My development philosophy centers on creating accessible, intuitive, and reliable software that solves real-world challenges. From collaborating on modern web applications like <em>Balik-Belongings</em> and <em>Student Violation Management System</em> to building mobile Android applications using Android Studio and Java, I bring a responsible, detail-oriented, and hardworking mindset eager to contribute to collaborative engineering teams.
              </p>
            </div>

            {/* Educational Background */}
            <div className="about-education-block">
              <h3 className="about-subheading">
                <GraduationCap size={22} />
                <span>Educational Background</span>
              </h3>

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
                        {edu.details.map((detail, dIdx) => (
                          <div key={dIdx} className="timeline-bullet">
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Strengths & Soft Skills */}
            <div className="about-strengths-block">
              <h3 className="about-subheading">
                <CheckCircle size={22} />
                <span>Core Strengths &amp; Work Ethics</span>
              </h3>

              <div className="strengths-grid">
                <div className="strength-chip">
                  <BookOpen size={18} style={{ color: 'var(--accent-primary)' }} />
                  <span>Willingness to Learn &amp; Upskill</span>
                </div>

                <div className="strength-chip">
                  <Users size={18} style={{ color: 'var(--accent-secondary)' }} />
                  <span>Teamwork &amp; Collaboration</span>
                </div>

                <div className="strength-chip">
                  <MessageSquare size={18} style={{ color: '#a855f7' }} />
                  <span>Clear Communication &amp; Docs</span>
                </div>

                <div className="strength-chip">
                  <Clock size={18} style={{ color: '#34d399' }} />
                  <span>Time Management &amp; Reliability</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
