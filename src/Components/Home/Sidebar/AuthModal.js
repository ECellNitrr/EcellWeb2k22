import React, { useState } from 'react'
import './authModal.css'
const AuthModal = ({ closeModal, modalOpen }) => {
    const showHideClassName = modalOpen ? "display-block" : "display-none"
    const [login, setlogin] = useState(false)
    const SignUpModal = () => {
        return (
            <>
                <div className='ls-modal-header'>
                    SignUp
                    <div>
                        <div className="modal-heading-line"></div>
                    </div>
                </div>
                <div class="modal-form">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" id="first-name" aria-describedby="first-name" placeholder="First Name" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="last-name" aria-describedby="last-name" placeholder="Last Name" />
                        </div>
                        <div class="form-group">
                            <input type="phone" class="form-control" id="telephone" aria-describedby="telephone" placeholder="Telephone" />
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="password" placeholder="Password" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <button class="btn btn-primary" onClick={(e) => { e.preventDefault(); setlogin(true) }}>Login</button>
                    </form>
                </div>
            </>
        )
    }
    const LoginModal = () => {
        return (
            <>
                <div className='ls-modal-header'>
                    Login
                    <div>
                        <div className="modal-heading-line"></div>
                    </div>
                </div>
                <div class="modal-form">
                    <form>
                        <div class="form-group">
                            <label for="Email Address">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <label for="Password">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Password" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <button class="btn btn-primary" onClick={(e) => { e.preventDefault(); setlogin(false) }}>SignUp</button>
                    </form>
                </div>
            </>
        )
    }
    return (
        <div className={`ls-modal ${showHideClassName}`}>
            <div className="ls-modal-content">
                {login ? LoginModal() : SignUpModal()}
            </div>
        </div>
    )
}

export default AuthModal
