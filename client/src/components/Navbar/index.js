import React, { useState, useEffect } from "react";
import { NavLink, Link, Redirect } from "react-router-dom";
import API from "../../utils/API";
import { Button } from 'react-bootstrap';


function Navbar({ username, refreshUsername }) {
    const [redirect, setRedirect] = useState();

    const handleLogout = () => {
        console.log(redirect);
        API.logout()
            .then(() => {
                refreshUsername(); // update login status
                setRedirect("/login");
            })
            .catch(err => console.log(err));
    }

    // reset redirect string after every redirect
    useEffect(() => {
        setRedirect(undefined);
    }, [redirect]);

    return (
        redirect ? <Redirect to={redirect} /> :
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">
                <img src="../img/project3.png" style={{ width: "45px", height: "45px", top: "6px" }} className="d-inline-block " alt="" />
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
                </ul>
            </div>
            {username ? 
            <span>
                <span className="mr-2">Logged in as {username}</span>
                <Button variant="primary" onClick={handleLogout}>Log Out</Button> 
                </span> :
            <Link to="/login"><Button variant="primary">Sign in</Button></Link>
            }
        </nav>
    )
}

export default Navbar;