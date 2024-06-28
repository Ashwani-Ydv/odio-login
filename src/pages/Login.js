import React from 'react';
import odio_logo from '../assets/odio_logo_blue.png';
import favi from '../assets/favicon.ico';
import './Login.css';

function Login() {
    return (
        <div className="login-container">
            <div className="welcome-section">
                <div className="logo-container">
                    <img src={favi} alt="favicon" />
                    <img src={odio_logo} alt="company logo" />
                </div>
                <p>Nice to see you again</p>
                <h1>Welcome Back</h1>
                <p>
                    Transform Customer Interactions with our AI-Driven Conversational Intelligence.
                </p>
            </div>
            <div className="login-section">
                <h2 className='login'>Login Account</h2>
                <form>
                    <input type="email" placeholder="Email ID" required />
                    <input type="password" placeholder="Password" required />
                    <div className="options">
                        <label>
                            <input type="checkbox" />
                            Keep me signed in
                        </label>
                        <a href="/#" style={{ color: '#0048fe' }}>Already a member?</a>
                    </div>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
