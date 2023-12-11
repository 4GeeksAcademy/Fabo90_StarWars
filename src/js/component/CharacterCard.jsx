import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
export const CharacterCard = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.getCharacters()
    }, [])
    return (
        <div className="card-group row flex-nowrap overflow-auto">
            <div className="d-flex flex-row ">
                {store.characters.map((item, id) => (
                    <div className="card" style={{ width: '18rem', flex: "none", margin: "10px" }}>


                        <img src={"https://starwars-visualguide.com/assets/img/characters/" + (id + 1) + ".jpg"} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Gender: {item.gender} <br /> Hair color: {item.hair_color} <br /> Eye Color: {item.eye_color} </p>
                            <a href="#" className="btn btn-outline-primary">Learn More!</a>
                            <i className="fa fa-heart btn btn-outline-warning ms-5" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}; 