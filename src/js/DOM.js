const createCarousel = (array) => {
    const carouselDiv = document.getElementById('imgs-container');
    carouselDiv.innerHTML = '';

    array.forEach((element) => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('slideDiv');
        imgDiv.innerHTML = `<img src="${element.url}" data-id="${array.indexOf(
      element,
    )}" class="slide">`;
        carouselDiv.appendChild(imgDiv);
    });

    const bottomNavbar = document.createElement('div');
    bottomNavbar.classList.add('bottomnavbar');
    bottomNavbar.innerHTML = carouselDiv.innerHTML;

    const navBarSlides = bottomNavbar.querySelectorAll('.slide');
    navBarSlides.forEach((slide) => {
        slide.classList.remove('slide');
        slide.classList.add('navslide');
    });

    carouselDiv.appendChild(bottomNavbar);

    document.querySelector(`[data-id="0"]`).classList.add('visible');
};

export const moveToNextPic = () => {
    const slides = document.querySelectorAll('.slide');
    const currentPic = document.querySelector('.visible');
    let currentPicId = currentPic.getAttribute('data-id');

    currentPicId == slides.length - 1 ? (currentPicId = '-1') : ''; // TODO: refactor this into own function later.
    currentPic.classList.remove('visible');
    const nextPic = document.querySelector(`[data-id="${+currentPicId + 1}"]`);
    nextPic.classList.add('visible');
};

export const moveToLastPic = () => {
    const slides = document.querySelectorAll('.slide');
    const currentPic = document.querySelector('.visible');
    let currentPicId = currentPic.getAttribute('data-id');

    currentPicId == 0 ? (currentPicId = slides.length) : ''; // TODO: refactor this into own function later.
    currentPic.classList.remove('visible');
    const nextPic = document.querySelector(`[data-id="${+currentPicId - 1}"]`);
    nextPic.classList.add('visible');
};

export const moveToClickedPic = (id) => {
    const currentPic = document.querySelector('.visible');
    currentPic.classList.remove('visible');

    const nextPic = document.querySelector(`[data-id="${id}"]`);
    nextPic.classList.add('visible');
};

export default createCarousel;
