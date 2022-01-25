import React from 'react';
import kirby from '../../img/success-kirby.png';
import LoginForm from '../sections/LoginForm';

export default function LoginPage({ setLoggedUserData, userData, navigate }) {
	return (
		<div className="container mt-5" id="login-form">
			<div className="row align-items-center justify-content-center">
				<div className="col-md text-center">
					<img src={kirby} alt="login image" style={{ height: 400 }} />
				</div>
				<div className="col-md">
					<LoginForm
						setLoggedUserData={setLoggedUserData}
						userData={userData}
						navigate={navigate}
					/>
				</div>
			</div>
		</div>
	);
}
