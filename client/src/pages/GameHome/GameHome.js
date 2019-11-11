import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./style.css";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

class GameHome extends Component {
    state={}

    render() {
        return (
            <Container>
                <Row>
                    <h1 className="top">Games</h1>
                </Row>
                <Row>
                    <Col size="md-3">
                        <Link to="/trivia">
                            <Button text="Trivia"></Button>
                        </Link>
                    </Col>
                    <Col size="md-3">
                        <Link to="/clickygame">
                            <Button text="Clicky Game"></Button>
                        </Link>
                    </Col>
                    <Col size="md-3">
                        <Link to="/hangman">
                            <Button text="Hangman"></Button>
                        </Link>
                    </Col>
                    <Col size="md-3">
                        <Link to="/matchgame">
                            <Button text="Match"></Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        );
    }    
}    
    
    export default GameHome;
