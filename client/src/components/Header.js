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

   renderDashboard(){
    switch(this.props.auth){
      case null:
        return '';
      case false:
        return "";
      default:
        return <Link to='/dashboard'>Dashboard</Link>;
    }
  }

	render(){
    console.log("header",this.props.auth);
		return (
      <nav className="nav-wrapper">
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li >
            <Link 
              to={ this.props.auth?'/dashboard':'/' }
              className="logo"
              >Flash Card Pro</Link></li>
            <li >{ this.renderDahboard() }</li>
            <li><Link to='/stackform'>Add New Card Stack</Link></li>
          </ul>  
          <ul className="right"> 
            <li className="right">{ this.renderLog() }</li>       
          </ul>         
      </nav>
		);
	};
}

function mapStateToProps(state){
  return { auth: state.auth };
}

export default connect(mapStateToProps, null)(Header);