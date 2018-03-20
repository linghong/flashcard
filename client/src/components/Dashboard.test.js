import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';

import { shallow } from 'enzyme';
import Dashboard from './Dashboard';
import '../setupTests.js';

describe ('Dashboard', ()=>{
	const dashboard = shallow(<Dashboard/>);
	it('renders the Stacklist', ()=>{
		expect(dashboard.find('Connect(StackList)').exists()).toBe(true);
	});

	it('render a link to create a new stack', ()=>{
		expect(dashboard.find('Link h4').text()).toEqual('Create a New Card Stack');
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


