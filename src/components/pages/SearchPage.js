import React, { useEffect, useState } from 'react';
import logo from '../../img/logo.png';
import { giftPlaceholder } from '../../utilities/placeholder';
import {
	fetchAllGifts,
	fetchHottestGifts,
	fetchLatestGifts,
} from '../../utilities/requests';
import SearchPageNav from '../elements/SearchPageNav';
import GiftGallery from '../sections/GiftGallery';

const imgStyle = { height: 200, objectFit: 'contain' };

export default function SearchPage() {
	const [gifts, setGifts] = useState([giftPlaceholder]);
	const [paginatedGifts, setPaginatedGifts] = useState(null);
	const [currentPage, setCurrentPage] = useState(0);
	const [paginationEnabled, setPaginationEnabled] = useState(false);

	const offset = 6;

	useEffect(() => {
		fetchAndSetHottestGifts();
	}, []);

	useEffect(() => {
		setPaginatedGifts(gifts.slice(currentPage, currentPage + offset));
	}, [currentPage]);

	const fetchAndSetAllGifts = async () => {
		try {
			const gifts = await fetchAllGifts();
			setGifts(gifts);
			setPaginatedGifts(gifts.slice(currentPage, currentPage + offset));
			setPaginationEnabled(true);
		} catch (e) {
			console.log(`e.message`, e.message);
		}
	};

	const fetchAndSetHottestGifts = async () => {
		try {
			const gifts = await fetchHottestGifts(6);
			setGifts(gifts);
			setPaginatedGifts(gifts);
			setPaginationEnabled(false);
		} catch (e) {
			console.log(`e.message`, e.message);
		}
	};

	const fetchAndSetLatestGifts = async () => {
		try {
			const gifts = await fetchLatestGifts(6);
			setGifts(gifts);
			setPaginatedGifts(gifts);
			setPaginationEnabled(false);
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

			{paginatedGifts && <GiftGallery gifts={paginatedGifts} />}

			{paginationEnabled && (
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
