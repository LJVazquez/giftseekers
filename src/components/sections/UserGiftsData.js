import React from 'react';
import GiftsTable from '../sections/GiftsTable';

export default function UserGiftsData({ user }) {
	return (
		<div className="row text-center">
			<div className="col-lg-6 mb-5">
				<h2 className="lead text-tertiary mb-2">Regalando</h2>
				<GiftsTable gifts={user.gifts} />
			</div>
			<div className="col-lg-6">
				<h2 className="lead text-tertiary mb-2">Buscando</h2>
				<GiftsTable gifts={user.seeking} />
			</div>
		</div>
	);
}
