import React from 'react';
import CreateGiftForm from '../sections/CreateGiftForm';

export default function CreateGiftPage({ navigate, tokenData }) {
	return (
		<div className="container">
			<h1 className="display-6 text-center text-secondary">
				Crear <span className="text-tertiary">regalo</span>
			</h1>
			<CreateGiftForm navigate={navigate} tokenData={tokenData} />
		</div>
	);
}
