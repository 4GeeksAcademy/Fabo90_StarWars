import React from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard.jsx";
import { PlanetCard } from "../component/PlanetCard.jsx";

export const Home = () => {
	return (
		<>
			<div className="container-fluid px-5">
				<h1 className="display-5 bs-danger fw-bold text-danger">Characters</h1>
				<CharacterCard />
				<h1 className="display-5 bs-danger fw-bold text-danger">Planets</h1>
				<PlanetCard />
			</div>
		</>
	)
}
