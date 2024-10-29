import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        fetch("https://www.swapi.tech/api/planets")
            .then((result) => result.json())
            .then((data) => actions.setPlanetsData(data.results))
            .catch((error) => {
                console.error("Error fetching planet data:", error);
            });
    }, []);

    const handleAddFavorite = (name) => {
        actions.addFavorite(name);
    };

    return (
        <div className="container">
            <div className="row">
                <h3 className="text-danger">Planets</h3>
            </div>
            <div className="list-group list-group-horizontal inline-scroll" style={{ overflowX: "auto" }}>
                {store.planets.map((planet) => {
                    return (
                        <div key={planet.uid}>
                            <div className="card" style={{ width: "18rem", marginRight: "15px" }}>
                                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d71e379b-3f09-42b2-b3fe-26548591a750/devocdi-7a1e57d0-8bac-40d5-a70b-daea80cc8d57.png/v1/fill/w_894,h_894,q_70,strp/star_wars_planet_collection__1_by_ericwhitted_devocdi-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2Q3MWUzNzliLTNmMDktNDJiMi1iM2ZlLTI2NTQ4NTkxYTc1MFwvZGV2b2NkaS03YTFlNTdkMC04YmFjLTQwZDUtYTcwYi1kYWVhODBjYzhkNTcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BIy_1uGX86db9SWB8a01LDv3xzUP1OlA9OwnyEqflQc" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{planet.name}</h5>
                                    <p className="card-text">Climate: {planet.climate}</p>
                                    <p className="card-text">Population: {planet.population}</p>
                                    <hr className="my-4" />
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to={`/singleplanet/${planet.uid}`}>
                                            <span className="btn btn-outline-primary">Learn more!</span>
                                        </Link>
                                        <button className="btn btn-outline-danger" onClick={() => handleAddFavorite(planet.name)}>
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