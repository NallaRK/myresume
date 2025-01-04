// Dark mode toggle
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;
const moonIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  moonIcon.classList.toggle("fa-moon");
  moonIcon.classList.toggle("fa-sun");

  // Add ripple effect
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  themeToggle.appendChild(ripple);
  setTimeout(() => ripple.remove(), 1000);
});

// Skills filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const skillItems = document.querySelectorAll(".skill-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    // Filter skills
    skillItems.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "block";
        // Add fade-in animation
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, 50);
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Section animations on scroll
const sections = document.querySelectorAll("section");
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.5s ease forwards";
      sectionObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

// Micro-interactions
document.querySelectorAll("a, button").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    element.style.transform = "scale(1.05)";
    element.style.transition = "transform 0.2s ease";
  });

  element.addEventListener("mouseleave", () => {
    element.style.transform = "scale(1)";
  });
});

// Add hover effect to profile picture
const profilePic = document.querySelector(".profile-pic");
if (profilePic) {
  profilePic.addEventListener("mouseenter", () => {
    profilePic.style.transform = "scale(1.1) rotate(5deg)";
  });

  profilePic.addEventListener("mouseleave", () => {
    profilePic.style.transform = "scale(1) rotate(0deg)";
  });
}

// Add ripple effect to buttons
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement("div");
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.classList.add("ripple");

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 1000);
  });
});

// Add CSS for ripple effect
const style = document.createElement("style");
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .filter-btn {
        position: relative;
        overflow: hidden;
    }
`;

document.head.appendChild(style);

// Add smooth scroll behavior to section links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
