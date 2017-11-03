import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import { Stack } from './Stack';
import { stack } from '../data/fixtures';
import renderer from 'react-test-renderer';

const props = { stack };

describe('Stack', ()=> {
	const stack =shallow(<Stack {...props} />);

	it('renders the title', ()=>{
		expect(stack.find('h3').text()).toEqual(props.stack.title);
	});

	it('renders the Link home',()=>{
		expect(stack.find('Link h4').text()).toEqual('Home');
	});

	it('renders the correct number of cards', ()=>{
		expect(stack.find('Card').length).toEqual(props.stack.cards.length);
	});
});

test('snapshot test for Stack', ()=>{
	const component = renderer.create(
		<MemoryRouter >
			<Stack {...props} />
		</MemoryRouter >
	);
	const tree=component.toJSON();
	expect(tree).toMatchSnapshot();
});