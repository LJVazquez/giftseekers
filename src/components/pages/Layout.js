import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../elements/Footer';
import Navbar from '../sections/Navbar';
import LoginPage from './LoginPage';

export default function Layout({ children, userData }) {
	return (
		<div>
			<Navbar userData={userData} />
			{children}
			<Footer />
		</div>
	);
}
