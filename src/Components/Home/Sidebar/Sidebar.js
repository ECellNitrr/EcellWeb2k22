import React from 'react';
import Logo from '../../../assets/logo-white.png';
import './style.css';

import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions/authActions';
import AuthModal from './AuthModal';
const Sidebar = (props) => {
  const [details, setDetails] = useState({
    active: false,
    forgetmail: '',
    forgetOTP: '',
  });

  const { active, forgetmail, forgetOTP } = details;

  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  const setForgetMail = (mail) => {
    setDetails({ forgetmail: mail });
  };

  const setForgetOTP = (otp) => {
    setDetails({ forgetOTP: otp });
  };

  useEffect(() => {
    document.onclick = (args) => {
      if (args.target.id === 'dialog-target') {
        console.log('called');
      }
    };
  }, []);

  const loggedout = (
    <button
      id="signup"
      className="btn btn-outline-default"
      data-toggle="modal"
      data-target="#loginRegModal"
      onClick={openModal}
    >
      Login/Sign Up
    </button>
  );

  const loggedin = (
    <button
      id="signup"
      className="btn btn-outline-default"
      data-toggle="modal"
      data-target="#logoutModal"
      onClick={openModal}
    >
      {props.auth.first_name.toUpperCase()} {props.auth.last_name.toUpperCase()}
    </button>
  );
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
      <div id="dialog-target">
        <AuthModal modalOpen={modalOpen} closeModal={closeModal} />
      </div>
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
