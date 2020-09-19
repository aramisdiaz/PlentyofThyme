import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {
    return (


        <nav className="navbar navbar-expand-lg text-light">
            <div className="container">
                <Link className="navbar-brand" to="/search">Plenty of Thyme</Link>
                <ul className="navbar-nav">
                <li className="nav-item">
                        <Link
                            to="/search"
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        >Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/pantry"
                            className={window.location.pathname === "/pantry" ? "nav-link active" : "nav-link"}
                        >Your Pantry</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/saved"
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                        >Your Pins</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}


export default Navbar;