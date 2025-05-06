// Mobile Menu Toggle
function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu.classList.contains("w3-show")) {
    mobileMenu.classList.remove("w3-show");
  } else {
    mobileMenu.classList.add("w3-show");
  }
}

// open/close accordion
function processAccordion(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Sticky Header with Color Change on Scroll
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const backToTopBtn = document.getElementById("back-to-top");

  window.onscroll = function () {
    if (window.pageYOffset > 50) {
      header.classList.add("w3-white");
      header.classList.add("w3-card");
      header.style.padding = "8px 16px";

      // Show back to top button
      backToTopBtn.classList.add("visible");
    } else {
      header.classList.remove("w3-white");
      header.classList.remove("w3-card");
      header.style.padding = "16px";

      // Hide back to top button
      backToTopBtn.classList.remove("visible");
    }
  };

  // Tour Form Submission
  const tourForm = document.getElementById("tour-form");
  if (tourForm) {
    tourForm.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("tour-modal").style.display = "block";
      tourForm.reset();
    });
  }

  // Contact Form Submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("message-modal").style.display = "block";
      contactForm.reset();
    });
  }

  // Job Application Form Submission
  const jobApplicationForm = document.getElementById("job-application-form");
  if (jobApplicationForm) {
    jobApplicationForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for your application. We will review your information and contact you soon.");
      document.getElementById("application-modal").style.display = "none";
      jobApplicationForm.reset();
    });
  }

  // Registration Form Submission
  const registrationForm = document.getElementById("registration-form");
  if (registrationForm) {
    registrationForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for registering. We will contact you to complete the enrollment process.");
      document.getElementById("registration-modal").style.display = "none";
      registrationForm.reset();
    });
  }

  // Initialize any image modals
  initImageModal();
});

// Back to Top Function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Image Modal
function showFullImage(imgSrc) {
  const modalImg = document.getElementById("modal-img");
  if (modalImg) {
    modalImg.src = imgSrc;
    document.getElementById("image-modal").style.display = "block";
  }
}

function initImageModal() {
  // Close modal when clicking on X
  const closeButtons = document.querySelectorAll(".w3-modal .w3-button");
  closeButtons.forEach(button => {
    button.addEventListener("click", function () {
      const modal = this.closest(".w3-modal");
      modal.style.display = "none";
    });
  });

  // Close modal when clicking outside of modal content
  const modals = document.querySelectorAll(".w3-modal");
  modals.forEach(modal => {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        this.style.display = "none";
      }
    });
  });
}

// Close modals with Escape key
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    const modals = document.querySelectorAll(".w3-modal");
    modals.forEach(modal => {
      modal.style.display = "none";
    });
  }
});