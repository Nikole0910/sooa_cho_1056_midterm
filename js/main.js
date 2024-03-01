// JavaScript for Carousel
let carouselSlide = document.querySelector('.carousel-slide');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let slideIndex = 0;

// Button Click Events
prevBtn.addEventListener('click', () => {
    if (slideIndex === 0) return;
    slideIndex--;
    updateSlidePosition();
});

nextBtn.addEventListener('click', () => {
    if (slideIndex === 2) return;
    slideIndex++;
    updateSlidePosition();
});

// Update Slide Position
function updateSlidePosition() {
    carouselSlide.style.transform = `translateX(-${slideIndex * 33.33}%)`;
}