import { toggleMenu } from './mobile-menu.js';
import { initSlider } from './slider.js';

const buttonToggle = document.querySelector('.page-header__toggle');

const buttonEarly = document.querySelector('.slider__button--early');
const buttonToday = document.querySelector('.slider__button--today');

buttonToggle.classList.add('page--header__toggle--open');
buttonToggle.addEventListener('click', toggleMenu);

if(buttonEarly && buttonToday) {
  initSlider();
}
