import React from "react";
import "./Header.css";

function Header() {
  const scrollToPosition = (position) => {
    window.scrollTo({ top: position, behavior: 'smooth' });
  };

  const positions = {
    top: 0,
    middle1: window.innerHeight,
    middle2: window.innerHeight * 2,
    middle3: window.innerHeight * 3,
    bottom: document.documentElement.scrollHeight,
  };

  return (
    <div className="navbarnavbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand portfolio-name" href="0" style={{ fontWeight: 'bolder', fontFamily: "Arial, Helvetica, sans-serif", color: "black", fontSize: "22px" }}>Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <button className="nav-link btn" onClick={() => scrollToPosition(positions.top)}>Home</button>
              <button className="nav-link btn" onClick={() => scrollToPosition(positions.middle1)}>About</button>
              <button className="nav-link btn" onClick={() => scrollToPosition(positions.middle2)}>Projects</button>
              <button className="nav-link btn" onClick={() => scrollToPosition(positions.middle2)}>Skills</button>
              <button className="nav-link btn" onClick={() => scrollToPosition(positions.middle3)}>Contact</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
