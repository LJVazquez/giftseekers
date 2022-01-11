import React from 'react';
import { Link } from 'react-router-dom';
import SeekGiftButton from '../elements/SeekGiftButton';

const imgStyle = { height: 400, width: '100%', objectFit: 'cover' };

export default function GiftInfo({ userData, gift, seekGift, unseekGift }) {
	const startDate = new Date(gift.startDate);
	const dateLabel = startDate.toLocaleDateString();

	let city = '';
	if (gift.city)
		city = gift.city[0] + gift.city.slice(1, gift.city.length).toLowerCase();

	const symbol = '❖';
	let difficulty = '';
	for (let i = 0; i < gift.difficulty; i++) {
		difficulty = difficulty + symbol;
	}

	const authorUrl = `/users/${gift.author.id}`;

	return (
		<div className="card rounded rounded-6 mb-10 p-5 p-md-0 ">
			<div className="row">
				<div className="col-md-7">
					<img
						alt="gift"
						src={gift.imageUrl}
						style={imgStyle}
						className="rounded rounded-6 "
					/>
				</div>
				<div className="col-md d-flex flex-column">
					<p className="text-muted mt-3">{dateLabel}</p>

					<div className="d-flex justify-content-between align-items-center">
						<h2 className="text-tertiary">{gift.name}</h2>
						<div className="d-flex align-items-center pe-md-5">
							<span>Dificultad</span>
							<span className="ms-2 text-danger" style={{ fontSize: '1.5em' }}>
								{difficulty}
							</span>
						</div>
					</div>

					<div className="d-flex justify-content-between align-items-center">
						<p className={gift.active ? 'text-success small' : 'small'}>
							{gift.active ? 'Regalo activo' : 'Regalo inactivo'}
						</p>
						<div className="text-tertiary pe-md-5">
							<i className="fas fa-map-marker-alt"></i>
							<span className="ms-1 small text-dark">
								{gift.location}, {city},
							</span>
						</div>
					</div>

					<div className="text-tertiary small">
						<i className="fas fa-walking"></i>
						<span className="ms-2">{gift.seekers.length} seekers</span>
					</div>

					<p className="mt-auto mb-auto">{gift.description}</p>
					<p className="mt-auto px-5 text-end">
						Publicado por <Link to={authorUrl}>{gift.author.username}</Link>
					</p>
					<div className="d-grid my-5 me-md-5">
						<SeekGiftButton
							userData={userData}
							gift={gift}
							seekGift={seekGift}
							unseekGift={unseekGift}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
