import React, { useRef, useState } from 'react';
import "./register.scss";

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    };

    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    };

    return (
        <div className="register">
            <div className="nav">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                 alt="Logo" 
                />
                <button className="sign-in-btn">Sign in</button>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows &amp; more!</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    <center>
                        <span>Ready to watch?</span>
                        <br />
                        <div className="invite">
                            Enter your email to create/restart your premium membership
                        </div>
                    </center>
                </p>
                { !email ? 
                    <div className="input">
                        <input type="email" placeholder="Email address" ref={emailRef} />
                        <button className="register-button" onClick={handleStart} >JOIN NOW</button>
                    </div>:
                    <form className="input">
                        <input type="password" placeholder="Password" ref={passwordRef} />
                        <button className="register-button" onClick={handleFinish} >Get Premium</button>
                    </form>
                    
                }
            </div>
        </div>
    )
}

export default Register
