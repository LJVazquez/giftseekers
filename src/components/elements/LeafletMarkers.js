import L from 'leaflet';
import mapMarker from '../../img/map-marker.svg';
import personmarker from '../../img/person-marker.svg';

export const locationMarker = L.icon({
	iconSize: [25, 41],
	iconAnchor: [10, 41],
	popupAnchor: [2, -40],
	iconUrl: mapMarker,
});

export const personMarker = L.icon({
	iconSize: [20, 30],
	iconAnchor: [10, 41],
	popupAnchor: [2, -40],
	iconUrl: personmarker,
});
