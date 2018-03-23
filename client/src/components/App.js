import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
		return (
			<div >
			<BrowserRouter>
				<div>
					<Header />
				     <Switch>
				        <Route exact path='/' component={ Landing } />
				        <Route path='/dashboard' component = { Dashboard } />
				        <Route path='/stack' component={ Stack } />
				        <Route path='/stackform' component={ StackForm } />
				    </Switch>
		      	</div>
		    </BrowserRouter>
		    </div>
		);
	}
}

export default connect(null, { fetchUser })(App);