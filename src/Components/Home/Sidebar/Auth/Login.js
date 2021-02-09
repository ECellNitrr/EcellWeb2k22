import React, { useState } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../../../actions/authActions";
import faxios from "../../../../axios";

const Login = ({ setlogin, setForgotPassword, updateUser }) => {
  //Create State for the component
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState("");
  const [formState, setFormState] = useState({
    error: false,
    loading: false,
  });

  //Destructure state
  const { email, password } = formData;
  const { error, loading } = formState;

  //Onchange function
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  //Submit Handler
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

    if (password.length < 8) {
      setFormError("Password should have minimum 8 characters");
      return;
    }

    loginUser(email, password);
  };
  //The Login function
  const loginUser = (email, password) => {
    setFormState({
      ...formState,
      loading: true,
    });
    //Login reuest
    faxios()
      .post("/users/login/", {
        email,
        password,
      })
      .then((response) => {
        let data = response.data;
        console.log(data);
        //Update user in state
        updateUser({
          ...data,
          loggedin: true,
        });

        //@TODO
        //Not verified email OTP fill

        //Bring back to default state
        setFormState({
          ...formState,
          loading: false,
        });
        setFormData({
          email: "",
          password: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setFormState({
          ...formState,
          loading: false,
          error: "Please Provide Valid Credentials",
        });
        setTimeout(() => {
          setFormState({
            ...formState,
            loading: false,
            error: false,
          });
        }, 3000);
      });
  };
  return (
    <form className="ls-form" onSubmit={(e) => onSubmit(e)}>
      {!loading && error && (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <div className="ls-heading">Sign in</div>
      <span className="sub-text">or use your account</span>
      <div className="error-text">{formError && formError}</div>
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

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { updateUser })(Login);
