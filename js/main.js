// Projects slide-in (horizontal)
const projectCards = document.querySelectorAll(".project-card");
const projectObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

projectCards.forEach((card) => projectObserver.observe(card));

// Skills progress bars animation
const skillBars = document.querySelectorAll(".skill-bar span");
const skillObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.getAttribute("style-width");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

skillBars.forEach((span) => {
  span.setAttribute("style-width", span.style.width);
  span.style.width = "0";
  skillObserver.observe(span);
});

// Sections fade-in
const sections = document.querySelectorAll(".section");
const sectionObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((sec) => sectionObserver.observe(sec));

// Certifications fade-in
const certs = document.querySelectorAll(".certifications li");
const certObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

certs.forEach((cert) => certObserver.observe(cert));

const form = document.querySelector(".contact-form");
const statusMsg = document.getElementById("form-status");

if (form && typeof emailjs !== "undefined") {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_v8h5m2r", "template_msjziih", this).then(
      () => {
        if (statusMsg) {
          statusMsg.style.color = "green";
          statusMsg.textContent = "Message sent successfully!";
        }
        form.reset();
      },
      (error) => {
        if (statusMsg) {
          statusMsg.style.color = "red";
          statusMsg.textContent =
            "Oops! Something went wrong. Please try again.";
        }
        console.error(error);
      }
    );
  });
}

// Mobile menu toggle
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
// Close menu on link click (for better UX)
document.querySelectorAll("#nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
