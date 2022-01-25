import React, { useEffect, useState } from 'react';
import logo from '../../img/logo.png';
import GiftGallery from '../sections/GiftGallery';
import SkeletonGiftGallery from '../skeletons/SkeletonGiftGallery';
import { GET_LATEST_GIFTS } from '../../graphql/queries/Gift';
import { useQuery } from '@apollo/client';

const imgStyle = { height: 200, objectFit: 'contain' };

export default function HomePage() {
	const [gifts, setGifts] = useState(null);

	const { loading, data, error } = useQuery(GET_LATEST_GIFTS, {
		variables: { amount: 6 },
	});

	useEffect(() => {
		if (error) {
			console.log('error', error);
		} else if (data) {
			setGifts(data.latestGifts);
		}
	}, [data]);

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
