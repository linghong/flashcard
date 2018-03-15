import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk  from 'redux-thunk';
import { Provider } from 'react-redux';

import rootReducer from './reducers/index';
import App from './components/App';

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

console.log('STRIPE KEY', process.env.REACT_APP_STRIPE_KEY);
console.log(process.env.NODE_ENV);
