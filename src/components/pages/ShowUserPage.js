import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserCard from '../sections/UserCard';
import UserGiftsData from '../sections/UserGiftsData';
import SkeletonUserGiftsData from '../skeletons/SkeletonUserGiftsData';
import SkeletonUserCard from '../skeletons/SkeletonUserCard';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../graphql/queries/User';

export default function ShowUserPage() {
	const [user, setUser] = useState(null);
	const id = Number(useParams().id);

	const { loading, data, error } = useQuery(GET_USER, {
		variables: { userId: id },
	});

	useEffect(() => {
		if (error) {
			console.log(error);
		} else if (data) {
			setUser(data.user);
		}
	}, [data]);

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
