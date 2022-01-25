import React from 'react';
import image from '../../img/placeholder-image.jpg';
import SkeletonElement from './SkeletonElement';

export default function SkeletonUserCard() {
	return (
		<div className="card border-none">
			<div className="card-body">
				<div className="d-flex justify-content-center">
					<p className="avatar avatar-xl rounded-circle loading">
						<img alt="user profile" src={image} />
					</p>
				</div>
				<div className="row justify-content-center my-6">
					<div className="col-3">
						<SkeletonElement type="text" />
						<SkeletonElement type="text" />
					</div>
				</div>

				<div className="d-flex justify-content-center">
					<div className="col-6 row justify-content-center">
						<div className="col-3">
							<SkeletonElement type="text" />
							<SkeletonElement type="text" />
						</div>
					</div>
					<div className="col-6 row justify-content-center">
						<div className="col-3">
							<SkeletonElement type="text" />
							<SkeletonElement type="text" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
