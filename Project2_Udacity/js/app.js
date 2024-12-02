document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navbar = document.getElementById('navbar');

  // Build navigation dynamically based on sections
  for (const section of sections) {
      const menuItem = document.createElement('a');
      menuItem.href = `#${section.id}`;
      menuItem.textContent = section.dataset.nav;
      menuItem.addEventListener('click', (e) => {
          e.preventDefault();
          section.scrollIntoView({ behavior: 'smooth' });
      });
      navbar.appendChild(menuItem);
  }

  // Function to add 'active' class to section when near top of viewport
  function makeActive() {
      for (const section of sections) {
          const box = section.getBoundingClientRect();
          const navLink = document.querySelector(`a[href="#${section.id}"]`);
          if (box.top <= 150 && box.bottom >= 150) {
              section.classList.add('your-active-class');
              navLink.classList.add('active');
          } else {
              section.classList.remove('your-active-class');
              navLink.classList.remove('active');
          }
      }
  }

  // Add scroll event listener to update active state
  document.addEventListener('scroll', makeActive);
});

let lastScrollY = window.scrollY;
let navbar = document.getElementById('navbar'); // Ensure you have an element with id 'navbar'

window.addEventListener('scroll', function() {
// Hide navbar on down scroll, show on up scroll
if (window.scrollY < lastScrollY) {
  navbar.classList.add('hide');
} else {
  navbar.classList.remove('hide');
}
lastScrollY = window.scrollY;

// Timeout to hide navbar after user stops scrolling
clearTimeout(window.navbarTimeout);
window.navbarTimeout = setTimeout(() => {
  if (window.scrollY > 100) {
    navbar.classList.add('hide');
  }
}, 2000); // Hide after 2 seconds of inactivity
});

// Scroll to Top Button functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
if (window.scrollY > 500) {
  scrollTopBtn.style.display = 'block';
} else {
  scrollTopBtn.style.display = 'none';
}
});

scrollTopBtn.addEventListener('click', () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
});
