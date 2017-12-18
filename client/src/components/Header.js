import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component {
	render(){
		return (
  <nav>
    <div className="nav-wrapper">
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li ><Link to='/'>Flash Card Pro</Link></li>
        <li ><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/stack_form'>Add New Card Stack</Link></li>       
      </ul>
      <a href="/auth/google" className="right">Login With Google</a>
    </div>
  </nav>

		);
	};
}

export default Header;