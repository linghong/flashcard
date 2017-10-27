import * as actions from './index';
import {stack, stacks }from '../data/fixtures';

describe('actions', ()=>{
	it('creates an action to set the main stack', ()=>{
		const expectedAction = {type: actions.SET_STACK,
			stack
		};
		expect(actions.setStack(stack)).toEqual(expectedAction);
	});
});