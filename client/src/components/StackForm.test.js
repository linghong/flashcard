import React, { Component } from 'react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import { StackForm } from  './StackForm';
import renderer from 'react-test-renderer';

const chTitle = 'change title';
const chPrompt ='change prompt';
const chAnswer = 'change answer';

describe('StackForm', ()=>{
	const stackForm = shallow(<StackForm />);

	const changeFormControl=(index, val)=>{
		stackForm.find('FormControl').at(index).simulate('change', {target: {value: val}});
	}

	describe('it render the structure as expected', ()=>{
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
	});
	
	describe('and updating the title', ()=>{
		beforeEach(()=>{
			changeFormControl(0, chTitle);
		});
		it('update the title in the state', ()=>{			
			expect(stackForm.state().title).toEqual(chTitle);
		});
	});

	describe('when adding a new card', ()=>{
		beforeEach(()=>{
			stackForm.find('Button').at(0).simulate('click');
		});

		afterEach(()=>{
			stackForm.setState({cards:[]});
		});

		it('add a new card to the state', ()=>{
			expect(stackForm.state().cards.length).toEqual(1);
		});

		it('renders the prompt section', ()=>{
			expect(stackForm.find('ControlLabel').at(1).props().children).toEqual('Prompt:');
		}); 

		it('renders the Answer section', ()=>{
			expect(stackForm.find('ControlLabel').at(2).props().children).toEqual('Answer:');
		});

		describe('and updating the card prompt', ()=>{
			beforeEach(()=>{ 
				changeFormControl(1, chPrompt); 
			});
			it('update the prompt in the state', ()=>{
				console.log(stackForm.state());
				expect(stackForm.state().cards[0].prompt).toEqual(chPrompt);
			});
		});

		describe('and updating the card answer', ()=>{
			 beforeEach(()=>{
			 	changeFormControl(2, chAnswer);
			 });

			 it('updae the answer in the state', ()=>{
			 	expect(stackForm.state().cards[0].answer).toEqual(chAnswer);
			 });
		});
	});
});

test('snapshot test for StackForm', ()=>{
	const component = renderer.create(
	    <MemoryRouter >
	      <StackForm />
	    </MemoryRouter>
  	);	
	const tree=component.toJSON();
	expect(tree).toMatchSnapshot();

});