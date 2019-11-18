import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./style.css";
import ImgOfDay from "./imageofday.js";
import Button from "../../components/Button"
import Rocket from "./rocket.png";
import { Link } from "react-router-dom";
import Reading from "./reading.png";
import Game from "./game.png";
import SpaceCollage from "./spacecollage.gif";
import Image from "./imageofday.jpg"

class Home extends Component {
    state={
        result: {}
    };

    componentDidMount() {
        this.getImage();
    }
    
    getImage() {
        ImgOfDay.search()
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };
    // {this.state.result.url}
    // {this.state.result.title}

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <h2 className="text-center">Image of the day</h2>
                    </Col>
                </Row>
                <Row>
                    <img className="imageofday" src={Image}/>
                </Row>
                <Row><h4 className="imageofdaytitle">Hubble Spots a Curious Spiral</h4></Row>
                <Row>
                    <Col size="md-3">
                        <Link to="/scores">
                            <Button text="My Scores" image={Rocket}></Button>
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