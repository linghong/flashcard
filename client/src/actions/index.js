import axios from 'axios';

export const SET_STACK = 'SET_STACK';
export const FETCH_STACKS = 'FETCH_STACKS';
export const ADD_STACK = 'ADD_STACK';

export const FETCH_USER = 'FETCH_USER';


//redux-thunk
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({
      type: FETCH_USER, 
      payload: res.data
  });
};

export const handleToken = token => async dispatch =>{
  const res = await axios.post('/api/stripe', token);
  dispatch({
    type: FETCH_USER, 
    payload: res.data
  });
}

export const saveStack = (values, history) => async dispatch => {
  const res = await axios.post('/api/stack', values);
  history.push('/dashboard');
  dispatch({ 
    type: FETCH_USER, 
    payload: res.data 
  });
}

export function setStack(stack) {
  return {
    type: SET_STACK,
    stack
  };
}

export const fetchStacks = () =>async dispatch => {
  const res = await axios.get('/api/stack');
  dispatch({
     type: FETCH_STACKS,
    payload: res.data
  });
}

export function addStack(stack) {
  return {
    type: ADD_STACK,
    stack
  }
}

