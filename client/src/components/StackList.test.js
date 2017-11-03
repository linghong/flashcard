import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { stacks } from '../data/fixtures';
import { StackList } from './StackList';

const props = { stacks };

describe('StackList', ()=>{
	const stackList = shallow(<StackList {...props} />);

	it('renders the correct number of the links', ()=>{
		expect(stackList.find('Link').length).toEqual(props.stacks.length);
	});
});

test('snapshot test for StackList', ()=>{
	const component = renderer.create(
		<MemoryRouter >
			<StackList {...props} />
		</MemoryRouter>
	);
	const tree=component.toJSON();
	expect(tree).toMatchSnapshot();
})