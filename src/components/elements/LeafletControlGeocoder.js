import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import L from 'leaflet';

import { locationMarker } from '../elements/LeafletMarkers';

export default function LeafletControlGeocoder({ lat, lng, setLat, setLng }) {
	const map = useMap();
	let marker = null;

	const setCoordsAndMarker = (latlng) => {
		setMarker(latlng);
		setCoords(latlng);
	};

	const setMarker = (latlng) => {
		if (marker !== null) {
			map.removeLayer(marker);
		}
		const center = latlng;
		marker = L.marker(center, { icon: locationMarker });
		marker.addTo(map);
	};

	const setCoords = (latlng) => {
		setLat(latlng.lat);
		setLng(latlng.lng);
	};

	useEffect(() => {
		if (lat && lng) setMarker([lat, lng]);

		let geocoder = L.Control.Geocoder.nominatim();
		if (typeof URLSearchParams !== 'undefined' && window.location.search) {
			// parse /?geocoder=nominatim from URL
			const params = new URLSearchParams(window.location.search);
			const geocoderString = params.get('geocoder');
			if (geocoderString && L.Control.Geocoder[geocoderString]) {
				geocoder = L.Control.Geocoder[geocoderString]();
			} else if (geocoderString) {
				console.warn('Unsupported geocoder', geocoderString);
			}
		}

		//evento del plugin geocoder
		L.Control.geocoder({
			query: '',
			placeholder: 'Ingresar dirección',
			defaultMarkGeocode: false,
			geocoder,
		})
			.on('markgeocode', (e) => {
				setCoordsAndMarker(e.geocode.center);
				map.fitBounds(e.geocode.bbox);
			})
			.addTo(map);

		//evento propio onClick
		map.on('click', (e) => setCoordsAndMarker(e.latlng));
	}, []);

	return null;
}
