import { moveToClickedPic, moveToLastPic, moveToNextPic } from './DOM';

const listen = () => {
  // eslint-disable-next-line no-unused-vars
  const toRightButton = (() => {
    const rightButton = document.getElementById('nav-right');
    rightButton.addEventListener('click', moveToNextPic);
  })();

  // eslint-disable-next-line no-unused-vars
  const toLeftButton = (() => {
    const leftButton = document.getElementById('nav-left');
    leftButton.addEventListener('click', moveToLastPic);
  })();

  // eslint-disable-next-line no-unused-vars
  const toNavImgs = (() => {
    const navImgs = document.querySelectorAll('.navslide');
    navImgs.forEach((img) => {
      img.addEventListener('click', () => {
        moveToClickedPic(img.getAttribute('data-id'));
      });
    });
  })();
};

export default listen;
