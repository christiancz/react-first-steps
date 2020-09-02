import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      {/* <a className="navbar-brand">Navbar</a> */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="active"
              exact
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/login"
              className="nav-link"
              activeClassName="active"
              exact
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}