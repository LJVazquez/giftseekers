import React from 'react';
import GalleryCard from '../elements/GalleryCard';

export default function GiftGallery({ gifts }) {
	return (
		<div className="row">
			{gifts.map((gift) => (
				<GalleryCard key={gift.id} gift={gift} />
			))}
		</div>
	);
}
