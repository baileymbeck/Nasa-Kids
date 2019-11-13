/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import SignUpForm from "../Form/SignUpForm";
import API from "../../utils/API";

class SignUpPage extends Component {
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

  // getUsers = () => {
  //   API.getUsers(this.state.q)
  //     .then(res =>
  //       this.setState({
  //         users: res.data
  //       })
  //     )
  //     .catch(() =>
  //       this.setState({
  //         users: [],
  //         message: "No New Users Found, Try a Different Query"
  //       })
  //     );
  // };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getUsers();
  };

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
        <SignUpForm
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
      />
    )
  }
};

export default SignUpPage
