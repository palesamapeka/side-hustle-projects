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

//Portfolio Carosel
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const items = Array.from(track.children);
const itemWidth = items[0].getBoundingClientRect().width + 20; // include margin

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    if (currentIndex < items.length - 3) { // show 3 items at a time
        currentIndex++;
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
});