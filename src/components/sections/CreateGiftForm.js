import React, { useState } from 'react';
import { createGift } from '../../utilities/requests';
import citiesList from '../../utilities/citiesList.json';
import { Link } from 'react-router-dom';
import BasicInput from '../elements/BasicInput';
import TextArea from '../elements/TextArea';
import Select from '../elements/Select';
import StarsInput from '../elements/StarsInput';
import MapInput from '../elements/MapInput';
import ErrorMessage from '../elements/ErrorMessage';

export default function CreateGiftForm({ navigate, tokenData }) {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [city, setCity] = useState(citiesList[0].data);
	const [location, setLocation] = useState('');
	const [lat, setLat] = useState('');
	const [lng, setLng] = useState('');
	const [difficulty, setDifficulty] = useState(1);
	const [imageUrl, setImageUrl] = useState('');

	const [errorMessage, setErrorMessage] = useState(null);

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
			const newGift = await createGift(tokenData, formData);
			const newGiftUrl = `/gifts/${newGift.id}`;
			navigate(newGiftUrl);
		} catch (e) {
			setErrorMessage(e.message);
		}
	};
	return (
		<form className="card p-5 my-5" onSubmit={handleSubmit}>
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
					<MapInput
						label="Ubicacion geografica"
						setLat={setLat}
						setLng={setLng}
					/>
				</div>
			</div>

			<div>
				<button type="submit" className="btn btn-tertiary w-full">
					Crear
				</button>
			</div>
		</form>
	);
}
