import React, { useState } from "react";
import "./authModal.css";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import { connect } from "react-redux";
import Logout from './Auth/Logout';
const AuthModal = ({ closeModal, modalOpen, auth }) => {
  //State
  const [login, setlogin] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  //UI classes
  const rightPanelActive = login ? "right-panel-active" : "";
  const showHideClassName = modalOpen ? "display-block" : "display-none";

  //Side Overlay
  const OverLay = () => {
    return (
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <div className="ls-heading">Welcome Back!</div>
          <p>To keep connected with us please login with your personal info</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setlogin(false);
            }}
            className="ghost ls-button"
            id="signIn"
          >
            Sign In
          </button>
        </div>
        <div className="overlay-panel overlay-right">
          <div className="ls-heading">Hello, Friend!</div>
          <p>Enter your personal details and start journey with us</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setlogin(true);
            }}
            className="ghost ls-button"
            id="signUp"
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  };

  //Main Container
  const AuthModalContainer = () => {
    return (
      <div className="ls-modal-content">
        {CloseButton()}
        <div className={`ls-container ${rightPanelActive}`} id="container">
          <div className="form-container sign-up-container">
            <SignUp setlogin={setlogin} closeModal={closeModal}/>
          </div>
          <div className="form-container sign-in-container">
            <Login setlogin={setlogin} setForgotPassword={setForgotPassword} closeModal={closeModal}/>
          </div>
          <div className="overlay-container">
            <OverLay />
          </div>
        </div>
      </div>
    );
  };
  //Forgot Password Modal
  const ForgotPasswordModal = () => {
    return (
      <div className="fp-ls-modal-content">
        {CloseButton()}
        <div className="forgot-container" id="container">
          <div className="form-container forgot-pass-form-container">
            <form className="ls-form" action="#">
              <div className="ls-heading">Forgot Your Password</div>
              <span className="sub-text">Enter your email</span>
              <input className="auth-input" type="email" placeholder="Email" />
              <button className="ls-button">Get OTP</button>
              <input className="auth-input" type="text" placeholder="OTP" />
              <button className="ls-button back-button">Submit</button>
              <button
                className="ls-button"
                onClick={(e) => {
                  e.preventDefault();
                  setForgotPassword(false);
                }}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const CloseButton = () => (
    <i
      className="far fa-times-circle close"
      onClick={() => {
        closeModal();
        setlogin(false);
        setForgotPassword(false);
      }}
    ></i>
  );

  const LoggedInModal = () => (
    <div className="logout-ls-modal-content">
      {CloseButton()}
      <div className="forgot-container" id="container">
        <div className="logout-container">
          <Logout closeModal={closeModal}/>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`ls-modal ${showHideClassName}`}>
      {auth.loggedin
        ? LoggedInModal()
        : !forgotPassword
        ? AuthModalContainer()
        : ForgotPasswordModal()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AuthModal);
