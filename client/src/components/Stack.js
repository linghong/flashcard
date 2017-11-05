import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

export const Stack = ({ stack: { title, cards } }) => {
  return (
    <div>
      <h3>{title}</h3>
      <br />
      {
        cards.map(card => {
          return (
            <Card key={card.id} card={card} />
          )
        })
      }
    </div>
  )
}

function mapStateToProps(state) {
  return { stack: state.stack };
}

export default connect(mapStateToProps, null)(Stack);