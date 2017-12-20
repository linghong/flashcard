import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderLog(){
    switch(this.props.auth){
      case null:
        return 'logging';
      case false:
        return <a href="/auth/google">Login With Google</a>;
      default:
        return <a href="/api/logout">Logout</a>;
    }
  }

	render(){
    console.log("header",this.props.auth);
		return (
      <nav className="nav-wrapper">
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li >
            <Link 
              to={this.props.auth?'/stackform':'/'}
              className="logo"
              >Flash Card Pro</Link></li>
            <li ><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/stackform'>Add New Card Stack</Link></li>
          </ul>  
          <ul className="right"> 
            <li className="right">{this.renderLog()}</li>       
          </ul>         
      </nav>
		);
	};
}

function mapStateToProps(state){
  return { auth: state.auth };
}

export default connect(mapStateToProps, null)(Header);