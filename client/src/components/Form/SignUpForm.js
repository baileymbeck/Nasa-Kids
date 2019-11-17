/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./signup.css"
import API from "../../utils/API";
import "./signup.css";

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            email: "",

        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.saveUser();
    }

    saveUser = () => {
        API.saveUser({
            user: this.state.userName,
            email: this.state.email,
            password: this.state.password
        })
    }

    render() {
        return (
            <div>
                <form className="signUpContainer">
                    <div className="signup-size">
                        <label htmlFor="Query">Sign Up</label>
                        <br />
                        <div>
                            <input
                                value={this.state.userName}
                                onChange={this.handleInputChange}
                                name="userName"
                                placeholder="Username"
                            />
                        </div>
                        < br />
                        <div>
                        <input
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email"
                            placeholder="Email"
                        />
                        </div>
                        < br />
                        <input
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="password"
                            placeholder="Password"
                            type="password"
                        />
                        < br />
                        <button
                            disabled={!(this.state.userName && this.state.email && this.state.password)}
                            type="submit"
                            onClick={this.handleFormSubmit}
                        >
                            Signup
                    </button>
                        <Link to="/">
                        <button className="login">Login</button>
                        </Link>
                    </div>
                </form>
            </div>
        )
    }

}



export default SignUp;