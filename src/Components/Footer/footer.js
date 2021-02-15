import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-white.png';
import './footer.css';

const footer = () => {
  return (
    <div className="footer">
      <div className="footercontainer">
        <div className="row">
          <div className="box-1 box col-sm-4">
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
          <div className="box-2 box col-sm-4">
            <img src={logo} />
            <h2>The Entrepreneurship Cell</h2>
            <h5 className="pt-2">NIT Raipur</h5>
            <p>&copy; 2020-21 All Rights Reserved.</p>
          </div>
          <div className="box-3 box col-sm-4">
            <h2>Leaders Beyond Borders</h2>
            <div>
              <h5 className="pt-2">Follow Us On</h5>
              <div className="social_links">
                <a href="https://www.facebook.com/ecellnitrr/" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a
                  href="https://www.instagram.com/ecell.nitraipur/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/ecell_nitrr"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a
                  href="https://in.linkedin.com/company/entrepreneurship-cell-nit-raipur"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="policy">
              <Link to="/terms">Terms and Conditions</Link>
              <br></br>
              <Link to="/policy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center bottom">Designed By Team E-Cell NITRR</p>
    </div>
  );
};

export default footer;
