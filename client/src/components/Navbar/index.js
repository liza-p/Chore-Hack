import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">
                <img src="../img/project3.png" style={{ width: "30px", height: "30px" }} className="d-inline-block align-top" alt="" />
                Chore Hack
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/household">Manage Household</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/chores">Manage Chores</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{ float: "inline-end" }} href="#">Log Out</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;