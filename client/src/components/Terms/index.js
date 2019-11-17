import React from "react";
import { Col, Row } from "../../components/Grid";
import "./style.css";

function Terms(props) {
  return (
    <Row>
        <Col size="md-2">
            <div className="word" value={props.id}>
                {props.term}
            </div>
        </Col>
        <Col size="md-10">
            <p className="defined">
                {props.definition}
            </p>
        </Col>
    </Row>
  );
}

export default Terms;
