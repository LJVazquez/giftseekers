import React from 'react';
import { Link } from 'react-router-dom';

const imgStyle = { height: 280, objectFit: 'cover' };

export default function MainPageGalleryCard({ gift }) {
	const startDate = new Date(gift.startDate);
	const dateLabel = startDate.toLocaleDateString();

	const giftUrl = `/gifts/${gift.id}`;
	const dotClass = `${
		gift.active ? 'dot-active' : 'dot-inactive'
	} rounded-circle`;

	const symbol = '❖';
	let difficulty = '';
	for (let i = 0; i < gift.difficulty; i++) {
		difficulty = difficulty + symbol;
	}

	return (
		<div className="col-lg-4 col-md-6 col-12 pb-5">
			<Link to={giftUrl}>
				<div className="card round rounded-6">
					<div className="d-flex justify-content-end position-absolute top-4 end-4">
						<div className={dotClass} style={{ width: 20, height: 20 }}></div>
					</div>
					<img
						src={gift.imageUrl}
						alt={gift.name}
						style={imgStyle}
						className="p-3 pb-0 rounded rounded-6"
					/>
					<div className="card-body pb-3">
						<div className="d-flex justify-content-between">
							<h5 className="text-tertiary">{gift.name}</h5>
							<p className="small text-muted">{dateLabel}</p>
						</div>

						<div className="d-flex justify-content-between mb-3">
							<div className="text-warning">
								<abbr title="Dificultad">{difficulty}</abbr>
							</div>
							<p className="text-muted">{gift.location}</p>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
