import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserData } from '../../utilities/requests';
import GiftsTable from '../sections/GiftsTable';
import UserCard from '../sections/UserCard';

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

		fetchAndSetData();
	}, [id]);

	return (
		<div className="container">
			{user && (
				<>
					<div className="row justify-content-center my-5">
						<div className="col-6">
							<UserCard user={user} />
						</div>
					</div>
					<div className="row text-center">
						<div className="col-lg-6 mb-5">
							<h2 className="lead text-tertiary mb-2">Regalando</h2>
							<GiftsTable gifts={user.gifts} />
						</div>
						<div className="col-lg-6">
							<h2 className="lead text-tertiary mb-2">Buscando</h2>
							<GiftsTable gifts={user.seeking} />
						</div>
					</div>
				</>
			)}
		</div>
	);
}
