import React from "react";
import "./style.css";


function Footer() {
    return (
        <footer className="footer fixed-bottom">
            <div className="container text-center">
                <div className="row">
                    <span className="navbar-brand">
                        {/* <img src="../img/project3.png" style={{ width: "30px", height: "30px" }} className="d-inline-block " alt="Chore Hack" /> */}
                        </span>
                    <p style={{ margin: '10px', color: "GrayText" }} className="subtitle is-6">Built By:</p>
                    <p style={{ margin: '10px', color: "GrayText" }} className="subtitle is-6"> <span className="icon"><i className="fas fa-broom"></i></span> Ayla</p>
                    <p style={{ margin: '10px', color: "GrayText" }} className="subtitle is-6"> <span className="icon"><i className="fas fa-laptop-house"></i></span>Liza</p>
                    <p style={{ margin: '10px', color: "GrayText" }} className="subtitle is-6"> <span className="icon"><i className="fas fa-hand-sparkles"></i></span>Hannah</p>
                    <p style={{ margin: '10px', color: "GrayText" }} className="subtitle is-6"> <span className="icon"><i className="fas fa-pump-soap"></i></span>Sierra</p>
                    <p style={{ color: "GrayText", marginRight: '30rem' }} className="subtitle is-6"> </p>
                    <p style={{ margin: '10px', color: "GrayText" }} className="subtitle is-6"> 2020, All Rights Reserved </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
