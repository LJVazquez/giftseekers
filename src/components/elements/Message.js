import React from 'react';

export default function Message({ children, setMessage }) {
	return (
		<div
			className="alert alert-success alert-dismissible fade show mb-5"
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
