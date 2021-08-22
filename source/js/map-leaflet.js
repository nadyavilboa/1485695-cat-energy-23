const MapConstants = {
  LAT: 59.93879,
  LNG: 30.32336,
  LNG_BIG: 30.31717,
  ZOOM: 15,
  ZOOM_BIG: 16,
};

const IconsConstants = {
  ICON_URL: '../img/map-pin.png',
  ICON_BIG_URL: '../img/map-pin-big.png',
  ICON_SIZE: [57, 53],
  ICON_BIG_SIZE: [113, 106],
  ICON_ANCOR: [25, 53],
  ICON_BIG_ANCOR: [56, 53],
}

const map = L.map('map')
  .setView({
    lat: MapConstants.LAT,
    lng: MapConstants.LNG,
  }, MapConstants.ZOOM);

const markerIcon = L.icon({
  iconUrl: IconsConstants.ICON_URL,
  iconSize: IconsConstants.ICON_SIZE,
  iconAnchor: IconsConstants.ICON_ANCOR,
});

const markerIconBig = L.icon({
  iconUrl: IconsConstants.ICON_BIG_URL,
  iconSize: IconsConstants.ICON_BIG_SIZE,
  iconAnchor: IconsConstants.ICON_BIG_ANCOR,
});

const marker = L.marker (
  {
    lat: MapConstants.LAT,
    lng: MapConstants.LNG,
  },
  {
    icon: markerIcon,
  },
);

const markerBig = L.marker (
  {
    lat: MapConstants.LAT,
    lng: MapConstants.LNG,
  },
  {
    icon: markerIconBig,
  },
);

const mediaQueryTablet = window.matchMedia('(min-width: 768px)');
const mediaQueryDesktop = window.matchMedia('(min-width: 1280px)');

const setMapView = () => {

  if (mediaQueryTablet.matches) {
    map.setView(new L.LatLng(MapConstants.LAT, MapConstants.LNG), MapConstants.ZOOM_BIG);
    markerBig.addTo(map);
  } else {
    map.setView(new L.LatLng(MapConstants.LAT, MapConstants.LNG), MapConstants.ZOOM);
    marker.addTo(map);
  }

  if (mediaQueryDesktop.matches) {
    map.setView(new L.LatLng(MapConstants.LAT, MapConstants.LNG_BIG), MapConstants.ZOOM_BIG);
  }
};

const resizeWindow = () => {

  if (mediaQueryTablet.matches) {
    map.removeLayer(marker);
  } else {
    map.removeLayer(markerBig);
  }

  setMapView();

}

export { map, setMapView, resizeWindow };
