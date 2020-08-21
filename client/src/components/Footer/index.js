import React from "react";
import "./style.css";

function Footer () {
    return (
<footer className="footer fixed-bottom">
      <div className="container text-center">
          <div className= "row">
          <a class="navbar-brand" href="#">
                <img src="../img/project3.png" style={{ width: "30px", height: "30px" }} className="d-inline-block " alt="Chore Hack" /></a>
        <p style={{ margin: '10px' }} className="subtitle is-6">Made By:</p>
          <p style={{ margin: '10px' }} className="subtitle is-6"> <span className="icon"><i className="fas fa-broom"></i></span>Ayla</p>
          <p style={{ margin: '10px' }} className="subtitle is-6"> <span className="icon"><i class="fas fa-laptop-house"></i></span>Liza</p>
          <p style={{ margin: '10px' }} className="subtitle is-6"> <span className="icon"><i class="fas fa-hand-sparkles"></i></span>Hannah</p>
          <p style={{ margin: '10px' }} className="subtitle is-6"> <span className="icon"><i class="fas fa-pump-soap"></i></span>Sierra</p>

          </div>
        
      </div>
    </footer>





    );
}

export default Footer;
