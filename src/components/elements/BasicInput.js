import React from 'react';

export default function BasicInput({
	label,
	value,
	setter,
	placeholder,
	type,
	required,
}) {
	const id = label.replace(/\s/g, '');
	return (
		<div className="mb-5">
			<label className="form-label" htmlFor={id}>
				{label}
			</label>
			<input
				value={value}
				id={id}
				type={type}
				onChange={(e) => setter(e.target.value)}
				className="form-control"
				placeholder={placeholder}
				required={required}
			/>
		</div>
	);
}
