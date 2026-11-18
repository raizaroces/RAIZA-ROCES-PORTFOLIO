/**
 * RAIZA A. ROCES - PORTFOLIO CORE JAVASCRIPT
 * Modern, High-Performance, Accessible Architecture
 */

// --- 1. VERIFIED PROJECTS DATA (MAIN SOURCE OF TRUTH) ---
const projectsData = [
  {
    id: "balik-belongings",
    title: "Balik-Belongings: Automated Lost and Found System",
    category: "web",
    year: "2026",
    role: "Frontend Developer & Documentation",
    description: "An AI-powered automated lost and found web platform integrating Machine Learning, Computer Vision, and NLP. Engineered interactive commuter reporting portals, intelligent lost item image-matching interfaces, commuter feedback modules, and administrative inventory workflows.",
    tech: ["Web Application", "Artificial Intelligence", "Machine Learning", "Computer Vision", "NLP", "HTML/CSS/JS"],
    mainImage: "assets/images/projects/balik-belongings/[MAIN] BALIK-BELONGINGS LANDING PAGE.png",
    externalLink: "https://balik-belongings.onrender.com",
    externalType: "live",
    gallery: [
      {
        title: "Admin & Staff Item Inventory Interface",
        src: "assets/images/projects/balik-belongings/Admin and Staff Item Inventory Interface.png"
      },
      {
        title: "Admin Dashboard & Statistical Overview",
        src: "assets/images/projects/balik-belongings/Admin Dashboard Interface.png"
      },
      {
        title: "Automated Tagging & Feature Extraction Details",
        src: "assets/images/projects/balik-belongings/Automated Tagging Generating Details.png"
      },
      {
        title: "Commuter Ticket Status Tracker",
        src: "assets/images/projects/balik-belongings/Check ticket status.png"
      },
      {
        title: "AI Intelligent Matching Interface",
        src: "assets/images/projects/balik-belongings/Intelligent Matching Interface.png"
      },
      {
        title: "Match Analysis & Confidence Scoring",
        src: "assets/images/projects/balik-belongings/Match Analysis Interface.png"
      },
      {
        title: "Automated PDF and CSV Export Generation",
        src: "assets/images/projects/balik-belongings/PDF OR CSV Export Generation.png"
      },
      {
        title: "Commuter Lost Item Reporting Portal",
        src: "assets/images/projects/balik-belongings/Report a lost item.png"
      }
    ]
  },
  {
    id: "student-violation",
    title: "Student Violation Management System",
    category: "web",
    year: "2025",
    role: "Frontend Developer / QA Tester / Documentation",
    description: "A centralized disciplinary tracking platform designed with Role-Based Access Control (RBAC). Developed frontend interfaces in React for student and administrative dashboards, assisted in Node.js and Express backend operations, and performed QA testing.",
    tech: ["React.js", "Node.js", "Express.js", "RBAC", "MySQL", "QA Testing"],
    mainImage: "assets/images/projects/student-violation/[MAIN] STUDENT DASHBOARD.jfif",
    externalLink: "https://github.com/jennyH25/svms-system",
    externalType: "github",
    gallery: [
      {
        title: "Administrator Dashboard & Discipline Metrics",
        src: "assets/images/projects/student-violation/ADMIN DASHBOARD.png"
      },
      {
        title: "System and User Role Settings",
        src: "assets/images/projects/student-violation/Admin settings.png"
      },
      {
        title: "Student Violation Record Management",
        src: "assets/images/projects/student-violation/Admin Student Violation.png"
      },
      {
        title: "Violation Categories and Penalties Catalog",
        src: "assets/images/projects/student-violation/Admin Violations.png"
      },
      {
        title: "Digital E-Signature Verification Workflow",
        src: "assets/images/projects/student-violation/E-signature Feature.png"
      },
      {
        title: "Violation Forecasting and Predictive Analytics",
        src: "assets/images/projects/student-violation/Forecasting and Prediction Analytics.png"
      },
      {
        title: "Secure Role-Based Authentication Gateway",
        src: "assets/images/projects/student-violation/LOGIN.png"
      },
      {
        title: "Comprehensive Student Offenses Master List",
        src: "assets/images/projects/student-violation/Student Offenses List.png"
      },
      {
        title: "Individual Student Violation History",
        src: "assets/images/projects/student-violation/Student Violations.png"
      }
    ]
  },
  {
    id: "document-management",
    title: "Document Management System",
    category: "web",
    year: "2025",
    role: "Frontend Developer / QA Tester / Documentation",
    description: "An enterprise document archiving and classification platform. Developed backend functionalities for secure document upload, classification, storage, and retrieval, alongside responsive frontend interfaces with custom workspaces.",
    tech: ["HTML", "CSS", "JavaScript", "Backend Development", "Document Classification", "QA Testing"],
    mainImage: "assets/images/projects/document-management/[MAIN]  Admin_Dashboard.png",
    externalLink: "https://github.com/raizaroces/Document-Management-System",
    externalType: "github",
    gallery: [
      {
        title: "Document Categorization System",
        src: "assets/images/projects/document-management/Categories.png"
      },
      {
        title: "Collaborative Workspace Creation",
        src: "assets/images/projects/document-management/Create_Workspace.png"
      },
      {
        title: "Expanded Folder Hierarchy and Taxonomy",
        src: "assets/images/projects/document-management/Expanded Categories.png"
      },
      {
        title: "Document Preview and Metadata Editing",
        src: "assets/images/projects/document-management/File Preview and Editing.png"
      },
      {
        title: "Secure File Sharing and Permission Delegation",
        src: "assets/images/projects/document-management/File Sharing.png"
      },
      {
        title: "Multi-File Upload and Cloud Storage Pipeline",
        src: "assets/images/projects/document-management/File Upload and Storage.png"
      },
      {
        title: "Centralized Document Library",
        src: "assets/images/projects/document-management/Library.png"
      },
      {
        title: "Secure User Authentication Interface",
        src: "assets/images/projects/document-management/login.png"
      },
      {
        title: "Active File Upload Queue",
        src: "assets/images/projects/document-management/Upload_Files.png"
      },
      {
        title: "Team Workspaces Management Hub",
        src: "assets/images/projects/document-management/Workspaces.png"
      }
    ]
  },
  {
    id: "capstone-hte",
    title: "Capstone / Thesis Archiving and Host Training Establishment (HTE) for PLP Graduating Students",
    category: "web",
    year: "2025",
    role: "Frontend Developer / QA Tester / Documentation",
    description: "An academic archiving and internship coordination portal engineered for graduating students at Pamantasan ng Lungsod ng Pasig. Collaborated in designing UI components, trainee deployment tracking, attendance monitoring, and documentation.",
    tech: ["HTML", "CSS", "JavaScript", "UI/UX Design", "System Documentation"],
    mainImage: "assets/images/projects/capstone-hte/[MAIN]  LANDING PAGE.png",
    externalLink: null, // Strictly no external link provided
    externalType: null,
    gallery: [
      {
        title: "Administrator Management Dashboard",
        src: "assets/images/projects/capstone-hte/ADMINISTRATOR DASHBOARD.png"
      },
      {
        title: "OJT Coordinator Monitoring Dashboard",
        src: "assets/images/projects/capstone-hte/COORDINATOR DASHBOARD.png"
      },
      {
        title: "Real-Time System Notifications & Announcements",
        src: "assets/images/projects/capstone-hte/NOTIFICATION.png"
      },
      {
        title: "Student Trainee Attendance Log",
        src: "assets/images/projects/capstone-hte/STUDENT ATTENDANCE.png"
      },
      {
        title: "Student Trainee Portal Dashboard",
        src: "assets/images/projects/capstone-hte/STUDENT DASHOARD.png"
      },
      {
        title: "Student Task Submission & Requirement Upload",
        src: "assets/images/projects/capstone-hte/SUBMIT TASK.png"
      },
      {
        title: "Host Training Establishment (HTE) Trainee Deployment Matrix",
        src: "assets/images/projects/capstone-hte/TRAINEE DEPLOYMENT.png"
      }
    ]
  },
  {
    id: "java-rice",
    title: "Java Rice Ordering App",
    category: "mobile",
    year: "2024",
    role: "Android App Developer",
    description: "Mobile food ordering and point-of-sale (POS) application created with Java in Android Studio. Features an interactive menu to browse meals and prices, dynamic shopping cart calculation, automated change computation, and an intuitive checkout flow.",
    tech: ["Android Studio", "Java", "Mobile Application Development", "Point-of-Sale (POS)", "Food Ordering"],
    mainImage: "assets/images/projects/java-rice/[MAIN] Landing.jpg",
    externalLink: "https://github.com/raizaroces/Java-Rice-Ordering-App",
    externalType: "github",
    gallery: [
      {
        title: "Shopping Cart & Automated Total Calculation",
        src: "assets/images/projects/java-rice/Cart total.jpg"
      },
      {
        title: "Interactive Food Menu & Price Directory",
        src: "assets/images/projects/java-rice/Menu.jpg"
      },
      {
        title: "Checkout Flow, Cash Input & Change Computation",
        src: "assets/images/projects/java-rice/Payment_.jpg"
      },
      {
        title: "Product Detail View & Quantity Customization",
        src: "assets/images/projects/java-rice/Product details.jpg"
      }
    ]
  },
  {
    id: "solar-system",
    title: "Solar System Information App",
    category: "mobile",
    year: "2024",
    role: "Android App Developer",
    description: "An educational mobile application built with Java in Android Studio. Features an interactive dropdown planetary menu, space-themed UI design, and comprehensive celestial facts and illustrations.",
    tech: ["Android Studio", "Java", "Mobile Application Development", "UI/UX Design"],
    mainImage: "assets/images/projects/solar-system/[MAIN] Landing.jpg",
    externalLink: "https://github.com/raizaroces/Solar-System-Information-App",
    externalType: "github",
    gallery: [] // Single image - no nonfunctional gallery icon
  },
  {
    id: "age-converter",
    title: "Age Converter App",
    category: "mobile",
    year: "2024",
    role: "Android App Developer",
    description: "A utility mobile application created in Android Studio using Java date and time calculation algorithms to determine exact age and chronological metrics based on date of birth.",
    tech: ["Android Studio", "Java", "Mobile Application Development", "Date and Time Calculation"],
    mainImage: "assets/images/projects/age-converter/[MAIN]  Landing.jpg",
    externalLink: "https://github.com/raizaroces/Age-Converter",
    externalType: "github",
    gallery: [] // Single image - no nonfunctional gallery icon
  }
];

// --- 2. GLOBAL STATE FOR LIGHTBOX GALLERY ---
let currentLightboxProject = null;
let currentLightboxIndex = 0;

// --- 3. DOM READY INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initNavigation();
  renderProjects("all");
  initProjectFilters();
  initLightbox();
  initResumeModal();
  initResumeTabs();
  initContactForm();
  initBackToTop();
  
  // Initialize Lucide icons if available
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// --- 4. THEME TOGGLE (DARK / LIGHT) ---
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const storedTheme = localStorage.getItem("portfolio-theme");
  
  if (storedTheme) {
    document.documentElement.setAttribute("data-theme", storedTheme);
    updateThemeIcon(storedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    document.documentElement.setAttribute("data-theme", "light");
    updateThemeIcon("light");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const nextTheme = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("portfolio-theme", nextTheme);
      updateThemeIcon(nextTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const iconContainer = document.getElementById("theme-icon-container");
  if (!iconContainer) return;
  
  if (theme === "light") {
    iconContainer.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    iconContainer.setAttribute("title", "Switch to Dark Mode");
  } else {
    iconContainer.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
    iconContainer.setAttribute("title", "Switch to Light Mode");
  }
}

// --- 5. NAVIGATION & SCROLL MANAGEMENT ---
function initNavigation() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const drawerBackdrop = document.getElementById("drawer-backdrop");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  const desktopLinks = document.querySelectorAll(".nav-link");

  // Sticky navbar shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    highlightActiveNavLink();
  });

  // Mobile menu toggle
  if (hamburger && mobileDrawer && drawerBackdrop) {
    const toggleMenu = () => {
      const isOpen = mobileDrawer.classList.contains("open");
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    };

    hamburger.addEventListener("click", toggleMenu);
    drawerBackdrop.addEventListener("click", closeMobileMenu);

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        closeMobileMenu();
      });
    });
  }

  function openMobileMenu() {
    mobileDrawer.classList.add("open");
    drawerBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove("open");
    drawerBackdrop.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Active section spy
  function highlightActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        desktopLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
        mobileLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }
}

// --- 6. RENDER PROJECTS (COMPLIANT WITH MAIN RULES) ---
function renderProjects(filter = "all") {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered = projectsData.filter(proj => {
    if (filter === "all") return true;
    return proj.category === filter;
  });

  container.innerHTML = "";

  filtered.forEach(proj => {
    const hasMultipleImages = proj.gallery && proj.gallery.length > 0;
    const card = document.createElement("div");
    card.className = "project-card";
    card.setAttribute("data-id", proj.id);

    // Build project HTML
    card.innerHTML = `
      <div class="project-thumbnail-wrapper">
        <img 
          src="${escapeHtml(proj.mainImage)}" 
          alt="${escapeHtml(proj.title)}" 
          class="project-thumbnail"
          loading="lazy"
          onerror="if(!this.dataset.retried){this.dataset.retried='true';this.src=encodeURI('${escapeHtml(proj.mainImage)}');}"
        />
        <div class="project-thumbnail-overlay"></div>
        <div class="project-badge-top">
          <span class="project-tag project-tag-year">${proj.year}</span>
          <span class="project-tag">${proj.category === "web" ? "Web Application" : "Mobile App"}</span>
        </div>
        ${hasMultipleImages ? `
          <div class="project-gallery-count" title="Additional screenshots available in gallery">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <span>+${proj.gallery.length} Images</span>
          </div>
        ` : ""}
      </div>

      <div class="project-body">
        <div class="project-role-text">${escapeHtml(proj.role)}</div>
        <h3 class="project-title">${escapeHtml(proj.title)}</h3>
        <p class="project-description">${escapeHtml(proj.description)}</p>

        <div class="project-tech-stack">
          ${proj.tech.map(t => `<span class="tech-chip">${escapeHtml(t)}</span>`).join("")}
        </div>

        <div class="project-footer-actions">
          <div class="project-action-left">
            ${renderExternalAction(proj)}
          </div>
          ${hasMultipleImages ? `
            <button 
              type="button"
              class="btn-project-gallery" 
              data-gallery-trigger="${proj.id}" 
              title="View full screenshot gallery for this project"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <span>View Gallery</span>
            </button>
          ` : ""}
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  // Attach gallery trigger listeners
  attachGalleryTriggers();
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Render external action button (Strict rule: No empty button if link is null)
function renderExternalAction(proj) {
  if (proj.externalType === "live") {
    return `
      <a 
        href="${proj.externalLink}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="btn-project-link"
        title="Open live website in new tab"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
        <span>Live Demo</span>
      </a>
    `;
  } else if (proj.externalType === "github") {
    return `
      <a 
        href="${proj.externalLink}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="btn-project-link"
        title="View source repository on GitHub"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        <span>GitHub Repo</span>
      </a>
    `;
  } else {
    // Project 4 Capstone: Strictly no empty external button
    return `
      <span class="project-no-link-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
        <span>Academic Capstone System</span>
      </span>
    `;
  }
}

// --- 7. PROJECT FILTER BUTTONS ---
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".project-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });
}

// --- 8. LIGHTBOX MODAL GALLERY (VIEW MORE DETAILS) ---
function initLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const closeBtn = document.getElementById("lightbox-close-btn");
  const prevBtn = document.getElementById("lightbox-prev-btn");
  const nextBtn = document.getElementById("lightbox-next-btn");

  if (!modal) return;

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", showPrevLightboxImage);
  nextBtn.addEventListener("click", showNextLightboxImage);

  // Close when clicking outside content box
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowLeft") {
      showPrevLightboxImage();
    } else if (e.key === "ArrowRight") {
      showNextLightboxImage();
    }
  });
}

function attachGalleryTriggers() {
  const triggerBtns = document.querySelectorAll("[data-gallery-trigger]");
  triggerBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const projId = btn.getAttribute("data-gallery-trigger");
      const project = projectsData.find(p => p.id === projId);
      if (project && project.gallery && project.gallery.length > 0) {
        openLightbox(project, 0);
      }
    });
  });
}

function openLightbox(project, index = 0) {
  const modal = document.getElementById("lightbox-modal");
  if (!modal) return;

  currentLightboxProject = project;
  currentLightboxIndex = index;

  updateLightboxContent();
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function showPrevLightboxImage() {
  if (!currentLightboxProject || !currentLightboxProject.gallery) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxProject.gallery.length) % currentLightboxProject.gallery.length;
  updateLightboxContent();
}

function showNextLightboxImage() {
  if (!currentLightboxProject || !currentLightboxProject.gallery) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxProject.gallery.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  if (!currentLightboxProject) return;

  const titleEl = document.getElementById("lightbox-project-name");
  const captionEl = document.getElementById("lightbox-image-caption");
  const counterEl = document.getElementById("lightbox-counter");
  const imgEl = document.getElementById("lightbox-display-image");
  const thumbContainer = document.getElementById("lightbox-thumbs");

  const currentItem = currentLightboxProject.gallery[currentLightboxIndex];
  const total = currentLightboxProject.gallery.length;

  if (titleEl) titleEl.textContent = currentLightboxProject.title;
  if (captionEl) captionEl.textContent = currentItem.title;
  if (counterEl) counterEl.textContent = `${currentLightboxIndex + 1} of ${total}`;

  if (imgEl) {
    imgEl.style.opacity = "0.3";
    imgEl.dataset.retried = "";
    imgEl.onerror = () => {
      if (!imgEl.dataset.retried) {
        imgEl.dataset.retried = "true";
        imgEl.src = encodeURI(currentItem.src);
      }
    };
    imgEl.onload = () => {
      imgEl.style.opacity = "1";
    };
    imgEl.src = currentItem.src;
  }

  // Populate thumbnail rail
  if (thumbContainer) {
    thumbContainer.innerHTML = "";
    currentLightboxProject.gallery.forEach((item, idx) => {
      const thumb = document.createElement("div");
      thumb.className = `lightbox-thumb-item ${idx === currentLightboxIndex ? "active" : ""}`;
      thumb.setAttribute("title", item.title);
      thumb.innerHTML = `
        <img 
          src="${escapeHtml(item.src)}" 
          alt="${escapeHtml(item.title)}" 
          loading="lazy" 
          onerror="if(!this.dataset.retried){this.dataset.retried='true';this.src=encodeURI('${escapeHtml(item.src)}');}"
        />
      `;
      thumb.addEventListener("click", () => {
        currentLightboxIndex = idx;
        updateLightboxContent();
      });
      thumbContainer.appendChild(thumb);
    });

    // Scroll active thumbnail into view
    const activeThumb = thumbContainer.children[currentLightboxIndex];
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }
}

// --- 9. RESUME MODAL & PDF INTEGRATION ---
function initResumeModal() {
  const resumeModal = document.getElementById("resume-modal");
  const openBtns = document.querySelectorAll(".open-resume-modal-btn");
  const closeBtn = document.getElementById("resume-modal-close-btn");

  if (!resumeModal) return;

  openBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openResumeModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeResumeModal);
  }

  resumeModal.addEventListener("click", (e) => {
    if (e.target === resumeModal) {
      closeResumeModal();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && resumeModal.classList.contains("active")) {
      closeResumeModal();
    }
  });
}

function openResumeModal() {
  const resumeModal = document.getElementById("resume-modal");
  const iframe = document.getElementById("resume-modal-iframe");
  if (!resumeModal) return;

  if (iframe && !iframe.getAttribute("src")) {
    iframe.setAttribute("src", encodeURI("assets/docs/Roces, Raiza A. - Resume.pdf"));
  }

  resumeModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeResumeModal() {
  const resumeModal = document.getElementById("resume-modal");
  if (!resumeModal) return;
  resumeModal.classList.remove("active");
  document.body.style.overflow = "";
}

// --- 10. RESUME CREDENTIALS TAB NAVIGATION ---
function initResumeTabs() {
  const tabBtns = document.querySelectorAll(".resume-tab-btn");
  const tabPanels = document.querySelectorAll(".resume-tab-content");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab-target");

      tabBtns.forEach(b => b.classList.remove("active"));
      tabPanels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });
}

// --- 11. CONTACT FORM & REAL EMAIL INTEGRATION (FORMSUBMIT AJAX) ---
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  const submitBtn = document.getElementById("contact-submit-btn");
  const alertBox = document.getElementById("form-status-alert");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const subject = form.elements["subject"].value.trim();
    const message = form.elements["message"].value.trim();

    // 1. Client-Side Validation
    if (name.length < 2) {
      showFormAlert("error", "Please provide your full name (at least 2 characters).");
      form.elements["name"].focus();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormAlert("error", "Please provide a valid email address so I can respond to you.");
      form.elements["email"].focus();
      return;
    }

    if (subject.length < 3) {
      showFormAlert("error", "Please specify a subject for your message.");
      form.elements["subject"].focus();
      return;
    }

    if (message.length < 10) {
      showFormAlert("error", "Your message is too brief. Please enter at least 10 characters.");
      form.elements["message"].focus();
      return;
    }

    // 2. Submit via FormSubmit AJAX to raizaroces2800@gmail.com
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spinner-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10"></path>
      </svg>
      <span>Sending Message...</span>
    `;

    try {
      const response = await fetch("https://formsubmit.co/ajax/raizaroces2800@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: `[Portfolio Contact] ${subject} - From ${name}`,
          message: message,
          _template: "table"
        })
      });

      const result = await response.json();

      if (response.ok && (result.success === "true" || result.success === true)) {
        showFormAlert("success", "Thank you! Your message has been sent directly to my email (raizaroces2800@gmail.com). I will get back to you promptly.");
        form.reset();
        showToast("Message sent successfully!", "toast-success");
      } else {
        throw new Error(result.message || "Failed to deliver message.");
      }
    } catch (err) {
      console.warn("FormSubmit fetch error:", err);
      // Fallback: Offer direct mailto trigger
      const mailtoUrl = `mailto:raizaroces2800@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Raiza,\n\n${message}\n\nFrom: ${name} (${email})`)}`;
      showFormAlert("error", `Could not automatically dispatch email. <a href="${mailtoUrl}" style="text-decoration: underline; font-weight: 700; color: inherit;">Click here to send directly using your email client</a>.`);
      showToast("Network error. Please use direct email.", "toast-error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });

  function showFormAlert(type, message) {
    if (!alertBox) return;
    alertBox.className = `form-status-alert ${type}`;
    alertBox.innerHTML = message;
    alertBox.style.display = "flex";
  }
}

// --- 12. TOAST NOTIFICATIONS ---
function showToast(message, typeClass = "toast-success") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${typeClass}`;
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 20);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// --- 13. BACK TO TOP BUTTON ---
function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// --- 14. UTILITY HELPERS ---
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
