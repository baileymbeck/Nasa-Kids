/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import "./signup.css"

function SignUpForm({ userName, email, password, handleInputChange, handleFormSubmit }) {

    return (
        <form className="signUpContainer">
            <div>
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
                />
                < br />
                <button
                    disabled={!(userName && email && password)}
                    type="submit"
                    onClick={handleFormSubmit}
                >
                    Submit Book
                    </button>
            </div>
        </form>
    )
};

export default SignUpForm;