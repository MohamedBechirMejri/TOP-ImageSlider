import './main.scss';

import createCarousel, { slideShow } from './js/DOM';

import listen from './js/eventListeners';

const imgs = [
  {
    url: 'https://i.picsum.photos/id/76/900/900.jpg?hmac=ylw9j9vC3BlL-ywWPpWXNxuBVn_nFqHSAmMCGO_gtS8',
  },
  {
    url: 'https://i.picsum.photos/id/530/900/900.jpg?hmac=csvEV8oxpqw5UTku5vZV82oZrLN_CEsDIcrUhx8ubKc',
  },
  {
    url: 'https://i.picsum.photos/id/527/900/900.jpg?hmac=cm6DDtenydFADP7OsHFCKnZO4xIcoQ3_24S3NAQ9iWc',
  },
  {
    url: 'https://i.picsum.photos/id/1/900/900.jpg?hmac=2IzxJtcEB5JapKj300sT1OiXGkUtDvtSX_aF1p3Li9Y',
  },
  {
    url: 'https://i.picsum.photos/id/233/900/900.jpg?hmac=6DKx1SCQQGBKJ_Vdr5HejihbuoY_B5dPlMNESpf20Vc',
  },
];

listen();

const ImageSlider = (arrayOfImages, timeout) => {
  createCarousel(arrayOfImages);
  slideShow(timeout);
};
ImageSlider(imgs, 5000);

export default ImageSlider;
