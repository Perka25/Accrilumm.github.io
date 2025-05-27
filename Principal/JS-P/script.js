// Referencias principales
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const menuToggle = document.querySelector('.hamburger-menu');

const carouselImages = document.querySelector('.carousel-images');
const carouselLeft = document.querySelector('.carousel-arrow.left');
const carouselRight = document.querySelector('.carousel-arrow.right');

let currentIndex = 2;

// ----------- Menu hamburguesa -----------
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ----------- Ajustar visibilidad del menú al cambiar tamaño -----------

window.addEventListener('resize', () => {
  if (window.innerWidth > 690) {
    navLinks.classList.remove('show');
    navLinks.style.display = 'flex';
  } else {
    navLinks.style.display = '';
  }
  updateCarousel(); // Recalcula centrado al cambiar tamaño
});

// ----------- Navbar scroll efecto -----------

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ----------- Ir al top -----------

document.querySelector('.scroll-top').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

