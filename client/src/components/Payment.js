import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payment extends Component {
	render(){
		return (
			<StripeCheckout 
				amount = { 500 } //US cents
				token = { token =>console.log(token) } // use Stripe token to do sth
				stripeKey = { process.env.REACT_APP_STRIPE_KEY }
			/>
		);
	}
}

export default Payment;