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
        <p><Button bsStyle="primary" onClick={(e) => {this.props.showAccount(e)}}>Get Account Number</Button></p>
        <p>{this.props.accountNumber}</p>
        <p><Button bsStyle="primary" onClick={(e) => this.props.getBalance(e)}>Check Balance</Button></p>
        <p>{this.props.balance}</p>
        <p><Button bsStyle="primary" onClick={(e) => {this.props.setWord(e)}}>Set Word</Button></p>
        <p><Button bsStyle="primary" onClick={(e) => {this.props.getWord(e)}}>Get Word</Button></p>
        <p>{this.props.word}</p>

      </Jumbotron>
    )
  }
}