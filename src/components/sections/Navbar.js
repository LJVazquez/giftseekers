import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

export default function Navbar({ userData, removeLoggedUserData }) {
	const userUrl = `users/${userData.id}`;

	const getLoginButton = () => {
		if (userData.id) {
			return (
				<>
					<div className="navbar-nav ms-lg-4">
						<Link to={userUrl} className="nav-item nav-link">
							{userData.username}
						</Link>
					</div>
					<div className="d-flex align-items-lg-center mt-3 mt-lg-0">
						<p
							onClick={removeLoggedUserData}
							className="btn btn-sm btn-secondary w-full w-lg-auto"
						>
							Logout
						</p>
					</div>
				</>
			);
		} else {
			return (
				<div className="d-flex align-items-lg-center mt-3 mt-lg-0">
					<Link to="/login" className="btn btn-sm bg-main w-full w-lg-auto">
						Login
					</Link>
				</div>
			);
		}
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-white px-0 py-3">
			<div className="container-xl">
				<Link to="/" className="navbar-brand">
					<img src={logo} className="h-8" alt="logo" />
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarCollapse"
					aria-controls="navbarCollapse"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarCollapse">
					<div className="navbar-nav mx-lg-auto">
						<Link to="/" className="nav-item nav-link">
							Home
						</Link>
						<Link to="/gifts/create" className="nav-item nav-link">
							Regalar
						</Link>
						<Link to="/search" className="nav-item nav-link">
							Ver regalos
						</Link>
					</div>
					{getLoginButton()}
				</div>
			</div>
		</nav>
	);
}
