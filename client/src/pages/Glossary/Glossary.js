import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./style.css";
import Terms from "../../components/Terms";
import glossary from "./glossary.json";
import Atom from "./atom.png";
import Comet from "./comet.png";
import Empty from "./empty.png";
import Dwarf from "./dwarf.png";
import Galaxy from "./galaxy.png";
import GPS from "./gps.png";
import Meteoroid from "./meteoroid.png";
import Molecule from "./molecule.png";
import Orbit from "./orbit.png";
import Satellite from "./satellite.png";
import Spacecraft from "./spacecraft.png"


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
                                <img className="topimg" src={Atom}/>
                            </Col>
                        </Row>
                        <Row><Col size="md-12"><img src={Empty} /></Col></Row>
                        <Row>
                            <Col size="md-1"></Col>
                            <Col size="md-11">
                                <img className="glossimg" src={Comet}/>
                            </Col>
                        </Row>
                        <Row><Col size="md-12"><img src={Empty} /></Col></Row>
                        <Row><Col size="md-12"><img className="halfsize" src={Empty} /></Col></Row>
                        <Row>
                            <Col size="md-6"></Col>
                            <Col size="md-6">
                                <img className="glossimg" src={Dwarf}/>
                            </Col>
                        </Row>
                        <Row><Col size="md-12"><img src={Empty} /></Col></Row>
                        <Row><Col size="md-12"><img className="halfsize" src={Empty} /></Col></Row>
                        <Row>
                            <Col size="md-1"></Col>
                            <Col size="md-11">
                                <img className="glossimg" src={Galaxy}/>
                            </Col>
                        </Row>
                        <Row><Col size="md-12"><img src={Empty} /></Col></Row>
                        <Row><Col size="md-12"><img src={Empty} /></Col></Row>
                        <Row>
                            <Col size="md-3"></Col>
                            <Col size="md-9">
                                <img className="gps" src={GPS}/>
                            </Col>
                        </Row>
                        <Row><Col size="md-12"><img src={Empty} /></Col></Row>
                        <Row><Col size="md-12"><img src={Empty} /></Col></Row>
                        <Row><Col size="md-12"><img className="halfsize" src={Empty} /></Col></Row>
                        <Row>
                            <Col size="md-2"></Col>
                            <Col size="md-10">
                                <img className="glossimg" src={Meteoroid}/>
                            </Col>
                        </Row>
                        <Row><Col size="md-12"><img src={Empty} /></Col></Row>
                        <Row><Col size="md-12"><img className="halfsize" src={Empty} /></Col></Row>
                        <Row>
                            <Col size="md-6"></Col>
                            <Col size="md-6">
                                <img className="glossimg" src={Molecule}/>
                            </Col>
                        </Row>
                        <Row><Col size="md-12"><img src={Empty} /></Col></Row>
                        <Row><Col size="md-12"><img src={Empty} /></Col></Row>
                        <Row>
                            <Col size="md-3"></Col>
                            <Col size="md-9">
                                <img className="glossimg" src={Orbit}/>
                            </Col>
                        </Row>
                        <Row><Col size="md-12"><img src={Empty} /></Col></Row>
                        <Row><Col size="md-12"><img src={Empty} /></Col></Row>
                        <Row>
                            <Col size="md-1"></Col>
                            <Col size="md-11">
                                <img className="gps" src={Satellite}/>
                            </Col>
                        </Row>
                        <Row><Col size="md-12"><img src={Empty} /></Col></Row>
                        <Row><Col size="md-12"><img src={Empty} /></Col></Row>
                        <Row>
                        <Col size="md-3"></Col>
                            <Col size="md-9">
                                <img className="spaceship" src={Spacecraft}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }    
}    
    
export default Glossary;
