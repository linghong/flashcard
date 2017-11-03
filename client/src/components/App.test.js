import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';

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
});

test('snapshot test for App', ()=>{
	const store = createStore(rootReducer);
	const component =renderer.create(
		<Provider store={store}>
		<MemoryRouter>
			<App />
		</MemoryRouter>
		</Provider>
	);
	const tree=component.toJSON();
	expect(tree).toMatchSnapshot();
})


