import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component {
	render(){
		return (
		  <Navbar inverse collapseOnSelect>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <Link to='/'>Flash Card Pro</Link>
		      </Navbar.Brand>
		      <Navbar.Toggle />
		    </Navbar.Header>
		    <Navbar.Collapse>
		      <Nav>
		      	<NavItem eventKey={1}><Link to='/dashboard'>Dashboard</Link></NavItem>
		        <NavItem eventKey={2}><Link to='/stack_form'>Add New Card Stack</Link></NavItem>
		        <NavDropdown eventKey={3} title="My Account" id="basic-nav-dropdown">
		          <MenuItem eventKey={3.1}>Profile</MenuItem>
		          <MenuItem eventKey={3.2}>Bill</MenuItem>
		          <MenuItem divider />
		          <MenuItem eventKey={3.3}>My Performace</MenuItem>
		        </NavDropdown>
		      </Nav>
		      <Nav pullRight>
		        <NavItem eventKey={1}><Link to='/auth/google'>Login With Google</Link></NavItem>
		      </Nav>
		    </Navbar.Collapse>
		  </Navbar>
		);
	};
}

export default Header;