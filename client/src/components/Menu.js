import React from "react";
import { Link } from "react-router-dom";

function Menu() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <Link to="/" className="navbar-brand h1 mb-0 text-black" href="/">
          Nashta
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-4">
              <Link to="/add" className="no-underline nav-link text-black">
                  <i className="fa fa-plus mr-sm-2"></i>Add Event{" "}
                  <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link to="/dashboard" className="nav-link text-black">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Menu;