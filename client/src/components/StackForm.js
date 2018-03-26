import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { addStack, saveStack } from '../actions';
import { Link } from 'react-router-dom';

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

  addStack() {
    this.props.addStack(this.state);
    if(this.props.auth!==null && this.props.auth!==false){
     this.props.saveStack(this.state);
     console.log("state", this.state);
    }
  }

  updateCardPart = (event, index, part) => {
    const { cards } = this.state;
    
    cards[index][part] = event.target.value;

    this.setState({ cards });
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
        <div>
        <button onClick={() => this.addCard()} className="btn waves-effect waves-light btn-large  cyan darken-1">Add Card</button>
        </div>
        <div className="right">
        <Link to="/dashboard" className="btn waves-effect waves-light btn-large  cyan darken-3 left">Cancel</Link>
        <button onClick={()=>this.addStack()} className="btn waves-effect waves-light btn-large  cyan darken-3 right" type="submit" name="action"> Save and Add the Stack</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { addStack, saveStack })(StackForm);