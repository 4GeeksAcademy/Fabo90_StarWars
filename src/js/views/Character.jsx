import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = props => {
	const [character, setCharacter] = useState();
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getCharacter(params.theid)
	}, [])
	useEffect(() => {
		setCharacter(store.character)
	}, [store.character])
	return (
		<div className="container mt-4">

			<div>
				<div class="row featurette">
					<div class="col-md-7 order-md-2">
						<h2 class="featurette-heading text-center">{character?.name}</h2>
						<p class="lead">The Force is strong with this one. Perhaps you think you are being treated unfairly? Nothing will stand in our way. I will finish what you started. No, I am your father! Impressive. Most impressive. Obi-Wan has taught you well. You have controlled your fear. Now, release your anger. Only your hatred can destroy me.</p>
					</div>
					<div class="col-md-5 order-md-1">
						<img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} />

					</div>
				</div>
				<hr class="featurette-divider"></hr>
				<div className="row">
					<div className="col-2 text-center"><strong>Name</strong> <br />{character?.name}</div>
					<div className="col-2 text-center"><strong>Birth Year</strong> <br /> {character?.birth_year}</div>
					<div className="col-2 text-center"><strong>Gender</strong> <br /> {character?.gender}</div>
					<div className="col-2 text-center"><strong>Height</strong> <br /> {character?.height}</div>
					<div className="col-2 text-center"><strong>Skin Color</strong> <br /> {character?.skin_color}</div>
					<div className="col-2 text-center"><strong>Eye Color</strong> <br /> {character?.eye_color}</div>
				</div>
			</div>
		</div>
	);
};

Character.propTypes = {
	id: PropTypes.string
};