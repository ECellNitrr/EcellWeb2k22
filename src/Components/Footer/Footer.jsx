import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-white.png';

const Footer = () => {
  return (
    <div className="container">
      <div className="col-sm-4">
        <h3>Quick Links</h3>
        <div className="q-links">
          <Link to="/">Home</Link>
        </div>
        <div className="q-links">
          <Link to="/events">Events</Link>
        </div>
        <div className="q-links">
          <Link to="/speakers">Speakers</Link>
        </div>
        <div className="q-links">
          <Link to="/sponsors">Sponsors</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
