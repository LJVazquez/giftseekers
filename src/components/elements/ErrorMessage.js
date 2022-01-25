import React from 'react';

export default function ErrorMessage({ children, setMessage }) {
	return (
		<div
			className="alert alert-danger alert-dismissible fade show"
			role="alert"
		>
			{children}
			<button
				type="button"
				className="btn-close text-xs text-success"
				onClick={() => setMessage(null)}
			></button>
		</div>
	);
}
