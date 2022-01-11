import React, { useEffect, useState } from 'react';
import logo from '../../img/logo.png';
import GiftGallery from '../sections/GiftGallery';
import { fetchLatestGifts } from '../../utilities/requests';

const imgStyle = { height: 200, objectFit: 'contain' };

export default function HomePage() {
	const [gifts, setGifts] = useState([]);

	useEffect(() => {
		fetchAndSetGifts(6);
	}, []);

	const fetchAndSetGifts = async (amount) => {
		const latestGifts = await fetchLatestGifts(amount);
		setGifts(latestGifts);
	};

	return (
		<main className="container py-10">
			<div className="col text-center">
				<img className="my-5" src={logo} alt="logo" style={imgStyle} />
				<h1 className="lined-title display-6 text-secondary">
					<span> Ultimos regalos</span>
				</h1>
			</div>
			<GiftGallery gifts={gifts} />
		</main>
	);
}
