import { toggleMenu } from './mobile-menu.js';
import { initSlider } from './slider.js';
import { map, setMapView, resizeWindow } from './map-leaflet.js';

const buttonToggle = document.querySelector('.page-header__toggle');

const buttonEarly = document.querySelector('.slider__button--early');
const buttonToday = document.querySelector('.slider__button--today');

buttonToggle.classList.add('page--header__toggle--open');
buttonToggle.addEventListener('click', toggleMenu);

if(buttonEarly && buttonToday) {
  initSlider();
}

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

map.on('mouseout', function() {
  map.scrollWheelZoom.disable();
});

setMapView();

window.addEventListener('resize', resizeWindow);

