import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import LeafletControlGeocoder from './LeafletControlGeocoder';
import 'leaflet/dist/leaflet.css';

const CABAcoords = [-34.6157589, -58.5035166];

export default function MapInput({ label, lat, lng, setLat, setLng }) {
	let centerCoords = lat && lng ? [lat, lng] : CABAcoords;

	return (
		<>
			<p className="form-label">{label}</p>
			<MapContainer
				center={centerCoords}
				zoom={12}
				className="leaflet-container"
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<LeafletControlGeocoder
					lat={lat}
					lng={lng}
					setLat={setLat}
					setLng={setLng}
				/>
			</MapContainer>
		</>
	);
}
