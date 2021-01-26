import React from 'react';
import Logo from '../../../assets/logo-white.png';
import './style.css';

const Sidebar = () => {
  return (
    <div>
      <header>
        <div className="leftBox">
          <img src={Logo} className="img-fluid" id="logo" />
        </div>
        <div className="rightBox">
          <button id="login" className="btn">
            Login
          </button>
          <button id="signup" className="btn btn-outline-primary">
            Sign Up
          </button>
        </div>
      </header>
      <div id="nav-container">
        <div class="bg"></div>
        <div class="button" tabindex="0">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </div>
        <div id="nav-content" tabindex="0">
          <ul>
            <li>
              <a href="#0">Home</a>
            </li>
            <li>
              <a href="#0">Events</a>
            </li>
            <li>
              <a href="#0">Teams</a>
            </li>
            <li>
              <a href="#0">Gallery</a>
            </li>
            <li>
              <a href="#0">Sponsors</a>
            </li>
            <li>
              <a href="#0">Speakers</a>
            </li>
            <li>
              <a href="#0">Investers</a>
            </li>
            <li>
              <a href="#0">Startups</a>
            </li>
            <li>
              <a href="#0">Mentors</a>
            </li>
            <li>
              <a href="#0">CAPortal</a>
            </li>
            <li>
              <a href="#0">Register</a>
            </li>
            <li>
              <a href="#0">Blogs</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
