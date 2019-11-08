/* eslint-disable react/react-in-jsx-scope */
import React, {Component} from 'react';
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
// import axios from 'axios';
// install axios in both package.json

// import ReactSignupLoginComponent from 'react-signup-login-component';

class LoginPage extends Component {
  state = {
    user: "",
    email: ""
  }
// axios.post(/)

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
          <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
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
