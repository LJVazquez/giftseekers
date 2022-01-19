import React, { useEffect, useState } from 'react';
import logo from '../../img/logo.png';
import {
	fetchAllGifts,
	fetchHottestGifts,
	fetchLatestGifts,
} from '../../utilities/requests';
import SearchPageNav from '../elements/SearchPageNav';
import GiftGallery from '../sections/GiftGallery';
import SkeletonGiftGallery from '../skeletons/SkeletonGiftGallery';

const imgStyle = { height: 200, objectFit: 'contain' };

export default function SearchPage() {
	const [gifts, setGifts] = useState(null);
	const [paginatedGifts, setPaginatedGifts] = useState(null);
	const [currentPage, setCurrentPage] = useState(0);

	const offset = 6;

	useEffect(() => {
		setTimeout(() => fetchAndSetHottestGifts(), 500);
	}, []);

	useEffect(() => {
		const fetch = async () => {
			const gifts = await fetchAllGifts();
			setPaginatedGifts(gifts.slice(currentPage, currentPage + offset));
		};
		fetch();
	}, [currentPage]);

	const fetchAndSetAllGifts = async () => {
		try {
			const gifts = await fetchAllGifts();
			setGifts(gifts);
			setPaginatedGifts(gifts.slice(currentPage, currentPage + offset));
		} catch (e) {
			console.log(`e.message`, e.message);
		}
	};

	const fetchAndSetHottestGifts = async () => {
		try {
			const gifts = await fetchHottestGifts(6);
			setGifts(gifts);
			setPaginatedGifts(gifts);
		} catch (e) {
			console.log(`e.message`, e.message);
		}
	};

	const fetchAndSetLatestGifts = async () => {
		try {
			const gifts = await fetchLatestGifts(6);
			setGifts(gifts);
			setPaginatedGifts(gifts);
		} catch (e) {
			console.log(`e.message`, e.message);
		}
	};

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
		<div className="container my-10">
			<div className="col text-center">
				<img className="my-5" src={logo} alt="logo" style={imgStyle} />
			</div>

			<SearchPageNav
				fetchAndSetAllGifts={fetchAndSetAllGifts}
				fetchAndSetHottestGifts={fetchAndSetHottestGifts}
				fetchAndSetLatestGifts={fetchAndSetLatestGifts}
			/>

			{gifts && paginatedGifts ? (
				<GiftGallery gifts={paginatedGifts} />
			) : (
				<SkeletonGiftGallery />
			)}

			{gifts && (
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
			)}
		</div>
	);
}
