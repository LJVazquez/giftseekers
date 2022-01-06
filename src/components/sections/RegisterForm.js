import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../../utilities/requests';
import ErrorMessage from '../elements/ErrorMessage';

export default function RegisterForm({ setLoggedUserData, navigate }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		const registerData = {
			username,
			password,
		};

		register(registerData);
	};

	const register = async (registerData) => {
		try {
			const newUserData = await registerUser(registerData);
			setLoggedUserData(newUserData);
			navigate('/');
		} catch (e) {
			setErrorMessage('Error al registrar. Intente Luego.');
		}
	};

	return (
		<form className="card p-5" onSubmit={(e) => handleSubmit(e)}>
			{errorMessage && (
				<ErrorMessage setMessage={setErrorMessage}>{errorMessage}</ErrorMessage>
			)}

			<div className="mb-5">
				<label className="form-label" htmlFor="email">
					Usuario
				</label>
				<input
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					type="text"
					className="form-control"
					id="email"
					placeholder="Ingrese un nombre de usuario"
					required
				/>
			</div>
			<div className="mb-5">
				<label className="form-label" htmlFor="password">
					Password
				</label>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					className="form-control"
					id="password"
					placeholder="Ingrese un password"
					autoComplete="current-password"
					required
				/>
			</div>
			<div className="text-center">
				<button type="submit" className="btn bg-main w-full">
					Registrarse
				</button>
				<hr />
				<p className="d-inline mx-2">Ya posee cuenta?</p>
				<Link to="/login" className="text-main">
					Ir al login
				</Link>
			</div>
		</form>
	);
}
