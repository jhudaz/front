import React from 'react';
import { Nav } from 'react-bootstrap';
import './header.css'
import logo from '../img/logo3.png';
function Header() {

  return (
    <header className="head">
      <img id="logo" src={logo} alt="logo" />
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link href="#formComponent">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#aboutComponent">About</Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
}

export default Header;
