import React from 'react';
import SkeletonGiftsTable from '../skeletons/SkeletonGiftsTable';

export default function SkeletonUserGiftsData() {
	return (
		<div className="row text-center">
			<div className="col-lg-6 mb-5">
				<h2 className="lead text-tertiary mb-2">Regalando</h2>
				<SkeletonGiftsTable />
			</div>
			<div className="col-lg-6">
				<h2 className="lead text-tertiary mb-2">Buscando</h2>
				<SkeletonGiftsTable />
			</div>
		</div>
	);
}
