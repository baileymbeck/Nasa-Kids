/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./signup.css"

function SignUpForm({ userName, email, password, handleInputChange, handleFormSubmit }) {

    return (
        <form className="signUpContainer">
            <div className="signup-size">
                <label htmlFor="Query">Sign Up</label>
                <br />
                <input
                    value={userName}
                    onChange={handleInputChange}
                    name="userName"
                    placeholder="Username"
                />
                < br />
                <input
                    value={email}
                    onChange={handleInputChange}
                    name="email"
                    placeholder="Email"
                />
                < br />
                <input
                    value={password}
                    onChange={handleInputChange}
                    name="password"
                    placeholder="Password"
                    type="password"
                />
                < br />
                <button
                    disabled={!(userName && email && password)}
                    type="submit"
                    onClick={handleFormSubmit}
                >
                    Signup
                    </button>
                <Link to="/login">
                    <button className="login">Login</button>
                </Link>
            </div>
        </form>
    )
};

export default SignUpForm;