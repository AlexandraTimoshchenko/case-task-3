const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;
const currentSlideElement = document.querySelector('.current-slide');

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;

  slider.style.transform = `translateX(${slideOffset}px)`;
  slider.style.transition = 'transform 0.5s ease-in-out';

  slides.forEach((slide, index) => {
    slide.style.opacity = index === slideIndex ? '1' : '0';
    slide.style.transform = index === slideIndex ? 'scale(1)' : 'scale(0.8)';
    slide.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
  });

  updateCurrentSlideDisplay();
};

const updateCurrentSlideDisplay = () => {
  currentSlideElement.textContent = `Изображение ${slideIndex + 1} из ${slideCount}`;
};

window.addEventListener('load', () => {
  slide();
  updateCurrentSlideDisplay();
});