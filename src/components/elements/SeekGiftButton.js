import React from 'react';
import { Link } from 'react-router-dom';

export default function SeekGiftButton({
	userData,
	gift,
	seekGift,
	unseekGift,
}) {
	const userIsAuthor = () => {
		return gift.authorId === userData.id;
	};

	const userIsSeeking = () => {
		const giftsSeekersIds = gift.seekers.map((seeker) => seeker.id);
		return giftsSeekersIds.includes(userData.id);
	};

	if (userIsAuthor()) {
		return (
			<Link to="edit" className="btn btn-tertiary rounded-6">
				Editar regalo
			</Link>
		);
	}

	if (!gift.active) {
		return (
			<button className="btn btn-secondary rounded-6" disabled>
				Regalo inactivo
			</button>
		);
	}

	if (userData && userIsSeeking()) {
		return (
			<button className="btn bg-main rounded-6" onClick={unseekGift}>
				Dejar de participar
			</button>
		);
	} else if (userData.id !== 0) {
		return (
			<button className="btn btn-tertiary rounded-6" onClick={seekGift}>
				Participar
			</button>
		);
	}

	return (
		<button className="btn btn-tertiary rounded-6" disabled>
			Login para participar
		</button>
	);
}
