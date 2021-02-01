import React, { useState } from "react";
import "./authModal.css";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";

const AuthModal = ({ closeModal, modalOpen }) => {
  //State
  const [login, setlogin] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const rightPanelActive = login ? "right-panel-active" : "";
  const showHideClassName = modalOpen ? "display-block" : "display-none";

  //The Side Overlay
  const OverLay = () => (
    <div class="overlay">
      <div class="overlay-panel overlay-left">
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
      <div class="overlay-panel overlay-right">
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

  //Main Auth Modal
  const LoginSignUpModal = () => {
    return (
        <div class={`container ${rightPanelActive}`} id="container">
          <div class="form-container sign-up-container">
            <SignUp setlogin={setlogin}/>
          </div>
          <div class="form-container sign-in-container">
            <Login setlogin={setlogin} setForgotPassword={setForgotPassword}/>
          </div>
          <div class="overlay-container">
              <OverLay />
          </div>
        </div>
    );
  };

  const ForgotPasswordModal = () => {
    return (
      <div class="container" id="container">
        <div class="form-container forgot-pass-form-container">
          <form className="ls-form" action="#">
            <div className="ls-heading">Forgot Your Password</div>
            <span className="sub-text">Enter your email</span>
            <input className="auth-input" type="email" placeholder="Email" />
            <button className="ls-button">Get OTP</button>
            <input className="auth-input" type="text" placeholder="OTP" />
            <button className="ls-button back-button">Submit</button>
            <span className="sub-text">Success or fail message</span>
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
    );
  };

  return (
    <div className={`ls-modal ${showHideClassName}`}>
      <div className="ls-modal-content">
        <i
          class="far fa-times-circle close"
          onClick={() => {
            closeModal();
            setlogin(false);
            setForgotPassword(false);
          }}
        ></i>
        {!forgotPassword ? LoginSignUpModal() : ForgotPasswordModal()}
      </div>
    </div>
  );
};

export default AuthModal;
