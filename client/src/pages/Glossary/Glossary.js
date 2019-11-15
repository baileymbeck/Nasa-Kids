import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./style.css";
import Terms from "../../components/Terms"
import glossary from "./glossary.json"

class Glossary extends Component {
    state={
        glossary
    }

    render() {
        return (
            <Container fluid>
                <div>{this.state.glossary.map(glossary => (
                    <Terms 
                        id={glossary.id}
                        term={glossary.term}
                        definition={glossary.definition}
                />
                ))}
                </div>
            </Container>
        );
    }    
}    
    
export default Glossary;
