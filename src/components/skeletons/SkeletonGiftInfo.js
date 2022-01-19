import React from 'react';
import image from '../../img/placeholder-image.jpg';
import SkeletonElement from './SkeletonElement';

const imgStyle = { height: 400, width: '100%', objectFit: 'contain' };

export default function SkeletonGiftInfo() {
	return (
		<div className="row">
			<div className="col-md-7">
				<img
					alt="placeholder"
					src={image}
					style={imgStyle}
					className="rounded rounded-6 loading"
				/>
			</div>
			<div className="col-md d-flex flex-column py-5">
				<div className="row ps-3 justify-content-between">
					<SkeletonElement type="title" />

					<div className="col-3">
						<SkeletonElement type="text" />
					</div>
				</div>

				<div className="row justify-content-between">
					<div className="col-3">
						<SkeletonElement type="text" />
						<SkeletonElement type="text" />
					</div>
					<div className="col-4">
						<SkeletonElement type="text" />
					</div>
				</div>

				<div className="my-auto">
					<SkeletonElement type="block" />
				</div>
				<div className="row justify-content-end">
					<div className="col-4">
						<SkeletonElement type="text" />
					</div>
				</div>
				<button className="btn rounded-6 loading py-5"></button>
			</div>
		</div>
	);
}
