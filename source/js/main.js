import { menu, toggleMenu } from './mobile-menu.js';
import { resizeWindow } from './resize-window.js';
import { initSlider } from './slider.js';
import { map, mediaQueryTablet, setMapView } from './map-leaflet.js';
import { initialForm, sendForm } from './form.js';

const mapBlock = document.querySelector('.map');
const mapImg = mapBlock.querySelector('.map__img');
const mapLeaflet = mapBlock.querySelector('.map__leaflet');

const buttonToggle = document.querySelector('.page-header__toggle');

const buttonEarly = document.querySelector('.slider__button--early');
const buttonToday = document.querySelector('.slider__button--today');

const form = document.querySelector('.form');

if (!mediaQueryTablet.matches) {
  menu.classList.add('main-nav--script-close');
}

buttonToggle.classList.remove('display-none');
buttonToggle.classList.add('page--header__toggle--open');
buttonToggle.addEventListener('click', toggleMenu);

if(buttonEarly && buttonToday) {
  initSlider();
}

if(form) {
  initialForm();
  form.addEventListener('submit', sendForm);
}

mapImg.classList.add('map__img--under');
mapLeaflet.classList.add('map__leaflet--script');

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
