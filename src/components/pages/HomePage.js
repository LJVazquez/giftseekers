import React from 'react';
import logo from '../../img/logo.png';
import MainPageGallery from '../sections/MainPageGallery';

const imgStyle = { height: 200, objectFit: 'contain' };

export default function HomePage() {
	return (
		<main className="container py-10">
			<div className="col text-center">
				<img className="my-5" src={logo} alt="logo" style={imgStyle} />
				<h1 className="lined-title display-6 text-secondary">
					<span> Ultimos regalos</span>
				</h1>
			</div>
			<MainPageGallery />
		</main>
	);
}
