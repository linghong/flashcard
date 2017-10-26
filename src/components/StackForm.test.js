import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { StackForm } from  './StackForm';

describe('StackForm', ()=>{
	const stackForm = shallow(<StackForm />);

	it('renders the form title', ()=>{
		expect(stackForm.find('h4').at(1).text()).toEqual('Create a New Stack');
	});

	it('renders a link home', ()=>{
		expect(stackForm.find('Link h4').text()).toEqual('Home');
	});

	it('renders a Form Component', ()=>{
		expect(stackForm.find('Form').exists()).toBe(true);
	});

	it('render a button to add a new card', ()=>{
		expect(stackForm.find('Button').at(0).props().children).toEqual('Add Card');
	});

	it ('render a button to submit the card', ()=>{
		expect(stackForm.find('Button').at(1).props().children).toEqual('Save and Add the Stack');
	});
})