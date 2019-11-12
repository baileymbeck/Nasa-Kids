import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./style.css";
import ImgOfDay from "./imageofday.jpg";
import Button from "../../components/Button"
import Rocket from "./rocket.png";
import { Link } from "react-router-dom";
import Reading from "./reading.png";
import Game from "./game.png";
import SpaceCollage from "./spacecollage.gif"

class Home extends Component {
    state={}

    render() {
        return (
            <Container>
                <Row>
                    <img className="imageofday" src={ImgOfDay}/>
                </Row>
                <Row>
                    <Col size="md-12">
                        <h1 className="text-center">Image of the day</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-3">
                        <Link to="/highscore">
                            <Button text="My High Scores" image={Rocket}></Button>
                        </Link>
                    </Col>
                    <Col size="md-3">
                        <Link to="/gamehome">
                            <Button text="Games" image={Game}></Button>
                        </Link>
                    </Col>
                    <Col size="md-3">
                        <Link to="/collpics">
                            <Button text="Cool Pictures" image={SpaceCollage}></Button>
                        </Link>
                    </Col>
                    <Col size="md-3">
                        <Link to="/glossary">
                            <Button text="Glossary" image={Reading}></Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        );
    }    
}


export default Home;