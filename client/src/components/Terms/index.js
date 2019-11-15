import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./style.css";

function Terms(props) {
  return (
          <Row className="row">
              <Col size="md-2">
                  <div className="word" value={props.id}>
                      {props.term}
                    </div>
              </Col>
              <Col size="md-7">
                  <p className="defined">
                      {props.definition}
                  </p>
              </Col>
              <Col size="md-3">

              </Col>
          </Row>
  );
}

export default Terms;
