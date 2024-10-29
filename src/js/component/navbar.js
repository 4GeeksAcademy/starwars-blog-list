import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const { favorites } = store;

    const handleRemoveFavorite = (name) => {
        actions.removeFavorite(name);
    };

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">
                        <img src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" alt="Bootstrap" width="80" height="50" />
                    </span>
                </Link>
                <div className="ml-auto">
                    <div className="dropdown" style={{ width: "200px" }}>
                        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Favorites
                        </button>
                        <ul className="dropdown-menu" style={{ width: "100%" }}>
                            {favorites.map((favorite, index) => (
                                <li key={index} className="d-flex justify-content-between align-items-center" style={{ width: "100%" }}>
                                    <span className="dropdown-item">{favorite}</span>
                                    <button className="btn btn-danger btn-sm m-2" onClick={() => handleRemoveFavorite(favorite)}>X</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};