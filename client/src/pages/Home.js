import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";

class Home extends Component {
    state={}

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <h1 className="text-canter">Image of the day</h1>
                    </Col>
                </Row>
            </Container>
        );
    }    
}


export default Home;