import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { addStack } from '../actions';

export class StackForm extends Component {
  constructor() {
    super();

    this.state = { 
      title: '',
      cards: []
    }
  }


  addCard() {
    const { cards } = this.state;

    cards.push({ id: cards.length, prompt: '', answer: '' });

    this.setState({ cards });
  }

  updateCardPart=(event, index, part)=>{
    const { cards } = this.state;
    
    cards[index][part] = event.target.value;

    this.setState({ cards });
  }

  addStack() {
    this.props.addStack(this.state);
  }


  saveForm=()=>{
    if(this.props.auth!==null && this.props.auth!==false){
      this.addStack();
    }
  }
  render() {
    return (
      <div>
        <h4>Create a New Stack</h4>
        <br />
        <Form inline>
          <FormGroup>
            <ControlLabel>Title:</ControlLabel>
            {' '}
            <FormControl onChange={event => this.setState({ title: event.target.value })} />
          </FormGroup>
          {
            this.state.cards.map((card, index) => {
              return (
                <div key={card.id}>
                  <br />
                  <FormGroup>
                    <ControlLabel>Prompt:</ControlLabel>
                    {' '}
                    <FormControl 
                      onChange={event => this.updateCardPart(event, index, 'prompt')} 
                    />
                    {' '}
                    <ControlLabel>Answer:</ControlLabel>
                    {' '}
                    <FormControl 
                      onChange={event => this.updateCardPart(event, index, 'answer')}
                    />
                  </FormGroup>
                </div>
              )
            })
          }
        </Form>
        <br />
        <button onClick={() => this.addCard()} className="btn waves-effect waves-light btn-large  cyan darken-2">Add Card</button>
        {' '}
        <button onClick={this.saveForm()} className="btn waves-effect waves-light btn-large  cyan darken-2" type="submit" name="action"> Save and Add the Stack</button>
      </div>
    )
  }
}

export default connect(null, { addStack })(StackForm);