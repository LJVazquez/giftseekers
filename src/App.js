import './App.css';
import React, { useEffect, useState } from 'react';
import './App.css';
import Layout from './components/pages/Layout';

import { fetchLatestGifts } from './utilities/requests';
import { userDataPlaceholder } from './utilities/placeholder';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';

function App() {
	const [userData, setUserData] = useState(userDataPlaceholder);
	const [tokenData, setTokenData] = useState(null);

	useEffect(() => {
		//fetchAndSetGifts(6)
		fetchDataFromLocalstorage();
	}, []);

	// const fetchAndSetGifts: (amount: number)=> void = async (amount:number) => {
	//   const latestGifts = await fetchLatestGifts(amount);
	//   console.log(`latestGifts`, latestGifts)
	// }

	const fetchDataFromLocalstorage = () => {
		const localStorageUserData = window.localStorage.getItem(
			'giftSeekersUserData'
		);
		const localStorageTokenData = window.localStorage.getItem(
			'giftSeekersTokenData'
		);

		if (localStorageUserData && localStorageTokenData) {
			setUserData(JSON.parse(localStorageUserData));
			setTokenData(localStorageTokenData);
		}
	};

	const removeLoggedUserData = () => {
		setUserData(null);
		setTokenData(null);
		window.localStorage.removeItem('giftSeekersUserData');
		window.localStorage.removeItem('giftSeekersTokenData');
	};

	const setLoggedUserData = (loggedUserData) => {
		const userData = {
			id: loggedUserData.id,
			username: loggedUserData.username,
		};
		const tokenData = loggedUserData.accessToken;

		setUserData(userData);
		setTokenData(tokenData);

		window.localStorage.setItem(
			'giftSeekersUserData',
			JSON.stringify(userData)
		);
		window.localStorage.setItem('giftSeekersTokenData', tokenData);
	};

	return (
		<div className="App">
			<Layout userData={userData}>
				<Routes>
					<Route path="/login" element={<LoginPage />} />
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
