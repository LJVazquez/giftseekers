import React, { useEffect, useState } from 'react';
import logo from '../../img/logo.png';
import GiftGallery from '../sections/GiftGallery';
import { fetchLatestGifts } from '../../utilities/requests';
import SkeletonGiftGallery from '../skeletons/SkeletonGiftGallery';

const imgStyle = { height: 200, objectFit: 'contain' };

export default function HomePage() {
	const [gifts, setGifts] = useState(null);

	useEffect(() => {
		const fetchAndSetData = async (amount) => {
			try {
				const latestGifts = await fetchLatestGifts(amount);
				setGifts(latestGifts);
			} catch (e) {
				console.log(`e.message`, e.message);
			}
		};

		setTimeout(() => fetchAndSetData(6), 500);
	}, []);

	return (
		<main className="container py-10">
			<div className="col text-center">
				<img className="my-5" src={logo} alt="logo" style={imgStyle} />
				<h1 className="lined-title display-6 text-secondary">
					<span> Ultimos regalos</span>
				</h1>
			</div>
			{gifts ? <GiftGallery gifts={gifts} /> : <SkeletonGiftGallery />}
		</main>
	);
}
