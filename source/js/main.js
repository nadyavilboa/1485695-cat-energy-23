import { menu, toggleMenu } from './mobile-menu.js';
import { resizeWindow } from './resize-window.js';
import { map, mediaQueryTablet, setMapView } from './map-leaflet.js';
import { inputData, inputValidate, sendForm } from './form.js';

const mapBlock = document.querySelector('.map');
const mapImg = mapBlock.querySelector('.map__img');
const mapLeaflet = mapBlock.querySelector('.map__leaflet');

const buttonToggle = document.querySelector('.page-header__toggle');

const form = document.querySelector('.form');

if (!mediaQueryTablet.matches) {
  menu.classList.add('main-nav--script-close');
} else {
  if(menu.classList.contains('main-nav--script-close')) {
    menu.classList.remove('main-nav--script-close');
  }

  if(menu.classList.contains('main-nav--script-open')) {
    menu.classList.remove('main-nav--script-open');
  }
}

buttonToggle.classList.remove('display-none');
buttonToggle.classList.add('page--header__toggle--open');
buttonToggle.addEventListener('click', toggleMenu);

if(form) {
  form.addEventListener('submit', sendForm);
  inputValidate.forEach(element => {
    element.addEventListener('focus', inputData);
  })
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
