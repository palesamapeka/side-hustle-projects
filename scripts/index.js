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
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const items = Array.from(track.children);

let index = 0; // Current slide
const itemWidth = items[0].getBoundingClientRect().width + 20; // Width + gap

// Move Carousel
function moveCarousel() {
    track.style.transform = `translateX(${-index * itemWidth}px)`;
}

// Next Button
nextButton.addEventListener('click', () => {
    if (index < items.length - 1) {
        index++;
    } else {
        index = 0; // Loop back to start
    }
    moveCarousel();
});

// Previous Button
prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = items.length - 1; // Loop to end
    }
    moveCarousel();
});

// Auto Slide
setInterval(() => {
    index = (index + 1) % items.length;
    moveCarousel();
}, 4000);
