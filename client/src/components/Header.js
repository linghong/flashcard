import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payment from './Payment';

class Header extends Component {
  renderLog(){
    switch(this.props.auth){
      case null:
        return 'logging';
      case false:
        return <a href="/auth/google">Login With Google</a>;
      default:
        return [
        <li id="1"><Link to='/dashboard'>Dashboard</Link></li>,
        <li id ="2"><Link to='/stackform'>Add New Card Stack</Link></li>,
        <li id="3'"><Payment/> </li>,
        <li id="4"><a href="/api/logout">Logout</a></li>
        ];
    }
  }

	render(){
		return (
      <nav className="nav-wrapper">
          <ul id="nav-mobile" className="left">
            <li className="logo">
            <Link 
              to={ this.props.auth?'/dashboard':'/' }
              className="logo"
              >Vacubulary Pro</Link></li>           
          </ul>  
          <ul className="right"> 
            { this.renderLog() }       
          </ul>         
      </nav>
		);
	};
}

function mapStateToProps(state){
  return { auth: state.auth };
}

export default connect(mapStateToProps, null)(Header);