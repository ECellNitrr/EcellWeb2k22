import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';

import logo from '../../assets/logo-white.png';
import Form from '../Form/form';
import OtpModal from '../Form/otp';
import LogoutModal from '../Form/logout';
import ForgetPass from '../Form/forgetpass';
import ChangePass from '../Form/changepass';
import CheckOtp from '../Form/checkotp';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/authActions';

export class navbar extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    updateUser: PropTypes.func.isRequired,
  };

  state = {
    active: false,
    forgetmail: '',
    forgetOTP: '',
  };

  setForgetMail = (mail) => {
    this.setState({ forgetmail: mail });
  };

  setForgetOTP = (otp) => {
    this.setState({ forgetOTP: otp });
  };

  render() {
    const loggedin = (
      <a
        href=""
        className="btn btn1"
        data-toggle="modal"
        data-target="#logoutModal"
      >
        {this.props.auth.first_name.toUpperCase()}{' '}
        {this.props.auth.last_name.toUpperCase()}
      </a>
    );
    const loggedout = (
      <a
        href=""
        id="login-signup-btn"
        className="btn btn1"
        data-toggle="modal"
        data-target="#loginRegModal"
      >
        LogIn/SignUp
      </a>
    );

    return (
      <div className="Navbar">
        <div className="logoback">
          <img
            className={`logo ${this.state.active ? 'active1' : ''}`}
            alt="ECell logo"
            src={logo}
          ></img>
        </div>
        <Form />
        <OtpModal />
        {/*<AdforcaModal/>*/}
        <ForgetPass handleForgetMail={this.setForgetMail} />
        <ChangePass
          otpToBeFilled={this.state.forgetOTP}
          emailToBeFilled={this.state.forgetmail}
        />
        <CheckOtp
          emailToBeFilled={this.state.forgetmail}
          handleOTPChange={this.setForgetOTP}
        />
        {this.props.auth.loggedin ? <LogoutModal /> : false}

        {/* hack for opening the modal when needed */}
        <a
          href=""
          className="btn btn1 d-none"
          data-toggle="modal"
          id="forgetPasModal_toggle"
          data-target="#forgetPasModal"
        ></a>
        <a
          href=""
          className="btn btn1 d-none"
          data-toggle="modal"
          id="otpModal_toggle"
          data-target="#otpModal"
        ></a>
        <a
          href=""
          className="btn btn1 d-none"
          data-toggle="modal"
          id="adforcaModal_toggle"
          data-target="#adforcaModal"
        ></a>
        <a
          href=""
          className="btn btn1 d-none"
          data-toggle="modal"
          id="changepass_toggle"
          data-target="#changePasModal"
        ></a>
        <a
          href=""
          className="btn btn1 d-none"
          data-toggle="modal"
          id="checkotp_toggle"
          data-target="#checkOtpModal"
        ></a>

        <h3 className="brand-header">ENTREPRENEURSHIP CELL</h3>
        {this.props.name}
        <h3 className="brand-header3">E-CELL</h3>
        <h4 className="brand-header2">NIT RAIPUR</h4>

        <div className="login-button1">
          {this.props.auth.loggedin ? loggedin : loggedout}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(navbar);
