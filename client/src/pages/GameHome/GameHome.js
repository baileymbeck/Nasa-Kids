import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./style.css";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Trivia from "./trivia.png";
import Click from "./clickgame.png";
import Hangman from "./hangman.png";
import Match from "./match.png"

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
                            <Button text="Trivia" image={Trivia}></Button>
                        </Link>
                    </Col>
                    <Col size="md-3">
                        <Link to="/clickyhome">
                            <Button text="Clicky Game" image={Click}></Button>
                        </Link>
                    </Col>
                    <Col size="md-3">
                        <Link to="/hangman">
                            <Button text="Earth Protector" image={Hangman}></Button>
                        </Link>
                    </Col>
                    <Col size="md-3">
                        <Link to="/matchgame">
                            <Button text="Match" image={Match}></Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        );
    }    
}    
    
    export default GameHome;
