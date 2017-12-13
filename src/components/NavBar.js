import React, { Component } from 'react';
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';

export default class NavBar extends Component {

  render() {
    return (
      <div>
        <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
          <NavItem eventKey="1" href="/home">React Ethereum Access</NavItem>
          <NavDropdown eventKey="4" title="Projects" id="nav-dropdown">
            <MenuItem eventKey="4.1">Accounts</MenuItem>
            <MenuItem eventKey="4.2">Data</MenuItem>
            <MenuItem eventKey="4.3">Mission</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4.4">Signup/Login</MenuItem>
          </NavDropdown>
        </Nav>
      </div>
    )
  }
}