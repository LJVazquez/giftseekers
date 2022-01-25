import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorMessage from '../elements/ErrorMessage';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../graphql/queries/User';

export default function LoginForm({ setLoggedUserData, userData, navigate }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState(null);
	const [loginMutation] = useMutation(LOGIN, {
		onError: (e) => {
			console.log('e.message', e.message);
			setErrorMessage('Usuario y/o contraseña incorrecto/s');
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		const loginData = {
			username,
			password,
		};

		login(loginData);
	};

	const login = async (loginData) => {
		const loggedUser = await loginMutation({
			variables: { ...loginData },
		});
		setLoggedUserData(loggedUser.data.login);
	};

	const goToPrevPage = () => {
		navigate(-1);
	};

	if (userData.id) {
		return (
			<div className="card p-5">
				<button
					className="alert alert-success text-center"
					onClick={goToPrevPage}
				>
					Logeado como {userData.username}
					<br /> Click aquí para volver
				</button>
			</div>
		);
	}

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
					placeholder="Tu nombre de usuario"
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
					placeholder="Tu password"
					autoComplete="current-password"
					required
				/>
			</div>
			<div className="text-center">
				<button type="submit" className="btn bg-main w-full">
					Login
				</button>
				<hr />
				<p className="d-inline mx-2">¿No posee cuenta?</p>
				<Link to="/register" className="text-main">
					Registrarse
				</Link>
			</div>
		</form>
	);
}
