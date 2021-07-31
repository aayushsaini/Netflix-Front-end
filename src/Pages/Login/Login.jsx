import React from 'react';
import "./login.scss";

const Login = () => {

    return (
        <div className="login">
            <div className="nav">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                 alt="Logo" 
                />
                <button className="sign-in-btn">Sign up</button>
            </div>
            <div className="container">
                <form>
                    <h1>Sign in</h1>
                    <input type="email" placeholder="Email or Phone number" />
                    <input type="password" placeholder="Password" />
                    <button className="login-button">Sign in</button>
                    <span>New to Netflix? <b>Sign up now</b></span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                        <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    )
}

export default Login
