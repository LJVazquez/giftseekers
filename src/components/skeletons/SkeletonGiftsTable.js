import React from 'react';
import SkeletonElement from './SkeletonElement';

export default function SkeletonGiftsTable() {
	return (
		<div className="table-responsive rounded-5 border">
			<table className="table table-hover table-nowrap">
				<thead className="bg-main">
					<tr>
						<th scope="col"></th>
					</tr>
				</thead>

				<div className="px-5">
					<SkeletonElement type="block" />
					<SkeletonElement type="block" />
					<SkeletonElement type="block" />
					<SkeletonElement type="block" />
				</div>
			</table>
		</div>
	);
}
