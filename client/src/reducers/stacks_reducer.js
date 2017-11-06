import { LOAD_STACKS, ADD_STACK } from '../actions';

export default function stacks(state = [], action) {
  switch(action.type) {
    case LOAD_STACKS:
      return action.stacks;
    case ADD_STACK:
      return [...state, {...action.stack, id: state.length }];
    default:
      return state;
  }
}
