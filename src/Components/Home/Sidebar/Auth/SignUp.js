import React, { useState } from "react";

const SignUp = ({ setlogin }) => {
  //Create State for the component
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    contact: "",
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState("");
  const [formState, setFormState] = useState({
    error: false,
    loading: false,
  });

  //Destructure state
  const { email, password, lname, fname, contact } = formData;
  const { error, loading } = formState;
  //Onchange
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
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

    if (password.length < 8) {
      setFormError("Password should have minimum 8 characters");
      return;
    }

    if (fname.length < 1) {
      setFormError("First Name is required");
      return;
    }

    if (lname.length < 1) {
      setFormError("Last Name is required");
      return;
    }

    if (contact.length < 1) {
      setFormError("Contact is required");
      return;
    }

    const verify_contact = (contact) => {
      let re = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
      return re.test(String(contact));
    };

    if (verify_contact(contact) === false) {
      setFormError("Contact is Invalid");
      return;
    }

  };

  return (
    <form className="ls-form" onSubmit={(e) => onSubmit(e)}>
      <div class="alert alert-danger" role="alert">
        {"Network Error"}
      </div>
      <div className="ls-heading">Create Account</div>
      <span className="sub-text">or use your email for registration</span>
      <div className="error-text">{"Some Error occured"}</div>
      <input
        className="auth-input"
        type="text"
        placeholder="First Name"
        name="fname"
        value={fname}
        onChange={(e) => onChange(e)}
      />
      <input
        className="auth-input"
        type="text"
        placeholder="Last Name"
        name="lname"
        value={lname}
        onChange={(e) => onChange(e)}
      />
      <input
        className="auth-input"
        type="tel"
        placeholder="Mobile Number"
        pattern="[0-9]{10}"
        name="contact"
        value={contact}
        onChange={(e) => onChange(e)}
      />
      <input
        className="auth-input"
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => onChange(e)}
      />
      <input
        className="auth-input"
        type="password"
        placeholder="Password"
        name="password"
        minLength="8"
        value={password}
        onChange={(e) => onChange(e)}
      />
      <button className="ls-button">Sign Up</button>
      <p className="mob-text">Already have an account</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          setlogin(false);
        }}
        className="mob-button ls-button"
      >
        Sign In
      </button>
    </form>
  );
};

export default SignUp;
