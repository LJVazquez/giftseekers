import React from 'react';

export default function TextArea({
	label,
	value,
	setter,
	placeholder,
	required,
}) {
	const id = label.replace(/\s/g, '');
	return (
		<div className="mb-3">
			<label htmlFor={label} className="form-label">
				{label}
			</label>
			<textarea
				className="form-control"
				id={id}
				value={value}
				rows="3"
				resize="none"
				onChange={(e) => setter(e.target.value)}
				placeholder={placeholder}
				required={required}
			></textarea>
		</div>
	);
}
