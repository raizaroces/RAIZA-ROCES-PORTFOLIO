# Raiza A. Roces - Professional Personal Portfolio Website

![Raiza A. Roces Portfolio Preview](assets/images/profile/MY_PIC.png)

A modern, elegant, responsive, and accessible personal portfolio website built with **React.js** and **Vite** for **Raiza A. Roces**, Bachelor of Science in Information Technology student at Pamantasan ng Lungsod ng Pasig.

---

## 🌟 Highlights & Key Features

- **Personal Profile & Hero Section**:
  - Showcases official profile portrait (`MY_PIC.png`) with ambient glow effects and clean, modern presentation.
  - Professional title: **Web and Mobile Application Developer**.
  - Degree label: **Bachelor of Science in Information Technology**.
  - Prominent **"VIEW MY RESUME"** button and quick navigation to all featured projects.

- **Authentic Resume & Credentials Integration**:
  - Interactive modal PDF viewer embedding the original `Roces, Raiza A. - Resume.pdf`.
  - Direct **"Download Resume (PDF)"** option for recruiters and hiring managers.
  - Tabbed credentials showcase featuring all **16 verified professional certifications** (PhilDev, Google Cloud, Cisco, AWS Training, DataCamp, Alibaba Cloud, TESDA).
  - Detailed Education timeline (Pamantasan ng Lungsod ng Pasig, Taytay Senior High School, Arellano University) and Work Immersion experience at Taytay Municipal Hall.

- **Verified Technical Skills Directory**:
  - Categorized into:
    1. **Programming Languages**: Java, Python, PHP, JavaScript (ES6+), SQL, HTML5, CSS3.
    2. **Web & Frontend Development**: React.js, Node.js, Express.js, RBAC, Responsive UI/UX, QA Testing.
    3. **Mobile Application Development**: Android Studio, Java (Android), POS Logic, Food Ordering UI.
    4. **Database Management**: MySQL, Relational Database Modeling, Document Classification.
    5. **Development Tools & Platforms**: Git, GitHub, VS Code, Android Studio, Canva, Figma (basic), MS Excel (basic).
    6. **AI & Cloud Competencies**: Prompt Engineering, Generative AI (Gemini, Claude, ChatGPT), Google Cloud Fundamentals.
  - Includes interactive filter tags for fast recruitment screening.

- **Projects Showcase (All 7 Verified Projects)**:
  - Every project strictly uses its authenticated `[MAIN]` screenshot as the primary thumbnail.
  - **Balik-Belongings: Automated Lost and Found System** (Web Application, AI, Computer Vision, NLP) — with Live Demo link (`https://balik-belongings.onrender.com`) and 8-screenshot gallery modal.
  - **Student Violation Management System** (React.js, Node.js, Express.js, RBAC, MySQL) — with GitHub link and 9-screenshot gallery modal.
  - **Document Management System** (HTML/CSS/JS, Backend, File Archiving) — with GitHub link and 10-screenshot gallery modal.
  - **Capstone / Thesis Archiving and Host Training Establishment (HTE) for PLP Graduating Students** — dedicated academic capstone presentation with 7-screenshot gallery modal and strictly NO placeholder external link.
  - **Java Rice Ordering App** (Android Studio, Java, POS) — with GitHub link and 4-screenshot gallery modal.
  - **Solar System Information App** (Android Studio, Java, Educational UI) — with GitHub link and single `[MAIN]` image display.
  - **Age Converter App** (Android Studio, Java, Date Calculation) — with GitHub link and single `[MAIN]` image display.

- **Interactive Screenshot Lightbox Gallery**:
  - Responsive lightbox modal for projects with multiple screenshots.
  - Includes next/prev arrows, image counter (e.g. `1 of 8`), thumbnail rail, image captions, and keyboard shortcuts (`Escape`, `ArrowLeft`, `ArrowRight`).

- **Functional Contact Form with Real Email Delivery**:
  - Directly connected to Raiza's email: `raizaroces2800@gmail.com` via secure FormSubmit AJAX integration.
  - Full client-side input validation (Name, Email format, Subject, Message).
  - Real-time success and error notifications with direct `mailto:` fallback.
  - Clickable contact links (`mailto:`), plus verified GitHub and LinkedIn profiles (no phone number or home address displayed).

- **Design System & Responsive Architecture**:
  - **Dark Mode by default** with a smooth Dark / Light mode toggle.
  - Fluid typography powered by `Plus Jakarta Sans` and `Outfit`.
  - Built with **React 18 + Vite** for fast performance, smooth state transitions, and component reusability.
  - Production build in `dist/` ready to be hosted anywhere.

---

## 📁 Project Directory Structure

```text
d:\RAIZA ROCES PORTFOLIO\
├── index.html                 # Vite HTML entrypoint
├── package.json               # Dependencies and scripts (React 18, Vite, Lucide)
├── vite.config.js             # Vite configuration with relative base path
├── src\
│   ├── main.jsx               # React DOM entrypoint
│   ├── App.jsx                # Main application component & global state
│   ├── components\
│   │   ├── Navbar.jsx         # Sticky glassmorphic navbar with theme toggle
│   │   ├── Hero.jsx           # Hero banner with profile picture & CTAs
│   │   ├── About.jsx          # Professional bio & educational background
│   │   ├── Skills.jsx         # Categorized verified skills with filter chips
│   │   ├── Projects.jsx       # 7 verified projects grid
│   │   ├── ProjectCard.jsx    # Card component with [MAIN] thumbnail & actions
│   │   ├── LightboxModal.jsx  # Interactive screenshot gallery lightbox
│   │   ├── Resume.jsx         # Resume credentials & tabs
│   │   ├── ResumeModal.jsx    # Fullscreen embedded PDF resume viewer
│   │   ├── Contact.jsx        # Functional AJAX contact form (FormSubmit)
│   │   ├── Footer.jsx         # Clean footer
│   │   └── Icons.jsx          # Vector social icons (GitHub, LinkedIn)
│   └── data\
│       ├── projectsData.js    # Verified projects data & screenshot paths
│       └── resumeData.js      # 16 certifications & education timeline
├── css\
│   └── style.css              # Custom styling & dark/light theme variables
├── public\
│   └── assets\                # Static public assets (images, screenshots, resume PDF)
└── dist\                      # Optimized production build (deployable static files)
```

---

## 🚀 How to Run Locally

### Option 1: Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Production Build & Preview
```bash
npm run build
npm run preview
```

### Option 3: Direct Static File Preview
The `dist/` folder contains the compiled static HTML, CSS, JS, and assets. You can serve it with any static server:
```bash
npx serve dist
```

---

## 🌐 Deploying to GitHub Pages

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete React portfolio with custom preferences"
   git remote add origin https://github.com/raizaroces/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. In GitHub repository settings, navigate to **Pages** and set the source to deploy from the `dist` folder or use GitHub Actions for automated Vite deployments.

---

## 📬 Contact & Inquiries

- **Name**: Raiza A. Roces
- **Email**: [raizaroces2800@gmail.com](mailto:raizaroces2800@gmail.com)
- **LinkedIn**: [linkedin.com/in/raizaroces](https://www.linkedin.com/in/raizaroces)
- **GitHub**: [github.com/raizaroces](https://github.com/raizaroces)
