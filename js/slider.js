// const slides = document.querySelector('.slides');
// const slideCount = document.querySelectorAll('.slide').length;
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');

// let index = 0;
// let interval;

// /* UPDATE SLIDE */
// function showSlide(i) {
//     slides.style.transform = `translateX(-${i * 100}%)`;
// }

// /* NEXT SLIDE */
// function nextSlide() {
//     index = (index + 1) % slideCount;
//     showSlide(index);
// }

// /* PREVIOUS SLIDE */
// function prevSlide() {
//     index = (index - 1 + slideCount) % slideCount;
//     showSlide(index);
// }

// /* AUTO SLIDE */
// function startAutoSlide() {
//     interval = setInterval(nextSlide, 3000); // 3 seconds
// }

// function resetAutoSlide() {
//     clearInterval(interval);
//     startAutoSlide();
// }

// /* BUTTON EVENTS */
// nextBtn.addEventListener('click', () => {
//     nextSlide();
//     resetAutoSlide();
// });

// prevBtn.addEventListener('click', () => {
//     prevSlide();
//     resetAutoSlide();
// });

// /* KEYBOARD ARROWS */
// document.addEventListener('keydown', (e) => {
//     if (e.key === 'ArrowRight') {
//         nextSlide();
//         resetAutoSlide();
//     }
//     if (e.key === 'ArrowLeft') {
//         prevSlide();
//         resetAutoSlide();
//     }
// });

// /* START */
// startAutoSlide();