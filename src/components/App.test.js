import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe ('App', ()=>{
	const app = shallow(<App/>);
	it ('render the `Flashcard Pro` title', ()=>{
		expect(app.find('h2').text()).toEqual('Flashcard Pro');
	});

	it('renders the Stacklist', ()=>{
		expect(app.find('Connect(StackList)').exists()).toBe(true);
	});

	it('render a link to create anew stack', ()=>{
		expect(app.find('Link h4').text()).toEqual('Create a New Stack');
	});
})
