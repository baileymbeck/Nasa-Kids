import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./style.css";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Planet from "./planet.png";
import Space from "./space.png";
import Earth from "./earth.png";

class ClickyHome extends Component {
    state={}

    render() {
        return (
            <Container>
                <Row>
                    <h1 className="top">Clicky Games</h1>
                </Row>
                <Row>
                    <Col size="md-4">
                        <Link to="/clickygame">
                            <Button text="Easy" image={Planet}></Button>
                        </Link>
                    </Col>
                    <Col size="md-4">
                        <Link to="/spaceshuffle">
                            <Button text="Medium" image={Space}></Button>
                        </Link>
                    </Col>
                    <Col size="md-4">
                        <Link to="/earthshuffle">
                            <Button text="Hard" image={Earth}></Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        );
    }    
}    
    
    export default ClickyHome;
