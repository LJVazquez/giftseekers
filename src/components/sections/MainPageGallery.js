import React, { useEffect, useState } from 'react';
import MainPageGalleryCard from '../elements/MainPageGalleryCard';
import { fetchLatestGifts } from '../../utilities/requests';

export default function MainPageGallery() {
	const [giftsData, setGiftsData] = useState([]);

	useEffect(() => {
		fetchAndSetGifts(6);
	}, []);

	const fetchAndSetGifts = async (amount) => {
		const latestGifts = await fetchLatestGifts(amount);
		setGiftsData(latestGifts);
	};

	return (
		<div className="row">
			{giftsData.map((gift) => (
				<MainPageGalleryCard key={gift.id} gift={gift} />
			))}
		</div>
	);
}
