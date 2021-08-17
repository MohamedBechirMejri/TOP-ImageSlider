import './main.scss';

import createCarousel from './js/DOM';

import listen from './js/eventListeners';

const imgs = [
  {
    url: 'https://i.picsum.photos/id/701/200/200.jpg?hmac=kPmkJLn8J5cv4wQc5yeM7iQpuoq405kTkMTzQ2hb9sM',
  },
  {
    url: 'https://i.picsum.photos/id/701/200/200.jpg?hmac=kPmkJLn8J5cv4wQc5yeM7iQpuoq405kTkMTzQ2hb9sM',
  },
  {
    url: 'https://i.picsum.photos/id/701/200/200.jpg?hmac=kPmkJLn8J5cv4wQc5yeM7iQpuoq405kTkMTzQ2hb9sM',
  },
  {
    url: 'https://i.picsum.photos/id/701/200/200.jpg?hmac=kPmkJLn8J5cv4wQc5yeM7iQpuoq405kTkMTzQ2hb9sM',
  },
  {
    url: 'https://i.picsum.photos/id/701/200/200.jpg?hmac=kPmkJLn8J5cv4wQc5yeM7iQpuoq405kTkMTzQ2hb9sM',
  },
];
createCarousel(imgs);
listen()
