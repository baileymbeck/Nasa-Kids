/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./form.css"

function Form({ userName, email, password, handleInputChange, handleFormSubmit }) {

    return (
        <form className="loginContainer">
            <div className="form-size">
                <label htmlFor="Query">Login</label>
                <br />
                <input
                    value={userName}
                    onChange={handleInputChange}
                    name="userName"
                    placeholder="Username"
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
                <Link to="/">
                <button
                    // disabled={!(userName && email && password)}
                    type="submit"
                // onClick={handleFormSubmit}
                >
                    Login
                    </button>
                    </Link>
            <Link to="/signup">
                <button className="signup">Signup</button>
            </Link>
            </div>
        </form >
    )
};

export default Form;
