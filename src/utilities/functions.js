export const createFilledArray = (amount) =>
	Array(amount)
		.fill()
		.map((elem, i) => i + 1);
