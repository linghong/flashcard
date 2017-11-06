import { combineReducers } from 'redux';
import stack from './stack_reducer';
import stacks from './stacks_reducer';
//import auth from './auth_reducer';

export default combineReducers({ stack, stacks});