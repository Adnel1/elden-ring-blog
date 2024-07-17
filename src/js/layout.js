import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import background from "./img/bg.jpg";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import HomeGrid from './pages/homegrid';
import Details from './pages/details'

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div style={{
			backgroundImage: `url(${background})`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundAttachment: 'fixed',
			minHeight: '100vh',
			width: '100%',
			display: 'flex',
			flexDirection: 'column'
		}}>
			<BrowserRouter basename={basename}>
				<Navbar />
				<Routes>
					<Route path="/" element={<HomeGrid />} />
					<Route path="/details/:id" element={<Details />} />
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
