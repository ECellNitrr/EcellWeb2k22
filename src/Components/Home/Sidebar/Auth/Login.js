import React, { useState } from "react";
import { connect } from "react-redux";

const Login = ({ setlogin, setForgotPassword }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState("");

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (email.length < 1) {
      setFormError("Email is required");
    }

    const verify_email = (email) => {
      let re = /\S+@\S+\.\S+/;
      return re.test(String(email).toLowerCase());
    };

    if (verify_email(email) === false) {
      setFormError("Email is Invalid");
      return;
    }

    if (password.length < 1) {
      setFormError("Password is required");
      return;
    }

    if (this.password.value.length < 8) {
      setFormError("Password should have minimum 8 characters");
      return;
    }
  };

  return (
    <form className="ls-form" onSubmit={(e) => onSubmit(e)}>
      <div class="alert alert-danger" role="alert">
        This is a danger alert—check it out!
      </div>
      <div className="ls-heading">Sign in</div>
      <span className="sub-text">or use your account</span>
      <input
        className="auth-input"
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => onChange(e)}
      />
      <div className="error-text">{formError && formError}</div>
      <input
        className="auth-input"
        type="password"
        placeholder="Password"
        name="password"
        minLength="8"
        value={password}
        onChange={(e) => onChange(e)}
      />
      <div className="error-text">{formError && formError}</div>
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
