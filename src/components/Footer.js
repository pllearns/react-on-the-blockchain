import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

export default class Footer extends Component {

  render() {
    return (
      <Row className="show-grid">
        <Col xs={6} md={4}><p>Please share Solidity/Web3 projects responsibly</p></Col>
        <Button bsStyle="info">Find out more about Ethereum</Button>
        <Col xs={6} md={4}></Col>

        <Col xsHidden md={4}></Col>
      </Row>
    )
  }
}