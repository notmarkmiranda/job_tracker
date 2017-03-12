import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

import { auth, googleAuthProvider } from './firebase'

const Header = (props) => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a>React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        {
          props.user
          ? <NavItem onClick={ () => auth.signOut() }>Sign Out</NavItem>
          : <NavItem onClick={ () => auth.signInWithPopup(googleAuthProvider) }>Sign In</NavItem>
        }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header;
