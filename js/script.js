"use strict";

////////////////////////////////////////
// Mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

//////////////////////////////////////////
// Smmoth scrolling animation
const links = document.querySelectorAll("a:link");
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.remove("nav-open");
    }
  });
});

////////////////////////////////////////////
// Sticky navigation
const heroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  entries => {
    const [entry] = entries;
    if(!entry.isIntersecting) {
        document.body.classList.add("sticky");
    }

    if(entry.isIntersecting) {
        document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px"
  }
);

observer.observe(heroEl);
