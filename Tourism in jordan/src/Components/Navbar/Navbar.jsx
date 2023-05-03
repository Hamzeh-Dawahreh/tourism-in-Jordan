import React from "react";

import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <header>
        {" "}
        <nav className="navbar navbar-expand-lg navbar-dark custom-nav pe-3">
          <a className="navbar-brand" href="index.html">
            <div className="logo-container">
              <span>Tourism in Jordan</span>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ">
            <div className="nav-item Items-Container">
              <ul className="navbar-nav">
                <li className="nav-item ">Home</li>
                <li className="nav-item">Services</li>
                <li className="nav-item">Cards</li>
                <li className="nav-item">Contact us</li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
