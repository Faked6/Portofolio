/**
 * Portfolio Script — Claymore Lie Bermann
 * Simple, clean, no bloat.
 */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initScrollSpy();
  initScrollReveal();
  initSkillBars();
});

/* ==========================================================================
   Mobile Navigation
   ========================================================================== */
function initMobileNav() {
  const toggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");
  if (!toggle || !navLinks) return;

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });

  navLinks.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ==========================================================================
   Scroll Spy — highlight active nav link
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function update() {
    let currentId = "";
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ==========================================================================
   Scroll Reveal — fade in elements on scroll
   ========================================================================== */
function initScrollReveal() {
  const revealTargets = document.querySelectorAll(
    ".info-card, .exp-card, .skill-group, .project-card, .cert-card, .social-card, .about-left, .about-right"
  );

  revealTargets.forEach(el => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );

  revealTargets.forEach(el => observer.observe(el));
}

/* ==========================================================================
   Skill Bars — animate width on scroll
   ========================================================================== */
function initSkillBars() {
  const bars = document.querySelectorAll(".skill-bar-fill");

  // Store the target widths, then reset to 0
  bars.forEach(bar => {
    bar.dataset.width = bar.style.width;
    bar.style.width = "0";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          bar.style.width = bar.dataset.width;
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach(bar => observer.observe(bar));
}
