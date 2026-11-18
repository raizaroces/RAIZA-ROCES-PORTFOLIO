import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, Loader, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'warning' | 'error', message: string, mailtoFallback?: string }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Direct Mailto helper that pre-populates email app
  const handleDirectEmail = () => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim() || 'Portfolio Inquiry';
    const message = formData.message.trim();

    const bodyText = `Hi Raiza,\n\n${message || '[Your message here]'}\n\nBest regards,\n${name || 'A Visitor'} ${email ? `(${email})` : ''}`;
    const mailtoUrl = `mailto:raizaroces2800@gmail.com?subject=${encodeURIComponent(
      `[Portfolio] ${subject}`
    )}&body=${encodeURIComponent(bodyText)}`;

    window.location.href = mailtoUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    // 1. Client-Side Validation
    if (name.length < 2) {
      setStatus({
        type: 'error',
        message: 'Please provide your full name (at least 2 characters).'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({
        type: 'error',
        message: 'Please provide a valid email address so I can get back to you.'
      });
      return;
    }

    if (subject.length < 3) {
      setStatus({
        type: 'error',
        message: 'Please specify a subject for your message.'
      });
      return;
    }

    if (message.length < 10) {
      setStatus({
        type: 'error',
        message: 'Your message is too brief. Please enter at least 10 characters.'
      });
      return;
    }

    // Check if opened as raw file://
    if (window.location.protocol === 'file:') {
      const fallbackUrl = `mailto:raizaroces2800@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(`Hi Raiza,\n\n${message}\n\nFrom: ${name} (${email})`)}`;
      setStatus({
        type: 'warning',
        message:
          'You are browsing as a local HTML file (file://). FormSubmit requires a live web server (e.g. npm run dev or deployed site).',
        mailtoFallback: fallbackUrl
      });
      return;
    }

    // 2. Submit via FormSubmit AJAX to raizaroces2800@gmail.com
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/raizaroces2800@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: `[Portfolio Contact] ${subject} - From ${name}`,
          message: message,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const result = await response.json();

      // Check if FormSubmit requires initial one-time activation
      if (result.message && result.message.toLowerCase().includes('activation')) {
        setStatus({
          type: 'warning',
          message:
            "Form submitted! FormSubmit has sent a one-time activation link to raizaroces2800@gmail.com. Please open your Gmail inbox and click 'Activate Form' to activate your endpoint. All future messages will then arrive instantly!"
        });
        if (onShowToast) onShowToast('One-time activation email sent!', 'toast-success');
      } else if (response.ok && (result.success === 'true' || result.success === true)) {
        setStatus({
          type: 'success',
          message:
            'Thank you! Your message has been sent directly to my email (raizaroces2800@gmail.com). I will get back to you promptly.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        if (onShowToast) onShowToast('Message sent successfully!', 'toast-success');
      } else {
        throw new Error(result.message || 'Failed to deliver message.');
      }
    } catch (err) {
      console.warn('FormSubmit dispatch error:', err);
      const fallbackUrl = `mailto:raizaroces2800@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(`Hi Raiza,\n\n${message}\n\nFrom: ${name} (${email})`)}`;
      setStatus({
        type: 'error',
        message: 'Could not automatically dispatch email via web server.',
        mailtoFallback: fallbackUrl
      });
      if (onShowToast) onShowToast('Network error. Please use direct email.', 'toast-error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Interested in discussing employment opportunities, collaborative projects, or software inquiries? Send a message directly to my inbox.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left: Contact Info Cards */}
          <div className="contact-info-panel">
            <div>
              <h3 className="contact-panel-title">Let's Connect</h3>
              <p className="contact-panel-desc">
                I am actively seeking software engineering, web development, mobile development, or QA testing opportunities. Feel free to contact me through the form or via my direct profiles below.
              </p>
            </div>

            <div className="contact-cards-list">
              
              {/* Direct Clickable Email Link */}
              <a href="mailto:raizaroces2800@gmail.com" className="contact-card-item">
                <div className="contact-icon-box">
                  <Mail size={22} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-label">Email Address (Click to Open)</span>
                  <span className="contact-value">raizaroces2800@gmail.com</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/raizaroces"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-item"
              >
                <div className="contact-icon-box" style={{ color: '#e2e8f0', background: 'rgba(226, 232, 240, 0.12)' }}>
                  <GithubIcon size={22} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-label">GitHub Repository</span>
                  <span className="contact-value">github.com/raizaroces</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/raizaroces"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-item"
              >
                <div className="contact-icon-box" style={{ color: '#0a66c2', background: 'rgba(10, 102, 194, 0.12)' }}>
                  <LinkedinIcon size={22} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">linkedin.com/in/raizaroces</span>
                </div>
              </a>

            </div>
          </div>

          {/* Right: Functional Form */}
          <div className="contact-form-panel">
            <form onSubmit={handleSubmit} noValidate>
              
              {/* Status Alert Banner */}
              {status && (
                <div
                  className={`form-status-alert ${status.type}`}
                  style={{
                    display: 'flex',
                    background:
                      status.type === 'warning'
                        ? 'rgba(245, 158, 11, 0.12)'
                        : undefined,
                    border:
                      status.type === 'warning'
                        ? '1px solid rgba(245, 158, 11, 0.35)'
                        : undefined,
                    color: status.type === 'warning' ? '#fbbf24' : undefined
                  }}
                  role="alert"
                >
                  {status.type === 'success' ? (
                    <CheckCircle size={20} style={{ flexShrink: 0 }} />
                  ) : (
                    <AlertCircle size={20} style={{ flexShrink: 0 }} />
                  )}
                  <div>
                    <span>{status.message} </span>
                    {status.mailtoFallback && (
                      <div style={{ marginTop: '0.4rem' }}>
                        <a
                          href={status.mailtoFallback}
                          style={{ textDecoration: 'underline', fontWeight: 700, color: 'inherit' }}
                        >
                          Click here to send directly via your email app (Gmail / Outlook) →
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    className="form-input"
                    placeholder="e.g. Maria Santos"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    className="form-input"
                    placeholder="e.g. maria.santos@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject *
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  className="form-input"
                  placeholder="e.g. Opportunity Discussion / Project Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-textarea"
                  placeholder="Write your message here... Describe the opportunity or project."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="contact-submit-btn"
                  style={{ width: '100%' }}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader size={18} style={{ animation: 'spin 1s linear infinite' }} />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message (Web Form)</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleDirectEmail}
                  title="Open your device's email client with pre-filled details"
                  style={{ width: '100%' }}
                >
                  <ExternalLink size={16} />
                  <span>Send via Email Client (Direct Mailto)</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
