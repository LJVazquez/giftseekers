import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	fetchGiftData,
	connectUserToGift,
	disconnectUserFromGift,
} from '../../utilities/requests';
import GiftInfo from '../sections/GiftInfo';
import { giftPlaceholder } from '../../utilities/placeholder';
import LocationMap from '../sections/LocationMap';

export default function GiftDetailPage({ userData, tokenData }) {
	const [gift, setGift] = useState(giftPlaceholder);
	const giftId = useParams().id;
	const giftCoords = [gift.lat, gift.lng];
	const giftArea = 0.01; //kms

	useEffect(() => {
		fetchAndSetData();
	}, []);

	const fetchAndSetData = async () => {
		const gift = await fetchGiftData(giftId);
		setGift(gift);
	};

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
			<GiftInfo
				userData={userData}
				gift={gift}
				seekGift={seekGift}
				unseekGift={unseekGift}
			/>
			<div className="position-relative d-block">
				{gift.id && (
					<LocationMap
						point={giftCoords}
						popupText={gift.location}
						area={giftArea}
					/>
				)}
			</div>
		</div>
	);
}
