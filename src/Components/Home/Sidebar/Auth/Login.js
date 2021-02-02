import React, { useState } from "react";

const Login = ({ setlogin, setForgotPassword }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email.length < 1) {
      return;
    }
    if (password.length < 1) {
      return;
    }
    const verify_email = (email) => {
      let re = /\S+@\S+\.\S+/;
      return re.test(String(email).toLowerCase());
    };
    if (!verify_email(email)) {
      return;
    }
    if (password.length < 8) {
      return;
    }
    //login(email, password);
  };

  return (
    <form className="ls-form" onSubmit={(e) => onSubmit(e)}>
      <div className="alert alert-danger network-error" role="alert">Network Error</div>
      <div className="ls-heading">Sign in</div>
      <span className="sub-text">or use your account</span>
      <input
        className="auth-input"
        type="email"
        required
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => onChange(e)}
      />
      <span className="error-text">Some Error text</span>
      <input
        className="auth-input"
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={(e) => onChange(e)}
        required
      />
      <span className="error-text">Some Error text</span>
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
