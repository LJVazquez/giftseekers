import React, { useEffect, useState } from 'react';
import { updateGift, fetchGiftData } from '../../utilities/requests';
import citiesList from '../../utilities/citiesList.json';
import BasicInput from '../elements/BasicInput';
import TextArea from '../elements/TextArea';
import Select from '../elements/Select';
import StarsInput from '../elements/StarsInput';
import MapInput from '../elements/MapInput';
import ErrorMessage from '../elements/ErrorMessage';
import { Link, useParams } from 'react-router-dom';
import Message from '../elements/Message';

export default function EditGiftForm({ navigate, tokenData }) {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [city, setCity] = useState(citiesList[0].data);
	const [location, setLocation] = useState('');
	const [lat, setLat] = useState('');
	const [lng, setLng] = useState('');
	const [difficulty, setDifficulty] = useState(1);
	const [imageUrl, setImageUrl] = useState('');

	const [errorMessage, setErrorMessage] = useState(null);
	const [message, setMessage] = useState(null);

	const id = Number(useParams().id);
	const giftUrl = `/gifts/${id}`;

	useEffect(() => {
		fetchAndSetData();
	}, []);

	const fetchAndSetData = async () => {
		const gift = await fetchGiftData(id);
		setName(gift.name);
		setDescription(gift.description);
		setCity(gift.city);
		setLocation(gift.location);
		setLat(gift.lat);
		setLng(gift.lng);
		setDifficulty(gift.difficulty);
		setImageUrl(gift.imageUrl);
	};

	const setMessageTimeout = (message, ms) => {
		setMessage(message);
		setTimeout(() => setMessage(null), ms);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = {
			name,
			description,
			city,
			location,
			lat,
			lng,
			difficulty,
			imageUrl,
		};
		try {
			await updateGift(tokenData, formData, id);
			setMessageTimeout('Regalo actualizado exitosamente.', 5000);
		} catch (e) {
			setErrorMessage(e.message);
		}
	};
	return (
		<form className="card p-5 my-5" onSubmit={handleSubmit}>
			{message && <Message setMessage={setMessage}>{message}</Message>}
			{errorMessage && (
				<ErrorMessage setMessage={setErrorMessage}>{errorMessage}</ErrorMessage>
			)}
			<div className="row mb-5">
				<div className="col-md">
					<BasicInput
						label="Nombre"
						value={name}
						setter={setName}
						placeholder="Ingrese nombre"
						required={true}
					/>
					<StarsInput
						label="Dificultad"
						setter={setDifficulty}
						value={difficulty}
						amount={5}
					/>
					<TextArea
						label="Descripcion"
						value={description}
						setter={setDescription}
						placeholder="Ingrese la descripción del regalo, ubicación exacta, puntos de referencia, etc."
						required={true}
					/>
					<BasicInput
						label="Ubicacion"
						value={location}
						setter={setLocation}
						placeholder="Ingrese ubicación"
						required={true}
					/>
					<BasicInput
						label="Url de imagen"
						value={imageUrl}
						setter={setImageUrl}
						placeholder="Ingrese url de la imagen"
						required={true}
					/>
				</div>
				<div className="col-md">
					<Select
						label="Ciudad"
						value={city}
						options={citiesList}
						setter={setCity}
					/>
					{lat && lng && (
						<MapInput
							label="Ubicacion geografica"
							lat={lat}
							lng={lng}
							setLat={setLat}
							setLng={setLng}
						/>
					)}
				</div>
			</div>

			<div className="row">
				<div className="d-grid col-9">
					<button type="submit" className="btn btn-tertiary">
						Actualizar
					</button>
				</div>
				<div className="d-grid col">
					<Link to={giftUrl} className="btn btn-secondary">
						Volver
					</Link>
				</div>
			</div>
		</form>
	);
}
