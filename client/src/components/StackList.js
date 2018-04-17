import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setStack, fetchStacks } from '../actions';

export class StackList extends Component {
  componentDidMount() {
    if (this.props.stacks.length === 0) this.props.fetchStacks();
  }

  render() {
    return (
      <div>
        <h3>List of Flash Cards</h3>
        {
          this.props.stacks.map(stack => {
            console.log(stack);
            return (
              <Link 
                to='/stack' 
                key={stack._id} 
                onClick={() => this.props.setStack(stack)}
              >
                <h4>{stack.title}</h4>
              </Link>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps({stacks}) {
  return { stacks };
}

export default connect(mapStateToProps, { setStack, fetchStacks })(StackList);