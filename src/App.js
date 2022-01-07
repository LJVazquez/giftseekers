import './App.css';
import React, { useEffect, useState } from 'react';
import './App.css';
import Layout from './components/pages/Layout';

import { userDataPlaceholder } from './utilities/placeholder';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import HomePage from './components/pages/HomePage';

function App() {
	const [userData, setUserData] = useState(userDataPlaceholder);
	const [tokenData, setTokenData] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		fetchDataFromLocalstorage();
	}, []);

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
		setUserData(userDataPlaceholder);
		setTokenData(userDataPlaceholder);
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
			<Layout userData={userData} removeLoggedUserData={removeLoggedUserData}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route
						path="/login"
						element={
							<LoginPage
								setLoggedUserData={setLoggedUserData}
								navigate={navigate}
							/>
						}
					/>
					<Route
						path="/register"
						element={
							<RegisterPage
								setLoggedUserData={setLoggedUserData}
								navigate={navigate}
							/>
						}
					/>
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
