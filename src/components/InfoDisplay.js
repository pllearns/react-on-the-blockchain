import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

export default class InfoDisplay extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Jumbotron>
        <h5>Current Balance</h5>
        <p><Button bsStyle="primary">Check Gas</Button></p>
      </Jumbotron>
    )
  }
}