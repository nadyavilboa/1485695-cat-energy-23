import { mediaQueryTablet, map, marker, markerTablet, setMapView } from './map-leaflet.js';
import { menu } from './mobile-menu.js';

const resizeWindow = () => {

  if (mediaQueryTablet.matches) {
    menu.classList.remove('main-nav--script-close');
    map.removeLayer(marker);
  } else {
    menu.classList.add('main-nav--script-close');
    map.removeLayer(markerTablet);
  }

  setMapView();
}

export { resizeWindow };
