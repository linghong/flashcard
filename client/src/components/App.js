import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { fetchUser } from '../actions/index';
import Header from './Header';
import Dashboard from './Dashboard';
import Stack from './Stack';
import StackForm from './StackForm';
import Landing from './Landing';

import '../index.css';
import 'materialize-css/dist/css/materialize.min.css';
class App extends Component {
	componentDidMount(){
		this.props.fetchUser();
	}

	render(){
		console.log("app",this.props.auth);
		return (
			<div >
			<HashRouter>
				<div>
					<Header />
				     <Switch>
				        <Route exact path='/' component={ Landing } />
				        <Route path='/dashboard' component = { Dashboard } />
				        <Route path='/stack' component={ Stack } />
				        <Route path='/stack_form' component={ StackForm } />
				    </Switch>
		      	</div>
		    </HashRouter>
		    </div>
		);
	}
}

export default connect(null, { fetchUser })(App);