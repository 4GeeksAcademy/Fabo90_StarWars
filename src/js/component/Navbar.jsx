import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { useEffect, useContext } from "react";



export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<div className="container-fluid px-5">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link to={"/"}>
					<p className="btn btn-outline-dark fw-bold btn-lg m-3">STAR WARS</p>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse flex-row-reverse " id="navbarNavDropdown">
					<ul className="navbar-nav ">
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle btn btn-primary text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								{store.favorite.map((ele, ind) => (

									<li>
										<a className="dropdown-item" href="#" key={ind}>{ele} <i className="fas fa-trash-alt" onClick={() => actions.deleteFavorite(ind)} /></a>
									</li>
								))}

							</ul>
						</li>
					</ul>
				</div>
			</nav>
		</div>
		/* <nav className="navbar navbar-expand-sm navbar-light" aria-label="Third navbar example">
			<div className="container">
				<a className="navbar-brand" href="#">STAR WARS</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
	
				<div className="collapse navbar-collapse" id="navbarsExample03">
				<ul className="navbar-nav ms-auto mb-2 mb-sm-0">
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
					Favorites
					</a>
					<div class="dropdown-menu">
					<a class="dropdown-item" href="#">Action</a>
					<a class="dropdown-item" href="#">Another action</a>
					<a class="dropdown-item" href="#">Something else here</a>
					</div>
				</li>
				</ul>
				</div>
			</div>
		</nav> */


	);
};
