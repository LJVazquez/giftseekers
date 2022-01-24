import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import ErrorMessage from '../elements/ErrorMessage';
import { REGISTER_USER } from '../../graphql/queries/User';

export default function RegisterForm({ setLoggedUserData, navigate }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState(null);
	const [newUser, setNewUser] = useState(null);
	const [registerUserMutation] = useMutation(REGISTER_USER);

	const handleSubmit = (e) => {
		e.preventDefault();

		const registerData = {
			username,
			password,
		};

		registerUser(registerData);
	};

	const registerUser = async (registerData) => {
		try {
			const newUser = await registerUserMutation({
				variables: {
					username: registerData.username,
					password: registerData.password,
				},
			});
			setNewUser(newUser.data);
			setLoggedUserData(newUser);
		} catch (e) {
			setErrorMessage('Error al registrar. Intente Luego.');
		}
	};

	if (newUser) {
		return (
			<div className="card p-5">
				<Link to="/login" className="text-main">
					<p className="alert alert-success text-center">
						Usuario {newUser.username} registrado exitosamente.
						<br /> Click aquí para ir al login
					</p>
				</Link>
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
