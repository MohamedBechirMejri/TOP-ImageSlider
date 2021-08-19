import './main.scss';

import createCarousel, {
    slideShow
} from './js/DOM';

import listen from './js/eventListeners';

listen();

const ImageSlider = (arrayOfImages, timeout) => {
    createCarousel(arrayOfImages);
    slideShow(timeout);
};

export default ImageSlider;
