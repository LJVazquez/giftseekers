import React from 'react';
import { Link } from 'react-router-dom';

const imgStyle = { height: 200, objectFit: 'cover' };

export default function MainPageGalleryCard({ gift }) {
	const startDate = new Date(gift.startDate);
	const dateLabel = startDate.toLocaleDateString();
	const description =
		gift.description.length > 35
			? gift.description.slice(0, 35) + '...'
			: gift.description;

	const giftUrl = `/gifts/${gift.id}`;

	return (
		<div className="col-lg-4 col-md-6 col-12 mb-5">
			<Link to={giftUrl}>
				<div class="card">
					<div class="p-2">
						<img
							alt={gift.name}
							src={gift.imageUrl}
							class="card-img"
							style={imgStyle}
						/>
					</div>
					<div class="card-body">
						<h3 class="h4">{gift.name}</h3>

						<span class="d-block text-muted text-sm font-semibold">
							{dateLabel}
						</span>
						<p class="mt-4 mb-6">{description}</p>
						<div class="d-flex align-items-center">
							<div class="">
								<p
									href="#"
									class="text-heading text-primary-hover text-sm font-semibold"
								>
									{gift.seekers.length} seekers
								</p>
							</div>
							<div class="ms-auto text-end">
								{gift.active ? (
									<span class="badge badge-lg bg-success text-heading">
										Activo
									</span>
								) : (
									<span class="badge badge-lg bg-secondary text-heading">
										Inactivo
									</span>
								)}
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
