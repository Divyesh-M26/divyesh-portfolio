document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. Page Loader
     ========================================================================== */
  const loader = document.querySelector('.loader');
  if (loader) {
    window.addEventListener('load', () => {
      loader.classList.add('hidden');
    });
    // Fallback: Ensure loader hides after 2.5 seconds if load event is delayed
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 2500);
  }

  /* ==========================================================================
     2. Back-To-Top Button Logic
     ========================================================================== */
  const topBtn = document.getElementById('topBtn');
  if (topBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        topBtn.classList.add('show');
      } else {
        topBtn.classList.remove('show');
      }
    });

    topBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     3. Mobile Navigation Menu Toggle
     ========================================================================== */
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = navLinks.style.display === 'flex';
      
      if (isExpanded) {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(10, 10, 12, 0.95)';
        navLinks.style.padding = '1.5rem';
        navLinks.style.borderRadius = '20px';
        navLinks.style.border = '1px solid var(--card-border)';
        navLinks.style.marginTop = '0.5rem';
      }
    });

    // Close menu when clicking a navigation link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.style.display = 'none';
        }
      });
    });
  }

  /* ==========================================================================
     4. Dynamic Header Border on Scroll
     ========================================================================== */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
      } else {
        navbar.style.borderColor = 'var(--card-border)';
        navbar.style.boxShadow = 'none';
      }
    });
  }

});