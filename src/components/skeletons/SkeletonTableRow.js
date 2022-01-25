import React from 'react';

export default function SkeletonTableRow({ type }) {
	const classes = `skeleton ${type} border border-light`;
	return (
		<tr className={classes}>
			<td>Fetching data...</td>
		</tr>
	);
}
