// Main JavaScript for Portfolio

// Boot Sequence
function runBootSequence() {
  const bootScreen = document.getElementById("bootScreen");
  if (!bootScreen) return;

  try {
    if (sessionStorage.getItem("bootComplete")) {
      bootScreen.remove();
      return;
    }
  } catch (e) {
    // sessionStorage unavailable, show boot anyway
  }

  document.body.classList.add("boot-active");
  const messagesContainer = document.getElementById("bootMessages");

  const messages = [
    { text: '<span class="ok-tag">[OK]</span> INITIALIZING SYSTEM...', delay: 0 },
    { text: '<span class="ok-tag">[OK]</span> LOADING NEURAL NETWORKS...', delay: 400 },
    { text: '<span class="ok-tag">[OK]</span> ESTABLISHING SECURE CONNECTIONS...', delay: 400 },
    { text: '<span class="ok-tag">[OK]</span> COMPILING PORTFOLIO MODULES...', delay: 400 },
    { text: '<span class="ok-tag">[OK]</span> SYSTEM STATUS: READY', delay: 400 },
    { text: '&gt; ACCESS GRANTED', delay: 600, isAccess: true },
    { text: '&gt; WELCOME, VISITOR.', delay: 400, isAccess: true },
  ];

  let cumulativeDelay = 0;
  messages.forEach((msg) => {
    cumulativeDelay += msg.delay;
    setTimeout(() => {
      const line = document.createElement("div");
      line.className = "boot-line" + (msg.isAccess ? " access-line" : "");
      line.innerHTML = msg.text;
      messagesContainer.appendChild(line);
    }, cumulativeDelay);
  });

  // Fade out after all messages
  setTimeout(() => {
    bootScreen.classList.add("fade-out");
    document.body.classList.remove("boot-active");
    setTimeout(() => {
      bootScreen.remove();
    }, 800);
    try {
      sessionStorage.setItem("bootComplete", "true");
    } catch (e) {}
  }, cumulativeDelay + 800);
}

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  runBootSequence();
  initializePortfolio();
  setupEventListeners();
  initMatrixRain();
  startTypewriterEffect();
  setupScrollAnimations();
  setupActiveNavIndicator();
  setupCommandTerminal();
});

// Populate Articles
function populateArticles() {
  const articlesGrid = document.getElementById("articlesGrid");
  articlesGrid.innerHTML = "";

  const latestArticle = findLatestArticle(portfolioData.articles);

  portfolioData.articles.forEach((article) => {
    const isLatest = article === latestArticle;
    const articleCard = document.createElement("div");
    articleCard.className = `article-card stagger-item ${isLatest ? 'latest-article' : ''}`;
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
                    <a href="${article.url
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
  // Primary Stack
  const primaryStack = document.getElementById("primaryStack");
  primaryStack.innerHTML = "";

  portfolioData.primaryStack.forEach((skill) => {
    const card = document.createElement("div");
    card.className = "primary-card stagger-item";
    card.innerHTML = `
            <div class="primary-card-header">
                <span class="primary-card-name">${skill.name}</span>
                <span class="primary-card-exp">${skill.experience}</span>
            </div>
            <div class="primary-card-context">${skill.context}</div>
        `;
    primaryStack.appendChild(card);
  });

  // Toolkit
  const toolkitGrid = document.getElementById("toolkitGrid");
  toolkitGrid.innerHTML = "";

  portfolioData.toolkit.forEach((skill) => {
    const item = document.createElement("div");
    item.className = "toolkit-item stagger-item";
    item.innerHTML = `
            <span class="toolkit-name">${skill.name}</span>
            <span class="toolkit-exp">${skill.experience}</span>
        `;
    toolkitGrid.appendChild(item);
  });
}

// Populate Projects
function populateProjects() {
  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.innerHTML = "";

  portfolioData.projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card stagger-item";
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
                    <a href="${project.githubUrl
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
    if (e.target.closest(".primary-card") || e.target.closest(".toolkit-item")) {
      const items = document.querySelectorAll(".primary-card, .toolkit-item");
      items.forEach((item) => {
        if (Math.random() > 0.7) {
          item.style.background = "rgba(0, 255, 136, 0.15)";
          item.style.borderLeft = "5px solid var(--primary-color)";
          setTimeout(() => {
            item.style.background = "";
            item.style.borderLeft = "";
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

// Matrix Rain Background
function initMatrixRain() {
  const canvas = document.getElementById("matrixCanvas");
  const ctx = canvas.getContext("2d");
  const fontSize = 14;
  let columns, drops;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = new Array(columns).fill(1);
  }

  resize();

  // Katakana + digits character set
  const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";

  function draw() {
    ctx.fillStyle = "rgba(10, 10, 10, 0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = fontSize + "px JetBrains Mono, monospace";

    for (let i = 0; i < columns; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      // Head character
      ctx.fillStyle = "rgba(0, 255, 136, 0.3)";
      ctx.fillText(char, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  // Respect prefers-reduced-motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    draw();
    return;
  }

  // Throttle to ~30fps
  let lastTime = 0;
  function animate(time) {
    if (time - lastTime > 33) {
      draw();
      lastTime = time;
    }
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  // Debounced resize
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resize, 250);
  });
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

        // Stagger reveal for grid children
        const staggerItems = entry.target.querySelectorAll(".stagger-item");
        staggerItems.forEach((item, index) => {
          item.style.transitionDelay = `${index * 100}ms`;
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              item.classList.add("active");
            });
          });
        });
      }
    });
  }, observerOptions);

  document.querySelectorAll(".scroll-reveal").forEach((el) => {
    observer.observe(el);
  });
}

// Animate Skill Levels
function animateSkillLevels() {
  const items = document.querySelectorAll(".primary-card, .toolkit-item");
  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, index * 80 + 200);
  });
}

// Interactive Command Terminal
function setupCommandTerminal() {
  const toggle = document.getElementById("terminalToggle");
  const terminal = document.getElementById("commandTerminal");
  const output = document.getElementById("terminalOutput");
  const input = document.getElementById("terminalInput");
  const closeBtn = document.getElementById("terminalClose");

  if (!toggle || !terminal) return;

  const history = [];
  let historyIndex = -1;

  function openTerminal() {
    terminal.classList.add("open");
    input.focus();
  }

  function closeTerminal() {
    terminal.classList.remove("open");
  }

  toggle.addEventListener("click", () => {
    if (terminal.classList.contains("open")) {
      closeTerminal();
    } else {
      openTerminal();
    }
  });

  closeBtn.addEventListener("click", closeTerminal);

  function appendOutput(html) {
    const line = document.createElement("div");
    line.className = "output-line";
    line.innerHTML = html;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  }

  function processCommand(cmd) {
    appendOutput(`<span class="command-echo">$ ${cmd}</span>`);

    const parts = cmd.trim().toLowerCase().split(/\s+/);
    const command = parts[0];
    const args = parts.slice(1).join(" ");

    switch (command) {
      case "help":
        appendOutput(
          `<span class="help-cmd">help</span> — show this message<br>` +
          `<span class="help-cmd">about</span> — navigate to about<br>` +
          `<span class="help-cmd">skills</span> — navigate to skills<br>` +
          `<span class="help-cmd">projects</span> — navigate to projects<br>` +
          `<span class="help-cmd">articles</span> — navigate to articles<br>` +
          `<span class="help-cmd">contact</span> — navigate to contact<br>` +
          `<span class="help-cmd">whoami</span> — who are you?<br>` +
          `<span class="help-cmd">ls</span> — list sections<br>` +
          `<span class="help-cmd">date</span> — current date<br>` +
          `<span class="help-cmd">echo</span> — echo text<br>` +
          `<span class="help-cmd">clear</span> — clear terminal`
        );
        break;
      case "about":
      case "skills":
      case "projects":
      case "articles":
      case "contact":
        const section = document.getElementById(command);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
          appendOutput(`Navigating to ${command}...`);
        }
        break;
      case "home":
        const home = document.getElementById("home");
        if (home) {
          home.scrollIntoView({ behavior: "smooth", block: "start" });
          appendOutput("Navigating to home...");
        }
        break;
      case "whoami":
        appendOutput(
          "visitor@portfolio — Curious human exploring the matrix.<br>" +
          "Access level: <span class='command-echo'>GUEST</span>"
        );
        break;
      case "ls":
        appendOutput("home  about  skills  projects  articles  contact");
        break;
      case "date":
        appendOutput(new Date().toString());
        break;
      case "echo":
        appendOutput(cmd.trim().substring(5) || "");
        break;
      case "clear":
        output.innerHTML = "";
        return;
      default:
        appendOutput(
          `<span class="error-text">${command}: command not found. Type 'help' for available commands.</span>`
        );
    }
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const cmd = input.value.trim();
      if (cmd) {
        history.push(cmd);
        historyIndex = history.length;
        processCommand(cmd);
      }
      input.value = "";
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        input.value = history[historyIndex];
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        historyIndex++;
        input.value = history[historyIndex];
      } else {
        historyIndex = history.length;
        input.value = "";
      }
    } else if (e.key === "Escape") {
      closeTerminal();
    }
  });

  // Keyboard shortcut: backtick to toggle (when not in input/textarea)
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "`" &&
      e.target.tagName !== "INPUT" &&
      e.target.tagName !== "TEXTAREA"
    ) {
      e.preventDefault();
      if (terminal.classList.contains("open")) {
        closeTerminal();
      } else {
        openTerminal();
      }
    }
  });
}

// Active Nav Indicator
function setupActiveNavIndicator() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const activeLink = document.querySelector(
            `.nav-links a[href="#${entry.target.id}"]`
          );
          if (activeLink) activeLink.classList.add("active");
        }
      });
    },
    { threshold: 0, rootMargin: "-20% 0px -70% 0px" }
  );

  sections.forEach((section) => navObserver.observe(section));
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
