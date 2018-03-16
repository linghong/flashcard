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
        return <a href="/auth/google">LOGIN WITH GOOGLE</a>;
      default:
        return [
        <li key = "1"><Link to='/dashboard'>DASHBOARD</Link></li>,
        <li key = "2"><Link to='/stackform'>ADD NEW CARD STACK</Link></li>,
        <li key = "3">CREDITS: { this.props.auth.credits } </li>,
        <li key = "4" style ={{margin: '0 10px'}}><Payment/> </li>,
        <li key = "5"><a href="/api/logout">LOGOUT</a></li>
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