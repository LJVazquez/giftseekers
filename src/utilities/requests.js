import axios from 'axios';

const PORT = 3001;
const baseUrl = `http://localhost:${PORT}/api/v1`;
const usersUrl = baseUrl + '/users';
const giftsUrl = baseUrl + '/gifts';
const loginUrl = baseUrl + '/login';

export const fetchLatestGifts = async (amount) => {
	const url = giftsUrl + `/latest/${amount}`;
	const res = await axios.get(url);
	return res.data;
};

export const fetchHottestGifts = async (amount) => {
	const url = giftsUrl + `/hottest/${amount}`;
	const res = await axios.get(url);
	return res.data;
};

export const fetchAllGifts = async () => {
	const res = await axios.get(giftsUrl);
	return res.data;
};

export const fetchGiftData = async (giftId) => {
	const res = await axios.get(giftsUrl + `/${giftId}`);
	return res.data;
};

export const createGift = async (token, giftData) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const res = await axios.post(giftsUrl, giftData, config);

	return res.data;
};

export const updateGift = async (token, giftData, giftId) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const res = await axios.patch(giftsUrl + `/${giftId}`, giftData, config);

	return res.data;
};

export const fetchUserData = async (userId) => {
	const res = await axios.get(usersUrl + `/${userId}`);
	return res.data;
};

export const connectUserToGift = async (token, giftId) => {
	const url = giftsUrl + `/${giftId}/seek`;

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const res = await axios.patch(url, null, config);

	return res.data;
};

export const disconnectUserFromGift = async (token, giftId) => {
	const url = giftsUrl + `/${giftId}/unseek`;

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const res = await axios.patch(url, null, config);

	return res.data;
};

export const loginUser = async (loginData) => {
	const res = await axios.post(loginUrl, loginData);
	return res.data;
};

export const registerUser = async (userData) => {
	const res = await axios.post(usersUrl, userData);
	return res.data;
};
