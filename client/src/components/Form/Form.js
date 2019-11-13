/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';

function Form({ userName, email, password, handleInputChange, handleFormSubmit }) {

    return (
        <form className="loginContainer">
            <div>
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

export default Form;
