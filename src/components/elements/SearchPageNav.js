import React, { useState } from 'react';

export default function SearchPageNav({
	fetchAndSetAllGifts,
	fetchAndSetHottestGifts,
	fetchAndSetLatestGifts,
}) {
	const [latest, Setlatest] = useState(false);
	const [hottest, setHottest] = useState(true);
	const [all, setAll] = useState(false);
	const [titleLabel, setTitleLabel] = useState('');

	const setGiftsToLatest = () => {
		fetchAndSetLatestGifts();
		Setlatest(true);
		setHottest(false);
		setAll(false);
	};

	const setGiftsToHottest = () => {
		fetchAndSetHottestGifts();
		setHottest(true);
		Setlatest(false);
		setAll(false);
	};

	const setGiftsToAll = () => {
		fetchAndSetAllGifts();
		setAll(true);
		Setlatest(false);
		setHottest(false);
	};

	return (
		<div className="text-center my-5">
			<button
				onClick={setGiftsToHottest}
				className={
					hottest
						? 'btn btn-lg btn-tertiary mx-5'
						: 'btn btn-lg btn-outline-tertiary mx-5'
				}
			>
				Mas activos
			</button>
			<button
				onClick={setGiftsToLatest}
				className={
					latest
						? 'btn btn-lg btn-tertiary mx-5'
						: 'btn btn-lg btn-outline-tertiary mx-5'
				}
			>
				Ultimos
			</button>

			<button
				onClick={setGiftsToAll}
				className={
					all
						? 'btn btn-lg btn-tertiary mx-5'
						: 'btn btn-lg btn-outline-tertiary mx-5'
				}
			>
				Todos
			</button>
		</div>
	);
}
