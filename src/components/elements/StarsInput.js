import React from 'react';

export default function StarsInput({ label, value, setter, amount }) {
	const starsAmount = Array(amount)
		.fill()
		.map((elem, i) => i + 1);

	return (
		<>
			<p className="form-label my-0">{label}</p>
			<div className="d-flex py-0">
				{starsAmount.map((radioValue) => {
					const colored = value >= radioValue;
					const style = { color: colored ? 'salmon' : '' };
					return (
						<div className="radio" key={radioValue}>
							<label htmlFor={radioValue} className="input-star" style={style}>
								❖
							</label>
							<input
								className="d-none"
								id={radioValue}
								type="radio"
								value={radioValue}
								onChange={(e) => setter(e.target.value)}
								checked={value === radioValue}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
}
