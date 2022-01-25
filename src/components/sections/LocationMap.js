import React from 'react';
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	Polygon,
	Polyline,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { locationMarker, personMarker } from '../elements/LeafletMarkers';

const kilometersAproximation = 0.00757;

const getPersonWalkingCoord = (coord) => {
	return coord + Math.random() * 0.1 * kilometersAproximation;
};

const getPersonWalkingPath = (point, times) => {
	let personWalkingPath = [];

	for (let i = 0; i < times; i++) {
		personWalkingPath.push([
			getPersonWalkingCoord(point[0]),
			getPersonWalkingCoord(point[1]),
		]);
	}

	return personWalkingPath;
};

export default function LocationMap({ point, area, popupText }) {
	const areaDistance = area * kilometersAproximation;
	const locationArea = [
		[point[0] + areaDistance, point[1]],
		[point[0], point[1] + areaDistance],
		[point[0] - areaDistance, point[1]],
		[point[0], point[1] - areaDistance],
	];

	const personTracker = getPersonWalkingPath(point, 5);

	return (
		<MapContainer center={point} zoom={17} className="leaflet-container">
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={point} icon={locationMarker}>
				<Popup>{popupText}</Popup>
			</Marker>
			{personTracker.map((coordinates) => (
				<Marker
					key={coordinates[0]}
					position={coordinates}
					icon={personMarker}
				/>
			))}
			<Polygon pathOptions={{ color: 'hotPink' }} positions={locationArea} />
			<Polyline pathOptions={{ color: 'blue' }} positions={personTracker} />
		</MapContainer>
	);
}
