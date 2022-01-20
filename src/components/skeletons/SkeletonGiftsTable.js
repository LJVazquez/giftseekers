import React from 'react';
import SkeletonTableRow from './SkeletonTableRow';

export default function SkeletonGiftsTable() {
	return (
		<div className="table-responsive rounded-5 border">
			<table className="table table-hover table-nowrap">
				<thead className="bg-main">
					<tr>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					<SkeletonTableRow type="block" />
					<SkeletonTableRow type="block" />
					<SkeletonTableRow type="block" />
					<SkeletonTableRow type="block" />
				</tbody>
			</table>
		</div>
	);
}
