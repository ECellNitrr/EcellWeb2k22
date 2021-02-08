import React from "react";

const Login = ({ setlogin, setForgotPassword }) => {
  return (
    <form className="ls-form" action="#">
      <div className="ls-heading">Sign in</div>
      <span className="sub-text">or use your account</span>
      <input className="auth-input" type="email" placeholder="Email" />
      <input className="auth-input" type="password" placeholder="Password" />
      <a
        onClick={(e) => {
          e.preventDefault();
          setForgotPassword(true);
        }}
        className="ls-fpassword"
      >
        Forgot your password?
      </a>
      <button className="ls-button">Sign In</button>
      <p className="mob-text">Do not have an account?</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          setlogin(true);
        }}
        className="mob-button ls-button"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Login;
