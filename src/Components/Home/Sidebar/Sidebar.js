import React, { useState, useEffect } from "react";
import Logo from "../../../assets/logo-white.png";
import "./style.css";

import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../actions/authActions";
import AuthModal from "../../Form/AuthModal";
const Sidebar = (props) => {
  const [details, setDetails] = useState({
    active: false,
    forgetmail: "",
    forgetOTP: "",
  });

  const { active, forgetmail, forgetOTP } = details;

  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  // const setForgetMail = (mail) => {
  //   setDetails({ forgetmail: mail });
  // };

  // const setForgetOTP = (otp) => {
  //   setDetails({ forgetOTP: otp });
  // };

  useEffect(() => {
    document.onclick = (args) => {
      if (args.target.id === "dialog-target") {
      }
    };
  }, []);

  const loggedout = (
    <div className="btn btn-outline-default modal-button-ls">
      <button id="signup" onClick={openModal}>
        Login/Sign Up
      </button>
    </div>
  );

  const loggedin = (
    <div
      onClick={openModal}
      className="btn btn-outline-default modal-button-ls"
    >
      <button id="signup">
        {props.auth.first_name.toUpperCase()}{" "}
        {props.auth.last_name.toUpperCase()}
      </button>
    </div>
  );
  return (
    <div className="sidebarTop">
      <header>
        {props.hideLogo ? (
          <div></div>
        ) : (
          <Link to="/">
            <div className="leftBox">
              <img src={Logo} className="img-fluid" id="logo" />
            </div>
          </Link>
        )}
        {/* logged-in/logged-out part */}
        {props.hideLoginSignUpBtn ? (
          <div></div>
        ) : (
          <div className="rightBox">
            {props.auth.loggedin ? loggedin : loggedout}
          </div>
        )}
      </header>
      <div id="dialog-target">
        <AuthModal modalOpen={modalOpen} closeModal={closeModal} />
      </div>
      <div id="nav-container">
        <div class="bg"></div>
        {props.hideMenuBtn ? (
          <div />
        ) : (
          <div class="button" tabIndex="0">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </div>
        )}
        <div id="nav-content" tabIndex="0">
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
            {/* <li>
              <NavLink to="/startups">Startups</NavLink>
            </li> */}
            <li>
              <NavLink to="/mentors">Mentors</NavLink>
            </li>
            {/* <li>
              <NavLink to="/caportal_info">CaPortal</NavLink>
            </li> */}
            <li>
              <a href="https://medium.com/e-cell-nit-raipur">Blogs</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(Sidebar);
