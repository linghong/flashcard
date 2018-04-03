  import { FETCH_STACKS, ADD_STACK } from '../actions/index';

export default function stacks(state = [], action) {
  switch(action.type) {
    case FETCH_STACKS:
      return action.payload;
    case ADD_STACK:
      return [...state, {...action.stack, id: state.length }];
    default:
      return state;
  }
}
