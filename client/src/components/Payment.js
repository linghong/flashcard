import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payment extends Component {
	render(){
		return (
			<StripeCheckout 
				name = "Add Payment "
				description = "$5 for 500 credits"
				amount = { 500 } //US cents
				token = { token =>this.props.handleToken(token) } // use Stripe token to do sth
				stripeKey = { process.env.REACT_APP_STRIPE_KEY }
			>
				<button className = "btn">
					Add Credits
				</button>
			</StripeCheckout>
		);
	}
}

export default connect(null, actions)(Payment);