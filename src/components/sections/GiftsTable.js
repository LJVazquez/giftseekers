import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { giftPlaceholder } from '../../utilities/placeholder';

const getDifficultyBadgeClass = (num) => {
	if (num <= 2) {
		return 'badge bg-soft-success text-success';
	} else if (num > 2 && num <= 4) {
		return 'badge bg-soft-warning text-warning';
	} else {
		return 'badge bg-soft-danger text-danger';
	}
};

export default function GiftsTable({ gifts, id }) {
	const [paginatedGifts, setPaginatedGifts] = useState([giftPlaceholder]);
	const [currentPage, setCurrentPage] = useState(0);

	const offset = 5;

	useEffect(() => {
		setPaginatedGifts(gifts.slice(currentPage, currentPage + offset));
	}, [currentPage]);

	const nextPage = () => {
		if (currentPage + offset < gifts.length)
			setCurrentPage((currentPage) => currentPage + offset);
	};

	const prevPage = () => {
		if (currentPage > 0) {
			setCurrentPage((currentPage) => currentPage - offset);
		}
	};

	return (
		paginatedGifts && (
			<div className="table-responsive rounded-5 border">
				<table className="table table-hover table-nowrap" id={id}>
					<thead className="bg-main">
						<tr>
							<th scope="col">Regalo</th>
							<th scope="col">Dificultad</th>
							<th scope="col">Zona</th>
							<th scope="col">Seekers</th>
						</tr>
					</thead>
					<tbody>
						{paginatedGifts.map((gift) => (
							<tr key={gift.name + gift.id}>
								<td>
									<Link
										to={`/gifts/${gift.id}`}
										className="text-heading font-semibold"
									>
										<img
											alt={gift.name}
											src={gift.imageUrl}
											className="avatar avatar-sm rounded-circle me-2"
										/>

										{gift.name}
									</Link>
								</td>
								<td>
									<span className={getDifficultyBadgeClass(gift.difficulty)}>
										{`${gift.difficulty}/5`}
									</span>
								</td>
								<td>
									{gift.city[0] +
										gift.city.slice(1, gift.city.length).toLowerCase()}
								</td>
								<td>{gift.seekers.length}</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="d-flex justify-content-center">
					{currentPage > 0 && (
						<button className="btn btn-small text-tertiary" onClick={prevPage}>
							<i className="fas fa-chevron-left"></i>
						</button>
					)}
					{currentPage + offset < gifts.length && (
						<button className="btn btn-small text-tertiary" onClick={nextPage}>
							<i className="fas fa-chevron-right"></i>
						</button>
					)}
				</div>
			</div>
		)
	);
}
