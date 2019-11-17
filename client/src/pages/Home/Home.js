import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./style.css";
import ImgOfDay from "./imageofday.js";
import Button from "../../components/Button"
import Rocket from "./rocket.png";
import { Link } from "react-router-dom";
import Reading from "./reading.png";
import Game from "./game.png";
import SpaceCollage from "./spacecollage.gif"

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

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <h2 className="text-center">Image of the day</h2>
                    </Col>
                </Row>
                <Row>
                    <img className="imageofday" src={this.state.result.url}/>
                </Row>
                <Row><h4 className="imageofdaytitle">{this.state.result.title}</h4></Row>
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