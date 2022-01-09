import React from 'react';

export default function Select({ label, value, setter, options }) {
	const id = label.replace(/\s/g, '');
	return (
		<div className="mb-5">
			<label className="form-label" htmlFor={id}>
				{label}
			</label>
			<select
				className="form-select"
				value={value}
				onChange={(e) => setter(e.target.value)}
				id={id}
			>
				{options.map((option) => (
					<option key={option.data} value={option.data}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
}
