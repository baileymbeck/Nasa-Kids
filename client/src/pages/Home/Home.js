import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./style.css";
import ImgOfDay from "./imageofday.jpg";
import Button from "../../components/Button"
import Rocket from "./rocket.png";
import { Link } from "react-router-dom";

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
                            <Button text="Games"></Button>
                        </Link>
                    </Col>
                    <Col size="md-3">
                        <Link to="/collpics">
                            <Button text="Cool Pictures"></Button>
                        </Link>
                    </Col>
                    <Col size="md-3">
                        <Link to="/glossary">
                            <Button text="Glossary"></Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        );
    }    
}


export default Home;