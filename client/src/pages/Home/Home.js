import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./style.css";
import ImgOfDay from "./imageofday.jpg"

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
            </Container>
        );
    }    
}


export default Home;