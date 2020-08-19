import React from "react";

function Footer () {
    return (
<footer className="footer">
      <div className="container">
          <div className= "row">
          <a class="navbar-brand" href="#">
                <img src="../img/project3.png" style={{ width: "30px", height: "30px" }} className="d-inline-block align-top" alt="Chore Hack" /></a>
          {/* <h5 className="white-text" style={{}}>Chore Hack</h5> */}
          <p className="subtitle is-6"> <span className="icon"><i className="fas fa-broom"></i></span>Ayla</p>
          <p className="subtitle is-6"> <span className="icon"><i class="fas fa-laptop-house"></i></span>Liza</p>
          <p className="subtitle is-6"> <span className="icon"><i class="fas fa-hand-sparkles"></i></span>Hannah</p>
          <p className="subtitle is-6"> <span className="icon"><i class="fas fa-pump-soap"></i></span>Sierra</p>

          </div>
        
      </div>
    </footer>



    );
}

export default Footer;
