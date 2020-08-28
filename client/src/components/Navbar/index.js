import React from "react";
import { NavLink, Link } from "react-router-dom";
import API from "../../utils/API";
import { Button } from 'react-bootstrap';
import { useChoreContext } from "../../utils/GlobalState";
import refreshUserData from "../../utils/refreshUserData";
import "./style.css";

function Navbar() {
    const [state, dispatch] = useChoreContext();

    const handleLogout = () => {
        API.logout()
            .then(() => {
                refreshUserData(dispatch); // update login status
            })
            .catch(err => console.log(err));
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand p-0 logo-text" to="/">
                <img src="../img/project3.png" style={{ height: "55px" }} className="d-inline-block logo" alt="logo" />
                Chore Hack
            </Link>
            {
            state.username ? 
                <>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/dashboard" >Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/household">Manage Household</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/chores">Manage Chores</NavLink>
                            </li>
                        </ul>
                    </div>
                    <span className="mr-3">Logged in as {state.username}</span>
                    <Button variant="primary" onClick={handleLogout}>Log Out</Button> 
                </> :
                <>
                    <div className="collapse navbar-collapse" />
                    <div>
                        <Link to="/login" className="mr-3">Log in</Link>
                        <Link to="/signup"><Button variant="primary">Sign up</Button></Link>
                    </div>
                </>
            }
        </nav>
    )
}

export default Navbar;