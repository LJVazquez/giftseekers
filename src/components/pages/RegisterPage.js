import React from 'react';
import kirby from '../../img/worried-kirby.png';
import RegisterForm from '../sections/RegisterForm';

export default function LoginPage({ setLoggedUserData, navigate }) {
	return (
		<div className="container mt-5" id="login-form">
			<div className="row align-items-center justify-content-center">
				<div className="col-md text-center">
					<img src={kirby} alt="login" style={{ height: 400 }} />
				</div>
				<div className="col-md">
					<RegisterForm
						setLoggedUserData={setLoggedUserData}
						navigate={navigate}
					/>
				</div>
			</div>
		</div>
	);
}
