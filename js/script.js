// Main JavaScript for Portfolio

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  initializePortfolio();
  setupEventListeners();
  createBinaryBackground();
  startTypewriterEffect();
  setupScrollAnimations();
});

// Populate Articles
function populateArticles() {
  const articlesGrid = document.getElementById("articlesGrid");
  articlesGrid.innerHTML = "";

  const latestArticle = findLatestArticle(portfolioData.articles);

  portfolioData.articles.forEach((article) => {
    const isLatest = article === latestArticle;
    const articleCard = document.createElement("div");
    articleCard.className = `article-card scroll-reveal ${isLatest ? 'latest-article' : ''}`;
    articleCard.innerHTML = `
            <div class="article-header">
                <div class="article-meta">
                    <span class="read-time">${article.readTime}</span>
                    <span class="publish-date">${formatDate(
                      article.publishedDate
                    )}</span>
                </div>
                ${isLatest ? '<div class="latest-badge"><i class="fas fa-star"></i> LATEST</div>' : ''}
            </div>
            <div class="article-content">
                <h3 class="article-title">${article.title}</h3>
                <p class="article-synopsis">${article.synopsis}</p>
            </div>
            <div class="article-footer">
                <div class="article-tags">
                    ${article.tags
                      .map((tag) => `<span class="article-tag">#${tag}</span>`)
                      .join("")}
                </div>
                <div class="article-actions">
                    <a href="${
                      article.url
                    }" target="_blank" class="read-article-btn">
                        <i class="fas fa-external-link-alt"></i> READ_ARTICLE
                    </a>
                </div>
            </div>
        `;
    articlesGrid.appendChild(articleCard);
  });
}

// Find the latest article (handles ties with random selection)
function findLatestArticle(articles) {
  if (!articles || articles.length === 0) return null;
  
  // Find the most recent date
  const latestDate = articles.reduce((latest, article) => {
    const articleDate = new Date(article.publishedDate);
    return articleDate > latest ? articleDate : latest;
  }, new Date(articles[0].publishedDate));
  
  // Get all articles with the latest date
  const latestArticles = articles.filter(article => 
    new Date(article.publishedDate).getTime() === latestDate.getTime()
  );
  
  // If multiple articles share the same date, pick one randomly
  return latestArticles[Math.floor(Math.random() * latestArticles.length)];
}

// Format date helper
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Initialize Portfolio with Data
function initializePortfolio() {
  populatePersonalInfo();
  populateSkills();
  populateProjects();
  populateArticles();
  populateContactInfo();
  populateSocialLinks();
}

// Populate Personal Information
function populatePersonalInfo() {
  const { personal } = portfolioData;

  // Update hero section
  const heroName = document.getElementById("heroName");
  heroName.textContent = personal.name;
  heroName.setAttribute("data-text", personal.name);

  // Update about section
  document.getElementById("profileName").textContent = personal.name;
  document.getElementById("profileRole").textContent = personal.title;
  document.getElementById("bioText").textContent = personal.about;
  document.getElementById("footerName").textContent = personal.name;

  // Update logo
  const initials = personal.name
    .split(" ")
    .map((name) => name.charAt(0))
    .join("");
  document.getElementById("logoText").innerHTML = `&lt;${initials}/&gt;`;

  // Update terminal title
  const firstName = personal.name.split(" ")[0].toLowerCase();
  document.getElementById(
    "terminalTitle"
  ).textContent = `${firstName}@developer:~$ cat profile.md`;
}

// Populate Skills
function populateSkills() {
  const skillsGrid = document.getElementById("skillsGrid");
  skillsGrid.innerHTML = "";

  portfolioData.skills.forEach((skill) => {
    const skillItem = document.createElement("div");
    skillItem.className = "skill-item";
    skillItem.innerHTML = `
            <div class="skill-header">
                <div class="skill-name">${skill.name}</div>
                
            </div>
            <div class="skill-experience">${skill.experience}</div>
        `;
    skillsGrid.appendChild(skillItem);
  });
}

// Populate Projects
function populateProjects() {
  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.innerHTML = "";

  portfolioData.projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card scroll-reveal";
    projectCard.innerHTML = `
            <div class="project-header">
                <div class="project-icon">${project.icon}</div>
                <div class="project-title">${project.title.toUpperCase()}</div>
            </div>
            <div class="project-content">
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies
                      .map((tech) => `<span class="tech-tag">${tech}</span>`)
                      .join("")}
                </div>
                <div class="project-links">
                    <a href="${
                      project.githubUrl
                    }" target="_blank" class="project-link">
                        <i class="fab fa-github"></i> VIEW_CODE
                    </a>
                    <a href="${project.liveUrl || '#'}" 
                       target="_blank" 
                       class="project-link ${!project.liveUrl ? 'disabled' : ''}"
                       ${!project.liveUrl ? 'onclick="return false;"' : ''}>
                        <i class="fas fa-external-link-alt"></i> LIVE_DEMO
                    </a>
                </div>
            </div>
        `;
    projectsGrid.appendChild(projectCard);
  });
}

// Populate Contact Information
function populateContactInfo() {
  const contactInfo = document.getElementById("contactInfo");
  const { contact } = portfolioData;

  contactInfo.innerHTML = `
        <div class="contact-item">
            <span class="contact-label">EMAIL:</span>
            <a href="mailto:${contact.email}" class="contact-value">${contact.email}</a>
        </div>
        <div class="contact-item">
            <span class="contact-label">TWITTER:</span>
            <a href="https://twitter.com/${contact.twitter}" target="_blank" class="contact-value">@${contact.twitter}</a>
        </div>
        <div class="contact-item">
            <span class="contact-label">LINKEDIN:</span>
            <a href="https://linkedin.com/in/${contact.linkedin}" target="_blank" class="contact-value">${contact.linkedin}</a>
        </div>
        <div class="contact-item">
            <span class="contact-label">GITHUB:</span>
            <a href="https://github.com/${contact.github}" target="_blank" class="contact-value">github.com/${contact.github}</a>
        </div>
    `;
}

// Populate Social Links
function populateSocialLinks() {
  const socialLinks = document.getElementById("socialLinks");
  socialLinks.innerHTML = "";

  portfolioData.social.forEach((social) => {
    const link = document.createElement("a");
    link.href = social.url;
    link.className = "social-link";
    link.title = social.name;
    link.innerHTML = `<i class="${social.icon}"></i>`;
    if (social.url.startsWith("http")) {
      link.target = "_blank";
    }
    socialLinks.appendChild(link);
  });
}

// Setup Event Listeners
function setupEventListeners() {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        navLinks.classList.remove("active");
      }
    });
  });

  // Header background on scroll + Progress indicator
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const scrollProgress = document.getElementById("scrollProgress");
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (window.scrollY > 100) {
      header.style.background = "rgba(10, 10, 10, 0.95)";
    } else {
      header.style.background = "rgba(10, 10, 10, 0.9)";
    }
    
    scrollProgress.style.width = scrollPercent + "%";
  });

  // Contact form submission
  document
    .getElementById("contactForm")
    .addEventListener("submit", handleFormSubmission);

  // Skill item hover effects
  setupSkillHoverEffects();

  // Matrix cursor effect
  setupMatrixCursor();
}

// Handle Form Submission
function handleFormSubmission(e) {
  e.preventDefault();
  const btn = e.target.querySelector(".submit-btn");
  const originalText = btn.textContent;

  btn.textContent = "PROCESSING...";
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = "TRANSMISSION_COMPLETE";
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      e.target.reset();
    }, 2000);
  }, 2000);
}

// Setup Skill Hover Effects
function setupSkillHoverEffects() {
  document.addEventListener("click", (e) => {
    if (e.target.closest(".skill-item")) {
      const skillItems = document.querySelectorAll(".skill-item");
      skillItems.forEach((item) => {
        const skillName = item.querySelector(".skill-name").textContent;
        if (Math.random() > 0.7) {
          item.style.background = "rgba(0, 255, 136, 0.15)";
          item.style.borderLeft = "5px solid var(--primary-color)";
          setTimeout(() => {
            item.style.background = "rgba(0, 255, 136, 0.05)";
            item.style.borderLeft = "3px solid var(--primary-color)";
          }, 300);
        }
      });
    }
  });
}

// Matrix Cursor Effect
function setupMatrixCursor() {
  const cursor = document.createElement("div");
  cursor.className = "cursor-glow";
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX - 10 + "px";
    cursor.style.top = e.clientY - 10 + "px";
  });

  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
  });

  document.addEventListener("mouseenter", () => {
    cursor.style.opacity = "0.7";
  });
}

// 3D Binary Background Generator
function createBinaryBackground() {
  const binaryBg = document.getElementById("binaryBg");
  const chars = ["0", "1"];

  function createBinaryChar() {
    const char = document.createElement("div");
    char.className = "binary-char";
    char.textContent = chars[Math.floor(Math.random() * chars.length)];

    const x = Math.random() * window.innerWidth;
    const animationDuration = 10 + Math.random() * 20;
    const opacity = 0.1 + Math.random() * 0.3;
    const size = 12 + Math.random() * 8;

    char.style.left = x + "px";
    char.style.fontSize = size + "px";
    char.style.animationDuration = animationDuration + "s";
    char.style.opacity = opacity;

    binaryBg.appendChild(char);

    setTimeout(() => {
      if (char.parentNode) {
        char.parentNode.removeChild(char);
      }
    }, animationDuration * 1000);
  }

  // Create initial batch
  for (let i = 0; i < 50; i++) {
    setTimeout(createBinaryChar, i * 100);
  }

  // Continue creating characters
  setInterval(createBinaryChar, 300);
}

// Typewriter Effect
function startTypewriterEffect() {
  const typewriterText = document.getElementById("typewriter");
  const texts = portfolioData.typewriterTitles;
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typewriter() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      typewriterText.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterText.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = 100;

    if (isDeleting) {
      typeSpeed /= 2;
    }

    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 3000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typeSpeed = 500;
    }

    setTimeout(typewriter, typeSpeed);
  }

  // Start typewriter after delay
  setTimeout(typewriter, 2000);
}

// Scroll Animations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");

        // Animate skill levels when skills section comes into view
        if (entry.target.classList.contains("skills-terminal")) {
          animateSkillLevels();
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll(".scroll-reveal").forEach((el) => {
    observer.observe(el);
  });
}

// Animate Skill Levels
function animateSkillLevels() {
  const skillItems = document.querySelectorAll(".skill-item");
  skillItems.forEach((item, index) => {
    setTimeout(() => {
      const levelFill = item.querySelector(".level-fill");
      if (levelFill) {
        levelFill.style.animation = "fillLevel 2s ease-out forwards";
      }
    }, index * 100);
  });
}

// Random Glitch Effects
function addRandomGlitchEffects() {
  const projectTitles = document.querySelectorAll(".project-title");
  projectTitles.forEach((title) => {
    if (Math.random() > 0.98) {
      title.style.textShadow =
        "2px 0 var(--accent-color), -2px 0 var(--primary-color)";
      setTimeout(() => {
        title.style.textShadow = "none";
      }, 100);
    }
  });
}

// Start glitch effects
setInterval(addRandomGlitchEffects, 2000);

// Terminal Boot Sequence
window.addEventListener("load", () => {
  const bootMessages = [
    "INITIALIZING NEURAL NETWORKS...",
    "LOADING QUANTUM ALGORITHMS...",
    "ESTABLISHING SECURE CONNECTIONS...",
    "SYSTEM STATUS: READY",
    "WELCOME TO THE MATRIX!!!",
  ];

  console.log(
    "%c" + bootMessages.join("\n"),
    "color: #00ff88; font-family: monospace; font-size: 12px;"
  );
});

// Handle window resize for binary background
window.addEventListener("resize", () => {
  // Recreate binary background on resize
  const binaryBg = document.getElementById("binaryBg");
  binaryBg.innerHTML = "";
  setTimeout(createBinaryBackground, 100);
});

// Error handling for missing profile image
document.addEventListener("DOMContentLoaded", () => {
  const profileImg = document.getElementById("profileImg");
  profileImg.addEventListener("error", () => {
    // Create placeholder if image fails to load
    const container = profileImg.parentElement;
    container.innerHTML = `
            <div style="width: 100%; height: 100%; background: var(--bg-secondary); display: flex; align-items: center; justify-content: center; font-size: 4rem; color: var(--primary-color);">
                👨‍💻
            </div>
            <div class="image-overlay">
                <div class="scan-line"></div>
            </div>
        `;
  });
});
