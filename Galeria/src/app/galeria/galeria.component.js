const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex === 0) {
        currentIndex = items.length - 1; // Ir al último elemento si estás en el primero
    } else {
        currentIndex--;
    }
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    if (currentIndex === items.length - 1) {
        currentIndex = 0; // Ir al primer elemento si estás en el último
    } else {
        currentIndex++;
    }
    updateCarousel();
});

function updateCarousel() {
    const itemWidth = items[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}
