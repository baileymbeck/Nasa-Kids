import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./style.css";
import Terms from "../../components/Terms";
import glossary from "./glossary.json";
import Atom from "./atom.png";
import Comet from "./comet.png";
import Empty from "./empty.png"


class Glossary extends Component {
    state={
        glossary
    }

    render() {
        return (
            <Container fluid>
                <Row className="row">
                    <Col size="md-9">
                        <div>{this.state.glossary.map(glossary => (
                            <Terms 
                                id={glossary.id}
                                term={glossary.term}
                                definition={glossary.definition}
                        />
                        ))}
                        </div>
                    </Col>
                    <Col size="md-3">
                        <Row>
                            <Col size="md-6"></Col>
                            <Col size="md-6">
                            <img className="glossimg" src={Atom}/>
                            </Col>
                        </Row>
                        <Row><Col size="md-12"><img src={Empty} /></Col></Row>
                        <Row>
                            <img className="glossimg" src={Comet}/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }    
}    
    
export default Glossary;
