(() => {
  const STORAGE_KEYS = {
    theme: "ciu-theme",
    contrast: "ciu-contrast"
  };

  const navItems = [
    { id: "home", label: "Home", href: "index.html" },
    { id: "about", label: "About", href: "about.html" },
    {
      id: "academics",
      label: "Academics",
      href: "academics.html",
      submenu: [
        { label: "Civil Engineering", href: "dept-civil.html" },
        { label: "Mechanical Engineering", href: "dept-mechanical.html" },
        { label: "Electrical Engineering", href: "dept-electrical.html" },
        { label: "Electronics Engineering", href: "dept-electronics.html" },
        { label: "Computer Science", href: "dept-cse.html" },
        { label: "Chemical Engineering", href: "dept-chemical.html" },
        { label: "Aerospace Engineering", href: "dept-aerospace.html" },
        { label: "Machine Learning (AI & ML)", href: "dept-ml.html" }
      ]
    },
    {
      id: "admissions",
      label: "Admissions",
      href: "admissions.html",
      submenu: [
        { label: "Undergraduate", href: "admissions.html?type=ug" },
        { label: "Postgraduate", href: "admissions.html?type=pg" },
        { label: "PhD Programs", href: "admissions.html?type=phd" },
        { label: "International", href: "admissions.html?type=international" },
        { label: "Application Portal", href: "admissions.html?type=apply" }
      ]
    },
    {
      id: "research",
      label: "Research",
      href: "research.html",
      submenu: [
        { label: "Research Centers", href: "research.html?section=centers" },
        { label: "Publications", href: "research.html?section=publications" },
        { label: "Projects", href: "research.html?section=projects" },
        { label: "Collaborations", href: "research.html?section=collaborations" },
        { label: "DST-FIST", href: "research.html?section=dstfist" }
      ]
    },
    {
      id: "innovation",
      label: "Innovation",
      href: "innovation.html",
      submenu: [
        { label: "Innovation Labs", href: "innovation.html?section=labs" },
        { label: "Entrepreneurship", href: "innovation.html?section=entrepreneur" },
        { label: "Incubation Center", href: "innovation.html?section=incubation" },
        { label: "Patents & IP", href: "innovation.html?section=patents" }
      ]
    },
    { id: "facilities", label: "Facilities", href: "facilities.html" },
    { id: "placements", label: "Placements", href: "placements.html" },
    { id: "activities", label: "Activities", href: "activities.html" },
    { id: "contact", label: "Contact", href: "contact.html" }
  ];

  const page = document.body.dataset.page || "home";

  function buildNav() {
    const root = document.querySelector("[data-nav]");
    if (!root) return;

    const links = navItems
      .map((item) => {
        const activeClass = item.id === page ? "is-active" : "";
        let html = `<div class="nav-item ${item.submenu ? 'has-submenu' : ''}">
          <a class="nav-link ${activeClass}" href="${item.href}">${item.label}</a>`;
        
        if (item.submenu) {
          const submenuHtml = item.submenu
            .map((sub) => `<a class="submenu-link" href="${sub.href}">${sub.label}</a>`)
            .join("");
          html += `<div class="submenu">${submenuHtml}</div>`;
        }
        
        html += `</div>`;
        return html;
      })
      .join("");

    const mobileLinks = navItems
      .map((item) => {
        let html = `<div class="mobile-nav-item">
          <a href="${item.href}">${item.label}</a>`;
        
        if (item.submenu) {
          const submenuHtml = item.submenu
            .map((sub) => `<a class="mobile-submenu-link" href="${sub.href}">${sub.label}</a>`)
            .join("");
          html += `<div class="mobile-submenu">${submenuHtml}</div>`;
        }
        
        html += `</div>`;
        return html;
      })
      .join("");

    root.innerHTML = `
      <header class="site-nav" id="siteNav">
        <div class="nav-inner">
          <a class="nav-logo" href="index.html">CIU</a>
          <nav class="nav-links" aria-label="Primary">${links}</nav>
          <div class="nav-actions">
            <a class="apply-btn" href="admissions.html">Apply Now</a>
            <div class="settings-wrap">
              <button class="settings-toggle" data-settings-toggle type="button" aria-label="Open display settings" aria-expanded="false" aria-controls="settingsPanel"><svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 0 1 0 2.8 2 2 0 0 1-2.8 0l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 0 1-4 0v-.2a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a2 2 0 0 1-2.8 0 2 2 0 0 1 0-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 0 1 0-4h.2a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1a2 2 0 0 1 0-2.8 2 2 0 0 1 2.8 0l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V4a2 2 0 0 1 4 0v.2a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a2 2 0 0 1 2.8 0 2 2 0 0 1 0 2.8l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6H20a2 2 0 0 1 0 4h-.2a1 1 0 0 0-.9.6z"/></svg></button>
              <div class="settings-panel" id="settingsPanel" data-settings-panel hidden>
                <p class="settings-title">Display Settings</p>
                <div class="settings-group">
                  <span class="settings-label">Theme</span>
                  <div class="settings-options" role="group" aria-label="Theme mode">
                    <button type="button" class="settings-option" data-theme-option="light">Light</button>
                    <button type="button" class="settings-option" data-theme-option="dark">Dark</button>
                  </div>
                </div>
                <div class="settings-group">
                  <span class="settings-label">Contrast</span>
                  <div class="settings-options" role="group" aria-label="Contrast mode">
                    <button type="button" class="settings-option" data-contrast-option="normal">Normal</button>
                    <button type="button" class="settings-option" data-contrast-option="high">High</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false" type="button">
            <span></span>
          </button>
        </div>
      </header>
      <aside class="mobile-menu" id="mobileMenu" aria-hidden="true">
        <nav aria-label="Mobile">${mobileLinks}<a class="apply-btn" href="admissions.html">Apply Now</a></nav>
      </aside>
    `;

    const desktopLinks = root.querySelector(".nav-links");
    const desktopItems = desktopLinks ? Array.from(desktopLinks.querySelectorAll(".nav-item")) : [];

    function setupDesktopNavStepScroll() {
      if (!desktopLinks || desktopItems.length === 0) return;

      const hasOverflow = () => desktopLinks.scrollWidth > desktopLinks.clientWidth + 2;

      const updateOverflowState = () => {
        const overflowing = hasOverflow();
        desktopLinks.classList.toggle("is-overflowing", overflowing);
        if (!overflowing) {
          desktopLinks.scrollLeft = 0;
        }
      };

      const getCurrentIndex = () => {
        const currentLeft = desktopLinks.scrollLeft + 2;
        let index = 0;
        for (let i = 0; i < desktopItems.length; i += 1) {
          if (desktopItems[i].offsetLeft <= currentLeft) {
            index = i;
          } else {
            break;
          }
        }
        return index;
      };

      const scrollToItem = (index) => {
        const boundedIndex = Math.max(0, Math.min(index, desktopItems.length - 1));
        const target = desktopItems[boundedIndex];
        if (!target) return;

        desktopLinks.scrollTo({
          left: Math.max(0, target.offsetLeft - 12),
          behavior: "smooth"
        });
      };

      desktopLinks.addEventListener(
        "wheel",
        (event) => {
          if (!hasOverflow()) return;
          if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

          event.preventDefault();
          const direction = event.deltaY > 0 ? 1 : -1;
          scrollToItem(getCurrentIndex() + direction);
        },
        { passive: false }
      );

      const activeLink = desktopLinks.querySelector(".nav-link.is-active");
      if (activeLink) {
        const activeItem = activeLink.closest(".nav-item");
        const activeIndex = desktopItems.indexOf(activeItem);
        if (activeIndex >= 0) {
          scrollToItem(activeIndex);
        }
      }

      window.addEventListener("resize", updateOverflowState);
      updateOverflowState();
    }

    setupDesktopNavStepScroll();

    // Add dropdown hover listeners
    document.querySelectorAll('.nav-item.has-submenu').forEach((item) => {
      const submenu = item.querySelector('.submenu');
      if (!submenu) return;

      item.addEventListener('mouseenter', () => {
        submenu.classList.add('active');
      });

      item.addEventListener('mouseleave', () => {
        submenu.classList.remove('active');
      });
    });

    // Mobile submenu toggle
    document.querySelectorAll('.mobile-nav-item').forEach((item) => {
      const link = item.querySelector('a');
      const submenu = item.querySelector('.mobile-submenu');
      
      if (!submenu) return;

      link.addEventListener('click', (e) => {
        if (submenu) {
          e.preventDefault();
          submenu.classList.toggle('active');
        }
      });
    });

    const nav = document.getElementById("siteNav");
    const toggle = root.querySelector(".nav-toggle");
    const mobileMenu = document.getElementById("mobileMenu");

    function syncNavState() {
      if (window.scrollY > 80) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    }

    function closeMenu() {
      mobileMenu.classList.remove("open");
      mobileMenu.setAttribute("aria-hidden", "true");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    toggle.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      mobileMenu.setAttribute("aria-hidden", String(!open));
      document.body.style.overflow = open ? "hidden" : "";
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("scroll", syncNavState, { passive: true });
    syncNavState();
  }

  function setupSettingsPanel() {
    const toggle = document.querySelector("[data-settings-toggle]");
    const panel = document.querySelector("[data-settings-panel]");
    if (!toggle || !panel) return;

    const themeButtons = Array.from(panel.querySelectorAll("[data-theme-option]"));
    const contrastButtons = Array.from(panel.querySelectorAll("[data-contrast-option]"));

    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || "dark";
    const savedContrast = localStorage.getItem(STORAGE_KEYS.contrast) || "normal";

    const setPressedState = (buttons, activeValue, attr) => {
      buttons.forEach((button) => {
        const isActive = button.getAttribute(attr) === activeValue;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
    };

    const applyPreferences = (theme, contrast) => {
      document.body.setAttribute("data-theme", theme);
      document.body.setAttribute("data-contrast", contrast);
      setPressedState(themeButtons, theme, "data-theme-option");
      setPressedState(contrastButtons, contrast, "data-contrast-option");
    };

    const openPanel = () => {
      panel.hidden = false;
      requestAnimationFrame(() => panel.classList.add("open"));
      toggle.setAttribute("aria-expanded", "true");
    };

    const closePanel = () => {
      panel.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      window.setTimeout(() => {
        if (!panel.classList.contains("open")) {
          panel.hidden = true;
        }
      }, 180);
    };

    themeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const nextTheme = button.getAttribute("data-theme-option");
        const currentContrast = document.body.getAttribute("data-contrast") || "normal";
        localStorage.setItem(STORAGE_KEYS.theme, nextTheme);
        applyPreferences(nextTheme, currentContrast);
      });
    });

    contrastButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const nextContrast = button.getAttribute("data-contrast-option");
        const currentTheme = document.body.getAttribute("data-theme") || "dark";
        localStorage.setItem(STORAGE_KEYS.contrast, nextContrast);
        applyPreferences(currentTheme, nextContrast);
      });
    });

    toggle.addEventListener("click", () => {
      const isOpen = panel.classList.contains("open");
      if (isOpen) {
        closePanel();
      } else {
        openPanel();
      }
    });

    document.addEventListener("click", (event) => {
      if (!panel.classList.contains("open")) return;
      if (panel.contains(event.target) || toggle.contains(event.target)) return;
      closePanel();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closePanel();
      }
    });

    applyPreferences(savedTheme, savedContrast);
  }

  function buildFooter() {
    const root = document.querySelector("[data-footer]");
    if (!root) return;

    root.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <section>
              <h3 class="footer-logo">Campus Insights University</h3>
              <p class="footer-about">A globally focused institution shaping innovators, researchers, and leaders through education, impact, and excellence.</p>
              <div class="social-row">
                <a class="social-btn" href="#" aria-label="Instagram">IG</a>
                <a class="social-btn" href="#" aria-label="LinkedIn">IN</a>
                <a class="social-btn" href="#" aria-label="YouTube">YT</a>
                <a class="social-btn" href="#" aria-label="X">X</a>
              </div>
            </section>
            <section>
              <h4 class="footer-title">Quick Links</h4>
              <ul class="footer-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="academics.html">Academics</a></li>
                <li><a href="admissions.html">Admissions</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </section>
            <section>
              <h4 class="footer-title">Programs</h4>
              <ul class="footer-links">
                <li><a href="departments.html">Engineering</a></li>
                <li><a href="departments.html">MBA</a></li>
                <li><a href="departments.html">Law</a></li>
                <li><a href="departments.html">Medicine</a></li>
                <li><a href="departments.html">Design</a></li>
              </ul>
            </section>
            <section class="footer-contact">
              <h4 class="footer-title">Contact</h4>
              <p>Innovation Avenue, Knowledge City, India</p>
              <p>+91 44 4000 9000</p>
              <p>admissions@campusinsights.edu</p>
            </section>
          </div>
          <div class="footer-bottom">
            <span>Copyright 2025 Campus Insights University. All rights reserved.</span>
            <span>Designed with excellence</span>
          </div>
        </div>
      </footer>
    `;
  }

  function setupLoader() {
    const loader = document.querySelector(".loader");
    if (!loader) return;
    window.setTimeout(() => {
      loader.classList.add("is-hidden");
      document.body.classList.add("ready");
    }, 2600);
  }

  function setupHeroVideo() {
    const video = document.querySelector(".hero-video");
    if (!video || window.matchMedia("(max-width: 767px)").matches) return;
    const revealVideo = () => video.classList.add("ready");
    video.addEventListener("canplaythrough", revealVideo, { once: true });
    if (video.readyState >= 3) revealVideo();
  }

  function setupHeroParallax() {
    const hero = document.querySelector(".hero");
    const overlay = document.querySelector(".hero-overlay");
    const video = document.querySelector(".hero-video");
    const content = document.querySelector(".hero-content");
    const headingEls = document.querySelectorAll(".hero-eyebrow, .hero-title, .hero-tagline, .hero-sub");
    if (!hero || !video || !overlay || !content || !headingEls.length || window.matchMedia("(max-width: 767px)").matches) return;

    let ticking = false;
    let lastScrollY = 0;

    const update = () => {
      const scrollY = window.scrollY;
      const viewport = Math.max(window.innerHeight, 1);

      const textProgress = Math.min(scrollY / (viewport * 0.48), 1);
      const headingOpacity = Math.max(0, 1 - textProgress);
      const headingY = textProgress * 20;

      headingEls.forEach((el) => {
        el.style.opacity = headingOpacity.toFixed(3);
        el.style.transform = `translateY(${headingY.toFixed(1)}px)`;
      });

      const contentOpacity = Math.max(0, 1 - scrollY / (viewport * 0.72));
      content.style.opacity = contentOpacity.toFixed(3);

      const dimStart = viewport * 0.12;
      const dimProgress = Math.min(Math.max((scrollY - dimStart) / (viewport * 0.62), 0), 1);
      const overlayDim = (dimProgress * 0.34).toFixed(3);
      overlay.style.setProperty("--hero-scroll-dim", overlayDim);

      const brightness = (1 - dimProgress * 0.15).toFixed(3);
      video.style.filter = `brightness(${brightness})`;
      video.style.transform = `scale(${(1.08 + dimProgress * 0.03).toFixed(3)})`;

      if (scrollY > lastScrollY + 2) {
        hero.classList.add("is-scrolling-down");
      } else if (scrollY < lastScrollY - 2) {
        hero.classList.remove("is-scrolling-down");
      }

      lastScrollY = scrollY;
      ticking = false;
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    requestUpdate();
  }

  function setupReveals() {
    const revealEls = document.querySelectorAll(".reveal");
    if (!revealEls.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));
  }

  function setupStagger() {
    document.querySelectorAll("[data-stagger-group]").forEach((group) => {
      group.querySelectorAll("[data-stagger]").forEach((item, index) => {
        item.style.setProperty("--delay", `${index * 80}ms`);
      });
    });
  }

  function animateCounter(el) {
    const target = Number(el.dataset.count || "0");
    const suffix = el.dataset.suffix || "";
    const duration = 1500;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);
      el.textContent = `${current.toLocaleString()}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }

  function setupCounters() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;

    const seen = new WeakSet();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || seen.has(entry.target)) return;
          animateCounter(entry.target);
          seen.add(entry.target);
        });
      },
      { threshold: 0.3 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }

  function setupTestimonials() {
    const slides = Array.from(document.querySelectorAll(".testimonial"));
    const dots = Array.from(document.querySelectorAll(".dot"));
    if (!slides.length || !dots.length) return;

    let index = 0;

    const activate = (nextIndex) => {
      index = nextIndex;
      slides.forEach((slide, idx) => slide.classList.toggle("active", idx === index));
      dots.forEach((dot, idx) => dot.classList.toggle("active", idx === index));
    };

    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => activate(idx));
    });

    setInterval(() => {
      activate((index + 1) % slides.length);
    }, 4000);
  }

  function setupImageCarousel() {
    const carousel = document.querySelector(".image-carousel");
    if (!carousel) return;

    const slides = Array.from(document.querySelectorAll(".carousel-slide"));
    const dots = Array.from(document.querySelectorAll(".carousel-dot"));
    if (!slides.length || !dots.length) return;

    let currentIndex = 0;
    const rotationInterval = 3000; // 3 seconds

    const showSlide = (index) => {
      currentIndex = index % slides.length;
      slides.forEach((slide, idx) => {
        slide.classList.toggle("active", idx === currentIndex);
      });
      dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === currentIndex);
      });
    };

    // Auto-rotate carousel
    const autoRotate = setInterval(() => {
      showSlide(currentIndex + 1);
    }, rotationInterval);

    // Click handlers for dots
    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        showSlide(idx);
        clearInterval(autoRotate);
        // Restart auto-rotation after user interaction
        setTimeout(() => {
          const newAutoRotate = setInterval(() => {
            showSlide((idx + 1) % slides.length);
          }, rotationInterval);
        }, rotationInterval);
      });
    });

    // Show first slide initially
    showSlide(0);
  }

  function init() {
    buildNav();
    setupSettingsPanel();
    buildFooter();
    setupLoader();
    setupHeroVideo();
    setupHeroParallax();
    setupStagger();
    setupReveals();
    setupCounters();
    setupTestimonials();
    setupImageCarousel();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
