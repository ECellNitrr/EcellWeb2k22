import React, { useState } from 'react'
import './authModal.css'
const AuthModal = ({ closeModal, modalOpen }) => {
    const showHideClassName = modalOpen ? "display-block" : "display-none"
    const [login, setlogin] = useState(true)
    const  rightPanelActive = login ? 'right-panel-active' : '';
    const SignUpModal = () => {
        return (
            <>
                <div class={`container ${rightPanelActive}`} id="container">
                    <div class="form-container sign-up-container">
                        <form className="ls-form" action="#">
                            <div className="ls-heading">Create Account</div>
                            <span className="sub-text">or use your email for registration</span>
                            <input className="auth-input" type="text" placeholder="Name" />
                            <input className="auth-input" type="email" placeholder="Email" />
                            <input className="auth-input" type="password" placeholder="Password" />
                            <button className="ls-button">Sign Up</button>
                            <p className="mob-text">Already have an account</p>
                            <button onClick={(e) => {e.preventDefault(); setlogin(false)}} className="mob-button ls-button">Sign In</button>
                        </form>
                    </div>
                    <div class="form-container sign-in-container">
                        <form className="ls-form" action="#">
                            <div className="ls-heading">Sign in</div>
                            <span className="sub-text">or use your account</span>
                            <input className="auth-input" type="email" placeholder="Email" />
                            <input className="auth-input" type="password" placeholder="Password" />
                            <a className="ls-fpassword">Forgot your password?</a>
                            <button className="ls-button">Sign In</button>
                            <p className="mob-text">Do not have an account?</p>
                            <button onClick={(e) => {e.preventDefault(); setlogin(true)}} className="mob-button ls-button">Sign Up</button>
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <div className="ls-heading">Welcome Back!</div>
                                <p>
                                    To keep connected with us please login with your personal info
                                    </p>
                                <button onClick={(e) => {e.preventDefault(); setlogin(false)}} className="ghost ls-button" id="signIn">Sign In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <div className="ls-heading">Hello, Friend!</div>
                                <p>Enter your personal details and start journey with us</p>
                                <button onClick={(e) => {e.preventDefault(); setlogin(true)}} className="ghost ls-button" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className={`ls-modal ${showHideClassName}`}>
            <div className="ls-modal-content">
                {SignUpModal()}
            </div>
        </div>
    )
}

export default AuthModal
