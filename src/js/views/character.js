// Characters.js

import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people")
            .then((result) => result.json())
            .then((data) => actions.setPeopleData(data.results));
    }, []);

    return (
        <div className="container">
            <div className="row">
                <h3 className="text-danger">Characters</h3>
            </div>
            <div className="list-group list-group-horizontal inline-scroll" style={{ overflowX: "auto" }}>
                {store.people.map((person) => {
                    return (
                        <div key={person.uid}>
                            <div className="card" style={{ width: "18rem", marginRight: "15px" }}>
                                <img src="https://m.media-amazon.com/images/I/81nLIa8kk3L.jpg" className="card-img-top" alt="..." />   
                                <div className="card-body">
                                    <h5 className="card-title">{person.name}</h5>
                                    <p className="card-text">Gender: {person.gender}</p>
                                    <p className="card-text">Hair color: {person.hair_color}</p>
                                    <p className="card-text">Eye color: {person.eye_color}</p>
                                    <hr className="my-4" />
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to={"/single/" + person.uid}>
                                            <span className="btn btn-outline-primary">Learn more!</span>
                                        </Link>
                                        <button className="btn btn-outline-danger" onClick={() => actions.addFavorite(person.name)}>
                                            <i className="fa fa-heart" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <br />
        </div>
    );
};