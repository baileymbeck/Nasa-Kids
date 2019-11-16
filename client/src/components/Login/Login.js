/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import Form from "../Form/Form";
// import SignInForm from "../Form/SignInForm";
import API from "../../utils/API";
import "./login.css";

class LoginPage extends Component {
  state = {
    userName: "",
    password: "",
    email: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getUsers = () => {
    API.getUsers(this.state.q)
      .then(res =>
        this.setState({
          users: res.data
        })
      )
      .catch(() =>
        this.setState({
          users: [],
          message: "No New Users Found, Try a Different Query"
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // this.getUsers();
  
    this.saveUser()
  }
  

  handleUserSave = id => {
    const user = this.state.users.find(user => user.id === id);

    API.saveUser({
      user: "",
      email: "",
      password: ""
    }).then(() => this.getUsers());
  };

  render() {
    return (
        <Form
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
    )
  }
};

export default LoginPage
