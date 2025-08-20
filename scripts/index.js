// Mobile menu toggle
const mobileMenu = document.getElementById("mobile-menu");
const menu = document.querySelector("nav .menu");

mobileMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Hero Carousel JS
let slides = document.querySelectorAll(".hero-slide");
let current = 0;
setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 5000);

// Testimonials Slider JS
let testimonials = document.querySelectorAll(".testimonial");
let tIndex = 0;
setInterval(() => {
  testimonials[tIndex].classList.remove("active");
  tIndex = (tIndex + 1) % testimonials.length;
  testimonials[tIndex].classList.add("active");
}, 7000);
