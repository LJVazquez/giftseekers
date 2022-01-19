import React from 'react';
import SkeletonGalleryCard from './SkeletonGalleryCard';
import { createFilledArray } from '../../utilities/functions';

export default function SkeletonGiftGallery() {
	const cardsAmount = createFilledArray(6);

	return (
		<div className="row">
			{cardsAmount.map((gift, i) => (
				<SkeletonGalleryCard key={i} />
			))}
		</div>
	);
}
