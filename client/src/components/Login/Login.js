/* eslint-disable react/react-in-jsx-scope */
import React, {Component} from 'react';
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import "./login.css";

// import axios from 'axios';
// install axios in both package.json

// import ReactSignupLoginComponent from 'react-signup-login-component';

class LoginPage extends Component {
  state = {
    user: "",
    password: "",
    email: ""
  }
// axios.post(/)

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
          <form className="formContainer">
              <Input
                value={this.state.user}
                onChange={this.handleInputChange}
                name="user"
                placeholder="Username (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
               <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
              />
              <FormBtn
                disabled={!(this.state.user && this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>    
      )
    }
};

export default LoginPage
