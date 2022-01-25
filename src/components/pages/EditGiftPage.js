import React from 'react';
import EditGiftForm from '../sections/EditGiftForm';

export default function EditGiftPage({ navigate, tokenData }) {
	return (
		<div className="container">
			<h1 className="display-6 text-center text-secondary">
				Editar <span className="text-tertiary">regalo</span>
			</h1>
			<EditGiftForm navigate={navigate} tokenData={tokenData} />
		</div>
	);
}
