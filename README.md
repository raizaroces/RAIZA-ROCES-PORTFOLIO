# Raiza A. Roces - Professional Personal Portfolio Website

![Raiza A. Roces Portfolio Preview](assets/images/profile/MY_PIC.png)

A modern, elegant, responsive, and accessible personal portfolio website built for **Raiza A. Roces**, 4th-year Bachelor of Science in Information Technology student and President's Lister at Pamantasan ng Lungsod ng Pasig.

---

## 🌟 Highlights & Key Features

- **Personal Profile & Hero Section**:
  - Showcases official profile portrait (`MY_PIC.png`) with ambient glow effects and floating specialization badges.
  - Compelling professional summary directly aligned with verified qualifications and academic achievements.
  - Prominent **"VIEW MY RESUME"** button and quick navigation to all featured projects.

- **Authentic Resume & Credentials Integration**:
  - Interactive modal PDF viewer embedding the original `Roces, Raiza A. - Resume.pdf`.
  - Direct **"Download Resume (PDF)"** option for recruiters and hiring managers.
  - Tabbed credentials showcase featuring all **16 verified professional certifications** (PhilDev, Google Cloud, Cisco, AWS, DataCamp, Alibaba Cloud, TESDA).
  - Detailed Education timeline (PLP President's Lister, Taytay SHS Honors) and Work Immersion experience at Taytay Municipal Hall.

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
  - Clickable contact links (`mailto:`, `tel:`), plus verified GitHub and LinkedIn profiles.

- **Design System & Responsive Architecture**:
  - Modern dark mode default with instant Dark / Light mode toggle.
  - Fluid typography powered by `Plus Jakarta Sans` and `Outfit`.
  - Zero-dependency architecture — works immediately on double-click or any static hosting service (GitHub Pages, Netlify, Vercel).
  - Fully responsive across mobile, tablet, laptop, and ultra-wide screens.

---

## 📁 Project Directory Structure

```text
d:\RAIZA ROCES PORTFOLIO\
├── index.html                 # Semantic HTML5 single-page application
├── README.md                  # Comprehensive documentation
├── css\
│   └── style.css              # Custom responsive stylesheet & design system
├── js\
│   └── main.js                # Core logic (projects data, filters, lightbox, resume modal, contact AJAX)
└── assets\
    ├── docs\
    │   └── Roces, Raiza A. - Resume.pdf       # Authentic uploaded resume
    └── images\
        ├── profile\
        │   └── MY_PIC.png                     # Official profile picture
        └── projects\
            ├── age-converter\
            │   └── [MAIN]  Landing.jpg
            ├── balik-belongings\
            │   ├── [MAIN] BALIK-BELONGINGS LANDING PAGE.png
            │   ├── Admin and Staff Item Inventory Interface.png
            │   ├── Admin Dashboard Interface.png
            │   ├── Automated Tagging Generating Details.png
            │   ├── Check ticket status.png
            │   ├── Intelligent Matching Interface.png
            │   ├── Match Analysis Interface.png
            │   ├── PDF OR CSV Export Generation.png
            │   └── Report a lost item.png
            ├── capstone-hte\
            │   ├── [MAIN]  LANDING PAGE.png
            │   ├── ADMINISTRATOR DASHBOARD.png
            │   ├── COORDINATOR DASHBOARD.png
            │   ├── NOTIFICATION.png
            │   ├── STUDENT ATTENDANCE.png
            │   ├── STUDENT DASHOARD.png
            │   ├── SUBMIT TASK.png
            │   └── TRAINEE DEPLOYMENT.png
            ├── document-management\
            │   ├── [MAIN]  Admin_Dashboard.png
            │   ├── Categories.png
            │   ├── Create_Workspace.png
            │   ├── Expanded Categories.png
            │   ├── File Preview and Editing.png
            │   ├── File Sharing.png
            │   ├── File Upload and Storage.png
            │   ├── Library.png
            │   ├── login.png
            │   ├── Upload_Files.png
            │   └── Workspaces.png
            ├── java-rice\
            │   ├── [MAIN] Landing.jpg
            │   ├── Cart total.jpg
            │   ├── Menu.jpg
            │   ├── Payment_.jpg
            │   └── Product details.jpg
            ├── solar-system\
            │   └── [MAIN] Landing.jpg
            └── student-violation\
                ├── [MAIN] STUDENT DASHBOARD.jfif
                ├── ADMIN DASHBOARD.png
                ├── Admin settings.png
                ├── Admin Student Violation.png
                ├── Admin Violations.png
                ├── E-signature Feature.png
                ├── Forecasting and Prediction Analytics.png
                ├── LOGIN.png
                ├── Student Offenses List.png
                └── Student Violations.png
```

---

## 🚀 How to Run Locally

You can run this portfolio in seconds:

### Option 1: Directly in Browser
Double-click `index.html` or open it with your browser of choice (Chrome, Edge, Firefox, Safari).

### Option 2: Using VS Code Live Server
1. Open the `d:\RAIZA ROCES PORTFOLIO` folder in Visual Studio Code.
2. Click **Go Live** on the bottom right corner (or right-click `index.html` → *Open with Live Server*).

### Option 3: Using Node / npx serve
```bash
npx serve .
```

---

## 🌐 Deploying to GitHub Pages

1. Initialize a git repository in the portfolio folder (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit of professional portfolio"
   ```
2. Create a repository on GitHub (e.g. `raizaroces.github.io` or `portfolio`).
3. Push to GitHub:
   ```bash
   git remote add origin https://github.com/raizaroces/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. In your GitHub repository settings, go to **Pages**, select the `main` branch, and click **Save**. Your site will be live across the world!

---

## 📬 Contact & Inquiries

- **Name**: Raiza A. Roces
- **Email**: [raizaroces2800@gmail.com](mailto:raizaroces2800@gmail.com)
- **Phone**: [+63 976 302 0844](tel:09763020844)
- **Location**: Santa Ana, Taytay, Rizal, Philippines
- **LinkedIn**: [linkedin.com/in/raizaroces](https://www.linkedin.com/in/raizaroces)
- **GitHub**: [github.com/raizaroces](https://github.com/raizaroces)
