import axios from 'axios';

export const SET_STACK = 'SET_STACK';
export const LOAD_STACKS = 'LOAD_STACKS';
export const ADD_STACK = 'ADD_STACK';

export const FETCH_USER= 'FETCH_USER';

export const fetchUser =()=>{
  return function(dispatch){
    axios.get('/api/current_user')
      .then(res=>dispatch({
        type: FETCH_USER, payload: res
      }));
  };
};

export function setStack(stack) {
  return {
    type: SET_STACK,
    stack
  };
}

export function loadStacks(stacks) {
  return {
    type: LOAD_STACKS,
    stacks
  }
}

export function addStack(stack) {
  return {
    type: ADD_STACK,
    stack
  }
}