import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
export const PlanetCard = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.getPlanets()
    }, [])
    return (
        <div className="card-group row flex-nowrap overflow-auto">
            <div className="d-flex flex-row ">
                {store.planets.map((item, id) => (
                    <div className="card" style={{ width: '18rem', flex: "none", margin: "10px" }}>


                        <img src={"https://starwars-visualguide.com/assets/img/planets/" + (id + 2) + ".jpg"} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Population: {item.population} <br /> Terrain: {item.terrain}</p>
                            <Link to={"/planet/" + (id + 1)}>
                                <a href="#" className="btn btn-outline-primary">Learn More!</a>
                            </Link>
                            <i className="fa fa-heart btn btn-outline-warning ms-5" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}; 