import React from 'react';
import image from '../../img/placeholder-image.jpg';
import SkeletonElement from './SkeletonElement';

const imgStyle = { height: 280, objectFit: 'cover' };

export default function SkeletonGalleryCard() {
	return (
		<div className="col-lg-4 col-md-6 col-12 pb-5">
			<div className="card round rounded-6">
				<img
					src={image}
					style={imgStyle}
					className="loading p-3 pb-0 rounded rounded-6"
					alt="placeholder"
				/>
				<div className="card-body py-2 pb-5">
					<SkeletonElement type="text" />
					<SkeletonElement type="text" />
				</div>
			</div>
		</div>
	);
}
