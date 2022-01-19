import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	fetchGiftData,
	connectUserToGift,
	disconnectUserFromGift,
} from '../../utilities/requests';
import GiftInfo from '../sections/GiftInfo';
import LocationMap from '../sections/LocationMap';
import SkeletonGiftInfo from '../skeletons/SkeletonGiftInfo';

export default function ShowGiftPage({ userData, tokenData }) {
	const [gift, setGift] = useState(null);
	const giftId = useParams().id;
	const giftArea = 0.01; //kms

	useEffect(() => {
		const fetchAndSetData = async () => {
			const gift = await fetchGiftData(giftId);
			setGift(gift);
		};

		setTimeout(() => fetchAndSetData(), 500);
	}, [giftId]);

	const seekGift = async () => {
		try {
			const updatedGift = await connectUserToGift(tokenData, gift.id);
			setGift(updatedGift);
		} catch (e) {
			console.log(`e`, e.message);
		}
	};

	const unseekGift = async () => {
		try {
			const updatedGift = await disconnectUserFromGift(tokenData, gift.id);
			setGift(updatedGift);
		} catch (e) {
			console.log(`e`, e.message);
		}
	};

	return (
		<div className="container pb-10">
			{gift ? (
				<GiftInfo
					userData={userData}
					gift={gift}
					seekGift={seekGift}
					unseekGift={unseekGift}
				/>
			) : (
				<SkeletonGiftInfo />
			)}

			<div className="position-relative d-block">
				{gift ? (
					<LocationMap
						point={[gift.lat, gift.lng]}
						popupText={gift.location}
						area={giftArea}
					/>
				) : (
					<div className="leaflet-container loading mt-5"></div>
				)}
			</div>
		</div>
	);
}
