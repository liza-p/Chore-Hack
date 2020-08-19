import React from "react";

function Navbar (){
    return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
    <img src="../img/project3.png" style = {{width: "30px", height:"30px"}} className="d-inline-block align-top" alt=""/>
    Chore Hack
  </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href=" ">Dashboard <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href=" ">Manage Household</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href=" ">Manage Chores</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" style={{float: "inline-end"}}  href=" ">Log Out</a>
            </li>
            </ul>
        </div>
        </nav>
    )
}

export default Navbar;