import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserData } from '../../utilities/requests';
import UserCard from '../sections/UserCard';
import UserGiftsData from '../sections/UserGiftsData';
import SkeletonUserGiftsData from '../skeletons/SkeletonUserGiftsData';
import SkeletonUserCard from '../skeletons/SkeletonUserCard';

export default function ShowUserPage() {
	const [user, setUser] = useState();

	const id = useParams().id;

	useEffect(() => {
		const fetchAndSetData = async () => {
			try {
				const user = await fetchUserData(id);
				setUser(user);
			} catch (e) {
				console.log(`e.message`, e.message);
			}
		};

		setTimeout(() => fetchAndSetData(), 500);
	}, [id]);

	return user ? (
		<div className="container">
			<div className="row justify-content-center my-5">
				<div className="col-6">
					<UserCard user={user} />
				</div>
			</div>

			<UserGiftsData user={user} />
		</div>
	) : (
		<div className="container">
			<div className="row justify-content-center my-5">
				<div className="col-6">
					<SkeletonUserCard />
				</div>
			</div>
			<SkeletonUserGiftsData />
		</div>
	);
}
