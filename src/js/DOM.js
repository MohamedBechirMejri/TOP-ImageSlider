export const createCarousel = (array) => {
    const carouselDiv = document.getElementById('carousel');
    carouselDiv.innerHTML = '';
    array.forEach((element) => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('slideDiv');
        imgDiv.innerHTML = `<img src="${element.url}" data-id="${array.indexOf(
      element,
    )}" class="slide">`;
        carouselDiv.appendChild(imgDiv);
    });
};
export default createCarousel;
