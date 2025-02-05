document.addEventListener("DOMContentLoaded", (event) => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const skipLink = document.querySelector(".skip-link");
  const section = document.querySelector(".elementor-section");

  // Function to handle smooth scrolling for anchor links
  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(link.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Function to handle skip link behavior
  skipLink.addEventListener("click", function (e) {
    e.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  });

  // Function to toggle section visibility
  const toggleSectionVisibility = () => {
    section.classList.toggle("hidden");
  };

  // Example of adding an event listener to a button to toggle section visibility
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Toggle Section Visibility";
  document.body.appendChild(toggleButton);

  toggleButton.addEventListener("click", toggleSectionVisibility);
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const applyButton = document.querySelector(".btn");
  applyButton.addEventListener("click", function () {
    alert("Apply button clicked!");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Animate on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight - 100) {
        element.classList.add("animate");
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Initial check on page load
});
