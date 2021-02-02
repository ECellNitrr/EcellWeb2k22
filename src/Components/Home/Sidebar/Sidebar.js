import React from 'react';
import Logo from '../../../assets/logo-white.png';
import './style.css';

import { NavLink, Link } from 'react-router-dom';

const Sidebar = (props) => {
  // to set navbar fixed or static

  return (
    <div>
      <header style={{ position: props.position }}>
        <div className="leftBox">
          <img src={Logo} className="img-fluid" id="logo" />
        </div>

        {/* logged-in/logged-out part */}
        <div className="rightBox">
          <button id="signup" className="btn btn-outline-default">
            Login/Sign Up
          </button>
        </div>
      </header>
      <div id="nav-container">
        <div className="bg"></div>
        <div className="button" tabindex="0">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </div>
        <div id="nav-content" tabindex="0">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>
            <li>
              <NavLink to="/team">Team</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/sponsors">Sponsors</NavLink>
            </li>
            <li>
              <NavLink to="/speakers">Speakers</NavLink>
            </li>
            <li>
              <NavLink to="/investors">Investors</NavLink>
            </li>
            <li>
              <NavLink to="/startups">Startups</NavLink>
            </li>
            <li>
              <NavLink to="/mentors">Mentors</NavLink>
            </li>
            <li>
              <NavLink to="/caportal_info">CaPortal</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <a href="https://medium.com/e-cell-nit-raipur">Blogs</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
