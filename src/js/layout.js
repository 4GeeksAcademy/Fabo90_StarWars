import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/Scroll.jsx";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo";
import { Character } from "./views/Character.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/footer";
import { Planet } from "./views/Planet.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="*" element={<h1>Not found!</h1>} />
						<Route path="/character/:theid" element={<Character />} />
						<Route path="/planet/:theid" element={<Planet />} />
					</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
