# Raiza A. Roces — Personal Portfolio

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Deployment](https://img.shields.io/badge/Deployment-Vercel%20%7C%20GitHub%20Pages-black?logo=vercel&logoColor=white)](https://vercel.com)

A modern, and accessible personal portfolio website built with **React 18** and **Vite**. Designed with an authentic, recruiter-friendly showcase of verified web and mobile engineering projects, industry credentials, technical competencies, and professional work ethics.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Architecture & Key Features](#-architecture--key-features)
- [Project Directory Structure](#-project-directory-structure)
- [Featured Projects](#-featured-projects)
- [Technical Skills & Competencies](#-technical-skills--competencies)
- [Credentials & Certifications](#-credentials--certifications)
- [Getting Started Locally](#-getting-started-locally)
- [Deployment Guide](#-deployment-guide)
  - [Deploying to Vercel](#deploying-to-vercel)
  - [Deploying to GitHub Pages](#deploying-to-github-pages)
- [Contact & Connect](#-contact--connect)

---

## 🧭 Overview

- **Developer**: Raiza A. Roces
- **Role**: Web and Mobile Application Developer
- **Degree**: Bachelor of Science in Information Technology
- **Institution**: Pamantasan ng Lungsod ng Pasig (PLP)
- **Primary Focus**: Responsive Frontend Systems, Mobile Applications (Android/Java), REST API Integrations, and Modern AI/Cloud Workflows

---

## ⚡ Architecture & Key Features

### 1. Modern Design System & Accessibility
- **Dark Mode Default**: Pre-hydrated theme system enforcing Dark Mode on initial load with zero flash of light mode.
- **Session-Preserved Theming**: Seamless switch between Dark and Light themes with persistent state for the active browsing session.
- **High-Contrast Color Tokens**: WCAG-compliant color contrast across all UI components, badges, overlays, and modal dialogues.
- **Fluid & Fully Responsive**: Tailored breakpoints guaranteeing flawless rendering across smartphones, tablets, laptops, and ultra-wide displays.

### 2. Verified Project Showcase
- **7 Authenticated Applications**: Curated web platforms and Android mobile applications built from real-world requirements.
- **Screenshot Lightbox Gallery**: Interactive modal gallery with keyboard navigation (`Esc`, `←`, `→`), image counters, captions, and zoom support.
- **Direct Repositories & Live Demos**: Verified links to production deployments and GitHub source code.

### 3. Comprehensive Credentials Gallery
- **36 Verified Credentials in 15 Clean Cards**: Chronologically organized from newest to oldest. Multi-part workshops and modular specializations are neatly grouped with interactive pagination (`< Previous | 1 of X | Next >`).
- **Modal Lightbox Inspection**: Fullscreen viewer supporting both high-resolution Image Previews and native PDF embeds.
- **Verified Status**: Authentic documents from Microsoft, Cisco Networking Academy, AWS Training, DataCamp, Alibaba Cloud, PhilDev, DICT-ITU DTC, and TESDA.

### 4. Resilient Dual-Layer Contact System
- **Real-Time Client Validation**: Rigorous checks on name, email format, subject line, and message length.
- **Vercel Serverless Function (`/api/contact`)**: Native serverless handler using **Resend** for responsive, custom-styled dark-mode HTML email notifications.
- **Automatic FormSubmit Fallback**: Backend-less AJAX fallback (`formsubmit.co`) ensuring 100% reliable message delivery even when deployed statically (e.g., GitHub Pages).
- **Direct Mailto Fallback**: Instant one-click native email client launch if third-party endpoints are blocked by client-side network rules.

---

## 📁 Project Directory Structure

```text
RAIZA-ROCES-PORTFOLIO/
├── api/
│   └── contact.js             # Vercel Serverless Function (Resend + Custom HTML Email)
├── css/
│   └── style.css              # Custom CSS design system, themes & animations
├── public/
│   └── assets/
│       ├── certificates/      # Authentic PDF documents & generated previews
│       ├── docs/              # Official Curriculum Vitae / Resume PDF
│       ├── images/            # Project screenshots & brand assets
│       └── projects/          # Grouped application screenshot folders
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky glassmorphic navbar with theme toggle
│   │   ├── Hero.jsx           # Hero banner, professional title & stats
│   │   ├── Projects.jsx       # Featured projects grid & category filters
│   │   ├── ProjectCard.jsx    # Individual project card with action buttons
│   │   ├── LightboxModal.jsx  # Screenshot gallery modal
│   │   ├── Skills.jsx         # Categorized skills matrix with search/filter
│   │   ├── Strengths.jsx      # Core Strengths & Work Ethics section
│   │   ├── Resume.jsx         # Credentials gallery, tabs & timelines
│   │   ├── CertificateCard.jsx# Grouped credential card with sub-navigation
│   │   ├── CertificateModal.jsx# Fullscreen certificate lightbox & PDF viewer
│   │   ├── Contact.jsx        # Dual-layer contact form with live validation
│   │   ├── Footer.jsx         # Footer with quick links & copyright
│   │   └── Icons.jsx          # Optimized SVG icons
│   ├── data/
│   │   ├── projectsData.js    # Project metadata, tags, and screenshot sets
│   │   ├── certificatesData.js# 36 credentials sorted newest to oldest
│   │   └── resumeData.js      # Educational background & work immersion
│   ├── App.jsx                # Global theme provider and modal orchestration
│   └── main.jsx               # React 18 DOM mount entrypoint
├── index.html                 # HTML5 document with pre-hydration theme script
├── package.json               # Node.js project manifest & scripts
├── vercel.json                # Vercel deployment routing configuration
└── vite.config.js             # Vite bundler configuration
```

---

## 💻 Featured Projects

| Project | Category | Tech Stack | Highlights |
| :--- | :--- | :--- | :--- |
| **Balik-Belongings** | Web App / AI | React.js, Python, OpenCV, NLP | Automated Lost & Found platform with AI-driven image matching and live deployment. |
| **Student Violation Management System** | Web App | React.js, Node.js, Express, MySQL | Disciplinary tracking with Role-Based Access Control (RBAC) and administrative analytics. |
| **Document Management System** | Web App | HTML5, CSS3, JavaScript, PHP | Enterprise document archiving, category classification, and secure retrieval. |
| **PLP Capstone Archiving & HTE** | Web App | Full-Stack Web Architecture | Academic thesis repository and Host Training Establishment directory for graduating students. |
| **Java Rice Ordering App** | Mobile App | Android Studio, Java | Point-of-Sale (POS) ordering system with cart calculation and intuitive mobile UI. |
| **Solar System Information App** | Mobile App | Android Studio, Java | Educational mobile reference app with planetary data models and responsive views. |
| **Age Converter App** | Mobile App | Android Studio, Java | Utility application calculating exact chronological age and multi-unit conversions. |

---

## 🛠️ Technical Skills & Competencies

- **Programming Languages**: Java, Python, PHP, JavaScript (ES6+), SQL, HTML5, CSS3
- **Web & Full-Stack**: React.js, Node.js, Express.js, RESTful APIs, RBAC, Responsive Web Design
- **Mobile Development**: Android Studio, Java for Android, Mobile UI/UX Design
- **Databases**: MySQL, Relational Database Modeling, Query Optimization
- **Tools & Platforms**: Git, GitHub, VS Code, Postman, Vite, Vercel, Canva, Figma
- **AI & Modern Methodologies**: Prompt Engineering, Generative AI (Gemini, Claude, ChatGPT), Cloud Fundamentals (Azure, AWS, Alibaba Cloud)

---

## 📜 Credentials & Certifications

Includes 36 verified credentials categorized into:
- **Cloud & DevOps**: Microsoft Learn Azure Fundamentals series (15 modules), Alibaba Cloud Masterclass.
- **AI & Machine Learning**: DataCamp Claude 101, AWS Generative AI & Prompt Engineering, Cisco Modern AI.
- **IT Infrastructure**: TOPCIT Level 3 Practical Competency, Cisco Networking Basics, Operating Systems, Computer Hardware.
- **Specializations**: PhilDev Vibe Coding, Cybersecurity, Project Management, TESDA Bookkeeping.

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation & Local Server

1. **Clone the repository**:
   ```bash
   git clone https://github.com/raizaroces/RAIZA-ROCES-PORTFOLIO.git
   cd RAIZA-ROCES-PORTFOLIO
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the port indicated in your console) to view the application.

4. **Generate an optimized production build**:
   ```bash
   npm run build
   ```

5. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment Guide

### Deploying to Vercel (Recommended)

1. Push your latest code to your GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New..."** → **"Project"**.
3. Import your **`RAIZA-ROCES-PORTFOLIO`** repository.
4. Keep the default settings (**Framework**: Vite, **Build Command**: `npm run build`, **Output Directory**: `dist`).
5. *(Optional)* Add environment variables in **Settings** → **Environment Variables**:
   - `RESEND_API_KEY`: Your Resend API key (if using Resend for custom HTML emails).
   - `CONTACT_EMAIL`: `raizaroces2800@gmail.com`
6. Click **Deploy**. Vercel will build and assign a production URL with automatic HTTPS and global CDN caching.

### Deploying to GitHub Pages

1. In `vite.config.js`, ensure the base path is configured appropriately:
   ```javascript
   export default defineConfig({
     base: './',
     plugins: [react()],
   });
   ```
2. Build the production bundle:
   ```bash
   npm run build
   ```
3. Deploy the contents of the `dist/` directory to your `gh-pages` branch using `gh-pages` package or a GitHub Actions workflow.

---

## 📬 Contact & Connect

- **Developer**: Raiza A. Roces
- **Email**: [raizaroces2800@gmail.com](mailto:raizaroces2800@gmail.com)
- **LinkedIn**: [linkedin.com/in/raizaroces](https://www.linkedin.com/in/raizaroces)
- **GitHub**: [github.com/raizaroces](https://github.com/raizaroces)
