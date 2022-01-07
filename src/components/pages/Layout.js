import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../elements/Footer';
import Navbar from '../sections/Navbar';
import LoginPage from './LoginPage';

const style = { height: '100vh' };

export default function Layout({ children, userData, removeLoggedUserData }) {
	return (
		<div className="d-flex flex-column" style={style}>
			<Navbar userData={userData} removeLoggedUserData={removeLoggedUserData} />
			{children}
			<Footer />
		</div>
	);
}
