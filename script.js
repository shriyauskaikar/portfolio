// Mobile Navigation Toggle
// Toggles the mobile navigation menu when the menu icon is clicked
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

if (mobileMenu) {
  mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Close mobile menu when a link is clicked
// Ensures the mobile menu closes when a navigation link is selected
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Smooth Scrolling and Active Navigation Link
// Highlights the active navigation link based on scroll position
const sections = document.querySelectorAll('section');
const navLinksArray = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinksArray.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// Project Filtering by Category
// Filters project cards based on selected category buttons
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button state
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.dataset.category;

    projectCards.forEach(card => {
      const cardCategories = card.dataset.category.split(',');

      if (category === 'all' || cardCategories.includes(category)) {
        card.style.display = 'block';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 100);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});

// Initialize project cards with default filter
// Applies the 'All Categories' filter on page load
document.querySelector('.filter-btn.active').click();

// Contact Form Validation
// Validates the contact form fields on submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Name validation - checks if name field is empty
    if (name.value.trim() === '') {
      valid = false;
      name.style.borderColor = '#f87171';
    } else {
      name.style.borderColor = '';
    }

    // Email validation - checks if email is empty or invalid format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
      valid = false;
      email.style.borderColor = '#f87171';
    } else if (!emailPattern.test(email.value)) {
      valid = false;
      email.style.borderColor = '#f87171';
    } else {
      email.style.borderColor = '';
    }

    // Message validation - checks if message field is empty
    if (message.value.trim() === '') {
      valid = false;
      message.style.borderColor = '#f87171';
    } else {
      message.style.borderColor = '';
    }

    if (!valid) {
      e.preventDefault();
    } else {
      // Show success state - changes button text temporarily
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Message Sent!';
      btn.style.background = '#34d399';

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        contactForm.reset();
      }, 3000);

      e.preventDefault();
    }
  });

  // Real-time validation feedback
  // Provides immediate feedback when form fields lose focus
  contactForm.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('blur', () => {
      if (field.value.trim() === '') {
        field.style.borderColor = var(--border-color);
      }
    });
  });
}

// Scroll Reveal Animations
// Animates elements as they come into view during scrolling
const revealElements = document.querySelectorAll('.reveal');

function checkReveal() {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add('active');
    }
  });
}

// Initial check and on scroll
// Triggers animations when the page loads and during scrolling
checkReveal();
window.addEventListener('scroll', checkReveal);

// Back to Top Button
// Shows/hides the back-to-top button based on scroll position
const backToTopBtn = document.querySelector('.back-to-top-btn');

function toggleBackToTop() {
  if (window.pageYOffset > 300) {
    backToTopBtn.parentElement.classList.add('active');
  } else {
    backToTopBtn.parentElement.classList.remove('active');
  }
}

window.addEventListener('scroll', toggleBackToTop);

// Smooth scroll for back to top
// Scrolls to the top of the page smoothly when button is clicked
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Parallax effect for hero section
// Subtle background movement effect on the home section
const home = document.querySelector('.home');

if (home) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    home.style.backgroundPosition = `center ${scrolled * 0.5}px`;
  });
}

// Add reveal class to sections for scroll animations
// Applies the reveal animation class to all section elements with staggered delays
document.querySelectorAll('section').forEach((section, index) => {
  section.classList.add('reveal');
  section.style.transitionDelay = `${index * 0.1}s`;
});

// Add reveal class to project cards
// Applies reveal animation to project cards with staggered delays
document.querySelectorAll('.project-card').forEach((card, index) => {
  card.classList.add('reveal');
  card.style.transitionDelay = `${0.5 + index * 0.1}s`;
});

// Add reveal class to achievement cards
// Applies reveal animation to achievement cards with staggered delays
document.querySelectorAll('.achievement-card').forEach((card, index) => {
  card.classList.add('reveal');
  card.style.transitionDelay = `${0.7 + index * 0.1}s`;
});

// Add reveal class to education cards
// Applies reveal animation to education cards with staggered delays
document.querySelectorAll('.education-card').forEach((card, index) => {
  card.classList.add('reveal');
  card.style.transitionDelay = `${0.5 + index * 0.1}s`;
});

// Form input focus animations
// Adds subtle opacity animation to form inputs when focused
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
  input.addEventListener('focus', () => {
    input.parentElement.style.opacity = '1';
  });

  input.addEventListener('blur', () => {
    if (!input.value) {
      input.parentElement.style.opacity = '0.8';
    }
  });
});

// Initialize form inputs opacity
// Sets initial opacity based on whether inputs have values
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
  input.parentElement.style.opacity = input.value ? '1' : '0.8';
});