import React from 'react';
import pic from '../../img/success-kirby.png';

export default function UserCard({ user }) {
	return (
		<div className="card border-none">
			<div className="card-body">
				<div className="d-flex justify-content-center">
					<a href="#" className="avatar avatar-xl rounded-circle">
						<img alt="user profile pic" src={pic} />
					</a>
				</div>
				<div className="text-center my-6">
					<p className="d-block h5 mb-0">{user.username}</p>

					<span className="d-block text-sm text-muted">
						placeholder@email.com
					</span>
				</div>

				<div className="d-flex justify-content-center">
					<div className="col-6 text-center">
						<p className="h4 font-bolder">{user.gifts.length}</p>
						<span className="d-block text-sm">Regalos</span>
					</div>
					<div className="col-6 text-center">
						<p className="h4 font-bolder">{user.seeking.length}</p>
						<span className="d-block text-sm">Buscando</span>
					</div>
				</div>
			</div>
		</div>
	);
}
