import React, { useState } from 'react';
import citiesList from '../../utilities/citiesList.json';
import BasicInput from '../elements/BasicInput';
import TextArea from '../elements/TextArea';
import Select from '../elements/Select';
import StarsInput from '../elements/StarsInput';
import MapInput from '../elements/MapInput';
import ErrorMessage from '../elements/ErrorMessage';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_GIFT } from '../../graphql/queries/Gift';

export default function CreateGiftForm({ navigate, tokenData }) {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [city, setCity] = useState(citiesList[0].data);
	const [location, setLocation] = useState('');
	const [lat, setLat] = useState('');
	const [lng, setLng] = useState('');
	const [difficulty, setDifficulty] = useState(1);
	const [imageUrl, setImageUrl] = useState('');
	const [newGift, setNewGift] = useState(null);
	const [errorMessage, setErrorMessage] = useState(null);
	const [createGiftMutation] = useMutation(CREATE_GIFT, {
		onError: (e) => {
			console.log('e.message', e.message);
			setErrorMessage(e.message);
		},
	});

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
			authorId: 2,
			imageUrl,
		};

		const newGift = await createGiftMutation({ variables: { ...formData } });
		setNewGift(newGift.data.createGift);
	};

	if (newGift) {
		return (
			<div className="card mt-5 p-5">
				<Link to={`/gifts/${newGift.id}`} className="text-main">
					<p className="alert alert-success text-center">
						"{newGift.name}" creado exitosamente.
						<br /> Click aquí para ir al regalo
					</p>
				</Link>
			</div>
		);
	}

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
