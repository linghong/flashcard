import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';

import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

describe ('Dashboard', ()=>{
	const dashboard = shallow(<Dashboard/>);
	it ('render the `Flashcard Pro` title', ()=>{
		expect(dashboard.find('h2').text()).toEqual('Flashcard Pro');
	});

	it('renders the Stacklist', ()=>{
		expect(dashboard.find('Connect(StackList)').exists()).toBe(true);
	});

	it('render a link to create anew stack', ()=>{
		expect(dashboard.find('Link h4').text()).toEqual('Create a New Stack');
	});
});

test('snapshot test for Dashboard', ()=>{
	const store = createStore(rootReducer);
	const component =renderer.create(
		<Provider store={store}>
		<MemoryRouter>
			<Dashboard />
		</MemoryRouter>
		</Provider>
	);
	const tree=component.toJSON();
	expect(tree).toMatchSnapshot();
})


