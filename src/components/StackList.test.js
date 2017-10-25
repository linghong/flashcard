import React from 'react';
import { shallow } from 'enzyme';
import { stacks } from '../data/fixtures';
import { StackList } from './StackList';

const props = { stacks };

describe('StackList', ()=>{
	const stackList = shallow(<StackList {...props} />);

	it('renders the correct number of the links', ()=>{
		expect(stackList.find('Link').length).toEqual(props.stacks.length);
	});
})