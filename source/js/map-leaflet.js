const MapConstants = {
  LAT: 59.93879,
  LNG: 30.32336,
  LNG_TABLET: 30.31717,
  ZOOM: 15,
  ZOOM_TABLET: 16,
};

const IconsConstants = {
  ICON_URL: '../img/map-pin.png',
  ICON_RETINA_URL: '../img/map-pin-@2x.png',
  ICON_TABLET_URL: '../img/map-pin-tablet.png',
  ICON_TABLET_RETINA_URL: '../img/map-pin-tablet-@2x.png',
  ICON_SIZE: [57, 53],
  ICON_TABLET_SIZE: [113, 106],
  ICON_ANCOR: [25, 53],
  ICON_TABLET_ANCOR: [56, 53],
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

const markerIconRetina = L.icon({
  iconUrl: IconsConstants.ICON_RETINA_URL,
  iconSize: IconsConstants.ICON_SIZE,
  iconAnchor: IconsConstants.ICON_ANCOR,
});

const markerIconTablet = L.icon({
  iconUrl: IconsConstants.ICON_TABLET_URL,
  iconSize: IconsConstants.ICON_TABLET_SIZE,
  iconAnchor: IconsConstants.ICON_TABLET_ANCOR,
});

const markerIconTabletRetina = L.icon({
  iconUrl: IconsConstants.ICON_TABLET_RETINA_URL,
  iconSize: IconsConstants.ICON_TABLET_SIZE,
  iconAnchor: IconsConstants.ICON_TABLET_ANCOR,
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

const markerRetina = L.marker (
  {
    lat: MapConstants.LAT,
    lng: MapConstants.LNG,
  },
  {
    icon: markerIconRetina,
  },
);

const markerTablet = L.marker (
  {
    lat: MapConstants.LAT,
    lng: MapConstants.LNG,
  },
  {
    icon: markerIconTablet,
  },
);

const markerTabletRetina = L.marker (
  {
    lat: MapConstants.LAT,
    lng: MapConstants.LNG,
  },
  {
    icon: markerIconTabletRetina,
  },
);

const mediaQueryResolution = window.matchMedia('(min-resolution: 2dppx)');
const mediaQueryTablet = window.matchMedia('(min-width: 768px)');
const mediaQueryDesktop = window.matchMedia('(min-width: 1280px)');

const setMapView = () => {

  if (mediaQueryTablet.matches) {
    map.setView(new L.LatLng(MapConstants.LAT, MapConstants.LNG), MapConstants.ZOOM_TABLET);

    if(mediaQueryResolution.matches) {
      markerTabletRetina.addTo(map);
    } else {
      markerTablet.addTo(map);
    }

  } else {
    map.setView(new L.LatLng(MapConstants.LAT, MapConstants.LNG), MapConstants.ZOOM);

    if(mediaQueryResolution.matches) {
      markerRetina.addTo(map);
    } else {
      marker.addTo(map);
    }
  }

  if (mediaQueryDesktop.matches) {
    map.setView(new L.LatLng(MapConstants.LAT, MapConstants.LNG_TABLET), MapConstants.ZOOM_TABLET);
  }
};

const resizeWindow = () => {

  if (mediaQueryTablet.matches) {
    map.removeLayer(marker);
  } else {
    map.removeLayer(markerTablet);
  }

  setMapView();

}

export { map, setMapView, resizeWindow };
