import React from 'react'

const SignUp = ({ setlogin }) => {
    return (
        <form className="ls-form" action="#">
        <div className="ls-heading">Create Account</div>
        <span className="sub-text">
          or use your email for registration
        </span>
        <input
          className="auth-input"
          type="text"
          placeholder="First Name"
        />
        <input
          className="auth-input"
          type="text"
          placeholder="Last Name"
        />
        <input
          className="auth-input"
          type="tel"
          placeholder="Phone No."
        />
        <input className="auth-input" type="email" placeholder="Email" />
        <input
          className="auth-input"
          type="password"
          placeholder="Password"
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
    )
}

export default SignUp
