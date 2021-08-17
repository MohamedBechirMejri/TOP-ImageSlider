import { moveToNextPic } from "./DOM";

const listen = () => {
    // eslint-disable-next-line no-unused-vars
    const toRightButton = (() => {
        const rightButton = document.getElementById('nav-left');
        rightButton.addEventListener('click', moveToNextPic)
  })();
};

export default listen;
